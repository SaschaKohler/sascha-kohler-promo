'use client';
import React, { useState, useEffect } from 'react';
import { Construction, ChevronDown, Mail, Calendar, Users, Search } from 'lucide-react';
import { useColorScheme } from '@/contexts/ColorSchemeContext';
import { ContextAwareColorSchemeSelector } from '@/components/common/theme';
import useScrollToSection from '@/hooks/useScrollToSection';
import { kongruenzSteps } from '@/data/klare-methode/kongruenzSteps';
import ThanksSection from '@/components/main-site/ThanksSection';
import MethodSteps from '@/components/klare-method/MethodStepsShadecn';
import DailyPrinciple from '@/components/klare-method/dailyPrinciple';
import useElementVisibility from '@/hooks/useElementVisibility';
import TargetPersonaIndicator from '@/components/klare-method/TargetPersonaIndicator';
import { LegalFooter } from '@/components/layout/footer';
import Image from 'next/legacy/image';

const LaunchAnnouncement: React.FC = () => {
  // Client-Side State - wird nur nach der Hydration gesetzt
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [email, setEmail] = useState('');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [hasMounted, setHasMounted] = useState(false);
  const [isEmailSubmitted, setIsEmailSubmitted] = useState(false);

  const [isHovered, setIsHovered] = useState(false);
  const { colorScheme } = useColorScheme();
  const scrollToSection = useScrollToSection();
  const [footerRef, isFooterVisible] = useElementVisibility<HTMLDivElement>({
    threshold: 0.2,
    rootMargin: '0px 0px 0px 0px',
  });
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  // Handler für die Sichtbarkeitsänderung der Sidebar
  const handleSidebarVisibilityChange = (isVisible: boolean) => {
    setIsSidebarVisible(isVisible);
  };

  // Stellen sicher, dass wir nur clientseitig ausgeführt werden
  useEffect(() => {
    setHasMounted(true);

    // Setze das Launch-Datum
    const launchDate = new Date();
    launchDate.setDate(launchDate.getDate() + 28);

    // Countdown-Timer aktualisieren
    const updateCountdown = () => {
      const now = new Date();
      const difference = launchDate.getTime() - now.getTime();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setCountdown({ days, hours, minutes, seconds });
      }
    };

    const interval = setInterval(updateCountdown, 1000);
    updateCountdown(); // Sofort aktualisieren

    return () => clearInterval(interval);
  }, []);

  // Handle scroll events to update progress
  useEffect(() => {
    if (!hasMounted) return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // Show scroll-to-top button after scrolling 500px
      setShowScrollTop(scrollPosition > 500);

      // Calculate scroll progress percentage
      const progress = (scrollPosition / (documentHeight - windowHeight)) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasMounted]);

  // Auto-rotate active step
  useEffect(() => {
    if (!hasMounted) return;

    const stepInterval = setInterval(() => {
      setActiveStepIndex(prevIndex => (prevIndex + 1) % kongruenzSteps.length);
    }, 7000);

    return () => {
      clearInterval(stepInterval);
    };
  }, [hasMounted]);

  // Handle email subscription
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would connect to a mailing list service
    setIsEmailSubmitted(true);
    // Simulated success message
    setTimeout(() => {
      setEmail('');
      setIsEmailSubmitted(false);
    }, 5000);
  };

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

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
            <div className="flex items-center space-x-3">
              <Construction size={20} />
              <span className="hidden sm:inline text-sm tracking-wide">WEBSITE IM AUFBAU</span>
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

      {/* Progress bar */}
      <div
        className="fixed top-0 left-0 h-0.5 z-50 transition-all duration-300"
        style={{
          width: `${scrollProgress}%`,
          background: `linear-gradient(to right, ${colorScheme.primary}, ${colorScheme.accent})`,
        }}
      />

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

          <div
            className="flex items-center space-x-3"
            style={{ color: `${colorScheme.primary}80` }}
          >
            <Construction size={20} />
            <span className="hidden sm:inline text-sm tracking-wide">WEBSITE IM AUFBAU</span>
          </div>
        </div>
      </nav>

      {/* Scroll to top button */}
      {showScrollTop && (
        <button
          className="fixed bottom-8 right-8 p-3 rounded-full z-40 shadow-lg transition-all duration-300 transform hover:scale-110 text-white"
          style={{ backgroundColor: colorScheme.primary }}
          onClick={scrollToTop}
        >
          <ChevronDown size={24} className="rotate-180" />
        </button>
      )}

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
                Demnächst verfügbar
              </span>
            </div>
            <h1
              className="text-4xl md:text-5xl font-bold mb-6"
              style={{ color: colorScheme.primary }}
            >
              Die KLARE Kongruenz-Methode
            </h1>
            <p className="text-xl mb-8 leading-relaxed text-gray-700 dark:text-gray-300">
              Entdecken Sie einen ganzheitlichen Weg zur persönlichen Kongruenz durch den
              5-Schritte-Prozess: <strong>K</strong>larheit, <strong>L</strong>ebendigkeit,
              <strong>A</strong>usrichtung, <strong>R</strong>ealisierung und <strong>E</strong>
              ntfaltung.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                className="px-6 py-3 rounded-lg font-medium transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-opacity-50 text-white"
                style={{
                  backgroundColor: colorScheme.primary,
                  boxShadow: `0 4px 14px 0 ${colorScheme.primary}40`,
                }}
                onClick={() => scrollToSection('launch-date')}
              >
                Launch-Datum
              </button>
              <button
                className="px-6 py-3 rounded-lg font-medium transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-opacity-50"
                style={{
                  backgroundColor: 'transparent',
                  border: `2px solid ${colorScheme.primary}`,
                  color: colorScheme.primary,
                }}
                onClick={() => scrollToSection('newsletter')}
              >
                Newsletter Anmeldung
              </button>
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
                  src="/images/me.jpeg"
                  alt="Sascha Kohler"
                  sizes="(max-width: 768px) 288px, 384px"
                  className="object-cover object-top transform transition-transform duration-500"
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

        {/* KLARE Method Overview */}
        <section className="py-12 md:py-20">
          <div className="text-center mb-12">
            <h2
              className="text-3xl md:text-4xl font-bold mb-6"
              style={{ color: colorScheme.primary }}
            >
              Die 5 Schritte der KLARE Methode
            </h2>
            <p className="text-lg max-w-3xl mx-auto text-gray-700 dark:text-gray-300">
              Ein strukturierter Prozess zur Erreichung vollständiger Kongruenz in allen
              Lebensbereichen
            </p>
          </div>

          <MethodSteps colorScheme={colorScheme} />

          <div className="mt-10">
            <DailyPrinciple colorScheme={colorScheme} />
          </div>
        </section>

        {/* Coming Soon Features */}
        <section className="py-12 md:py-20 bg-gray-50 dark:bg-gray-900 rounded-xl">
          <div className="text-center mb-12">
            <h2
              className="text-3xl md:text-4xl font-bold mb-6"
              style={{ color: colorScheme.primary }}
            >
              Was Sie erwarten können
            </h2>
            <p className="text-lg max-w-3xl mx-auto text-gray-700 dark:text-gray-300">
              Die vollständige Website wird folgende Inhalte und Tools bieten:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Feature 1 */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transform transition-all hover:scale-105">
              <div
                className="w-12 h-12 flex items-center justify-center rounded-full mb-4"
                style={{ backgroundColor: `${colorScheme.primary}15` }}
              >
                <Users size={24} style={{ color: colorScheme.primary }} />
              </div>
              <h3 className="text-xl font-semibold mb-2" style={{ color: colorScheme.primary }}>
                Interaktives Lebensrad
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Analysieren Sie Ihre Lebensbereiche und entdecken Sie Optimierungspotenziale mit
                unserem intuitiven Tool.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transform transition-all hover:scale-105">
              <div
                className="w-12 h-12 flex items-center justify-center rounded-full mb-4"
                style={{ backgroundColor: `${colorScheme.primary}15` }}
              >
                <Search size={24} style={{ color: colorScheme.primary }} />
              </div>
              <h3 className="text-xl font-semibold mb-2" style={{ color: colorScheme.primary }}>
                KLARE Selbstcheck
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Finden Sie heraus, wo Sie auf Ihrem Weg zur Kongruenz stehen und erhalten Sie
                personalisierte Empfehlungen.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transform transition-all hover:scale-105">
              <div
                className="w-12 h-12 flex items-center justify-center rounded-full mb-4"
                style={{ backgroundColor: `${colorScheme.primary}15` }}
              >
                <Calendar size={24} style={{ color: colorScheme.primary }} />
              </div>
              <h3 className="text-xl font-semibold mb-2" style={{ color: colorScheme.primary }}>
                Workshop-Termine
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Buchen Sie persönliche oder Online-Sessions, um mit der KLARE Methode Ihre Kongruenz
                zu stärken.
              </p>
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section id="newsletter" className="py-12 md:py-20">
          <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 p-8 md:p-10">
                <h3 className="text-2xl font-bold mb-4" style={{ color: colorScheme.primary }}>
                  Bleiben Sie informiert
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Melden Sie sich für unseren Newsletter an und erfahren Sie als Erste/r vom Launch
                  und erhalten Sie exklusive Inhalte.
                </p>

                <form onSubmit={handleSubscribe} className="space-y-4">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                    >
                      E-Mail-Adresse
                    </label>
                    <div className="mt-1 relative rounded-md shadow-sm">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Mail size={18} className="text-gray-400" />
                      </div>
                      <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-opacity-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                        style={
                          {
                            // focusOutline: 'none',
                            // focusRing: colorScheme.primary,
                          }
                        }
                        placeholder="ihre-email@beispiel.de"
                        required
                        disabled={isEmailSubmitted}
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 px-4 rounded-md font-medium transition-all focus:outline-none focus:ring-2 focus:ring-opacity-50 text-white"
                    style={{
                      backgroundColor: isEmailSubmitted ? '#10B981' : colorScheme.primary,
                      boxShadow: `0 4px 14px 0 ${isEmailSubmitted ? '#10B98140' : `${colorScheme.primary}40`}`,
                    }}
                    disabled={isEmailSubmitted}
                  >
                    {isEmailSubmitted ? 'Vielen Dank für Ihre Anmeldung!' : 'Anmelden'}
                  </button>

                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                    Wir respektieren Ihre Privatsphäre. Sie können sich jederzeit abmelden.
                  </p>
                </form>
              </div>

              <div
                className="md:w-1/2 bg-gradient-to-br flex items-center justify-center p-10"
                style={{
                  backgroundImage: `linear-gradient(135deg, ${colorScheme.primary}, ${colorScheme.accent})`,
                }}
              >
                <div className="text-center text-white">
                  <div className="text-5xl font-bold mb-4">JETZT</div>
                  <div className="text-2xl mb-6">mit Ihrer Transformation</div>
                  <div className="text-5xl font-bold">BEGINNEN</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Countdown */}
        <section id="launch-date" className="py-12 md:py-20">
          <div className="text-center mb-12">
            <h2
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ color: colorScheme.primary }}
            >
              Der Countdown läuft
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Unsere vollständige Website startet in:
            </p>
          </div>

          <div
            className="max-w-4xl mx-auto bg-gradient-to-r p-1 rounded-xl shadow-xl"
            style={{
              backgroundImage: `linear-gradient(90deg, ${colorScheme.primary}, ${colorScheme.accent})`,
            }}
          >
            <div className="bg-white dark:bg-gray-900 rounded-lg p-8 md:p-12">
              <div className="grid grid-cols-4 gap-4 md:gap-8 text-center">
                <div className="flex flex-col">
                  <div
                    className="text-3xl md:text-6xl font-bold mb-2"
                    style={{ color: colorScheme.primary }}
                  >
                    {countdown.days}
                  </div>
                  <div className="text-gray-600 dark:text-gray-400 text-sm md:text-lg">Tage</div>
                </div>
                <div className="flex flex-col">
                  <div
                    className="text-3xl md:text-6xl font-bold mb-2"
                    style={{ color: colorScheme.accent }}
                  >
                    {countdown.hours}
                  </div>
                  <div className="text-gray-600 dark:text-gray-400 text-sm md:text-lg">Stunden</div>
                </div>
                <div className="flex flex-col">
                  <div
                    className="text-3xl md:text-6xl font-bold mb-2"
                    style={{ color: colorScheme.primary }}
                  >
                    {countdown.minutes}
                  </div>
                  <div className="text-gray-600 dark:text-gray-400 text-sm md:text-lg">Minuten</div>
                </div>
                <div className="flex flex-col">
                  <div
                    className="text-3xl md:text-6xl font-bold mb-2"
                    style={{ color: colorScheme.accent }}
                  >
                    {countdown.seconds}
                  </div>
                  <div className="text-gray-600 dark:text-gray-400 text-sm md:text-lg">
                    Sekunden
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 dark:text-gray-400">
              Planen Sie Ihren Besuch und entdecken Sie, wie die KLARE Kongruenz-Methode Ihr Leben
              verändern kann.
            </p>
          </div>
        </section>
      </main>

      <ThanksSection
        colorScheme={colorScheme}
        onSidebarVisibilityChange={handleSidebarVisibilityChange}
      />

      {/* Target Persona Indicator */}
      <TargetPersonaIndicator
        colorScheme={colorScheme}
        isFooterVisible={isFooterVisible}
        isSidebarVisible={isSidebarVisible}
      />

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
      `}</style>
    </div>
  );
};

export default LaunchAnnouncement;
