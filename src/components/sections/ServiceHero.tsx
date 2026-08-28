import Link from "next/link";
import Image from "next/image";
import type { ReactNode } from "react";

import type { Hero } from "@/content/types";
import type { Locale } from "@/i18n/config";
import { localePath } from "@/i18n/navigation";
import { imagePosition, imageUrl, type SiteImage } from "@/sanity/image";

/**
 * Shared hero for the three service pages. The overlay and button treatment
 * differ per page, so they stay in code and are passed in.
 */
export default function ServiceHero({
  hero,
  locale,
  overlay,
  ctaVariant = "blue",
}: {
  hero: Hero & { icon?: SiteImage | null };
  locale: Locale;
  overlay: ReactNode;
  ctaVariant?: "blue" | "light";
}) {
  const background = imageUrl(hero.backgroundImage, { width: 1920 });
  const icon = imageUrl(hero.icon, { width: 56 });

  const ctaStyle =
    ctaVariant === "light"
      ? { backgroundColor: "white", color: "var(--itl-blue)" }
      : { backgroundColor: "var(--itl-blue)", color: "white" };

  return (
    <section className="relative h-[480px] md:h-[540px] flex items-end pb-14 md:items-center md:pb-0 overflow-hidden">
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
      {overlay}

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
        <div className="max-w-xl">
          {(icon || hero.eyebrow) && (
            <div className="flex items-center gap-2.5 mb-5">
              {icon && (
                <Image src={icon} width={28} height={28} alt={hero.icon?.alt || ""} />
              )}
              {hero.eyebrow && (
                <span className="text-white text-xl font-semibold">
                  {hero.eyebrow}
                </span>
              )}
            </div>
          )}
          <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-4">
            {hero.title}
          </h1>
          <p className="text-lg md:text-xl text-white mb-8 max-w-2xl">
            {hero.subtitle}
          </p>
          {hero.primaryCta?.label && (
            <Link
              href={localePath(locale, hero.primaryCta.href)}
              className="inline-flex items-center gap-1.5 px-6 py-3 rounded-[10px] text-sm font-semibold transition-all duration-200 hover:brightness-90 active:scale-95"
              style={ctaStyle}
            >
              {hero.primaryCta.label}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
