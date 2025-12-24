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

const UmmAlQuwainAmbulanceServices = () => {
  return (
    <div className="min-h-screen" id="home">
      <SEOHead 
        title="Professional Ambulance Services in Umm Al Quwain | EMRS"
        description="EMRS provides professional ambulance services in Umm Al Quwain. Ambulance UAQ, patient transport UAQ for medical transfers."
        canonical="https://emrs.ae/umm-al-quwain-ambulance-services"
        emirate="Umm Al Quwain"
      />
      <Navigation />
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-blue-900 mb-4 sm:mb-6 leading-tight">
            Professional Ambulance Services in Umm Al Quwain
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-center text-gray-700 max-w-3xl mx-auto">
            EMRS provides professional ambulance services in Umm Al Quwain with trained paramedics and modern equipment. 
            We offer patient transport services throughout Umm Al Quwain.
          </p>
        <div className="mt-8 bg-white rounded-xl shadow-lg p-6 sm:p-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-6">Umm Al Quwain Ambulance Coverage Areas</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-blue-800 mb-3">Main Areas Covered:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center"><span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>Umm Al Quwain City</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>Salmi</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>Al Labnah</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>Al Khabbah</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-blue-800 mb-3">Hospital Transfers:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center"><span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>Umm Al Quwain Hospital</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>Sheikh Khalifa Hospital UAQ</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>Ministry of Health Hospital</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>Al Salamah Hospital</li>
                </ul>
              </div>
            </div>
            <div className="mt-6 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-600">
              <p className="text-sm text-blue-900">
                <strong>24/7 Umm Al Quwain Ambulance Services:</strong> EMRS provides comprehensive ambulance services across Umm Al Quwain emirate with rapid response times and professional medical care.
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

export default UmmAlQuwainAmbulanceServices;
