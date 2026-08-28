export const locales = ["en", "ro"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const localeNames: Record<Locale, string> = {
  en: "English",
  ro: "Română",
};

/** Short labels used by the header language switcher. */
export const localeShortNames: Record<Locale, string> = {
  en: "EN",
  ro: "RO",
};

export function isLocale(value: string | undefined): value is Locale {
  return !!value && (locales as readonly string[]).includes(value);
}
