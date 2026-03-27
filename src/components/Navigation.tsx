import { useState, useEffect } from "react";
import { Menu, X, Phone, MessageCircle, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
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
    { name: "Home", href: "/" },
    { name: "Our Story", href: "/#story" },
    { 
      name: "Services", 
      href: "/#services",
      dropdown: [
        { name: "Private Ambulance UAE", href: "/private-ambulance-uae" },
        { name: "ICU Ambulance Dubai", href: "/icu-ambulance-dubai" },
        { name: "Patient Transfer Services", href: "/patient-transfer-services-uae" },
        { name: "Emergency Ambulance Dubai", href: "/emergency-ambulance-dubai" },
        { name: "Home Healthcare Dubai", href: "/home-healthcare-services-dubai" },
        { name: "Doctor On Call", href: "/doctor-on-call-uae" },
      ]
    },
    { name: "Why Choose Us", href: "/#why-choose" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? "bg-white shadow-md py-3" : "bg-primary/95 backdrop-blur-sm py-4"
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo/Brand */}
          <a href="/" className="flex items-center gap-2 group">
            <div>
              <span className={`font-black text-2xl transition-colors ${
                isScrolled ? "text-primary" : "text-white"
              }`}>
                EMRS 24/7
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              link.dropdown ? (
                <DropdownMenu key={link.name}>
                  <DropdownMenuTrigger className={`flex items-center gap-1 font-medium transition-colors hover:text-accent outline-none ${
                    isScrolled ? "text-foreground" : "text-white"
                  }`}>
                    {link.name}
                    <ChevronDown className="w-4 h-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="w-64 p-2 bg-white rounded-xl shadow-xl border-gray-100">
                    {link.dropdown.map((sublink) => (
                      <DropdownMenuItem key={sublink.name} asChild>
                        <a 
                          href={sublink.href}
                          className="w-full px-4 py-3 text-sm font-medium text-primary hover:bg-gray-50 hover:text-accent rounded-lg transition-colors cursor-pointer block"
                        >
                          {sublink.name}
                        </a>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  className={`font-medium transition-colors hover:text-accent ${
                    isScrolled ? "text-foreground" : "text-white"
                  }`}
                >
                  {link.name}
                </a>
              )
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a href="tel:+971554728133" className={`flex items-center gap-2 font-bold text-lg ${
              isScrolled ? "text-foreground" : "text-white"
            }`} onClick={() => window.gtag_report_conversion('tel:+971554728133')}>
              <Phone className="w-4 h-4 text-[#FF6200]" />
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
                <div key={link.name} className="flex flex-col gap-2">
                  <a
                    href={link.href}
                    onClick={() => !link.dropdown && setIsMobileMenuOpen(false)}
                    className={`font-bold text-lg transition-colors ${
                      isScrolled ? "text-foreground hover:text-accent" : "text-white hover:text-blue-100"
                    }`}
                  >
                    {link.name}
                  </a>
                  {link.dropdown && (
                    <div className="flex flex-col gap-3 pl-4 mt-1 mb-2 border-l-2 border-accent/20">
                      {link.dropdown.map((sublink) => (
                        <a
                          key={sublink.name}
                          href={sublink.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className={`text-base font-medium transition-colors ${
                            isScrolled ? "text-muted-foreground hover:text-accent" : "text-white/80 hover:text-white"
                          }`}
                        >
                          {sublink.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="flex flex-col gap-3 mt-2 pt-4 border-t border-white/10">
                <a 
                  href="tel:+971554728133" 
                  className={`flex items-center gap-2 font-medium ${
                    isScrolled ? "text-foreground" : "text-white"
                  }`}
                  onClick={() => window.gtag_report_conversion('tel:+971554728133')}
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