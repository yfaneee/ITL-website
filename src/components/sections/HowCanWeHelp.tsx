import Image from "next/image";

const sectors = [
  { id: 1, name: "Agriculture", iconSrc: "/icons/AgricultureIcon.svg" },
  { id: 2, name: "Construction", iconSrc: "/icons/ConstructionIcon.svg" },
  { id: 3, name: "Food", iconSrc: "/icons/FoodIcon.svg" },
  { id: 4, name: "Metal Constructions", iconSrc: "/icons/MetalConstructionIcon.svg" },
  { id: 5, name: "Oil & Gas", iconSrc: "/icons/OilGasIcon.svg" },
  { id: 6, name: "Electricity", iconSrc: "/icons/Electricity.svg" },
  { id: 7, name: "Industry", iconSrc: "/icons/IndustryIcon.svg" },
  { id: 8, name: "Automotive", iconSrc: "/icons/Automotive.svg" },
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
          <p className="text-gray-500 text-sm tracking-widest">
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
              <span className="transition-colors duration-200">
                <Image
                  src={sector.iconSrc}
                  alt={sector.name}
                  width={40}
                  height={40}
                  className="w-10 h-10"
                />
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
