import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, ArrowRight, Check, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import SEOHead from "@/components/SEOHead";
import Breadcrumbs from "@/components/Breadcrumbs";
import LastUpdated from "@/components/LastUpdated";

export interface FlatFAQ { question: string; answer: string | React.ReactNode }
export interface FlatBenefit { title: string; description: string; icon?: React.ComponentType<{ className?: string }> }
export interface FlatStep { title: string; description: string }
export interface FlatRelated { label: string; to: string; external?: boolean }
export interface FlatSection { id?: string; eyebrow?: string; title: string; body?: React.ReactNode; bullets?: string[]; surface?: "white" | "surface" | "muted" }

export interface FlatServicePageProps {
  seoTitle: string;
  description: string;
  canonical?: string;
  keywords?: string[];
  schema?: Record<string, any> | Record<string, any>[];
  eyebrow?: string;
  h1: string;
  intro: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  benefits?: FlatBenefit[];
  steps?: FlatStep[];
  sections?: FlatSection[];
  trust?: string[];
  faqs?: FlatFAQ[];
  relatedLinks?: FlatRelated[];
  lastUpdated?: string | Date;
  breadcrumbs?: { name: string; path: string }[];
  phoneNumber?: string;
  whatsappHref?: string;
  children?: React.ReactNode;
}

const DEFAULT_PHONE = "+971 55 472 8133";
const DEFAULT_WA = "https://wa.me/971554728133?text=Hi%20%F0%9F%91%8B%2C%20I%E2%80%99m%20interested%20in%20your%20services.";

