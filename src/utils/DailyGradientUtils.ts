// src/utils/DailyGradientUtils.ts
import { transformationPrinciples } from '@/data/transformationPrinciples';

export interface DailyGradient {
  id: number;
  name: string;
  cssClass: string;
  principle: string;
  focus: string;
}

// Definiere die täglichen Gradienten
const dailyGradients: DailyGradient[] = [
  {
    id: 0,
    name: 'Sanfte Wellen',
    cssClass: 'bg-sanfte-wellen',
    principle: transformationPrinciples[0].principle,
    focus: transformationPrinciples[0].focus,
  },
  {
    id: 1,
    name: 'Atmender Morgen',
    cssClass: 'bg-atmender-morgen',
    principle: transformationPrinciples[1].principle,
    focus: transformationPrinciples[1].focus,
  },
  {
    id: 2,
    name: 'Fließende Klarheit',
    cssClass: 'bg-fliessende-klarheit',
    principle: transformationPrinciples[2].principle,
    focus: transformationPrinciples[2].focus,
  },
  {
    id: 3,
    name: 'Sanfte Transformation',
    cssClass: 'bg-sanfte-transformation',
    principle: transformationPrinciples[3].principle,
    focus: transformationPrinciples[3].focus,
  },
  {
    id: 4,
    name: 'Violette Reflexion',
    cssClass: 'bg-violette-reflexion',
    principle: transformationPrinciples[4].principle,
    focus: transformationPrinciples[4].focus,
  },
  {
    id: 5,
    name: 'Klare Himmel',
    cssClass: 'bg-klare-himmel',
    principle: transformationPrinciples[5].principle,
    focus: transformationPrinciples[5].focus,
  },
  {
    id: 6,
    name: 'Morgenröte',
    cssClass: 'bg-morgenroete',
    principle: transformationPrinciples[6].principle,
    focus: transformationPrinciples[6].focus,
  },
];

// Funktion zum Ermitteln des täglichen Gradienten basierend auf dem Datum
export function getDailyGradient(): DailyGradient {
  // Aktuelles Datum holen
  const today = new Date();
  // Den Tag des Jahres berechnen (1-365)
  const start = new Date(today.getFullYear(), 0, 0);
  const diff = today.getTime() - start.getTime();
  const dayOfYear = Math.floor(diff / (1000 * 60 * 60 * 24));

  // Modulo-Operation, um einen Index zwischen 0 und der Anzahl der Gradienten zu erhalten
  const index = dayOfYear % dailyGradients.length;

  return dailyGradients[index];
}
