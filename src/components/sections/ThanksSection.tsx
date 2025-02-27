import React from "react";
import { Heart, ExternalLink } from "lucide-react";
import { ColorScheme } from "@/components/ColorSchemeSelector";

interface ThanksSectionProps {
  colorScheme: ColorScheme;
}

const ThanksSection: React.FC<ThanksSectionProps> = ({ colorScheme }) => {
  return (
    <section
      className="py-16"
      style={{
        background: colorScheme.background,
      }}
    >
      <div className="container mx-auto px-6">
        <div
          className="max-w-4xl mx-auto rounded-lg p-8 shadow-lg text-center"
          style={{ border: `1px solid ${colorScheme.primary}30` }}
        >
          <div className="mb-6 flex justify-center">
            <Heart
              size={40}
              className={`text-${colorScheme.accent}`}
              fill={`${colorScheme.accent}`}
            />
          </div>

          <h2
            className="text-3xl font-bold mb-6"
            style={{ color: colorScheme.text }}
          >
            Herzlichen Dank
          </h2>

          <p className="text-lg mb-6">
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
              ROK-Akademie in Wien <ExternalLink size={16} className="ml-1" />
            </a>{" "}
            für die wertvolle Ausbildung und die inspirierenden Methoden, die
            mir neue Wege in der persönlichen Transformation eröffnet haben.
          </p>

          <div
            className="p-6 rounded-lg mb-6 z-10"
            style={{ background: `${colorScheme.accent}10` }}
          >
            <p
              className="text-lg font-medium mb-2"
              style={{ color: colorScheme.text }}
            >
              Spezieller Dank an René Otto Knor
            </p>
            <p className={`text-${colorScheme.text}`}>
              Für seine visionäre Führung, sein umfassendes Wissen und die Art
              und Weise, wie er Lebensfreude und Transformation miteinander
              verbindet. Seine Lehren haben meinen eigenen Weg maßgeblich
              geprägt und bereichert.
            </p>
          </div>

          <p className={`italic text-${colorScheme.accent}`}>
            "Wahre Transformation beginnt, wenn wir das Leben in all seinen
            Facetten annehmen und aus jeder Erfahrung wachsen."
          </p>
        </div>
      </div>
    </section>
  );
};

export default ThanksSection;
