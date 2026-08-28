"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";

import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionary";
import { imageUrl, type SiteImage } from "@/sanity/image";

/**
 * Slideshow with a click-to-zoom lightbox. Two visual treatments: "glass" sits
 * on the coloured Incoterms panel, "card" on a light background.
 */
export default function ImageSlideshow({
  images,
  locale,
  variant,
}: {
  images: SiteImage[];
  locale: Locale;
  variant: "glass" | "card";
}) {
  const [index, setIndex] = useState(0);
  const [zoomed, setZoomed] = useState<string | null>(null);
  const t = getDictionary(locale);

  if (images.length === 0) return null;

  const current = images[Math.min(index, images.length - 1)];
  const src = imageUrl(current, { width: 1600 });
  const step = (delta: number) =>
    setIndex((prev) => (prev + delta + images.length) % images.length);

  const isGlass = variant === "glass";

  return (
    <>
      <div
        className={
          isGlass
            ? "relative rounded-2xl overflow-hidden bg-white/10 backdrop-blur-sm border border-white/20"
            : "relative max-w-4xl mx-auto"
        }
      >
        <div
          className={`relative cursor-zoom-in group overflow-hidden ${
            isGlass
              ? "h-80 md:h-[375px]"
              : "h-72 md:h-[420px] rounded-2xl bg-white shadow-sm border border-gray-100"
          }`}
          onClick={() => src && setZoomed(src)}
        >
          {src && (
            <Image
              src={src}
              fill
              alt={current.alt || ""}
              className={`object-contain ${isGlass ? "p-3" : "p-6"}`}
              sizes="(max-width: 768px) 100vw, 60vw"
            />
          )}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <div
              className={`rounded-full p-2.5 ${
                isGlass ? "bg-black/40" : "bg-black/30"
              }`}
            >
              <ZoomIn size={isGlass ? 20 : 22} className="text-white" />
            </div>
          </div>
        </div>

        {images.length > 1 && (
          <>
            <button
              onClick={() => step(-1)}
              className={
                isGlass
                  ? "absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/20 hover:bg-white/40 flex items-center justify-center transition-all"
                  : "absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 w-10 h-10 rounded-full bg-white shadow-md border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-all z-10"
              }
              aria-label={t.common.previous}
            >
              <ChevronLeft
                size={isGlass ? 18 : 20}
                className={isGlass ? "text-white" : "text-gray-600"}
              />
            </button>
            <button
              onClick={() => step(1)}
              className={
                isGlass
                  ? "absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/20 hover:bg-white/40 flex items-center justify-center transition-all"
                  : "absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 w-10 h-10 rounded-full bg-white shadow-md border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-all z-10"
              }
              aria-label={t.common.next}
            >
              <ChevronRight
                size={isGlass ? 18 : 20}
                className={isGlass ? "text-white" : "text-gray-600"}
              />
            </button>

            <div
              className={`flex justify-center gap-2 ${
                isGlass ? "py-3" : "mt-5"
              }`}
            >
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={
                    isGlass
                      ? `w-2 h-2 rounded-full transition-all ${
                          i === index
                            ? "bg-white scale-125"
                            : "bg-white/40 hover:bg-white/60"
                        }`
                      : `w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                          i === index
                            ? "scale-125"
                            : "bg-gray-300 hover:bg-gray-400"
                        }`
                  }
                  style={
                    !isGlass && i === index
                      ? { backgroundColor: "var(--itl-blue)" }
                      : {}
                  }
                  aria-label={`${t.common.slide} ${i + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* Lightbox */}
      {zoomed && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-10"
          style={{ backgroundColor: "rgba(0,0,0,0.85)" }}
          onClick={() => setZoomed(null)}
        >
          <button
            onClick={() => setZoomed(null)}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/25 flex items-center justify-center transition-all"
            aria-label={t.common.close}
          >
            <X size={20} className="text-white" />
          </button>
          <div
            className="relative w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={zoomed}
              alt={t.common.expandedView}
              width={1400}
              height={900}
              className="w-full h-auto object-contain rounded-2xl"
              style={{ maxHeight: "90vh" }}
            />
          </div>
        </div>
      )}
    </>
  );
}
