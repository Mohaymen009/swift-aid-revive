import { useEffect } from "react";
import { useLocation } from "react-router-dom";

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
  author?: string;
  breadcrumbs?: Array<{ name: string; item: string }>;
}

const SEOHead = ({ 
  title = "EMRS 24/7 | Ambulance & Home Healthcare Services UAE",
  description = "EMRS provides licensed 24/7 ambulance & home healthcare services across all UAE emirates. Call now for fast, professional medical response!",
  canonical: customCanonical,
  type = "website",
  emirate,
  image = "https://emrs.ae/images/og/emrs-og-default.jpg",
  imageAlt = "EMRS 24/7 Ambulance & Medical Services in UAE",
  imageWidth = 1200,
  imageHeight = 630,
  keywords = [
    "ambulance service UAE",
    "home healthcare Dubai",
    "emergency medical services",
    "patient transfer UAE",
    "24/7 ambulance Dubai",
    "medical transport UAE",
    "non-emergency ambulance",
    "medical escort service",
    "home nursing Dubai",
    "doctor on call UAE"
  ],
  noIndex = false,
  structuredData: customStructuredData,
  publishedTime,
  modifiedTime,
  author = "EMRS Medical Team",
  breadcrumbs = []
}: SEOHeadProps) => {
  const location = useLocation();
  const baseUrl = 'https://emrs.ae';
  const currentUrl = customCanonical || `${baseUrl}${location.pathname}`;
  const siteName = "EMRS 24/7";
  const twitterHandle = "@EMRSUAE";
  const fullImageUrl = image.startsWith('http') ? image : `${baseUrl}${image.startsWith('/') ? '' : '/'}${image}`;
  
  // Default structured data if not provided
  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": ["MedicalBusiness", "Organization"],
    "name": siteName,
    "url": currentUrl,
    "logo": "https://emrs.ae/emrslogo.png",
    "description": description,
    "sameAs": [
      "https://www.facebook.com/emrsuae",
      "https://www.instagram.com/emrsuae",
      "https://www.linkedin.com/company/emrsuae"
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Office 101, Al Nahda 1",
      "addressLocality": "Dubai",
      "addressRegion": "Dubai",
      "postalCode": "12345",
      "addressCountry": "AE"
    },
    "openingHours": "Mo,Tu,We,Th,Fr,Sa,Su 00:00-23:59",
<<<<<<< HEAD
    "telephone": "+971501234567",
=======
    "telephone": "+971 55 472 8133",
>>>>>>> b46613a (done)
    "priceRange": "$$",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Medical Services",
      "itemListElement": [
        {
          "@type": "OfferCatalog",
          "name": "Emergency Ambulance Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "24/7 Emergency Ambulance"
              }
            }
          ]
        },
        {
          "@type": "OfferCatalog",
          "name": "Home Healthcare Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Skilled Nursing Care at Home"
              }
            }
          ]
        }
      ]
    }
  };

  // Merge custom structured data with default
  const finalStructuredData = customStructuredData || defaultStructuredData;
  
  // Build breadcrumb structured data from provided breadcrumbs or from URL segments
  const derivedCrumbs = (breadcrumbs && breadcrumbs.length > 0)
    ? breadcrumbs
    : (() => {
        const parts = location.pathname.split('/').filter(Boolean);
        const auto = [{ name: 'Home', item: '/' } as { name: string; item: string }];
        parts.forEach((seg, idx) => {
          const path = `/${parts.slice(0, idx + 1).join('/')}`;
          const name = seg.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
          auto.push({ name, item: path });
        });
        return auto;
      })();

  const breadcrumbStructuredData = derivedCrumbs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": derivedCrumbs.map((b, idx) => ({
      "@type": "ListItem",
      "position": idx + 1,
      "name": b.name,
      "item": `${baseUrl}${b.item === '/' ? '' : b.item}`
    }))
  } : null;

  useEffect(() => {
    // Update document title
    document.title = title;
    
    // Update or create meta tags
    const metaTags = [
      // Standard meta tags
      { name: 'description', content: description },
      { name: 'keywords', content: keywords.join(', ') },
      
      // Open Graph / Facebook
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:type', content: type },
      { property: 'og:url', content: currentUrl },
      { property: 'og:image', content: fullImageUrl },
      { property: 'og:image:alt', content: imageAlt },
      { property: 'og:image:width', content: String(imageWidth) },
      { property: 'og:image:height', content: String(imageHeight) },
      { property: 'og:site_name', content: siteName },
      { property: 'og:locale', content: 'en_AE' },
      
      // Twitter Card
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: twitterHandle },
      { name: 'twitter:creator', content: twitterHandle },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: fullImageUrl },
      { name: 'twitter:image:alt', content: imageAlt },
      
      // Additional recommended tags
      { name: 'author', content: siteName },
      { name: 'theme-color', content: '#0066cc' },
      { name: 'apple-mobile-web-app-title', content: siteName },
      { name: 'application-name', content: siteName },
      { name: 'msapplication-TileColor', content: '#0066cc' }
    ];

    metaTags.forEach(tag => {
      let meta: HTMLMetaElement | null = null;
      
      if ('property' in tag) {
        meta = document.querySelector(`meta[property="${tag.property}"]`);
      } else if ('name' in tag) {
        meta = document.querySelector(`meta[name="${tag.name}"]`);
      }
      
      if (!meta) {
        meta = document.createElement('meta');
        if ('property' in tag) {
          (meta as any).property = tag.property;
        } else if ('name' in tag) {
          meta.name = tag.name as string;
        }
        document.head.appendChild(meta);
      }
      
      meta.content = tag.content;
    });

    // Update canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = currentUrl;

    // Handle robots meta tag
    let robotsMeta = document.querySelector('meta[name="robots"]') as HTMLMetaElement | null;
    if (!robotsMeta) {
      robotsMeta = document.createElement('meta');
      robotsMeta.name = 'robots';
      document.head.appendChild(robotsMeta);
    }
    robotsMeta.content = noIndex ? 'noindex, nofollow' : 'index, follow';

    // Favicon and manifest links are centralized in index.html

    // Add structured data
    const structuredDataScripts = [
      { id: 'structured-data', data: finalStructuredData },
      ...(breadcrumbStructuredData ? [{ id: 'breadcrumb-data', data: breadcrumbStructuredData }] : [])
    ];

    structuredDataScripts.forEach(({ id, data }) => {
      let scriptEl = document.getElementById(id) as HTMLScriptElement | null;
      if (!scriptEl) {
        scriptEl = document.createElement('script');
        scriptEl.id = id;
        scriptEl.type = 'application/ld+json';
        document.head.appendChild(scriptEl);
      }
      scriptEl.textContent = JSON.stringify(data, null, 2);
    });

    // Cleanup function to remove added elements when component unmounts
    return () => {
      // We don't remove meta tags as they might be used by other components
    };
  }, [title, description, customCanonical, type, emirate, image, imageAlt, imageWidth, imageHeight, keywords, noIndex, finalStructuredData, breadcrumbStructuredData, currentUrl, location.pathname]);

  // Preconnect and preload are centralized in index.html

  return null;
};

export default SEOHead;
