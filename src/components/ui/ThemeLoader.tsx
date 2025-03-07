'use client';
import React from 'react';
import { useColorScheme } from '@/contexts/ColorSchemeContext';

interface ThemeLoaderProps {
  children: React.ReactNode;
}

const ThemeLoader: React.FC<ThemeLoaderProps> = ({ children }) => {
  const { isThemeLoaded, colorScheme } = useColorScheme();

  // Wir zeigen den Content sofort, aber mit Übergangsstilen
  return (
    <div
      className={`
        transition-opacity duration-300 ease-in-out 
        ${isThemeLoaded ? 'opacity-100' : 'opacity-0'}
      `}
      style={{
        transitionDelay: isThemeLoaded ? '100ms' : '0ms',
      }}
    >
      {children}
    </div>
  );
};

export default ThemeLoader;
