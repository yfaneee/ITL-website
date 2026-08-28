import { Quote } from "lucide-react";
import { defineField, defineType } from "sanity";

export const testimonial = defineType({
  name: "testimonial",
  title: "Testimonial",
  type: "document",
  icon: Quote,
  description:
    "Client quotes. Shown on the homepage, the About page and the Contact page.",
  fields: [
    defineField({
      name: "name",
      title: "Client name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "initials",
      title: "Initials",
      description: "Two letters shown in the avatar circle, e.g. “AG”.",
      type: "string",
      validation: (rule) => rule.max(3),
    }),
    defineField({
      name: "sector",
      title: "Sector",
      type: "localeString",
    }),
    defineField({
      name: "quote",
      title: "Quote",
      type: "localeText",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "order",
      title: "Display order",
      description: "Lower numbers appear first.",
      type: "number",
      initialValue: 0,
    }),
  ],
  orderings: [
    {
      title: "Display order",
      name: "displayOrder",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
  preview: {
    select: { title: "name", subtitle: "sector.en" },
  },
});
