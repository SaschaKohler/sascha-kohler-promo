'use client';
import React from 'react';
import { useColorScheme } from '@/contexts/ColorSchemeContext';
import Link from 'next/link';
import { FileText, Shield, ExternalLink } from 'lucide-react';

// Impressum Komponente
const Impressum: React.FC = () => {
  const { colorScheme } = useColorScheme();

  return (
    <>
      {/* Header mit KLARE-Methode Buchstaben */}
      <header className="py-16 relative overflow-hidden">
        {/* Hintergrund mit Farbverlauf */}
        <div
          className="absolute inset-0 z-0"
          style={{
            background: `linear-gradient(135deg, ${colorScheme.primary}, ${colorScheme.accent})`,
          }}
        ></div>

        {/* KLARE Methode als dekorative Elemente im Hintergrund */}
        <div className="absolute inset-0 z-0 opacity-10 flex items-center justify-center overflow-hidden">
          <div className="flex space-x-6 sm:space-x-12 transform -rotate-12 scale-150">
            {['K', 'L', 'A', 'R', 'E'].map((letter, index) => (
              <div
                key={index}
                className="text-8xl sm:text-9xl font-bold text-white"
                style={{
                  textShadow: '0 4px 8px rgba(0,0,0,0.1)',
                }}
              >
                {letter}
              </div>
            ))}
          </div>
        </div>

        {/* Tatsächliche Überschrift mit verbesserter Lesbarkeit */}
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 relative">
            Impressum
            <div
              className="absolute bottom-0 left-0 h-1 w-20 mt-2"
              style={{ backgroundColor: 'white' }}
            ></div>
          </h1>

          <p className="max-w-3xl text-white/90 text-lg relative z-10">
            Gemäß § 5 ECG, § 25 MedienG und § 63 GewO - Gesetzlich erforderliche Angaben
          </p>
        </div>
      </header>

      {/* Hauptinhalt */}
      <main className="container mx-auto px-4 md:px-8 py-8 mb-16">
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-sm">
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4" style={{ color: colorScheme.primary }}>
              Angaben gemäß § 5 ECG
            </h2>
            <div className="space-y-3">
              <p className="font-medium">Sascha Kohler</p>
              <p>Furth 6{/* Bitte ersetzen Sie dies mit Ihrer tatsächlichen Adresse */}</p>
              <p>
                4311 Schwertberg
                {/* Bitte ersetzen Sie dies mit Ihrer tatsächlichen PLZ und Stadt */}
              </p>
              <p>Österreich</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4" style={{ color: colorScheme.primary }}>
              Kontakt
            </h2>
            <div className="space-y-2">
              <p>
                Telefon: +43 650 90 30 372{' '}
                {/* Bitte ersetzen Sie dies mit Ihrer tatsächlichen Telefonnummer */}
              </p>
              <p>
                E-Mail: office@sascha-kohler.at{' '}
                {/* Bitte ersetzen Sie dies mit Ihrer tatsächlichen E-Mail */}
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4" style={{ color: colorScheme.primary }}>
              Unternehmensdaten
            </h2>
            <div className="space-y-3">
              <p>Eingetragene Gewerbe:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>IT-Dienstleistung</li>
                <li>Werbeagentur</li>
              </ul>
              <p>GISA: 37168483,37168445</p>
              <p className="mt-4">
                Zusätzliche freie Gewerbe/neue Selbständige bzw. lfnd. Ausbildung:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Trainer & Speaker</li>
                <li>
                  Lebens- und Sozialberater (in Ausbildung unter Supervision){' '}
                  <a
                    href="https://www.rok-akademie.at"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center"
                    style={{
                      color: colorScheme.primary,
                      borderBottom: `1px solid ${colorScheme.primary}`,
                      transition: 'opacity 0.3s',
                    }}
                    onMouseOver={e => (e.currentTarget.style.opacity = '0.8')}
                    onMouseOut={e => (e.currentTarget.style.opacity = '1')}
                  >
                    ROK-Akademie in Wien <ExternalLink size={16} className="ml-1" />
                  </a>{' '}
                </li>
              </ul>
              <p className="mt-4">
                {/* Bitte ersetzen Sie dies mit Ihrer tatsächlichen UID-Nummer falls vorhanden */}
              </p>
              <p>Mitglied der WKO</p>
              <p>Berufsrecht: Gewerbeordnung: www.ris.bka.gv.at</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4" style={{ color: colorScheme.primary }}>
              Aufsichtsbehörde/Gewerbebehörde
            </h2>
            <p>
              Bezirkshauptmannschaft Perg{' '}
              {/* Bitte ersetzen Sie XX mit dem entsprechenden Bezirk */}
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4" style={{ color: colorScheme.primary }}>
              Verbraucherstreitbeilegung
            </h2>
            <p>
              Wir erkennen den Internet Ombudsmann als außergerichtliche Streitbeilegungsstelle an.
              Bei Beschwerden wenden Sie sich bitte an: kontakt@sascha-kohler.at oder an die
              Plattform zur Online-Streitbeilegung der Europäischen Kommission:
              <a
                href="https://ec.europa.eu/consumers/odr"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-1 underline"
                style={{ color: colorScheme.primary }}
              >
                https://ec.europa.eu/consumers/odr
              </a>
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4" style={{ color: colorScheme.primary }}>
              Urheberrecht
            </h2>
            <p className="mb-3">
              Die Inhalte dieser Website sind urheberrechtlich geschützt. Die Vervielfältigung,
              Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des
              Urheberrechts bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw.
              Erstellers.
            </p>
            <p>© {new Date().getFullYear()} Sascha Kohler. Alle Rechte vorbehalten.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4" style={{ color: colorScheme.primary }}>
              Haftungsausschluss
            </h2>
            <p className="mb-3">
              Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte
              externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich deren
              Betreiber verantwortlich.
            </p>
            <p>Alle Angaben sind ohne Gewähr.</p>
          </section>
        </div>
      </main>

      {/* Zurück-Link */}
      <div className="container mx-auto px-4 md:px-8 mb-16">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center font-medium transition-colors"
            style={{ color: colorScheme.primary }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2"
            >
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
            Zurück zur Startseite
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4 md:px-8 mt-auto">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              {/* Logo in Footer */}
              <div className="flex items-center mb-3">
                <div
                  className="h-8 w-8 rounded-full relative overflow-hidden flex items-center justify-center"
                  style={{
                    background: `linear-gradient(135deg, ${colorScheme.primary}, ${colorScheme.accent})`,
                  }}
                >
                  <span className="text-white font-bold text-sm">SK</span>
                  <div className="absolute bottom-0 w-full h-1/4 bg-white bg-opacity-20"></div>
                </div>
                <div className="ml-2 text-xl font-semibold">
                  <span style={{ color: colorScheme.accent }}>Sascha</span> Kohler
                </div>
              </div>
              <p className="text-gray-400 text-sm mb-1">Die KLARE-Methode</p>
              <div className="flex flex-wrap gap-2 mt-3">
                <span className="inline-block px-2 py-1 bg-gray-800 rounded-md text-xs text-gray-300">
                  LSB in A.u.SV.
                </span>
                <span className="inline-block px-2 py-1 bg-gray-800 rounded-md text-xs text-gray-300">
                  NLP-Master
                </span>
                <span className="inline-block px-2 py-1 bg-gray-800 rounded-md text-xs text-gray-300">
                  Speaker & Trainer
                </span>
              </div>
            </div>

            <div className="text-gray-400 text-sm text-center md:text-right">
              <div className="mb-2">
                © {new Date().getFullYear()} Sascha Kohler. Alle Rechte vorbehalten.
              </div>
              <div className="mb-2 font-medium text-gray-300">
                "Entfalten Sie sich selbst, statt sich immer nur zu optimieren"
              </div>
              <div className="text-xs text-gray-500 mb-2">
                Die KLARE-Methode | Vorträge | Workshops | Coaching
              </div>
              <div className="text-xs text-gray-500">
                <span className="mr-2">Design & Entwicklung: Sascha Kohler</span>
              </div>

              {/* Verbesserte rechtliche Links */}
              <div className="mt-4 flex flex-wrap justify-center md:justify-end gap-4">
                <Link
                  href="/impressum"
                  className="flex items-center px-3 py-1.5 rounded-md bg-gray-800 hover:bg-gray-700 transition-colors duration-300 text-sm group"
                >
                  <FileText
                    size={16}
                    className="mr-2 text-gray-400 group-hover:text-white transition-colors duration-300"
                  />
                  <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                    Impressum
                  </span>
                </Link>

                <Link
                  href="/datenschutz"
                  className="flex items-center px-3 py-1.5 rounded-md bg-gray-800 hover:bg-gray-700 transition-colors duration-300 text-sm group"
                >
                  <Shield
                    size={16}
                    className="mr-2 text-gray-400 group-hover:text-white transition-colors duration-300"
                  />
                  <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                    Datenschutz
                  </span>
                </Link>

                <a
                  href="https://skit.sascha-kohler.at"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-3 py-1.5 rounded-md bg-gray-800 hover:bg-gray-700 transition-colors duration-300 text-sm group"
                >
                  <ExternalLink
                    size={16}
                    className="mr-2 text-gray-400 group-hover:text-white transition-colors duration-300"
                  />
                  <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                    IT-Dienstleistungen
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Impressum;
