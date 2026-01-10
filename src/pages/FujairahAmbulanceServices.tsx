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
      answer: "Yes, our ambulance services cover Fujairah city, Dibba, Masafi, and the entire east coast region. Whether you are in a remote area or the city center, our team can reach you."
    },
    {
      question: "Can you transfer a patient from Fujairah to Dubai?",
      answer: "Yes, we specialize in inter-emirate medical transfers, including long-distance transport from Fujairah to Dubai hospitals. We ensure the patient is stable and comfortable throughout the journey."
    },
    {
      question: "How much does a private ambulance cost in Fujairah?",
      answer: "The cost depends on the distance and the level of medical care required (e.g., Basic Life Support vs. Advanced Life Support). Please contact us for a transparent and immediate quote."
    },
    {
      question: "Are your ambulances equipped for critical care?",
      answer: "Yes, our fleet includes ICU-equipped ambulances with ventilators, cardiac monitors, and other essential life-support equipment for critical patient transfers."
    },
    {
      question: "Do you provide medical coverage for events in Fujairah?",
      answer: "Absolutely. We offer standby ambulance services for corporate events, sports competitions, and public gatherings ensuring safety for all attendees."
    }
  ];

  const areas = [
    "Fujairah City", "Dibba Al Fujairah", "Masafi", "Al Bidya", "Mirbah", "Qidfa",
    "Al Aqah", "Sakamkam", "Al Hayl", "Al Qurrayah", "Murbah", "Dadna"
  ];

  return (
    <ServicePageTemplate
      title="Professional Ambulance Services in Fujairah | EMRS"
      description="EMRS provides professional ambulance services in Fujairah. 24/7 medical transport and patient transfers across the Fujairah emirate. Call +971 55 472 8133"
      canonical="https://emrs.ae/fujairah-ambulance-services/"

      faqs={faqs}
      phoneNumber={"+971 55 472 8133"}
      hideHeader={true}
    >
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-white relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">Ambulance Services in Fujairah</h1>
          <p className="text-xl sm:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            Expert medical transport services throughout Fujairah and the East Coast.
            We provide specialized care during transit for both emergency and pre-planned medical needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-accent hover:bg-accent/90 font-bold" asChild>
              <a href="tel:+971554728133">Call +971 55 472 8133</a>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 font-bold" asChild>
              <a href="https://wa.me/971554728133" target="_blank" rel="noopener noreferrer nofollow" className="flex items-center gap-2">WhatsApp Us</a>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-accent font-bold text-sm uppercase tracking-wide">Our Services</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mt-4 mb-4">
              Comprehensive Medical Transport
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Tailored solutions for patient transfers, hospital discharge, and inter-facility transport.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={index} className="p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow">
                <service.icon className="w-10 h-10 text-accent mb-4" />
                <h3 className="text-xl font-bold text-primary mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Area */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
                Areas We Serve in Fujairah
              </h2>
              <p className="text-lg text-muted-foreground">
                Our fleet operates across the entire Emirate of Fujairah, ensuring rapid response to all locations including:
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {areas.map((area, index) => (
                <div key={index} className="flex items-center gap-2 p-3 bg-white rounded-lg shadow-sm">
                  <MapPin className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-primary">{area}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <p className="text-muted-foreground">
                From the city center to the coastal resorts, we are just a call away.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-accent font-bold text-sm uppercase tracking-wide">Why Choose EMRS</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-primary mt-4 mb-6">
                Trusted Medical Transport in Fujairah
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 border border-gray-100 rounded-xl text-center">
                <Clock className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-bold text-primary mb-3">Fast Response</h3>
                <p className="text-muted-foreground">
                  Strategic positioning allows us to reach you quickly anywhere in Fujairah.
                </p>
              </div>
              <div className="p-6 border border-gray-100 rounded-xl text-center">
                <ShieldCheck className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-bold text-primary mb-3">Licensed & Certified</h3>
                <p className="text-muted-foreground">
                  Fully licensed by health authorities with certified medical staff.
                </p>
              </div>
              <div className="p-6 border border-gray-100 rounded-xl text-center">
                <HeartPulse className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-bold text-primary mb-3">Patient-Centered</h3>
                <p className="text-muted-foreground">
                  Our care protocols prioritize the dignity, comfort, and safety of every patient.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingContact />
    </ServicePageTemplate>
  );
};

export default FujairahAmbulanceServices;
