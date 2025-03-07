// app/layout.tsx
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import '@/app/styles/globals.css';
import '@/app/styles/gradients.css';
import { Toaster } from '@/components/ui/toaster';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'KLARE-Methode | Kongruenz statt Optimierung | Sascha Kohler',
  description:
    'Entdecke die KLARE-Methode: In 5 Schritten zur vollständigen Kongruenz. Klarheit, Lebendigkeit, Ausrichtung, Realisierung, Entfaltung - Ein ganzheitlicher Ansatz von Sascha Kohler, Lebens- und Sozialberater, NLP-Master und Trainer.',
  applicationName: 'Sascha Kohler Website',
  authors: [{ name: 'Sascha Kohler' }],
  creator: 'Sascha Kohler',
  publisher: 'Sascha Kohler',
  metadataBase: new URL('https://sascha-kohler.at'),
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
  },
  keywords: [
    'KLARE-Methode',
    'Lebensberatung',
    'Kongruenz',
    'Lebens- und Sozialberater',
    'Persönlichkeitsentwicklung',
    'Selbstentfaltung',
    'NLP-Master',
    'Coaching',
    'Workshop',
    'Transformation',
    'Klarheit',
    'Lebendigkeit',
    'Ausrichtung',
    'Realisierung',
    'Entfaltung',
  ],
  openGraph: {
    title: 'KLARE-Methode | Kongruenz statt Optimierung | Sascha Kohler',
    description:
      'Entdecke den 5-Schritte-Prozess der KLARE-Methode für vollständige Kongruenz in allen Lebensbereichen. Klarheit, Lebendigkeit, Ausrichtung, Realisierung, Entfaltung - Der Weg zur Selbstentfaltung statt Selbstoptimierung.',
    url: 'https://sascha-kohler.at',
    siteName: 'Sascha Kohler - KLARE-Methode',
    images: [
      {
        url: 'https://sascha-kohler.at/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'KLARE-Methode',
      },
    ],
    locale: 'de_AT',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KLARE-Methode | Kongruenz statt Optimierung | Sascha Kohler',
    description:
      'Entfalte Dich selbst, statt Dich immer nur zu optimieren. Die KLARE-Methode bietet einen ganzheitlichen Ansatz für ein kongruentes Leben mit Deinen wahren Wünschen und Zielen.',
    images: ['https://sascha-kohler.at/twitter-image.jpg'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
    other: [
      {
        rel: 'icon',
        type: 'image/svg+xml',
        url: '/favicon.svg',
      },
    ],
  },
  themeColor: '#ffffff',
  manifest: '/site.webmanifest',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Toaster />
        {children}

        {/* JSON-LD für Website */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'KLARE-Methode | Sascha Kohler',
              url: 'https://sascha-kohler.at',
              description:
                'Ein 5-Schritte-Prozess für persönliche Transformation und Kongruenz in allen Lebensbereichen durch die KLARE-Methode.',
              potentialAction: {
                '@type': 'SearchAction',
                target: 'https://sascha-kohler.at/search?q={search_term_string}',
                'query-input': 'required name=search_term_string',
              },
            }),
          }}
        />

        {/* JSON-LD für Person */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Sascha Kohler',
              url: 'https://sascha-kohler.at',
              jobTitle: 'Lebens- und Sozialberater (i.A.u.SV.), NLP-Master, Speaker & Trainer',
              description:
                'Entwickler der KLARE-Methode für persönliche Transformation und Kongruenz',
              sameAs: [
                'https://www.linkedin.com/in/sascha-kohler/',
                'https://www.xing.com/profile/Sascha_Kohler/',
              ],
              knowsAbout: [
                'KLARE-Methode',
                'Lebensberatung',
                'Coaching',
                'Persönlichkeitsentwicklung',
                'NLP',
                'Kongruenz',
                'Selbstentfaltung',
              ],
            }),
          }}
        />

        {/* JSON-LD für Professional Service */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'ProfessionalService',
              name: 'Sascha Kohler - Lebens- und Sozialberatung',
              description:
                'Ganzheitliche Lebensberatung und Coaching mit der KLARE-Methode für vollständige Kongruenz in allen Lebensbereichen.',
              url: 'https://sascha-kohler.at',
              founder: {
                '@type': 'Person',
                name: 'Sascha Kohler',
              },
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Wien',
                addressCountry: 'AT',
              },
              sameAs: [
                'https://www.linkedin.com/in/sascha-kohler/',
                'https://www.xing.com/profile/Sascha_Kohler/',
              ],
              offers: {
                '@type': 'Offer',
                name: 'KLARE-Methode Coaching',
                description:
                  'Persönliche Beratung und Coaching zur Erreichung von Kongruenz mit der KLARE-Methode.',
              },
              keywords: [
                'KLARE-Methode',
                'Lebensberatung',
                'Sozialberatung',
                'Coaching',
                'Persönlichkeitsentwicklung',
                'Kongruenz',
                'NLP',
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
