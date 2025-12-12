import { useState, useEffect } from "react";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "../images/logo.png";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Our Story", href: "#story" },
    { name: "Services", href: "#services" },
    { name: "Why Choose Us", href: "#why-choose" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? "bg-white shadow-md py-3" : "bg-primary/95 backdrop-blur-sm py-4"
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo/Brand */}
          <a href="#home" className="flex items-center gap-2 group">
            <div className={`flex items-center justify-center w-10 h-10 rounded-lg transition-colors ${
              isScrolled ? "bg-white/20" : "bg-transparent"
            }`}>
              <img src={logo} alt="EMRS 24/7" className="w-6 h-6" />
            </div>
            <div>
              <span className={`font-bold text-lg transition-colors ${
                isScrolled ? "text-primary" : "text-white"
              }`}>
                EMRS 24/7
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`font-medium transition-colors hover:text-accent ${
                  isScrolled ? "text-foreground" : "text-white"
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a href="tel:+971554728133" className={`flex items-center gap-2 font-medium ${
              isScrolled ? "text-foreground" : "text-white"
            }`}>
              <Phone className="w-4 h-4" />
              <span className="hidden xl:inline">+971 55 472 8133</span>
            </a>
            <Button 
              size="sm"
              className="bg-[#25D366] hover:bg-[#20BD5A] text-white font-semibold shadow-md"
              asChild
            >
              <a href="https://wa.me/971554728133?text=Hi%20%F0%9F%91%8B%2C%20I%E2%80%99m%20interested%20in%20your%20services." target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <img src="/whatsapp.png" alt="WhatsApp" className="w-4 h-4" />
                <span className="hidden xl:inline">WhatsApp</span>
              </a>
            </Button>
            <Button 
              size="sm"
              className="bg-accent hover:bg-orange-light text-white font-semibold shadow-md"
              asChild
            >
              <a href="#contact">Contact</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              isScrolled ? "text-primary hover:bg-secondary" : "text-white hover:bg-white/10"
            }`}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-white/10">
            <div className="flex flex-col gap-4 mt-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`font-medium transition-colors ${
                    isScrolled ? "text-foreground hover:text-accent" : "text-white hover:text-blue-100"
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <div className="flex flex-col gap-3 mt-2 pt-4 border-t border-white/10">
                <a 
                  href="tel:+971554728133" 
                  className={`flex items-center gap-2 font-medium ${
                    isScrolled ? "text-foreground" : "text-white"
                  }`}
                >
                  <Phone className="w-4 h-4" />
                  +971 55 472 8133
                </a>
                <Button 
                  className="bg-[#25D366] hover:bg-[#20BD5A] text-white font-semibold w-full"
                  asChild
                >
                  <a href="https://wa.me/971554728133?text=Hi%20%F0%9F%91%8B%2C%20I%E2%80%99m%20interested%20in%20your%20services." target="_blank" rel="noopener noreferrer" className="flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
                    <img src="/whatsapp.png" alt="WhatsApp" className="w-4 h-4" />
                    WhatsApp
                  </a>
                </Button>
                <Button 
                  className="bg-accent hover:bg-orange-light text-white font-semibold w-full"
                  asChild
                >
                  <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;