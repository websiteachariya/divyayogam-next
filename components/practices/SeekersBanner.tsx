'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function SeekersBanner() {
  return (
    <section className="py-8 bg-transparent font-body relative z-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#FFFDF9] rounded-2xl p-6 sm:p-8 border border-[#E9DED3] shadow-[0_10px_30px_rgba(53,32,67,0.06)] flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden group hover:border-[#DFC47A] transition-all"
        >
          {/* Subtle Golden Ambient Glow */}
          <div className="absolute -right-10 -bottom-10 w-40 h-40 rounded-full bg-[#C8A34A]/10 blur-2xl pointer-events-none" />

          {/* Left Icon & Text */}
          <div className="flex items-center gap-5 text-center md:text-left">
            {/* Golden Lotus SVG Icon */}
            <div className="w-16 h-16 rounded-2xl bg-[#F8F2E8] border border-[#E9DED3] flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform">
              <svg viewBox="0 0 64 64" className="w-10 h-10" fill="none" stroke="#C8A34A" strokeWidth="1.8">
                <path d="M32 14C32 14 38 24 38 34C38 40 35 44 32 46C29 44 26 40 26 34C26 24 32 14 32 14Z" fill="rgba(200, 163, 74, 0.15)" />
                <path d="M32 24C32 24 44 28 44 38C44 44 38 46 32 46C26 46 20 44 20 38C20 28 32 24 32 24Z" fill="rgba(223, 196, 122, 0.15)" />
                <path d="M32 34C32 34 50 34 50 42C50 46 42 48 32 48C22 48 14 46 14 42C14 34 32 34 32 34Z" fill="rgba(200, 163, 74, 0.1)" />
                <circle cx="32" cy="46" r="2" fill="#C8A34A" />
              </svg>
            </div>

            {/* Banner Text */}
            <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#352043]">
              Belong To A <span className="text-[#8C5D00] italic font-serif">10-Year Life-Long Seekers Movement</span>
            </h3>
          </div>

          {/* Action Button */}
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#47206A] hover:bg-[#C8A34A] text-white hover:text-[#47206A] font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-xl transition-all transform hover:scale-105 shrink-0"
          >
            <span>BECOME A LIFE MEMBER</span>
            <ArrowRight className="w-4 h-4 text-[#DFC47A] group-hover:text-[#47206A] transition-colors" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
