#!/bin/bash

# Migrationsskript für die Umstrukturierung des Sascha Kohler Website Projekts
# Führe dieses Skript im Root-Verzeichnis des Projekts aus

# Variablen
PROJECT_DIR="/Users/saschakohler/Documents/01_Development/Active_Projects/sascha-kohler-website"
SRC_DIR="$PROJECT_DIR/src"
BACKUP_DIR="$PROJECT_DIR/backup_$(date +%Y%m%d_%H%M%S)"

# Farbcodes für Konsolenausgabe
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Funktionen
log_success() {
  echo -e "${GREEN}✓ $1${NC}"
}

log_warning() {
  echo -e "${YELLOW}⚠ $1${NC}"
}

log_error() {
  echo -e "${RED}✗ $1${NC}"
}

# Backup erstellen
backup_project() {
  echo "Erstelle Backup des Projekts in $BACKUP_DIR..."
  mkdir -p "$BACKUP_DIR"
  cp -r "$SRC_DIR" "$BACKUP_DIR/"
  log_success "Backup erstellt in $BACKUP_DIR"
}

# Entferne .unused Suffixe
clean_unused_files() {
  echo "Entferne .unused Suffixe von Dateien..."
  find "$SRC_DIR" -name "*.unused" | while read file; do
    new_name="${file%.unused}"
    mv "$file" "$new_name"
    echo "  Umbenannt: $(basename "$file") -> $(basename "$new_name")"
  done
  log_success "Alle .unused Suffixe entfernt"
}

# Erstelle neue Ordnerstruktur
create_folder_structure() {
  echo "Erstelle neue Ordnerstruktur..."

  # Hauptordner
  mkdir -p "$SRC_DIR/components/common/theme"
  mkdir -p "$SRC_DIR/components/layout/footer"
  mkdir -p "$SRC_DIR/components/layout/navigation"
  mkdir -p "$SRC_DIR/components/home/maintenance"
  mkdir -p "$SRC_DIR/components/home/sections"
  mkdir -p "$SRC_DIR/components/kongruenz-methode"
  mkdir -p "$SRC_DIR/components/selbstcheck"
  mkdir -p "$SRC_DIR/data/klare-methode"

  log_success "Neue Ordnerstruktur erstellt"
}

# Migriere Layout-Komponenten
migrate_layout_components() {
  echo "Migriere Layout-Komponenten..."

  # Footer
  if [ -f "$SRC_DIR/components/layout/Footer.tsx" ]; then
    mv "$SRC_DIR/components/layout/Footer.tsx" "$SRC_DIR/components/layout/footer/Footer.tsx"
    log_success "Footer.tsx verschoben"
  else
    log_warning "Footer.tsx nicht gefunden"
  fi

  # Navigation
  if [ -f "$SRC_DIR/components/layout/Navigation.tsx" ]; then
    mv "$SRC_DIR/components/layout/Navigation.tsx" "$SRC_DIR/components/layout/navigation/Navigation.tsx"
    log_success "Navigation.tsx verschoben"
  else
    log_warning "Navigation.tsx nicht gefunden"
  fi

  # ScrollToTop
  if [ -f "$SRC_DIR/components/layout/ScrollToTop.tsx" ]; then
    mv "$SRC_DIR/components/layout/ScrollToTop.tsx" "$SRC_DIR/components/layout/ScrollToTop.tsx"
    log_success "ScrollToTop.tsx verschoben"
  else
    log_warning "ScrollToTop.tsx nicht gefunden"
  fi
}

# Migriere Theme-Komponenten
migrate_theme_components() {
  echo "Migriere Theme-Komponenten..."

  # ColorSchemeSelector
  if [ -f "$SRC_DIR/components/common/ColorSchemeSelector.tsx" ]; then
    mv "$SRC_DIR/components/common/ColorSchemeSelector.tsx" "$SRC_DIR/components/common/theme/ColorSchemeSelector.tsx"
    log_success "ColorSchemeSelector.tsx verschoben"
  else
    log_warning "ColorSchemeSelector.tsx nicht gefunden"
  fi

  # ContextAwareColorSchemeSelector
  if [ -f "$SRC_DIR/components/ui/ContextAwareColorSchemeSelector.tsx" ]; then
    mv "$SRC_DIR/components/ui/ContextAwareColorSchemeSelector.tsx" "$SRC_DIR/components/common/theme/ContextAwareColorSchemeSelector.tsx"
    log_success "ContextAwareColorSchemeSelector.tsx verschoben"
  else
    log_warning "ContextAwareColorSchemeSelector.tsx nicht gefunden"
  fi

  # ThemeLoader
  if [ -f "$SRC_DIR/components/ui/ThemeLoader.tsx" ]; then
    mv "$SRC_DIR/components/ui/ThemeLoader.tsx" "$SRC_DIR/components/common/theme/ThemeLoader.tsx"
    log_success "ThemeLoader.tsx verschoben"
  else
    log_warning "ThemeLoader.tsx nicht gefunden"
  fi
}

