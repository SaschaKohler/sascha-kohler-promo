// Typdefinitionen
export type AddressMode = 'du' | 'sie' | null;
export type SectionKey = 'k' | 'l' | 'a' | 'r' | 'e';

export interface SectionData {
  title: string;
  description: {
    du: string;
    sie: string;
  };
  questions: {
    [key: string]: {
      du: string;
      sie: string;
    };
  };
  interpretations: {
    du: {
      low: string;
      medium: string;
      high: string;
      excellent: string;
    };
    sie: {
      low: string;
      medium: string;
      high: string;
      excellent: string;
    };
  };
  color: {
    light: string;
    border: string;
    text: string;
    bg: string;
    hover: string;
  };
}

export interface KlareData {
  sections: {
    [key in SectionKey]: SectionData;
  };
  instructions: {
    title: string;
    intro: {
      du: string;
      sie: string;
    };
    scaleDescription: {
      du: string;
      sie: string;
    };
    note: {
      du: string;
      sie: string;
    };
  };
  results: {
    title: {
      du: string;
      sie: string;
    };
    nextSteps: {
      title: string;
      description: {
        du: string;
        sie: string;
      };
      cta: {
        du: string;
        sie: string;
      };
    };
  };
  addressSelection: {
    title: string;
    description: string;
    options: {
      du: string;
      sie: string;
    };
  };
}

