import { Phone, Mail, MapPin, MessageCircle, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const contactMethods = [
  {
    icon: Phone,
    title: "Phone",
    detail: "+971 55 472 8133",
    link: "tel:+971554728133",
    description: "24/7 Available",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    detail: "Chat with us",
    link: "https://wa.me/971554728133?text=Hi%20%F0%9F%91%8B%2C%20I%E2%80%99m%20interested%20in%20your%20services.",
    description: "Quick messaging support",
  },
  {
    icon: Mail,
    title: "Email",
    detail: "info@emrs.ae",
    link: "mailto:info@emrs.ae",
    description: "General inquiries",
  },
  {
    icon: MapPin,
    title: "Location",
    detail: "Dubai, UAE",
    description: "Serving all seven Emirates",
  },
];

const Contact = () => {
  const trackConversion = () => {
    // Call the global function defined in index.html
    if (typeof window !== 'undefined' && window.trackContactConversion) {
      window.trackContactConversion();
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-background to-blue-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-accent font-bold text-sm uppercase tracking-wide">Get in Touch</span>
            <h2 className="text-4xl sm:text-5xl font-bold text-primary mt-4 mb-6">
              Contact Us
            </h2>
            <p className="text-lg text-muted-foreground">
              We're here to help 24/7. Reach out to us through any of these channels.
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {contactMethods.map((method, index) => (
              <Card 
                key={index}
                className="p-6 gradient-card border-0 shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 text-center group"
              >
                <div className="mb-4 inline-flex items-center justify-center w-14 h-14 bg-accent/10 rounded-xl group-hover:bg-accent/20 transition-colors">
                  {method.title === 'WhatsApp' ? (
                    <img src="/whatsapp.png" alt="WhatsApp" className="w-7 h-7" />
                  ) : (
                    <method.icon className="w-7 h-7 text-accent" />
                  )}
                </div>
                
                <h3 className="text-lg font-bold text-primary mb-2">
                  {method.title}
                </h3>
                
                {method.link ? (
                  <a 
                    href={method.link}
                    className="text-accent font-semibold hover:underline block mb-1"
                    target={method.link.startsWith('http') ? '_blank' : undefined}
                    rel={method.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    onClick={trackConversion}
                  >
                    {method.detail}
                  </a>
                ) : (
                  <p className="text-foreground font-semibold mb-1">{method.detail}</p>
                )}
                
                <p className="text-sm text-muted-foreground">
                  {method.description}
                </p>
              </Card>
            ))}
          </div>

          {/* Contact Banner */}
          <Card className="bg-gradient-to-r from-accent to-orange-light border-0 shadow-glow text-white overflow-hidden">
            <div className="p-8 sm:p-12 relative">
              <div className="relative z-10 max-w-3xl">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-8 h-8" />
                  <span className="text-lg font-semibold">24/7 Medical Services</span>
                </div>
                
                <h3 className="text-3xl sm:text-4xl font-bold mb-4">
                  Need medical assistance or transport?
                </h3>
                
                <p className="text-lg text-white/90 mb-6">
                  Our medical team is ready to assist you anytime, anywhere in the UAE.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    size="lg"
                    className="bg-white hover:bg-white/90 text-accent font-semibold px-8 shadow-lg"
                    asChild
                  >
                    <a href="tel:+971554728133" className="flex items-center gap-2" onClick={trackConversion}>
                      <Phone className="w-5 h-5" />
                      Call +971 55 472 8133
                    </a>
                  </Button>
                  
                  <Button 
                    size="lg"
                    className="bg-white/20 hover:bg-white/30 text-white border-2 border-white/40 font-semibold px-8"
                    asChild
                  >
                    <a href="https://wa.me/971554728133?text=Hi%20%F0%9F%91%8B%2C%20I%E2%80%99m%20interested%20in%20your%20services." target="_blank" rel="noopener noreferrer" className="flex items-center gap-2" onClick={trackConversion}>
                      <img src="/whatsapp.png" alt="WhatsApp" className="w-5 h-5" />
                      WhatsApp Us
                    </a>
                  </Button>
                </div>
              </div>

              {/* Background decoration */}
              <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-10">
                <svg className="w-full h-full" viewBox="0 0 200 200" fill="none">
                  <path d="M100 20L120 80L180 80L130 115L150 175L100 140L50 175L70 115L20 80L80 80L100 20Z" fill="white" />
                </svg>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;