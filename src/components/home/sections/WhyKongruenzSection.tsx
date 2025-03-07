'use client';

import React from 'react';
import { Compass, Heart } from 'lucide-react';
import { ColorScheme } from '@/utils/colorSchemes';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';

interface WhyKongruenzSectionProps {
  colorScheme: ColorScheme;
  className?: string;
}

const WhyKongruenzSection: React.FC<WhyKongruenzSectionProps> = ({ colorScheme, className }) => {
  // Kongruenz vs Optimierung Karten-Daten
  const comparisonCards = [
    {
      title: 'Menschen sind keine Unternehmen',
      description:
        'Viele Transformationsansätze behandeln Menschen wie Systeme oder Unternehmen, die "optimiert" werden müssen. Die KLARE Methode respektiert sie als einzigartiges Individuum mit komplexen Bedürfnissen und Emotionen.',
      quote:
        '"Ich habe jahrelang versucht, mich wie eine Maschine zu optimieren. Die Kongruenz-Methode hat mir gezeigt, dass wahre Transformation von innen kommt."',
      icon: Compass,
      color: colorScheme.primary,
    },
    {
      title: 'Ganzheitliche Integration',
      description:
        'Statt einzelne Lebensbereiche isoliert zu verbessern, bringt die KLARE Methode ihr gesamtes Leben in Einklang. Das Ergebnis: Natürliche Leichtigkeit statt Erschöpfung durch fragmentierte Ziele.',
      quote:
        '"Der größte Unterschied: Ich muss mich nicht mehr zwischen meinem beruflichen Erfolg und meinem Familienleben entscheiden. Beide Bereiche nähren sich gegenseitig."',
      icon: Heart,
      color: colorScheme.accent,
    },
  ];

  return (
    <section
      className={cn('py-12', className)}
      style={
        {
          // background: `linear-gradient(to bottom, ${colorScheme.background}40, white)`,
        }
      }
    >
      <div className="container mx-auto px-4">
        <h2
          className="text-xl sm:text-2xl font-semibold mb-8 text-center"
          style={{ color: colorScheme.text }}
        >
          Warum <span style={{ color: colorScheme.primary }}>Kongruenz</span> statt Optimierung?
        </h2>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {comparisonCards.map((card, index) => (
            <Card
              key={index}
              className="border-t-4 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              style={{ borderTopColor: card.color }}
            >
              <CardHeader className="pb-2">
                <CardTitle
                  className="text-lg sm:text-xl font-medium flex items-center"
                  style={{ color: card.color }}
                >
                  <card.icon className="mr-3 flex-shrink-0" size={24} />
                  <span>{card.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="pb-2">
                <p className="text-muted-foreground text-sm sm:text-base mb-4">
                  {card.description}
                </p>
              </CardContent>
              <CardFooter>
                <blockquote className="bg-muted/50 p-3 rounded w-full">
                  <p className="text-xs sm:text-sm italic text-muted-foreground">{card.quote}</p>
                </blockquote>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyKongruenzSection;
