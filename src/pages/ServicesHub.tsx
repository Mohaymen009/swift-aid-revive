import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Link } from "react-router-dom";
import { Clock, ShieldCheck, HeartPulse, Phone, MessageCircle, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import FloatingContact from "@/components/FloatingContact";

const services = [
  { title: "Ambulance Services", desc: "Fast-response ICU & BLS ambulances for emergencies, inter-hospital transfers, and event coverage across all UAE emirates.", to: "/ambulance-services-uae" },
  { title: "Doctor on Call", desc: "Professional DHA-licensed doctors delivering quality medical care directly to your home or hotel room, available 24/7.", to: "/doctor-on-call-uae" },
  { title: "Home Healthcare", desc: "Comprehensive home nursing, elderly care, physiotherapy, and post-operative support tailored to patient needs.", to: "/home-healthcare-services-uae" },
  { title: "Patient Transport (NEMT)", desc: "Safe, non-emergency medical transport for dialysis appointments, hospital discharges, and wheelchair mobility.", to: "/non-emergency-medical-transport-uae" },
  { title: "Wellness & Diagnostics", desc: "Convenient at-home blood tests, IV therapy, vaccinations, and health check-ups performed by certified nurses.", to: "/wellness-diagnostic-services-uae" },
];

const ServicesHub = () => {
  return (
    <div className="min-h-screen bg-white">
      <SEOHead
        title="Services Hub | EMRS UAE"
        description="Explore EMRS's comprehensive medical services: Ambulance Transport, Doctor on Call, Home Healthcare, NEMT, and Wellness Diagnostics across the UAE."
        canonical="https://emrs.ae/services/"
        imageAlt="EMRS Services in UAE"
      />
      <Navigation />

      <main className="pt-24 pb-12">
        {/* Header Section */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">Our Medical Services</h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            EMRS connects you with top-tier healthcare and medical transport solutions.
            Whether you need rapid ambulance response, a doctor at your doorstep, or long-term home nursing,
            we are committed to delivering excellence in every interaction.
          </p>
        </div>

        {/* Services Grid */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s) => (
              <Link key={s.to} to={s.to} className="flex flex-col h-full p-8 rounded-2xl border border-gray-100 bg-gray-50 hover:shadow-lg transition-all hover:bg-white hover:border-blue-100 group">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-700">{s.title}</h2>
                <p className="text-gray-600 mb-6 flex-grow leading-relaxed">{s.desc}</p>
                <div className="flex items-center text-blue-600 font-semibold group-hover:translate-x-1 transition-transform">
                  Learn more <span className="ml-2">→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Why Choose EMRS */}
        <section className="bg-blue-900 py-16 text-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Why Choose EMRS?</h2>
              <p className="text-blue-100 max-w-2xl mx-auto">
                We set the standard for private medical transport and home healthcare in the UAE.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="p-6">
                <Clock className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">24/7 Availability</h3>
                <p className="text-blue-100">Round-the-clock support for emergencies and scheduled appointments alike.</p>
              </div>
              <div className="p-6">
                <ShieldCheck className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Licensed Professionals</h3>
                <p className="text-blue-100">All our medical staff and vehicles meet strict DHA/MOH regulatory standards.</p>
              </div>
              <div className="p-6">
                <HeartPulse className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Patient-First Care</h3>
                <p className="text-blue-100">We prioritize your comfort, dignity, and safety in everything we do.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Booking CTA */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Book a Service?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Our dispatch and support team is ready to assist you. Contact us now for immediate booking or inquiries.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-bold h-14 px-8" asChild>
              <a href="tel:+971554728133" className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Call +971 55 472 8133
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 font-bold h-14 px-8" asChild>
              <a href="https://wa.me/971554728133" target="_blank" rel="noopener noreferrer nofollow" className="flex items-center gap-2">
                <MessageCircle className="w-5 h-5" />
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
