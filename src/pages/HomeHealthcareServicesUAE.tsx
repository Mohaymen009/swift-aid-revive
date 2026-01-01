import Navigation from "@/components/Navigation";
import WhyChooseUs from "@/components/WhyChooseUs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import SEOHead from "@/components/SEOHead";
import ServicePageTemplate from "@/templates/ServicePageTemplate";
import { Heart, Clock, Users, Stethoscope, Activity, Pill, Phone, MessageCircle, Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HomeHealthcareServicesUAE = () => {
  const services = [
    {
      title: "Home Nursing Care",
      description: "Professional registered nurses providing skilled nursing care at home. Wound care, medication management, injections, catheter care, and more.",
      icon: Heart
    },
    {
      title: "Elderly Care at Home",
      description: "Compassionate care for seniors including assistance with daily activities, medication reminders, mobility support, and companionship.",
      icon: Users
    },
    {
      title: "Physiotherapy at Home",
      description: "Licensed physiotherapists providing rehabilitation therapy, post-surgical recovery, mobility exercises, and pain management at home.",
      icon: Activity
    },
    {
      title: "Post-Operative Care",
      description: "Specialized nursing care after surgery including wound management, medication administration, and recovery monitoring.",
      icon: Stethoscope
    },
    {
      title: "Chronic Disease Management",
      description: "Ongoing care for patients with diabetes, hypertension, COPD, and other chronic conditions. Regular monitoring and medication management.",
      icon: Pill
    },
    {
      title: "24/7 Live-In Care",
      description: "Round-the-clock nursing or caregiver support for patients requiring continuous care at home.",
      icon: Clock
    }
  ];

  const nursingServices = [
    "IV therapy and infusion",
    "Wound dressing and care",
    "Catheter insertion and care",
    "Tracheostomy care",
    "PEG tube feeding",
    "Insulin administration",
    "Blood pressure monitoring",
    "Blood sugar testing",
    "Oxygen therapy",
    "Medication administration",
    "Pain management",
    "Vital signs monitoring"
  ];

  const benefits = [
    {
      title: "Comfort of Home",
      description: "Receive professional care in familiar surroundings, reducing stress and promoting faster recovery."
    },
    {
      title: "Personalized Care",
      description: "One-on-one attention from dedicated healthcare professionals tailored to your specific needs."
    },
    {
      title: "Cost-Effective",
      description: "Often more affordable than extended hospital stays while maintaining quality care."
    },
    {
      title: "Family Involvement",
      description: "Family members can be actively involved in the care process, learning how to support their loved ones."
    }
  ];

  const faqs = [
    {
      question: "What types of nurses provide home healthcare?",
      answer: "We provide Registered Nurses (RN), Licensed Practical Nurses (LPN), and Certified Nursing Assistants (CNA) depending on the level of care required. All our nurses are licensed by UAE health authorities."
    },
    {
      question: "How do I know if home healthcare is right for my family member?",
      answer: "Home healthcare is ideal for patients recovering from surgery, those with chronic conditions, elderly individuals needing assistance, or anyone who prefers receiving care at home rather than in a facility."
    },
    {
      question: "Can home nurses administer IV medications?",
      answer: "Yes, our registered nurses are trained and licensed to administer IV medications, infusions, and other treatments as prescribed by physicians."
    },
    {
      question: "Do you provide care for patients with dementia or Alzheimer's?",
      answer: "Yes, we have specialized caregivers trained in dementia and Alzheimer's care, providing safe, compassionate support while maintaining the patient's dignity."
    },
    {
      question: "What are the costs of home healthcare services?",
      answer: "Costs vary based on the type of care needed and duration. Many insurance plans cover home healthcare services. Contact us for a personalized quote and insurance verification."
    },
    {
      question: "Can you provide care on weekends and holidays?",
      answer: "Yes, we provide home healthcare services 24/7, including weekends and public holidays. We understand healthcare needs don't follow a schedule."
    }
  ];

  return (
    <>
      <Navigation />
      <ServicePageTemplate
        title="Home Healthcare Services Dubai | Home Nursing UAE | EMRS"
<<<<<<< HEAD
        description="Professional home healthcare in UAE. Home nursing care, elderly care, physiotherapy at home, post-operative care. Licensed nurses in Dubai, Abu Dhabi, Sharjah. Call +971 4 576 8237"
=======
        description="Professional home healthcare in UAE. Home nursing care, elderly care, physiotherapy at home, post-operative care. Licensed nurses in Dubai, Abu Dhabi, Sharjah. Call +971 55 472 8133"
>>>>>>> b46613a (done)
        canonical="https://emrs.ae/home-healthcare-services-uae"
        imageUrl="/images/og/home-healthcare-services-uae.jpg"
        imageAlt="Home Healthcare Services in UAE by EMRS"
        lastUpdated="2026-01-01"
        faqs={faqs}
<<<<<<< HEAD
        phoneNumber={"+97145768237"}
=======
        phoneNumber={"+971 55 472 8133"}
        relatedLinks={[
          { label: 'Doctor on Call', to: '/doctor-on-call-uae' },
          { label: 'Wellness & Diagnostics', to: '/wellness-diagnostic-services-uae' },
          { label: 'Patient Transport (NEMT)', to: '/non-emergency-medical-transport-uae' }
        ]}
>>>>>>> b46613a (done)
      >
      {/* Hero Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptMCAwdi02aC02djZoNnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-50"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-semibold mb-6">
              Professional Care at Home
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Home Healthcare Services in UAE
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 mb-8 leading-relaxed">
              Professional home nursing, elderly care, physiotherapy, and post-operative care in the comfort of your home. Licensed healthcare professionals serving Dubai, Abu Dhabi, and all UAE emirates.
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
                Home Healthcare Services
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Comprehensive healthcare services delivered to your doorstep by licensed professionals
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

      {/* Nursing Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
                Skilled Nursing Services
              </h2>
              <p className="text-lg text-muted-foreground">
                Medical procedures and treatments our nurses can perform at your home
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {nursingServices.map((service, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-white rounded-lg">
                  <Check className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-primary">{service}</span>
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
              <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
                Benefits of Home Healthcare
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-primary mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Elderly Care */}
      <section className="py-16 bg-accent/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Users className="w-16 h-16 text-accent mx-auto mb-6" />
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-6">
              Elderly Care at Home
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our elderly care services provide compassionate, dignified support for seniors in their own homes. From assistance with daily activities to medication management and companionship, we help seniors maintain their independence while ensuring their safety and well-being.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto mb-8">
              {["Personal hygiene assistance", "Meal preparation", "Medication reminders", "Mobility support", "Companionship", "Light housekeeping"].map((item, index) => (
                <div key={index} className="flex items-center gap-2 justify-center">
                  <Check className="w-5 h-5 text-accent" />
                  <span className="text-primary">{item}</span>
                </div>
              ))}
            </div>
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-white font-bold"
              asChild
            >
              <a href="tel:+971554728133" className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Inquire About Elderly Care
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
                Common questions about home healthcare services
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
                <Link to="/non-emergency-medical-transport-uae" className="flex items-center gap-2">
                  Patient Transport <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/wellness-diagnostic-services-uae" className="flex items-center gap-2">
                  Diagnostic Services <ArrowRight className="w-4 h-4" />
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

export default HomeHealthcareServicesUAE;
