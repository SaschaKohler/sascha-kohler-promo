import '@/app/styles/gradients.css';
import '@/app/styles/animations.css';
import KlareMaintenanceMode from '@/components/home/maintenance/KlareMaintenanceMode';
import SaschaKohlerWebsite from '@/components/SaschaKohlerWebsite';
import DailyGradientBackground from '@/components/layout/DailyGradientBackground';
import LaunchAnnouncementContent from '@/components/home/maintenance/LaunchAnnouncementContent';

export default function Home() {
  // Hier könntest du einen Umschalter für den Wartungsmodus implementieren
  // z.B. basierend auf Umgebungsvariablen oder einem API-Aufruf
  const isMaintenanceMode = true;

  return (
    <main className="theme-transition">
      {/* {isMaintenanceMode ? <KlareMaintenanceMode /> : <SaschaKohlerWebsite />} */}
      {isMaintenanceMode ? <LaunchAnnouncementContent /> : <SaschaKohlerWebsite />}
    </main>
  );
}
