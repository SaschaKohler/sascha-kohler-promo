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
  name: "Elegantes Gold & Schwarz",
  primary: "#e6ca75", // Goldgelb wie im Logo
  accent: "#c4af64", // Dunkleres Gold für Akzente
  complement: "#c4af64", // Matching complement
  text: "#f0f0f0", // Helles Grau für Text
  background: "#1c1c1a", // Dunkler Hintergrund
};

// Weitere edle Farbschemata
export const luxuryThemes: ColorScheme[] = [
  // Original Farbschemata
  // {
  //   name: "Natürliche Harmonie",
  //   primary: "#2E7D32", // Waldgrün
  //   accent: "#81C784", // Helles Grün
  //   complement: "#FFB74D", // Warmes Orange
  //   text: "#263238", // Dunkelgrau
  //   background: "#F5F9F6", // Leichtes Minzgrün
  // },
  // {
  //   name: "Wachstum & Transformation",
  //   primary: "#00796B", // Smaragdgrün
  //   accent: "#4DB6AC", // Türkis
  //   complement: "#FF8A65", // Koralle
  //   text: "#37474F", // Dunkelgrau
  //   background: "#FAFAFA", // Offwhite
  // },
  // {
  //   name: "Lebendige Klarheit",
  //   primary: "#1565C0", // Tiefblau
  //   accent: "#64B5F6", // Hellblau
  //   complement: "#FFA726", // Sonniges Orange
  //   text: "#212121", // Fast-Schwarz
  //   background: "#F5F9FF", // Leichtes Hellblau
  // },
  {
    name: "Erdverbundenheit & Inspiration",
    primary: "#5D4037", // Erdbraun
    accent: "#8D6E63", // Warmes Braun
    complement: "#81C784", // Frisches Grün
    text: "#263238", // Dunkelgrau
    background: "#F9F5F0", // Cremeweiß
  },
  // {
  //   name: "Tiefe & Leichtigkeit",
  //   primary: "#5C6BC0", // Satter Indigo
  //   accent: "#9FA8DA", // Lavendel
  //   complement: "#FFD54F", // Goldgelb
  //   text: "#212121", // Fast-Schwarz
  //   background: "#F8F9FF", // Leichtes Blau
  // },
  {
    name: "Vertrauen & Wachstum",
    primary: "#00695C", // Tiefes Türkis
    accent: "#4DB6AC", // Helles Türkis
    complement: "#FF7043", // Helles Orange
    text: "#263238", // Dunkelgrau
    background: "#F7FDFB", // Minzweiß
  },

  // Neue noble Farbschemata
  {
    name: "Royales Purpur",
    primary: "#5E35B1", // Tiefes Purpur
    accent: "#9575CD", // Helles Lila
    complement: "#FFD54F", // Gold
    text: "#212121", // Fast-Schwarz
    background: "#F8F7FF", // Kaum sichtbares Lila
  },
  // {
  //   name: "Tiefsee Eleganz",
  //   primary: "#01579B", // Tiefes Blau
  //   accent: "#039BE5", // Mittleres Blau
  //   complement: "#FF6E40", // Koralle
  //   text: "#263238", // Dunkelgrau
  //   background: "#E1F5FE", // Sehr helles Blau
  // },
  // {
  //   name: "Mystisches Burgund",
  //   primary: "#880E4F", // Tiefes Burgunderrot
  //   accent: "#C2185B", // Helles Burgund
  //   complement: "#00BFA5", // Türkis
  //   text: "#212121", // Fast-Schwarz
  //   background: "#FCE4EC", // Sehr helles Rosa
  // },
  {
    name: "Harmonisches Salbei",
    primary: "#33691E", // Tiefes Salbeigrün
    accent: "#689F38", // Mittleres Grün
    complement: "#FFB300", // Amber
    text: "#212121", // Fast-Schwarz
    background: "#F1F8E9", // Sehr helles Grün
  },
  {
    name: "Klassisches Granat",
    primary: "#B71C1C", // Tiefes Rot
    accent: "#EF5350", // Helleres Rot
    complement: "#00BCD4", // Türkis
    text: "#212121", // Fast-Schwarz
    background: "#FFEBEE", // Sehr helles Rosa
  },
  {
    name: "Edle Bronze",
    primary: "#5D4037", // Bronze
    accent: "#8D6E63", // Helles Bronze
    complement: "#4CAF50", // Grün
    text: "#212121", // Fast-Schwarz
    background: "#EFEBE9", // Sehr helles Beige
  },
  {
    name: "Moderne Graphit",
    primary: "#455A64", // Graphit
    accent: "#78909C", // Helles Graphit
    complement: "#FFB300", // Amber
    text: "#212121", // Fast-Schwarz
    background: "#ECEFF1", // Sehr helles Blaugrau
  },
  {
    name: "Mondschein Silber",
    primary: "#9E9E9E", // Silber
    accent: "#BDBDBD", // Helles Silber
    complement: "#7986CB", // Lavendel
    text: "#212121", // Fast-Schwarz
    background: "#F5F5F5", // Sehr helles Grau
  },
];

// Alle verfügbaren Farbpaletten
export const colorSchemes: ColorScheme[] = [maintenanceTheme, ...luxuryThemes];

// Hilfsfunktion zum Finden eines Schemas nach Namen
export const findSchemeByName = (name: string): ColorScheme => {
  return colorSchemes.find((scheme) => scheme.name === name) || colorSchemes[0];
};
