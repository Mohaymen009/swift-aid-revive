import { Phone, Mail, MapPin, Clock } from "lucide-react";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const serviceLinks = [
    { name: "Ambulance Services UAE", url: "/ambulance-services-uae" },
    { name: "Non-Emergency Transport", url: "/non-emergency-medical-transport-uae" },
    { name: "Doctor on Call", url: "/doctor-on-call-uae" },
    { name: "Home Healthcare", url: "/home-healthcare-services-uae" },
    { name: "Wellness & Diagnostics", url: "/wellness-diagnostic-services-uae" },
  ];

  const emirateLinks = [
    { name: "Dubai", url: "/dubai-ambulance-services" },
    { name: "Abu Dhabi", url: "/abu-dhabi-ambulance-services" },
    { name: "Sharjah", url: "/sharjah-ambulance-services" },
    { name: "Ajman", url: "/ajman-ambulance-services" },
    { name: "Ras Al Khaimah", url: "/ras-al-khaimah-ambulance-services" },
    { name: "Fujairah", url: "/fujairah-ambulance-services" },
    { name: "Umm Al Quwain", url: "/umm-al-quwain-ambulance-services" },
  ];

  return (
    <footer className="bg-primary text-white" itemScope itemType="https://schema.org/LocalBusiness">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand & NAP */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg" style={{backgroundColor: 'transparent'}}>
                <img src={logo} alt="EMRS 24/7 Logo" className="w-6 h-6" itemProp="logo" />
              </div>
              <span className="font-bold text-xl" itemProp="name">EMRS 24/7</span>
            </div>
            <p className="text-blue-100/80 leading-relaxed mb-4" itemProp="description">
              Professional ambulance and medical transport services across all seven emirates of the UAE. Available 24/7 for patient transfers, medical escorts, and home healthcare.
            </p>
            
            {/* NAP (Name, Address, Phone) for Local SEO */}
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-accent" />
                <span className="text-blue-100/80">Open 24 hours, 7 days a week</span>
              </div>
              <div className="flex items-start gap-2" itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                <MapPin className="w-4 h-4 text-accent mt-0.5" />
                <span className="text-blue-100/80">
                  <span itemProp="streetAddress">Office 101, Al Nahda 1</span>, 
                  <span itemProp="addressLocality"> Dubai</span>, 
                  <span itemProp="addressCountry"> UAE</span>
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-accent" />
                <a href="tel:+971554728133" className="text-blue-100/80 hover:text-accent transition-colors" itemProp="telephone">
                  +971 55 472 8133
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-accent" />
                <a href="mailto:info@emrs.ae" className="text-blue-100/80 hover:text-accent transition-colors" itemProp="email">
                  info@emrs.ae
                </a>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4">Our Services</h3>
            <ul className="space-y-2">
              {serviceLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.url} 
                    className="text-blue-100/80 hover:text-accent transition-colors"
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="font-bold text-lg mb-4">Service Areas</h3>
            <ul className="space-y-2">
              {emirateLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.url} 
                    className="text-blue-100/80 hover:text-accent transition-colors"
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    Ambulance {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Resources */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-blue-100/80 hover:text-accent transition-colors" onClick={() => window.scrollTo(0, 0)}>Home</Link>
              </li>
              <li>
                <Link to="/about-us" className="text-blue-100/80 hover:text-accent transition-colors" onClick={() => window.scrollTo(0, 0)}>About Us</Link>
              </li>
              <li>
                <Link to="/services" className="text-blue-100/80 hover:text-accent transition-colors" onClick={() => window.scrollTo(0, 0)}>Services</Link>
              </li>
              <li>
                <Link to="/licensing" className="text-blue-100/80 hover:text-accent transition-colors" onClick={() => window.scrollTo(0, 0)}>Licensing & Compliance</Link>
              </li>
              <li>
                <a href="/#contact" className="text-blue-100/80 hover:text-accent transition-colors">Contact</a>
              </li>
              <li>
                <Link 
                  to="/blog/how-to-choose-ambulance-service" 
                  className="text-blue-100/80 hover:text-accent transition-colors"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  Blog: Choosing an Ambulance
                </Link>
              </li>
              <li>
                <Link 
                  to="/blog/private-ambulance-services-across-uae" 
                  className="text-blue-100/80 hover:text-accent transition-colors"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  Blog: Private Ambulance UAE
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Trust Signals */}
        <div className="border-t border-white/10 pt-8 mb-8">
          <div className="grid sm:grid-cols-3 gap-6 text-center text-sm">
            <div className="text-blue-100/80">
              <span className="font-semibold text-white">Professional Staff</span> — Trained paramedics & medical professionals
            </div>
            <div className="text-blue-100/80">
              <span className="font-semibold text-white">UAE-Wide Coverage</span> — All 7 emirates served
            </div>
            <div className="text-blue-100/80">
              <span className="font-semibold text-white">24/7 Availability</span> — Always ready when you need us
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-blue-100/60">
            <p>{currentYear} © E M R S AMBULANCE SERVICES L.L.C — All rights reserved</p>
            <p>Professional medical transport provider in the United Arab Emirates</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;