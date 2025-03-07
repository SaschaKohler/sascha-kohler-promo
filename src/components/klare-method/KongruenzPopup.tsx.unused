import React, { useState, useEffect } from 'react';
import { X, Info } from 'lucide-react';
import { ColorScheme } from '@/utils/colorSchemes';

interface KongruenzPopupProps {
  colorScheme: ColorScheme;
}

const KongruenzPopup: React.FC<KongruenzPopupProps> = ({ colorScheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const openPopup = () => {
    setIsOpen(true);
    setTimeout(() => {
      setIsAnimating(true);
    }, 10); // Kurze Verzögerung für bessere Animation
  };

  const closePopup = () => {
    setIsAnimating(false);
    setTimeout(() => {
      setIsOpen(false);
    }, 400); // Längere Verzögerung für deutlichere Ausblendanimation
  };

  // Verhindern des Scrollens des Hintergrunds, wenn das Modal geöffnet ist
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  // Handler für Escape-Taste zum Schließen
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        closePopup();
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen]);

  return (
    <>
      {/* Info Button zum Öffnen des Popups */}
      <button
        onClick={openPopup}
        className="inline-flex items-center justify-center font-medium ml-2 bg-gray-100 hover:bg-gray-200 rounded-full w-6 h-6 transition-all duration-300 transform hover:scale-110 hover:shadow-md"
        aria-label="Was bedeutet Kongruenz?"
        style={{ color: colorScheme.primary }}
      >
        <Info size={16} />
      </button>

      {/* Overlay & Popup */}
      {isOpen && (
        <>
          {/* Backdrop mit verstärkter Animation */}
          <div
            className={`fixed inset-0 z-40 backdrop-blur-sm transition-all duration-400 ease-in-out ${
              isAnimating ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.65)' }}
            onClick={closePopup}
          />

          {/* Popup mit verstärkter Animation */}
          <div
            className={`fixed top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg z-50 max-w-md w-11/12 transition-all duration-400 ease-in-out ${
              isAnimating
                ? 'opacity-100 scale-100 translate-y-0'
                : 'opacity-0 scale-90 translate-y-8'
            }`}
            style={{
              boxShadow: `0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)`,
              border: `1px solid ${colorScheme.primary}30`,
            }}
          >
            {/* Header mit dynamischem Farbverlauf */}
            <div
              className="px-6 py-4 border-b relative overflow-hidden"
              style={{ borderColor: `${colorScheme.primary}20` }}
            >
              <div
                className="absolute top-0 left-0 h-1 w-full"
                style={{
                  background: `linear-gradient(to right, ${colorScheme.primary}, ${colorScheme.accent})`,
                }}
              />

              <h3
                className="text-xl font-semibold text-center"
                style={{ color: colorScheme.primary }}
              >
                Was bedeutet Kongruenz?
              </h3>

              {/* Close Button */}
              <button
                onClick={closePopup}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 bg-white rounded-full p-1 transition-all duration-200 hover:bg-gray-100 hover:shadow-sm"
                aria-label="Schließen"
              >
                <X size={20} />
              </button>
            </div>

            {/* Content - vereinfacht und fokussiert */}
            <div className="p-6">
              <p className="text-gray-700 text-center mb-6">
                <strong>Kongruenz</strong> bedeutet, dass Ihr Denken, Fühlen und Handeln im Einklang
                sind. Wenn Ihre äußere Realität mit Ihren inneren Werten und Zielen übereinstimmt.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div
                  className="p-4 rounded-lg transition-all duration-300 hover:shadow-md"
                  style={{
                    backgroundColor: `${colorScheme.primary}10`,
                  }}
                >
                  <h4
                    className="font-medium mb-3 text-center"
                    style={{ color: colorScheme.primary }}
                  >
                    Inkongruenz
                  </h4>
                  <div className="text-sm text-gray-600 text-center">
                    Innere Konflikte und Energieverlust
                  </div>
                </div>

                <div
                  className="p-4 rounded-lg transition-all duration-300 hover:shadow-md"
                  style={{
                    backgroundColor: `${colorScheme.accent}10`,
                  }}
                >
                  <h4
                    className="font-medium mb-3 text-center"
                    style={{ color: colorScheme.accent }}
                  >
                    Kongruenz
                  </h4>
                  <div className="text-sm text-gray-600 text-center">
                    Innere Ruhe und natürliche Motivation
                  </div>
                </div>
              </div>

              <div className="text-center mt-2">
                <button
                  onClick={closePopup}
                  className="px-6 py-2 rounded-full text-white font-medium transition-all duration-300 hover:shadow-md transform hover:scale-105"
                  style={{
                    background: `linear-gradient(to right, ${colorScheme.primary}, ${colorScheme.accent})`,
                  }}
                >
                  Verstanden
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default KongruenzPopup;
