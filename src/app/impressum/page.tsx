import type { Metadata } from 'next';
import Impressum from '@/components/legal/Impressum';
import LegalPageWrapper from '@/components/legal/LegalWrapper';

export const metadata: Metadata = {
  title: 'Impressum | Sascha Kohler',
  description:
    'Gesetzliche Informationen und Kontaktdaten zu Sascha Kohler und seinen Dienstleistungen.',
  robots: {
    index: true,
    follow: true,
  },
};

export default function ImpressumPage() {
  return (
    <LegalPageWrapper>
      <Impressum />
    </LegalPageWrapper>
  );
}
