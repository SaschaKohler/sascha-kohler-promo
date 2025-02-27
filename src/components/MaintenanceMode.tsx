"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  Calendar,
  Clock,
  ArrowRight,
  Star,
  Sparkles,
  Construction,
  ChevronDown,
  ChevronRight,
} from "lucide-react";
import {
  ColorSchemeProvider,
  useColorScheme,
} from "@/contexts/ColorSchemeContext";
import ContextAwareColorSchemeSelector from "./ui/ContextAwareColorSchemeSelector";
import HeroSection from "./sections/HeroSection";
import { useActiveSection } from "@/hooks/useActiveSection";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import Footer from "./layout/Footer";
import ColorThemePoll from "./sections/ColorThemePoll";
import ThanksSection from "./sections/ThanksSection";

// Wachstums- und Transformationsprinzipien
const transformationPrinciples = [
  {
    principle: "Kongruenz schafft Vertrauen - nach innen wie nach außen.",
    focus: "Authentizität",
  },
  {
    principle: "Wer die Muster erkennt, erkennt die Möglichkeiten.",
    focus: "Bewusstsein",
  },
  {
    principle:
      "Die Qualität deiner Fragen bestimmt die Qualität deiner Erkenntnisse.",
    focus: "Forschung",
  },
  {
    principle: "Zwischen Reiz und Reaktion liegt der Raum der Freiheit.",
    focus: "Selbstbestimmung",
  },
  {
    principle:
      "Vertraue deiner Intuition - sie ist die Summe all deiner unbewussten Erfahrungen.",
    focus: "Weisheit",
  },
  {
    principle:
      "Flexibilität ist Stärke - wer die meisten Wahlmöglichkeiten hat, hat den größten Einfluss.",
    focus: "Anpassungsfähigkeit",
  },
  {
    principle:
      "Jede Erfahrung hat eine positive Absicht und enthält ein Geschenk.",
    focus: "Wachstum",
  },
];

// Coming soon feature teasers
const comingSoonFeatures = [
  {
    title: "Interaktive Werte-Karten",
    description:
      "Entdecke, wie die ROK-Methodik mit interaktiven Elementen lebendig wird.",
    icon: "💎",
  },
  {
    title: "Personalisierbare Farbschemata",
    description:
      "Wähle aus verschiedenen Farbpaletten, die deine bevorzugte Stimmung widerspiegeln.",
    icon: "🎨",
  },
  {
    title: "Veranstaltungskalender",
    description:
      "Bleibe informiert über kommende Workshops, Vorträge und Online-Events.",
    icon: "📅",
  },
  {
    title: "Ressourcen-Bibliothek",
    description:
      "Zugang zu Artikeln, Übungen und Werkzeugen für deine persönliche Transformation.",
    icon: "📚",
  },
];

