import { Heart, Target, RefreshCcw } from "lucide-react";

export interface InkongruenzTyp {
  id: string;
  title: string;
  icon: React.ComponentType;
  description: string;
  examples: string[];
}
// Zielgruppentypen nach Inkongruenz-Mustern
export const inkongruenzTypen: InkongruenzTyp[] = [
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
  },
];
