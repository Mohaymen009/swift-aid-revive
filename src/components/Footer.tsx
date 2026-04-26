import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const EXTERNAL_URL = "https://homehealthcare.emrs.ae/";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const serviceLinks = [
    { name: "Private Ambulance UAE", url: "/private-ambulance-uae/" },
    { name: "ICU Ambulance Dubai", url: "/icu-ambulance-dubai/" },
    { name: "Patient Transfer Dubai", url: "/patient-transfer-service-dubai/" },
    { name: "Book Ambulance Dubai", url: "/book-ambulance-dubai/" },
    { name: "Ambulance Services UAE", url: "/ambulance-services-uae/" },
    { name: "Patient Transport (NEMT)", url: "/non-emergency-medical-transport-uae/" },
    { name: "Event Medical Coverage", url: "/event-medical-services-uae/" },
    { name: "Doctor Home Visit", url: EXTERNAL_URL, external: true },
    { name: "Home Healthcare", url: EXTERNAL_URL, external: true },
  ];

  const emirateLinks = [
    { name: "Dubai", url: "/dubai-ambulance-services/" },
    { name: "Abu Dhabi", url: "/abu-dhabi-ambulance-services/" },
    { name: "Sharjah", url: "/sharjah-ambulance-services/" },
    { name: "Ajman", url: "/ajman-ambulance-services/" },
    { name: "RAK", url: "/ras-al-khaimah-ambulance-services/" },
    { name: "Fujairah", url: "/fujairah-ambulance-services/" },
    { name: "UAQ", url: "/umm-al-quwain-ambulance-services/" },
    { name: "Al Ain", url: "/al-ain-ambulance-services/" },
  ];

  const companyLinks = [
    { name: "About EMRS", url: "/about-us/" },
    { name: "Regulatory Licensing", url: "/licensing/" },
    { name: "Medical Oversight", url: "/medical-oversight/" },
    { name: "Contact Us", url: "/#contact" },
  ];

  return (
    <footer role="contentinfo" className="bg-primary text-white" itemScope itemType="https://schema.org/LocalBusiness">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <picture>
                <source srcSet="/site-logo.webp" type="image/webp" />
                <img src="/site-logo.png" alt="EMRS 24/7 Logo" width={36} height={36} className="w-9 h-9" itemProp="logo" loading="lazy" />
              </picture>
              <div>
                <span className="font-black text-xl" itemProp="name">EMRS</span>
                <span className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-accent -mt-1">24/7 Medical</span>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6" itemProp="description">
              Professional ambulance and medical transport services across all seven emirates. Available 24/7 for patient transfers, medical escorts, and home healthcare.
            </p>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3 text-white/60" itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                <MapPin className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                <span itemProp="streetAddress">Al Qusais Industrial Area, Dubai, UAE</span>
              </div>
              <div className="flex items-center gap-3 text-white/60">
                <Phone className="w-4 h-4 text-accent flex-shrink-0" />
                <a href="tel:+971503790382" className="hover:text-accent transition-colors" itemProp="telephone">+971 50 379 0382</a>
              </div>
              <div className="flex items-center gap-3 text-white/60">
                <Mail className="w-4 h-4 text-accent flex-shrink-0" />
                <a href="mailto:info@emrs.ae" className="hover:text-accent transition-colors" itemProp="email">info@emrs.ae</a>
              </div>
              <div className="flex items-center gap-3 text-white/60">
                <Clock className="w-4 h-4 text-accent flex-shrink-0" />
                <span>24/7 Availability</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-sm uppercase tracking-wider mb-6 text-white/80">Our Services</h3>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  {link.external ? (
                    <a href={link.url} target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-accent transition-colors text-sm">
                      {link.name}
                    </a>
                  ) : (
                    <Link to={link.url} className="text-white/50 hover:text-accent transition-colors text-sm">
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Emirates */}
          <div>
            <h3 className="font-bold text-sm uppercase tracking-wider mb-6 text-white/80">Locations</h3>
            <ul className="space-y-3">
              {emirateLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.url} className="text-white/50 hover:text-accent transition-colors text-sm">
                    {link.name} Ambulance
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold text-sm uppercase tracking-wider mb-6 text-white/80">Company</h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  {link.url.startsWith('/#') ? (
                    <a href={link.url} className="text-white/50 hover:text-accent transition-colors text-sm">
                      {link.name}
                    </a>
                  ) : (
                    <Link to={link.url} className="text-white/50 hover:text-accent transition-colors text-sm">
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p className="text-white/40">
            &copy; {currentYear} E M R S AMBULANCE SERVICES L.L.C &mdash; All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/licensing/" className="hover:text-accent transition-colors text-white/60 font-medium">Licensing</Link>
            <Link to="/medical-oversight/" className="hover:text-accent transition-colors text-white/60 font-medium">Medical Oversight</Link>
          </div>
        </div>
        <div className="mt-4 text-center">
          <p className="text-xs text-white/30 max-w-2xl mx-auto">
            Fully licensed ambulance & medical transport provider in the UAE. Committed to clinical excellence and patient safety.
            <Link to="/licensing/" className="underline ml-1 text-white/50">View our licensing & regulatory compliance</Link>.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
