"use client";
import React from "react";
import { useState } from "react";
import { kongruenzSteps, getStepColor } from "@/data/kongruenzSteps";
import { ColorScheme } from "@/utils/colorSchemes";
import {
  Search,
  Zap,
  Compass,
  Hammer,
  Sparkles,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// Definiere LucideIcon Type direkt hier, um kongruenzSteps anzupassen
type LucideIcon = React.ComponentType<
  React.SVGProps<SVGSVGElement> & { size?: number }
>;

// Aktualisierte KLARE-Methode Schritte mit Lucide-Icons
const stepsWithIcons = [
  {
    ...kongruenzSteps[0],
    icon: Search,
    content:
      "Erkenne deine größten Ziele und konfrontiere dich ehrlich mit deiner aktuellen Situation. Dieser Schritt schafft Klarheit über den IST-Zustand und den angestrebten SOLL-Zustand in allen Lebensbereichen.",
  },
  {
    ...kongruenzSteps[1],
    icon: Zap,
    content:
      "Entdecke die natürliche Lebendigkeit und Energie, die bereits in dir vorhanden ist. Hier lernst du, deine natürlichen Ressourcen und Kräfte zu erkennen und gezielt zu nutzen.",
  },
  {
    ...kongruenzSteps[2],
    icon: Compass,
    content:
      "Entwickle konkrete Strategien, um alle Lebensbereiche in Richtung deiner Ziele auszurichten. In diesem Schritt lernst du Techniken zur bewussten Ausrichtung deines Denkens, Fühlens und Handelns.",
  },
  {
    ...kongruenzSteps[3],
    icon: Hammer,
    content:
      "Setze die entwickelten Strategien in deinem Alltag um und integriere sie nachhaltig in dein Leben. Hier werden unterstützende Strukturen und Routinen etabliert, die langfristige Veränderung ermöglichen.",
  },
  {
    ...kongruenzSteps[4],
    icon: Sparkles,
    content:
      "Erlebe, wie durch vollständige Kongruenz deine Ziele mit natürlicher Leichtigkeit Wirklichkeit werden. In diesem finalen Schritt manifestiert sich deine Transformation in allen Lebensbereichen und du erlebst das Gefühl tiefer innerer Stimmigkeit.",
  },
];

interface MethodStepsProps {
  className?: string;
  colorScheme: ColorScheme;
  initialActiveStep?: number;
}

const MethodSteps: React.FC<MethodStepsProps> = ({
  className = "",
  colorScheme,
  initialActiveStep = 0,
}) => {
  const [activeStepIndex, setActiveStepIndex] =
    useState<number>(initialActiveStep);

  const handlePrevStep = () => {
    setActiveStepIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNextStep = () => {
    setActiveStepIndex((prev) => Math.min(stepsWithIcons.length - 1, prev + 1));
  };

  // Funktion um den CSS-Wert für den Fortschritt zu berechnen
  const getProgressStyle = () => {
    const percentage = ((activeStepIndex + 1) / stepsWithIcons.length) * 100;
    return `${percentage}%`;
  };

  return (
    <section id="methods-steps" className="py-12">
      <div
        className={cn(
          "rounded-lg bg-card shadow-lg p-6 max-w-4xl mx-auto",
          className,
        )}
      >
        <CardHeader className="text-center pb-2">
          <CardTitle
            className="text-2xl font-semibold"
            style={{ color: colorScheme.primary }}
          >
            Entdecke die KLARE Methode
          </CardTitle>
          <CardDescription className="text-muted-foreground max-w-2xl mx-auto">
            In 5 Schritten zur vollständigen Kongruenz in allen Lebensbereichen.
            Entdecke den transformativen Prozess, der dir hilft, alle Aspekte
            deines Lebens auf deine großen Ziele auszurichten.
          </CardDescription>
        </CardHeader>

        <CardContent className="pt-6">
          {/* Mobile Navigation (nur auf kleinen Bildschirmen sichtbar) */}
          <div className="md:hidden space-y-4 mb-6">
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={handlePrevStep}
                disabled={activeStepIndex === 0}
                aria-label="Vorheriger Schritt"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>

              <div className="flex-1 bg-muted rounded-full h-2 overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-300"
                  style={{
                    width: getProgressStyle(),
                    backgroundColor: getStepColor(
                      stepsWithIcons[activeStepIndex],
                      colorScheme,
                    ),
                  }}
                />
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={handleNextStep}
                disabled={activeStepIndex === stepsWithIcons.length - 1}
                aria-label="Nächster Schritt"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>

            <div className="text-center">
              <span
                className="inline-flex items-center px-3 py-1 text-sm font-medium rounded-full"
                style={{
                  backgroundColor: `${getStepColor(stepsWithIcons[activeStepIndex], colorScheme)}20`,
                  color: getStepColor(
                    stepsWithIcons[activeStepIndex],
                    colorScheme,
                  ),
                }}
              >
                {stepsWithIcons[activeStepIndex].letter}:{" "}
                {stepsWithIcons[activeStepIndex].name}
              </span>
            </div>
          </div>

          {/* Desktop Tab Navigation (ab mittleren Bildschirmen sichtbar) */}
          <div className="hidden md:block mb-8">
            <Tabs
              defaultValue={activeStepIndex.toString()}
              value={activeStepIndex.toString()}
              onValueChange={(value) => setActiveStepIndex(parseInt(value))}
              className="w-full"
            >
              <div className="relative mb-6">
                <div className="absolute top-1/2 left-0 w-full h-1 -translate-y-1/2 bg-muted z-0 rounded-full" />
                <TabsList className="w-full bg-transparent justify-between relative z-10">
                  {stepsWithIcons.map((step, index) => {
                    const isActive = activeStepIndex === index;
                    const stepColor = getStepColor(step, colorScheme);

                    return (
                      <TabsTrigger
                        key={index}
                        value={index.toString()}
                        className={cn(
                          "flex flex-col items-center gap-1 data-[state=active]:shadow-none bg-background border-2 rounded-full w-16 h-16 p-0",
                          isActive
                            ? "data-[state=active]:border-primary"
                            : "border-transparent",
                        )}
                        style={{
                          borderColor: isActive ? stepColor : "transparent",
                          backgroundColor: isActive
                            ? `${stepColor}10`
                            : "white",
                        }}
                      >
                        <div
                          className="flex flex-col items-center justify-center rounded-full w-12 h-12"
                          style={{
                            backgroundColor: stepColor,
                            opacity: isActive ? 1 : 0.7,
                          }}
                        >
                          <span className="text-white font-bold">
                            {step.letter}
                          </span>
                          {React.createElement(step.icon as LucideIcon, {
                            size: 14,
                            className: "text-white mt-1",
                          })}
                        </div>
                      </TabsTrigger>
                    );
                  })}
                </TabsList>
              </div>

              <div className="flex justify-between text-center text-xs pt-1">
                {stepsWithIcons.map((step, index) => (
                  <div
                    key={index}
                    className="w-16 flex flex-col items-center"
                    style={{
                      color:
                        activeStepIndex === index
                          ? getStepColor(step, colorScheme)
                          : "var(--muted-foreground)",
                    }}
                  >
                    <span className="font-medium">{step.name}</span>
                    <span className="text-[10px] text-muted-foreground mt-1 max-w-[80px]">
                      {step.description}
                    </span>
                  </div>
                ))}
              </div>

              {/* Tabs Content */}
              {stepsWithIcons.map((step, index) => (
                <TabsContent
                  key={index}
                  value={index.toString()}
                  className="mt-6"
                >
                  <Card>
                    <CardHeader
                      className="flex flex-row items-center gap-4 pb-2"
                      style={{ color: getStepColor(step, colorScheme) }}
                    >
                      <div
                        className="p-2 rounded-full"
                        style={{
                          backgroundColor: `${getStepColor(step, colorScheme)}20`,
                        }}
                      >
                        {React.createElement(step.icon as LucideIcon, {
                          size: 20,
                        })}
                      </div>
                      <div>
                        <CardTitle>{step.name}</CardTitle>
                        <CardDescription className="text-foreground/70">
                          {step.description}
                        </CardDescription>
                      </div>
                    </CardHeader>
                    <CardContent className="text-muted-foreground">
                      {step.content}
                    </CardContent>
                    <CardFooter className="justify-end text-sm">
                      <span
                        className="text-sm"
                        style={{ color: getStepColor(step, colorScheme) }}
                      >
                        Bald verfügbar
                      </span>
                    </CardFooter>
                  </Card>
                </TabsContent>
              ))}
            </Tabs>
          </div>

          {/* Mobile Content View */}
          <div className="md:hidden mt-4">
            <Card>
              <CardHeader
                className="flex flex-row items-center gap-3 pb-2"
                style={{
                  color: getStepColor(
                    stepsWithIcons[activeStepIndex],
                    colorScheme,
                  ),
                }}
              >
                <div
                  className="p-2 rounded-full"
                  style={{
                    backgroundColor: `${getStepColor(stepsWithIcons[activeStepIndex], colorScheme)}20`,
                  }}
                >
                  {React.createElement(
                    stepsWithIcons[activeStepIndex].icon as LucideIcon,
                    { size: 18 },
                  )}
                </div>
                <div>
                  <CardTitle className="text-base">
                    {stepsWithIcons[activeStepIndex].name}
                  </CardTitle>
                  <CardDescription className="text-foreground/70 text-xs">
                    {stepsWithIcons[activeStepIndex].description}
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent className="text-muted-foreground text-sm">
                {stepsWithIcons[activeStepIndex].content}
              </CardContent>
              <CardFooter className="justify-end text-xs">
                <span
                  className="text-xs"
                  style={{
                    color: getStepColor(
                      stepsWithIcons[activeStepIndex],
                      colorScheme,
                    ),
                  }}
                >
                  Bald verfügbar
                </span>
              </CardFooter>
            </Card>
          </div>
        </CardContent>

        {/* Learn More Button */}
        <div className="flex justify-center mt-6">
          <Button
            variant="link"
            className="gap-1.5 font-medium"
            style={{ color: colorScheme.primary }}
          >
            <span>Mehr über die KLARE Kongruenz-Methode erfahren</span>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MethodSteps;
