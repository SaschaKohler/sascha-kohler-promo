import React from 'react';
import { ColorScheme } from '@/utils/colorSchemes';

interface KongruenzExplanationProps {
  colorScheme: ColorScheme;
}

const KongruenzExplanation: React.FC<KongruenzExplanationProps> = ({ colorScheme }) => {
  return (
    <div
      className="bg-white rounded-lg shadow-md p-6 max-w-3xl mx-auto my-8"
      style={{ borderLeft: `4px solid ${colorScheme.primary}` }}
    >
      <h3 className="text-xl font-semibold mb-3" style={{ color: colorScheme.primary }}>
        Was bedeutet Kongruenz?
      </h3>
      <p className="text-gray-700 mb-4">
        <strong>Kongruenz</strong> bedeutet Übereinstimmung und Stimmigkeit. In der KLARE-Methode
        steht sie für den Zustand, in dem Ihr Denken, Fühlen und Handeln in allen Lebensbereichen
        miteinander im Einklang sind – wenn Ihre äußere Realität mit Ihren inneren Werten, Wünschen
        und Zielen übereinstimmt.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 rounded-lg" style={{ backgroundColor: `${colorScheme.primary}10` }}>
          <h4 className="font-medium mb-2" style={{ color: colorScheme.primary }}>
            Inkongruenz (Unstimmigkeit)
          </h4>
          <p className="text-sm text-gray-600">
            Sie spüren innere Konflikte, Unzufriedenheit und Energieverlust, wenn Ihr Leben nicht
            Ihren wahren Bedürfnissen entspricht.
          </p>
        </div>
        <div className="p-4 rounded-lg" style={{ backgroundColor: `${colorScheme.accent}10` }}>
          <h4 className="font-medium mb-2" style={{ color: colorScheme.accent }}>
            Kongruenz (Stimmigkeit)
          </h4>
          <p className="text-sm text-gray-600">
            Sie erleben Leichtigkeit, innere Ruhe und natürliche Motivation, wenn alle Aspekte Ihres
            Lebens in harmonischer Übereinstimmung sind.
          </p>
        </div>
      </div>
    </div>
  );
};

export default KongruenzExplanation;
