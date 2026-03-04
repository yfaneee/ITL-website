"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Check, Globe } from "lucide-react";

type FormState = {
  companyName: string;
  personalName: string;
  origin: string;
  industry: string;
  phone: string;
  cityCountry: string;
  destination: string;
  email: string;
  volume: string;
  additionalDetails: string;
  gdpr: boolean;
};

const serviceFeatures = [
  {
    icon: "/icons/roadTrans.svg",
    title: "Flexible Transport Options",
    items: [
      "Full Truck Load (FTL)",
      "Less Than Truck Load (LTL)",
      "Groupage services",
      "Cost and transit optimisation",
    ],
  },
  {
    icon: "/icons/globalNet.svg",
    title: "Global Network Coverage",
    items: [
      "15+ countries coverage",
      "Hubs and transits",
      "Local expertise",
      "Cross-border efficiency",
    ],
  },
  {
    icon: "/icons/industrySol.svg",
    title: "Industry-Specific Solutions",
    items: [
      "Temperature-controlled food/beverage",
      "Sensitive cargo handling",
      "Custom packaging",
    ],
  },
];

const europeanCoverage = [
  { region: "Western Europe", detail: "UK/Germany EU hubs" },
  { region: "Eastern Europe", detail: "Local partnerships and operations" },
  { region: "Scandinavia", detail: "Specialised Nordic routes" },
  { region: "Iberian Peninsula", detail: "Specialised local freight routes" },
];

const asianCoverage = [
  { region: "Central Asia", detail: "Land corridor connections" },
  { region: "Middle East", detail: "Regional hubs and contracts" },
  { region: "Western Asia", detail: "Multimodal partnerships" },
];

