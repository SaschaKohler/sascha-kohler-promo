'use client';
import KlareMethodeShowcase from '@/components/klare-methode/KlareMethodeShowcase';
import { useColorScheme } from '@/contexts/ColorSchemeContext';

export default function KlareMethodePage() {
  const { colorScheme } = useColorScheme();
  return <KlareMethodeShowcase colorScheme={colorScheme} />;
}
