'use client';
import React, { useState, useEffect } from 'react';
import { useColorScheme } from '@/contexts/ColorSchemeContext';
import { motion, AnimatePresence } from 'framer-motion';
import { kongruenzSteps } from '@/data/klare-methode/kongruenzSteps';
import {
  ArrowRight,
  ExternalLink,
  ChevronDown,
  Search,
  Zap,
  Compass,
  Hammer,
  Sparkles,
} from 'lucide-react';

interface TransformationPoint {
  from: string;
  to: string;
}

// Transformation Wege für jeden KLARE-Schritt
const transformationPoints: Record<string, TransformationPoint[]> = {
  K: [
    {
      from: 'Vermeidung und Verdrängung',
      to: 'Ehrliche Selbstreflexion',
    },
    {
      from: 'Unklarheit über Ist-Zustand',
      to: 'Bewusstsein für die Realität',
    },
    {
      from: 'Fehlende Selbstwahrnehmung',
      to: 'Präzise Standortbestimmung',
    },
  ],
  L: [
    {
      from: 'Energielosigkeit und Blockaden',
      to: 'Natürliche Lebensenergie',
    },
    {
      from: 'Unterdrückte Ressourcen',
      to: 'Aktivierte Potenziale',
    },
    {
      from: 'Innere Hindernisse',
      to: 'Freier Energiefluss',
    },
  ],
  A: [
    {
      from: 'Widersprüchliche Ziele',
      to: 'Stimmige Ausrichtung',
    },
    {
      from: 'Getrennte Lebensbereiche',
      to: 'Ganzheitliche Integration',
    },
    {
      from: 'Wertekonflikt',
      to: 'Wertekohärenz',
    },
  ],
  R: [
    {
      from: 'Ideen ohne Umsetzung',
      to: 'Effektive Implementierung',
    },
    {
      from: 'Gelegentliche Maßnahmen',
      to: 'Dauerhafte Integration',
    },
    {
      from: 'Rückfall in alte Muster',
      to: 'Stabile neue Gewohnheiten',
    },
  ],
  E: [
    {
      from: 'Stagnierende Entwicklung',
      to: 'Kontinuierliches Wachstum',
    },
    {
      from: 'Anstrengende Zielerreichung',
      to: 'Mühelose Manifestation',
    },
    {
      from: 'Partielle Erfolge',
      to: 'Ganzheitliche Entfaltung',
    },
  ],
};

// Praktische Übungen für jeden KLARE-Schritt
const practicalExercises: Record<string, string[]> = {
  K: [
    'Lebensrad-Analyse zur Standortbestimmung',
    'Journaling zu Diskrepanzen zwischen Wunsch und Realität',
    'Feedback-Einholung von vertrauten Personen',
  ],
  L: [
    'Identifikation von Momenten natürlicher Lebendigkeit',
    'Ressourcen-Anker für positive Energiezustände',
    'Blockaden-Mapping und Auflösungsstrategien',
  ],
  A: [
    'Werte-Hierarchie und Lebensbereiche-Integration',
    'Visionboard für Ihre ideale Kongruenz',
    'Ausrichtungs-Check für Entscheidungen',
  ],
  R: [
    'Micro-Habits für tägliche Kongruenz-Praxis',
    'Wochenplan mit integrierten Kongruenz-Ritualen',
    'Fortschrittstracking mit visuellen Hilfsmitteln',
  ],
  E: [
    'Regelmäßiger Kongruenz-Check mit dem KLARE-System',
    'Journaling zu mühelosen Erfolgs-Momenten',
    'Mentoring und Weitergabe Ihrer Erkenntnisse',
  ],
};

