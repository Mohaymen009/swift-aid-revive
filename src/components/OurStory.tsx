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
                Your Trusted Partner for Medical Transport in the UAE
              </h2>

              <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                <p>
                  <strong className="text-primary">EMRS (Medical Response Services)</strong> is a professional ambulance and medical transport company serving all seven emirates of the United Arab Emirates. We specialize in providing reliable, safe, and timely patient transfer services for hospitals, clinics, and individual patients across Dubai, Abu Dhabi, Sharjah, Ajman, Ras Al Khaimah, Fujairah, and Umm Al Quwain.
                </p>

                <p>
                  Our team comprises experienced paramedics, nurses, and medical professionals with over <span className="text-primary font-semibold">50 years of combined experience</span> in the healthcare industry. We operate modern, fully-equipped ambulances designed for both emergency and non-emergency medical transport needs.
                </p>

                <p>
                  Whether you need <strong className="text-primary">hospital-to-hospital transfers</strong>, <strong className="text-primary">patient discharge transport</strong>, <strong className="text-primary">dialysis transportation</strong>, or <strong className="text-primary">long-distance medical escorts</strong>, EMRS provides professional and compassionate service. Our ambulances are equipped with advanced medical equipment to ensure patient safety and comfort during transit.
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
                  src="https://plus.unsplash.com/premium_photo-1661775601929-8c775187bea6?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="EMRS Professional Ambulance Team in UAE"
                  className="w-full h-full object-cover"
                  loading="lazy"
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
