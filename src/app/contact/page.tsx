"use client";

import Image from "next/image";
import { useState } from "react";
import { Phone, Mail, MessageCircle, Linkedin, MapPin } from "lucide-react";

type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  subject: string;
  message: string;
  gdpr: boolean;
};

const contactChannels = [
  {
    icon: <Phone size={22} />,
    label: "Telephone",
    value: "+373 22 123 456",
    href: "tel:+37322123456",
  },
  {
    icon: <Mail size={22} />,
    label: "Email",
    value: "info@itl.com",
    href: "mailto:info@itl.com",
  },
  {
    icon: <MessageCircle size={22} />,
    label: "WhatsApp",
    value: "Message us",
    href: "https://wa.me/",
  },
  {
    icon: <Linkedin size={22} />,
    label: "LinkedIn",
    value: "Follow us",
    href: "https://linkedin.com",
  },
];

const infoCards = [
  {
    icon: "/icons/headquarters.svg",
    title: "Headquarters",
    lines: [
      "Inter Trans Logistics SRL",
      "str. Independenței 1, of. 305",
      "Chișinău, MD-2043",
      "Republic of Moldova",
    ],
  },
  {
    icon: "/icons/businessHours.svg",
    title: "Business Hours",
    lines: [
      "Monday – Friday",
      "08:00 – 18:00 (EET)",
      "",
      "Saturday – Sunday",
      "Closed",
    ],
  },
  {
    icon: "/icons/quickResponse.svg",
    title: "Quick Response",
    lines: [
      "General inquiries: within 4 hours",
      "Quote requests: within 24 hours",
      "Urgent shipments: immediate",
      "",
      "We respond in EN / RO / RU",
    ],
  },
];

const testimonials = [
  {
    initials: "AG",
    quote:
      "Inter Trans Logistics has been our trusted partner for over 5 years. Their reliability and commitment to excellence is unmatched.",
    name: "AGC Equipment",
    title: "Automotive Sector",
  },
  {
    initials: "MR",
    quote:
      "Outstanding service from start to finish. ITL handled our complex shipping requirements with professionalism and efficiency.",
    name: "MR Industries",
    title: "Oil & Gas Sector",
  },
  {
    initials: "CB",
    quote:
      "We've worked with many logistics companies but ITL stands out for their attention to detail and on-time delivery.",
    name: "CB Constructions",
    title: "Construction Sector",
  },
  {
    initials: "FP",
    quote:
      "From customs clearance to door-to-door delivery, every step was handled flawlessly. Highly recommend their team.",
    name: "FoodPro International",
    title: "Food & Beverage Sector",
  },
  {
    initials: "SE",
    quote:
      "ITL's road transport network across Europe is exceptional. Competitive rates and zero surprises on delivery times.",
    name: "SteelEdge GmbH",
    title: "Metal & Construction Sector",
  },
];

