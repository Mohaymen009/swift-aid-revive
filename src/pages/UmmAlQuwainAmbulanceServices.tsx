import { Ambulance, Clock, MapPin, ShieldCheck, Users, HeartPulse, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import ServicePageTemplate from "@/templates/ServicePageTemplate";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";

const UmmAlQuwainAmbulanceServices = () => {
  const services = [
    {
      title: "UAQ Ambulance Response",
      description: "Dedicated medical response services for the Umm Al Quwain community, available 24/7.",
      icon: Ambulance
    },
    {
      title: "Safe Patient Transport",
      description: "Safe and secure transportation for patients across UAQ city and industrial areas.",
      icon: Users
    },
    {
      title: "Hospital Coordination",
      description: "Expert coordination for patient transfers between UAQ medical centers and hospitals nationwide.",
      icon: MapPin
    },
    {
      title: "Medical Oversight",
      description: "All UAQ transports are conducted under strict medical governance and clinical standards.",
      icon: ShieldCheck
    }
  ];

  const faqs = [
    {
      question: "Do you provide 24/7 service in Umm Al Quwain?",
      answer: "Yes, our ambulance and medical transport team is ready to assist in UAQ 24 hours a day, 7 days a week."
    },
    {
      question: "Can I book a transfer from UAQ to Sharjah?",
      answer: "Absolutely. We facilitate medical transfers between UAQ and all other emirates, including Sharjah and Dubai."
    }
  ];

  return (
    <ServicePageTemplate
      title="Professional Ambulance Services in Umm Al Quwain | EMRS"
      description="EMRS provides professional ambulance services in Umm Al Quwain. 24/7 patient transport and medical transfers in UAQ. Call +971 55 472 8133"
      canonical="https://www.emrs.ae/umm-al-quwain-ambulance-services"
      imageUrl="/images/og/umm-al-quwain-ambulance-services.jpg"
      faqs={faqs}
      phoneNumber={"+971 55 472 8133"}
      hideHeader={true}
    >
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-white relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">Ambulance Services in Umm Al Quwain</h1>
          <p className="text-xl sm:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            Providing reliable medical transportation across Umm Al Quwain.
            We prioritize patient safety and comfort for all urban and industrial medical transfers.
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

export default UmmAlQuwainAmbulanceServices;
