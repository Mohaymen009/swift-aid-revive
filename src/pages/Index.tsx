import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import OurStory from "@/components/OurStory";
import Services from "@/components/Services";
import EmirateServices from "@/components/EmirateServices";
import WhyChooseUs from "@/components/WhyChooseUs";
import TrustmaryWidget from "@/components/TrustmaryWidget";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import SEOHead from "@/components/SEOHead";

const Index = () => {
  return (
    <div className="min-h-screen" id="home">
      <SEOHead />
      <Navigation />
      <Hero />
      <OurStory />
      <Services />
      <EmirateServices />
      <WhyChooseUs />
      <TrustmaryWidget />
      <Contact />
      <Footer />
      <FloatingContact />
    </div>
  );
};

export default Index;
