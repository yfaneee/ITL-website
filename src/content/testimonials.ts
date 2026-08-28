import type { Locale } from "@/i18n/config";
import { getCollection } from "@/sanity/fetch";
import { L, LT } from "@/sanity/locale-fields";

export type Testimonial = {
  _id?: string;
  name: string;
  initials: string;
  sector: string;
  quote: string;
};

export const testimonialsSeed = [
  {
    _id: "testimonial-agc",
    _type: "testimonial",
    name: "AGC Equipment",
    initials: "AG",
    sector: L("Automotive Sector", "Sectorul auto"),
    quote: LT(
      "Inter Trans Logistics has been our trusted partner for over 5 years. Their reliability and commitment to excellence is unmatched.",
      "Inter Trans Logistics ne este partener de încredere de peste 5 ani. Fiabilitatea și angajamentul lor față de excelență sunt fără egal."
    ),
    order: 1,
  },
  {
    _id: "testimonial-mr",
    _type: "testimonial",
    name: "MR Industries",
    initials: "MR",
    sector: L("Oil & Gas Sector", "Sectorul petrol și gaze"),
    quote: LT(
      "Outstanding service from start to finish. ITL handled our complex shipping requirements with professionalism and efficiency.",
      "Servicii excepționale de la început până la sfârșit. ITL a gestionat cerințele noastre complexe de transport cu profesionalism și eficiență."
    ),
    order: 2,
  },
  {
    _id: "testimonial-cb",
    _type: "testimonial",
    name: "CB Constructions",
    initials: "CB",
    sector: L("Construction Sector", "Sectorul construcții"),
    quote: LT(
      "We've worked with many logistics companies but ITL stands out for their attention to detail and on-time delivery.",
      "Am colaborat cu multe companii de logistică, însă ITL se remarcă prin atenția la detalii și livrarea la timp."
    ),
    order: 3,
  },
  {
    _id: "testimonial-foodpro",
    _type: "testimonial",
    name: "FoodPro International",
    initials: "FP",
    sector: L("Food & Beverage Sector", "Sectorul alimentar și al băuturilor"),
    quote: LT(
      "From customs clearance to door-to-door delivery, every step was handled flawlessly. Highly recommend their team.",
      "De la vămuire până la livrarea din poartă în poartă, fiecare etapă a fost gestionată impecabil. Recomand cu încredere echipa lor."
    ),
    order: 4,
  },
  {
    _id: "testimonial-steeledge",
    _type: "testimonial",
    name: "SteelEdge GmbH",
    initials: "SE",
    sector: L("Metal & Construction Sector", "Sectorul metalurgic și al construcțiilor"),
    quote: LT(
      "ITL's road transport network across Europe is exceptional. Competitive rates and zero surprises on delivery times.",
      "Rețeaua de transport rutier a ITL în Europa este excepțională. Tarife competitive și zero surprize la termenele de livrare."
    ),
    order: 5,
  },
];

export function getTestimonials(locale: Locale) {
  return getCollection<Testimonial>("testimonial", locale, testimonialsSeed);
}
