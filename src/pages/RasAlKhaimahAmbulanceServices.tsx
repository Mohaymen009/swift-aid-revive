import { Ambulance, Clock, MapPin, ShieldCheck, Users, HeartPulse, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import ServicePageTemplate from "@/templates/ServicePageTemplate";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";

const RasAlKhaimahAmbulanceServices = () => {
  const services = [
    {
      title: "RAK Medical Response",
      description: "Round-the-clock medical response and patient transport services for the Ras Al Khaimah community.",
      icon: Ambulance
    },
    {
      title: "Patient Transfers",
      description: "Safe transport to and from RAK medical facilities, including Al Hamra and northern areas.",
      icon: Users
    },
    {
      title: "Inter-Emirate Transport",
      description: "Professional medical transfers from RAK to specialized hospitals in Dubai and Sharjah.",
      icon: MapPin
    },
    {
      title: "Paramedic Support",
      description: "Qualified medical staff providing care during transit for all types of patient transfers in RAK.",
      icon: ShieldCheck
    }
  ];

  const faqs = [
    {
      question: "Do you cover Al Hamra area in Ras Al Khaimah?",
      answer: "Yes, we provide full coverage for Al Hamra Mall area, Khuzam, and all northern communities of RAK."
    },
    {
      question: "How long is the transfer from RAK to Dubai?",
      answer: "A typical medical transfer from RAK to Dubai takes between 60 to 90 minutes, depending on the specific location and traffic."
    }
  ];

  return (
    <ServicePageTemplate
      title="Professional Ambulance Service in Ras Al Khaimah | EMRS"
      description="EMRS provides professional ambulance services in Ras Al Khaimah. Reliable patient transport and inter-emirate medical transfers in RAK. Call +971 55 472 8133"
      canonical="https://emrs.ae/ras-al-khaimah-ambulance-services"
      imageUrl="/images/og/ras-al-khaimah-ambulance-services.jpg"
      imageAlt="EMRS Ambulance Services in Ras Al Khaimah"
      lastUpdated="2026-01-01"
      faqs={faqs}
      phoneNumber={"+971 55 472 8133"}
      hideHeader={true}
    >
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-white relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">Ambulance Services in Ras Al Khaimah</h1>
          <p className="text-xl sm:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            Providing professional medical transport across all areas of Ras Al Khaimah.
            From local patient transfers to long-distance medical escorts, we ensure safety and comfort.
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

export default RasAlKhaimahAmbulanceServices;
