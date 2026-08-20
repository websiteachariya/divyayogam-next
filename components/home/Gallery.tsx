'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Milestone, Sparkles, Globe, HeartPulse, Compass, Sun, Leaf, UploadCloud } from 'lucide-react';

export default function Gallery() {
  const images = [
    { src: '/images/gal-1.webp', title: 'Sacred Evening Satsang' },
    { src: '/images/gal-2.webp', title: 'Meditation & Peace Gathering' },
    { src: '/images/011A6549.webp', title: 'Ji Address to Seekers' },
  ];

  const milestones = [
    { year: '1990', desc: 'The beginning of Divya Yogam journey.', icon: Compass },
    { year: '2005', desc: 'First meditation center established.', icon: Sun },
    { year: '2012', desc: 'International programs launched.', icon: Globe },
    { year: '2020', desc: '50,000+ lives transformed.', icon: HeartPulse },
  ];

  return (
    <section className="py-24 relative overflow-hidden font-body bg-[#FAF4EB]">
      
      {/* Full Section Background Image (con-1.png) */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <Image
          src="/images/con-1.webp"
          alt="Gallery Section Background Frame"
          fill
          className="object-cover object-center"
        />
      </div>

      {/* Background Golden Floral Vine Left (deco-19.png) */}
      <div className="absolute bottom-0 -left-24 sm:-left-36 lg:-left-44 xl:-left-52 pointer-events-none hidden lg:block w-[300px] sm:w-[380px] lg:w-[440px] h-[480px] sm:h-[580px] lg:h-[660px] opacity-35 z-0">
        <Image
          src="/images/deco-19.webp"
          alt="Golden Floral Vine Left Watermark"
          fill
          className="object-contain object-bottom drop-shadow-[0_0_15px_rgba(223,196,122,0.3)]"
        />
      </div>

      {/* Background Golden Floral Vine Right (deco-20.png) */}
      <div className="absolute bottom-0 -right-24 sm:-right-36 lg:-right-44 xl:-right-52 pointer-events-none hidden lg:block w-[300px] sm:w-[380px] lg:w-[440px] h-[480px] sm:h-[580px] lg:h-[660px] opacity-35 z-0">
        <Image
          src="/images/deco-20.webp"
          alt="Golden Floral Vine Right Watermark"
          fill
          className="object-contain object-bottom drop-shadow-[0_0_15px_rgba(223,196,122,0.3)]"
          priority
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Column: Sacred Gallery */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full royal-gold-badge text-[11px] uppercase tracking-widest font-semibold">
                SACRED GALLERY
              </div>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#352043]">
                Sacred <span className="text-[#C8A34A]">Gallery</span>
              </h2>
              <p className="text-[#8A8394] text-xs font-light">
                Moments of love, devotion and togetherness.
              </p>
            </div>

            {/* 3 Waiting for Image to be Uploaded Placeholder Cards */}
            <div className="grid grid-cols-3 gap-3">
              {[1, 2, 3].map((_, idx) => (
                <div
                  key={idx}
                  className="relative group rounded-2xl overflow-hidden luxury-card border-2 border-dashed border-[#DFC47A]/60 aspect-[4/3] shadow-sm bg-gradient-to-b from-[#FFFDF9] via-[#FAF5EF] to-[#F8F2E8] flex flex-col items-center justify-center p-2 text-center"
                >
                  {/* Subtle Background Pattern */}
                  <div className="absolute inset-0 bg-[radial-gradient(#C8A34A_1px,transparent_1px)] [background-size:12px_12px] opacity-15 pointer-events-none" />

                  {/* Pulsing Icon Badge */}
                  <div className="relative z-10 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white/90 backdrop-blur-sm border border-[#C8A34A]/50 shadow-sm flex items-center justify-center mb-1 group-hover:scale-105 transition-transform duration-300">
                    <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#C8A34A]/20 to-[#8C5D00]/20 animate-pulse pointer-events-none" />
                    <UploadCloud className="w-4 h-4 sm:w-5 sm:h-5 text-[#8C5D00]" />
                  </div>

                  {/* Text Container */}
                  <div className="relative z-10 space-y-0.5">
                    <span className="inline-block px-2 py-0.5 rounded-full bg-[#8C5D00]/10 text-[#8C5D00] text-[9px] sm:text-[10px] font-bold uppercase tracking-wider border border-[#8C5D00]/20">
                      Pending
                    </span>
                    <p className="text-[10px] sm:text-xs font-semibold text-[#352043] leading-tight line-clamp-1">
                      Image to be uploaded
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div>
              <Link
                href="/gallery"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#47206A] hover:bg-[#C8A34A] text-white hover:text-[#47206A] font-semibold text-xs uppercase tracking-wider shadow-md hover:scale-105 transition-all duration-300 group"
              >
                <span>View Full Gallery</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#DFC47A] group-hover:text-[#47206A]" />
              </Link>
            </div>
          </motion.div>

          {/* Right Column: Key Milestones */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full royal-gold-badge text-[11px] uppercase tracking-widest font-semibold">
                KEY MILESTONES
              </div>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#352043]">
                Key <span className="text-[#C8A34A]">Milestones</span>
              </h2>
              <p className="text-[#8A8394] text-xs font-light">
                Milestones in our journey of service and transformation.
              </p>
            </div>

            {/* Timeline List with Beautiful Icon Badges matching Reference UI */}
            <div className="space-y-4 relative border-l-2 border-[#C8A34A] ml-6 pl-8 py-2">
              {milestones.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div key={idx} className="relative group flex items-center">
                    {/* Circular Icon Badge on Vertical Line */}
                    <div className="absolute -left-[53px] top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-[#352043] border-2 border-[#C8A34A] flex items-center justify-center text-[#DFC47A] shadow-md group-hover:scale-110 group-hover:bg-[#C8A34A] group-hover:text-[#352043] transition-all duration-300 z-10 shrink-0">
                      <IconComponent className="w-5 h-5" />
                    </div>

                    {/* Luxury White Pill Card */}
                    <div className="w-full bg-white px-5 sm:px-6 py-3.5 rounded-2xl sm:rounded-full border border-[#E9DED3] flex items-center justify-between shadow-sm group-hover:border-[#DFC47A] group-hover:shadow-md transition-all duration-300">
                      <span className="font-heading text-sm sm:text-base font-bold text-[#C8A34A] w-16 shrink-0">
                        {item.year}
                      </span>
                      <span className="text-[#5E5865] text-xs sm:text-sm font-light flex-1 pl-2">
                        {item.desc}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            <div>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#47206A] hover:bg-[#C8A34A] text-white hover:text-[#47206A] font-semibold text-xs uppercase tracking-wider shadow-md hover:scale-105 transition-all duration-300 group"
              >
                <Leaf className="w-3.5 h-3.5 text-[#DFC47A] group-hover:text-[#47206A] transition-colors" />
                <span>Our Journey</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#DFC47A] group-hover:text-[#47206A] transition-colors" />
              </Link>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
