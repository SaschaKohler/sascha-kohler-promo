/**
 * Utility functions for working with colors and gradients
 * These functions help create consistent gradients based on the selected color scheme
 */

import { ColorScheme } from './colorSchemes';

/**
 * Creates CSS variables for a given color scheme
 * @param colorScheme - The currently active color scheme
 * @returns CSS variable string that can be used in a style element
 */
export const createColorVariables = (colorScheme: ColorScheme): string => {
  // Calculate darker and lighter variations
  const primaryDark = darkenColor(colorScheme.primary, 0.2);
  const primaryLight = lightenColor(colorScheme.primary, 0.2);
  const accentDark = darkenColor(colorScheme.accent, 0.2);
  const accentLight = lightenColor(colorScheme.accent, 0.2);

  return `
    :root {
      --color-primary: ${colorScheme.primary};
      --color-primary-dark: ${primaryDark};
      --color-primary-light: ${primaryLight};
      --color-accent: ${colorScheme.accent};
      --color-accent-dark: ${accentDark};
      --color-accent-light: ${accentLight};
      --color-background: ${colorScheme.background};
      --color-text: ${colorScheme.text};
      
      /* Predefined gradients */
      --gradient-primary: linear-gradient(to right, ${colorScheme.primary}, ${colorScheme.accent});
      --gradient-primary-vertical: linear-gradient(to bottom, ${colorScheme.primary}, ${colorScheme.accent});
      --gradient-background: linear-gradient(to bottom, white, ${colorScheme.background});
      --gradient-hero: linear-gradient(135deg, ${colorScheme.background}, white);
      --gradient-card: linear-gradient(145deg, white, ${mixColors(colorScheme.background, colorScheme.primary, 0.03)});
      --gradient-accent-card: linear-gradient(145deg, white, ${mixColors(colorScheme.background, colorScheme.accent, 0.08)});
      --gradient-button: linear-gradient(to right, ${colorScheme.primary}, ${colorScheme.accent});
      --gradient-button-hover: linear-gradient(to right, ${lightenColor(colorScheme.primary, 0.15)}, ${lightenColor(colorScheme.accent, 0.15)});
      --gradient-footer: linear-gradient(to bottom, ${darkenColor(colorScheme.primary, 0.2)}, ${darkenColor(colorScheme.primary, 0.4)});
    }
  `;
};

/**
 * Creates a CSS style object for inline React styles
 * @param colorScheme - The currently active color scheme
 * @returns Object with gradient styles
 */
export const createGradientStyles = (colorScheme: ColorScheme) => {
  return {
    primary: {
      backgroundImage: `linear-gradient(to right, ${colorScheme.primary}, ${colorScheme.accent})`,
    },
    primaryVertical: {
      backgroundImage: `linear-gradient(to bottom, ${colorScheme.primary}, ${colorScheme.accent})`,
    },
    background: {
      background: `linear-gradient(to bottom, white, ${colorScheme.background})`,
    },
    heroBackground: {
      background: `linear-gradient(135deg, ${colorScheme.background}, white)`,
    },
    button: {
      background: `linear-gradient(to right, ${colorScheme.primary}, ${colorScheme.accent})`,
    },
    buttonHover: {
      background: `linear-gradient(to right, ${lightenColor(colorScheme.primary, 0.15)}, ${lightenColor(colorScheme.accent, 0.15)})`,
    },
    card: {
      background: `linear-gradient(145deg, white, ${mixColors('white', colorScheme.primary, 0.03)})`,
    },
    highlightedCard: {
      background: `linear-gradient(145deg, white, ${mixColors('white', colorScheme.accent, 0.08)})`,
    },
    textGradient: {
      backgroundImage: `linear-gradient(to right, ${colorScheme.primary}, ${colorScheme.accent})`,
      WebkitBackgroundClip: 'text',
      backgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      color: 'transparent',
    },
    floatingElement: {
      background: `radial-gradient(circle, ${colorScheme.accent}30, transparent)`,
    },
  };
};

/**
 * Helper function to darken a color by a percentage
 */
