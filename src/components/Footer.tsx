import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, Linkedin, MessageCircle } from "lucide-react";

import type { SiteSettings } from "@/content/site";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionary";
import { localePath } from "@/i18n/navigation";
import { imageUrl } from "@/sanity/image";

export default function Footer({
  locale,
  settings,
}: {
  locale: Locale;
  settings: SiteSettings;
}) {
  const t = getDictionary(locale);

  const quickLinks = [
    { href: "/", label: t.footer.home },
    { href: "/about", label: t.footer.about },
    { href: "/contact", label: t.footer.contact },
  ];

  const services = [
    { href: "/road", label: t.nav.road },
    { href: "/air", label: t.nav.air },
    { href: "/port", label: t.nav.port },
  ];

  const logo = imageUrl(settings.logo, { width: 120 });
  const background = imageUrl(settings.footerBackground, { width: 1920 });

  return (
    <footer className="relative text-white overflow-hidden">
      {background && (
        <Image
          src={background}
          fill
          alt=""
          className="object-cover"
          aria-hidden="true"
        />
      )}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="md:col-span-1">
          {logo && (
            <div className="flex items-center gap-3 mb-4">
              <Image
                src={logo}
                alt={settings.logo?.alt || `${settings.brandName} logo`}
                width={60}
                height={60}
              />
            </div>
          )}
          <p className="text-gray-400 text-sm leading-relaxed">
            {settings.footerBlurb}
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold text-sm uppercase tracking-wider text-gray-300 mb-4">
            {t.footer.quickLinks}
          </h4>
          <ul className="space-y-2">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={localePath(locale, link.href)}
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-semibold text-sm uppercase tracking-wider text-gray-300 mb-4">
            {t.footer.services}
          </h4>
          <ul className="space-y-2">
            {services.map((link) => (
              <li key={link.href}>
                <Link
                  href={localePath(locale, link.href)}
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Get In Touch */}
        <div>
          <h4 className="font-semibold text-sm uppercase tracking-wider text-gray-300 mb-4">
            {t.footer.getInTouch}
          </h4>
          <ul className="space-y-3">
            {settings.phone && (
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Phone size={15} className="text-blue-400 shrink-0" />
                <span>{settings.phone}</span>
              </li>
            )}
            {settings.email && (
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Mail size={15} className="text-blue-400 shrink-0" />
                <a
                  href={`mailto:${settings.email}`}
                  className="hover:text-white transition-colors"
                >
                  {settings.email}
                </a>
              </li>
            )}
            {settings.whatsappUrl && (
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <MessageCircle size={15} className="text-blue-400 shrink-0" />
                <a
                  href={settings.whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors"
                >
                  {t.footer.whatsapp}
                </a>
              </li>
            )}
            {settings.linkedinUrl && (
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Linkedin size={15} className="text-blue-400 shrink-0" />
                <a
                  href={settings.linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors"
                >
                  {t.footer.linkedin}
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>

      <div className="relative z-10 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-6 pb-8 flex items-center justify-center">
          <p className="text-gray-500 text-xs text-center">
            © {new Date().getFullYear()} {settings.brandName}. {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
