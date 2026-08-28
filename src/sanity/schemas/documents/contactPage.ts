import { Mail } from "lucide-react";
import { defineArrayMember, defineField, defineType } from "sanity";

export const contactPage = defineType({
  name: "contactPage",
  title: "Contact Page",
  type: "document",
  icon: Mail,
  groups: [
    { name: "hero", title: "Hero", default: true },
    { name: "channels", title: "Talk to us" },
    { name: "form", title: "Message form" },
    { name: "info", title: "Info cards" },
    { name: "testimonials", title: "Testimonials" },
    { name: "map", title: "Find us" },
  ],
  fields: [
    defineField({
      name: "hero",
      title: "Hero",
      description:
        "Phone, email and social links come from Site Settings so they stay consistent across the site.",
      type: "pageHero",
      group: "hero",
    }),

    defineField({
      name: "channelsHeading",
      title: "Heading",
      type: "localeString",
      group: "channels",
    }),

    defineField({
      name: "formHeading",
      title: "Heading",
      type: "localeString",
      group: "form",
    }),
    defineField({
      name: "formSubheading",
      title: "Sub-heading",
      type: "localeText",
      group: "form",
    }),

    defineField({
      name: "infoCards",
      title: "Info cards",
      type: "array",
      group: "info",
      of: [defineArrayMember({ type: "infoPanel" })],
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
      name: "mapHeading",
      title: "Heading",
      type: "localeString",
      group: "map",
    }),
    defineField({
      name: "mapPlaceholder",
      title: "Placeholder message",
      type: "localeString",
      group: "map",
    }),
    defineField({
      name: "mapAddress",
      title: "Address line",
      type: "localeString",
      group: "map",
    }),
  ],
  preview: { prepare: () => ({ title: "Contact Page" }) },
});
