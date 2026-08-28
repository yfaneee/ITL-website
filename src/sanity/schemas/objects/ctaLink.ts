import { defineField, defineType } from "sanity";

export const ctaLink = defineType({
  name: "ctaLink",
  title: "Button",
  type: "object",
  fields: [
    defineField({
      name: "label",
      title: "Label",
      type: "localeString",
    }),
    defineField({
      name: "href",
      title: "Link target",
      description:
        "A path on this site such as /contact, an anchor such as #quote, or a full URL.",
      type: "string",
    }),
  ],
  preview: {
    select: { title: "label.en", subtitle: "href" },
  },
});
