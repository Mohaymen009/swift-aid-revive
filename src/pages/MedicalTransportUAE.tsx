import Navigation from "@/components/Navigation";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import SEOHead from "@/components/SEOHead";
import ServicePageTemplate from "@/templates/ServicePageTemplate";
import { Ambulance, Clock, MapPin, ShieldCheck, Phone, HeartPulse, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const MedicalTransportUAE = () => {
  const faqs = [
    {
      question: "What is professional medical transport?",
      answer: "Professional medical transport involves the safe movement of patients who require medical supervision or specialized equipment during transit, provided by licensed ambulance services."
    },
    {
      question: "Do you provide medical transport across all emirates?",
      answer: "Yes, EMRS provides 24/7 medical transport services across Dubai, Abu Dhabi, Sharjah, Ajman, Ras Al Khaimah, Fujairah, and Umm Al Quwain."
    },
    {
      question: "What equipment is available in your transport vehicles?",
      answer: "Our medical transport vehicles are equipped with cardiac monitors, oxygen systems, stretchers, automated external defibrillators (AED), and emergency medications."
    }
  ];

  return (
    <ServicePageTemplate
      title="Medical Transport UAE | 24/7 Professional Patient Transfer Services"
      description="Licensed medical transport services across the UAE. Specializing in inter-hospital transfers, patient discharges, and professional medical escorts 24/7."
      canonical="https://emrs.ae/medical-transport-uae"
      imageUrl="/images/og/medical-transport.jpg"
      imageAlt="Medical Transport Services in UAE"
      faqs={faqs}
      phoneNumber="+971 55 472 8133"
    >
      {/* Hero Section */}
      <section className="py-20 bg-primary text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-950/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">Medical Transport Services UAE</h1>
          <p className="text-xl md:text-2xl mb-10 max-w-4xl mx-auto leading-relaxed">
            Professional, reliable, and licensed medical transportation catering to every corner of the Seven Emirates.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-bold h-14 px-10 rounded-xl" asChild>
              <a href="tel:+971554728133"><Phone className="mr-3 h-6 w-6" /> Call for Immediate Help</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Main Content Sections */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="prose prose-lg max-w-none text-muted-foreground">
            <h2 className="text-3xl font-bold text-primary mb-6">Leading Provider of Medical Transport in the Middle East</h2>
            <p className="mb-6">
              When it comes to medical transport in the UAE, timing, safety, and professional care are the most critical factors. EMRS (Medical Response Services) has built a reputation as the most trusted name in patient transfer and specialized medical travel across Dubai, Abu Dhabi, and beyond.
            </p>

            <div className="grid md:grid-cols-2 gap-10 my-12">
              <div className="bg-blue-50 p-8 rounded-2xl">
                <HeartPulse className="w-12 h-12 text-accent mb-4" />
                <h3 className="text-2xl font-bold text-primary mb-4">Inter-Hospital Transfers</h3>
                <p>We facilitate seamless transfers between healthcare facilities for patients requiring higher levels of care or specialized diagnostic procedures. Our teams coordinate directly with hospital staff to ensure clinical continuity.</p>
              </div>
              <div className="bg-blue-50 p-8 rounded-2xl">
                <Shield className="w-12 h-12 text-accent mb-4" />
                <h3 className="text-2xl font-bold text-primary mb-4">Medical Escort Services</h3>
                <p>For patients who are clinically stable but require medical monitoring during travel, our nurse and paramedic escort services provide peace of mind throughout the journey.</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-primary mb-6">Comprehensive Fleet & Advanced Technology</h2>
            <p className="mb-6">
              Our medical transport fleet is designed to meet the rigorous standards set by UAE health authorities. Each vehicle is more than just a transport vessel; it is a mobile medical unit capable of maintaining patient stability across long distances between emirates.
            </p>
            <ul className="list-disc pl-6 space-y-3 mb-8">
              <li><strong>Critical Care Ventilation:</strong> Advanced respiratory support for patients requiring ventilation.</li>
              <li><strong>Real-time Monitoring:</strong> Continuous tracking of vital signs during the entire transport process.</li>
              <li><strong>Bariatric Support:</strong> Specialized equipment for safely transporting bariatric patients.</li>
              <li><strong>Advanced Life Support (ALS):</strong> Fully equipped for high-acuity medical interventions.</li>
            </ul>

            <h2 className="text-3xl font-bold text-primary mb-6">Serving All 7 Emirates 24/7</h2>
            <p className="mb-6">
              Whether you are located in the bustling center of Dubai Marina, the outskirts of Al Ain, or the coastal areas of Fujairah, our medical transport dispatch team is available 24 hours a day, 7 days a week. We understand the geographical layout of the UAE better than anyone, ensuring the fastest possible routes and minimal transit times for our patients.
            </p>

            <blockquote className="border-l-4 border-accent pl-6 py-4 my-8 bg-gray-50 italic text-primary font-medium">
              "Our mission is to bridge the gap between healthcare facilities with professional, compassionate, and clinically excellent medical transport service."
            </blockquote>

            <h2 className="text-3xl font-bold text-primary mb-6">Why Choose EMRS for Your Medical Journey?</h2>
            <p>
              Choosing a medical transport provider is a decision based on trust. At EMRS, we go beyond standard transport protocols. Our staff undergo continuous clinical training, our vehicles are inspected daily, and our communication with families is transparent and reassuring.
            </p>
          </div>
        </div>
      </section>

      <Contact />
      <Footer />
      <FloatingContact />
    </ServicePageTemplate>
  );
};

export default MedicalTransportUAE;
