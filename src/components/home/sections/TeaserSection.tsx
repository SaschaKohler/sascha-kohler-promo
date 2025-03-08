import React from 'react';
import Image from 'next/image';
import { ChevronDown } from 'lucide-react';
import { kongruenzSteps, getStepColor } from '@/data/klare-methode/kongruenzSteps';
import useScrollToSection from '@/hooks/useScrollToSection';
import { ColorScheme } from '@/utils/colorSchemes';
import KongruenzAccordion from '@/components/klare-method/KongruenzAccordion';

interface TeaserSectionProps {
  colorScheme: ColorScheme;
  // Optional: Sie können hier zusätzliche Props definieren, falls benötigt
}

const TeaserSection: React.FC<TeaserSectionProps> = ({ colorScheme }) => {
  const scrollToSection = useScrollToSection();

  // Funktion für optimiertes Scrolling mit Offset für die Navigationsleiste
  const handleScrollToSection = (sectionId: string) => {
    // 60px Offset für die Navigationsleiste + etwas zusätzlichen Abstand
    scrollToSection(sectionId, { offset: 80 });
  };

  return (
    <section className="min-h-[80vh] flex flex-col items-center justify-center pt-2">
      <div className="text-center max-w-4xl mx-auto mb-10">
        {/* Hero Layout mit Bild und Text nebeneinander auf größeren Bildschirmen */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-10">
          {/* Profilbild mit Animation und Styling */}
          <div className="w-full md:w-5/12 mb-8 md:mb-0 px-4">
            <div className="relative">
              <div
                className="w-56 h-56 md:w-72 md:h-72 mx-auto rounded-full overflow-hidden border-4 shadow-xl animate-float"
                style={{ borderColor: colorScheme.primary }}
              >
                <Image
                  src="/images/sascha-kohler.jpeg"
                  alt="Sascha Kohler"
                  width={300}
                  height={300}
                  style={{
                    objectFit: 'cover',
                    objectPosition: 'center',
                  }}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>
              {/* Dekorativer Kreis hinter dem Bild */}
              <div
                className="absolute -z-10 w-56 h-56 md:w-72 md:h-72 rounded-full -top-3 -left-3 blur-sm opacity-30"
                style={{ backgroundColor: colorScheme.accent }}
              ></div>
            </div>
          </div>

          {/* Titeltext und Beschreibung */}
          <div className="w-full md:w-7/12 px-4 text-left md:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="mr-2 inline-block">Die</span>

              {/* KLARE SVG Group mit Letter-SVGs aus dem public Ordner */}
              <div className="flex items-center justify-start mb-2">
                <Image
                  src="/klare-svg/K-circle.svg"
                  alt="K"
                  width={64}
                  height={64}
                  className="h-16 sm:h-20 md:h-24 -ml-1"
                  style={{ filter: `drop-shadow(0 0 2px ${colorScheme.primary})` }}
                />
                <Image
                  src="/klare-svg/L-circle.svg"
                  alt="L"
                  width={64}
                  height={64}
                  className="h-16 sm:h-20 md:h-24 -ml-1"
                  style={{ filter: `drop-shadow(0 0 2px ${colorScheme.primary})` }}
                />
                <Image
                  src="/klare-svg/A-circle.svg"
                  alt="A"
                  width={64}
                  height={64}
                  className="h-16 sm:h-20 md:h-24 -ml-1"
                  style={{ filter: `drop-shadow(0 0 2px ${colorScheme.primary})` }}
                />
                <Image
                  src="/klare-svg/R-circle.svg"
                  alt="R"
                  width={64}
                  height={64}
                  className="h-16 sm:h-20 md:h-24 -ml-1"
                  style={{ filter: `drop-shadow(0 0 2px ${colorScheme.primary})` }}
                />
                <Image
                  src="/klare-svg/E-circle.svg"
                  alt="E"
                  width={64}
                  height={64}
                  className="h-16 sm:h-20 md:h-24 -ml-1"
                  style={{ filter: `drop-shadow(0 0 2px ${colorScheme.primary})` }}
                />
              </div>

              <span className="ml-2 inline-block">
                <span
                  style={{
                    backgroundImage: `linear-gradient(to right, ${colorScheme.primary}, ${colorScheme.accent})`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    color: 'transparent',
                  }}
                >
                  Methode
                </span>
              </span>
            </h1>
            <h2
              className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6"
              style={{ color: colorScheme.text }}
            >
              Kongruenz statt Optimierung
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8 leading-relaxed">
              Schluss mit Selbstoptimierung! Die KLARE-Methode schafft Kongruenz: Ihre
              Lebensbereiche endlich im Einklang mit Ihren wahren Wünschen, Träumen und Zielen.
            </p>
          </div>
        </div>

        {/* Kongruenz-Akkordeon */}
        <KongruenzAccordion colorScheme={colorScheme} />

        {/* K.L.A.R.E.-Methode Einführung */}
        <p className="text-md text-gray-600 mb-6 pt-3">
          Die <strong>K.L.A.R.E.</strong>-Methode steht für: <strong>K</strong>
          larheit, <strong>L</strong>ebendigkeit, <strong>A</strong>usrichtung, <strong>R</strong>
          ealisierung, <strong>E</strong>ntfaltung
        </p>

        {/* KLARE-Methode Steps mit verbesserten visuellen Elementen */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {kongruenzSteps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-2 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center mb-2 shadow-md"
                style={{
                  backgroundColor: getStepColor(step, colorScheme),
                  boxShadow: `0 4px 10px ${getStepColor(step, colorScheme)}40`,
                }}
              >
                <span className="text-white text-lg font-bold">{step.letter}</span>
              </div>
              <div className="text-center">
                <div className="font-semibold" style={{ color: getStepColor(step, colorScheme) }}>
                  {step.name}
                </div>
                <div className="text-sm text-gray-600">{step.description}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Call-to-Action Button */}
        <div className="mb-8">
          <button
            className="px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-white"
            style={{
              background: `linear-gradient(to right, ${colorScheme.primary}, ${colorScheme.accent})`,
            }}
            onClick={() => handleScrollToSection('launch-date')}
            aria-label="Zum Launch-Countdown scrollen"
          >
            Website-Launch im April 2025
          </button>
        </div>
      </div>

      <div className="flex justify-center">
        <ChevronDown
          size={32}
          className="animate-bounce cursor-pointer"
          style={{ color: colorScheme.accent }}
          onClick={() => handleScrollToSection('newsletter')}
          aria-label="Zum Newsletter scrollen"
        />
      </div>

      <style jsx>{`
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(0px);
          }
        }
      `}</style>
    </section>
  );
};

export default TeaserSection;
