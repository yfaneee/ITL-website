import { languageFilter } from "@sanity/language-filter";
import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";

import { defaultLocale, localeNames, locales } from "@/i18n/config";
import { apiVersion, dataset, projectId } from "@/sanity/env";
import { localizedDocumentTypes, schemaTypes } from "@/sanity/schemas";
import { structure } from "@/sanity/structure";

export default defineConfig({
  name: "itl",
  title: "Inter Trans Logistics",
  basePath: "/studio",
  // Falls back to a placeholder so `next build` succeeds before the Sanity
  // project exists; the /studio route shows setup instructions in that case.
  projectId: projectId || "placeholder",
  dataset,
  schema: { types: schemaTypes },
  plugins: [
    structureTool({ structure }),
    languageFilter({
      supportedLanguages: locales.map((locale) => ({
        id: locale,
        title: localeNames[locale],
      })),
      defaultLanguages: [defaultLocale],
      documentTypes: localizedDocumentTypes,
      filterField: (enclosingType, member, selectedLanguageIds) =>
        !enclosingType.name.startsWith("locale") ||
        !("name" in member) ||
        selectedLanguageIds.includes(member.name),
    }),
    visionTool({ defaultApiVersion: apiVersion }),
  ],
});
