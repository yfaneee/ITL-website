import { Settings } from "lucide-react";
import { defineField, defineType } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  icon: Settings,
  description: "Brand details and contact channels used across every page.",
  groups: [
    { name: "brand", title: "Brand", default: true },
    { name: "contact", title: "Contact channels" },
  ],
  fields: [
    defineField({
      name: "brandName",
      title: "Company name",
      type: "string",
      group: "brand",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "tagline",
      title: "Tagline",
      description: "Shown under the logo in the header.",
      type: "localeString",
      group: "brand",
    }),
    defineField({
      name: "footerBlurb",
      title: "Footer description",
      type: "localeText",
      group: "brand",
    }),
    defineField({
      name: "logo",
      title: "Logo",
      type: "siteImage",
      group: "brand",
    }),
    defineField({
      name: "footerBackground",
      title: "Footer background image",
      type: "siteImage",
      group: "brand",
    }),
    defineField({
      name: "phone",
      title: "Phone number",
      type: "string",
      group: "contact",
    }),
    defineField({
      name: "email",
      title: "Email address",
      type: "string",
      group: "contact",
    }),
    defineField({
      name: "whatsappUrl",
      title: "WhatsApp link",
      type: "url",
      group: "contact",
    }),
    defineField({
      name: "linkedinUrl",
      title: "LinkedIn link",
      type: "url",
      group: "contact",
    }),
  ],
  preview: {
    prepare: () => ({ title: "Site Settings" }),
  },
});
