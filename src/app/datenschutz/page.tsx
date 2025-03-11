import type { Metadata } from 'next';
import Datenschutz from '@/components/legal/Datenschutz';
import LegalPageWrapper from '@/components/legal/LegalWrapper';

export const metadata: Metadata = {
  title: 'Datenschutzerklärung | Sascha Kohler',
  description:
    'Informationen zum Datenschutz und zur Verarbeitung personenbezogener Daten auf dieser Website.',
};

export default function DatenschutzPage() {
  return (
    <LegalPageWrapper>
      <Datenschutz />
    </LegalPageWrapper>
  );
}
