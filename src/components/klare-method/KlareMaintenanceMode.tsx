'use client';
import React from 'react';
import { ColorSchemeProvider } from '@/contexts/ColorSchemeContext';
import { useScrollProgress } from '@/hooks/useScrollProgress';
import KlareMaintenanceModeContent from './KlareMaintenanceContent';
import { findSchemeByName, maintenanceTheme } from '@/utils/colorSchemes';

// Konstante für den localStorage Schlüssel
const COLOR_SCHEME_STORAGE_KEY = 'sascha-kohler-color-scheme';

// Hilfsfunktion zum Abrufen des initialen Themes (Server-Side kompatibel)
const getInitialColorScheme = () => {
  if (typeof window === 'undefined') return maintenanceTheme;

  try {
    const savedSchemeName = localStorage.getItem(COLOR_SCHEME_STORAGE_KEY);
    if (savedSchemeName) {
      const savedScheme = findSchemeByName(savedSchemeName);
      if (savedScheme) return savedScheme;
    }
  } catch (error) {
    console.error('Fehler beim Laden des initialen Farbschemas:', error);
  }

  return maintenanceTheme;
};

const KlareMaintenanceMode: React.FC = () => {
  const { scrollProgress } = useScrollProgress();

  // Versuche, das gespeicherte Theme als initiales Theme zu verwenden
  const initialColorScheme = getInitialColorScheme();

  return (
    <ColorSchemeProvider scrollProgress={scrollProgress} initialColorScheme={initialColorScheme}>
      <KlareMaintenanceModeContent />
    </ColorSchemeProvider>
  );
};

export default KlareMaintenanceMode;
