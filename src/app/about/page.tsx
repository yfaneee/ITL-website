import Link from "next/link";
import Image from "next/image";
import {
  Truck,
  Plane,
  Ship,
  FileCheck,
  UserCheck,
  Receipt,
  MapPin,
  Send,
  Shuffle,
  ShieldCheck,
  Network,
  Award,
  Leaf,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const heroGradient =
  "linear-gradient(to bottom right, #3BA67E 0%, #0B3076 100%)";
const cream = "#F2F1EC";

const heroBadges = [
  "ISO-certified processes",
  "200+ projects delivered",
  "Part of Holleman Group",
  "EU-wide coverage",
];

const backgroundStats = [
  { value: "20+", label: "Years of expertise" },
  { value: "4", label: "Core transport services" },
  { value: "EU+", label: "Markets served" },
];

const whatWeDo = [
  { icon: Truck, title: "Road Transport", sub: "Full & partial loads" },
  { icon: Plane, title: "Air Transport", sub: "Time-critical freight" },
  { icon: Ship, title: "Port Operations", sub: "Handling & stevedoring" },
  { icon: FileCheck, title: "Customs & Compliance", sub: "Documentation handled" },
];

const coverage = [
  { region: "Western Europe", note: "Daily departures" },
  { region: "Central Europe", note: "Hub network" },
  { region: "Southern Europe", note: "Port connections" },
  { region: "Eastern Europe", note: "Cross-border" },
];

const howWeWork = [
  { icon: UserCheck, text: "A dedicated, single point of contact for every shipment." },
  { icon: Receipt, text: "Transparent, fixed-price quotes with no hidden costs." },
  { icon: MapPin, text: "Real-time tracking and proactive status updates." },
  { icon: Send, text: "Fast, reliable delivery across the European network." },
];

const whyClients = [
  {
    icon: Shuffle,
    title: "Flexibility",
    text: "We adapt to your timelines and cargo, scaling capacity up or down as your needs change.",
  },
  {
    icon: ShieldCheck,
    title: "Reliability",
    text: "Carefully planned routes and trusted carriers mean your freight arrives on time, every time.",
  },
  {
    icon: Network,
    title: "European network",
    text: "A connected web of routes, hubs and partners spanning the whole continent.",
  },
  {
    icon: Award,
    title: "Experienced team",
    text: "Decades of combined logistics expertise behind every booking you make.",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    text: "Optimised loads and modern fleets that keep emissions and waste to a minimum.",
  },
];

function Eyebrow({ children, light = false }: { children: string; light?: boolean }) {
  return (
    <span
      className={`block text-xs font-semibold uppercase tracking-[0.2em] mb-3 ${
        light ? "text-white/60" : "text-gray-400"
      }`}
    >
      {children}
    </span>
  );
}

export default function AboutPage() {
  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative" style={{ background: heroGradient }}>
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
          <Eyebrow light>About us</Eyebrow>
          <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-4">
            About Inter Trans Logistics
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl">
            A responsive logistics partner for European cargo flows.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
            <p className="text-white/75 text-sm md:text-base leading-relaxed">
              Inter Trans Logistics keeps freight moving across Europe with road,
              air and port solutions built around each client. We combine local
              know-how with a continent-wide network so every shipment is handled
              with care, from first enquiry to final delivery.
            </p>
            <p className="text-white/75 text-sm md:text-base leading-relaxed">
              As part of the Holleman Group, we bring decades of heavy and general
              cargo experience to the table — backing every project with the
              resources, reach and reliability of an established logistics partner.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 mt-10">
            {heroBadges.map((badge) => (
              <span
                key={badge}
                className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-4 py-2 text-xs md:text-sm text-white/90 backdrop-blur-sm"
              >
                <CheckCircle2 size={15} className="text-white/80" />
                {badge}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Who we are */}
      <section className="py-20 px-6" style={{ backgroundColor: cream }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          <div>
            <Eyebrow>01 — Who we are</Eyebrow>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Who we are
            </h2>
          </div>
          <div className="space-y-5 text-gray-600 text-sm md:text-base leading-relaxed">
            <p>
              We are a logistics service provider supporting cargo flows across
              Europe. Whether it is a single consignment or a recurring lane, our
              team plans, coordinates and tracks every movement so you can focus on
              your business while we handle the transport.
            </p>
            <p>
              Our clients range from manufacturers and traders to industrial
              operators that need a dependable partner. We meet them with clear
              communication, flexible capacity and a genuine commitment to getting
              the job done.
            </p>
          </div>
        </div>
      </section>

      {/* Our background */}
      <section className="py-20 px-6" style={{ backgroundColor: "var(--itl-blue-dark)" }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
            <div>
              <Eyebrow light>02 — Our background</Eyebrow>
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Our background
              </h2>
            </div>
            <div className="space-y-5 text-white/75 text-sm md:text-base leading-relaxed">
              <p>
                Inter Trans Logistics grew out of a long history of moving goods
                across borders. That foundation gives us the structure, processes
                and partner relationships needed to deliver consistently.
              </p>
              <p>
                The company has built its reputation on solving complex logistics
                challenges with practical, cost-effective answers — keeping cargo
                moving even when schedules and routes get demanding.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-6 mt-14 pt-10 border-t border-white/15">
            {backgroundStats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-5xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-xs md:text-sm text-white/60">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What we do */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          <div>
            <Eyebrow>03 — What we do</Eyebrow>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              What we do
            </h2>
          </div>
          <div>
            <div className="space-y-5 text-gray-600 text-sm md:text-base leading-relaxed mb-8">
              <p>
                We connect your cargo to the right mode of transport, at the right
                time, for the right price.
              </p>
              <p>
                Whether your freight travels by road, air or sea, we manage the
                full journey — booking carriers, handling customs and documentation,
                and keeping you informed at every step.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {whatWeDo.map((item) => (
                <div
                  key={item.title}
                  className="flex items-center gap-4 bg-white rounded-xl border border-gray-100 p-4 hover:shadow-md transition-shadow"
                >
                  <span
                    className="w-11 h-11 rounded-lg flex items-center justify-center text-white shrink-0"
                    style={{ backgroundColor: "var(--itl-blue)" }}
                  >
                    <item.icon size={20} />
                  </span>
                  <div>
                    <div className="text-sm font-semibold text-gray-900">{item.title}</div>
                    <div className="text-xs text-gray-500">{item.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* European focus, practical reach */}
      <section className="py-20 px-6" style={{ backgroundColor: cream }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div>
            <Eyebrow>04 — Coverage</Eyebrow>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              European focus,
              <br />
              practical reach
            </h2>
            <div className="space-y-5 text-gray-600 text-sm md:text-base leading-relaxed">
              <p>
                We focus on Europe because that is where we move best. Concentrating
                our network here means tighter schedules, shorter lead times and
                better control over your cargo.
              </p>
              <p>
                This regional focus is our strength: we know the routes, the
                partners and the paperwork, so your shipment travels through a
                continent we understand inside out.
              </p>
            </div>
          </div>
          <div
            className="rounded-2xl p-8 md:p-10"
            style={{ backgroundColor: "var(--itl-blue-dark)" }}
          >
            <div className="space-y-1">
              {coverage.map((row) => (
                <div
                  key={row.region}
                  className="flex items-center justify-between py-3 border-b border-white/10 last:border-b-0"
                >
                  <span className="text-white font-medium text-sm md:text-base">
                    {row.region}
                  </span>
                  <span className="text-white/55 text-xs md:text-sm">{row.note}</span>
                </div>
              ))}
            </div>
            <p className="text-white/50 text-xs mt-6 text-center">
              One connected network across the continent.
            </p>
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          <div>
            <Eyebrow>05 — How we work</Eyebrow>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              How we work
            </h2>
          </div>
          <div>
            <div className="space-y-5 text-gray-600 text-sm md:text-base leading-relaxed mb-8">
              <p>
                We keep things simple and personal. From the first enquiry to final
                delivery, you work with people who know your shipment and take
                ownership of it.
              </p>
              <p>
                Our team is always reachable, and our quotes are clear from the
                start — no surprises, just freight that moves.
              </p>
            </div>
            <ul className="space-y-3">
              {howWeWork.map((item) => (
                <li
                  key={item.text}
                  className="flex items-center gap-4 py-2 border-b border-gray-200 last:border-b-0"
                >
                  <span
                    className="w-8 h-8 rounded-md flex items-center justify-center text-white shrink-0"
                    style={{ backgroundColor: "var(--itl-blue)" }}
                  >
                    <item.icon size={16} />
                  </span>
                  <span className="text-sm md:text-base text-gray-700">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Why clients work with ITL */}
      <section className="py-20 px-6" style={{ backgroundColor: "var(--itl-blue-dark)" }}>
        <div className="max-w-7xl mx-auto">
          <Eyebrow light>06 — Why ITL</Eyebrow>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
            Why clients work with ITL
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyClients.map((item) => (
              <div
                key={item.title}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors"
              >
                <span
                  className="w-11 h-11 rounded-lg flex items-center justify-center text-white mb-4"
                  style={{ backgroundColor: "var(--itl-blue)" }}
                >
                  <item.icon size={20} />
                </span>
                <h3 className="text-white font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-white/65 text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Part of Holleman Group */}
      <section className="py-20 px-6" style={{ backgroundColor: cream }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 mb-12">
            <div>
              <Eyebrow>07 — Our group</Eyebrow>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                Part of Holleman
                <br />
                Group
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
            <div className="relative w-full max-w-sm aspect-[4/3] rounded-2xl overflow-hidden shadow-md">
              <Image
                src="/images/proiectebckg.webp"
                fill
                alt="Holleman Group logistics operations"
                className="object-cover"
              />
            </div>
            <div className="space-y-5 text-gray-600 text-sm md:text-base leading-relaxed">
              <p> Being part of the Holleman Group gives us the backbone of an
              established logistics organisation, with the agility of a focused,
              client-first team.</p>
              <p>
                The Holleman Group has decades of experience in heavy and general
                cargo across Europe, building a reputation for handling demanding
                projects others walk away from.
              </p>
              <p>
                That heritage flows into everything we do. When you work with{" "}
                <span className="font-semibold text-gray-900">Inter Trans Logistics</span>,
                you gain the strength of a proven group and the attention of a
                partner who treats your cargo as their own.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our commitment */}
      <section className="py-20 px-6" style={{ background: heroGradient }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          <div>
            <Eyebrow light>08 — Our commitment</Eyebrow>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Our commitment
            </h2>
          </div>
          <div className="space-y-5 text-white/80 text-sm md:text-base leading-relaxed">
            <p>
              We are committed to keeping your cargo moving safely, on time and
              with full transparency — treating every shipment as if it were our
              own.
            </p>
            <p>
              As your logistics partner, we keep improving how we plan, communicate
              and deliver, so that working with us stays simple, predictable and
              genuinely helpful — shipment after shipment.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-20 px-6"
        style={{ background: "linear-gradient(135deg, #eef1f6 0%, #e3eaf3 100%)" }}
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight" style={{ color: "var(--itl-dark)" }}>
              Looking for a logistics
              <br />
              partner in Europe?
            </h2>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              Tell us about your cargo, your routes and your timelines. We will get
              back to you with a clear, practical proposal — no obligations.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-[10px] bg-white text-sm font-semibold border shrink-0 transition-all duration-200 hover:brightness-95 active:scale-95"
            style={{ color: "var(--itl-blue)", borderColor: "var(--itl-blue)" }}
          >
            Contact us
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
