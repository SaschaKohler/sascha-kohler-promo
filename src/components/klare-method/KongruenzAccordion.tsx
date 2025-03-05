import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { ColorScheme } from '@/utils/colorSchemes';
import KongruenzIconLists from './KongruenzIconLists';

interface KongruenzAccordionProps {
  colorScheme: ColorScheme;
}

const KongruenzAccordion: React.FC<KongruenzAccordionProps> = ({ colorScheme }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full max-w-3xl mx-auto mt-4 mb-6 bg-white rounded-lg shadow-sm overflow-hidden transition-all duration-300" 
         style={{ borderLeft: `3px solid ${colorScheme.primary}` }}>
      {/* Akkordeon-Header */}
      <button
        className="w-full px-6 py-4 flex items-center justify-between text-left transition-colors duration-200 hover:bg-gray-50"
        onClick={toggleAccordion}
        aria-expanded={isOpen}
      >
        <div className="flex items-center">
          <h3 className="text-lg font-medium" style={{ color: colorScheme.primary }}>
            Was bedeutet Kongruenz?
          </h3>
        </div>
        <div style={{ color: colorScheme.primary }}>
          {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </div>
      </button>

      {/* Akkordeon-Inhalt */}
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'}`}
      >
        <div className="px-6 py-4 border-t" style={{ borderColor: `${colorScheme.primary}20` }}>
          <p className="text-gray-700 mb-4">
            <strong>Kongruenz</strong> bedeutet Übereinstimmung und Stimmigkeit. In der KLARE-Methode 
            steht sie für den Zustand, in dem Ihr Denken, Fühlen und Handeln in allen Lebensbereichen 
            miteinander im Einklang sind – wenn Ihre äußere Realität mit Ihren inneren Werten, 
            Wünschen und Zielen übereinstimmt.
          </p>
          
          <KongruenzIconLists colorScheme={colorScheme} />
        </div>
      </div>
    </div>
  );
};

export default KongruenzAccordion;