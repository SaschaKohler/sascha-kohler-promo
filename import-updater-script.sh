#!/bin/bash

# Korrigiertes Skript zum Aktualisieren der Import-Pfade nach der Umstrukturierung
# Führe dieses Skript aus, nachdem du das migration-script.sh ausgeführt hast

# Variablen
PROJECT_DIR="/Users/saschakohler/Documents/01_Development/Active_Projects/sascha-kohler-website"
SRC_DIR="$PROJECT_DIR/src"
LOG_FILE="$PROJECT_DIR/import_updates.log"

# Farbcodes für Konsolenausgabe
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Funktionen
log_success() {
  echo -e "${GREEN}✓ $1${NC}"
  echo "SUCCESS: $1" >>"$LOG_FILE"
}

log_warning() {
  echo -e "${YELLOW}⚠ $1${NC}"
  echo "WARNING: $1" >>"$LOG_FILE"
}

log_error() {
  echo -e "${RED}✗ $1${NC}"
  echo "ERROR: $1" >>"$LOG_FILE"
}

log() {
  echo "$1"
  echo "$1" >>"$LOG_FILE"
}

# Aktualisiere Importpfade
update_imports() {
  echo "Starte Aktualisierung der Import-Pfade..."
  echo "----------------------------------------" >>"$LOG_FILE"
  echo "Import-Pfad-Aktualisierungen:" >>"$LOG_FILE"
  echo "----------------------------------------" >>"$LOG_FILE"

  # Gehe alle TypeScript/TSX-Dateien durch
  find "$SRC_DIR" -type f \( -name "*.ts" -o -name "*.tsx" \) | while read -r file; do
    log "Prüfe Datei: $file"

    # Layout-Komponenten
    sed -i "" "s|@/components/layout/Footer|@/components/layout/footer/Footer|g" "$file"
    sed -i "" "s|@/components/layout/Navigation|@/components/layout/navigation/Navigation|g" "$file"

    # Theme-Komponenten
    sed -i "" "s|@/components/common/ColorSchemeSelector|@/components/common/theme/ColorSchemeSelector|g" "$file"
    sed -i "" "s|@/components/ui/ContextAwareColorSchemeSelector|@/components/common/theme/ContextAwareColorSchemeSelector|g" "$file"
    sed -i "" "s|@/components/ui/ThemeLoader|@/components/common/theme/ThemeLoader|g" "$file"

    # Maintenance-Komponenten
    sed -i "" "s|@/components/klare-method/KlareMaintenanceMode|@/components/home/maintenance/KlareMaintenanceMode|g" "$file"
    sed -i "" "s|@/components/klare-method/KlareMaintenanceContent|@/components/home/maintenance/KlareMaintenanceContent|g" "$file"

    # Sektion-Komponenten
    sed -i "" "s|@/components/sections/FeatureTeaserSection|@/components/home/sections/FeatureTeaserSection|g" "$file"
    sed -i "" "s|@/components/sections/TeaserSection|@/components/home/sections/TeaserSection|g" "$file"
    sed -i "" "s|@/components/sections/InkongruenzTypenSection|@/components/home/sections/InkongruenzTypenSection|g" "$file"
    sed -i "" "s|@/components/sections/WhyKongruenzSection|@/components/home/sections/WhyKongruenzSection|g" "$file"
    sed -i "" "s|@/components/sections/ZielgruppeSection|@/components/home/sections/ZielgruppeSection|g" "$file"

    # Kongruenz-Methode-Komponenten
    sed -i "" "s|@/components/KongruenzIntegration|@/components/kongruenz-methode/KongruenzIntegration|g" "$file"
    sed -i "" "s|@/components/KongruenzMethode|@/components/kongruenz-methode/KongruenzMethode|g" "$file"
    sed -i "" "s|@/components/KongruenzDifferenzierung|@/components/kongruenz-methode/KongruenzDifferenzierung|g" "$file"
    sed -i "" "s|@/components/klare-method/TransformationPathway|@/components/kongruenz-methode/TransformationPathway|g" "$file"

    # Selbstcheck-Komponenten
    sed -i "" "s|@/components/KlareSelbstCheck|@/components/selbstcheck/KlareSelbstCheck|g" "$file"
    sed -i "" "s|@/components/address-selection|@/components/selbstcheck/AddressSelection|g" "$file"
    sed -i "" "s|@/components/instructions-card|@/components/selbstcheck/InstructionsCard|g" "$file"
    sed -i "" "s|@/components/klare-section|@/components/selbstcheck/KlareSection|g" "$file"
    sed -i "" "s|@/components/results-display|@/components/selbstcheck/ResultsDisplay|g" "$file"

    # Daten-Dateien
    sed -i "" "s|@/data/kongruenzSteps|@/data/klare-methode/kongruenzSteps|g" "$file"
    sed -i "" "s|@/data/transformationPathway|@/data/klare-methode/transformationPathway|g" "$file"
  done
}

# Bereinige leere Ordner
cleanup_empty_directories() {
  echo "Bereinige leere Ordner..."

  find "$SRC_DIR" -type d -empty | while read -r dir; do
    rmdir "$dir"
    log_warning "Leerer Ordner entfernt: $dir"
  done
}

# Hauptfunktion
run_import_updates() {
  echo "Starte Aktualisierung der Import-Pfade..."
  echo "----------------------------------------"

  # Initialisiere Log-Datei
  echo "Import-Pfad-Aktualisierungen ($(date))" >"$LOG_FILE"
  echo "=========================================" >>"$LOG_FILE"

  # Aktualisiere die Importpfade
  update_imports

  # Bereinige leere Ordner
  cleanup_empty_directories

  echo "----------------------------------------"
  log_success "Import-Pfade aktualisiert!"
  echo "Ein Log der Änderungen wurde erstellt in: $LOG_FILE"
}

# Führe die Import-Aktualisierung aus
run_import_updates
