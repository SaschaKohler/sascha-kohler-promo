import { ColorScheme } from "@/utils/colorSchemes";
import {
  LucideIcon,
  Search,
  Zap,
  Compass,
  Hammer,
  Sparkles,
} from "lucide-react";

export interface KongruenzStep {
  name: string;
  letter: string;
  colorFn: (colorScheme: ColorScheme) => string;
  icon: LucideIcon;
  description: string;
}

export const kongruenzSteps: KongruenzStep[] = [
  {
    name: "Klarheit",
    letter: "K",
    colorFn: (colorScheme) => colorScheme.primary,
    icon: Search,
    description: "über die aktuelle Situation",
  },
  {
    name: "Lebendigkeit",
    letter: "L",
    colorFn: (colorScheme) => colorScheme.primary,
    icon: Zap,
    description: "und Ressourcen wiederentdecken",
  },
  {
    name: "Ausrichtung",
    letter: "A",
    colorFn: (colorScheme) => colorScheme.primary,
    icon: Compass,
    description: "der Lebensbereiche",
  },
  {
    name: "Realisierung",
    letter: "R",
    colorFn: (colorScheme) => colorScheme.primary,
    icon: Hammer,
    description: "im Alltag",
  },
  {
    name: "Entfaltung",
    letter: "E",
    colorFn: (colorScheme) => colorScheme.primary,
    icon: Sparkles,
    description: "durch vollständige Kongruenz",
  },
];

export const getStepColor = (
  step: KongruenzStep,
  theme: ColorScheme,
): string => {
  return step.colorFn(theme);
};
