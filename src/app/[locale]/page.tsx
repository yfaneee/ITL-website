import Hero from "@/components/sections/Hero";
import HowCanWeHelp from "@/components/sections/HowCanWeHelp";
import ServicesCards from "@/components/sections/ServicesCards";
import HelpSection from "@/components/sections/HelpSection";
import Gallery from "@/components/sections/Gallery";
import Testimonials from "@/components/sections/Testimonials";
import { getHomeContent } from "@/content/home";
import { getSiteSettings } from "@/content/site";
import { getTestimonials } from "@/content/testimonials";
import type { Locale } from "@/i18n/config";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const [content, settings, testimonials] = await Promise.all([
    getHomeContent(locale),
    getSiteSettings(locale),
    getTestimonials(locale),
  ]);

  return (
    <>
      <Hero hero={content.hero} locale={locale} />
      <ServicesCards cards={content.serviceCards} locale={locale} />
      <HowCanWeHelp
        heading={content.sectorsHeading}
        subheading={content.sectorsSubheading}
        sectors={content.sectors}
      />
      <HelpSection
        heading={content.helpHeading}
        primaryLabel={content.helpPrimaryLabel}
        secondaryLabel={content.helpSecondaryLabel}
        settings={settings}
        locale={locale}
      />
      <Testimonials
        heading={content.testimonialsHeading}
        subheading={content.testimonialsSubheading}
        linkLabel={content.testimonialsLinkLabel}
        testimonials={testimonials}
        locale={locale}
      />
      <section
        className="py-16 px-6 overflow-hidden"
        style={{ backgroundColor: "var(--itl-gray)" }}
      >
        <Gallery images={content.gallery} />
      </section>
    </>
  );
}
