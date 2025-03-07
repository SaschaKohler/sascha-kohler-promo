// components/address-selection.tsx
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { AddressMode } from '@/data/klareData';

interface AddressSelectionProps {
  title: string;
  description: string;
  options: {
    du: string;
    sie: string;
  };
  onSelect: (mode: AddressMode) => void;
}

export function AddressSelection({ title, description, options, onSelect }: AddressSelectionProps) {
  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader className="text-center bg-gradient-to-r from-indigo-700 to-indigo-500 text-white">
        <CardTitle className="text-2xl md:text-3xl">
          Persönlicher KLARE Kongruenz-Selbstcheck
        </CardTitle>
        <CardDescription className="text-gray-100 text-lg opacity-90">
          Entdecke deine Kongruenz in den fünf Dimensionen
        </CardDescription>
      </CardHeader>
      <CardContent className="p-8 md:p-10 text-center">
        <h2 className="text-xl md:text-2xl font-semibold text-indigo-700 mb-6">{title}</h2>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
          <Button
            onClick={() => onSelect('du')}
            className="px-8 py-6 bg-indigo-600 hover:bg-indigo-700 text-lg"
            size="lg"
          >
            {options.du}
          </Button>
          <Button
            onClick={() => onSelect('sie')}
            className="px-8 py-6 bg-indigo-600 hover:bg-indigo-700 text-lg"
            size="lg"
          >
            {options.sie}
          </Button>
        </div>

        <p className="mt-10 text-gray-600">{description}</p>
      </CardContent>
    </Card>
  );
}
