"use client";
import React, { useState } from "react";
import { useColorScheme } from "@/contexts/ColorSchemeContext";
import { colorSchemes } from "@/utils/colorSchemes";
import { Palette, ChevronUp, ChevronDown, Check } from "lucide-react";

interface ColorSchemeSelectorProps {
  isFooterVisible?: boolean;
}

const ContextAwareColorSchemeSelector: React.FC<ColorSchemeSelectorProps> = ({
  isFooterVisible = false,
}) => {
  const { colorScheme, setColorScheme } = useColorScheme();
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  
  // Stile für das Ausblenden, wenn der Footer sichtbar ist
  const visibilityStyle = {
    opacity: isFooterVisible ? 0 : 1,
    visibility: isFooterVisible
      ? "hidden"
      : ("visible" as "hidden" | "visible"),
    transition: "opacity 0.5s ease, visibility 0.5s ease",
  };

  const togglePanel = () => {
    setIsPanelOpen(!isPanelOpen);
  };

  return (
    <div className="fixed bottom-8 left-8 z-50" style={visibilityStyle}>
      {/* Color Selector Button mit verbesserter Erkennbarkeit */}
      <div 
        className="flex flex-col items-start mb-2"
        style={{
          backgroundColor: `${colorScheme.primary}15`,
          padding: "0.5rem",
          borderRadius: "0.5rem",
          backdropFilter: "blur(5px)",
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)"
        }}
      >
        <div className="flex items-center mb-1">
          <Palette 
            size={16} 
            className="mr-2" 
            style={{ color: colorScheme.primary }} 
          />
          <p 
            className="text-sm font-medium"
            style={{ color: colorScheme.text }}
          >
            Farbschema wählen
          </p>
        </div>
        <button
          className="p-2 rounded-lg shadow-lg text-white w-full flex items-center justify-between"
          style={{ 
            background: `linear-gradient(to right, ${colorScheme.primary}, ${colorScheme.accent})`,
          }}
          onClick={togglePanel}
          aria-expanded={isPanelOpen}
          aria-label="Farbschema-Auswahl öffnen"
        >
          <span className="flex items-center">
            <div
              className="w-4 h-4 rounded-full mr-2"
              style={{
                background: `linear-gradient(135deg, ${colorScheme.primary}, ${colorScheme.accent})`, 
                border: "1px solid white"
              }}
            ></div>
            <span className="text-xs font-medium">{colorScheme.name}</span>
          </span>
          {isPanelOpen ? 
            <ChevronUp size={16} /> : 
            <ChevronDown size={16} />
          }
        </button>
      </div>

      {/* Color Scheme Panel */}
      <div
        className={`bg-white p-4 rounded-lg shadow-xl transition-all duration-300 ${
          isPanelOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
        }`}
        style={{
          maxHeight: "60vh",
          overflowY: "auto",
          backgroundColor: colorScheme.name === "Elegantes Gold & Schwarz" ? "#272725" : "white",
          border: colorScheme.name === "Elegantes Gold & Schwarz" ? `1px solid ${colorScheme.primary}40` : "none",
          transformOrigin: "bottom left",
          maxWidth: "250px"
        }}
      >
        <h3
          className="text-md font-semibold mb-3 flex items-center"
          style={{ color: colorScheme.primary }}
        >
          <Palette size={18} className="mr-2" />
          Wähle dein Farbschema
        </h3>
        
        <div className="space-y-2">
          {colorSchemes.map((scheme) => (
            <button
              key={scheme.name}
              className="w-full text-left p-2 rounded-md transition-all duration-200 flex items-center hover:shadow-md"
              style={{
                backgroundColor: scheme.name === colorScheme.name ? `${scheme.accent}20` : "transparent",
                color: scheme.primary,
                transform: scheme.name === colorScheme.name ? "scale(1.02)" : "scale(1)"
              }}
              onClick={() => {
                setColorScheme(scheme);
                setIsPanelOpen(false);
              }}
              aria-label={`Farbschema ${scheme.name} auswählen`}
              aria-selected={scheme.name === colorScheme.name}
            >
              <div className="relative">
                <div
                  className="w-8 h-8 rounded-full mr-3 flex-shrink-0 border-2"
                  style={{
                    background: `linear-gradient(135deg, ${scheme.primary}, ${scheme.accent})`,
                    borderColor: scheme.name === colorScheme.name ? scheme.primary : "transparent"
                  }}
                ></div>
                {scheme.name === colorScheme.name && (
                  <div 
                    className="absolute -top-1 -right-1 w-5 h-5 bg-white rounded-full flex items-center justify-center shadow-sm"
                    style={{ color: scheme.primary }}
                  >
                    <Check size={12} />
                  </div>
                )}
              </div>
              <div className="flex flex-col">
                <span
                  className="font-medium"
                  style={{
                    color:
                      colorScheme.name === "Elegantes Gold & Schwarz" &&
                      scheme.name !== colorScheme.name
                        ? "#f0f0f0"
                        : scheme.primary,
                  }}
                >
                  {scheme.name}
                </span>
                <span className="text-xs opacity-80" style={{ color: scheme.text }}>
                  Klicken zum Anwenden
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContextAwareColorSchemeSelector;
