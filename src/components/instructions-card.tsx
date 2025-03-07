// components/instructions-card.tsx
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AddressMode } from '@/data/klareData';

interface InstructionsCardProps {
  title: string;
  intro: {
    du: string;
    sie: string;
  };
  scaleDescription: {
    du: string;
    sie: string;
  };
  note: {
    du: string;
    sie: string;
  };
  addressMode: AddressMode;
}

export function InstructionsCard({
  title,
  intro,
  scaleDescription,
  note,
  addressMode,
}: InstructionsCardProps) {
  const getText = (text: { du: string; sie: string }) => {
    if (!addressMode) return text.du;
    return text[addressMode];
  };

  return (
    <div className="text-center mb-8">
      <h2 className="text-xl md:text-2xl font-semibold text-indigo-700 mb-3">
        {addressMode === 'du' ? 'Wie kongruent lebst du?' : 'Wie kongruent leben Sie?'}
      </h2>
      <p className="text-gray-700 mb-6">{getText(intro)}</p>

      <Card className="bg-indigo-50">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg text-indigo-700">{title}</CardTitle>
        </CardHeader>
        <CardContent className="text-left">
          <p className="mb-2">{getText(scaleDescription)}</p>
          <ul className="list-disc pl-5 mb-4">
            <li className="mb-1">
              <strong>1</strong> = trifft überhaupt nicht zu
            </li>
            <li>
              <strong>5</strong> = trifft voll und ganz zu
            </li>
          </ul>
          <p>{getText(note)}</p>
        </CardContent>
      </Card>
    </div>
  );
}
