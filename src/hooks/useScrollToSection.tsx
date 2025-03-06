import { useCallback } from 'react';

/**
 * Eine verbesserte Implementierung für sanftes Scrollen
 * Funktioniert auch in Browsern ohne native Unterstützung für behavior: 'smooth'
 */
const smoothScrollTo = (targetPosition: number, duration: number = 800): void => {
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  let startTime: number | null = null;

  function animation(currentTime: number) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);

    // Easing-Funktion für natürlicheres Scrollverhalten
    const easeInOutCubic = (t: number): number =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    const easedProgress = easeInOutCubic(progress);

    window.scrollTo(0, startPosition + distance * easedProgress);

    if (timeElapsed < duration) {
      requestAnimationFrame(animation);
    }
  }

  requestAnimationFrame(animation);
};

/**
 * Hook zum Scrollen zu bestimmten Abschnitten auf der Seite mit verbesserter Unterstützung
 * @returns Eine Funktion, die zu einem bestimmten Abschnitt scrollt
 */
export const useScrollToSection = () => {
  /**
   * Scrollt zu einem bestimmten Abschnitt auf der Seite
   * @param sectionId - Die ID des Elements, zu dem gescrollt werden soll
   * @param options - Optionale Konfiguration des Scrollverhaltens
   */
  const scrollToSection = useCallback(
    (sectionId: string, options: { duration?: number; offset?: number } = {}) => {
      // Standardwerte für Optionen
      const { duration = 800, offset = 0 } = options;

      const element = document.getElementById(sectionId);

      if (element) {
        // Prüfen, ob der Browser smoothScroll unterstützt
        if ('scrollBehavior' in document.documentElement.style) {
          // Verwende natives Smooth Scrolling + Offset
          const offsetPosition = element.offsetTop - offset;
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth',
          });
        } else {
          // Nutze custom smoothScroll Funktion für Browser ohne native Unterstützung
          const offsetPosition = element.getBoundingClientRect().top + window.pageYOffset - offset;
          smoothScrollTo(offsetPosition, duration);
        }

        // Optional: Fokus setzen für bessere Accessibility (falls gewünscht)
        // element.focus({ preventScroll: true });
      } else {
        console.warn(`Element mit ID "${sectionId}" wurde nicht gefunden.`);
      }
    },
    []
  );

  return scrollToSection;
};

export default useScrollToSection;
