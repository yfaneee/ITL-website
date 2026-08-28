import type { Locale } from "@/i18n/config";
import { getDocument } from "@/sanity/fetch";
import type { SiteImage } from "@/sanity/image";
import { img, L, LT } from "@/sanity/locale-fields";

import type { Cta } from "./types";

export type Stat = { value: string; label: string };
export type ServiceItem = { icon: string; title: string; subtitle: string };
export type CoverageRow = { region: string; note: string };
export type ProcessItem = { icon: string; text: string };
export type WhyItem = { icon: string; title: string; text: string };

export type AboutContent = {
  heroEyebrow: string;
  heroHeading: string;
  heroSubtitle: string;
  heroParagraphs: string[];
  heroBadges: string[];
  whoEyebrow: string;
  whoHeading: string;
  whoParagraphs: string[];
  backgroundEyebrow: string;
  backgroundHeading: string;
  backgroundParagraphs: string[];
  backgroundStats: Stat[];
  servicesEyebrow: string;
  servicesHeading: string;
  servicesParagraphs: string[];
  servicesItems: ServiceItem[];
  coverageEyebrow: string;
  coverageHeading: string;
  coverageParagraphs: string[];
  coverageRows: CoverageRow[];
  coverageFootnote: string;
  processEyebrow: string;
  processHeading: string;
  processParagraphs: string[];
  processItems: ProcessItem[];
  whyEyebrow: string;
  whyHeading: string;
  whyItems: WhyItem[];
  groupEyebrow: string;
  groupHeading: string;
  groupImage: SiteImage | null;
  groupParagraphs: string[];
  commitmentEyebrow: string;
  commitmentHeading: string;
  commitmentParagraphs: string[];
  ctaHeading: string;
  ctaDescription: string;
  ctaButton: Cta;
};

/** Paragraph arrays need stable keys for Sanity; this keeps the seed readable. */
function paragraphs(prefix: string, entries: [string, string][]) {
  return entries.map(([en, ro], i) => ({ ...LT(en, ro), _key: `${prefix}${i}` }));
}

function strings(prefix: string, entries: [string, string][]) {
  return entries.map(([en, ro], i) => ({ ...L(en, ro), _key: `${prefix}${i}` }));
}

