import { Ambulance, Clock, MapPin, ShieldCheck, HeartPulse, Phone, MessageCircle, Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ServicePageTemplate from "@/templates/ServicePageTemplate";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";

const PrivateAmbulanceUAE = () => {
  const services = [
    { title: "Private Patient Transport", description: "Comfortable, discreet medical transport with trained paramedics for hospital visits, check-ups, and transfers.", icon: Ambulance },
    { title: "ICU Ambulance Transfer", description: "Critical care transport with ventilators, cardiac monitors, and ICU-trained nurses for inter-hospital transfers.", icon: HeartPulse },
    { title: "Scheduled Medical Transport", description: "Pre-booked ambulance for dialysis, chemotherapy, physiotherapy, and recurring hospital appointments.", icon: Clock },
    { title: "Airport Medical Escort", description: "Patient pick-up and drop-off at DXB, DWC, and AUH airports with medical clearance coordination.", icon: MapPin },
    { title: "Post-Surgery Discharge", description: "Safe transport home after surgery with medical monitoring and comfortable stretcher or wheelchair options.", icon: ShieldCheck },
    { title: "International Repatriation", description: "Cross-border medical transport and air ambulance coordination for patients needing international transfers.", icon: Ambulance },
  ];

  const faqs = [
    { question: "How much does a private ambulance cost in the UAE?", answer: "Private ambulance costs vary based on distance, type of care needed, and time of service. Contact us for a transparent quote — we have no hidden charges." },
    { question: "Is a private ambulance available 24/7 in Dubai?", answer: "Yes. EMRS operates 24/7 across all seven emirates including Dubai, Abu Dhabi, and Sharjah. Our dispatch team is always ready." },
    { question: "What is the difference between a private ambulance and government ambulance?", answer: "Government ambulances handle emergencies via 998. Private ambulances like EMRS handle scheduled transfers, non-emergency transport, hospital discharges, and medical escorts with dedicated, on-time service." },
    { question: "Can I book a private ambulance in advance?", answer: "Absolutely. We recommend booking 2-4 hours in advance for scheduled transport. Same-day bookings are also available subject to fleet availability." },
    { question: "Do private ambulances in UAE have paramedics?", answer: "Yes. Every EMRS ambulance is staffed with licensed paramedics or EMTs with DHA/DOH credentials. ICU transfers include critical care nurses." },
    { question: "Do you provide private ambulance services outside Dubai?", answer: "Yes. We serve all seven emirates — Dubai, Abu Dhabi, Sharjah, Ajman, RAK, Fujairah, and UAQ — plus inter-emirate transfers." },
  ];

  const areas = ["Dubai", "Abu Dhabi", "Sharjah", "Ajman", "Ras Al Khaimah", "Fujairah", "Umm Al Quwain", "Al Ain"];

  return (
    <ServicePageTemplate
      title="Private Ambulance Services UAE"
      seoTitle="Private Ambulance UAE | 24/7 Licensed Medical Transport"
      description="Book a private ambulance anywhere in the UAE. Licensed paramedics, ICU-equipped vehicles, and 24/7 dispatch for hospital transfers, patient transport, and medical escorts."
      canonical="https://emrs.ae/private-ambulance-uae/"
      imageAlt="Private ambulance service UAE - EMRS 24/7 medical transport"
      lastUpdated="2026-03-27"
      faqs={faqs}
      phoneNumber="+971 55 472 8133"
      relatedLinks={[
        { label: 'ICU Ambulance Dubai', to: '/icu-ambulance-dubai/' },
        { label: 'Patient Transfer Dubai', to: '/patient-transfer-service-dubai/' },
        { label: 'Book Ambulance Dubai', to: '/book-ambulance-dubai/' },
        { label: 'Ambulance Services UAE', to: '/ambulance-services-uae/' },
        { label: 'Dubai Ambulance Services', to: '/dubai-ambulance-services/' },
      ]}
      hideHeader={true}
      emirate="UAE"
    >
      {/* Hero */}
      <section className="py-20 sm:py-28 bg-gradient-to-br from-primary via-primary to-primary/90 text-white relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-semibold mb-6">Licensed Private Medical Transport</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 leading-tight">
              Private Ambulance Services Across the UAE
            </h1>
            <p className="text-xl text-white/85 mb-8 max-w-3xl mx-auto leading-relaxed">
              Need a <strong>private ambulance</strong>? EMRS provides licensed, professional medical transport 24/7 across all seven emirates. From hospital transfers to ICU transport — we handle it all with trained paramedics and fully equipped vehicles.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-bold text-lg px-8 py-6" asChild>
                <a href="tel:+971554728133" className="flex items-center gap-2">
                  <Phone className="w-5 h-5" /> Call +971 55 472 8133
                </a>
              </Button>
              <Button size="lg" className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-bold text-lg px-8 py-6 border border-white/20" asChild>
                <a href="https://wa.me/971554728133?text=Hi%2C%20I%20need%20a%20private%20ambulance" target="_blank" rel="noopener noreferrer nofollow" className="flex items-center gap-2">
                  <img src="/whatsapp.svg" alt="WhatsApp EMRS for private ambulance" width={20} height={20} className="w-5 h-5" />
                  WhatsApp Us
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What is Private Ambulance */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-black text-primary mb-6">What is a Private Ambulance?</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              A <strong>private ambulance</strong> is a licensed medical transport vehicle operated by a private healthcare company — like EMRS. Unlike government ambulances (reached via 998), private ambulances specialize in <strong>scheduled patient transfers</strong>, <strong>non-emergency medical transport</strong>, hospital discharge rides, and <strong>ICU ambulance transfers</strong>.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Private ambulances are ideal when you need reliable, on-time medical transport with professional care — whether it's a routine dialysis appointment or a critical inter-hospital ICU transfer. All our vehicles are <Link to="/licensing/" className="text-accent hover:underline font-semibold">DHA licensed</Link> and operated under strict <Link to="/medical-oversight/" className="text-accent hover:underline font-semibold">medical oversight</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-accent font-bold text-xs uppercase tracking-[0.2em]">Our Services</span>
              <h2 className="text-3xl sm:text-4xl font-black text-primary mt-3 mb-4">Private Ambulance Services We Offer</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((s, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 shadow-card hover:shadow-premium transition-all border border-transparent hover:border-accent/10">
                  <div className="mb-4 w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                    <s.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-lg font-bold text-primary mb-2">{s.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{s.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Who Needs */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-black text-primary mb-8">Who Needs a Private Ambulance in the UAE?</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Patients being discharged from hospital who need safe transport home",
                "Elderly patients needing wheelchair or stretcher transport",
                "Dialysis patients with recurring hospital appointments",
                "Post-surgery patients requiring monitored transport",
                "Families arranging inter-hospital transfers for better care",
                "Insurance companies coordinating patient repatriation",
                "Hotels and resorts needing medical transport for guests",
                "Event organizers requiring medical standby ambulances",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 bg-white rounded-xl p-4 shadow-card">
                  <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Coverage */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-black mb-8">We Cover All Seven Emirates</h2>
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {areas.map((area) => (
                <Link key={area} to={`/${area.toLowerCase().replace(/ /g, '-')}-ambulance-services/`} className="px-4 py-2 bg-white/10 hover:bg-accent/80 rounded-full text-sm font-medium border border-white/20 transition-all">
                  {area}
                </Link>
              ))}
            </div>
            <p className="text-white/70 mb-6">We also provide <strong className="text-white">inter-emirate transfers</strong> — Dubai to Abu Dhabi, Sharjah to RAK, and everywhere in between.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-accent/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black text-primary mb-4">Book a Private Ambulance Now</h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">Our dispatch team is ready 24/7. Call or WhatsApp for instant booking and transparent pricing.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-bold text-lg px-8 py-6" asChild>
              <a href="tel:+971554728133" className="flex items-center gap-2"><Phone className="w-5 h-5" /> Call +971 55 472 8133</a>
            </Button>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold text-lg px-8 py-6" asChild>
              <a href="https://wa.me/971554728133?text=Hi%2C%20I%20need%20a%20private%20ambulance" target="_blank" rel="noopener noreferrer nofollow" className="flex items-center gap-2">
                <img src="/whatsapp.svg" alt="WhatsApp private ambulance booking" width={20} height={20} className="w-5 h-5" /> WhatsApp Booking
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingContact />
    </ServicePageTemplate>
  );
};

export default PrivateAmbulanceUAE;
