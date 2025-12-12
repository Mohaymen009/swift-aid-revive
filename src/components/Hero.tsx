import logo from "../images/logo.png";
import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-slate-900 px-4 sm:px-6 lg:px-8">
      {/* Background gradient and pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-950 to-black"></div>
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, hsl(215 45% 25% / 0.1) 0%, transparent 50%), 
                           radial-gradient(circle at 75% 75%, hsl(215 45% 25% / 0.1) 0%, transparent 50%)`
        }}></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo/Icon */}
          <div className="mb-8 animate-fade-in">
            <div className="inline-flex items-center justify-center w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-2xl">
              <img src={logo} alt="EMRS 24/7" className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32" />
            </div>
          </div>

          {/* Main heading */}
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[110px] font-black text-white mb-4 animate-fade-up leading-tight">
            Reliable Ambulance Services
          </h1>
          <h2 className="text-7xl sm:text-8xl md:text-9xl lg:text-[120px] xl:text-[140px] font-black text-white mb-8 animate-fade-up leading-tight" style={{ animationDelay: "0.1s" }}>
            Across All Emirates
          </h2>
          
          <p className="text-xl sm:text-2xl lg:text-3xl text-white font-semibold mb-6 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Professional ambulance services available 24/7 across all seven Emirates.
          </p>

          <p className="text-base sm:text-lg lg:text-xl text-blue-100/90 max-w-3xl mx-auto mb-10 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            EMRS provides 24/7 ambulance transfer and patient transport services across Dubai, Abu Dhabi, Sharjah, Ajman, Ras Al Khaimah, Fujairah, and Umm Al Quwain. Our professional paramedics ensure safe and reliable medical transport anywhere in the UAE.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <Button 
              size="lg"
              className="bg-[#FF4D00] hover:bg-[#FF6200] text-white font-bold px-10 py-8 text-xl rounded-xl shadow-elevated hover:shadow-glow transition-all duration-300 hover:scale-105 w-full sm:w-auto"
              asChild
            >
              <a href="tel:+971554728133" className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Call Now
              </a>
            </Button>
            
            <Button 
              size="lg"
              className="bg-[#25D366] hover:bg-[#20BD5A] text-white font-semibold px-8 py-6 text-lg rounded-xl shadow-elevated hover:shadow-glow transition-all duration-300 hover:scale-105 w-full sm:w-auto"
              asChild
            >
              <a href="https://wa.me/971554728133?text=Hi%20%F0%9F%91%8B%2C%20I%E2%80%99m%20interested%20in%20your%20services." target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <img src="/whatsapp.png" alt="WhatsApp" className="w-5 h-5" />
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