import React from "react";
import { AlertTriangle, User, Building2, X, Check } from "lucide-react";
import { ColorScheme } from "./ColorSchemeSelector";

interface KongruenzDifferenzierungProps {
  colorScheme: ColorScheme;
}

const KongruenzDifferenzierung: React.FC<KongruenzDifferenzierungProps> = ({
  colorScheme,
}) => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center mb-4">
            <AlertTriangle size={24} className="mr-2 text-amber-500" />
            <h2
              className="text-3xl md:text-4xl font-bold"
              style={{ color: colorScheme.text }}
            >
              Wichtige{" "}
              <span style={{ color: colorScheme.primary }}>
                Differenzierung
              </span>
            </h2>
          </div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Die Kongruenz-Methode ist ein speziell für <strong>Menschen</strong>{" "}
            entwickelter Ansatz, der sich bewusst von unternehmensorientierten
            Kongruenz-Modellen abgrenzt.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Unternehmensorientierte Kongruenz-Modelle */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-6 bg-gray-800 text-white flex items-center">
              <Building2 size={24} className="mr-3 text-gray-300" />
              <h3 className="text-xl font-semibold">
                Unternehmensorientierte Kongruenz-Modelle
              </h3>
            </div>
            <div className="p-6">
              <ul className="space-y-4">
                {[
                  "Behandeln Menschen als Ressourcen oder Systeme",
                  "Fokus auf Unternehmensziele und Gewinnoptimierung",
                  "Standardisierte Prozesse ohne individuelle Anpassung",
                  "Rationaler und mechanistischer Ansatz",
                  "Betrachtung von Menschen als Mittel zum Zweck",
                  "Ausrichtung an externen Normen und Standards",
                  "Primärer Fokus auf messbare Leistungsindikatoren",
                ].map((point, index) => (
                  <li key={index} className="flex items-start">
                    <div className="mt-1 mr-3">
                      <X size={16} className="text-red-500" />
                    </div>
                    <span className="text-gray-700">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Meine Kongruenz-Methode */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div
              className="p-6 text-white flex items-center"
              style={{ backgroundColor: colorScheme.primary }}
            >
              <User size={24} className="mr-3 text-white" />
              <h3 className="text-xl font-semibold">Meine Kongruenz-Methode</h3>
            </div>
            <div className="p-6">
              <ul className="space-y-4">
                {[
                  "Betrachtet den Menschen in seiner einzigartigen Ganzheit",
                  "Fokus auf persönliche Ziele und individuelle Erfüllung",
                  "Maßgeschneiderte Prozesse für individuelle Bedürfnisse",
                  "Ganzheitlicher Ansatz mit Einbezug von Emotionen und Intuition",
                  "Sieht jeden Menschen als Zweck an sich mit eigenem Potential",
                  "Orientierung an persönlichen Werten und authentischer Entfaltung",
                  "Primärer Fokus auf tiefgreifendes Wohlbefinden und Kongruenz",
                ].map((point, index) => (
                  <li key={index} className="flex items-start">
                    <div className="mt-1 mr-3">
                      <Check size={16} style={{ color: colorScheme.accent }} />
                    </div>
                    <span className="text-gray-700">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="max-w-3xl mx-auto mt-12 bg-white p-6 rounded-lg shadow-lg">
          <h3
            className="text-xl font-medium mb-4 text-center"
            style={{ color: colorScheme.primary }}
          >
            Warum diese Differenzierung wichtig ist
          </h3>
          <p className="text-gray-700 mb-4">
            Die Kongruenz-Methode entstand aus der Erkenntnis, dass etablierte
            Kongruenz-Modelle aus der Unternehmensführung nicht auf den Menschen
            in seiner Komplexität übertragbar sind. Menschen sind keine Systeme
            oder Ressourcen, die standardisiert optimiert werden können.
          </p>
          <p className="text-gray-700">
            Stattdessen braucht es einen Ansatz, der den Menschen in seiner
            vollen Menschlichkeit respektiert und eine authentische,
            individuelle Entfaltung ermöglicht. Die Kongruenz-Methode bietet
            genau das: einen Weg zur Kongruenz, der dich nicht als System,
            sondern als einzigartiges Individuum betrachtet.
          </p>
        </div>
      </div>
    </section>
  );
};

export default KongruenzDifferenzierung;