export function darkenColor(color: string, amount: number): string {
  // Convert hex to RGB
  let r, g, b;

  if (color.startsWith('#')) {
    color = color.substring(1);
    r = parseInt(color.substring(0, 2), 16);
    g = parseInt(color.substring(2, 4), 16);
    b = parseInt(color.substring(4, 6), 16);
  } else if (color.startsWith('rgb')) {
    const matches = color.match(/\d+/g);
    if (!matches || matches.length < 3) return color;
    r = parseInt(matches[0]);
    g = parseInt(matches[1]);
    b = parseInt(matches[2]);
  } else {
    return color;
  }

  // Darken
  r = Math.max(0, Math.floor(r * (1 - amount)));
  g = Math.max(0, Math.floor(g * (1 - amount)));
  b = Math.max(0, Math.floor(b * (1 - amount)));

  // Convert back to hex
  return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
}

/**
 * Helper function to lighten a color by a percentage
 */
export function lightenColor(color: string, amount: number): string {
  // Convert hex to RGB
  let r, g, b;

  if (color.startsWith('#')) {
    color = color.substring(1);
    r = parseInt(color.substring(0, 2), 16);
    g = parseInt(color.substring(2, 4), 16);
    b = parseInt(color.substring(4, 6), 16);
  } else if (color.startsWith('rgb')) {
    const matches = color.match(/\d+/g);
    if (!matches || matches.length < 3) return color;
    r = parseInt(matches[0]);
    g = parseInt(matches[1]);
    b = parseInt(matches[2]);
  } else {
    return color;
  }

  // Lighten
  r = Math.min(255, Math.floor(r + (255 - r) * amount));
  g = Math.min(255, Math.floor(g + (255 - g) * amount));
  b = Math.min(255, Math.floor(b + (255 - b) * amount));

  // Convert back to hex
  return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
}

/**
 * Helper function to mix two colors
 * @param color1 - First color (hex or rgb format)
 * @param color2 - Second color (hex or rgb format)
 * @param weight - Weight of the second color (0 to 1)
 */
export function mixColors(color1: string, color2: string, weight: number): string {
  // Convert colors to RGB
  const c1 = parseColor(color1);
  const c2 = parseColor(color2);

  if (!c1 || !c2) return color1;

  // Mix colors
  const w = Math.max(0, Math.min(1, weight)); // Clamp weight between 0 and 1
  const r = Math.round(c1.r * (1 - w) + c2.r * w);
  const g = Math.round(c1.g * (1 - w) + c2.g * w);
  const b = Math.round(c1.b * (1 - w) + c2.b * w);

  return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
}

// Helper to parse color to RGB object
function parseColor(color: string): { r: number; g: number; b: number } | null {
  // Parse hex color
  if (color.startsWith('#')) {
    const hex = color.substring(1);
    return {
      r: parseInt(hex.substring(0, 2), 16),
      g: parseInt(hex.substring(2, 4), 16),
      b: parseInt(hex.substring(4, 6), 16),
    };
  }
  // Parse rgb/rgba color
  else if (color.startsWith('rgb')) {
    const matches = color.match(/\d+/g);
    if (!matches || matches.length < 3) return null;
    return {
      r: parseInt(matches[0]),
      g: parseInt(matches[1]),
      b: parseInt(matches[2]),
    };
  }
  return null;
}

/**
 * Create a CSS gradient with the given colors and optional angle
 */
export function createGradient(color1: string, color2: string, angle: string = 'to right'): string {
  return `linear-gradient(${angle}, ${color1}, ${color2})`;
}

/**
 * Create a radial gradient
 */
export function createRadialGradient(
  centerColor: string,
  outerColor: string = 'transparent'
): string {
  return `radial-gradient(circle, ${centerColor}, ${outerColor})`;
}

/**
 * Create a color with opacity
 * @param color - Base color (hex format)
 * @param opacity - Opacity value (0 to 1)
 * @returns Color with opacity in rgba format
 */
export function colorWithOpacity(color: string, opacity: number): string {
  const rgb = parseColor(color);
  if (!rgb) return color;
  return `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${opacity})`;
}

export default {
  createColorVariables,
  createGradientStyles,
  darkenColor,
  lightenColor,
  mixColors,
  createGradient,
  createRadialGradient,
  colorWithOpacity,
};
