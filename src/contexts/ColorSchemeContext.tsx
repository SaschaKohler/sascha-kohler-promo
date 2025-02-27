"use client";
import React, { createContext, useState, useContext, ReactNode } from 'react';
import { ColorScheme, maintenanceTheme, colorSchemes } from '@/utils/colorSchemes';

// Kontext mit Defaultwerten
type ColorSchemeContextType = {
  colorScheme: ColorScheme;
  setColorScheme: (scheme: ColorScheme) => void;
};

const ColorSchemeContext = createContext<ColorSchemeContextType>({
  colorScheme: maintenanceTheme, // Verwende das Wartungsmodus-Farbschema als Standard
  setColorScheme: () => {},
});

// Hook für einfachen Zugriff
export const useColorScheme = () => useContext(ColorSchemeContext);

// Provider-Komponente
export const ColorSchemeProvider: React.FC<{
  children: ReactNode;
  scrollProgress?: number;
  initialColorScheme?: ColorScheme; // Optional: Erlaube die Übergabe eines initialen Farbschemas
}> = ({ 
  children, 
  scrollProgress = 0, 
  initialColorScheme = maintenanceTheme // Standard: Wartungsmodus-Farbschema
}) => {
  const [colorScheme, setColorScheme] = useState<ColorScheme>(initialColorScheme);
  
  return (
    <ColorSchemeContext.Provider value={{ colorScheme, setColorScheme }}>
      <div
        className="relative font-sans"
        style={{
          color: colorScheme.text,
          background: colorScheme.name === "Elegantes Gold & Schwarz" 
            ? `radial-gradient(circle at top right, #272725, ${colorScheme.background} 70%)`
            : `linear-gradient(to bottom, white, ${colorScheme.background})`,
        }}
      >
        {/* Progress bar */}
        <div
          className="fixed top-0 left-0 h-1 z-50 transition-all duration-300"
          style={{
            width: `${scrollProgress}%`,
            background: `linear-gradient(to right, ${colorScheme.primary}, ${colorScheme.accent})`,
          }}
        />
        
        {children}
      </div>
    </ColorSchemeContext.Provider>
  );
};
