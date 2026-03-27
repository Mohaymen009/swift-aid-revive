import Navigation from "./Navigation";
import Footer from "./Footer";
import FloatingContact from "./FloatingContact";
import SEOHead from "./SEOHead";
import TrustSignals from "./TrustSignals";
import BookingForm from "./BookingForm";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, ChevronRight, Check } from "lucide-react";

interface ServicePageTemplateProps {
  title: string;
  subtitle: string;
  description: string;
  seoTitle: string;
  seoDescription: string;
  canonicalUrl: string;
  features: { title: string; description: string }[];
  whoNeedsIt: string[];
  howItWorks: { step: string; title: string; description: string }[];
  faqs: { question: string; answer: string }[];
  heroImage?: string;
  serviceKeywords?: string[];
}

const ServicePageTemplate = ({
  title,
  subtitle,
  description,
  seoTitle,
  seoDescription,
  canonicalUrl,
  features,
  whoNeedsIt,
  howItWorks,
  faqs,
  heroImage,
  serviceKeywords
}: ServicePageTemplateProps) => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title={seoTitle}
        description={seoDescription}
        canonical={canonicalUrl}
      />
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-900 border-b border-white/10">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-950 to-primary/20"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptMCAwdi02aC02djZoNnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <span className="inline-block px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-bold mb-6 animate-fade-in">
              Licensed & Professional 24/7 Medical Service
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white mb-6 leading-tight animate-fade-up">
              {title}
            </h1>
            <p className="text-xl sm:text-2xl text-blue-100/90 mb-10 leading-relaxed max-w-3xl animate-fade-up" style={{ animationDelay: "0.1s" }}>
              {subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              <Button 
                size="lg" 
                className="bg-[#FF4D00] hover:bg-[#FF6200] text-white font-bold text-lg px-8 py-7 rounded-xl shadow-lg hover:shadow-orange-500/20 transition-all hover:scale-105"
                asChild
              >
                <a href="tel:+971554728133" className="flex items-center gap-3">
                  <Phone className="w-6 h-6" />
                  Call +971 55 472 8133
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="bg-white/10 border-white/20 text-white hover:bg-white/20 font-bold text-lg px-8 py-7 rounded-xl backdrop-blur-sm transition-all"
                asChild
              >
                <a href="https://wa.me/971554728133" className="flex items-center gap-3">
                  <MessageCircle className="w-6 h-6" />
                  WhatsApp Us
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <TrustSignals />

      {/* Main Content & Form Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-7">
              <div className="prose prose-lg max-w-none">
                <h2 className="text-3xl font-bold text-primary mb-6">Service Overview</h2>
                <div className="text-lg text-muted-foreground leading-relaxed whitespace-pre-wrap mb-10">
                  {description}
                </div>

                <div className="bg-blue-50/50 rounded-2xl p-8 mb-12 border border-blue-100">
                  <h3 className="text-2xl font-bold text-primary mb-6">Who Needs This Service?</h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {whoNeedsIt.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                        <span className="text-gray-700 font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <h3 className="text-2xl font-bold text-primary mb-6">Key Features & Benefits</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                  {features.map((feature, index) => (
                    <div key={index} className="p-6 bg-gray-50 rounded-xl border border-gray-100 hover:border-accent/30 transition-colors">
                      <h4 className="font-bold text-primary mb-2 line-clamp-1">{feature.title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="sticky top-24">
                <BookingForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50 border-y border-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">How It Works</h2>
            <p className="text-lg text-muted-foreground">Safe and professional medical transport in 4 simple steps</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((item, index) => (
              <div key={index} className="relative group">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-white shadow-md border border-gray-100 rounded-full flex items-center justify-center text-2xl font-black text-accent mb-6 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                    {item.step}
                  </div>
                  <h4 className="text-xl font-bold text-primary mb-3">{item.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                </div>
                {index < howItWorks.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[calc(50%+40px)] w-[calc(100%-80px)] h-0.5 bg-gray-200"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose EMRS Section */}
      <section className="py-20 bg-primary text-white overflow-hidden relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-5xl font-bold mb-8">Why Choose EMRS Over Others?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-left mt-12">
              <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
                <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-xs">✓</div>
                  Modern Fleet
                </h4>
                <p className="text-blue-100/80">Our ambulances are latest-generation vehicles equipped with advanced life support systems.</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
                <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-xs">✓</div>
                  Licensed Staff
                </h4>
                <p className="text-blue-100/80">All our paramedics and nurses are DHA/DoH licensed with years of emergency experience.</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
                <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-xs">✓</div>
                  Fast Response
                </h4>
                <p className="text-blue-100/80">Strategic ambulance positioning across UAE ensures rapid dispatch and minimal wait times.</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
                <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-xs">✓</div>
                  24/7 Support
                </h4>
                <p className="text-blue-100/80">Our dispatch center is active round-the-clock for emergencies and scheduled transfers.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground">Answers to common questions about {title}</p>
          </div>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="p-8 bg-gray-50 rounded-2xl border border-gray-100 hover:border-accent/20 transition-all">
                <h4 className="text-xl font-bold text-primary mb-3 flex gap-3">
                  <span className="text-accent font-black">Q.</span>
                  {faq.question}
                </h4>
                <p className="text-muted-foreground leading-relaxed pl-8">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-5xl font-black mb-8 leading-tight">Need Urgent Medical Transport?</h2>
          <p className="text-xl mb-12 opacity-90 max-w-2xl mx-auto">Call our 24/7 dispatch center now for a fast response anywhere in the UAE.</p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href="tel:+971554728133" 
              className="bg-white text-accent font-black text-2xl px-10 py-6 rounded-2xl shadow-xl hover:scale-105 transition-transform flex items-center justify-center gap-4"
            >
              <Phone className="w-8 h-8" />
              +971 55 472 8133
            </a>
            <a 
              href="https://wa.me/971554728133" 
              className="bg-[#25D366] text-white font-black text-2xl px-10 py-6 rounded-2xl shadow-xl hover:scale-105 transition-transform flex items-center justify-center gap-4"
            >
              <MessageCircle className="w-8 h-8" />
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingContact />
    </div>
  );
};

export default ServicePageTemplate;
