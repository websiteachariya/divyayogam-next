'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Experience() {
  return (
    <section className="relative w-full overflow-hidden bg-[#352043] text-white border-y border-[#DFC47A]/40 font-body">
      {/* Subtle Ambient Background Glows */}
      <div className="absolute -left-20 -top-20 w-80 h-80 bg-[#DFC47A]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute right-0 bottom-0 w-[500px] h-[500px] bg-[#DFC47A]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center min-h-[220px] sm:min-h-[250px] lg:min-h-[280px]">
          
          {/* Left Section: Golden Sacred Lotus Mandala (SVG) */}
          <div className="lg:col-span-3 flex items-center justify-center p-6 sm:p-8 lg:p-10 relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="relative w-40 h-40 sm:w-48 sm:h-48 lg:w-60 lg:h-60 flex items-center justify-center"
            >
              <svg
                viewBox="0 0 200 200"
                className="w-full h-full text-[#DFC47A] drop-shadow-[0_0_22px_rgba(223,196,122,0.4)] hover:scale-105 transition-transform duration-500 pointer-events-auto"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
              >
                {/* Outer Sacred Ring */}
                <circle cx="100" cy="100" r="94" strokeWidth="0.7" strokeDasharray="3 3" opacity="0.6" />
                <circle cx="100" cy="100" r="88" strokeWidth="1" />
                <circle cx="100" cy="100" r="82" strokeWidth="0.6" strokeDasharray="4 2" opacity="0.8" />

                {/* Radiant Star/Geometry Rays */}
                <g opacity="0.35" strokeWidth="0.5">
                  {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle) => (
                    <line
                      key={angle}
                      x1="100"
                      y1="100"
                      x2={100 + 88 * Math.cos((angle * Math.PI) / 180)}
                      y2={100 + 88 * Math.sin((angle * Math.PI) / 180)}
                    />
                  ))}
                </g>

                {/* Outer Petals Layer (12 Petals) */}
                <g strokeWidth="1">
                  {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle) => (
                    <path
                      key={angle}
                      d="M 100 12 C 116 44, 116 66, 100 88 C 84 66, 84 44, 100 12 Z"
                      transform={`rotate(${angle} 100 100)`}
                      opacity="0.8"
                    />
                  ))}
                </g>

                {/* Middle Petals Layer (8 Offset Petals) */}
                <g strokeWidth="1.2" opacity="0.95">
                  {[22.5, 67.5, 112.5, 157.5, 202.5, 247.5, 292.5, 337.5].map((angle) => (
                    <path
                      key={angle}
                      d="M 100 30 C 113 58, 113 74, 100 90 C 87 74, 87 58, 100 30 Z"
                      transform={`rotate(${angle} 100 100)`}
                    />
                  ))}
                </g>

                {/* Inner Bloom Petals Layer (8 Petals) */}
                <g strokeWidth="1.4">
                  {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
                    <path
                      key={angle}
                      d="M 100 46 C 110 66, 110 78, 100 92 C 90 78, 90 66, 100 46 Z"
                      transform={`rotate(${angle} 100 100)`}
                      fill="rgba(223, 196, 122, 0.08)"
                    />
                  ))}
                </g>

                {/* Center Sacred Circle & Bindu Dot */}
                <circle cx="100" cy="100" r="16" fill="rgba(223, 196, 122, 0.12)" strokeWidth="1.2" />
                <circle cx="100" cy="100" r="8" strokeWidth="1" />
                <circle cx="100" cy="100" r="3" fill="#DFC47A" stroke="none" />
              </svg>
            </motion.div>
          </div>

          {/* Center Section: Quote Text & Attribution */}
          <div className="lg:col-span-5 text-center px-6 sm:px-10 py-8 lg:py-12 z-10 flex flex-col items-center justify-center">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-4 max-w-2xl mx-auto"
            >
              <div className="flex items-center justify-center gap-2 sm:gap-3">
                <span className="text-[#DFC47A] text-4xl sm:text-5xl lg:text-6xl font-serif leading-none font-bold select-none">
                  “
                </span>
                <p className="font-heading text-xl sm:text-2xl lg:text-3xl font-medium text-white italic tracking-wide leading-relaxed drop-shadow-md">
                  The journey is inward…. The transformation is timeless
                </p>
                <span className="text-[#DFC47A] text-4xl sm:text-5xl lg:text-6xl font-serif leading-none font-bold select-none">
                  ”
                </span>
              </div>

              <p className="text-[#DFC47A] text-xs sm:text-sm font-semibold tracking-[0.3em] uppercase pt-2">
                — Santoshi Shri. Arawindhan Ji
              </p>
            </motion.div>
          </div>

          {/* Right Section: Sacred Diyas & Lotus Photo (exp-2.png) */}
          <div className="lg:col-span-4 relative h-64 sm:h-72 lg:h-full min-h-[280px] w-full overflow-hidden">
            <Image
              src="/images/exp-2.webp"
              alt="Sacred Lotus Candles & Diyas"
              fill
              className="object-cover object-center scale-105 hover:scale-110 transition-transform duration-700"
              priority
            />
            {/* Desktop Gradient Mask: Smooth blend into left side dark violet background */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#352043] via-[#352043]/50 to-transparent z-10 hidden lg:block" />
            {/* Mobile Gradient Mask: Smooth blend top side */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#352043] via-[#352043]/60 to-transparent z-10 lg:hidden" />
          </div>

        </div>
      </div>
    </section>
  );
}
