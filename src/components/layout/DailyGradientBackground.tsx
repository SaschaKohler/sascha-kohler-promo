'use client';
// src/components/layout/DailyGradientBackground.tsx
import React, { useEffect, useState } from 'react';
import { getDailyGradient, DailyGradient } from '@/utils/DailyGradientUtils';
import { useColorScheme } from '@/contexts/ColorSchemeContext';

interface DailyGradientBackgroundProps {
  children: React.ReactNode;
  showPrinciple?: boolean;
}

export default function DailyGradientBackground({
  children,
  showPrinciple = true,
}: DailyGradientBackgroundProps) {
  const [dailyGradient, setDailyGradient] = useState<DailyGradient | null>(null);
  const [hasMounted, setHasMounted] = useState(false);
  const { colorScheme } = useColorScheme();

  useEffect(() => {
    setHasMounted(true);
    setDailyGradient(getDailyGradient());
  }, []);

  // Falls noch nicht client-seitig gerendert, gib einen einfachen Container zurück
  if (!hasMounted || !dailyGradient) {
    return <div className="min-h-screen">{children}</div>;
  }

  return (
    <div
      className={`${dailyGradient.cssClass} daily-gradient-container`}
      style={
        {
          // Wir können hier benutzerdefinierte CSS-Variablen aus dem colorScheme verwenden,
          // die dann in unseren Gradienten eingesetzt werden
          '--color-primary': colorScheme.primary,
          '--color-accent': colorScheme.accent,
          '--color-background': colorScheme.background,
        } as React.CSSProperties
      }
    >
      {showPrinciple && (
        <div className="container mx-auto pt-24 pb-8 px-4">
          <div className="daily-principle-card">
            <h3 className="text-xl font-semibold mb-2" style={{ color: colorScheme.primary }}>
              Tägliches Prinzip: {dailyGradient.focus}
            </h3>
            <p className="text-gray-700 italic">&quot;{dailyGradient.principle}&quot;</p>
            <div className="mt-2 flex justify-between items-center">
              <span className="text-sm font-medium" style={{ color: colorScheme.primary }}>
                {new Date().toLocaleDateString('de-DE', {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </span>
              <span className="text-sm text-gray-500">{dailyGradient.name}</span>
            </div>
          </div>
        </div>
      )}

      {children}
    </div>
  );
}
