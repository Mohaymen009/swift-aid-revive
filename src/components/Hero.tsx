import logo from "../images/logo.png";
import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-slate-900">
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo/Icon */}
          <div className="mb-8 animate-fade-in">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-white">
              <img src={logo} alt="EMRS 24/7" className="w-12 h-12" />
            </div>
          </div>

          {/* Main heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 animate-fade-up leading-tight">
            Reliable Ambulance Services<br className="hidden sm:block" /> Across All UAE Emirates
          </h1>
          
          <p className="text-lg sm:text-xl lg:text-2xl text-blue-100 font-semibold mb-4 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Professional ambulance services available 24/7 in Dubai, Abu Dhabi, Sharjah, and all seven emirates
          </p>

          <p className="text-base sm:text-lg lg:text-xl text-blue-100/90 max-w-3xl mx-auto mb-10 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            EMRS provides 24/7 ambulance transfer and patient transport services across Dubai, Abu Dhabi, Sharjah, Ajman, Ras Al Khaimah, Fujairah, and Umm Al Quwain. Our professional paramedics ensure safe and reliable medical transport anywhere in the UAE.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <Button 
              size="lg"
              className="bg-accent hover:bg-orange-light text-white font-semibold px-8 py-6 text-lg rounded-xl shadow-elevated hover:shadow-glow transition-all duration-300 hover:scale-105 w-full sm:w-auto"
              asChild
            >
              <a href="tel:+971554728133" className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Call Now
              </a>
            </Button>
            
            <Button 
              size="lg"
              className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-2 border-white/40 font-semibold px-8 py-6 text-lg rounded-xl shadow-elevated transition-all duration-300 hover:scale-105 w-full sm:w-auto"
              asChild
            >
              <a href="https://wa.me/971554728133" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </a>
            </Button>
          </div>

          {/* Contact info */}
          <div className="mt-8 flex items-center justify-center gap-2 text-blue-100/80 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <Phone className="w-4 h-4" />
            <span className="text-sm sm:text-base">24/7 Available: +971 55 472 8133</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;