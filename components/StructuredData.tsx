export default function StructuredData() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'HerNetworkingHub',
    description: 'An exclusive community for ambitious women entrepreneurs, founders, investors, and business leaders.',
    url: 'https://hernetworkinghub.com',
    logo: 'https://hernetworkinghub.com/logo.png',
    sameAs: [
      'https://www.instagram.com/hernetworkinghub',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      availableLanguage: ['English'],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