// Unterstützende Fragen für jeden KLARE-Schritt
const supportingQuestions: Record<string, string[]> = {
  K: [
    'Wo stehe ich wirklich in den wichtigsten Lebensbereichen?',
    'Welche Diskrepanzen zwischen meinem Denken, Fühlen und Handeln erlebe ich?',
    'Was vermeide ich anzuschauen und warum?',
  ],
  L: [
    'Wann fühle ich mich am lebendigsten und energiegeladensten?',
    'Welche natürlichen Ressourcen und Stärken besitze ich?',
    'Was blockiert meinen freien Energiefluss im Alltag?',
  ],
  A: [
    'Wie kann ich meine Werte in allen Lebensbereichen konsistent umsetzen?',
    'Welche Vision von Kongruenz entspricht meinem wahren Selbst?',
    'Wo erlebe ich noch Widersprüche zwischen verschiedenen Lebensbereichen?',
  ],
  R: [
    'Welche konkreten Schritte kann ich täglich für mehr Kongruenz umsetzen?',
    'Wie integriere ich neue kongruente Verhaltensweisen nachhaltig?',
    'Was hilft mir, bei Herausforderungen kongruent zu bleiben?',
  ],
  E: [
    'Wie manifestiert sich meine Kongruenz in allen Lebensbereichen?',
    'In welchen Bereichen erlebe ich bereits mühelose Manifestation?',
    'Wie kann ich andere auf ihrem Weg zu mehr Kongruenz unterstützen?',
  ],
};

