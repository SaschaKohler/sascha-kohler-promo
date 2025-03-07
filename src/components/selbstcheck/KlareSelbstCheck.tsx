'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import klareData, { AddressMode, SectionKey } from '@/data/klareData';
import {
  AddressSelection,
  InstructionsCard,
  KlareSection,
  ResultsDisplay,
} from '@/components/selbstcheck';

/**
 * KLARE Selbstcheck Komponente mit shadcn/ui Integration
 * @returns {JSX.Element} Die Komponente
 */
const KlareSelbstCheck = () => {
  // State für die Anrede-Auswahl
  const [addressMode, setAddressMode] = useState<AddressMode>(null);

  // State für die Antworten
  const [answers, setAnswers] = useState<{
    k: Record<string, number>;
    l: Record<string, number>;
    a: Record<string, number>;
    r: Record<string, number>;
    e: Record<string, number>;
  }>({
    k: {},
    l: {},
    a: {},
    r: {},
    e: {},
  });

  // State für die Anzeige der Ergebnisse
  const [showResults, setShowResults] = useState(false);

  // State für die Scores
  const [scores, setScores] = useState({
    k: 0,
    l: 0,
    a: 0,
    r: 0,
    e: 0,
  });

  // State für Validierungsfehler
  const [validationError, setValidationError] = useState<string | null>(null);

  // Funktion zum Speichern einer Antwort
  const handleAnswerChange = (section: SectionKey, question: string, value: number) => {
    setAnswers(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [question]: value,
      },
    }));

    // Reset validation error when user answers a question
    setValidationError(null);
  };

  // Funktion zum Festlegen der Anrede
  const selectAddressMode = (mode: AddressMode) => {
    setAddressMode(mode);

    // Scroll zur ersten Frage
    setTimeout(() => {
      const firstSection = document.getElementById('section-k');
      if (firstSection) {
        firstSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  // Funktion zur Berechnung der Ergebnisse
  const calculateResults = () => {
    const sections = ['k', 'l', 'a', 'r', 'e'] as const;
    let allAnswered = true;
    const missingSection = sections.find(section => Object.keys(answers[section]).length < 3);

    // Prüfen, ob alle Fragen beantwortet wurden
    if (missingSection) {
      allAnswered = false;

      const sectionName = klareData.sections[missingSection].title;
      setValidationError(
        addressMode === 'du'
          ? `Bitte beantworte alle Fragen im Bereich "${sectionName}".`
          : `Bitte beantworten Sie alle Fragen im Bereich "${sectionName}".`
      );

      // Scroll to the missing section
      const sectionElement = document.getElementById(`section-${missingSection}`);
      if (sectionElement) {
        sectionElement.scrollIntoView({ behavior: 'smooth' });
      }

      return;
    }

    // Scores berechnen
    const newScores = {} as { [key: string]: number };
    sections.forEach(section => {
      const sectionValues = Object.values(answers[section]);
      const sum = sectionValues.reduce((a, b) => a + b, 0);
      newScores[section] = Math.round((sum / (sectionValues.length * 5)) * 10); // Score von 10
    });

    setScores(newScores as typeof scores);
    setShowResults(true);

    // Smooth scroll zu den Ergebnissen
    setTimeout(() => {
      const resultsSection = document.getElementById('results-section');
      if (resultsSection) {
        resultsSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  // Rendere die Anrede-Auswahl, wenn noch keine Auswahl getroffen wurde
  if (addressMode === null) {
    return (
      <AddressSelection
        title={klareData.addressSelection.title}
        description={klareData.addressSelection.description}
        options={klareData.addressSelection.options}
        onSelect={selectAddressMode}
      />
    );
  }

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="bg-gradient-to-r from-indigo-700 to-indigo-500 text-white p-8 text-center rounded-t-xl">
        <h1 className="text-2xl md:text-3xl font-semibold mb-2">
          Persönlicher KLARE Kongruenz-Selbstcheck
        </h1>
        <div className="text-lg opacity-90">
          {addressMode === 'du'
            ? 'Entdecke deine Kongruenz in den fünf Dimensionen'
            : 'Entdecken Sie Ihre Kongruenz in den fünf Dimensionen'}
        </div>
      </div>

      <div className="bg-white p-6 md:p-8 rounded-b-xl shadow-lg">
        <InstructionsCard
          title={klareData.instructions.title}
          intro={klareData.instructions.intro}
          scaleDescription={klareData.instructions.scaleDescription}
          note={klareData.instructions.note}
          addressMode={addressMode}
        />

        {validationError && (
          <Alert variant="destructive" className="mb-8">
            <AlertDescription>{validationError}</AlertDescription>
          </Alert>
        )}

        {/* Render all sections */}
        {(
          Object.entries(klareData.sections) as [
            SectionKey,
            (typeof klareData.sections)[SectionKey],
          ][]
        ).map(([sectionKey, sectionData]) => (
          <KlareSection
            key={sectionKey}
            sectionKey={sectionKey}
            sectionData={sectionData}
            addressMode={addressMode}
            onAnswerChange={handleAnswerChange}
            answers={answers[sectionKey]}
          />
        ))}

        <div className="text-center mt-10 mb-8">
          <Button
            onClick={calculateResults}
            className="px-8 py-6 bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-700 hover:to-indigo-600 text-lg"
            size="lg"
          >
            {addressMode === 'du' ? 'Mein Ergebnis anzeigen' : 'Mein Ergebnis anzeigen'}
          </Button>
        </div>

        {showResults && (
          <ResultsDisplay
            title={klareData.results.title}
            nextSteps={klareData.results.nextSteps}
            scores={scores}
            addressMode={addressMode}
          />
        )}
      </div>

      <div className="bg-gray-100 p-4 text-center text-sm text-gray-600 rounded-b-lg mt-2">
        © 2025 Sascha Kohler · Entwickler der KLARE Kongruenz-Methode
      </div>
    </div>
  );
};

export default KlareSelbstCheck;
