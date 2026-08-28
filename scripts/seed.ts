/**
 * Pushes the bundled seed content — every page, both languages, and all the
 * images under /public — into a Sanity dataset.
 *
 *   npm run seed -- --dry-run   validate locally, no credentials needed
 *   npm run seed                upload for real
 *
 * Safe to re-run: documents are created with fixed IDs and replaced wholesale,
 * and each image file is uploaded only once per run.
 */
import { createClient } from "@sanity/client";
import { existsSync, readFileSync } from "node:fs";
import { basename, extname, join } from "node:path";

import { aboutSeed } from "@/content/about";
import { airSeed } from "@/content/air";
import { contactSeed } from "@/content/contact";
import { homeSeed } from "@/content/home";
import { portSeed } from "@/content/port";
import { roadSeed } from "@/content/road";
import { siteSettingsSeed } from "@/content/site";
import { testimonialsSeed } from "@/content/testimonials";

const DRY_RUN = process.argv.includes("--dry-run");
const PUBLIC_DIR = join(process.cwd(), "public");

/** Minimal .env.local reader — this script runs outside the Next.js runtime. */
function loadEnv() {
  const path = join(process.cwd(), ".env.local");
  if (!existsSync(path)) return;

  for (const line of readFileSync(path, "utf8").split("\n")) {
    const match = line.match(/^\s*([\w.-]+)\s*=\s*(.*)?\s*$/);
    if (!match) continue;
    const value = (match[2] ?? "").replace(/^["']|["']$/g, "").trim();
    if (!process.env[match[1]]) process.env[match[1]] = value;
  }
}

loadEnv();

const documents = [
  siteSettingsSeed,
  homeSeed,
  aboutSeed,
  airSeed,
  roadSeed,
  portSeed,
  contactSeed,
  ...testimonialsSeed,
];

const MIME_TYPES: Record<string, string> = {
  ".webp": "image/webp",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
};

/** Every distinct /public path referenced anywhere in the seed content. */
function collectImagePaths(value: unknown, found = new Set<string>()) {
  if (Array.isArray(value)) {
    value.forEach((item) => collectImagePaths(item, found));
  } else if (value !== null && typeof value === "object") {
    const record = value as Record<string, unknown>;
    if (typeof record._localPath === "string") found.add(record._localPath);
    Object.values(record).forEach((item) => collectImagePaths(item, found));
  }
  return found;
}

/** Swap every `_localPath` marker for a real Sanity asset reference. */
function attachAssets(value: unknown, assets: Map<string, string>): unknown {
  if (Array.isArray(value)) {
    return value.map((item) => attachAssets(item, assets));
  }
  if (value === null || typeof value !== "object") return value;

  const record = value as Record<string, unknown>;
  const result: Record<string, unknown> = {};

  for (const [key, item] of Object.entries(record)) {
    if (key === "_localPath") continue;
    result[key] = attachAssets(item, assets);
  }

  if (typeof record._localPath === "string") {
    const assetId = assets.get(record._localPath);
    if (assetId) {
      result._type = "siteImage";
      result.asset = { _type: "reference", _ref: assetId };
    }
  }

  return result;
}

async function main() {
  const paths = [...collectImagePaths(documents)];

  const missing = paths.filter((p) => !existsSync(join(PUBLIC_DIR, p)));
  if (missing.length > 0) {
    console.error("Missing image files under /public:");
    missing.forEach((p) => console.error(`  ${p}`));
    process.exit(1);
  }

  console.log(
    `Found ${documents.length} documents referencing ${paths.length} images.`
  );

  if (DRY_RUN) {
    console.log("\nDocuments that would be written:");
    documents.forEach((doc) => console.log(`  ${doc._type.padEnd(16)} ${doc._id}`));
    console.log("\nDry run complete — nothing was uploaded.");
    return;
  }

  const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
  const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
  const token = process.env.SANITY_WRITE_TOKEN;

  if (!projectId || !token) {
    console.error(
      "Missing credentials. Add NEXT_PUBLIC_SANITY_PROJECT_ID and a write-scoped\n" +
        "SANITY_WRITE_TOKEN to .env.local, then run this again.\n" +
        "See CMS-SETUP.md for how to create the token."
    );
    process.exit(1);
  }

  const client = createClient({
    projectId,
    dataset,
    token,
    apiVersion: "2024-10-01",
    useCdn: false,
  });

  // Upload images first so documents can reference them.
  const assets = new Map<string, string>();
  for (const [i, path] of paths.entries()) {
    const file = join(PUBLIC_DIR, path);
    const extension = extname(path).toLowerCase();
    const asset = await client.assets.upload("image", readFileSync(file), {
      filename: basename(path),
      contentType: MIME_TYPES[extension] ?? "application/octet-stream",
    });
    assets.set(path, asset._id);
    console.log(`  [${i + 1}/${paths.length}] uploaded ${path}`);
  }

  console.log("\nWriting documents...");
  let transaction = client.transaction();
  for (const doc of documents) {
    transaction = transaction.createOrReplace(
      attachAssets(doc, assets) as { _id: string; _type: string }
    );
  }
  await transaction.commit();

  documents.forEach((doc) => console.log(`  wrote ${doc._id}`));
  console.log(
    `\nDone. Open /studio to edit, and remove SANITY_WRITE_TOKEN from .env.local\n` +
      `if you do not plan to re-seed.`
  );
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
