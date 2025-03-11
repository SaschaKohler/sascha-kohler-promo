'use client';
import React from 'react';
import { useColorScheme } from '@/contexts/ColorSchemeContext';
import { ContextAwareColorSchemeSelector } from '@/components/common/theme';
import useElementVisibility from '@/hooks/useElementVisibility';
import { useScrollProgress } from '@/hooks/useScrollProgress';

interface LegalPageWrapperProps {
  children: React.ReactNode;
}

const LegalPageWrapper: React.FC<LegalPageWrapperProps> = ({ children }) => {
  const { colorScheme } = useColorScheme();
  const { scrollProgress } = useScrollProgress();
  const [footerRef, isFooterVisible] = useElementVisibility({ threshold: 0.2 });

  return (
    <div className="min-h-screen flex flex-col">
      {/* Color Scheme Selector */}
      <ContextAwareColorSchemeSelector isFooterVisible={isFooterVisible} />

      {/* Progress bar */}
      <div
        className="fixed top-0 left-0 h-0.5 z-50 transition-all duration-300"
        style={{
          width: `${scrollProgress}%`,
          background: `linear-gradient(to right, ${colorScheme.primary}, ${colorScheme.accent})`,
        }}
      />

      {/* Hauptinhalt */}
      {children}

      {/* Referenz für Footer-Sichtbarkeit */}
      <div ref={footerRef as React.RefObject<HTMLDivElement>} className="h-1 mt-auto"></div>
    </div>
  );
};

export default LegalPageWrapper;
