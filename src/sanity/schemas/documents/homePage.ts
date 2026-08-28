import { House } from "lucide-react";
import { defineArrayMember, defineField, defineType } from "sanity";

export const homePage = defineType({
  name: "homePage",
  title: "Home Page",
  type: "document",
  icon: House,
  groups: [
    { name: "hero", title: "Hero", default: true },
    { name: "services", title: "Service cards" },
    { name: "sectors", title: "Sectors" },
    { name: "help", title: "Help section" },
    { name: "testimonials", title: "Testimonials" },
    { name: "gallery", title: "Gallery" },
  ],
  fields: [
    defineField({ name: "hero", title: "Hero", type: "pageHero", group: "hero" }),

    defineField({
      name: "serviceCards",
      title: "Service cards",
      description: "The three cards linking to the service pages.",
      type: "array",
      group: "services",
      of: [
        defineArrayMember({
          type: "object",
          name: "serviceCard",
          fields: [
            defineField({ name: "title", type: "localeString", title: "Title" }),
            defineField({
              name: "description",
              type: "localeText",
              title: "Description",
            }),
            defineField({
              name: "href",
              type: "string",
              title: "Link target",
              initialValue: "/road",
            }),
            defineField({
              name: "backgroundImage",
              type: "siteImage",
              title: "Background image",
            }),
            defineField({ name: "icon", type: "siteImage", title: "Icon" }),
          ],
          preview: {
            select: { title: "title.en", media: "backgroundImage" },
          },
        }),
      ],
    }),

    defineField({
      name: "sectorsHeading",
      title: "Sectors heading",
      type: "localeString",
      group: "sectors",
    }),
    defineField({
      name: "sectorsSubheading",
      title: "Sectors sub-heading",
      type: "localeString",
      group: "sectors",
    }),
    defineField({
      name: "sectors",
      title: "Sectors",
      type: "array",
      group: "sectors",
      of: [
        defineArrayMember({
          type: "object",
          name: "sector",
          fields: [
            defineField({ name: "name", type: "localeString", title: "Name" }),
            defineField({ name: "icon", type: "siteImage", title: "Icon" }),
          ],
          preview: { select: { title: "name.en", media: "icon" } },
        }),
      ],
    }),

    defineField({
      name: "helpHeading",
      title: "Heading",
      type: "localeString",
      group: "help",
    }),
    defineField({
      name: "helpPrimaryLabel",
      title: "Primary button label",
      type: "localeString",
      group: "help",
    }),
    defineField({
      name: "helpSecondaryLabel",
      title: "Secondary button label",
      type: "localeString",
      group: "help",
    }),

    defineField({
      name: "testimonialsHeading",
      title: "Heading",
      type: "localeString",
      group: "testimonials",
    }),
    defineField({
      name: "testimonialsSubheading",
      title: "Sub-heading",
      type: "localeString",
      group: "testimonials",
    }),
    defineField({
      name: "testimonialsLinkLabel",
      title: "“View all” link label",
      type: "localeString",
      group: "testimonials",
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
  preview: { prepare: () => ({ title: "Home Page" }) },
});
