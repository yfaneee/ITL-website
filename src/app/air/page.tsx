"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Check } from "lucide-react";

type FormState = {
  companyName: string;
  cargoType: string;
  origin: string;
  destination: string;
  weight: string;
  volume: string;
  specialRequirements: string;
  gdpr: boolean;
};

const keyBenefits = [
  {
    icon: "/icons/fastDeliv.svg",
    w: 22,
    h: 25,
    title: "Fast Delivery",
    desc: "Express freight solutions for time-critical shipments worldwide.",
  },
  {
    icon: "/icons/globalNet.svg",
    w: 24,
    h: 24,
    title: "Global Network & Carrier Partnerships",
    desc: "Access to 1 000+ airlines and freight forwarders across 150+ countries.",
  },
  {
    icon: "/icons/industryLead.svg",
    w: 24,
    h: 24,
    title: "Industry-Leading Handling Standards",
    desc: "Meticulous care for every shipment to consistently meet exacting standards.",
  },
  {
    icon: "/icons/precisionSol.svg",
    w: 24,
    h: 24,
    title: "Precision Solutions for Special Cargo",
    desc: "Customised handling for sensitive, high-value and oversized cargo.",
  },
];

const precisionItems = [
  "High-value cargo",
  "Dangerous goods",
  "Fragile & ADR",
  "Temperature-sensitive",
  "Live animals",
  "Dangerous gases",
];

const comprehensiveServices = [
  { icon: "/icons/airTrans.svg", w: 24, h: 24, label: "Air charter services", invert: false },
  { icon: "/icons/cargoInsur.svg", w: 18, h: 22, label: "Cargo insurance", invert: true },
  { icon: "/icons/customClear.svg", w: 24, h: 24, label: "Customs clearance", invert: true },
  { icon: "/icons/industryLead.svg", w: 24, h: 24, label: "Door-to-door delivery", invert: false },
];

