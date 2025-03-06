import React, { useState, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';
import { ColorScheme } from '../common/ColorSchemeSelector';

interface KlareMethodStepsProps {
  colorScheme: ColorScheme;
}

// KLARE Kongruenz-Methode steps
const kongruenzSteps = [
  {
    name: 'Konfrontation',
    letter: 'K',
    color: '#6366F1',
    icon: '🔍',
    description: 'mit der aktuellen Situation',
    longDescription:
      'Erkenne deine größten Ziele und konfrontiere dich ehrlich mit deiner aktuellen Situation. Dieser Schritt schafft Klarheit über den IST-Zustand und den angestrebten SOLL-Zustand in allen Lebensbereichen.',
  },
  {
    name: 'Lebendigkeit',
    letter: 'L',
    color: '#8B5CF6',
    icon: '🌱',
    description: 'erkennen und fördern',
    longDescription:
      'Entdecke die natürliche Lebendigkeit und Energie, die bereits in dir vorhanden ist. Hier lernst du, deine natürlichen Ressourcen und Kräfte zu erkennen und gezielt zu nutzen.',
  },
  {
    name: 'Ausrichtung',
    letter: 'A',
    color: '#EC4899',
    icon: '🧭',
    description: 'der Lebensbereiche',
    longDescription:
      'Entwickle konkrete Strategien, um alle Lebensbereiche in Richtung deiner Ziele auszurichten. In diesem Schritt lernst du Techniken zur bewussten Ausrichtung deines Denkens, Fühlens und Handelns.',
  },
  {
    name: 'Realisierung',
    letter: 'R',
    color: '#F59E0B',
    icon: '🔄',
    description: 'im Alltag',
    longDescription:
      'Setze die entwickelten Strategien in deinem Alltag um und integriere sie nachhaltig in dein Leben. Hier werden unterstützende Strukturen und Routinen etabliert, die langfristige Veränderung ermöglichen.',
  },
  {
    name: 'Entfaltung',
    letter: 'E',
    color: '#10B981',
    icon: '✨',
    description: 'durch vollständige Kongruenz',
    longDescription:
      'Erlebe, wie durch vollständige Kongruenz deine Ziele mit natürlicher Leichtigkeit Wirklichkeit werden. In diesem finalen Schritt manifestiert sich deine Transformation in allen Lebensbereichen und du erlebst das Gefühl tiefer innerer Stimmigkeit.',
  },
];

const KlareMethodSteps: React.FC<KlareMethodStepsProps> = ({ colorScheme }) => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);

  // Auto-rotate active step
  useEffect(() => {
    const stepInterval = setInterval(() => {
      setActiveStepIndex(prevIndex => (prevIndex + 1) % kongruenzSteps.length);
    }, 5000);

    return () => clearInterval(stepInterval);
  }, []);

  return (
    <section className="py-12">
      <div
        className="rounded-lg shadow-lg p-8 mb-16 max-w-4xl mx-auto overflow-hidden relative transition-colors duration-300"
        style={{
          background: `linear-gradient(135deg, ${colorScheme.background}20, white)`,
          borderTop: `3px solid ${colorScheme.primary}`,
        }}
      >
        <h2
          className="text-2xl font-semibold mb-6 text-center"
          style={{ color: colorScheme.primary }}
        >
          Entdecke die KLARE Kongruenz-Methode
        </h2>

        <div className="flex flex-col items-center">
          <p className="text-gray-600 mb-10 text-center max-w-2xl">
            In 5 Schritten zur vollständigen Kongruenz in allen Lebensbereichen. Entdecke den
            transformativen Prozess, der dir hilft, alle Aspekte deines Lebens auf deine großen
            Ziele auszurichten.
          </p>

          {/* Kongruenz-Steps Path Preview with circles and text below */}
          <div className="w-full max-w-3xl flex justify-between items-center relative mb-16 py-4">
            {/* Path line - gradient with kongruenzSteps colors */}
            <div
              className="absolute top-1/2 left-0 w-full h-1 -translate-y-1/2 transition-all duration-300"
              style={{
                background: `linear-gradient(to right, ${kongruenzSteps.map(step => step.color).join(', ')})`,
              }}
            ></div>

            {/* Phase circles with text below */}
            <div className="relative z-10 flex justify-between w-full">
              {kongruenzSteps.map((step, index) => (
                <div
                  key={index}
                  className={`relative flex flex-col items-center cursor-pointer transform transition-all duration-300 ${activeStepIndex === index ? 'scale-110' : ''}`}
                  onClick={() => setActiveStepIndex(index)}
                >
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center text-white text-xl font-medium mb-2 shadow-md hover:shadow-lg transition-shadow"
                    style={{
                      backgroundColor: step.color,
                      opacity: activeStepIndex === index ? 1 : 0.7,
                    }}
                  >
                    <div className="flex flex-col items-center">
                      <span className="text-xl font-bold">{step.letter}</span>
                      <span>{step.icon}</span>
                    </div>
                  </div>
                  <span
                    className="text-xs font-medium text-center mb-1"
                    style={{
                      color: activeStepIndex === index ? step.color : '#666',
                    }}
                  >
                    {step.name}
                  </span>
                  <span className="text-xs text-gray-500 text-center hidden md:block max-w-[90px]">
                    {step.description}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Active step description */}
          <div
            className="bg-white rounded-lg p-6 border-l-4 relative max-w-2xl mx-auto transition-colors duration-300"
            style={{ borderColor: kongruenzSteps[activeStepIndex].color }}
          >
            <div
              className="absolute -top-3 -left-3 w-6 h-6 rounded-full flex items-center justify-center text-white text-xs transition-colors duration-300"
              style={{ backgroundColor: kongruenzSteps[activeStepIndex].color }}
            >
              {kongruenzSteps[activeStepIndex].letter}
            </div>
            <h3
              className="font-medium mb-2"
              style={{ color: kongruenzSteps[activeStepIndex].color }}
            >
              {kongruenzSteps[activeStepIndex].name} {kongruenzSteps[activeStepIndex].description}
            </h3>
            <p className="text-gray-600">{kongruenzSteps[activeStepIndex].longDescription}</p>
            <div className="mt-4 text-right">
              <span
                className="text-sm font-medium transition-colors duration-300"
                style={{ color: kongruenzSteps[activeStepIndex].color }}
              >
                Bald verfügbar
              </span>
            </div>
          </div>

          {/* 'Learn more' Button */}
          <div className="mt-6 text-center">
            <span
              className="inline-flex items-center text-sm font-medium hover:opacity-80 transition-colors duration-300"
              style={{ color: colorScheme.primary }}
            >
              <span>Mehr über die KLARE Kongruenz-Methode erfahren</span>
              <ChevronRight size={16} className="ml-1" />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KlareMethodSteps;
