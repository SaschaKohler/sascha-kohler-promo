"use client";
import React, { useState, useEffect } from "react";
import {
  Sparkles,
  Construction,
  ChevronDown,
  Heart,
  Check,
  Compass,
} from "lucide-react";
import {
  ColorSchemeProvider,
  useColorScheme,
} from "@/contexts/ColorSchemeContext";
import ContextAwareColorSchemeSelector from "../ui/ContextAwareColorSchemeSelector";
import useScrollToSection from "@/hooks/useScrollToSection";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import { comingSoonFeatures } from "@/data/comingSoonFeatures";
import { inkongruenzTypen } from "@/data/inkongruenzTypen";
import { kongruenzSteps } from "@/data/kongruenzSteps";
import { transformationPathway } from "@/data/transformationPathway";
import ThanksSection from "../main-site/ThanksSection";
import MethodSteps from "./MethodSteps";
import DailyPrinciple from "./dailyPrinciple";
import useElementVisibility from "@/hooks/useElementVisibility";
import TargetPersonaIndicator from "./TargetPersonaIndicator";
import TeaserSection from "../sections/TeaserSection";

const KlareMaintenanceModeContent: React.FC = () => {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [email, setEmail] = useState("");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [activeInkongruenzIndex, setActiveInkongruenzIndex] = useState(0);
  const [activePathwayIndex, setActivePathwayIndex] = useState(0);
  const { colorScheme } = useColorScheme();
  const scrollToSection = useScrollToSection();
  const [footerRef, isFooterVisible] = useElementVisibility({
    threshold: 0.2, // Trigger when 20% of the footer is visible
    rootMargin: "0px 0px 0px 0px",
  });
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

  // Auto-rotate active step, inkongruenz type and pathway
  useEffect(() => {
    const stepInterval = setInterval(() => {
      setActiveStepIndex(
        (prevIndex) => (prevIndex + 1) % kongruenzSteps.length,
      );
    }, 7000);

    const inkongruenzInterval = setInterval(() => {
      setActiveInkongruenzIndex(
        (prevIndex) => (prevIndex + 1) % inkongruenzTypen.length,
      );
    }, 7000);

    // const pathwayInterval = setInterval(() => {
    //   setActivePathwayIndex(
    //     (prevIndex) => (prevIndex + 1) % transformationPathway.length,
    //   );
    // }, 7000);

    return () => {
      clearInterval(stepInterval);
      clearInterval(inkongruenzInterval);
      // clearInterval(pathwayInterval);
    };
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
            <span className="hidden sm:inline text-sm tracking-wide">
              WEBSITE IM AUFBAU
            </span>
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
        {/* Inkongruenz Typen Section */}
        <section
          className="py-16"
          style={{
            background: `linear-gradient(to bottom, white, ${colorScheme.background}30)`,
          }}
        >
          <div className="text-center mb-12">
            <h2
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ color: colorScheme.primary }}
            >
              Erkennst du dich wieder?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-4">
              Die KLARE Kongruenz-Methode hilft Menschen, die einen dieser
              inneren Konflikte erleben:
            </p>
          </div>

          {/* Inkongruenz Type Cards */}
          <div
            className="bg-white rounded-lg shadow-lg p-8 mb-16 max-w-4xl mx-auto overflow-hidden relative transition-all duration-300"
            style={{
              borderLeft: `5px solid ${colorScheme.primary}`,
              borderRight: `5px solid ${colorScheme.accent}`,
            }}
          >
            {/* Decorative elements */}
            <div
              className="absolute -top-12 -right-12 w-24 h-24 rounded-full"
              style={{
                background: `linear-gradient(135deg, ${colorScheme.primary}30, ${colorScheme.accent}30)`,
              }}
            />
            <div
              className="absolute -bottom-12 -left-12 w-24 h-24 rounded-full"
              style={{
                background: `linear-gradient(135deg, ${colorScheme.accent}30, ${colorScheme.primary}30)`,
              }}
            />

            <div className="relative z-10">
              <div className="flex flex-col md:flex-row gap-6 items-center mb-6">
                <div className="bg-gray-100 p-4 rounded-full">
                  {React.createElement(
                    inkongruenzTypen[activeInkongruenzIndex].icon,
                    {
                      size: 48,
                      style: { color: colorScheme.primary },
                    },
                  )}
                </div>
                <div>
                  <h3
                    className="text-2xl font-semibold"
                    style={{ color: colorScheme.primary }}
                  >
                    {inkongruenzTypen[activeInkongruenzIndex].title}
                  </h3>
                </div>
              </div>

              <p className="text-gray-700 mb-8">
                {inkongruenzTypen[activeInkongruenzIndex].description}
              </p>

              <h4
                className="font-semibold mb-3"
                style={{ color: colorScheme.accent }}
              >
                Kommt dir das bekannt vor?
              </h4>
              <ul className="space-y-3 mb-8">
                {inkongruenzTypen[activeInkongruenzIndex].examples.map(
                  (item, i) => (
                    <li key={i} className="flex items-start">
                      <span
                        className="mr-2 mt-1 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center"
                        style={{ background: colorScheme.primary }}
                      >
                        <Check size={12} className="text-white" />
                      </span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ),
                )}
              </ul>

              <div
                className="p-4 bg-gray-50 rounded-lg border-l-4"
                style={{ borderColor: colorScheme.accent }}
              >
                <p className="text-gray-700">
                  <strong>Die KLARE Methode:</strong> Ein strukturierter
                  5-Schritte-Prozess, der dir hilft, diesen inneren Konflikt zu
                  lösen und ein stimmiges Leben zu führen – ohne komplizierte
                  Theorien, sondern mit praktischen Werkzeugen für den Alltag.
                </p>
              </div>
            </div>
          </div>

          {/* Stepper navigation for types */}
          <div className="flex justify-center gap-2 mb-8">
            {inkongruenzTypen.map((_, index) => (
              <button
                key={index}
                className="w-3 h-3 rounded-full transition-all duration-300"
                style={{
                  backgroundColor:
                    activeInkongruenzIndex === index
                      ? colorScheme.primary
                      : "#e5e7eb",
                }}
                onClick={() => setActiveInkongruenzIndex(index)}
              />
            ))}
          </div>
        </section>

        {/* KLARE Kongruenz-Methode Preview */}
        <section className="py-12">
          <MethodSteps colorScheme={colorScheme} />
        </section>
        <section className="py-12">
          <DailyPrinciple colorScheme={colorScheme} />
        </section>
        {/* Why Kongruenz Instead of Optimization */}
        <section
          className="py-12"
          style={{
            background: `linear-gradient(to bottom, ${colorScheme.background}40, white)`,
          }}
        >
          <h2
            className="text-2xl font-semibold mb-8 text-center"
            style={{ color: colorScheme.text }}
          >
            Warum <span style={{ color: colorScheme.primary }}>Kongruenz</span>{" "}
            statt Optimierung?
          </h2>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto px-4">
            <div
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              style={{ borderTop: `3px solid ${colorScheme.primary}` }}
            >
              <h3
                className="text-xl font-medium mb-2 flex items-center"
                style={{ color: colorScheme.primary }}
              >
                <Compass className="mr-3" size={24} />
                Menschen sind keine Unternehmen
              </h3>
              <p className="text-gray-600 mb-4">
                Viele Transformationsansätze behandeln Menschen wie Systeme oder
                Unternehmen, die "optimiert" werden müssen. Die KLARE Methode
                respektiert dich als einzigartiges Individuum mit komplexen
                Bedürfnissen und Emotionen.
              </p>
              <div className="bg-gray-50 p-3 rounded">
                <p className="text-sm italic text-gray-600">
                  "Ich habe jahrelang versucht, mich wie eine Maschine zu
                  optimieren. Die Kongruenz-Methode hat mir gezeigt, dass wahre
                  Transformation von innen kommt."
                </p>
              </div>
            </div>

            <div
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              style={{ borderTop: `3px solid ${colorScheme.accent}` }}
            >
              <h3
                className="text-xl font-medium mb-2 flex items-center"
                style={{ color: colorScheme.accent }}
              >
                <Heart className="mr-3" size={24} />
                Ganzheitliche Integration
              </h3>
              <p className="text-gray-600 mb-4">
                Statt einzelne Lebensbereiche isoliert zu verbessern, bringt die
                KLARE Methode dein gesamtes Leben in Einklang. Das Ergebnis:
                Natürliche Leichtigkeit statt Erschöpfung durch fragmentierte
                Ziele.
              </p>
              <div className="bg-gray-50 p-3 rounded">
                <p className="text-sm italic text-gray-600">
                  "Der größte Unterschied: Ich muss mich nicht mehr zwischen
                  meinem beruflichen Erfolg und meinem Familienleben
                  entscheiden. Beide Bereiche nähren sich gegenseitig."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Feature teasers */}
        <section className="py-12">
          <h2
            className="text-2xl font-semibold mb-8 text-center"
            style={{ color: colorScheme.text }}
          >
            Was dich{" "}
            <span style={{ color: colorScheme.primary }}>erwartet</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto px-4">
            {comingSoonFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                style={{
                  borderTop:
                    index < 2 ? `3px solid ${colorScheme.primary}` : "",
                  borderTopColor:
                    index === 1 ? colorScheme.accent : colorScheme.primary,
                }}
              >
                <h3
                  className="text-xl font-medium mb-2 flex items-center"
                  style={{
                    color:
                      index === 1 ? colorScheme.accent : colorScheme.primary,
                  }}
                >
                  <span className="mr-3 text-2xl">{feature.icon}</span>
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Newsletter signup */}
        <section
          id="newsletter"
          className="py-16"
          style={{
            background: `linear-gradient(to bottom, white, ${colorScheme.background}20)`,
            borderTop: `1px solid ${colorScheme.primary}20`,
          }}
        >
          <div
            className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto"
            style={{
              borderRight: `4px solid ${colorScheme.accent}`,
            }}
          >
            <div className="text-center mb-6">
              <Sparkles
                size={28}
                style={{ color: colorScheme.accent }}
                className="mx-auto mb-4"
              />
              <h2
                className="text-2xl font-semibold"
                style={{ color: colorScheme.primary }}
              >
                Erfahre als Erster vom Launch
              </h2>
              <p className="text-gray-600 mt-2">
                Melde dich für den Newsletter an und erhalte exklusive Einblicke
                in die KLARE Kongruenz-Methode.
              </p>
            </div>

            <form
              onSubmit={handleSubscribe}
              className="flex flex-col md:flex-row gap-4"
            >
              <input
                type="email"
                placeholder="Deine E-Mail-Adresse"
                className="flex-grow px-4 py-3 rounded-md border transition-all duration-300"
                style={{
                  borderColor: `${colorScheme.primary}40`,
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
                Anmelden
              </button>
            </form>
          </div>
        </section>

        {/* Countdown */}
        <section
          id="launch-date"
          className="py-12"
          style={{
            background: `linear-gradient(to bottom, ${colorScheme.background}10, white)`,
          }}
        >
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
                <div className="text-gray-600 text-sm md:text-base">
                  Stunden
                </div>
              </div>
              <div className="flex flex-col">
                <div
                  className="text-3xl md:text-5xl font-bold mb-2"
                  style={{ color: colorScheme.primary }}
                >
                  {countdown.minutes}
                </div>
                <div className="text-gray-600 text-sm md:text-base">
                  Minuten
                </div>
              </div>
              <div className="flex flex-col">
                <div
                  className="text-3xl md:text-5xl font-bold mb-2"
                  style={{ color: colorScheme.accent }}
                >
                  {countdown.seconds}
                </div>
                <div className="text-gray-600 text-sm md:text-base">
                  Sekunden
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <ThanksSection colorScheme={colorScheme} />
      {/* Footer */}
      <footer
        className="bg-gray-900 text-white py-8 px-4 md:px-8 mt-auto"
        ref={footerRef as React.RefObject<HTMLDivElement>}
      >
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
                  <span style={{ color: colorScheme.accent }}>Sascha</span>{" "}
                  Kohler
                </div>
              </div>
              <p className="text-gray-400 text-sm mb-1">
                Die KLARE Kongruenz-Methode
              </p>
              <div className="flex flex-wrap gap-2 mt-3">
                <span className="inline-block px-2 py-1 bg-gray-800 rounded-md text-xs text-gray-300">
                  LSB in A.
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
                © {new Date().getFullYear()} Sascha Kohler. Alle Rechte
                vorbehalten.
              </div>
              <div className="mb-2 font-medium text-gray-300">
                "Entfalten Sie sich selbst, statt sich zu optimieren"
              </div>
              <div className="text-xs text-gray-500 mb-2">
                Die KLARE-Methode | Vorträge | Workshops | Coaching
              </div>
              <div className="text-xs text-gray-500">
                <span className="mr-2">
                  Design & Entwicklung: Sascha Kohler
                </span>
                <a
                  href="https://sascha-kohler.at/it"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  IT-Dienstleistungen & Webentwicklung
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* Target Persona Indicator - Verwende die neue ausgelagerte Komponente */}
      <TargetPersonaIndicator
        colorScheme={colorScheme}
        isFooterVisible={isFooterVisible}
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

// Wrapper-Komponente mit Context Provider
const KlareMaintenanceMode: React.FC = () => {
  const { scrollProgress } = useScrollProgress();

  return (
    <ColorSchemeProvider scrollProgress={scrollProgress}>
      <KlareMaintenanceModeContent />
    </ColorSchemeProvider>
  );
};

export default KlareMaintenanceMode;
