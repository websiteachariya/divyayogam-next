'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX, Music, Sparkles, ChevronUp, ChevronDown } from 'lucide-react';

const AUDIO_SRC = '/music/divya-yogam.mp3';
const VIDEO_DUCK_VOLUME = 0.05;

// Storage Keys
const STORAGE_ENABLED = 'divyaYogamMusicEnabled';
const STORAGE_VOLUME = 'divyaYogamMusicVolume';
const STORAGE_MUTED = 'divyaYogamMusicMuted';
const STORAGE_USER_STOPPED = 'divyaYogamMusicUserStopped';

// Global Window Audio Singleton (persists across ALL Next.js App Router client-side route transitions)
function getGlobalAudio(): HTMLAudioElement | null {
  if (typeof window === 'undefined') return null;

  const win = window as any;
  if (!win.__DIVYA_YOGAM_AUDIO__) {
    const audio = new Audio(AUDIO_SRC);
    audio.loop = true;
    audio.preload = 'auto';

    // Retrieve stored initial volume or default to 0.8
    const savedVol = localStorage.getItem(STORAGE_VOLUME);
    audio.volume = savedVol !== null ? parseFloat(savedVol) : 0.8;

    // Retrieve stored initial mute preference
    const savedMuted = localStorage.getItem(STORAGE_MUTED);
    audio.muted = savedMuted === 'true';

    audio.setAttribute('playsinline', 'true');
    win.__DIVYA_YOGAM_AUDIO__ = audio;
  }
  return win.__DIVYA_YOGAM_AUDIO__;
}

// Single loader for YouTube IFrame Player API
function loadYouTubeIframeApi(): Promise<void> {
  if (typeof window === 'undefined') return Promise.reject();
  const win = window as any;

  if (win.YT && win.YT.Player) {
    return Promise.resolve();
  }

  if (win.__DIVYA_YT_API_PROMISE__) {
    return win.__DIVYA_YT_API_PROMISE__;
  }

  win.__DIVYA_YT_API_PROMISE__ = new Promise<void>((resolve) => {
    const prevCallback = win.onYouTubeIframeAPIReady;
    win.onYouTubeIframeAPIReady = () => {
      if (prevCallback) prevCallback();
      resolve();
    };

    if (!document.querySelector('script[src*="youtube.com/iframe_api"]')) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      const firstScriptTag = document.getElementsByTagName('script')[0];
      if (firstScriptTag && firstScriptTag.parentNode) {
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
      } else {
        document.head.appendChild(tag);
      }
    }
  });

  return win.__DIVYA_YT_API_PROMISE__;
}

function isYouTubeIframe(iframe: HTMLIFrameElement): boolean {
  const src = iframe.src || '';
  return src.includes('youtube.com/embed/') || src.includes('youtube-nocookie.com/embed/');
}

function ensureJsApiParam(iframe: HTMLIFrameElement) {
  if (!iframe.src || iframe.src.includes('enablejsapi=1')) return;
  const delimiter = iframe.src.includes('?') ? '&' : '?';
  iframe.src = `${iframe.src}${delimiter}enablejsapi=1`;
}

