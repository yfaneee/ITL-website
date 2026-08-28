import { defaultLocale, type Locale } from "@/i18n/config";

const LOCALE_TYPES = new Set(["localeString", "localeText"]);

/**
 * Recursively collapse a document's `{ en, ro }` locale objects down to plain
 * strings for one locale, so page components never deal with translation
 * shapes. Falls back to the default locale when a translation is missing —
 * a half-translated document renders as English rather than as a blank page.
 */
export function localize<T>(value: unknown, locale: Locale): T {
  return walk(value, locale) as T;
}

function walk(value: unknown, locale: Locale): unknown {
  if (Array.isArray(value)) {
    return value.map((item) => walk(item, locale));
  }

  if (value !== null && typeof value === "object") {
    const record = value as Record<string, unknown>;

    if (typeof record._type === "string" && LOCALE_TYPES.has(record._type)) {
      const translated = record[locale];
      if (typeof translated === "string" && translated.trim().length > 0) {
        return translated;
      }
      const fallback = record[defaultLocale];
      return typeof fallback === "string" ? fallback : "";
    }

    const result: Record<string, unknown> = {};
    for (const [key, item] of Object.entries(record)) {
      result[key] = walk(item, locale);
    }
    return result;
  }

  return value;
}
