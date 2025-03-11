'use client';
import React, { useState, useEffect } from 'react';
import { Construction, ChevronDown, Link } from 'lucide-react';
import { useColorScheme } from '@/contexts/ColorSchemeContext';
import { ContextAwareColorSchemeSelector } from '@/components/common/theme';
import useScrollToSection from '@/hooks/useScrollToSection';
import { inkongruenzTypen } from '@/data/inkongruenzTypen';
import { kongruenzSteps } from '@/data/klare-methode/kongruenzSteps';
import ThanksSection from '@/components/main-site/ThanksSection';
import MethodSteps from '@/components/klare-method/MethodStepsShadecn';
import DailyPrinciple from '@/components/klare-method/dailyPrinciple';
import useElementVisibility from '@/hooks/useElementVisibility';
import TargetPersonaIndicator from '@/components/klare-method/TargetPersonaIndicator';
import TeaserSection from '../sections/TeaserSection';
import InkongruenzTypenSection from '../sections/InkongruenzTypenSection';
import WhyKongruenzSection from '../sections/WhyKongruenzSection';
import NaturalResilienceSection from '../sections/NaturalResilienceSection';
import FeatureTeaserSection from '../sections/FeatureTeaserSection';
import NewsletterSignup from '@/components/klare-method/NewsletterSignup';
import { LegalFooter } from '@/components/layout/footer';

const KlareMaintenanceModeContent: React.FC = () => {
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
  const [activeInkongruenzIndex, setActiveInkongruenzIndex] = useState(0);
  const [activePathwayIndex, setActivePathwayIndex] = useState(0);
  const [hasMounted, setHasMounted] = useState(false);

  const { colorScheme } = useColorScheme();
  const scrollToSection = useScrollToSection();
  const [footerRef, isFooterVisible] = useElementVisibility<HTMLDivElement>({
    threshold: 0.2, // Trigger when 20% of the footer is visible
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

  // Auto-rotate active step and inkongruenz type
  useEffect(() => {
    if (!hasMounted) return;

    const stepInterval = setInterval(() => {
      setActiveStepIndex(prevIndex => (prevIndex + 1) % kongruenzSteps.length);
    }, 7000);

    const inkongruenzInterval = setInterval(() => {
      setActiveInkongruenzIndex(prevIndex => (prevIndex + 1) % inkongruenzTypen.length);
    }, 7000);

    return () => {
      clearInterval(stepInterval);
      clearInterval(inkongruenzInterval);
    };
  }, [hasMounted]);

  // Handle email subscription
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would connect to a mailing list service
    alert(`Danke! ${email} wurde für Updates registriert.`);
    setEmail('');
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
        {/* Hero section */}
        <TeaserSection colorScheme={colorScheme} />
        {/* Inkongruenz Typen */}
        <InkongruenzTypenSection colorScheme={colorScheme} />
        {/* KLARE Kongruenz-Methode Preview */}
        <MethodSteps colorScheme={colorScheme} />
        <section className="py-12">
          <DailyPrinciple colorScheme={colorScheme} />
        </section>
        {/* Why Kongruenz Instead of Optimization */}
        <WhyKongruenzSection colorScheme={colorScheme} />

        {/* Natural Resilience Section */}
        {/* <NaturalResilienceSection colorScheme={colorScheme} /> */}

        {/* Feature teasers */}
        <FeatureTeaserSection colorScheme={colorScheme} />

        {/* Newsletter signup */}
        <NewsletterSignup colorScheme={colorScheme} />

        {/* Countdown */}
        <section id="launch-date" className="py-12">
          <div
            className="bg-white rounded-lg shadow-lg p-8 mb-16 max-w-3xl mx-auto"
            style={{
              borderLeft: `4px solid ${colorScheme.primary}`,
            }}
          >
            <h3
              className="text-2xl font-semibold mb-8 text-center"
              style={{ color: colorScheme.primary }}
            >
              Launch in
            </h3>
            <div className="grid grid-cols-4 gap-4 text-center">
              <div className="flex flex-col">
                <div
                  className="text-3xl md:text-5xl font-bold mb-2"
                  style={{ color: colorScheme.primary }}
                >
                  {countdown.days}
                </div>
                <div className="text-gray-600 text-sm md:text-base">Tage</div>
              </div>
              <div className="flex flex-col">
                <div
                  className="text-3xl md:text-5xl font-bold mb-2"
                  style={{ color: colorScheme.accent }}
                >
                  {countdown.hours}
                </div>
                <div className="text-gray-600 text-sm md:text-base">Stunden</div>
              </div>
              <div className="flex flex-col">
                <div
                  className="text-3xl md:text-5xl font-bold mb-2"
                  style={{ color: colorScheme.primary }}
                >
                  {countdown.minutes}
                </div>
                <div className="text-gray-600 text-sm md:text-base">Minuten</div>
              </div>
              <div className="flex flex-col">
                <div
                  className="text-3xl md:text-5xl font-bold mb-2"
                  style={{ color: colorScheme.accent }}
                >
                  {countdown.seconds}
                </div>
                <div className="text-gray-600 text-sm md:text-base">Sekunden</div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <ThanksSection
        colorScheme={colorScheme}
        onSidebarVisibilityChange={handleSidebarVisibilityChange}
      />

      {/* Footer */}
      <LegalFooter colorScheme={colorScheme} footerRef={footerRef} />

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

export default KlareMaintenanceModeContent;
