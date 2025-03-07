import React from 'react';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';
import { Viewport } from 'next';

export const viewport: Viewport = {
  themeColor: '#ffffff',
};

export const metadata = {
  title: 'Seite nicht gefunden | KLARE-Methode',
  description: 'Die gesuchte Seite konnte nicht gefunden werden.',
};

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center">
      <div className="max-w-md">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-4">Seite nicht gefunden</h2>
        <p className="mb-8 text-gray-600">
          Die von Ihnen gesuchte Seite existiert nicht oder wurde verschoben.
        </p>
        <Link href="/" className="inline-flex items-center text-indigo-600 hover:text-indigo-800">
          <ChevronLeft size={16} className="mr-1" />
          Zurück zur Startseite
        </Link>
      </div>
    </div>
  );
}
