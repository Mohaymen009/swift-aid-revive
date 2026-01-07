import Navigation from "@/components/Navigation";
import WhyChooseUs from "@/components/WhyChooseUs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import SEOHead from "@/components/SEOHead";
import ServicePageTemplate from "@/templates/ServicePageTemplate";
import { Ambulance, UserPlus, Calendar, MapPin, Clock, Phone, MessageCircle, Check, Heart, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NonEmergencyMedicalTransport = () => {
  const services = [
    {
      title: "Wheelchair Transport",
      description: "Specialized vehicles equipped with wheelchair lifts and securements for safe patient transport.",
      icon: UserPlus
    },
    {
      title: "Stretcher Transport",
      description: "Comfortable stretcher transport for patients who need to remain in a reclined position.",
      icon: UserPlus
    },
    {
      title: "Scheduled Appointments",
      description: "Pre-arranged transport for medical appointments, treatments, and follow-up visits.",
      icon: Calendar
    },
    {
      title: "Long-Distance Transport",
      description: "Comfortable transport between cities or emirates for medical treatment or returning home.",
      icon: MapPin
    },
    {
      title: "24/7 Availability",
      description: "Round-the-clock service for non-urgent medical transport needs.",
      icon: Clock
    },
    {
      title: "Medical Escort",
      description: "Trained medical personnel to accompany patients requiring monitoring during transport.",
      icon: UserPlus
    }
  ];

  const areas = [
    "Dubai", "Abu Dhabi", "Sharjah", "Ajman", "Ras Al Khaimah", "Fujairah", "Umm Al Quwain",
    "Al Ain", "Ruwais", "Liwa", "Dibba", "Khorfakkan", "Kalba", "Dhaid", "Hatta"
  ];

  const benefits = [
    "Door-to-door pickup and drop-off",
    "Professional drivers trained in patient handling",
    "Wheelchair and stretcher-capable vehicles",
    "Coordinated timing with hospitals and clinics",
    "Support for elderly and mobility-challenged patients",
    "Coverage across all UAE emirates"
  ];

  const faqs = [
    {
      question: "What types of non-emergency transport do you provide?",
      answer: "We offer wheelchair transport, stretcher transport, and ambulatory transport for patients who need assistance getting to medical appointments."
    },
    {
      question: "How far in advance should I book transport?",
      answer: "We recommend booking at least 24 hours in advance to ensure vehicle availability, though we do our best to accommodate same-day requests."
    },
    {
      question: "Can family members accompany the patient?",
      answer: "Yes, in most cases one family member can accompany the patient, depending on the vehicle's capacity and the patient's needs."
    },
    {
      question: "What if I need to cancel or reschedule?",
      answer: "Please notify us at least 2 hours before the scheduled pickup time to avoid cancellation fees. We understand that medical needs can change."
    },
    {
      question: "Do you provide transport for patients with special needs?",
      answer: "Yes, our vehicles are equipped to handle various special needs, including mobility devices and medical equipment."
    },
    {
      question: "What safety measures are in place?",
      answer: "All our drivers are trained in patient handling, and our vehicles are regularly maintained and sanitized to the highest standards."
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      <Navigation />
      <ServicePageTemplate
        title="Non-Emergency Medical Transport UAE | Patient Transport | EMRS"
        description="Reliable non-emergency medical transport services across UAE. Professional patient transport for medical appointments, treatments, and hospital discharges."
        canonical="https://emrs.ae/non-emergency-medical-transport-uae"
        imageUrl="/images/og/non-emergency-medical-transport-uae.jpg"
        imageAlt="Non-Emergency Medical Transport in UAE by EMRS"
        lastUpdated="2026-01-01"
        faqs={faqs}
        phoneNumber={"+971 55 472 8133"}
        relatedLinks={[
          { label: 'Ambulance Services', to: '/ambulance-services-uae' },
          { label: 'Home Healthcare', to: '/home-healthcare-services-uae' },
          { label: 'Doctor on Call', to: '/doctor-on-call-uae' }
        ]}
        additionalStructuredData={faqSchema}
      >
        {/* Hero Section */}
        <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptMCAwdi02aC02djZoNnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-50"></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="max-w-4xl mx-auto text-center">
              <span className="inline-block px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-semibold mb-6">
                Comfortable & Reliable Transport
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Non-Emergency Medical Transport
              </h1>
              <p className="text-xl sm:text-2xl text-white/90 mb-8 leading-relaxed">
                Safe and comfortable transportation for medical appointments, treatments, and hospital discharges across all UAE emirates.
                Comfortable, reliable patient transport for dialysis, hospital appointments, and scheduled medical visits. Wheelchair and stretcher accessible vehicles available.
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
                  <a href="https://wa.me/971554728133?text=Hi%20%F0%9F%91%8B%2C%20I%E2%80%99m%20interested%20in%20your%20Non-Emergency%20Transport%20services." target="_blank" rel="noopener noreferrer nofollow" className="flex items-center gap-2">
                    <img src="/whatsapp.svg" alt="WhatsApp Support" width={20} height={20} className="w-5 h-5" />
                    WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* What is NEMT */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-6">
                  What is Non-Emergency Medical Transport?
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Non-Emergency Medical Transport (NEMT) provides scheduled transportation for patients who need medical transport but don't require emergency ambulance services. This includes transport for routine medical appointments, dialysis treatments, physical therapy, hospital discharges, and other planned medical visits.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                  Unlike emergency ambulances, NEMT services are pre-scheduled and focus on patient comfort and convenience. Our vehicles are equipped with wheelchair accessibility, stretcher capability, and trained medical attendants to assist patients throughout their journey.
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
                <span className="text-accent font-bold text-sm uppercase tracking-wide">Our NEMT Services</span>
                <h2 className="text-3xl sm:text-4xl font-bold text-primary mt-4 mb-4">
                  Patient Transport Services
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Comprehensive non-emergency medical transport solutions for all your healthcare needs
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
                <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-6">Explore Our Health & Transport Services</h2>
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

        {/* Dialysis Transport Special Section */}
        <section className="py-16 bg-accent/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <Heart className="w-16 h-16 text-accent mx-auto mb-6" />
              <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-6">
                Specialized Dialysis Transport
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Dialysis patients need reliable, punctual transport three or more times per week. Our dedicated dialysis transport service ensures you never miss an appointment. We offer recurring schedule bookings, comfortable vehicles with medical monitoring, and trained attendants who understand the unique needs of dialysis patients.
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

        {/* FAQ Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
                  Frequently Asked Questions
                </h2>
                <p className="text-lg text-muted-foreground">
                  Common questions about non-emergency medical transport
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
              <h2 className="text-3xl font-bold text-primary mb-8">Related Healthcare Services</h2>
              <div className="flex flex-wrap gap-4 justify-center">
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
                <Button variant="outline" asChild>
                  <Link to="/doctor-on-call-uae" className="flex items-center gap-2">
                    Doctor on Call <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <WhyChooseUs />
        <Contact />
        <Footer />
        <FloatingContact />
      </ServicePageTemplate>
    </>
  );
};

export default NonEmergencyMedicalTransport;
