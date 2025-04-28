'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useColorScheme } from '@/contexts/ColorSchemeContext';

const SiteNavigation: React.FC = () => {
  const { colorScheme } = useColorScheme();
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    // { name: 'Home', path: '/home' },
    { name: 'KLARE Methode', path: '/klare-methode' },
    // { name: 'Kongruenz Methode', path: '/kongruenz-methode' },
    { name: 'Lebensrad', path: '/lebensrad' },
    { name: 'Selbstcheck', path: '/klare-selbstcheck' },
  ];

  const legalItems = [
    { name: 'Impressum', path: '/impressum' },
    { name: 'Datenschutz', path: '/datenschutz' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white bg-opacity-95 shadow-sm z-40 transition-all duration-300">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-semibold" style={{ color: colorScheme.primary }}>
          <span style={{ color: colorScheme.accent }}>Sascha</span> Kohler
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item, index) => (
            <Link
              key={index}
              href={item.path}
              className="transition-all duration-300"
              style={{
                color: pathname === item.path ? colorScheme.accent : '#666',
                fontWeight: pathname === item.path ? '600' : '400',
              }}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-gray-700 p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <div className="w-6 h-5 flex flex-col justify-between">
            <span
              className="w-full h-0.5 transition-all duration-300 transform"
              style={{
                backgroundColor: colorScheme.primary,
                transform: mobileMenuOpen ? 'rotate(45deg) translate(2px, 9px)' : 'none',
              }}
            />
            <span
              className="w-full h-0.5 transition-all duration-300 opacity-100"
              style={{
                backgroundColor: colorScheme.primary,
                opacity: mobileMenuOpen ? 0 : 1,
              }}
            />
            <span
              className="w-full h-0.5 transition-all duration-300 transform"
              style={{
                backgroundColor: colorScheme.primary,
                transform: mobileMenuOpen ? 'rotate(-45deg) translate(2px, -9px)' : 'none',
              }}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white py-4 px-6 shadow-md">
          <div className="flex flex-col space-y-4">
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.path}
                className="py-2 transition-all duration-300 text-left"
                style={{
                  color: pathname === item.path ? colorScheme.accent : '#666',
                  fontWeight: pathname === item.path ? '600' : '400',
                }}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}

            <div className="border-t border-gray-100 my-2 pt-2">
              {legalItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.path}
                  className="py-2 transition-all duration-300 text-left text-sm text-gray-500 block"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default SiteNavigation;
