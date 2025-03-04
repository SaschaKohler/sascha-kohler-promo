// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/app/styles/globals.css";
import "@/app/styles/gradients.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "K.L.A.R.E. Kongruenz-Methode | Sascha Kohler | Coming Soon",
  description:
    "Entdecke die K.L.A.R.E. Kongruenz-Methode: In 5 Schritten zur vollständigen Übereinstimmung in allen Lebensbereichen. Reflexion, Identifikation, Gestaltung, Handlung, Transformation - Ein ganzheitlicher Ansatz von Sascha Kohler.",
  applicationName: "Sascha Kohler Website",
  authors: [{ name: "Sascha Kohler" }],
  creator: "Sascha Kohler",
  publisher: "Sascha Kohler",
  metadataBase: new URL("https://sascha-kohler.at"),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "K.L.A.R.E. Kongruenz-Methode | Sascha Kohler",
    description:
      "Der 5-Schritte-Prozess für vollständige Kongruenz und natürliche Manifestation deiner Ziele. Eine für Menschen konzipierte Transformationsmethode.",
    url: "https://sascha-kohler.at",
    siteName: "Sascha Kohler - Kongruenz-Methode",
    images: [
      {
        url: "https://sascha-kohler.at/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "R.I.G.H.T. Kongruenz-Methode",
      },
    ],
    locale: "de_AT",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "K.L.A.R.E. Kongruenz-Methode | Sascha Kohler",
    description:
      "Reflexion, Identifikation, Gestaltung, Handlung, Transformation - Der 5-Schritte-Prozess für vollständige Kongruenz in allen Lebensbereichen.",
    images: ["https://sascha-kohler.at/twitter-image.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" }, // Fallback für ältere Browser
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" }, // Füge SVG explizit hinzu
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "icon",
        type: "image/svg+xml",
        url: "/favicon.svg",
      },
    ],
  },
  themeColor: "#ffffff",
  manifest: "/site.webmanifest",
  keywords: [
    "Kongruenz-Methode",
    "K.L.A.R.E. Methode",
    "persönliche Transformation",
    "Sascha Kohler",
    "Coaching",
    "NLP",
    "persönliche Entwicklung",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}

        {/* JSON-LD kann in Next.js 13+ als Script-Tag im Body hinzugefügt werden */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "R.I.G.H.T. Kongruenz-Methode | Sascha Kohler",
              url: "https://sascha-kohler.at",
              description:
                "Ein 5-Schritte-Prozess für persönliche Transformation und Kongruenz in allen Lebensbereichen.",
            }),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Sascha Kohler",
              url: "https://sascha-kohler.at",
              jobTitle:
                "Speaker & Trainer, Entwickler der R.I.G.H.T. Kongruenz-Methode",
              description:
                "Entwickler der R.I.G.H.T. Kongruenz-Methode für persönliche Transformation",
              sameAs: [
                "https://www.linkedin.com/in/sascha-kohler/",
                "https://www.xing.com/profile/Sascha_Kohler/",
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
