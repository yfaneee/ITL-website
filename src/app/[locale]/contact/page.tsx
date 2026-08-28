import Image from "next/image";
import { Phone, Mail, MessageCircle, Linkedin, MapPin } from "lucide-react";
import type { ReactNode } from "react";

import ContactForm from "@/components/forms/ContactForm";
import { getContactContent } from "@/content/contact";
import { getSiteSettings } from "@/content/site";
import { getTestimonials, type Testimonial } from "@/content/testimonials";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionary";
import { imagePosition, imageUrl } from "@/sanity/image";

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
      <div
        className="w-11 h-11 rounded-full flex items-center justify-center text-white font-bold text-sm mb-4"
        style={{ backgroundColor: "var(--itl-blue)" }}
      >
        {testimonial.initials}
      </div>
      <blockquote className="text-gray-600 text-xs leading-relaxed italic mb-4">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>
      <div>
        <p className="text-sm font-semibold text-gray-900">{testimonial.name}</p>
        <p className="text-xs text-gray-400 mt-0.5">{testimonial.sector}</p>
      </div>
    </div>
  );
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const [content, settings, testimonials] = await Promise.all([
    getContactContent(locale),
    getSiteSettings(locale),
    getTestimonials(locale),
  ]);
  const t = getDictionary(locale);

  const background = imageUrl(content.hero.backgroundImage, { width: 1920 });

  const channels = [
    settings.phone && {
      icon: <Phone size={22} />,
      label: t.footer.telephone,
      value: settings.phone,
      href: `tel:${settings.phone.replace(/[^+\d]/g, "")}`,
    },
    settings.email && {
      icon: <Mail size={22} />,
      label: t.form.email,
      value: settings.email,
      href: `mailto:${settings.email}`,
    },
    settings.whatsappUrl && {
      icon: <MessageCircle size={22} />,
      label: t.footer.whatsapp,
      value: t.footer.whatsappAction,
      href: settings.whatsappUrl,
    },
    settings.linkedinUrl && {
      icon: <Linkedin size={22} />,
      label: t.footer.linkedin,
      value: t.footer.linkedinAction,
      href: settings.linkedinUrl,
    },
  ].filter(Boolean) as {
    icon: ReactNode;
    label: string;
    value: string;
    href: string;
  }[];

  return (
    <div>
      {/* ── Hero ── */}
      <section className="relative h-[420px] md:h-[480px] flex items-end pb-14 md:items-center md:pb-0 overflow-hidden">
        {background && (
          <Image
            src={background}
            fill
            alt={content.hero.backgroundImage?.alt || ""}
            className="object-cover"
            style={{ objectPosition: imagePosition(content.hero.backgroundImage) }}
            sizes="100vw"
            priority
          />
        )}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
          <div className="max-w-xl">
            <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-4">
              {content.hero.title}
            </h1>
            <p className="text-lg md:text-xl text-white max-w-2xl">
              {content.hero.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* ── Talk to Us ── */}
      <section className="py-14 px-6 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-semibold text-gray-900 mb-10">
            {content.channelsHeading}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {channels.map((channel) => (
              <a
                key={channel.label}
                href={channel.href}
                target={channel.href.startsWith("http") ? "_blank" : undefined}
                rel={channel.href.startsWith("http") ? "noreferrer" : undefined}
                className="flex flex-col items-center gap-3 group"
              >
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center text-white transition-transform duration-200 group-hover:scale-110"
                  style={{ backgroundColor: "var(--itl-blue)" }}
                >
                  {channel.icon}
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-800 group-hover:text-blue-700 transition-colors">
                    {channel.label}
                  </p>
                  <p className="text-xs text-gray-400 mt-0.5">{channel.value}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Send Us a Message ── */}
      <section className="py-14 px-6" style={{ backgroundColor: "var(--itl-gray)" }}>
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl p-8 md:p-10 shadow-sm border border-gray-100">
            <h2 className="text-2xl font-semibold text-gray-900 text-center mb-2">
              {content.formHeading}
            </h2>
            <p className="text-gray-500 text-sm text-center mb-8">
              {content.formSubheading}
            </p>

            <ContactForm locale={locale} />
          </div>
        </div>
      </section>

      {/* ── Info Cards ── */}
      <section className="py-14 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {content.infoCards.map((card) => {
              const icon = imageUrl(card.icon, { width: 48 });
              return (
                <div
                  key={card.title}
                  className="rounded-2xl p-6 border border-gray-100 shadow-sm bg-white"
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
                          alt={card.icon?.alt || ""}
                          className="object-contain"
                          sizes="24px"
                          style={{ filter: "brightness(0) invert(1)" }}
                        />
                      </div>
                    )}
                  </div>
                  <h3 className="font-semibold text-gray-900 text-sm mb-3">
                    {card.title}
                  </h3>
                  <div className="space-y-1">
                    {card.lines.map((line, i) =>
                      line ? (
                        <p key={i} className="text-xs text-gray-500 leading-relaxed">
                          {line}
                        </p>
                      ) : (
                        <div key={i} className="h-2" />
                      )
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Customer Testimonials ── */}
      <section className="py-14 px-6" style={{ backgroundColor: "var(--itl-gray)" }}>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-semibold text-gray-900 text-center mb-2">
            {content.testimonialsHeading}
          </h2>
          <p className="text-gray-500 text-sm text-center mb-10">
            {content.testimonialsSubheading}
          </p>

          {/* Row 1: 3 cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">
            {testimonials.slice(0, 3).map((testimonial) => (
              <TestimonialCard
                key={testimonial._id ?? testimonial.name}
                testimonial={testimonial}
              />
            ))}
          </div>
          {/* Row 2: remaining cards, left-aligned */}
          {testimonials.length > 3 && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {testimonials.slice(3).map((testimonial) => (
                <TestimonialCard
                  key={testimonial._id ?? testimonial.name}
                  testimonial={testimonial}
                />
              ))}
              <div className="hidden md:block" />
            </div>
          )}
        </div>
      </section>

      {/* ── Interactive Map Placeholder ── */}
      <section className="py-14 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-semibold text-gray-900 text-center mb-10">
            {content.mapHeading}
          </h2>
          <div className="rounded-2xl bg-gray-100 border border-gray-200 h-72 md:h-96 flex flex-col items-center justify-center gap-3">
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center"
              style={{ backgroundColor: "#E5EBF4" }}
            >
              <MapPin size={24} style={{ color: "var(--itl-blue)" }} />
            </div>
            <p className="text-sm font-medium text-gray-500">
              {content.mapPlaceholder}
            </p>
            <p className="text-xs text-gray-400">{content.mapAddress}</p>
          </div>
        </div>
      </section>
    </div>
  );
}
