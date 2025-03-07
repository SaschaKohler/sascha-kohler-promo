import { Metadata, Viewport } from 'next';

export const viewport: Viewport = {
  themeColor: '#ffffff',
};

export const metadata: Metadata = {
  title: 'KLARE Kongruenz-Methode | Klarheit, Lebendigkeit, Ausrichtung, Realisierung, Entfaltung',
  description: 'Entdecken Sie die 5 Schritte der KLARE Kongruenz-Methode für ein harmonisches und authentisches Leben.',
};

export default function KongruenzMethodeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
