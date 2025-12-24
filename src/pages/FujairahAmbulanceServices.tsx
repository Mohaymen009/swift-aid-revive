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

const FujairahAmbulanceServices = () => {
  return (
    <div className="min-h-screen" id="home">
      <SEOHead 
        title="Professional Ambulance Services in Fujairah | EMRS"
        description="EMRS provides professional ambulance services in Fujairah. 24/7 ambulance Fujairah, hospital transport Fujairah for patient transfers."
        canonical="https://emrs.ae/fujairah-ambulance-services"
        emirate="Fujairah"
      />
      <Navigation />
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-blue-900 mb-4 sm:mb-6 leading-tight">
            Professional Ambulance Services in Fujairah
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-center text-gray-700 max-w-3xl mx-auto">
            EMRS provides professional ambulance services in Fujairah with trained paramedics and modern equipment. 
            We offer patient transport services throughout Fujairah.
          </p>
        </div>
      </section>
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

export default FujairahAmbulanceServices;
