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
    (logoMeta as any).content = "https://emrs.ae/assets/logo-IoYxzFod.png";
    
    // Add favicon meta tag
    let faviconLink = document.querySelector('link[rel="icon"]') as HTMLLinkElement | null;
    if (!faviconLink) {
      faviconLink = document.createElement('link');
      faviconLink.rel = 'icon';
      document.head.appendChild(faviconLink);
    }
    faviconLink.href = "https://emrs.ae/assets/logo-IoYxzFod.png";
    
    // Update structured data
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "MedicalBusiness",
      "name": "EMRS 24/7",
      "description": "Professional ambulance and medical transport services across UAE",
      "url": "https://emrs.ae",
      "logo": "https://emrs.ae/assets/logo-IoYxzFod.png",
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
