"use client";

import React from "react";
import { ColorScheme } from "@/utils/colorSchemes";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { comingSoonFeatures } from "@/data/comingSoonFeatures";
import { Sparkles, BarChart3, Calendar, BookOpen } from "lucide-react";

interface FeatureTeaserSectionProps {
  colorScheme: ColorScheme;
  className?: string;
}

const FeatureTeaserSection: React.FC<FeatureTeaserSectionProps> = ({
  colorScheme,
  className,
}) => {
  // Mapping für Emoji zu Lucide Icons
  const getIconComponent = (emojiIcon: string) => {
    switch (emojiIcon) {
      case "✨":
        return Sparkles;
      case "📊":
        return BarChart3;
      case "📅":
        return Calendar;
      case "📚":
        return BookOpen;
      default:
        return Sparkles;
    }
  };

  return (
    <section className={cn("py-12", className)}>
      <div className="container mx-auto px-4">
        <h2
          className="text-xl sm:text-2xl font-semibold mb-8 text-center"
          style={{ color: colorScheme.text }}
        >
          Was Sie <span style={{ color: colorScheme.primary }}>erwartet</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {comingSoonFeatures.map((feature, index) => {
            const IconComponent = getIconComponent(feature.icon);
            const isOddFeature = index % 2 !== 0;
            const cardColor = isOddFeature
              ? colorScheme.accent
              : colorScheme.primary;

            return (
              <Card
                key={index}
                className="border-t-4 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                style={{ borderTopColor: cardColor }}
              >
                <CardHeader className="pb-2">
                  <CardTitle
                    className="text-lg sm:text-xl font-medium flex items-center"
                    style={{ color: cardColor }}
                  >
                    <IconComponent className="mr-3 flex-shrink-0" size={24} />
                    <span>{feature.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm sm:text-base">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeatureTeaserSection;

