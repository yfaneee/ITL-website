import { Phone, Mail, MessageCircle, Linkedin } from "lucide-react";

import type { SiteSettings } from "@/content/site";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionary";

export default function HelpSection({
  heading,
  primaryLabel,
  secondaryLabel,
  settings,
  locale,
}: {
  heading: string;
  primaryLabel: string;
  secondaryLabel: string;
  settings: SiteSettings;
  locale: Locale;
}) {
  const t = getDictionary(locale);

  const contactItems = [
    settings.phone && {
      icon: <Phone size={22} />,
      label: t.footer.telephone,
      href: `tel:${settings.phone.replace(/[^+\d]/g, "")}`,
    },
    settings.email && {
      icon: <Mail size={22} />,
      label: t.form.email,
      href: `mailto:${settings.email}`,
    },
    settings.whatsappUrl && {
      icon: <MessageCircle size={22} />,
      label: t.footer.whatsapp,
      href: settings.whatsappUrl,
    },
    settings.linkedinUrl && {
      icon: <Linkedin size={22} />,
      label: t.footer.linkedin,
      href: settings.linkedinUrl,
    },
  ].filter(Boolean) as { icon: React.ReactNode; label: string; href: string }[];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">
          {heading}
        </h2>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            className="px-7 py-3 rounded-[10px] text-white text-sm font-semibold transition-all duration-200 hover:brightness-110 active:scale-95"
            style={{ backgroundColor: "var(--itl-blue)" }}
          >
            {primaryLabel}
          </button>
          <button className="px-7 py-3 rounded-[10px] text-gray-700 text-sm font-semibold border border-gray-300 hover:border-blue-400 hover:text-blue-700 transition-all duration-200 active:scale-95">
            {secondaryLabel}
          </button>
        </div>

        {/* Contact icons */}
        <div className="flex justify-center gap-10">
          {contactItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noreferrer" : undefined}
              className="flex flex-col items-center gap-2 group"
            >
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center text-white transition-transform duration-200 group-hover:scale-110"
                style={{ backgroundColor: "var(--itl-blue-light, #2563EB)" }}
              >
                {item.icon}
              </div>
              <span className="text-xs text-gray-500 group-hover:text-blue-700 transition-colors">
                {item.label}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
