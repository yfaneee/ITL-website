import type { Locale } from "./config";

/**
 * Prefix an internal path with the active locale. Anchors, absolute URLs and
 * protocol links (mailto:, tel:) are passed through untouched, so CMS-entered
 * link targets can be written the natural way: "/contact", "#quote",
 * "https://…".
 */
export function localePath(locale: Locale, href: string | undefined): string {
  if (!href) return `/${locale}`;
  if (/^(https?:|mailto:|tel:|#)/.test(href)) return href;
  if (!href.startsWith("/")) return href;
  return `/${locale}${href === "/" ? "" : href}`;
}

/** Swap the locale segment of the current pathname, for the language switcher. */
export function switchLocalePath(
  pathname: string,
  locales: readonly string[],
  target: Locale
): string {
  const segments = pathname.split("/");
  if (segments.length > 1 && locales.includes(segments[1])) {
    segments[1] = target;
    return segments.join("/") || `/${target}`;
  }
  return `/${target}${pathname === "/" ? "" : pathname}`;
}
