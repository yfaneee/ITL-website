const sectors = [
  {
    id: 1,
    name: "Agriculture",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3C7 3 3 7.5 3 12s4 9 9 9 9-4.5 9-9" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 3.5C15 3.5 12 6 12 12" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.5 9h17" />
      </svg>
    ),
  },
  {
    id: 2,
    name: "Construction",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 21h18M3 7h18M3 7l9-4 9 4M5 7v14M19 7v14M9 11v4M15 11v4M12 11v4" />
      </svg>
    ),
  },
  {
    id: 3,
    name: "Food",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2a5 5 0 0 1 5 5c0 3-5 13-5 13S7 10 7 7a5 5 0 0 1 5-5z" />
        <circle cx="12" cy="7" r="2" />
      </svg>
    ),
  },
  {
    id: 4,
    name: "Metal Constructions",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8">
        <rect x="2" y="7" width="6" height="13" rx="1" />
        <rect x="9" y="4" width="6" height="16" rx="1" />
        <rect x="16" y="7" width="6" height="13" rx="1" />
        <path strokeLinecap="round" d="M2 7h20" />
      </svg>
    ),
  },
  {
    id: 5,
    name: "Oil & Gas",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 3h6v4H9zM7 7h10v2H7zM8 9v8a2 2 0 0 0 4 0V9" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 12h2a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-2" />
      </svg>
    ),
  },
  {
    id: 6,
    name: "Electricity",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 2 4.5 13.5H11L10 22l9-11.5H13L13 2z" />
      </svg>
    ),
  },
  {
    id: 7,
    name: "Industry",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2 21V8l7-5v5l7-5v18H2z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 3h3l3 3v15h-6" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 13h2v3H7zM11 13h2v3h-2z" />
      </svg>
    ),
  },
  {
    id: 8,
    name: "Automotive",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 17H3V9l2-4h14l2 4v8h-2M5 17a2 2 0 1 0 4 0 2 2 0 0 0-4 0zm10 0a2 2 0 1 0 4 0 2 2 0 0 0-4 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13h18" />
      </svg>
    ),
  },
];

export default function HowCanWeHelp() {
  return (
    <section className="py-20 px-6" style={{ backgroundColor: "var(--itl-gray)" }}>
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            How Can We Help
          </h2>
          <p className="text-gray-500 text-sm tracking-widest uppercase">
            Choose Your Sector
          </p>
        </div>

        {/* Sectors Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {sectors.map((sector) => (
            <button
              key={sector.id}
              className="flex flex-col items-center gap-3 p-6 bg-white rounded-xl border border-gray-100 hover:border-blue-300 hover:shadow-md transition-all duration-200 cursor-pointer group"
            >
              <span
                className="text-gray-500 group-hover:text-blue-600 transition-colors duration-200"
                style={{ color: "var(--itl-blue)" }}
              >
                {sector.icon}
              </span>
              <span className="text-sm font-medium text-gray-700 group-hover:text-blue-700 text-center">
                {sector.name}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
