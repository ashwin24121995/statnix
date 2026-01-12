export function addStructuredData(data: Record<string, any>) {
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(data);
  document.head.appendChild(script);
  
  return () => {
    document.head.removeChild(script);
  };
}

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'STATNIX',
  url: 'https://statnix.com',
  logo: 'https://statnix.com/images/statnix-logo.webp',
  description: 'Free social gaming platform providing engaging entertainment experiences with a focus on user safety and fair play.',
  sameAs: [
    'https://www.facebook.com/statnix',
    'https://www.twitter.com/statnix',
    'https://www.instagram.com/statnix'
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'Customer Support',
    email: 'support@statnix.com'
  }
};

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'STATNIX',
  url: 'https://statnix.com',
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://statnix.com/search?q={search_term_string}'
    }
  }
};

export const gameSchema = {
  '@context': 'https://schema.org',
  '@type': 'VideoGame',
  name: 'STATNIX Games',
  description: 'Free social gaming platform with slots, roulette, blackjack, and more',
  url: 'https://statnix.com',
  applicationCategory: 'Game',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD'
  }
};

export const breadcrumbSchema = (items: Array<{ name: string; url: string }>) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url
  }))
});
