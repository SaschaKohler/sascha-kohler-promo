"use client";
import React from "react";
import { Heart, ExternalLink, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { colorSchemes } from "@/utils/colorSchemes";

// Da wir keine Props von außen bekommen, nutzen wir ein Standard-Farbschema
const defaultColorScheme = colorSchemes[0];

export default function ThanksPage() {
  return (
    <div
      className="min-h-screen"
      style={{
        color: defaultColorScheme.text,
        background: `linear-gradient(to bottom, white, ${defaultColorScheme.background})`,
      }}
    >
      {/* Navigation */}
      <div className="container mx-auto px-6 py-8">
        <Link
          href="/"
          className="inline-flex items-center text-lg font-medium hover:opacity-80 transition-opacity"
          style={{ color: defaultColorScheme.primary }}
        >
          <ArrowLeft size={20} className="mr-2" />
          Zurück zur Hauptseite
        </Link>
      </div>

      <div className="container mx-auto px-6 py-12">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="mb-6 flex justify-center">
              <Heart size={40} className="text-red-500" fill="#ef4444" />
            </div>
            <h1
              className="text-4xl md:text-5xl font-bold mb-6"
              style={{ color: defaultColorScheme.primary }}
            >
              Herzlichen Dank
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Auf meinem Weg der persönlichen und beruflichen Entwicklung haben
              mich viele wunderbare Menschen begleitet und unterstützt. Diesen
              Menschen möchte ich hier meinen besonderen Dank aussprechen.
            </p>
          </div>

          {/* ROK Akademie Section */}
          <div className="mb-20">
            <h2
              className="text-3xl font-bold mb-8 text-center"
              style={{ color: defaultColorScheme.primary }}
            >
              ROK Akademie
            </h2>

            <div className="bg-white rounded-lg p-8 shadow-lg mb-8">
              <p className="text-lg mb-6">
                Mein besonderer Dank gilt der{" "}
                <a
                  href="https://www.rok-akademie.at"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center"
                  style={{
                    color: defaultColorScheme.primary,
                    borderBottom: `1px solid ${defaultColorScheme.primary}`,
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
                className="p-6 rounded-lg"
                style={{ backgroundColor: `${defaultColorScheme.accent}15` }}
              >
                <p
                  className="text-lg font-medium mb-2"
                  style={{ color: defaultColorScheme.primary }}
                >
                  Spezieller Dank an René Otto Knor
                </p>
                <p className="text-gray-600">
                  Für seine visionäre Führung, sein umfassendes Wissen und die
                  Art und Weise, wie er Lebensfreude und Transformation
                  miteinander verbindet. Seine Lehren haben meinen eigenen Weg
                  maßgeblich geprägt und bereichert.
                </p>
              </div>
            </div>
          </div>

          {/* Familie Section */}
          <div className="mb-20">
            <h2
              className="text-3xl font-bold mb-8 text-center"
              style={{ color: defaultColorScheme.primary }}
            >
              Meine Familie
            </h2>

            <div className="bg-white rounded-lg p-8 shadow-lg">
              <p className="text-lg mb-8 text-center">
                Mein größter Dank gilt meiner Familie, die mich auf meinem Weg
                stets unterstützt, inspiriert und mir die Kraft gibt, meine
                Vision zu verwirklichen.
              </p>

              <div className="grid md:grid-cols-2 gap-12 mb-8">
                {/* Gerda */}
                <div className="flex flex-col items-center">
                  <div
                    className="w-40 h-40 rounded-full overflow-hidden border-4 mb-4"
                    style={{ borderColor: defaultColorScheme.primary }}
                  >
                    <img
                      src="/api/placeholder/200/200"
                      alt="Gerda Ahorner"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3
                    className="text-xl font-semibold mb-2"
                    style={{ color: defaultColorScheme.primary }}
                  >
                    Meine Frau Gerda
                  </h3>
                  <p className="text-gray-600 text-center mb-4">
                    Expertin für Bachblüten & Mindset-Transformation, meine
                    Partnerin in der Entwicklung neuer Perspektiven und meine
                    größte Unterstützung.
                  </p>
                  <a
                    href="https://www.ja-zum-leben.at"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 rounded-full text-white text-sm"
                    style={{ backgroundColor: defaultColorScheme.accent }}
                  >
                    Ihre Expertise entdecken{" "}
                    <ExternalLink size={14} className="ml-1" />
                  </a>
                </div>

                {/* Tobias */}
                <div className="flex flex-col items-center">
                  <div
                    className="w-40 h-40 rounded-full overflow-hidden border-4 mb-4"
                    style={{ borderColor: defaultColorScheme.primary }}
                  >
                    <img
                      src="/api/placeholder/200/200"
                      alt="Tobias Ahorner"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3
                    className="text-xl font-semibold mb-2"
                    style={{ color: defaultColorScheme.primary }}
                  >
                    Mein Sohn Tobias
                  </h3>
                  <p className="text-gray-600 text-center mb-4">
                    Meine größte Inspiration und tägliche Freude. Durch seine
                    Augen sehe ich die Welt immer wieder neu und mit
                    Begeisterung.
                  </p>
                </div>
              </div>

              <p className="text-gray-600 italic text-center mt-8 mx-auto max-w-3xl">
                "Wahre Transformation wurzelt in dem Netzwerk aus Beziehungen,
                die uns stärken, herausfordern und uns zu den besten Versionen
                von uns selbst machen."
              </p>
            </div>
          </div>

          <div className="text-center mb-12">
            <p className="italic text-gray-600">
              "Wahre Transformation beginnt, wenn wir das Leben in all seinen
              Facetten annehmen und aus jeder Erfahrung wachsen."
            </p>
          </div>
        </div>
      </div>

      {/* Einfacher Footer */}
      <footer className="py-6 text-center text-gray-500 text-sm">
        <div className="container mx-auto px-6">
          <p>
            © {new Date().getFullYear()} Sascha Kohler. Alle Rechte
            vorbehalten.
          </p>
        </div>
      </footer>
    </div>
  );
}
