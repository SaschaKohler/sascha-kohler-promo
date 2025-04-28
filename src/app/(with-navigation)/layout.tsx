'use client';
import React from 'react';
import SiteNavigation from '@/components/layout/SiteNavigation';
import { ColorSchemeProvider, useColorScheme } from '@/contexts/ColorSchemeContext';
import Footer from '@/components/layout/Footer';
import LegalFooter from '@/components/layout/footer/LegalFooter';

export default function WithNavigationLayout({ children }: { children: React.ReactNode }) {
  const { colorScheme } = useColorScheme();
  return (
    <ColorSchemeProvider>
      <SiteNavigation />
      <main className="pt-20">{children}</main>
      <LegalFooter colorScheme={colorScheme} />
    </ColorSchemeProvider>
  );
}
