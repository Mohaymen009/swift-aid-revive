import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

export interface SEOHeadProps {
  title?: string;
  description?: string;
  canonical?: string;
  type?: 'website' | 'article';
  emirate?: string;
  image?: string;
  imageAlt?: string;
  imageWidth?: number;
  imageHeight?: number;
  keywords?: string[];
  noIndex?: boolean;
  structuredData?: Record<string, any>;
  publishedTime?: string;
  modifiedTime?: string;
  headline?: string;
  author?: string;
  breadcrumbs?: Array<{ name: string; item: string }>;
  additionalStructuredData?: Record<string, any> | Record<string, any>[];
}

const SEOHead = ({
  title = "EMRS Ambulance Services Dubai | Medical Transport & Coverage",
  description = "Ambulance services across UAE - EMRS 24/7 provides licensed patient transfer and medical transport services across all seven emirates. Fast, safe, and compassionate care.",
  canonical: customCanonical,
  type = "website",
  emirate,
  image = "/site-logo.png",
  imageAlt = "EMRS 24/7 Ambulance & Medical Services in UAE",
  imageWidth = 1200,
  imageHeight = 630,
  keywords = [
    "ambulance services UAE",
    "medical transport Dubai",
    "patient transport services",
    "private ambulance UAE",
    "24/7 medical care",
    "home healthcare services",
    "doctor on call UAE",
    "non-emergency medical transport",
    "hospital transfer services",
    "medical escort team",
    "professional medical team UAE",
    "learn about ambulance services"
  ],
  noIndex = false,
  structuredData: customStructuredData,
  additionalStructuredData,
  publishedTime,
  modifiedTime,
  headline,
  author = "EMRS Medical Team",
  breadcrumbs = []
}: SEOHeadProps) => {
  const location = useLocation();

  const baseUrl = 'https://emrs.ae';
  const pathname = location.pathname.endsWith('/') ? location.pathname : `${location.pathname}/`;
  const currentUrl = customCanonical || `${baseUrl}${pathname}`;
  const siteName = "EMRS 24/7";
  const twitterHandle = "@EMRSUAE";
  const fullImageUrl = image.startsWith('http') ? image : `${baseUrl}${image.startsWith('/') ? '' : '/'}${image}`;

  // Emirate-specific keywords enhancement
  const emirateKeywords = emirate ? [
    `ambulance ${emirate}`,
    `private ambulance ${emirate}`,
    `medical transport ${emirate}`,
    `patient transfer ${emirate}`,
    `24/7 ambulance ${emirate}`,
    ...keywords
  ] : keywords;

  // Organization Schema for entity recognition (CRITICAL for E-E-A-T)
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${baseUrl}/#organization`,
    "name": "EMRS - Medical Response Services LLC",
    "legalName": "EMRS - Medical Response Services LLC",
    "alternateName": ["EMRS", "EMRS 24/7", "EMRS UAE"],
    "description": "Licensed ambulance and medical transport provider serving all seven emirates of the UAE with 24/7 professional patient care.",
    "url": baseUrl,
    "logo": {
      "@type": "ImageObject",
      "url": `${baseUrl}/emrslogo.png`,
      "width": 512,
      "height": 512
    },
    "image": `${baseUrl}/site-logo.png`,
    "telephone": "+971554728133",
    "email": "info@emrs.ae",
    "foundingDate": "2020",
    "numberOfEmployees": {
      "@type": "QuantitativeValue",
      "minValue": 10,
      "maxValue": 50
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Al Qusais Industrial Area",
      "addressLocality": "Dubai",
      "addressRegion": "Dubai",
      "postalCode": "00000",
      "addressCountry": "AE"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 25.2854,
      "longitude": 55.3667
    },
    "areaServed": [
      { "@type": "Country", "name": "United Arab Emirates" },
      { "@type": "City", "name": "Dubai" },
      { "@type": "City", "name": "Abu Dhabi" },
      { "@type": "City", "name": "Sharjah" },
      { "@type": "City", "name": "Ajman" },
      { "@type": "City", "name": "Ras Al Khaimah" },
      { "@type": "City", "name": "Fujairah" },
      { "@type": "City", "name": "Umm Al Quwain" }
    ],
    "sameAs": [
      "https://www.facebook.com/emrsuae",
      "https://www.instagram.com/emrsuae",
      "https://www.linkedin.com/in/emrs-ambulance-services-llc-9270011b5/",
      "https://g.co/kgs/emrs-uae"
    ],
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+971554728133",
        "contactType": "customer service",
        "areaServed": "AE",
        "availableLanguage": ["English", "Arabic", "Hindi", "Urdu"],
        "hoursAvailable": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          "opens": "00:00",
          "closes": "23:59"
        }
      },
      {
        "@type": "ContactPoint",
        "telephone": "+971554728133",
        "contactType": "emergency",
        "areaServed": "AE",
        "availableLanguage": ["English", "Arabic"]
      }
    ]
  };

  // MedicalBusiness structured data for local SEO
  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": ["MedicalBusiness", "LocalBusiness", "EmergencyService"],
    "@id": `${baseUrl}/#medicalbusiness`,
    "name": "EMRS - Medical Response Services LLC",
    "alternateName": "EMRS 24/7",
    "description": description,
    "url": baseUrl,
    "logo": {
      "@type": "ImageObject",
      "url": `${baseUrl}/emrslogo.png`,
      "width": 512,
      "height": 512
    },
    "image": `${baseUrl}/site-logo.png`,
    "telephone": "+971554728133",
    "email": "info@emrs.ae",
    "priceRange": "$$",
    "currenciesAccepted": "AED",
    "paymentAccepted": "Cash, Credit Card, Insurance",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "13",
      "bestRating": "5",
      "worstRating": "1"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Al Qusais Industrial Area",
      "addressLocality": "Dubai",
      "addressRegion": "Dubai",
      "addressCountry": "AE"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 25.2854,
      "longitude": 55.3667
    },
    "areaServed": [
      { "@type": "City", "name": "Dubai" },
      { "@type": "City", "name": "Abu Dhabi" },
      { "@type": "City", "name": "Sharjah" },
      { "@type": "City", "name": "Ajman" },
      { "@type": "City", "name": "Ras Al Khaimah" },
      { "@type": "City", "name": "Fujairah" },
      { "@type": "City", "name": "Umm Al Quwain" }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Medical Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Private Ambulance Services",
            "description": "Licensed medical transport for hospital transfers, patient discharge, and inter-facility transport"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Non-Emergency Medical Transport",
            "description": "Scheduled transport for dialysis, medical appointments, and routine hospital visits"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Doctor on Call",
            "description": "Licensed physicians available for home and hotel visits across the UAE"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Home Healthcare",
            "description": "Professional nursing care, physiotherapy, and elderly care at home"
          }
        }
      ]
    },
    "parentOrganization": {
      "@id": `${baseUrl}/#organization`
    }
  };

  const finalStructuredData = customStructuredData || defaultStructuredData;

  // Build breadcrumb structured data
  const derivedCrumbs = (breadcrumbs && breadcrumbs.length > 0)
    ? breadcrumbs
    : (() => {
      const parts = location.pathname.split('/').filter(Boolean);
      const auto = [{ name: 'Home', item: '/' }];
      parts.forEach((seg, idx) => {
        const path = `/${parts.slice(0, idx + 1).join('/')}/`;
        const name = seg.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
        auto.push({ name, item: path });
      });
      return auto;
    })();

  const breadcrumbStructuredData = derivedCrumbs.length > 1 ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": derivedCrumbs.map((b, idx) => ({
      "@type": "ListItem",
      "position": idx + 1,
      "name": b.name,
      "item": `${baseUrl}${b.item}`
    }))
  } : null;

  // Article Structured Data
  const articleStructuredData = type === 'article' ? {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": headline || title,
    "image": fullImageUrl,
    "author": {
      "@type": "Organization",
      "name": author,
      "url": baseUrl
    },
    "publisher": {
      "@type": "Organization",
      "name": siteName,
      "logo": {
        "@type": "ImageObject",
        "url": `${baseUrl}/emrslogo.png`
      }
    },
    "datePublished": publishedTime,
    "dateModified": modifiedTime || publishedTime,
    "description": description,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": currentUrl
    }
  } : null;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={emirateKeywords.join(', ')} />
      <meta name="author" content={author} />
      <meta name="robots" content={noIndex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'} />

      {/* Geographic Meta */}
      <meta name="geo.region" content="AE" />
      <meta name="geo.placename" content={emirate ? `${emirate}, United Arab Emirates` : "Dubai, United Arab Emirates"} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:image:alt" content={imageAlt} />
      <meta property="og:image:width" content={String(imageWidth)} />
      <meta property="og:image:height" content={String(imageHeight)} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="en_AE" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={twitterHandle} />
      <meta name="twitter:creator" content={twitterHandle} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />
      <meta name="twitter:image:alt" content={imageAlt} />

      {/* Article-specific meta */}
      {type === 'article' && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {type === 'article' && modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}
      {type === 'article' && (
        <meta property="article:author" content={author} />
      )}

      {/* Theme colors */}
      <meta name="theme-color" content="#0066cc" />
      <meta name="msapplication-TileColor" content="#0066cc" />
      <meta name="apple-mobile-web-app-title" content={siteName} />
      <meta name="application-name" content={siteName} />
      <link rel="apple-touch-icon" href={`${baseUrl}/site-logo.png`} />
      <link rel="icon" type="image/png" sizes="32x32" href={`${baseUrl}/favicon.png`} />

      {/* Structured Data - Organization for entity recognition */}
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>

      {/* Structured Data - MedicalBusiness for local SEO */}
      <script type="application/ld+json">
        {JSON.stringify(finalStructuredData)}
      </script>

      {breadcrumbStructuredData && (
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbStructuredData)}
        </script>
      )}

      {articleStructuredData && (
        <script type="application/ld+json">
          {JSON.stringify(articleStructuredData)}
        </script>
      )}

      {additionalStructuredData && (
        <script type="application/ld+json">
          {JSON.stringify(additionalStructuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEOHead;
