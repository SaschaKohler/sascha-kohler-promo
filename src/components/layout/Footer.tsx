'use client';
import React from 'react';
import Link from 'next/link';
import { useColorScheme } from '@/contexts/ColorSchemeContext';

const Footer: React.FC = () => {
  const { colorScheme } = useColorScheme();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 py-12 mt-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="mb-8 md:mb-0">
            <h3 className="text-xl font-semibold mb-4" style={{ color: colorScheme.primary }}>
              Sascha Kohler
            </h3>
            <p className="text-gray-600 max-w-md">
              Lebens- und Sozialberater (i.A.u.SV), NLP-Praktiker & Trainer, Entwickler der KLARE-Methode für persönliche Transformation.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-12 gap-y-6">
            <div>
              <h4 className="font-medium mb-3" style={{ color: colorScheme.primary }}>Angebote</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/klare-methode" className="text-gray-600 hover:text-gray-900">
                    KLARE-Methode
                  </Link>
                </li>
                <li>
                  <Link href="/kongruenz-methode" className="text-gray-600 hover:text-gray-900">
                    Kongruenz-Methode
                  </Link>
                </li>
                <li>
                  <Link href="/lebensrad" className="text-gray-600 hover:text-gray-900">
                    Lebensrad
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-3" style={{ color: colorScheme.primary }}>Rechtliches</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/impressum" className="text-gray-600 hover:text-gray-900">
                    Impressum
                  </Link>
                </li>
                <li>
                  <Link href="/datenschutz" className="text-gray-600 hover:text-gray-900">
                    Datenschutz
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {currentYear} Sascha Kohler. Alle Rechte vorbehalten.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="https://www.linkedin.com/in/sascha-kohler/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700">
              LinkedIn
            </a>
            <a href="https://www.xing.com/profile/Sascha_Kohler/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700">
              Xing
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
