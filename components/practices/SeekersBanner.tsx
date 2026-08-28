'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function SeekersBanner() {
  return (
    <section className="py-8 bg-transparent font-body relative z-10 overflow-hidden">
      {/* Rich Sandal Background Image Overlay (con-6.webp) matching About Page */}
      <div
        className="absolute inset-0 opacity-85 pointer-events-none bg-cover bg-center bg-no-repeat bg-fixed z-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(250, 245, 239, 0.5), rgba(250, 245, 239, 0.65)), url('/images/con-6.webp')",
        }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-b from-white via-[#FFFDF9] to-[#FAF5EF] rounded-2xl p-6 sm:p-8 border-2 border-[#DFC47A]/70 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden group hover:border-[#8C5D00] transition-all"
        >
          {/* Subtle Golden Ambient Glow */}
          <div className="absolute -right-10 -bottom-10 w-40 h-40 rounded-full bg-[#C8A34A]/10 blur-2xl pointer-events-none" />

          {/* Left Icon & Text */}
          <div className="flex flex-col md:flex-row items-center gap-4 sm:gap-5 text-center md:text-left relative z-10">
            {/* Golden Lotus SVG Icon */}
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#FAF4EB] border border-[#DFC47A]/50 flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform">
              <svg viewBox="0 0 64 64" className="w-9 h-9 sm:w-10 sm:h-10" fill="none" stroke="#C8A34A" strokeWidth="1.8">
                <path d="M32 14C32 14 38 24 38 34C38 40 35 44 32 46C29 44 26 40 26 34C26 24 32 14 32 14Z" fill="rgba(200, 163, 74, 0.15)" />
                <path d="M32 24C32 24 44 28 44 38C44 44 38 46 32 46C26 46 20 44 20 38C20 28 32 24 32 24Z" fill="rgba(223, 196, 122, 0.15)" />
                <path d="M32 34C32 34 50 34 50 42C50 46 42 48 32 48C22 48 14 46 14 42C14 34 32 34 32 34Z" fill="rgba(200, 163, 74, 0.1)" />
                <circle cx="32" cy="46" r="2" fill="#C8A34A" />
              </svg>
            </div>

            {/* Banner Text */}
            <h3 className="font-heading text-xl sm:text-2xl md:text-3xl font-extrabold text-[#1A072A] leading-tight">
              Belong To A <span className="text-[#8C5D00] italic font-serif">10-Year Life-Long Seekers Movement</span>
            </h3>
          </div>

          {/* Action Button */}
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#1A072A] hover:bg-[#8C5D00] text-[#DFC47A] hover:text-white font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-xl transition-all transform hover:scale-105 shrink-0 relative z-10"
          >
            <span>BECOME A LIFE MEMBER</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
