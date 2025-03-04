import React, { useState } from "react";
import {
  Heart,
  Target,
  RefreshCcw,
  Check,
  Compass,
  Zap,
  Activity,
  Brain,
} from "lucide-react";
import { ColorScheme } from "./ColorSchemeSelector";

interface InkongruenzTypenProps {
  colorScheme: ColorScheme;
}

// Drei Haupttypen von Inkongruenz, die Menschen erleben
const inkongruenzTypen = [
  {
    id: "werte-handlung",
    title: "Der Zwiespalt zwischen Werten und Handeln",
    icon: Heart,
    description:
      "Du weißt genau, was dir wichtig ist – aber dein tägliches Handeln sieht ganz anders aus. Dieser Zwiespalt erzeugt einen inneren Druck, der sich in Unzufriedenheit, Stress oder sogar gesundheitlichen Problemen äußern kann.",
    examples: [
      "Du stehst für Nachhaltigkeit, aber dein Beruf zwingt dich zu umweltschädlichen Entscheidungen",
      "Du schätzt Familienleben, verbringst aber kaum Zeit mit deinen Liebsten",
      "Du glaubst an Gesundheit, kommst aber nie dazu, für dich zu sorgen",
    ],
    benefits: [
      {
        icon: Compass,
        title: "Klarheit schaffen",
        description: "Erkenne, wo genau der Zwiespalt in deinem Leben liegt",
      },
      {
        icon: Zap,
        title: "Druck auflösen",
        description: "Befreie dich von der Last der inneren Unstimmigkeit",
      },
      {
        icon: RefreshCcw,
        title: "Neue Wege finden",
        description:
          "Entdecke Lösungen, die dein Handeln mit deinen Werten in Einklang bringen",
      },
    ],
  },
  {
    id: "selbstbild-fremdbild",
    title: "Die Maske: Anders wirken als du dich fühlst",
    icon: Target,
    description:
      "Nach außen spielst du eine Rolle, die nicht zu deinem wahren Selbst passt. Diese ständige Schauspielerei kostet enorm viel Kraft und verhindert echte Beziehungen und Erfüllung.",
    examples: [
      "Du wirkst nach außen selbstsicher, fühlst dich aber innerlich oft unsicher",
      "Du zeigst dich stark und unabhängig, sehnst dich aber nach Unterstützung",
      "Du stellst deine Erfolge zur Schau, zweifelst aber innerlich an deren Wert",
    ],
    benefits: [
      {
        icon: Brain,
        title: "Selbsterkenntnis",
        description:
          "Verstehe, warum du eine Maske trägst und was du wirklich brauchst",
      },
      {
        icon: Heart,
        title: "Authentizität entwickeln",
        description:
          "Lerne, dein wahres Selbst zu zeigen, ohne Angst vor Ablehnung",
      },
      {
        icon: Activity,
        title: "Energie freisetzen",
        description:
          "Erlebe, wie viel Kraft du gewinnst, wenn du nicht mehr zwei Personen sein musst",
      },
    ],
  },
  {
    id: "lebensbereich-konflikt",
    title: "Zerrissen zwischen verschiedenen Lebensbereichen",
    icon: RefreshCcw,
    description:
      "Du führst quasi mehrere Leben parallel, die nicht zusammenpassen. Diese Zerrissenheit führt zu ständigen inneren Konflikten und dem Gefühl, nirgends wirklich ganz präsent zu sein.",
    examples: [
      "Im Beruf bist du ein anderer Mensch als in der Familie oder im Freundeskreis",
      "Deine Freizeit und dein Arbeitsleben fühlen sich an wie zwei getrennte Welten",
      "Du wechselst ständig zwischen verschiedenen Rollen und verlierst dabei dein wahres Ich",
    ],
    benefits: [
      {
        icon: Target,
        title: "Ganzheitliche Sicht",
        description: "Erkenne, dass alle Lebensbereiche Teil eines Ganzen sind",
      },
      {
        icon: Compass,
        title: "Verbindungen schaffen",
        description:
          "Finde Brücken zwischen den scheinbar getrennten Teilen deines Lebens",
      },
      {
        icon: Zap,
        title: "Innere Einheit",
        description:
          "Erlebe die befreiende Kraft, wenn alle Lebensbereiche in eine Richtung wirken",
      },
    ],
  },
];

