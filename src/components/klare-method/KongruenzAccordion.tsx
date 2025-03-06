'use client';

import React from 'react';
import { ColorScheme } from '@/utils/colorSchemes';
import { cn } from '@/lib/utils';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  AlertTriangle,
  Battery,
  ArrowUpCircle,
  Frown,
  Smile,
  Heart,
  UserCheck,
  Shapes,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface KongruenzAccordionProps {
  colorScheme: ColorScheme;
  className?: string;
}

const KongruenzAccordion: React.FC<KongruenzAccordionProps> = ({ colorScheme, className }) => {
  // Definition der Inkongruenz- und Kongruenz-Items
  const inkongruenzItems = [
    {
      icon: AlertTriangle,
      text: 'Innere Konflikte und Widersprüche',
    },
    {
      icon: Battery,
      text: 'Energieverlust im Alltag',
    },
    {
      icon: ArrowUpCircle,
      text: 'Das Gefühl, gegen sich selbst zu arbeiten',
    },
    {
      icon: Frown,
      text: 'Chronische Unzufriedenheit trotz äußerer Erfolge',
    },
  ];

  const kongruenzItems = [
    {
      icon: Smile,
      text: 'Natürliche Motivation und Leichtigkeit',
    },
    {
      icon: Heart,
      text: 'Innere Ruhe und Klarheit',
    },
    {
      icon: UserCheck,
      text: 'Authentizität in allen Lebensbereichen',
    },
    {
      icon: Shapes,
      text: 'Harmonisches Zusammenspiel aller Aspekte des Lebens',
    },
  ];

  return (
    <Accordion
      type="single"
      collapsible
      className={cn('w-full max-w-3xl mx-auto rounded-md shadow-sm', className)}
    >
      <AccordionItem
        value="kongruenz-definition"
        className="border-0 overflow-hidden"
        style={{ borderLeft: `3px solid ${colorScheme.primary}` }}
      >
        <AccordionTrigger
          className="px-6 py-4 hover:bg-muted/40 text-lg font-medium"
          style={{ color: colorScheme.primary }}
        >
          Was bedeutet Kongruenz?
        </AccordionTrigger>
        <AccordionContent>
          <div className="px-6 py-4 border-t" style={{ borderColor: `${colorScheme.primary}20` }}>
            <p className="text-muted-foreground mb-6">
              <strong>Kongruenz</strong> bedeutet Übereinstimmung und Stimmigkeit. In der
              KLARE-Methode steht Kongruenz für den Zustand, in dem Ihr Denken, Fühlen und Handeln
              in allen Lebensbereichen miteinander im Einklang sind – wenn Ihre äußere Realität mit
              Ihren inneren Werten, Wünschen und Zielen übereinstimmt.
            </p>

            {/* Responsive Grid für die Karten */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Inkongruenz-Karte */}
              <Card
                className="border-0 shadow-sm"
                style={{ backgroundColor: `${colorScheme.primary}10` }}
              >
                <CardHeader className="pb-2">
                  <CardTitle
                    className="text-base font-medium"
                    style={{ color: colorScheme.primary }}
                  >
                    Inkongruenz (Unstimmigkeit)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {inkongruenzItems.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span
                          className="mr-3 mt-0.5 flex-shrink-0"
                          style={{ color: colorScheme.primary }}
                        >
                          <item.icon size={18} />
                        </span>
                        <span className="text-muted-foreground text-sm">{item.text}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Kongruenz-Karte */}
              <Card
                className="border-0 shadow-sm"
                style={{ backgroundColor: `${colorScheme.accent}10` }}
              >
                <CardHeader className="pb-2">
                  <CardTitle
                    className="text-base font-medium"
                    style={{ color: colorScheme.accent }}
                  >
                    Kongruenz (Stimmigkeit)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {kongruenzItems.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span
                          className="mr-3 mt-0.5 flex-shrink-0"
                          style={{ color: colorScheme.accent }}
                        >
                          <item.icon size={18} />
                        </span>
                        <span className="text-muted-foreground text-sm">{item.text}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default KongruenzAccordion;
