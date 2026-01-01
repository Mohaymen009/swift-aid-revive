import { useEffect } from "react";

interface SEOHeadProps {
  title?: string;
  description?: string;
  canonical?: string;
  type?: string;
  emirate?: string;
}

const SEOHead = ({ 
  title = "EMRS | 24/7 Ambulance & Home Healthcare in the UAE",
  description = "EMRS offers licensed 24/7 ambulance services across all UAE emirates including Dubai, Abu Dhabi, Sharjah, Ajman, RAK, Fujairah & UAQ. Call now for emergency or patient transfers.",
  canonical = "https://emrs.ae",
  type = "website",
  emirate
}: SEOHeadProps) => {
  useEffect(() => {
    // Update document title
    document.title = title;
    
    // Update or create meta description
    let metaDesc = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = description;
    
    // Update canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = canonical;
    
    // Add logo meta tag for proper display
    let logoMeta = document.querySelector('meta[property="og:image"]') as HTMLMetaElement | null;
    if (!logoMeta) {
      logoMeta = document.createElement('meta') as HTMLMetaElement;
      (logoMeta as any).property = 'og:image';
      document.head.appendChild(logoMeta);
    }
    // Set Open Graph meta tags with dynamic values
    const ogTags = [
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: canonical },
      { property: 'og:image', content: 'https://emrs.ae/emrslogo.png' },
      { property: 'og:site_name', content: 'EMRS 24/7' },
      { property: 'og:locale', content: 'en_AE' }
    ];

    ogTags.forEach(tag => {
      let meta = document.querySelector(`meta[property="${tag.property}"]`) as HTMLMetaElement | null;
      if (!meta) {
        meta = document.createElement('meta');
        (meta as any).property = tag.property;
        document.head.appendChild(meta);
      }
      meta.content = tag.content;
    });
    
    // Add favicon meta tag
    let faviconLink = document.querySelector('link[rel="icon"]') as HTMLLinkElement | null;
    if (!faviconLink) {
      faviconLink = document.createElement('link');
      faviconLink.rel = 'icon';
      faviconLink.type = 'image/x-icon';
      document.head.appendChild(faviconLink);
    }
    faviconLink.href = "https://emrs.ae/favicon.ico";
    
    // Add additional favicon sizes for better compatibility
    let favicon32 = document.querySelector('link[rel="icon"][sizes="32x32"]') as HTMLLinkElement | null;
    if (!favicon32) {
      favicon32 = document.createElement('link');
      favicon32.rel = 'icon';
      favicon32.sizes = '32x32';
      document.head.appendChild(favicon32);
    }
    favicon32.href = "https://emrs.ae/favicon.ico";
    
    let favicon16 = document.querySelector('link[rel="icon"][sizes="16x16"]') as HTMLLinkElement | null;
    if (!favicon16) {
      favicon16 = document.createElement('link');
      favicon16.rel = 'icon';
      favicon16.sizes = '16x16';
      document.head.appendChild(favicon16);
    }
    favicon16.href = "https://emrs.ae/favicon.ico";
    
    // Update structured data
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "MedicalBusiness",
      "name": "EMRS 24/7",
      "description": "Professional ambulance and medical transport services across UAE",
      "url": "https://emrs.ae",
      "logo": {
        "@type": "ImageObject",
        "url": "https://emrs.ae/emrslogo.png",
        "width": 720,
        "height": 720
      },
      "image": "https://emrs.ae/emrslogo.png",
      "sameAs": [
        "https://www.instagram.com/emrs",
        "https://www.linkedin.com/company/emrs",
        "https://www.facebook.com/emrs"
      ],
      "telephone": "+971554728133",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "AE",
        "addressRegion": "Dubai"
      },
      "serviceType": ["Ambulance Service", "Emergency Medical Transport", "Patient Transfer"],
      "areaServed": [
        "Dubai", "Abu Dhabi", "Sharjah", "Ajman", 
        "Ras Al Khaimah", "Fujairah", "Umm Al Quwain"
      ],
      "availableChannel": {
        "@type": "ServiceChannel",
        "servicePhone": "+971554728133",
        "availableLanguage": ["English", "Arabic"]
      },
      "hoursAvailable": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday", "Tuesday", "Wednesday", "Thursday", 
          "Friday", "Saturday", "Sunday"
        ],
        "opens": "00:00",
        "closes": "23:59"
      }
    };

    if (emirate) {
      structuredData.areaServed = [emirate];
      structuredData.description = `Professional ambulance services in ${emirate} with 24/7 availability`;
    }

    // Update or create structured data script
    let structuredDataScript = document.querySelector('script[type="application/ld+json"]') as HTMLScriptElement | null;
    if (!structuredDataScript) {
      structuredDataScript = document.createElement('script');
      structuredDataScript.type = 'application/ld+json';
      document.head.appendChild(structuredDataScript);
    }
    structuredDataScript.textContent = JSON.stringify(structuredData);
  }, [title, description, canonical, emirate]);

  return null; // This component doesn't render anything
};

export default SEOHead;
