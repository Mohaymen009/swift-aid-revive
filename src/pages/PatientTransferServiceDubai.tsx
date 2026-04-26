import { Ambulance, Clock, MapPin, ShieldCheck, HeartPulse, Phone, Check, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import ServicePageTemplate from "@/templates/ServicePageTemplate";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";

const PatientTransferServiceDubai = () => {
  const faqs = [
    { question: "How do I book a patient transfer in Dubai?", answer: "Call +971 50 379 0382 or WhatsApp us. We can arrange same-day transfers or schedule in advance. Our dispatch team will confirm vehicle type, timing, and pricing." },
    { question: "What types of patient transfers do you handle?", answer: "We handle hospital-to-hospital transfers, hospital-to-home discharges, clinic-to-hospital, airport medical transfers, and long-distance inter-emirate patient transfers." },
    { question: "Can you transfer a patient on a ventilator?", answer: "Yes. Our ICU ambulances are equipped with ventilators and staffed by ICU-trained nurses for ventilated patient transfers." },
    { question: "Do you provide stretcher and wheelchair transport?", answer: "Yes. We offer both stretcher ambulances and wheelchair-accessible vehicles depending on the patient's needs." },
    { question: "Is patient transfer covered by insurance?", answer: "Many insurance providers cover medically necessary patient transfers. We provide all required documentation for insurance claims." },
    { question: "How fast can you arrange a patient transfer?", answer: "For urgent transfers, we can dispatch within 30-60 minutes in Dubai. Scheduled transfers should be booked 2-4 hours in advance for guaranteed timing." },
  ];

  return (
    <ServicePageTemplate
      title="Patient Transfer Service Dubai"
      seoTitle="Patient Transfer Service Dubai | Hospital Transport 24/7"
      description="Professional patient transfer service in Dubai. Hospital-to-hospital, discharge transport, and inter-facility transfers with licensed paramedics. Available 24/7."
      canonical="https://emrs.ae/patient-transfer-service-dubai/"
      imageAlt="Patient transfer service Dubai - EMRS medical transport"
      lastUpdated="2026-03-27"
      faqs={faqs}
      phoneNumber="+971 50 379 0382"
      relatedLinks={[
        { label: 'Private Ambulance UAE', to: '/private-ambulance-uae/' },
        { label: 'ICU Ambulance Dubai', to: '/icu-ambulance-dubai/' },
        { label: 'Book Ambulance Dubai', to: '/book-ambulance-dubai/' },
        { label: 'Non-Emergency Transport', to: '/non-emergency-medical-transport-uae/' },
        { label: 'Dubai Ambulance Services', to: '/dubai-ambulance-services/' },
      ]}
      hideHeader={true}
      emirate="Dubai"
    >
      {/* Hero */}
      <section className="py-20 sm:py-28 bg-gradient-to-br from-primary via-primary to-primary/90 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-semibold mb-6">Safe & Reliable Hospital Transport</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 leading-tight">
              Patient Transfer Service in Dubai
            </h1>
            <p className="text-xl text-white/85 mb-8 max-w-3xl mx-auto leading-relaxed">
              Need to move a patient between hospitals? Going home after surgery? EMRS provides professional <strong>patient transfer services</strong> across Dubai with licensed paramedics, stretcher transport, and 24/7 availability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-bold text-lg px-8 py-6" asChild>
                <a href="tel:+971503790382" className="flex items-center gap-2"><Phone className="w-5 h-5" /> Call +971 50 379 0382</a>
              </Button>
              <Button size="lg" className="bg-white/10 hover:bg-white/20 text-white font-bold text-lg px-8 py-6 border border-white/20" asChild>
                <a href="https://wa.me/971503790382?text=Hi%2C%20I%20need%20a%20patient%20transfer" target="_blank" rel="noopener noreferrer nofollow" className="flex items-center gap-2">
                  <img src="/whatsapp.svg" alt="WhatsApp patient transfer booking" width={20} height={20} className="w-5 h-5" /> WhatsApp Us
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Transfers */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-black text-primary mb-8 text-center">Types of Patient Transfers We Handle</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: Ambulance, title: "Hospital-to-Hospital", desc: "Transfer patients between hospitals for specialized treatment, second opinions, or closer-to-home care." },
                { icon: HeartPulse, title: "ICU & Critical Care", desc: "Ventilated and critical patients with ICU-trained nurses, cardiac monitors, and full life support equipment." },
                { icon: ShieldCheck, title: "Post-Surgery Discharge", desc: "Safe, comfortable transport home after surgery with medical monitoring throughout the journey." },
                { icon: Clock, title: "Scheduled Appointments", desc: "Regular transport for dialysis, chemotherapy, physiotherapy, and outpatient appointments." },
                { icon: MapPin, title: "Airport Medical Transfer", desc: "Patient pick-up and drop-off at Dubai airports with medical clearance and flight coordination." },
                { icon: Users, title: "Long-Distance Transfer", desc: "Inter-emirate patient transfers — Dubai to Abu Dhabi, Sharjah, RAK, and across the UAE." },
              ].map((s, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 shadow-card hover:shadow-premium transition-all">
                  <div className="mb-4 w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                    <s.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-lg font-bold text-primary mb-2">{s.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-black text-primary mb-8 text-center">How to Book a Patient Transfer</h2>
            <div className="space-y-6">
              {[
                { step: "1", title: "Contact Us", desc: "Call +971 50 379 0382 or WhatsApp us with patient details, pick-up location, and destination." },
                { step: "2", title: "We Confirm Details", desc: "Our dispatch team confirms the vehicle type, medical staff, timing, and provides a transparent price quote." },
                { step: "3", title: "We Pick Up", desc: "Our ambulance arrives on time with trained paramedics. We coordinate with hospital staff for safe patient handover." },
                { step: "4", title: "Safe Transfer", desc: "Patient is monitored throughout the journey. We deliver safely to the destination and hand over to receiving medical team." },
              ].map((s, i) => (
                <div key={i} className="flex items-start gap-6 bg-white rounded-2xl p-6 shadow-card">
                  <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-black text-lg">{s.step}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-primary mb-1">{s.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Areas */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black mb-4">Patient Transfer Coverage in Dubai</h2>
          <p className="text-white/70 text-lg mb-8">We serve all areas of Dubai and provide inter-emirate transfers across the UAE.</p>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {["Downtown", "Marina", "JBR", "Business Bay", "Palm Jumeirah", "Al Barsha", "Mirdif", "Deira", "Bur Dubai", "JLT", "Silicon Oasis", "Motor City"].map((a) => (
              <span key={a} className="px-4 py-2 bg-white/10 rounded-full text-sm border border-white/20">{a}</span>
            ))}
          </div>
          <p className="text-white/60 text-sm">Operating under <Link to="/licensing/" className="text-accent hover:underline">UAE health authority regulations</Link>. Licensing documents available upon request.</p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-accent/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black text-primary mb-4">Arrange a Patient Transfer Now</h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">Available 24/7. Same-day transfers and scheduled bookings.</p>
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-bold text-lg px-10 py-6" asChild>
            <a href="tel:+971503790382" className="flex items-center gap-2"><Phone className="w-5 h-5" /> Call +971 50 379 0382</a>
          </Button>
        </div>
      </section>

      <Footer />
      <FloatingContact />
    </ServicePageTemplate>
  );
};

export default PatientTransferServiceDubai;
