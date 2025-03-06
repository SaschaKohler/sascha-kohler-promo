// components/NewsletterSignup.tsx
'use client';

import { useState } from 'react';
import { Sparkles } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

interface NewsletterSignupProps {
  title?: string;
  description?: string;
  buttonText?: string;
  colorScheme?: {
    primary: string;
    accent: string;
    background?: string;
  };
}

export default function NewsletterSignup({
  title = 'Erfahren Sie hier mehr zum Launch',
  description = 'Melden Sie sich für den Newsletter an und erhalten sie schon jetzt exklusive Einblicke in die KLARE-Methode.',
  buttonText = 'Anmelden',
  colorScheme = {
    primary: '#4338ca', // indigo-700
    accent: '#f97316', // orange-500
    background: '#ffffff',
  },
}: NewsletterSignupProps) {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubscribe = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email) return;

    setIsLoading(true);

    try {
      // Webhook-Implementierung
      const response = await fetch('/api/newsletter-signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        toast({
          title: 'Anmeldung erfolgreich!',
          description: 'Vielen Dank für Ihre Newsletter-Anmeldung.',
        });
        setEmail('');
      } else {
        throw new Error(data.message || 'Ein Fehler ist aufgetreten.');
      }
    } catch (error) {
      toast({
        title: 'Anmeldung fehlgeschlagen',
        description:
          error instanceof Error ? error.message : 'Bitte versuchen Sie es später erneut.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="newsletter" className="py-16">
      <Card className="max-w-2xl mx-auto shadow-lg bg-white">
        <CardContent className="p-8">
          <div className="text-center mb-6">
            <Sparkles size={28} className="mx-auto mb-4" style={{ color: colorScheme.accent }} />
            <h2 className="text-2xl font-semibold" style={{ color: colorScheme.primary }}>
              {title}
            </h2>
            <p className="text-gray-600 mt-2">{description}</p>
          </div>

          <form onSubmit={handleSubscribe} className="flex flex-col md:flex-row gap-4">
            <Input
              type="email"
              placeholder="Ihre E-Mail-Adresse"
              className="flex-grow"
              style={{
                borderColor: `${colorScheme.primary}40`,
              }}
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              disabled={isLoading}
            />
            <Button
              type="submit"
              className="px-6 py-3 font-medium transition-all duration-300 hover:shadow-md"
              style={{
                backgroundColor: colorScheme.primary,
                color: 'white',
              }}
              disabled={isLoading}
            >
              {isLoading ? 'Wird angemeldet...' : buttonText}
            </Button>
          </form>
        </CardContent>
      </Card>
    </section>
  );
}
