"use client";

import Link from "next/link";
import { useState } from "react";

import type { Testimonial } from "@/content/testimonials";
import type { Locale } from "@/i18n/config";
import { localePath } from "@/i18n/navigation";

export default function Testimonials({
  heading,
  subheading,
  linkLabel,
  testimonials,
  locale,
}: {
  heading: string;
  subheading: string;
  linkLabel: string;
  testimonials: Testimonial[];
  locale: Locale;
}) {
  const [active, setActive] = useState(0);

  if (testimonials.length === 0) return null;
  const t = testimonials[Math.min(active, testimonials.length - 1)];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-3xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
          {heading}
        </h2>
        <p className="text-gray-500 text-sm mb-12 tracking-wide uppercase">
          {subheading}
        </p>

        {/* Testimonial card */}
        <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-8 md:p-12 mb-8">
          {/* Avatar */}
          <div
            className="w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-6"
            style={{ backgroundColor: "var(--itl-blue)" }}
          >
            {t.initials}
          </div>

          <blockquote className="text-gray-700 text-base md:text-lg leading-relaxed italic mb-6">
            &ldquo;{t.quote}&rdquo;
          </blockquote>

          <div>
            <p className="font-bold text-gray-900 text-sm">{t.name}</p>
            <p className="text-gray-400 text-xs mt-0.5">{t.sector}</p>
          </div>
        </div>

        {/* Dots */}
        {testimonials.length > 1 && (
          <div className="flex justify-center gap-2 mb-8">
            {testimonials.map((item, idx) => (
              <button
                key={item._id ?? item.name}
                onClick={() => setActive(idx)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  active === idx ? "scale-125" : "bg-gray-300 hover:bg-gray-400"
                }`}
                style={active === idx ? { backgroundColor: "var(--itl-blue)" } : {}}
                aria-label={item.name}
              />
            ))}
          </div>
        )}

        {linkLabel && (
          <Link
            href={localePath(locale, "/about")}
            className="text-sm font-semibold transition-colors duration-200 hover:underline"
            style={{ color: "var(--itl-blue)" }}
          >
            {linkLabel}
          </Link>
        )}
      </div>
    </section>
  );
}
