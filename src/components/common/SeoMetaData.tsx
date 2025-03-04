// Für Next.js Head Komponente in deiner Maintenance-Mode Seite

import Head from "next/head";

const SeoMetaData = () => {
  return (
    <Head>
      <title>R.I.G.H.T. Kongruenz-Methode | Sascha Kohler | Coming Soon</title>
      <meta
        name="description"
        content="Entdecke die R.I.G.H.T. Kongruenz-Methode: In 5 Schritten zur vollständigen Übereinstimmung in allen Lebensbereichen. Reflexion, Identifikation, Gestaltung, Handlung, Transformation - Ein ganzheitlicher Ansatz von Sascha Kohler."
      />

      {/* Grundlegende Meta-Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://sascha-kohler.at" />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#6366F1" />
      <meta name="msapplication-TileColor" content="#6366F1" />
      <meta name="theme-color" content="#ffffff" />

      {/* Open Graph Meta Tags für Social Media Sharing */}
      <meta
        property="og:title"
        content="R.I.G.H.T. Kongruenz-Methode | Sascha Kohler"
      />
      <meta
        property="og:description"
        content="Der 5-Schritte-Prozess für vollständige Kongruenz und natürliche Manifestation deiner Ziele. Eine für Menschen konzipierte Transformationsmethode."
      />
      <meta
        property="og:image"
        content="https://sascha-kohler.at/og-image.jpg"
      />
      <meta property="og:url" content="https://sascha-kohler.at" />
      <meta property="og:type" content="website" />
      <meta
        property="og:site_name"
        content="Sascha Kohler - Kongruenz-Methode"
      />

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content="R.I.G.H.T. Kongruenz-Methode | Sascha Kohler"
      />
      <meta
        name="twitter:description"
        content="Reflexion, Identifikation, Gestaltung, Handlung, Transformation - Der 5-Schritte-Prozess für vollständige Kongruenz in allen Lebensbereichen."
      />
      <meta
        name="twitter:image"
        content="https://sascha-kohler.at/twitter-image.jpg"
      />

      {/* Structured Data (JSON-LD) für bessere Google-Ergebnisse */}
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
            potentialAction: {
              "@type": "SearchAction",
              target: "https://sascha-kohler.at/search?q={search_term_string}",
              "query-input": "required name=search_term_string",
            },
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
    </Head>
  );
};

export default SeoMetaData;
