import { Phone, Mail, MessageCircle, Linkedin } from "lucide-react";

const contactItems = [
  {
    icon: <Phone size={22} />,
    label: "Telephone",
    href: "tel:+12345678900",
  },
  {
    icon: <Mail size={22} />,
    label: "Email",
    href: "mailto:info@itl.com",
  },
  {
    icon: <MessageCircle size={22} />,
    label: "WhatsApp",
    href: "https://wa.me/",
  },
  {
    icon: <Linkedin size={22} />,
    label: "LinkedIn",
    href: "https://linkedin.com",
  },
];

export default function HelpSection() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">
          What do you need help with?
        </h2>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            className="px-7 py-3 rounded-[10px] text-white text-sm font-semibold transition-all duration-200 hover:brightness-110 active:scale-95"
            style={{ backgroundColor: "var(--itl-blue)" }}
          >
            New or existing project
          </button>
          <button className="px-7 py-3 rounded-[10px] text-gray-700 text-sm font-semibold border border-gray-300 hover:border-blue-400 hover:text-blue-700 transition-all duration-200 active:scale-95">
            General inquiry
          </button>
        </div>

        {/* Contact icons */}
        <div className="flex justify-center gap-10">
          {contactItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noreferrer" : undefined}
              className="flex flex-col items-center gap-2 group"
            >
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center text-white transition-transform duration-200 group-hover:scale-110"
                style={{ backgroundColor: "var(--itl-blue-light, #2563EB)" }}
              >
                {item.icon}
              </div>
              <span className="text-xs text-gray-500 group-hover:text-blue-700 transition-colors">
                {item.label}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
