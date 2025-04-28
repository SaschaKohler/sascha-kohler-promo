import React from 'react';
import Image from 'next/image';
import { ColorScheme } from '@/components/common/theme';
import AppMockup from './AppMockup';
import FeatureBox from './FeatureBox';
import FeedbackForm from './FeedbackForm';
// import AppScreenshots from './AppScreenshots';

// KLARE step colors
const stepColors = {
  K: '#6366F1', // Indigo
  L: '#8B5CF6', // Violet
  A: '#EC4899', // Pink
  R: '#F59E0B', // Amber
  E: '#10B981', // Emerald
};

// Define app features to showcase
const appFeatures = [
  {
    title: 'K - Klarheit',
    description:
      'Erhalte Klarheit über deine aktuelle Situation mit dem interaktiven Lebensrad und personalisierter Analyse.',
    icon: '🔍',
  },
  {
    title: 'L - Lebendigkeit',
    description:
      'Aktiviere deine natürlichen Ressourcen und identifiziere Energieblockaden, die dich zurückhalten.',
    icon: '✨',
  },
  {
    title: 'A - Ausrichtung',
    description:
      'Bringe alle Lebensbereiche in Einklang mit deinen Zielen und Werten für maximale Kongruenz.',
    icon: '🧭',
  },
  {
    title: 'R - Realisierung',
    description:
      'Transformiere Wissen in nachhaltiges Handeln mit personalisierten Mikro-Routinen.',
    icon: '🚀',
  },
  {
    title: 'E - Entfaltung',
    description:
      'Erlebe mühelose Manifestation und kontinuierliches Wachstum durch vollständige Kongruenz.',
    icon: '🌱',
  },
];

// Additional features showcase
const additionalFeatures = [
  {
    title: 'Personalisiertes Dashboard',
    description:
      'Dein individuelles Kongruenz-Cockpit zeigt dir auf einen Blick deinen aktuellen Status und nächste Schritte.',
    icon: '📊',
  },
  {
    title: 'Tägliche Mikro-Übungen',
    description:
      'Kurze, effektive Übungen für den Alltag, die sich perfekt in deinen Tag integrieren lassen.',
    icon: '⏱️',
  },
  {
    title: 'Kongruenz-Tagebuch',
    description:
      'Dokumentiere deine Transformation und erkenne Muster, die dich voranbringen oder zurückhalten.',
    icon: '📔',
  },
  {
    title: 'Fortschritts-Tracking',
    description: 'Verfolge deine Entwicklung in allen Lebensbereichen und feiere deine Erfolge.',
    icon: '📈',
  },
];

interface KlareMethodeShowcaseProps {
  colorScheme: ColorScheme;
}

