'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function TransformationHero() {
  return (
    <section className="relative pt-36 pb-20 sm:pb-28 overflow-hidden font-body bg-transparent">
      
      {/* Background Banner Image: trans-1.png */}
      <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
        <Image
          src="/images/trans-1.webp"
          alt="Divya Yogam Inner Transformation Banner"
          fill
          className="object-cover object-center opacity-25 mix-blend-multiply"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#F8F2E8]/40 to-transparent" />
      </div>



      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 text-center space-y-6">
        
        {/* Eyebrow Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex flex-col items-center gap-1.5"
        >
          <div className="w-8 h-8 rounded-full bg-[#C8A34A]/15 border border-[#C8A34A]/40 flex items-center justify-center text-[#C8A34A] shadow-sm mb-1">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M12 3C10 7 6 10 2 12C6 14 10 17 12 21C14 17 18 14 22 12C18 10 14 7 12 3Z" fill="rgba(200, 163, 74, 0.25)" />
            </svg>
          </div>
          <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#B6872B]">
            LIVING EVIDENCE
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.15] text-[#352043]"
        >
          Journey of <br className="hidden sm:inline" />
          <span className="font-serif italic font-normal text-[#C8A34A] drop-shadow-sm">
            Inner Transformation
          </span>
        </motion.h1>

        {/* Subtitle / Quote */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="font-body text-[#5E5865] text-base sm:text-lg lg:text-xl font-light italic max-w-2xl mx-auto leading-relaxed"
        >
          &ldquo;When the inner light is rekindled, every aspect of life—health, relationships, and purpose—naturally blossoms.&rdquo;
        </motion.p>

      </div>
    </section>
  );
}
