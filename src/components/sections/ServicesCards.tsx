import Link from "next/link";
import Image from "next/image";

import type { ServiceCard } from "@/content/home";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionary";
import { localePath } from "@/i18n/navigation";
import { imagePosition, imageUrl } from "@/sanity/image";

export default function ServicesCards({
  cards,
  locale,
}: {
  cards: ServiceCard[];
  locale: Locale;
}) {
  const t = getDictionary(locale);

  return (
    <section className="py-6 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {cards.map((service) => {
            const background = imageUrl(service.backgroundImage, { width: 800 });
            const icon = imageUrl(service.icon, { width: 160 });

            return (
              <Link
                key={service.href}
                href={localePath(locale, service.href)}
                className="rounded-2xl overflow-hidden shadow-md group cursor-pointer block"
              >
                {/* Top half — background image + centered icon */}
                <div className="relative h-48 flex items-center justify-center overflow-hidden">
                  {background && (
                    <Image
                      src={background}
                      fill
                      alt={service.backgroundImage?.alt || service.title}
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      style={{ objectPosition: imagePosition(service.backgroundImage) }}
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  )}
                  <div className="absolute inset-0 bg-black/25" />
                  {icon && (
                    <div className="relative z-10 w-20 h-20">
                      <Image
                        src={icon}
                        fill
                        alt={service.icon?.alt || ""}
                        className="object-contain"
                        sizes="80px"
                      />
                    </div>
                  )}
                </div>

                {/* Bottom half — white */}
                <div className="bg-white px-6 py-5">
                  <h3 className="text-gray-900 text-lg font-bold mb-1">
                    {service.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <span
                    className="text-sm font-medium flex items-center gap-1"
                    style={{ color: "var(--itl-blue)" }}
                  >
                    {t.common.learnMore}
                    <svg
                      className="w-4 h-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 18l6-6-6-6"
                      />
                    </svg>
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
