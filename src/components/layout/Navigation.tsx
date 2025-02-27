"use client";
import React from "react";
import { useColorScheme } from "@/contexts/ColorSchemeContext";

interface NavigationProps {
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (isOpen: boolean) => void;
}

const Navigation: React.FC<NavigationProps> = ({
  activeSection,
  scrollToSection,
  mobileMenuOpen,
  setMobileMenuOpen,
}) => {
  const { colorScheme } = useColorScheme();

  return (
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
                    ["hero", "about", "values", "expertise", "contact"][index]
                  )
                }
              >
                {item}
              </button>
            )
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
                      ["hero", "about", "values", "expertise", "contact"][index]
                    )
                  }
                >
                  {item}
                </button>
              )
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
