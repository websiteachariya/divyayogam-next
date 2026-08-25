'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Play, Sparkles } from 'lucide-react';

export default function TestimonialsPage() {
  const [playingVideos, setPlayingVideos] = useState<Record<string, boolean>>({});

  const handlePlayVideo = (id: string) => {
    setPlayingVideos((prev) => ({ ...prev, [id]: true }));
  };

  const videoIds = [
    'GqDjm6amEu0',
    '5Ut6CCT_Gms',
    'G_otnJtf1qs',
    'XA0KtAyh6dE',
    'g1z50SgRisM',
    '-UnFkMbnXs8',
    'TXARPCnXUwM',
    'vq2XTPdfttA',
    'VRgLuk0Etjw',
    'ubDdVwaOKbI',
    'nu3F8DD1nmo',
    'HwA-qgzVWEk',
    'xLCFA-8bjH0',
    'PyP9Rs_iI58',
    'lZZxM58Uy7s',
  ];

  return (
    <div className="bg-transparent font-body min-h-screen relative">
      {/* Fixed Background Image Overlay (con-1.webp on solid cream base matching gallery) */}
      <div
        className="fixed inset-0 -z-40 bg-[#FAF4EB] bg-cover bg-center bg-fixed bg-no-repeat pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(250, 244, 235, 0.85), rgba(250, 244, 235, 0.9)), url('/images/con-1.webp')",
        }}
      />

      {/* HERO SECTION */}
      <header className="relative bg-gradient-to-b from-[#351A4A] via-[#2A133B] to-[#200D2E] pt-32 pb-24 text-center text-white overflow-hidden">
        {/* Left Side Accent Image (test-1.webp) */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 opacity-60 sm:opacity-70 md:opacity-75 lg:opacity-80 xl:opacity-85 pointer-events-none w-20 h-20 min-[420px]:w-28 min-[420px]:h-28 sm:w-36 sm:h-36 md:w-52 md:h-52 lg:w-[320px] lg:h-[320px] xl:w-[440px] xl:h-[440px] 2xl:w-[520px] 2xl:h-[520px] -translate-x-1/4 sm:translate-x-0 transition-all duration-300">
          <Image
            src="/images/test-1.webp"
            alt="Left Sacred Ornament"
            fill
            className="object-contain object-left"
            priority
          />
        </div>

        {/* Right Side Accent Image (test-1.webp mirrored) */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 opacity-60 sm:opacity-70 md:opacity-75 lg:opacity-80 xl:opacity-85 pointer-events-none w-20 h-20 min-[420px]:w-28 min-[420px]:h-28 sm:w-36 sm:h-36 md:w-52 md:h-52 lg:w-[320px] lg:h-[320px] xl:w-[440px] xl:h-[440px] 2xl:w-[520px] 2xl:h-[520px] translate-x-1/4 sm:translate-x-0 scale-x-[-1] transition-all duration-300">
          <Image
            src="/images/test-1.webp"
            alt="Right Sacred Ornament"
            fill
            className="object-contain object-right"
            priority
          />
        </div>

        {/* Intricate Background Lotus Mandala Vector */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-15 pointer-events-none">
          <svg width="550" height="550" viewBox="0 0 200 200" fill="none" stroke="#DFC47A" strokeWidth="0.8">
            <circle cx="100" cy="100" r="95" strokeWidth="0.75" strokeDasharray="2 2" />
            <circle cx="100" cy="100" r="85" strokeWidth="0.5" />
            <circle cx="100" cy="100" r="75" strokeWidth="0.75" />
            <g strokeWidth="0.75" opacity="0.9">
              <path d="M100,25 C115,55 115,75 100,100 C85,75 85,55 100,25 Z" fill="rgba(223,196,122,0.04)" />
              <path d="M100,175 C115,145 115,125 100,100 C85,125 85,145 100,175 Z" fill="rgba(223,196,122,0.04)" />
              <path d="M25,100 C55,115 75,115 100,100 C75,85 55,85 25,100 Z" fill="rgba(223,196,122,0.04)" />
              <path d="M175,100 C145,115 125,115 100,100 C125,85 145,85 175,100 Z" fill="rgba(223,196,122,0.04)" />
            </g>
          </svg>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C8A34A]/20 border border-[#DFC47A]/40 text-[#DFC47A] text-xs font-semibold uppercase tracking-widest shadow-md backdrop-blur-sm"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#DFC47A]" />
            VOICES OF AWAKENING
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight"
          >
            Seeker <span className="text-[#DFC47A] italic font-serif">Testimonials &amp; Stories</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#F8F2E8] text-base sm:text-lg font-serif italic max-w-2xl mx-auto leading-relaxed"
          >
            Real experiences. Deep transformations.<br />
            Be inspired by the journeys of our global family.
          </motion.p>

          <div className="flex items-center justify-center gap-3 pt-2">
            <div className="h-[1px] w-12 bg-[#DFC47A]/60" />
            <span className="text-[#DFC47A] text-xs">❖</span>
            <div className="h-[1px] w-12 bg-[#DFC47A]/60" />
          </div>
        </div>

        {/* Curved Bottom Edge Divider */}
        <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-10 pointer-events-none">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-10 text-[#FDFCF9]" fill="currentColor">
            <path d="M0,0 C300,50 900,50 1200,0 L1200,120 L0,120 Z" />
          </svg>
        </div>
      </header>

      {/* ═══ YOUTUBE VIDEO GALLERY SECTION ═══ */}
      <section className="py-8 sm:py-12 lg:py-14 relative overflow-hidden bg-[#FAF4EB]">
        {/* Full Section Background Image (con-1.png matching gallery) */}
        <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
          <Image
            src="/images/con-1.webp"
            alt="Sacred Testimonials Background Frame"
            fill
            className="object-cover object-center"
            priority
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            {videoIds.map((id, idx) => {
              const isPlaying = playingVideos[id];

              return (
                <motion.div
                  key={id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: (idx % 3) * 0.1 }}
                  className="relative p-3 rounded-tl-[48px] rounded-br-[48px] rounded-tr-[20px] rounded-bl-[20px] border-2 border-[#DFC47A] bg-gradient-to-b from-white via-[#FFFDF9] to-[#FAF4EB] shadow-xl hover:border-[#8C5D00] hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 group"
                >
                  {/* Video Container with matching asymmetric leaf curve */}
                  <div className="relative w-full aspect-video rounded-tl-[38px] rounded-br-[38px] rounded-tr-[12px] rounded-bl-[12px] overflow-hidden bg-black border border-[#DFC47A]/40 shadow-inner">
                    {isPlaying ? (
                      <iframe
                        src={`https://www.youtube.com/embed/${id}?autoplay=1`}
                        title={`Testimonial Video ${idx + 1}`}
                        className="w-full h-full border-0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    ) : (
                      <div
                        onClick={() => handlePlayVideo(id)}
                        className="w-full h-full bg-cover bg-center cursor-pointer relative flex items-center justify-center group/btn"
                        style={{
                          backgroundImage: `url('https://img.youtube.com/vi/${id}/hqdefault.jpg')`,
                        }}
                      >
                        {/* Dark Overlay gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/15 to-transparent group-hover/btn:from-black/30 transition-colors" />

                        {/* Custom Violet & Gold Play Button */}
                        <div className="relative z-10 w-15 h-15 sm:w-16 sm:h-16 rounded-full bg-[#47206A] border-3 border-[#DFC47A] flex items-center justify-center shadow-[0_8px_25px_rgba(71,32,106,0.6)] group-hover/btn:scale-110 group-hover/btn:bg-[#8C5D00] group-hover/btn:border-white transition-all duration-300">
                          <Play className="w-6 h-6 text-[#DFC47A] group-hover/btn:text-white fill-[#DFC47A] group-hover/btn:fill-white translate-x-0.5" />
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>
    </div>
  );
}
