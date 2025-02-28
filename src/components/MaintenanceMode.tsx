"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  Calendar,
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
import { useActiveSection } from "@/hooks/useActiveSection";
import { useScrollProgress } from "@/hooks/useScrollProgress";
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

// Coming soon feature teasers - Focused on Kongruenz-Methode
const comingSoonFeatures = [
  {
    title: "Die Kongruenz-Methode",
    description:
      "Entdecke den 5-Schritte-Prozess für nachhaltige persönliche Transformation und vollständige Kongruenz.",
    icon: "✨",
  },
  {
    title: "Interaktiver Kongruenz-Check",
    description:
      "Finde heraus, in welchen Lebensbereichen du bereits kongruent bist und wo noch Potenzial liegt.",
    icon: "📊",
  },
  {
    title: "Transformation-Workshops",
    description:
      "Erfahre von kommenden Workshops und Events zur Kongruenz-Methode.",
    icon: "📅",
  },
  {
    title: "Ressourcen-Bibliothek",
    description:
      "Zugang zu Artikeln, Übungen und Tools für deine persönliche Transformation.",
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
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [dailyQuote, setDailyQuote] = useState(transformationPrinciples[0]);
  // Set launch date to 4 weeks from now
  const launchDate = new Date();
  launchDate.setDate(launchDate.getDate() + 56);

  // KLARE Kongruenz-Methode steps
  const kongruenzSteps = [
    {
      name: "Konfrontation",
      letter: "K",
      color: colorScheme.primary, // "#6366F1",
      icon: "🔍",
      description: "mit der aktuellen Situation",
    },
    {
      name: "Lebendigkeit",
      letter: "L",
      color: colorScheme.primary, // "#8B5CF6",
      icon: "🤔",
      description: "und Ressourcen wiederentdecken",
    },
    {
      name: "Ausrichtung",
      letter: "A",
      color: colorScheme.primary, // "#EC4899",
      icon: "🧭",
      description: "der Lebensbereiche",
    },
    {
      name: "Realisierung",
      letter: "R",
      color: colorScheme.primary, // "#F59E0B",
      icon: "🔄",
      description: "im Alltag",
    },
    {
      name: "Entfaltung",
      letter: "E",
      color: colorScheme.primary, // "#10B981",
      icon: "✨",
      description: "durch vollständige Kongruenz",
    },
  ];
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
  //
  // Auto-rotate active step
  useEffect(() => {
    const stepInterval = setInterval(() => {
      setActiveStepIndex(
        (prevIndex) => (prevIndex + 1) % kongruenzSteps.length,
      );
    }, 5000);

    return () => clearInterval(stepInterval);
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
        <section className="min-h-[80vh] flex flex-col items-center justify-center pt-24">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span style={{ color: colorScheme.primary }}>Die Kongruenz</span>
              <span
                style={{
                  backgroundImage: `linear-gradient(to right, ${colorScheme.primary}, ${colorScheme.accent})`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                -Methode
              </span>
            </h1>

            <p
              className={`${colorScheme.accent} text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto mb-6 leading-relaxed`}
            >
              Die K.L.A.R.E. Methode für vollständige Kongruenz in allen
              Lebensbereichen.
            </p>

            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {kongruenzSteps.map((step, index) => (
                <div
                  key={index}
                  className="flex items-center bg-white px-3 py-1 rounded-full shadow-sm"
                >
                  <span
                    className="font-bold mr-1"
                    style={{ color: step.color }}
                  >
                    {step.letter}
                  </span>
                  <span className="text-gray-700 text-sm">{step.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Daily principle */}
          <div
            className="w-full max-w-2xl mx-auto rounded-lg shadow-lg top-4 p-8 mb-12 relative"
            style={{ backgroundColor: `${colorScheme.background}4` }}
          >
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-white p-2 rounded-full shadow">
              <Calendar size={24} style={{ color: colorScheme.accent }} />
            </div>
            <h2 className="text-xl font-medium mb-6 text-center">
              Kongruenz-Prinzip des Tages
            </h2>
            <p
              className="text-xl md:text-2xl italic mb-4"
              style={{ color: colorScheme.primary }}
            >
              "{dailyQuote.principle}"
            </p>
            <p className="text-right text-gray-600 flex items-center justify-end">
              <span
                className="inline-block px-3 py-1 rounded-full text-xs"
                style={{
                  backgroundColor: `${colorScheme.accent}20`,
                  color: colorScheme.accent,
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
              style={{ color: colorScheme.accent }}
            />
          </div>
        </section>

        {/* Coming soon */}
        <section className="py-16">
          <div className="text-center mb-12">
            <h2
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ color: colorScheme.primary }}
            >
              Entdecke die Kongruenz-Methode
            </h2>
            <p
              className="text-lg max-w-2xl mx-auto"
              style={{ color: colorScheme.text }}
            >
              Die neue Website von Sascha Kohler wird bald verfügbar sein. Hier
              wirst du den vollständigen <em>5-Schritte-Prozess</em> zur
              Entwicklung von Kongruenz in allen Lebensbereichen entdecken
              können.
            </p>
          </div>

          {/* Countdown */}
          <div
            className="rounded-lg shadow-lg p-8 mb-16 max-w-3xl mx-auto"
            style={{
              backgroundColor: `${colorScheme.background}20`,
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
                <div className={`${colorScheme.text} text-sm md:text-base`}>
                  Tage
                </div>
              </div>
              <div className="flex flex-col">
                <div
                  className="text-3xl md:text-5xl font-bold mb-2"
                  style={{ color: colorScheme.accent }}
                >
                  {countdown.hours}
                </div>
                <div className={`${colorScheme.text} text-sm md:text-base`}>
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
                <div className={`${colorScheme.text} text-sm md:text-base`}>
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
                <div className={`${colorScheme.text} text-sm md:text-base `}>
                  Sekunden
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Kongruenz-Methode Preview */}
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
              VORSCHAU: DIE KONGRUENZ-METHODE
            </h2>

            <div className="flex flex-col items-center">
              <p
                className="mb-10 text-center max-w-2xl"
                style={{ color: colorScheme.text }}
              >
                In 5 Schritten zur vollständigen Kongruenz in allen
                Lebensbereichen. Entdecke den transformativen Prozess, der dir
                hilft, alle Aspekte deines Lebens auf deine großen Ziele
                auszurichten.
              </p>

              {/* Kongruenz-Steps Path Preview with circles and text below */}
              <div className="w-full max-w-3xl flex justify-between items-center relative mb-16 py-4">
                {/* Path line - gradient with kongruenzSteps colors */}
                <div
                  className="absolute top-1/2 left-0 w-full h-0.5 -translate-y-1/2 transition-all duration-300"
                  style={{
                    background: `linear-gradient(to right, ${kongruenzSteps.map((step) => step.color).join(", ")})`,
                  }}
                ></div>

                {/* Phase circles with text below */}
                <div className="relative z-10 flex justify-between w-full">
                  {kongruenzSteps.map((step, index) => (
                    <div
                      key={index}
                      className={`relative flex flex-col items-center cursor-pointer transform transition-all duration-300 ${activeStepIndex === index ? "scale-110" : ""}`}
                      onClick={() => setActiveStepIndex(index)}
                    >
                      <div
                        className="w-16 h-16 rounded-full flex items-center justify-center text-white text-xl font-medium mb-2 shadow-md hover:shadow-lg transition-shadow"
                        style={{
                          backgroundColor: step.color,
                          opacity: activeStepIndex === index ? 1 : 0.7,
                        }}
                      >
                        <span
                          className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-white text-xs flex items-center justify-center font-bold border"
                          style={{
                            color: colorScheme.primary,
                            borderColor: colorScheme.primary,
                          }}
                        >
                          {step.letter}
                        </span>
                      </div>
                      <span
                        className="text-xs font-medium text-center mb-1"
                        style={{
                          color:
                            activeStepIndex === index ? step.color : "#666",
                        }}
                      >
                        {step.name}
                      </span>
                      <span
                        className="text-xs text-center hidden md:block max-w-[90px]"
                        style={{ color: colorScheme.text }}
                      >
                        {step.description}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Active step description */}
              <div
                className={`${colorScheme.background} rounded-lg p-6 border-l-4 relative max-w-2xl mx-auto transition-colors duration-300`}
                style={{ borderColor: kongruenzSteps[activeStepIndex].color }}
              >
                <div
                  className="absolute -top-3 -left-3 w-6 h-6 rounded-full flex items-center justify-center text-white text-xs transition-colors duration-300"
                  style={{
                    backgroundColor: kongruenzSteps[activeStepIndex].color,
                  }}
                >
                  {kongruenzSteps[activeStepIndex].letter}
                </div>
                <h3
                  className="font-medium mb-2"
                  style={{ color: kongruenzSteps[activeStepIndex].color }}
                >
                  {kongruenzSteps[activeStepIndex].name}
                </h3>
                <p className={`${colorScheme.accent}80`}>
                  {activeStepIndex === 0 &&
                    "Erkenne deine größten Ziele und identifiziere die Hindernisse, die dich davon abhalten. Dieser Schritt schafft Klarheit über den IST-Zustand und den angestrebten SOLL-Zustand in allen Lebensbereichen."}
                  {activeStepIndex === 1 &&
                    "Entdecke die lebendige Energie in dir und verbinde dich mit deinen inneren Ressourcen. Dieser Schritt hilft dir, deine natürlichen Stärken und Fähigkeiten wiederzufinden, die für deine Transformation bereits in dir angelegt sind und nur darauf warten, aktiviert zu werden."}
                  {activeStepIndex === 2 &&
                    "Entwickle konkrete Strategien, um alle Lebensbereiche in Richtung deiner Ziele auszurichten. In diesem Schritt lernst du Techniken zur bewussten Ausrichtung deines Denkens, Fühlens und Handelns."}
                  {activeStepIndex === 3 &&
                    "Setze die entwickelten Strategien in deinem Alltag um und integriere sie nachhaltig in dein Leben. Hier werden unterstützende Strukturen und Routinen etabliert, die langfristige Veränderung ermöglichen."}
                  {activeStepIndex === 4 &&
                    "Erlebe, wie durch vollständige Kongruenz deine Ziele mit Leichtigkeit Wirklichkeit werden. In diesem finalen Schritt manifestiert sich deine Transformation in allen Lebensbereichen und du erlebst das Gefühl tiefer innerer Stimmigkeit."}
                </p>
                <div className="mt-4 text-right">
                  <span
                    className="text-sm font-medium transition-colors duration-300"
                    style={{ color: kongruenzSteps[activeStepIndex].color }}
                  >
                    Bald verfügbar
                  </span>
                </div>
              </div>

              {/* 'Learn more' Button */}
              <div className="mt-6 text-center">
                <span
                  className="inline-flex items-center text-sm font-medium hover:opacity-80 transition-colors duration-300"
                  style={{ color: colorScheme.primary }}
                >
                  <span>Mehr über die Kongruenz-Methode erfahren</span>
                  <ChevronRight size={16} className="ml-1" />
                </span>
              </div>
            </div>
          </div>
        </section>
        {/* Transformation Path (Weg von - Hin zu) */}
        <section className="py-12">
          <h2
            className="text-2xl font-light tracking-wider mb-6 text-center"
            style={{ color: colorScheme.text }}
          >
            Der{" "}
            <span style={{ color: colorScheme.primary }}>TRANSFORMATIONS</span>
            pfad
          </h2>

          <div className="max-w-3xl mx-auto rounded-lg shadow-lg p-6 mb-8">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col md:flex-row gap-4 items-center">
                <div className="flex-1 p-4 bg-red-50 rounded-lg border-l-4 border-red-400">
                  <h3 className="font-medium text-red-700 mb-1">Weg von</h3>
                  <p className="text-gray-700">
                    Inneren Widersprüchen und Selbstsabotage
                  </p>
                </div>

                <div className="hidden md:block">
                  <ChevronRight
                    size={32}
                    style={{ color: colorScheme.primary }}
                  />
                </div>

                <div className="block md:hidden">
                  <ChevronDown
                    size={32}
                    style={{ color: colorScheme.primary }}
                  />
                </div>

                <div
                  className="flex-1 p-4 bg-green-50 rounded-lg border-l-4"
                  style={{ borderColor: colorScheme.primary }}
                >
                  <h3
                    className="font-medium mb-1"
                    style={{ color: colorScheme.primary }}
                  >
                    Hin zu
                  </h3>
                  <p className="text-gray-700">
                    Vollständiger Kongruenz und natürlicher Manifestation
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-4 items-center">
                <div className="flex-1 p-4 bg-red-50 rounded-lg border-l-4 border-red-400">
                  <h3 className="font-medium text-red-700 mb-1">Weg von</h3>
                  <p className="text-gray-700">
                    Orientierung an externen Systemen und Normen
                  </p>
                </div>

                <div className="hidden md:block">
                  <ChevronRight
                    size={32}
                    style={{ color: colorScheme.primary }}
                  />
                </div>

                <div className="block md:hidden">
                  <ChevronDown
                    size={32}
                    style={{ color: colorScheme.primary }}
                  />
                </div>

                <div
                  className="flex-1 p-4 bg-green-50 rounded-lg border-l-4"
                  style={{ borderColor: colorScheme.primary }}
                >
                  <h3
                    className="font-medium mb-1"
                    style={{ color: colorScheme.primary }}
                  >
                    Hin zu
                  </h3>
                  <p className="text-gray-700">
                    Authentischer Entfaltung deines vollen Potentials
                  </p>
                </div>
              </div>
            </div>
          </div>

          <p className={`${colorScheme.text} text-center max-w-2xl mx-auto`}>
            Mit der Kongruenz-Methode durchläufst du einen strukturierten
            Prozess, der dich vom aktuellen Zustand der Inkongruenz zu einem
            Leben in vollständiger Harmonie führt – ein Ansatz, der für Menschen
            und nicht für Unternehmen oder Systeme konzipiert ist.
          </p>
        </section>
        {/* Feature teasers */}
        <section className="py-12">
          <h2
            className="text-2xl font-light tracking-wider mb-6 text-center"
            style={{ color: colorScheme.text }}
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
                  backgroundColor: `${colorScheme.primary}20`,
                  borderTop:
                    index < 2 ? `3px solid ${colorScheme.primary}` : "",
                  borderTopColor:
                    index === 1 ? colorScheme.accent : colorScheme.primary,
                }}
              >
                <h3
                  className="text-xl font-medium mb-2 flex items-center"
                  style={{
                    color: colorScheme.primary,
                  }}
                >
                  <span className="mr-3 text-2xl">{feature.icon}</span>
                  {feature.title}
                </h3>
                <p className={`text-${colorScheme.primary}`}>
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

      <ThanksSection colorScheme={colorScheme} />

      <ColorThemePoll />

      {/* Footer */}
      <footer
        className="text-white py-8 px-4 md:px-8 mt-auto"
        style={{ backgroundColor: colorScheme.text }}
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
              <p className={`text-${colorScheme.background} text-sm mb-1`}>
                Die K.L.A.R.E. Kongruenz-Methode{" "}
              </p>
              <div className="flex flex-wrap gap-2 mt-3">
                <span className="inline-block px-2 py-1 bg-gray-800 rounded-md text-xs text-gray-300">
                  LSB in A.u.SV.
                </span>
                <span className="inline-block px-2 py-1 bg-gray-800 rounded-md text-xs text-gray-300">
                  NLP-Master
                </span>
                <span className="inline-block px-2 py-1 bg-gray-800 rounded-md text-xs text-gray-300">
                  Speaker & Trainer
                </span>
              </div>
            </div>

            <div className="text-gray-500 text-sm text-center md:text-right">
              <div className="mb-2">
                © {new Date().getFullYear()} Sascha Kohler. Alle Rechte
                vorbehalten.
              </div>
              <div className="text-xs text-gray-500">
                Die Kongruenz-Methode | Vorträge | Workshops | Coaching
              </div>
              <div className="text-xs text-gray-500">
                <span className="mr-2">
                  Design & Entwicklung: Sascha Kohler
                </span>
                <a
                  href="https://skit.sascha-kohler.at/"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  IT-Dienstleistungen & Webentwicklung
                </a>
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
