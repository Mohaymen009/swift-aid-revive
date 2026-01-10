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
      answer: "Yes, our ambulance and medical transport team is ready to assist in UAQ 24 hours a day, 7 days a week, including all public holidays."
    },
    {
      question: "Can I book a transfer from UAQ to Sharjah?",
      answer: "Absolutely. We facilitate medical transfers between UAQ and all other emirates, including Sharjah, Ajman, and Dubai hospitals. We handle all the coordination for a smooth transfer."
    },
    {
      question: "What information do I need to book an ambulance?",
      answer: "We need the patient's pickup location, destination, basic medical condition, and any specific requirements (like oxygen or a wheelchair). Just call us, and our team will guide you."
    },
    {
      question: "Do you serve the industrial areas in UAQ?",
      answer: "Yes, we provide coverage for all residential and industrial zones in Umm Al Quwain, ensuring workers and residents have access to reliable medical transport."
    },
    {
      question: "Can a family member ride along?",
      answer: "Yes, typically one family member can accompany the patient in the ambulance, subject to safety protocols and space availability."
    }
  ];

  const areas = [
    "Umm Al Quwain City", "Al Salama", "Al Ramlah", "Al Rafaah", "Al Raas", "Al Haditha",
    "Umm Al Thaloup", "Al Maqtaa", "Emirates Modern Industrial Area", "Falaj Al Mualla", "Al Aahad", "Al Dar Al Baida"
  ];

  return (
    <ServicePageTemplate
      title="Professional Ambulance Services in Umm Al Quwain | EMRS"
      description="EMRS provides professional ambulance services in Umm Al Quwain. 24/7 patient transport and medical transfers in UAQ. Call +971 55 472 8133"
      canonical="https://emrs.ae/umm-al-quwain-ambulance-services/"

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
              Dependable Medical Support in UAQ
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We offer comprehensive patient transport solutions tailored to the needs of the UAQ community.
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
                Areas We Serve in Umm Al Quwain
              </h2>
              <p className="text-lg text-muted-foreground">
                We provide fleet coverage across all major districts and industrial zones in UAQ:
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
                Your Trusted Ambulance Partner in UAQ
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 border border-gray-100 rounded-xl text-center">
                <Clock className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-bold text-primary mb-3">Prompt Service</h3>
                <p className="text-muted-foreground">
                  Our dispatch team ensures minimal wait times for all non-emergency bookings in UAQ.
                </p>
              </div>
              <div className="p-6 border border-gray-100 rounded-xl text-center">
                <ShieldCheck className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-bold text-primary mb-3">Safety First</h3>
                <p className="text-muted-foreground">
                  We adhere to the highest safety standards for patient handling and vehicle maintenance.
                </p>
              </div>
              <div className="p-6 border border-gray-100 rounded-xl text-center">
                <HeartPulse className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-bold text-primary mb-3">Affordable Care</h3>
                <p className="text-muted-foreground">
                  Transparent pricing with no hidden fees for all our medical transport services.
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

export default UmmAlQuwainAmbulanceServices;
