// components/result-section.tsx
import { SectionKey, AddressMode, getInterpretationText } from '@/data/klareData';
import { Card, CardContent } from '@/components/ui/card';

interface ResultSectionProps {
  sectionKey: SectionKey;
  score: number;
  title: string;
  color: string;
  addressMode: AddressMode;
}

export function ResultSection({
  sectionKey,
  score,
  title,
  color,
  addressMode,
}: ResultSectionProps) {
  return (
    <div className="mb-6">
      <h4 className="flex items-center mb-2">
        <span
          className={`inline-flex items-center justify-center w-10 h-10
          ${color} text-white font-semibold rounded-full mr-3`}
        >
          {score}
        </span>
        <span>{title}</span>
      </h4>
      <Card>
        <CardContent className="p-4 mt-2">
          {getInterpretationText(sectionKey, score, addressMode)}
        </CardContent>
      </Card>
    </div>
  );
}
