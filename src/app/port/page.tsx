"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Check, X, ZoomIn } from "lucide-react";

const incotermsSlides = [
  { id: 0, src: "/images/IncotermsA.webp", alt: "Incoterms 2020 – All modes of transport" },
  { id: 1, src: "/images/IncotermsB.webp", alt: "Incoterms 2020 – Sea and inland waterway" },
];

const quickTips = [
  "EXW — Seller makes goods available at their premises; buyer bears all risk and costs from that point.",
  "FCA — Risk transfers when goods are handed to the carrier at a named place; flexible for containerised cargo.",
  "FOB — Seller loads goods on board the named vessel; suitable for bulk and conventional sea freight.",
  "CIF — Seller arranges freight and minimum insurance to destination port; buyer takes risk from on board.",
  "DDP — Maximum seller responsibility: seller delivers goods cleared for import, all duties and taxes paid.",
];

const notCoveredItems = [
  "The price of the goods or the method of payment between parties",
  "Transfer of ownership or title of the goods",
  "Intellectual property rights and licensing",
  "Force majeure or hardship clauses",
  "Dispute resolution and applicable jurisdiction",
  "Sanctions, embargoes, or trade restrictions",
];

const cargoSlides = [
  { id: 0, src: "/images/cargoMesure.webp", alt: "Container measurement guide" },
  { id: 1, src: "/images/cargoMesure2.webp", alt: "Container measurement guide – detail" },
];

type FeatureType = "check" | "cross";

const serviceFeatures: {
  icon: string;
  title: string;
  items: string[];
  type: FeatureType;
  gridCol: string;
}[] = [
  {
    icon: "/icons/advantages.svg",
    title: "Advantages",
    items: [
      "Reduced cost for high volumes",
      "Cargo protection",
      "International standard",
      "Reduced risk of damage",
      "Easy to secure",
    ],
    type: "check",
    gridCol: "1 / span 2",
  },
  {
    icon: "/icons/commonTerm.svg",
    title: "Common terms",
    items: [
      "FCL (Full Container Load) — full container",
      "LCL (Less than Container Load) — groupage",
      "Demurrage — waiting time in port",
      "Detention — container's waiting time in front on port",
      "Free time — free days included in price",
    ],
    type: "check",
    gridCol: "3 / span 2",
  },
  {
    icon: "/icons/mainDoc.svg",
    title: "Main documents",
    items: [
      "Bill of Lading (B/L) — maritime",
      "CMR — road transport",
      "Rail waybill — railway",
      "Packing List",
      "Invoice",
      "Customs documents (EX1, import, T1 etc)",
    ],
    type: "check",
    gridCol: "5 / span 2",
  },
  {
    icon: "/icons/security.svg",
    title: "Security & control",
    items: [
      "Sealed container (numbered seal)",
      "Followed number of container",
      "GPS / Tracking",
      "Low risk of stealing open palletised cargo",
    ],
    type: "check",
    gridCol: "2 / span 2",
  },
  {
    icon: "/icons/disadvantages.svg",
    title: "Disadvantages",
    items: [
      "Less flexible for fast deliveries",
      "Costs for port",
      "Risk of port delays",
      "Requires planification",
    ],
    type: "cross",
    gridCol: "4 / span 2",
  },
];

