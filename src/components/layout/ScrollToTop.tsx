'use client';
import React from 'react';
import { ArrowUp } from 'lucide-react';
import { useColorScheme } from '@/contexts/ColorSchemeContext';

interface ScrollToTopProps {
  onClick: () => void;
}

const ScrollToTop: React.FC<ScrollToTopProps> = ({ onClick }) => {
  const { colorScheme } = useColorScheme();

  return (
    <button
      className="fixed bottom-8 right-8 p-3 rounded-full shadow-lg z-40 text-white transition-all duration-300 transform hover:scale-110"
      style={{ backgroundColor: colorScheme.primary }}
      onClick={onClick}
    >
      <ArrowUp size={24} />
    </button>
  );
};

export default ScrollToTop;
