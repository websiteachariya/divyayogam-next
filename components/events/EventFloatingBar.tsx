'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Sparkles, X, CheckCircle2, Ticket } from 'lucide-react';

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
  const [isVisible, setIsVisible] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '' });

  if (!isVisible) return null;

  const handleInterest = (eventItem: EventItem) => {
    setSelectedEvent(eventItem);
    setIsSuccess(false);
  };

  const handleConfirm = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
    setTimeout(() => {
      setSelectedEvent(null);
      setIsSuccess(false);
      setFormData({ name: '', phone: '' });
    }, 2800);
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
                  className="inline-flex items-center gap-2.5 bg-[#FAF5EF] hover:bg-[#F8F2E8] border border-[#DFC47A]/60 rounded-full pl-3.5 pr-1.5 py-1 text-xs font-semibold text-[#352043] transition-all shadow-xs"
                >
                  <MapPin className="w-3.5 h-3.5 text-[#8C5D00] shrink-0" />
                  <span className="font-extrabold text-[#352043]">{item.location}</span>
                  <span className="text-[#8C5D00] font-bold">• {item.date}</span>

                  <button
                    onClick={() => handleInterest(item)}
                    className="ml-1 px-3 py-1 rounded-full bg-[#352043] hover:bg-[#8C5D00] text-white font-extrabold text-[10px] uppercase tracking-wider shadow-sm transition-all hover:scale-105 active:scale-95 flex items-center gap-1"
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

      {/* Interactive Participation Modal */}
      <AnimatePresence>
        {selectedEvent && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md font-body">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-gradient-to-b from-[#2A133B] to-[#1F0D2B] text-white rounded-3xl p-6 sm:p-8 max-w-md w-full border-2 border-[#DFC47A] shadow-2xl relative overflow-hidden space-y-5"
            >
              <button
                onClick={() => setSelectedEvent(null)}
                className="absolute top-4 right-4 text-white/60 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>

              {!isSuccess ? (
                <>
                  <div className="space-y-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C8A34A]/20 border border-[#DFC47A]/40 text-[#DFC47A] text-xs font-bold uppercase tracking-wider">
                      <Ticket className="w-3.5 h-3.5 text-[#DFC47A]" />
                      PARTICIPATE IN INITIATION
                    </span>
                    <h3 className="font-heading text-2xl font-extrabold text-white leading-tight">
                      Register Interest for <span className="text-[#DFC47A]">{selectedEvent.location}</span>
                    </h3>
                    <p className="text-xs text-white/80 leading-relaxed">
                      📅 <strong>{selectedEvent.date}</strong> — {selectedEvent.venue}
                    </p>
                  </div>

                  <form onSubmit={handleConfirm} className="space-y-4 pt-1">
                    <div>
                      <label className="block text-[11px] font-bold text-[#DFC47A] uppercase tracking-wider mb-1">
                        Your Full Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Enter your complete name"
                        className="w-full px-4 py-2.5 rounded-xl bg-white/10 border border-[#DFC47A]/40 text-white placeholder-white/40 focus:outline-none focus:border-[#DFC47A] text-xs font-medium"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-[#DFC47A] uppercase tracking-wider mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="Enter mobile number"
                        className="w-full px-4 py-2.5 rounded-xl bg-white/10 border border-[#DFC47A]/40 text-white placeholder-white/40 focus:outline-none focus:border-[#DFC47A] text-xs font-medium"
                      />
                    </div>

                    <div className="pt-2 flex items-center justify-between gap-3">
                      <button
                        type="button"
                        onClick={() => setSelectedEvent(null)}
                        className="px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-bold uppercase tracking-wider"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="flex-1 py-2.5 rounded-full bg-[#C8A34A] hover:bg-white text-[#352043] font-extrabold text-xs uppercase tracking-wider shadow-lg transition-all flex items-center justify-center gap-1.5"
                      >
                        <CheckCircle2 className="w-4 h-4" />
                        <span>Confirm Participation</span>
                      </button>
                    </div>
                  </form>
                </>
              ) : (
                <div className="text-center py-6 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#C8A34A] text-[#352043] flex items-center justify-center mx-auto shadow-lg animate-bounce">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-white">
                    Interest Recorded!
                  </h3>
                  <p className="text-xs text-[#DFC47A] leading-relaxed">
                    Thank you, <strong>{formData.name}</strong>! Our Divya Yogam team will contact you shortly regarding the <strong>{selectedEvent.location}</strong> session ({selectedEvent.date}).
                  </p>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
