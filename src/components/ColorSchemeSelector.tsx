import React from "react";

// Definiere den Typ für das Farbschema
export interface ColorScheme {
  name: string;
  primary: string;
  accent: string;
  complement: string;
  text: string;
  background: string;
}

// Alle verfügbaren Farbpaletten
export const colorSchemes: ColorScheme[] = [
  {
    name: "Natürliche Harmonie",
    primary: "#2E7D32", // Waldgrün
    accent: "#81C784", // Helles Grün
    complement: "#FFB74D", // Warmes Orange
    text: "#263238", // Dunkelgrau
    background: "#F5F9F6", // Leichtes Minzgrün
  },
  {
    name: "Wachstum & Transformation",
    primary: "#00796B", // Smaragdgrün
    accent: "#4DB6AC", // Türkis
    complement: "#FF8A65", // Koralle
    text: "#37474F", // Dunkelgrau
    background: "#FAFAFA", // Offwhite
  },
  {
    name: "Lebendige Klarheit",
    primary: "#1565C0", // Tiefblau
    accent: "#64B5F6", // Hellblau
    complement: "#FFA726", // Sonniges Orange
    text: "#212121", // Fast-Schwarz
    background: "#F5F9FF", // Leichtes Hellblau
  },
  {
    name: "Erdverbundenheit & Inspiration",
    primary: "#5D4037", // Erdbraun
    accent: "#8D6E63", // Warmes Braun
    complement: "#81C784", // Frisches Grün
    text: "#263238", // Dunkelgrau
    background: "#F9F5F0", // Cremeweiß
  },
  {
    name: "Tiefe & Leichtigkeit",
    primary: "#5C6BC0", // Satter Indigo
    accent: "#9FA8DA", // Lavendel
    complement: "#FFD54F", // Goldgelb
    text: "#212121", // Fast-Schwarz
    background: "#F8F9FF", // Leichtes Blau
  },
  {
    name: "Vertrauen & Wachstum",
    primary: "#00695C", // Tiefes Türkis
    accent: "#4DB6AC", // Helles Türkis
    complement: "#FF7043", // Helles Orange
    text: "#263238", // Dunkelgrau
    background: "#F7FDFB", // Minzweiß
  },
];

interface ColorSchemeSelectorProps {
  activeScheme: ColorScheme;
  onChange: (scheme: ColorScheme) => void;
}

const ColorSchemeSelector: React.FC<ColorSchemeSelectorProps> = ({
  activeScheme,
  onChange,
}) => {
  return (
    <div className="fixed bottom-8 left-8 z-50">
      <button
        className="p-2 rounded-full shadow-lg text-white mb-2"
        style={{ backgroundColor: activeScheme.primary }}
        onClick={() => {
          const themePanel = document.getElementById("theme-panel");
          if (themePanel) {
            themePanel.classList.toggle("hidden");
          }
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M12 2a4.5 4.5 0 0 0 0 9 4.5 4.5 0 0 1 0 9 10 10 0 0 0 0-18z"></path>
        </svg>
      </button>

      <div
        id="theme-panel"
        className="hidden bg-white p-4 rounded-lg shadow-xl"
      >
        <h3
          className="text-lg font-medium mb-3"
          style={{ color: activeScheme.primary }}
        >
          Farbschema wählen
        </h3>
        <div className="space-y-2">
          {colorSchemes.map((scheme) => (
            <button
              key={scheme.name}
              className="w-full text-left p-2 rounded transition-colors flex items-center"
              style={{
                backgroundColor:
                  scheme.name === activeScheme.name
                    ? `${scheme.accent}20`
                    : "transparent",
                color: scheme.primary,
              }}
              onClick={() => onChange(scheme)}
            >
              <div
                className="w-6 h-6 rounded-full mr-2 flex-shrink-0"
                style={{
                  background: `linear-gradient(135deg, ${scheme.primary}, ${scheme.accent})`,
                }}
              ></div>
              <span>{scheme.name}</span>
              {scheme.name === activeScheme.name && (
                <svg
                  className="ml-auto"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ColorSchemeSelector;
