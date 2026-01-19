const OurStory = () => {
  return (
    <section id="story" className="py-28 lg:py-32 bg-gradient-to-b from-background to-blue-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-6">
              <div className="inline-block">
                <span className="text-accent font-bold text-sm uppercase tracking-wide">About EMRS</span>
              </div>

              <h2 className="text-4xl sm:text-5xl font-bold text-primary">
                A Team You Can Count On When It Matters Most
              </h2>

              <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                <p>
                  <span className="text-primary font-bold">EMRS</span> was founded with a simple mission: to make medical transport less stressful for patients and their families. We understand that needing an ambulance—even for a routine hospital visit—can be overwhelming.
                </p>
                <p>
                  That's why we focus on what matters most: <strong>safety, comfort, and reliability</strong>. Our team includes:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Licensed paramedics and EMTs with DHA/HAAD credentials</li>
                  <li>Trained nurses for specialized patient care</li>
                  <li>Experienced drivers who know the UAE inside and out</li>
                </ul>

                <p className="pt-2">
                  With over <span className="text-primary font-semibold">50 years of combined experience</span>, we've helped thousands of patients get where they need to be—whether that's a hospital transfer, dialysis appointment, or a comfortable ride home after surgery.
                </p>

                <h3 className="text-xl font-bold text-primary pt-2">
                  Our Ambulance Services
                </h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>Hospital Transfers:</strong> Moving patients safely between facilities.</li>
                  <li><strong>Discharge Transport:</strong> Taking patients home with care.</li>
                  <li><strong>Scheduled Appointments:</strong> Dialysis, check-ups, and follow-ups.</li>
                  <li><strong>Medical Escorts:</strong> Continuous care for long-distance trips.</li>
                </ul>

                <p className="pt-2">
                  We're available 24/7 because medical needs don't follow a schedule. When you call EMRS, you're not just getting a ride—you're getting a team that genuinely cares.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold text-accent mb-2">50+</div>
                  <div className="text-sm text-muted-foreground">Years Combined Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold text-accent mb-2">24/7</div>
                  <div className="text-sm text-muted-foreground">Always Available</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold text-accent mb-2">7</div>
                  <div className="text-sm text-muted-foreground">Emirates Covered</div>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-elevated">
                <img
                  src="https://plus.unsplash.com/premium_photo-1661775601929-8c775187bea6?q=80&w=800&auto=format&q=75"
                  alt="EMRS Professional Ambulance Services Team - Medical Transport UAE"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  width={621}
                  height={414}
                />
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/10 rounded-2xl -z-10" />
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/10 rounded-2xl -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
