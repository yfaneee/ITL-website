"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { localeShortNames, locales, type Locale } from "@/i18n/config";
import { switchLocalePath } from "@/i18n/navigation";

/**
 * EN / RO toggle. Keeps the visitor on the same page when switching; the
 * proxy records the chosen language from the resulting URL, so returning to
 * an unprefixed path later lands in the same language.
 */
export default function LanguageSwitcher({
  locale,
  label,
}: {
  locale: Locale;
  label: string;
}) {
  const pathname = usePathname() ?? "/";

  return (
    <div
      className="flex items-center rounded-[10px] border border-gray-200 overflow-hidden shrink-0"
      role="group"
      aria-label={label}
    >
      {locales.map((target) => {
        const isActive = target === locale;
        return (
          <Link
            key={target}
            href={switchLocalePath(pathname, locales, target)}
            hrefLang={target}
            aria-current={isActive ? "true" : undefined}
            className={`px-2.5 py-1.5 text-xs font-semibold transition-colors duration-200 ${
              isActive ? "text-white" : "text-gray-500 hover:bg-blue-50"
            }`}
            style={isActive ? { backgroundColor: "var(--itl-blue)" } : {}}
          >
            {localeShortNames[target]}
          </Link>
        );
      })}
    </div>
  );
}
