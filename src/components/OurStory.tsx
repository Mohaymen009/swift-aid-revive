const OurStory = () => {
  return (
    <section id="story" className="py-20 bg-gradient-to-b from-background to-blue-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-6">
              <div className="inline-block">
                <span className="text-accent font-bold text-sm uppercase tracking-wide">Our Story</span>
              </div>
              
              <h2 className="text-4xl sm:text-5xl font-bold text-primary">
                Pioneering Medical Response in the UAE
              </h2>
              
              <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                <p>
                  Founded with a vision to revolutionize medical services in the United Arab Emirates, the founder has built a reputation for excellence, innovation, and an unwavering commitment to patient care in Dubai.
                </p>
                
                <p>
                  Backed by over <span className="text-primary font-semibold">50 years of combined experience</span> in the field, our team of highly trained medical professionals uses state-of-the-art equipment and strategic operations to ensure that quality medical services are always available when needed.
                </p>
                
                <p>
                  We believe that every journey counts, and our mission is to provide the most effective and reliable medical services possible, ensuring the best outcomes for our patients and their families.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold text-accent mb-2">50+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold text-accent mb-2">24/7</div>
                  <div className="text-sm text-muted-foreground">Availability</div>
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
                  src="https://plus.unsplash.com/premium_photo-1661775601929-8c775187bea6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                  alt="EMRS UAE Medical Response" 
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