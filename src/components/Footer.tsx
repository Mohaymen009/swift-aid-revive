import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const serviceLinks = [
    { name: "Private Ambulance UAE", url: "/ambulance-services-uae/" },
    { name: "Patient Transport Services", url: "/non-emergency-medical-transport-uae/" },
    { name: "Doctor Home Visit UAE", url: "/doctor-on-call-uae/" },
    { name: "Nursing & Home Care", url: "/home-healthcare-services-uae/" },
  ];

  const emirateLinks = [
    { name: "Dubai", url: "/dubai-ambulance-services/" },
    { name: "Abu Dhabi", url: "/abu-dhabi-ambulance-services/" },
    { name: "Sharjah", url: "/sharjah-ambulance-services/" },
    { name: "Ajman", url: "/ajman-ambulance-services/" },
  ];

  const companyLinks = [
    { name: "About Us", url: "/about-us/" },
    { name: "Licensing", url: "/licensing/" },
    { name: "Medical Oversight", url: "/medical-oversight/" },
    { name: "Contact Us", url: "/#contact" },
  ];

  return (
    <footer role="contentinfo" className="bg-primary text-white" itemscope itemtype="https://schema.org/LocalBusiness">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand & NAP */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-transparent">
                <picture>
                  <source srcSet="/site-logo.webp" type="image/webp" />
                  <img src="/site-logo.png" alt="EMRS 24/7 Logo" width={40} height={40} className="w-6 h-6" itemProp="logo" loading="lazy" />
                </picture>
              </div>
              <span className="font-bold text-xl" itemProp="name">EMRS 24/7</span>
            </div>
            <p className="text-white/90 leading-relaxed mb-4" itemProp="description">
              Professional ambulance and medical transport services across all seven emirates of the UAE. Available 24/7 for patient transfers, medical escorts, and home healthcare.
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3 text-white/90" itemprop="address" itemscope itemtype="https://schema.org/PostalAddress">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                <span itemProp="streetAddress">Al Qusais Industrial Area, Dubai, UAE</span>
              </div>
              <div className="flex items-center gap-3 text-white/90">
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <a href="tel:+971554728133" className="hover:text-accent transition-colors" itemProp="telephone">+971 55 472 8133</a>
              </div>
              <div className="flex items-center gap-3 text-white/90">
                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                <a href="mailto:info@emrs.ae" className="hover:text-accent transition-colors" itemProp="email">info@emrs.ae</a>
              </div>
              <div className="flex items-center gap-3 text-white/90">
                <Clock className="w-5 h-5 text-accent flex-shrink-0" />
                <span>24/7 Availability</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-6 pt-2">Our Services</h3>
            <ul className="space-y-4">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.url} className="text-white/85 hover:text-accent transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Emirates */}
          <div>
            <h3 className="font-bold text-lg mb-6 pt-2">Locations</h3>
            <ul className="space-y-4">
              {emirateLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.url} className="text-white/85 hover:text-accent transition-colors">
                    {link.name} Ambulance
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold text-lg mb-6 pt-2">Company</h3>
            <ul className="space-y-4">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  {link.url.startsWith('/#') ? (
                    <a href={link.url} className="text-white/85 hover:text-accent transition-colors">
                      {link.name}
                    </a>
                  ) : (
                    <Link to={link.url} className="text-white/85 hover:text-accent transition-colors">
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center gap-4 text-white/90 text-sm">
          <p>
            &copy; {currentYear} E M R S AMBULANCE SERVICES L.L.C &mdash; All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/licensing/" className="hover:text-accent transition-colors text-white font-medium">Licensing</Link>
            <Link to="/medical-oversight/" className="hover:text-accent transition-colors text-white font-medium">Medical Oversight</Link>
          </div>
        </div>
        <div className="mt-4 text-center">
          <p className="text-xs text-white/80 max-w-2xl mx-auto">
            Fully licensed ambulance & medical transport provider in the UAE. Committed to clinical excellence and patient safety across all operations.
            <Link to="/licensing/" className="underline ml-1 font-medium text-white">View our licensing & regulatory compliance</Link>.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
