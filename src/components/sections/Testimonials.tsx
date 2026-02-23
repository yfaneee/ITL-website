"use client";

import Link from "next/link";
import { useState } from "react";

const testimonials = [
  {
    id: 1,
    initials: "AG",
    quote:
      "Inter Trans Logistics has been our trusted partner for over 5 years. Their reliability and commitment to excellence is unmatched.",
    name: "AGC Equipment",
    title: "Automotive Sector",
  },
  {
    id: 2,
    initials: "MR",
    quote:
      "Outstanding service from start to finish. ITL handled our complex shipping requirements with professionalism and efficiency.",
    name: "MR Industries",
    title: "Oil & Gas Sector",
  },
  {
    id: 3,
    initials: "CB",
    quote:
      "We've worked with many logistics companies but ITL stands out for their attention to detail and on-time delivery.",
    name: "CB Constructions",
    title: "Construction Sector",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const t = testimonials[active];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-3xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
          Trusted by industry leaders
        </h2>
        <p className="text-gray-500 text-sm mb-12 tracking-wide uppercase">
          Delivering excellence across sectors
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
            <p className="text-gray-400 text-xs mt-0.5">{t.title}</p>
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mb-8">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActive(idx)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                active === idx ? "scale-125" : "bg-gray-300 hover:bg-gray-400"
              }`}
              style={active === idx ? { backgroundColor: "var(--itl-blue)" } : {}}
              aria-label={`Testimonial ${idx + 1}`}
            />
          ))}
        </div>

        <Link
          href="/about"
          className="text-sm font-semibold transition-colors duration-200 hover:underline"
          style={{ color: "var(--itl-blue)" }}
        >
          View all testimonials →
        </Link>
      </div>
    </section>
  );
}
