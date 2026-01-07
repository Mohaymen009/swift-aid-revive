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
                  <span className="text-primary font-bold">EMRS (Medical Response Services)</span> is a professional ambulance and medical transport company serving all seven emirates of the United Arab Emirates. We specialize in providing reliable, safe, and timely patient transfer services for hospitals, clinics, and individual patients across Dubai, Abu Dhabi, Sharjah, Ajman, Ras Al Khaimah, Fujairah, and Umm Al Quwain.
                </p>

                <p>
                  Our team comprises experienced paramedics, nurses, and medical professionals with over <span className="text-primary font-semibold">50 years of combined experience</span> in the healthcare industry. We operate modern, fully-equipped ambulances designed for both emergency and non-emergency medical transport needs.
                </p>

                <p>
                  Whether you need <span className="text-primary font-bold">hospital-to-hospital transfers</span>, <span className="text-primary font-bold">patient discharge transport</span>, <span className="text-primary font-bold">dialysis transportation</span>, or <span className="text-primary font-bold">long-distance medical escorts</span>, EMRS provides professional and compassionate service. Our ambulances are equipped with advanced medical equipment to ensure patient safety and comfort during transit.
                </p>

                <p>
                  We understand that medical transport situations can be stressful. That's why we focus on delivering prompt, courteous, and efficient service every time. Our 24/7 availability means you can count on us whenever you need medical transportation assistance in the UAE.
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
                  src="/images/hero.webp"
                  width="428"
                  height="285"
                  fetchpriority="high"
                  loading="eager"
                  alt="EMRS Professional Ambulance Team"
                  className="w-full h-full object-cover"
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