export default function GlobalMusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.8);
  const [isExpanded, setIsExpanded] = useState(false);

  const listenersAttachedRef = useRef(false);
  const activeMediaSetRef = useRef<Set<any>>(new Set());
  const savedVolumeBeforeVideoRef = useRef<number | null>(null);
  const observedVideosRef = useRef<WeakSet<HTMLVideoElement>>(new WeakSet());
  const ytPlayersMapRef = useRef<Map<HTMLIFrameElement, any>>(new Map());
  const ytObservedIframesRef = useRef<WeakSet<HTMLIFrameElement>>(new WeakSet());
  const rampAnimationRef = useRef<number | null>(null);

  // Smooth volume transition helper
  const smoothlyChangeVolume = useCallback((audio: HTMLAudioElement, target: number) => {
    if (!audio) return;
    if (rampAnimationRef.current) {
      cancelAnimationFrame(rampAnimationRef.current);
    }

    const start = audio.volume;
    const duration = 400;
    const startTime = performance.now();

    const animate = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      audio.volume = Math.max(0, Math.min(1, start + (target - start) * progress));

      if (progress < 1) {
        rampAnimationRef.current = requestAnimationFrame(animate);
      } else {
        audio.volume = target;
        rampAnimationRef.current = null;
      }
    };

    rampAnimationRef.current = requestAnimationFrame(animate);
  }, []);

  // Duck music volume when video audio starts
  const duckMusicForVideo = useCallback(() => {
    const audio = getGlobalAudio();
    if (!audio) return;
    if (audio.muted) return;

    if (savedVolumeBeforeVideoRef.current === null) {
      savedVolumeBeforeVideoRef.current = audio.volume;
    }

    const savedVolStr = localStorage.getItem(STORAGE_VOLUME);
    const normalVol = savedVolStr !== null ? parseFloat(savedVolStr) : volume;
    const target = Math.min(VIDEO_DUCK_VOLUME, normalVol);

    console.log('[Music Ducking] Ducking music volume from', audio.volume, 'to', target);
    smoothlyChangeVolume(audio, target);
  }, [volume, smoothlyChangeVolume]);

  // Restore music volume when all videos pause or end
  const restoreMusicAfterVideo = useCallback(() => {
    const audio = getGlobalAudio();
    if (!audio) return;
    if (audio.muted) return;

    const savedVolStr = localStorage.getItem(STORAGE_VOLUME);
    const normalUserVolume = savedVolStr !== null ? parseFloat(savedVolStr) : volume;
    const restoreVolume = savedVolumeBeforeVideoRef.current ?? normalUserVolume;

    console.log('[Music Ducking] Restoring background music volume to:', restoreVolume);
    smoothlyChangeVolume(audio, restoreVolume);

    savedVolumeBeforeVideoRef.current = null;
  }, [volume, smoothlyChangeVolume]);

  // Attach handlers for native HTML <video> elements
  const attachVideoListeners = useCallback((video: HTMLVideoElement) => {
    if (observedVideosRef.current.has(video)) return;
    observedVideosRef.current.add(video);

    const handleVideoPlay = () => {
      if (!video.muted && video.volume > 0) {
        activeMediaSetRef.current.add(video);
        duckMusicForVideo();
      }
    };

    const handleVideoPause = () => {
      activeMediaSetRef.current.delete(video);
      if (activeMediaSetRef.current.size === 0) {
        restoreMusicAfterVideo();
      }
    };

    const handleVideoEnded = () => {
      activeMediaSetRef.current.delete(video);
      if (activeMediaSetRef.current.size === 0) {
        restoreMusicAfterVideo();
      }
    };

    video.addEventListener('play', handleVideoPlay);
    video.addEventListener('playing', handleVideoPlay);
    video.addEventListener('pause', handleVideoPause);
    video.addEventListener('ended', handleVideoEnded);

    // Check if HTML video is already playing
    if (!video.paused && !video.ended && !video.muted && video.volume > 0) {
      activeMediaSetRef.current.add(video);
      duckMusicForVideo();
    }
  }, [duckMusicForVideo, restoreMusicAfterVideo]);

  // Attach handlers for YouTube <iframe> embeds
  const attachYouTubeListeners = useCallback(async (iframe: HTMLIFrameElement) => {
    if (!isYouTubeIframe(iframe)) return;
    if (ytObservedIframesRef.current.has(iframe)) return;
    ytObservedIframesRef.current.add(iframe);

    ensureJsApiParam(iframe);

    try {
      await loadYouTubeIframeApi();
      const win = window as any;
      if (!win.YT || !win.YT.Player) return;

      console.log('[Music] YouTube detected');

      const ytId = iframe.id || `yt_player_${Math.random().toString(36).substring(2, 9)}`;
      if (!iframe.id) iframe.id = ytId;

      const player = new win.YT.Player(iframe.id, {
        events: {
          onStateChange: (event: any) => {
            const state = event.data;
            if (state === win.YT.PlayerState.PLAYING) {
              console.log('[Music] YouTube PLAYING');
              console.log('[Music] Ducking background music');
              activeMediaSetRef.current.add(ytId);
              duckMusicForVideo();
            } else if (state === win.YT.PlayerState.PAUSED || state === win.YT.PlayerState.ENDED) {
              const stateName = state === win.YT.PlayerState.PAUSED ? 'PAUSED' : 'ENDED';
              console.log(`[Music] YouTube ${stateName}`);
              activeMediaSetRef.current.delete(ytId);
              if (activeMediaSetRef.current.size === 0) {
                console.log('[Music] Restoring background music');
                restoreMusicAfterVideo();
              }
            }
          },
        },
      });

      ytPlayersMapRef.current.set(iframe, player);
    } catch (err) {
      console.log('[Music] Error initializing YouTube player:', err);
    }
  }, [duckMusicForVideo, restoreMusicAfterVideo]);

  // Observe DOM for dynamic HTML videos & YouTube iframes
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const scanAndBindMedia = () => {
      const videos = document.querySelectorAll('video');
      videos.forEach((v) => attachVideoListeners(v as HTMLVideoElement));

      const iframes = document.querySelectorAll('iframe');
      iframes.forEach((iframe) => {
        if (isYouTubeIframe(iframe as HTMLIFrameElement)) {
          attachYouTubeListeners(iframe as HTMLIFrameElement);
        }
      });
    };

    scanAndBindMedia();

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === Node.ELEMENT_NODE) {
            const el = node as HTMLElement;
            if (el.tagName === 'VIDEO') {
              attachVideoListeners(el as HTMLVideoElement);
            } else if (el.tagName === 'IFRAME' && isYouTubeIframe(el as HTMLIFrameElement)) {
              attachYouTubeListeners(el as HTMLIFrameElement);
            } else if (el.querySelectorAll) {
              const nestedVideos = el.querySelectorAll('video');
              nestedVideos.forEach((v) => attachVideoListeners(v as HTMLVideoElement));

              const nestedIframes = el.querySelectorAll('iframe');
              nestedIframes.forEach((iframe) => {
                if (isYouTubeIframe(iframe as HTMLIFrameElement)) {
                  attachYouTubeListeners(iframe as HTMLIFrameElement);
                }
              });
            }
          }
        });

        mutation.removedNodes.forEach((node) => {
          if (node.nodeType === Node.ELEMENT_NODE) {
            const el = node as HTMLElement;
            if (el.tagName === 'IFRAME') {
              const iframe = el as HTMLIFrameElement;
              const player = ytPlayersMapRef.current.get(iframe);
              if (player) {
                try { player.destroy(); } catch {}
                ytPlayersMapRef.current.delete(iframe);
                if (iframe.id) activeMediaSetRef.current.delete(iframe.id);
              }
            }
          }
        });
      });

      if (activeMediaSetRef.current.size === 0) {
        restoreMusicAfterVideo();
      }
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
    };
  }, [attachVideoListeners, attachYouTubeListeners, restoreMusicAfterVideo]);

  // Core function to attempt audio playback safely with verbose debugging
  const attemptMusicPlay = useCallback(async (source: string): Promise<boolean> => {
    const userStopped = localStorage.getItem(STORAGE_USER_STOPPED) === 'true';
    const audio = getGlobalAudio();

    if (!audio) return false;

    console.log(`INTERACTION CAPTURED via [${source}]`);
    console.log(`ATTEMPTING MUSIC PLAY | audio.paused: ${audio.paused} | audio.muted: ${audio.muted} | userPaused: ${userStopped}`);

    if (userStopped) {
      console.log('Playback skipped: user intentionally paused music.');
      setIsPlaying(false);
      return false;
    }

    try {
      const savedVolStr = localStorage.getItem(STORAGE_VOLUME);
      const vol = savedVolStr !== null ? parseFloat(savedVolStr) : volume;
      const targetVol = activeMediaSetRef.current.size > 0 ? Math.min(VIDEO_DUCK_VOLUME, vol) : vol;
      audio.volume = targetVol;

      // Try unmuting and playing
      audio.muted = false;
      await audio.play();

      console.log(`GLOBAL MUSIC STARTED via [${source}]`);
      setIsPlaying(true);
      setIsMuted(false);
      localStorage.setItem(STORAGE_ENABLED, 'true');
      return true;
    } catch (error) {
      console.log('Music autoplay still blocked:', error);

      // Start muted background playback so audio buffer is running for instant unmute on scroll/click
      try {
        audio.muted = true;
        await audio.play();
        console.log('Muted background stream running.');
        setIsPlaying(true);
        setIsMuted(true);
      } catch {
        setIsPlaying(false);
      }

      return false;
    }
  }, [volume]);

  // Global Capturing Interaction Engine (captures click, pointer, touch, scroll anywhere before stopPropagation)
  useEffect(() => {
    const audio = getGlobalAudio();
    if (!audio) return;

    // Sync initial values from storage
    const savedVol = localStorage.getItem(STORAGE_VOLUME);
    if (savedVol !== null) {
      const parsedVol = parseFloat(savedVol);
      setVolume(parsedVol);
      audio.volume = parsedVol;
    }

    const savedMuted = localStorage.getItem(STORAGE_MUTED) === 'true';
    setIsMuted(savedMuted);
    audio.muted = savedMuted;

    const userStopped = localStorage.getItem(STORAGE_USER_STOPPED) === 'true';
    const isCurrentlyPlayingUnmuted = !audio.paused && !audio.muted;

    setIsPlaying(!audio.paused);

    // Initial autoplay attempt on mount
    if (!userStopped && !isCurrentlyPlayingUnmuted) {
      attemptMusicPlay('mount');
    }

    const events = [
      'click',
      'pointerdown',
      'mousedown',
      'touchstart',
      'touchmove',
      'scroll',
      'wheel',
      'keydown',
    ];

    const removeFallbackListeners = () => {
      if (!listenersAttachedRef.current) return;
      events.forEach((evtName) => {
        try {
          window.removeEventListener(evtName, handleUserGesture, { capture: true } as any);
          document.removeEventListener(evtName, handleUserGesture, { capture: true } as any);
        } catch {}
      });
      listenersAttachedRef.current = false;
    };

    const handleUserGesture = async (evt: Event) => {
      const userStopped = localStorage.getItem(STORAGE_USER_STOPPED) === 'true';
      const isDirectGesture = ['click', 'pointerdown', 'mousedown', 'touchstart'].includes(evt.type);

      // Direct clicks anywhere on the page override previous user pause state
      if (isDirectGesture && userStopped) {
        localStorage.removeItem(STORAGE_USER_STOPPED);
      } else if (userStopped) {
        return;
      }

      const a = getGlobalAudio();
      if (!a) return;

      if (a.paused || a.muted) {
        const success = await attemptMusicPlay(evt.type);
        if (success) {
          console.log(`Playback successfully activated via captured [${evt.type}]. Removing gesture listeners.`);
          removeFallbackListeners();
        }
      } else {
        removeFallbackListeners();
      }
    };

    // Bind capturing listeners to window and document to intercept clicks anywhere before e.stopPropagation()
    if (!listenersAttachedRef.current) {
      events.forEach((evtName) => {
        try {
          window.addEventListener(evtName, handleUserGesture, { capture: true, passive: true });
          document.addEventListener(evtName, handleUserGesture, { capture: true, passive: true });
        } catch {}
      });
      listenersAttachedRef.current = true;
    }

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => {
      if (localStorage.getItem(STORAGE_USER_STOPPED) === 'true') {
        setIsPlaying(false);
      }
    };

    audio.addEventListener('play', handlePlay);
    audio.addEventListener('pause', handlePause);

    return () => {
      removeFallbackListeners();
      audio.removeEventListener('play', handlePlay);
      audio.removeEventListener('pause', handlePause);
    };
  }, [attemptMusicPlay]);

  // Sync volume slider changes to audio element when user is not ducked
  useEffect(() => {
    const audio = getGlobalAudio();
    if (audio && activeMediaSetRef.current.size === 0) {
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
      localStorage.setItem(STORAGE_USER_STOPPED, 'true');
      localStorage.setItem(STORAGE_ENABLED, 'false');
      console.log('User explicitly paused music.');
    } else {
      localStorage.removeItem(STORAGE_USER_STOPPED);
      localStorage.setItem(STORAGE_ENABLED, 'true');
      if (isMuted) {
        audio.muted = false;
        setIsMuted(false);
        localStorage.setItem(STORAGE_MUTED, 'false');
      }
      attemptMusicPlay('user_toggle');
    }
  };

  const toggleMute = () => {
    const audio = getGlobalAudio();
    if (!audio) return;

    const newMuteState = !isMuted;
    audio.muted = newMuteState;
    setIsMuted(newMuteState);
    localStorage.setItem(STORAGE_MUTED, newMuteState ? 'true' : 'false');

    if (!newMuteState && audio.paused) {
      localStorage.removeItem(STORAGE_USER_STOPPED);
      localStorage.setItem(STORAGE_ENABLED, 'true');
      attemptMusicPlay('user_unmute');
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVol = parseFloat(e.target.value);
    setVolume(newVol);
    localStorage.setItem(STORAGE_VOLUME, newVol.toString());

    const audio = getGlobalAudio();
    if (audio && activeMediaSetRef.current.size === 0) {
      audio.volume = newVol;
      if (newVol > 0 && isMuted) {
        audio.muted = false;
        setIsMuted(false);
        localStorage.setItem(STORAGE_MUTED, 'false');
      }
    }
  };

  return (
    <div className="fixed bottom-6 left-6 z-50 font-body select-none">
      {/* Expanded Control Drawer */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 10 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="mb-3 w-72 bg-[#2D1A39]/75 lg:bg-[#2D1A39]/95 backdrop-blur-xl border-2 border-[#DFC47A]/70 text-[#F8F2E8] p-4 rounded-3xl shadow-[0_12px_35px_rgba(45,26,57,0.5)] text-left relative overflow-hidden"
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
                aria-label="Close music controls"
              >
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>

            {/* Play/Pause & Mute Button Row */}
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

      {/* Floating Action Button & Status Pill Badge */}
      <div className="flex items-center gap-2 group">
        <motion.button
          onClick={togglePlay}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.94 }}
          aria-label={isPlaying ? 'Pause divine music' : 'Play divine music'}
          className={`relative flex items-center justify-center w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-gradient-to-tr from-[#2D1A39]/70 via-[#47206A]/70 to-[#352043]/70 backdrop-blur-md text-[#DFC47A] shadow-[0_8px_25px_rgba(45,26,57,0.4)] hover:shadow-[0_12px_30px_rgba(200,163,74,0.5)] transition-all duration-300 border-2 cursor-pointer ${
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
        <div className="flex items-center gap-2 bg-[#2D1A39]/70 lg:bg-[#2D1A39]/95 text-[#F8F2E8] border border-[#DFC47A]/50 rounded-full px-3 py-1.5 sm:px-3.5 shadow-lg backdrop-blur-md transition-all">
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
