import { HeartPulse, Clock, ShieldCheck, Phone, Check, MapPin, Ambulance } from "lucide-react";
import { Button } from "@/components/ui/button";
import ServicePageTemplate from "@/templates/ServicePageTemplate";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";

const ICUAmbulanceDubai = () => {
  const faqs = [
    { question: "What is an ICU ambulance?", answer: "An ICU ambulance is a mobile intensive care unit equipped with ventilators, cardiac monitors, infusion pumps, and defibrillators. It is staffed by ICU-trained nurses and paramedics for critical patient transfers." },
    { question: "How much does an ICU ambulance cost in Dubai?", answer: "ICU ambulance costs depend on distance, duration, and level of care required. Contact EMRS for a transparent quotation with no hidden charges." },
    { question: "Can an ICU ambulance handle ventilated patients?", answer: "Yes. Our ICU ambulances carry portable ventilators, oxygen systems, and cardiac monitoring equipment. Our critical care nurses manage ventilated patients during transit." },
    { question: "Is ICU ambulance service available 24/7?", answer: "Yes. EMRS ICU ambulance service operates round-the-clock, 365 days a year, across Dubai and all UAE emirates." },
    { question: "Do you provide ICU ambulance for inter-hospital transfers?", answer: "Absolutely. We specialize in critical care inter-hospital transfers between Dubai's major hospitals including Cleveland Clinic, Mediclinic, NMC, and government facilities." },
  ];

  return (
    <ServicePageTemplate
      title="ICU Ambulance Dubai"
      seoTitle="ICU Ambulance Dubai | Critical Care Transport 24/7"
      description="ICU ambulance service in Dubai with ventilators, cardiac monitors, and ICU-trained nurses. 24/7 critical care patient transfers across Dubai and UAE."
      canonical="https://emrs.ae/icu-ambulance-dubai/"
      imageAlt="ICU ambulance service Dubai - EMRS critical care transport"
      lastUpdated="2026-03-27"
      faqs={faqs}
      phoneNumber="+971 50 379 0382"
      relatedLinks={[
        { label: 'Private Ambulance UAE', to: '/private-ambulance-uae/' },
        { label: 'Patient Transfer Dubai', to: '/patient-transfer-service-dubai/' },
        { label: 'Dubai Ambulance Services', to: '/dubai-ambulance-services/' },
        { label: 'Abu Dhabi Ambulance', to: '/abu-dhabi-ambulance-services/' },
      ]}
      hideHeader={true}
      emirate="Dubai"
    >
      {/* Hero */}
      <section className="py-20 sm:py-28 bg-gradient-to-br from-primary via-primary to-primary/90 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-semibold mb-6">Critical Care Medical Transport</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 leading-tight">
              ICU Ambulance Service in Dubai
            </h1>
            <p className="text-xl text-white/85 mb-8 max-w-3xl mx-auto leading-relaxed">
              When critical patients need to be transferred between hospitals, our <strong>ICU ambulance</strong> service provides mobile intensive care with ventilators, cardiac monitors, and <strong>ICU-trained nurses</strong> — available 24/7 across Dubai and the UAE.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-bold text-lg px-8 py-6" asChild>
                <a href="tel:+971503790382" className="flex items-center gap-2"><Phone className="w-5 h-5" /> Call +971 50 379 0382</a>
              </Button>
              <Button size="lg" className="bg-white/10 hover:bg-white/20 text-white font-bold text-lg px-8 py-6 border border-white/20" asChild>
                <a href="https://wa.me/971503790382?text=Hi%2C%20I%20need%20an%20ICU%20ambulance" target="_blank" rel="noopener noreferrer nofollow" className="flex items-center gap-2">
                  <img src="/whatsapp.svg" alt="WhatsApp ICU ambulance Dubai" width={20} height={20} className="w-5 h-5" /> WhatsApp Us
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What's Inside */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-black text-primary mb-6">What's Inside Our ICU Ambulance?</h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Our <strong>ICU ambulances</strong> are mobile intensive care units designed for critical patient transfers. Each vehicle carries hospital-grade equipment operated by <strong>ICU-trained nurses and paramedics</strong>.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Portable ventilators (invasive & non-invasive)",
                "Multi-parameter cardiac monitors",
                "Defibrillators (manual & automated)",
                "Infusion pumps for IV medications",
                "Portable suction units",
                "Oxygen supply with flow regulators",
                "Emergency medication kit",
                "Spinal immobilization equipment",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 bg-white rounded-xl p-4 shadow-card">
                  <Check className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-foreground text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* When You Need */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-black text-primary mb-6">When Do You Need an ICU Ambulance?</h2>
            <div className="space-y-4">
              {[
                { title: "Inter-Hospital ICU Transfers", desc: "Moving ventilated or critical patients between hospitals — e.g., from Rashid Hospital to Cleveland Clinic Abu Dhabi." },
                { title: "Post-Surgical Critical Care Transport", desc: "Patients who need continuous monitoring after major surgery during transport to rehabilitation or home care." },
                { title: "Cardiac Patient Transfers", desc: "Patients with acute cardiac conditions requiring continuous cardiac monitoring and defibrillator standby." },
                { title: "Neonatal & Pediatric Transfers", desc: "Specialized transport for critically ill neonates and children with appropriate pediatric equipment." },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 shadow-card">
                  <h3 className="text-lg font-bold text-primary mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Coverage */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black mb-4">ICU Ambulance Coverage in Dubai</h2>
          <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">We provide ICU ambulance services to all areas of Dubai and inter-emirate critical care transfers.</p>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {["Downtown Dubai", "Dubai Marina", "JBR", "Business Bay", "Palm Jumeirah", "Al Barsha", "Mirdif", "Jebel Ali", "DIP", "DIFC"].map((area) => (
              <span key={area} className="px-4 py-2 bg-white/10 rounded-full text-sm border border-white/20">{area}</span>
            ))}
          </div>
          <p className="text-white/60 text-sm">Also serving <Link to="/abu-dhabi-ambulance-services/" className="text-accent hover:underline">Abu Dhabi</Link>, <Link to="/sharjah-ambulance-services/" className="text-accent hover:underline">Sharjah</Link>, and all other emirates. <Link to="/licensing/" className="text-accent hover:underline">Licensing documents available upon request</Link>.</p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-accent/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black text-primary mb-4">Need an ICU Ambulance in Dubai?</h2>
          <p className="text-muted-foreground text-lg mb-8">Our critical care team is on standby 24/7. Call now for immediate dispatch.</p>
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

export default ICUAmbulanceDubai;
