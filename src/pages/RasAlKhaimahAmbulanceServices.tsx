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

const RasAlKhaimahAmbulanceServices = () => {
  // RAK specific structured data
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "EMRS 24/7 - Ras Al Khaimah Ambulance Services",
    "description": "Professional ambulance services in Ras Al Khaimah, UAE. EMRS provides reliable patient transport and emergency medical services across RAK.",
    "url": "https://emrs.ae/ras-al-khaimah-ambulance-services",
    "logo": "https://emrs.ae/assets/logo-IoYxzFod.png",
    "telephone": "+971554728133",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "AE",
      "addressRegion": "Ras Al Khaimah",
      "addressLocality": "Ras Al Khaimah"
    },
    "serviceType": ["Ambulance Service", "Emergency Medical Transport", "Patient Transfer"],
    "areaServed": ["Ras Al Khaimah City", "Al Jazirah Al Hamra", "Al Dhait", "Khawr Khuwayr"],
    "availableChannel": {
      "@type": "ServiceChannel",
      "servicePhone": "+971554728133",
      "availableLanguage": ["English", "Arabic"]
    },
    "hoursAvailable": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    }
  };

  // Inject structured data
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);
    
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen" id="home">
      <SEOHead 
        title="Professional Ambulance Service in Ras Al Khaimah | EMRS"
        description="EMRS provides professional ambulance services in Ras Al Khaimah. Ambulance RAK, hospital transport RAK for patient transfers."
        canonical="https://emrs.ae/ras-al-khaimah-ambulance-services"
        emirate="Ras Al Khaimah"
      />
      <Navigation />
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-blue-900 mb-4 sm:mb-6 leading-tight">
            Professional Ambulance Service in Ras Al Khaimah
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-center text-gray-700 max-w-3xl mx-auto">
            EMRS provides professional ambulance services in Ras Al Khaimah with trained paramedics and modern equipment. 
            We offer patient transport services throughout RAK.
          </p>
        </div>
      </section>
      <section>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mt-8 bg-white rounded-xl shadow-lg p-6 sm:p-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-6">RAK Ambulance Coverage Areas</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-blue-800 mb-3">Main Areas Covered:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center"><span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>Ras Al Khaimah City</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>Al Jazirah Al Hamra</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>Al Dhait</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>Khawr Khuwayr</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-blue-800 mb-3">Hospital Transfers:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center"><span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>RAK Hospital</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>Saqr Hospital</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>Red Crescent Hospital</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>Sheikh Khalifa Hospital RAK</li>
                </ul>
              </div>
            </div>
            <div className="mt-6 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-600">
              <p className="text-sm text-blue-900">
                <strong>24/7 RAK Ambulance Services:</strong> EMRS provides comprehensive ambulance services across Ras Al Khaimah emirate with rapid response times and professional medical care.
              </p>
            </div>
          </div>
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

export default RasAlKhaimahAmbulanceServices;
