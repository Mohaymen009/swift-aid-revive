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
                Why EMRS is Your Trusted Partner for Medical Transport in the UAE
              </h2>

              <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                <p>
                  <span className="text-primary font-bold">EMRS (Medical Response Services)</span> is a professional ambulance company. We serve all seven emirates of the UAE.
                </p>
                <p>
                  We provide safe and timely patient transfers. Our services are available for:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Hospitals and clinics</li>
                  <li>Individual patients</li>
                  <li>Events and corporate needs</li>
                </ul>

                <p className="pt-2">
                  Our team has over <span className="text-primary font-semibold">50 years of combined experience</span>. We employ expert paramedics and nurses. Our ambulances are modern and fully equipped.
                </p>

                <p>
                  We offer a wide range of services:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>Hospital Transfers:</strong> Safe transport between facilities.</li>
                  <li><strong>Patient Discharge:</strong> Comfortable rides home.</li>
                  <li><strong>Dialysis Transport:</strong> Scheduled and reliable.</li>
                  <li><strong>Medical Escorts:</strong> Professional care for long trips.</li>
                </ul>

                <p className="pt-2">
                  We know medical transport can be stressful. We make it simple and safe. Our team is polite and efficient. We are available 24/7 to help you.
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
                  alt="EMRS Professional Ambulance Team"
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
