import type { Locale } from "@/i18n/config";

import { client } from "./client";
import { localize } from "./localize";

/** How long a page may serve cached CMS content before revalidating. */
const REVALIDATE_SECONDS = 60;

type FetchOptions = {
  /** Cache tag, so the revalidate webhook can purge just this content. */
  tag: string;
};

async function query<T>(
  groq: string,
  params: Record<string, unknown>,
  options: FetchOptions
): Promise<T | null> {
  if (!client) return null;

  try {
    return await client.fetch<T>(groq, params, {
      next: { revalidate: REVALIDATE_SECONDS, tags: [options.tag] },
    });
  } catch (error) {
    // A CMS outage must not take the site down: fall through to seed content.
    console.error(`[sanity] query failed for "${options.tag}"`, error);
    return null;
  }
}

/**
 * Fetch a singleton page document, localised, falling back to bundled seed
 * content when Sanity is unconfigured, unreachable, or the document is absent.
 */
export async function getDocument<T>(
  type: string,
  locale: Locale,
  fallback: unknown
): Promise<T> {
  const data = await query<unknown>(
    `*[_type == $type][0]`,
    { type },
    { tag: type }
  );

  return localize<T>(data ?? fallback, locale);
}

/** Fetch an ordered collection of documents, with the same fallback behaviour. */
export async function getCollection<T>(
  type: string,
  locale: Locale,
  fallback: unknown[]
): Promise<T[]> {
  const data = await query<unknown[]>(
    `*[_type == $type] | order(coalesce(order, 0) asc, _createdAt asc)`,
    { type },
    { tag: type }
  );

  const source = data && data.length > 0 ? data : fallback;
  return localize<T[]>(source, locale);
}
