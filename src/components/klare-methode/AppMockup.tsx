import React from 'react';
import { useColorScheme } from '@/contexts/ColorSchemeContext';

interface AppMockupProps {
  activeStep?: 'K' | 'L' | 'A' | 'R' | 'E';
}

const AppMockup: React.FC<AppMockupProps> = ({ activeStep = 'K' }) => {
  const { colorScheme } = useColorScheme();

  // KLARE step colors
  const stepColors = {
    K: '#6366F1', // Indigo
    L: '#8B5CF6', // Violet
    A: '#EC4899', // Pink
    R: '#F59E0B', // Amber
    E: '#10B981', // Emerald
  };

  // Step data for rendering
  const steps = [
    { letter: 'K', name: 'Klarheit', color: stepColors.K },
    { letter: 'L', name: 'Lebendigkeit', color: stepColors.L },
    { letter: 'A', name: 'Ausrichtung', color: stepColors.A },
    { letter: 'R', name: 'Realisierung', color: stepColors.R },
    { letter: 'E', name: 'Entfaltung', color: stepColors.E },
  ];

  // Find the active step data
  const currentStep = steps.find(step => step.letter === activeStep) || steps[0];

  return (
    <div className="relative w-64 h-auto rounded-3xl overflow-hidden border-2 bg-white shadow-lg mx-auto transform transition-all duration-300 hover:scale-105"
      style={{ borderColor: currentStep.color }}>
      {/* Phone Frame */}
      <div className="w-full h-full relative">
        {/* Status Bar */}
        <div className="h-6 w-full" style={{ backgroundColor: currentStep.color }}></div>
        
        {/* App Header */}
        <div className="p-4 bg-gray-50 border-b">
          <div className="text-lg font-semibold" style={{ color: currentStep.color }}>
            KLARE Methode
          </div>
        </div>
        
        {/* KLARE Steps Navigation */}
        <div className="flex justify-between p-3 bg-gray-100">
          {steps.map((step) => (
            <div 
              key={step.letter}
              className={`flex flex-col items-center p-1 rounded ${step.letter === activeStep ? 'bg-white shadow-sm' : ''}`}
              style={{ 
                borderColor: step.letter === activeStep ? step.color : 'transparent',
                borderWidth: step.letter === activeStep ? '1px' : '0px',
              }}
            >
              <div 
                className="w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold mb-1"
                style={{ 
                  backgroundColor: `${step.color}20`,
                  color: step.color,
                }}
              >
                {step.letter}
              </div>
              <span className="text-xs" style={{ color: step.letter === activeStep ? step.color : '#666' }}>
                {step.name}
              </span>
            </div>
          ))}
        </div>
        
        {/* Content Area */}
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2" style={{ color: currentStep.color }}>
            {activeStep === 'K' && 'Was bedeutet Klarheit?'}
            {activeStep === 'L' && 'Was bedeutet Lebendigkeit?'}
            {activeStep === 'A' && 'Was bedeutet Ausrichtung?'}
            {activeStep === 'R' && 'Was bedeutet Realisierung?'}
            {activeStep === 'E' && 'Was bedeutet Entfaltung?'}
          </h3>
          
          <p className="text-sm text-gray-600 mb-4">
            {activeStep === 'K' && 'Klarheit ist der erste Schritt in der KLARE Methode. Hier geht es darum, eine ehrliche Standortbestimmung vorzunehmen und sich der aktuellen Situation bewusst zu werden.'}
            {activeStep === 'L' && 'Lebendigkeit beschäftigt sich mit der Wiederentdeckung und Aktivierung deiner natürlichen Ressourcen und Energien.'}
            {activeStep === 'A' && 'Ausrichtung fokussiert auf die Integration aller Lebensbereiche und die Schaffung einer kohärenten Vision.'}
            {activeStep === 'R' && 'Realisierung überführt die Erkenntnis in konkretes Handeln im Alltag.'}
            {activeStep === 'E' && 'Entfaltung ist das Ergebnis vollständiger Kongruenz in allen Lebensbereichen.'}
          </p>
          
          {/* Card */}
          <div className="bg-white rounded-lg p-3 border mb-4" style={{ borderColor: `${currentStep.color}40` }}>
            <h4 className="font-medium text-sm mb-1" style={{ color: currentStep.color }}>
              Worum geht es im Schritt {activeStep}?
            </h4>
            <p className="text-xs text-gray-600">
              {activeStep === 'K' && 'Der K-Schritt hilft dir, deine aktuelle Situation ehrlich zu erkennen und anzunehmen. Du wirst dein Lebensrad analysieren und Inkongruenzen identifizieren.'}
              {activeStep === 'L' && 'Der L-Schritt aktiviert deine natürlichen Energiequellen und hilft dir, Blockaden zu überwinden, die deinen natürlichen Energiefluss behindern.'}
              {activeStep === 'A' && 'Der A-Schritt bringt alle deine Lebensbereiche in Einklang und schafft eine kohärente Vision, die alle Aspekte deines Lebens integriert.'}
              {activeStep === 'R' && 'Der R-Schritt überführt deine Erkenntnisse in konkretes, nachhaltiges Handeln durch bewusste Gewohnheiten und Routinen.'}
              {activeStep === 'E' && 'Der E-Schritt führt zur mühelosen Entfaltung durch vollständige Kongruenz in allen Lebensbereichen und kontinuierlichem Wachstum.'}
            </p>
          </div>
          
          {/* Button */}
          <button 
            className="w-full py-2 rounded-lg text-white text-sm font-medium"
            style={{ backgroundColor: currentStep.color }}
          >
            Module starten
          </button>
        </div>
        
        {/* Bottom Navigation */}
        <div className="flex justify-around py-3 border-t mt-4">
          <div className="flex flex-col items-center">
            <div className="h-5 w-5 mb-1 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-full" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
            </div>
            <span className="text-xs">Home</span>
          </div>
          <div className="flex flex-col items-center" style={{ color: currentStep.color }}>
            <div className="h-5 w-5 mb-1 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-full" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-xs">KLARE</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="h-5 w-5 mb-1 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-full" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-xs">Profil</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppMockup;
