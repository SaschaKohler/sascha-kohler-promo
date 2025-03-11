'use client';
import React, { useState } from 'react';
import { useColorScheme } from '@/contexts/ColorSchemeContext';
import Link from 'next/link';
import useElementVisibility from '@/hooks/useElementVisibility';
import { LegalFooter } from '@/components/layout/footer';

// Datenschutzerklärung Komponente
const Datenschutz: React.FC = () => {
  const { colorScheme } = useColorScheme();
  // Ref und Sichtbarkeit für den Footer
  const [footerRef, isFooterVisible] = useElementVisibility({
    threshold: 0.2,
  });

  // State für Accordion-Funktionalität
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (sectionId: string) => {
    if (openSection === sectionId) {
      setOpenSection(null);
    } else {
      setOpenSection(sectionId);
    }
  };

  // Hilfsfunktion für Accordion-Abschnitte
  const AccordionSection = ({
    id,
    title,
    children,
  }: {
    id: string;
    title: string;
    children: React.ReactNode;
  }) => (
    <div className="border-b pb-2">
      <button
        className="flex justify-between items-center w-full py-3 text-left font-medium transition-colors"
        onClick={() => toggleSection(id)}
        style={{ color: colorScheme.primary }}
        aria-expanded={openSection === id}
      >
        <span>{title}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`transition-transform ${openSection === id ? 'rotate-180' : ''}`}
        >
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          openSection === id ? 'max-h-[2000px] opacity-100 py-4' : 'max-h-0 opacity-0 py-0'
        }`}
      >
        <div className="text-gray-600 space-y-3">{children}</div>
      </div>
    </div>
  );

  return (
    <>
      {/* Header mit KLARE-Methode Buchstaben */}
      <header className="py-16 relative overflow-hidden">
        {/* Hintergrund mit Farbverlauf */}
        <div
          className="absolute inset-0 z-0"
          style={{
            background: `linear-gradient(135deg, ${colorScheme.primary}, ${colorScheme.accent})`,
          }}
        ></div>

        {/* KLARE Methode als dekorative Elemente im Hintergrund */}
        <div className="absolute inset-0 z-0 opacity-10 flex items-center justify-center overflow-hidden">
          <div className="flex space-x-6 sm:space-x-12 transform -rotate-12 scale-150">
            {['K', 'L', 'A', 'R', 'E'].map((letter, index) => (
              <div
                key={index}
                className="text-8xl sm:text-9xl font-bold text-white"
                style={{
                  textShadow: '0 4px 8px rgba(0,0,0,0.1)',
                }}
              >
                {letter}
              </div>
            ))}
          </div>
        </div>

        {/* Tatsächliche Überschrift mit verbesserter Lesbarkeit */}
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 relative">
            Datenschutzerklärung
            <div
              className="absolute bottom-0 left-0 h-1 w-20 mt-2"
              style={{ backgroundColor: 'white' }}
            ></div>
          </h1>

          <p className="max-w-3xl text-white/90 text-lg relative z-10">
            Der Schutz Ihrer persönlichen Daten ist uns ein besonderes Anliegen. Wir verarbeiten
            Ihre Daten daher ausschließlich auf Grundlage der gesetzlichen Bestimmungen (DSGVO, TKG
            2003).
          </p>
        </div>
      </header>

      {/* Hauptinhalt */}
      <main className="container mx-auto px-4 md:px-8 py-8 mb-16">
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-sm">
          <div className="mb-8">
            <p className="mb-4">
              In dieser Datenschutzerklärung informieren wir Sie über die wichtigsten Aspekte der
              Datenverarbeitung im Rahmen unserer Website und Dienstleistungen.
            </p>
            <p>
              <strong>Verantwortlicher im Sinne der DSGVO:</strong>
              <br />
              Sascha Kohler
              <br />
              Furth 6
              <br />
              4311 Schwertberg
              <br />
              Österreich
              <br />
              E-Mail: office@sascha-kohler.at{' '}
            </p>
          </div>

          <div className="space-y-2">
            <AccordionSection id="datenerfassung" title="1. Datenerfassung auf unserer Website">
              <h3 className="font-medium mb-2">1.1 Server-Logfiles</h3>
              <p>
                Bei jedem Zugriff auf unsere Website erfasst unser System automatisiert Daten und
                Informationen vom Computersystem des aufrufenden Rechners. Folgende Daten werden
                hierbei erhoben:
              </p>
              <ul className="list-disc pl-6 my-3 space-y-1">
                <li>Browsertyp und -version</li>
                <li>Verwendetes Betriebssystem</li>
                <li>Referrer URL (die zuvor besuchte Seite)</li>
                <li>IP-Adresse des zugreifenden Rechners</li>
                <li>Uhrzeit der Serveranfrage</li>
                <li>Übertragene Datenmenge</li>
              </ul>
              <p>
                Die Daten werden in den Logfiles unseres Systems gespeichert. Diese Daten werden
                nicht mit anderen Datenquellen zusammengeführt. Rechtsgrundlage für die
                vorübergehende Speicherung der Daten und Logfiles ist Art. 6 Abs. 1 lit. f DSGVO
                (berechtigtes Interesse).
              </p>

              <h3 className="font-medium mt-4 mb-2">1.2 Cookies</h3>
              <p>
                Unsere Website verwendet Cookies. Cookies sind Textdateien, die über einen
                Internetbrowser auf einem Computersystem gespeichert werden. Wir setzen Cookies ein,
                um unsere Website nutzerfreundlicher zu gestalten und bestimmte Funktionen zu
                ermöglichen.
              </p>
              <p className="mt-2">
                Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies
                informiert werden und Cookies nur im Einzelfall erlauben, die Annahme von Cookies
                für bestimmte Fälle oder generell ausschließen sowie das automatische Löschen der
                Cookies beim Schließen des Browsers aktivieren.
              </p>
            </AccordionSection>

            <AccordionSection id="kontaktformular" title="2. Kontaktformular und E-Mail-Kontakt">
              <p>
                Wenn Sie uns per Kontaktformular oder E-Mail kontaktieren, werden Ihre angegebenen
                Daten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns
                gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
              </p>
              <p className="mt-3">
                Die Verarbeitung der in das Kontaktformular eingegebenen Daten erfolgt
                ausschließlich auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). Ein
                Widerruf Ihrer bereits erteilten Einwilligung ist jederzeit möglich. Für den
                Widerruf genügt eine formlose Mitteilung per E-Mail. Die Rechtmäßigkeit der bis zum
                Widerruf erfolgten Datenverarbeitungsvorgänge bleibt vom Widerruf unberührt.
              </p>
            </AccordionSection>

            <AccordionSection id="newsletter" title="3. Newsletter">
              <p>
                Wenn Sie den auf der Website angebotenen Newsletter beziehen möchten, benötigen wir
                von Ihnen eine E-Mail-Adresse sowie Informationen, welche uns die Überprüfung
                gestatten, dass Sie der Inhaber der angegebenen E-Mail-Adresse sind und mit dem
                Empfang des Newsletters einverstanden sind.
              </p>
              <p className="mt-3">
                Für die Verarbeitung der Daten wird im Rahmen des Anmeldevorgangs Ihre Einwilligung
                eingeholt (Double-Opt-In-Verfahren). Sie können Ihre Einwilligung zum Empfang des
                Newsletters jederzeit widerrufen. Dazu findet sich in jedem Newsletter ein
                entsprechender Link.
              </p>
            </AccordionSection>

            <AccordionSection id="analytik" title="4. Webanalyse und Tracking">
              <h3 className="font-medium mb-2">4.1 Google Analytics</h3>
              <p>
                Diese Website nutzt Funktionen des Webanalysedienstes Google Analytics. Anbieter ist
                die Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland.
              </p>
              <p className="mt-2">
                Google Analytics verwendet Cookies. Die durch das Cookie erzeugten Informationen
                über Ihre Benutzung dieser Website werden in der Regel an einen Server von Google in
                den USA übertragen und dort gespeichert.
              </p>
              <p className="mt-2">
                Wir haben die IP-Anonymisierung aktiviert. Dadurch wird Ihre IP-Adresse von Google
                innerhalb von Mitgliedstaaten der Europäischen Union oder in anderen Vertragsstaaten
                des Abkommens über den Europäischen Wirtschaftsraum vor der Übermittlung in die USA
                gekürzt. Nur in Ausnahmefällen wird die volle IP-Adresse an einen Server von Google
                in den USA übertragen und dort gekürzt.
              </p>
              <p className="mt-2">
                Sie können die Erfassung der durch das Cookie erzeugten und auf Ihre Nutzung der
                Website bezogenen Daten (inkl. Ihrer IP-Adresse) an Google sowie die Verarbeitung
                dieser Daten durch Google verhindern, indem Sie das unter dem folgenden Link
                verfügbare Browser-Plugin herunterladen und installieren:{' '}
                <a
                  href="https://tools.google.com/dlpage/gaoptout?hl=de"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                  style={{ color: colorScheme.primary }}
                >
                  https://tools.google.com/dlpage/gaoptout?hl=de
                </a>
              </p>

              <h3 className="font-medium mt-4 mb-2">4.2 Social Media Plug-ins</h3>
              <p>
                Auf unserer Website verwenden wir Social Plugins verschiedener sozialer Netzwerke.
                Wenn Sie eine Website mit einem Social Plugin besuchen, kann eine direkte Verbindung
                mit dem sozialen Netzwerk hergestellt werden.
              </p>
              <p className="mt-2">
                Wenn Sie nicht möchten, dass soziale Netzwerke über unsere Website Daten über Sie
                sammeln, müssen Sie sich vor Ihrem Besuch unserer Website aus diesen sozialen
                Netzwerken ausloggen.
              </p>
            </AccordionSection>

            <AccordionSection
              id="externe-dienste"
              title="5. Einbindung von Diensten und Inhalten Dritter"
            >
              <p>
                Es kann vorkommen, dass innerhalb unseres Onlineangebotes Inhalte oder Dienste von
                Dritt-Anbietern, wie z.B. YouTube-Videos oder Kartenmaterial von Google-Maps
                eingebunden werden. Bei der Einbindung von Inhalten der jeweiligen Anbieter werden
                in der Regel die IP-Adressen der Nutzer verarbeitet.
              </p>
              <p className="mt-3">
                Die Einbindung erfolgt auf Grundlage des Art. 6 Abs. 1 lit. f DSGVO (berechtigtes
                Interesse), da wir ein Interesse an einer attraktiven Darstellung unseres
                Onlineangebotes haben.
              </p>
            </AccordionSection>

            <AccordionSection id="betroffenenrechte" title="6. Rechte der betroffenen Person">
              <p>Als betroffene Person haben Sie das Recht auf:</p>
              <ul className="list-disc pl-6 my-3 space-y-1">
                <li>
                  Auskunft über die verarbeiteten Daten und eine Kopie dieser Daten (Auskunftsrecht)
                </li>
                <li>Berichtigung unrichtiger personenbezogener Daten (Recht auf Berichtigung)</li>
                <li>Löschung der Sie betreffenden Daten (Recht auf Löschung)</li>
                <li>
                  Einschränkung der Datenverarbeitung (Recht auf Einschränkung der Verarbeitung)
                </li>
                <li>Datenübertragbarkeit (Recht auf Datenübertragbarkeit)</li>
                <li>
                  Widerspruch gegen die Verarbeitung Sie betreffender personenbezogener Daten
                  (Widerspruchsrecht)
                </li>
              </ul>
              <p>
                Wenn Sie glauben, dass die Verarbeitung Ihrer Daten gegen das Datenschutzrecht
                verstößt oder Ihre datenschutzrechtlichen Ansprüche sonst in einer Weise verletzt
                worden sind, können Sie sich bei der Aufsichtsbehörde beschweren. In Österreich ist
                dies die Datenschutzbehörde.
              </p>
            </AccordionSection>

            <AccordionSection id="datensicherheit" title="7. Datensicherheit">
              <p>
                Wir verwenden innerhalb des Website-Besuchs das verbreitete TLS-Verfahren (Transport
                Layer Security) in Verbindung mit der jeweils höchsten Verschlüsselungsstufe, die
                von Ihrem Browser unterstützt wird. Ob eine einzelne Seite unseres
                Internetauftrittes verschlüsselt übertragen wird, erkennen Sie an der geschlossenen
                Darstellung des Schüssel- beziehungsweise Schloss-Symbols in der unteren
                Statusleiste Ihres Browsers.
              </p>
              <p className="mt-3">
                Wir bedienen uns im Übrigen geeigneter technischer und organisatorischer
                Sicherheitsmaßnahmen, um Ihre Daten gegen zufällige oder vorsätzliche
                Manipulationen, teilweisen oder vollständigen Verlust, Zerstörung oder gegen den
                unbefugten Zugriff Dritter zu schützen. Unsere Sicherheitsmaßnahmen werden
                entsprechend der technologischen Entwicklung fortlaufend verbessert.
              </p>
            </AccordionSection>

            <AccordionSection
              id="aenderungen"
              title="8. Aktualität und Änderung dieser Datenschutzerklärung"
            >
              <p>
                Diese Datenschutzerklärung ist aktuell gültig und hat den Stand{' '}
                {new Date().toLocaleDateString('de-AT')}.
              </p>
              <p className="mt-3">
                Durch die Weiterentwicklung unserer Website und Angebote oder aufgrund geänderter
                gesetzlicher beziehungsweise behördlicher Vorgaben kann es notwendig werden, diese
                Datenschutzerklärung zu ändern. Die jeweils aktuelle Datenschutzerklärung kann
                jederzeit auf dieser Website abgerufen werden.
              </p>
            </AccordionSection>
          </div>
        </div>
      </main>

      {/* Zurück-Link */}
      <div className="container mx-auto px-4 md:px-8 mb-16">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center font-medium transition-colors"
            style={{ color: colorScheme.primary }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2"
            >
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
            Zurück zur Startseite
          </Link>
        </div>
      </div>

      {/* Footer mit Ihrem bestehenden LegalFooter */}
      <LegalFooter colorScheme={colorScheme} footerRef={footerRef} />
    </>
  );
};

export default Datenschutz;
