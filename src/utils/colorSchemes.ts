// Definiere den Typ für das Farbschema
export interface ColorScheme {
  name: string;
  primary: string;
  accent: string;
  complement: string;
  text: string;
  background: string;
}

// Wartungsmodus-Farbschema (Gold & Dunkel)
export const maintenanceTheme: ColorScheme = {
  name: "Kreatives Indigo",
  primary: "#3F51B5", // Indigo als dynamische Hauptfarbe
  accent: "#7986CB", // Helleres Indigo für Akzente
  complement: "#FF9800", // Warmes Orange für Kontrast
  text: "#202124", // Dunkelgrau für gute Lesbarkeit
  background: "#F5F7FF", // Sehr helles Indigo für den Hintergrund
};

// Graves-Ebenen inspirierte Farbschemata
export const gravesThemes: ColorScheme[] = [
  // Beige - Überlebensmodus - Erdige, natürliche Töne
  {
    name: "Natürliche Grundlagen",
    primary: "#A49382", // Sanftes Beige
    accent: "#C2B8A3", // Helles Beige
    complement: "#5C8374", // Erdiges Grün
    text: "#33302E", // Dunkelgrau mit warmer Note
    background: "#F9F7F3", // Sehr helles Beige
  },

  // Violett - Magisch-animistisch - Mystische, spirituelle Töne
  {
    name: "Mystische Verbindung",
    primary: "#6A5ACD", // Schlichtes Violett
    accent: "#9690C6", // Sanftes Lavendel
    complement: "#FFD700", // Gold als spiritueller Akzent
    text: "#2E2A40", // Dunkles Violett
    background: "#F8F7FF", // Sehr helles Lavendelweiß
  },

  // Rot - Impulsiv-egozentrisch - Kraftvolle, energetische Töne
  {
    name: "Kraftvolle Dynamik",
    primary: "#C62828", // Kräftiges Rot
    accent: "#EF5350", // Helleres Rot
    complement: "#2E7D32", // Grün für Balance
    text: "#212121", // Fast-Schwarz
    background: "#FFF5F5", // Sehr helles Rot
  },

  // Blau - Zweckbestimmt-autoritär - Struktur, Ordnung, Tradition
  {
    name: "Klare Struktur",
    primary: "#1565C0", // Tiefes Blau
    accent: "#64B5F6", // Helleres Blau
    complement: "#FFB74D", // Warmes Orange für Balance
    text: "#0D2137", // Sehr dunkles Blau
    background: "#F5F9FF", // Sehr helles Blau
  },

  // Orange - Leistungsorientiert-strategisch - Erfolg, Wettbewerb
  {
    name: "Energetischer Erfolg",
    primary: "#E65100", // Tiefes Orange
    accent: "#FF9800", // Helles Orange
    complement: "#29B6F6", // Frisches Blau für Kontrast
    text: "#33302E", // Dunkelbraun
    background: "#FFF8F0", // Sehr helles Orange
  },

  // Grün - Relativistisch-personenzentriert - Harmonie, Gemeinschaft
  {
    name: "Harmonische Gemeinschaft",
    primary: "#2E7D32", // Sattes Grün
    accent: "#66BB6A", // Helles Grün
    complement: "#F06292", // Sanftes Rosa für Balance
    text: "#1B2D1C", // Sehr dunkles Grün
    background: "#F1F8E9", // Sehr helles Grün
  },

  // Gelb - Systemisch-integrierend - Wissen, Flexibilität
  {
    name: "Integrierte Weisheit",
    primary: "#FBC02D", // Sattes Gelb
    accent: "#FFD54F", // Helles Gelb
    complement: "#5E35B1", // Tiefes Lila für Tiefe
    text: "#33302E", // Dunkelbraun
    background: "#FFFDE7", // Sehr helles Gelb
  },

  // Türkis - Holistisch-global - Ganzheitlichkeit, Nachhaltigkeit
  {
    name: "Ganzheitliche Perspektive",
    primary: "#00796B", // Tiefes Türkis
    accent: "#4DB6AC", // Helles Türkis
    complement: "#FF5252", // Koralle für Energie
    text: "#003833", // Sehr dunkles Türkis
    background: "#E0F2F1", // Sehr helles Türkis
  },
];

// Alle verfügbaren Farbpaletten
export const colorSchemes: ColorScheme[] = [maintenanceTheme, ...gravesThemes];

// Hilfsfunktion zum Finden eines Schemas nach Namen
export const findSchemeByName = (name: string): ColorScheme => {
  return colorSchemes.find((scheme) => scheme.name === name) || colorSchemes[0];
};
