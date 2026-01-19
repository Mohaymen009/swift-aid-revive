import { Phone, MapPin, Clock, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-slate-900 px-4 sm:px-6 lg:px-8 pt-20" aria-labelledby="hero-heading">
      {/* Background gradient and pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-950 to-black"></div>
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 hero-radial-gradient"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo/Icon */}
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-2xl">
              <picture>
                <source srcSet="/site-logo.webp" type="image/webp" />
                <img
                  src="/site-logo.png"
                  alt="EMRS 24/7 - Professional Ambulance Services UAE"
                  width={140}
                  height={140}
                  className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 aspect-square object-contain"
                  loading="eager"
                  fetchPriority="high"
                />
              </picture>
            </div>
          </div>

          {/* Main heading - Single H1 for SEO */}
          <h1 id="hero-heading" className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-8 leading-tight">
            Licensed <strong>Medical Transport</strong> & <strong>Patient Transfer Services</strong>
          </h1>

          <p className="text-xl sm:text-2xl lg:text-3xl text-white font-semibold mb-6">
            EMRS 24/7: Professional <strong>Ambulance Services</strong> Across All Seven Emirates
          </p>

          <p className="text-base sm:text-lg lg:text-xl text-blue-100/95 max-w-3xl mx-auto mb-10">
            Whether you need a scheduled <strong>hospital transfer</strong>, <strong>patient discharge transport</strong>, or urgent <strong>medical escort</strong>, our licensed paramedics are ready to help. We serve families, hospitals, and healthcare facilities throughout the UAE with compassion and professionalism.
          </p>

          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-10">
            <div className="flex items-center gap-2 text-blue-100/90">
              <Clock className="w-5 h-5 text-accent" aria-hidden="true" />
              <span className="text-sm sm:text-base">24/7 Available</span>
            </div>
            <div className="flex items-center gap-2 text-blue-100/90">
              <MapPin className="w-5 h-5 text-accent" aria-hidden="true" />
              <span className="text-sm sm:text-base">All 7 Emirates</span>
            </div>
            <div className="flex items-center gap-2 text-blue-100/90">
              <Shield className="w-5 h-5 text-accent" aria-hidden="true" />
              <span className="text-sm sm:text-base">Professional Staff</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-[#A83300] hover:bg-[#8A2A00] text-white font-bold px-6 py-4 text-lg sm:text-xl sm:px-8 sm:py-6 rounded-xl shadow-elevated transition-all duration-300 hover:scale-105 w-full sm:w-auto"
              asChild
            >
              <a href="tel:+971554728133" className="flex items-center justify-center gap-3">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span>Call +971 55 472 8133</span>
              </a>
            </Button>

            <Button
              size="lg"
              className="bg-[#11632B] hover:bg-[#0D4D21] text-white font-bold px-6 py-4 text-lg sm:text-xl sm:px-8 sm:py-6 rounded-xl shadow-elevated transition-all duration-300 hover:scale-105 w-full sm:w-auto"
              asChild
            >
              <a href="https://wa.me/971554728133?text=Hi%20%F0%9F%91%8B%2C%20I%E2%80%99m%20interested%20in%20your%20services." target="_blank" rel="noopener noreferrer nofollow" className="flex items-center justify-center gap-3">
                <img
                  src="/whatsapp.svg"
                  alt="Contact EMRS 24/7 Professional Medical Transport on WhatsApp"
                  width={20}
                  height={20}
                  className="w-5 h-5 flex-shrink-0"
                  loading="lazy"
                />
                <span>WhatsApp Us</span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
