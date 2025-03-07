import React from 'react';
import {
  TransformationPathway,
  KongruenzDifferenzierung,
  KongruenzMethode,
} from '@/components/kongruenz-methode';
import { ColorScheme } from '@/components/common/theme';

// Sample expertise content focused on the Kongruenz-Methode
const expertiseAreas = [
  {
    title: 'Die Kongruenz-Methode',
    description:
      'Als Entwickler der Kongruenz-Methode biete ich einen strukturierten 5-Schritte-Prozess, um dir zu helfen, vollständige Kongruenz in allen Lebensbereichen zu erreichen.',
    items: [
      'Individuelle Anwendung auf persönliche Ziele',
      'Integration von NLP-Techniken',
      'Wissenschaftlich fundierte Ansätze',
      'Nachhaltige Transformationswerkzeuge',
    ],
  },
  {
    title: 'NLP & Kommunikation',
    description:
      'Als zertifizierter NLP-Practitioner und Trainer bringe ich tiefes Verständnis für menschliche Kommunikationsmuster und Veränderungsprozesse mit.',
    items: [
      'Meta-Modell der Sprache',
      'Ankertechniken',
      'Timeline-Arbeit',
      'Change History Integration',
    ],
  },
  {
    title: 'Vorträge & Workshops',
    description:
      'Meine Vorträge zur Kongruenz-Methode verbinden inspirierende Inhalte mit praktischen Werkzeugen, die sofort anwendbar sind.',
    items: [
      'Interaktive Formate',
      'Tiefgehende Impulse',
      'Nachhaltige Integration',
      'Maßgeschneiderte Inhalte',
    ],
  },
  {
    title: 'Ganzheitliche Perspektive',
    description:
      'Durch meinen Hintergrund als Pharmazeut bringe ich ein fundiertes Verständnis für die Verbindung von Körper, Geist und Emotion mit.',
    items: [
      'Neurobiologische Grundlagen',
      'Stressregulation',
      'Gesundheitsförderung',
      'Ganzheitliches Wohlbefinden',
    ],
  },
];

interface KongruenzIntegrationProps {
  colorScheme: ColorScheme;
}

