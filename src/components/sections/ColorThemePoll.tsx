"use client";
import React, { useState, useEffect } from "react";
import { ChevronRight, ThumbsUp, Award, BarChart3 } from "lucide-react";
import { useColorScheme } from "@/contexts/ColorSchemeContext";
import { colorSchemes } from "@/utils/colorSchemes";

// Lokaler Speicherort für die Votes (in echter Anwendung würde dies serverseitig gespeichert)
const LOCAL_STORAGE_KEY = "sascha-kohler-color-poll";
const USER_VOTED_KEY = "user-has-voted";

interface ThemeVotes {
  [key: string]: number;
}

const ColorThemePoll: React.FC = () => {
  const { colorScheme } = useColorScheme();
  const [votes, setVotes] = useState<ThemeVotes>({});
  const [userVoted, setUserVoted] = useState<boolean>(false);
  const [showResults, setShowResults] = useState<boolean>(false);
  const [selectedTheme, setSelectedTheme] = useState<string | null>(null);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [totalVotes, setTotalVotes] = useState<number>(0);
  const [loadingVote, setLoadingVote] = useState<boolean>(false);

  // Initialer Load der gespeicherten Votes
  useEffect(() => {
    try {
      // Versuch, gespeicherte Votes zu laden
      const savedVotes = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (savedVotes) {
        const parsedVotes = JSON.parse(savedVotes);
        setVotes(parsedVotes);

        // Berechne Gesamtzahl der Votes
        const total = Object.values(parsedVotes).reduce(
          (sum: number, current: number) => sum + current,
          0,
        );
        setTotalVotes(total);
      } else {
        // Initialisiere Votes für alle Farbschemata
        const initialVotes: ThemeVotes = {};
        colorSchemes.forEach((scheme) => {
          initialVotes[scheme.name] = Math.floor(Math.random() * 20) + 5; // Zufällige Anfangswerte für Demo
        });
        setVotes(initialVotes);
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(initialVotes));

        // Berechne Gesamtzahl der initialen Votes
        const total = Object.values(initialVotes).reduce(
          (sum: number, current: number) => sum + current,
          0,
        );
        setTotalVotes(total);
      }

      // Prüfe, ob der User bereits abgestimmt hat
      const hasVoted = localStorage.getItem(USER_VOTED_KEY) === "true";
      setUserVoted(hasVoted);
      setShowResults(hasVoted);
    } catch (error) {
      console.error("Fehler beim Laden der Votes:", error);
    }
  }, []);

  // Funktion zum Abstimmen
  const handleVote = () => {
    if (!selectedTheme || userVoted || loadingVote) return;

    setLoadingVote(true);

    // Simuliere eine Serveranfrage mit setTimeout
    setTimeout(() => {
      try {
        const updatedVotes = { ...votes };
        updatedVotes[selectedTheme] = (updatedVotes[selectedTheme] || 0) + 1;

        // Aktualisiere Gesamtzahl
        const newTotal = totalVotes + 1;
        setTotalVotes(newTotal);

        // Speichere im localStorage
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedVotes));
        localStorage.setItem(USER_VOTED_KEY, "true");

        // Update State
        setVotes(updatedVotes);
        setUserVoted(true);
        setShowResults(true);
        setLoadingVote(false);
      } catch (error) {
        console.error("Fehler beim Abstimmen:", error);
        setLoadingVote(false);
      }
    }, 800); // 800ms Verzögerung für ein realistisches Gefühl
  };

  // Berechne Top-3 Themes
  const getTopThemes = () => {
    return Object.entries(votes)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 3)
      .map(([name]) => name);
  };

  const topThemes = getTopThemes();

  // Berechne den Prozentsatz für jedes Theme
  const getPercentage = (themeName: string) => {
    if (totalVotes === 0) return 0;
    return Math.round((votes[themeName] / totalVotes) * 100);
  };

  // Finde das Farbschema anhand des Namens
  const findSchemeByName = (name: string) => {
    return (
      colorSchemes.find((scheme) => scheme.name === name) || colorSchemes[0]
    );
  };

  return (
    <section className="py-16 transition-all duration-500">
      <div className="container mx-auto px-4 md:px-6">
        <div
          className={` rounded-lg shadow-lg overflow-hidden transition-all duration-500 ${isExpanded ? "transform-none" : "hover:shadow-xl"}`}
        >
          {/* Header */}
          <div
            className="p-6 cursor-pointer flex items-center justify-between"
            onClick={() => setIsExpanded(!isExpanded)}
            style={{ borderBottom: `1px solid ${colorScheme.primary}20` }}
          >
            <div className="flex items-center">
              <BarChart3
                size={24}
                className="mr-3"
                style={{ color: colorScheme.primary }}
              />
              <h2
                className="text-2xl font-semibold"
                style={{ color: colorScheme.primary }}
              >
                {isExpanded
                  ? "Farbthemen Umfrage"
                  : "Welches Farbschema gefällt dir am besten?"}
              </h2>
            </div>
            <ChevronRight
              size={20}
              className={`transition-transform duration-300 ${isExpanded ? "rotate-90" : ""}`}
              style={{ color: colorScheme.accent }}
            />
          </div>

          {/* Expanded content */}
          {isExpanded && (
            <div className="p-6">
              <p className="text-lg mb-8" style={{ color: colorScheme.text }}>
                {userVoted
                  ? "Danke für deine Stimme! Hier siehst du die aktuellen Ergebnisse."
                  : "Hilf mir, die beliebtesten Farbschemata zu identifizieren! Wähle dein Lieblingsschema aus und stimme ab."}
              </p>

              {/* Display vote UI or results */}
              {showResults ? (
                <div className="space-y-6">
                  <h3
                    className="text-xl font-medium mb-4"
                    style={{ color: colorScheme.primary }}
                  >
                    Aktuelle Ergebnisse
                  </h3>

                  {/* Results visualization */}
                  <div className="space-y-4">
                    {colorSchemes.map((scheme) => {
                      const percentage = getPercentage(scheme.name);
                      const isTopThree = topThemes.indexOf(scheme.name) !== -1;
                      const rank = topThemes.indexOf(scheme.name) + 1;

                      return (
                        <div key={scheme.name} className="relative">
                          <div className="flex items-center justify-between mb-1">
                            <div className="flex items-center">
                              <div
                                className="w-5 h-5 rounded-full mr-3 flex-shrink-0"
                                style={{
                                  background: `linear-gradient(135deg, ${scheme.primary}, ${scheme.accent})`,
                                }}
                              />
                              <span
                                className="font-medium"
                                style={{ color: colorScheme.text }}
                              >
                                {scheme.name}
                                {isTopThree && (
                                  <span
                                    className="ml-2 inline-flex items-center justify-center w-5 h-5 rounded-full text-xs font-bold"
                                    style={{
                                      backgroundColor:
                                        rank === 1
                                          ? "#FFD700"
                                          : rank === 2
                                            ? "#C0C0C0"
                                            : "#CD7F32",
                                      color: rank === 1 ? "#000" : "#fff",
                                    }}
                                  >
                                    {rank}
                                  </span>
                                )}
                              </span>
                            </div>
                            <span
                              className="text-sm font-medium"
                              style={{
                                color:
                                  scheme.name === selectedTheme
                                    ? colorScheme.accent
                                    : colorScheme.text,
                              }}
                            >
                              {percentage}% ({votes[scheme.name] || 0} Stimmen)
                            </span>
                          </div>
                          <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div
                              className="h-full rounded-full transition-all duration-1000"
                              style={{
                                width: `${percentage}%`,
                                background: `linear-gradient(to right, ${scheme.primary}, ${scheme.accent})`,
                              }}
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div
                    className="mt-6 p-4 rounded-lg"
                    style={{ backgroundColor: colorScheme.background }}
                  >
                    <div className="flex items-start">
                      <Award
                        size={20}
                        className="mt-1 mr-2"
                        style={{ color: colorScheme.accent }}
                      />
                      <div>
                        <h4
                          className="font-medium"
                          style={{ color: colorScheme.primary }}
                        >
                          Populärstes Farbschema
                        </h4>
                        <p
                          className="text-sm"
                          style={{ color: colorScheme.text }}
                        >
                          "{topThemes[0]}" führt mit{" "}
                          {getPercentage(topThemes[0])}% der Stimmen.
                        </p>
                        <p
                          className="text-sm mt-2"
                          style={{ color: `${colorScheme.text}90` }}
                        >
                          Gesamt: {totalVotes} Stimmen
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-6">
                  <h3
                    className="text-xl font-medium mb-4"
                    style={{ color: colorScheme.primary }}
                  >
                    Wähle dein Lieblingsschema
                  </h3>

                  {/* Theme selection */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {colorSchemes.map((scheme) => (
                      <div
                        key={scheme.name}
                        className={`p-4 rounded-lg cursor-pointer transition-all duration-300 ${selectedTheme === scheme.name ? "ring-2 shadow-md" : "hover:shadow-md"}`}
                        style={{
                          background: `linear-gradient(145deg, white, ${scheme.background}30)`,
                          borderLeft: `3px solid ${scheme.primary}`,
                          ringColor: scheme.accent,
                          transform:
                            selectedTheme === scheme.name
                              ? "scale(1.02)"
                              : "scale(1)",
                        }}
                        onClick={() => setSelectedTheme(scheme.name)}
                      >
                        <div className="flex items-center mb-3">
                          <div
                            className="w-10 h-10 rounded-full mr-3 flex-shrink-0"
                            style={{
                              background: `linear-gradient(135deg, ${scheme.primary}, ${scheme.accent})`,
                            }}
                          />
                          <h4
                            className="font-medium text-base"
                            style={{
                              color:
                                selectedTheme === scheme.name
                                  ? scheme.primary
                                  : colorScheme.text,
                            }}
                          >
                            {scheme.name}
                          </h4>
                        </div>
                        <div
                          className="grid grid-cols-2 gap-2 border p-3 rounded-md"
                          style={{ borderColor: `${scheme.primary}30` }}
                        >
                          <div
                            className="h-6 rounded"
                            style={{ background: scheme.primary, opacity: 0.8 }}
                          />
                          <div
                            className="h-6 rounded"
                            style={{ background: scheme.accent, opacity: 0.8 }}
                          />
                          <div
                            className="h-6 rounded"
                            style={{
                              background: scheme.background,
                              opacity: 0.8,
                            }}
                          />
                          <div
                            className="h-6 rounded border"
                            style={{
                              background: "white",
                              borderColor: `${scheme.text}20`,
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Vote button */}
                  <div className="mt-8 flex justify-center">
                    <button
                      className={`flex items-center px-6 py-3 rounded-full text-white font-semibold shadow-md transition-all duration-300 ${selectedTheme ? "opacity-100 hover:shadow-lg" : "opacity-60 cursor-not-allowed"}`}
                      style={{
                        background: selectedTheme
                          ? `linear-gradient(to right, ${findSchemeByName(selectedTheme).primary}, ${findSchemeByName(selectedTheme).accent})`
                          : `linear-gradient(to right, ${colorScheme.primary}, ${colorScheme.accent})`,
                      }}
                      onClick={handleVote}
                      disabled={!selectedTheme || loadingVote}
                    >
                      {loadingVote ? (
                        <span className="flex items-center">
                          <svg
                            className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Abstimmen...
                        </span>
                      ) : (
                        <>
                          <ThumbsUp size={18} className="mr-2" />
                          Abstimmen
                        </>
                      )}
                    </button>
                  </div>

                  <p
                    className="text-center text-sm mt-4"
                    style={{ color: `${colorScheme.text}70` }}
                  >
                    Du kannst nur einmal abstimmen.
                  </p>
                </div>
              )}

              {userVoted && (
                <div className="mt-8 flex justify-center">
                  <button
                    className="text-sm underline"
                    style={{ color: colorScheme.primary }}
                    onClick={() => setShowResults(!showResults)}
                  >
                    {showResults
                      ? "Abstimmungsoptionen anzeigen"
                      : "Ergebnisse anzeigen"}
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ColorThemePoll;
