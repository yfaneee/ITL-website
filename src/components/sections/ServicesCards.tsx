import Link from "next/link";

const services = [
  {
    id: "air",
    href: "/air",
    title: "Air Transport",
    description:
      "Fast and reliable air freight solutions for time-sensitive cargo across global routes.",
    bgColor: "from-sky-700 to-sky-900",
  },
  {
    id: "road",
    href: "/road",
    title: "Road Transport",
    description:
      "Flexible road logistics covering full and partial loads with nationwide coverage.",
    bgColor: "from-slate-700 to-slate-900",
  },
  {
    id: "port",
    href: "/port",
    title: "Port Operations",
    description:
      "The most important port facilities. Seamless cargo handling and stevedoring services.",
    bgColor: "from-blue-700 to-blue-900",
  },
];

export default function ServicesCards() {
  return (
    <section className="py-6 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {services.map((service) => (
            <div
              key={service.id}
              className="relative rounded-2xl overflow-hidden group cursor-pointer"
            >
              {/* Placeholder image area — replace with <Image> when you have assets */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.bgColor} img-placeholder`}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300" />

              {/* Content */}
              <div className="relative z-10 p-8 pt-52 flex flex-col gap-2">
                {/* Transport icon badge */}
                <div
                  className="absolute top-6 left-6 w-12 h-12 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "var(--itl-blue)" }}
                >
                  {service.id === "air" && (
                    <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
                    </svg>
                  )}
                  {service.id === "road" && (
                    <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
                      <rect x="1" y="8" width="15" height="10" rx="1" />
                      <path strokeLinecap="round" d="M16 12h4l3 3v3h-7v-6z" />
                      <circle cx="5.5" cy="18" r="2" />
                      <circle cx="18.5" cy="18" r="2" />
                    </svg>
                  )}
                  {service.id === "port" && (
                    <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2 20h20M3 17l2-8h14l2 8H3zM8 9V5h8v4" />
                      <path strokeLinecap="round" d="M12 5V2M9 2h6" />
                    </svg>
                  )}
                </div>

                <h3 className="text-white text-xl font-bold">{service.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{service.description}</p>
                <Link
                  href={service.href}
                  className="mt-2 text-blue-300 hover:text-white text-sm font-medium transition-colors duration-200 flex items-center gap-1"
                >
                  Learn more
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 18l6-6-6-6" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
