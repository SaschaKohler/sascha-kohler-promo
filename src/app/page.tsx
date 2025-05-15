import '@/app/styles/gradients.css';
import '@/app/styles/animations.css';
import KlareAppRedirectPage from '@/components/home/KlareAppRedirectPage';
import SaschaKohlerWebsite from '@/components/SaschaKohlerWebsite';
import DailyGradientBackground from '@/components/layout/DailyGradientBackground';

export default function Home() {
  return (
    <main className="theme-transition">
      <KlareAppRedirectPage />
    </main>
  );
}
