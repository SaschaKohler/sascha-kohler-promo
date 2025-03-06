// src/data/inkongruenzTypen.ts
import { Heart, Brain, Puzzle, ArrowUpDown, RefreshCcw } from 'lucide-react';

export interface InkongruenzTyp {
  title: string;
  description: string;
  examples: string[];
  icon: React.ElementType; // Typ für Lucide-Icons
}

export const inkongruenzTypen: InkongruenzTyp[] = [
  {
    title: 'Kopf-Herz-Konflikt',
    description:
      'Sie wissen rational, was sie tun solltest, aber emotional können sie sich nicht dazu überwinden. Dieser innere Widerspruch lähmt sie und verhindert Fortschritt in wichtigen Lebensbereichen.',
    examples: [
      'Sie wissen, dass eine Beziehung nicht gut für sie ist, können sich aber emotional nicht lösen',
      'Sie verstehen, dass bestimmte Gewohnheiten ihnen schaden, fühlen sich aber emotional an diese gebunden',
      'Sie erkennen, dass ein Karrierewechsel logisch wäre, haben aber emotional Angst vor der Veränderung',
    ],
    icon: Brain,
  },
  {
    title: 'Werte-Handlungs-Konflikt',
    description:
      'Sie leben im Widerspruch zu ihren eigenen Werten und Überzeugungen. Diese Diskrepanz erzeugt ein Gefühl der Unaufrichtigkeit und untergräbt ihr Selbstwertgefühl.',
    examples: [
      'Sie schätzen Ehrlichkeit, ertappen sich aber regelmäßig dabei, selbst unehrlich sein zu müssen',
      'Sie wünschen sich mehr Tiefe in Beziehungen, bleiben aber in oberflächlichen Kontakten stecken',
      'Sie glauben an Umweltschutz, treffen aber kaum nachhaltige Entscheidungen im Alltag',
    ],
    icon: Heart,
  },
  {
    title: 'Fragmentierte Lebensbereiche',
    description:
      'Ihre verschiedenen Lebensbereiche stehen in Konflikt zueinander. Was in einem Bereich funktioniert, schadet einem anderen – ein Zustand, der sie emotional und energetisch erschöpft.',
    examples: [
      'Ihr beruflicher Erfolg geht auf Kosten ihrer Gesundheit oder Beziehungen',
      'Ihre familiären Verpflichtungen behindern ihre persönliche Entwicklung',
      'Ihre sozialen Aktivitäten und ihre finanziellen Ziele stehen im Widerspruch',
    ],
    icon: Puzzle,
  },
  {
    title: 'Selbstbild-Realitäts-Diskrepanz',
    description:
      'Wie sie sich sehen und wie sie tatsächlich leben, passt nicht zusammen. Diese Inkongruenz erzeugt ein ständiges Gefühl der Unzulänglichkeit und Selbstkritik.',
    examples: [
      'Sie sehen sich als diszipliniert, haben aber Schwierigkeiten, Pläne umzusetzen',
      'Sie halten sich für großzügig, sind aber oft zurückhaltend, wenn es ums Teilen geht',
      'Sie glauben, ein positiver Mensch zu sein, werden aber von negativen Gedanken dominiert',
    ],
    icon: ArrowUpDown,
  },
  {
    title: 'Ziel-Weg-Konflikt',
    description:
      'Ihre Ziele sind klar, aber die Wege, die sie einschlagen, führen nicht dorthin. Diese Inkongruenz führt zu Frustration und dem Gefühl, trotz Anstrengung nicht voranzukommen.',
    examples: [
      'Sie wollen finanzielle Freiheit, aber ihre täglichen Entscheidungen führen zu mehr Schulden',
      'Sie strebes nach beruflichem Aufstieg, investieres aber kaum in ihre Fähigkeiten',
      'Sie wünschen sich tiefe Beziehungen, vermeiden aber echte Verletzlichkeit',
    ],
    icon: RefreshCcw,
  },
];
// Zielgruppentypen nach Inkongruenz-Mustern
// export const inkongruenzTypen: InkongruenzTyp[] = [
//   {
//     id: "werte-handlung",
//     title: "Der Zwiespalt zwischen Werten und Handeln",
//     icon: Heart,
//     description:
//       "Du weißt genau, was dir wichtig ist – aber dein tägliches Handeln sieht ganz anders aus. Dieser Zwiespalt erzeugt einen inneren Druck, der sich in Unzufriedenheit, Stress oder sogar gesundheitlichen Problemen äußern kann.",
//     examples: [
//       "Du stehst für Nachhaltigkeit, aber dein Beruf zwingt dich zu umweltschädlichen Entscheidungen",
//       "Du schätzt Familienleben, verbringst aber kaum Zeit mit deinen Liebsten",
//       "Du glaubst an Gesundheit, kommst aber nie dazu, für dich zu sorgen",
//     ],
//   },
//   {
//     id: "selbstbild-fremdbild",
//     title: "Die Maske: Anders wirken als du dich fühlst",
//     icon: Target,
//     description:
//       "Nach außen spielst du eine Rolle, die nicht zu deinem wahren Selbst passt. Diese ständige Schauspielerei kostet enorm viel Kraft und verhindert echte Beziehungen und Erfüllung.",
//     examples: [
//       "Du wirkst nach außen selbstsicher, fühlst dich aber innerlich oft unsicher",
//       "Du zeigst dich stark und unabhängig, sehnst dich aber nach Unterstützung",
//       "Du stellst deine Erfolge zur Schau, zweifelst aber innerlich an deren Wert",
//     ],
//   },
//   {
//     id: "lebensbereich-konflikt",
//     title: "Zerrissen zwischen verschiedenen Lebensbereichen",
//     icon: RefreshCcw,
//     description:
//       "Du führst quasi mehrere Leben parallel, die nicht zusammenpassen. Diese Zerrissenheit führt zu ständigen inneren Konflikten und dem Gefühl, nirgends wirklich ganz präsent zu sein.",
//     examples: [
//       "Im Beruf bist du ein anderer Mensch als in der Familie oder im Freundeskreis",
//       "Deine Freizeit und dein Arbeitsleben fühlen sich an wie zwei getrennte Welten",
//       "Du wechselst ständig zwischen verschiedenen Rollen und verlierst dabei dein wahres Ich",
//     ],
//   },
// ];
