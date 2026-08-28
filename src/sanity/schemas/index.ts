import type { SchemaTypeDefinition } from "sanity";

import { ctaLink } from "./objects/ctaLink";
import { localeString, localeText } from "./objects/locale";
import {
  checklistCard,
  coverageItem,
  featureList,
  iconFeature,
  iconLabel,
  infoCard,
  infoPanel,
} from "./objects/features";
import { pageHero } from "./objects/pageHero";
import { siteImage } from "./objects/siteImage";

import { aboutPage } from "./documents/aboutPage";
import { airPage } from "./documents/airPage";
import { contactPage } from "./documents/contactPage";
import { homePage } from "./documents/homePage";
import { portPage } from "./documents/portPage";
import { roadPage } from "./documents/roadPage";
import { siteSettings } from "./documents/siteSettings";
import { testimonial } from "./documents/testimonial";

/** Document types that hold translatable fields, for the language filter. */
export const localizedDocumentTypes = [
  "siteSettings",
  "testimonial",
  "homePage",
  "airPage",
  "roadPage",
  "portPage",
  "contactPage",
  "aboutPage",
];

export const schemaTypes: SchemaTypeDefinition[] = [
  // Objects
  localeString,
  localeText,
  siteImage,
  ctaLink,
  pageHero,
  iconFeature,
  iconLabel,
  infoCard,
  featureList,
  coverageItem,
  checklistCard,
  infoPanel,
  // Documents
  siteSettings,
  homePage,
  aboutPage,
  airPage,
  roadPage,
  portPage,
  contactPage,
  testimonial,
];