const MaintenanceModeContent: React.FC = () => {
  // ColorScheme Hook verwenden
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const { colorScheme } = useColorScheme();
  const [email, setEmail] = useState("");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const { activeSection, scrollToSection, mobileMenuOpen, setMobileMenuOpen } =
    useActiveSection();

  // Set launch date to 4 weeks from now
  const launchDate = new Date();
  launchDate.setDate(launchDate.getDate() + 28);

  // Update countdown timer
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const difference = launchDate.getTime() - now.getTime();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60),
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setCountdown({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Handle scroll events to update progress
  useEffect(() => {
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

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle email subscription
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would connect to a mailing list service
    alert(`Danke! ${email} wurde für Updates registriert.`);
    setEmail("");
  };

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Color Scheme Selector */}
      <ContextAwareColorSchemeSelector />

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
            <span className="hidden sm:inline text-sm tracking-wide">
              WEBSITE IM AUFBAU
            </span>
          </div>
        </div>
      </nav>

      {/* Scroll to top button */}
      {showScrollTop && (
        <button
          className="fixed bottom-8 right-8 p-3 rounded-full z-40 shadow-lg transition-all duration-300 transform hover:scale-110 border border-opacity-50"
          style={{
            backgroundColor: colorScheme.background,
            color: colorScheme.primary,
            borderColor: `${colorScheme.primary}50`,
          }}
          onClick={scrollToTop}
        >
          <ChevronDown size={24} className="rotate-180" />
        </button>
      )}

      {/* Main content */}
      <main className="flex-grow container mx-auto px-4 md:px-8  pb-12 flex flex-col">
        {/* Hero section */}
        {/* <div className="text-center max-w-3xl mx-auto mb-10"> */}
        <HeroSection onContactClick={() => scrollToSection("contact")} />
        {/* </div> */}

        {/* Coming soon */}
        <section
          className="py-16 border-t"
          style={{
            borderColor: `${colorScheme.primary}20`,
          }}
        >
          <div className="text-center mb-12">
            <h2
              className="text-3xl md:text-4xl font-light tracking-wider mb-4"
              style={{ color: colorScheme.primary }}
            >
              WEBSITE IM AUFBAU
            </h2>
            <p
              className="text-lg max-w-2xl mx-auto"
              style={{ color: colorScheme.text }}
            >
              Die neue Website von Sascha Kohler wird bald verfügbar sein. Hier
              werden Sie Inspiration für lebensbejahende Transformation finden.
            </p>
          </div>

          {/* Countdown */}
          <div
            className="rounded-lg shadow-lg p-8 mb-16 max-w-3xl mx-auto"
            style={{
              backgroundColor: `${colorScheme.background}30`,
              borderBottom: `3px solid ${colorScheme.primary}`,
            }}
          >
            <h3
              className="text-2xl font-light tracking-wider mb-8 text-center"
              style={{ color: colorScheme.primary }}
            >
              LAUNCH IN
            </h3>
            <div className="grid grid-cols-4 gap-4 text-center">
              <div className="flex flex-col">
                <div
                  className="text-3xl md:text-5xl font-light mb-2"
                  style={{ color: colorScheme.primary }}
                >
                  {countdown.days}
                </div>
                <div
                  className="text-sm md:text-base uppercase tracking-wider"
                  style={{ color: colorScheme.text }}
                >
                  Tage
                </div>
              </div>
              <div className="flex flex-col">
                <div
                  className="text-3xl md:text-5xl font-light mb-2"
                  style={{ color: colorScheme.accent }}
                >
                  {countdown.hours}
                </div>
                <div
                  className="text-sm md:text-base uppercase tracking-wider"
                  style={{ color: colorScheme.text }}
                >
                  Stunden
                </div>
              </div>
              <div className="flex flex-col">
                <div
                  className="text-3xl md:text-5xl font-light mb-2"
                  style={{ color: colorScheme.primary }}
                >
                  {countdown.minutes}
                </div>
                <div
                  className="text-sm md:text-base uppercase tracking-wider"
                  style={{ color: colorScheme.text }}
                >
                  Minuten
                </div>
              </div>
              <div className="flex flex-col">
                <div
                  className="text-3xl md:text-5xl font-light mb-2"
                  style={{ color: colorScheme.accent }}
                >
                  {countdown.seconds}
                </div>
                <div
                  className="text-sm md:text-base uppercase tracking-wider"
                  style={{ color: colorScheme.text }}
                >
                  Sekunden
                </div>
              </div>
            </div>
          </div>
        </section>
        <ColorThemePoll />
        {/* Growth Journey Section Teaser */}
        <section
          className="py-12 border-t"
          style={{
            borderColor: `${colorScheme.primary}10`,
          }}
        >
          <div
            className="rounded-lg shadow-lg p-8 mb-16 max-w-4xl mx-auto overflow-hidden relative"
            style={{
              backgroundColor: `${colorScheme.background}20`,
              borderTop: `3px solid ${colorScheme.primary}`,
            }}
          >
            <h2
              className="text-2xl font-light tracking-wider mb-6 text-center"
              style={{ color: colorScheme.primary }}
            >
              VORSCHAU: DER WACHSTUMSPROZESS
            </h2>

            <div className="flex flex-col items-center">
              <p
                className="mb-10 text-center max-w-2xl"
                style={{ color: colorScheme.text }}
              >
                Erleben Sie den transformativen Weg des persönlichen Wachstums
                durch interaktive und anschauliche Darstellungen auf der
                fertigen Website.
              </p>

              {/* Growth Journey Path Preview with circles and text below */}
              <div className="w-full max-w-3xl flex justify-between items-center relative mb-16 py-4">
                {/* Path line - gradient with color scheme colors */}
                <div
                  className="absolute top-1/2 left-0 w-full h-1 -translate-y-1/2 transition-all duration-300"
                  style={{
                    background: `linear-gradient(to right, ${colorScheme.primary}, ${colorScheme.accent})`,
                  }}
                ></div>

                {/* Phase circles with text below */}
                <div className="relative z-10 flex justify-between w-full">
                  {/* Phase 1 - Interactive */}
                  <div
                    className="relative flex flex-col items-center cursor-pointer transform transition-all duration-300 hover:scale-110"
                    onClick={() =>
                      alert(
                        'In der fertigen Version werden Sie hier mehr über die Phase "Herausforderung" erfahren.',
                      )
                    }
                  >
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center text-white text-xs font-medium mb-2 shadow-md hover:shadow-lg transition-shadow"
                      style={{
                        backgroundColor: colorScheme.primary,
                      }}
                    >
                      <div
                        className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-white text-xs flex items-center justify-center font-bold border"
                        style={{
                          color: colorScheme.primary,
                          borderColor: colorScheme.primary,
                        }}
                      >
                        1
                      </div>
                    </div>
                    <span
                      className="text-xs font-medium text-center"
                      style={{ color: colorScheme.primary }}
                    >
                      Herausforderung
                    </span>
                  </div>

                  {/* Phase 2 - Interactive */}
                  <div
                    className="relative flex flex-col items-center cursor-pointer transform transition-all duration-300 hover:scale-110"
                    onClick={() =>
                      alert(
                        'In der fertigen Version werden Sie hier mehr über die Phase "Reflexion" erfahren.',
                      )
                    }
                  >
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center text-white text-xs font-medium mb-2 shadow-md hover:shadow-lg transition-shadow"
                      style={{
                        backgroundColor: colorScheme.accent,
                      }}
                    >
                      <div
                        className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-white text-xs flex items-center justify-center font-bold border"
                        style={{
                          color: colorScheme.accent,
                          borderColor: colorScheme.accent,
                        }}
                      >
                        2
                      </div>
                    </div>
                    <span
                      className="text-xs font-medium text-center"
                      style={{ color: colorScheme.accent }}
                    >
                      Reflexion
                    </span>
                  </div>

                  {/* Phase 3 */}
                  <div className="relative flex flex-col items-center">
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center text-white text-xs font-medium mb-2 opacity-60"
                      style={{
                        backgroundColor: `${colorScheme.primary}80`,
                      }}
                    >
                      <div
                        className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-white text-xs flex items-center justify-center font-bold border opacity-60"
                        style={{
                          color: colorScheme.primary,
                          borderColor: colorScheme.primary,
                        }}
                      >
                        3
                      </div>
                    </div>
                    <span
                      className="text-xs font-medium text-center opacity-60"
                      style={{ color: colorScheme.primary }}
                    >
                      Lernen
                    </span>
                  </div>

                  {/* Phase 4 */}
                  <div className="relative flex flex-col items-center">
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center text-white text-xs font-medium mb-2 opacity-60"
                      style={{
                        backgroundColor: `${colorScheme.accent}80`,
                      }}
                    >
                      <div
                        className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-white text-xs flex items-center justify-center font-bold border opacity-60"
                        style={{
                          color: colorScheme.accent,
                          borderColor: colorScheme.accent,
                        }}
                      >
                        4
                      </div>
                    </div>
                    <span
                      className="text-xs font-medium text-center opacity-60"
                      style={{ color: colorScheme.accent }}
                    >
                      Integration
                    </span>
                  </div>

                  {/* Phase 5 */}
                  <div className="relative flex flex-col items-center">
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center text-white text-xs font-medium mb-2 opacity-60"
                      style={{
                        backgroundColor: `${colorScheme.primary}60`,
                      }}
                    >
                      <div
                        className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-white text-xs flex items-center justify-center font-bold border opacity-60"
                        style={{
                          color: colorScheme.primary,
                          borderColor: colorScheme.primary,
                        }}
                      >
                        5
                      </div>
                    </div>
                    <span
                      className="text-xs font-medium text-center opacity-60"
                      style={{ color: colorScheme.primary }}
                    >
                      Wachstum
                    </span>
                  </div>
                </div>
              </div>

              {/* Teaser content */}
              <div
                className="rounded-lg p-6 relative max-w-2xl mx-auto transition-colors duration-300 border-l-4"
                style={{
                  backgroundColor: `${colorScheme.background}30`,
                  borderColor: colorScheme.primary,
                }}
              >
                <div
                  className="absolute -top-3 -left-3 w-6 h-6 rounded-full flex items-center justify-center text-white text-xs"
                  style={{
                    backgroundColor: colorScheme.primary,
                  }}
                >
                  !
                </div>
                <p className="italic" style={{ color: colorScheme.text }}>
                  "In der fertigen Version werden Sie durch jeden Schritt des
                  Wachstumsprozesses geführt, mit interaktiven Elementen und
                  tiefgehenden Einsichten zu jeder Phase der Transformation."
                </p>
                <div className="mt-4 text-right">
                  <span
                    className="text-sm font-medium"
                    style={{ color: colorScheme.accent }}
                  >
                    DEMNÄCHST VERFÜGBAR
                  </span>
                </div>
              </div>

              {/* Preview overlay */}
              <div className="mt-6 text-center">
                <span
                  className="inline-flex items-center text-sm font-medium hover:opacity-80 transition-colors duration-300"
                  style={{ color: colorScheme.primary }}
                >
                  <span>MEHR ENTDECKEN</span>
                  <ChevronRight size={16} className="ml-1" />
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Feature teasers */}
        <section className="py-12">
          <h2
            className="text-2xl font-light tracking-wider mb-8 text-center"
            style={{ color: colorScheme.primary }}
          >
            WAS SIE <span style={{ color: colorScheme.accent }}>ERWARTEN</span>{" "}
            KÖNNEN
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto px-4">
            {comingSoonFeatures.map((feature, index) => (
              <div
                key={index}
                className="rounded-lg shadow-md p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                style={{
                  backgroundColor: `${colorScheme.background}20`,
                  borderTop: `3px solid ${index % 2 === 0 ? colorScheme.primary : colorScheme.accent}`,
                }}
              >
                <h3
                  className="text-xl font-medium mb-2 flex items-center"
                  style={{
                    color:
                      index % 2 === 0
                        ? colorScheme.primary
                        : colorScheme.accent,
                  }}
                >
                  <span className="mr-3 text-2xl">{feature.icon}</span>
                  {feature.title}
                </h3>
                <p style={{ color: colorScheme.text }}>{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Newsletter signup */}
        <section
          className="py-16 border-t"
          style={{
            borderColor: `${colorScheme.primary}20`,
          }}
        >
          <div
            className="rounded-lg shadow-lg p-8 max-w-2xl mx-auto"
            style={{
              backgroundColor: `${colorScheme.background}30`,
              borderRight: `4px solid ${colorScheme.accent}`,
            }}
          >
            <div className="text-center mb-6">
              <Sparkles
                size={28}
                style={{ color: colorScheme.primary }}
                className="mx-auto mb-4"
              />
              <h2
                className="text-2xl font-light tracking-wider"
                style={{ color: colorScheme.primary }}
              >
                BLEIBEN SIE AUF DEM LAUFENDEN
              </h2>
              <p className="mt-2" style={{ color: colorScheme.text }}>
                Erhalten Sie eine Benachrichtigung, wenn die Website live geht.
              </p>
            </div>

            <form
              onSubmit={handleSubscribe}
              className="flex flex-col md:flex-row gap-4"
            >
              <input
                type="email"
                placeholder="Ihre E-Mail-Adresse"
                className="flex-grow px-4 py-3 rounded-md bg-opacity-10 transition-all duration-300"
                style={{
                  backgroundColor: `${colorScheme.background}30`,
                  borderColor: `${colorScheme.primary}40`,
                  color: colorScheme.text,
                  border: `1px solid ${colorScheme.primary}40`,
                }}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button
                type="submit"
                className="px-6 py-3 rounded-md text-white font-medium transition-all duration-300 hover:shadow-md"
                style={{
                  backgroundColor: colorScheme.primary,
                }}
              >
                Benachrichtigen
              </button>
            </form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <ThanksSection colorScheme={colorScheme} />
      <Footer />
      {/* CSS for animations */}
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

// Wrapper-Komponente mit Context Provider
const MaintenanceMode: React.FC = () => {
  const { scrollProgress } = useScrollProgress();

  return (
    <ColorSchemeProvider scrollProgress={scrollProgress}>
      <MaintenanceModeContent />
    </ColorSchemeProvider>
  );
};

export default MaintenanceMode;
