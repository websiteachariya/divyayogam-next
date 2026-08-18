import React from 'react';
import { Sparkles } from 'lucide-react';

interface PageHeroProps {
  badge: string;
  title: string;
  highlightTitle?: string;
  description: string;
}

export default function PageHero({ badge, title, highlightTitle, description }: PageHeroProps) {
  return (
    <section className="pt-32 pb-14 relative overflow-hidden bg-gradient-to-b from-[#47206A] to-[#352043] text-center border-b border-[#DFC47A]/25">
      {/* Background Central Lotus Mandala SVG Overlay */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10 pointer-events-none">
        <svg width="450" height="450" viewBox="0 0 100 100" fill="none" stroke="#DFC47A" strokeWidth="0.8">
          <circle cx="50" cy="50" r="45" />
          <circle cx="50" cy="50" r="32" strokeDasharray="2 2" />
          <circle cx="50" cy="50" r="20" />
          <path d="M50 5 C60 25 75 40 95 50 C75 60 60 75 50 95 C40 75 25 60 5 50 C25 40 40 25 50 5 Z" />
          <path d="M50 15 C57 30 70 43 85 50 C70 57 57 70 50 85 C43 70 30 57 15 50 C30 43 43 30 50 15 Z" />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 space-y-3">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C8A34A]/20 border border-[#DFC47A]/40 text-[#DFC47A] text-xs font-semibold uppercase tracking-wider shadow-md backdrop-blur-sm">
          <Sparkles className="w-3.5 h-3.5 text-[#C8A34A]" />
          {badge}
        </div>

        <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
          {title}{' '}
          {highlightTitle && <span className="text-[#DFC47A]">{highlightTitle}</span>}
        </h1>

        <p className="text-[#F8F2E8] text-base sm:text-lg font-light max-w-2xl mx-auto italic font-body">
          {description}
        </p>
      </div>
    </section>
  );
}
