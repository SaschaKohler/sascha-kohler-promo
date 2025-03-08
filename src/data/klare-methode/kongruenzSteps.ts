import { ColorScheme } from '@/utils/colorSchemes';
import { LucideIcon, Search, Zap, Compass, Hammer, Sparkles } from 'lucide-react';

export interface KongruenzStep {
  name: string;
  letter: string;
  colorFn: (colorScheme: ColorScheme) => string;
  color: string;
  icon: LucideIcon;
  description: string;
}

export const kongruenzSteps: KongruenzStep[] = [
  {
    name: 'Klarheit',
    letter: 'K',
    colorFn: colorScheme => colorScheme.primary,
    color: '#6366F1',
    icon: Search,
    description: 'über die aktuelle Situation',
  },
  {
    name: 'Lebendigkeit',
    letter: 'L',
    colorFn: colorScheme => colorScheme.primary,
    color: '#8B5CF6',
    icon: Zap,
    description: 'und Ressourcen wiederentdecken',
  },
  {
    name: 'Ausrichtung',
    letter: 'A',
    colorFn: colorScheme => colorScheme.primary,
    icon: Compass,
    color: '#EC4899',
    description: 'der Lebensbereiche',
  },
  {
    name: 'Realisierung',
    letter: 'R',
    colorFn: colorScheme => colorScheme.primary,
    color: '#F59E0B',
    icon: Hammer,
    description: 'im Alltag',
  },
  {
    name: 'Entfaltung',
    letter: 'E',
    colorFn: colorScheme => colorScheme.primary,
    color: '#10B981',
    icon: Sparkles,
    description: 'durch vollständige Kongruenz',
  },
];

export const getStepColor = (step: KongruenzStep, theme: ColorScheme): string => {
  // return step.colorFn(theme);
  return step.color;
};
