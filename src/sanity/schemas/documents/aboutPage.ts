import { Info } from "lucide-react";
import { defineArrayMember, defineField, defineType } from "sanity";

import { iconOptions } from "@/components/icons/registry";

/** Reusable field definitions for the repeated narrative sections. */
const eyebrow = (group: string) =>
  defineField({
    name: `${group}Eyebrow`,
    title: "Eyebrow",
    description: "Small label above the heading, e.g. “01 — Who we are”.",
    type: "localeString",
    group,
  });

const heading = (group: string) =>
  defineField({
    name: `${group}Heading`,
    title: "Heading",
    description: "Press Enter to control where the heading wraps.",
    type: "localeText",
    group,
  });

const paragraphs = (group: string) =>
  defineField({
    name: `${group}Paragraphs`,
    title: "Paragraphs",
    type: "array",
    group,
    of: [defineArrayMember({ type: "localeText" })],
  });

const iconField = defineField({
  name: "icon",
  title: "Icon",
  type: "string",
  options: { list: iconOptions },
});

export const aboutPage = defineType({
  name: "aboutPage",
  title: "About Page",
  type: "document",
  icon: Info,
  groups: [
    { name: "hero", title: "Hero", default: true },
    { name: "who", title: "01 Who we are" },
    { name: "background", title: "02 Background" },
    { name: "services", title: "03 What we do" },
    { name: "coverage", title: "04 Coverage" },
    { name: "process", title: "05 How we work" },
    { name: "why", title: "06 Why ITL" },
    { name: "group", title: "07 Our group" },
    { name: "commitment", title: "08 Commitment" },
    { name: "cta", title: "Call to action" },
  ],
  fields: [
    eyebrow("hero"),
    heading("hero"),
    defineField({
      name: "heroSubtitle",
      title: "Sub-headline",
      type: "localeText",
      group: "hero",
    }),
    paragraphs("hero"),
    defineField({
      name: "heroBadges",
      title: "Badges",
      type: "array",
      group: "hero",
      of: [defineArrayMember({ type: "localeString" })],
    }),

    eyebrow("who"),
    heading("who"),
    paragraphs("who"),

    eyebrow("background"),
    heading("background"),
    paragraphs("background"),
    defineField({
      name: "backgroundStats",
      title: "Statistics",
      type: "array",
      group: "background",
      of: [
        defineArrayMember({
          type: "object",
          name: "stat",
          fields: [
            defineField({ name: "value", title: "Value", type: "string" }),
            defineField({ name: "label", title: "Label", type: "localeString" }),
          ],
          preview: { select: { title: "value", subtitle: "label.en" } },
        }),
      ],
    }),

    eyebrow("services"),
    heading("services"),
    paragraphs("services"),
    defineField({
      name: "servicesItems",
      title: "Service tiles",
      type: "array",
      group: "services",
      of: [
        defineArrayMember({
          type: "object",
          name: "serviceItem",
          fields: [
            iconField,
            defineField({ name: "title", title: "Title", type: "localeString" }),
            defineField({ name: "subtitle", title: "Subtitle", type: "localeString" }),
          ],
          preview: { select: { title: "title.en", subtitle: "subtitle.en" } },
        }),
      ],
    }),

    eyebrow("coverage"),
    heading("coverage"),
    paragraphs("coverage"),
    defineField({
      name: "coverageRows",
      title: "Regions",
      type: "array",
      group: "coverage",
      of: [
        defineArrayMember({
          type: "object",
          name: "coverageRow",
          fields: [
            defineField({ name: "region", title: "Region", type: "localeString" }),
            defineField({ name: "note", title: "Note", type: "localeString" }),
          ],
          preview: { select: { title: "region.en", subtitle: "note.en" } },
        }),
      ],
    }),
    defineField({
      name: "coverageFootnote",
      title: "Footnote",
      type: "localeString",
      group: "coverage",
    }),

    eyebrow("process"),
    heading("process"),
    paragraphs("process"),
    defineField({
      name: "processItems",
      title: "Commitments",
      type: "array",
      group: "process",
      of: [
        defineArrayMember({
          type: "object",
          name: "processItem",
          fields: [
            iconField,
            defineField({ name: "text", title: "Text", type: "localeText" }),
          ],
          preview: { select: { title: "text.en" } },
        }),
      ],
    }),

    eyebrow("why"),
    heading("why"),
    defineField({
      name: "whyItems",
      title: "Reasons",
      type: "array",
      group: "why",
      of: [
        defineArrayMember({
          type: "object",
          name: "whyItem",
          fields: [
            iconField,
            defineField({ name: "title", title: "Title", type: "localeString" }),
            defineField({ name: "text", title: "Text", type: "localeText" }),
          ],
          preview: { select: { title: "title.en", subtitle: "text.en" } },
        }),
      ],
    }),

    eyebrow("group"),
    heading("group"),
    defineField({
      name: "groupImage",
      title: "Image",
      type: "siteImage",
      group: "group",
    }),
    paragraphs("group"),

    eyebrow("commitment"),
    heading("commitment"),
    paragraphs("commitment"),

    heading("cta"),
    defineField({
      name: "ctaDescription",
      title: "Description",
      type: "localeText",
      group: "cta",
    }),
    defineField({
      name: "ctaButton",
      title: "Button",
      type: "ctaLink",
      group: "cta",
    }),
  ],
  preview: { prepare: () => ({ title: "About Page" }) },
});