# Migriere Maintenance-Komponenten
migrate_maintenance_components() {
  echo "Migriere Maintenance-Komponenten..."

  # KlareMaintenanceMode
  if [ -f "$SRC_DIR/components/klare-method/KlareMaintenanceMode.tsx" ]; then
    mv "$SRC_DIR/components/klare-method/KlareMaintenanceMode.tsx" "$SRC_DIR/components/home/maintenance/KlareMaintenanceMode.tsx"
    log_success "KlareMaintenanceMode.tsx verschoben"
  else
    log_warning "KlareMaintenanceMode.tsx nicht gefunden"
  fi

  # KlareMaintenanceContent
  if [ -f "$SRC_DIR/components/klare-method/KlareMaintenanceContent.tsx" ]; then
    mv "$SRC_DIR/components/klare-method/KlareMaintenanceContent.tsx" "$SRC_DIR/components/home/maintenance/KlareMaintenanceContent.tsx"
    log_success "KlareMaintenanceContent.tsx verschoben"
  else
    log_warning "KlareMaintenanceContent.tsx nicht gefunden"
  fi
}

# Migriere Sektionen für die Homepage
migrate_section_components() {
  echo "Migriere Homepage-Sektionen..."

  # Sektion-Komponenten
  sections=(
    "FeatureTeaserSection.tsx"
    "TeaserSection.tsx"
    "InkongruenzTypenSection.tsx"
    "WhyKongruenzSection.tsx"
    "ZielgruppeSection.tsx"
  )

  for section in "${sections[@]}"; do
    if [ -f "$SRC_DIR/components/sections/$section" ]; then
      mv "$SRC_DIR/components/sections/$section" "$SRC_DIR/components/home/sections/$section"
      log_success "$section verschoben"
    else
      log_warning "$section nicht gefunden"
    fi
  done
}

# Migriere Kongruenz-Methode-Komponenten
migrate_kongruenz_methode_components() {
  echo "Migriere Kongruenz-Methode-Komponenten..."

  # KongruenzIntegration
  if [ -f "$SRC_DIR/components/KongruenzIntegration.tsx" ]; then
    mv "$SRC_DIR/components/KongruenzIntegration.tsx" "$SRC_DIR/components/kongruenz-methode/KongruenzIntegration.tsx"
    log_success "KongruenzIntegration.tsx verschoben"
  else
    log_warning "KongruenzIntegration.tsx nicht gefunden"
  fi

  # KongruenzMethode
  if [ -f "$SRC_DIR/components/KongruenzMethode.tsx" ]; then
    mv "$SRC_DIR/components/KongruenzMethode.tsx" "$SRC_DIR/components/kongruenz-methode/KongruenzMethode.tsx"
    log_success "KongruenzMethode.tsx verschoben"
  else
    log_warning "KongruenzMethode.tsx nicht gefunden"
  fi

  # KongruenzDifferenzierung
  if [ -f "$SRC_DIR/components/KongruenzDifferenzierung.tsx" ]; then
    mv "$SRC_DIR/components/KongruenzDifferenzierung.tsx" "$SRC_DIR/components/kongruenz-methode/KongruenzDifferenzierung.tsx"
    log_success "KongruenzDifferenzierung.tsx verschoben"
  else
    log_warning "KongruenzDifferenzierung.tsx nicht gefunden"
  fi

  # TransformationPathway
  if [ -f "$SRC_DIR/components/klare-method/TransformationPathway.tsx" ]; then
    mv "$SRC_DIR/components/klare-method/TransformationPathway.tsx" "$SRC_DIR/components/kongruenz-methode/TransformationPathway.tsx"
    log_success "TransformationPathway.tsx verschoben"
  else
    log_warning "TransformationPathway.tsx nicht gefunden"
  fi
}

