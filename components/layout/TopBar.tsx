'use client';

import React from 'react';
import Link from 'next/link';
import { Mail, MapPin, Sparkles, Facebook, Instagram, Youtube, MessageCircle, ExternalLink } from 'lucide-react';

interface TopBarProps {
  isScrolled?: boolean;
}

export default function TopBar({ isScrolled = false }: TopBarProps) {
  const playStoreUrl = 'https://play.google.com/store/apps/details?id=com.ignitelabs.music_app';

  return (
    <div
      className={`topbar-container items-center justify-between text-xs text-[#F8F2E8] bg-gradient-to-r from-[#2D1A39] via-[#47206A] to-[#352043] border-b border-[#DFC47A]/30 px-3 sm:px-6 lg:px-8 font-body relative z-20 transition-all duration-300 overflow-hidden ${
        isScrolled ? 'max-h-0 py-0 opacity-0 border-b-0 pointer-events-none' : 'max-h-16 py-1.5 sm:py-2 opacity-100'
      }`}
    >
      {/* Subtle golden ambient glow overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#DFC47A]/15 via-transparent to-transparent pointer-events-none" />

      {/* Left Details: Email on Mid (700px+); Location on Full (1300px+) */}
      <div className="topbar-mobile-hide items-center gap-3 sm:gap-4 lg:gap-5 relative z-10">
        {/* Email Link (Mid 700px+ & Full 1300px+) */}
        <a
          href="mailto:info@divyayogam.org"
          className="flex items-center gap-1.5 text-[#F8F2E8]/90 hover:text-[#DFC47A] transition-colors group shrink-0"
        >
          <Mail className="w-3.5 h-3.5 text-[#DFC47A] group-hover:scale-110 transition-transform" />
          <span className="font-medium text-[11px] tracking-wide">info@divyayogam.org</span>
        </a>

        {/* Separator for Location */}
        <div className="topbar-full-only h-3 w-[1px] bg-[#DFC47A]/30 shrink-0" />

        {/* Ashram Location (Full details: 1300px+) */}
        <div className="topbar-full-only items-center gap-1.5 text-[#F8F2E8]/80 shrink-0">
          <MapPin className="w-3.5 h-3.5 text-[#DFC47A]" />
          <span className="text-[11px] font-normal tracking-wide">Sacred Sanctuary &amp; Global Online</span>
        </div>
      </div>

      {/* Center Live Announcement Line */}
      <div className="flex items-center gap-1.5 sm:gap-2 relative z-10 px-1 text-center truncate max-w-full justify-center min-w-0">
        <span className="hidden min-[671px]:inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#C8A34A]/25 border border-[#DFC47A]/40 text-[#DFC47A] text-[9px] sm:text-[10px] font-bold uppercase tracking-wider animate-pulse shrink-0">
          <Sparkles className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#DFC47A]" />
          Masterclass
        </span>
        <Link
          href="/classes"
          className="text-[10px] sm:text-[11px] text-[#F8F2E8] hover:text-[#DFC47A] font-semibold transition-colors underline underline-offset-2 decoration-[#DFC47A]/50 hover:decoration-[#DFC47A] truncate min-w-0"
        >
          <span>Divya Yogam Classes — Enroll Now</span>
        </Link>
      </div>

      {/* Right Section: Shambala App Music Pill, Social Links & WhatsApp CTA */}
      <div className="flex items-center gap-2 sm:gap-3 relative z-10 shrink-0">
        {/* Shambala Music App - Royal Purple & Gold Pill (Hidden below 1230px, visible on 1230px+) */}
        <a
          href={playStoreUrl}
          target="_blank"
          rel="noopener noreferrer"
          title="Experience Shambala Music App on Google Play"
          className="hidden min-[1230px]:flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 rounded-full bg-[#3B1758] hover:bg-[#522378] text-[#DFC47A] border border-[#DFC47A]/80 text-[10px] sm:text-[11px] font-extrabold tracking-wider shadow-md font-body whitespace-nowrap transition-all duration-300 hover:scale-105 group"
        >
          {/* Animated Equalizer Waveform Icon */}
          <div className="relative z-10 flex items-center gap-[2.5px] h-3 w-3 shrink-0">
            <span className="w-[2px] h-3 bg-[#DFC47A] rounded-full animate-[pulse_1s_ease-in-out_infinite]" />
            <span className="w-[2px] h-2 bg-[#DFC47A] rounded-full animate-[pulse_1.4s_ease-in-out_infinite_200ms]" />
            <span className="w-[2px] h-2.5 bg-[#DFC47A] rounded-full animate-[pulse_1.1s_ease-in-out_infinite_400ms]" />
          </div>

          <span className="relative z-10 uppercase tracking-wider text-[#DFC47A] font-extrabold text-[10px] sm:text-[11px]">
            SHAMBALA APP
          </span>

          <span className="relative z-10 text-[9px] font-bold px-1.5 py-0.5 rounded-full bg-[#DFC47A]/20 text-[#DFC47A] leading-none flex items-center gap-0.5 border border-[#DFC47A]/40 group-hover:bg-[#DFC47A] group-hover:text-[#47206A] transition-colors">
            <span>Music</span>
            <ExternalLink className="w-2.5 h-2.5 inline" />
          </span>
        </a>

        {/* Social Icons (Full details: 1300px+) */}
        <div className="topbar-full-only items-center gap-2 border-l border-[#DFC47A]/30 pl-3 pr-1">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="text-[#F8F2E8]/80 hover:text-[#DFC47A] transition-colors p-0.5 hover:scale-110"
          >
            <Facebook className="w-3.5 h-3.5" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-[#F8F2E8]/80 hover:text-[#DFC47A] transition-colors p-0.5 hover:scale-110"
          >
            <Instagram className="w-3.5 h-3.5" />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className="text-[#F8F2E8]/80 hover:text-[#DFC47A] transition-colors p-0.5 hover:scale-110"
          >
            <Youtube className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* WhatsApp Direct Action Button (Full details: 1300px+) */}
        <a
          href="https://wa.me/919500117358"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contact us on WhatsApp"
          className="topbar-full-only items-center gap-1.5 px-3 py-1 rounded-full bg-[#25D366]/20 border border-[#25D366]/40 text-[#25D366] hover:bg-[#25D366] hover:text-white transition-all text-[11px] font-semibold tracking-wide shadow-sm group"
        >
          <MessageCircle className="w-3.5 h-3.5 text-[#25D366] group-hover:text-white transition-colors" />
          <span>WhatsApp</span>
        </a>
      </div>
    </div>
  );
}

