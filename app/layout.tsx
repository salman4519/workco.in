import type { Metadata, Viewport } from 'next';
import { Poppins } from 'next/font/google';
import { cabins, meetingRooms, plans, site } from '@/lib/site';
import './globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.title, template: '%s | Workco' },
  description: site.description,
  applicationName: site.name,
  keywords: [
    'coworking space',
    'premium coworking',
    'shared office space',
    'hot desk',
    'day pass coworking',
    'private cabin office',
    'conference room on rent',
    'meeting room booking',
    'Workco',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: '/',
    siteName: site.name,
    title: site.title,
    description: site.description,
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: site.title,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  category: 'business',
};

export const viewport: Viewport = {
  themeColor: '#0E0E0E',
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};

// Structured data so search engines can show the business, its phone number and its prices.
const offer = (name: string, price: number, unit: string) => ({
  '@type': 'Offer',
  name,
  price,
  priceCurrency: 'INR',
  description: unit,
});

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${site.url}/#org`,
      name: site.name,
      url: site.url,
      logo: `${site.url}/images/logo-light.png`,
      sameAs: [site.instagram],
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: site.phoneIntl,
        contactType: 'customer service',
        availableLanguage: ['English', 'Hindi'],
      },
    },
    {
      '@type': 'LocalBusiness',
      '@id': `${site.url}/#business`,
      name: `${site.name} Coworking`,
      description: site.description,
      url: site.url,
      telephone: site.phoneIntl,
      image: [`${site.url}/images/workspace.jpg`, `${site.url}/images/conference.jpg`, `${site.url}/images/cafe.jpg`],
      priceRange: '₹199 - ₹19,999',
      parentOrganization: { '@id': `${site.url}/#org` },
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '09:00',
        closes: '20:00',
      },
      amenityFeature: ['High-speed Wi-Fi', 'Air conditioning', 'Pantry', 'Lounge', 'Conference rooms', 'Private cabins'].map(
        (name) => ({ '@type': 'LocationFeatureSpecification', name, value: true }),
      ),
      makesOffer: [
        ...plans.map((p) => offer(p.name, p.price, p.per)),
        ...meetingRooms.map((m) => offer(`Meeting room: ${m.name}`, m.price, m.unit)),
        ...cabins.map((c) => offer(`${c.name} private cabin`, c.price, 'from, per month')),
      ],
    },
    {
      '@type': 'WebSite',
      '@id': `${site.url}/#website`,
      url: site.url,
      name: site.name,
      publisher: { '@id': `${site.url}/#org` },
      inLanguage: 'en-IN',
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={poppins.variable}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        {children}
      </body>
    </html>
  );
}