# Migriere Selbstcheck-Komponenten
migrate_selbstcheck_components() {
  echo "Migriere Selbstcheck-Komponenten..."

  # KlareSelbstCheck
  if [ -f "$SRC_DIR/components/KlareSelbstCheck.tsx" ]; then
    mv "$SRC_DIR/components/KlareSelbstCheck.tsx" "$SRC_DIR/components/selbstcheck/KlareSelbstCheck.tsx"
    log_success "KlareSelbstCheck.tsx verschoben"
  else
    log_warning "KlareSelbstCheck.tsx nicht gefunden"
  fi

  # AddressSelection
  if [ -f "$SRC_DIR/components/address-selection.tsx" ]; then
    mv "$SRC_DIR/components/address-selection.tsx" "$SRC_DIR/components/selbstcheck/AddressSelection.tsx"
    log_success "address-selection.tsx -> AddressSelection.tsx verschoben"
  else
    log_warning "address-selection.tsx nicht gefunden"
  fi

  # InstructionsCard
  if [ -f "$SRC_DIR/components/instructions-card.tsx" ]; then
    mv "$SRC_DIR/components/instructions-card.tsx" "$SRC_DIR/components/selbstcheck/InstructionsCard.tsx"
    log_success "instructions-card.tsx -> InstructionsCard.tsx verschoben"
  else
    log_warning "instructions-card.tsx nicht gefunden"
  fi

  # KlareSection
  if [ -f "$SRC_DIR/components/klare-section.tsx" ]; then
    mv "$SRC_DIR/components/klare-section.tsx" "$SRC_DIR/components/selbstcheck/KlareSection.tsx"
    log_success "klare-section.tsx -> KlareSection.tsx verschoben"
  else
    log_warning "klare-section.tsx nicht gefunden"
  fi

  # ResultsDisplay
  if [ -f "$SRC_DIR/components/results-display.tsx" ]; then
    mv "$SRC_DIR/components/results-display.tsx" "$SRC_DIR/components/selbstcheck/ResultsDisplay.tsx"
    log_success "results-display.tsx -> ResultsDisplay.tsx verschoben"
  else
    log_warning "results-display.tsx nicht gefunden"
  fi
}

# Migriere Daten-Dateien
migrate_data_files() {
  echo "Migriere Daten-Dateien..."

  # Kongruenz-Methode Daten
  if [ -f "$SRC_DIR/data/kongruenzSteps.ts" ]; then
    mv "$SRC_DIR/data/kongruenzSteps.ts" "$SRC_DIR/data/klare-methode/kongruenzSteps.ts"
    log_success "kongruenzSteps.ts verschoben"
  else
    log_warning "kongruenzSteps.ts nicht gefunden"
  fi

  if [ -f "$SRC_DIR/data/transformationPathway.ts" ]; then
    mv "$SRC_DIR/data/transformationPathway.ts" "$SRC_DIR/data/klare-methode/transformationPathway.ts"
    log_success "transformationPathway.ts verschoben"
  else
    log_warning "transformationPathway.ts nicht gefunden"
  fi
}

# Erstellen eines index.ts in jedem Feature-Ordner
create_barrel_exports() {
  echo "Erstelle Barrel-Export-Dateien (index.ts)..."

  # Array mit allen Feature-Ordnern
  feature_folders=(
    "common/theme"
    "layout/footer"
    "layout/navigation"
    "home/maintenance"
    "home/sections"
    "kongruenz-methode"
    "selbstcheck"
  )

  for folder in "${feature_folders[@]}"; do
    # Erstelle index.ts Datei
    index_file="$SRC_DIR/components/$folder/index.ts"

    # Sammle alle TypeScript-Dateien im Ordner
    files=$(find "$SRC_DIR/components/$folder" -maxdepth 1 -name "*.tsx" -type f)

    if [ -n "$files" ]; then
      # Generiere den Export-Code
      echo "// Barrel export für $folder Komponenten" >"$index_file"

      # Füge einen Export für jede Datei hinzu
      for file in $files; do
        filename=$(basename "$file" .tsx)
        echo "export * from './$filename';" >>"$index_file"
        echo "export { default as $filename } from './$filename';" >>"$index_file"
      done

      log_success "index.ts für $folder erstellt"
    else
      log_warning "Keine TypeScript-Dateien in $folder gefunden, kein index.ts erstellt"
    fi
  done
}

# Hauptfunktion: Führe die Migration durch
run_migration() {
  echo "Starte Migration des Projekts..."
  echo "--------------------------------"

  # Erstelle ein Backup vor der Migration
  backup_project

  # Durchführung der Migration
  clean_unused_files
  create_folder_structure
  migrate_layout_components
  migrate_theme_components
  migrate_maintenance_components
  migrate_section_components
  migrate_kongruenz_methode_components
  migrate_selbstcheck_components
  migrate_data_files
  create_barrel_exports

  echo "--------------------------------"
  log_success "Migration abgeschlossen!"
  echo "WICHTIG: Du musst nun noch die Importpfade in den migrierten Dateien manuell anpassen."
  echo "Ein Backup deines Projekts wurde erstellt in: $BACKUP_DIR"
}

# Führe die Migration aus
run_migration
