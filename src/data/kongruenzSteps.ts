import { ColorScheme } from "@/utils/colorSchemes";

export interface KongruenzStep {
  name: string;
  letter: string;
  colorFn: (colorScheme: ColorScheme) => string;
  icon: string;
  description: string;
}

export const kongruenzSteps: KongruenzStep[] = [
  {
    name: "Klarheit",
    letter: "K",
    colorFn: (colorScheme) => colorScheme.primary, // "#6366F1",
    icon: "🔍",
    description: "über die aktuelle Situation",
  },
  {
    name: "Lebendigkeit",
    letter: "L",
    colorFn: (colorScheme) => colorScheme.primary, // "#6366F1",
    icon: "🤔",
    description: "und Ressourcen wiederentdecken",
  },
  {
    name: "Ausrichtung",
    letter: "A",
    colorFn: (colorScheme) => colorScheme.primary, // "#6366F1",
    icon: "🧭",
    description: "der Lebensbereiche",
  },
  {
    name: "Realisierung",
    letter: "R",
    colorFn: (colorScheme) => colorScheme.primary, // "#6366F1",
    icon: "🔄",
    description: "im Alltag",
  },
  {
    name: "Entfaltung",
    letter: "E",
    colorFn: (colorScheme) => colorScheme.primary, // "#6366F1",
    icon: "✨",
    description: "durch vollständige Kongruenz",
  },
];

export const getStepColor = (
  step: KongruenzStep,
  theme: ColorScheme,
): string => {
  return step.colorFn(theme);
};
