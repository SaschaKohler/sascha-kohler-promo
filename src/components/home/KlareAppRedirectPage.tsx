'use client';
import React, { useState, useEffect } from 'react';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import { useColorScheme } from '@/contexts/ColorSchemeContext';
import { ContextAwareColorSchemeSelector } from '@/components/common/theme';
import LegalFooter from '@/components/layout/footer/LegalFooter';
import useElementVisibility from '@/hooks/useElementVisibility';
import Image from 'next/legacy/image';

const KlareAppRedirectPage: React.FC = () => {
  const [hasMounted, setHasMounted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const { colorScheme } = useColorScheme();
  const [footerRef, isFooterVisible] = useElementVisibility<HTMLDivElement>({
    threshold: 0.2,
    rootMargin: '0px 0px 0px 0px',
  });

  useEffect(() => {
    setHasMounted(true);
  }, []);

  // Während SSR oder vor der Hydration
  if (!hasMounted) {
    return (
      <div className="min-h-screen flex flex-col">
        {/* Minimale Darstellung für SSR und erste Hydration */}
        <nav className="fixed top-0 left-0 w-full bg-opacity-90 border-b z-40 transition-all duration-300">
          <div className="container mx-auto px-6 py-4 flex justify-between items-center">
            <div className="flex items-center">
              <div className="text-3xl tracking-wider font-light">SASCHA KOHLER</div>
            </div>
          </div>
        </nav>
        <main className="flex-grow container mx-auto px-4 md:px-8 pt-24 pb-12 flex flex-col">
          <div className="h-64 flex items-center justify-center">
            <div className="text-center">
              <div className="animate-pulse mb-4">Website wird geladen...</div>
            </div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Color Scheme Selector */}
      <ContextAwareColorSchemeSelector isFooterVisible={isFooterVisible} />

      {/* Header with Logo */}
      <nav
        className="fixed top-0 left-0 w-full bg-opacity-90 border-b z-40 transition-all duration-300"
        style={{
          backgroundColor: colorScheme.background,
          borderColor: `${colorScheme.primary}20`,
        }}
      >
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center">
            {/* Stylized Text Logo */}
            <div
              className="text-3xl tracking-wider font-light"
              style={{ color: colorScheme.primary }}
            >
              SASCH
              <span
                className="relative inline-block transform translate-y-[-3px] font-normal"
                style={{ color: colorScheme.complement }}
              >
                A
              </span>
              KOHLER
            </div>
          </div>
        </div>
      </nav>

      {/* Main content */}
      <main className="flex-grow container mx-auto px-4 md:px-8 pt-24 pb-12 flex flex-col">
        {/* Hero Section */}
        <section className="py-12 md:py-20 flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-8 lg:mb-0 lg:pr-12">
            <div className="mb-4 inline-block" style={{ color: colorScheme.primary }}>
              <span
                className="text-sm uppercase tracking-wider font-medium px-3 py-1 rounded-full"
                style={{ backgroundColor: `${colorScheme.primary}15` }}
              >
                Verfügbar ab Herbst 2025
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 flex flex-col sm:flex-row items-center">
              <div className="flex items-center mb-2 sm:mb-0">
                <div className="flex space-x-1">
                  <div className="w-10 h-10 md:w-12 md:h-12">
                    <img src="/klare-svg/K-circle.svg" alt="K" className="w-full h-full" />
                  </div>
                  <div className="w-10 h-10 md:w-12 md:h-12">
                    <img src="/klare-svg/L-circle.svg" alt="L" className="w-full h-full" />
                  </div>
                  <div className="w-10 h-10 md:w-12 md:h-12">
                    <img src="/klare-svg/A-circle.svg" alt="A" className="w-full h-full" />
                  </div>
                  <div className="w-10 h-10 md:w-12 md:h-12">
                    <img src="/klare-svg/R-circle.svg" alt="R" className="w-full h-full" />
                  </div>
                  <div className="w-10 h-10 md:w-12 md:h-12">
                    <img src="/klare-svg/E-circle.svg" alt="E" className="w-full h-full" />
                  </div>
                </div>
                <span className="ml-2 md:ml-3" style={{ color: colorScheme.primary }}>Methode</span>
              </div>
            </h1>
            <p className="text-xl mb-8 leading-relaxed text-gray-700 dark:text-gray-300">
              Entdecken Sie einen ganzheitlichen Weg zur persönlichen Kongruenz durch den
              5-Schritte-Prozess: <strong>K</strong>larheit, <strong>L</strong>ebendigkeit,{' '}
              <strong>A</strong>usrichtung, <strong>R</strong>ealisierung und <strong>E</strong>
              ntfaltung. Die vollständige App wird im Herbst 2025 verfügbar sein.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://klare-methode.app"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-lg font-medium transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-opacity-50 text-white flex items-center justify-center"
                style={{
                  backgroundColor: colorScheme.primary,
                  boxShadow: `0 4px 14px 0 ${colorScheme.primary}40`,
                }}
              >
                Zur KLARE App Promo-Site
                <ExternalLink className="ml-2" size={18} />
              </a>
            </div>
          </div>
          <div className="md:w-2/5 mt-8 md:mt-0">
            <div
              className="relative transition-all duration-500"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              style={{
                transform: isHovered
                  ? 'perspective(1000px) rotateY(-15deg) rotateX(10deg)'
                  : 'perspective(1000px) rotateY(0) rotateX(0)',
                transition: 'transform 0.5s ease',
              }}
            >
              <div
                className="w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 shadow-xl mx-auto relative"
                style={{
                  borderColor: colorScheme.accent,
                  boxShadow: isHovered
                    ? `0 25px 50px -12px ${colorScheme.primary}50`
                    : `0 15px 30px -5px ${colorScheme.primary}30`,
                }}
              >
                <Image
                  src="/images/sascha.png"
                  alt="Sascha Kohler"
                  sizes="(max-width: 768px) 288px, 384px"
                  className="object-cover object-center transform transition-transform duration-500"
                  width="384"
                  height="384"
                  style={{
                    transform: isHovered ? 'scale(1.05)' : 'scale(1)',
                  }}
                  priority
                />
                {/* Hero image shine effect */}
                <div
                  className="absolute inset-0 bg-gradient-to-tr from-transparent via-white to-transparent opacity-0 transition-opacity duration-500"
                  style={{
                    opacity: isHovered ? 0.2 : 0,
                    transform: 'rotate(45deg)',
                    backgroundSize: '200% 200%',
                    animation: isHovered ? 'shimmer 1.5s infinite' : 'none',
                  }}
                />
              </div>
              <div
                className="absolute -bottom-4 -right-2 bg-white p-4 rounded-lg shadow-lg transform transition-transform duration-500"
                style={{
                  transform: isHovered ? 'translateY(-5px) scale(1.05)' : 'translateY(0) scale(1)',
                  boxShadow: isHovered
                    ? `0 10px 25px -5px ${colorScheme.primary}40`
                    : `0 4px 6px -1px ${colorScheme.primary}20`,
                }}
              >
                <p className="italic text-lg" style={{ color: colorScheme.primary }}>
                  Sascha Kohler
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* App Info Section */}
        <section className="py-12 md:py-20 bg-gray-50 dark:bg-gray-900 rounded-xl">
          <div className="text-center mb-12">
            <h2
              className="text-3xl md:text-4xl font-bold mb-6 flex items-center justify-center"
            >
              <div className="flex items-center">
                <div className="flex space-x-1">
                  <div className="w-8 h-8 md:w-10 md:h-10">
                    <img src="/klare-svg/K-circle.svg" alt="K" className="w-full h-full" />
                  </div>
                  <div className="w-8 h-8 md:w-10 md:h-10">
                    <img src="/klare-svg/L-circle.svg" alt="L" className="w-full h-full" />
                  </div>
                  <div className="w-8 h-8 md:w-10 md:h-10">
                    <img src="/klare-svg/A-circle.svg" alt="A" className="w-full h-full" />
                  </div>
                  <div className="w-8 h-8 md:w-10 md:h-10">
                    <img src="/klare-svg/R-circle.svg" alt="R" className="w-full h-full" />
                  </div>
                  <div className="w-8 h-8 md:w-10 md:h-10">
                    <img src="/klare-svg/E-circle.svg" alt="E" className="w-full h-full" />
                  </div>
                </div>
                <span className="ml-2 md:ml-3" style={{ color: colorScheme.primary }}>Methode App - Coming Soon</span>
              </div>
            </h2>
            <p className="text-lg max-w-3xl mx-auto text-gray-700 dark:text-gray-300">
              Besuchen Sie unsere Promo-Site, um mehr über die KLARE Methode zu erfahren und die Entwicklung unserer App zu verfolgen:
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8">
                <h3 className="text-2xl font-bold mb-4 flex items-center" style={{ color: colorScheme.primary }}>
                  <div className="flex space-x-0.5 mr-2">
                    <div className="w-6 h-6">
                      <img src="/klare-svg/K-circle.svg" alt="K" className="w-full h-full" />
                    </div>
                    <div className="w-6 h-6">
                      <img src="/klare-svg/L-circle.svg" alt="L" className="w-full h-full" />
                    </div>
                    <div className="w-6 h-6">
                      <img src="/klare-svg/A-circle.svg" alt="A" className="w-full h-full" />
                    </div>
                    <div className="w-6 h-6">
                      <img src="/klare-svg/R-circle.svg" alt="R" className="w-full h-full" />
                    </div>
                    <div className="w-6 h-6">
                      <img src="/klare-svg/E-circle.svg" alt="E" className="w-full h-full" />
                    </div>
                  </div>
                  <span>Methode Vorschau</span>
                </h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <div
                      className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mr-2 mt-1"
                      style={{ backgroundColor: `${colorScheme.primary}15` }}
                    >
                      <div
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: colorScheme.primary }}
                      ></div>
                    </div>
                    <span>Verfolgen Sie die Entwicklung unserer App auf der Promo-Site</span>
                  </li>
                  <li className="flex items-start">
                    <div
                      className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mr-2 mt-1"
                      style={{ backgroundColor: `${colorScheme.primary}15` }}
                    >
                      <div
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: colorScheme.primary }}
                      ></div>
                    </div>
                    <span>Erhalten Sie exklusive Einblicke in das Konzept der KLARE-Methode</span>
                  </li>
                  <li className="flex items-start">
                    <div
                      className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mr-2 mt-1"
                      style={{ backgroundColor: `${colorScheme.primary}15` }}
                    >
                      <div
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: colorScheme.primary }}
                      ></div>
                    </div>
                    <span>Launch der vollständigen App im Herbst 2025</span>
                  </li>
                </ul>
                <a
                  href="https://klare-methode.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 rounded-lg font-medium transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-opacity-50 text-white"
                  style={{
                    backgroundColor: colorScheme.primary,
                    boxShadow: `0 4px 14px 0 ${colorScheme.primary}40`,
                  }}
                >
                  Zur Promo-Website
                  <ArrowUpRight className="ml-2" size={18} />
                </a>
              </div>
              <div className="md:w-1/2 flex justify-center">
                <div className="flex justify-center space-x-2 sm:space-x-4">
                  <div className="relative transform transition-transform hover:scale-105 duration-300">
                    <div
                      className="absolute -inset-0.5 rounded-xl blur opacity-30"
                      style={{
                        background: `linear-gradient(45deg, ${colorScheme.primary}, ${colorScheme.accent})`,
                      }}
                    ></div>
                    <div className="relative bg-white dark:bg-gray-800 p-1 rounded-xl">
                      <a
                        href="https://klare-methode.app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block overflow-hidden rounded-lg"
                      >
                        <Image
                          src="/images/app-screenshots/home-dashboard.png"
                          alt="KLARE App Dashboard"
                          width={100}
                          height={200}
                          className="w-auto h-auto rounded-lg"
                          priority
                        />
                      </a>
                    </div>
                  </div>
                  <div className="relative transform transition-transform hover:scale-105 duration-300">
                    <div
                      className="absolute -inset-0.5 rounded-xl blur opacity-30"
                      style={{
                        background: `linear-gradient(45deg, ${colorScheme.primary}, ${colorScheme.accent})`,
                      }}
                    ></div>
                    <div className="relative bg-white dark:bg-gray-800 p-1 rounded-xl">
                      <a
                        href="https://klare-methode.app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block overflow-hidden rounded-lg"
                      >
                        <Image
                          src="/images/app-screenshots/life-wheel.png"
                          alt="KLARE App Lebensrad"
                          width={100}
                          height={200}
                          className="w-auto h-auto rounded-lg"
                          priority
                        />
                      </a>
                    </div>
                  </div>
                  <div className="relative transform transition-transform hover:scale-105 duration-300">
                    <div
                      className="absolute -inset-0.5 rounded-xl blur opacity-30"
                      style={{
                        background: `linear-gradient(45deg, ${colorScheme.primary}, ${colorScheme.accent})`,
                      }}
                    ></div>
                    <div className="relative bg-white dark:bg-gray-800 p-1 rounded-xl">
                      <a
                        href="https://klare-methode.app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block overflow-hidden rounded-lg"
                      >
                        <Image
                          src="/images/app-screenshots/klare-k-module.png"
                          alt="KLARE App Module"
                          width={100}
                          height={200}
                          className="w-auto h-auto rounded-lg"
                          priority
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <LegalFooter colorScheme={colorScheme} footerRef={footerRef} />

      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
          100% {
            transform: translateY(0px) rotate(0deg);
          }
        }

        .animate-float {
          animation: float 15s ease-in-out infinite;
        }

        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }
      `}</style>
    </div>
  );
};

export default KlareAppRedirectPage;
