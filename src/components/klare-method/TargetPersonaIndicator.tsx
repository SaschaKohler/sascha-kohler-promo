import React, { useState, useEffect } from "react";
import { Target } from "lucide-react";
import { ColorScheme } from "@/utils/colorSchemes";

interface TargetPersonaIndicatorProps {
  colorScheme: ColorScheme;
  isFooterVisible?: boolean;
}

const TargetPersonaIndicator: React.FC<TargetPersonaIndicatorProps> = ({
  colorScheme,
  isFooterVisible = false,
}) => {
  // Array von Zielgruppen-Texten
  const targetTexts = [
    "Wenn Du authentischen Erfolg statt bloßer Optimierung suchst",
    "Wenn Du nach einem ganzheitlichen Weg zur Integration Deiner verschiedenen Lebensbereiche suchst",
    "Wenn Du Erfolg mit persönlicher Erfüllung in Einklang bringen willst",
    "Wenn Du dich in einer beruflichen oder persönlichen Übergangsphase befindest",
    "Du bist Berater oder Coach und bevorzugst eine humanistische Methode anstatt technischer Optimierungsansätze",
    "Du willst Deine inneren Widersprüche auflösen und ein authentisches, kongruentes Leben führen",
  ];

  const [activeTextIndex, setActiveTextIndex] = useState(0);

  // Auto-rotate target texts
  useEffect(() => {
    const textInterval = setInterval(() => {
      setActiveTextIndex((prevIndex) => (prevIndex + 1) % targetTexts.length);
    }, 8000);

    return () => {
      clearInterval(textInterval);
    };
  }, [targetTexts.length]);

  // Stile für das Ausblenden, wenn der Footer sichtbar ist
  const visibilityStyle = {
    opacity: isFooterVisible ? 0 : 1,
    visibility: isFooterVisible
      ? "hidden"
      : ("visible" as "hidden" | "visible"),
    transition: "opacity 0.5s ease, visibility 0.5s ease",
  };

  return (
    <div
      className="fixed bottom-8 right-8 hidden md:block"
      style={visibilityStyle}
    >
      <div className="bg-white rounded-lg shadow-md p-3 flex items-center max-w-xs transform transition-all duration-300 hover:scale-105">
        <div
          className="w-12 h-12 rounded-full flex items-center justify-center mr-3"
          style={{
            background: `linear-gradient(135deg, ${colorScheme.primary}, ${colorScheme.accent})`,
          }}
        >
          <Target size={24} className="text-white" />
        </div>
        <div>
          <p className="text-xs text-gray-500">Ideal für</p>
          <p
            className="text-sm font-medium"
            style={{ color: colorScheme.primary }}
          >
            {targetTexts[activeTextIndex]}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TargetPersonaIndicator;
