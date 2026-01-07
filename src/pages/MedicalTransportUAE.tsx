import { Ambulance, Clock, MapPin, ShieldCheck, Users, HeartPulse, Phone, Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ServicePageTemplate from "@/templates/ServicePageTemplate";
import { Link } from "react-router-dom";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";

const MedicalTransportUAE = () => {
  const services = [
    {
      title: "ICU Medical Transport",
      description: "Critical care transport with advanced life support equipment, ventilators, and trained ICU nurses for critically ill patients.",
      icon: HeartPulse
    },
    {
      title: "BLS Medical Transport",
      description: "Basic Life Support transport for stable patients requiring medical supervision during transit.",
      icon: Ambulance
    },
    {
      title: "Inter-Hospital Transfers",
      description: "Safe and efficient transfers between hospitals, clinics, and medical facilities across all UAE emirates.",
      icon: MapPin
    },
    {
      title: "Airport Medical Transport",
      description: "Medical transport services to and from Dubai, Abu Dhabi, and Sharjah airports for incoming patients.",
      icon: Users
    },
    {
      title: "24/7 Availability",
      description: "Round-the-clock medical transport services available any day, any time across the UAE.",
      icon: Clock
    },
    {
      title: "Trained Medical Staff",
      description: "Every transport includes qualified paramedics, EMTs, or nurses based on patient acuity level.",
      icon: ShieldCheck
    }
  ];

  const transportTypes = [
    "Critical Care ICU Transport",
    "Advanced Life Support (ALS)",
    "Basic Life Support (BLS)",
    "Wheelchair Transport",
    "Stretcher Transport",
    "Bariatric Patient Transport",
    "Neonatal Transport",
    "Pediatric Transport",
    "Psychiatric Patient Transport",
    "Dialysis Transport",
    "Chemotherapy Transport",
    "Rehabilitation Transport"
  ];

  const areas = [
    "Dubai", "Abu Dhabi", "Sharjah", "Ajman", "Ras Al Khaimah", "Fujairah", "Umm Al Quwain",
    "Al Ain", "Ruwais", "Liwa", "Dibba", "Khorfakkan", "Kalba", "Dhaid", "Hatta"
  ];

  const faqs = [
    {
      question: "What is medical transport?",
      answer: "Medical transport refers to the professional transportation of patients who require medical supervision during transit. This includes ICU ambulances, basic life support vehicles, and specialized transport for various patient needs."
    },
    {
      question: "What types of medical transport do you offer in UAE?",
      answer: "We offer ICU/Critical Care Transport, Advanced Life Support (ALS), Basic Life Support (BLS), wheelchair transport, stretcher transport, and specialized transport for dialysis, chemotherapy, and rehabilitation patients."
    },
    {
      question: "How do I book medical transport in Dubai or Abu Dhabi?",
      answer: "Call us at +971 55 472 8133 or WhatsApp us. We can arrange both scheduled and urgent medical transport within 30-60 minutes depending on your location."
    },
    {
      question: "Do you provide medical transport between emirates?",
      answer: "Yes, we provide inter-emirate medical transport throughout the UAE. Whether you need transport from Dubai to Abu Dhabi, Sharjah to RAK, or any other route, we can help."
    },
    {
      question: "What medical equipment is available during transport?",
      answer: "Our vehicles are equipped with cardiac monitors, defibrillators, ventilators, oxygen therapy equipment, IV pumps, and all necessary emergency medications based on the transport type."
    },
    {
      question: "Is medical transport covered by insurance?",
      answer: "Many insurance plans cover medical transport. We work with most major insurance providers in UAE and can assist with pre-authorization and direct billing where available."
    }
  ];

  return (
    <ServicePageTemplate
      title="Medical Transport Services UAE | Professional Patient Transport | EMRS"
      description="Professional medical transport services across UAE. ICU ambulances, patient transfers, and inter-hospital transport in Dubai, Abu Dhabi, Sharjah. 24/7 availability. Call +971 55 472 8133"
      canonical="https://emrs.ae/medical-transport-uae"
      imageUrl="/images/og/medical-transport-uae.jpg"
      imageAlt="Medical Transport Services in UAE by EMRS"
      lastUpdated="2026-01-01"
      faqs={faqs}
      phoneNumber="+971 55 472 8133"
      relatedLinks={[
        { label: 'Ambulance Services UAE', to: '/ambulance-services-uae' },
        { label: 'Patient Transport', to: '/patient-transport' },
        { label: 'Non-Emergency Transport', to: '/non-emergency-medical-transport-uae' }
      ]}
      hideHeader={true}
    >
      {/* Hero Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptMCAwdi02aC02djZoNnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-50"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-semibold mb-6">
              Professional Medical Transport
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Medical Transport Services in UAE
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 mb-8 leading-relaxed">
              Professional medical transport across Dubai, Abu Dhabi, Sharjah, and all UAE emirates. 
              ICU ambulances, patient transfers, and inter-hospital transport available 24/7 with trained medical staff.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-[#A83300] hover:bg-[#8A2A00] text-white font-bold text-lg px-8 py-6"
                asChild
              >
                <a href="tel:+971554728133" className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  Call +971 55 472 8133
                </a>
              </Button>
              <Button
                size="lg"
                className="bg-[#11632B] hover:bg-[#0D4D21] text-white font-bold text-lg px-8 py-6"
                asChild
              >
                <a href="https://wa.me/971554728133?text=Hi%20%F0%9F%91%8B%2C%20I%E2%80%99m%20interested%20in%20your%20Medical%20Transport%20services." target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <img src="/whatsapp.svg" alt="WhatsApp Support" width={20} height={20} className="w-5 h-5" />
                  WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What is Medical Transport */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-6">
                What is Medical Transport?
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Medical transport is the safe and professional movement of patients who require medical care or supervision during transit. 
                Unlike regular transportation, medical transport vehicles are equipped with life-saving equipment and staffed by trained 
                medical professionals who can monitor and treat patients throughout the journey.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                EMRS provides comprehensive medical transport services across the UAE, from critical ICU transfers to routine 
                patient transport for medical appointments. Our fleet includes fully-equipped ambulances, specialized stretcher vehicles, 
                and wheelchair-accessible transport options.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-accent font-bold text-sm uppercase tracking-wide">Our Services</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-primary mt-4 mb-4">
                Medical Transport Services
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Comprehensive medical transport solutions for all patient needs
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow">
                  <service.icon className="w-12 h-12 text-accent mb-4" />
                  <h3 className="text-xl font-bold text-primary mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Transport Types */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-6">
                Types of Medical Transport We Provide
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {transportTypes.map((type, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                  <Check className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-primary">{type}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Areas */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <MapPin className="w-16 h-16 text-accent mx-auto mb-6" />
              <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-6">
                Medical Transport Coverage Areas
              </h2>
              <p className="text-lg text-muted-foreground">
                We provide medical transport services across all UAE emirates
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {areas.map((area, index) => (
                <div key={index} className="bg-white p-4 rounded-lg text-center shadow-sm">
                  <span className="text-primary font-medium">{area}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-muted-foreground">
                Common questions about medical transport services in UAE
              </p>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-lg font-bold text-primary mb-2">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-primary mb-8">Related Services</h2>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button variant="outline" asChild>
                <Link to="/ambulance-services-uae" className="flex items-center gap-2">
                  Ambulance Services <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/patient-transport" className="flex items-center gap-2">
                  Patient Transport <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/non-emergency-medical-transport-uae" className="flex items-center gap-2">
                  Non-Emergency Transport <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
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
