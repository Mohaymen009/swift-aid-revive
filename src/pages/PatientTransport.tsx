import { Ambulance, Clock, MapPin, ShieldCheck, Users, Heart, Phone, Check, ArrowRight, UserPlus, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import ServicePageTemplate from "@/templates/ServicePageTemplate";
import { Link } from "react-router-dom";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";

const PatientTransport = () => {
  const services = [
    {
      title: "Wheelchair Patient Transport",
      description: "Comfortable wheelchair-accessible vehicles for patients with mobility limitations. Door-to-door service with trained attendants.",
      icon: UserPlus
    },
    {
      title: "Stretcher Patient Transport",
      description: "Professional stretcher transport for patients who need to remain in a reclined or lying position during transit.",
      icon: Ambulance
    },
    {
      title: "Medical Appointment Transport",
      description: "Reliable transport for scheduled medical appointments, treatments, and follow-up visits at hospitals and clinics.",
      icon: Calendar
    },
    {
      title: "Hospital Discharge Transport",
      description: "Safe and comfortable transport for patients being discharged from hospitals to their homes or care facilities.",
      icon: Heart
    },
    {
      title: "Dialysis Patient Transport",
      description: "Recurring transport services for dialysis patients requiring regular transport to and from treatment centers.",
      icon: Clock
    },
    {
      title: "Inter-Emirate Transport",
      description: "Long-distance patient transport between UAE emirates with medical supervision and comfort.",
      icon: MapPin
    }
  ];

  const benefits = [
    "Door-to-door pickup and drop-off",
    "Trained patient transport attendants",
    "Wheelchair and stretcher-capable vehicles",
    "Medical monitoring during transport",
    "Oxygen therapy available on request",
    "Coverage across all UAE emirates",
    "Scheduled recurring transport available",
    "Insurance coordination assistance"
  ];

  const areas = [
    "Dubai", "Abu Dhabi", "Sharjah", "Ajman", "Ras Al Khaimah", "Fujairah", "Umm Al Quwain",
    "Al Ain", "Ruwais", "Dibba", "Khorfakkan"
  ];

  const faqs = [
    {
      question: "What is patient transport?",
      answer: "Patient transport is a professional service that provides safe, comfortable transportation for individuals who need assistance getting to medical appointments, treatments, or between healthcare facilities. Unlike emergency ambulances, patient transport is typically scheduled in advance."
    },
    {
      question: "Who needs patient transport services?",
      answer: "Patient transport is ideal for elderly individuals, people with mobility limitations, patients recovering from surgery, those requiring regular dialysis or chemotherapy, and anyone who needs medical supervision or assistance during transit."
    },
    {
      question: "How do I book patient transport in UAE?",
      answer: "Contact us at +971 55 472 8133 or via WhatsApp. We recommend booking at least 24 hours in advance for scheduled appointments, though same-day requests are often possible."
    },
    {
      question: "Can a family member accompany the patient?",
      answer: "Yes, in most cases one family member can accompany the patient depending on vehicle capacity and the patient's medical needs."
    },
    {
      question: "Do you provide recurring transport for dialysis patients?",
      answer: "Yes, we offer scheduled recurring transport for dialysis patients who need regular transport to treatment centers 2-3 times per week. We can set up a fixed schedule for convenience."
    },
    {
      question: "What areas do you cover for patient transport?",
      answer: "We provide patient transport services across all seven emirates of the UAE, including Dubai, Abu Dhabi, Sharjah, Ajman, Ras Al Khaimah, Fujairah, and Umm Al Quwain."
    }
  ];

  return (
    <ServicePageTemplate
      title="Patient Transport Services UAE | Wheelchair & Stretcher Transport | EMRS"
      description="Professional patient transport services in UAE. Wheelchair transport, stretcher transport, dialysis transport, and hospital transfers in Dubai, Abu Dhabi, Sharjah. Call +971 55 472 8133"
      canonical="https://emrs.ae/patient-transport"
      imageUrl="/images/og/patient-transport-uae.jpg"
      imageAlt="Patient Transport Services in UAE by EMRS"
      lastUpdated="2026-01-01"
      faqs={faqs}
      phoneNumber="+971 55 472 8133"
      relatedLinks={[
        { label: 'Medical Transport UAE', to: '/medical-transport-uae' },
        { label: 'Non-Emergency Transport', to: '/non-emergency-medical-transport-uae' },
        { label: 'Ambulance Services', to: '/ambulance-services-uae' }
      ]}
      hideHeader={true}
    >
      {/* Hero Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptMCAwdi02aC02djZoNnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-50"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-semibold mb-6">
              Safe & Comfortable Patient Transport
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Patient Transport Services in UAE
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 mb-8 leading-relaxed">
              Professional patient transport services for medical appointments, hospital discharges, and dialysis treatments. 
              Wheelchair and stretcher transport available across Dubai, Abu Dhabi, and all UAE emirates.
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
                <a href="https://wa.me/971554728133?text=Hi%20%F0%9F%91%8B%2C%20I%E2%80%99m%20interested%20in%20your%20Patient%20Transport%20services." target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <img src="/whatsapp.svg" alt="WhatsApp Support" width={20} height={20} className="w-5 h-5" />
                  WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What is Patient Transport */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-6">
                What is Patient Transport?
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Patient transport is a specialized service designed to safely and comfortably move individuals who need 
                assistance traveling to medical appointments, treatments, or between healthcare facilities. Our trained 
                attendants ensure patient safety and comfort throughout the journey.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                Whether you need wheelchair transport for elderly parents, stretcher transport for post-surgery patients, 
                or regular dialysis transport, EMRS provides reliable patient transport services across the UAE.
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
                Patient Transport Services
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Comprehensive patient transport solutions for all needs
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

      {/* Benefits */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-6">
                Why Choose EMRS Patient Transport
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                  <Check className="w-6 h-6 text-accent flex-shrink-0" />
                  <span className="text-primary font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Dialysis Transport Section */}
      <section className="py-16 bg-accent/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Heart className="w-16 h-16 text-accent mx-auto mb-6" />
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-6">
              Dialysis Patient Transport
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Dialysis patients need reliable, punctual transport multiple times per week. Our dedicated dialysis transport 
              service ensures you never miss an appointment. We offer recurring schedule bookings, comfortable vehicles 
              with trained attendants who understand the unique needs of dialysis patients.
            </p>
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-white font-bold"
              asChild
            >
              <a href="tel:+971554728133" className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Book Dialysis Transport
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Coverage Areas */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <MapPin className="w-16 h-16 text-accent mx-auto mb-6" />
              <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-6">
                Patient Transport Coverage Areas
              </h2>
              <p className="text-lg text-muted-foreground">
                We provide patient transport services across all UAE emirates
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {areas.map((area, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg text-center shadow-sm">
                  <span className="text-primary font-medium">{area}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-muted-foreground">
                Common questions about patient transport services
              </p>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-lg font-bold text-primary mb-2">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-primary mb-8">Related Services</h2>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button variant="outline" asChild>
                <Link to="/medical-transport-uae" className="flex items-center gap-2">
                  Medical Transport <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/ambulance-services-uae" className="flex items-center gap-2">
                  Ambulance Services <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/home-healthcare-services-uae" className="flex items-center gap-2">
                  Home Healthcare <ArrowRight className="w-4 h-4" />
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

export default PatientTransport;
