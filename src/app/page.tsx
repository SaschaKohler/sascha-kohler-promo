import "@/app/gradients.css";
import MaintenanceMode from "@/components/MaintenanceMode";
import SaschaKohlerWebsite from "@/components/SaschaKohlerWebsite";
import SeoMetaData from "@/components/SeoMetaData";

export default function Home() {
  // Hier könntest du einen Umschalter für den Wartungsmodus implementieren
  // z.B. basierend auf Umgebungsvariablen oder einem API-Aufruf
  const isMaintenanceMode = true;

  return (
    <main>
      <SeoMetaData />
      {isMaintenanceMode ? <MaintenanceMode /> : <SaschaKohlerWebsite />}
    </main>
  );
}
