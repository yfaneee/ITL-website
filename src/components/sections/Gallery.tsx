"use client";

import { useState } from "react";
import Image from "next/image";

import { imagePosition, imageUrl, type SiteImage } from "@/sanity/image";

/**
 * Coverflow-style carousel. Shared by the homepage and the Port Operations
 * page, so the surrounding section styling is left to the caller.
 */
export default function Gallery({ images }: { images: SiteImage[] }) {
  const [active, setActive] = useState(0);

  if (images.length === 0) return null;

  return (
    <div className="max-w-5xl mx-auto">
      {/* Images row */}
      <div className="relative flex items-center justify-center h-72 md:h-96">
        {images.map((img, idx) => {
          const len = images.length;
          const rel = (idx - active + len) % len;
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

          const src = imageUrl(img, { width: 1200 });
          if (!src) return null;

          return (
            <div
              key={idx}
              onClick={() => setActive(idx)}
              className="absolute w-2/3 md:w-1/2 h-full rounded-2xl cursor-pointer transition-all duration-500 overflow-hidden"
              style={{ transform, zIndex, opacity }}
            >
              <Image
                src={src}
                fill
                alt={img.alt || ""}
                className="object-cover"
                style={{ objectPosition: imagePosition(img) }}
                sizes="(max-width: 768px) 66vw, 50vw"
              />
            </div>
          );
        })}
      </div>

      {/* Dot indicators */}
      <div className="flex justify-center gap-2 mt-6">
        {images.map((img, idx) => (
          <button
            key={idx}
            onClick={() => setActive(idx)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              active === idx ? "scale-125" : "bg-gray-300 hover:bg-gray-400"
            }`}
            style={active === idx ? { backgroundColor: "var(--itl-blue)" } : {}}
            aria-label={img.alt || `Image ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
