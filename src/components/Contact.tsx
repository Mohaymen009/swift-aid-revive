import { Phone, Mail, MapPin, MessageCircle, Clock, Shield, Users, Ambulance } from "lucide-react";
import { Button } from "@/components/ui/button";

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
    isWhatsApp: true,
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
    detail: "Al Qusais Industrial Area, Dubai",
    description: "Serving all seven Emirates",
  },
];

const Contact = () => {
  return (
    <section id="contact" className="py-24 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-accent font-bold text-xs uppercase tracking-[0.2em]">Contact EMRS</span>
            <h2 className="text-4xl sm:text-5xl font-black text-primary mt-3 mb-6">
              Get in Touch for <strong>Ambulance Services</strong>
            </h2>
            <p className="text-muted-foreground text-lg">
              Need ambulance services, patient transport, or medical assistance? Our professional team is available 24/7.
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
            {contactMethods.map((method, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 text-center group"
              >
                <div className="mb-4 inline-flex items-center justify-center w-12 h-12 bg-accent/10 rounded-xl group-hover:bg-accent transition-colors">
                  {method.isWhatsApp ? (
                    <svg viewBox="0 0 24 24" width="24" height="24" className="w-6 h-6 fill-accent group-hover:fill-white transition-colors" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
                  ) : (
                    <method.icon className="w-6 h-6 text-accent group-hover:text-white transition-colors" />
                  )}
                </div>

                <h3 className="text-base font-bold text-primary mb-1">{method.title}</h3>

                {method.link ? (
                  <a
                    href={method.link}
                    className="text-accent font-semibold text-sm hover:underline block mb-1"
                    target={method.link.startsWith('http') ? '_blank' : undefined}
                    rel={method.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    {method.detail}
                  </a>
                ) : (
                  <p className="text-foreground font-semibold text-sm mb-1">{method.detail}</p>
                )}

                <p className="text-xs text-muted-foreground">{method.description}</p>
              </div>
            ))}
          </div>

          {/* CTA Banner */}
          <div className="bg-primary rounded-2xl overflow-hidden">
            <div className="p-10 sm:p-14 relative">
              <div className="relative z-10 max-w-3xl mx-auto text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 text-accent mb-6">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm font-semibold">24/7 Ambulance & Medical Services</span>
                </div>

                <h3 className="text-3xl sm:text-4xl font-black text-white mb-4">
                  Need Ambulance or Medical Transport?
                </h3>

                <p className="text-white/60 text-lg mb-8 max-w-2xl mx-auto">
                  Whether you need hospital transfers, patient transport, or medical assistance anywhere in the UAE — our professional team is ready around the clock.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    className="bg-accent hover:bg-accent/90 text-white font-bold px-10 py-6 text-lg rounded-xl shadow-glow"
                    asChild
                  >
                    <a href="tel:+971554728133" className="flex items-center gap-2">
                      <Phone className="w-5 h-5" />
                      Call +971 55 472 8133
                    </a>
                  </Button>

                  <Button
                    size="lg"
                    className="bg-white/10 hover:bg-white/20 text-white font-bold px-10 py-6 text-lg rounded-xl border border-white/20"
                    asChild
                  >
                    <a
                      href="https://wa.me/971554728133?text=Hi%20%F0%9F%91%8B%2C%20I%E2%80%99m%20interested%20in%20your%20services."
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="flex items-center gap-2"
                    >
                      <svg viewBox="0 0 24 24" width="20" height="20" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
                      WhatsApp Us
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