export const aboutSeed = {
  _id: "aboutPage",
  _type: "aboutPage",

  heroEyebrow: L("About us", "Despre noi"),
  heroHeading: LT("About Inter Trans Logistics", "Despre Inter Trans Logistics"),
  heroSubtitle: LT(
    "A responsive logistics partner for European cargo flows.",
    "Un partener logistic prompt pentru fluxurile de marfă din Europa."
  ),
  heroParagraphs: paragraphs("hp", [
    [
      "Inter Trans Logistics keeps freight moving across Europe with road, air and port solutions built around each client. We combine local know-how with a continent-wide network so every shipment is handled with care, from first enquiry to final delivery.",
      "Inter Trans Logistics menține marfa în mișcare în toată Europa, prin soluții rutiere, aeriene și portuare construite în jurul fiecărui client. Combinăm expertiza locală cu o rețea extinsă la nivel continental, astfel încât fiecare expediere să fie tratată cu grijă, de la prima solicitare până la livrarea finală.",
    ],
    [
      "As part of the Holleman Group, we bring decades of heavy and general cargo experience to the table — backing every project with the resources, reach and reliability of an established logistics partner.",
      "Ca parte a Grupului Holleman, aducem decenii de experiență în transportul de mărfuri agabaritice și generale, susținând fiecare proiect cu resursele, acoperirea și fiabilitatea unui partener logistic consacrat.",
    ],
  ]),
  heroBadges: strings("hb", [
    ["ISO-certified processes", "Procese certificate ISO"],
    ["200+ projects delivered", "Peste 200 de proiecte livrate"],
    ["Part of Holleman Group", "Parte din Grupul Holleman"],
    ["EU-wide coverage", "Acoperire în toată UE"],
  ]),

  whoEyebrow: L("01 — Who we are", "01 — Cine suntem"),
  whoHeading: LT("Who we are", "Cine suntem"),
  whoParagraphs: paragraphs("wp", [
    [
      "We are a logistics service provider supporting cargo flows across Europe. Whether it is a single consignment or a recurring lane, our team plans, coordinates and tracks every movement so you can focus on your business while we handle the transport.",
      "Suntem un furnizor de servicii logistice care susține fluxurile de marfă din întreaga Europă. Fie că este vorba de o singură expediere sau de o rută recurentă, echipa noastră planifică, coordonează și monitorizează fiecare deplasare, astfel încât dumneavoastră să vă puteți concentra pe afacere, iar noi să ne ocupăm de transport.",
    ],
    [
      "Our clients range from manufacturers and traders to industrial operators that need a dependable partner. We meet them with clear communication, flexible capacity and a genuine commitment to getting the job done.",
      "Clienții noștri variază de la producători și comercianți până la operatori industriali care au nevoie de un partener de încredere. Le oferim comunicare clară, capacitate flexibilă și un angajament real de a duce lucrurile la bun sfârșit.",
    ],
  ]),

  backgroundEyebrow: L("02 — Our background", "02 — Istoricul nostru"),
  backgroundHeading: LT("Our background", "Istoricul nostru"),
  backgroundParagraphs: paragraphs("bp", [
    [
      "Inter Trans Logistics grew out of a long history of moving goods across borders. That foundation gives us the structure, processes and partner relationships needed to deliver consistently.",
      "Inter Trans Logistics s-a dezvoltat dintr-o îndelungată experiență în transportul de mărfuri peste granițe. Această bază ne oferă structura, procesele și relațiile de parteneriat necesare pentru a livra constant.",
    ],
    [
      "The company has built its reputation on solving complex logistics challenges with practical, cost-effective answers — keeping cargo moving even when schedules and routes get demanding.",
      "Compania și-a construit reputația rezolvând provocări logistice complexe cu soluții practice și eficiente din punct de vedere al costurilor, menținând marfa în mișcare chiar și atunci când programele și rutele devin solicitante.",
    ],
  ]),
  backgroundStats: [
    {
      _type: "stat",
      _key: "st1",
      value: "20+",
      label: L("Years of expertise", "Ani de experiență"),
    },
    {
      _type: "stat",
      _key: "st2",
      value: "4",
      label: L("Core transport services", "Servicii principale de transport"),
    },
    {
      _type: "stat",
      _key: "st3",
      value: "EU+",
      label: L("Markets served", "Piețe deservite"),
    },
  ],

  servicesEyebrow: L("03 — What we do", "03 — Ce facem"),
  servicesHeading: LT("What we do", "Ce facem"),
  servicesParagraphs: paragraphs("sp", [
    [
      "We connect your cargo to the right mode of transport, at the right time, for the right price.",
      "Conectăm marfa dumneavoastră cu modul de transport potrivit, la momentul potrivit și la prețul potrivit.",
    ],
    [
      "Whether your freight travels by road, air or sea, we manage the full journey — booking carriers, handling customs and documentation, and keeping you informed at every step.",
      "Fie că marfa dumneavoastră călătorește pe cale rutieră, aeriană sau maritimă, gestionăm întregul parcurs: rezervarea transportatorilor, formalitățile vamale și documentația, ținându-vă informat la fiecare pas.",
    ],
  ]),
  servicesItems: [
    {
      _type: "serviceItem",
      _key: "si1",
      icon: "truck",
      title: L("Road Transport", "Transport rutier"),
      subtitle: L("Full & partial loads", "Încărcături complete și parțiale"),
    },
    {
      _type: "serviceItem",
      _key: "si2",
      icon: "plane",
      title: L("Air Transport", "Transport aerian"),
      subtitle: L("Time-critical freight", "Marfă critică ca timp"),
    },
    {
      _type: "serviceItem",
      _key: "si3",
      icon: "ship",
      title: L("Port Operations", "Operațiuni portuare"),
      subtitle: L("Handling & stevedoring", "Manipulare și stivuire"),
    },
    {
      _type: "serviceItem",
      _key: "si4",
      icon: "documents",
      title: L("Customs & Compliance", "Vamă și conformitate"),
      subtitle: L("Documentation handled", "Documentație gestionată"),
    },
  ],

  coverageEyebrow: L("04 — Coverage", "04 — Acoperire"),
  coverageHeading: LT(
    "European focus,\npractical reach",
    "Focus european,\nacoperire practică"
  ),
  coverageParagraphs: paragraphs("cp", [
    [
      "We focus on Europe because that is where we move best. Concentrating our network here means tighter schedules, shorter lead times and better control over your cargo.",
      "Ne concentrăm pe Europa pentru că aici ne mișcăm cel mai bine. Concentrarea rețelei noastre aici înseamnă programe mai strânse, termene mai scurte și un control mai bun asupra mărfii dumneavoastră.",
    ],
    [
      "This regional focus is our strength: we know the routes, the partners and the paperwork, so your shipment travels through a continent we understand inside out.",
      "Această concentrare regională este punctul nostru forte: cunoaștem rutele, partenerii și documentele, astfel încât expedierea dumneavoastră traversează un continent pe care îl cunoaștem în detaliu.",
    ],
  ]),
  coverageRows: [
    {
      _type: "coverageRow",
      _key: "cr1",
      region: L("Western Europe", "Europa de Vest"),
      note: L("Daily departures", "Plecări zilnice"),
    },
    {
      _type: "coverageRow",
      _key: "cr2",
      region: L("Central Europe", "Europa Centrală"),
      note: L("Hub network", "Rețea de huburi"),
    },
    {
      _type: "coverageRow",
      _key: "cr3",
      region: L("Southern Europe", "Europa de Sud"),
      note: L("Port connections", "Conexiuni portuare"),
    },
    {
      _type: "coverageRow",
      _key: "cr4",
      region: L("Eastern Europe", "Europa de Est"),
      note: L("Cross-border", "Transfrontalier"),
    },
  ],
  coverageFootnote: L(
    "One connected network across the continent.",
    "O singură rețea conectată pe tot continentul."
  ),

  processEyebrow: L("05 — How we work", "05 — Cum lucrăm"),
  processHeading: LT("How we work", "Cum lucrăm"),
  processParagraphs: paragraphs("pp", [
    [
      "We keep things simple and personal. From the first enquiry to final delivery, you work with people who know your shipment and take ownership of it.",
      "Păstrăm lucrurile simple și personale. De la prima solicitare până la livrarea finală, lucrați cu oameni care vă cunosc expedierea și își asumă responsabilitatea pentru ea.",
    ],
    [
      "Our team is always reachable, and our quotes are clear from the start — no surprises, just freight that moves.",
      "Echipa noastră este mereu disponibilă, iar ofertele noastre sunt clare de la început: fără surprize, doar marfă care ajunge la destinație.",
    ],
  ]),
  processItems: [
    {
      _type: "processItem",
      _key: "pi1",
      icon: "userCheck",
      text: LT(
        "A dedicated, single point of contact for every shipment.",
        "Un singur punct de contact dedicat pentru fiecare expediere."
      ),
    },
    {
      _type: "processItem",
      _key: "pi2",
      icon: "receipt",
      text: LT(
        "Transparent, fixed-price quotes with no hidden costs.",
        "Oferte transparente, cu preț fix și fără costuri ascunse."
      ),
    },
    {
      _type: "processItem",
      _key: "pi3",
      icon: "location",
      text: LT(
        "Real-time tracking and proactive status updates.",
        "Urmărire în timp real și actualizări proactive de status."
      ),
    },
    {
      _type: "processItem",
      _key: "pi4",
      icon: "send",
      text: LT(
        "Fast, reliable delivery across the European network.",
        "Livrare rapidă și fiabilă în întreaga rețea europeană."
      ),
    },
  ],

  whyEyebrow: L("06 — Why ITL", "06 — De ce ITL"),
  whyHeading: LT("Why clients work with ITL", "De ce aleg clienții ITL"),
  whyItems: [
    {
      _type: "whyItem",
      _key: "wi1",
      icon: "shuffle",
      title: L("Flexibility", "Flexibilitate"),
      text: LT(
        "We adapt to your timelines and cargo, scaling capacity up or down as your needs change.",
        "Ne adaptăm la termenele și marfa dumneavoastră, ajustând capacitatea pe măsură ce nevoile se schimbă."
      ),
    },
    {
      _type: "whyItem",
      _key: "wi2",
      icon: "shield",
      title: L("Reliability", "Fiabilitate"),
      text: LT(
        "Carefully planned routes and trusted carriers mean your freight arrives on time, every time.",
        "Rute atent planificate și transportatori de încredere înseamnă că marfa ajunge la timp, de fiecare dată."
      ),
    },
    {
      _type: "whyItem",
      _key: "wi3",
      icon: "network",
      title: L("European network", "Rețea europeană"),
      text: LT(
        "A connected web of routes, hubs and partners spanning the whole continent.",
        "O rețea conectată de rute, huburi și parteneri care acoperă întregul continent."
      ),
    },
    {
      _type: "whyItem",
      _key: "wi4",
      icon: "award",
      title: L("Experienced team", "Echipă experimentată"),
      text: LT(
        "Decades of combined logistics expertise behind every booking you make.",
        "Decenii de expertiză logistică cumulată în spatele fiecărei rezervări."
      ),
    },
    {
      _type: "whyItem",
      _key: "wi5",
      icon: "leaf",
      title: L("Sustainability", "Sustenabilitate"),
      text: LT(
        "Optimised loads and modern fleets that keep emissions and waste to a minimum.",
        "Încărcături optimizate și flote moderne care mențin emisiile și risipa la minimum."
      ),
    },
  ],

  groupEyebrow: L("07 — Our group", "07 — Grupul nostru"),
  groupHeading: LT("Part of Holleman\nGroup", "Parte din Grupul\nHolleman"),
  groupImage: img(
    "/images/proiectebckg.webp",
    "Holleman Group logistics operations",
    "Operațiuni logistice ale Grupului Holleman"
  ),
  groupParagraphs: paragraphs("gp", [
    [
      "Being part of the Holleman Group gives us the backbone of an established logistics organisation, with the agility of a focused, client-first team.",
      "Apartenența la Grupul Holleman ne oferă coloana vertebrală a unei organizații logistice consacrate, împreună cu agilitatea unei echipe concentrate, care pune clientul pe primul loc.",
    ],
    [
      "The Holleman Group has decades of experience in heavy and general cargo across Europe, building a reputation for handling demanding projects others walk away from.",
      "Grupul Holleman are decenii de experiență în transportul de mărfuri agabaritice și generale în Europa, construindu-și o reputație în gestionarea proiectelor dificile pe care alții le refuză.",
    ],
    [
      "That heritage flows into everything we do. When you work with Inter Trans Logistics, you gain the strength of a proven group and the attention of a partner who treats your cargo as their own.",
      "Această moștenire se regăsește în tot ceea ce facem. Când lucrați cu Inter Trans Logistics, câștigați forța unui grup consacrat și atenția unui partener care tratează marfa dumneavoastră ca pe a sa.",
    ],
  ]),

  commitmentEyebrow: L("08 — Our commitment", "08 — Angajamentul nostru"),
  commitmentHeading: LT("Our commitment", "Angajamentul nostru"),
  commitmentParagraphs: paragraphs("mp", [
    [
      "We are committed to keeping your cargo moving safely, on time and with full transparency — treating every shipment as if it were our own.",
      "Ne angajăm să menținem marfa dumneavoastră în mișcare în siguranță, la timp și cu transparență deplină, tratând fiecare expediere ca pe a noastră.",
    ],
    [
      "As your logistics partner, we keep improving how we plan, communicate and deliver, so that working with us stays simple, predictable and genuinely helpful — shipment after shipment.",
      "Ca partener logistic, îmbunătățim continuu modul în care planificăm, comunicăm și livrăm, astfel încât colaborarea cu noi să rămână simplă, predictibilă și cu adevărat utilă, expediere după expediere.",
    ],
  ]),

  ctaHeading: LT(
    "Looking for a logistics\npartner in Europe?",
    "Căutați un partener logistic\nîn Europa?"
  ),
  ctaDescription: LT(
    "Tell us about your cargo, your routes and your timelines. We will get back to you with a clear, practical proposal — no obligations.",
    "Spuneți-ne despre marfa, rutele și termenele dumneavoastră. Vă vom răspunde cu o propunere clară și practică, fără obligații."
  ),
  ctaButton: {
    _type: "ctaLink",
    label: L("Contact us", "Contactați-ne"),
    href: "/contact",
  },
};

export function getAboutContent(locale: Locale) {
  return getDocument<AboutContent>("aboutPage", locale, aboutSeed);
}
