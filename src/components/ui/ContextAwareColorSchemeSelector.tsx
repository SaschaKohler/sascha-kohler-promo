'use client';
import React, { useState, useEffect } from 'react';
import { useColorScheme } from '@/contexts/ColorSchemeContext';
import { colorSchemes, findSchemeByName } from '@/utils/colorSchemes';
import { Settings, Check } from 'lucide-react';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface ColorSchemeSelectorProps {
  isFooterVisible?: boolean;
}

// Name des localStorage Keys
const COLOR_SCHEME_STORAGE_KEY = 'sascha-kohler-color-scheme';

const ContextAwareColorSchemeSelector: React.FC<ColorSchemeSelectorProps> = ({
  isFooterVisible = false,
}) => {
  const { colorScheme, setColorScheme } = useColorScheme();
  const [open, setOpen] = useState(false);

  // Beim ersten Laden des Components das gespeicherte Farbschema aus localStorage laden
  useEffect(() => {
    const loadColorScheme = () => {
      // Prüfen, ob wir im Browser sind (für Next.js SSR)
      if (typeof window !== 'undefined') {
        try {
          const savedColorSchemeName = localStorage.getItem(COLOR_SCHEME_STORAGE_KEY);
          if (savedColorSchemeName) {
            const savedScheme = findSchemeByName(savedColorSchemeName);
            if (savedScheme) {
              setColorScheme(savedScheme);
            }
          }
        } catch (error) {
          console.error('Fehler beim Laden des Farbschemas:', error);
        }
      }
    };

    loadColorScheme();
  }, [setColorScheme]);

  // Stile für das Ausblenden, wenn der Footer sichtbar ist
  const visibilityStyle = {
    opacity: isFooterVisible ? 0 : 1,
    visibility: isFooterVisible ? 'hidden' : ('visible' as 'hidden' | 'visible'),
    transition: 'opacity 0.5s ease, visibility 0.5s ease',
  };

  // Funktion zum Ändern und Speichern des Farbschemas
  const handleColorSchemeChange = scheme => {
    setColorScheme(scheme);
    setOpen(false);

    // Im localStorage speichern
    try {
      localStorage.setItem(COLOR_SCHEME_STORAGE_KEY, scheme.name);
    } catch (error) {
      console.error('Fehler beim Speichern des Farbschemas:', error);
    }
  };

  return (
    <div className="fixed bottom-3 left-3 z-50 md:bottom-5 md:right-5" style={visibilityStyle}>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8 rounded-full shadow-md bg-white/80 backdrop-blur-sm border-0 hover:bg-white/90"
            style={{
              color: colorScheme.primary,
            }}
            aria-label="Farbschema ändern"
          >
            <Settings size={14} className="opacity-70" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-56 p-2 mr-2 mb-2" align="end" alignOffset={-5} sideOffset={5}>
          <div className="space-y-1">
            <div className="px-1 py-1.5">
              <p className="text-xs font-medium text-muted-foreground">Farbschema wählen</p>
            </div>

            <div className="grid grid-cols-1 gap-1">
              {colorSchemes.map(scheme => (
                <Button
                  key={scheme.name}
                  variant="ghost"
                  className={cn(
                    'text-xs justify-start font-normal h-8',
                    scheme.name === colorScheme.name && 'bg-muted'
                  )}
                  style={{ color: scheme.primary }}
                  onClick={() => handleColorSchemeChange(scheme)}
                >
                  <div className="flex items-center w-full">
                    <div
                      className="h-4 w-4 rounded-full mr-2 flex-shrink-0 border"
                      style={{
                        background: `linear-gradient(135deg, ${scheme.primary}, ${scheme.accent})`,
                        borderColor:
                          scheme.name === colorScheme.name ? scheme.primary : 'transparent',
                      }}
                    ></div>
                    <span className="flex-1 text-left truncate">{scheme.name}</span>
                    {scheme.name === colorScheme.name && <Check className="h-3.5 w-3.5 ml-auto" />}
                  </div>
                </Button>
              ))}
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default ContextAwareColorSchemeSelector;
