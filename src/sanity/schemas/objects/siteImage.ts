import { defineField, defineType } from "sanity";

export const siteImage = defineType({
  name: "siteImage",
  title: "Image",
  type: "image",
  options: { hotspot: true },
  fields: [
    defineField({
      name: "alt",
      title: "Alt text",
      description:
        "Describes the image for screen readers and search engines. Leave blank for purely decorative images.",
      type: "localeString",
    }),
  ],
});
