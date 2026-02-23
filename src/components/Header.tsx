"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/road", label: "Road Transport" },
  { href: "/air", label: "Air Transport" },
  { href: "/port", label: "Port Operations" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 no-underline">
          <div
            className="w-10 h-10 rounded flex items-center justify-center text-white font-bold text-sm"
            style={{ backgroundColor: "var(--itl-blue)" }}
          >
            ITL
          </div>
          <div className="flex flex-col leading-tight">
            <span className="font-bold text-sm" style={{ color: "var(--itl-blue)" }}>
              Inter Trans Logistics
            </span>
            <span className="text-xs text-gray-400">Delivering excellence</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                  isActive
                    ? "text-white"
                    : "text-gray-600 hover:text-blue-700 hover:bg-blue-50"
                }`}
                style={isActive ? { backgroundColor: "var(--itl-blue)" } : {}}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 rounded text-gray-600 hover:text-blue-700"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-2">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`px-4 py-2 rounded text-sm font-medium ${
                  isActive ? "text-white" : "text-gray-700 hover:bg-blue-50"
                }`}
                style={isActive ? { backgroundColor: "var(--itl-blue)" } : {}}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}
