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
import ColorSchemeSelector, {
  ColorScheme,
  colorSchemes,
} from "./ColorSchemeSelector";

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

// Growth Journey Preview
const growthJourneyPreview = {
  title: "Der Wachstumsprozess",
  description:
    "Erlebe einen interaktiven Einblick in den Prozess persönlicher Transformation.",
  phases: [
    { name: "Herausforderung", color: "#6366F1" },
    { name: "Reflexion", color: "#8B5CF6" },
    { name: "Lernen", color: "#EC4899" },
    { name: "Integration", color: "#F59E0B" },
    { name: "Wachstum", color: "#10B981" },
  ],
};

const MaintenanceMode: React.FC = () => {
  // Farbschema angepasst an das Logo (goldgelb auf dunkel)
  const goldYellow = "#e6ca75"; // Goldgelb wie im Logo
  const darkerGold = "#c4af64"; // Dunkleres Gold für Akzente
  const darkBg = "#1c1c1a"; // Dunkler Hintergrund
  const darkBg2 = "#272725"; // Etwas hellerer dunkler Hintergrund

  const logoColorScheme: ColorScheme = {
    primary: goldYellow,
    accent: darkerGold,
    background: darkBg,
    text: "#f0f0f0", // Helles Grau für Text
  };

  const [colorScheme, setColorScheme] = useState<ColorScheme>(logoColorScheme);
  const [dailyQuote, setDailyQuote] = useState(transformationPrinciples[0]);
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [email, setEmail] = useState("");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);

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

  // Set daily principle based on the day of the year
  useEffect(() => {
    const now = new Date();
    const dayOfYear = Math.floor(
      (now - new Date(now.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24),
    );
    const principleIndex = dayOfYear % transformationPrinciples.length;
    setDailyQuote(transformationPrinciples[principleIndex]);
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
    <div
      className="min-h-screen flex flex-col"
      style={{
        color: "#f0f0f0",
        backgroundColor: darkBg,
        background: `radial-gradient(circle at top right, ${darkBg2}, ${darkBg} 70%)`,
      }}
    >
      {/* Color Scheme Selector - in diesem Fall deaktiviert, da wir das Logo-Farbschema verwenden */}
      {/* <ColorSchemeSelector activeScheme={colorScheme} onChange={setColorScheme} /> */}

      {/* Progress bar */}
      <div
        className="fixed top-0 left-0 h-0.5 z-50 transition-all duration-300"
        style={{
          width: `${scrollProgress}%`,
          background: `linear-gradient(to right, ${goldYellow}, ${darkerGold})`,
        }}
      />

      {/* Floating background elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full opacity-10 animate-float"
            style={{
              background: `radial-gradient(circle, ${goldYellow}30, transparent)`,
              width: `${Math.random() * 300 + 100}px`,
              height: `${Math.random() * 300 + 100}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${Math.random() * 15 + 15}s`,
            }}
          />
        ))}
      </div>

      {/* Header with Logo */}
      <nav
        className="fixed top-0 left-0 w-full bg-opacity-90 border-b z-40 transition-all duration-300"
        style={{
          backgroundColor: `${darkBg}`,
          borderColor: `${goldYellow}20`,
        }}
      >
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center">
            {/* Stylized Text Logo */}
            <div
              className="text-3xl tracking-wider font-light"
              style={{ color: goldYellow }}
            >
              SASCH
              <span
                className="relative inline-block transform translate-y-[-2px] font-normal"
                style={{ color: goldYellow }}
              >
                A
              </span>
              KOHLER
            </div>
          </div>

          <div
            className="flex items-center space-x-3"
            style={{ color: `${goldYellow}80` }}
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
            backgroundColor: darkBg2,
            color: goldYellow,
            borderColor: `${goldYellow}50`,
          }}
          onClick={scrollToTop}
        >
          <ChevronDown size={24} className="rotate-180" />
        </button>
      )}

      {/* Main content */}
      <main className="flex-grow container mx-auto px-4 md:px-8 pt-24 pb-12 flex flex-col">
        {/* Hero section */}
        <section className="min-h-[80vh] flex flex-col items-center justify-center pt-24">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-wider mb-6 leading-tight"
              style={{ color: goldYellow }}
            >
              INSPIRATION FÜR <br />
              <span className="font-light tracking-wide">
                LEBENSBEJAHENDE TRANSFORMATION
              </span>
            </h1>

            <p
              className="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto mb-8 leading-relaxed"
              style={{ color: "rgba(240, 240, 240, 0.7)" }}
            >
              Entdecke mit mir den Weg zu einem kongruenten, bewussten und
              erfüllten Leben.
            </p>
          </div>

          {/* Daily principle */}
          <div
            className="w-full max-w-2xl mx-auto rounded-lg shadow-lg p-8 mb-12 relative"
            style={{
              backgroundColor: `${darkBg2}`,
              borderLeft: `3px solid ${goldYellow}`,
            }}
          >
            <div
              className="absolute -top-4 left-1/2 transform -translate-x-1/2 p-2 rounded-full shadow border"
              style={{
                backgroundColor: darkBg,
                borderColor: `${goldYellow}20`,
              }}
            >
              <Calendar size={24} style={{ color: goldYellow }} />
            </div>
            <h2
              className="text-xl font-light tracking-wider mb-6 text-center"
              style={{ color: goldYellow }}
            >
              TRANSFORMATIONSPRINZIP DES TAGES
            </h2>
            <p
              className="text-xl md:text-2xl italic mb-4"
              style={{ color: "rgba(240, 240, 240, 0.9)" }}
            >
              "{dailyQuote.principle}"
            </p>
            <p className="text-right flex items-center justify-end">
              <span
                className="inline-block px-3 py-1 rounded-full text-xs border"
                style={{
                  color: goldYellow,
                  borderColor: `${goldYellow}50`,
                  backgroundColor: `${darkBg}`,
                }}
              >
                {dailyQuote.focus}
              </span>
            </p>
          </div>

          <div className="flex justify-center">
            <ChevronDown
              size={32}
              className="animate-bounce cursor-pointer"
              style={{ color: goldYellow }}
            />
          </div>
        </section>

        {/* Coming soon */}
        <section
          className="py-16 border-t"
          style={{
            borderColor: `${goldYellow}20`,
          }}
        >
          <div className="text-center mb-12">
            <h2
              className="text-3xl md:text-4xl font-light tracking-wider mb-4"
              style={{ color: goldYellow }}
            >
              WEBSITE IM AUFBAU
            </h2>
            <p
              className="text-lg max-w-2xl mx-auto"
              style={{ color: "rgba(240, 240, 240, 0.7)" }}
            >
              Die neue Website von Sascha Kohler wird bald verfügbar sein. Hier
              werden Sie Inspiration für lebensbejahende Transformation finden.
            </p>
          </div>

          {/* Countdown */}
          <div
            className="rounded-lg shadow-lg p-8 mb-16 max-w-3xl mx-auto"
            style={{
              backgroundColor: darkBg2,
              borderBottom: `3px solid ${goldYellow}`,
            }}
          >
            <h3
              className="text-2xl font-light tracking-wider mb-8 text-center"
              style={{ color: goldYellow }}
            >
              LAUNCH IN
            </h3>
            <div className="grid grid-cols-4 gap-4 text-center">
              <div className="flex flex-col">
                <div
                  className="text-3xl md:text-5xl font-light mb-2"
                  style={{ color: goldYellow }}
                >
                  {countdown.days}
                </div>

                <div
                  className="text-sm text-center md:text-right"
                  style={{ color: "rgba(240, 240, 240, 0.5)" }}
                >
                  <div className="mb-2">
                    © {new Date().getFullYear()} Sascha Kohler. Alle Rechte
                    vorbehalten.
                  </div>
                  <div
                    className="text-xs"
                    style={{ color: "rgba(240, 240, 240, 0.4)" }}
                  >
                    NLP-Ausbildungen | Vorträge | Seminare
                  </div>
                </div>
                <div
                  className="text-sm md:text-base uppercase tracking-wider"
                  style={{ color: "rgba(240, 240, 240, 0.6)" }}
                >
                  Tage
                </div>
              </div>
              <div className="flex flex-col">
                <div
                  className="text-3xl md:text-5xl font-light mb-2"
                  style={{ color: goldYellow }}
                >
                  {countdown.hours}
                </div>
                <div
                  className="text-sm md:text-base uppercase tracking-wider"
                  style={{ color: "rgba(240, 240, 240, 0.6)" }}
                >
                  Stunden
                </div>
              </div>
              <div className="flex flex-col">
                <div
                  className="text-3xl md:text-5xl font-light mb-2"
                  style={{ color: goldYellow }}
                >
                  {countdown.minutes}
                </div>
                <div
                  className="text-sm md:text-base uppercase tracking-wider"
                  style={{ color: "rgba(240, 240, 240, 0.6)" }}
                >
                  Minuten
                </div>
              </div>
              <div className="flex flex-col">
                <div
                  className="text-3xl md:text-5xl font-light mb-2"
                  style={{ color: goldYellow }}
                >
                  {countdown.seconds}
                </div>
                <div
                  className="text-sm md:text-base uppercase tracking-wider"
                  style={{ color: "rgba(240, 240, 240, 0.6)" }}
                >
                  Sekunden
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Growth Journey Section Teaser */}
        <section
          className="py-12 border-t"
          style={{
            borderColor: `${goldYellow}10`,
          }}
        >
          <div
            className="rounded-lg shadow-lg p-8 mb-16 max-w-4xl mx-auto overflow-hidden relative"
            style={{
              backgroundColor: darkBg2,
              borderTop: `3px solid ${goldYellow}`,
            }}
          >
            <h2
              className="text-2xl font-light tracking-wider mb-6 text-center"
              style={{ color: goldYellow }}
            >
              VORSCHAU: DER WACHSTUMSPROZESS
            </h2>

            <div className="flex flex-col items-center">
              <p
                className="mb-10 text-center max-w-2xl"
                style={{ color: "rgba(240, 240, 240, 0.7)" }}
              >
                Erleben Sie den transformativen Weg des persönlichen Wachstums
                durch interaktive und anschauliche Darstellungen auf der
                fertigen Website.
              </p>

              {/* Growth Journey Path Preview with circles and text below */}
              <div className="w-full max-w-3xl flex justify-between items-center relative mb-16 py-4">
                {/* Path line - gradient with gold colors */}
                <div
                  className="absolute top-1/2 left-0 w-full h-1 -translate-y-1/2 transition-all duration-300"
                  style={{
                    background: `linear-gradient(to right, ${goldYellow}, ${darkerGold})`,
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
                      className="w-16 h-16 rounded-full flex items-center justify-center text-xs font-medium mb-2 shadow-md hover:shadow-lg transition-shadow"
                      style={{
                        backgroundColor: goldYellow,
                        color: darkBg,
                      }}
                    >
                      <div
                        className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-black text-xs flex items-center justify-center font-bold border"
                        style={{
                          color: goldYellow,
                          borderColor: goldYellow,
                        }}
                      >
                        1
                      </div>
                    </div>
                    <span
                      className="text-xs font-medium text-center"
                      style={{ color: goldYellow }}
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
                      className="w-16 h-16 rounded-full flex items-center justify-center text-xs font-medium mb-2 shadow-md hover:shadow-lg transition-shadow"
                      style={{
                        backgroundColor: darkerGold,
                        color: darkBg,
                      }}
                    >
                      <div
                        className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-black text-xs flex items-center justify-center font-bold border"
                        style={{
                          color: darkerGold,
                          borderColor: darkerGold,
                        }}
                      >
                        2
                      </div>
                    </div>
                    <span
                      className="text-xs font-medium text-center"
                      style={{ color: darkerGold }}
                    >
                      Reflexion
                    </span>
                  </div>

                  {/* Phase 3 */}
                  <div className="relative flex flex-col items-center">
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center text-xs font-medium mb-2 opacity-60"
                      style={{
                        backgroundColor: `${goldYellow}80`,
                        color: darkBg,
                      }}
                    >
                      <div
                        className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-black text-xs flex items-center justify-center font-bold border opacity-60"
                        style={{
                          color: goldYellow,
                          borderColor: goldYellow,
                        }}
                      >
                        3
                      </div>
                    </div>
                    <span
                      className="text-xs font-medium text-center opacity-60"
                      style={{ color: goldYellow }}
                    >
                      Lernen
                    </span>
                  </div>

                  {/* Phase 4 */}
                  <div className="relative flex flex-col items-center">
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center text-xs font-medium mb-2 opacity-60"
                      style={{
                        backgroundColor: `${goldYellow}60`,
                        color: darkBg,
                      }}
                    >
                      <div
                        className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-black text-xs flex items-center justify-center font-bold border opacity-60"
                        style={{
                          color: goldYellow,
                          borderColor: goldYellow,
                        }}
                      >
                        4
                      </div>
                    </div>
                    <span
                      className="text-xs font-medium text-center opacity-60"
                      style={{ color: goldYellow }}
                    >
                      Integration
                    </span>
                  </div>

                  {/* Phase 5 */}
                  <div className="relative flex flex-col items-center">
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center text-xs font-medium mb-2 opacity-60"
                      style={{
                        backgroundColor: `${goldYellow}40`,
                        color: darkBg,
                      }}
                    >
                      <div
                        className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-black text-xs flex items-center justify-center font-bold border opacity-60"
                        style={{
                          color: goldYellow,
                          borderColor: goldYellow,
                        }}
                      >
                        5
                      </div>
                    </div>
                    <span
                      className="text-xs font-medium text-center opacity-60"
                      style={{ color: goldYellow }}
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
                  backgroundColor: `${darkBg}`,
                  borderColor: goldYellow,
                }}
              >
                <div
                  className="absolute -top-3 -left-3 w-6 h-6 rounded-full flex items-center justify-center text-xs"
                  style={{
                    backgroundColor: goldYellow,
                    color: darkBg,
                  }}
                >
                  !
                </div>
                <p
                  className="italic"
                  style={{ color: "rgba(240, 240, 240, 0.8)" }}
                >
                  "In der fertigen Version werden Sie durch jeden Schritt des
                  Wachstumsprozesses geführt, mit interaktiven Elementen und
                  tiefgehenden Einsichten zu jeder Phase der Transformation."
                </p>
                <div className="mt-4 text-right">
                  <span
                    className="text-sm font-medium"
                    style={{ color: goldYellow }}
                  >
                    DEMNÄCHST VERFÜGBAR
                  </span>
                </div>
              </div>

              {/* Preview overlay */}
              <div className="mt-6 text-center">
                <span
                  className="inline-flex items-center text-sm font-medium hover:opacity-80 transition-colors duration-300"
                  style={{ color: goldYellow }}
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
            style={{ color: goldYellow }}
          >
            WAS SIE <span>ERWARTEN</span> KÖNNEN
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto px-4">
            {comingSoonFeatures.map((feature, index) => (
              <div
                key={index}
                className="rounded-lg shadow-md p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                style={{
                  backgroundColor: darkBg2,
                  borderTop: `3px solid ${index % 2 === 0 ? goldYellow : darkerGold}`,
                }}
              >
                <h3
                  className="text-xl font-medium mb-2 flex items-center"
                  style={{ color: index % 2 === 0 ? goldYellow : darkerGold }}
                >
                  <span className="mr-3 text-2xl">{feature.icon}</span>
                  {feature.title}
                </h3>
                <p style={{ color: "rgba(240, 240, 240, 0.7)" }}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Newsletter signup */}
        <section
          className="py-16 border-t"
          style={{
            borderColor: `${goldYellow}20`,
          }}
        >
          <div
            className="rounded-lg shadow-lg p-8 max-w-2xl mx-auto"
            style={{
              backgroundColor: darkBg2,
              borderRight: `4px solid ${darkerGold}`,
            }}
          >
            <div className="text-center mb-6">
              <Sparkles
                size={28}
                style={{ color: goldYellow }}
                className="mx-auto mb-4"
              />
              <h2
                className="text-2xl font-light tracking-wider"
                style={{ color: goldYellow }}
              >
                BLEIBEN SIE AUF DEM LAUFENDEN
              </h2>
              <p className="mt-2" style={{ color: "rgba(240, 240, 240, 0.7)" }}>
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
                  backgroundColor: `${darkBg}`,
                  borderColor: `${goldYellow}40`,
                  color: "#f0f0f0",
                  border: `1px solid ${goldYellow}40`,
                }}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button
                type="submit"
                className="px-6 py-3 rounded-md font-medium transition-all duration-300 hover:shadow-md"
                style={{
                  backgroundColor: goldYellow,
                  color: darkBg,
                  hover: { backgroundColor: darkerGold },
                }}
              >
                Benachrichtigen
              </button>
            </form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 mt-auto" style={{ backgroundColor: darkBg2 }}>
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              {/* Logo in Footer */}
              <div className="flex items-center mb-3">
                <div
                  className="h-8 w-8 rounded-full relative overflow-hidden flex items-center justify-center"
                  style={{
                    backgroundColor: darkBg,
                    border: `1px solid ${goldYellow}40`,
                  }}
                >
                  <span
                    className="font-bold text-sm"
                    style={{ color: goldYellow }}
                  >
                    SK
                  </span>
                  <div
                    className="absolute bottom-0 w-full h-1/4 bg-opacity-20"
                    style={{ backgroundColor: goldYellow }}
                  ></div>
                </div>
                <div className="ml-2 text-xl font-semibold">
                  <span style={{ color: goldYellow }}>Sascha</span>{" "}
                  <span style={{ color: "#f0f0f0" }}>Kohler</span>
                </div>
              </div>
              <p
                className="text-sm mb-1"
                style={{ color: "rgba(240, 240, 240, 0.5)" }}
              >
                Speaker & Trainer
              </p>
              <div className="flex flex-wrap gap-2 mt-3">
                <span
                  className="inline-block px-2 py-1 rounded-md text-xs"
                  style={{
                    backgroundColor: `${darkBg}`,
                    color: "rgba(240, 240, 240, 0.6)",
                    border: `1px solid ${goldYellow}30`,
                  }}
                >
                  LSB in A.
                </span>
                <span
                  className="inline-block px-2 py-1 rounded-md text-xs"
                  style={{
                    backgroundColor: `${darkBg}`,
                    color: "rgba(240, 240, 240, 0.6)",
                    border: `1px solid ${goldYellow}30`,
                  }}
                >
                  SV
                </span>
                <span
                  className="inline-block px-2 py-1 rounded-md text-xs"
                  style={{
                    backgroundColor: `${darkBg}`,
                    color: "rgba(240, 240, 240, 0.6)",
                    border: `1px solid ${goldYellow}30`,
                  }}
                >
                  P-LM-TtT-NLP
                </span>
                <span
                  className="inline-block px-2 py-1 rounded-md text-xs"
                  style={{
                    backgroundColor: `${darkBg}`,
                    color: "rgba(240, 240, 240, 0.6)",
                    border: `1px solid ${goldYellow}30`,
                  }}
                >
                  MT ab Juli '25
                </span>
              </div>
              <div className="text-gray-400 text-sm text-center md:text-right">
                <div className="mb-2">
                  © {new Date().getFullYear()} Sascha Kohler. Alle Rechte
                  vorbehalten.
                </div>
                <div className="text-xs text-gray-500">
                  NLP-Ausbildungen | Vorträge | Seminare
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

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

export default MaintenanceMode;
