import { useState, useEffect, useRef, RefObject } from "react";

/**
 * Hook to detect when an element is visible in the viewport.
 * @param options Configuration for the Intersection Observer
 * @returns A tuple with a ref to attach to the element and a boolean indicating visibility
 */
const useElementVisibility = (
  options: IntersectionObserverInit = { threshold: 0.1 },
): [RefObject<HTMLElement>, boolean] => {
  const elementRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const currentElement = elementRef.current;
    if (!currentElement) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    }, options);

    observer.observe(currentElement);

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [options]);

  return [elementRef, isVisible];
};

export default useElementVisibility;
