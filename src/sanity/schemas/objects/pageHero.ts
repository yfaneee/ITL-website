import { defineField, defineType } from "sanity";

export const pageHero = defineType({
  name: "pageHero",
  title: "Hero",
  type: "object",
  fields: [
    defineField({
      name: "eyebrow",
      title: "Eyebrow",
      description: "Small label above the headline, next to the service icon.",
      type: "localeString",
    }),
    defineField({
      name: "icon",
      title: "Service icon",
      description: "Small icon shown beside the eyebrow label.",
      type: "siteImage",
    }),
    defineField({ name: "title", title: "Headline", type: "localeString" }),
    defineField({ name: "subtitle", title: "Sub-headline", type: "localeText" }),
    defineField({
      name: "backgroundImage",
      title: "Background image",
      type: "siteImage",
    }),
    defineField({ name: "primaryCta", title: "Primary button", type: "ctaLink" }),
    defineField({
      name: "secondaryCta",
      title: "Secondary button",
      type: "ctaLink",
    }),
  ],
  preview: {
    select: { title: "title.en", media: "backgroundImage" },
  },
});
