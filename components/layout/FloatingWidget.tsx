'use client';

import { Phone, MessageCircle } from 'lucide-react';

export default function FloatingWidget() {
  const items = [
    { label: 'Call', icon: Phone, href: 'tel:+919442548809' },
    { label: 'WhatsApp', icon: MessageCircle, href: 'https://wa.me/919442548809' },
  ];

  return (
    <div className="hidden md:flex fixed right-3 sm:right-5 top-[60%] -translate-y-1/2 z-40 flex-col gap-3 py-3 px-2 rounded-full bg-white/95 backdrop-blur-md border border-[#E9DED3] shadow-[0_10px_30px_rgba(71,32,106,0.12)] font-body">
      {items.map((item, idx) => {
        const Icon = item.icon;
        return (
          <a
            key={idx}
            href={item.href}
            target={item.href.startsWith('http') ? '_blank' : undefined}
            rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            aria-label={item.label}
            className="flex flex-col items-center justify-center w-11 h-12 rounded-full hover:bg-[#F8F2E8] transition-all group relative"
            title={item.label}
          >
            <div className="w-7 h-7 rounded-full bg-[#F8F2E8] group-hover:bg-[#5A2D82] border border-[#E9DED3] flex items-center justify-center text-[#C8A34A] group-hover:text-white transition-all shadow-sm">
              <Icon className="w-3.5 h-3.5" />
            </div>
            <span className="text-[8px] font-bold text-[#8A8394] group-hover:text-[#47206A] uppercase tracking-tighter mt-0.5">
              {item.label}
            </span>
          </a>
        );
      })}
    </div>
  );
}