function FeatureCard({ feat }: { feat: (typeof serviceFeatures)[number] }) {
  return (
    <div
      className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
      style={{ gridColumn: feat.gridCol }}
    >
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
        style={{ backgroundColor: "var(--itl-blue)" }}
      >
        <Image
          src={feat.icon}
          width={24}
          height={24}
          alt=""
          style={{ filter: "brightness(0) invert(1)" }}
        />
      </div>
      <h3 className="font-semibold text-gray-900 text-sm mb-4">{feat.title}</h3>
      <ul className="space-y-2.5">
        {feat.items.map((item) => (
          <li key={item} className="flex items-start gap-2 text-xs text-gray-600">
            {feat.type === "check" ? (
              <Check size={12} className="mt-0.5 shrink-0" style={{ color: "var(--itl-blue)" }} />
            ) : (
              <X size={12} className="mt-0.5 shrink-0" style={{ color: "#E53E3E" }} />
            )}
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

const galleryImages = [
  { id: 1, src: "/images/portOpsGallery.webp", alt: "Port Operations" },
  { id: 2, src: "/images/portOpsGallery2.webp", alt: "Port Operations – aerial" },
  { id: 3, src: "/images/portOpsGallery3.webp", alt: "Port Operations – dock" },
];

export default function PortPage() {
  const [incotermsIdx, setIncotermsIdx] = useState(0);
  const [cargoIdx, setCargoIdx] = useState(0);
  const [galleryActive, setGalleryActive] = useState(1);
  const [modalSrc, setModalSrc] = useState<string | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setModalSrc(null); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const prevIncoterms = () =>
    setIncotermsIdx((p) => (p === 0 ? incotermsSlides.length - 1 : p - 1));
  const nextIncoterms = () =>
    setIncotermsIdx((p) => (p === incotermsSlides.length - 1 ? 0 : p + 1));

  const prevCargo = () =>
    setCargoIdx((p) => (p === 0 ? cargoSlides.length - 1 : p - 1));
  const nextCargo = () =>
    setCargoIdx((p) => (p === cargoSlides.length - 1 ? 0 : p + 1));

  return (
    <div>
      {/* ── Hero ── */}
      <section className="relative h-[480px] md:h-[540px] flex items-end pb-14 md:items-center md:pb-0 overflow-hidden">
        <Image
          src="/backgrounds/PortOps.webp"
          fill
          alt="Port Operations"
          className="object-cover object-center"
          priority
        />
        <div
          className="absolute inset-0"
          style={{ backgroundColor: "#161F2F", opacity: 0.65 }}
        />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
          <div className="max-w-xl">
            <div className="flex items-center gap-2.5 mb-5">
              <Image src="/icons/portOps.svg" width={28} height={28} alt="" />
              <span className="text-white text-xl font-semibold">Port Operations</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-[2.6rem] text-white font-light leading-tight mb-4">
              Comprehensive port logistics solutions for global trade
            </h1>
            <p className="text-gray-300 text-sm mb-8">
              Expert handling, Incoterms compliance, and end-to-end cargo management at every major port worldwide.
            </p>
            <Link
              href="#quote"
              className="inline-flex items-center gap-1.5 px-6 py-3 rounded-[10px] text-sm font-semibold transition-all duration-200 hover:brightness-90 active:scale-95"
              style={{ backgroundColor: "var(--itl-blue)", color: "white" }}
            >
              Request a quote →
            </Link>
          </div>
        </div>
      </section>

      {/* ── Text Section ── */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-900 leading-snug mb-4 text-center">
            Seamless port operations tailored to your cargo needs
          </h2>
          <p className="text-gray-500 text-sm leading-relaxed mb-4">
            At ITL, our port operations services are built around efficiency, compliance, and reliability. We handle every aspect of your port logistics — from loading and unloading to customs documentation and container management — ensuring your cargo moves without delays.
          </p>
          <p className="text-gray-500 text-sm leading-relaxed">
            Our expert team works closely with port authorities and shipping lines to deliver seamless cargo management. Whether you are importing raw materials or exporting finished goods, we provide end-to-end solutions that keep your supply chain running smoothly. Understanding Incoterms is at the heart of what we do, ensuring every party in the trade knows exactly where their responsibilities begin and end.
          </p>
        </div>
      </section>

      {/* ── Incoterms Section ── */}
      <section className="relative py-16 overflow-hidden">
        <Image
          src="/images/portOpsGallery2.webp"
          fill
          alt=""
          className="object-cover object-center"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, #3BA67E 0%, #369077 25%, #338A81 50%, #185089 75%, #0B3076 100%)",
            opacity: 0.9,
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-10 items-start">
            {/* Left: Incoterms Slideshow */}
            <div>
              <h2 className="text-2xl font-semibold text-white mb-6">
                Incoterms
              </h2>
              <div className="relative rounded-2xl overflow-hidden bg-white/10 backdrop-blur-sm border border-white/20">
                <div
                  className="relative h-80 md:h-[375px] cursor-zoom-in group"
                  onClick={() => setModalSrc(incotermsSlides[incotermsIdx].src)}
                >
                  <Image
                    src={incotermsSlides[incotermsIdx].src}
                    fill
                    alt={incotermsSlides[incotermsIdx].alt}
                    className="object-contain p-3"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <div className="bg-black/40 rounded-full p-2.5">
                      <ZoomIn size={20} className="text-white" />
                    </div>
                  </div>
                </div>
                <button
                  onClick={prevIncoterms}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/20 hover:bg-white/40 flex items-center justify-center transition-all"
                  aria-label="Previous"
                >
                  <ChevronLeft size={18} className="text-white" />
                </button>
                <button
                  onClick={nextIncoterms}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/20 hover:bg-white/40 flex items-center justify-center transition-all"
                  aria-label="Next"
                >
                  <ChevronRight size={18} className="text-white" />
                </button>
                <div className="flex justify-center gap-2 py-3">
                  {incotermsSlides.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setIncotermsIdx(i)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        i === incotermsIdx
                          ? "bg-white scale-125"
                          : "bg-white/40 hover:bg-white/60"
                      }`}
                      aria-label={`Slide ${i + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Quick Tips */}
            <div>
              <h2 className="text-2xl font-semibold text-white mb-6">Quick Tips</h2>
              <div className="space-y-3">
                {quickTips.map((tip, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 bg-white/10 backdrop-blur-sm border border-white/15 rounded-xl px-4 py-3"
                  >
                    <Check size={15} className="shrink-0 mt-0.5 text-green-300" />
                    <p className="text-white/90 text-sm leading-relaxed">{tip}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── What Incoterms Do Not Cover ── */}
      <section className="py-14 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            What Incoterms Do Not Cover
          </h2>
          <p className="text-gray-500 text-sm leading-relaxed mb-6">
            While Incoterms rules are an essential part of international trade contracts, it is important to understand their limitations. Incoterms do not address several critical aspects of a commercial transaction:
          </p>
          <ul className="space-y-3">
            {notCoveredItems.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm text-gray-600">
                <X size={14} className="shrink-0 mt-0.5" style={{ color: "#E53E3E" }} />
                {item}
              </li>
            ))}
          </ul>
          <p className="text-gray-500 text-sm leading-relaxed mt-6">
            These matters must be addressed in separate contractual clauses or in the governing law of the sales contract. Our expert team can guide you through the full documentation and legal requirements for every shipment.
          </p>
        </div>
      </section>

      {/* ── Container Types Slideshow ── */}
      <section className="py-14 px-6" style={{ backgroundColor: "var(--itl-gray)" }}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-semibold text-gray-900 text-center mb-10">
            Container Types
          </h2>
          <div className="relative max-w-4xl mx-auto">
            <div
              className="relative h-72 md:h-[420px] rounded-2xl overflow-hidden bg-white shadow-sm border border-gray-100 cursor-zoom-in group"
              onClick={() => setModalSrc(cargoSlides[cargoIdx].src)}
            >
              <Image
                src={cargoSlides[cargoIdx].src}
                fill
                alt={cargoSlides[cargoIdx].alt}
                className="object-contain p-6"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <div className="bg-black/30 rounded-full p-2.5">
                  <ZoomIn size={22} className="text-white" />
                </div>
              </div>
            </div>
            <button
              onClick={prevCargo}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 w-10 h-10 rounded-full bg-white shadow-md border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-all z-10"
              aria-label="Previous"
            >
              <ChevronLeft size={20} className="text-gray-600" />
            </button>
            <button
              onClick={nextCargo}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 w-10 h-10 rounded-full bg-white shadow-md border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-all z-10"
              aria-label="Next"
            >
              <ChevronRight size={20} className="text-gray-600" />
            </button>
            <div className="flex justify-center gap-2 mt-5">
              {cargoSlides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCargoIdx(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    i === cargoIdx ? "scale-125" : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  style={i === cargoIdx ? { backgroundColor: "var(--itl-blue)" } : {}}
                  aria-label={`Slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Container Types Overview Image ── */}
      <section className="py-14 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-semibold text-gray-900 text-center mb-10">
            Container types
          </h2>
          <div className="relative w-full h-80 md:h-[440px]">
            <Image
              src="/images/containerTypes.webp"
              fill
              alt="Overview of container types"
              className="object-contain"
            />
          </div>
        </div>
      </section>

      {/* ── Service Features ── */}
      <section className="py-14 px-6" style={{ backgroundColor: "var(--itl-gray)" }}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-semibold text-gray-900 text-center mb-10">
            Service Features
          </h2>
          {/* Pentagon layout: 6-col grid, cards placed with inline gridColumn styles */}
          <div className="grid grid-cols-6 gap-5">
            {serviceFeatures.map((feat) => (
              <FeatureCard key={feat.title} feat={feat} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Gallery Slideshow ── */}
      <section className="py-16 px-6 overflow-hidden" style={{ backgroundColor: "var(--itl-gray)" }}>
        <div className="max-w-5xl mx-auto">
          <div className="relative flex items-center justify-center h-72 md:h-96">
            {galleryImages.map((img, idx) => {
              const len = galleryImages.length;
              const activeIdx = galleryImages.findIndex((i) => i.id === galleryActive);
              const rel = ((idx - activeIdx) + len) % len;
              const isCenter = rel === 0;
              const isRight = rel === 1;
              const isLeft = rel === len - 1;

              let transform = "translateX(0) scale(0.7)";
              let zIndex = 5;
              let opacity = 0;

              if (isCenter) {
                transform = "translateX(0) scale(1)";
                zIndex = 20;
                opacity = 1;
              } else if (isLeft) {
                transform = "translateX(-55%) scale(0.85)";
                zIndex = 10;
                opacity = 0.45;
              } else if (isRight) {
                transform = "translateX(55%) scale(0.85)";
                zIndex = 10;
                opacity = 0.45;
              }

              return (
                <div
                  key={img.id}
                  onClick={() => setGalleryActive(img.id)}
                  className="absolute w-2/3 md:w-1/2 h-full rounded-2xl cursor-pointer transition-all duration-500 overflow-hidden"
                  style={{ transform, zIndex, opacity }}
                >
                  <Image src={img.src} fill alt={img.alt} className="object-cover" />
                </div>
              );
            })}
          </div>

          <div className="flex justify-center gap-2 mt-6">
            {galleryImages.map((img) => (
              <button
                key={img.id}
                onClick={() => setGalleryActive(img.id)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  galleryActive === img.id ? "scale-125" : "bg-gray-300 hover:bg-gray-400"
                }`}
                style={galleryActive === img.id ? { backgroundColor: "var(--itl-blue)" } : {}}
                aria-label={`Show image ${img.id}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── Image Modal ── */}
      {modalSrc && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-10"
          style={{ backgroundColor: "rgba(0,0,0,0.85)" }}
          onClick={() => setModalSrc(null)}
        >
          <button
            onClick={() => setModalSrc(null)}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/25 flex items-center justify-center transition-all"
            aria-label="Close"
          >
            <X size={20} className="text-white" />
          </button>
          <div
            className="relative w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={modalSrc}
              alt="Expanded view"
              width={1400}
              height={900}
              className="w-full h-auto object-contain rounded-2xl"
              style={{ maxHeight: "90vh" }}
            />
          </div>
        </div>
      )}
    </div>
  );
}
