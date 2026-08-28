import imageUrlBuilder from "@sanity/image-url";

import { dataset, projectId, sanityEnabled } from "./env";

/** An image that may come from Sanity, or from the bundled seed content. */
export type SiteImage = {
  _type?: "siteImage";
  /** Path under /public — used by seed content and as a fallback. */
  _localPath?: string;
  alt?: string;
  asset?: { _ref?: string; _type?: string; url?: string };
  hotspot?: { x: number; y: number };
};

const builder = sanityEnabled ? imageUrlBuilder({ projectId, dataset }) : null;

/**
 * Resolve an image to a URL, whichever source it came from.
 * Returns null when there is no usable image so callers can skip rendering.
 */
export function imageUrl(
  image: SiteImage | null | undefined,
  options?: { width?: number; height?: number; quality?: number }
): string | null {
  if (!image) return null;

  if (builder && image.asset?._ref) {
    // Sanity's transformation pipeline does not apply to SVGs; requesting one
    // returns the raw file, so ask for it directly instead.
    if (image.asset._ref.endsWith("-svg")) {
      return builder.image(image).url();
    }

    let url = builder.image(image).auto("format").fit("max");
    if (options?.width) url = url.width(options.width);
    if (options?.height) url = url.height(options.height);
    url = url.quality(options?.quality ?? 80);
    return url.url();
  }

  return image._localPath ?? image.asset?.url ?? null;
}

/** Object-position value honouring a Sanity hotspot, for `fill` images. */
export function imagePosition(image: SiteImage | null | undefined): string {
  if (!image?.hotspot) return "center";
  return `${image.hotspot.x * 100}% ${image.hotspot.y * 100}%`;
}
