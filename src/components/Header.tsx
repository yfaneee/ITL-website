"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

import LanguageSwitcher from "./LanguageSwitcher";
import type { SiteSettings } from "@/content/site";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionary";
import { localePath } from "@/i18n/navigation";
import { imageUrl } from "@/sanity/image";

export default function Header({
  locale,
  settings,
}: {
  locale: Locale;
  settings: SiteSettings;
}) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const t = getDictionary(locale);

  const navLinks = [
    { href: "/", label: t.nav.home },
    { href: "/about", label: t.nav.about },
    { href: "/road", label: t.nav.road },
    { href: "/air", label: t.nav.air },
    { href: "/port", label: t.nav.port },
    { href: "/contact", label: t.nav.contact },
  ];

  const logo = imageUrl(settings.logo, { width: 120 });

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link
          href={localePath(locale, "/")}
          className="flex items-center gap-3 no-underline shrink-0"
        >
          {logo && (
            <Image
              src={logo}
              alt={settings.logo?.alt || `${settings.brandName} logo`}
              width={60}
              height={60}
            />
          )}
          <div className="hidden sm:flex flex-col leading-tight">
            <span className="font-bold text-sm" style={{ color: "var(--itl-blue)" }}>
              {settings.brandName}
            </span>
            <span className="text-xs text-gray-400">{settings.tagline}</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const target = localePath(locale, link.href);
            const isActive = pathname === target;
            return (
              <Link
                key={link.href}
                href={target}
                className={`px-3.5 py-2 rounded-[10px] text-sm font-medium transition-colors duration-200 ${
                  isActive
                    ? "text-white"
                    : "text-gray-600 hover:text-blue-700 hover:bg-blue-50"
                }`}
                style={isActive ? { backgroundColor: "var(--itl-blue)" } : {}}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Language switcher + mobile menu button */}
        <div className="flex items-center gap-2">
          <LanguageSwitcher locale={locale} label={t.nav.switchLanguage} />
          <button
            className="md:hidden p-2 rounded text-gray-600 hover:text-blue-700"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={t.nav.toggleMenu}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-2">
          {navLinks.map((link) => {
            const target = localePath(locale, link.href);
            const isActive = pathname === target;
            return (
              <Link
                key={link.href}
                href={target}
                onClick={() => setMenuOpen(false)}
                className={`px-4 py-2 rounded text-sm font-medium ${
                  isActive ? "text-white" : "text-gray-700 hover:bg-blue-50"
                }`}
                style={isActive ? { backgroundColor: "var(--itl-blue)" } : {}}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}
