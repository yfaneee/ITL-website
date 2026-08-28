import type { Locale } from "@/i18n/config";
import { getDocument } from "@/sanity/fetch";
import type { SiteImage } from "@/sanity/image";
import { img, L, LT } from "@/sanity/locale-fields";

import type { Cta, Hero } from "./types";

export type IconFeature = {
  icon: SiteImage | null;
  title: string;
  description: string;
};

export type IconLabel = {
  icon: SiteImage | null;
  label: string;
  invertIcon?: boolean;
};

export type InfoCard = { title: string; description: string };

export type AirContent = {
  hero: Hero & { icon: SiteImage | null };
  benefitsHeading: string;
  benefits: IconFeature[];
  precisionHeading: string;
  precisionDescription: string;
  precisionItems: string[];
  precisionImage: SiteImage | null;
  sustainableHeading: string;
  sustainableDescription: string;
  sustainableImage: SiteImage | null;
  sustainableCards: InfoCard[];
  servicesHeading: string;
  services: IconLabel[];
  customSolutionTitle: string;
  customSolutionDescription: string;
  customSolutionCta: Cta;
  quoteHeading: string;
  quoteSubheading: string;
};

export const airSeed = {
  _id: "airPage",
  _type: "airPage",
  hero: {
    _type: "pageHero",
    eyebrow: L("Air Transport", "Transport aerian"),
    icon: img("/icons/airTrans.svg", "", ""),
    title: L(
      "Air transport solutions for urgent and time-sensitive shipments",
      "Soluții de transport aerian pentru expedieri urgente și sensibile la timp"
    ),
    subtitle: LT(
      "ITL provides responsive air freight coordination for cargo that requires speed, close communication and dependable handling.",
      "ITL oferă coordonare promptă a transportului aerian pentru mărfurile care necesită viteză, comunicare strânsă și manipulare de încredere."
    ),
    backgroundImage: img(
      "/backgrounds/AirTranpBckg.webp",
      "Air transport",
      "Transport aerian"
    ),
    primaryCta: {
      _type: "ctaLink",
      label: L(
        "Get Air Freight solution →",
        "Solicitați o soluție de transport aerian →"
      ),
      href: "#quote",
    },
  },
  benefitsHeading: L("Key Benefits", "Beneficii principale"),
  benefits: [
    {
      _type: "iconFeature",
      _key: "fast",
      icon: img("/icons/fastDeliv.svg", "", ""),
      title: L("Fast Delivery", "Livrare rapidă"),
      description: LT(
        "Express freight solutions for time-critical shipments worldwide.",
        "Soluții de transport expres pentru expedieri critice ca timp, la nivel mondial."
      ),
    },
    {
      _type: "iconFeature",
      _key: "network",
      icon: img("/icons/globalNet.svg", "", ""),
      title: L(
        "Global Network & Carrier Partnerships",
        "Rețea globală și parteneriate cu transportatori"
      ),
      description: LT(
        "Access to 1 000+ airlines and freight forwarders across 150+ countries.",
        "Acces la peste 1 000 de companii aeriene și case de expediții din peste 150 de țări."
      ),
    },
    {
      _type: "iconFeature",
      _key: "standards",
      icon: img("/icons/industryLead.svg", "", ""),
      title: L(
        "Industry-Leading Handling Standards",
        "Standarde de manipulare de top în industrie"
      ),
      description: LT(
        "Meticulous care for every shipment to consistently meet exacting standards.",
        "Grijă meticuloasă pentru fiecare expediere, pentru a respecta constant cele mai exigente standarde."
      ),
    },
    {
      _type: "iconFeature",
      _key: "precision",
      icon: img("/icons/precisionSol.svg", "", ""),
      title: L(
        "Precision Solutions for Special Cargo",
        "Soluții de precizie pentru mărfuri speciale"
      ),
      description: LT(
        "Customised handling for sensitive, high-value and oversized cargo.",
        "Manipulare personalizată pentru mărfuri sensibile, de mare valoare și agabaritice."
      ),
    },
  ],
  precisionHeading: L(
    "Precision Solutions for Special Cargo",
    "Soluții de precizie pentru mărfuri speciale"
  ),
  precisionDescription: LT(
    "Our specialised air freight services are designed to handle your most challenging shipments with assured care and precision.",
    "Serviciile noastre specializate de transport aerian sunt concepute pentru a gestiona cele mai dificile expedieri cu grijă și precizie garantate."
  ),
  precisionItems: [
    { ...L("High-value cargo", "Mărfuri de mare valoare"), _key: "p1" },
    { ...L("Dangerous goods", "Mărfuri periculoase"), _key: "p2" },
    { ...L("Fragile & ADR", "Fragile și ADR"), _key: "p3" },
    { ...L("Temperature-sensitive", "Sensibile la temperatură"), _key: "p4" },
    { ...L("Live animals", "Animale vii"), _key: "p5" },
    { ...L("Dangerous gases", "Gaze periculoase"), _key: "p6" },
  ],
  precisionImage: img(
    "/icons/AirTransportService.webp",
    "Air transport service",
    "Serviciu de transport aerian"
  ),
  sustainableHeading: L(
    "Sustainable Aviation Solutions",
    "Soluții de aviație sustenabilă"
  ),
  sustainableDescription: LT(
    "We’re committed to reducing the environmental impact of air freight through innovative sustainable solutions programmes.",
    "Ne angajăm să reducem impactul asupra mediului al transportului aerian prin programe inovatoare de soluții sustenabile."
  ),
  sustainableImage: img(
    "/icons/sustainAvi.svg",
    "Sustainable aviation",
    "Aviație sustenabilă"
  ),
  sustainableCards: [
    {
      _type: "infoCard",
      _key: "bookclaim",
      title: L("Book & Claim", "Book & Claim"),
      description: LT(
        "Offset your emissions with our verified carbon credit programme.",
        "Compensați-vă emisiile prin programul nostru verificat de credite de carbon."
      ),
    },
    {
      _type: "infoCard",
      _key: "saf",
      title: L(
        "Sustainable Aviation Fuel (SAF)",
        "Combustibil de aviație sustenabil (SAF)"
      ),
      description: LT(
        "Use our SAF alternatives to reduce emissions by up to 80% compared to traditional jet fuel.",
        "Folosiți alternativele noastre SAF pentru a reduce emisiile cu până la 80% față de combustibilul clasic pentru avioane."
      ),
    },
  ],
  servicesHeading: L("Comprehensive Services", "Servicii complete"),
  services: [
    {
      _type: "iconLabel",
      _key: "charter",
      icon: img("/icons/airTrans.svg", "", ""),
      label: L("Air charter services", "Servicii de charter aerian"),
      invertIcon: false,
    },
    {
      _type: "iconLabel",
      _key: "insurance",
      icon: img("/icons/cargoInsur.svg", "", ""),
      label: L("Cargo insurance", "Asigurarea mărfii"),
      invertIcon: true,
    },
    {
      _type: "iconLabel",
      _key: "customs",
      icon: img("/icons/customClear.svg", "", ""),
      label: L("Customs clearance", "Vămuire"),
      invertIcon: true,
    },
    {
      _type: "iconLabel",
      _key: "door",
      icon: img("/icons/industryLead.svg", "", ""),
      label: L("Door-to-door delivery", "Livrare din poartă în poartă"),
      invertIcon: false,
    },
  ],
  customSolutionTitle: L(
    "Need a custom solution?",
    "Aveți nevoie de o soluție personalizată?"
  ),
  customSolutionDescription: LT(
    "Our air freight experts can tailor a distinct solution for your requirements. From general cargo to complex shipments.",
    "Specialiștii noștri în transport aerian pot crea o soluție dedicată cerințelor dumneavoastră, de la mărfuri generale la expedieri complexe."
  ),
  customSolutionCta: {
    _type: "ctaLink",
    label: L("Discuss with our team →", "Discutați cu echipa noastră →"),
    href: "/contact",
  },
  quoteHeading: L(
    "Request Air Freight Quote",
    "Solicitați o ofertă de transport aerian"
  ),
  quoteSubheading: L(
    "Get tailored quote information for your freight needs.",
    "Primiți informații de ofertă adaptate nevoilor dumneavoastră de transport."
  ),
};

export function getAirContent(locale: Locale) {
  return getDocument<AirContent>("airPage", locale, airSeed);
}
