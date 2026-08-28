import Image from "next/image";

import type { Sector } from "@/content/home";
import { imageUrl } from "@/sanity/image";

export default function HowCanWeHelp({
  heading,
  subheading,
  sectors,
}: {
  heading: string;
  subheading: string;
  sectors: Sector[];
}) {
  return (
    <section className="py-20 px-6" style={{ backgroundColor: "var(--itl-gray)" }}>
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            {heading}
          </h2>
          <p className="text-gray-500 text-sm tracking-widest">{subheading}</p>
        </div>

        {/* Sectors Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {sectors.map((sector) => {
            const icon = imageUrl(sector.icon, { width: 80 });
            return (
              <button
                key={sector.name}
                className="flex flex-col items-center gap-3 p-6 bg-white rounded-xl border border-gray-100 hover:border-blue-300 hover:shadow-md transition-all duration-200 cursor-pointer group"
              >
                {icon && (
                  <span className="transition-colors duration-200">
                    <Image
                      src={icon}
                      alt={sector.icon?.alt || sector.name}
                      width={40}
                      height={40}
                      className="w-10 h-10"
                    />
                  </span>
                )}
                <span className="text-sm font-medium text-gray-700 group-hover:text-blue-700 text-center">
                  {sector.name}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
