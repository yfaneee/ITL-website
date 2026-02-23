import Hero from "@/components/sections/Hero";
import HowCanWeHelp from "@/components/sections/HowCanWeHelp";
import ServicesCards from "@/components/sections/ServicesCards";
import HelpSection from "@/components/sections/HelpSection";
import Gallery from "@/components/sections/Gallery";
import Testimonials from "@/components/sections/Testimonials";

export default function HomePage() {
  return (
    <>
      <Hero />
      <HowCanWeHelp />
      <ServicesCards />
      <HelpSection />
      <Gallery />
      <Testimonials />
    </>
  );
}
