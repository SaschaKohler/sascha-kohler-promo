import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { ColorScheme } from '@/components/common/theme';
import { transformationPathway } from '@/data/klare-methode/transformationPathway';

interface TransformationPathwayProps {
  colorScheme: ColorScheme;
}

const TransformationPathway: React.FC<TransformationPathwayProps> = ({ colorScheme }) => {
  const [activePathwayIndex, setActivePathwayIndex] = useState(0);
  // Auto-rotate active pathway
  useEffect(() => {
    const interval = setInterval(() => {
      setActivePathwayIndex(prevIndex => (prevIndex + 1) % transformationPathway.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="py-12"
      style={{
        background: `linear-gradient(to bottom, white, ${colorScheme.background}10)`,
      }}
    >
      <div className="container mx-auto px-4 md:px-8">
        <h2
          className="text-2xl md:text-3xl font-bold mb-8 text-center"
          style={{ color: colorScheme.text }}
        >
          Der <span style={{ color: colorScheme.primary }}>Transformations</span>
          pfad
        </h2>

        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-6 mb-8">
          <div className="flex flex-col gap-6">
            {/* Current active transformation pathway */}
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <div className="flex-1 p-4 bg-red-50 rounded-lg border-l-4 border-red-400">
                <h3 className="font-medium text-red-700 mb-1">Weg von</h3>
                <p className="text-gray-700">{transformationPathway[activePathwayIndex].from}</p>
              </div>

              <div className="hidden md:block">
                <ArrowRight size={32} style={{ color: colorScheme.primary }} />
              </div>

              <div className="block md:hidden">
                <ChevronDown size={32} style={{ color: colorScheme.primary }} />
              </div>

              <div
                className="flex-1 p-4 bg-green-50 rounded-lg border-l-4"
                style={{ borderColor: colorScheme.primary }}
              >
                <h3 className="font-medium mb-1" style={{ color: colorScheme.primary }}>
                  Hin zu
                </h3>
                <p className="text-gray-700">{transformationPathway[activePathwayIndex].to}</p>
              </div>
            </div>

            {/* Navigation dots */}
            <div className="flex justify-center gap-2">
              {transformationPathway.map((_, index) => (
                <button
                  key={index}
                  className="w-3 h-3 rounded-full transition-all duration-300"
                  style={{
                    backgroundColor: activePathwayIndex === index ? colorScheme.primary : '#e5e7eb',
                  }}
                  onClick={() => setActivePathwayIndex(index)}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Kongruenz Process Visualization */}
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
          <h3
            className="text-xl font-semibold mb-6 text-center"
            style={{ color: colorScheme.primary }}
          >
            Die KLARE Methode im Vergleich
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 rounded-lg bg-gray-100 flex items-center justify-center mb-4">
                <div className="w-16 h-16 rounded-full flex items-center justify-center relative">
                  <div
                    className="absolute inset-0 rounded-full border-4 border-gray-300 border-dashed animate-spin"
                    style={{ animationDuration: '10s' }}
                  ></div>
                  <div className="w-10 h-10 rounded-full bg-gray-400 flex items-center justify-center text-white font-bold">
                    O
                  </div>
                </div>
              </div>
              <h4 className="text-lg font-medium mb-2 text-gray-700">Herkömmliche Ansätze</h4>
              <ul className="text-sm text-gray-600 space-y-2 text-center">
                <li>Behandeln Menschen wie Systeme</li>
                <li>Optimieren isolierte Bereiche</li>
                <li>Fokus auf äußere Effizienz</li>
                <li>Standardisierte Programme</li>
                <li>Ergebnisorientiert</li>
              </ul>
            </div>

            <div className="flex flex-col items-center">
              <div
                className="w-24 h-24 rounded-lg flex items-center justify-center mb-4"
                style={{
                  background: `linear-gradient(135deg, ${colorScheme.primary}40, ${colorScheme.accent}40)`,
                }}
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center bg-white text-2xl font-bold"
                  style={{ color: colorScheme.primary }}
                >
                  K
                </div>
              </div>
              <h4 className="text-lg font-medium mb-2" style={{ color: colorScheme.primary }}>
                KLARE Kongruenz-Methode
              </h4>
              <ul className="text-sm text-gray-600 space-y-2 text-center">
                <li>Respektiert menschliche Einzigartigkeit</li>
                <li>Integriert alle Lebensbereiche</li>
                <li>Fokus auf innere Stimmigkeit</li>
                <li>Individualisierter Prozess</li>
                <li>Prozessorientiert</li>
              </ul>
            </div>
          </div>

          <div
            className="mt-8 p-4 rounded-lg text-center"
            style={{ backgroundColor: `${colorScheme.background}30` }}
          >
            <p className="text-gray-700">
              Die KLARE Methode ist der erste humanistische Ansatz für nachhaltige persönliche
              Transformation, der Menschen ganzheitlich betrachtet – statt sie wie Unternehmen zu
              optimieren.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransformationPathway;
