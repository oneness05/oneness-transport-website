import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import AboutPreview from "@/components/sections/AboutPreview";
import ServicesPreview from "@/components/sections/ServicesPreview";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import BrokerTrust from "@/components/sections/BrokerTrust";
import EquipmentPreview from "@/components/sections/EquipmentPreview";
import ServiceAreaPreview from "@/components/sections/ServiceAreaPreview";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AboutPreview />
        <ServicesPreview />
        <WhyChooseUs />
        <BrokerTrust />
        <EquipmentPreview />
        <ServiceAreaPreview />
        <CTA />
      </main>
      <Footer /> 
    </>
  );
}