export default function ContactPage() {
  const [form, setForm] = useState<FormState>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
    gdpr: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: wire up form submission
  };

  return (
    <div>
      {/* ── Hero ── */}
      <section className="relative h-[420px] md:h-[480px] flex items-end pb-14 md:items-center md:pb-0 overflow-hidden">
        <Image
          src="/backgrounds/ContactBckg.webp"
          fill
          alt="Contact ITL"
          className="object-cover object-center"
          priority
        />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
          <div className="max-w-xl">
            <h1 className="text-3xl md:text-4xl lg:text-[2.6rem] text-white font-light leading-tight mb-4">
              Get In Touch
            </h1>
            <p className="text-gray-300 text-sm leading-relaxed">
              Our team is ready to help you find the right logistics solution. Reach out and we will get back to you promptly.
            </p>
          </div>
        </div>
      </section>

      {/* ── Talk to Us ── */}
      <section className="py-14 px-6 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-semibold text-gray-900 mb-10">Talk to Us</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {contactChannels.map((ch) => (
              <a
                key={ch.label}
                href={ch.href}
                target={ch.href.startsWith("http") ? "_blank" : undefined}
                rel={ch.href.startsWith("http") ? "noreferrer" : undefined}
                className="flex flex-col items-center gap-3 group"
              >
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center text-white transition-transform duration-200 group-hover:scale-110"
                  style={{ backgroundColor: "var(--itl-blue)" }}
                >
                  {ch.icon}
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-800 group-hover:text-blue-700 transition-colors">
                    {ch.label}
                  </p>
                  <p className="text-xs text-gray-400 mt-0.5">{ch.value}</p>
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
              Send Us a Message
            </h2>
            <p className="text-gray-500 text-sm text-center mb-8">
              Fill in the form and our team will get back to you within 24 hours.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Row 1: names */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-gray-500 mb-1.5">
                    First Name <span style={{ color: "var(--itl-blue)" }}>*</span>
                  </label>
                  <input
                    name="firstName"
                    value={form.firstName}
                    onChange={handleChange}
                    placeholder="Your first name"
                    required
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm bg-white outline-none focus:ring-2 focus:ring-blue-200 transition"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-500 mb-1.5">
                    Last Name <span style={{ color: "var(--itl-blue)" }}>*</span>
                  </label>
                  <input
                    name="lastName"
                    value={form.lastName}
                    onChange={handleChange}
                    placeholder="Your last name"
                    required
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm bg-white outline-none focus:ring-2 focus:ring-blue-200 transition"
                  />
                </div>
              </div>

              {/* Row 2: email + phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-gray-500 mb-1.5">
                    Email <span style={{ color: "var(--itl-blue)" }}>*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm bg-white outline-none focus:ring-2 focus:ring-blue-200 transition"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-500 mb-1.5">
                    Phone <span style={{ color: "var(--itl-blue)" }}>*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+00 000 000 000"
                    required
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm bg-white outline-none focus:ring-2 focus:ring-blue-200 transition"
                  />
                </div>
              </div>

              {/* Row 3: company + subject */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-gray-500 mb-1.5">
                    Company
                  </label>
                  <input
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    placeholder="Your company (optional)"
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm bg-white outline-none focus:ring-2 focus:ring-blue-200 transition"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-500 mb-1.5">
                    Service
                  </label>
                  <select
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm bg-white outline-none focus:ring-2 focus:ring-blue-200 transition text-gray-500"
                  >
                    <option value="">Select a service (optional)</option>
                    <option value="road">Road Transport</option>
                    <option value="air">Air Transport</option>
                    <option value="port">Port Operations</option>
                    <option value="customs">Customs Clearance</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-medium text-gray-500 mb-1.5">
                  Message <span style={{ color: "var(--itl-blue)" }}>*</span>
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us how we can help you..."
                  rows={5}
                  required
                  className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm bg-white outline-none focus:ring-2 focus:ring-blue-200 transition resize-none"
                />
              </div>

              {/* GDPR */}
              <div className="flex items-start gap-3 pt-1">
                <input
                  type="checkbox"
                  id="gdpr"
                  name="gdpr"
                  checked={form.gdpr}
                  onChange={handleChange}
                  required
                  className="mt-0.5 w-4 h-4 shrink-0 cursor-pointer rounded"
                  style={{ accentColor: "var(--itl-blue)" }}
                />
                <label
                  htmlFor="gdpr"
                  className="text-xs text-gray-500 leading-relaxed cursor-pointer"
                >
                  I agree to the processing of my personal data in accordance with the{" "}
                  <a
                    href="/privacy"
                    className="underline hover:opacity-80 transition-opacity"
                    style={{ color: "var(--itl-blue)" }}
                  >
                    Privacy Policy
                  </a>{" "}
                  and consent to being contacted by Inter Trans Logistics regarding my request.{" "}
                  <span className="text-gray-400">This field is required.</span>
                </label>
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-[10px] text-white text-sm font-semibold transition-all duration-200 hover:brightness-90 active:scale-95 mt-2"
                style={{ backgroundColor: "var(--itl-blue)" }}
              >
                Send Message →
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ── Info Cards ── */}
      <section className="py-14 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {infoCards.map((card) => (
              <div
                key={card.title}
                className="rounded-2xl p-6 border border-gray-100 shadow-sm bg-white"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{ backgroundColor: "var(--itl-blue)" }}
                >
                  <Image
                    src={card.icon}
                    width={24}
                    height={24}
                    alt=""
                    style={{ filter: "brightness(0) invert(1)" }}
                  />
                </div>
                <h3 className="font-semibold text-gray-900 text-sm mb-3">{card.title}</h3>
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
            ))}
          </div>
        </div>
      </section>

      {/* ── Customer Testimonials ── */}
      <section className="py-14 px-6" style={{ backgroundColor: "var(--itl-gray)" }}>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-semibold text-gray-900 text-center mb-2">
            Customer Testimonials
          </h2>
          <p className="text-gray-500 text-sm text-center mb-10">
            Trusted by industry leaders across sectors
          </p>

          {/* Row 1: 3 cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">
            {testimonials.slice(0, 3).map((t) => (
              <TestimonialCard key={t.initials} t={t} />
            ))}
          </div>
          {/* Row 2: 2 cards left-aligned */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {testimonials.slice(3).map((t) => (
              <TestimonialCard key={t.initials} t={t} />
            ))}
            <div className="hidden md:block" />
          </div>
        </div>
      </section>

      {/* ── Interactive Map Placeholder ── */}
      <section className="py-14 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-semibold text-gray-900 text-center mb-10">
            Find Us
          </h2>
          <div className="rounded-2xl bg-gray-100 border border-gray-200 h-72 md:h-96 flex flex-col items-center justify-center gap-3">
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center"
              style={{ backgroundColor: "#E5EBF4" }}
            >
              <MapPin size={24} style={{ color: "var(--itl-blue)" }} />
            </div>
            <p className="text-sm font-medium text-gray-500">Interactive map coming soon</p>
            <p className="text-xs text-gray-400">
              str. Independenței 1, of. 305 — Chișinău, Moldova
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

function TestimonialCard({
  t,
}: {
  t: { initials: string; quote: string; name: string; title: string };
}) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
      <div
        className="w-11 h-11 rounded-full flex items-center justify-center text-white font-bold text-sm mb-4"
        style={{ backgroundColor: "var(--itl-blue)" }}
      >
        {t.initials}
      </div>
      <blockquote className="text-gray-600 text-xs leading-relaxed italic mb-4">
        &ldquo;{t.quote}&rdquo;
      </blockquote>
      <div>
        <p className="text-sm font-semibold text-gray-900">{t.name}</p>
        <p className="text-xs text-gray-400 mt-0.5">{t.title}</p>
      </div>
    </div>
  );
}
