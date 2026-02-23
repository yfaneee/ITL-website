"use client";

import { useState } from "react";

const galleryImages = [
  { id: 1, alt: "Logistics photo 1", color: "from-slate-500 to-slate-700" },
  { id: 2, alt: "Logistics photo 2", color: "from-red-700 to-red-900" },
  { id: 3, alt: "Logistics photo 3", color: "from-emerald-700 to-emerald-900" },
];

export default function Gallery() {
  const [active, setActive] = useState(1);

  return (
    <section className="py-16 px-6 overflow-hidden" style={{ backgroundColor: "var(--itl-gray)" }}>
      <div className="max-w-5xl mx-auto">
        {/* Images row */}
        <div className="relative flex items-center justify-center h-72 md:h-96">
          {galleryImages.map((img, idx) => {
            const position = idx - galleryImages.findIndex((i) => i.id === active);
            const isCenter = position === 0;
            const isLeft = position === -1 || (active === 1 && idx === galleryImages.length - 1);
            const isRight = position === 1 || (active === galleryImages.length && idx === 0);

            let transform = "translateX(0) scale(1)";
            let zIndex = 10;
            let opacity = 1;

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
            } else {
              transform = "translateX(0) scale(0.7)";
              zIndex = 5;
              opacity = 0;
            }

            return (
              <div
                key={img.id}
                onClick={() => setActive(img.id)}
                className="absolute w-2/3 md:w-1/2 h-full rounded-2xl cursor-pointer transition-all duration-500 img-placeholder overflow-hidden"
                style={{
                  transform,
                  zIndex,
                  opacity,
                  background: `linear-gradient(135deg, var(--tw-gradient-from), var(--tw-gradient-to))`,
                }}
              >
                <div className={`w-full h-full bg-gradient-to-br ${img.color}`} />
                {/* Replace with: <Image src={`/images/gallery-${img.id}.jpg`} fill alt={img.alt} className="object-cover" /> */}
              </div>
            );
          })}
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-6">
          {galleryImages.map((img) => (
            <button
              key={img.id}
              onClick={() => setActive(img.id)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                active === img.id ? "scale-125" : "bg-gray-300 hover:bg-gray-400"
              }`}
              style={active === img.id ? { backgroundColor: "var(--itl-blue)" } : {}}
              aria-label={`Show image ${img.id}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
