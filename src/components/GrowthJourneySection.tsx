'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useColorScheme } from '@/contexts/ColorSchemeContext';

const GrowthJourneySection = () => {
  const { colorScheme } = useColorScheme();
  const [activePhase, setActivePhase] = useState<string | null>(null);
  const [expanded, setExpanded] = useState(false);

  // Die verschiedenen Wachstumsphasen mit zugehörigen Gedanken/Einsichten
  const growthPhases = [
    {
      id: 'challenge',
      label: 'Herausforderung',
      color: '#6366F1', // Indigo
      insights: [
        'Jede Herausforderung enthält ein verborgenes Geschenk',
        'Schwierigkeiten sind Einladungen zur Selbstreflexion',
        'In der Herausforderung liegt ungenutztes Potenzial',
      ],
    },
    {
      id: 'reflection',
      label: 'Reflexion',
      color: '#8B5CF6', // Violet
      insights: [
        'Bewusstes Innehalten schafft Klarheit und Perspektive',
        'Durch Reflexion entdecken wir neue Möglichkeiten',
        'Einsicht entsteht, wenn wir einen Schritt zurücktreten',
      ],
    },
    {
      id: 'learning',
      label: 'Lernen',
      color: '#EC4899', // Pink
      insights: [
        'Lernen ist der Prozess, uns selbst neu kennenzulernen',
        'Jede neue Erkenntnis erweitert unser Bewusstsein',
        'Lernen geschieht, wenn wir offen für das Unbekannte sind',
      ],
    },
    {
      id: 'integration',
      label: 'Integration',
      color: '#F59E0B', // Amber
      insights: [
        'Integration verbindet neue Erkenntnisse mit unserer Identität',
        'Das Neue wird Teil unseres erweiterten Selbst',
        'Durch Integration entsteht nachhaltige Veränderung',
      ],
    },
    {
      id: 'growth',
      label: 'Wachstum',
      color: '#10B981', // Emerald
      insights: [
        'Wachstum ist die Summe bewusst integrierter Erfahrungen',
        'Persönliches Wachstum verändert unsere Beziehung zum Leben',
        'Im Wachstum erkennen wir tiefere Bedeutung und Sinn',
      ],
    },
  ];

  // Funktion, um die Farbe anhand des aktiven Farbschemas zu bestimmen
  const getGradientColors = () => {
    return {
      from: colorScheme.primary,
      to: colorScheme.accent,
    };
  };

  // Funktion, um die Farbe anhand des aktiven Farbschemas zu bestimmen
  const getGradientColorsBackgrounds = () => {
    return {
      from: colorScheme.background,
      to: colorScheme.complement,
    };
  };
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.3,
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  const quoteVariants = {
    initial: { y: 0 },
    hover: {
      y: -5,
      transition: {
        duration: 0.3,
        yoyo: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  const circleVariants = {
    initial: {
      scale: 1,
      boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    },
    hover: {
      scale: 1.05,
      boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.15)',
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
      },
    },
    tap: {
      scale: 0.98,
      boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
      transition: {
        duration: 0.1,
        ease: 'easeInOut',
      },
    },
    active: {
      scale: 1.1,
      boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.2)',
      y: -5,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  const pathVariants = {
    hidden: {
      pathLength: 0,
      opacity: 0,
    },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        duration: 1.5,
        ease: 'easeInOut',
      },
    },
  };

  const insightContainerVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      height: 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      height: 'auto',
      transition: {
        duration: 0.6,
        ease: 'easeOut',
        when: 'beforeChildren',
        staggerChildren: 0.2,
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      height: 0,
      transition: {
        duration: 0.4,
        ease: 'easeIn',
      },
    },
  };

  const insightItemVariants = {
    hidden: {
      opacity: 0,
      x: -10,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: 'easeOut',
      },
    },
  };

  // Background particles animation
  const Particles = () => {
    const particles = Array.from({ length: 15 }, (_, i) => i);
    const { from, to } = getGradientColors();

    return (
      <div className="absolute inset-0 overflow-hidden z-0">
        {particles.map(i => (
          <motion.div
            key={i}
            className="absolute rounded-full opacity-20"
            initial={{
              x: Math.random() * 100 + '%',
              y: Math.random() * 100 + '%',
              scale: Math.random() * 0.4 + 0.6,
            }}
            animate={{
              y: [Math.random() * 100 + '%', Math.random() * 100 + '%', Math.random() * 100 + '%'],
              x: [Math.random() * 100 + '%', Math.random() * 100 + '%', Math.random() * 100 + '%'],
              rotate: [0, Math.random() * 360],
            }}
            transition={{
              duration: Math.random() * 20 + 20,
              repeat: Infinity,
              ease: 'linear',
            }}
            style={{
              width: Math.random() * 100 + 50 + 'px',
              height: Math.random() * 100 + 50 + 'px',
              background: `radial-gradient(circle, ${
                activePhase
                  ? growthPhases.find(p => p.id === activePhase)?.color + '30'
                  : colorScheme.primary + '30'
              }, transparent 70%)`,
            }}
          />
        ))}
      </div>
    );
  };

  const { from, to } = getGradientColors();

  return (
    <motion.div
      className="relative bg-white rounded-xl p-10 shadow-md overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      style={{
        background: `linear-gradient(135deg, ${colorScheme.background},${colorScheme.background} )`,
        boxShadow: `0 10px 30px ${colorScheme.primary}20`,
      }}
    >
      <Particles />

      <div className="relative z-10">
        {/* Quote Section */}
        <motion.div className="mb-12 text-center" variants={itemVariants}>
          <motion.h3
            className="text-3xl font-bold mb-2 bg-clip-text"
            style={{
              backgroundImage: `linear-gradient(to right, ${from}, ${to})`,
              color: colorScheme.primary,
            }}
            variants={quoteVariants}
            initial="initial"
            whileHover="hover"
          >
            Das Leben ist keine Problemstellung,
          </motion.h3>
          <motion.h3
            className="text-3xl font-bold mb-8 bg-clip-text text-transparent"
            style={{
              backgroundImage: `linear-gradient(to right, ${to}, ${from})`,
            }}
            variants={quoteVariants}
            initial="initial"
            whileHover="hover"
          >
            sondern eine Einladung zum Wachstum.
          </motion.h3>
          <motion.p className="text-gray-600 italic" variants={itemVariants}>
            Berühre die Stufen, um den Wachstumsprozess zu erforschen
          </motion.p>
        </motion.div>

        {/* Growth Path Visualization */}
        <motion.div
          className="flex justify-center items-center mb-12 relative"
          variants={itemVariants}
        >
          <div className="relative w-full max-w-3xl flex justify-between items-center">
            {/* Path connecting circles */}
            <svg
              className="absolute top-1/2 left-0 w-full h-2 -translate-y-1/2 z-0"
              viewBox="0 0 100 2"
              preserveAspectRatio="none"
            >
              <motion.path
                d="M0,1 L100,1"
                stroke={
                  activePhase
                    ? growthPhases.find(p => p.id === activePhase)?.color || colorScheme.primary
                    : colorScheme.primary
                }
                strokeWidth="2"
                strokeLinecap="round"
                fill="none"
                variants={pathVariants}
              />
            </svg>

            {/* Phase circles */}
            {growthPhases.map((phase, index) => (
              <motion.div key={phase.id} className="relative z-10" variants={itemVariants}>
                <motion.button
                  className="w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center text-white font-semibold text-sm md:text-base relative z-10"
                  style={{
                    backgroundColor: index % 2 === 0 ? colorScheme.primary : colorScheme.accent,
                  }}
                  variants={circleVariants}
                  initial="initial"
                  whileHover="hover"
                  whileTap="tap"
                  animate={activePhase === phase.id ? 'active' : 'initial'}
                  onClick={() => {
                    setActivePhase(phase.id);
                    setExpanded(true);
                  }}
                >
                  {phase.label}

                  {/* Number indicator */}
                  <motion.div
                    className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-white text-xs flex items-center justify-center font-bold shadow"
                    style={{
                      color: index % 2 === 0 ? colorScheme.primary : colorScheme.accent,
                    }}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                      delay: 0.3 + index * 0.1,
                      duration: 0.4,
                      type: 'spring',
                    }}
                  >
                    {index + 1}
                  </motion.div>
                </motion.button>

                {/* Connecting path animation for active phase */}
                {activePhase === phase.id && (
                  <motion.div
                    className="absolute left-1/2 -translate-x-1/2 w-px bg-gradient-to-b from-transparent"
                    initial={{ height: 0, top: '100%' }}
                    animate={{ height: 40, top: '100%' }}
                    transition={{ duration: 0.3 }}
                    style={{
                      backgroundImage: `linear-gradient(to bottom, transparent, ${
                        index % 2 === 0 ? colorScheme.primary : colorScheme.accent
                      })`,
                    }}
                  />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Insights Container */}
        <AnimatePresence mode="wait">
          {expanded && activePhase && (
            <motion.div
              key={activePhase}
              className="bg-white bg-opacity-90 backdrop-blur-sm p-8 rounded-xl mb-8 shadow-lg max-w-3xl mx-auto border"
              variants={insightContainerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              style={{
                borderColor: colorScheme.primary + '40',
                boxShadow: `0 4px 20px ${colorScheme.primary}20`,
              }}
            >
              <motion.h4
                className="font-semibold mb-6 text-xl flex items-center"
                style={{
                  color:
                    growthPhases.findIndex(p => p.id === activePhase) % 2 === 0
                      ? colorScheme.primary
                      : colorScheme.accent,
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
              >
                <span
                  className="inline-block mr-3 w-8 h-8 rounded-full text-white font-bold flex items-center justify-center text-sm"
                  style={{
                    backgroundColor:
                      growthPhases.findIndex(p => p.id === activePhase) % 2 === 0
                        ? colorScheme.primary
                        : colorScheme.accent,
                  }}
                >
                  {growthPhases.findIndex(p => p.id === activePhase) + 1}
                </span>
                {growthPhases.find(p => p.id === activePhase)?.label}
              </motion.h4>

              <motion.ul className="space-y-4">
                {growthPhases
                  .find(p => p.id === activePhase)
                  ?.insights.map((insight, i) => (
                    <motion.li key={i} className="flex items-start" variants={insightItemVariants}>
                      <motion.span
                        className="mr-3 mt-1.5 block w-2 h-2 rounded-full flex-shrink-0"
                        style={{
                          backgroundColor:
                            growthPhases.findIndex(p => p.id === activePhase) % 2 === 0
                              ? colorScheme.primary
                              : colorScheme.accent,
                        }}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2 + i * 0.1, duration: 0.3 }}
                      />
                      <span className="text-gray-700">{insight}</span>
                    </motion.li>
                  ))}
              </motion.ul>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Reset button */}
        <motion.div className="text-center" variants={itemVariants}>
          <motion.button
            className="text-sm font-medium py-2 px-4 rounded-full transition-colors duration-300"
            style={{
              color: activePhase
                ? growthPhases.findIndex(p => p.id === activePhase) % 2 === 0
                  ? colorScheme.primary
                  : colorScheme.accent
                : colorScheme.primary,
              border: `1px solid ${
                activePhase
                  ? growthPhases.findIndex(p => p.id === activePhase) % 2 === 0
                    ? colorScheme.primary + '40'
                    : colorScheme.accent + '40'
                  : colorScheme.primary + '40'
              }`,
            }}
            whileHover={{
              backgroundColor: activePhase
                ? growthPhases.findIndex(p => p.id === activePhase) % 2 === 0
                  ? colorScheme.primary + '10'
                  : colorScheme.accent + '10'
                : colorScheme.primary + '10',
            }}
            whileTap={{ scale: 0.97 }}
            onClick={() => {
              setActivePhase(null);
              setExpanded(false);
            }}
          >
            {expanded ? 'Zurücksetzen' : 'Entdecke den Wachstumsprozess'}
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default GrowthJourneySection;
