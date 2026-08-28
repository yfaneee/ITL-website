import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";

import AirQuoteForm from "@/components/forms/AirQuoteForm";
import ServiceHero from "@/components/sections/ServiceHero";
import { getAirContent } from "@/content/air";
import type { Locale } from "@/i18n/config";
import { localePath } from "@/i18n/navigation";
import { imageUrl } from "@/sanity/image";

export default async function AirPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const content = await getAirContent(locale);

  const precisionImage = imageUrl(content.precisionImage, { width: 260 });
  const sustainableImage = imageUrl(content.sustainableImage, { width: 176 });

  return (
    <div>
      {/* ── Hero ── */}
      <ServiceHero
        hero={content.hero}
        locale={locale}
        ctaVariant="light"
        overlay={
          /* 45° gradient overlay: #3BA67E → #338A81 → #0B3076 at 70% opacity */
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(45deg, #3BA67E 0%, #338A81 50%, #0B3076 100%)",
              opacity: 0.7,
            }}
          />
        }
      />

      {/* ── Key Benefits ── */}
      <section className="py-14 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-semibold text-gray-900 text-center mb-10">
            {content.benefitsHeading}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {content.benefits.map((benefit) => {
              const icon = imageUrl(benefit.icon, { width: 48 });
              return (
                <div key={benefit.title} className="flex flex-col items-start">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 shrink-0"
                    style={{ backgroundColor: "var(--itl-blue)" }}
                  >
                    {icon && (
                      <div className="relative w-6 h-6">
                        <Image
                          src={icon}
                          fill
                          alt={benefit.icon?.alt || ""}
                          className="object-contain"
                          sizes="24px"
                        />
                      </div>
                    )}
                  </div>
                  <h3 className="font-semibold text-gray-900 text-sm mb-2 leading-snug">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-500 text-xs leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Precision Solutions for Special Cargo ── */}
      <section className="py-14 px-6" style={{ backgroundColor: "var(--itl-gray)" }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Text */}
            <div>
              <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
                {content.precisionHeading}
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                {content.precisionDescription}
              </p>
              <div className="grid grid-cols-2 gap-y-3 gap-x-4">
                {content.precisionItems.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 text-sm text-gray-600"
                  >
                    <Check
                      size={14}
                      className="shrink-0"
                      style={{ color: "var(--itl-blue)" }}
                    />
                    {item}
                  </div>
                ))}
              </div>
            </div>
            {/* Blue gradient card */}
            <div
              className="rounded-2xl h-64 flex items-center justify-center"
              style={{
                background: "linear-gradient(180deg, #0677BD 0%, #045A9E 100%)",
              }}
            >
              {precisionImage && (
                <Image
                  src={precisionImage}
                  width={130}
                  height={130}
                  alt={content.precisionImage?.alt || ""}
                  className="object-contain drop-shadow-xl"
                />
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── Sustainable Aviation Solutions ── */}
      <section className="py-14 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Green gradient card */}
            <div
              className="rounded-2xl h-64 flex items-center justify-center order-last md:order-first"
              style={{
                background: "linear-gradient(180deg, #00C950 0%, #008236 100%)",
              }}
            >
              {sustainableImage && (
                <Image
                  src={sustainableImage}
                  width={88}
                  height={88}
                  alt={content.sustainableImage?.alt || ""}
                />
              )}
            </div>
            {/* Text */}
            <div>
              <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
                {content.sustainableHeading}
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                {content.sustainableDescription}
              </p>
              <div className="space-y-3">
                {content.sustainableCards.map((card) => (
                  <div
                    key={card.title}
                    className="rounded-xl p-4 border border-green-100 bg-green-50"
                  >
                    <p
                      className="text-sm font-semibold mb-1"
                      style={{ color: "#008236" }}
                    >
                      {card.title}
                    </p>
                    <p className="text-xs text-gray-500 leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Comprehensive Services ── */}
      <section className="py-14 px-6" style={{ backgroundColor: "var(--itl-gray)" }}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-semibold text-gray-900 text-center mb-10">
            {content.servicesHeading}
          </h2>
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              {content.services.map((service) => {
                const icon = imageUrl(service.icon, { width: 48 });
                return (
                  <div
                    key={service.label}
                    className="flex flex-col items-center text-center"
                  >
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center mb-3"
                      style={{ backgroundColor: "#0677BD" }}
                    >
                      {icon && (
                        <div className="relative w-6 h-6">
                          <Image
                            src={icon}
                            fill
                            alt={service.icon?.alt || ""}
                            className="object-contain"
                            sizes="24px"
                            style={
                              service.invertIcon
                                ? { filter: "brightness(0) invert(1)" }
                                : {}
                            }
                          />
                        </div>
                      )}
                    </div>
                    <p className="text-sm font-medium text-gray-800 leading-snug">
                      {service.label}
                    </p>
                  </div>
                );
              })}
            </div>
            <div className="border-t border-gray-100 pt-6 text-center">
              <p className="font-semibold text-gray-900 mb-1">
                {content.customSolutionTitle}
              </p>
              <p className="text-gray-500 text-sm mb-5">
                {content.customSolutionDescription}
              </p>
              {content.customSolutionCta?.label && (
                <Link
                  href={localePath(locale, content.customSolutionCta.href)}
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-[10px] text-sm font-semibold transition-all duration-200 hover:brightness-90 active:scale-95"
                  style={{ backgroundColor: "var(--itl-blue)", color: "white" }}
                >
                  {content.customSolutionCta.label}
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── Request Air Freight Quote ── */}
      <section id="quote" className="py-16 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold text-gray-900 text-center mb-2">
            {content.quoteHeading}
          </h2>
          <p className="text-gray-500 text-sm text-center mb-10">
            {content.quoteSubheading}
          </p>

          <AirQuoteForm locale={locale} />
        </div>
      </section>
    </div>
  );
}
