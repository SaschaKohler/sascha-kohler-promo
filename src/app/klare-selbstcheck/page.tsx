import React from 'react';
import { KlareSelbstCheck } from '@/components/selbstcheck';
import { Viewport } from 'next';

export const viewport: Viewport = {
  themeColor: '#ffffff',
};

export const metadata = {
  title: 'KLARE Kongruenz-Methode Selbstcheck',
  description:
    'Entdecken Sie Ihren aktuellen Stand der Kongruenz mit dem KLARE Kongruenz-Methode Selbstcheck',
};

export default function KlareSelbstCheckPage() {
  return (
    <main className="flex min-h-screen flex-col items-center p-4 sm:p-6 md:p-8 lg:p-12">
      <div className="w-full max-w-4xl mx-auto">
        <KlareSelbstCheck />
      </div>
    </main>
  );
}
