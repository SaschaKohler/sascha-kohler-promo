'use client';
import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import {
  ColorScheme,
  maintenanceTheme,
  colorSchemes,
  findSchemeByName,
} from '@/utils/colorSchemes';

// Name des localStorage Keys
const COLOR_SCHEME_STORAGE_KEY = 'sascha-kohler-color-scheme';

// Kontext mit Defaultwerten
type ColorSchemeContextType = {
  colorScheme: ColorScheme;
  setColorScheme: (scheme: ColorScheme) => void;
  isThemeLoaded: boolean; // State für den Ladestatus
};

const ColorSchemeContext = createContext<ColorSchemeContextType>({
  colorScheme: maintenanceTheme,
  setColorScheme: () => {},
  isThemeLoaded: false,
});

// Hook für einfachen Zugriff
export const useColorScheme = () => useContext(ColorSchemeContext);

// Provider-Komponente
export const ColorSchemeProvider: React.FC<{
  children: ReactNode;
  scrollProgress?: number;
  initialColorScheme?: ColorScheme;
}> = ({ children, scrollProgress = 0 }) => {
  // Starte immer mit dem maintenanceTheme für SSR und ersten Client-Render
  const [colorScheme, setColorScheme] = useState<ColorScheme>(maintenanceTheme);
  const [isThemeLoaded, setIsThemeLoaded] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  // Effekt, der sicherstellt, dass wir beim ersten Client-Render gestartet sind
  useEffect(() => {
    setHasMounted(true);
  }, []);

  // Effekt, der nach der Hydration das Theme aus localStorage lädt
  useEffect(() => {
    if (hasMounted) {
      try {
        const savedSchemeName = localStorage.getItem(COLOR_SCHEME_STORAGE_KEY);
        if (savedSchemeName) {
          const savedScheme = findSchemeByName(savedSchemeName);
          if (savedScheme) {
            setColorScheme(savedScheme);
          }
        }
        // Egal ob ein Theme gefunden wurde oder nicht, wir markieren es als geladen
        setIsThemeLoaded(true);
      } catch (error) {
        console.error('Fehler beim Laden des Farbschemas aus localStorage:', error);
        setIsThemeLoaded(true); // Auch bei Fehlern markieren wir als geladen
      }
    }
  }, [hasMounted]);

  // Effekt zum Speichern des Themes bei Änderungen
  useEffect(() => {
    if (hasMounted && isThemeLoaded) {
      try {
        localStorage.setItem(COLOR_SCHEME_STORAGE_KEY, colorScheme.name);
      } catch (error) {
        console.error('Fehler beim Speichern des Farbschemas:', error);
      }
    }
  }, [colorScheme, hasMounted, isThemeLoaded]);

  // Rückgabe einer konstanten JSX-Struktur für den ersten Render (SSR und Hydration)
  if (!hasMounted) {
    return (
      <ColorSchemeContext.Provider
        value={{
          colorScheme: maintenanceTheme,
          setColorScheme: () => {},
          isThemeLoaded: false,
        }}
      >
        <div className="relative font-sans theme-transition">
          <div className="fixed top-0 left-0 h-1 z-50 transition-all duration-300" />
          {children}
        </div>
      </ColorSchemeContext.Provider>
    );
  }

  // Client-seitiges Rendering nach der Hydration
  return (
    <ColorSchemeContext.Provider value={{ colorScheme, setColorScheme, isThemeLoaded }}>
      <div
        className="relative font-sans theme-transition"
        style={{
          color: colorScheme.text,
          background:
            colorScheme.name === 'Elegantes Gold & Schwarz'
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
