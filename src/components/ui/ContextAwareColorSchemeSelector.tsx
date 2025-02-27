"use client";
import React from "react";
import { useColorScheme } from "@/contexts/ColorSchemeContext";
import { colorSchemes } from "@/utils/colorSchemes";

// Diese Komponente ist ein eigenständiger ColorSchemeSelector, der mit dem Context arbeitet
const ContextAwareColorSchemeSelector: React.FC = () => {
  const { colorScheme, setColorScheme } = useColorScheme();

  return (
    <div className="fixed bottom-8 left-8 z-50">
      <button
        className="p-2 rounded-full shadow-lg text-white mb-2"
        style={{ backgroundColor: colorScheme.primary }}
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
        style={{ 
          maxHeight: "80vh", 
          overflowY: "auto",
          backgroundColor: colorScheme.name === "Elegantes Gold & Schwarz" ? "#272725" : "white",
          border: colorScheme.name === "Elegantes Gold & Schwarz" ? `1px solid ${colorScheme.primary}40` : "none"
        }}
      >
        <h3
          className="text-lg font-medium mb-3"
          style={{ color: colorScheme.primary }}
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
                  scheme.name === colorScheme.name
                    ? `${scheme.accent}20`
                    : "transparent",
                color: scheme.primary,
              }}
              onClick={() => setColorScheme(scheme)}
            >
              <div
                className="w-6 h-6 rounded-full mr-2 flex-shrink-0"
                style={{
                  background: `linear-gradient(135deg, ${scheme.primary}, ${scheme.accent})`,
                }}
              ></div>
              <span style={{
                color: colorScheme.name === "Elegantes Gold & Schwarz" && scheme.name !== colorScheme.name 
                  ? "#f0f0f0" 
                  : scheme.primary
              }}>
                {scheme.name}
              </span>
              {scheme.name === colorScheme.name && (
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

export default ContextAwareColorSchemeSelector;
