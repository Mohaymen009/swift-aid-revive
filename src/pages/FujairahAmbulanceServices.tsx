import { Ambulance, Clock, MapPin, ShieldCheck, Users, HeartPulse, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import ServicePageTemplate from "@/templates/ServicePageTemplate";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";

const FujairahAmbulanceServices = () => {
  const services = [
    {
      title: "Fujairah Medical Transport",
      description: "Reliable 24/7 medical transport and ambulance services for Fujairah city and coastal areas.",
      icon: Ambulance
    },
    {
      title: "Patient Discharge",
      description: "Safe and timely transport for patients being discharged from Fujairah hospitals to their homes.",
      icon: Users
    },
    {
      title: "Hospital Transfers",
      description: "Professional transfers between Fujairah healthcare facilities and major hospitals in other emirates.",
      icon: MapPin
    },
    {
      title: "Qualified Paramedics",
      description: "Skilled medical teams ensuring patient stability and safety during every transit in Fujairah.",
      icon: ShieldCheck
    }
  ];

  const faqs = [
    {
      question: "Do you serve Dibba and Masafi areas?",
      answer: "Yes, our ambulance services cover Fujairah city, Dibba, Masafi, and the entire east coast region."
    },
    {
      question: "Can you transfer a patient from Fujairah to Dubai?",
      answer: "Yes, we specialize in inter-emirate medical transfers, including long-distance transport from Fujairah to Dubai hospitals."
    }
  ];

  return (
    <ServicePageTemplate
      title="Professional Ambulance Services in Fujairah | EMRS"
      description="EMRS provides professional ambulance services in Fujairah. 24/7 medical transport and patient transfers across the Fujairah emirate. Call +971 55 472 8133"
      canonical="https://emrs.ae/fujairah-ambulance-services"
      imageUrl="/images/og/fujairah-ambulance-services.jpg"
      imageAlt="EMRS Ambulance Services in Fujairah"
      lastUpdated="2026-01-01"
      faqs={faqs}
      phoneNumber={"+971 55 472 8133"}
      hideHeader={true}
    >
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-white relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">Ambulance Services in Fujairah</h1>
          <p className="text-xl sm:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            Expert medical transport services throughout Fujairah.
            We provide specialized care during transit for both emergency and pre-planned medical needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-accent hover:bg-accent/90 font-bold" asChild>
              <a href="tel:+971554728133">Call +971 55 472 8133</a>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 font-bold" asChild>
              <a href="https://wa.me/971554728133">WhatsApp Us</a>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={index} className="p-6 bg-gray-50 rounded-xl">
                <service.icon className="w-10 h-10 text-accent mb-4" />
                <h3 className="text-xl font-bold text-primary mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
      <FloatingContact />
    </ServicePageTemplate>
  );
};

export default FujairahAmbulanceServices;
