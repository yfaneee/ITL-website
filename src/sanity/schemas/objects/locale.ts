import { defineField, defineType } from "sanity";

import { localeNames, locales, defaultLocale } from "@/i18n/config";

function localeFields(rows?: number) {
  return locales.map((locale) =>
    defineField({
      name: locale,
      title: localeNames[locale],
      type: rows ? "text" : "string",
      ...(rows ? { rows } : {}),
    })
  );
}

/** Preview shows the default-locale value so document lists stay readable. */
const preview = {
  select: { title: defaultLocale },
};

export const localeString = defineType({
  name: "localeString",
  title: "Text",
  type: "object",
  options: { collapsible: false },
  fields: localeFields(),
  preview,
});

export const localeText = defineType({
  name: "localeText",
  title: "Long text",
  type: "object",
  options: { collapsible: false },
  fields: localeFields(3),
  preview,
});
