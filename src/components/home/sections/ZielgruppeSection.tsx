import React, { useState } from 'react';
import {
  Target,
  Briefcase,
  Brain,
  Heart,
  Activity,
  Check,
  Compass,
  Sunrise,
  MessageCircle,
  LifeBuoy,
  Clock,
  Award,
  Zap,
  BarChart,
} from 'lucide-react';
import { ColorScheme } from '@/utils/colorSchemes';

interface ZielgruppeProps {
  colorScheme: ColorScheme;
}

const ZielgruppeSection: React.FC<ZielgruppeProps> = ({ colorScheme }) => {
  const [activeTab, setActiveTab] = useState<number>(0);

  // Zielgruppen-Definitionen
  const targetGroups = [
    {
      id: 'quarterlife',
      title: 'Junge Berufstätige am Karrierestart',
      ageRange: '25-35',
      tagline: 'Zwischen Erwartungsdruck und dem Wunsch nach authentischer Selbstverwirklichung',
      icon: Compass,
      description:
        'Junge Berufstätige, die am Anfang ihrer Karriere stehen und sich zwischen gesellschaftlichen Erwartungen und ihren persönlichen Werten orientieren müssen. Menschen, die von Anfang an eine kongruente Basis für ihren Lebensweg schaffen wollen.',
      challenges: [
        'Gefühl der Orientierungslosigkeit trotz zahlreicher Möglichkeiten und Optionen',
        'Innere Konflikte zwischen gesellschaftlichen Erwartungen und eigenen Werten',
        'Unsicherheit bei wichtigen Lebensentscheidungen (Karriereweg, Beziehungen, Wohnort)',
        'Vergleichsdruck durch soziale Medien und das scheinbar perfekte Leben anderer',
      ],
      benefits: [
        {
          icon: Compass,
          title: 'Klare Orientierung',
          description: 'Entwicklung eines inneren Kompasses für authentische Lebensentscheidungen',
        },
        {
          icon: Zap,
          title: 'Proaktive Lebensgestaltung',
          description: 'Frühzeitige Entwicklung von Kongruenz-Strategien statt später Korrektur',
        },
        {
          icon: MessageCircle,
          title: 'Kommunikationsstrategien',
          description:
            'Werkzeuge für authentische Kommunikation in beruflichen und privaten Kontexten',
        },
      ],
    },
    {
      id: 'midlife',
      title: 'Berufstätige in Lebensphasen des Umbruchs',
      ageRange: '35-50',
      tagline: 'Äußerlich erfolgreich, innerlich auf der Suche nach mehr Kongruenz',
      icon: Briefcase,
      description:
        'Erfolgreiche Berufstätige in der Lebensmitte, die trotz äußerer Erfolge eine innere Diskrepanz spüren. Menschen, die erkannt haben, dass wahrer Erfolg durch die Kongruenz von inneren Werten und äußerem Handeln entsteht.',
      challenges: [
        'Gefühl, in einer erfolgreichen Karriere gefangen zu sein, die nicht mehr mit inneren Werten übereinstimmt',
        'Leben mit anhaltendem Stress durch den inneren Konflikt zwischen täglichem Handeln und tieferen Wünschen',
        'Beziehungsprobleme, die aus der persönlichen Inkongruenz entstehen',
        'Gesundheitliche Folgen durch langfristigen Stress des unauthentischen Lebens',
      ],
      benefits: [
        {
          icon: Brain,
          title: 'Strukturierter Prozess',
          description:
            'Keine vagen Inspirationen, sondern ein klarer 5-Schritte-Pfad zur Transformation',
        },
        {
          icon: Heart,
          title: 'Ganzheitlicher Ansatz',
          description:
            'Integration von Beruf, Beziehungen, Gesundheit und persönlicher Entwicklung',
        },
        {
          icon: Activity,
          title: 'Nachhaltige Veränderung',
          description:
            'Die Methode zielt auf Selbständigkeit und lebenslange Anwendung, nicht auf Abhängigkeit',
        },
      ],
    },
    {
      id: 'retirement',
      title: 'Menschen in der Lebensphase nach der Karriere',
      ageRange: '55-70',
      tagline: 'Den dritten Lebensabschnitt mit Sinn und Kongruenz gestalten',
      icon: Sunrise,
      description:
        'Menschen, die nach jahrzehntelanger Berufstätigkeit in einen neuen Lebensabschnitt eintreten und diesem Sinn und Erfüllung geben möchten. Personen, die ihre Identität neu definieren und ihre Lebenserfahrung bewusst einsetzen wollen.',
      challenges: [
        "Verlust der beruflichen Identität und die Frage 'Wer bin ich jetzt?'",
        'Neuorientierung in Beziehungen, wenn berufliche Netzwerke wegfallen',
        'Balance finden zwischen Aktivität und Ruhe, Engagement und Loslassen',
        'Die eigene Lebenserfahrung und Weisheit wertvoll einsetzen',
      ],
      benefits: [
        {
          icon: LifeBuoy,
          title: 'Identitäts-Neuausrichtung',
          description: 'Entwicklung einer neuen, sinnstiftenden Identität jenseits des Berufs',
        },
        {
          icon: Clock,
          title: 'Bewusste Zeitgestaltung',
          description: 'Strategien zur kongruenten Nutzung der neugewonnenen Freiheit',
        },
        {
          icon: Award,
          title: 'Wertschätzung der Lebenserfahrung',
          description:
            'Die eigene Weisheit und Erfahrung als wertvolle Ressource erkennen und einsetzen',
        },
      ],
    },
  ];

  // Kongruenz-Credo
  const credo = {
    title: 'Unser Kongruenz-Credo',
    text: 'Wir erschließen den Raum zwischen äußerem Erfolg und innerer Erfüllung, damit Menschen in allen Lebensphasen ihr wahres Potenzial entfalten können.',
  };

  return (
    <section
      className="py-16"
      style={{
        background: `linear-gradient(to bottom, ${colorScheme.background}20, white)`,
      }}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <Target size={36} style={{ color: colorScheme.accent }} className="mx-auto mb-4" />
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ color: colorScheme.primary }}
          >
            Für wen die KLARE Kongruenz-Methode entwickelt wurde
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Ein spezifischer Ansatz für Menschen in verschiedenen Lebensphasen, die bereit sind, ihr
            volles Potenzial zu entfalten.
          </p>

          {/* Kongruenz-Credo */}
          <div
            className="max-w-3xl mx-auto p-6 rounded-lg mb-10"
            style={{
              background: `linear-gradient(135deg, ${colorScheme.primary}15, ${colorScheme.accent}15)`,
              border: `1px solid ${colorScheme.primary}30`,
            }}
          >
            <h3 className="text-xl font-semibold mb-3" style={{ color: colorScheme.primary }}>
              {credo.title}
            </h3>
            <p className="text-lg italic" style={{ color: colorScheme.text }}>
              "{credo.text}"
            </p>
          </div>

          {/* Zielgruppen-Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {targetGroups.map((group, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full transition-all duration-300 flex items-center ${
                  activeTab === index
                    ? 'text-white shadow-md'
                    : 'text-gray-600 bg-gray-100 hover:bg-gray-200'
                }`}
                style={{
                  backgroundColor: activeTab === index ? colorScheme.primary : undefined,
                }}
                onClick={() => setActiveTab(index)}
              >
                <group.icon size={16} className="mr-2" />
                <span>{group.ageRange}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Target Group Cards */}
        {targetGroups.map((group, index) => (
          <div
            key={index}
            className={`bg-white rounded-lg shadow-lg p-8 mb-12 max-w-4xl mx-auto overflow-hidden relative transition-all duration-500 ${
              activeTab === index ? 'opacity-100' : 'opacity-0 hidden'
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
                  <group.icon size={48} style={{ color: colorScheme.primary }} />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold" style={{ color: colorScheme.primary }}>
                    {group.title} ({group.ageRange})
                  </h3>
                  <p className="text-gray-600 italic mt-1">"{group.tagline}"</p>
                </div>
              </div>

              <p className="text-gray-700 mb-8">{group.description}</p>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3" style={{ color: colorScheme.accent }}>
                    Typische Herausforderungen:
                  </h4>
                  <ul className="space-y-3">
                    {group.challenges.map((item, i) => (
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
                  <h4 className="font-semibold mb-3" style={{ color: colorScheme.accent }}>
                    Was die KLARE Kongruenz-Methode bietet:
                  </h4>
                  <div className="space-y-4">
                    {group.benefits.map((benefit, i) => (
                      <div key={i} className="flex">
                        <div className="mr-4">
                          <benefit.icon size={24} style={{ color: colorScheme.primary }} />
                        </div>
                        <div>
                          <p className="font-medium" style={{ color: colorScheme.primary }}>
                            {benefit.title}
                          </p>
                          <p className="text-gray-600 text-sm">{benefit.description}</p>
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
                <p className="text-gray-700 italic">
                  "Die KLARE Kongruenz-Methode ist für Menschen entwickelt, die bereit sind, die
                  Verantwortung für ihre Transformation zu übernehmen. Sie bietet keine schnellen
                  Lösungen, sondern einen nachhaltigen Weg zu einem Leben, in dem innere
                  Überzeugungen und äußeres Handeln vollständig kongruent sind."
                </p>
              </div>
            </div>
          </div>
        ))}

        {/* Übersichtsgrafik - Kongruenz in verschiedenen Lebensphasen */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-12 max-w-4xl mx-auto">
          <h3
            className="text-xl font-semibold mb-6 text-center"
            style={{ color: colorScheme.primary }}
          >
            Kongruenz in jeder Lebensphase
          </h3>

          <div className="relative py-8">
            {/* Zentrale Linie - Lebenspfad */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gray-200 transform -translate-x-1/2"></div>

            {/* Phasen auf dem Lebenspfad */}
            <div className="flex flex-col items-center space-y-16 relative">
              {targetGroups.map((group, index) => (
                <div key={index} className="relative flex" style={{ zIndex: 10 }}>
                  <div
                    className={`w-48 md:w-64 text-right mr-4 ${index % 2 === 1 ? 'md:order-2 md:text-left md:mr-0 md:ml-4' : ''}`}
                  >
                    <h4 className="font-medium" style={{ color: colorScheme.primary }}>
                      {group.title}
                    </h4>
                    <p className="text-sm text-gray-600">{group.ageRange}</p>
                  </div>

                  <div
                    className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center"
                    style={{
                      background: `linear-gradient(135deg, ${colorScheme.primary}, ${colorScheme.accent})`,
                    }}
                  >
                    <group.icon size={16} className="text-white" />
                  </div>

                  <div
                    className={`w-48 md:w-64 ml-4 ${index % 2 === 1 ? 'md:order-1 md:ml-0 md:mr-4 md:text-right' : ''}`}
                  >
                    <p className="text-sm text-gray-600 italic">{group.tagline}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-600 italic">
              In jeder Lebensphase bietet die KLARE Kongruenz-Methode einen angepassten Weg, um
              innere Werte mit äußerem Handeln in Einklang zu bringen.
            </p>
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center">
          <p className="text-lg font-medium mb-4" style={{ color: colorScheme.primary }}>
            Erkennst du dich in einer dieser Lebensphasen wieder?
          </p>
          <button
            className="px-8 py-3 rounded-full text-white font-medium transition-all duration-300 hover:shadow-lg transform hover:scale-105"
            style={{
              background: `linear-gradient(to right, ${colorScheme.primary}, ${colorScheme.accent})`,
            }}
          >
            Bald mehr erfahren
          </button>
        </div>
      </div>
    </section>
  );
};

export default ZielgruppeSection;
