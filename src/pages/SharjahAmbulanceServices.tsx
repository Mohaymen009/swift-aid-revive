import { Ambulance, Clock, MapPin, ShieldCheck, Users, HeartPulse, Phone, MessageCircle, Calendar, Home, Hotel, Briefcase, Baby, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import ServicePageTemplate from "@/templates/ServicePageTemplate";
import { Link } from "react-router-dom";

const SharjahAmbulanceServices = () => {
  const services = [
    {
      title: "Rapid Response Ambulance",
      description: "24/7 rapid medical response with advanced life support (ALS) and basic life support (BLS) units across Sharjah.",
      icon: Ambulance
    },
    {
      title: "Patient Transport",
      description: "Direct and safe patient transportation for clinics and medical centers throughout the Sharjah emirate.",
      icon: Users
    },
    {
      title: "Inter-Hospital Transfer",
      description: "Professional medical transfers within Sharjah and to facilities in neighboring emirates with full care.",
      icon: MapPin
    },
    {
      title: "Specialized Medical Team",
      description: "Experienced paramedics and emergency medical technicians for all types of medical transport.",
      icon: ShieldCheck
    },
    {
      title: "24/7 Availability",
      description: "Round-the-clock service, including weekends and public holidays.",
      icon: Clock
    },
    {
      title: "Medical Escort",
      description: "Trained medical personnel accompanying patients requiring continuous care during transit.",
      icon: HeartPulse
    }
  ];

  const areas = [
    "Sharjah City", "Al Khan", "Al Majaz", "Al Nahda", "Al Qasimia", "Al Taawun",
    "Al Nahda", "Al Majaz", "Al Qasba", "Al Rolla", "Al Majaz 3", "Al Khan Lagoon",
    "Al Mamzar", "Abu Shagara", "Al Gharayen", "Al Yarmook", "Al Rahmania", "Al Nud", "Al Khezamia", "Al Saja'a"
  ];

  const faqs = [
    {
      question: "How quickly can an ambulance reach me in Sharjah?",
      answer: "Our average response time in Sharjah is 20-35 minutes, depending on your location and traffic conditions. We prioritize critical cases for the fastest response."
    },
    {
      question: "Do you provide ambulance services for events in Sharjah?",
      answer: "Yes, we provide medical coverage for events, conferences, and corporate functions throughout Sharjah with fully equipped ambulances and trained medical staff."
    },
    {
      question: "Can I book an ambulance in advance for a non-emergency in Sharjah?",
      answer: "Absolutely. We recommend booking non-emergency transports at least 2-4 hours in advance to ensure vehicle and staff availability."
    },
    {
      question: "What areas in Sharjah do you cover?",
      answer: "We cover all areas of Sharjah including but not limited to Sharjah City, Al Khan, Al Majaz, Al Nahda, and other communities across the emirate."
    },
    {
      question: "Do you have female paramedics available?",
      answer: "Yes, we can arrange for female paramedics upon request, subject to availability. Please mention this requirement when booking."
    },
    {
      question: "Can family members accompany the patient in the ambulance?",
      answer: "In most cases, one family member can accompany the patient, depending on the medical condition and available space in the ambulance."
    }
  ];

  return (
    <ServicePageTemplate
      title="Non-Emergency Ambulance Service in Sharjah | Professional Patient Transfers"
      description="Professional ambulance services in Sharjah with trained paramedics. Rapid response, patient transport, and medical escorts across all areas of Sharjah. Call +971 55 472 8133"
      canonical="https://www.emrs.ae/sharjah-ambulance-services"
      imageUrl="/images/og/sharjah-ambulance-services.jpg"
      imageAlt="Non-emergency ambulance service in Sharjah"
      lastUpdated="2026-01-01"
      faqs={faqs}
      phoneNumber={"+971 55 472 8133"}
      relatedLinks={[
        { label: 'Dubai Ambulance Services', to: '/dubai-ambulance-services' },
        { label: 'Abu Dhabi Ambulance Services', to: '/abu-dhabi-ambulance-services' },
        { label: 'Ajman Ambulance Services', to: '/ajman-ambulance-services' }
      ]}
      hideHeader={true}
    >
      {/* Hero Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptMCAwdi02aC02djZoNnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-50"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-semibold mb-6">
              24/7 Private Medical Transport in Sharjah
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Reliable Private Ambulance Services in Sharjah
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 mb-8 leading-relaxed">
              Professional medical transport across all areas of Sharjah. Urgent care support, inter-hospital transfers, and non-emergency patient transport. Our services operate under full <Link to="/licensing" className="underline hover:text-accent">MOH licensing</Link> with continuous <Link to="/medical-oversight" className="underline hover:text-accent">medical oversight</Link>.
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

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-accent font-bold text-sm uppercase tracking-wide">Our Services</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-primary mt-4 mb-4">
                Ambulance Services in Sharjah
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
                Areas We Serve in Sharjah
              </h2>
              <p className="text-lg text-muted-foreground">
                We provide ambulance services to all areas across Sharjah, including but not limited to:
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
                Don't see your area listed? We cover all of Sharjah! Call us to confirm coverage.
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
                Why EMRS is Sharjah's Trusted Ambulance Service
              </h2>
            </div>
            <div className="space-y-6">
              <div className="flex flex-col md:flex-row gap-6 p-6 bg-gray-50 rounded-xl">
                <div className="w-full md:w-1/3">
                  <h3 className="text-xl font-bold text-primary mb-3">Rapid Response Times</h3>
                  <p className="text-muted-foreground">
                    Our strategically located ambulances ensure quick response times across Sharjah, with an average response time of just 20-35 minutes.
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
              Need an Ambulance in Sharjah?
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

export default SharjahAmbulanceServices;
