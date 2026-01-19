import { Shield, Zap, Award, MapPin } from "lucide-react";

const features = [
  {
    icon: MapPin,
    title: "Nationwide Coverage",
    description: "Comprehensive services across all seven Emirates.",
  },
  {
    icon: Zap,
    title: "Advanced Technology",
    description: "State-of-the-art medical equipment for superior care.",
  },
  {
    icon: Award,
    title: "Expert Team",
    description: "Experienced medical professionals ensuring top-quality care.",
  },
  {
    icon: Shield,
    title: "Licensed & Certified",
    description: "Fully licensed and compliant with UAE healthcare standards.",
  },
];

const WhyChooseUs = () => {
  return (
    <section id="why-choose" className="py-20 bg-gradient-to-b from-blue-light to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-accent font-bold text-sm uppercase tracking-wide">Why Choose EMRS</span>
            <h2 className="text-4xl sm:text-5xl font-bold text-primary mt-4 mb-6">
              Why EMRS is Your Trusted Healthcare Partner in UAE
            </h2>
            <p className="text-lg text-muted-foreground">
              We combine experience, technology, and dedication to deliver exceptional medical services across the UAE.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center group"
              >
                <div className="mb-6 inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-accent/10 to-accent/5 rounded-2xl group-hover:from-accent/20 group-hover:to-accent/10 transition-all duration-300 group-hover:scale-110">
                  <feature.icon className="w-10 h-10 text-accent" />
                </div>

                <div className="text-xl font-bold text-primary mb-3">
                  {feature.title}
                </div>

                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Trust indicators */}
          <div className="mt-20 bg-white rounded-2xl shadow-card p-8 sm:p-12">
            <div className="grid sm:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">Fast</div>
                <div className="text-muted-foreground">Response Time</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">Professional</div>
                <div className="text-muted-foreground">Medical Staff</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">Reliable</div>
                <div className="text-muted-foreground">Service Delivery</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
