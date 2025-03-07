#!/bin/bash

# Pfad zum Projektverzeichnis
PROJECT_DIR="/Users/saschakohler/Documents/01_Development/Active_Projects/sascha-kohler-website"

# Liste der nicht verwendeten Komponenten und Dateien
declare -a unused_files=(
  # Nicht genutzte Komponenten im Hauptverzeichnis
  "src/components/BackgroundAudio.tsx"
  "src/components/GrowthJourneySection.tsx"
  "src/components/InteractiveGrowthQuote.tsx"
  "src/components/KongruenzCredo.tsx"
  "src/components/KongruenzDifferenzierung.tsx"
  "src/components/KongruenzIntegration.tsx"
  "src/components/KongruenzMethode.tsx"
  "src/components/SaschaKohlerWebsite.tsx"
  "src/components/ThanksSectionFamily.tsx"
  "src/components/ValueCards.tsx"

  # Nicht genutzte Komponenten in Unterverzeichnissen
  "src/components/klare-method/KongruenzAccordion.tsx"
  "src/components/klare-method/KongruenzExplanation.tsx"
  "src/components/klare-method/KongruenzIconLists.tsx"
  "src/components/klare-method/KongruenzPopup.tsx"
  "src/components/klare-method/MethodSteps.tsx"
  "src/components/klare-method/TransformationPathway.tsx"

  # Nicht genutzte Routen
  "src/app/kongruenz-methode/layout.tsx"
  "src/app/kongruenz-methode/page.tsx"
)

# Suffix für nicht genutzte Dateien
UNUSED_SUFFIX=".unused"

# Dateien umbenennen
for file in "${unused_files[@]}"; do
  if [ -f "$PROJECT_DIR/$file" ]; then
    # Prüfen, ob die Datei bereits mit .unused endet
    if [[ "$file" != *"$UNUSED_SUFFIX" ]]; then
      mv "$PROJECT_DIR/$file" "$PROJECT_DIR/$file$UNUSED_SUFFIX"
      echo "Markiert als ungenutzt: $file"
    fi
  else
    echo "Datei nicht gefunden: $file"
  fi
done

echo "Prozess abgeschlossen. Alle nicht genutzten Dateien wurden mit $UNUSED_SUFFIX markiert."
