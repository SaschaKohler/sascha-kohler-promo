'use client';
import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { useColorScheme } from '@/contexts/ColorSchemeContext';
import { ChevronDown, Home, Activity, Search, Menu, X, Construction } from 'lucide-react';
import { LegalFooter } from '@/components/layout/footer';
import useElementVisibility from '@/hooks/useElementVisibility';

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
  const [scrollProgress, setScrollProgress] = useState(0);

  const [footerRef, isFooterVisible] = useElementVisibility<HTMLDivElement>({
    threshold: 0.2, // Trigger when 20% of the footer is visible
    rootMargin: '0px 0px 0px 0px',
  });
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

  // Handle scroll events to update progress
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // Show scroll-to-top button after scrolling 500px
      // setShowScrollTop(scrollPosition > 500);

      // Calculate scroll progress percentage
      const progress = (scrollPosition / (documentHeight - windowHeight)) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavChange = (section: 'launch' | 'lifeweel' | 'klare') => {
    setActiveSection(section);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Progress bar */}
      <div
        className="fixed top-0 left-0 h-0.5 z-50 transition-all duration-300"
        style={{
          width: `${scrollProgress}%`,
          background: `linear-gradient(to right, ${colorScheme.primary}, ${colorScheme.accent})`,
        }}
      />

      {/* Header with Logo */}
      {/* <nav */}
      {/*   className="fixed top-0 left-0 w-full bg-opacity-90 border-b z-40 transition-all duration-300" */}
      {/*   style={{ */}
      {/*     backgroundColor: colorScheme.background, */}
      {/*     borderColor: `${colorScheme.primary}20`, */}
      {/*   }} */}
      {/* > */}
      {/*   <div className="container mx-auto px-6 py-4 flex justify-between items-center"> */}
      {/*     <div className="flex items-center"> */}
      {/* Stylized Text Logo */}
      {/*       <div */}
      {/*         className="text-3xl tracking-wider font-light" */}
      {/*         style={{ color: colorScheme.primary }} */}
      {/*       > */}
      {/*         SASCH */}
      {/*         <span */}
      {/*           className="relative inline-block transform translate-y-[-3px] font-normal" */}
      {/*           style={{ color: colorScheme.complement }} */}
      {/*         > */}
      {/*           A */}
      {/*         </span> */}
      {/*         KOHLER */}
      {/*       </div> */}
      {/*     </div> */}
      {/**/}
      {/*     <div */}
      {/*       className="flex items-center space-x-3" */}
      {/*       style={{ color: `${colorScheme.primary}80` }} */}
      {/*     > */}
      {/*       <Construction size={20} /> */}
      {/*       <span className="hidden sm:inline text-sm tracking-wide">WEBSITE IM AUFBAU</span> */}
      {/*     </div> */}
      {/*   </div> */}
      {/* </nav> */}
      {/**/}
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

      <LegalFooter colorScheme={colorScheme} footerRef={footerRef} />
      {/* Optional: Back to Top Button */}
      {/* <button */}
      {/*   className="fixed bottom-6 right-6 p-3 rounded-full shadow-lg text-white" */}
      {/*   style={{ backgroundColor: colorScheme.primary }} */}
      {/*   onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} */}
      {/* > */}
      {/*   <ChevronDown size={24} className="transform rotate-180" /> */}
      {/* </button> */}
    </div>
  );
};

export default LaunchAnnouncementContent;
