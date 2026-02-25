import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <Image
        src="/backgrounds/HeaderHomepage.webp"
        fill
        alt="ITL logistics hero"
        className="object-cover"
        priority
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32">
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-5">
            We deliver in every second, with passion.
          </h1>
          <p className="text-gray-200 text-base md:text-lg mb-8 leading-relaxed">
            Because every piece matters, and every second counts. It takes a special kind of drive to keep the world moving.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="px-6 py-3 rounded-[10px] text-white text-sm font-semibold transition-all duration-200 hover:brightness-110 active:scale-95"
              style={{ backgroundColor: "var(--itl-blue)" }}
            >
              Talk to us today →
            </Link>
            <Link
              href="/about"
              className="px-6 py-3 rounded-[10px] text-white text-sm font-semibold border border-white/60 hover:bg-white/10 transition-all duration-200 active:scale-95"
            >
              Explore our services →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
