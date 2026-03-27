import { Shield, Award, CheckCircle2, Star } from "lucide-react";

const TrustSignals = () => {
  const signals = [
    {
      icon: Shield,
      title: "DHA Licensed",
      description: "Fully licensed by Dubai Health Authority for medical transport.",
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      icon: Award,
      title: "DoH Certified",
      description: "Authorized provider by Department of Health - Abu Dhabi.",
      color: "text-red-600",
      bgColor: "bg-red-50"
    },
    {
      icon: CheckCircle2,
      title: "Expert Paramedics",
      description: "100% licensed & highly trained medical professionals.",
      color: "text-green-600",
      bgColor: "bg-green-50"
    },
    {
      icon: Star,
      title: "50+ Years Exp",
      description: "Combined expert leadership in UAE healthcare services.",
      color: "text-orange-600",
      bgColor: "bg-orange-50"
    }
  ];

  return (
    <section className="py-12 bg-white border-y border-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {signals.map((signal, index) => (
            <div key={index} className="flex flex-col items-center text-center p-4 rounded-xl hover:shadow-md transition-shadow duration-300">
              <div className={`w-12 h-12 sm:w-16 sm:h-16 ${signal.bgColor} rounded-2xl flex items-center justify-center mb-4`}>
                <signal.icon className={`w-6 h-6 sm:w-8 sm:h-8 ${signal.color}`} />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-primary mb-1">{signal.title}</h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-tight">
                {signal.description}
              </p>
            </div>
          ))}
        </div>
        
        {/* Certification Badges Placeholder */}
        <div className="mt-12 flex flex-wrap justify-center items-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          <div className="flex flex-col items-center">
            <div className="h-12 w-32 bg-gray-200 rounded flex items-center justify-center text-[10px] font-bold text-gray-400 border border-dashed border-gray-300">
              DHA LOGO
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="h-12 w-32 bg-gray-200 rounded flex items-center justify-center text-[10px] font-bold text-gray-400 border border-dashed border-gray-300">
              DOH LOGO
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="h-12 w-32 bg-gray-200 rounded flex items-center justify-center text-[10px] font-bold text-gray-400 border border-dashed border-gray-300">
              MOH LOGO
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSignals;
