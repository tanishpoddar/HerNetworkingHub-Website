export default function StructuredData() {
  const organizationData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://www.hernetworkinghub.online/#organization',
    name: 'HerNetworkingHub',
    alternateName: ['Her Networking Hub', 'HerNetworkingHub.online'],
    description: 'The premier exclusive community for ambitious women entrepreneurs, founders, investors, and business leaders. Connect, collaborate, and create real impact with powerhouse women worldwide.',
    url: 'https://www.hernetworkinghub.online',
    logo: {
      '@type': 'ImageObject',
      url: 'https://www.hernetworkinghub.online/logo.png',
      width: 512,
      height: 512,
    },
    image: {
      '@type': 'ImageObject',
      url: 'https://www.hernetworkinghub.online/og-image.png',
      width: 1200,
      height: 630,
    },
    sameAs: [
      'https://www.instagram.com/hernetworkinghub',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      availableLanguage: ['English', 'en'],
      areaServed: 'Worldwide',
    },
    foundingDate: '2024',
    slogan: 'Network • Grow • Succeed',
    keywords: 'women entrepreneurs, women networking, business women community, female founders, women investors, professional women network',
    areaServed: {
      '@type': 'Place',
      name: 'Worldwide',
    },
  };

  const websiteData = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://www.hernetworkinghub.online/#website',
    url: 'https://www.hernetworkinghub.online',
    name: 'HerNetworkingHub',
    description: 'Exclusive community for ambitious women entrepreneurs, founders, investors, and business leaders',
    publisher: {
      '@id': 'https://www.hernetworkinghub.online/#organization',
    },
    inLanguage: 'en-US',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://www.hernetworkinghub.online/?s={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  };

  const webPageData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': 'https://www.hernetworkinghub.online/#webpage',
    url: 'https://www.hernetworkinghub.online',
    name: "HerNetworkingHub - Exclusive Women's Community | Network • Grow • Succeed",
    description: 'Join the premier exclusive community for ambitious women entrepreneurs, founders, investors, and business leaders. Connect with powerhouse women worldwide.',
    isPartOf: {
      '@id': 'https://www.hernetworkinghub.online/#website',
    },
    about: {
      '@id': 'https://www.hernetworkinghub.online/#organization',
    },
    primaryImageOfPage: {
      '@type': 'ImageObject',
      url: 'https://www.hernetworkinghub.online/og-image.png',
      width: 1200,
      height: 630,
    },
    datePublished: '2024-11-28',
    dateModified: new Date().toISOString(),
    inLanguage: 'en-US',
  };

  const breadcrumbData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://www.hernetworkinghub.online',
      },
    ],
  };

  const communityData = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': 'https://www.hernetworkinghub.online/#service',
    name: 'HerNetworkingHub',
    description: 'Exclusive networking community for women entrepreneurs, founders, investors, and business leaders',
    url: 'https://www.hernetworkinghub.online',
    serviceType: 'Professional Networking Community',
    provider: {
      '@id': 'https://www.hernetworkinghub.online/#organization',
    },
    areaServed: 'Worldwide',
    audience: {
      '@type': 'Audience',
      audienceType: 'Women Entrepreneurs, Founders, Investors, Business Leaders',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(communityData) }}
      />
    </>
  );
}