export default function AirPage() {
  const [form, setForm] = useState<FormState>({
    companyName: "",
    cargoType: "",
    origin: "",
    destination: "",
    weight: "",
    volume: "",
    specialRequirements: "",
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
          src="/backgrounds/AirTranpBckg.webp"
          fill
          alt="Air transport"
          className="object-cover object-center"
          priority
        />
        {/* 45° gradient overlay: #3BA67E → #338A81 → #0B3076 at 70% opacity */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(45deg, #3BA67E 0%, #338A81 50%, #0B3076 100%)",
            opacity: 0.7,
          }}
        />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
          <div className="max-w-xl">
            <div className="flex items-center gap-2.5 mb-5">
              <Image src="/icons/airTrans.svg" width={26} height={26} alt="" />
              <span className="text-white text-xl font-semibold">Air Transport</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-[2.6rem] text-white font-light leading-tight mb-4">
              The competitive marketplace rewards a resilient supply chain.
            </h1>
            <p className="text-gray-200 text-sm mb-8">
              Unmatched freight solutions from thousands of airlines, to over 1&nbsp;000 cities worldwide.
            </p>
            <Link
              href="#quote"
              className="inline-flex items-center gap-1.5 px-6 py-3 rounded-[10px] text-sm font-semibold transition-all duration-200 hover:brightness-95 active:scale-95"
              style={{ backgroundColor: "white", color: "var(--itl-blue)" }}
            >
              Get Air Freight solution →
            </Link>
          </div>
        </div>
      </section>

      {/* ── Key Benefits ── */}
      <section className="py-14 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-semibold text-gray-900 text-center mb-10">
            Key Benefits
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {keyBenefits.map((b) => (
              <div key={b.title} className="flex flex-col items-start">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 shrink-0"
                  style={{ backgroundColor: "var(--itl-blue)" }}
                >
                  <Image src={b.icon} width={b.w} height={b.h} alt="" />
                </div>
                <h3 className="font-semibold text-gray-900 text-sm mb-2 leading-snug">
                  {b.title}
                </h3>
                <p className="text-gray-500 text-xs leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Precision Solutions for Special Cargo ── */}
      <section className="py-14 px-6" style={{ backgroundColor: "var(--itl-gray)" }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Text */}
            <div>
              <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
                Precision Solutions for Special Cargo
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                Our specialised air freight services are designed to handle your most challenging shipments with assured care and precision.
              </p>
              <div className="grid grid-cols-2 gap-y-3 gap-x-4">
                {precisionItems.map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-gray-600">
                    <Check
                      size={14}
                      className="shrink-0"
                      style={{ color: "var(--itl-blue)" }}
                    />
                    {item}
                  </div>
                ))}
              </div>
            </div>
            {/* Blue gradient card */}
            <div
              className="rounded-2xl h-64 flex items-center justify-center"
              style={{
                background: "linear-gradient(180deg, #0677BD 0%, #045A9E 100%)",
              }}
            >
              <Image
                src="/icons/AirTransportService.webp"
                width={130}
                height={130}
                alt="Air transport service"
                className="object-contain drop-shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Sustainable Aviation Solutions ── */}
      <section className="py-14 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Green gradient card */}
            <div
              className="rounded-2xl h-64 flex items-center justify-center order-last md:order-first"
              style={{
                background: "linear-gradient(180deg, #00C950 0%, #008236 100%)",
              }}
            >
              <Image
                src="/icons/sustainAvi.svg"
                width={88}
                height={88}
                alt="Sustainable aviation"
              />
            </div>
            {/* Text */}
            <div>
              <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
                Sustainable Aviation Solutions
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                We&apos;re committed to reducing the environmental impact of air freight through innovative sustainable solutions programmes.
              </p>
              <div className="space-y-3">
                <div className="rounded-xl p-4 border border-green-100 bg-green-50">
                  <p
                    className="text-sm font-semibold mb-1"
                    style={{ color: "#008236" }}
                  >
                    Book &amp; Claim
                  </p>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    Offset your emissions with our verified carbon credit programme.
                  </p>
                </div>
                <div className="rounded-xl p-4 border border-green-100 bg-green-50">
                  <p
                    className="text-sm font-semibold mb-1"
                    style={{ color: "#008236" }}
                  >
                    Sustainable Aviation Fuel (SAF)
                  </p>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    Use our SAF alternatives to reduce emissions by up to 80% compared to traditional jet fuel.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Comprehensive Services ── */}
      <section className="py-14 px-6" style={{ backgroundColor: "var(--itl-gray)" }}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-semibold text-gray-900 text-center mb-10">
            Comprehensive Services
          </h2>
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              {comprehensiveServices.map((s) => (
                <div key={s.label} className="flex flex-col items-center text-center">
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-3"
                    style={{ backgroundColor: "#0677BD" }}
                  >
                    <Image
                      src={s.icon}
                      width={s.w}
                      height={s.h}
                      alt=""
                      style={s.invert ? { filter: "brightness(0) invert(1)" } : {}}
                    />
                  </div>
                  <p className="text-sm font-medium text-gray-800 leading-snug">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
            <div className="border-t border-gray-100 pt-6 text-center">
              <p className="font-semibold text-gray-900 mb-1">Need a custom solution?</p>
              <p className="text-gray-500 text-sm mb-5">
                Our air freight experts can tailor a distinct solution for your requirements. From general cargo to complex shipments.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-[10px] text-sm font-semibold transition-all duration-200 hover:brightness-90 active:scale-95"
                style={{ backgroundColor: "var(--itl-blue)", color: "white" }}
              >
                Discuss with our team →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Request Air Freight Quote ── */}
      <section id="quote" className="py-16 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold text-gray-900 text-center mb-2">
            Request Air Freight Quote
          </h2>
          <p className="text-gray-500 text-sm text-center mb-10">
            Get tailored quote information for your freight needs.
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
                  Cargo Type
                </label>
                <input
                  name="cargoType"
                  value={form.cargoType}
                  onChange={handleChange}
                  placeholder="e.g. General, Hazardous, Perishable"
                  className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm bg-white outline-none focus:ring-2 focus:ring-blue-200 transition"
                />
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-gray-500 mb-1.5">
                  Origin (From)
                </label>
                <input
                  name="origin"
                  value={form.origin}
                  onChange={handleChange}
                  placeholder="Airport / City, Country"
                  className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm bg-white outline-none focus:ring-2 focus:ring-blue-200 transition"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-500 mb-1.5">
                  Destination (To)
                </label>
                <input
                  name="destination"
                  value={form.destination}
                  onChange={handleChange}
                  placeholder="Airport / City, Country"
                  className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm bg-white outline-none focus:ring-2 focus:ring-blue-200 transition"
                />
              </div>
            </div>

            {/* Row 3 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-gray-500 mb-1.5">
                  Weight (kg)
                </label>
                <input
                  name="weight"
                  value={form.weight}
                  onChange={handleChange}
                  placeholder="0"
                  className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm bg-white outline-none focus:ring-2 focus:ring-blue-200 transition"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-500 mb-1.5">
                  Volume (m³)
                </label>
                <input
                  name="volume"
                  value={form.volume}
                  onChange={handleChange}
                  placeholder="e.g. 2.5"
                  className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm bg-white outline-none focus:ring-2 focus:ring-blue-200 transition"
                />
              </div>
            </div>

            {/* Special Requirements */}
            <div>
              <label className="block text-xs font-medium text-gray-500 mb-1.5">
                Special Requirements
              </label>
              <textarea
                name="specialRequirements"
                value={form.specialRequirements}
                onChange={handleChange}
                placeholder="Dimensions, handling instructions, customs requirements..."
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
              <label
                htmlFor="gdpr"
                className="text-xs text-gray-500 leading-relaxed cursor-pointer"
              >
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
              Request Quote →
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
