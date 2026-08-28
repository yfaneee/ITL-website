import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import { resolveIcon } from "@/components/icons/registry";
import { getAboutContent } from "@/content/about";
import type { Locale } from "@/i18n/config";
import { localePath } from "@/i18n/navigation";
import { imageUrl } from "@/sanity/image";

const heroGradient =
  "linear-gradient(to bottom right, #3BA67E 0%, #0B3076 100%)";
const cream = "#F2F1EC";

function Eyebrow({ children, light = false }: { children: string; light?: boolean }) {
  return (
    <span
      className={`block text-xs font-semibold uppercase tracking-[0.2em] mb-3 ${
        light ? "text-white/60" : "text-gray-400"
      }`}
    >
      {children}
    </span>
  );
}

/** Headings are authored with line breaks, so they render pre-wrapped. */
function Heading({
  children,
  className,
  style,
}: {
  children: string;
  className: string;
  style?: React.CSSProperties;
}) {
  return (
    <h2 className={`whitespace-pre-line ${className}`} style={style}>
      {children}
    </h2>
  );
}

function Paragraphs({
  items,
  className,
}: {
  items: string[];
  className: string;
}) {
  return (
    <div className={className}>
      {items.map((text, i) => (
        <p key={i}>{text}</p>
      ))}
    </div>
  );
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const content = await getAboutContent(locale);

  const groupImage = imageUrl(content.groupImage, { width: 800 });

  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative" style={{ background: heroGradient }}>
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
          <Eyebrow light>{content.heroEyebrow}</Eyebrow>
          <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-4 whitespace-pre-line">
            {content.heroHeading}
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl">
            {content.heroSubtitle}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
            {content.heroParagraphs.map((text, i) => (
              <p
                key={i}
                className="text-white/75 text-sm md:text-base leading-relaxed"
              >
                {text}
              </p>
            ))}
          </div>

          <div className="flex flex-wrap gap-3 mt-10">
            {content.heroBadges.map((badge) => (
              <span
                key={badge}
                className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-4 py-2 text-xs md:text-sm text-white/90 backdrop-blur-sm"
              >
                <CheckCircle2 size={15} className="text-white/80" />
                {badge}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Who we are */}
      <section className="py-20 px-6" style={{ backgroundColor: cream }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          <div>
            <Eyebrow>{content.whoEyebrow}</Eyebrow>
            <Heading className="text-3xl md:text-4xl font-bold text-gray-900">
              {content.whoHeading}
            </Heading>
          </div>
          <Paragraphs
            items={content.whoParagraphs}
            className="space-y-5 text-gray-600 text-sm md:text-base leading-relaxed"
          />
        </div>
      </section>

      {/* Our background */}
      <section
        className="py-20 px-6"
        style={{ backgroundColor: "var(--itl-blue-dark)" }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
            <div>
              <Eyebrow light>{content.backgroundEyebrow}</Eyebrow>
              <Heading className="text-3xl md:text-4xl font-bold text-white">
                {content.backgroundHeading}
              </Heading>
            </div>
            <Paragraphs
              items={content.backgroundParagraphs}
              className="space-y-5 text-white/75 text-sm md:text-base leading-relaxed"
            />
          </div>

          <div className="grid grid-cols-3 gap-6 mt-14 pt-10 border-t border-white/15">
            {content.backgroundStats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-5xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-xs md:text-sm text-white/60">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What we do */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          <div>
            <Eyebrow>{content.servicesEyebrow}</Eyebrow>
            <Heading className="text-3xl md:text-4xl font-bold text-gray-900">
              {content.servicesHeading}
            </Heading>
          </div>
          <div>
            <Paragraphs
              items={content.servicesParagraphs}
              className="space-y-5 text-gray-600 text-sm md:text-base leading-relaxed mb-8"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {content.servicesItems.map((item) => {
                const Icon = resolveIcon(item.icon);
                return (
                  <div
                    key={item.title}
                    className="flex items-center gap-4 bg-white rounded-xl border border-gray-100 p-4 hover:shadow-md transition-shadow"
                  >
                    <span
                      className="w-11 h-11 rounded-lg flex items-center justify-center text-white shrink-0"
                      style={{ backgroundColor: "var(--itl-blue)" }}
                    >
                      <Icon size={20} />
                    </span>
                    <div>
                      <div className="text-sm font-semibold text-gray-900">
                        {item.title}
                      </div>
                      <div className="text-xs text-gray-500">{item.subtitle}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* European focus, practical reach */}
      <section className="py-20 px-6" style={{ backgroundColor: cream }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div>
            <Eyebrow>{content.coverageEyebrow}</Eyebrow>
            <Heading className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              {content.coverageHeading}
            </Heading>
            <Paragraphs
              items={content.coverageParagraphs}
              className="space-y-5 text-gray-600 text-sm md:text-base leading-relaxed"
            />
          </div>
          <div
            className="rounded-2xl p-8 md:p-10"
            style={{ backgroundColor: "var(--itl-blue-dark)" }}
          >
            <div className="space-y-1">
              {content.coverageRows.map((row) => (
                <div
                  key={row.region}
                  className="flex items-center justify-between py-3 border-b border-white/10 last:border-b-0"
                >
                  <span className="text-white font-medium text-sm md:text-base">
                    {row.region}
                  </span>
                  <span className="text-white/55 text-xs md:text-sm">
                    {row.note}
                  </span>
                </div>
              ))}
            </div>
            <p className="text-white/50 text-xs mt-6 text-center">
              {content.coverageFootnote}
            </p>
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          <div>
            <Eyebrow>{content.processEyebrow}</Eyebrow>
            <Heading className="text-3xl md:text-4xl font-bold text-gray-900">
              {content.processHeading}
            </Heading>
          </div>
          <div>
            <Paragraphs
              items={content.processParagraphs}
              className="space-y-5 text-gray-600 text-sm md:text-base leading-relaxed mb-8"
            />
            <ul className="space-y-3">
              {content.processItems.map((item) => {
                const Icon = resolveIcon(item.icon);
                return (
                  <li
                    key={item.text}
                    className="flex items-center gap-4 py-2 border-b border-gray-200 last:border-b-0"
                  >
                    <span
                      className="w-8 h-8 rounded-md flex items-center justify-center text-white shrink-0"
                      style={{ backgroundColor: "var(--itl-blue)" }}
                    >
                      <Icon size={16} />
                    </span>
                    <span className="text-sm md:text-base text-gray-700">
                      {item.text}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>

      {/* Why clients work with ITL */}
      <section
        className="py-20 px-6"
        style={{ backgroundColor: "var(--itl-blue-dark)" }}
      >
        <div className="max-w-7xl mx-auto">
          <Eyebrow light>{content.whyEyebrow}</Eyebrow>
          <Heading className="text-3xl md:text-4xl font-bold text-white mb-12">
            {content.whyHeading}
          </Heading>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {content.whyItems.map((item) => {
              const Icon = resolveIcon(item.icon);
              return (
                <div
                  key={item.title}
                  className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors"
                >
                  <span
                    className="w-11 h-11 rounded-lg flex items-center justify-center text-white mb-4"
                    style={{ backgroundColor: "var(--itl-blue)" }}
                  >
                    <Icon size={20} />
                  </span>
                  <h3 className="text-white font-semibold text-lg mb-2">
                    {item.title}
                  </h3>
                  <p className="text-white/65 text-sm leading-relaxed">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Part of Holleman Group */}
      <section className="py-20 px-6" style={{ backgroundColor: cream }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 mb-12">
            <div>
              <Eyebrow>{content.groupEyebrow}</Eyebrow>
              <Heading className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                {content.groupHeading}
              </Heading>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
            {groupImage && (
              <div className="relative w-full max-w-sm aspect-[4/3] rounded-2xl overflow-hidden shadow-md">
                <Image
                  src={groupImage}
                  fill
                  alt={content.groupImage?.alt || ""}
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 384px"
                />
              </div>
            )}
            <Paragraphs
              items={content.groupParagraphs}
              className="space-y-5 text-gray-600 text-sm md:text-base leading-relaxed"
            />
          </div>
        </div>
      </section>

      {/* Our commitment */}
      <section className="py-20 px-6" style={{ background: heroGradient }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          <div>
            <Eyebrow light>{content.commitmentEyebrow}</Eyebrow>
            <Heading className="text-3xl md:text-4xl font-bold text-white">
              {content.commitmentHeading}
            </Heading>
          </div>
          <Paragraphs
            items={content.commitmentParagraphs}
            className="space-y-5 text-white/80 text-sm md:text-base leading-relaxed"
          />
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-20 px-6"
        style={{ background: "linear-gradient(135deg, #eef1f6 0%, #e3eaf3 100%)" }}
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div className="max-w-2xl">
            <Heading
              className="text-3xl md:text-4xl font-bold mb-4 leading-tight"
              style={{ color: "var(--itl-dark)" }}
            >
              {content.ctaHeading}
            </Heading>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              {content.ctaDescription}
            </p>
          </div>
          {content.ctaButton?.label && (
            <Link
              href={localePath(locale, content.ctaButton.href)}
              className="inline-flex items-center gap-2 px-7 py-3 rounded-[10px] bg-white text-sm font-semibold border shrink-0 transition-all duration-200 hover:brightness-95 active:scale-95"
              style={{ color: "var(--itl-blue)", borderColor: "var(--itl-blue)" }}
            >
              {content.ctaButton.label}
              <ArrowRight size={16} />
            </Link>
          )}
        </div>
      </section>
    </div>
  );
}
