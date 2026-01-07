import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface BreadcrumbItem {
  name: string;
  path: string;
}

interface BreadcrumbsProps {
  items?: BreadcrumbItem[];
  className?: string;
  homeLabel?: string;
  separator?: React.ReactNode;
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
  items = [],
  className = 'text-sm',
  homeLabel = 'Home',
  separator = '/',
}) => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(Boolean);

  const breadcrumbItems: BreadcrumbItem[] = items.length > 0
    ? items
    : [{ name: homeLabel, path: '/' }, ...pathnames.map((seg, idx) => ({
      name: seg.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
      path: `/${pathnames.slice(0, idx + 1).join('/')}`
    }))];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbItems.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": `https://www.emrs.ae${item.path === '/' ? '' : item.path}`
    }))
  };

  return (
    <nav className={className} aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center">
        {breadcrumbItems.map((item, index) => {
          const isLast = index === breadcrumbItems.length - 1;
          return (
            <li key={`${item.path}-${index}`} className="flex items-center">
              {index > 0 && (
                <span className="mx-2 text-gray-400" aria-hidden="true">
                  {separator}
                </span>
              )}
              {!isLast ? (
                <Link to={item.path} className="text-blue-600 hover:text-blue-800">
                  {item.name}
                </Link>
              ) : (
                <span className="text-gray-600" aria-current="page">{item.name}</span>
              )}
            </li>
          );
        })}
      </ol>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </nav>
  );
};

export default Breadcrumbs;
