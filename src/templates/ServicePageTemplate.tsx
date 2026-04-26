import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import CallButton from '../components/CallButton';
import OptimizedImage from '../components/OptimizedImage';
import FAQSection from '../components/FAQSection';
import LastUpdated from '../components/LastUpdated';
import ContentUpdate from '../components/ContentUpdate';
import Breadcrumbs from '../components/Breadcrumbs';
import Navigation from '../components/Navigation';

interface FAQItem {
  question: string;
  answer: string | React.ReactNode;
}

interface CrumbUi { name: string; path: string }

interface ServicePageTemplateProps {
  title: string;
  seoTitle?: string;
  description: string;
  imageUrl?: string;
  imageAlt: string;
  lastUpdated: string | Date;
  updates?: string[];
  faqs?: FAQItem[];
  breadcrumbs?: CrumbUi[];
  canonical?: string;
  phoneNumber?: string;
  relatedLinks?: Array<{ label: string; to: string; external?: boolean }>;
  children?: React.ReactNode;
  hideHeader?: boolean;
  emirate?: string;
}

const EXTERNAL_URL = "https://homehealthcare.emrs.ae/";

const ServicePageTemplate: React.FC<ServicePageTemplateProps> = ({
  title,
  seoTitle,
  description,
  imageUrl = "/site-logo.png",
  imageAlt,
  lastUpdated,
  updates = [],
  faqs = [],
  breadcrumbs,
  canonical,
  phoneNumber = "+971 50 379 0382",
  relatedLinks,
  children,
  hideHeader = false,
  emirate = "Dubai",
}) => {
  const location = useLocation();
  const pageUrl = `https://emrs.ae${location.pathname}`;

  const defaultBreadcrumbsUi: CrumbUi[] = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services/' },
    { name: title, path: location.pathname },
  ];

  const crumbsUi = breadcrumbs && breadcrumbs.length > 0 ? breadcrumbs : defaultBreadcrumbsUi;
  const crumbsSeo = crumbsUi.map(c => ({ name: c.name, item: c.path }));

  const defaultRelated: Array<{ label: string; to: string; external?: boolean }> = [
    { label: 'Ambulance Services', to: '/ambulance-services-uae/' },
    { label: 'Private Ambulance UAE', to: '/private-ambulance-uae/' },
    { label: 'Patient Transfer Dubai', to: '/patient-transfer-service-dubai/' },
    { label: 'Doctor on Call', to: EXTERNAL_URL, external: true },
    { label: 'Home Healthcare', to: EXTERNAL_URL, external: true },
    { label: 'Patient Transport (NEMT)', to: '/non-emergency-medical-transport-uae/' },
    { label: 'Wellness & Diagnostics', to: EXTERNAL_URL, external: true },
  ];
  const links = (relatedLinks && relatedLinks.length > 0) ? relatedLinks : defaultRelated;

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title={seoTitle || title}
        description={description}
        canonical={canonical || pageUrl}
        image={imageUrl}
        imageAlt={imageAlt}
        breadcrumbs={crumbsSeo}
      />

      <Navigation />

      {/* Full-width children area for hero sections */}
      {hideHeader && children && (
        <div className="pt-16">
          {children}
        </div>
      )}

      {!hideHeader && (
        <main id="main-content" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16">
          {updates.length > 0 && (
            <ContentUpdate date={lastUpdated} updates={updates} className="mb-8" />
          )}

          <header className="text-center mb-14">
            <h1 className="text-4xl sm:text-5xl font-black text-primary mb-4">{title}</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">{description}</p>
          </header>

          <article className="prose max-w-none">
            {children}
            <LastUpdated date={lastUpdated} className="mt-8 text-sm text-muted-foreground" />
          </article>

          <aside className="mt-16 space-y-6 max-w-3xl mx-auto">
            <div className="bg-primary rounded-2xl p-8 text-center">
              <h3 className="text-xl font-bold text-white mb-3">Need Help?</h3>
              <p className="text-white/60 mb-6">Our team is available 24/7 to assist you with urgent medical needs and patient transfers.</p>
              <CallButton phoneNumber={phoneNumber} className="w-full justify-center bg-accent hover:bg-accent/90 text-white font-bold rounded-xl">
                Call Now
              </CallButton>
            </div>

            <div className="overflow-hidden rounded-2xl shadow-card">
              <OptimizedImage
                src={imageUrl}
                alt={imageAlt}
                width={400}
                height={300}
                className="w-full h-auto"
              />
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-card">
              <h4 className="text-base font-bold text-primary mb-4">Related Services</h4>
              <ul className="space-y-3">
                {links.map((l) => (
                  <li key={l.to + l.label}>
                    {l.external ? (
                      <a href={l.to} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline text-sm font-medium">
                        {l.label}
                      </a>
                    ) : (
                      <Link to={l.to} className="text-accent hover:underline text-sm font-medium">
                        {l.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {faqs.length > 0 && (
            <section className="mt-20">
              <h2 className="text-2xl font-black text-primary mb-8">{emirate} Ambulance Service FAQs</h2>
              <FAQSection faqs={faqs} />
            </section>
          )}
        </main>
      )}

      {/* For hideHeader pages, show sidebar + FAQs after children */}
      {hideHeader && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <LastUpdated date={lastUpdated} className="mt-8 text-sm text-muted-foreground" />

          <aside className="mt-16 space-y-6 max-w-3xl mx-auto">
            <div className="bg-primary rounded-2xl p-8 text-center">
              <h3 className="text-xl font-bold text-white mb-3">Need Help?</h3>
              <p className="text-white/60 mb-6">Our team is available 24/7 to assist you with medical needs and patient transfers.</p>
              <CallButton phoneNumber={phoneNumber} className="w-full justify-center bg-accent hover:bg-accent/90 text-white font-bold rounded-xl">
                Call Now
              </CallButton>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-card">
              <h4 className="text-base font-bold text-primary mb-4">Related Services</h4>
              <ul className="space-y-3">
                {links.map((l) => (
                  <li key={l.to + l.label}>
                    {l.external ? (
                      <a href={l.to} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline text-sm font-medium">
                        {l.label}
                      </a>
                    ) : (
                      <Link to={l.to} className="text-accent hover:underline text-sm font-medium">
                        {l.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {faqs.length > 0 && (
            <section className="mt-20">
              <h2 className="text-2xl font-black text-primary mb-8">{emirate} Ambulance Service FAQs</h2>
              <FAQSection faqs={faqs} />
            </section>
          )}
        </div>
      )}
    </div>
  );
};

export default ServicePageTemplate;
