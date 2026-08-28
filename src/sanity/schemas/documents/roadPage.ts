import { Truck } from "lucide-react";
import { defineArrayMember, defineField, defineType } from "sanity";

export const roadPage = defineType({
  name: "roadPage",
  title: "Road Transport Page",
  type: "document",
  icon: Truck,
  groups: [
    { name: "hero", title: "Hero", default: true },
    { name: "value", title: "Value proposition" },
    { name: "features", title: "Service features" },
    { name: "coverage", title: "Coverage" },
    { name: "quote", title: "Quote form" },
  ],
  fields: [
    defineField({ name: "hero", title: "Hero", type: "pageHero", group: "hero" }),

    defineField({
      name: "valueHeading",
      title: "Heading",
      type: "localeText",
      group: "value",
    }),
    defineField({
      name: "valueDescription",
      title: "Description",
      type: "localeText",
      group: "value",
    }),

    defineField({
      name: "featuresHeading",
      title: "Heading",
      type: "localeString",
      group: "features",
    }),
    defineField({
      name: "features",
      title: "Features",
      type: "array",
      group: "features",
      of: [defineArrayMember({ type: "featureList" })],
    }),

    defineField({
      name: "coverageHeading",
      title: "Heading",
      type: "localeString",
      group: "coverage",
    }),
    defineField({
      name: "coveragePrimaryHeading",
      title: "First column heading",
      type: "localeString",
      group: "coverage",
    }),
    defineField({
      name: "coveragePrimary",
      title: "First column",
      type: "array",
      group: "coverage",
      of: [defineArrayMember({ type: "coverageItem" })],
    }),
    defineField({
      name: "coverageSecondary",
      title: "Second column",
      type: "array",
      group: "coverage",
      of: [defineArrayMember({ type: "coverageItem" })],
    }),
    defineField({
      name: "coverageMapLabel",
      title: "Map placeholder label",
      type: "localeString",
      group: "coverage",
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
      type: "localeText",
      group: "quote",
    }),
  ],
  preview: { prepare: () => ({ title: "Road Transport Page" }) },
});
