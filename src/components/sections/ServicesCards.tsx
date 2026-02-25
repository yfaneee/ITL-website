import Link from "next/link";
import Image from "next/image";

const services = [
  {
    id: "air",
    href: "/air",
    title: "Air Transport",
    description: "Fast and reliable air freight solutions for time-sensitive cargo across global routes.",
    bgImage: "/backgrounds/AirTrans.webp",
    icon: "/icons/AirTransportService.webp",
  },
  {
    id: "road",
    href: "/road",
    title: "Road Transport",
    description: "Flexible road logistics covering full and partial loads with nationwide coverage.",
    bgImage: "/backgrounds/RoadTrans.webp",
    icon: "/icons/RoadTransportService.webp",
  },
  {
    id: "port",
    href: "/port",
    title: "Port Operations",
    description: "The most important port facilities. Seamless cargo handling and stevedoring services.",
    bgImage: "/backgrounds/PortOps.webp",
    icon: "/icons/PortOpsService.webp",
  },
];

export default function ServicesCards() {
  return (
    <section className="py-6 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {services.map((service) => (
            <Link
              key={service.id}
              href={service.href}
              className="rounded-2xl overflow-hidden shadow-md group cursor-pointer block"
            >
              {/* Top half — background image + centered icon */}
              <div className="relative h-48 flex items-center justify-center overflow-hidden">
                <Image
                  src={service.bgImage}
                  fill
                  alt={service.title}
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/25" />
                <div className="relative z-10 w-20 h-20">
                  <Image
                    src={service.icon}
                    fill
                    alt={`${service.title} icon`}
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Bottom half — white */}
              <div className="bg-white px-6 py-5">
                <h3 className="text-gray-900 text-lg font-bold mb-1">{service.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{service.description}</p>
                <span
                  className="text-sm font-medium flex items-center gap-1"
                  style={{ color: "var(--itl-blue)" }}
                >
                  Learn more
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 18l6-6-6-6" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
