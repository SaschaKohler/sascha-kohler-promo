'use client';
import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { useColorScheme } from '@/contexts/ColorSchemeContext';
import { ChevronDown, Home, Activity, Search, Menu, X } from 'lucide-react';

// Die LaunchAnnouncementContent Komponente, die wir vorher erstellt haben
const LaunchAnnouncement = dynamic(() => import('./LaunchAnnouncement'), { ssr: true });

const LifeWheel = dynamic(() => import('@/components/interactive/LifeWheel'), {
  ssr: false,
  loading: () => <div className="p-12 text-center">Lade Lebensrad...</div>,
});

const KlareMethodExplorer = dynamic(() => import('@/components/interactive/KlareMethodExplorer'), {
  ssr: false,
  loading: () => <div className="p-12 text-center">Lade KLARE Methode...</div>,
});

interface NavItem {
  id: 'launch' | 'lifeweel' | 'klare';
  label: string;
  icon: React.ReactNode;
}

const LaunchAnnouncementContent: React.FC = () => {
  const [activeSection, setActiveSection] = useState<'launch' | 'lifeweel' | 'klare'>('launch');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { colorScheme } = useColorScheme();

  const navItems: NavItem[] = [
    {
      id: 'launch',
      label: 'Launch',
      icon: <Home size={18} />,
    },
    {
      id: 'lifeweel',
      label: 'Lebensrad',
      icon: <Activity size={18} />,
    },
    {
      id: 'klare',
      label: 'KLARE Methode',
      icon: <Search size={18} />,
    },
  ];

  const handleNavChange = (section: 'launch' | 'lifeweel' | 'klare') => {
    setActiveSection(section);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav
        className="sticky top-0 z-50 border-b shadow-sm"
        style={{
          backgroundColor: colorScheme.background,
          borderColor: `${colorScheme.primary}20`,
        }}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <h1 className="text-xl font-semibold" style={{ color: colorScheme.primary }}>
              SASCHA KOHLER
            </h1>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-md"
              style={{ color: colorScheme.primary }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-4">
              {navItems.map(item => (
                <button
                  key={item.id}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all flex items-center`}
                  style={{
                    backgroundColor:
                      activeSection === item.id ? `${colorScheme.primary}15` : 'transparent',
                    color:
                      activeSection === item.id ? colorScheme.primary : `${colorScheme.primary}80`,
                  }}
                  onClick={() => handleNavChange(item.id)}
                >
                  <span className="mr-2">{item.icon}</span>
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile Navigation */}
          <div
            className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
              mobileMenuOpen ? 'max-h-60 pb-4' : 'max-h-0'
            }`}
          >
            <div className="flex flex-col space-y-2">
              {navItems.map(item => (
                <button
                  key={item.id}
                  className={`px-4 py-3 rounded-md text-sm font-medium transition-all flex items-center`}
                  style={{
                    backgroundColor:
                      activeSection === item.id ? `${colorScheme.primary}15` : 'transparent',
                    color:
                      activeSection === item.id ? colorScheme.primary : `${colorScheme.primary}80`,
                  }}
                  onClick={() => handleNavChange(item.id)}
                >
                  <span className="mr-2">{item.icon}</span>
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Content Sections */}
      <div className="flex-grow">
        {activeSection === 'launch' && <LaunchAnnouncement />}
        {activeSection === 'lifeweel' && (
          <div className="pt-6 pb-16">
            <LifeWheel />
          </div>
        )}
        {activeSection === 'klare' && (
          <div className="pt-6 pb-16">
            <KlareMethodExplorer />
          </div>
        )}
      </div>

      {/* Optional: Back to Top Button */}
      <button
        className="fixed bottom-6 right-6 p-3 rounded-full shadow-lg text-white"
        style={{ backgroundColor: colorScheme.primary }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <ChevronDown size={24} className="transform rotate-180" />
      </button>
    </div>
  );
};

export default LaunchAnnouncementContent;
