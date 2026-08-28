import Image from "next/image";
import { Check, X } from "lucide-react";

import Gallery from "@/components/sections/Gallery";
import ImageSlideshow from "@/components/sections/ImageSlideshow";
import ServiceHero from "@/components/sections/ServiceHero";
import { getPortContent, type ChecklistCard } from "@/content/port";
import type { Locale } from "@/i18n/config";
import { imageUrl } from "@/sanity/image";

/**
 * Staggered "pentagon" placement for the first five feature cards on a
 * six-column grid. Extra cards simply flow normally.
 */
const FEATURE_GRID_COLUMNS = [
  "1 / span 2",
  "3 / span 2",
  "5 / span 2",
  "2 / span 2",
  "4 / span 2",
];

function FeatureCard({
  feature,
  gridColumn,
}: {
  feature: ChecklistCard;
  gridColumn?: string;
}) {
  const icon = imageUrl(feature.icon, { width: 48 });

  return (
    <div
      className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
      style={{ gridColumn }}
    >
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
        style={{ backgroundColor: "var(--itl-blue)" }}
      >
        {icon && (
          <div className="relative w-6 h-6">
            <Image
              src={icon}
              fill
              alt={feature.icon?.alt || ""}
              className="object-contain"
              sizes="24px"
              style={{ filter: "brightness(0) invert(1)" }}
            />
          </div>
        )}
      </div>
      <h3 className="font-semibold text-gray-900 text-sm mb-4">{feature.title}</h3>
      <ul className="space-y-2.5">
        {feature.items.map((item) => (
          <li key={item} className="flex items-start gap-2 text-xs text-gray-600">
            {feature.listStyle === "cross" ? (
              <X size={12} className="mt-0.5 shrink-0" style={{ color: "#E53E3E" }} />
            ) : (
              <Check
                size={12}
                className="mt-0.5 shrink-0"
                style={{ color: "var(--itl-blue)" }}
              />
            )}
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default async function PortPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const content = await getPortContent(locale);

  const incotermsBackground = imageUrl(content.incotermsBackground, {
    width: 1920,
  });
  const containerTypes = imageUrl(content.containerTypesImage, { width: 1400 });

  return (
    <div>
      {/* ── Hero ── */}
      <ServiceHero
        hero={content.hero}
        locale={locale}
        overlay={
          <div
            className="absolute inset-0"
            style={{ backgroundColor: "#161F2F", opacity: 0.65 }}
          />
        }
      />

      {/* ── Text Section ── */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-900 leading-snug mb-4 text-center">
            {content.introHeading}
          </h2>
          {content.introParagraphs.map((paragraph, i) => (
            <p
              key={i}
              className={`text-gray-500 text-sm leading-relaxed ${
                i < content.introParagraphs.length - 1 ? "mb-4" : ""
              }`}
            >
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      {/* ── Incoterms Section ── */}
      <section className="relative py-16 overflow-hidden">
        {incotermsBackground && (
          <Image
            src={incotermsBackground}
            fill
            alt=""
            className="object-cover object-center"
            sizes="100vw"
          />
        )}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, #3BA67E 0%, #369077 25%, #338A81 50%, #185089 75%, #0B3076 100%)",
            opacity: 0.9,
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-10 items-start">
            {/* Left: Incoterms Slideshow */}
            <div>
              <h2 className="text-2xl font-semibold text-white mb-6">
                {content.incotermsHeading}
              </h2>
              <ImageSlideshow
                images={content.incotermsSlides}
                locale={locale}
                variant="glass"
              />
            </div>

            {/* Right: Quick Tips */}
            <div>
              <h2 className="text-2xl font-semibold text-white mb-6">
                {content.quickTipsHeading}
              </h2>
              <div className="space-y-3">
                {content.quickTips.map((tip, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 bg-white/10 backdrop-blur-sm border border-white/15 rounded-xl px-4 py-3"
                  >
                    <Check size={15} className="shrink-0 mt-0.5 text-green-300" />
                    <p className="text-white/90 text-sm leading-relaxed">{tip}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── What Incoterms Do Not Cover ── */}
      <section className="py-14 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            {content.notCoveredHeading}
          </h2>
          <p className="text-gray-500 text-sm leading-relaxed mb-6">
            {content.notCoveredIntro}
          </p>
          <ul className="space-y-3">
            {content.notCoveredItems.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2.5 text-sm text-gray-600"
              >
                <X
                  size={14}
                  className="shrink-0 mt-0.5"
                  style={{ color: "#E53E3E" }}
                />
                {item}
              </li>
            ))}
          </ul>
          <p className="text-gray-500 text-sm leading-relaxed mt-6">
            {content.notCoveredOutro}
          </p>
        </div>
      </section>

      {/* ── Container Types Slideshow ── */}
      <section className="py-14 px-6" style={{ backgroundColor: "var(--itl-gray)" }}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-semibold text-gray-900 text-center mb-10">
            {content.containerSlidesHeading}
          </h2>
          <ImageSlideshow
            images={content.containerSlides}
            locale={locale}
            variant="card"
          />
        </div>
      </section>

      {/* ── Container Types Overview Image ── */}
      <section className="py-14 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-semibold text-gray-900 text-center mb-10">
            {content.containerTypesHeading}
          </h2>
          {containerTypes && (
            <div className="relative w-full h-80 md:h-[440px]">
              <Image
                src={containerTypes}
                fill
                alt={content.containerTypesImage?.alt || ""}
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 1024px"
              />
            </div>
          )}
        </div>
      </section>

      {/* ── Service Features ── */}
      <section className="py-14 px-6" style={{ backgroundColor: "var(--itl-gray)" }}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-semibold text-gray-900 text-center mb-10">
            {content.featuresHeading}
          </h2>
          {/* Pentagon layout: 6-col grid, cards placed with inline gridColumn styles */}
          <div className="grid grid-cols-6 gap-5">
            {content.features.map((feature, i) => (
              <FeatureCard
                key={feature.title}
                feature={feature}
                gridColumn={FEATURE_GRID_COLUMNS[i]}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── Gallery Slideshow ── */}
      <section
        className="py-16 px-6 overflow-hidden"
        style={{ backgroundColor: "var(--itl-gray)" }}
      >
        <Gallery images={content.gallery} />
      </section>
    </div>
  );
}