const KongruenzIntegration: React.FC<KongruenzIntegrationProps> = ({ colorScheme }) => {
  return (
    <div className="kongruenz-integration">
      {/* Hero Section - Modified for Kongruenz-Methode focus */}
      <section
        id="hero"
        className="min-h-screen pt-24 flex flex-col items-center justify-center relative overflow-hidden"
      >
        <div
          className="absolute inset-0 z-0"
          style={{
            background: `linear-gradient(to bottom, ${colorScheme.background}, white)`,
          }}
        />

        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden z-0">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full opacity-20 animate-float"
              style={{
                background: `linear-gradient(to bottom right, ${colorScheme.accent}40, ${colorScheme.primary}40)`,
                width: `${Math.random() * 300 + 100}px`,
                height: `${Math.random() * 300 + 100}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${Math.random() * 15 + 15}s`,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left md:w-3/5">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                <span style={{ color: colorScheme.primary }}>Die Kongruenz</span>
                <span
                  style={{
                    backgroundImage: `linear-gradient(to right, ${colorScheme.primary}, ${colorScheme.accent})`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    color: 'transparent',
                  }}
                >
                  -Methode
                </span>
              </h1>

              <p className="text-lg sm:text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto md:mx-0 mb-8 leading-relaxed">
                Der 5-Schritte-Prozess für vollständige Kongruenz in allen Lebensbereichen und die
                Verwirklichung deiner Ziele.
              </p>

              <button
                className="text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                style={{
                  background: `linear-gradient(to right, ${colorScheme.primary}, ${colorScheme.accent})`,
                }}
              >
                Entdecke die Kongruenz-Methode
              </button>
            </div>

            {/* Hero Image - Circular with Kongruenz-Methode branding */}
            <div className="md:w-2/5 mt-8 md:mt-0">
              <div className="relative">
                <div
                  className="w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 shadow-xl mx-auto"
                  style={{ borderColor: colorScheme.accent }}
                >
                  <img
                    src="/api/placeholder/600/600"
                    alt="Sascha Kohler - Die Kongruenz-Methode"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-lg shadow-lg">
                  <p className="italic text-lg" style={{ color: colorScheme.primary }}>
                    Entwickler der Kongruenz-Methode
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Modified for Kongruenz focus */}
      <section id="about" className="py-20 min-h-screen flex items-center">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <div className="relative">
                <div
                  className="w-full h-96 md:h-[550px] rounded-lg overflow-hidden"
                  style={{ backgroundColor: `${colorScheme.accent}30` }}
                >
                  <img
                    src="/api/placeholder/600/700"
                    alt="Sascha Kohler - Kongruenz-Methode"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-lg">
                  <p className="italic font-serif text-lg" style={{ color: colorScheme.primary }}>
                    "Kongruenz ist der Schlüssel zu einem Leben voller Leichtigkeit und Erfüllung."
                  </p>
                </div>
              </div>
            </div>

            <div className="md:w-1/2">
              <h2 className="text-4xl font-bold mb-6" style={{ color: colorScheme.text }}>
                Über <span style={{ color: colorScheme.primary }}>die Kongruenz-Methode</span>
              </h2>

              <div className="space-y-6 text-lg text-gray-600">
                <p>
                  Die Kongruenz-Methode ist ein von mir entwickelter 5-Schritte-Prozess, der dir
                  hilft, vollständige Übereinstimmung zwischen deinen Zielen und allen Aspekten
                  deines Lebens zu erreichen.
                </p>

                <p>
                  Aufbauend auf meinen vielfältigen Erfahrungen aus der ROK Akademie, meinen
                  NLP-Zertifizierungen und meinem pharmazeutischen Hintergrund, bietet die
                  Kongruenz-Methode einen strukturierten Weg für nachhaltige persönliche
                  Transformation.
                </p>

                <p>
                  Der Kerngedanke: Wenn alle Lebensbereiche – dein Denken, Fühlen und Handeln –
                  kongruent auf deine Ziele ausgerichtet sind, manifestieren sich diese mit einer
                  natürlichen Leichtigkeit und Selbstverständlichkeit.
                </p>

                <div
                  className="bg-gray-50 p-4 rounded-lg border-l-4"
                  style={{ borderColor: colorScheme.accent }}
                >
                  <p className="text-base">
                    <strong>Wichtig:</strong> Anders als unternehmensorientierte Kongruenz-Modelle
                    betrachtet meine Methode den Menschen nicht als System oder Organisation. Sie
                    respektiert die Einzigartigkeit jedes Individuums und arbeitet mit der
                    natürlichen Integration von Körper, Geist und Seele – ein ganzheitlicher Ansatz
                    für den Menschen in seiner vollen Komplexität.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Kongruenz-Methode Component */}
      <KongruenzMethode colorScheme={colorScheme} />

      {/* The Transformation Pathway (Weg von - Hin zu) */}
      <TransformationPathway colorScheme={colorScheme} />

      {/* Kongruenz Differenzierung - Clear difference from corporate models */}
      <KongruenzDifferenzierung colorScheme={colorScheme} />

      {/* Expertise Section - Modified for Kongruenz focus */}
      <section id="expertise" className="py-20 min-h-screen flex items-center">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center" style={{ color: colorScheme.text }}>
            Meine <span style={{ color: colorScheme.primary }}>Expertise</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            {expertiseAreas.map((area, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-2xl font-semibold mb-4" style={{ color: colorScheme.primary }}>
                  {area.title}
                </h3>
                <p className="text-gray-600 mb-6">{area.description}</p>

                <ul className="space-y-2">
                  {area.items.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <div
                        className="h-5 w-5 rounded-full flex items-center justify-center mt-1 mr-2 flex-shrink-0"
                        style={{
                          backgroundColor: `${colorScheme.accent}30`,
                          color: colorScheme.accent,
                        }}
                      >
                        ✓
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center" style={{ color: colorScheme.text }}>
            Erfahrungen mit der{' '}
            <span style={{ color: colorScheme.primary }}>Kongruenz-Methode</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  'Die Kongruenz-Methode hat mir geholfen, meine beruflichen Ziele mit meinem Privatleben in Einklang zu bringen. Der 5-Schritte-Prozess ist klar strukturiert und führt zu erstaunlichen Ergebnissen.',
                author: 'Michaela K., Unternehmensberaterin',
              },
              {
                quote:
                  'Nach jahrelangem Kampf mit meinen Zielen habe ich durch die Kongruenz-Methode erkannt, wo meine Inkongruenzen lagen. Jetzt erlebe ich, wie sich meine Wünsche mit einer natürlichen Leichtigkeit manifestieren.',
                author: 'Thomas L., Selbständiger',
              },
              {
                quote:
                  'Der Workshop zur Kongruenz-Methode war ein Wendepunkt in meinem Leben. Sascha hat einen einzigartigen Ansatz entwickelt, der tiefgreifende und nachhaltige Veränderungen ermöglicht.',
                author: 'Julia M., Führungskraft',
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div
                  className="h-12 w-12 rounded-full mb-6 flex items-center justify-center text-2xl"
                  style={{
                    backgroundColor: `${colorScheme.primary}15`,
                    color: colorScheme.primary,
                  }}
                >
                  "
                </div>
                <p className="text-gray-600 mb-6 italic">{testimonial.quote}</p>
                <p className="font-medium" style={{ color: colorScheme.primary }}>
                  {testimonial.author}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section
        className="py-16"
        style={{
          background: `linear-gradient(to right, ${colorScheme.primary}, ${colorScheme.accent})`,
        }}
      >
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">
            Bereit für deine persönliche Transformation?
          </h2>
          <p className="text-white text-lg mb-8 max-w-3xl mx-auto opacity-90">
            Entdecke, wie die Kongruenz-Methode dir helfen kann, vollständige Übereinstimmung in
            allen Lebensbereichen zu erreichen und deine Ziele mit Leichtigkeit zu manifestieren.
          </p>
          <button
            className="bg-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            style={{ color: colorScheme.primary }}
          >
            Starte deine Kongruenz-Reise
          </button>
        </div>
      </section>
    </div>
  );
};

export default KongruenzIntegration;
