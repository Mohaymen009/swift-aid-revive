import Navigation from "@/components/Navigation";
import Services from "@/components/Services";
import EmirateServices from "@/components/EmirateServices";
import WhyChooseUs from "@/components/WhyChooseUs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import SEOHead from "@/components/SEOHead";
import ServicePageTemplate from "@/templates/ServicePageTemplate";
import { Ambulance, Clock, MapPin, ShieldCheck, Users, HeartPulse, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AmbulanceServicesUAE = () => {
  const services = [
    {
      title: "Patient Transport",
      description: "Safe and comfortable transportation for patients requiring medical supervision during transit.",
      icon: Ambulance
    },
    {
      title: "24/7 Availability",
      description: "Round-the-clock medical transport services across all emirates, including weekends and holidays.",
      icon: Clock
    },
    {
      title: "Inter-Hospital Transfer",
      description: "Seamless transfer between medical facilities with continuous medical monitoring and care.",
      icon: MapPin
    },
    {
      title: "Specialized Medical Team",
      description: "Experienced paramedics and medical professionals ensuring patient safety and comfort.",
      icon: ShieldCheck
    },
    {
      title: "Multi-Patient Transport",
      description: "Capability to transport multiple patients simultaneously with dedicated medical attention.",
      icon: Users
    },
    {
      title: "Medical Escort",
      description: "Trained medical personnel accompanying patients requiring continuous care during transit.",
      icon: HeartPulse
    }
  ];

  const features = [
    {
      title: "24/7 Rapid Response",
      description: "Immediate dispatch for urgent medical transport needs, any time of day or night.",
      icon: Clock
    },
    {
      title: "Fully Equipped Ambulances",
      description: "Modern ambulances with advanced life support equipment and medications.",
      icon: Ambulance
    },
    {
      title: "Trained Medical Staff",
      description: "Experienced paramedics and emergency medical technicians on every call.",
      icon: Users
    },
    {
      title: "Nationwide Coverage",
      description: "Services available across all UAE emirates with a single phone call.",
      icon: MapPin
    },
    {
      title: "Advanced Life Support",
      description: "Critical care transport with specialized equipment and trained personnel.",
      icon: HeartPulse
    },
    {
      title: "Patient Comfort",
      description: "Smooth, comfortable transport with attention to patient needs and safety.",
      icon: ShieldCheck
    }
  ];

  const serviceTypes = [
    {
      title: "Critical Care Ambulance Services",
      description: "Immediate response for serious medical situations with advanced life support capabilities.",
      keywords: ["24/7 Support", "ALS Support", "Rapid Response", "Critical Care"]
    },
    {
      title: "Non-Emergency Patient Transport",
      description: "Safe and comfortable transport for non-emergency medical appointments and procedures.",
      keywords: ["Scheduled Transport", "Medical Appointments", "Dialysis", "Therapy"]
    },
    {
      title: "Inter-Hospital Transfers",
      description: "Seamless transfer between medical facilities with continuous medical monitoring.",
      keywords: ["Hospital to Hospital", "Facility Transfer", "Specialized Care", "Continuity"]
    },
    {
      title: "Event Medical Coverage",
      description: "On-site medical support for events, concerts, and corporate functions.",
      keywords: ["Event EMS", "First Aid", "Medical Standby", "Mass Gathering"]
    }
  ];

  const areas = [
    "Dubai", "Abu Dhabi", "Sharjah", "Ajman", "Ras Al Khaimah", "Fujairah", "Umm Al Quwain",
    "Al Ain", "Ruwais", "Liwa", "Dibba", "Khorfakkan", "Kalba", "Dhaid", "Hatta"
  ];

  const faqs = [
    {
      question: "What types of medical transport do you provide?",
      answer: "We offer various transport options including basic life support, advanced life support, and critical care transport, all equipped with necessary medical equipment and staffed by qualified professionals."
    },
    {
      question: "How quickly can you respond to a transport request?",
      answer: "Our average response time is under 30 minutes in urban areas. We prioritize cases based on medical necessity to ensure timely assistance."
    },
    {
      question: "Do you provide transport for patients with special needs?",
      answer: "Yes, our fleet includes vehicles equipped to handle patients with mobility challenges, including wheelchair accessibility and specialized bariatric transport solutions."
    },
    {
      question: "What medical equipment is available during transport?",
      answer: "Our ambulances are equipped with cardiac monitors, ventilators, infusion pumps, and other essential medical equipment to ensure patient stability during transit."
    },
    {
      question: "Can family members accompany the patient?",
      answer: "Yes, in most cases, one family member can accompany the patient, subject to space availability and medical considerations."
    },
    {
      question: "Do you provide international patient transfers?",
      answer: "Yes, we coordinate with international medical transport providers to facilitate seamless cross-border patient transfers when needed."
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
    <ServicePageTemplate
      title="Non-Emergency Ambulance Services UAE | Licensed 24/7 Patient Transport"
      description="Professional ambulance services across all UAE emirates. Reliable medical transport with trained paramedics. Available 24/7 for all your medical transport needs."
      canonical="https://emrs.ae/ambulance-services-uae"
      imageUrl="/images/og/ambulance-services-uae.jpg"
      imageAlt="Ambulance Services in UAE by EMRS"
      lastUpdated="2026-01-01"
      faqs={faqs}
      phoneNumber={"+971 55 472 8133"}
      relatedLinks={[
        { label: 'Non-Emergency Transport', to: '/non-emergency-medical-transport-uae' },
        { label: 'Doctor on Call', to: '/doctor-on-call-uae' },
        { label: 'Home Healthcare', to: '/home-healthcare-services-uae' }
      ]}
      hideHeader={true}
      additionalStructuredData={faqSchema}
    >
      {/* Hero Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptMCAwdi02aC02djZoNnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-50"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-semibold mb-6">
              24/7 Medical Transport Services
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Professional Ambulance Services Across UAE
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 mb-8 leading-relaxed">
              Safe and reliable medical transportation with trained professionals.
              Serving all emirates with a fleet of fully-equipped ambulances and experienced medical teams.
              Professional ambulance and medical transport services across Dubai, Abu Dhabi, Sharjah, and all UAE emirates. ICU ambulances, patient transfers, and event medical coverage.
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
                <a href="https://wa.me/971554728133?text=Hi%20%F0%9F%91%8B%2C%20I%E2%80%99m%20interested%20in%20your%20services." target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <img src="/whatsapp.webp" alt="" className="w-5 h-5" />
                  WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
                Why Choose EMRS Ambulance Services?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Trusted by hospitals, clinics, and families across UAE for reliable medical transport
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow">
                  <feature.icon className="w-12 h-12 text-accent mb-4" />
                  <h3 className="text-xl font-bold text-primary mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service Types */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-accent font-bold text-sm uppercase tracking-wide">Our Services</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-primary mt-4 mb-4">
                Comprehensive Ambulance Services
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                From critical care ICU ambulances to basic patient transport, we have the right solution for every medical transport need
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {serviceTypes.map((service, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow">
                  <h3 className="text-2xl font-bold text-primary mb-4">{service.title}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{service.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {service.keywords.map((keyword, idx) => (
                      <span key={idx} className="px-3 py-1 bg-primary/5 text-primary text-sm rounded-full">
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
                How to Book an Ambulance
              </h2>
              <p className="text-lg text-muted-foreground">
                Simple 4-step process to get medical transport
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { step: "1", title: "Call Us", description: "Contact us via phone or WhatsApp with patient details" },
                { step: "2", title: "Assessment", description: "Our team assesses requirements and recommends ambulance type" },
                { step: "3", title: "Dispatch", description: "Nearest available ambulance is dispatched to your location" },
                { step: "4", title: "Transport", description: "Professional medical transport to destination facility" }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-accent text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-bold text-primary mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
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
                Common questions about our ambulance services in UAE
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

      <EmirateServices />
      <WhyChooseUs />
      <Contact />
      <Footer />
    </ServicePageTemplate>
  );
};

export default AmbulanceServicesUAE;