const KlareMethodeShowcase: React.FC<KlareMethodeShowcaseProps> = ({ colorScheme }) => {
  return (
    <div className="klare-methode-showcase">
      {/* Hero Section */}
      <section
        id="hero"
        className="min-h-screen pt-24 flex flex-col items-center justify-center relative overflow-hidden"
      >
        <div
          className="absolute inset-0 z-0"
          style={{
            background: `linear-gradient(to bottom, ${colorScheme.background}, white)`,
          }}
        />

        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden z-0">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full opacity-20 animate-float"
              style={{
                background: `linear-gradient(to bottom right, ${colorScheme.accent}40, ${colorScheme.primary}40)`,
                width: `${Math.random() * 300 + 100}px`,
                height: `${Math.random() * 300 + 100}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${Math.random() * 15 + 15}s`,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left md:w-3/5">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                <span>
                  Die <span style={{ color: stepColors.K }}>K</span>
                  <span style={{ color: stepColors.L }}>L</span>
                  <span style={{ color: stepColors.A }}>A</span>
                  <span style={{ color: stepColors.R }}>R</span>
                  <span style={{ color: stepColors.E }}>E</span>
                </span>
                <span
                  style={{
                    backgroundImage: `linear-gradient(to right, ${stepColors.K}, ${stepColors.L}, ${stepColors.A}, ${stepColors.R}, ${stepColors.E})`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    color: 'transparent',
                  }}
                >
                  -Methode App
                </span>
              </h1>

              <p className="text-lg sm:text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto md:mx-0 mb-8 leading-relaxed">
                Dein digitaler Begleiter für Kongruenz und Transformation. Erlebe die Kraft des
                5-Schritte-Prozesses direkt auf deinem Smartphone.
              </p>

              <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
                <button
                  className="text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  style={{
                    background: `linear-gradient(to right, ${stepColors.K}, ${stepColors.L})`,
                  }}
                >
                  <div className="flex items-center gap-2">
                    <span>Demnächst im App Store</span>
                    <span className="text-xl">🍎</span>
                  </div>
                </button>

                <button
                  className="text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  style={{
                    background: `linear-gradient(to right, ${stepColors.A}, ${stepColors.R})`,
                  }}
                >
                  <div className="flex items-center gap-2">
                    <span>Bald bei Google Play</span>
                    <span className="text-xl">🤖</span>
                  </div>
                </button>
              </div>
            </div>

            {/* App Screenshot */}
            <div className="md:w-2/5 mt-8 md:mt-0">
              <div className="relative">
                {/* Phone Frame with Screenshot */}
                <div className="mx-auto relative w-64 md:w-72">
                  <div className="relative w-full h-full rounded-3xl overflow-hidden border-2 border-gray-800 bg-gray-900 shadow-xl">
                    {/* Notch */}
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-7 bg-gray-900 rounded-b-2xl z-10"></div>

                    {/* Status Bar */}
                    <div className="w-full h-10 bg-gray-900"></div>

                    {/* Screenshot */}
                    <div className="relative w-full aspect-[9/19.5]">
                      <Image
                        src="/images/klare-app/welcome.png"
                        alt="KLARE Methode App"
                        width={390}
                        height={844}
                        className="w-full h-full object-cover"
                        priority
                        onError={e => {
                          // Fallback to placeholder if image fails to load
                          const target = e.target as HTMLImageElement;
                          target.src = '/api/placeholder/390/844';
                          target.alt = 'KLARE App (Placeholder)';
                        }}
                      />
                    </div>

                    {/* Home Indicator */}
                    <div className="w-full h-6 bg-gray-900 flex justify-center items-center">
                      <div className="w-1/3 h-1 bg-gray-600 rounded-full"></div>
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-lg shadow-lg">
                  <p className="italic text-lg" style={{ color: stepColors.K }}>
                    Jetzt in Entwicklung!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* App Features Section */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center" style={{ color: colorScheme.text }}>
            Die <span style={{ color: stepColors.K }}>5</span>{' '}
            <span style={{ color: stepColors.L }}>S</span>
            <span style={{ color: stepColors.A }}>c</span>
            <span style={{ color: stepColors.R }}>h</span>
            <span style={{ color: stepColors.E }}>ritte</span> der KLARE-Methode
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {appFeatures.map((feature, index) => (
              <FeatureBox
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                color={
                  index === 0
                    ? stepColors.K
                    : index === 1
                      ? stepColors.L
                      : index === 2
                        ? stepColors.A
                        : index === 3
                          ? stepColors.R
                          : stepColors.E
                }
              />
            ))}

            {/* App Screenshots (spans all columns on larger screens) */}
            <div className="md:col-span-2 lg:col-span-3 bg-white rounded-lg p-8 shadow-lg">
              <h3
                className="text-2xl font-semibold mb-6 text-center"
                style={{ color: stepColors.K }}
              >
                Die App begleitet dich durch jeden Schritt
              </h3>

              {/* <AppScreenshots /> */}

              <div className="mt-6">
                <p className="text-gray-600 text-center max-w-2xl mx-auto">
                  Unsere intuitive Benutzeroberfläche führt dich Schritt für Schritt durch den
                  gesamten KLARE-Prozess. Mit interaktiven Übungen, personalisierten Inhalten und
                  visuellen Fortschrittsanzeigen wird Transformation zum Erlebnis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Features */}
      <section id="more-features" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center" style={{ color: colorScheme.text }}>
            Weitere{' '}
            <span
              style={{
                backgroundImage: `linear-gradient(to right, ${stepColors.K}, ${stepColors.L}, ${stepColors.A}, ${stepColors.R}, ${stepColors.E})`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                color: 'transparent',
              }}
            >
              Funktionen
            </span>{' '}
            der App
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {additionalFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 flex gap-4"
              >
                <div
                  className="text-3xl flex items-center justify-center h-12 w-12 rounded-full flex-shrink-0"
                  style={{
                    backgroundColor: index % 2 === 0 ? `${stepColors.K}20` : `${stepColors.L}20`,
                  }}
                >
                  {feature.icon}
                </div>
                <div>
                  <h3
                    className="text-xl font-semibold mb-2"
                    style={{
                      color: index % 2 === 0 ? stepColors.K : stepColors.L,
                    }}
                  >
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon & Newsletter */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6" style={{ color: colorScheme.text }}>
            Die <span style={{ color: stepColors.K }}>K</span>
            <span style={{ color: stepColors.L }}>L</span>
            <span style={{ color: stepColors.A }}>A</span>
            <span style={{ color: stepColors.R }}>R</span>
            <span style={{ color: stepColors.E }}>E</span>-Methode App kommt{' '}
            <span
              style={{
                backgroundImage: `linear-gradient(to right, ${stepColors.K}, ${stepColors.L}, ${stepColors.A}, ${stepColors.R}, ${stepColors.E})`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                color: 'transparent',
              }}
            >
              bald
            </span>
          </h2>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Wir arbeiten mit Hochdruck an der Fertigstellung der App. Trage dich in unseren
            Newsletter ein, um als Erste/r zu erfahren, wenn die App veröffentlicht wird.
          </p>

          <div className="max-w-md mx-auto">
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Deine E-Mail-Adresse"
                className="flex-grow px-4 py-3 rounded-l-lg border focus:outline-none focus:ring-2"
                style={{
                  borderColor: `${colorScheme.primary}40`,
                  focusRing: colorScheme.primary,
                }}
              />
              <button
                className="px-6 py-3 rounded-r-lg text-white font-medium"
                style={{
                  background: `linear-gradient(to right, ${stepColors.K}, ${stepColors.L})`,
                }}
              >
                Anmelden
              </button>
            </div>
          </div>

          <div className="mt-12 max-w-3xl mx-auto">
            <FeedbackForm />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section
        className="py-16"
        style={{
          background: `linear-gradient(to right, ${stepColors.K}, ${stepColors.L}, ${stepColors.A}, ${stepColors.R}, ${stepColors.E})`,
        }}
      >
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">
            Bereit für deine digitale Transformationsreise?
          </h2>
          <p className="text-white text-lg mb-8 max-w-3xl mx-auto opacity-90">
            Die KLARE-Methode App bringt den bewährten 5-Schritte-Prozess direkt auf dein
            Smartphone. Entdecke die Kraft der Kongruenz, wann und wo immer du willst.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              className="bg-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              style={{ color: stepColors.K }}
            >
              <div className="flex items-center gap-2">
                <span>Mehr über die Methode</span>
                <span>→</span>
              </div>
            </button>
            <button
              className="bg-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              style={{ color: stepColors.A }}
            >
              <div className="flex items-center gap-2">
                <span>Kontakt aufnehmen</span>
                <span>✉️</span>
              </div>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default KlareMethodeShowcase;
