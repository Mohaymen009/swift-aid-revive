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

const AbuDhabiAmbulanceServices = () => {
  return (
    <div className="min-h-screen" id="home">
      <SEOHead 
        title="Reliable Ambulance Services in Abu Dhabi, UAE | EMRS"
        description="EMRS offers reliable ambulance services in Abu Dhabi. Professional ambulance service Abu Dhabi, hospital transport Abu Dhabi for patient transfers."
        canonical="https://emrs.ae/abu-dhabi-ambulance-services"
        emirate="Abu Dhabi"
      />
      <Navigation />
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-blue-900 mb-4 sm:mb-6 leading-tight">
            Reliable Ambulance Services in Abu Dhabi, UAE
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-center text-gray-700 max-w-3xl mx-auto">
            EMRS provides professional ambulance services in Abu Dhabi with trained paramedics and modern equipment. 
            We offer patient transport services throughout Abu Dhabi.
          </p>
        <div className="mt-8 bg-white rounded-xl shadow-lg p-6 sm:p-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-6">Abu Dhabi Ambulance Coverage Areas</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-blue-800 mb-3">Main Areas Covered:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center"><span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>Abu Dhabi City</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>Al Ain</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>Al Dhafra</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>Madinat Zayed</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>Khalifa City</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-blue-800 mb-3">Hospital Transfers:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center"><span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>Sheikh Khalifa Medical City</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>Cleveland Clinic Abu Dhabi</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>Burjeel Medical City</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>Al Ain Hospital</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>Tawam Hospital</li>
                </ul>
              </div>
            </div>
            <div className="mt-6 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-600">
              <p className="text-sm text-blue-900">
                <strong>24/7 Abu Dhabi Ambulance Services:</strong> Our dedicated Abu Dhabi ambulance fleet ensures rapid response times across all areas of Abu Dhabi emirate, including emergency medical services and non-emergency patient transfers.
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

export default AbuDhabiAmbulanceServices;
