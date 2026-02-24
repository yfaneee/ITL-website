import Link from "next/link";
import { Phone, Mail, Linkedin, MessageCircle } from "lucide-react";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

const services = [
  { href: "/road", label: "Road Transport" },
  { href: "/air", label: "Air Transport" },
  { href: "/port", label: "Port Operations" },
];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "var(--itl-dark)" }} className="text-white">
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="md:col-span-1">
          <div className="flex items-center gap-3 mb-4">
            <div
              className="w-10 h-10 rounded flex items-center justify-center text-white font-bold text-sm"
              style={{ backgroundColor: "var(--itl-blue)" }}
            >
              ITL
            </div>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">
            Delivering comprehensive logistics solutions across road, air, and sea with passion and precision.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold text-sm uppercase tracking-wider text-gray-300 mb-4">
            Quick Links
          </h4>
          <ul className="space-y-2">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-semibold text-sm uppercase tracking-wider text-gray-300 mb-4">
            Services
          </h4>
          <ul className="space-y-2">
            {services.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Get In Touch */}
        <div>
          <h4 className="font-semibold text-sm uppercase tracking-wider text-gray-300 mb-4">
            Get In Touch
          </h4>
          <ul className="space-y-3">
            <li className="flex items-center gap-3 text-gray-400 text-sm">
              <Phone size={15} className="text-blue-400 shrink-0" />
              <span>+1 (234) 567-8900</span>
            </li>
            <li className="flex items-center gap-3 text-gray-400 text-sm">
              <Mail size={15} className="text-blue-400 shrink-0" />
              <a href="mailto:info@itl.com" className="hover:text-white transition-colors">
                info@itl.com
              </a>
            </li>
            <li className="flex items-center gap-3 text-gray-400 text-sm">
              <MessageCircle size={15} className="text-blue-400 shrink-0" />
              <a href="https://wa.me/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                WhatsApp
              </a>
            </li>
            <li className="flex items-center gap-3 text-gray-400 text-sm">
              <Linkedin size={15} className="text-blue-400 shrink-0" />
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} Inter Trans Logistics. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
