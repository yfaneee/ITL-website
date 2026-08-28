import type { Locale } from "@/i18n/config";
import { getDocument } from "@/sanity/fetch";
import type { SiteImage } from "@/sanity/image";
import { img, L, LT } from "@/sanity/locale-fields";

import type { Hero } from "./types";

export type InfoPanel = {
  icon: SiteImage | null;
  title: string;
  lines: string[];
};

export type ContactContent = {
  hero: Hero;
  channelsHeading: string;
  formHeading: string;
  formSubheading: string;
  infoCards: InfoPanel[];
  testimonialsHeading: string;
  testimonialsSubheading: string;
  mapHeading: string;
  mapPlaceholder: string;
  mapAddress: string;
};

export const contactSeed = {
  _id: "contactPage",
  _type: "contactPage",
  hero: {
    _type: "pageHero",
    title: L("Get in touch with ITL", "Luați legătura cu ITL"),
    subtitle: LT(
      "Tell us what need to move, and our team will help identify the right logistics solution based on route, cargo type and timing requirements.",
      "Spuneți-ne ce trebuie transportat, iar echipa noastră vă va ajuta să identificați soluția logistică potrivită în funcție de rută, tipul mărfii și cerințele de timp."
    ),
    backgroundImage: img("/backgrounds/ContactBckg.webp", "Contact ITL", "Contact ITL"),
  },
  channelsHeading: L("Talk to Us", "Vorbiți cu noi"),
  formHeading: L("Send Us a Message", "Trimiteți-ne un mesaj"),
  formSubheading: LT(
    "Fill in the form and our team will get back to you within 24 hours.",
    "Completați formularul, iar echipa noastră vă va contacta în termen de 24 de ore."
  ),
  infoCards: [
    {
      _type: "infoPanel",
      _key: "hq",
      icon: img("/icons/headquarters.svg", "", ""),
      title: L("Headquarters", "Sediul central"),
      lines: [
        { ...L("Inter Trans Logistics SRL", "Inter Trans Logistics SRL"), _key: "h1" },
        {
          ...L("str. Independenței 1, of. 305", "str. Independenței 1, of. 305"),
          _key: "h2",
        },
        { ...L("Chișinău, MD-2043", "Chișinău, MD-2043"), _key: "h3" },
        { ...L("Republic of Moldova", "Republica Moldova"), _key: "h4" },
      ],
    },
    {
      _type: "infoPanel",
      _key: "hours",
      icon: img("/icons/businessHours.svg", "", ""),
      title: L("Business Hours", "Program de lucru"),
      lines: [
        { ...L("Monday – Friday", "Luni – Vineri"), _key: "b1" },
        { ...L("08:00 – 18:00 (EET)", "08:00 – 18:00 (EET)"), _key: "b2" },
        { ...L("", ""), _key: "b3" },
        { ...L("Saturday – Sunday", "Sâmbătă – Duminică"), _key: "b4" },
        { ...L("Closed", "Închis"), _key: "b5" },
      ],
    },
    {
      _type: "infoPanel",
      _key: "response",
      icon: img("/icons/quickResponse.svg", "", ""),
      title: L("Quick Response", "Răspuns rapid"),
      lines: [
        {
          ...L(
            "General inquiries: within 4 hours",
            "Solicitări generale: în maximum 4 ore"
          ),
          _key: "q1",
        },
        {
          ...L(
            "Quote requests: within 24 hours",
            "Cereri de ofertă: în maximum 24 de ore"
          ),
          _key: "q2",
        },
        {
          ...L("Urgent shipments: immediate", "Expedieri urgente: imediat"),
          _key: "q3",
        },
        { ...L("", ""), _key: "q4" },
        {
          ...L("We respond in EN / RO / RU", "Răspundem în EN / RO / RU"),
          _key: "q5",
        },
      ],
    },
  ],
  testimonialsHeading: L("Customer Testimonials", "Recomandările clienților"),
  testimonialsSubheading: L(
    "Trusted by industry leaders across sectors",
    "Recomandați de lideri din industrie, în toate domeniile"
  ),
  mapHeading: L("Find Us", "Unde ne găsiți"),
  mapPlaceholder: L("Interactive map coming soon", "Hartă interactivă în curând"),
  mapAddress: L(
    "str. Independenței 1, of. 305 — Chișinău, Moldova",
    "str. Independenței 1, of. 305 — Chișinău, Moldova"
  ),
};

export function getContactContent(locale: Locale) {
  return getDocument<ContactContent>("contactPage", locale, contactSeed);
}
