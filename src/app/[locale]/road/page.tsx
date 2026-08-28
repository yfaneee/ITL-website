import Image from "next/image";
import { Check, Globe } from "lucide-react";

import RoadQuoteForm from "@/components/forms/RoadQuoteForm";
import ServiceHero from "@/components/sections/ServiceHero";
import { getRoadContent, type CoverageItem } from "@/content/road";
import type { Locale } from "@/i18n/config";
import { imageUrl } from "@/sanity/image";

function CoverageList({ items }: { items: CoverageItem[] }) {
  return (
    <ul className="space-y-3">
      {items.map(({ region, detail }) => (
        <li
          key={region}
          className="flex items-start gap-2 text-sm text-gray-600"
        >
          <Check
            size={14}
            className="mt-0.5 shrink-0"
            style={{ color: "var(--itl-blue)" }}
          />
          <span>
            <span className="font-medium text-gray-800">{region}</span>
            <span className="text-gray-400"> — </span>
            {detail}
          </span>
        </li>
      ))}
    </ul>
  );
}

export default async function RoadPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const content = await getRoadContent(locale);

  return (
    <div>
      {/* ── Hero ── */}
      <ServiceHero
        hero={content.hero}
        locale={locale}
        overlay={
          /* #161F2F overlay at 70% opacity */
          <div
            className="absolute inset-0"
            style={{ backgroundColor: "#161F2F", opacity: 0.7 }}
          />
        }
      />

      {/* ── Value proposition ── */}
      <section className="py-16 px-6 bg-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-900 leading-snug mb-4">
            {content.valueHeading}
          </h2>
          <p className="text-gray-500 text-sm leading-relaxed">
            {content.valueDescription}
          </p>
        </div>
      </section>

      {/* ── Service Features ── */}
      <section className="py-12 px-6" style={{ backgroundColor: "var(--itl-gray)" }}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-semibold text-gray-900 text-center mb-10">
            {content.featuresHeading}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {content.features.map((feature) => {
              const icon = imageUrl(feature.icon, { width: 48 });
              return (
                <div
                  key={feature.title}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
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
                        />
                      </div>
                    )}
                  </div>
                  <h3 className="font-semibold text-gray-900 text-sm mb-4">
                    {feature.title}
                  </h3>
                  <ul className="space-y-2.5">
                    {feature.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-gray-600"
                      >
                        <Check
                          size={14}
                          className="mt-0.5 shrink-0"
                          style={{ color: "var(--itl-blue)" }}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Our Coverage ── */}
      <section className="py-14 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-semibold text-gray-900 text-center mb-10">
            {content.coverageHeading}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
            <div>
              <h3 className="font-semibold text-gray-900 mb-5">
                {content.coveragePrimaryHeading}
              </h3>
              <CoverageList items={content.coveragePrimary} />
            </div>
            <div>
              <CoverageList items={content.coverageSecondary} />
            </div>
          </div>

          {/* Interactive coverage map placeholder */}
          <div className="rounded-2xl border border-gray-200 bg-gray-50 h-64 flex flex-col items-center justify-center gap-3">
            <Globe size={40} className="text-gray-300" />
            <p className="text-sm text-gray-400">{content.coverageMapLabel}</p>
          </div>
        </div>
      </section>

      {/* ── Request a Quotation ── */}
      <section
        id="quotation"
        className="py-16 px-6"
        style={{ backgroundColor: "var(--itl-gray)" }}
      >
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold text-gray-900 text-center mb-2">
            {content.quoteHeading}
          </h2>
          <p className="text-gray-500 text-sm text-center mb-10">
            {content.quoteSubheading}
          </p>

          <RoadQuoteForm locale={locale} />
        </div>
      </section>
    </div>
  );
}
