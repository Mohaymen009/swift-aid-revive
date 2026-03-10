import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";

const emirateServices = [
  {
    title: "Ambulance Services Dubai",
    url: "/dubai-ambulance-services",
    description: "Medical Services"
  },
  {
    title: "Abu Dhabi Patient Transfers",
    url: "/abu-dhabi-ambulance-services", 
    description: "Medical Services"
  },
  {
    title: "Sharjah Hospital Transport",
    url: "/sharjah-ambulance-services",
    description: "Medical Services"
  },
  {
    title: "Ajman Medical Transport",
    url: "/ajman-ambulance-services",
    description: "Medical Services"
  },
  {
    title: "Ras Al Khaimah Ambulance Services",
    url: "/ras-al-khaimah-ambulance-services",
    description: "Medical Services"
  },
  {
    title: "Fujairah Medical Transport",
    url: "/fujairah-ambulance-services",
    description: "Medical Services"
  },
  {
    title: "Umm Al Quwain Patient Transport",
    url: "/umm-al-quwain-ambulance-services",
    description: "Medical Services"
  }
];

const EmirateServices = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-accent font-bold text-sm uppercase tracking-wide">Our Coverage</span>
            <h2 className="text-4xl sm:text-5xl font-bold text-primary mt-4 mb-6">
              Services Across All Emirates
            </h2>
            <p className="text-lg text-muted-foreground">
              Providing professional ambulance and medical transport services throughout the UAE
            </p>
          </div>

          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {emirateServices.map((emirate, index) => (
              <Card key={index} className="group relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="p-6 lg:p-8">
                  <h3 className="text-xl lg:text-2xl font-bold text-primary mb-3 lg:mb-4 group-hover:text-accent transition-colors">
                    {emirate.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed mb-4 lg:mb-6 text-sm lg:text-base">
                    {emirate.description}
                  </p>

                  <Button 
                    variant="outline"
                    className="group hover:bg-accent hover:text-white border-accent/20 hover:border-accent font-semibold w-full sm:w-auto"
                    asChild
                  >
                    <Link 
                      to={emirate.url} 
                      className="flex items-center justify-center gap-2"
                      onClick={() => window.scrollTo(0, 0)}
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmirateServices;