// Die eigentlichen Daten
const klareData: KlareData = {
  sections: {
    k: {
      title: 'Konfrontation mit der aktuellen Situation',
      description: {
        du: 'Dieser Bereich misst, wie ehrlich du deine aktuelle Lebenssituation wahrnimmst und inwieweit du bereit bist, dich mit inneren Widersprüchen zu konfrontieren.',
        sie: 'Dieser Bereich misst, wie ehrlich Sie Ihre aktuelle Lebenssituation wahrnehmen und inwieweit Sie bereit sind, sich mit inneren Widersprüchen zu konfrontieren.',
      },
      questions: {
        '1': {
          du: 'Ich bin mir meiner inneren Widersprüche bewusst und kann sie klar benennen.',
          sie: 'Ich bin mir meiner inneren Widersprüche bewusst und kann sie klar benennen.',
        },
        '2': {
          du: 'Ich erkenne das Gefühl, wenn mein Denken, Fühlen und Handeln nicht im Einklang sind.',
          sie: 'Ich erkenne das Gefühl, wenn mein Denken, Fühlen und Handeln nicht im Einklang sind.',
        },
        '3': {
          du: 'Ich bin bereit, meine aktuellen Herausforderungen ehrlich zu betrachten, anstatt sie zu verdrängen.',
          sie: 'Ich bin bereit, meine aktuellen Herausforderungen ehrlich zu betrachten, anstatt sie zu verdrängen.',
        },
      },
      interpretations: {
        du: {
          low: 'Die ehrliche Konfrontation mit deiner aktuellen Situation fällt dir noch schwer. Du tendierst möglicherweise dazu, Widersprüche zu verdrängen oder nicht wahrhaben zu wollen.',
          medium:
            'Du hast bereits begonnen, dich mit deiner aktuellen Situation auseinanderzusetzen, aber es gibt noch Bereiche, in denen du vor einer ehrlichen Betrachtung zurückscheust.',
          high: 'Du bist bereit, dich mit deiner aktuellen Situation ehrlich zu konfrontieren und innere Widersprüche zu erkennen.',
          excellent:
            'Hervorragend! Du hast eine außergewöhnliche Fähigkeit entwickelt, dich mit deiner aktuellen Situation ehrlich zu konfrontieren und innere Widersprüche klar zu erkennen.',
        },
        sie: {
          low: 'Die ehrliche Konfrontation mit Ihrer aktuellen Situation fällt Ihnen noch schwer. Sie tendieren möglicherweise dazu, Widersprüche zu verdrängen oder nicht wahrhaben zu wollen.',
          medium:
            'Sie haben bereits begonnen, sich mit Ihrer aktuellen Situation auseinanderzusetzen, aber es gibt noch Bereiche, in denen Sie vor einer ehrlichen Betrachtung zurückscheuen.',
          high: 'Sie sind bereit, sich mit Ihrer aktuellen Situation ehrlich zu konfrontieren und innere Widersprüche zu erkennen.',
          excellent:
            'Hervorragend! Sie haben eine außergewöhnliche Fähigkeit entwickelt, sich mit Ihrer aktuellen Situation ehrlich zu konfrontieren und innere Widersprüche klar zu erkennen.',
        },
      },
      color: {
        light: 'bg-indigo-50/30',
        border: 'border-indigo-600',
        text: 'text-indigo-600',
        bg: 'bg-indigo-600',
        hover: 'hover:bg-indigo-700',
      },
    },
    l: {
      title: 'Lebendigkeit erkennen',
      description: {
        du: 'Dieser Bereich erfasst, wie gut du in Kontakt mit deiner natürlichen Lebendigkeit bist und die Bereiche erkennst, in denen du bereits im Einklang mit dir selbst lebst.',
        sie: 'Dieser Bereich erfasst, wie gut Sie in Kontakt mit Ihrer natürlichen Lebendigkeit sind und die Bereiche erkennen, in denen Sie bereits im Einklang mit sich selbst leben.',
      },
      questions: {
        '1': {
          du: 'Ich kann spontan Situationen benennen, in denen ich mich vollkommen lebendig und im Fluss fühle.',
          sie: 'Ich kann spontan Situationen benennen, in denen ich mich vollkommen lebendig und im Fluss fühle.',
        },
        '2': {
          du: 'Ich weiß, in welchen Lebensbereichen ich bereits authentisch und kongruent lebe.',
          sie: 'Ich weiß, in welchen Lebensbereichen ich bereits authentisch und kongruent lebe.',
        },
        '3': {
          du: 'Ich kann auf Ressourcen und Stärken zurückgreifen, wenn ich vor Herausforderungen stehe.',
          sie: 'Ich kann auf Ressourcen und Stärken zurückgreifen, wenn ich vor Herausforderungen stehe.',
        },
      },
      interpretations: {
        du: {
          low: 'Du hast noch Schwierigkeiten, deine natürliche Lebendigkeit zu spüren und zu erkennen, in welchen Bereichen du bereits im Einklang mit dir selbst bist.',
          medium:
            'Du nimmst deine natürliche Lebendigkeit teilweise wahr, könntest aber noch tiefer in Kontakt mit deinen authentischen Momenten kommen.',
          high: 'Du erkennst gut, in welchen Bereichen du bereits lebendig und authentisch bist und kannst auf diese Ressourcen zurückgreifen.',
          excellent:
            'Hervorragend! Du hast eine tiefe Verbindung zu deiner natürlichen Lebendigkeit und weißt genau, in welchen Bereichen du bereits vollkommen authentisch bist.',
        },
        sie: {
          low: 'Sie haben noch Schwierigkeiten, Ihre natürliche Lebendigkeit zu spüren und zu erkennen, in welchen Bereichen Sie bereits im Einklang mit sich selbst sind.',
          medium:
            'Sie nehmen Ihre natürliche Lebendigkeit teilweise wahr, könnten aber noch tiefer in Kontakt mit Ihren authentischen Momenten kommen.',
          high: 'Sie erkennen gut, in welchen Bereichen Sie bereits lebendig und authentisch sind und können auf diese Ressourcen zurückgreifen.',
          excellent:
            'Hervorragend! Sie haben eine tiefe Verbindung zu Ihrer natürlichen Lebendigkeit und wissen genau, in welchen Bereichen Sie bereits vollkommen authentisch sind.',
        },
      },
      color: {
        light: 'bg-violet-50/30',
        border: 'border-violet-600',
        text: 'text-violet-600',
        bg: 'bg-violet-600',
        hover: 'hover:bg-violet-700',
      },
    },
    a: {
      title: 'Ausrichtung der Lebensbereiche',
      description: {
        du: 'Dieser Bereich untersucht, wie gut du deine verschiedenen Lebensbereiche miteinander in Einklang bringen kannst und eine ganzheitliche Strategie verfolgst.',
        sie: 'Dieser Bereich untersucht, wie gut Sie Ihre verschiedenen Lebensbereiche miteinander in Einklang bringen können und eine ganzheitliche Strategie verfolgen.',
      },
      questions: {
        '1': {
          du: 'Ich habe eine klare Vision, wie ich meine verschiedenen Lebensbereiche (Beruf, Beziehungen, Gesundheit, etc.) in Einklang bringen kann.',
          sie: 'Ich habe eine klare Vision, wie ich meine verschiedenen Lebensbereiche (Beruf, Beziehungen, Gesundheit, etc.) in Einklang bringen kann.',
        },
        '2': {
          du: 'Meine Entscheidungen berücksichtigen, wie sie sich auf alle Bereiche meines Lebens auswirken.',
          sie: 'Meine Entscheidungen berücksichtigen, wie sie sich auf alle Bereiche meines Lebens auswirken.',
        },
        '3': {
          du: 'Ich kann meine eigenen Werte klar benennen und ausdrücken, wofür ich stehe.',
          sie: 'Ich kann meine eigenen Werte klar benennen und ausdrücken, wofür ich stehe.',
        },
      },
      interpretations: {
        du: {
          low: 'Es fällt dir noch schwer, eine klare Strategie zu entwickeln, um deine verschiedenen Lebensbereiche in Einklang zu bringen.',
          medium:
            'Du hast bereits Ansätze, wie du deine Lebensbereiche besser ausrichten könntest, aber es fehlt noch an einer umfassenden Integration.',
          high: 'Du hast eine gute Strategie entwickelt, um deine verschiedenen Lebensbereiche in Einklang zu bringen und arbeitest daran, sie umzusetzen.',
          excellent:
            'Hervorragend! Du hast eine klare und umfassende Strategie, die alle deine Lebensbereiche in Harmonie bringt und lebst nach deinen klar definierten Werten.',
        },
        sie: {
          low: 'Es fällt Ihnen noch schwer, eine klare Strategie zu entwickeln, um Ihre verschiedenen Lebensbereiche in Einklang zu bringen.',
          medium:
            'Sie haben bereits Ansätze, wie Sie Ihre Lebensbereiche besser ausrichten könnten, aber es fehlt noch an einer umfassenden Integration.',
          high: 'Sie haben eine gute Strategie entwickelt, um Ihre verschiedenen Lebensbereiche in Einklang zu bringen und arbeiten daran, sie umzusetzen.',
          excellent:
            'Hervorragend! Sie haben eine klare und umfassende Strategie, die alle Ihre Lebensbereiche in Harmonie bringt und leben nach Ihren klar definierten Werten.',
        },
      },
      color: {
        light: 'bg-pink-50/30',
        border: 'border-pink-500',
        text: 'text-pink-500',
        bg: 'bg-pink-500',
        hover: 'hover:bg-pink-600',
      },
    },
    r: {
      title: 'Realisierung im Alltag',
      description: {
        du: 'Dieser Bereich erfasst, wie gut du Erkenntnisse und neue Ausrichtungen in deinen Alltag integrieren und konkret umsetzen kannst.',
        sie: 'Dieser Bereich erfasst, wie gut Sie Erkenntnisse und neue Ausrichtungen in Ihren Alltag integrieren und konkret umsetzen können.',
      },
      questions: {
        '1': {
          du: 'Ich setze meine Erkenntnisse über mich selbst in konkrete Handlungen im Alltag um.',
          sie: 'Ich setze meine Erkenntnisse über mich selbst in konkrete Handlungen im Alltag um.',
        },
        '2': {
          du: 'Ich schaffe es, neue Gewohnheiten zu etablieren, die mit meinen Werten und Zielen übereinstimmen.',
          sie: 'Ich schaffe es, neue Gewohnheiten zu etablieren, die mit meinen Werten und Zielen übereinstimmen.',
        },
        '3': {
          du: 'Auch in herausfordernden Situationen kann ich meine neuen Einsichten beibehalten und kongruent handeln.',
          sie: 'Auch in herausfordernden Situationen kann ich meine neuen Einsichten beibehalten und kongruent handeln.',
        },
      },
      interpretations: {
        du: {
          low: 'Es fällt dir noch schwer, deine Erkenntnisse in konkreten Alltagssituationen umzusetzen und neue Gewohnheiten zu etablieren.',
          medium:
            'Du setzt einige deiner Erkenntnisse im Alltag um, könntest aber noch konsequenter darin sein, besonders in herausfordernden Situationen.',
          high: 'Du schaffst es gut, deine Erkenntnisse in den Alltag zu integrieren und kongruent zu handeln, auch wenn es manchmal herausfordernd ist.',
          excellent:
            'Hervorragend! Du setzt deine Erkenntnisse konsequent im Alltag um und bleibst auch in den schwierigsten Situationen deinen Werten und deiner Ausrichtung treu.',
        },
        sie: {
          low: 'Es fällt Ihnen noch schwer, Ihre Erkenntnisse in konkreten Alltagssituationen umzusetzen und neue Gewohnheiten zu etablieren.',
          medium:
            'Sie setzen einige Ihrer Erkenntnisse im Alltag um, könnten aber noch konsequenter darin sein, besonders in herausfordernden Situationen.',
          high: 'Sie schaffen es gut, Ihre Erkenntnisse in den Alltag zu integrieren und kongruent zu handeln, auch wenn es manchmal herausfordernd ist.',
          excellent:
            'Hervorragend! Sie setzen Ihre Erkenntnisse konsequent im Alltag um und bleiben auch in den schwierigsten Situationen Ihren Werten und Ihrer Ausrichtung treu.',
        },
      },
      color: {
        light: 'bg-amber-50/30',
        border: 'border-amber-500',
        text: 'text-amber-500',
        bg: 'bg-amber-500',
        hover: 'hover:bg-amber-600',
      },
    },
    e: {
      title: 'Entfaltung durch vollständige Kongruenz',
      description: {
        du: 'Dieser Bereich erfasst, inwieweit du bereits Erfahrungen mit vollständiger Kongruenz gemacht hast und wie sehr du dein volles Potenzial lebst.',
        sie: 'Dieser Bereich erfasst, inwieweit Sie bereits Erfahrungen mit vollständiger Kongruenz gemacht haben und wie sehr Sie Ihr volles Potenzial leben.',
      },
      questions: {
        '1': {
          du: 'Ich habe Momente erlebt, in denen sich mein Potenzial mühelos entfaltet hat.',
          sie: 'Ich habe Momente erlebt, in denen sich mein Potenzial mühelos entfaltet hat.',
        },
        '2': {
          du: 'Andere Menschen nehmen mich als authentisch und im Einklang mit mir selbst wahr.',
          sie: 'Andere Menschen nehmen mich als authentisch und im Einklang mit sich selbst wahr.',
        },
        '3': {
          du: 'Ich erlebe ein tiefes Gefühl der Zufriedenheit, wenn mein Denken, Fühlen und Handeln übereinstimmen.',
          sie: 'Ich erlebe ein tiefes Gefühl der Zufriedenheit, wenn mein Denken, Fühlen und Handeln übereinstimmen.',
        },
      },
      interpretations: {
        du: {
          low: 'Du hast bisher wenig Erfahrung mit der mühelosen Entfaltung deines Potenzials durch vollständige Kongruenz gemacht.',
          medium:
            'Du hast gelegentlich Momente erlebt, in denen sich dein Potenzial durch Kongruenz entfaltet hat, aber diese sind noch selten.',
          high: 'Du erlebst regelmäßig, wie sich dein Potenzial durch Kongruenz entfaltet und wirst von anderen als authentisch wahrgenommen.',
          excellent:
            'Hervorragend! Du erlebst häufig, wie sich dein volles Potenzial durch vollständige Kongruenz mühelos entfaltet und genießt die tiefe Zufriedenheit, die daraus entsteht.',
        },
        sie: {
          low: 'Sie haben bisher wenig Erfahrung mit der mühelosen Entfaltung Ihres Potenzials durch vollständige Kongruenz gemacht.',
          medium:
            'Sie haben gelegentlich Momente erlebt, in denen sich Ihr Potenzial durch Kongruenz entfaltet hat, aber diese sind noch selten.',
          high: 'Sie erleben regelmäßig, wie sich Ihr Potenzial durch Kongruenz entfaltet und werden von anderen als authentisch wahrgenommen.',
          excellent:
            'Hervorragend! Sie erleben häufig, wie sich Ihr volles Potenzial durch vollständige Kongruenz mühelos entfaltet und genießen die tiefe Zufriedenheit, die daraus entsteht.',
        },
      },
      color: {
        light: 'bg-emerald-50/30',
        border: 'border-emerald-500',
        text: 'text-emerald-500',
        bg: 'bg-emerald-500',
        hover: 'hover:bg-emerald-600',
      },
    },
  },
  instructions: {
    title: 'So funktioniert der Selbstcheck:',
    intro: {
      du: 'Dieser Selbstcheck hilft dir, deinen aktuellen Stand der inneren Kongruenz zu bestimmen und macht bewusst, in welchen Bereichen du bereits im Einklang bist und wo noch Potenzial zur Entfaltung liegt.',
      sie: 'Dieser Selbstcheck hilft Ihnen, Ihren aktuellen Stand der inneren Kongruenz zu bestimmen und macht bewusst, in welchen Bereichen Sie bereits im Einklang sind und wo noch Potenzial zur Entfaltung liegt.',
    },
    scaleDescription: {
      du: 'Bei jeder Frage bewertest du auf einer Skala von 1 bis 5, wie sehr die Aussage aktuell auf dich zutrifft:',
      sie: 'Bei jeder Frage bewerten Sie auf einer Skala von 1 bis 5, wie sehr die Aussage aktuell auf Sie zutrifft:',
    },
    note: {
      du: 'Beantworte alle Fragen ehrlich und spontan – es gibt keine richtigen oder falschen Antworten. Am Ende erhältst du eine persönliche Auswertung.',
      sie: 'Beantworten Sie alle Fragen ehrlich und spontan – es gibt keine richtigen oder falschen Antworten. Am Ende erhalten Sie eine persönliche Auswertung.',
    },
  },
  results: {
    title: {
      du: 'Dein persönliches Kongruenz-Profil',
      sie: 'Ihr persönliches Kongruenz-Profil',
    },
    nextSteps: {
      title: 'Wie geht es weiter?',
      description: {
        du: 'Die KLARE Kongruenz-Methode bietet dir praktische Werkzeuge, um in allen fünf Bereichen Fortschritte zu machen und ein Leben in vollständiger Kongruenz zu führen.',
        sie: 'Die KLARE Kongruenz-Methode bietet Ihnen praktische Werkzeuge, um in allen fünf Bereichen Fortschritte zu machen und ein Leben in vollständiger Kongruenz zu führen.',
      },
      cta: {
        du: 'Kostenfreies Erstgespräch vereinbaren',
        sie: 'Kostenfreies Erstgespräch vereinbaren',
      },
    },
  },
  addressSelection: {
    title: 'Wie möchten Sie angesprochen werden?',
    description:
      'Dieser Selbstcheck hilft dabei, den aktuellen Stand der persönlichen Kongruenz zu bestimmen und zeigt Bereiche für potenzielle Entwicklung auf.',
    options: {
      du: 'Per Du',
      sie: 'Per Sie',
    },
  },
};

export default klareData;

// Hilfsfunktion zur Interpretation der Ergebnisse
export const getInterpretationText = (
  section: SectionKey,
  score: number,
  addressMode: AddressMode
): string => {
  if (!addressMode) return '';

  const interpretations = klareData.sections[section].interpretations[addressMode];

  if (score <= 3) {
    return interpretations.low;
  } else if (score <= 6) {
    return interpretations.medium;
  } else if (score <= 8) {
    return interpretations.high;
  } else {
    return interpretations.excellent;
  }
};

// Hilfsfunktion um Texte basierend auf der Anredeform zu erhalten
export const getLocalizedText = <T extends { du: string; sie: string }>(
  textObj: T,
  addressMode: AddressMode
): string => {
  if (!addressMode) return textObj.du;
  return textObj[addressMode];
};
