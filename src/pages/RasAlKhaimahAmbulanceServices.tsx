import { Ambulance, Clock, MapPin, ShieldCheck, Users, HeartPulse, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import ServicePageTemplate from "@/templates/ServicePageTemplate";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";

const RasAlKhaimahAmbulanceServices = () => {
  const services = [
    {
      title: "RAK Medical Response",
      description: "Round-the-clock medical response and patient transport services for the Ras Al Khaimah community.",
      icon: Ambulance
    },
    {
      title: "Patient Transfers",
      description: "Safe transport to and from RAK medical facilities, including Al Hamra and northern areas.",
      icon: Users
    },
    {
      title: "Inter-Emirate Transport",
      description: "Professional medical transfers from RAK to specialized hospitals in Dubai and Sharjah.",
      icon: MapPin
    },
    {
      title: "Paramedic Support",
      description: "Qualified medical staff providing care during transit for all types of patient transfers in RAK.",
      icon: ShieldCheck
    }
  ];

  const faqs = [
    {
      question: "Do you cover Al Hamra area in Ras Al Khaimah?",
      answer: "Yes, we provide full coverage for Al Hamra Village, Al Hamra Mall area, Khuzam, Al Nakheel, and all northern communities of RAK. Our team is familiar with all neighborhoods for quick access."
    },
    {
      question: "How long is the transfer from RAK to Dubai?",
      answer: "A typical medical transfer from RAK to Dubai takes between 60 to 90 minutes, depending on the specific location and traffic. We manage the logistics to ensure the most efficient route."
    },
    {
      question: "Can I book a return trip from the hospital?",
      answer: "Yes, we offer round-trip services for medical appointments, dialysis sessions, and hospital discharges. Our team will wait or return at a scheduled time to bring you back home safely."
    },
    {
      question: "Do you accept health insurance?",
      answer: "We work with many insurance providers. However, coverage depends on your specific policy. We can provide an invoice for reimbursement if direct billing is not available."
    },
    {
      question: "Is oxygen available in the ambulance?",
      answer: "Yes, all our ambulances are equipped with O2 cylinders and delivery systems. For patients requiring oxygen therapy, please inform us during booking so we can prepare accordingly."
    }
  ];

  const areas = [
    "Al Nakheel", "Al Hamra Village", "Mina Al Arab", "Khuzam", "Al Dhait", "Al Rams",
    "Julphar", "Al Jeer", "Sham", "Al Kharan", "Digdaga", "Khatt"
  ];

  return (
    <ServicePageTemplate
      title="Professional Ambulance Service in Ras Al Khaimah | EMRS"
      description="EMRS provides professional ambulance services in Ras Al Khaimah. Reliable patient transport and inter-emirate medical transfers in RAK. Call +971 55 472 8133"
      canonical="https://emrs.ae/ras-al-khaimah-ambulance-services/"

      faqs={faqs}
      phoneNumber={"+971 55 472 8133"}
      hideHeader={true}
    >
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-white relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">Ambulance Services in Ras Al Khaimah</h1>
          <p className="text-xl sm:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            Providing professional medical transport across all areas of Ras Al Khaimah.
            From local patient transfers to long-distance medical escorts, we ensure safety and comfort.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-accent hover:bg-accent/90 font-bold" asChild>
              <a href="tel:+971554728133">Call +971 55 472 8133</a>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 font-bold" asChild>
              <a href="https://wa.me/971554728133" target="_blank" rel="noopener noreferrer nofollow">WhatsApp Us</a>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-accent font-bold text-sm uppercase tracking-wide">Our Services</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mt-4 mb-4">
              Complete Medical Mobility Solutions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We offer a range of transport options tailored to the specific needs of patients in Ras Al Khaimah.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={index} className="p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow">
                <service.icon className="w-10 h-10 text-accent mb-4" />
                <h3 className="text-xl font-bold text-primary mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Area */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
                Areas We Serve in Ras Al Khaimah
              </h2>
              <p className="text-lg text-muted-foreground">
                We are proud to serve the entire Emirate of Ras Al Khaimah, providing timely medical access to:
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {areas.map((area, index) => (
                <div key={index} className="flex items-center gap-2 p-3 bg-white rounded-lg shadow-sm">
                  <MapPin className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-primary">{area}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <p className="text-muted-foreground">
                Including mountainous regions and coastal communities.
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
              <span className="text-accent font-bold text-sm uppercase tracking-wide">The EMRS Advantage</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-primary mt-4 mb-6">
                Why Choose Our Ambulance Service in RAK?
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 border border-gray-100 rounded-xl text-center">
                <Clock className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-bold text-primary mb-3">24/7 Availability</h3>
                <p className="text-muted-foreground">
                  We operate day and night, weekends and holidays, to ensure you are never without support.
                </p>
              </div>
              <div className="p-6 border border-gray-100 rounded-xl text-center">
                <ShieldCheck className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-bold text-primary mb-3">Experienced Team</h3>
                <p className="text-muted-foreground">
                  Our drivers and medical staff know Ras Al Khaimah's roads and hospital procedures extensively.
                </p>
              </div>
              <div className="p-6 border border-gray-100 rounded-xl text-center">
                <HeartPulse className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-bold text-primary mb-3">Modern Fleet</h3>
                <p className="text-muted-foreground">
                  Our ambulances are well-maintained, sanitized, and equipped with the latest medical technology.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingContact />
    </ServicePageTemplate>
  );
};

export default RasAlKhaimahAmbulanceServices;
