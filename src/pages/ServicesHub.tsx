import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Link } from "react-router-dom";

const services = [
  { title: "Ambulance Services", desc: "ICU & BLS ambulance, inter-hospital transfers, events.", to: "/ambulance-services-uae" },
  { title: "Doctor on Call", desc: "24/7 home & hotel doctor visits across UAE.", to: "/doctor-on-call-uae" },
  { title: "Home Healthcare", desc: "Home nursing, elderly care, physiotherapy, post-op care.", to: "/home-healthcare-services-uae" },
  { title: "Patient Transport (NEMT)", desc: "Dialysis, hospital discharge, wheelchair & stretcher transport.", to: "/non-emergency-medical-transport-uae" },
  { title: "Wellness & Diagnostics", desc: "Blood tests at home, IV therapy, vaccinations, ECG.", to: "/wellness-diagnostic-services-uae" },
];

const ServicesHub = () => {
  return (
    <div className="min-h-screen bg-white">
      <SEOHead
        title="Services Hub | EMRS UAE"
        description="Explore EMRS services: Ambulance, Doctor on Call, Home Healthcare, Patient Transport (NEMT), Wellness & Diagnostics."
        canonical="https://emrs.ae/services"
        image="/images/og/services-hub.jpg"
        imageAlt="EMRS Services in UAE"
      />
      <Navigation />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">Our Services</h1>
          <p className="text-lg text-gray-600">Find the right care and transport services anywhere in the UAE.</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <Link key={s.to} to={s.to} className="block group rounded-xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition">
              <h2 className="text-xl font-semibold text-gray-900 group-hover:text-blue-700">{s.title}</h2>
              <p className="text-gray-600 mt-2">{s.desc}</p>
              <span className="inline-block mt-4 text-blue-600 group-hover:text-blue-800">Learn more →</span>
            </Link>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ServicesHub;
