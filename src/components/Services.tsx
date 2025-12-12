import { Ambulance, Users, Stethoscope, Home, GraduationCap, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const services = [
  {
    icon: Ambulance,
    title: "Ambulance Transfer Services",
    description: "Professional medical transportation with state-of-the-art equipment and trained paramedics available 24/7.",
  },
  {
    icon: Users,
    title: "Event Medical Coverage",
    description: "Comprehensive medical support for events of all sizes, ensuring participant safety and quick medical response.",
  },
  {
    icon: Stethoscope,
    title: "On-Site Medical Services",
    description: "Medical professionals at your location, providing immediate care and health monitoring for your workforce.",
  },
  {
    icon: Home,
    title: "Home Healthcare Services",
    description: "Quality medical care in the comfort of your home, from nursing care to rehabilitation services.",
  },
  {
    icon: GraduationCap,
    title: "Medical Training",
    description: "Professional training programs in first aid, CPR, and medical response for individuals and organizations.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-accent font-bold text-sm uppercase tracking-wide">Our Services</span>
            <h2 className="text-4xl sm:text-5xl font-bold text-primary mt-4 mb-6">
              Comprehensive Healthcare Solutions
            </h2>
            <p className="text-lg text-muted-foreground">
              From medical response to specialized training, we provide a full spectrum of healthcare services across the UAE.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {services.map((service, index) => (
              <Card 
                key={index}
                className="p-6 gradient-card border-0 shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="mb-4 inline-flex items-center justify-center w-14 h-14 bg-accent/10 rounded-xl group-hover:bg-accent/20 transition-colors">
                  <service.icon className="w-7 h-7 text-accent" />
                </div>
                
                <h3 className="text-xl font-bold text-primary mb-3">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </Card>
            ))}

            {/* CTA Card */}
            <Card className="p-6 bg-gradient-to-br from-accent to-orange-light border-0 shadow-glow text-white flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-3">
                  Need a Custom Solution?
                </h3>
                <p className="text-white/90 mb-6">
                  Contact us to discuss your specific healthcare needs and requirements.
                </p>
              </div>
              
              <Button 
                variant="secondary"
                className="bg-white hover:bg-white/90 text-accent font-semibold w-full group"
                asChild
              >
                <a href="#contact" className="flex items-center justify-center gap-2">
                  Get in Touch
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;