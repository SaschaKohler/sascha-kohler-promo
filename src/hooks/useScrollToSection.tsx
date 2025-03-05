import { useCallback } from 'react';

/**
 * Hook zum Scrollen zu bestimmten Abschnitten auf der Seite
 * @returns Eine Funktion, die zu einem bestimmten Abschnitt scrollt
 */
export const useScrollToSection = () => {
  /**
   * Scrollt zu einem bestimmten Abschnitt auf der Seite
   * @param sectionId - Die ID des Elements, zu dem gescrollt werden soll
   * @param options - Optionale Konfiguration des Scrollverhaltens
   */
  const scrollToSection = useCallback((
    sectionId: string, 
    options: ScrollIntoViewOptions = { behavior: 'smooth' }
  ) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView(options);
    }
  }, []);

  return scrollToSection;
};

export default useScrollToSection;