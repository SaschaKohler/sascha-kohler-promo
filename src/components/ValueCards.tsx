import React, { useState } from "react";
import { ColorScheme } from "./ColorSchemeSelector.tsx.old";

interface ValueCardsProps {
  colorScheme: ColorScheme;
}

interface Card {
  id: number;
  text: string;
  color: string;
  isWide?: boolean;
}

const ValueCards: React.FC<ValueCardsProps> = ({ colorScheme }) => {
  const [isStacked, setIsStacked] = useState(true);

  const cards: Card[] = [
    { id: 1, text: "AGAPE", color: "#d32f2f" },
    { id: 2, text: "KARDIA", color: "#d32f2f" },
    { id: 3, text: "CREDO", color: "#2e7d32" },
    { id: 4, text: "INTUITIO", color: "#000000" },
    { id: 5, text: "EMOTIO", color: "#d32f2f" },
    { id: 6, text: "ACTIO", color: "#000000" },
    { id: 7, text: "RATIO", color: "#3f51b5" },
    { id: 8, text: "ANGST-TRAUM-WUT", color: "#d32f2f", isWide: true },
    { id: 9, text: "MUT-SICHERHEIT-FREUD", color: "#2e7d32", isWide: true },
  ];

  // Hilfsfunktion, um die Positionen im Layout zu bestimmen
  const getLayoutPosition = (id: number, isWide?: boolean): string => {
    switch (id) {
      case 1: // AGAPE
        return "translate(-50%, -250px)";
      case 2: // KARDIA
        return "translate(-50%, -180px)";
      case 3: // CREDO
        return "translate(-50%, -110px)";
      case 4: // INTUITIO
        return "translate(-50%, -40px)";
      case 5: // EMOTIO
        return "translate(-120px, 30px)";
      case 6: // ACTIO
        return "translate(-50%, 100px)";
      case 7: // RATIO
        return "translate(-50%, 170px)";
      case 8: // ANGST-TRAUM-WUT
        return "translate(-180px, 30px)";
      case 9: // MUT-SICHERHEIT-FREUD
        return "translate(80px, 30px)";
      default:
        return "translate(0, 0)";
    }
  };

  return (
    <div className="py-10">
      <div className="container mx-auto px-6">
        <h2
          className="text-4xl font-bold mb-8 text-center"
          style={{ color: colorScheme.text }}
        >
          ROK-Akademie <span style={{ color: colorScheme.primary }}>Werte</span>
        </h2>

        <div className="flex flex-col items-center">
          <div
            className="relative bg-gray-800 p-8 rounded-lg mb-8 shadow-xl transition-all duration-1000 ease-in-out cursor-pointer mx-auto"
            style={{
              width: isStacked ? "300px" : "700px",
              height: isStacked ? "400px" : "500px",
              perspective: "1000px",
            }}
            onClick={() => setIsStacked(!isStacked)}
            onMouseEnter={() => setIsStacked(false)}
            onMouseLeave={() => setIsStacked(true)}
          >
            {cards.map((card, index) => (
              <div
                key={card.id}
                className={`absolute bg-white rounded shadow-md flex items-center justify-center transition-all duration-1000 ease-in-out border-2 ${card.isWide ? "text-lg" : "text-xl"}`}
                style={{
                  borderColor: card.color,
                  color: card.color,
                  width: card.isWide ? "240px" : "150px",
                  height: card.isWide ? "70px" : "60px",
                  fontWeight: "bold",
                  transform: isStacked
                    ? `translateZ(${index * 2}px) translateY(${index * 3}px) rotate(${Math.random() * 2 - 1}deg)`
                    : getLayoutPosition(card.id, card.isWide),
                  opacity: isStacked ? 1 - index * 0.05 : 1,
                  zIndex: isStacked ? 10 - index : 10,
                }}
              >
                {card.text}
              </div>
            ))}
          </div>

          <p className="text-center text-gray-600 max-w-lg">
            {isStacked
              ? "Bewege die Maus über die Karten, um die Werte der ROK-Akademie zu entdecken."
              : "Diese Werte bilden das Fundament meiner Arbeit und meines Verständnisses von lebensbejahender Transformation."}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ValueCards;
