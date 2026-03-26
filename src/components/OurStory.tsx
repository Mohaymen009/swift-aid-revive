import teamImage from "@/assets/team-ambulance.jpg";

const OurStory = () => {
  return (
    <section id="story" className="py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div className="space-y-8">
              <div>
                <span className="text-accent font-bold text-xs uppercase tracking-[0.2em]">About EMRS</span>
                <h2 className="text-4xl sm:text-5xl font-black text-primary mt-3 leading-tight">
                  A Team You Can Count On When It Matters Most
                </h2>
              </div>

              <div className="space-y-5 text-muted-foreground text-base leading-relaxed">
                <p>
                  <strong className="text-primary">EMRS</strong> was founded with a simple mission: to make medical transport less stressful for patients and families. We understand that needing an <strong>ambulance</strong>—even for a routine hospital visit—can be overwhelming.
                </p>
                <p>
                  That's why we focus on <strong>safety, comfort, and reliability</strong>. Our team includes:
                </p>
                <ul className="space-y-3 pl-1">
                  {[
                    "Licensed paramedics and EMTs with DHA/HAAD credentials",
                    "Trained nurses for specialized patient care",
                    "Experienced drivers who know the UAE inside and out",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <p>
                  With over <span className="text-primary font-semibold">50 years of combined experience</span>, we've helped thousands of patients—whether that's a hospital transfer, dialysis appointment, or a comfortable ride home after surgery.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 pt-6 border-t border-border">
                {[
                  { value: "50+", label: "Years Experience" },
                  { value: "24/7", label: "Always Available" },
                  { value: "7", label: "Emirates" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-3xl sm:text-4xl font-black text-accent">{stat.value}</div>
                    <div className="text-xs text-muted-foreground mt-1 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-premium">
                <img
                  src={teamImage}
                  alt="EMRS Professional Ambulance Team Dubai UAE"
                  title="EMRS ambulance services team"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  width={1024}
                  height={1024}
                />
              </div>
              {/* Accent decoration */}
              <div className="absolute -bottom-4 -right-4 w-full h-full rounded-2xl border-2 border-accent/20 -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
