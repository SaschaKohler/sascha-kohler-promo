'use client';
import React, { useState } from 'react';
import { useColorScheme } from '@/contexts/ColorSchemeContext';
import { Slider } from '@/components/ui/slider';
import {
  Heart,
  Users,
  Briefcase,
  Banknote,
  BookOpen,
  Dumbbell,
  Palette,
  Church,
} from 'lucide-react';
import { LegalFooter } from '../layout/footer';

interface LifeArea {
  id: string;
  name: string;
  icon: React.ReactNode;
  description: string;
  currentValue: number;
  desiredValue: number;
  color: string;
}

const LifeWheel: React.FC = () => {
  const { colorScheme } = useColorScheme();
  const [showDesired, setShowDesired] = useState(false);
  const [focusedArea, setFocusedArea] = useState<string | null>(null);

  const [lifeAreas, setLifeAreas] = useState<LifeArea[]>([
    {
      id: 'health',
      name: 'Gesundheit',
      icon: <Dumbbell size={20} />,
      description: 'Körperliches Wohlbefinden, Energie und Vitalität',
      currentValue: 6,
      desiredValue: 9,
      color: '#10B981', // emerald
    },
    {
      id: 'relationships',
      name: 'Beziehungen',
      icon: <Heart size={20} />,
      description: 'Partnerschaft, Liebe und Intimität',
      currentValue: 7,
      desiredValue: 9,
      color: '#EC4899', // pink
    },
    {
      id: 'family',
      name: 'Familie',
      icon: <Users size={20} />,
      description: 'Familiäre Verbindungen und Zusammenhalt',
      currentValue: 5,
      desiredValue: 8,
      color: '#8B5CF6', // violet
    },
    {
      id: 'career',
      name: 'Karriere',
      icon: <Briefcase size={20} />,
      description: 'Berufliche Erfüllung und Entwicklung',
      currentValue: 8,
      desiredValue: 10,
      color: '#F59E0B', // amber
    },
    {
      id: 'finances',
      name: 'Finanzen',
      icon: <Banknote size={20} />,
      description: 'Finanzielle Situation und Sicherheit',
      currentValue: 4,
      desiredValue: 8,
      color: '#6366F1', // indigo
    },
    {
      id: 'growth',
      name: 'Persönliches Wachstum',
      icon: <BookOpen size={20} />,
      description: 'Lernen, Entwicklung und Selbstverbesserung',
      currentValue: 7,
      desiredValue: 9,
      color: '#2563EB', // blue
    },
    {
      id: 'leisure',
      name: 'Freizeit',
      icon: <Palette size={20} />,
      description: 'Hobbys, Kreativität und Erholung',
      currentValue: 3,
      desiredValue: 7,
      color: '#7C3AED', // purple
    },
    {
      id: 'spirituality',
      name: 'Spiritualität',
      icon: <Church size={20} />,
      description: 'Sinn, Werte und spirituelle Verbindung',
      currentValue: 5,
      desiredValue: 8,
      color: '#059669', // green
    },
  ]);

  const updateCurrentValue = (areaId: string, value: number) => {
    setLifeAreas(prevAreas =>
      prevAreas.map(area => (area.id === areaId ? { ...area, currentValue: value } : area))
    );
  };

  const updateDesiredValue = (areaId: string, value: number) => {
    setLifeAreas(prevAreas =>
      prevAreas.map(area => (area.id === areaId ? { ...area, desiredValue: value } : area))
    );
  };

  const calculateAngle = (index: number, total: number) => {
    return (index * 360) / total;
  };

  const polarToCartesian = (radius: number, angleInDegrees: number) => {
    const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;
    return {
      x: radius * Math.cos(angleInRadians),
      y: radius * Math.sin(angleInRadians),
    };
  };

  // Wheel dimensions
  const size = 500;
  const center = size / 2;
  const radius = size * 0.4;
  const maxValue = 10;

  return (
    <>
      <div className="w-full max-w-6xl mx-auto p-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4" style={{ color: colorScheme.primary }}>
            Lebensrad
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Bewerten Sie verschiedene Bereiche Ihres Lebens, um Klarheit über Ihre aktuelle
            Situation zu gewinnen und Ihre gewünschten Ziele zu definieren.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-start">
          {/* Left Side: Wheel Visualization */}
          <div className="w-full lg:w-7/12 mb-8 lg:mb-0 flex justify-center">
            <div className="relative" style={{ width: `${size}px`, height: `${size}px` }}>
              {/* Background Circles */}
              {[...Array(maxValue)].map((_, i) => (
                <circle
                  key={`circle-${i}`}
                  cx={center}
                  cy={center}
                  r={radius * ((i + 1) / maxValue)}
                  fill="none"
                  stroke={`${colorScheme.primary}20`}
                  strokeWidth="1"
                />
              ))}

              <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
                {/* Background Circles */}
                {[...Array(maxValue)].map((_, i) => (
                  <circle
                    key={`circle-${i}`}
                    cx={center}
                    cy={center}
                    r={radius * ((i + 1) / maxValue)}
                    fill="none"
                    stroke={`${colorScheme.primary}15`}
                    strokeWidth="1"
                  />
                ))}

                {/* Divider Lines */}
                {lifeAreas.map((_, index) => {
                  const angle = calculateAngle(index, lifeAreas.length);
                  const point = polarToCartesian(radius, angle);

                  return (
                    <line
                      key={`line-${index}`}
                      x1={center}
                      y1={center}
                      x2={center + point.x}
                      y2={center + point.y}
                      stroke={`${colorScheme.primary}30`}
                      strokeWidth="1"
                    />
                  );
                })}

                {/* Area Labels */}
                {lifeAreas.map((area, index) => {
                  const angle = calculateAngle(index, lifeAreas.length);
                  const labelPoint = polarToCartesian(radius + 30, angle);

                  return (
                    <g
                      key={`label-${index}`}
                      transform={`translate(${center + labelPoint.x}, ${center + labelPoint.y})`}
                      style={{ cursor: 'pointer' }}
                      onMouseEnter={() => setFocusedArea(area.id)}
                      onMouseLeave={() => setFocusedArea(null)}
                    >
                      <text
                        textAnchor="middle"
                        dominantBaseline="middle"
                        fontSize="12"
                        fontWeight={focusedArea === area.id ? 'bold' : 'normal'}
                        fill={focusedArea === area.id ? area.color : `${colorScheme.primary}90`}
                      >
                        {area.name}
                      </text>
                    </g>
                  );
                })}

                {/* Current Value Polygon */}
                <polygon
                  points={lifeAreas
                    .map((area, index) => {
                      const angle = calculateAngle(index, lifeAreas.length);
                      const point = polarToCartesian(
                        (radius * area.currentValue) / maxValue,
                        angle
                      );
                      return `${center + point.x},${center + point.y}`;
                    })
                    .join(' ')}
                  fill={`${colorScheme.primary}40`}
                  stroke={colorScheme.primary}
                  strokeWidth="2"
                />

                {/* Desired Value Polygon (conditionally rendered) */}
                {showDesired && (
                  <polygon
                    points={lifeAreas
                      .map((area, index) => {
                        const angle = calculateAngle(index, lifeAreas.length);
                        const point = polarToCartesian(
                          (radius * area.desiredValue) / maxValue,
                          angle
                        );
                        return `${center + point.x},${center + point.y}`;
                      })
                      .join(' ')}
                    fill={`${colorScheme.accent}20`}
                    stroke={colorScheme.accent}
                    strokeWidth="2"
                    strokeDasharray="5,5"
                  />
                )}

                {/* Value Points */}
                {lifeAreas.map((area, index) => {
                  const angle = calculateAngle(index, lifeAreas.length);
                  const currentPoint = polarToCartesian(
                    (radius * area.currentValue) / maxValue,
                    angle
                  );

                  return (
                    <g key={`point-${index}`}>
                      <circle
                        cx={center + currentPoint.x}
                        cy={center + currentPoint.y}
                        r="6"
                        fill={area.color}
                        stroke="white"
                        strokeWidth="2"
                        style={{ cursor: 'pointer' }}
                        onMouseEnter={() => setFocusedArea(area.id)}
                        onMouseLeave={() => setFocusedArea(null)}
                      />

                      {showDesired &&
                        (() => {
                          const desiredPoint = polarToCartesian(
                            (radius * area.desiredValue) / maxValue,
                            angle
                          );

                          return (
                            <circle
                              cx={center + desiredPoint.x}
                              cy={center + desiredPoint.y}
                              r="5"
                              fill="white"
                              stroke={area.color}
                              strokeWidth="2"
                              style={{ cursor: 'pointer' }}
                              onMouseEnter={() => setFocusedArea(area.id)}
                              onMouseLeave={() => setFocusedArea(null)}
                            />
                          );
                        })()}
                    </g>
                  );
                })}

                {/* Center Point */}
                <circle cx={center} cy={center} r="4" fill={colorScheme.primary} />
              </svg>
            </div>
          </div>

          {/* Right Side: Controls */}
          <div className="w-full lg:w-5/12 lg:pl-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 mb-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold" style={{ color: colorScheme.primary }}>
                  Bewertung der Lebensbereiche
                </h3>

                <div className="flex items-center">
                  <label className="inline-flex items-center cursor-pointer">
                    <span className="mr-2 text-sm">Ziele anzeigen</span>
                    <div className="relative">
                      <input
                        type="checkbox"
                        className="sr-only peer"
                        checked={showDesired}
                        onChange={() => setShowDesired(!showDesired)}
                      />
                      <div
                        className="w-11 h-6 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all border"
                        style={{
                          backgroundColor: showDesired ? colorScheme.accent : '#CBD5E1',
                          borderColor: showDesired ? colorScheme.accent : '#CBD5E1',
                        }}
                      />
                    </div>
                  </label>
                </div>
              </div>

              <div className="space-y-6 max-h-[400px] overflow-y-auto pr-2">
                {lifeAreas.map(area => (
                  <div
                    key={area.id}
                    className={`p-4 rounded-lg transition-all duration-200 ${
                      focusedArea === area.id ? 'bg-gray-100 dark:bg-gray-700 shadow-sm' : ''
                    }`}
                    onMouseEnter={() => setFocusedArea(area.id)}
                    onMouseLeave={() => setFocusedArea(null)}
                  >
                    <div className="flex items-center mb-2">
                      <div
                        className="w-8 h-8 rounded-full flex items-center justify-center mr-3"
                        style={{ backgroundColor: `${area.color}15`, color: area.color }}
                      >
                        {area.icon}
                      </div>
                      <h4 className="font-medium" style={{ color: area.color }}>
                        {area.name}
                      </h4>
                    </div>

                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                      {area.description}
                    </p>

                    <div className="mb-4">
                      <div className="flex justify-between mb-1 text-sm">
                        <span>Aktuell: {area.currentValue}/10</span>
                        <span className="font-medium" style={{ color: area.color }}>
                          {area.currentValue <= 3
                            ? 'Niedrig'
                            : area.currentValue <= 7
                              ? 'Mittel'
                              : 'Hoch'}
                        </span>
                      </div>
                      <Slider
                        defaultValue={[area.currentValue]}
                        min={1}
                        max={10}
                        step={1}
                        onValueChange={value => updateCurrentValue(area.id, value[0])}
                        className="my-2"
                      />
                    </div>

                    {showDesired && (
                      <div>
                        <div className="flex justify-between mb-1 text-sm">
                          <span>Gewünscht: {area.desiredValue}/10</span>
                          <span style={{ color: area.color }}>
                            {area.desiredValue - area.currentValue > 0
                              ? `+${area.desiredValue - area.currentValue}`
                              : area.desiredValue - area.currentValue}
                          </span>
                        </div>
                        <Slider
                          defaultValue={[area.desiredValue]}
                          min={1}
                          max={10}
                          step={1}
                          onValueChange={value => updateDesiredValue(area.id, value[0])}
                          className="my-2"
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4" style={{ color: colorScheme.primary }}>
                Erkenntnisse
              </h3>

              <div className="space-y-3">
                {lifeAreas
                  .filter(area => area.currentValue < 5)
                  .map(area => (
                    <div
                      key={`low-${area.id}`}
                      className="flex items-start p-2 rounded-md"
                      style={{ backgroundColor: `${area.color}10` }}
                    >
                      <div
                        className="w-6 h-6 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0"
                        style={{ backgroundColor: `${area.color}20`, color: area.color }}
                      >
                        !
                      </div>
                      <div>
                        <p className="text-sm">
                          <span className="font-medium" style={{ color: area.color }}>
                            {area.name}
                          </span>
                          : Dieser Bereich könnte besondere Aufmerksamkeit erfordern (Wert:{' '}
                          {area.currentValue}/10).
                        </p>
                      </div>
                    </div>
                  ))}

                {lifeAreas
                  .filter(area => area.desiredValue - area.currentValue >= 3 && showDesired)
                  .map(area => (
                    <div
                      key={`gap-${area.id}`}
                      className="flex items-start p-2 rounded-md"
                      style={{ backgroundColor: `${colorScheme.accent}10` }}
                    >
                      <div
                        className="w-6 h-6 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0"
                        style={{
                          backgroundColor: `${colorScheme.accent}20`,
                          color: colorScheme.accent,
                        }}
                      >
                        →
                      </div>
                      <div>
                        <p className="text-sm">
                          <span className="font-medium" style={{ color: area.color }}>
                            {area.name}
                          </span>
                          : Hier besteht eine große Lücke zwischen Ist ({area.currentValue}) und
                          Soll ({area.desiredValue}).
                        </p>
                      </div>
                    </div>
                  ))}

                {lifeAreas
                  .filter(area => area.currentValue >= 8)
                  .map(area => (
                    <div
                      key={`strength-${area.id}`}
                      className="flex items-start p-2 rounded-md"
                      style={{ backgroundColor: `${area.color}10` }}
                    >
                      <div
                        className="w-6 h-6 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0"
                        style={{ backgroundColor: `${area.color}20`, color: area.color }}
                      >
                        ✓
                      </div>
                      <div>
                        <p className="text-sm">
                          <span className="font-medium" style={{ color: area.color }}>
                            {area.name}
                          </span>
                          : Dies ist ein Stärkebereich (Wert: {area.currentValue}/10).
                        </p>
                      </div>
                    </div>
                  ))}
              </div>

              <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
                <h4 className="font-medium mb-2" style={{ color: colorScheme.primary }}>
                  Nächste Schritte
                </h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Verwenden Sie die KLARE Methode, um an den Bereichen mit der größten Diskrepanz zu
                  arbeiten. Beginnen Sie mit dem Schritt "K - Klarheit", um Ihre tatsächlichen
                  Bedürfnisse zu identifizieren.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LifeWheel;
