import Navigation from "@/components/Navigation";
import WhyChooseUs from "@/components/WhyChooseUs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import SEOHead from "@/components/SEOHead";
import ServicePageTemplate from "@/templates/ServicePageTemplate";
import { Droplet, Syringe, Heart, Activity, Thermometer, TestTube, Phone, MessageCircle, Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const WellnessDiagnosticServicesUAE = () => {
  const services = [
    {
      title: "Blood Tests at Home",
      description: "Complete blood work including CBC, liver function, kidney function, thyroid panel, and more. Professional phlebotomists collect samples at your doorstep.",
      icon: Droplet
    },
    {
      title: "IV Therapy at Home",
      description: "Vitamin infusions, hydration therapy, immune boosting, and hangover recovery IV drips administered by licensed nurses in your home or hotel.",
      icon: Syringe
    },
    {
      title: "Health Check-ups",
      description: "Comprehensive health screenings including vital signs, basic diagnostics, and wellness assessments. Executive health packages available.",
      icon: Heart
    },
    {
      title: "ECG at Home",
      description: "Electrocardiogram testing in the comfort of your home. Quick, non-invasive cardiac monitoring with immediate results.",
      icon: Activity
    },
    {
      title: "Vaccination Services",
      description: "Flu shots, travel vaccines, HPV, hepatitis, and other vaccinations administered at home or office by qualified healthcare professionals.",
      icon: Thermometer
    },
    {
      title: "COVID-19 Testing",
      description: "PCR tests and rapid antigen tests at your location. Fast results for travel, work, or personal peace of mind.",
      icon: TestTube
    }
  ];

  const bloodTests = [
    "Complete Blood Count (CBC)",
    "Lipid Profile (Cholesterol)",
    "Liver Function Tests (LFT)",
    "Kidney Function Tests (KFT)",
    "Thyroid Profile (T3, T4, TSH)",
    "Diabetes Panel (HbA1c, Fasting Glucose)",
    "Vitamin D & B12 Levels",
    "Iron Studies",
    "Hormone Panels",
    "Allergy Testing",
    "STD Screening",
    "Tumor Markers"
  ];

  const ivTherapyTypes = [
    {
      name: "Hydration Therapy",
      description: "Combat dehydration with essential fluids and electrolytes. Perfect after illness, travel, or exercise."
    },
    {
      name: "Vitamin C Boost",
      description: "High-dose vitamin C infusion for immune system support and overall wellness."
    },
    {
      name: "Energy Boost",
      description: "B-vitamin complex infusion to combat fatigue and improve energy levels."
    },
    {
      name: "Hangover Recovery",
      description: "Rapid recovery IV with fluids, vitamins, and anti-nausea medication."
    },
    {
      name: "Beauty Drip",
      description: "Glutathione and vitamin infusions for skin health and radiance."
    },
    {
      name: "Immune Defense",
      description: "Zinc, vitamin C, and antioxidants to strengthen your immune system."
    }
  ];

  const faqs = [
    {
      question: "How do home blood tests work?",
      answer: "Our licensed phlebotomist visits your location at your preferred time, collects blood samples using sterile equipment, and sends them to accredited labs. Results are typically available within 24-48 hours."
    },
    {
      question: "Is IV therapy at home safe?",
      answer: "Yes, when administered by qualified nurses. All our IV therapies are performed by licensed nurses using sterile equipment and pharmaceutical-grade solutions. We follow strict medical protocols."
    },
    {
      question: "Do you offer corporate wellness services?",
      answer: "Yes, we provide on-site corporate wellness programs including health screenings, vaccination drives, and wellness workshops for companies across UAE."
    },
    {
      question: "How quickly can I get my blood test results?",
      answer: "Most routine blood tests have results within 24-48 hours. Some specialized tests may take longer. We send results directly to your email or WhatsApp."
    },
    {
      question: "Can I get a health check-up at home?",
      answer: "Yes, we offer comprehensive home health check-ups including vital signs monitoring, blood tests, ECG, and consultation with our healthcare team."
    },
    {
      question: "Do you provide services at hotels?",
      answer: "Absolutely! We offer all our diagnostic and wellness services at hotels across UAE. IV therapy is particularly popular among tourists and business travelers."
    }
  ];

  return (
    <>
      <Navigation />
      <ServicePageTemplate
        title="Blood Test at Home Dubai | IV Therapy UAE | Wellness Services | EMRS"
        description="Home blood tests, IV therapy, health check-ups in Dubai & UAE. Lab tests at home, vitamin drips, vaccination services. Licensed healthcare at your doorstep. Call +971 55 472 8133"
        canonical="https://emrs.ae/wellness-diagnostic-services-uae"
        imageUrl="/images/og/wellness-diagnostic-services-uae.jpg"
        imageAlt="Wellness and Diagnostic Services in UAE by EMRS"
        lastUpdated="2026-01-01"
        faqs={faqs}
        phoneNumber={"+971 55 472 8133"}
        relatedLinks={[
          { label: 'Doctor on Call', to: '/doctor-on-call-uae' },
          { label: 'Home Healthcare', to: '/home-healthcare-services-uae' },
          { label: 'Ambulance Services', to: '/ambulance-services-uae' }
        ]}
      >
      {/* Hero Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptMCAwdi02aC02djZoNnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-50"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-semibold mb-6">
              Lab Tests & Wellness at Your Doorstep
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Wellness & Diagnostic Services in UAE
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 mb-8 leading-relaxed">
              Blood tests at home, IV therapy, health check-ups, and vaccination services. Professional diagnostic care delivered to your home, office, or hotel across Dubai and UAE.
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
                className="bg-[#25D366] hover:bg-[#20BD5A] text-white font-bold text-lg px-8 py-6"
                asChild
              >
                <a href="https://wa.me/971554728133?text=Hi%20%F0%9F%91%8B%2C%20I%E2%80%99m%20interested%20in%20your%20services." target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <img src="/whatsapp.png" alt="WhatsApp" className="w-5 h-5" />
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
                Diagnostic & Wellness Services
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Professional healthcare and diagnostic services in the comfort of your home
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

      {/* Blood Tests */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Droplet className="w-12 h-12 text-accent mx-auto mb-4" />
              <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
                Blood Tests at Home
              </h2>
              <p className="text-lg text-muted-foreground">
                Complete range of laboratory tests available at your doorstep
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {bloodTests.map((test, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-white rounded-lg">
                  <Check className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-primary">{test}</span>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <Button size="lg" className="bg-accent hover:bg-accent/90" asChild>
                <a href="tel:+971554728133">Book Blood Test</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* IV Therapy */}
      <section className="py-16 bg-accent/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Syringe className="w-12 h-12 text-accent mx-auto mb-4" />
              <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
                IV Therapy at Home
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Revitalize your body with vitamin and hydration infusions. Popular among tourists, executives, and wellness enthusiasts in Dubai.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {ivTherapyTypes.map((therapy, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-lg font-bold text-primary mb-2">{therapy.name}</h3>
                  <p className="text-muted-foreground text-sm">{therapy.description}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <Button size="lg" className="bg-accent hover:bg-accent/90" asChild>
                <a href="https://wa.me/971554728133" target="_blank" rel="noopener noreferrer">
                  Book IV Therapy
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Wellness */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-6">
              Corporate Wellness Programs
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Keep your workforce healthy with our on-site corporate wellness services. We provide health screenings, flu vaccination drives, executive health check-ups, and wellness workshops at your office location.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {["Health Screenings", "Flu Vaccination", "Executive Check-ups", "Wellness Workshops"].map((item, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg">
                  <span className="text-primary font-medium">{item}</span>
                </div>
              ))}
            </div>
            <Button variant="outline" asChild>
              <a href="tel:+971554728133">Inquire About Corporate Programs</a>
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
                Common questions about our wellness and diagnostic services
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
                <Link to="/doctor-on-call-uae" className="flex items-center gap-2">
                  Doctor on Call <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/home-healthcare-services-uae" className="flex items-center gap-2">
                  Home Healthcare <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/ambulance-services-uae" className="flex items-center gap-2">
                  Ambulance Services <ArrowRight className="w-4 h-4" />
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

export default WellnessDiagnosticServicesUAE;
