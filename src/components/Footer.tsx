import { Phone, Mail, MapPin } from "lucide-react";
import logo from "../images/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg" style={{backgroundColor: 'transparent'}}>
                <img src={logo} alt="EMRS 24/7" className="w-6 h-6" />
              </div>
              <span className="font-bold text-xl">EMRS 24/7</span>
            </div>
            <p className="text-blue-100/80 leading-relaxed">
              Leading healthcare provider in the UAE. Your trusted partner for medical services, available 24/7.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-blue-100/80 hover:text-accent transition-colors">Home</a>
              </li>
              <li>
                <a href="#story" className="text-blue-100/80 hover:text-accent transition-colors">Our Story</a>
              </li>
              <li>
                <a href="#services" className="text-blue-100/80 hover:text-accent transition-colors">Services</a>
              </li>
              <li>
                <a href="#why-choose" className="text-blue-100/80 hover:text-accent transition-colors">Why Choose Us</a>
              </li>
              <li>
                <a href="#contact" className="text-blue-100/80 hover:text-accent transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Information</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <div className="font-medium">Phone</div>
                  <a href="tel:+971554728133" className="text-blue-100/80 hover:text-accent transition-colors">
                    +971 55 472 8133
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <div className="font-medium">Email</div>
                  <a href="mailto:info@emrs.ae" className="text-blue-100/80 hover:text-accent transition-colors">
                    info@emrs.ae
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <div className="font-medium">Location</div>
                  <span className="text-blue-100/80">Dubai, UAE</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-blue-100/60">
            <p>2025 © E M R S AMBULANCE SERVICES L.L.C</p>
            <p>Licensed healthcare provider in the United Arab Emirates</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;