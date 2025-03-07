'use client';
import React, { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

interface BackgroundAudioProps {
  audioSrc: string;
  initialVolume?: number;
  autoPlay?: boolean;
}

const BackgroundAudio: React.FC<BackgroundAudioProps> = ({
  audioSrc,
  initialVolume = 0.3,
  autoPlay = false,
}) => {
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [volume, setVolume] = useState(initialVolume);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Initialize audio element
    if (audioRef.current) {
      audioRef.current.volume = volume;
      audioRef.current.loop = true;

      if (autoPlay) {
        // Attempt to play - browsers might block this without user interaction
        const playPromise = audioRef.current.play();

        if (playPromise !== undefined) {
          playPromise.catch(error => {
            // Auto-play was prevented
            console.log('Autoplay prevented by browser policy', error);
            setIsPlaying(false);
          });
        }
      }
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, [autoPlay, volume]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(error => {
          console.log('Play prevented by browser policy', error);
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  return (
    <div className="fixed bottom-4 right-4 bg-black bg-opacity-70 backdrop-blur-sm text-white p-3 rounded-full shadow-lg z-50 flex items-center gap-2">
      <button
        onClick={togglePlay}
        className="p-2 rounded-full hover:bg-white hover:bg-opacity-20 transition-colors"
        aria-label={isPlaying ? 'Pause music' : 'Play music'}
      >
        {isPlaying ? <Volume2 size={20} /> : <VolumeX size={20} />}
      </button>

      <div className="hidden md:block">
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={handleVolumeChange}
          className="w-20 accent-white"
          aria-label="Lautstärke"
        />
      </div>

      {/* Audio-Element mit Track für Barrierefreiheit */}
      <audio ref={audioRef} src={audioSrc} loop>
        <track kind="captions" src="" label="Keine Untertitel verfügbar" default />
      </audio>

      {/* Für bessere Barrierefreiheit fügen wir auch eine kurze Beschreibung hinzu */}
      <span className="sr-only">
        Hintergrundmusik-Steuerung. Verwenden Sie die Schaltfläche, um die Musik ein- oder
        auszuschalten.
      </span>
    </div>
  );
};

export default BackgroundAudio;
