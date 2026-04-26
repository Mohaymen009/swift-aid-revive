import Navigation from "@/components/Navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import Hero from "@/components/Hero";
import OurStory from "@/components/OurStory";
import Services from "@/components/Services";
import EmirateServices from "@/components/EmirateServices";
import WhyChooseUs from "@/components/WhyChooseUs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import SEOHead from "@/components/SEOHead";

import { Ambulance, Clock, MapPin, ShieldCheck, Users, HeartPulse, Phone, MessageCircle, Calendar, Home, Hotel, Briefcase, Baby, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import ServicePageTemplate from "@/templates/ServicePageTemplate";
import { Link } from "react-router-dom";

const AjmanAmbulanceServices = () => {
  const services = [
    {
      title: "Rapid Response Ambulance",
      description: "Fast medical intervention and rapid response units serving all communities across Ajman 24/7.",
      icon: Ambulance
    },
    {
      title: "Patient Transport",
      description: "Dedicated patient transport for Al Nuaimiya, Al Rashidiya, and throughout Ajman with professional care.",
      icon: Users
    },
    {
      title: "Inter-Hospital Transfer",
      description: "Coordinated transfers between Ajman medical centers and hospitals in Dubai or Sharjah.",
      icon: MapPin
    },
    {
      title: "Specialized Medical Team",
      description: "A team of paramedics and EMTs specializing in patient handling and transport logistics in Ajman.",
      icon: ShieldCheck
    },
    {
      title: "24/7 Availability",
      description: "Reliable around-the-clock medical transport service for the Ajman community.",
      icon: Clock
    },
    {
      title: "Medical Escort",
      description: "Professional medical accompaniment for patients requiring specialized attention during transit in Ajman.",
      icon: HeartPulse
    }
  ];

  const areas = [
    "Ajman City", "Al Nuaimiya", "Al Rashidiya", "Al Zahra", "Al Mowaihat", "Al Hamidiya",
    "Al Jurf", "Al Rawda", "Al Muntazi", "Al Yasmeen", "Al Zorah", "Emirates City",
    "Garden City", "Ittihad Village", "Al Mowaiqah", "Al Sawan", "Al Tallah", "Al Bustan"
  ];

  const faqs = [
    {
      question: "What is the response time for an ambulance in Ajman?",
      answer: "We typically reach most locations in Ajman within 15-30 minutes, ensuring fast medical assistance when you need it most."
    },
    {
      question: "Are your services in Ajman licensed?",
      answer: "Yes, our services comply with all MOH and UAE health authority regulations for private medical transport."
    },
    {
      question: "Do you handle inter-emirate transfers from Ajman?",
      answer: "Certainly. We specialized in transferring patients from Ajman to major hospitals in Dubai, Sharjah, and Abu Dhabi."
    },
    {
      question: "Can I schedule a discharge transport in Ajman?",
      answer: "Yes, you can pre-book our transport for hospital discharges to any residential area in Ajman or other emirates."
    }
  ];

  return (
    <ServicePageTemplate
      title="Non-Emergency Ambulance Service in Ajman | Trusted Private Ambulance"
      description="Professional ambulance services in Ajman with trained paramedics. Rapid response, patient transport, and medical escorts across all areas of Ajman. Call +971 55 472 8133"
      canonical="https://emrs.ae/ajman-ambulance-services/"

      imageAlt="Non-emergency ambulance service in Ajman"
      lastUpdated="2026-01-01"
      faqs={faqs}
      phoneNumber={"+971 55 472 8133"}
      relatedLinks={[
        { label: 'Dubai Ambulance Services', to: '/dubai-ambulance-services' },
        { label: 'Sharjah Ambulance Services', to: '/sharjah-ambulance-services' },
        { label: 'Umm Al Quwain Ambulance Services', to: '/umm-al-quwain-ambulance-services' }
      ]}
      hideHeader={true}
    >
      {/* Hero Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptMCAwdi02aC02djZoNnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-50"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-semibold mb-6">
              24/7 Private Medical Transport in Ajman
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Reliable Private Ambulance Services in Ajman
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 mb-8 leading-relaxed">
              Professional medical transport across all areas of Ajman. Urgent care support, inter-hospital transfers, and non-emergency patient transport. Our services operate under full <Link to="/licensing" className="underline hover:text-accent">MOH licensing</Link> with continuous <Link to="/medical-oversight" className="underline hover:text-accent">medical oversight</Link>.
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
                <a href="https://wa.me/971554728133" target="_blank" rel="noopener noreferrer nofollow" className="flex items-center gap-2">
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp Us
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-accent font-bold text-sm uppercase tracking-wide">Our Services</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-primary mt-4 mb-4">
                Ambulance Services in Ajman
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Comprehensive medical transport solutions for all healthcare needs
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow">
                  <service.icon className="w-12 h-12 text-accent mb-4" />
                  <h3 className="text-xl font-bold text-primary mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Area */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
                Areas We Serve in Ajman
              </h2>
              <p className="text-lg text-muted-foreground">
                We provide ambulance services to all areas across Ajman, including but not limited to:
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {areas.map((area, index) => (
                <div key={index} className="flex items-center gap-2 p-3 bg-white rounded-lg">
                  <MapPin className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-primary">{area}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <p className="text-muted-foreground">
                Don't see your area listed? We cover all of Ajman! Call us to confirm coverage.
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
              <span className="text-accent font-bold text-sm uppercase tracking-wide">Why Choose Us</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-primary mt-4 mb-6">
                Why EMRS is Ajman's Trusted Ambulance Service
              </h2>
            </div>
            <div className="space-y-6">
              <div className="flex flex-col md:flex-row gap-6 p-6 bg-gray-50 rounded-xl">
                <div className="w-full md:w-1/3">
                  <h3 className="text-xl font-bold text-primary mb-3">Rapid Response Times</h3>
                  <p className="text-muted-foreground">
                    Our strategically located ambulances ensure quick response times across Ajman, with an average response time of just 15-30 minutes.
                  </p>
                </div>
                <div className="w-full md:w-1/3">
                  <h3 className="text-xl font-bold text-primary mb-3">Trained Medical Professionals</h3>
                  <p className="text-muted-foreground">
                    Our team includes certified paramedics, EMTs, and medical professionals trained to handle all types of urgent medical situations.
                  </p>
                </div>
                <div className="w-full md:w-1/3">
                  <h3 className="text-xl font-bold text-primary mb-3">Advanced Equipment</h3>
                  <p className="text-muted-foreground">
                    Our ambulances are equipped with state-of-the-art medical equipment, including cardiac monitors, ventilators, and more.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Need an Ambulance in Ajman?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Our medical response team is available 24/7 to provide immediate assistance. Don't hesitate to call in case of any medical need.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-white font-bold text-lg px-8 py-6"
                asChild
              >
                <a href="tel:+971554728133" className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  Call: +971 55 472 8133
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white/10 font-bold text-lg px-8 py-6"
                asChild
              >
                <a href="https://wa.me/971554728133" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <MessageCircle className="w-5 h-5" />
                  Chat on WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </ServicePageTemplate>
  );
};

export default AjmanAmbulanceServices;
