'use client';
import KongruenzIntegration from '@/components/kongruenz-methode/KongruenzIntegration';
import { ColorSchemeProvider, useColorScheme } from '@/contexts/ColorSchemeContext';

export default function KongruenzMethodePage() {
  const { colorScheme } = useColorScheme();
  return <KongruenzIntegration colorScheme={colorScheme} />;
}
