import React, { useState } from 'react';
import { useColorScheme } from '@/contexts/ColorSchemeContext';

const FeedbackForm: React.FC = () => {
  const { colorScheme } = useColorScheme();
  const [email, setEmail] = useState('');
  const [feedback, setFeedback] = useState('');
  const [interest, setInterest] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    
    // Simulate API call
    try {
      // In a real implementation, you would send this data to your backend
      console.log('Submitting feedback:', { email, feedback, interest });
      
      // Simulate processing time
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Success
      setIsSuccess(true);
      setEmail('');
      setFeedback('');
      setInterest('');
    } catch (err) {
      setError('Es gab ein Problem beim Absenden des Formulars. Bitte versuche es später erneut.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // KLARE step colors
  const stepColors = {
    K: '#6366F1', // Indigo
    L: '#8B5CF6', // Violet
    A: '#EC4899', // Pink
    R: '#F59E0B', // Amber
    E: '#10B981', // Emerald
  };

  if (isSuccess) {
    return (
      <div className="bg-white rounded-lg p-8 shadow-md">
        <div className="flex items-center justify-center mb-6">
          <div 
            className="h-16 w-16 rounded-full flex items-center justify-center text-3xl"
            style={{ backgroundColor: `${stepColors.E}20`, color: stepColors.E }}
          >
            ✓
          </div>
        </div>
        <h3 className="text-2xl font-bold text-center mb-4" style={{ color: stepColors.E }}>
          Vielen Dank für dein Feedback!
        </h3>
        <p className="text-gray-600 text-center mb-6">
          Wir haben deine Nachricht erhalten und werden dich auf dem Laufenden halten, sobald die KLARE-Methode App verfügbar ist.
        </p>
        <button
          onClick={() => setIsSuccess(false)}
          className="w-full py-2 rounded-lg text-white font-medium"
          style={{ backgroundColor: stepColors.A }}
        >
          Weiteres Feedback geben
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg p-8 shadow-md">
      <h3 className="text-2xl font-bold mb-6" style={{ color: stepColors.K }}>
        Dein Feedback zur KLARE-Methode App
      </h3>
      
      {error && (
        <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-6">
          <p className="text-red-700">{error}</p>
        </div>
      )}
      
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
            E-Mail-Adresse*
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2"
            style={{ borderColor: `${stepColors.K}40`, focusRing: stepColors.K }}
            required
            placeholder="deine@email.de"
          />
        </div>
        
        <div className="mb-4">
          <label htmlFor="interest" className="block text-gray-700 font-medium mb-2">
            Ich interessiere mich besonders für:
          </label>
          <select
            id="interest"
            value={interest}
            onChange={(e) => setInterest(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2"
            style={{ borderColor: `${stepColors.L}40`, focusRing: stepColors.L }}
          >
            <option value="">Bitte wählen...</option>
            <option value="K">K - Klarheit</option>
            <option value="L">L - Lebendigkeit</option>
            <option value="A">A - Ausrichtung</option>
            <option value="R">R - Realisierung</option>
            <option value="E">E - Entfaltung</option>
            <option value="all">Alle Aspekte</option>
          </select>
        </div>
        
        <div className="mb-6">
          <label htmlFor="feedback" className="block text-gray-700 font-medium mb-2">
            Dein Feedback / Wünsche für die App
          </label>
          <textarea
            id="feedback"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2"
            style={{ borderColor: `${stepColors.A}40`, focusRing: stepColors.A }}
            rows={4}
            placeholder="Was erhoffst du dir von der KLARE-Methode App? Welche Funktionen wünschst du dir?"
          />
        </div>
        
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-3 rounded-lg text-white font-medium transition-all"
          style={{
            background: `linear-gradient(to right, ${stepColors.K}, ${stepColors.L}, ${stepColors.A}, ${stepColors.R}, ${stepColors.E})`,
            opacity: isSubmitting ? 0.7 : 1,
          }}
        >
          {isSubmitting ? 'Wird gesendet...' : 'Feedback senden'}
        </button>
      </form>
    </div>
  );
};

export default FeedbackForm;
