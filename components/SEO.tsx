import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

export const SEO: React.FC<SEOProps> = ({
  title = 'DigiRocket - Sites e Marketing Digital para Negócios Locais | A partir de R$ 497',
  description = 'Criamos sites profissionais, gerenciamos tráfego pago e redes sociais para negócios locais. Sites responsivos a partir de R$ 497. Entrega em 48h. Atendemos Porto Alegre, São Paulo, Rio de Janeiro e todo Brasil.',
  keywords = 'criar site, site profissional, marketing digital, tráfego pago, gestão de redes sociais, whatsapp automático, site para delivery, site para barbearia, site para consultoria, criação de site barato, agência digital, porto alegre, são paulo, rio de janeiro',
  image = 'https://digirocket.com.br/og-image.jpg',
  url = 'https://digirocket.com.br',
  type = 'website'
}) => {
  const siteName = 'DigiRocket';
  const twitterHandle = '@digirocket';

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${url}/#organization`,
        name: siteName,
        url: url,
        logo: {
          '@type': 'ImageObject',
          url: `${url}/logo.png`,
          width: 512,
          height: 512
        },
        image: {
          '@type': 'ImageObject',
          url: image
        },
        description: description,
        sameAs: [
          'https://www.facebook.com/digirocket',
          'https://www.instagram.com/digirocket',
          'https://www.linkedin.com/company/digirocket',
          'https://www.youtube.com/@digirocket',
          'https://twitter.com/digirocket'
        ],
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+55-51-98468-9725',
          contactType: 'Customer Service',
          areaServed: 'BR',
          availableLanguage: 'Portuguese'
        },
        address: {
          '@type': 'PostalAddress',
          addressCountry: 'BR',
          addressRegion: 'RS',
          addressLocality: 'Porto Alegre'
        },
        foundingDate: '2019',
        slogan: 'Sua máquina de vendas online'
      },
      {
        '@type': 'WebSite',
        '@id': `${url}/#website`,
        url: url,
        name: siteName,
        description: description,
        publisher: {
          '@id': `${url}/#organization`
        },
        potentialAction: {
          '@type': 'SearchAction',
          target: `${url}/busca?q={search_term_string}`,
          'query-input': 'required name=search_term_string'
        }
      },
      {
        '@type': 'WebPage',
        '@id': `${url}/#webpage`,
        url: url,
        name: title,
        description: description,
        isPartOf: {
          '@id': `${url}/#website`
        },
        about: {
          '@id': `${url}/#organization`
        },
        primaryImageOfPage: {
          '@type': 'ImageObject',
          url: image
        }
      },
      {
        '@type': 'LocalBusiness',
        '@id': `${url}/#localbusiness`,
        name: siteName,
        description: description,
        url: url,
        telephone: '+55-51-98468-9725',
        priceRange: 'R$ 497 - R$ 5.000',
        address: {
          '@type': 'PostalAddress',
          addressCountry: 'BR',
          addressRegion: 'RS',
          addressLocality: 'Porto Alegre'
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: -30.0346,
          longitude: -51.2177
        },
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            opens: '09:00',
            closes: '18:00'
          }
        ],
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.9',
          reviewCount: '84',
          bestRating: '5',
          worstRating: '1'
        }
      },
      {
        '@type': 'Service',
        '@id': `${url}/#service`,
        serviceType: 'Criação de Sites e Marketing Digital',
        provider: {
          '@id': `${url}/#organization`
        },
        areaServed: {
          '@type': 'Country',
          name: 'Brasil'
        },
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Serviços de Marketing Digital',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Criação de Site Profissional',
                description: 'Site responsivo e otimizado para conversão'
              },
              price: '497',
              priceCurrency: 'BRL'
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Gestão de Tráfego Pago',
                description: 'Campanhas no Google Ads e Meta Ads'
              },
              price: '797',
              priceCurrency: 'BRL'
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Gestão de Redes Sociais',
                description: 'Instagram, TikTok e Facebook profissional'
              },
              price: '497',
              priceCurrency: 'BRL'
            }
          ]
        }
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Quanto custa criar um site profissional?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Sites profissionais na DigiRocket começam a partir de R$ 497, incluindo design responsivo, hospedagem e suporte técnico. O preço final depende das funcionalidades necessárias.'
            }
          },
          {
            '@type': 'Question',
            name: 'Qual o prazo de entrega de um site?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'O prazo médio de entrega é de 7 a 14 dias úteis. Sites simples podem ficar prontos em até 48h. Projetos mais complexos podem levar até 30 dias.'
            }
          },
          {
            '@type': 'Question',
            name: 'Vocês atendem em quais cidades?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Atendemos clientes em todo o Brasil de forma 100% online. Temos clientes em Porto Alegre, São Paulo, Rio de Janeiro, Curitiba, Belo Horizonte e diversas outras cidades.'
            }
          }
        ]
      }
    ]
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="pt_BR" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:site" content={twitterHandle} />
      <meta name="twitter:creator" content={twitterHandle} />

      {/* Additional SEO */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <meta name="bingbot" content="index, follow" />
      <meta name="author" content="DigiRocket - Marketing Digital" />
      <meta name="language" content="Portuguese" />
      <meta name="geo.region" content="BR-RS" />
      <meta name="geo.placename" content="Porto Alegre" />
      <meta name="geo.position" content="-30.0346;-51.2177" />
      <meta name="ICBM" content="-30.0346, -51.2177" />

      {/* Structured Data - JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </script>

      {/* Alternate Languages */}
      <link rel="alternate" hrefLang="pt-br" href={url} />
      <link rel="alternate" hrefLang="pt" href={url} />
      <link rel="alternate" hrefLang="x-default" href={url} />

      {/* Verification Tags */}
      <meta name="google-site-verification" content="your-google-verification-code" />
      <meta name="msvalidate.01" content="your-bing-verification-code" />

      {/* Theme & Mobile */}
      <meta name="theme-color" content="#a3e635" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
    </Helmet>
  );
};
