import React from 'react';
import {
  AlertTriangle,
  Battery,
  ArrowUpCircle,
  Frown,
  Smile,
  Heart,
  UserCheck,
  Shapes,
} from 'lucide-react';
import { ColorScheme } from '@/utils/colorSchemes';

interface IconListProps {
  colorScheme: ColorScheme;
}

const KongruenzIconLists: React.FC<IconListProps> = ({ colorScheme }) => {
  const inkongruenzItems = [
    {
      icon: AlertTriangle,
      text: 'Innere Konflikte und Widersprüche',
    },
    {
      icon: Battery,
      text: 'Energieverlust im Alltag',
    },
    {
      icon: ArrowUpCircle,
      text: 'Das Gefühl, gegen sich selbst zu arbeiten',
    },
    {
      icon: Frown,
      text: 'Chronische Unzufriedenheit trotz äußerer Erfolge',
    },
  ];

  const kongruenzItems = [
    {
      icon: Smile,
      text: 'Natürliche Motivation und Leichtigkeit',
    },
    {
      icon: Heart,
      text: 'Innere Ruhe und Klarheit',
    },
    {
      icon: UserCheck,
      text: 'Authentizität in allen Lebensbereichen',
    },
    {
      icon: Shapes,
      text: 'Harmonisches Zusammenspiel aller Aspekte des Lebens',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="p-4 rounded-lg" style={{ backgroundColor: `${colorScheme.primary}10` }}>
        <h4 className="font-medium mb-3" style={{ color: colorScheme.primary }}>
          Inkongruenz (Unstimmigkeit)
        </h4>
        <ul className="space-y-3">
          {inkongruenzItems.map((item, index) => (
            <li key={index} className="flex items-start">
              <span className="mr-3 mt-0.5 flex-shrink-0" style={{ color: colorScheme.primary }}>
                <item.icon size={18} />
              </span>
              <span className="text-gray-700">{item.text}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="p-4 rounded-lg" style={{ backgroundColor: `${colorScheme.accent}10` }}>
        <h4 className="font-medium mb-3" style={{ color: colorScheme.accent }}>
          Kongruenz (Stimmigkeit)
        </h4>
        <ul className="space-y-3">
          {kongruenzItems.map((item, index) => (
            <li key={index} className="flex items-start">
              <span className="mr-3 mt-0.5 flex-shrink-0" style={{ color: colorScheme.accent }}>
                <item.icon size={18} />
              </span>
              <span className="text-gray-700">{item.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default KongruenzIconLists;
