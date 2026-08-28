export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "";
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";
export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? "2024-10-01";

/**
 * The site is designed to render without a Sanity project configured: every
 * page falls back to the bundled seed content. This flag is what switches
 * the data source over once credentials are present.
 */
export const sanityEnabled = projectId.length > 0;
