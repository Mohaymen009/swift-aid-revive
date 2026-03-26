import { Shield, Zap, Award, MapPin, Clock, HeartPulse } from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "Rapid Response",
    description: "Fast dispatch and response times across all emirates. Our team mobilizes within minutes of your call.",
  },
  {
    icon: Shield,
    title: "Licensed & Certified",
    description: "Fully licensed by DHA & DoH. All staff hold valid UAE healthcare professional licenses.",
  },
  {
    icon: Award,
    title: "Expert Medical Team",
    description: "BLS, ACLS, and PALS certified paramedics with advanced life support training.",
  },
  {
    icon: MapPin,
    title: "UAE-Wide Coverage",
    description: "Comprehensive ambulance services across all seven Emirates with local teams everywhere.",
  },
  {
    icon: HeartPulse,
    title: "Advanced Equipment",
    description: "State-of-the-art medical equipment including cardiac monitors, ventilators, and defibrillators.",
  },
  {
    icon: Zap,
    title: "24/7 Availability",
    description: "Round-the-clock ambulance services and medical transport. We never close.",
  },
];

const WhyChooseUs = () => {
  return (
    <section id="why-choose" className="py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-accent font-bold text-xs uppercase tracking-[0.2em]">Why Choose EMRS</span>
            <h2 className="text-4xl sm:text-5xl font-black text-primary mt-3 mb-6">
              Why EMRS is Your Trusted Healthcare Partner
            </h2>
            <p className="text-muted-foreground text-lg">
              We combine experience, technology, and dedication to deliver exceptional <strong>ambulance services</strong> across the UAE.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group text-center p-8 rounded-2xl hover:bg-secondary transition-all duration-300">
                <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-accent/10 group-hover:bg-accent transition-all duration-300">
                  <feature.icon className="w-8 h-8 text-accent group-hover:text-white transition-colors" />
                </div>

                <h3 className="text-lg font-bold text-primary mb-3">{feature.title}</h3>

                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Trust bar */}
          <div className="mt-20 bg-primary rounded-2xl p-10 sm:p-14">
            <div className="grid sm:grid-cols-3 gap-10 text-center">
              {[
                { value: "Fast", sub: "Response Time" },
                { value: "Professional", sub: "Medical Staff" },
                { value: "Reliable", sub: "Service Delivery" },
              ].map((item) => (
                <div key={item.value}>
                  <h3 className="text-3xl sm:text-4xl font-black text-accent mb-2">{item.value}</h3>
                  <div className="text-white/60 text-sm font-medium">{item.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
