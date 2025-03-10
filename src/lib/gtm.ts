// src/lib/gtm.ts
export const GTM_ID = 'GTM-ML4SLL6T';

type CustomEvent = {
  action: string;
  category: string;
  label?: string;
  value?: number;
};

// Initialisierung des dataLayer
export const pageview = (url: string) => {
  if (typeof window !== 'undefined') {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'pageview',
      page: url,
    });
  }
};

// Für benutzerdefinierte Ereignisse
export const event = ({ action, category, label, value }: CustomEvent) => {
  if (typeof window !== 'undefined') {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'customEvent',
      eventAction: action,
      eventCategory: category,
      eventLabel: label,
      eventValue: value,
    });
  }
};

// Definiere den Typ für window, um dataLayer zu unterstützen
declare global {
  interface Window {
    dataLayer: any[];
  }
}
