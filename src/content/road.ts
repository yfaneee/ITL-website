import type { Locale } from "@/i18n/config";
import { getDocument } from "@/sanity/fetch";
import type { SiteImage } from "@/sanity/image";
import { img, L, LT } from "@/sanity/locale-fields";

import type { Hero } from "./types";

export type FeatureList = {
  icon: SiteImage | null;
  title: string;
  items: string[];
};

export type CoverageItem = { region: string; detail: string };

export type RoadContent = {
  hero: Hero & { icon: SiteImage | null };
  valueHeading: string;
  valueDescription: string;
  featuresHeading: string;
  features: FeatureList[];
  coverageHeading: string;
  coveragePrimaryHeading: string;
  coveragePrimary: CoverageItem[];
  coverageSecondary: CoverageItem[];
  coverageMapLabel: string;
  quoteHeading: string;
  quoteSubheading: string;
};

/** Shorthand for the coverage lists, which are all region + detail pairs. */
function coverage(
  key: string,
  regionEn: string,
  regionRo: string,
  detailEn: string,
  detailRo: string
) {
  return {
    _type: "coverageItem",
    _key: key,
    region: L(regionEn, regionRo),
    detail: L(detailEn, detailRo),
  };
}

export const roadSeed = {
  _id: "roadPage",
  _type: "roadPage",
  hero: {
    _type: "pageHero",
    eyebrow: L("Road Transport", "Transport rutier"),
    icon: img("/icons/roadTrans.svg", "", ""),
    title: L(
      "Flexible road transport solutions across Europe",
      "Soluții flexibile de transport rutier în toată Europa"
    ),
    subtitle: LT(
      "ITL supports road freight across key European corridors, with strength in cargo flows connected to the Black Sea region and wider Central and Western European routes.",
      "ITL susține transportul rutier pe principalele coridoare europene, cu experiență în fluxurile de marfă conectate la regiunea Mării Negre și pe rutele mai largi din Europa Centrală și de Vest."
    ),
    backgroundImage: img(
      "/backgrounds/RoadTranspBckg.webp",
      "Road transport",
      "Transport rutier"
    ),
    primaryCta: {
      _type: "ctaLink",
      label: L("Request a quote →", "Solicitați o ofertă →"),
      href: "#quotation",
    },
  },
  valueHeading: LT(
    "Are you looking for a trusted logistics partner that matches your ambitions and puts you first?",
    "Căutați un partener logistic de încredere, pe măsura ambițiilor dumneavoastră, care să vă pună pe primul loc?"
  ),
  valueDescription: LT(
    "From FTL to LTL and groupage services, shipping across Europe with expert planning and execution.",
    "De la FTL la LTL și servicii de grupaj, transportăm în toată Europa cu planificare și execuție de specialitate."
  ),
  featuresHeading: L("Service Features", "Caracteristicile serviciului"),
  features: [
    {
      _type: "featureList",
      _key: "flexible",
      icon: img("/icons/roadTrans.svg", "", ""),
      title: L("Flexible Transport Options", "Opțiuni flexibile de transport"),
      items: [
        { ...L("Full Truck Load (FTL)", "Camion complet (FTL)"), _key: "f1" },
        { ...L("Less Than Truck Load (LTL)", "Camion parțial (LTL)"), _key: "f2" },
        { ...L("Groupage services", "Servicii de grupaj"), _key: "f3" },
        {
          ...L(
            "Cost and transit optimisation",
            "Optimizarea costurilor și a tranzitului"
          ),
          _key: "f4",
        },
      ],
    },
    {
      _type: "featureList",
      _key: "network",
      icon: img("/icons/globalNet.svg", "", ""),
      title: L("EuropeanNetwork Coverage", "Acoperire rețea europeană"),
      items: [
        { ...L("15+ countries coverage", "Acoperire în peste 15 țări"), _key: "n1" },
        { ...L("Hubs and transits", "Huburi și tranzituri"), _key: "n2" },
        { ...L("Cross-border efficiency", "Eficiență transfrontalieră"), _key: "n3" },
      ],
    },
    {
      _type: "featureList",
      _key: "industry",
      icon: img("/icons/industrySol.svg", "", ""),
      title: L(
        "Industry-Specific Solutions",
        "Soluții specifice fiecărei industrii"
      ),
      items: [
        {
          ...L("Sensitive cargo handling", "Manipularea mărfurilor sensibile"),
          _key: "i1",
        },
        { ...L("Local expertise", "Expertiză locală"), _key: "i2" },
      ],
    },
  ],
  coverageHeading: L("Our Coverage", "Acoperirea noastră"),
  coveragePrimaryHeading: L("European Excellence", "Excelență europeană"),
  coveragePrimary: [
    coverage("c1", "Western Europe", "Europa de Vest", "UK/Germany EU hubs", "Huburi UE în Marea Britanie și Germania"),
    coverage("c2", "Eastern Europe", "Europa de Est", "Local partnerships and operations", "Parteneriate și operațiuni locale"),
    coverage("c3", "Scandinavia", "Scandinavia", "Specialised Nordic routes", "Rute nordice specializate"),
    coverage("c4", "Iberian Peninsula", "Peninsula Iberică", "Specialised local freight routes", "Rute locale de marfă specializate"),
  ],
  coverageSecondary: [
    coverage("s1", "Black Sea", "Marea Neagră", "Related inland connections", "Conexiuni interne asociate"),
    coverage("s2", "Central European", "Europa Centrală", "Commercial routes", "Rute comerciale"),
    coverage("s3", "Western European", "Europa de Vest", "Delivery corridors", "Coridoare de livrare"),
    coverage("s4", "Turkey and Southeast Europe", "Turcia și Europa de Sud-Est", "Connected regional flows", "Fluxuri regionale conectate"),
    coverage("s5", "Additional European routes", "Rute europene suplimentare", "Depending on shipment requirements", "În funcție de cerințele expedierii"),
  ],
  coverageMapLabel: L("Interactive Coverage Map", "Hartă interactivă a acoperirii"),
  quoteHeading: L("Request a Quotation", "Solicitați o ofertă"),
  quoteSubheading: LT(
    "Fill the form below and our team will get back to you within 24 hours.",
    "Completați formularul de mai jos, iar echipa noastră vă va contacta în termen de 24 de ore."
  ),
};

export function getRoadContent(locale: Locale) {
  return getDocument<RoadContent>("roadPage", locale, roadSeed);
}
