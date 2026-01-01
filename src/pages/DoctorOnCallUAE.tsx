import Navigation from "@/components/Navigation";
import WhyChooseUs from "@/components/WhyChooseUs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import SEOHead from "@/components/SEOHead";
<<<<<<< HEAD
import ServicePageTemplate from "@/templates/ServicePageTemplate";
=======
<<<<<<< HEAD
=======
import ServicePageTemplate from "@/templates/ServicePageTemplate";
>>>>>>> da8c317 (seo fix)
>>>>>>> b46613a (done)
import { Stethoscope, Clock, Home, Hotel, Briefcase, Baby, Phone, MessageCircle, Check, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

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
      description: "Round-the-clock availability for medical emergencies. Our doctors are available anytime, day or night, weekends and holidays.",
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

  return (
<<<<<<< HEAD
    <>
      <Navigation />
      <ServicePageTemplate
=======
<<<<<<< HEAD
    <div className="min-h-screen" id="home">
      <SEOHead 
>>>>>>> b46613a (done)
        title="Doctor on Call Dubai | 24/7 Home Doctor Visit UAE | EMRS"
        description="24/7 Doctor on Call in Dubai & UAE. Home doctor visits, hotel doctor service, VIP medical care. Licensed physicians available anytime. Call +971 4 576 8237"
        canonical="https://emrs.ae/doctor-on-call-uae"
        imageUrl="/images/og/doctor-on-call-uae.jpg"
        imageAlt="Doctor on Call in UAE by EMRS"
        lastUpdated="2026-01-01"
        faqs={faqs}
        phoneNumber={"+97145768237"}
        relatedLinks={[
          { label: 'Home Healthcare', to: '/home-healthcare-services-uae' },
          { label: 'Wellness & Diagnostics', to: '/wellness-diagnostic-services-uae' },
          { label: 'Ambulance Services', to: '/ambulance-services-uae' }
        ]}
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
                  className="bg-accent hover:bg-accent/90 text-white font-bold text-lg px-8 py-6"
                  asChild
                >
                  <a href="tel:+97145768237" className="flex items-center gap-2">
                    <Phone className="w-5 h-5" />
                    Call +971 4 576 8237
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
<<<<<<< HEAD
                className="bg-accent hover:bg-accent/90 text-white font-bold"
=======
                className="bg-accent hover:bg-accent/90 text-white font-bold text-lg px-8 py-6"
=======
    <>
      <Navigation />
      <ServicePageTemplate
        title="Doctor on Call Dubai | 24/7 Home Doctor Visit UAE | EMRS"
        description="24/7 Doctor on Call in Dubai & UAE. Home doctor visits, hotel doctor service, VIP medical care. Licensed physicians available anytime. Call +971 4 576 8237"
        canonical="https://emrs.ae/doctor-on-call-uae"
        imageUrl="/images/og/doctor-on-call-uae.jpg"
        imageAlt="Doctor on Call in UAE by EMRS"
        lastUpdated="2026-01-01"
        faqs={faqs}
        phoneNumber={"+97145768237"}
        relatedLinks={[
          { label: 'Home Healthcare', to: '/home-healthcare-services-uae' },
          { label: 'Wellness & Diagnostics', to: '/wellness-diagnostic-services-uae' },
          { label: 'Ambulance Services', to: '/ambulance-services-uae' }
        ]}
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
                  className="bg-accent hover:bg-accent/90 text-white font-bold text-lg px-8 py-6"
                  asChild
                >
                  <a href="tel:+97145768237" className="flex items-center gap-2">
                    <Phone className="w-5 h-5" />
                    Call +971 4 576 8237
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
                className="bg-accent hover:bg-accent/90 text-white font-bold"
>>>>>>> da8c317 (seo fix)
>>>>>>> b46613a (done)
                asChild
              >
                <a href="tel:+97145768237" className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
<<<<<<< HEAD
                  Request Hotel Doctor
=======
<<<<<<< HEAD
                  Call +971 4 576 8237
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
=======
                  Request Hotel Doctor
>>>>>>> da8c317 (seo fix)
>>>>>>> b46613a (done)
                </a>
              </Button>
            </div>
          </div>
<<<<<<< HEAD
        </section>
=======
<<<<<<< HEAD
        </div>
      </section>
>>>>>>> b46613a (done)

        {/* Service Areas */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <MapPin className="w-12 h-12 text-accent mx-auto mb-4" />
                <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
                  Areas We Serve
                </h2>
                <p className="text-lg text-muted-foreground">
                  Doctor on call services available across UAE
                </p>
              </div>
              <div className="flex flex-wrap gap-3 justify-center">
                {areas.map((area, index) => (
                  <span key={index} className="px-4 py-2 bg-gray-100 rounded-full text-primary font-medium">
                    {area}
                  </span>
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
                  Common questions about our doctor on call service
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

<<<<<<< HEAD
=======
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
              className="bg-accent hover:bg-accent/90 text-white font-bold"
              asChild
            >
              <a href="tel:+97145768237" className="flex items-center gap-2">
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
              <MapPin className="w-12 h-12 text-accent mx-auto mb-4" />
              <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
                Areas We Serve
              </h2>
              <p className="text-lg text-muted-foreground">
                Doctor on call services available across UAE
              </p>
            </div>
            <div className="flex flex-wrap gap-3 justify-center">
              {areas.map((area, index) => (
                <span key={index} className="px-4 py-2 bg-gray-100 rounded-full text-primary font-medium">
                  {area}
                </span>
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
                Common questions about our doctor on call service
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

      <WhyChooseUs />
      <Contact />
      <Footer />
      <FloatingContact />
    </div>
=======
        </section>

        {/* Service Areas */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <MapPin className="w-12 h-12 text-accent mx-auto mb-4" />
                <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
                  Areas We Serve
                </h2>
                <p className="text-lg text-muted-foreground">
                  Doctor on call services available across UAE
                </p>
              </div>
              <div className="flex flex-wrap gap-3 justify-center">
                {areas.map((area, index) => (
                  <span key={index} className="px-4 py-2 bg-gray-100 rounded-full text-primary font-medium">
                    {area}
                  </span>
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
                  Common questions about our doctor on call service
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

>>>>>>> b46613a (done)
        <WhyChooseUs />
        <Contact />
        <Footer />
        <FloatingContact />
      </ServicePageTemplate>
    </>
<<<<<<< HEAD
=======
>>>>>>> da8c317 (seo fix)
>>>>>>> b46613a (done)
  );
};

export default DoctorOnCallUAE;
