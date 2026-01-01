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
  description: string;
  imageUrl: string;
  imageAlt: string;
  lastUpdated: string | Date;
  updates?: string[];
  faqs?: FAQItem[];
  breadcrumbs?: CrumbUi[];
  canonical?: string;
  phoneNumber?: string;
  relatedLinks?: Array<{ label: string; to: string }>;
  children?: React.ReactNode;
}

const ServicePageTemplate: React.FC<ServicePageTemplateProps> = ({
  title,
  description,
  imageUrl,
  imageAlt,
  lastUpdated,
  updates = [],
  faqs = [],
  breadcrumbs,
  canonical,
  phoneNumber = "+971 55 472 8133",
  relatedLinks,
  children,
}) => {
  const location = useLocation();
  const pageUrl = `https://emrs.ae${location.pathname}`;

  const defaultBreadcrumbsUi: CrumbUi[] = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: title, path: location.pathname },
  ];

  const crumbsUi = breadcrumbs && breadcrumbs.length > 0 ? breadcrumbs : defaultBreadcrumbsUi;
  const crumbsSeo = crumbsUi.map(c => ({ name: c.name, item: c.path }));

  const defaultRelated: Array<{ label: string; to: string }> = [
    { label: 'Ambulance Services', to: '/ambulance-services-uae' },
    { label: 'Doctor on Call', to: '/doctor-on-call-uae' },
    { label: 'Home Healthcare', to: '/home-healthcare-services-uae' },
    { label: 'Patient Transport (NEMT)', to: '/non-emergency-medical-transport-uae' },
    { label: 'Wellness & Diagnostics', to: '/wellness-diagnostic-services-uae' },
  ];
  const links = (relatedLinks && relatedLinks.length > 0) ? relatedLinks : defaultRelated;

  return (
    <div className="min-h-screen bg-white">
      <SEOHead
        title={title}
        description={description}
        canonical={canonical || pageUrl}
        image={imageUrl}
        imageAlt={imageAlt}
        breadcrumbs={crumbsSeo}
      />

      <Navigation />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        {updates.length > 0 && (
          <ContentUpdate date={lastUpdated} updates={updates} className="mb-8" />
        )}

        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{title}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{description}</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <article className="lg:col-span-2 prose max-w-none">
            {children}
            <LastUpdated date={lastUpdated} className="mt-8 text-sm text-gray-500" />
          </article>

          <aside className="space-y-6">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Need Help?</h3>
              <p className="text-gray-600 mb-4">Our team is available 24/7 to assist you with urgent medical needs and patient transfers.</p>
              <CallButton phoneNumber={phoneNumber} className="w-full justify-center">
                Call Now
              </CallButton>
            </div>

            <div className="overflow-hidden rounded-lg">
              <OptimizedImage
                src={imageUrl}
                alt={imageAlt}
                width={400}
                height={300}
                className="w-full h-auto"
              />
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-100">
              <h4 className="text-md font-semibold text-gray-900 mb-3">Related Services</h4>
              <ul className="space-y-2">
                {links.map((l) => (
                  <li key={l.to}>
                    <Link to={l.to} className="text-blue-600 hover:text-blue-800">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>

        {faqs.length > 0 && (
          <section className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
            <FAQSection faqs={faqs} />
          </section>
        )}
      </main>
    </div>
  );
};

export default ServicePageTemplate;
