"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  ChevronDown,
  ExternalLink,
  Mail,
  Calendar,
  Check,
  ArrowUp,
  Link,
} from "lucide-react";
import ColorSchemeSelector, {
  ColorScheme,
  colorSchemes,
} from "./ColorSchemeSelector";
import ThanksSection from "./ThanksSection";
import ValueCards from "./ValueCards";
import GrowthJourneySection from "./GrowthJourneySection";
import ThanksSectionFamily from "./ThanksSectionFamily";
import ThanksPage from "@/pages/thanks";

const SaschaKohlerWebsite: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("hero");
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [colorScheme, setColorScheme] = useState<ColorScheme>(colorSchemes[0]);

  // Handle scroll events to update active section and progress
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

      // Determine active section based on scroll position
      const sections = ["hero", "about", "values", "expertise", "contact"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= windowHeight / 2 && rect.bottom >= windowHeight / 2) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll to section
  const scrollToSection = (sectionId: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
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
      className="relative font-sans"
      style={{
        color: colorScheme.text,
        background: `linear-gradient(to bottom, white, ${colorScheme.background})`,
      }}
    >
      {/* Color Scheme Selector */}
      <ColorSchemeSelector
        activeScheme={colorScheme}
        onChange={setColorScheme}
      />

      {/* Progress bar */}
      <div
        className="fixed top-0 left-0 h-1 z-50 transition-all duration-300"
        style={{
          width: `${scrollProgress}%`,
          background: `linear-gradient(to right, ${colorScheme.primary}, ${colorScheme.accent})`,
        }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full bg-white bg-opacity-95 shadow-sm z-40 transition-all duration-300">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div
            className="text-2xl font-semibold"
            style={{ color: colorScheme.primary }}
          >
            <span style={{ color: colorScheme.accent }}>Sascha</span> Kohler
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {["Start", "Über mich", "Werte", "Expertise", "Kontakt"].map(
              (item, index) => (
                <button
                  key={index}
                  className="transition-all duration-300"
                  style={{
                    color:
                      activeSection ===
                      ["hero", "about", "values", "expertise", "contact"][index]
                        ? colorScheme.accent
                        : "#666",
                    fontWeight:
                      activeSection ===
                      ["hero", "about", "values", "expertise", "contact"][index]
                        ? "600"
                        : "400",
                  }}
                  onClick={() =>
                    scrollToSection(
                      ["hero", "about", "values", "expertise", "contact"][
                        index
                      ],
                    )
                  }
                >
                  {item}
                </button>
              ),
            )}
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
                  transform: mobileMenuOpen
                    ? "rotate(45deg) translate(2px, 9px)"
                    : "none",
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
                  transform: mobileMenuOpen
                    ? "rotate(-45deg) translate(2px, -9px)"
                    : "none",
                }}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white py-4 px-6 shadow-md">
            <div className="flex flex-col space-y-4">
              {["Start", "Über mich", "Werte", "Expertise", "Kontakt"].map(
                (item, index) => (
                  <button
                    key={index}
                    className="py-2 transition-all duration-300 text-left"
                    style={{
                      color:
                        activeSection ===
                        ["hero", "about", "values", "expertise", "contact"][
                          index
                        ]
                          ? colorScheme.accent
                          : "#666",
                      fontWeight:
                        activeSection ===
                        ["hero", "about", "values", "expertise", "contact"][
                          index
                        ]
                          ? "600"
                          : "400",
                    }}
                    onClick={() =>
                      scrollToSection(
                        ["hero", "about", "values", "expertise", "contact"][
                          index
                        ],
                      )
                    }
                  >
                    {item}
                  </button>
                ),
              )}
            </div>
          </div>
        )}
      </nav>

      {/* Scroll to top button */}
      {showScrollTop && (
        <button
          className="fixed bottom-8 right-8 p-3 rounded-full shadow-lg z-40 text-white transition-all duration-300 transform hover:scale-110"
          style={{ backgroundColor: colorScheme.primary }}
          onClick={scrollToTop}
        >
          <ArrowUp size={24} />
        </button>
      )}

      {/* Hero Section */}
      <section
        id="hero"
        className="min-h-screen pt-24 flex flex-col items-center justify-center relative overflow-hidden"
      >
        <div
          className="absolute inset-0 z-0"
          style={{
            background: `linear-gradient(to bottom, ${colorScheme.background}, white)`,
          }}
        />

        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden z-0">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full opacity-20 animate-float"
              style={{
                background: `linear-gradient(to bottom right, ${colorScheme.accent}40, ${colorScheme.primary}40)`,
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

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left md:w-3/5">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                <span style={{ color: colorScheme.primary }}>Inspiration</span>{" "}
                für <br />
                <span
                  style={{
                    backgroundImage: `linear-gradient(to right, ${colorScheme.primary}, ${colorScheme.accent})`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  lebensbejahende Transformation
                </span>
              </h1>

              <p className="text-lg sm:text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto md:mx-0 mb-8 leading-relaxed">
                Entdecke mit mir den Weg zu einem kongruenten, bewussten und
                erfüllten Leben.
              </p>

              <button
                className="text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                style={{
                  background: `linear-gradient(to right, ${colorScheme.primary}, ${colorScheme.accent})`,
                }}
                onClick={() => scrollToSection("contact")}
              >
                Lass uns sprechen
              </button>
            </div>

            {/* Hero Image */}
            <div className="md:w-2/5 mt-8 md:mt-0">
              <div className="relative">
                <div
                  className="w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 shadow-xl mx-auto relative"
                  style={{ borderColor: colorScheme.accent }}
                >
                  <Image
                    src="/images/me.jpeg"
                    alt="Sascha Kohler"
                    fill
                    sizes="(max-width: 768px) 288px, 384px"
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-lg shadow-lg">
                  <p
                    className="italic text-lg"
                    style={{ color: colorScheme.primary }}
                  >
                    Speaker & Trainer
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown
            size={32}
            className="cursor-pointer"
            style={{ color: colorScheme.accent }}
            onClick={() => scrollToSection("about")}
          />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 min-h-screen flex items-center">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <div className="relative">
                <div
                  className="w-full h-96 md:h-[550px] rounded-lg overflow-hidden"
                  style={{ backgroundColor: `${colorScheme.accent}30` }}
                >
                  <Image
                    src="/images/Familie.jpeg"
                    alt="Sascha Kohler"
                    fill
                    sizes="(max-width: 768px) 288px, 384px"
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-lg">
                  <p
                    className="italic font-serif text-lg"
                    style={{ color: colorScheme.primary }}
                  >
                    "Das Leben ist keine Problemstellung, sondern eine Einladung
                    zum Wachstum."
                  </p>
                </div>
              </div>
            </div>

            <div className="md:w-1/2">
              <h2
                className="text-4xl font-bold mb-6"
                style={{ color: colorScheme.text }}
              >
                Über <span style={{ color: colorScheme.primary }}>mich</span>
              </h2>

              <div className="space-y-6 text-lg text-gray-600">
                <p>
                  Als leidenschaftlicher Verfechter eines bewussten und
                  lebensbejahenden Ansatzes bringe ich meine vielfältigen
                  Erfahrungen aus der ROK Akademie, meinen NLP-Zertifizierungen
                  und meinem pharmazeutischen Hintergrund zusammen.
                </p>

                <p>
                  Mein Weg hat mich gelehrt, dass wahre Transformation dann
                  stattfindet, wenn wir das Leben in seiner ganzen Fülle
                  annehmen und verstehen, dass jede Herausforderung eine
                  Einladung zum Wachstum ist.
                </p>

                <p>
                  In meinen Vorträgen und Workshops verbinde ich tiefes
                  menschliches Verständnis mit praktischen Werkzeugen, die jeden
                  Teilnehmer befähigen, sein volles Potenzial zu entfalten.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="GrowthJourneySection"
        className="py-20 min-h-screen flex items-center"
      >
        <div className="container mx-auto px-6">
          <GrowthJourneySection />
        </div>
      </section>
      {/* Values Section */}
      <section
        id="values"
        className="py-20"
        style={{
          background: `linear-gradient(to bottom, white, ${colorScheme.background})`,
        }}
      >
        <div className="container mx-auto px-6">
          <h2
            className="text-4xl font-bold mb-12 text-center"
            style={{ color: colorScheme.text }}
          >
            Meine <span style={{ color: colorScheme.primary }}>Werte</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Kongruenz",
                description:
                  "Echte Transformation beginnt, wenn unser Denken, Fühlen und Handeln in Übereinstimmung sind und wir unsere Wahrheit leben.",
                icon: "🌱",
              },
              {
                title: "Bewusstes Wachstum",
                description:
                  "Jeder Moment bietet die Möglichkeit zu wachsen, wenn wir bereit sind, bewusst hinzuschauen und zu lernen.",
                icon: "⭐",
              },
              {
                title: "Lebensbejahung",
                description:
                  "Das Leben in all seinen Facetten anzunehmen, schafft den Raum für tiefe Erfüllung und echte Freude.",
                icon: "🌈",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3
                  className="text-2xl font-semibold mb-4"
                  style={{ color: colorScheme.primary }}
                >
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>

          <div
            className="mt-16 p-8 text-white rounded-lg shadow-xl"
            style={{ backgroundColor: colorScheme.primary }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-center">
              Mein Credo
            </h3>
            <p className="text-lg text-center italic">
              "Ich glaube an die transformative Kraft des bewussten Lebens. Wenn
              wir lernen, jeden Moment vollständig anzunehmen und zu würdigen,
              entdecken wir einen unerschöpflichen Quell von Kraft, Freude und
              Sinn."
            </p>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section id="expertise" className="py-20 min-h-screen flex items-center">
        <div className="container mx-auto px-6">
          <h2
            className="text-4xl font-bold mb-12 text-center"
            style={{ color: colorScheme.text }}
          >
            Meine <span style={{ color: colorScheme.primary }}>Expertise</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                title: "NLP & Kommunikation",
                description:
                  "Als zertifizierter NLP-Practitioner und Trainer bringe ich tiefes Verständnis für menschliche Kommunikationsmuster und Veränderungsprozesse mit.",
                items: [
                  "Meta-Modell der Sprache",
                  "Ankertechniken",
                  "Timeline-Arbeit",
                  "Change History Integration",
                ],
              },
              {
                title: "ROK Methodologie",
                description:
                  "Meine Ausbildung in der ROK Akademie hat mir einzigartige Werkzeuge für nachhaltige persönliche Transformation vermittelt.",
                items: [
                  "Selbstreflexion",
                  "Ressourcenaktivierung",
                  "Wertarbeit",
                  "Embodiment-Techniken",
                ],
              },
              {
                title: "Vorträge & Workshops",
                description:
                  "Meine Vorträge verbinden inspirierende Inhalte mit praktischen Werkzeugen, die sofort anwendbar sind.",
                items: [
                  "Interaktive Formate",
                  "Tiefgehende Impulse",
                  "Nachhaltige Integration",
                  "Maßgeschneiderte Inhalte",
                ],
              },
              {
                title: "Ganzheitliche Perspektive",
                description:
                  "Durch meinen Hintergrund als Pharmazeut bringe ich ein fundiertes Verständnis für die Verbindung von Körper, Geist und Emotion mit.",
                items: [
                  "Neurobiologische Grundlagen",
                  "Stressregulation",
                  "Gesundheitsförderung",
                  "Ganzheitliches Wohlbefinden",
                ],
              },
            ].map((area, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <h3
                  className="text-2xl font-semibold mb-4"
                  style={{ color: colorScheme.primary }}
                >
                  {area.title}
                </h3>
                <p className="text-gray-600 mb-6">{area.description}</p>

                <ul className="space-y-2">
                  {area.items.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <Check
                        size={20}
                        className="mt-1 mr-2 flex-shrink-0"
                        style={{ color: colorScheme.accent }}
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20"
        style={{
          background: `linear-gradient(to bottom, ${colorScheme.background}, white)`,
        }}
      >
        <div className="container mx-auto px-6">
          <h2
            className="text-4xl font-bold mb-12 text-center"
            style={{ color: colorScheme.text }}
          >
            Lass uns{" "}
            <span style={{ color: colorScheme.primary }}>in Kontakt</span>{" "}
            treten
          </h2>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h3
                className="text-2xl font-semibold mb-6"
                style={{ color: colorScheme.primary }}
              >
                Anfragen & Information
              </h3>

              <div className="space-y-6">
                <div className="flex items-center">
                  <Mail
                    size={24}
                    className="mr-4"
                    style={{ color: colorScheme.accent }}
                  />
                  <div>
                    <p className="text-gray-800 font-medium">E-Mail</p>
                    <p style={{ color: colorScheme.primary }}>
                      kontakt@sascha-kohler.at
                    </p>
                  </div>
                </div>

                <div className="flex items-center">
                  <Calendar
                    size={24}
                    className="mr-4"
                    style={{ color: colorScheme.accent }}
                  />
                  <div>
                    <p className="text-gray-800 font-medium">Terminanfragen</p>
                    <p className="text-gray-600">
                      Für Vorträge, Workshops und Beratungen
                    </p>
                  </div>
                </div>

                <div className="flex items-center">
                  <ExternalLink
                    size={24}
                    className="mr-4"
                    style={{ color: colorScheme.accent }}
                  />
                  <div>
                    <p className="text-gray-800 font-medium">Social Media</p>
                    <div className="flex space-x-4 mt-2">
                      {["LinkedIn", "Xing", "Instagram"].map((platform, i) => (
                        <button
                          key={i}
                          style={{ color: colorScheme.primary }}
                          className="hover:opacity-80 transition-opacity"
                        >
                          {platform}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h3
                className="text-2xl font-semibold mb-6"
                style={{ color: colorScheme.primary }}
              >
                Newsletter
              </h3>
              <p className="text-gray-600 mb-6">
                Erhalte regelmäßig Inspirationen, praktische Übungen und
                Informationen zu kommenden Veranstaltungen.
              </p>

              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:border-transparent"
                    placeholder="Dein Name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-1">
                    E-Mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:border-transparent"
                    placeholder="deine@email.at"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full text-white py-3 rounded-md shadow-md hover:shadow-lg transition-all duration-300"
                  style={{
                    background: `linear-gradient(to right, ${colorScheme.primary}, ${colorScheme.accent})`,
                  }}
                >
                  Anmelden
                </button>
              </form>
            </div>
          </div>

          <div className="mt-16 text-center">
            <p
              className="text-lg font-semibold"
              style={{ color: colorScheme.primary }}
            >
              Ich freue mich auf einen inspirierenden Austausch mit dir!
            </p>
          </div>
        </div>
      </section>
      {/* Thanks Section */}
      <ThanksSectionFamily colorScheme={colorScheme} />
      {/* Footer */}
      <footer className="py-8 bg-gray-900 text-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <div className="text-2xl font-semibold">
                <span style={{ color: colorScheme.accent }}>Sascha</span> Kohler
              </div>
              <p className="text-gray-400 mt-1">
                Inspiration für lebensbejahende Transformation
              </p>
            </div>
            <div className="text-gray-400 text-sm flex gap-4">
              <span>
                © {new Date().getFullYear()} Sascha Kohler. Alle Rechte
                vorbehalten.
              </span>
              <Link
                href="/thanks"
                className="hover:text-gray-300 transition-colors"
              >
                Danksagungen
              </Link>
            </div>{" "}
          </div>
        </div>
      </footer>

      {/* Add global styles for animations */}
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
      `}</style>
    </div>
  );
};

export default SaschaKohlerWebsite;