const InkongruenzTypenSection: React.FC<InkongruenzTypenProps> = ({
  colorScheme,
}) => {
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <section
      className="py-16"
      style={{
        background: `linear-gradient(to bottom, ${colorScheme.background}20, white)`,
      }}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <Heart
            size={36}
            style={{ color: colorScheme.accent }}
            className="mx-auto mb-4"
          />
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ color: colorScheme.primary }}
          >
            Findest du dich hier wieder?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Die KLARE Methode hilft Menschen, die einen dieser inneren Konflikte
            erleben. Erkennst du dich in einer dieser Beschreibungen?
          </p>

          {/* Kongruenz-Credo */}
          <div
            className="max-w-3xl mx-auto p-6 rounded-lg mb-10"
            style={{
              background: `linear-gradient(135deg, ${colorScheme.primary}15, ${colorScheme.accent}15)`,
              border: `1px solid ${colorScheme.primary}30`,
            }}
          >
            <h3
              className="text-xl font-semibold mb-3"
              style={{ color: colorScheme.primary }}
            >
              Unser Leitgedanke
            </h3>
            <p className="text-lg italic" style={{ color: colorScheme.text }}>
              "Dein Leben in Einklang bringen – innen wie außen"
            </p>
          </div>

          {/* Inkongruenz-Typen Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {inkongruenzTypen.map((typ, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full transition-all duration-300 flex items-center ${
                  activeTab === index
                    ? "text-white shadow-md"
                    : "text-gray-600 bg-gray-100 hover:bg-gray-200"
                }`}
                style={{
                  backgroundColor:
                    activeTab === index ? colorScheme.primary : undefined,
                }}
                onClick={() => setActiveTab(index)}
              >
                <typ.icon size={16} className="mr-2" />
                <span className="hidden md:inline">
                  {typ.title.length > 20
                    ? typ.title.substring(0, 20) + "..."
                    : typ.title}
                </span>
                <span className="md:hidden">Typ {index + 1}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Inkongruenz-Typen Cards */}
        {inkongruenzTypen.map((typ, index) => (
          <div
            key={index}
            className={`bg-white rounded-lg shadow-lg p-8 mb-12 max-w-4xl mx-auto overflow-hidden relative transition-all duration-500 ${
              activeTab === index ? "opacity-100" : "opacity-0 hidden"
            }`}
            style={{
              borderLeft: `5px solid ${colorScheme.primary}`,
              borderRight: `5px solid ${colorScheme.accent}`,
            }}
          >
            {/* Decorative elements */}
            <div
              className="absolute -top-12 -right-12 w-24 h-24 rounded-full"
              style={{
                background: `linear-gradient(135deg, ${colorScheme.primary}30, ${colorScheme.accent}30)`,
              }}
            />
            <div
              className="absolute -bottom-12 -left-12 w-24 h-24 rounded-full"
              style={{
                background: `linear-gradient(135deg, ${colorScheme.accent}30, ${colorScheme.primary}30)`,
              }}
            />

            <div className="relative z-10">
              <div className="flex flex-col md:flex-row gap-6 items-center mb-6">
                <div className="bg-gray-100 p-4 rounded-full">
                  <typ.icon size={48} style={{ color: colorScheme.primary }} />
                </div>
                <div>
                  <h3
                    className="text-2xl font-semibold"
                    style={{ color: colorScheme.primary }}
                  >
                    {typ.title}
                  </h3>
                </div>
              </div>

              <p className="text-gray-700 mb-8">{typ.description}</p>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4
                    className="font-semibold mb-3"
                    style={{ color: colorScheme.accent }}
                  >
                    Kommt dir das bekannt vor?
                  </h4>
                  <ul className="space-y-3">
                    {typ.examples.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span
                          className="mr-2 mt-1 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center"
                          style={{ background: colorScheme.primary }}
                        >
                          <Check size={12} className="text-white" />
                        </span>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4
                    className="font-semibold mb-3"
                    style={{ color: colorScheme.accent }}
                  >
                    Wie die KLARE Methode dir hilft:
                  </h4>
                  <div className="space-y-4">
                    {typ.benefits.map((benefit, i) => (
                      <div key={i} className="flex">
                        <div className="mr-4">
                          <benefit.icon
                            size={24}
                            style={{ color: colorScheme.primary }}
                          />
                        </div>
                        <div>
                          <p
                            className="font-medium"
                            style={{ color: colorScheme.primary }}
                          >
                            {benefit.title}
                          </p>
                          <p className="text-gray-600 text-sm">
                            {benefit.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div
                className="mt-8 p-4 bg-gray-50 rounded-lg border-l-4"
                style={{ borderColor: colorScheme.accent }}
              >
                <p className="text-gray-700">
                  <strong>Die KLARE Methode:</strong> Ein strukturierter
                  5-Schritte-Prozess, der dir hilft, diesen inneren Konflikt zu
                  lösen und ein stimmiges Leben zu führen – ohne komplizierte
                  Theorien, sondern mit praktischen Werkzeugen für den Alltag.
                </p>
              </div>
            </div>
          </div>
        ))}

        {/* Call to action */}
        <div className="text-center">
          <p
            className="text-lg font-medium mb-4"
            style={{ color: colorScheme.primary }}
          >
            Bist du bereit für ein Leben mit mehr innerer Stimmigkeit?
          </p>
          <button
            className="px-8 py-3 rounded-full text-white font-medium transition-all duration-300 hover:shadow-lg transform hover:scale-105"
            style={{
              background: `linear-gradient(to right, ${colorScheme.primary}, ${colorScheme.accent})`,
            }}
          >
            Erfahre mehr über die KLARE Kongruenz-Methode
          </button>
        </div>
      </div>
    </section>
  );
};

export default InkongruenzTypenSection;
