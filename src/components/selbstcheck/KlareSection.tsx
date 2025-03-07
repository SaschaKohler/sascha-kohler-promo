'use client';

import { useState } from 'react';
import { SectionKey, SectionData, AddressMode } from '@/data/klareData';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';

interface KlareSectionProps {
  sectionKey: SectionKey;
  sectionData: SectionData;
  addressMode: AddressMode;
  onAnswerChange: (section: SectionKey, question: string, value: number) => void;
  answers: Record<string, number>;
}

export default function KlareSection({
  sectionKey,
  sectionData,
  addressMode,
  onAnswerChange,
  answers,
}: KlareSectionProps) {
  const { title, description, questions, color } = sectionData;

  const getText = (text: { du: string; sie: string }) => {
    if (!addressMode) return text.du;
    return text[addressMode];
  };

  return (
    <Card id={`section-${sectionKey}`} className={`mb-8 ${color.light} border-l-4 ${color.border}`}>
      <CardHeader className="flex flex-row items-center gap-3 pb-2">
        <div className={`text-3xl font-bold ${color.text}`}>{sectionKey.toUpperCase()}</div>
        <CardTitle className={`${color.text}`}>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-6 text-gray-700">{getText(description)}</p>

        <div className="space-y-8">
          {Object.entries(questions).map(([questionKey, question]) => (
            <div key={`${sectionKey}-${questionKey}`} className="space-y-4">
              <div className="font-medium">{getText(question)}</div>

              <RadioGroup
                value={answers[questionKey]?.toString()}
                onValueChange={value => onAnswerChange(sectionKey, questionKey, parseInt(value))}
                className="flex justify-between"
              >
                {[1, 2, 3, 4, 5].map(value => (
                  <div key={value} className="flex flex-col items-center space-y-1.5">
                    <RadioGroupItem
                      value={value.toString()}
                      id={`${sectionKey}-${questionKey}-${value}`}
                      className={`h-10 w-10 ${answers[questionKey] === value ? `${color.bg} text-white` : ''}`}
                    />
                    {(value === 1 || value === 5) && (
                      <Label
                        htmlFor={`${sectionKey}-${questionKey}-${value}`}
                        className="text-xs text-gray-500"
                      >
                        {value === 1 ? 'Trifft nicht zu' : 'Trifft voll zu'}
                      </Label>
                    )}
                  </div>
                ))}
              </RadioGroup>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
