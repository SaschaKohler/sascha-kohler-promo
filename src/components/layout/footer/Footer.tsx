'use client';
import React from 'react';
import Link from 'next/link';
import { useColorScheme } from '@/contexts/ColorSchemeContext';

const Footer: React.FC = () => {
  const { colorScheme } = useColorScheme();

  return (
    <footer className="py-8 mt-auto" style={{ backgroundColor: `${colorScheme.background}70` }}>
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            {/* Logo in Footer */}
            <div className="flex items-center mb-3">
              <div
                className="h-8 w-8 rounded-full relative overflow-hidden flex items-center justify-center"
                style={{
                  backgroundColor: colorScheme.background,
                  border: `1px solid ${colorScheme.primary}`,
                }}
              >
                <span className="font-bold text-sm" style={{ color: colorScheme.accent }}>
                  SK
                </span>
                <div
                  className="absolute bottom-0 w-full h-1/4 bg-opacity-20"
                  style={{ backgroundColor: colorScheme.background }}
                ></div>
              </div>
              <div className="ml-2 text-xl font-semibold">
                <span style={{ color: colorScheme.text }}>Sascha</span>{' '}
                <span style={{ color: colorScheme.accent }}>Kohler</span>
              </div>
            </div>
            <p className="text-sm mb-1" style={{ color: colorScheme.text, opacity: 0.8 }}>
              Speaker & Trainer
            </p>
            <div className="flex flex-wrap gap-2 mt-3">
              <span
                className="inline-block px-2 py-1 rounded-md text-xs"
                style={{
                  backgroundColor: `${colorScheme.background}`,
                  color: colorScheme.text,
                  border: `1px solid ${colorScheme.primary}`,
                }}
              >
                LSB in A.u.SV
              </span>
              <span
                className="inline-block px-2 py-1 rounded-md text-xs"
                style={{
                  backgroundColor: `${colorScheme.background}`,
                  color: 'rgba(240, 240, 240, 0.6)',
                  border: `1px solid ${colorScheme.primary}`,
                }}
              >
                P-LM-TtT-NLP
              </span>
              <span
                className="inline-block px-2 py-1 rounded-md text-xs"
                style={{
                  backgroundColor: `${colorScheme.background}`,
                  color: 'rgba(240, 240, 240, 0.6)',
                  border: `1px solid ${colorScheme.primary}`,
                }}
              >
                MT ab Juli '25
              </span>
            </div>
            <div className="text-sm text-center md:text-right">
              <div className="mb-2">
                © {new Date().getFullYear()} Sascha Kohler. Alle Rechte vorbehalten.
              </div>
              <div className="text-xs">Vorträge | Seminare | Workshops | Coaching | Beratung</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
