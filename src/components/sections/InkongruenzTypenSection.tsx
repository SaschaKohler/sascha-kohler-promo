'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Check, ChevronLeft, ChevronRight } from 'lucide-react';
import { ColorScheme } from '@/utils/colorSchemes';
import { inkongruenzTypen } from '@/data/inkongruenzTypen';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'framer-motion';

interface InkongruenzTypenSectionProps {
  colorScheme: ColorScheme;
  className?: string;
  initialActiveIndex?: number;
}

export const InkongruenzTypenSection: React.FC<InkongruenzTypenSectionProps> = ({
  colorScheme,
  className,
  initialActiveIndex = 0,
}) => {
  const [activeInkongruenzIndex, setActiveInkongruenzIndex] = useState<number>(initialActiveIndex);
  const [direction, setDirection] = useState<number>(0); // -1 für links, 1 für rechts, 0 für initial
  const cardContainerRef = useRef<HTMLDivElement>(null);
  
  // Scroll to previous card
  const handlePreviousCard = () => {
    if (activeInkongruenzIndex > 0) {
      setDirection(-1);
      setActiveInkongruenzIndex(activeInkongruenzIndex - 1);
    }
  };

  // Scroll to next card
  const handleNextCard = () => {
    if (activeInkongruenzIndex < inkongruenzTypen.length - 1) {
      setDirection(1);
      setActiveInkongruenzIndex(activeInkongruenzIndex + 1);
    }
  };

  // Mobile swipe functionality
  useEffect(() => {
    if (cardContainerRef.current) {
      let startX = 0;
      const container = cardContainerRef.current;
      
      const handleTouchStart = (e: React.TouchEvent | TouchEvent) => {
        if ('touches' in e) {
          startX = e.touches[0].clientX;
        }
      };
      
      const handleTouchMove = (e: React.TouchEvent | TouchEvent) => {
        if ('touches' in e) {
          const currentX = e.touches[0].clientX;
          const diff = startX - currentX;
          
          // Threshold for swipe detection (50px)
          if (Math.abs(diff) > 50) {
            e.preventDefault(); // Prevent default scrolling when swiping cards
            
            // Swipe right to left (next card)
            if (diff > 0 && activeInkongruenzIndex < inkongruenzTypen.length - 1) {
              setDirection(1);
              setActiveInkongruenzIndex(activeInkongruenzIndex + 1);
              startX = 0;
            }
            
            // Swipe left to right (previous card)
            if (diff < 0 && activeInkongruenzIndex > 0) {
              setDirection(-1);
              setActiveInkongruenzIndex(activeInkongruenzIndex - 1);
              startX = 0;
            }
          }
        }
      };
      
      // Add event listeners for touch events
      container.addEventListener('touchstart', handleTouchStart as unknown as EventListener);
      container.addEventListener('touchmove', handleTouchMove as unknown as EventListener, { passive: false });
      
      // Clean up event listeners
      return () => {
        container.removeEventListener('touchstart', handleTouchStart as unknown as EventListener);
        container.removeEventListener('touchmove', handleTouchMove as unknown as EventListener);
      };
    }
  }, [activeInkongruenzIndex]);

  // Animations für die Karten
  const cardVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: [0.4, 0.0, 0.2, 1], // Easing: cubic-bezier
      },
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.95,
      transition: {
        duration: 0.4,
        ease: [0.4, 0.0, 0.2, 1], // Easing: cubic-bezier
      },
    }),
  };

  return (
    <section
      className={cn('py-16', className)}
      style={{
        background: `linear-gradient(to bottom, white, ${colorScheme.background}30)`,
      }}
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: colorScheme.primary }}>
          Erkennen Sie sich wieder?
        </h2>
        <CardDescription className="text-lg max-w-2xl mx-auto mb-4">
          Die KLARE Kongruenz-Methode hilft Ihnen, wenn sie einen dieser inneren Konflikte erleben:
        </CardDescription>
      </div>

      {/* Card Container with Navigation Arrows */}
      <div className="relative max-w-4xl mx-auto" ref={cardContainerRef}>
        {/* Left arrow navigation */}
        {activeInkongruenzIndex > 0 && (
          <button
            onClick={handlePreviousCard}
            className="absolute left-0 md:-left-12 top-1/2 transform -translate-y-1/2 z-20 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-all duration-300"
            style={{ color: colorScheme.primary }}
            aria-label="Vorheriger Typ"
          >
            <ChevronLeft size={28} />
          </button>
        )}

        {/* Card content with AnimatePresence for transitions */}
        <div className="overflow-hidden">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={activeInkongruenzIndex}
              custom={direction}
              variants={cardVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="w-full"
            >
              {/* Inkongruenz Type Card */}
              <Card
                className="p-8 mb-16 max-w-4xl mx-auto overflow-hidden relative border-0 shadow-lg"
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
                  <CardHeader className="p-0 mb-6">
                    <div className="flex flex-col md:flex-row gap-6 items-center">
                      <div
                        className="p-4 rounded-full"
                        style={{ backgroundColor: `${colorScheme.primary}15` }}
                      >
                        {React.createElement(inkongruenzTypen[activeInkongruenzIndex].icon, {
                          size: 48,
                          style: { color: colorScheme.primary },
                        })}
                      </div>
                      <div>
                        <CardTitle
                          className="text-2xl font-semibold"
                          style={{ color: colorScheme.primary }}
                        >
                          {inkongruenzTypen[activeInkongruenzIndex].title}
                        </CardTitle>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="p-0">
                    <p className="text-muted-foreground mb-8">
                      {inkongruenzTypen[activeInkongruenzIndex].description}
                    </p>

                    <h4 className="font-semibold mb-3" style={{ color: colorScheme.accent }}>
                      Kommt Ihnen das bekannt vor?
                    </h4>
                    <ul className="space-y-3 mb-8">
                      {inkongruenzTypen[activeInkongruenzIndex].examples.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <span
                            className="mr-2 mt-1 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center"
                            style={{ background: colorScheme.primary }}
                          >
                            <Check size={12} className="text-white" />
                          </span>
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div
                      className="p-4 bg-muted rounded-lg border-l-4"
                      style={{ borderColor: colorScheme.accent }}
                    >
                      <p className="text-muted-foreground">
                        <strong>Die KLARE Methode:</strong> Ein strukturierter 5-Schritte-Prozess, der ihnen
                        hilft, diesen inneren Konflikt zu lösen und ein stimmiges Leben zu führen – ohne
                        komplizierte Theorien, sondern mit praktischen Werkzeugen für den Alltag.
                      </p>
                    </div>
                  </CardContent>
                </div>
              </Card>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right arrow navigation */}
        {activeInkongruenzIndex < inkongruenzTypen.length - 1 && (
          <button
            onClick={handleNextCard}
            className="absolute right-0 md:-right-12 top-1/2 transform -translate-y-1/2 z-20 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-all duration-300"
            style={{ color: colorScheme.primary }}
            aria-label="Nächster Typ"
          >
            <ChevronRight size={28} />
          </button>
        )}
      </div>

      {/* Stepper navigation for types */}
      <div className="flex justify-center gap-2 mb-8">
        {inkongruenzTypen.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
              activeInkongruenzIndex === index ? 'scale-125' : ''
            }`}
            style={{
              backgroundColor:
                activeInkongruenzIndex === index ? colorScheme.primary : 'hsl(var(--muted))',
              outlineColor: colorScheme.primary,
            }}
            onClick={() => {
              setDirection(index > activeInkongruenzIndex ? 1 : -1);
              setActiveInkongruenzIndex(index);
            }}
            aria-label={`Inkongruenz-Typ ${index + 1} anzeigen`}
            aria-pressed={activeInkongruenzIndex === index}
          />
        ))}
      </div>
    </section>
  );
};

export default InkongruenzTypenSection;