export default function RoadPage() {
  const [form, setForm] = useState<FormState>({
    companyName: "",
    personalName: "",
    origin: "",
    industry: "",
    phone: "",
    cityCountry: "",
    destination: "",
    email: "",
    volume: "",
    additionalDetails: "",
    gdpr: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
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
      <section className="relative h-[480px] md:h-[540px] flex items-end pb-14 md:items-center md:pb-0 overflow-hidden">
        <Image
          src="/backgrounds/RoadTranspBckg.webp"
          fill
          alt="Road transport"
          className="object-cover object-center"
          priority
        />
        {/* #161F2F overlay at 50% opacity */}
        <div
          className="absolute inset-0"
          style={{ backgroundColor: "#161F2F", opacity: 0.7 }}
        />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
          <div className="max-w-xl">
            <div className="flex items-center gap-2.5 mb-5">
              <Image
                src="/icons/roadTrans.svg"
                width={28}
                height={28}
                alt=""
              />
              <span className="text-white text-xl font-semibold">Road Transport</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-[2.6rem] text-white font-light leading-tight mb-4">
              Gain a competitive edge with flexible road transportation services
            </h1>
            <p className="text-gray-300 text-sm mb-8">
              Safe, on-time delivery across Europe, Asia and beyond.
            </p>
            <Link
              href="#quotation"
              className="inline-flex items-center gap-1.5 px-6 py-3 rounded-[10px] text-sm font-semibold transition-all duration-200 hover:brightness-90 active:scale-95"
              style={{ backgroundColor: "var(--itl-blue)", color: "white" }}
            >
              Request a quote →
            </Link>
          </div>
        </div>
      </section>

      {/* ── Value proposition ── */}
      <section className="py-16 px-6 bg-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-900 leading-snug mb-4">
            Are you looking for a trusted logistics partner that matches your ambitions and puts you first?
          </h2>
          <p className="text-gray-500 text-sm leading-relaxed">
            From FTL to LTL and groupage services, shipping across Europe and Asia with expert planning and execution.
          </p>
        </div>
      </section>

      {/* ── Service Features ── */}
      <section className="py-12 px-6" style={{ backgroundColor: "var(--itl-gray)" }}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-semibold text-gray-900 text-center mb-10">
            Service Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {serviceFeatures.map((feat) => (
              <div
                key={feat.title}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{ backgroundColor: "var(--itl-blue)" }}
                >
                  <Image src={feat.icon} width={24} height={24} alt="" />
                </div>
                <h3 className="font-semibold text-gray-900 text-sm mb-4">
                  {feat.title}
                </h3>
                <ul className="space-y-2.5">
                  {feat.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                      <Check
                        size={14}
                        className="mt-0.5 shrink-0"
                        style={{ color: "var(--itl-blue)" }}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Our Coverage ── */}
      <section className="py-14 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-semibold text-gray-900 text-center mb-10">
            Our Coverage
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
            <div>
              <h3 className="font-semibold text-gray-900 mb-5">European Excellence</h3>
              <ul className="space-y-3">
                {europeanCoverage.map(({ region, detail }) => (
                  <li key={region} className="flex items-start gap-2 text-sm text-gray-600">
                    <Check
                      size={14}
                      className="mt-0.5 shrink-0"
                      style={{ color: "var(--itl-blue)" }}
                    />
                    <span>
                      <span className="font-medium text-gray-800">{region}</span>
                      <span className="text-gray-400"> — </span>
                      {detail}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-5">Asian Expansion</h3>
              <ul className="space-y-3">
                {asianCoverage.map(({ region, detail }) => (
                  <li key={region} className="flex items-start gap-2 text-sm text-gray-600">
                    <Check
                      size={14}
                      className="mt-0.5 shrink-0"
                      style={{ color: "var(--itl-blue)" }}
                    />
                    <span>
                      <span className="font-medium text-gray-800">{region}</span>
                      <span className="text-gray-400"> — </span>
                      {detail}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Interactive coverage map placeholder */}
          <div className="rounded-2xl border border-gray-200 bg-gray-50 h-64 flex flex-col items-center justify-center gap-3">
            <Globe size={40} className="text-gray-300" />
            <p className="text-sm text-gray-400">Interactive Coverage Map</p>
          </div>
        </div>
      </section>

      {/* ── Request a Quotation ── */}
      <section id="quotation" className="py-16 px-6" style={{ backgroundColor: "var(--itl-gray)" }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold text-gray-900 text-center mb-2">
            Request a Quotation
          </h2>
          <p className="text-gray-500 text-sm text-center mb-10">
            Fill the form below and our team will get back to you within 24 hours.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Row 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-gray-500 mb-1.5">
                  Company Name
                </label>
                <input
                  name="companyName"
                  value={form.companyName}
                  onChange={handleChange}
                  placeholder="Your company"
                  className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm bg-white outline-none focus:ring-2 focus:ring-blue-200 transition"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-500 mb-1.5">
                  Personal Name
                </label>
                <input
                  name="personalName"
                  value={form.personalName}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm bg-white outline-none focus:ring-2 focus:ring-blue-200 transition"
                />
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-gray-500 mb-1.5">
                  Origin / Destination
                </label>
                <input
                  name="origin"
                  value={form.origin}
                  onChange={handleChange}
                  placeholder="City, Country"
                  className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm bg-white outline-none focus:ring-2 focus:ring-blue-200 transition"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-500 mb-1.5">
                  Industry
                </label>
                <input
                  name="industry"
                  value={form.industry}
                  onChange={handleChange}
                  placeholder="Your industry"
                  className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm bg-white outline-none focus:ring-2 focus:ring-blue-200 transition"
                />
              </div>
            </div>

            {/* Row 3 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-gray-500 mb-1.5">
                  Phone Number
                </label>
                <input
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+00 000 000 000"
                  className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm bg-white outline-none focus:ring-2 focus:ring-blue-200 transition"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-500 mb-1.5">
                  City / Country
                </label>
                <input
                  name="cityCountry"
                  value={form.cityCountry}
                  onChange={handleChange}
                  placeholder="City, Country"
                  className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm bg-white outline-none focus:ring-2 focus:ring-blue-200 transition"
                />
              </div>
            </div>

            {/* Row 4 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-gray-500 mb-1.5">
                  To
                </label>
                <input
                  name="destination"
                  value={form.destination}
                  onChange={handleChange}
                  placeholder="Destination"
                  className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm bg-white outline-none focus:ring-2 focus:ring-blue-200 transition"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-500 mb-1.5">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm bg-white outline-none focus:ring-2 focus:ring-blue-200 transition"
                />
              </div>
            </div>

            {/* Volume */}
            <div>
              <label className="block text-xs font-medium text-gray-500 mb-1.5">
                Volume
              </label>
              <input
                name="volume"
                value={form.volume}
                onChange={handleChange}
                placeholder="e.g. 10 pallets, 5 000 kg"
                className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm bg-white outline-none focus:ring-2 focus:ring-blue-200 transition"
              />
            </div>

            {/* Additional Details */}
            <div>
              <label className="block text-xs font-medium text-gray-500 mb-1.5">
                Additional Details
              </label>
              <textarea
                name="additionalDetails"
                value={form.additionalDetails}
                onChange={handleChange}
                placeholder="Any additional requirements or information..."
                rows={4}
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
              <label htmlFor="gdpr" className="text-xs text-gray-500 leading-relaxed cursor-pointer">
                I agree to the processing of my personal data in accordance with the{" "}
                <Link
                  href="/privacy"
                  className="underline hover:opacity-80 transition-opacity"
                  style={{ color: "var(--itl-blue)" }}
                >
                  Privacy Policy
                </Link>{" "}
                and consent to being contacted by Inter Trans Logistics regarding my request.{" "}
                <span className="text-gray-400">This field is required.</span>
              </label>
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-[10px] text-white text-sm font-semibold transition-all duration-200 hover:brightness-90 active:scale-95 mt-2"
              style={{ backgroundColor: "var(--itl-blue)" }}
            >
              Submit Request →
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
