import { Plane } from "lucide-react";
import { defineArrayMember, defineField, defineType } from "sanity";

export const airPage = defineType({
  name: "airPage",
  title: "Air Transport Page",
  type: "document",
  icon: Plane,
  groups: [
    { name: "hero", title: "Hero", default: true },
    { name: "benefits", title: "Key benefits" },
    { name: "precision", title: "Special cargo" },
    { name: "sustainable", title: "Sustainability" },
    { name: "services", title: "Comprehensive services" },
    { name: "quote", title: "Quote form" },
  ],
  fields: [
    defineField({ name: "hero", title: "Hero", type: "pageHero", group: "hero" }),

    defineField({
      name: "benefitsHeading",
      title: "Heading",
      type: "localeString",
      group: "benefits",
    }),
    defineField({
      name: "benefits",
      title: "Benefits",
      type: "array",
      group: "benefits",
      of: [defineArrayMember({ type: "iconFeature" })],
    }),

    defineField({
      name: "precisionHeading",
      title: "Heading",
      type: "localeString",
      group: "precision",
    }),
    defineField({
      name: "precisionDescription",
      title: "Description",
      type: "localeText",
      group: "precision",
    }),
    defineField({
      name: "precisionItems",
      title: "Cargo types",
      type: "array",
      group: "precision",
      of: [defineArrayMember({ type: "localeString" })],
    }),
    defineField({
      name: "precisionImage",
      title: "Panel image",
      type: "siteImage",
      group: "precision",
    }),

    defineField({
      name: "sustainableHeading",
      title: "Heading",
      type: "localeString",
      group: "sustainable",
    }),
    defineField({
      name: "sustainableDescription",
      title: "Description",
      type: "localeText",
      group: "sustainable",
    }),
    defineField({
      name: "sustainableImage",
      title: "Panel image",
      type: "siteImage",
      group: "sustainable",
    }),
    defineField({
      name: "sustainableCards",
      title: "Programmes",
      type: "array",
      group: "sustainable",
      of: [defineArrayMember({ type: "infoCard" })],
    }),

    defineField({
      name: "servicesHeading",
      title: "Heading",
      type: "localeString",
      group: "services",
    }),
    defineField({
      name: "services",
      title: "Services",
      type: "array",
      group: "services",
      of: [defineArrayMember({ type: "iconLabel" })],
    }),
    defineField({
      name: "customSolutionTitle",
      title: "Custom solution title",
      type: "localeString",
      group: "services",
    }),
    defineField({
      name: "customSolutionDescription",
      title: "Custom solution description",
      type: "localeText",
      group: "services",
    }),
    defineField({
      name: "customSolutionCta",
      title: "Custom solution button",
      type: "ctaLink",
      group: "services",
    }),

    defineField({
      name: "quoteHeading",
      title: "Heading",
      type: "localeString",
      group: "quote",
    }),
    defineField({
      name: "quoteSubheading",
      title: "Sub-heading",
      type: "localeString",
      group: "quote",
    }),
  ],
  preview: { prepare: () => ({ title: "Air Transport Page" }) },
});
