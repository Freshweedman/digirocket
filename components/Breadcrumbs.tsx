import React from 'react';
import { ChevronRight, Home } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

interface BreadcrumbItem {
  label: string;
  url?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  const allItems = [{ label: 'Início', url: 'https://www.digirocket.site/' }, ...items];

  // Schema.org BreadcrumbList
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': allItems.map((item, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'name': item.label,
      ...(item.url && { 'item': item.url }),
    })),
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>

      <nav aria-label="Breadcrumb" className="py-4 px-4 bg-slate-50 border-b border-slate-200">
        <ol className="flex items-center gap-2 max-w-7xl mx-auto text-sm flex-wrap">
          {allItems.map((item, index) => (
            <li key={index} className="flex items-center gap-2">
              {index > 0 && <ChevronRight size={14} className="text-slate-400" />}
              {index === 0 ? (
                <a
                  href={item.url}
                  className="flex items-center gap-1.5 text-slate-600 hover:text-brand-green transition-colors font-medium"
                >
                  <Home size={14} />
                  <span>{item.label}</span>
                </a>
              ) : item.url ? (
                <a
                  href={item.url}
                  className="text-slate-600 hover:text-brand-green transition-colors font-medium"
                >
                  {item.label}
                </a>
              ) : (
                <span className="text-slate-900 font-bold">{item.label}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
};
