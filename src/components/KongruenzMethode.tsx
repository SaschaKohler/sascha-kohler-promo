"use client";
import React, { useState } from "react";
import { ChevronRight, Check, ExternalLink } from "lucide-react";

// Types for the ColorScheme
interface ColorScheme {
  primary: string;
  accent: string;
  background: string;
  text: string;
}

// Interface for the KLARE step type
interface KlareStep {
  id: number;
  letter: string;
  title: string;
  fullTitle: string;
  description: string;
  icon: React.ReactNode;
  details: string[];
  color: string;
}

interface KongruenzMethodeProps {
  colorScheme: ColorScheme;
}

const KongruenzMethode: React.FC<KongruenzMethodeProps> = ({ colorScheme }) => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [isDetailOpen, setIsDetailOpen] = useState<boolean>(false);

  // Define the 5 steps of the KLARE method
  const klareSteps: KlareStep[] = [
    {
      id: 1,
      letter: "K",
      title: "Konfrontation",
      fullTitle: "Konfrontation mit der aktuellen Situation",
      description:
        "Erkenne deine großen Ziele und konfrontiere dich ehrlich mit deiner aktuellen Situation.",
      icon: "🔍",
      details: [
        "Identifizierung deiner wichtigsten Lebensziele",
        "Ehrliche Bestandsaufnahme der aktuellen Lebensrealität",
        "Erkennen von Mustern und wiederkehrenden Themen",
        "Bewusstwerdung über den IST-Zustand in allen Lebensbereichen",
      ],
      color: "#6366F1", // Indigo
    },
    {
      id: 2,
      letter: "L",
      title: "Lücken",
      fullTitle: "Lücken und Inkongruenzen erkennen",
      description:
        "Untersuche, in welchen Lebensbereichen Inkongruenzen zu deinen Zielen bestehen.",
      icon: "🤔",
      details: [
        "Tiefgehende Analyse der verschiedenen Lebensbereiche",
        "Identifikation von Widersprüchen zwischen Denken, Fühlen und Handeln",
        "Erkennen von emotionalen und mentalen Blockaden",
        "Bewusstwerdung über Selbstsabotage-Mechanismen",
      ],
      color: "#8B5CF6", // Violet
    },
    {
      id: 3,
      letter: "A",
      title: "Ausrichtung",
      fullTitle: "Ausrichtung der Lebensbereiche",
      description:
        "Entwickle Strategien, um alle Lebensbereiche in Richtung deiner Ziele auszurichten.",
      icon: "🧭",
      details: [
        "Entwicklung individueller Kongruenz-Strategien",
        "Methoden zur bewussten Ausrichtung des Denkens",
        "Techniken zur emotionalen Harmonisierung",
        "Praktische Handlungsanleitungen für kongruentes Verhalten",
      ],
      color: "#EC4899", // Pink
    },
    {
      id: 4,
      letter: "R",
      title: "Realisierung",
      fullTitle: "Realisierung im Alltag",
      description:
        "Setze die entwickelten Strategien in deinem Alltag um und integriere sie in dein Leben.",
      icon: "🔄",
      details: [
        "Implementierung der Kongruenz-Strategien im Alltag",
        "Aufbau nachhaltiger Gewohnheiten für langfristige Veränderung",
        "Überwindung von Widerständen und Rückfällen",
        "Etablierung von unterstützenden Strukturen und Routinen",
      ],
      color: "#F59E0B", // Amber
    },
    {
      id: 5,
      letter: "E",
      title: "Entfaltung",
      fullTitle: "Entfaltung durch vollständige Kongruenz",
      description:
        "Erlebe, wie durch kongruentes Leben deine Ziele mit natürlicher Leichtigkeit Wirklichkeit werden.",
      icon: "✨",
      details: [
        "Erleben von Flow und Leichtigkeit durch Kongruenz",
        "Natürliche Manifestation der angestrebten Ziele",
        "Innerer Frieden durch Übereinstimmung von Denken, Fühlen und Handeln",
        "Nachhaltige Transformation und persönliches Wachstum",
      ],
      color: "#10B981", // Emerald
    },
  ];

  // Handle clicking on a step
  const handleStepClick = (stepId: number) => {
    setActiveStep(stepId - 1);
    setIsDetailOpen(true);
  };

  // Close the detail view
  const closeDetail = () => {
    setIsDetailOpen(false);
  };

  return (
    <section
      className="py-16"
      style={{
        background: `linear-gradient(to bottom, ${colorScheme.background}30, white)`,
      }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ color: colorScheme.text }}
          >
            Die{" "}
            <span style={{ color: colorScheme.primary }}>
              Kongruenz-Methode
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-4">
            Die KLARE Kongruenz-Methode: In 5 Schritten zur vollständigen
            Übereinstimmung in allen Lebensbereichen und zur natürlichen
            Manifestation deiner Ziele.
          </p>
          <p
            className="text-md text-gray-600 max-w-2xl mx-auto italic border-l-4 pl-4 py-2"
            style={{ borderColor: colorScheme.accent }}
          >
            Die Kongruenz-Methode ist ein ganzheitlicher Ansatz für die
            persönliche Transformation, der den Menschen in seiner
            Einzigartigkeit und Vielschichtigkeit betrachtet – bewusst
            abgegrenzt von unternehmensorientierten Kongruenz-Modellen, die
            Menschen als Ressourcen oder Systeme behandeln.
          </p>
        </div>

        {/* The KLARE steps display */}
        <div className="mb-12">
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto">
            <h3
              className="text-xl md:text-2xl font-bold mb-6 text-center"
              style={{ color: colorScheme.primary }}
            >
              Die KLARE Methode
            </h3>

            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {klareSteps.map((step) => (
                <div
                  key={step.id}
                  className={`flex flex-col items-center cursor-pointer transition-all duration-300 transform ${activeStep === step.id - 1 ? "scale-110" : "hover:scale-105"}`}
                  onClick={() => handleStepClick(step.id)}
                >
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center text-white mb-2 shadow-md hover:shadow-lg"
                    style={{
                      backgroundColor: step.color,
                      opacity: activeStep === step.id - 1 ? 1 : 0.8,
                    }}
                  >
                    <div className="flex flex-col items-center">
                      <span className="text-2xl font-bold">{step.letter}</span>
                      <span className="text-xs">{step.icon}</span>
                    </div>
                  </div>
                  <span
                    className="text-sm font-semibold text-center"
                    style={{
                      color: activeStep === step.id - 1 ? step.color : "#666",
                    }}
                  >
                    {step.title}
                  </span>
                </div>
              ))}
            </div>

            {/* KLARE acronym meaning */}
            <div className="flex flex-wrap justify-center gap-x-3 gap-y-2 mb-6">
              {klareSteps.map((step) => (
                <div key={step.id} className="flex items-center">
                  <span
                    className="font-bold text-lg mr-1"
                    style={{ color: step.color }}
                  >
                    {step.letter}
                  </span>
                  <span className="text-gray-700">{step.title}</span>
                  {step.id < klareSteps.length && (
                    <span className="text-gray-400 ml-1 mr-0 hidden sm:inline">
                      •
                    </span>
                  )}
                </div>
              ))}
            </div>

            {/* Current step details */}
            <div
              className="bg-gray-50 rounded-lg p-6 border-l-4 relative"
              style={{ borderColor: klareSteps[activeStep].color }}
            >
              <h4
                className="text-lg font-semibold mb-2 flex items-center"
                style={{ color: klareSteps[activeStep].color }}
              >
                <span className="w-8 h-8 rounded-full bg-white text-center flex items-center justify-center mr-3 shadow-sm">
                  {klareSteps[activeStep].letter}
                </span>
                {klareSteps[activeStep].fullTitle}
              </h4>

              <p className="text-gray-700 mb-4">
                {klareSteps[activeStep].description}
              </p>

              <div className="space-y-2">
                {klareSteps[activeStep].details.map((detail, index) => (
                  <div key={index} className="flex items-start">
                    <div className="mt-1 mr-2 flex-shrink-0">
                      <Check size={16} className="text-gray-400" />
                    </div>
                    <span className="text-gray-600">{detail}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Journey Path with circles and text below */}
        <div className="w-full max-w-4xl mx-auto flex justify-between items-center relative mb-16 py-4">
          {/* Path line - gradient with step colors */}
          <div
            className="absolute top-1/2 left-0 w-full h-1 -translate-y-1/2 transition-all duration-300"
            style={{
              background: `linear-gradient(to right, ${klareSteps.map((step) => step.color).join(", ")})`,
            }}
          />

          {/* Step circles with text below */}
          <div className="relative z-10 flex justify-between w-full">
            {klareSteps.map((step) => (
              <div
                key={step.id}
                className={`relative flex flex-col items-center cursor-pointer transform transition-all duration-300 ${activeStep === step.id - 1 ? "scale-110" : "hover:scale-105"}`}
                onClick={() => handleStepClick(step.id)}
              >
                <div
                  className="w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center text-white text-xl font-medium mb-2 shadow-md hover:shadow-lg transition-shadow"
                  style={{
                    backgroundColor: step.color,
                    opacity: activeStep === step.id - 1 ? 1 : 0.7,
                  }}
                >
                  <div className="flex flex-col items-center">
                    <span className="text-xl font-bold">{step.letter}</span>
                    <span className="text-lg">{step.icon}</span>
                  </div>
                </div>
                <span
                  className={`text-xs md:text-sm font-medium text-center transition-all duration-300 ${activeStep === step.id - 1 ? "font-semibold" : ""}`}
                  style={{
                    color: activeStep === step.id - 1 ? step.color : "#666",
                  }}
                >
                  {step.title}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Möchtest du herausfinden, wie die KLARE Kongruenz-Methode dir helfen
            kann, deinen eigenen Weg zur persönlichen Transformation zu gehen?
          </p>
          <button
            className="px-6 py-3 rounded-full text-white font-semibold transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
            style={{
              background: `linear-gradient(to right, ${colorScheme.primary}, ${colorScheme.accent})`,
            }}
          >
            Vereinbare ein kostenloses Erstgespräch
          </button>
        </div>
      </div>
    </section>
  );
};

export default KongruenzMethode;
