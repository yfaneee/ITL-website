import { defineArrayMember, defineField, defineType } from "sanity";

/** Icon + heading + body. Used for the benefit grids on the service pages. */
export const iconFeature = defineType({
  name: "iconFeature",
  title: "Feature",
  type: "object",
  fields: [
    defineField({ name: "icon", title: "Icon", type: "siteImage" }),
    defineField({ name: "title", title: "Title", type: "localeString" }),
    defineField({ name: "description", title: "Description", type: "localeText" }),
  ],
  preview: { select: { title: "title.en", media: "icon" } },
});

/** Icon + short label, for the compact service tiles. */
export const iconLabel = defineType({
  name: "iconLabel",
  title: "Service tile",
  type: "object",
  fields: [
    defineField({ name: "icon", title: "Icon", type: "siteImage" }),
    defineField({ name: "label", title: "Label", type: "localeString" }),
    defineField({
      name: "invertIcon",
      title: "Invert icon colour",
      description:
        "Turn on for dark icons so they show up white on the coloured tile.",
      type: "boolean",
      initialValue: false,
    }),
  ],
  preview: { select: { title: "label.en", media: "icon" } },
});

/** Heading + body, with no icon. */
export const infoCard = defineType({
  name: "infoCard",
  title: "Card",
  type: "object",
  fields: [
    defineField({ name: "title", title: "Title", type: "localeString" }),
    defineField({ name: "description", title: "Description", type: "localeText" }),
  ],
  preview: { select: { title: "title.en", subtitle: "description.en" } },
});

/** Icon + title + a checklist of bullet points. */
export const featureList = defineType({
  name: "featureList",
  title: "Feature list",
  type: "object",
  fields: [
    defineField({ name: "icon", title: "Icon", type: "siteImage" }),
    defineField({ name: "title", title: "Title", type: "localeString" }),
    defineField({
      name: "items",
      title: "Bullet points",
      type: "array",
      of: [defineArrayMember({ type: "localeString" })],
    }),
  ],
  preview: { select: { title: "title.en", media: "icon" } },
});

/** A region and a short note about it, for the coverage lists. */
export const coverageItem = defineType({
  name: "coverageItem",
  title: "Coverage entry",
  type: "object",
  fields: [
    defineField({ name: "region", title: "Region", type: "localeString" }),
    defineField({ name: "detail", title: "Detail", type: "localeString" }),
  ],
  preview: { select: { title: "region.en", subtitle: "detail.en" } },
});

/** Icon + title + a tick or cross list. Used by the Port Operations grid. */
export const checklistCard = defineType({
  name: "checklistCard",
  title: "Checklist card",
  type: "object",
  fields: [
    defineField({ name: "icon", title: "Icon", type: "siteImage" }),
    defineField({ name: "title", title: "Title", type: "localeString" }),
    defineField({
      name: "listStyle",
      title: "List marker",
      type: "string",
      options: {
        list: [
          { title: "Tick (positive)", value: "check" },
          { title: "Cross (negative)", value: "cross" },
        ],
        layout: "radio",
      },
      initialValue: "check",
    }),
    defineField({
      name: "items",
      title: "Items",
      type: "array",
      of: [defineArrayMember({ type: "localeString" })],
    }),
  ],
  preview: { select: { title: "title.en", media: "icon" } },
});

/** Icon + title + free-form lines. Blank lines render as spacing. */
export const infoPanel = defineType({
  name: "infoPanel",
  title: "Info panel",
  type: "object",
  fields: [
    defineField({ name: "icon", title: "Icon", type: "siteImage" }),
    defineField({ name: "title", title: "Title", type: "localeString" }),
    defineField({
      name: "lines",
      title: "Lines",
      description: "Leave a line blank to insert a gap.",
      type: "array",
      of: [defineArrayMember({ type: "localeString" })],
    }),
  ],
  preview: { select: { title: "title.en", media: "icon" } },
});
