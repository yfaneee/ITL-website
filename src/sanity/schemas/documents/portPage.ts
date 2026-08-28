import { Ship } from "lucide-react";
import { defineArrayMember, defineField, defineType } from "sanity";

export const portPage = defineType({
  name: "portPage",
  title: "Port Operations Page",
  type: "document",
  icon: Ship,
  groups: [
    { name: "hero", title: "Hero", default: true },
    { name: "intro", title: "Introduction" },
    { name: "incoterms", title: "Incoterms" },
    { name: "containers", title: "Containers" },
    { name: "features", title: "Service features" },
    { name: "gallery", title: "Gallery" },
  ],
  fields: [
    defineField({ name: "hero", title: "Hero", type: "pageHero", group: "hero" }),

    defineField({
      name: "introHeading",
      title: "Heading",
      type: "localeString",
      group: "intro",
    }),
    defineField({
      name: "introParagraphs",
      title: "Paragraphs",
      type: "array",
      group: "intro",
      of: [defineArrayMember({ type: "localeText" })],
    }),

    defineField({
      name: "incotermsHeading",
      title: "Heading",
      type: "localeString",
      group: "incoterms",
    }),
    defineField({
      name: "incotermsBackground",
      title: "Section background image",
      type: "siteImage",
      group: "incoterms",
    }),
    defineField({
      name: "incotermsSlides",
      title: "Incoterms charts",
      type: "array",
      group: "incoterms",
      of: [defineArrayMember({ type: "siteImage" })],
      options: { layout: "grid" },
    }),
    defineField({
      name: "quickTipsHeading",
      title: "Quick tips heading",
      type: "localeString",
      group: "incoterms",
    }),
    defineField({
      name: "quickTips",
      title: "Quick tips",
      type: "array",
      group: "incoterms",
      of: [defineArrayMember({ type: "localeText" })],
    }),
    defineField({
      name: "notCoveredHeading",
      title: "“Not covered” heading",
      type: "localeString",
      group: "incoterms",
    }),
    defineField({
      name: "notCoveredIntro",
      title: "“Not covered” intro",
      type: "localeText",
      group: "incoterms",
    }),
    defineField({
      name: "notCoveredItems",
      title: "“Not covered” items",
      type: "array",
      group: "incoterms",
      of: [defineArrayMember({ type: "localeString" })],
    }),
    defineField({
      name: "notCoveredOutro",
      title: "“Not covered” closing paragraph",
      type: "localeText",
      group: "incoterms",
    }),

    defineField({
      name: "containerSlidesHeading",
      title: "Measurement guide heading",
      type: "localeString",
      group: "containers",
    }),
    defineField({
      name: "containerSlides",
      title: "Measurement guide images",
      type: "array",
      group: "containers",
      of: [defineArrayMember({ type: "siteImage" })],
      options: { layout: "grid" },
    }),
    defineField({
      name: "containerTypesHeading",
      title: "Container types heading",
      type: "localeString",
      group: "containers",
    }),
    defineField({
      name: "containerTypesImage",
      title: "Container types diagram",
      type: "siteImage",
      group: "containers",
    }),

    defineField({
      name: "featuresHeading",
      title: "Heading",
      type: "localeString",
      group: "features",
    }),
    defineField({
      name: "features",
      title: "Cards",
      description:
        "The first five cards are arranged in the staggered layout automatically.",
      type: "array",
      group: "features",
      of: [defineArrayMember({ type: "checklistCard" })],
    }),

    defineField({
      name: "gallery",
      title: "Gallery images",
      type: "array",
      group: "gallery",
      of: [defineArrayMember({ type: "siteImage" })],
      options: { layout: "grid" },
    }),
  ],
  preview: { prepare: () => ({ title: "Port Operations Page" }) },
});
