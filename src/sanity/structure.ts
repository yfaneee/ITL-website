import {
  House,
  Info,
  Mail,
  Plane,
  Quote,
  Settings,
  Ship,
  Truck,
} from "lucide-react";
import type { StructureResolver } from "sanity/structure";

/** Singleton pages, listed in the order they appear in the site navigation. */
const singletons: { type: string; title: string; icon: typeof House }[] = [
  { type: "homePage", title: "Home Page", icon: House },
  { type: "aboutPage", title: "About Page", icon: Info },
  { type: "roadPage", title: "Road Transport Page", icon: Truck },
  { type: "airPage", title: "Air Transport Page", icon: Plane },
  { type: "portPage", title: "Port Operations Page", icon: Ship },
  { type: "contactPage", title: "Contact Page", icon: Mail },
];

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Site Settings")
        .icon(Settings)
        .child(
          S.document().schemaType("siteSettings").documentId("siteSettings")
        ),
      S.divider(),
      ...singletons.map((page) =>
        S.listItem()
          .title(page.title)
          .icon(page.icon)
          .child(S.document().schemaType(page.type).documentId(page.type))
      ),
      S.divider(),
      S.listItem()
        .title("Testimonials")
        .icon(Quote)
        .child(
          S.documentTypeList("testimonial")
            .title("Testimonials")
            .defaultOrdering([{ field: "order", direction: "asc" }])
        ),
    ]);
