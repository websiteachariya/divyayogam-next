'use client';

import React from 'react';
import Link from 'next/link';
import { Mail, MapPin, Sparkles, Facebook, Instagram, Youtube, MessageCircle } from 'lucide-react';

interface TopBarProps {
  isScrolled?: boolean;
}

export default function TopBar({ isScrolled = false }: TopBarProps) {
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
          href="mailto:contact@divyayogam.org"
          className="flex items-center gap-1.5 text-[#F8F2E8]/90 hover:text-[#DFC47A] transition-colors group shrink-0"
        >
          <Mail className="w-3.5 h-3.5 text-[#DFC47A] group-hover:scale-110 transition-transform" />
          <span className="font-medium text-[11px] tracking-wide">contact@divyayogam.org</span>
        </a>

        {/* Separator for Location */}
        <div className="topbar-full-only h-3 w-[1px] bg-[#DFC47A]/30 shrink-0" />

        {/* Ashram Location (Full details: 1300px+) */}
        <div className="topbar-full-only items-center gap-1.5 text-[#F8F2E8]/80 shrink-0">
          <MapPin className="w-3.5 h-3.5 text-[#DFC47A]" />
          <span className="text-[11px] font-normal tracking-wide">Sacred Sanctuary & Global Online</span>
        </div>
      </div>

      {/* Center Live Masterclass Announcement Line (Displayed on ALL screens: Mobile <700px, Mid 700px-1299px, Desktop 1300px+) */}
      <div className="flex items-center gap-1.5 sm:gap-2 relative z-10 px-1 text-center truncate max-w-full justify-center">
        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#C8A34A]/25 border border-[#DFC47A]/40 text-[#DFC47A] text-[9px] sm:text-[10px] font-bold uppercase tracking-wider animate-pulse shrink-0">
          <Sparkles className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#DFC47A]" />
          Masterclass
        </span>
        <Link
          href="/organ-meditation"
          className="text-[10px] sm:text-[11px] text-[#F8F2E8] hover:text-[#DFC47A] font-medium transition-colors underline underline-offset-2 decoration-[#DFC47A]/50 hover:decoration-[#DFC47A] truncate"
        >
          <span className="hidden min-[425px]:inline">Organ Rejuvenation & Sacred Sciences — Join Now</span>
          <span className="inline min-[425px]:hidden"> — Join Now</span>
        </Link>
      </div>

      {/* Right Social Links & WhatsApp CTA (Full details: 1300px+) */}
      <div className="topbar-full-only items-center gap-4 relative z-10 shrink-0">
        {/* Social Icons */}
        <div className="flex items-center gap-2 border-r border-[#DFC47A]/30 pr-4">
          <span className="text-[10px] uppercase font-semibold text-[#DFC47A] tracking-wider hidden 2xl:inline">Follow Us:</span>
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

        {/* WhatsApp Direct Action Button */}
        <a
          href="https://wa.me/918001089642"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#25D366]/20 border border-[#25D366]/40 text-[#25D366] hover:bg-[#25D366] hover:text-white transition-all text-[11px] font-semibold tracking-wide shadow-sm group"
        >
          <MessageCircle className="w-3.5 h-3.5 text-[#25D366] group-hover:text-white transition-colors" />
          <span>WhatsApp</span>
        </a>
      </div>
    </div>
  );
}
