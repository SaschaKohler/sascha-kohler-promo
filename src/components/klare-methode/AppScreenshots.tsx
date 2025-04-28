import React, { useState } from 'react';
import Image from 'next/image';

type Screenshot = {
  id: string;
  title: string;
  description: string;
  imagePath: string;
};

const screenshots: Screenshot[] = [
  {
    id: 'lebensrad',
    title: 'Lebensrad',
    description: 'Bewerten Sie verschiedene Bereiche Ihres Lebens, um Klarheit zu gewinnen. Vergleichen Sie Ihren aktuellen Zustand mit Ihren Zielwerten.',
    imagePath: '/images/klare-app/lebensrad.png'
  },
  {
    id: 'home',
    title: 'Home Screen',
    description: 'Tägliche Übungen, aktive Module und Tipps des Tages für Ihre persönliche Kongruenz-Reise.',
    imagePath: '/images/klare-app/home.png'
  },
  {
    id: 'klare-method',
    title: 'KLARE Methode',
    description: 'Erkunden Sie jeden Schritt der KLARE Methode: Klarheit, Lebendigkeit, Ausrichtung, Realisierung und Entfaltung.',
    imagePath: '/images/klare-app/klare-method.png'
  },
  {
    id: 'profile',
    title: 'Mein Profil',
    description: 'Verfolgen Sie Ihren Fortschritt, passen Sie Einstellungen an und sehen Sie Ihre Erfolge in der KLARE Methode.',
    imagePath: '/images/klare-app/profile.png'
  },
  {
    id: 'welcome',
    title: 'Willkommen',
    description: 'Entdecken Sie den Weg zu mehr Kongruenz und authentischem Selbstausdruck in allen Lebensbereichen.',
    imagePath: '/images/klare-app/welcome.png'
  }
];

const AppScreenshots: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const nextSlide = () => {
    setActiveIndex((current) => (current === screenshots.length - 1 ? 0 : current + 1));
  };
  
  const prevSlide = () => {
    setActiveIndex((current) => (current === 0 ? screenshots.length - 1 : current - 1));
  };
  
  const activeScreenshot = screenshots[activeIndex];
  
  return (
    <div className="my-12">
      <div className="flex flex-col md:flex-row items-center gap-8">
        {/* Phone Frame with Screenshot */}
        <div className="relative w-64 md:w-80 mx-auto">
          <div className="relative w-full h-full rounded-3xl overflow-hidden border-2 border-gray-800 bg-gray-900 shadow-xl">
            {/* Notch */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-7 bg-gray-900 rounded-b-2xl z-10"></div>
            
            {/* Status Bar */}
            <div className="w-full h-10 bg-gray-900"></div>
            
            {/* Screenshot */}
            <div className="relative w-full aspect-[9/19.5]">
              <Image
                src={activeScreenshot.imagePath}
                alt={activeScreenshot.title}
                width={390}
                height={844}
                className="w-full h-full object-cover"
                priority
                onError={(e) => {
                  // Fallback to placeholder if image fails to load
                  const target = e.target as HTMLImageElement;
                  target.src = "/api/placeholder/390/844";
                  target.alt = `${activeScreenshot.title} (Placeholder)`;
                }}
              />
            </div>
            
            {/* Home Indicator */}
            <div className="w-full h-6 bg-gray-900 flex justify-center items-center">
              <div className="w-1/3 h-1 bg-gray-600 rounded-full"></div>
            </div>
          </div>
          
          {/* Navigation Controls */}
          <div className="absolute top-1/2 -left-12 -translate-y-1/2">
            <button 
              onClick={prevSlide} 
              className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-all"
              aria-label="Vorheriger Screenshot"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          </div>
          
          <div className="absolute top-1/2 -right-12 -translate-y-1/2">
            <button 
              onClick={nextSlide} 
              className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-all"
              aria-label="Nächster Screenshot"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Screenshot Description */}
        <div className="md:w-1/2">
          <h3 className="text-2xl font-bold mb-4">{activeScreenshot.title}</h3>
          <p className="text-gray-600 mb-6">{activeScreenshot.description}</p>
          
          {/* Indicators */}
          <div className="flex gap-2 justify-center md:justify-start">
            {screenshots.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-2 w-8 rounded-full transition-all ${index === activeIndex ? 'bg-indigo-500' : 'bg-gray-300'}`}
                aria-label={`Gehe zu Screenshot ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppScreenshots;
