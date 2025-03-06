'use client';
import React from 'react';
import Navigation from './layout/Navigation';
import Footer from './layout/Footer';
import ScrollToTop from './layout/ScrollToTop';
import HeroSection from './klare-method/HeroSection';
import ContextAwareColorSchemeSelector from './ui/ContextAwareColorSchemeSelector';
import { useScrollProgress } from '@/hooks/useScrollProgress';
import { useActiveSection } from '@/hooks/useActiveSection';
import { ColorSchemeProvider } from '@/contexts/ColorSchemeContext';
import GrowthJourneySection from './GrowthJourneySection';

// Hauptkomponente
const SaschaKohlerWebsiteContent: React.FC = () => {
  const { scrollProgress, showScrollTop } = useScrollProgress();
  const { activeSection, scrollToSection, mobileMenuOpen, setMobileMenuOpen } = useActiveSection();

  // Funktion zum Scrollen nach oben
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {/* Farbschema-Selektor mit Context-Anbindung */}
      <ContextAwareColorSchemeSelector />

      {/* Navigation */}
      <Navigation
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />

      {/* Scroll-to-Top-Button */}
      {showScrollTop && <ScrollToTop onClick={scrollToTop} />}

      {/* Hero-Sektion mit wöchentlich wechselnden Texten */}
      <HeroSection onContactClick={() => scrollToSection('contact')} />

      {/* About Section - Hier sollte die About-Sektion-Komponente eingebunden werden */}
      <section id="about" className="py-20 min-h-screen flex items-center">
        <div className="container mx-auto px-6">
          {/* Hier sollte AboutSection eingebunden werden */}
          {/* Vorübergehend den ursprünglichen Inhalt beibehalten */}
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* ... Inhalte aus der ursprünglichen Komponente ... */}
          </div>
        </div>
      </section>

      {/* Growth Journey Section */}
      <section id="growth-journey" className="py-20 min-h-screen flex items-center">
        <div className="container mx-auto px-6">
          <GrowthJourneySection />
        </div>
      </section>

      {/* Values Section - Hier sollte die Values-Sektion-Komponente eingebunden werden */}
      <section id="values" className="py-20">
        <div className="container mx-auto px-6">
          {/* Hier sollte ValuesSection eingebunden werden */}
          {/* Vorübergehend den ursprünglichen Inhalt beibehalten */}
        </div>
      </section>

      {/* Expertise Section - Hier sollte die Expertise-Sektion-Komponente eingebunden werden */}
      <section id="expertise" className="py-20 min-h-screen flex items-center">
        <div className="container mx-auto px-6">
          {/* Hier sollte ExpertiseSection eingebunden werden */}
          {/* Vorübergehend den ursprünglichen Inhalt beibehalten */}
        </div>
      </section>

      {/* Contact Section - Hier sollte die Kontakt-Sektion-Komponente eingebunden werden */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-6">
          {/* Hier sollte ContactSection eingebunden werden */}
          {/* Vorübergehend den ursprünglichen Inhalt beibehalten */}
        </div>
      </section>

      {/* Thanks Section */}
      {/* <ThanksSectionFamily /> */}

      {/* Footer */}
      <Footer />

      {/* CSS für Animationen */}
      <style jsx global>{`
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
            backgroundposition: -200% 0;
          }
          100% {
            backgroundposition: 200% 0;
          }
        }
      `}</style>
    </>
  );
};

// Wrapper-Komponente mit Context Provider
const SaschaKohlerWebsite: React.FC = () => {
  const { scrollProgress } = useScrollProgress();

  return (
    <ColorSchemeProvider scrollProgress={scrollProgress}>
      <SaschaKohlerWebsiteContent />
    </ColorSchemeProvider>
  );
};

export default SaschaKohlerWebsite;
