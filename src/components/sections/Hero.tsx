import Link from "next/link";
import Image from "next/image";

import type { Hero as HeroContent } from "@/content/types";
import type { Locale } from "@/i18n/config";
import { localePath } from "@/i18n/navigation";
import { imagePosition, imageUrl } from "@/sanity/image";

export default function Hero({
  hero,
  locale,
}: {
  hero: HeroContent;
  locale: Locale;
}) {
  const background = imageUrl(hero.backgroundImage, { width: 1920 });

  return (
    <section className="relative h-[480px] md:h-[560px] lg:h-[600px] flex items-center overflow-hidden">
      {background && (
        <Image
          src={background}
          fill
          alt={hero.backgroundImage?.alt || ""}
          className="object-cover"
          style={{ objectPosition: imagePosition(hero.backgroundImage) }}
          sizes="100vw"
          priority
        />
      )}

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
        <div className="max-w-xl">
          <h1
            className="text-3xl md:text-4xl lg:text-5xl text-white leading-tight mb-5"
            style={{ fontWeight: 400 }}
          >
            {hero.title}
          </h1>
          <p className="text-gray-200 text-base md:text-lg mb-8 leading-relaxed">
            {hero.subtitle}
          </p>
          <div className="flex flex-wrap gap-3">
            {hero.primaryCta?.label && (
              <Link
                href={localePath(locale, hero.primaryCta.href)}
                className="px-6 py-3 rounded-[10px] text-sm font-semibold border transition-all duration-200 hover:brightness-95 active:scale-95"
                style={{
                  backgroundColor: "white",
                  color: "var(--itl-blue)",
                  borderColor: "var(--itl-blue)",
                }}
              >
                {hero.primaryCta.label}
              </Link>
            )}
            {hero.secondaryCta?.label && (
              <Link
                href={localePath(locale, hero.secondaryCta.href)}
                className="px-6 py-3 rounded-[10px] text-white text-sm font-semibold border border-white/60 hover:bg-white/10 transition-all duration-200 active:scale-95"
              >
                {hero.secondaryCta.label}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
