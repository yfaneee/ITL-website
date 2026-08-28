import type { Locale } from "@/i18n/config";
import { getDocument } from "@/sanity/fetch";
import type { SiteImage } from "@/sanity/image";
import { img, L, LT } from "@/sanity/locale-fields";

export type SiteSettings = {
  brandName: string;
  tagline: string;
  footerBlurb: string;
  logo: SiteImage | null;
  footerBackground: SiteImage | null;
  phone: string;
  email: string;
  whatsappUrl: string;
  linkedinUrl: string;
};

/**
 * Bundled fallback, also used to seed Sanity. Keeping one copy means the
 * fallback can never drift away from what the CMS was initialised with.
 */
export const siteSettingsSeed = {
  _id: "siteSettings",
  _type: "siteSettings",
  brandName: "Inter Trans Logistics",
  tagline: L("Delivering excellence", "Livrăm excelență"),
  footerBlurb: LT(
    "Delivering comprehensive logistics solutions across road, air, and sea with passion and precision.",
    "Oferim soluții logistice complete pe cale rutieră, aeriană și maritimă, cu pasiune și precizie."
  ),
  logo: img("/icons/ITL_logo.svg", "ITL logo", "Sigla ITL"),
  footerBackground: img("/backgrounds/FooterBckg.webp", "", ""),
  phone: "+373 22 123 456",
  email: "info@itl.com",
  whatsappUrl: "https://wa.me/",
  linkedinUrl: "https://linkedin.com",
};

export function getSiteSettings(locale: Locale) {
  return getDocument<SiteSettings>("siteSettings", locale, siteSettingsSeed);
}
