import React from "react";
import { ArrowRight, Check, X } from "lucide-react";
import { ColorScheme } from "./ColorSchemeSelector";

interface TransformationPathwayProps {
  colorScheme: ColorScheme;
}

const TransformationPathway: React.FC<TransformationPathwayProps> = ({
  colorScheme,
}) => {
  // Definition der "Weg von" und "Hin zu" Elemente
  const transformationPoints = [
    {
      from: "Innere Widersprüche zwischen Denken, Fühlen und Handeln",
      to: "Vollständige Kongruenz und Ausrichtung aller Lebensbereiche",
    },
    {
      from: "Erschöpfende Selbstsabotage und innere Konflikte",
      to: "Natürliche Leichtigkeit und mühelose Manifestation",
    },
    {
      from: "Orientierung an externen Systemen und Normen",
      to: "Authentische Entfaltung des eigenen vollen Potentials",
    },
    {
      from: "Fragmentierte Ziele ohne nachhaltigen Erfolg",
      to: "Ganzheitliche Integration aller Lebensbereiche",
    },
    {
      from: "Behandlung des Menschen als System oder Ressource",
      to: "Respekt für die Einzigartigkeit jedes Individuums",
    },
  ];

  return (
    <section
      className="py-16"
      style={{
        background: `linear-gradient(135deg, ${colorScheme.background}30, white)`,
      }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ color: colorScheme.text }}
          >
            Die{" "}
            <span style={{ color: colorScheme.primary }}>Transformation</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Der Kongruenz-Weg führt dich von inneren Widersprüchen zu einer
            umfassenden Ausrichtung, bei der alle Aspekte deines Lebens
            harmonisch auf deine Ziele eingestimmt sind.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
          {transformationPoints.map((point, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-start md:items-center gap-4 ${index !== transformationPoints.length - 1 ? "mb-10 pb-10 border-b border-gray-100" : ""}`}
            >
              {/* "Weg von" Box */}
              <div
                className="flex-1 bg-gray-50 p-4 rounded-lg border-l-4 md:min-h-28 flex items-center"
                style={{ borderColor: "#ef4444" }}
              >
                <div className="flex items-start">
                  <div className="mr-3 mt-1 flex-shrink-0">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center bg-red-100">
                      <X size={14} className="text-red-500" />
                    </div>
                  </div>
                  <p className="text-gray-700">{point.from}</p>
                </div>
              </div>

              {/* Arrow */}
              <div className="hidden md:flex items-center justify-center mx-2">
                <ArrowRight
                  size={28}
                  className="transform rotate-0 md:rotate-0"
                  style={{ color: colorScheme.primary }}
                />
              </div>

              {/* Mobile Arrow */}
              <div className="flex md:hidden items-center justify-center my-2">
                <ArrowRight
                  size={28}
                  className="transform rotate-90"
                  style={{ color: colorScheme.primary }}
                />
              </div>

              {/* "Hin zu" Box */}
              <div
                className="flex-1 bg-gray-50 p-4 rounded-lg border-l-4 md:min-h-28 flex items-center"
                style={{ borderColor: colorScheme.primary }}
              >
                <div className="flex items-start">
                  <div className="mr-3 mt-1 flex-shrink-0">
                    <div
                      className="w-6 h-6 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: `${colorScheme.primary}20` }}
                    >
                      <Check size={14} style={{ color: colorScheme.primary }} />
                    </div>
                  </div>
                  <p className="text-gray-700">{point.to}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <button
            className="px-6 py-3 rounded-full text-white font-medium shadow-md hover:shadow-lg transition-all duration-300"
            style={{
              background: `linear-gradient(to right, ${colorScheme.primary}, ${colorScheme.accent})`,
            }}
          >
            Starte deinen Kongruenz-Weg
          </button>
          <p className="text-gray-500 text-sm mt-4 max-w-xl mx-auto">
            Die Kongruenz-Methode bietet einen klaren, strukturierten Weg, um
            vom Ist-Zustand innerer Konflikte zum Soll-Zustand vollständiger
            Kongruenz zu gelangen – ein Prozess, der speziell auf Menschen und
            nicht auf Organisationen zugeschnitten ist.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TransformationPathway;
