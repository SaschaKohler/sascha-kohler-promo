// components/results-display.tsx
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { AddressMode, SectionKey, getLocalizedText } from '@/data/klareData';
import { ResultSection } from '@/components/result-section';

interface ResultsDisplayProps {
  title: {
    du: string;
    sie: string;
  };
  nextSteps: {
    title: string;
    description: {
      du: string;
      sie: string;
    };
    cta: {
      du: string;
      sie: string;
    };
  };
  scores: Record<SectionKey, number>;
  addressMode: AddressMode;
}

export default function ResultsDisplay({
  title,
  nextSteps,
  scores,
  addressMode,
}: ResultsDisplayProps) {
  const sectionColors = {
    k: 'bg-indigo-600',
    l: 'bg-violet-600',
    a: 'bg-pink-500',
    r: 'bg-amber-500',
    e: 'bg-emerald-500',
  };

  const sectionTitles = {
    k: 'Konfrontation mit der aktuellen Situation',
    l: 'Lebendigkeit erkennen',
    a: 'Ausrichtung der Lebensbereiche',
    r: 'Realisierung im Alltag',
    e: 'Entfaltung durch vollständige Kongruenz',
  };

  return (
    <Card id="results-section" className="mt-12">
      <CardHeader className="text-center">
        <CardTitle className="text-xl text-indigo-700">
          {getLocalizedText(title, addressMode)}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {Object.entries(scores).map(([key, score]) => (
          <ResultSection
            key={key}
            sectionKey={key as SectionKey}
            score={score}
            title={sectionTitles[key as SectionKey]}
            color={sectionColors[key as SectionKey]}
            addressMode={addressMode}
          />
        ))}

        <div className="mt-10 text-center">
          <h4 className="font-semibold text-lg mb-3">{nextSteps.title}</h4>
          <p className="mb-6">{getLocalizedText(nextSteps.description, addressMode)}</p>
          <Button
            asChild
            className="bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-700 hover:to-indigo-600"
          >
            <a href="https://calendar.app.google/7PqGbBPAWCTgfzza9">
              {getLocalizedText(nextSteps.cta, addressMode)}
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
