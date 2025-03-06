import React from 'react';
import { Star, ArrowRight } from 'lucide-react';
import { ColorScheme } from './common/ColorSchemeSelector';

interface CredoProps {
  colorScheme: ColorScheme;
}

const KongruenzCredo: React.FC<CredoProps> = ({ colorScheme }) => {
  return (
    <section
      className="py-16 relative overflow-hidden"
      style={{
        background: `linear-gradient(135deg, ${colorScheme.primary}10, ${colorScheme.accent}10)`,
      }}
    >
      {/* Dekorative Elemente */}
      <div className="absolute inset-0 z-0">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full opacity-20 animate-float"
            style={{
              background: `radial-gradient(circle, ${colorScheme.primary}30, transparent)`,
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

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <Star size={36} style={{ color: colorScheme.accent }} className="mx-auto mb-4" />

          <h2
            className="text-3xl md:text-4xl font-bold mb-6"
            style={{ color: colorScheme.primary }}
          >
            Unser Kongruenz-Credo
          </h2>

          <div className="bg-white rounded-lg shadow-lg p-8 md:p-10 relative">
            {/* Dekorative Anführungszeichen */}
            <div
              className="absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2 text-6xl leading-none opacity-20"
              style={{ color: colorScheme.primary }}
            >
              "
            </div>
            <div
              className="absolute bottom-0 right-0 transform translate-x-1/2 translate-y-1/2 text-6xl leading-none opacity-20"
              style={{ color: colorScheme.accent }}
            >
              "
            </div>

            <p
              className="text-xl md:text-2xl italic leading-relaxed mb-6"
              style={{ color: colorScheme.text }}
            >
              Wir erschließen den Raum zwischen{' '}
              <span style={{ color: colorScheme.primary }}>äußerem Erfolg</span> und{' '}
              <span style={{ color: colorScheme.accent }}>innerer Erfüllung</span>, damit Menschen
              in allen Lebensphasen ihr wahres Potenzial in vollständiger Kongruenz entfalten
              können.
            </p>

            <hr className="my-6 border-t" style={{ borderColor: `${colorScheme.primary}30` }} />

            <div className="flex flex-col md:flex-row justify-center items-center md:items-stretch gap-8 md:gap-12">
              <div className="flex-1 max-w-xs">
                <div className="flex items-center mb-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center mr-3"
                    style={{ backgroundColor: `${colorScheme.primary}20` }}
                  >
                    <span style={{ color: colorScheme.primary }}>1</span>
                  </div>
                  <h3 className="font-semibold" style={{ color: colorScheme.primary }}>
                    Wir öffnen Türen nach innen
                  </h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Durch Bewusstwerdung von persönlichen Werten, Mustern und inneren Konflikten
                </p>
              </div>

              <div className="hidden md:block">
                <ArrowRight size={24} style={{ color: colorScheme.accent }} />
              </div>

              <div className="flex-1 max-w-xs">
                <div className="flex items-center mb-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center mr-3"
                    style={{ backgroundColor: `${colorScheme.accent}20` }}
                  >
                    <span style={{ color: colorScheme.accent }}>2</span>
                  </div>
                  <h3 className="font-semibold" style={{ color: colorScheme.accent }}>
                    Wir öffnen Tore nach außen
                  </h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Durch kongruente Ausrichtung des Handelns mit den persönlichen Werten und Zielen
                </p>
              </div>

              <div className="hidden md:block">
                <ArrowRight size={24} style={{ color: colorScheme.accent }} />
              </div>

              <div className="flex-1 max-w-xs">
                <div className="flex items-center mb-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center mr-3"
                    style={{
                      background: `linear-gradient(135deg, ${colorScheme.primary}40, ${colorScheme.accent}40)`,
                    }}
                  >
                    <span style={{ color: colorScheme.primary }}>3</span>
                  </div>
                  <h3
                    className="font-semibold"
                    style={{
                      background: `linear-gradient(to right, ${colorScheme.primary}, ${colorScheme.accent})`,
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    Wir schaffen vollständige Kongruenz
                  </h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Indem wir Brücken bauen zwischen persönlichem Wachstum und äußeren Erfolgen in
                  allen Lebensbereichen
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KongruenzCredo;
