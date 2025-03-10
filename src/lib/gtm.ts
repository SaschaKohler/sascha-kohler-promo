// src/lib/gtm.ts
export const GTM_ID = 'GTM-ML4SLL6T';

export interface CustomEvent {
  action: string;
  category: string;
  label?: string;
  value?: number;
}

// DataLayer Eigenschaften
export interface PageViewEvent {
  event: 'pageview';
  page: string;
}

export interface CustomGTMEvent {
  event: 'customEvent';
  eventAction: string;
  eventCategory: string;
  eventLabel?: string;
  eventValue?: number;
}

export type DataLayerEvent = PageViewEvent | CustomGTMEvent;

// Initialisierung des dataLayer
export const pageview = (url: string): void => {
  if (typeof window !== 'undefined') {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'pageview',
      page: url,
    });
  }
};

// Für benutzerdefinierte Ereignisse
export const event = ({ action, category, label, value }: CustomEvent): void => {
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
    dataLayer: DataLayerEvent[];
  }
}