const KlareMethodExplorer: React.FC = () => {
  const { colorScheme } = useColorScheme();
  const [activeStep, setActiveStep] = useState<string>('K');
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    transformation: false,
    exercises: false,
    questions: false,
  });
  const [autoRotate, setAutoRotate] = useState(true);

  // Auto-rotate through steps
  useEffect(() => {
    if (!autoRotate) return;

    const stepKeys = kongruenzSteps.map(step => step.letter);
    const interval = setInterval(() => {
      setActiveStep(currentStep => {
        const currentIndex = stepKeys.indexOf(currentStep);
        const nextIndex = (currentIndex + 1) % stepKeys.length;
        return stepKeys[nextIndex];
      });
    }, 10000);

    return () => clearInterval(interval);
  }, [autoRotate]);

  // Stop auto-rotation when user interacts with the component
  const handleStepClick = (letter: string) => {
    setAutoRotate(false);
    setActiveStep(letter);
  };

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  // Find active step data
  const activeStepData = kongruenzSteps.find(step => step.letter === activeStep);

  if (!activeStepData) return null;

  return (
    <div className="w-full max-w-6xl mx-auto p-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: colorScheme.primary }}>
          Die KLARE Kongruenz-Methode
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
          Entdecken Sie den 5-Schritte-Prozess zur Erreichung vollständiger Kongruenz in allen
          Lebensbereichen.
        </p>
      </div>

      {/* Method Steps Navigation */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {kongruenzSteps.map(step => {
          const isActive = step.letter === activeStep;
          const StepIcon = step.icon;

          return (
            <button
              key={step.letter}
              className={`relative flex flex-col items-center transition-all duration-300 p-2 rounded-lg ${
                isActive ? 'transform scale-105' : 'opacity-70 hover:opacity-100'
              }`}
              onClick={() => handleStepClick(step.letter)}
              style={{
                backgroundColor: isActive ? `${step.color}15` : 'transparent',
                color: step.color,
                boxShadow: isActive ? `0 4px 12px 0 ${step.color}30` : 'none',
              }}
            >
              <div
                className="w-16 h-16 flex items-center justify-center rounded-full mb-2"
                style={{
                  backgroundColor: isActive ? `${step.color}25` : `${step.color}15`,
                  transition: 'all 0.3s ease',
                }}
              >
                <StepIcon size={isActive ? 30 : 24} />
              </div>

              <span className="font-bold text-xl">{step.letter}</span>

              <span className="text-xs mt-1">{step.name}</span>

              {isActive && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute -bottom-4 w-12 h-1 rounded-full"
                  style={{ backgroundColor: step.color }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </button>
          );
        })}
      </div>

      {/* Active Step Content */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden mb-12">
        <div
          className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700"
          style={{ backgroundColor: `${activeStepData.color}10` }}
        >
          <div className="flex items-center">
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center mr-4"
              style={{ backgroundColor: `${activeStepData.color}25` }}
            >
              <activeStepData.icon size={24} style={{ color: activeStepData.color }} />
            </div>

            <div>
              <h3 className="text-2xl font-bold" style={{ color: activeStepData.color }}>
                {activeStepData.letter}: {activeStepData.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">{activeStepData.description}</p>
            </div>
          </div>

          <button
            className="px-3 py-1 text-sm rounded-md"
            style={{
              backgroundColor: `${activeStepData.color}15`,
              color: activeStepData.color,
            }}
            onClick={() => setAutoRotate(!autoRotate)}
          >
            {autoRotate ? 'Auto-Rotation Stoppen' : 'Auto-Rotation Starten'}
          </button>
        </div>

        <div className="p-6">
          {/* Main Content */}
          <div className="mb-8">
            <h4 className="text-xl font-semibold mb-4" style={{ color: activeStepData.color }}>
              Was bedeutet {activeStepData.name}?
            </h4>

            <div className="space-y-4">
              {activeStep === 'K' && (
                <p>
                  Klarheit ist der erste essenzielle Schritt in der KLARE Methode. Hier geht es
                  darum, eine ehrliche Standortbestimmung vorzunehmen und sich der aktuellen
                  Situation bewusst zu werden. Ohne Klarheit über den Ist-Zustand ist keine
                  zielgerichtete Veränderung möglich.
                </p>
              )}

              {activeStep === 'L' && (
                <p>
                  Lebendigkeit beschäftigt sich mit der Wiederentdeckung und Aktivierung Ihrer
                  natürlichen Ressourcen und Energien. Dieser Schritt identifiziert Blockaden und
                  befreit den natürlichen Energiefluss, der für authentische Kongruenz unerlässlich
                  ist.
                </p>
              )}

              {activeStep === 'A' && (
                <p>
                  Ausrichtung fokussiert auf die Integration aller Lebensbereiche und die Schaffung
                  einer kohärenten Vision. Hier werden Werte, Ziele und Handlungen in Einklang
                  gebracht, um eine durchgängige Kongruenz zu ermöglichen.
                </p>
              )}

              {activeStep === 'R' && (
                <p>
                  Realisierung überführt die Erkenntnis in konkretes Handeln im Alltag. Dieser
                  praktische Schritt etabliert neue Gewohnheiten und Strukturen, die Ihre Kongruenz
                  nachhaltig im täglichen Leben verankern.
                </p>
              )}

              {activeStep === 'E' && (
                <p>
                  Entfaltung ist das Ergebnis vollständiger Kongruenz in allen Lebensbereichen. Hier
                  erleben Sie mühelose Manifestation Ihrer Ziele, anhaltende Erfüllung und
                  kontinuierliches Wachstum auf natürliche Weise.
                </p>
              )}
            </div>
          </div>

          {/* Transformation Points */}
          <div className="mb-6">
            <button
              className="w-full flex items-center justify-between p-4 rounded-lg mb-2 focus:outline-none"
              style={{ backgroundColor: `${activeStepData.color}10` }}
              onClick={() => toggleSection('transformation')}
            >
              <h4 className="text-lg font-medium" style={{ color: activeStepData.color }}>
                Transformationswege
              </h4>

              <ChevronDown
                size={20}
                className={`transition-transform duration-300 ${expandedSections.transformation ? 'rotate-180' : ''}`}
                style={{ color: activeStepData.color }}
              />
            </button>

            <AnimatePresence>
              {expandedSections.transformation && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden rounded-lg"
                >
                  <div className="p-4 space-y-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                    {transformationPoints[activeStep].map((point, index) => (
                      <div
                        key={index}
                        className="flex items-start border-l-2 pl-4 py-2"
                        style={{ borderColor: activeStepData.color }}
                      >
                        <div className="flex-1">
                          <div className="flex items-center mb-2">
                            <div
                              className="text-sm px-2 py-1 rounded"
                              style={{
                                backgroundColor: `${activeStepData.color}15`,
                                color: activeStepData.color,
                              }}
                            >
                              Von
                            </div>
                            <div className="flex-1 ml-2 text-gray-700 dark:text-gray-300 font-medium">
                              {point.from}
                            </div>
                          </div>

                          <ArrowRight
                            size={20}
                            className="ml-6 my-1"
                            style={{ color: activeStepData.color }}
                          />

                          <div className="flex items-center mt-1">
                            <div
                              className="text-sm px-2 py-1 rounded"
                              style={{
                                backgroundColor: `${activeStepData.color}15`,
                                color: activeStepData.color,
                              }}
                            >
                              Zu
                            </div>
                            <div className="flex-1 ml-2 text-gray-700 dark:text-gray-300 font-bold">
                              {point.to}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Practical Exercises */}
          <div className="mb-6">
            <button
              className="w-full flex items-center justify-between p-4 rounded-lg mb-2 focus:outline-none"
              style={{ backgroundColor: `${activeStepData.color}10` }}
              onClick={() => toggleSection('exercises')}
            >
              <h4 className="text-lg font-medium" style={{ color: activeStepData.color }}>
                Praktische Übungen
              </h4>

              <ChevronDown
                size={20}
                className={`transition-transform duration-300 ${expandedSections.exercises ? 'rotate-180' : ''}`}
                style={{ color: activeStepData.color }}
              />
            </button>

            <AnimatePresence>
              {expandedSections.exercises && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden rounded-lg"
                >
                  <div className="p-4 space-y-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                    <ul className="space-y-3">
                      {practicalExercises[activeStep].map((exercise, index) => (
                        <li key={index} className="flex items-center">
                          <div
                            className="w-6 h-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0"
                            style={{
                              backgroundColor: `${activeStepData.color}25`,
                              color: activeStepData.color,
                            }}
                          >
                            {index + 1}
                          </div>
                          <span>{exercise}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Supporting Questions */}
          <div className="mb-6">
            <button
              className="w-full flex items-center justify-between p-4 rounded-lg mb-2 focus:outline-none"
              style={{ backgroundColor: `${activeStepData.color}10` }}
              onClick={() => toggleSection('questions')}
            >
              <h4 className="text-lg font-medium" style={{ color: activeStepData.color }}>
                Unterstützende Fragen
              </h4>

              <ChevronDown
                size={20}
                className={`transition-transform duration-300 ${expandedSections.questions ? 'rotate-180' : ''}`}
                style={{ color: activeStepData.color }}
              />
            </button>

            <AnimatePresence>
              {expandedSections.questions && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden rounded-lg"
                >
                  <div className="p-4 space-y-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                    <ul className="space-y-4">
                      {supportingQuestions[activeStep].map((question, index) => (
                        <li
                          key={index}
                          className="p-3 rounded-lg"
                          style={{ backgroundColor: `${activeStepData.color}10` }}
                        >
                          <div className="flex items-start">
                            <div
                              className="w-6 h-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-0.5"
                              style={{
                                backgroundColor: 'white',
                                color: activeStepData.color,
                                border: `1px solid ${activeStepData.color}`,
                              }}
                            >
                              ?
                            </div>
                            <span className="italic">{question}</span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <div
          className="p-6 border-t border-gray-200 dark:border-gray-700"
          style={{ backgroundColor: `${activeStepData.color}05` }}
        >
          <div className="flex items-center justify-between">
            <div>
              <span className="text-sm text-gray-600 dark:text-gray-400">
                Schritt {kongruenzSteps.findIndex(step => step.letter === activeStep) + 1} von{' '}
                {kongruenzSteps.length}
              </span>
            </div>

            <div className="flex space-x-2">
              <button
                className="px-4 py-2 rounded-lg text-sm font-medium flex items-center"
                style={{
                  backgroundColor: `${activeStepData.color}15`,
                  color: activeStepData.color,
                }}
                onClick={() => {
                  // In der vollständigen Implementierung würde dies zu einer detaillierten Seite führen
                  alert('Diese Funktion wird mit dem vollständigen Launch verfügbar sein!');
                }}
              >
                Mehr zu {activeStepData.name} <ExternalLink size={16} className="ml-1" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Call-to-Action */}
      <div className="text-center">
        <p className="mb-6 text-gray-700 dark:text-gray-300">
          Möchten Sie mehr über die KLARE Kongruenz-Methode erfahren und sie in Ihrem Leben
          anwenden?
        </p>

        <button
          className="px-6 py-3 rounded-lg font-medium transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-opacity-50 text-white"
          style={{
            backgroundColor: colorScheme.primary,
            boxShadow: `0 4px 14px 0 ${colorScheme.primary}40`,
          }}
          onClick={() => {
            // In der vollständigen Implementierung würde dies zur Anmeldung führen
            alert('Diese Funktion wird mit dem vollständigen Launch verfügbar sein!');
          }}
        >
          Zum Newsletter anmelden
        </button>
      </div>
    </div>
  );
};

export default KlareMethodExplorer;
