'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX, Music, Sparkles, ChevronUp, ChevronDown } from 'lucide-react';

// Global Window Audio Singleton (persists across ALL Next.js client-side route transitions)
function getGlobalAudio(): HTMLAudioElement | null {
  if (typeof window === 'undefined') return null;

  const win = window as any;
  if (!win.__DIVYA_SPIRITUAL_AUDIO__) {
    const audio = new Audio('/divine_spiritual_medium_music.wav');
    audio.loop = true;
    audio.preload = 'auto';
    audio.volume = 0.8;
    audio.setAttribute('playsinline', 'true');
    win.__DIVYA_SPIRITUAL_AUDIO__ = audio;
  }
  return win.__DIVYA_SPIRITUAL_AUDIO__;
}

export default function DivineAudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.8);
  const [isExpanded, setIsExpanded] = useState(false);

  // Play audio unmuted
  const playAudio = useCallback(async () => {
    if (localStorage.getItem('divya_music_user_off') === 'true') return;

    const audio = getGlobalAudio();
    if (!audio) return;

    try {
      audio.volume = volume;
      audio.muted = false;
      await audio.play();
      setIsPlaying(true);
      setIsMuted(false);
    } catch {
      // Browser blocked unmuted autoplay pending user gesture
      setIsPlaying(false);
    }
  }, [volume]);

  useEffect(() => {
    const audio = getGlobalAudio();
    if (!audio) return;

    // Sync initial state
    const currentlyPlaying = !audio.paused && !audio.muted;
    setIsPlaying(currentlyPlaying);
    setIsMuted(audio.muted);

    const isOff = localStorage.getItem('divya_music_user_off') === 'true';

    if (!isOff && (audio.paused || audio.muted)) {
      // Attempt unmuted play on page mount
      playAudio();
    }

    // User Activation gestures ONLY (click, touch, pointerdown, keydown)
    const activationEvents = ['pointerdown', 'touchstart', 'click', 'keydown'];

    const onActivation = () => {
      if (localStorage.getItem('divya_music_user_off') === 'true') return;
      const a = getGlobalAudio();
      if (a && (a.paused || a.muted)) {
        playAudio();
      }
    };

    // Attach to window & document in capturing phase
    activationEvents.forEach((evt) => {
      window.addEventListener(evt, onActivation, { capture: true, passive: true });
      document.addEventListener(evt, onActivation, { capture: true, passive: true });
    });

    const handlePlay = () => {
      setIsPlaying(true);
      setIsMuted(false);
    };

    const handlePause = () => {
      if (localStorage.getItem('divya_music_user_off') === 'true') {
        setIsPlaying(false);
      }
    };

    audio.addEventListener('play', handlePlay);
    audio.addEventListener('pause', handlePause);

    return () => {
      activationEvents.forEach((evt) => {
        window.removeEventListener(evt, onActivation, { capture: true } as any);
        document.removeEventListener(evt, onActivation, { capture: true } as any);
      });
      audio.removeEventListener('play', handlePlay);
      audio.removeEventListener('pause', handlePause);
    };
  }, [playAudio]);

  // Sync volume changes
  useEffect(() => {
    const audio = getGlobalAudio();
    if (audio) {
      audio.volume = isMuted ? 0 : volume;
      audio.muted = isMuted;
    }
  }, [volume, isMuted]);

  const togglePlay = () => {
    const audio = getGlobalAudio();
    if (!audio) return;

    if (isPlaying && !isMuted) {
      audio.pause();
      setIsPlaying(false);
      localStorage.setItem('divya_music_user_off', 'true');
    } else {
      localStorage.removeItem('divya_music_user_off');
      playAudio();
    }
  };

  const toggleMute = () => {
    const audio = getGlobalAudio();
    if (!audio) return;

    if (isMuted) {
      audio.muted = false;
      setIsMuted(false);
      playAudio();
    } else {
      audio.muted = true;
      setIsMuted(true);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVol = parseFloat(e.target.value);
    setVolume(newVol);
    const audio = getGlobalAudio();
    if (newVol > 0 && isMuted) {
      setIsMuted(false);
      if (audio) audio.muted = false;
    }
  };

  return (
    <div className="fixed bottom-6 left-6 z-50 font-body">
      {/* Expanded Control Drawer */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 10 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="mb-3 w-72 bg-[#2D1A39]/95 backdrop-blur-xl border-2 border-[#DFC47A]/70 text-[#F8F2E8] p-4 rounded-3xl shadow-[0_12px_35px_rgba(45,26,57,0.7)] text-left relative overflow-hidden"
          >
            {/* Ambient background aura */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#47206A]/40 via-transparent to-[#C8A34A]/20 pointer-events-none" />

            <div className="relative z-10 flex items-center justify-between pb-2.5 mb-2.5 border-b border-[#DFC47A]/25">
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-full bg-[#C8A34A]/20 text-[#DFC47A] border border-[#DFC47A]/30">
                  <Sparkles className="w-3.5 h-3.5 animate-pulse" />
                </div>
                <div>
                  <h4 className="text-xs font-bold font-heading text-[#DFC47A] tracking-wider uppercase">
                    Divine Spiritual Music
                  </h4>
                  <p className="text-[10px] text-[#F8F2E8]/70">Sacred Ambient Audio</p>
                </div>
              </div>

              <button
                onClick={() => setIsExpanded(false)}
                className="text-[#F8F2E8]/60 hover:text-[#DFC47A] transition-colors p-1 rounded-full hover:bg-white/10 cursor-pointer"
                aria-label="Close music settings"
              >
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>

            {/* Play/Pause Button */}
            <div className="relative z-10 flex items-center justify-between gap-3 my-2">
              <button
                onClick={togglePlay}
                className="flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-2xl bg-gradient-to-r from-[#C8A34A] to-[#DFC47A] hover:from-[#B58F38] hover:to-[#C8A34A] text-[#2D1A39] font-bold text-xs shadow-md transition-all active:scale-95 cursor-pointer"
              >
                {isPlaying && !isMuted ? (
                  <>
                    <Pause className="w-4 h-4 fill-current" />
                    <span>Pause Music</span>
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4 fill-current ml-0.5" />
                    <span>Play Music</span>
                  </>
                )}
              </button>

              <button
                onClick={toggleMute}
                className="p-2.5 rounded-2xl bg-white/10 hover:bg-white/20 text-[#DFC47A] border border-[#DFC47A]/30 transition-all active:scale-95 cursor-pointer"
                aria-label={isMuted ? 'Unmute' : 'Mute'}
              >
                {isMuted || volume === 0 ? (
                  <VolumeX className="w-4 h-4 text-red-400" />
                ) : (
                  <Volume2 className="w-4 h-4 text-[#DFC47A]" />
                )}
              </button>
            </div>

            {/* Volume slider */}
            <div className="relative z-10 flex items-center gap-2.5 mt-3 pt-2 border-t border-[#DFC47A]/15">
              <span className="text-[10px] text-[#F8F2E8]/70 font-semibold uppercase">Vol</span>
              <input
                type="range"
                min="0"
                max="1"
                step="0.05"
                value={isMuted ? 0 : volume}
                onChange={handleVolumeChange}
                className="w-full h-1.5 bg-[#47206A] rounded-lg appearance-none cursor-pointer accent-[#DFC47A]"
              />
              <span className="text-[10px] text-[#DFC47A] font-bold min-w-[28px] text-right">
                {Math.round((isMuted ? 0 : volume) * 100)}%
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Action Button & Status Badge */}
      <div className="flex items-center gap-2 group">
        <motion.button
          onClick={togglePlay}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.94 }}
          aria-label={isPlaying ? 'Pause divine music' : 'Play divine music'}
          className={`relative flex items-center justify-center w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-gradient-to-tr from-[#2D1A39] via-[#47206A] to-[#352043] text-[#DFC47A] shadow-[0_8px_25px_rgba(45,26,57,0.6)] hover:shadow-[0_12px_30px_rgba(200,163,74,0.5)] transition-all duration-300 border-2 cursor-pointer ${
            isPlaying && !isMuted ? 'border-[#DFC47A]' : 'border-[#DFC47A]/50 animate-pulse'
          }`}
        >
          {isPlaying && !isMuted && (
            <span className="absolute inset-0 rounded-full bg-[#DFC47A] opacity-30 animate-ping pointer-events-none" />
          )}

          <div className="relative z-10 flex items-center justify-center">
            {isPlaying && !isMuted ? (
              <div className="flex items-center gap-[3px] h-4">
                <span className="w-[2.5px] h-4 bg-[#DFC47A] rounded-full animate-[pulse_0.8s_ease-in-out_infinite]" />
                <span className="w-[2.5px] h-2 bg-[#DFC47A] rounded-full animate-[pulse_1.2s_ease-in-out_infinite_150ms]" />
                <span className="w-[2.5px] h-3.5 bg-[#DFC47A] rounded-full animate-[pulse_1s_ease-in-out_infinite_300ms]" />
                <span className="w-[2.5px] h-2 bg-[#DFC47A] rounded-full animate-[pulse_1.3s_ease-in-out_infinite_450ms]" />
              </div>
            ) : (
              <Music className="w-5 h-5 text-[#DFC47A] ml-0.5" />
            )}
          </div>
        </motion.button>

        {/* Status Pill Badge */}
        <div className="hidden sm:flex items-center gap-2 bg-[#2D1A39]/95 text-[#F8F2E8] border border-[#DFC47A]/50 rounded-full px-3.5 py-1.5 shadow-lg backdrop-blur-md">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-2 hover:text-[#DFC47A] transition-colors cursor-pointer"
          >
            <span className="text-[11px] font-semibold tracking-wide whitespace-nowrap">
              {isPlaying && !isMuted ? 'Divine Music Playing' : 'Divine Music'}
            </span>
            {isExpanded ? (
              <ChevronDown className="w-3.5 h-3.5 text-[#DFC47A]" />
            ) : (
              <ChevronUp className="w-3.5 h-3.5 text-[#DFC47A]" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
