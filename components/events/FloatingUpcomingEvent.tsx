'use client';

import React, { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, MapPin, ChevronRight, Sparkles, X, HeartHandshake } from 'lucide-react';

export interface FloatingEventItem {
  id: string;
  location: string;
  date: string;
  venue: string;
  badge: string;
  isMain?: boolean;
}

export const FLOATING_EVENTS: FloatingEventItem[] = [
  {
    id: 'erode',
    location: 'Erode',
    date: '26, September',
    venue: 'Erode Regional Initiation Center',
    badge: 'ERODE SATSANG',
  },
  {
    id: 'trichy',
    location: 'Trichy',
    date: '10, October',
    venue: 'Trichy Spiritual Awakening Center',
    badge: 'TRICHY SATSANG',
  },
  {
    id: 'ettimadai',
    location: 'Ettimadai',
    date: '24, October',
    venue: 'Ettimadai Oneness Meditation Hall',
    badge: 'ETTIMADAI SATSANG',
  },
  {
    id: 'chennai',
    location: 'Chennai',
    date: '31, October',
    venue: 'Chennai Shambala Sanctuary',
    badge: 'CHENNAI SATSANG',
  },
  {
    id: 'villupuram1',
    location: 'Villupuram',
    date: '14, November',
    venue: 'Saraswathi School, Villupuram',
    badge: 'SARASWATHI SCHOOL',
  },
  {
    id: 'villupuram2',
    location: 'Villupuram',
    date: '21, November',
    venue: 'Villupuram City Oneness Sanctuary',
    badge: 'VILLUPURAM SATSANG',
  },
  {
    id: 'karaikal',
    location: 'Karaikal',
    date: '28, November',
    venue: 'Karaikal Shambala Meditation Center',
    badge: 'KARAIKAL SATSANG',
  },
  {
    id: 'puducherry',
    location: 'Puducherry',
    date: '12, December 2026',
    venue: 'Grand Oneness Shambala Sanctuary',
    badge: 'MAIN EVENT',
    isMain: true,
  },
];

export default function FloatingUpcomingEvent() {
  const pathname = usePathname();
  const router = useRouter();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-cycle through events every 4.5 seconds
  useEffect(() => {
    if (isMinimized || isDismissed || isPaused) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % FLOATING_EVENTS.length);
    }, 4500);

    return () => clearInterval(timer);
  }, [isMinimized, isDismissed, isPaused]);

  // Hide on admin routes or if dismissed
  if (pathname?.startsWith('/admin') || isDismissed) {
    return null;
  }

  const currentEvent = FLOATING_EVENTS[currentIndex];

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % FLOATING_EVENTS.length);
  };

  const handleEventClick = () => {
    router.push('/shambala-contribution');
  };

  return (
    <div className="fixed bottom-44 max-[690px]:bottom-44 sm:bottom-40 right-4 sm:right-6 z-40 font-body select-none">
      <AnimatePresence mode="wait">
        {isMinimized ? (
          /* Minimized Floating Pill Badge */
          <motion.button
            key="minimized"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={() => setIsMinimized(false)}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#352043]/95 text-[#DFC47A] border-2 border-[#DFC47A] shadow-xl backdrop-blur-md hover:bg-[#8C5D00] hover:text-white transition-all cursor-pointer group"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-[#DFC47A] animate-pulse" />
            <Calendar className="w-4 h-4 text-[#DFC47A] group-hover:text-white" />
            <span className="text-xs font-heading font-extrabold uppercase tracking-wider">Upcoming Event</span>
          </motion.button>
        ) : (
          /* Full Expanded Dynamic Event Floating Widget */
          <motion.div
            key="expanded"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            className="w-72 sm:w-80 rounded-3xl bg-gradient-to-b from-[#352043]/95 via-[#2A133B]/95 to-[#1F0A2C]/95 border-2 border-[#DFC47A] shadow-[0_12px_35px_rgba(53,32,67,0.6)] backdrop-blur-xl p-3.5 text-white overflow-hidden relative"
          >
            {/* Ambient Gold Glow */}
            <div className="absolute -top-10 -right-10 w-24 h-24 rounded-full bg-[#DFC47A]/20 blur-xl pointer-events-none" />

            {/* Widget Top Bar */}
            <div className="flex items-center justify-between gap-2 pb-2 mb-2 border-b border-[#DFC47A]/30">
              <div className="flex items-center gap-1.5">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#DFC47A] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#DFC47A]"></span>
                </span>
                <span className="text-[10px] font-extrabold text-[#DFC47A] uppercase tracking-widest flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-[#DFC47A]" />
                  NEXT UPCOMING EVENT
                </span>
              </div>

              <div className="flex items-center gap-1">
                {/* Manual Cycle Next Button */}
                <button
                  onClick={handleNext}
                  title="Next Event"
                  className="p-1 rounded-full bg-white/10 hover:bg-[#8C5D00] text-[#DFC47A] hover:text-white transition-colors cursor-pointer"
                >
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
                {/* Minimize Button */}
                <button
                  onClick={() => setIsMinimized(true)}
                  title="Minimize"
                  className="p-1 rounded-full bg-white/10 hover:bg-white/20 text-white/80 transition-colors cursor-pointer"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Animated Event Content Slide */}
            <div onClick={handleEventClick} className="cursor-pointer group">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentEvent.id}
                  initial={{ opacity: 0, x: 15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -15 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-2 py-1"
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-[#DFC47A]/20 border border-[#DFC47A]/40 text-[#DFC47A] text-[10px] font-bold uppercase tracking-wider">
                      {currentEvent.badge}
                    </span>
                    <span className="text-xs font-extrabold text-[#DFC47A] flex items-center gap-1 bg-white/10 px-2.5 py-0.5 rounded-full">
                      <Calendar className="w-3 h-3 text-[#DFC47A]" />
                      {currentEvent.date}
                    </span>
                  </div>

                  <div className="space-y-0.5">
                    <h4 className="font-heading text-base sm:text-lg font-bold text-white group-hover:text-[#DFC47A] transition-colors flex items-center gap-1.5">
                      <MapPin className="w-4 h-4 text-[#DFC47A] shrink-0" />
                      <span>{currentEvent.location}</span>
                    </h4>
                    <p className="text-[11px] text-[#E9DED3] line-clamp-1 font-serif italic pl-5.5">
                      {currentEvent.venue}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Action Button: Register & Contribute */}
              <div className="pt-2 mt-2 border-t border-[#DFC47A]/25 flex items-center justify-between gap-2">
                <div className="flex items-center gap-1 text-[10px] font-semibold text-white/70">
                  <span>Event {currentIndex + 1} of {FLOATING_EVENTS.length}</span>
                </div>

                <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#8C5D00] group-hover:bg-[#DFC47A] text-white group-hover:text-[#352043] font-heading font-extrabold text-[11px] uppercase tracking-wider transition-all duration-300 shadow-md group-hover:scale-105">
                  <HeartHandshake className="w-3.5 h-3.5" />
                  <span>Contribute</span>
                  <ChevronRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
