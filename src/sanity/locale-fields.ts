import type { Locale } from "@/i18n/config";

/** A field that carries one value per locale. */
export type LocaleString = {
  _type: "localeString" | "localeText";
} & Partial<Record<Locale, string>>;

/** Build a single-line translated field. Used throughout the seed content. */
export function L(en: string, ro: string): LocaleString {
  return { _type: "localeString", en, ro };
}

/** Build a multi-line translated field (renders as a textarea in the Studio). */
export function LT(en: string, ro: string): LocaleString {
  return { _type: "localeText", en, ro };
}

/** Reference an image that currently lives under /public. */
export function img(localPath: string, altEn: string, altRo: string) {
  return {
    _type: "siteImage" as const,
    _localPath: localPath,
    alt: L(altEn, altRo),
  };
}
