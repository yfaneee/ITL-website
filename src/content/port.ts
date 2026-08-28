import type { Locale } from "@/i18n/config";
import { getDocument } from "@/sanity/fetch";
import type { SiteImage } from "@/sanity/image";
import { img, L, LT } from "@/sanity/locale-fields";

import type { Hero } from "./types";

export type ChecklistCard = {
  icon: SiteImage | null;
  title: string;
  listStyle: "check" | "cross";
  items: string[];
};

export type PortContent = {
  hero: Hero & { icon: SiteImage | null };
  introHeading: string;
  introParagraphs: string[];
  incotermsHeading: string;
  incotermsBackground: SiteImage | null;
  incotermsSlides: SiteImage[];
  quickTipsHeading: string;
  quickTips: string[];
  notCoveredHeading: string;
  notCoveredIntro: string;
  notCoveredItems: string[];
  notCoveredOutro: string;
  containerSlidesHeading: string;
  containerSlides: SiteImage[];
  containerTypesHeading: string;
  containerTypesImage: SiteImage | null;
  featuresHeading: string;
  features: ChecklistCard[];
  gallery: SiteImage[];
};

export const portSeed = {
  _id: "portPage",
  _type: "portPage",
  hero: {
    _type: "pageHero",
    eyebrow: L("Port Operations", "Operațiuni portuare"),
    icon: img("/icons/portOps.svg", "", ""),
    title: L(
      "Port operations and inland logistics coordination",
      "Operațiuni portuare și coordonare logistică terestră"
    ),
    subtitle: LT(
      "ITL supports port-related cargo flows with practical coordination between documentation, port-side operations and inland transport.",
      "ITL susține fluxurile de marfă din porturi printr-o coordonare practică între documentație, operațiunile din port și transportul terestru."
    ),
    backgroundImage: img("/backgrounds/PortOps.webp", "Port Operations", "Operațiuni portuare"),
    primaryCta: {
      _type: "ctaLink",
      label: L("Request a quote →", "Solicitați o ofertă →"),
      href: "#quote",
    },
  },
  introHeading: L(
    "Seamless port operations tailored to your cargo needs",
    "Operațiuni portuare fluide, adaptate nevoilor mărfii dumneavoastră"
  ),
  introParagraphs: [
    {
      ...LT(
        "At ITL, our port operations services are built around efficiency, compliance, and reliability. We handle every aspect of your port logistics — from loading and unloading to customs documentation and container management — ensuring your cargo moves without delays.",
        "La ITL, serviciile de operațiuni portuare sunt construite în jurul eficienței, conformității și fiabilității. Ne ocupăm de fiecare aspect al logisticii portuare — de la încărcare și descărcare până la documentația vamală și gestionarea containerelor — astfel încât marfa dumneavoastră să circule fără întârzieri."
      ),
      _key: "intro1",
    },
    {
      ...LT(
        "Our expert team works closely with port authorities and shipping lines to deliver seamless cargo management. Whether you are importing raw materials or exporting finished goods, we provide end-to-end solutions that keep your supply chain running smoothly. Understanding Incoterms is at the heart of what we do, ensuring every party in the trade knows exactly where their responsibilities begin and end.",
        "Echipa noastră de specialiști colaborează îndeaproape cu autoritățile portuare și cu liniile maritime pentru o gestionare fluidă a mărfurilor. Fie că importați materii prime sau exportați produse finite, oferim soluții complete care mențin lanțul dumneavoastră de aprovizionare în mișcare. Înțelegerea regulilor Incoterms este esențială în activitatea noastră: fiecare parte implicată știe exact unde încep și unde se termină responsabilitățile sale."
      ),
      _key: "intro2",
    },
  ],
  incotermsHeading: L("Incoterms", "Incoterms"),
  incotermsBackground: img("/images/portOpsGallery2.webp", "", ""),
  incotermsSlides: [
    {
      ...img(
        "/images/IncotermsA.webp",
        "Incoterms 2020 – All modes of transport",
        "Incoterms 2020 – Toate modurile de transport"
      ),
      _key: "inc1",
    },
    {
      ...img(
        "/images/IncotermsB.webp",
        "Incoterms 2020 – Sea and inland waterway",
        "Incoterms 2020 – Transport maritim și pe căi navigabile interioare"
      ),
      _key: "inc2",
    },
  ],
  quickTipsHeading: L("Quick Tips", "Sfaturi rapide"),
  quickTips: [
    {
      ...LT(
        "EXW — Seller makes goods available at their premises; buyer bears all risk and costs from that point.",
        "EXW — Vânzătorul pune marfa la dispoziție la sediul său; cumpărătorul suportă toate riscurile și costurile din acel moment."
      ),
      _key: "tip1",
    },
    {
      ...LT(
        "FCA — Risk transfers when goods are handed to the carrier at a named place; flexible for containerised cargo.",
        "FCA — Riscul se transferă la predarea mărfii către transportator, într-un loc convenit; flexibil pentru marfa containerizată."
      ),
      _key: "tip2",
    },
    {
      ...LT(
        "FOB — Seller loads goods on board the named vessel; suitable for bulk and conventional sea freight.",
        "FOB — Vânzătorul încarcă marfa la bordul navei desemnate; potrivit pentru mărfuri vrac și transport maritim convențional."
      ),
      _key: "tip3",
    },
    {
      ...LT(
        "CIF — Seller arranges freight and minimum insurance to destination port; buyer takes risk from on board.",
        "CIF — Vânzătorul asigură transportul și asigurarea minimă până în portul de destinație; cumpărătorul preia riscul de la bord."
      ),
      _key: "tip4",
    },
    {
      ...LT(
        "DDP — Maximum seller responsibility: seller delivers goods cleared for import, all duties and taxes paid.",
        "DDP — Responsabilitate maximă a vânzătorului: acesta livrează marfa vămuită la import, cu toate taxele achitate."
      ),
      _key: "tip5",
    },
  ],
  notCoveredHeading: L(
    "What Incoterms Do Not Cover",
    "Ce nu acoperă regulile Incoterms"
  ),
  notCoveredIntro: LT(
    "While Incoterms rules are an essential part of international trade contracts, it is important to understand their limitations. Incoterms do not address several critical aspects of a commercial transaction:",
    "Deși regulile Incoterms sunt o parte esențială a contractelor de comerț internațional, este important să le înțelegeți limitele. Incoterms nu reglementează câteva aspecte critice ale unei tranzacții comerciale:"
  ),
  notCoveredItems: [
    {
      ...L(
        "The price of the goods or the method of payment between parties",
        "Prețul mărfii sau modalitatea de plată dintre părți"
      ),
      _key: "nc1",
    },
    {
      ...L(
        "Transfer of ownership or title of the goods",
        "Transferul dreptului de proprietate asupra mărfii"
      ),
      _key: "nc2",
    },
    {
      ...L(
        "Intellectual property rights and licensing",
        "Drepturile de proprietate intelectuală și licențierea"
      ),
      _key: "nc3",
    },
    {
      ...L(
        "Force majeure or hardship clauses",
        "Clauzele de forță majoră sau de impreviziune"
      ),
      _key: "nc4",
    },
    {
      ...L(
        "Dispute resolution and applicable jurisdiction",
        "Soluționarea litigiilor și jurisdicția aplicabilă"
      ),
      _key: "nc5",
    },
    {
      ...L(
        "Sanctions, embargoes, or trade restrictions",
        "Sancțiunile, embargourile sau restricțiile comerciale"
      ),
      _key: "nc6",
    },
  ],
  notCoveredOutro: LT(
    "These matters must be addressed in separate contractual clauses or in the governing law of the sales contract. Our expert team can guide you through the full documentation and legal requirements for every shipment.",
    "Aceste aspecte trebuie reglementate prin clauze contractuale separate sau prin legea aplicabilă contractului de vânzare. Echipa noastră de specialiști vă poate ghida prin întreaga documentație și prin cerințele legale pentru fiecare expediere."
  ),
  containerSlidesHeading: L("Container Types", "Tipuri de containere"),
  containerSlides: [
    {
      ...img(
        "/images/cargoMesure.webp",
        "Container measurement guide",
        "Ghid de măsurare a containerelor"
      ),
      _key: "cm1",
    },
    {
      ...img(
        "/images/cargoMesure2.webp",
        "Container measurement guide – detail",
        "Ghid de măsurare a containerelor – detaliu"
      ),
      _key: "cm2",
    },
  ],
  containerTypesHeading: L("Container types", "Tipuri de containere"),
  containerTypesImage: img(
    "/images/containerTypes.webp",
    "Overview of container types",
    "Prezentare generală a tipurilor de containere"
  ),
  featuresHeading: L("Service Features", "Caracteristicile serviciului"),
  features: [
    {
      _type: "checklistCard",
      _key: "advantages",
      icon: img("/icons/advantages.svg", "", ""),
      title: L("Advantages", "Avantaje"),
      listStyle: "check",
      items: [
        { ...L("Reduced cost for high volumes", "Cost redus pentru volume mari"), _key: "a1" },
        { ...L("Cargo protection", "Protecția mărfii"), _key: "a2" },
        { ...L("International standard", "Standard internațional"), _key: "a3" },
        { ...L("Reduced risk of damage", "Risc redus de deteriorare"), _key: "a4" },
        { ...L("Easy to secure", "Ușor de securizat"), _key: "a5" },
      ],
    },
    {
      _type: "checklistCard",
      _key: "terms",
      icon: img("/icons/commonTerm.svg", "", ""),
      title: L("Common terms", "Termeni uzuali"),
      listStyle: "check",
      items: [
        {
          ...L(
            "FCL (Full Container Load) — full container",
            "FCL (Full Container Load) — container complet"
          ),
          _key: "t1",
        },
        {
          ...L(
            "LCL (Less than Container Load) — groupage",
            "LCL (Less than Container Load) — grupaj"
          ),
          _key: "t2",
        },
        {
          ...L("Demurrage — waiting time in port", "Demurrage — timp de așteptare în port"),
          _key: "t3",
        },
        {
          ...L(
            "Detention — container's waiting time in front on port",
            "Detention — timpul de așteptare al containerului în afara portului"
          ),
          _key: "t4",
        },
        {
          ...L(
            "Free time — free days included in price",
            "Free time — zile libere incluse în preț"
          ),
          _key: "t5",
        },
      ],
    },
    {
      _type: "checklistCard",
      _key: "documents",
      icon: img("/icons/mainDoc.svg", "", ""),
      title: L("Main documents", "Documente principale"),
      listStyle: "check",
      items: [
        {
          ...L("Bill of Lading (B/L) — maritime", "Conosament (B/L) — maritim"),
          _key: "d1",
        },
        { ...L("CMR — road transport", "CMR — transport rutier"), _key: "d2" },
        {
          ...L("Rail waybill — railway", "Scrisoare de trăsură feroviară — cale ferată"),
          _key: "d3",
        },
        { ...L("Packing List", "Lista de ambalare"), _key: "d4" },
        { ...L("Invoice", "Factură"), _key: "d5" },
        {
          ...L(
            "Customs documents (EX1, import, T1 etc)",
            "Documente vamale (EX1, import, T1 etc.)"
          ),
          _key: "d6",
        },
      ],
    },
    {
      _type: "checklistCard",
      _key: "security",
      icon: img("/icons/security.svg", "", ""),
      title: L("Security & control", "Securitate și control"),
      listStyle: "check",
      items: [
        {
          ...L(
            "Sealed container (numbered seal)",
            "Container sigilat (sigiliu numerotat)"
          ),
          _key: "s1",
        },
        {
          ...L("Followed number of container", "Numărul containerului urmărit"),
          _key: "s2",
        },
        { ...L("GPS / Tracking", "GPS / Urmărire"), _key: "s3" },
        {
          ...L(
            "Low risk of stealing open palletised cargo",
            "Risc redus de furt pentru marfa paletizată neacoperită"
          ),
          _key: "s4",
        },
      ],
    },
    {
      _type: "checklistCard",
      _key: "disadvantages",
      icon: img("/icons/disadvantages.svg", "", ""),
      title: L("Disadvantages", "Dezavantaje"),
      listStyle: "cross",
      items: [
        {
          ...L(
            "Less flexible for fast deliveries",
            "Mai puțin flexibil pentru livrări rapide"
          ),
          _key: "x1",
        },
        { ...L("Costs for port", "Costuri portuare"), _key: "x2" },
        { ...L("Risk of port delays", "Risc de întârzieri în port"), _key: "x3" },
        { ...L("Requires planification", "Necesită planificare"), _key: "x4" },
      ],
    },
  ],
  gallery: [
    {
      ...img("/images/portOpsGallery.webp", "Port Operations", "Operațiuni portuare"),
      _key: "pg1",
    },
    {
      ...img(
        "/images/portOpsGallery2.webp",
        "Port Operations – aerial",
        "Operațiuni portuare – vedere aeriană"
      ),
      _key: "pg2",
    },
    {
      ...img(
        "/images/portOpsGallery3.webp",
        "Port Operations – dock",
        "Operațiuni portuare – dană"
      ),
      _key: "pg3",
    },
  ],
};

export function getPortContent(locale: Locale) {
  return getDocument<PortContent>("portPage", locale, portSeed);
}
