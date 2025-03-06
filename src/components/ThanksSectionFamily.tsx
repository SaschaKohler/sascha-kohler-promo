import React from 'react';
import { Heart, ExternalLink } from 'lucide-react';
import { ColorScheme } from './ColorSchemeSelector.tsx.old';

interface ThanksSectionProps {
  colorScheme: ColorScheme;
}

const ThanksSectionFamily: React.FC<ThanksSectionProps> = ({ colorScheme }) => {
  return (
    <section
      className="py-16"
      style={{
        background: `linear-gradient(to top, white, ${colorScheme.background})`,
      }}
    >
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto bg-white rounded-lg p-8 shadow-lg text-center">
          <div className="mb-6 flex justify-center">
            <Heart size={40} className="text-red-500" fill="#ef4444" />
          </div>

          <h2 className="text-3xl font-bold mb-6" style={{ color: colorScheme.primary }}>
            Herzlichen Dank
          </h2>

          <p className="text-lg mb-6">
            Mein besonderer Dank gilt der{' '}
            <a
              href="https://www.rok-akademie.at"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center"
              style={{
                color: colorScheme.primary,
                borderBottom: `1px solid ${colorScheme.primary}`,
                transition: 'opacity 0.3s',
              }}
              onMouseOver={e => (e.currentTarget.style.opacity = '0.8')}
              onMouseOut={e => (e.currentTarget.style.opacity = '1')}
            >
              ROK-Akademie in Wien <ExternalLink size={16} className="ml-1" />
            </a>{' '}
            für die wertvolle Ausbildung und die inspirierenden Methoden, die mir neue Wege in der
            persönlichen Transformation eröffnet haben.
          </p>

          <div
            className="p-6 rounded-lg mb-6"
            style={{ backgroundColor: `${colorScheme.accent}15` }}
          >
            <p className="text-lg font-medium mb-2" style={{ color: colorScheme.primary }}>
              Spezieller Dank an René Otto Knor
            </p>
            <p className="text-gray-600">
              Für seine visionäre Führung, sein umfassendes Wissen und die Art und Weise, wie er
              Lebensfreude und Transformation miteinander verbindet. Seine Lehren haben meinen
              eigenen Weg maßgeblich geprägt und bereichert.
            </p>
          </div>

          {/* Familie Section */}
          <div
            className="p-6 rounded-lg mb-6"
            style={{ backgroundColor: `${colorScheme.primary}15` }}
          >
            <p className="text-lg font-medium mb-4" style={{ color: colorScheme.primary }}>
              Ein ganz besonderer Dank an meine Familie
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-4">
              {/* Gerda */}
              <div className="flex flex-col items-center">
                <div
                  className="relative w-28 h-28 mb-3 rounded-full overflow-hidden border-2"
                  style={{ borderColor: colorScheme.accent }}
                >
                  <img
                    src="/api/placeholder/150/150"
                    alt="Gerda Ahorner"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="font-medium" style={{ color: colorScheme.primary }}>
                  Meine Frau Gerda
                </p>
                <p className="text-gray-600 text-sm mb-2">
                  Expertin für Bachblüten & Mindset-Transformation
                </p>
                <a
                  href="https://www.ja-zum-leben.at"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm"
                  style={{
                    color: colorScheme.accent,
                    transition: 'opacity 0.3s',
                  }}
                  onMouseOver={e => (e.currentTarget.style.opacity = '0.8')}
                  onMouseOut={e => (e.currentTarget.style.opacity = '1')}
                >
                  Zur Expertise <ExternalLink size={14} className="ml-1" />
                </a>
              </div>

              {/* Tobias */}
              <div className="flex flex-col items-center">
                <div
                  className="relative w-28 h-28 mb-3 rounded-full overflow-hidden border-2"
                  style={{ borderColor: colorScheme.accent }}
                >
                  <img
                    src="/api/placeholder/150/150"
                    alt="Tobias Ahorner"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="font-medium" style={{ color: colorScheme.primary }}>
                  Mein Sohn Tobias
                </p>
                <p className="text-gray-600 text-sm">
                  Meine größte Inspiration und tägliche Freude
                </p>
              </div>
            </div>

            <p className="text-gray-600 mt-3">
              Für ihre bedingungslose Unterstützung, Liebe und die gemeinsame Reise des Wachstums.
              Sie sind mein Anker und meine größte Motivation.
            </p>
          </div>

          <p className="italic text-gray-600">
            "Wahre Transformation beginnt, wenn wir das Leben in all seinen Facetten annehmen und
            aus jeder Erfahrung wachsen."
          </p>
        </div>
      </div>
    </section>
  );
};

export default ThanksSectionFamily;
