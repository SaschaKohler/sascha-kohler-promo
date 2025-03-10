'use client';
import React, { useState } from 'react';
import { TreePine, Mountain, Sun, Footprints, Cloud, Wind, EarOff } from 'lucide-react';
import { motion } from 'framer-motion';

interface NaturalResilienceSectionProps {
  colorScheme: {
    name: string;
    primary: string;
    secondary: string;
    accent: string;
    complement: string;
    background: string;
  };
}

const NaturalResilienceSection: React.FC<NaturalResilienceSectionProps> = ({ colorScheme }) => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  // Basierend auf dem Lakota-Zitat und den Konzepten aus dem Video
  const resilienceSteps = [
    {
      icon: <TreePine size={48} />,
      title: "Waldverbindung",
      description: "Die heilende Kraft des Waldes nutzen, nicht nur als Spaziergang, sondern als bewusste Wahrnehmung. Im Wald sein, die Geräusche hören, das Moos fühlen, barfuß gehen.",
      quote: "Nehme dir dieses Lakota-Zitat zu Herzen: Die Natur beeilt sich nicht, und doch geschieht alles zur rechten Zeit. Der Mensch aber hetzt und wundert sich, warum er seinen Pfad nicht findet."
    },
    {
      icon: <EarOff size={48} />,
      title: "Stille wahrnehmen",
      description: "Leise sein und horchen, wie ein metaphorischer Jäger. Nicht permanent reden, sondern die Umgebung bewusst wahrnehmen. Die heilende Stille erleben und im Moment sein.",
      quote: "Der Unfriede der Menschheit entsteht dadurch, dass er seinen eigenen Rhythmus verloren hat und sich einem unnatürlichen Rhythmus unterworfen hat."
    },
    {
      icon: <Wind size={48} />,
      title: "Natürlich atmen",
      description: "Wie ein Jäger ruhig und gleichmäßig atmen, um im Einklang mit der Natur zu sein. Keine komplizierte Atemtechnik, sondern die natürliche Atmung wiederfinden.",
      quote: "Atme wie ein Jäger, bewege dich wie ein Jäger, schaue wie ein Jäger - metaphorisch gesprochen. Das sind Zugänge, die wir in der Natur wiederholen können."
    },
    {
      icon: <Mountain size={48} />,
      title: "Natürliche Herausforderungen",
      description: "Sich bewusst natürlichen Entbehrungen aussetzen: in einem kalten See schwimmen, draußen schlafen, den Körper wieder mit seiner natürlichen Umgebung vertraut machen.",
      quote: "Wenn ihr also resilienter werden wollt, dann müsst ihr euch auch gewissen Entbehrungen aussetzen können. Und dann kommen unsere Instinkte auch wieder langsam zum Vorschein."
    },
    {
      icon: <Cloud size={48} />,
      title: "Umgebung lesen",
      description: "Die Natur lesen lernen - Bäume, Wolken, Zeichen der Wildnis. Diese Fähigkeit überträgt sich auf den Alltag: Menschen besser lesen, zwischen den Zeilen verstehen.",
      quote: "Wenn ich anfange, in der Natur die Bäume zu lesen, die Natur zu lesen, die Wolken zu lesen - dann hat das auch eine Strahlkraft auf meinen Alltag."
    },
    {
      icon: <Footprints size={48} />,
      title: "Pfade ändern",
      description: "Routinen durchbrechen, neue Wege erkunden. Bleibe neugierig und ändere regelmäßig deine Routen im Wald - und im Leben. So bleibt die Wahrnehmung frisch.",
      quote: "Für diese Urinstinkte solltest du neugierig bleiben und die Abläufe auch immer wieder ändern, also auch die Routen, die du gehst im Wald, immer wieder ändern und einfach frisch bleiben in der Wahrnehmung."
    },
  ];

  return (
    <section id="natural-resilience" className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full">
          <TreePine 
            size={400} 
            className="absolute top-10 left-10 opacity-20" 
            style={{ color: colorScheme.primary }}
          />
          <Mountain 
            size={300} 
            className="absolute bottom-10 right-10 opacity-20"
            style={{ color: colorScheme.accent }}
          />
          <Sun 
            size={200} 
            className="absolute top-40 right-40 opacity-10"
            style={{ color: colorScheme.complement }}
          />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 
            className="text-3xl md:text-4xl font-semibold mb-4"
            style={{ color: colorScheme.primary }}
          >
            Natürliche Resilienz
          </h2>
          <p className="text-lg max-w-3xl mx-auto opacity-80">
            Die KLARE-Methode integriert die natürliche Verbindung als Schlüssel zur Resilienz. 
            Nicht durch künstliche Programme, sondern durch Wiederbelebung unserer instinktiven DNA.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Lakota Quote Feature Box */}
          <div 
            className="mb-12 p-6 rounded-lg shadow-lg transform hover:scale-102 transition-all duration-300"
            style={{
              background: `linear-gradient(135deg, ${colorScheme.background}, ${colorScheme.background})`,
              borderLeft: `4px solid ${colorScheme.primary}`,
            }}
          >
            <div className="flex items-start">
              <div className="mr-4">
                <Sun size={32} style={{ color: colorScheme.primary }} />
              </div>
              <div>
                <p 
                  className="text-lg md:text-xl italic font-medium mb-2"
                  style={{ color: colorScheme.primary }}
                >
                  "Die Natur beeilt sich nicht, und doch geschieht alles zur rechten Zeit. Der Mensch aber hetzt und wundert sich, warum er seinen Pfad nicht findet."
                </p>
                <p className="opacity-70">- Lakota Weisheit</p>
              </div>
            </div>
          </div>

          {/* Step Navigator */}
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 mb-8">
            {resilienceSteps.map((step, index) => (
              <div 
                key={index}
                onClick={() => setActiveStepIndex(index)}
                className={`cursor-pointer p-3 rounded-lg transition-all duration-300 text-center ${
                  activeStepIndex === index ? 'transform scale-110' : 'opacity-50 hover:opacity-80'
                }`}
                style={{
                  backgroundColor: activeStepIndex === index ? `${colorScheme.primary}10` : 'transparent',
                  borderBottom: activeStepIndex === index ? `2px solid ${colorScheme.primary}` : 'none'
                }}
              >
                <div 
                  className="mb-2 mx-auto"
                  style={{ color: activeStepIndex === index ? colorScheme.primary : `${colorScheme.primary}80` }}
                >
                  {step.icon}
                </div>
                <div className="text-xs font-medium">{step.title}</div>
              </div>
            ))}
          </div>

          {/* Active Step Content */}
          <motion.div
            key={activeStepIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-lg shadow-lg p-6 mb-8"
            style={{
              borderLeft: `4px solid ${colorScheme.primary}`,
            }}
          >
            <div className="flex flex-col md:flex-row items-start">
              <div 
                className="mb-4 md:mb-0 md:mr-6 p-4 rounded-full"
                style={{ color: colorScheme.primary, backgroundColor: `${colorScheme.primary}10` }}
              >
                {resilienceSteps[activeStepIndex].icon}
              </div>
              <div>
                <h3 
                  className="text-xl md:text-2xl font-semibold mb-3"
                  style={{ color: colorScheme.primary }}
                >
                  {resilienceSteps[activeStepIndex].title}
                </h3>
                <p className="text-gray-700 mb-4">
                  {resilienceSteps[activeStepIndex].description}
                </p>
                <div 
                  className="italic text-sm p-3 rounded"
                  style={{ backgroundColor: `${colorScheme.accent}10`, color: colorScheme.accent }}
                >
                  {resilienceSteps[activeStepIndex].quote}
                </div>
              </div>
            </div>
          </motion.div>

          {/* CTA Box */}
          <div 
            className="text-center p-6 rounded-lg shadow-lg"
            style={{
              background: `linear-gradient(135deg, ${colorScheme.primary}05, ${colorScheme.accent}10)`,
              border: `1px solid ${colorScheme.primary}20`,
            }}
          >
            <h3 
              className="text-xl font-semibold mb-3"
              style={{ color: colorScheme.primary }}
            >
              Entdecke deine natürliche Resilienz
            </h3>
            <p className="mb-6 opacity-80">
              Im Gegensatz zu künstlichen Entspannungstechniken und "Wellness-Trends" bietet 
              die KLARE-Methode einen Weg zurück zu deiner natürlichen Widerstandskraft.
            </p>
            <p 
              className="font-medium"
              style={{ color: colorScheme.accent }}
            >
              Jetzt ist die Zeit, nicht morgen, nicht übermorgen, sondern jetzt.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NaturalResilienceSection;
