import { Stethoscope, Clock, Home, Hotel, Briefcase, Baby, Phone, MessageCircle, Check, MapPin, User, Calendar, HeartPulse, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import ServicePageTemplate from "@/templates/ServicePageTemplate";
import { Link } from "react-router-dom";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const DoctorOnCallUAE = () => {
  const services = [
    {
      title: "Doctor Home Visits",
      description: "Professional doctors visit your home for consultations, examinations, and treatment. Perfect for those who cannot travel to clinics.",
      icon: Home
    },
    {
      title: "Hotel Doctor Services",
      description: "VIP medical services for tourists and business travelers at hotels across UAE. Discreet and professional healthcare in your hotel room.",
      icon: Hotel
    },
    {
      title: "Corporate Healthcare",
      description: "On-site medical services for corporate offices and events. Employee health check-ups, vaccinations, and medical consultations.",
      icon: Briefcase
    },
    {
      title: "Pediatric Home Visits",
      description: "Specialized doctors for children's healthcare at home. Convenient care for sick children without the stress of hospital visits.",
      icon: Baby
    },
    {
      title: "24/7 On-Call Doctors",
      description: "Round-the-clock availability for urgent medical needs. Our doctors are available anytime, day or night, weekends and holidays.",
      icon: Clock
    },
    {
      title: "Specialist Consultations",
      description: "Access to specialists including cardiologists, dermatologists, and general practitioners for home consultations.",
      icon: Stethoscope
    }
  ];

  const treatableConditions = [
    "Fever and flu symptoms",
    "Respiratory infections",
    "Stomach issues and food poisoning",
    "Minor injuries and wounds",
    "Allergic reactions",
    "Skin conditions",
    "Urinary tract infections",
    "Blood pressure monitoring",
    "Diabetes management",
    "Post-operative care",
    "IV therapy and hydration",
    "Medication administration"
  ];

  const areas = [
    "Dubai Marina", "Downtown Dubai", "Palm Jumeirah", "JBR", "Business Bay",
    "DIFC", "Jumeirah", "Al Barsha", "Dubai Hills", "Arabian Ranches",
    "Abu Dhabi City", "Yas Island", "Saadiyat Island", "Al Reem Island",
    "Sharjah", "Ajman", "Ras Al Khaimah", "Fujairah"
  ];

  const faqs = [
    {
      question: "How quickly can a doctor reach me?",
      answer: "Our doctors typically arrive within 45-90 minutes in Dubai, depending on your location and traffic conditions. We prioritize urgent cases for faster response."
    },
    {
      question: "What can a doctor on call treat at home?",
      answer: "Our doctors can treat common conditions like fever, flu, infections, minor injuries, stomach issues, allergies, and provide IV therapy. They can also prescribe medications and arrange hospital referrals if needed."
    },
    {
      question: "Do you provide doctor services at hotels?",
      answer: "Yes, we provide VIP doctor services to all major hotels in Dubai, Abu Dhabi, and other emirates. We understand the needs of travelers and offer discreet, professional healthcare."
    },
    {
      question: "Is the doctor on call service available 24/7?",
      answer: "Yes, our doctor on call service is available 24 hours a day, 7 days a week, including weekends and public holidays."
    },
    {
      question: "Do you accept insurance for home doctor visits?",
      answer: "We work with most major insurance providers in UAE. We can check your coverage and arrange direct billing where available."
    },
    {
      question: "Can the doctor bring medications?",
      answer: "Our doctors carry commonly prescribed medications and can administer treatments on-site. For specific prescriptions, they can provide a prescription that can be filled at any pharmacy."
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
      title="Doctor on Call UAE | Licensed Home & Hotel Doctor Visits 24/7"
      description="24/7 Doctor on Call in Dubai & UAE. Home doctor visits, hotel doctor service, VIP medical care. Licensed physicians available anytime. Call +971 55 472 8133"
      canonical="https://www.emrs.ae/doctor-on-call-uae"
      imageUrl="/images/og/doctor-on-call-uae.jpg"
      imageAlt="Doctor on Call in UAE by EMRS"
      lastUpdated="2026-01-01"
      faqs={faqs}
      phoneNumber={"+971 55 472 8133"}
      relatedLinks={[
        { label: 'Ambulance Services', to: '/ambulance-services-uae' },
        { label: 'Home Healthcare', to: '/home-healthcare-services-uae' },
        { label: 'Wellness & Diagnostics', to: '/wellness-diagnostic-services-uae' }
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
              24/7 Medical Care at Your Location
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Doctor on Call in Dubai & UAE
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 mb-8 leading-relaxed">
              Licensed doctors available 24/7 for home visits, hotel calls, and on-site medical care. Professional healthcare wherever you need it, whenever you need it.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-[#A83300] hover:bg-[#8A2A00] text-white font-bold text-lg px-8 py-6"
                asChild
              >
                <a href="tel:+971554728133" className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  Call Now
                </a>
              </Button>
              <Button
                size="lg"
                className="bg-[#11632B] hover:bg-[#0D4D21] text-white font-bold text-lg px-8 py-6"
                asChild
              >
                <a href="https://wa.me/971554728133?text=Hi%20%F0%9F%91%8B%2C%20I%E2%80%99m%20interested%20in%20your%20Doctor%20on%20Call%20service." target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <img src="/whatsapp.svg" alt="WhatsApp Support" width={20} height={20} className="w-5 h-5" />
                  WhatsApp
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
                Doctor on Call Services
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Professional medical care delivered to your doorstep by licensed physicians
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

      {/* Treatable Conditions */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
                Conditions We Treat at Home
              </h2>
              <p className="text-lg text-muted-foreground">
                Our doctors can diagnose and treat a wide range of conditions during home visits
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {treatableConditions.map((condition, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-white rounded-lg">
                  <Check className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-primary">{condition}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Hotel Doctor Service */}
      <section className="py-16 bg-accent/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Hotel className="w-16 h-16 text-accent mx-auto mb-6" />
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-6">
              VIP Hotel Doctor Service
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Traveling to Dubai or other UAE emirates? Our VIP hotel doctor service provides discreet, professional medical care in the comfort of your hotel room. We serve all major hotels including Burj Al Arab, Atlantis, Four Seasons, Ritz-Carlton, and more.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Services include general consultations, IV hydration therapy, minor treatments, and prescription services. Our doctors are multilingual and experienced in treating international patients.
            </p>
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-white font-bold text-lg px-8 py-6"
              asChild
            >
              <a href="tel:+971554728133" className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Request Hotel Doctor
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <MapPin className="w-16 h-16 text-accent mx-auto mb-6" />
              <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-6">
                Professional Doctor Home Visit Services
              </h2>
              <p className="text-lg text-muted-foreground">
                Our doctor on call service is available across all emirates in the UAE
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {areas.map((area, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg text-center">
                  <span className="text-primary">{area}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
                Why Choose EMRS Doctor on Call
              </h2>
              <p className="text-lg text-muted-foreground">
                Professional medical care delivered to your doorstep
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "24/7 Availability", description: "Our doctors are available round the clock, 365 days a year, including weekends and public holidays." },
                { title: "DHA/HAAD/MOH Licensed", description: "All our doctors are fully licensed with extensive experience in emergency and general medicine." },
                { title: "Quick Response", description: "Average response time of 45-90 minutes in Dubai, depending on your location and traffic conditions." },
                { title: "Multilingual Staff", description: "Our medical team speaks multiple languages including English, Arabic, Hindi, Urdu, and Tagalog." },
                { title: "Insurance Support", description: "We work with most major insurance providers and can assist with direct billing where available." },
                { title: "Comprehensive Care", description: "From general consultations to specialized treatments, we provide a wide range of medical services at your location." }
              ].map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                  <ShieldCheck className="w-8 h-8 text-accent mb-3" />
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
                Find answers to common questions about our doctor on call service
              </p>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold text-primary mb-2">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Need a Doctor Now?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Call us 24/7 for immediate medical assistance or to book a doctor visit
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
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white/10 font-bold text-lg px-8 py-6"
              asChild
            >
              <a href="https://wa.me/971554728133" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <MessageCircle className="w-5 h-5" />
                WhatsApp Us
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Contact />
      <Footer />
    </ServicePageTemplate>
  );
};

export default DoctorOnCallUAE;
