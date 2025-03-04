import "@/app/styles/gradients.css";
import "@/app/styles/animations.css";
import KlareMaintenanceMode from "@/components/klare-method/KlareMaintenanceMode";
import MaintenanceMode from "@/data/components/MaintenanceMode";
import SaschaKohlerWebsite from "@/components/SaschaKohlerWebsite";
import SeoMetaData from "@/components/common/SeoMetaData";

export default function Home() {
  // Hier könntest du einen Umschalter für den Wartungsmodus implementieren
  // z.B. basierend auf Umgebungsvariablen oder einem API-Aufruf
  const isMaintenanceMode = true;

  return (
    <main>
      <SeoMetaData />,
      {/* {isMaintenanceMode ? <MaintenanceMode /> : <SaschaKohlerWebsite />} */}
      {isMaintenanceMode ? <KlareMaintenanceMode /> : <SaschaKohlerWebsite />}
    </main>
  );
}
