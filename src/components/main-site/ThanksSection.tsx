import React, { useState } from "react";
import {
  Heart,
  X,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
} from "lucide-react";
import { ColorScheme } from "../common/ColorSchemeSelector";

interface ThanksSectionProps {
  colorScheme: ColorScheme;
}

const ThanksSection: React.FC<ThanksSectionProps> = ({ colorScheme }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const togglePanel = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Trigger Button - nur sichtbar wenn Panel geschlossen ist */}
      <button
        className={`fixed right-0 top-1/2 -translate-y-1/2 z-30 p-3 shadow-lg rounded-l-lg transition-all duration-300 ${
          isOpen
            ? "opacity-0 pointer-events-none translate-x-20"
            : "opacity-100 translate-x-0"
        }`}
        style={{
          backgroundColor: colorScheme.primary,
          color: "white",
        }}
        onClick={togglePanel}
        aria-label="Danksagungen öffnen"
      >
        <ChevronLeft size={24} />
        <Heart size={24} className="mt-2" />
      </button>

      {/* Slide-in Panel */}
      <div
        className={`fixed top-0 right-0 h-full max-w-md w-full shadow-lg z-40 transition-transform duration-500 ease-in-out transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{
          backgroundColor: "white",
          borderLeft: `4px solid ${colorScheme.accent}`,
        }}
      >
        <div className="h-full overflow-y-auto p-6 relative">
          {/* Close button */}
          <button
            className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors"
            onClick={togglePanel}
            aria-label="Danksagungen schließen"
          >
            <X size={24} style={{ color: colorScheme.primary }} />
          </button>

          <div className="mt-8">
            <div className="space-y-6">
              <div className="mb-6 flex justify-center">
                <Heart
                  size={40}
                  className={`text-${colorScheme.accent}`}
                  fill={`${colorScheme.accent}`}
                />
              </div>

              <h2
                className="text-2xl font-bold mb-6"
                style={{ color: colorScheme.text }}
              >
                Herzlichen Dank
              </h2>

              <p className="text-md mb-6">
                Mein besonderer Dank gilt der{" "}
                <a
                  href="https://www.rok-akademie.at"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center"
                  style={{
                    color: colorScheme.primary,
                    borderBottom: `1px solid ${colorScheme.primary}`,
                    transition: "opacity 0.3s",
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.opacity = "0.8")}
                  onMouseOut={(e) => (e.currentTarget.style.opacity = "1")}
                >
                  ROK-Akademie in Wien{" "}
                  <ExternalLink size={16} className="ml-1" />
                </a>{" "}
                für die wertvolle Ausbildung und die inspirierenden Methoden,
                die mir neue Wege in der persönlichen Transformation eröffnet
                haben.
              </p>

              <div
                className="p-6 rounded-lg mb-6 z-10"
                style={{ background: `${colorScheme.accent}10` }}
              >
                <p
                  className="text-md font-medium mb-2"
                  style={{ color: colorScheme.text }}
                >
                  Spezieller Dank an René Otto Knor
                </p>
                <p className={`text-${colorScheme.text}`}>
                  Für seine visionäre Führung, sein umfassendes Wissen und die
                  Art und Weise, wie er Lebensfreude und Transformation
                  miteinander verbindet. Seine Lehren haben meinen eigenen Weg
                  maßgeblich geprägt und bereichert.
                </p>
                <p className={`italic pt-2 text-${colorScheme.accent}`}>
                  "WIRKLICHKEIT IST DAS WAS WIRKT"
                </p>
              </div>

              <div
                className="p-5 rounded-lg"
                style={{ backgroundColor: `${colorScheme.background}` }}
              >
                <h3
                  className="text-xl font-semibold mb-2"
                  style={{ color: colorScheme.primary }}
                >
                  Meine Familie
                </h3>
                <p className="text-gray-700">
                  Tiefe Dankbarkeit für meine Familie, die mich auf meinem Weg
                  stets unterstützt und mir den Raum gibt, mich kontinuierlich
                  weiterzuentwickeln.
                </p>
              </div>
              <div
                className="p-5 rounded-lg"
                style={{ backgroundColor: `${colorScheme.background}` }}
              >
                <h3
                  className="text-xl font-semibold mb-2"
                  style={{ color: colorScheme.primary }}
                >
                  NLP-Community
                </h3>
                <p className="text-gray-700">
                  Herzlichen Dank an meine NLP-Trainer und Ausbildungsgruppe für
                  den wertvollen Austausch und die gemeinsamen Lernerfahrungen,
                  die mein Verständnis von Kommunikation und Veränderung
                  tiefgreifend geprägt haben.
                </p>
              </div>

              <div
                className="p-5 rounded-lg"
                style={{ backgroundColor: `${colorScheme.background}` }}
              >
                <h3
                  className="text-xl font-semibold mb-2"
                  style={{ color: colorScheme.primary }}
                >
                  Klienten & Teilnehmer
                </h3>
                <p className="text-gray-700">
                  Ein herzliches Dankeschön an alle Klienten und
                  Workshop-Teilnehmer für ihr Vertrauen und ihre Offenheit, die
                  es mir ermöglichen, gemeinsam wachstumsreiche Erfahrungen zu
                  gestalten.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Close trigger on the left side of panel - nur sichtbar wenn Panel geöffnet ist */}
        <button
          className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-full p-3 shadow-lg rounded-l-lg transition-all duration-500 ${
            isOpen
              ? "opacity-100"
              : "opacity-0 pointer-events-none translate-x-0"
          }`}
          style={{
            backgroundColor: colorScheme.primary,
            color: "white",
          }}
          onClick={togglePanel}
          aria-label="Danksagungen schließen"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Overlay when panel is open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-20 z-30 transition-opacity duration-500"
          onClick={togglePanel}
        />
      )}
    </>
  );
};

export default ThanksSection;
