// src/data/inkongruenzTypen.ts
import { Heart, Brain, Puzzle, ArrowUpDown, RefreshCcw } from "lucide-react";

export interface InkongruenzTyp {
  title: string;
  description: string;
  examples: string[];
  icon: React.ElementType; // Typ für Lucide-Icons
}

export const inkongruenzTypen: InkongruenzTyp[] = [
  {
    title: "Kopf-Herz-Konflikt",
    description:
      "Du weißt rational, was du tun solltest, aber emotional kannst du dich nicht dazu überwinden. Dieser innere Widerspruch lähmt dich und verhindert Fortschritt in wichtigen Lebensbereichen.",
    examples: [
      "Du weißt, dass eine Beziehung nicht gut für dich ist, kannst dich aber emotional nicht lösen",
      "Du verstehst, dass bestimmte Gewohnheiten dir schaden, fühlst dich aber emotional an sie gebunden",
      "Du erkennst, dass ein Karrierewechsel logisch wäre, hast aber emotional Angst vor der Veränderung",
    ],
    icon: Brain,
  },
  {
    title: "Werte-Handlungs-Konflikt",
    description:
      "Du lebst im Widerspruch zu deinen eigenen Werten und Überzeugungen. Diese Diskrepanz erzeugt ein Gefühl der Unaufrichtigkeit und untergräbt dein Selbstwertgefühl.",
    examples: [
      "Du schätzt Ehrlichkeit, ertappst dich aber regelmäßig dabei, kleine Lügen zu erzählen",
      "Du wünschst dir mehr Tiefe in Beziehungen, bleibst aber in oberflächlichen Kontakten stecken",
      "Du glaubst an Umweltschutz, triffst aber kaum nachhaltige Entscheidungen im Alltag",
    ],
    icon: Heart,
  },
  {
    title: "Fragmentierte Lebensbereiche",
    description:
      "Deine verschiedenen Lebensbereiche stehen in Konflikt zueinander. Was in einem Bereich funktioniert, schadet einem anderen – ein Zustand, der dich emotional und energetisch erschöpft.",
    examples: [
      "Dein beruflicher Erfolg geht auf Kosten deiner Gesundheit oder Beziehungen",
      "Deine familiären Verpflichtungen behindern deine persönliche Entwicklung",
      "Deine sozialen Aktivitäten und deine finanziellen Ziele stehen im Widerspruch",
    ],
    icon: Puzzle,
  },
  {
    title: "Selbstbild-Realitäts-Diskrepanz",
    description:
      "Wie du dich siehst und wie du tatsächlich lebst, passt nicht zusammen. Diese Inkongruenz erzeugt ein ständiges Gefühl der Unzulänglichkeit und Selbstkritik.",
    examples: [
      "Du siehst dich als diszipliniert, hast aber Schwierigkeiten, Pläne umzusetzen",
      "Du hältst dich für großzügig, bist aber oft zurückhaltend, wenn es ums Teilen geht",
      "Du glaubst, ein positiver Mensch zu sein, wirst aber von negativen Gedanken dominiert",
    ],
    icon: ArrowUpDown,
  },
  {
    title: "Ziel-Weg-Konflikt",
    description:
      "Deine Ziele sind klar, aber die Wege, die du einschlägst, führen nicht dorthin. Diese Inkongruenz führt zu Frustration und dem Gefühl, trotz Anstrengung nicht voranzukommen.",
    examples: [
      "Du willst finanzielle Freiheit, aber deine täglichen Entscheidungen führen zu mehr Schulden",
      "Du strebst nach beruflichem Aufstieg, investierst aber kaum in deine Fähigkeiten",
      "Du wünschst dir tiefe Beziehungen, vermeidest aber echte Verletzlichkeit",
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
