'use client';
import { ColorScheme } from '@/utils/colorSchemes';
import { Calendar, ChevronDown } from 'lucide-react';
import { useEffect, useState } from 'react';
import { transformationPrinciples } from '@/data/transformationPrinciples';

interface DailyQuoteProps {
  colorScheme: ColorScheme;
}

const DailyPrinciple: React.FC<DailyQuoteProps> = ({ colorScheme }) => {
  const [dailyQuote, setDailyQuote] = useState(transformationPrinciples[0]);

  useEffect(() => {
    const now = new Date();
    const dayOfYear = Math.floor((now - new Date(now.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24));
    const principleIndex = dayOfYear % transformationPrinciples.length;
    setDailyQuote(transformationPrinciples[principleIndex]);
  }, []);

  return (
    <>
      <div className="w-full max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8 mb-12 relative">
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-white p-2 rounded-full shadow">
          <Calendar size={24} style={{ color: colorScheme.accent }} />
        </div>
        <h2 className="text-xl font-medium mb-6 text-center">Kongruenz-Prinzip des Tages</h2>
        <p className="text-xl md:text-2xl italic mb-4" style={{ color: colorScheme.primary }}>
          "{dailyQuote.principle}"
        </p>
        <p className="text-right text-gray-600 flex items-center justify-end">
          <span
            className="inline-block px-3 py-1 rounded-full text-xs"
            style={{
              backgroundColor: `${colorScheme.accent}20`,
              color: colorScheme.accent,
            }}
          >
            {dailyQuote.focus}
          </span>
        </p>
      </div>

      <div className="flex justify-center">
        <ChevronDown
          size={32}
          className="animate-bounce cursor-pointer"
          style={{ color: colorScheme.accent }}
        />
      </div>
    </>
  );
};

export default DailyPrinciple;
