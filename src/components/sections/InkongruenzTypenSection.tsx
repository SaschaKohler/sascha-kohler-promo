"use client";

import React, { useState } from "react";
import { Check } from "lucide-react";
import { ColorScheme } from "@/utils/colorSchemes";
import { inkongruenzTypen } from "@/data/inkongruenzTypen";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface InkongruenzTypenSectionProps {
  colorScheme: ColorScheme;
  className?: string;
  initialActiveIndex?: number;
}

export const InkongruenzTypenSection: React.FC<
  InkongruenzTypenSectionProps
> = ({ colorScheme, className, initialActiveIndex = 0 }) => {
  const [activeInkongruenzIndex, setActiveInkongruenzIndex] =
    useState<number>(initialActiveIndex);

  return (
    <section
      className={cn("py-16", className)}
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
        <CardDescription className="text-lg max-w-2xl mx-auto mb-4">
          Die KLARE Kongruenz-Methode hilft Menschen, die einen dieser inneren
          Konflikte erleben:
        </CardDescription>
      </div>

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
                {React.createElement(
                  inkongruenzTypen[activeInkongruenzIndex].icon,
                  {
                    size: 48,
                    style: { color: colorScheme.primary },
                  },
                )}
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
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ),
              )}
            </ul>

            <div
              className="p-4 bg-muted rounded-lg border-l-4"
              style={{ borderColor: colorScheme.accent }}
            >
              <p className="text-muted-foreground">
                <strong>Die KLARE Methode:</strong> Ein strukturierter
                5-Schritte-Prozess, der dir hilft, diesen inneren Konflikt zu
                lösen und ein stimmiges Leben zu führen – ohne komplizierte
                Theorien, sondern mit praktischen Werkzeugen für den Alltag.
              </p>
            </div>
          </CardContent>
        </div>
      </Card>

      {/* Stepper navigation for types */}
      <div className="flex justify-center gap-2 mb-8">
        {inkongruenzTypen.map((_, index) => (
          <button
            key={index}
            className="w-3 h-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2"
            style={{
              backgroundColor:
                activeInkongruenzIndex === index
                  ? colorScheme.primary
                  : "hsl(var(--muted))",
              outlineColor: colorScheme.primary,
            }}
            onClick={() => setActiveInkongruenzIndex(index)}
            aria-label={`Inkongruenz-Typ ${index + 1} anzeigen`}
            aria-pressed={activeInkongruenzIndex === index}
          />
        ))}
      </div>
    </section>
  );
};

export default InkongruenzTypenSection;