const FlatServicePage: React.FC<FlatServicePageProps> = ({
  seoTitle,
  description,
  canonical,
  keywords,
  schema,
  eyebrow,
  h1,
  intro,
  primaryCta,
  secondaryCta,
  benefits = [],
  steps = [],
  sections = [],
  trust = [],
  faqs = [],
  relatedLinks = [],
  lastUpdated,
  breadcrumbs,
  phoneNumber = DEFAULT_PHONE,
  whatsappHref = DEFAULT_WA,
  children,
}) => {
  const location = useLocation();
  const telHref = `tel:${phoneNumber.replace(/\s+/g, "")}`;
  const crumbs = breadcrumbs && breadcrumbs.length > 0 ? breadcrumbs : [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services/" },
    { name: h1, path: location.pathname },
  ];

  const surfaceClass = (s?: FlatSection["surface"]) =>
    s === "surface" ? "bg-surface" : s === "muted" ? "bg-surface-muted" : "bg-card";

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEOHead
        title={seoTitle}
        description={description}
        canonical={canonical}
        keywords={keywords}
        additionalStructuredData={schema as any}
        breadcrumbs={crumbs.map(c => ({ name: c.name, item: c.path }))}
      />
      <Navigation />

      {/* Flat hero */}
      <section className="bg-primary text-primary-foreground pt-28 pb-16 sm:pt-32 sm:pb-20 border-b border-hairline/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            {eyebrow && (
              <span className="inline-block px-3 py-1 bg-accent text-accent-foreground text-xs font-bold uppercase tracking-wider rounded-sm mb-5">
                {eyebrow}
              </span>
            )}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight mb-5">
              {h1}
            </h1>
            <p className="text-base sm:text-lg text-primary-foreground/80 max-w-2xl mb-8 leading-relaxed">
              {intro}
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold rounded-md">
                <a href={primaryCta?.href || telHref} className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  {primaryCta?.label || `Call ${phoneNumber}`}
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary font-bold rounded-md">
                <a href={secondaryCta?.href || whatsappHref} target={secondaryCta ? undefined : "_blank"} rel="noopener noreferrer" className="flex items-center gap-2">
                  <img src="/whatsapp.svg" alt="WhatsApp" width={18} height={18} className="w-[18px] h-[18px]" />
                  {secondaryCta?.label || "WhatsApp Us"}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Breadcrumbs */}
      <div className="bg-surface-muted border-b border-hairline">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <Breadcrumbs items={crumbs} className="text-xs text-muted-foreground" />
        </div>
      </div>

      {/* Trust strip */}
      {trust.length > 0 && (
        <section className="bg-card border-b border-hairline">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-muted-foreground">
              {trust.map(t => (
                <li key={t} className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-accent" aria-hidden="true" />
                  <span className="font-medium text-foreground">{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Benefits grid */}
      {benefits.length > 0 && (
        <section className="py-16 sm:py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mb-10">
              <span className="text-accent text-xs font-bold uppercase tracking-wider">Why choose EMRS</span>
              <h2 className="text-2xl sm:text-3xl font-black text-foreground mt-2">Key benefits</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-hairline border border-hairline">
              {benefits.map((b, i) => (
                <div key={i} className="bg-card p-6 sm:p-8">
                  {b.icon && <b.icon className="w-8 h-8 text-accent mb-4" />}
                  <h3 className="text-lg font-bold text-foreground mb-2">{b.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{b.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* How it works */}
      {steps.length > 0 && (
        <section className="py-16 sm:py-20 bg-surface">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mb-10">
              <span className="text-accent text-xs font-bold uppercase tracking-wider">How it works</span>
              <h2 className="text-2xl sm:text-3xl font-black text-foreground mt-2">Simple, fast, and clinical</h2>
            </div>
            <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {steps.map((s, i) => (
                <li key={i} className="bg-card border border-hairline p-6">
                  <div className="text-accent font-black text-2xl mb-3">{String(i + 1).padStart(2, "0")}</div>
                  <h3 className="text-base font-bold text-foreground mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.description}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>
      )}

      {/* Detailed sections */}
      {sections.map((sec, i) => (
        <section key={i} id={sec.id} className={`py-14 sm:py-16 ${surfaceClass(sec.surface)} border-t border-hairline`}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              {sec.eyebrow && (
                <span className="text-accent text-xs font-bold uppercase tracking-wider">{sec.eyebrow}</span>
              )}
              <h2 className="text-2xl sm:text-3xl font-black text-foreground mt-2 mb-4">{sec.title}</h2>
              {sec.body && (
                <div className="prose prose-slate max-w-none text-muted-foreground leading-relaxed">{sec.body}</div>
              )}
              {sec.bullets && sec.bullets.length > 0 && (
                <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
                  {sec.bullets.map(b => (
                    <li key={b} className="flex items-start gap-2 text-sm text-foreground">
                      <Check className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </section>
      ))}

      {children && (
        <div className="bg-background">{children}</div>
      )}

      {/* FAQ */}
      {faqs.length > 0 && (
        <section className="py-16 sm:py-20 bg-card border-t border-hairline">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-8">
              <span className="text-accent text-xs font-bold uppercase tracking-wider">FAQ</span>
              <h2 className="text-2xl sm:text-3xl font-black text-foreground mt-2">Frequently asked questions</h2>
            </div>
            <div className="max-w-3xl">
              <FlatFAQList faqs={faqs} />
            </div>
          </div>
        </section>
      )}

      {/* Related links */}
      {relatedLinks.length > 0 && (
        <section className="py-12 bg-surface-muted border-t border-hairline">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-4">Related services</h2>
            <ul className="flex flex-wrap gap-2">
              {relatedLinks.map(l => (
                <li key={l.to + l.label}>
                  {l.external ? (
                    <a href={l.to} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 px-3 py-2 bg-card border border-hairline text-sm text-foreground hover:border-accent hover:text-accent transition-colors">
                      {l.label} <ArrowRight className="w-3 h-3" />
                    </a>
                  ) : (
                    <Link to={l.to} className="inline-flex items-center gap-1 px-3 py-2 bg-card border border-hairline text-sm text-foreground hover:border-accent hover:text-accent transition-colors">
                      {l.label} <ArrowRight className="w-3 h-3" />
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Final CTA band */}
      <section className="bg-primary text-primary-foreground py-14">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h2 className="text-xl sm:text-2xl font-black mb-1">Need help right now?</h2>
              <p className="text-primary-foreground/70 text-sm">Our licensed team is available 24/7 across all 7 emirates.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold rounded-md">
                <a href={telHref} className="flex items-center gap-2"><Phone className="w-5 h-5" />Call {phoneNumber}</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary font-bold rounded-md">
                <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <img src="/whatsapp.svg" alt="WhatsApp" width={18} height={18} className="w-[18px] h-[18px]" />WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {lastUpdated && (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <LastUpdated date={lastUpdated} className="text-xs text-muted-foreground" />
        </div>
      )}

      <Footer />
      <FloatingContact />
    </div>
  );
};

export default FlatServicePage;

const FlatFAQList: React.FC<{ faqs: FlatFAQ[] }> = ({ faqs }) => {
  const [open, setOpen] = useState<number | null>(0);
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(f => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: typeof f.answer === "string" ? f.answer : "" },
    })),
  };
  return (
    <div className="divide-y divide-hairline border-y border-hairline">
      {faqs.map((f, i) => (
        <div key={i} itemScope itemType="https://schema.org/Question">
          <button
            type="button"
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between gap-4 py-5 text-left"
            aria-expanded={open === i}
          >
            <h3 className="text-base sm:text-lg font-semibold text-foreground" itemProp="name">{f.question}</h3>
            <ChevronDown className={`w-5 h-5 text-accent flex-shrink-0 transition-transform ${open === i ? "rotate-180" : ""}`} aria-hidden="true" />
          </button>
          {open === i && (
            <div className="pb-5 text-sm text-muted-foreground leading-relaxed" itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
              <div itemProp="text">{f.answer}</div>
            </div>
          )}
        </div>
      ))}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </div>
  );
};