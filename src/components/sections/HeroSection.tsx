"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { useColorScheme } from "@/contexts/ColorSchemeContext";

interface HeroSectionProps {
  onContactClick: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onContactClick }) => {
  const { colorScheme } = useColorScheme();

  // Array von Hero-Texten, die wöchentlich wechseln
  const heroTexts = [
    "SCHLÜSSEL ZUR SELBSTKONGRUENTEN TRANSFORMATION",
    "IMPULSE FÜR NACHHALTIGE BEWUSSTSEINSENTWICKLUNG",
    "BEWUSSTE TRANSFORMATION DURCH KONGRUENZ-METHODIK",
    "VON MUSTERN ZU POTENZIALEN: BEWUSSTE LEBENSENTFALTUNG",
  ];

  // Aktuelle Wochennummer bestimmen
  const getCurrentWeekNumber = () => {
    const now = new Date();
    const start = new Date(now.getFullYear(), 0, 1);
    const diff = now.getTime() - start.getTime();
    const oneWeek = 7 * 24 * 60 * 60 * 1000;
    return Math.floor(diff / oneWeek) % heroTexts.length;
  };

  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Wochenbasierten Text bei Komponenten-Mount initialisieren
  useEffect(() => {
    setCurrentTextIndex(getCurrentWeekNumber());
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden"
    >
      <div className="absolute inset-0 z-0" />

      {/* Animated background elements */}

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left md:w-3/5">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span style={{ color: colorScheme.primary }}>Inspiration</span>{" "}
              für <br />
              {/* Gradient text with weekly rotation */}
              <span
                className="bg-clip-text text-transparent bg-gradient-to-r transition-all duration-1000"
                style={{
                  backgroundImage: `linear-gradient(to right, ${colorScheme.complement}, ${colorScheme.accent})`,
                }}
              >
                {heroTexts[currentTextIndex]}
              </span>
            </h1>

            <p
              className="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto md:mx-0 mb-8 leading-relaxed"
              style={{ color: colorScheme.text }}
            >
              Entdecke DEINEN Weg zu einem kongruenten, bewussten und erfüllten
              Leben.
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

          {/* Hero Image with 3D effect on hover */}
          <div className="md:w-2/5 mt-8 md:mt-0">
            <div
              className="relative transition-all duration-500"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              style={{
                transform: isHovered
                  ? "perspective(1000px) rotateY(-15deg) rotateX(10deg)"
                  : "perspective(1000px) rotateY(0) rotateX(0)",
                transition: "transform 0.5s ease",
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
                  fill
                  sizes="(max-width: 768px) 288px, 384px"
                  className="object-cover transform transition-transform duration-500"
                  style={{
                    transform: isHovered ? "scale(1.05)" : "scale(1)",
                  }}
                  priority
                />
                {/* Hero image shine effect */}
                <div
                  className="absolute inset-0 bg-gradient-to-tr from-transparent via-white to-transparent opacity-0 transition-opacity duration-500"
                  style={{
                    opacity: isHovered ? 0.2 : 0,
                    transform: "rotate(45deg)",
                    backgroundSize: "200% 200%",
                    animation: isHovered ? "shimmer 1.5s infinite" : "none",
                  }}
                />
              </div>
              <div
                className="absolute -bottom-4 -right-2 bg-white p-4 rounded-lg shadow-lg transform transition-transform duration-500"
                style={{
                  transform: isHovered
                    ? "translateY(-5px) scale(1.05)"
                    : "translateY(0) scale(1)",
                  boxShadow: isHovered
                    ? `0 10px 25px -5px ${colorScheme.primary}40`
                    : `0 4px 6px -1px ${colorScheme.primary}20`,
                }}
              >
                <p
                  className="italic text-lg"
                  style={{ color: colorScheme.primary }}
                >
                  Sascha Kohler
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

      {/* Keyframe-Animationen */}
      <style jsx>{`
        @keyframes shimmer {
          0% {
            backgroundposition: -200% 0;
          }
          100% {
            backgroundposition: 200% 0;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
