import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { STUDIO_INFO } from '@/data/portfolioData';

export const metadata = {
  metadataBase: new URL('https://lensandlightstudio.com'),
  title: {
    default: `${STUDIO_INFO.name} | Wedding & Portrait Photography Studio in Bhopal`,
    template: `%s | ${STUDIO_INFO.name}`,
  },
  description: STUDIO_INFO.description,
  keywords: [
    'wedding photography Bhopal',
    'pre-wedding shoot Bhopal',
    'baby photographer Bhopal',
    'maternity shoot Bhopal',
    'heritage wedding photographer Madhya Pradesh',
    'two-photographer team Bhopal',
    'authentic wedding photography',
  ],
  authors: [{ name: STUDIO_INFO.name }],
  creator: STUDIO_INFO.name,
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://lensandlightstudio.com',
    title: `${STUDIO_INFO.name} | Bhopal Wedding & Portrait Photography`,
    description: STUDIO_INFO.description,
    siteName: STUDIO_INFO.name,
    images: [
      {
        url: '/images/wedding-veil.jpg',
        width: 1200,
        height: 630,
        alt: 'Lens & Light Studio - Timeless Wedding Photography in Bhopal',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${STUDIO_INFO.name} | Bhopal`,
    description: STUDIO_INFO.description,
    images: ['/images/wedding-veil.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  // LocalBusiness structured data
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'PhotographyBusiness',
    name: STUDIO_INFO.name,
    image: 'https://lensandlightstudio.com/images/wedding-veil.jpg',
    description: STUDIO_INFO.description,
    telephone: STUDIO_INFO.phone,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Bhopal',
      addressRegion: 'Madhya Pradesh',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '23.2599',
      longitude: '77.4126',
    },
    url: 'https://lensandlightstudio.com',
    priceRange: '₹₹',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday',
        ],
        opens: '09:00',
        closes: '20:00',
      },
    ],
    areaServed: [
      { '@type': 'City', name: 'Bhopal' },
      { '@type': 'City', name: 'Indore' },
      { '@type': 'State', name: 'Madhya Pradesh' },
      { '@type': 'Country', name: 'India' },
    ],
  };

  return (
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Header />
        <main id="main-content" tabIndex="-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
