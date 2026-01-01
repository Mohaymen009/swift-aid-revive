import Navigation from "@/components/Navigation";
import Services from "@/components/Services";
import EmirateServices from "@/components/EmirateServices";
import WhyChooseUs from "@/components/WhyChooseUs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import SEOHead from "@/components/SEOHead";
import ServicePageTemplate from "@/templates/ServicePageTemplate";
import { Check, Clock, Shield, Heart, Truck, Users, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const AmbulanceServicesUAE = () => {
  const features = [
    { icon: Clock, title: "24/7 Availability", description: "Round-the-clock ambulance services across all UAE emirates" },
    { icon: Shield, title: "Licensed & Certified", description: "DHA, DOH, and MOH licensed medical transport services" },
    { icon: Heart, title: "Advanced Life Support", description: "ICU ambulances with cardiac monitors and ventilators" },
    { icon: Truck, title: "Modern Fleet", description: "Latest ambulance vehicles with advanced medical equipment" },
    { icon: Users, title: "Expert Paramedics", description: "Trained EMTs and paramedics for all medical situations" },
    { icon: Check, title: "Insurance Accepted", description: "We work with all major insurance providers in UAE" }
  ];

  const serviceTypes = [
    {
      title: "ICU Ambulance Services",
      description: "Critical care ambulances equipped with ventilators, cardiac monitors, defibrillators, and advanced life support equipment. Ideal for patients requiring intensive monitoring during transport.",
      keywords: ["ICU ambulance Dubai", "critical care ambulance UAE", "ventilator ambulance"]
    },
    {
      title: "Basic Life Support (BLS) Ambulance",
      description: "Standard ambulance services for non-critical patients. Equipped with essential medical supplies, oxygen, stretcher, and basic monitoring equipment.",
      keywords: ["basic ambulance UAE", "patient transport ambulance", "stretcher ambulance Dubai"]
    },
    {
      title: "Inter-Hospital Transfers",
      description: "Safe and efficient patient transfers between hospitals, clinics, and medical facilities across UAE. We coordinate with both facilities for seamless handover.",
      keywords: ["hospital transfer ambulance", "inter-hospital transport UAE", "medical facility transfer"]
    },
    {
      title: "Airport Medical Transfers",
      description: "Specialized ambulance services for airport pickups and medical repatriation. We handle all logistics for international patient transfers.",
      keywords: ["airport ambulance Dubai", "medical repatriation UAE", "air ambulance ground transport"]
    },
    {
      title: "Event Medical Coverage",
      description: "On-site ambulance and paramedic services for corporate events, sports events, concerts, and private gatherings across UAE.",
      keywords: ["event ambulance UAE", "standby ambulance services", "medical coverage events"]
    },
    {
      title: "Long-Distance Medical Transport",
      description: "Cross-emirate and long-distance patient transport with comfort and medical monitoring. Perfect for patients traveling between distant medical facilities.",
      keywords: ["long distance ambulance UAE", "cross emirate transport", "patient travel services"]
    }
  ];

  const faqs = [
    {
      question: "How quickly can an ambulance reach me in Dubai?",
      answer: "Our average response time in Dubai is 15-30 minutes depending on traffic conditions and your location. We have strategically positioned ambulances across the city for faster response."
    },
    {
      question: "Do you accept insurance for ambulance services?",
      answer: "Yes, we work with all major insurance providers in the UAE including Daman, AXA, Oman Insurance, and more. We can directly bill your insurance company in most cases."
    },
    {
      question: "What is the difference between ICU and BLS ambulance?",
      answer: "ICU ambulances are equipped with advanced life support including ventilators, cardiac monitors, and medications for critical patients. BLS ambulances provide basic medical support for stable patients."
    },
    {
      question: "Can you transport patients between hospitals?",
      answer: "Yes, inter-hospital transfers are one of our primary services. We coordinate with both hospitals to ensure seamless patient handover and maintain medical records throughout."
    },
    {
      question: "Do you provide ambulance services across all UAE emirates?",
      answer: "Yes, we provide ambulance services in Dubai, Abu Dhabi, Sharjah, Ajman, Ras Al Khaimah, Fujairah, and Umm Al Quwain. We also handle cross-emirate transfers."
    },
    {
      question: "What medical equipment is available in your ambulances?",
      answer: "Our ambulances are equipped with cardiac monitors, defibrillators, oxygen supply, stretchers, first aid supplies, medications, and in ICU ambulances: ventilators and infusion pumps."
    }
  ];

  return (
    <>
      <Navigation />
      <ServicePageTemplate
        title="24/7 Private Ambulance Services in UAE | ICU & BLS Ambulance | EMRS"
<<<<<<< HEAD
        description="EMRS provides 24/7 private ambulance services across UAE. ICU ambulance, inter-hospital transfers, airport medical transport. Licensed paramedics. Call +971 4 576 8237"
=======
        description="EMRS provides 24/7 private ambulance services across UAE. ICU ambulance, inter-hospital transfers, airport medical transport. Licensed paramedics. Call +971 55 472 8133"
>>>>>>> b46613a (done)
        canonical="https://emrs.ae/ambulance-services-uae"
        imageUrl="/images/og/ambulance-services-uae.jpg"
        imageAlt="Private Ambulance Services in UAE by EMRS"
        lastUpdated="2026-01-01"
        faqs={faqs}
<<<<<<< HEAD
        phoneNumber={"+97145768237"}
=======
        phoneNumber={"+971 55 472 8133"}
>>>>>>> b46613a (done)
        relatedLinks={[
          { label: 'Patient Transport (NEMT)', to: '/non-emergency-medical-transport-uae' },
          { label: 'Doctor on Call', to: '/doctor-on-call-uae' },
          { label: 'Home Healthcare', to: '/home-healthcare-services-uae' }
        ]}
      >
      {/* Hero Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptMCAwdi02aC02djZoNnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-50"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-semibold mb-6">
              Licensed by DHA, DOH & MOH
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              24/7 Private Ambulance Services in UAE
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 mb-8 leading-relaxed">
              Professional ambulance and medical transport services across Dubai, Abu Dhabi, Sharjah, and all UAE emirates. ICU ambulances, patient transfers, and event medical coverage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-white font-bold text-lg px-8 py-6"
                asChild
              >
                <a href="tel:+971554728133" className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  Call +971 55 472 8133
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary font-bold text-lg px-8 py-6"
                asChild
              >
                <a href="https://wa.me/971554728133" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp Us
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
      <FloatingContact />
      </ServicePageTemplate>
    </>
  );
};

export default AmbulanceServicesUAE;
