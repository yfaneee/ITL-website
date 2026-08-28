import type { Locale } from "@/i18n/config";
import { getDocument } from "@/sanity/fetch";
import type { SiteImage } from "@/sanity/image";
import { img, L, LT } from "@/sanity/locale-fields";

import type { Hero } from "./types";

export type ServiceCard = {
  title: string;
  description: string;
  href: string;
  backgroundImage: SiteImage | null;
  icon: SiteImage | null;
};

export type Sector = {
  name: string;
  icon: SiteImage | null;
};

export type HomeContent = {
  hero: Hero;
  serviceCards: ServiceCard[];
  sectorsHeading: string;
  sectorsSubheading: string;
  sectors: Sector[];
  helpHeading: string;
  helpPrimaryLabel: string;
  helpSecondaryLabel: string;
  testimonialsHeading: string;
  testimonialsSubheading: string;
  testimonialsLinkLabel: string;
  gallery: SiteImage[];
};

export const homeSeed = {
  _id: "homePage",
  _type: "homePage",
  hero: {
    _type: "pageHero",
    title: L(
      "Freight forwarding solutions across Europe.",
      "Soluții de expediții de marfă în toată Europa."
    ),
    subtitle: LT(
      "Inter Trans Logistics, supports road transport, air transport and port operations with practical coordination, fast response and flexible logistics solutions.",
      "Inter Trans Logistics susține transportul rutier, transportul aerian și operațiunile portuare prin coordonare practică, răspuns rapid și soluții logistice flexibile."
    ),
    backgroundImage: img(
      "/backgrounds/HeaderHomepage.webp",
      "ITL logistics hero",
      "Imagine principală ITL logistics"
    ),
    primaryCta: {
      _type: "ctaLink",
      label: L("Talk to us today →", "Contactați-ne astăzi →"),
      href: "/contact",
    },
    secondaryCta: {
      _type: "ctaLink",
      label: L("Explore our services →", "Descoperiți serviciile noastre →"),
      href: "/about",
    },
  },
  serviceCards: [
    {
      _type: "serviceCard",
      _key: "air",
      title: L("Air Transport", "Transport aerian"),
      description: LT(
        "Fast and reliable air freight solutions for time-sensitive cargo across global routes.",
        "Soluții de transport aerian rapide și fiabile pentru mărfuri urgente, pe rute globale."
      ),
      href: "/air",
      backgroundImage: img("/backgrounds/AirTrans.webp", "Air Transport", "Transport aerian"),
      icon: img("/icons/AirTransportService.webp", "Air Transport icon", "Pictogramă transport aerian"),
    },
    {
      _type: "serviceCard",
      _key: "road",
      title: L("Road Transport", "Transport rutier"),
      description: LT(
        "Flexible road logistics covering full and partial loads with nationwide coverage.",
        "Logistică rutieră flexibilă, pentru încărcături complete și parțiale, cu acoperire națională."
      ),
      href: "/road",
      backgroundImage: img("/backgrounds/RoadTrans.webp", "Road Transport", "Transport rutier"),
      icon: img("/icons/RoadTransportService.webp", "Road Transport icon", "Pictogramă transport rutier"),
    },
    {
      _type: "serviceCard",
      _key: "port",
      title: L("Port Operations", "Operațiuni portuare"),
      description: LT(
        "The most important port facilities. Seamless cargo handling and stevedoring services.",
        "Cele mai importante facilități portuare. Servicii integrate de manipulare a mărfurilor și stivuire."
      ),
      href: "/port",
      backgroundImage: img("/backgrounds/PortOps.webp", "Port Operations", "Operațiuni portuare"),
      icon: img("/icons/PortOpsService.webp", "Port Operations icon", "Pictogramă operațiuni portuare"),
    },
  ],
  sectorsHeading: L("How Can We Help", "Cum vă putem ajuta"),
  sectorsSubheading: L("Choose Your Sector", "Alegeți domeniul dumneavoastră"),
  sectors: [
    { _type: "sector", _key: "agriculture", name: L("Agriculture", "Agricultură"), icon: img("/icons/AgricultureIcon.svg", "Agriculture", "Agricultură") },
    { _type: "sector", _key: "construction", name: L("Construction", "Construcții"), icon: img("/icons/ConstructionIcon.svg", "Construction", "Construcții") },
    { _type: "sector", _key: "food", name: L("Food", "Alimentație"), icon: img("/icons/FoodIcon.svg", "Food", "Alimentație") },
    { _type: "sector", _key: "metal", name: L("Metal Constructions", "Construcții metalice"), icon: img("/icons/MetalConstructionIcon.svg", "Metal Constructions", "Construcții metalice") },
    { _type: "sector", _key: "oilgas", name: L("Oil & Gas", "Petrol și gaze"), icon: img("/icons/OilGasIcon.svg", "Oil & Gas", "Petrol și gaze") },
    { _type: "sector", _key: "electricity", name: L("Electricity", "Energie electrică"), icon: img("/icons/Electricity.svg", "Electricity", "Energie electrică") },
    { _type: "sector", _key: "industry", name: L("Industry", "Industrie"), icon: img("/icons/IndustryIcon.svg", "Industry", "Industrie") },
    { _type: "sector", _key: "automotive", name: L("Automotive", "Industria auto"), icon: img("/icons/Automotive.svg", "Automotive", "Industria auto") },
  ],
  helpHeading: L("What do you need help with?", "Cu ce vă putem ajuta?"),
  helpPrimaryLabel: L("New or existing project", "Proiect nou sau existent"),
  helpSecondaryLabel: L("General inquiry", "Solicitare generală"),
  testimonialsHeading: L("Trusted by industry leaders", "Recomandați de lideri din industrie"),
  testimonialsSubheading: L("Delivering excellence across sectors", "Livrăm excelență în toate domeniile"),
  testimonialsLinkLabel: L("View all testimonials →", "Vedeți toate recomandările →"),
  gallery: [
    { ...img("/images/SlideShowHome1.webp", "ITL Logistics 1", "Logistică ITL 1"), _key: "g1" },
    { ...img("/images/SlideShowHome2.webp", "ITL Logistics 2", "Logistică ITL 2"), _key: "g2" },
    { ...img("/images/SlideShowHome3.webp", "ITL Logistics 3", "Logistică ITL 3"), _key: "g3" },
    { ...img("/images/SlideShowHome4.webp", "ITL Logistics 4", "Logistică ITL 4"), _key: "g4" },
  ],
};

export function getHomeContent(locale: Locale) {
  return getDocument<HomeContent>("homePage", locale, homeSeed);
}
