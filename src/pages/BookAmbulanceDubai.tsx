import { Phone, Clock, Check, MapPin, ShieldCheck, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ServicePageTemplate from "@/templates/ServicePageTemplate";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";

const BookAmbulanceDubai = () => {
  const faqs = [
    { question: "How do I book an ambulance in Dubai?", answer: "Call EMRS at +971 55 472 8133 or WhatsApp us. Tell us the patient's condition, pick-up location, and destination. We'll dispatch the right vehicle within minutes." },
    { question: "Can I book an ambulance online in Dubai?", answer: "Yes — WhatsApp us at +971 55 472 8133 for instant booking. You can also call our 24/7 dispatch line for immediate assistance." },
    { question: "How much does it cost to book an ambulance in Dubai?", answer: "Pricing depends on the type of ambulance (basic or ICU), distance, and time of service. We provide upfront transparent quotes with no hidden charges." },
    { question: "How quickly can an ambulance arrive after booking?", answer: "For urgent requests in Dubai, we can dispatch within 15-30 minutes. Scheduled bookings should be made 2-4 hours in advance." },
    { question: "Can I book an ambulance for someone else?", answer: "Absolutely. Family members, hospitals, hotels, and insurance companies frequently book ambulances on behalf of patients." },
    { question: "What if I need to cancel or reschedule?", answer: "We understand plans change. Contact us as soon as possible to reschedule or cancel. We're flexible and will work with your timeline." },
  ];

  return (
    <ServicePageTemplate
      title="Book Ambulance Dubai"
      seoTitle="Book Ambulance Dubai | Call or WhatsApp 24/7"
      description="Book a private ambulance in Dubai instantly. Call +971 55 472 8133 or WhatsApp for 24/7 medical transport, patient transfers, and ambulance hire in Dubai."
      canonical="https://emrs.ae/book-ambulance-dubai/"
      imageAlt="Book ambulance Dubai - EMRS instant booking"
      lastUpdated="2026-03-27"
      faqs={faqs}
      phoneNumber="+971 55 472 8133"
      relatedLinks={[
        { label: 'Private Ambulance UAE', to: '/private-ambulance-uae/' },
        { label: 'ICU Ambulance Dubai', to: '/icu-ambulance-dubai/' },
        { label: 'Patient Transfer Dubai', to: '/patient-transfer-service-dubai/' },
        { label: 'Dubai Ambulance Services', to: '/dubai-ambulance-services/' },
        { label: 'Non-Emergency Transport', to: '/non-emergency-medical-transport-uae/' },
      ]}
      hideHeader={true}
      emirate="Dubai"
    >
      {/* Hero */}
      <section className="py-20 sm:py-28 bg-gradient-to-br from-primary via-primary to-primary/90 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-semibold mb-6">Instant Ambulance Booking</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 leading-tight">
              Book an Ambulance in Dubai
            </h1>
            <p className="text-xl text-white/85 mb-8 max-w-3xl mx-auto leading-relaxed">
              Need to <strong>book an ambulance in Dubai</strong>? Call or WhatsApp EMRS for instant 24/7 medical transport. Licensed paramedics, fully equipped vehicles, and transparent pricing.
            </p>

            {/* Big CTA */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 max-w-xl mx-auto mb-8">
              <p className="text-white/80 text-sm mb-4">Call our 24/7 dispatch line:</p>
              <a href="tel:+971554728133" className="text-4xl sm:text-5xl font-black text-accent hover:text-accent/80 transition-colors block mb-4">
                +971 55 472 8133
              </a>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-bold text-lg flex-1 py-6" asChild>
                  <a href="tel:+971554728133" className="flex items-center justify-center gap-2"><Phone className="w-5 h-5" /> Call Now</a>
                </Button>
                <Button size="lg" className="bg-[#11632B] hover:bg-[#0D4D21] text-white font-bold text-lg flex-1 py-6" asChild>
                  <a href="https://wa.me/971554728133?text=Hi%2C%20I%20need%20to%20book%20an%20ambulance" target="_blank" rel="noopener noreferrer nofollow" className="flex items-center justify-center gap-2">
                    <img src="/whatsapp.svg" alt="WhatsApp ambulance booking" width={20} height={20} className="w-5 h-5" /> WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Book */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-black text-primary mb-8 text-center">How to Book an Ambulance in Dubai</h2>
            <div className="grid sm:grid-cols-3 gap-6">
              {[
                { step: "1", title: "Call or WhatsApp", desc: "Contact us at +971 55 472 8133. Tell us the patient's condition and location." },
                { step: "2", title: "Get a Quote", desc: "We provide an instant, transparent price with no hidden charges." },
                { step: "3", title: "Ambulance Dispatched", desc: "Our nearest ambulance with trained paramedics is dispatched to your location." },
              ].map((s, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 shadow-card text-center">
                  <div className="w-14 h-14 rounded-full bg-accent mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white font-black text-xl">{s.step}</span>
                  </div>
                  <h3 className="text-lg font-bold text-primary mb-2">{s.title}</h3>
                  <p className="text-muted-foreground text-sm">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What You Can Book */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-black text-primary mb-6">What Can You Book?</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Basic ambulance for hospital discharge",
                "ICU ambulance with ventilator and cardiac monitor",
                "Wheelchair-accessible medical transport",
                "Stretcher ambulance for bedridden patients",
                "Medical escort for airport transfers",
                "Event medical standby ambulance",
                "Long-distance inter-emirate transfer",
                "Scheduled recurring transport (dialysis, chemo)",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 bg-white rounded-xl p-4 shadow-card">
                  <Check className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-foreground text-sm">{item}</span>
                </div>
              ))}
            </div>
            <p className="mt-6 text-muted-foreground text-sm">
              All services are <Link to="/licensing/" className="text-accent hover:underline font-semibold">DHA licensed</Link> and operated under <Link to="/medical-oversight/" className="text-accent hover:underline font-semibold">medical oversight</Link>. Licensing documents available upon request.
            </p>
          </div>
        </div>
      </section>

      {/* Areas */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black mb-4">Book an Ambulance Anywhere in Dubai</h2>
          <p className="text-white/70 text-lg mb-8">We serve every area of Dubai and provide transfers to all other emirates.</p>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {["Downtown", "Marina", "JBR", "Business Bay", "Palm Jumeirah", "Deira", "Bur Dubai", "Al Barsha", "Mirdif", "JLT", "Silicon Oasis", "Jebel Ali"].map((a) => (
              <span key={a} className="px-4 py-2 bg-white/10 rounded-full text-sm border border-white/20">{a}</span>
            ))}
          </div>
          <p className="text-white/60 text-sm">
            We also serve <Link to="/abu-dhabi-ambulance-services/" className="text-accent hover:underline">Abu Dhabi</Link>, <Link to="/sharjah-ambulance-services/" className="text-accent hover:underline">Sharjah</Link>, <Link to="/ajman-ambulance-services/" className="text-accent hover:underline">Ajman</Link>, and all UAE emirates.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-accent/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black text-primary mb-4">Ready to Book?</h2>
          <p className="text-muted-foreground text-lg mb-8">24/7 dispatch. Transparent pricing. Professional care.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-bold text-lg px-10 py-6" asChild>
              <a href="tel:+971554728133" className="flex items-center gap-2"><Phone className="w-5 h-5" /> Call +971 55 472 8133</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingContact />
    </ServicePageTemplate>
  );
};

export default BookAmbulanceDubai;
