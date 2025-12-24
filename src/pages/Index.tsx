import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import OurStory from "@/components/OurStory";
import Services from "@/components/Services";
import EmirateServices from "@/components/EmirateServices";
import WhyChooseUs from "@/components/WhyChooseUs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import SEOHead from "@/components/SEOHead";

const Index = () => {
  useEffect(() => {
    // Handle hash scrolling for HashRouter
    const handleHashScroll = () => {
      const hash = window.location.hash;
      if (hash && hash !== '#/') {
        // Remove the leading #/ and add # for the element selector
        const elementId = hash.replace('#/', '#');
        const element = document.querySelector(elementId);
        if (element) {
          // Small delay to ensure DOM is ready
          setTimeout(() => {
            element.scrollIntoView({ 
              behavior: 'smooth',
              block: 'start'
            });
          }, 100);
        }
      }
    };

    // Handle initial hash on mount
    handleHashScroll();

    // Handle hash changes
    window.addEventListener('hashchange', handleHashScroll);
    
    return () => {
      window.removeEventListener('hashchange', handleHashScroll);
    };
  }, []);

  return (
    <div className="min-h-screen" id="home">
      <SEOHead />
      <Navigation />
      <Hero />
      <OurStory />
      <Services />
      <EmirateServices />
      <WhyChooseUs />
      <Contact />
      <Footer />
      <FloatingContact />
    </div>
  );
};

export default Index;