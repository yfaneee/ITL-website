"use client";

import { useState } from "react";
import Image from "next/image";

const galleryImages = [
  { id: 1, src: "/images/SlideShowHome1.webp", alt: "ITL Logistics 1" },
  { id: 2, src: "/images/SlideShowHome2.webp", alt: "ITL Logistics 2" },
  { id: 3, src: "/images/SlideShowHome3.webp", alt: "ITL Logistics 3" },
  { id: 4, src: "/images/SlideShowHome4.webp", alt: "ITL Logistics 4" },
];

export default function Gallery() {
  const [active, setActive] = useState(1);

  return (
    <section className="py-16 px-6 overflow-hidden" style={{ backgroundColor: "var(--itl-gray)" }}>
      <div className="max-w-5xl mx-auto">
        {/* Images row */}
        <div className="relative flex items-center justify-center h-72 md:h-96">
          {galleryImages.map((img, idx) => {
            const len = galleryImages.length;
            const activeIdx = galleryImages.findIndex((i) => i.id === active);
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
                onClick={() => setActive(img.id)}
                className="absolute w-2/3 md:w-1/2 h-full rounded-2xl cursor-pointer transition-all duration-500 overflow-hidden"
                style={{ transform, zIndex, opacity }}
              >
                <Image src={img.src} fill alt={img.alt} className="object-cover" />
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
