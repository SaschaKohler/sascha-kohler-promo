'use client';
import React, { MutableRefObject } from 'react';
import Link from 'next/link';
import { FileText, Shield, ExternalLink } from 'lucide-react';
import { ColorScheme } from '@/utils/colorSchemes';

interface LegalFooterProps {
  colorScheme: ColorScheme;
  footerRef?: MutableRefObject<HTMLDivElement | null>;
}

const LegalFooter: React.FC<LegalFooterProps> = ({ colorScheme, footerRef }) => {
  return (
    <footer className="bg-gray-900 text-white py-8 px-4 md:px-8 mt-auto" ref={footerRef}>
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
  );
};

export default LegalFooter;
