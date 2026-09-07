'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { MapPin, Sparkles, X } from 'lucide-react';

export interface EventItem {
  id: string;
  location: string;
  date: string;
  venue: string;
  badge: string;
  isMainEvent?: boolean;
}

export const SHAMBHALA_EVENTS: EventItem[] = [
  { id: 'erode', location: 'Erode', date: '26, September', venue: 'Erode Regional Initiation Center', badge: 'ERODE SATSANG' },
  { id: 'trichy', location: 'Trichy', date: '10, October', venue: 'Trichy Spiritual Awakening Center', badge: 'TRICHY SATSANG' },
  { id: 'ettimadai', location: 'Ettimadai', date: '24, October', venue: 'Ettimadai Oneness Meditation Hall', badge: 'ETTIMADAI SATSANG' },
  { id: 'chennai', location: 'Chennai', date: '31, October', venue: 'Chennai Shambhala Sanctuary', badge: 'CHENNAI SATSANG' },
  { id: 'villupuram1', location: 'Villupuram', date: '14, November', venue: 'Saraswathi School, Villupuram', badge: 'SARASWATHI SCHOOL' },
  { id: 'villupuram2', location: 'Villupuram', date: '21, November', venue: 'Villupuram City Oneness Sanctuary', badge: 'VILLUPURAM SATSANG' },
  { id: 'karaikal', location: 'Karaikal', date: '28, November', venue: 'Karaikal Shambhala Meditation Center', badge: 'KARAIKAL SATSANG' },
  { id: 'puducherry', location: 'Puducherry', date: '12, December 2026', venue: 'Grand Oneness Shambhala Sanctuary', badge: 'MAIN EVENT', isMainEvent: true },
];

interface EventFloatingBarProps {
  variant?: 'floating' | 'embedded';
}

export default function EventFloatingBar({ variant = 'floating' }: EventFloatingBarProps) {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  if (!isVisible) return null;

  const handleInterest = (eventItem: EventItem) => {
    router.push('/membership');
  };

  const containerClasses =
    variant === 'embedded'
      ? 'w-full max-w-6xl mx-auto mb-6 z-20 font-body px-4 sm:px-6'
      : 'fixed bottom-5 left-1/2 -translate-x-1/2 z-40 w-[95%] max-w-6xl font-body pointer-events-auto';

  return (
    <>
      {/* Infinite Looping Marquee Bar */}
      <div className={containerClasses}>
        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="relative rounded-full bg-white/95 backdrop-blur-xl border-2 border-[#DFC47A] shadow-xl p-2 sm:p-2.5 text-[#352043] flex items-center justify-between overflow-hidden group"
        >
          
          {/* Static Left Badge */}
          <div className="flex items-center gap-1.5 px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-[#352043] text-[#DFC47A] font-extrabold text-[11px] sm:text-xs shrink-0 z-20 shadow-md uppercase tracking-wider">
            <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#DFC47A]" />
            <span className="hidden sm:inline">UPCOMING SHAMBHALA EVENTS</span>
            <span className="sm:hidden">EVENTS</span>
          </div>

          {/* Marquee Infinite Loop Track */}
          <div className="relative flex-1 overflow-hidden mx-2 z-10">
            <div
              className="flex items-center gap-6 whitespace-nowrap animate-marquee"
              style={{ animationPlayState: isPaused ? 'paused' : 'running' }}
            >
              {/* Duplicate array 3 times for continuous seamless loop */}
              {[...SHAMBHALA_EVENTS, ...SHAMBHALA_EVENTS, ...SHAMBHALA_EVENTS].map((item, idx) => (
                <div
                  key={`${item.id}-${idx}`}
                  onClick={() => router.push('/membership')}
                  className="inline-flex items-center gap-2.5 bg-[#FAF5EF] hover:bg-[#F8F2E8] border border-[#DFC47A]/60 rounded-full pl-3.5 pr-1.5 py-1 text-xs font-semibold text-[#352043] transition-all shadow-xs cursor-pointer"
                >
                  <MapPin className="w-3.5 h-3.5 text-[#8C5D00] shrink-0" />
                  <span className="font-extrabold text-[#352043]">{item.location}</span>
                  <span className="text-[#8C5D00] font-bold">• {item.date}</span>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      router.push('/membership');
                    }}
                    className="ml-1 px-3 py-1 rounded-full bg-[#352043] hover:bg-[#8C5D00] text-white font-extrabold text-[10px] uppercase tracking-wider shadow-sm transition-all hover:scale-105 active:scale-95 flex items-center gap-1 cursor-pointer"
                  >
                    <span>Participate</span>
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Close Floating Bar Button (Only for floating mode) */}
          {variant === 'floating' && (
            <button
              onClick={() => setIsVisible(false)}
              className="w-7 h-7 rounded-full bg-[#FAF5EF] hover:bg-[#352043] text-[#352043] hover:text-white flex items-center justify-center shrink-0 z-20 transition-colors ml-1 border border-[#DFC47A]/50"
              title="Close Ticker"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </>
  );
}

