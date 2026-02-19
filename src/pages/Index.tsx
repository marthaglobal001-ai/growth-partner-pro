import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";
import Services from "@/components/sections/Services";
import Benefits from "@/components/sections/Benefits";
import HowWeWork from "@/components/sections/HowWeWork";
import Positioning from "@/components/sections/Positioning";
import Pricing from "@/components/sections/Pricing";
import CtaSection from "@/components/sections/CtaSection";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Problem />
      <Services />
      <Benefits />
      <HowWeWork />
      <Positioning />
      <Pricing />
      <CtaSection />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
