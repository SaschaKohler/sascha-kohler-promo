# KLARE-Methode Website | Sascha Kohler

Eine moderne, reaktionsschnelle Website zur Präsentation der KLARE-Methode und professionellen Angebote von Sascha Kohler, basierend auf Next.js 15 und React 19.

## 🌟 Projektübersicht

Diese Website dient als digitale Präsenz für Sascha Kohlers professionelle Arbeit als Lebens- und Sozialberater mit Fokus auf die KLARE-Methode:

- **K**larheit 
- **L**ebendigkeit 
- **A**usrichtung 
- **R**ealisierung 
- **E**ntfaltung

## 🚀 Technologie-Stack

- **Frontend**: Next.js 15.x, React 19.x, TypeScript
- **Styling**: Tailwind CSS, CSS-Module
- **UI-Komponenten**: Radix UI
- **Containerisierung**: Docker
- **CI/CD**: GitHub Actions
- **Hosting**: Kubernetes/K3s Cluster

## 🔧 Lokale Entwicklung

### Voraussetzungen

- Node.js 18 oder höher
- npm, yarn oder pnpm

### Installation

```bash
# Repository klonen
git clone https://github.com/SaschaKohler/sascha-kohler-promo.git
cd sascha-kohler-promo

# Abhängigkeiten installieren
npm install
# oder
yarn 
# oder
pnpm install
```

### Entwicklungsserver starten

```bash
npm run dev
# oder
yarn dev
# oder
pnpm dev
```

Der Entwicklungsserver startet auf [http://localhost:3000](http://localhost:3000).

### Build für Produktion

```bash
npm run build
# oder
yarn build
# oder
pnpm build
```

## 🔄 CI/CD Pipeline

Dieses Projekt verwendet GitHub Actions für kontinuierliche Integration und Deployment:

1. Bei jedem Push auf den `main`-Branch wird automatisch ein Docker-Image gebaut
2. Das Image wird auf DockerHub unter dem Tag `blisha234/sascha-kohler-website` veröffentlicht
3. Das Deployment auf dem K3s Cluster wird aktualisiert

## 🏗 Projektstruktur

```
├── .github/           # GitHub Actions Workflows
├── public/            # Statische Assets 
├── src/               # Quellcode
│   ├── app/           # Next.js App Router
│   ├── components/    # React Komponenten
│   ├── contexts/      # React Kontext Provider
│   ├── hooks/         # Custom React Hooks
│   ├── lib/           # Hilfsfunktionen und Bibliotheken
│   ├── types/         # TypeScript Typdefinitionen
│   └── utils/         # Utility-Funktionen
├── Dockerfile         # Docker Build-Konfiguration
└── next.config.js     # Next.js Konfiguration
```

## 📋 Features

- Responsives Design für Desktop und Mobile
- Farbschema-Wechsler mit lokaler Speicherung der Benutzerauswahl
- SEO-Optimierung mit umfassenden Meta-Tags
- Strukturierte Daten mit JSON-LD
- Animation und Transition-Effekte
- Optimierte Docker-Containerisierung
- Automatisiertes Deployment

## 🤝 Mitwirken

Beiträge sind willkommen! Bitte folgen Sie diesem Prozess:

1. Fork des Repositories
2. Feature-Branch erstellen (`git checkout -b feature/amazing-feature`)
3. Änderungen committen (`git commit -m 'Add some amazing feature'`)
4. Push zum Branch (`git push origin feature/amazing-feature`)
5. Pull Request öffnen

## 📬 Kontakt

Bei Fragen oder Anregungen, kontaktieren Sie Sascha Kohler unter sascha.kohler@sent.at oder über [LinkedIn](https://www.linkedin.com/in/sascha-kohler/).

## 📄 Lizenz

Dieses Projekt steht unter der [MIT-Lizenz](LICENSE.md).
