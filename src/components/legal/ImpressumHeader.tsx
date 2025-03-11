'use client';
import React from 'react';
import { useColorScheme } from '@/contexts/ColorSchemeContext';

const ImpressumHeader: React.FC = () => {
  const { colorScheme } = useColorScheme();

  return (
    <header className="py-16 relative overflow-hidden">
      {/* Hintergrund mit besserer Lesbarkeit */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: `linear-gradient(135deg, ${colorScheme.primary}, ${colorScheme.accent})`,
        }}
      ></div>

      {/* KLARE Methode als dekorative Elemente im Hintergrund */}
      <div className="absolute inset-0 z-0 opacity-10 flex items-center justify-center overflow-hidden">
        <div className="flex space-x-6 sm:space-x-12 transform -rotate-12 scale-150">
          {['K', 'L', 'A', 'R', 'E'].map((letter, index) => (
            <div
              key={index}
              className="text-8xl sm:text-9xl font-bold text-white"
              style={{
                textShadow: '0 4px 8px rgba(0,0,0,0.1)',
              }}
            >
              {letter}
            </div>
          ))}
        </div>
      </div>

      {/* Tatsächliche Überschrift mit verbesserter Lesbarkeit */}
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 relative">
          Impressum
          <div
            className="absolute bottom-0 left-0 h-1 w-20 mt-2"
            style={{ backgroundColor: 'white' }}
          ></div>
        </h1>

        <p className="max-w-3xl text-white/90 text-lg relative z-10">
          Gemäß § 5 ECG, § 25 MedienG und § 63 GewO - Gesetzlich erforderliche Angaben
        </p>
      </div>
    </header>
  );
};

export default ImpressumHeader;
