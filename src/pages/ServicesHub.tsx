import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Link } from "react-router-dom";
import { Clock, ShieldCheck, HeartPulse, Phone, ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import FloatingContact from "@/components/FloatingContact";

const EXTERNAL_URL = "https://homehealthcare.emrs.ae/";

const services = [
  { title: "Ambulance Services", desc: "Fast-response ICU & BLS ambulances for emergencies, inter-hospital transfers, and event coverage across all UAE emirates.", to: "/ambulance-services-uae/", external: false },
  { title: "Doctor on Call", desc: "Professional DHA-licensed doctors delivering quality medical care directly to your home or hotel room, available 24/7.", to: EXTERNAL_URL, external: true },
  { title: "Home Healthcare", desc: "Comprehensive home nursing, elderly care, physiotherapy, and post-operative support tailored to patient needs.", to: EXTERNAL_URL, external: true },
  { title: "Patient Transport (NEMT)", desc: "Safe, non-emergency medical transport for dialysis appointments, hospital discharges, and wheelchair mobility.", to: "/non-emergency-medical-transport-uae/", external: false },
  { title: "Wellness & Diagnostics", desc: "Convenient at-home blood tests, IV therapy, vaccinations, and health check-ups performed by certified nurses.", to: EXTERNAL_URL, external: true },
  { title: "Event Medical Coverage", desc: "Comprehensive medical support for corporate events, sports events, concerts, exhibitions, and private functions.", to: "/event-medical-services-uae/", external: false },
];

const ServicesHub = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="EMRS Medical Services UAE | Ambulance, Transport & Healthcare"
        description="Explore EMRS's comprehensive medical services: Ambulance Transport, Doctor on Call, Home Healthcare, NEMT, and Wellness Diagnostics across the UAE."
        canonical="https://emrs.ae/services/"
        imageAlt="EMRS Services in UAE"
      />
      <Navigation />

      <main className="pt-28 pb-16">
        {/* Header */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
          <span className="text-accent font-bold text-xs uppercase tracking-[0.2em]">Complete Medical Solutions</span>
          <h1 className="text-4xl sm:text-5xl font-black text-primary mt-3 mb-6">Our Medical Services</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            EMRS connects you with top-tier healthcare and medical transport solutions. Whether you need rapid ambulance response, a doctor at your doorstep, or long-term care.
          </p>
        </div>

        {/* Services Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              s.external ? (
                <a
                  key={s.title}
                  href={s.to}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col h-full p-8 rounded-2xl bg-white shadow-card hover:shadow-premium transition-all duration-500 hover:-translate-y-1 group border border-transparent hover:border-accent/10"
                >
                  <h2 className="text-xl font-bold text-primary mb-4 group-hover:text-accent transition-colors">{s.title}</h2>
                  <p className="text-muted-foreground text-sm mb-6 flex-grow leading-relaxed">{s.desc}</p>
                  <div className="flex items-center text-accent font-semibold text-sm gap-2">
                    Learn more <ExternalLink className="w-4 h-4" />
                  </div>
                </a>
              ) : (
                <Link
                  key={s.title}
                  to={s.to}
                  onClick={() => window.scrollTo(0, 0)}
                  className="flex flex-col h-full p-8 rounded-2xl bg-white shadow-card hover:shadow-premium transition-all duration-500 hover:-translate-y-1 group border border-transparent hover:border-accent/10"
                >
                  <h2 className="text-xl font-bold text-primary mb-4 group-hover:text-accent transition-colors">{s.title}</h2>
                  <p className="text-muted-foreground text-sm mb-6 flex-grow leading-relaxed">{s.desc}</p>
                  <div className="flex items-center text-accent font-semibold text-sm gap-2 group-hover:gap-3 transition-all">
                    Learn more <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              )
            ))}
          </div>
        </div>

        {/* Why Choose EMRS */}
        <section className="bg-primary py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-3xl font-black text-white mb-4">Why Choose EMRS?</h2>
              <p className="text-white/50 max-w-2xl mx-auto">
                We set the standard for private medical transport and healthcare in the UAE.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              {[
                { icon: Clock, title: "24/7 Availability", desc: "Round-the-clock support for emergencies and scheduled appointments." },
                { icon: ShieldCheck, title: "Licensed Professionals", desc: "All medical staff and vehicles meet strict DHA/MOH standards." },
                { icon: HeartPulse, title: "Patient-First Care", desc: "We prioritize comfort, dignity, and safety in everything we do." },
              ].map((item) => (
                <div key={item.title} className="p-8">
                  <item.icon className="w-12 h-12 text-accent mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-white/50 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h2 className="text-3xl font-black text-primary mb-6">Ready to Book a Service?</h2>
          <p className="text-muted-foreground text-lg mb-8">
            Our dispatch team is ready to assist you. Contact us now for immediate booking.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-bold h-14 px-10 rounded-xl shadow-glow" asChild>
              <a href="tel:+971554728133" className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Call +971 55 472 8133
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white font-bold h-14 px-10 rounded-xl" asChild>
              <a href="https://wa.me/971554728133" target="_blank" rel="noopener noreferrer nofollow" className="flex items-center gap-2">
                WhatsApp Us
              </a>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingContact />
    </div>
  );
};

export default ServicesHub;
