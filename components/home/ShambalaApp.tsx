'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Music, Headphones, Download, Sparkles, Star, ShieldCheck, Heart, Radio, Volume2 } from 'lucide-react';

export default function ShambalaApp() {
  const playStoreUrl = 'https://play.google.com/store/apps/details?id=com.ignitelabs.music_app';

  const highlights = [
    {
      icon: Music,
      title: 'Sacred Chants & Bhajans',
      desc: 'Immerse in soul-stirring devotional music, ancient mantras, and divine melodies for daily upliftment.',
    },
    {
      icon: Headphones,
      title: 'Guided Organ Meditation',
      desc: 'Experience deep stillness and cellular rejuvenation through curated meditation audio tracks.',
    },
    {
      icon: Download,
      title: 'Offline Listening',
      desc: 'Save your favorite spiritual tracks and listen seamlessly without internet connection.',
    },
    {
      icon: ShieldCheck,
      title: '100% Free Experience',
      desc: 'Complete access to pure divine music without subscriptions, paywalls, or ad interruptions.',
    },
  ];

  return (
    <section className="py-10 sm:py-14 lg:py-16 bg-gradient-to-b from-[#22122F] via-[#301840] to-[#22122F] text-white relative overflow-hidden font-body">
      
      {/* Background Image Layer (app-bg.png) */}
      <div className="absolute inset-0 opacity-25 pointer-events-none z-0">
        <Image
          src="/images/app-bg.webp"
          alt="Shambala Music App Background"
          fill
          className="object-cover object-center mix-blend-luminosity"
        />
      </div>

      {/* Background Decorative Golden Mandala Right */}
      <div className="absolute -bottom-24 -right-24 opacity-15 sm:opacity-20 md:opacity-25 pointer-events-none w-[340px] sm:w-[420px] lg:w-[500px] h-[340px] sm:h-[420px] lg:h-[500px]">
        <Image
          src="/images/deco-21.webp"
          alt="Golden Corner Watermark Right"
          fill
          className="object-contain"
        />
      </div>

      {/* Glowing Backdrop Orbs */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C8A34A]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C8A34A]/15 border border-[#DFC47A]/30 text-[#DFC47A] text-xs font-semibold uppercase tracking-widest shadow-inner"
          >
            <Sparkles className="w-4 h-4 text-[#DFC47A]" />
            Official Mobile Application
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white"
          >
            Shambala <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#DFC47A] via-[#FCE8B2] to-[#C8A34A]">Music App</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-[#D2C8DA] font-light leading-relaxed"
          >
            Carry the sacred vibrations of Divya Yogam wherever you go. Listen to divine soundscapes, meditation audio, and devotional chants designed for peace, harmony, and daily reflection.
          </motion.p>
        </div>

        {/* Content Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Feature Highlights & Play Store CTA */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-8"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {highlights.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-white/5 border border-[#DFC47A]/20 hover:border-[#C8A34A]/50 hover:bg-white/10 transition-all group backdrop-blur-sm shadow-lg"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#C8A34A] to-[#8C641E] flex items-center justify-center text-[#22122F] font-bold mb-4 shadow-md group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-heading text-lg font-bold text-[#F8F2E8] mb-1.5 group-hover:text-[#DFC47A] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#B9ADB7] leading-relaxed font-light">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* App Rating & Stats Badge */}
            <div className="flex flex-wrap items-center gap-6 p-4 rounded-xl bg-[#1D0C2A]/80 border border-[#DFC47A]/30 text-xs text-[#DFC47A]">
              <div className="flex items-center gap-1.5">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="font-semibold text-white ml-1">5.0 Star Rating</span>
              </div>
              <div className="h-4 w-px bg-[#DFC47A]/30 hidden sm:block" />
              <div className="flex items-center gap-2 text-[#D2C8DA]">
                <Radio className="w-4 h-4 text-[#DFC47A]" />
                <span>HD Audio Quality</span>
              </div>
              <div className="h-4 w-px bg-[#DFC47A]/30 hidden sm:block" />
              <div className="flex items-center gap-2 text-[#D2C8DA]">
                <Volume2 className="w-4 h-4 text-[#DFC47A]" />
                <span>By IgniteLabs</span>
              </div>
            </div>

            {/* Main Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              {/* Google Play Download Button */}
              <a
                href={playStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center gap-2.5 px-5 py-2.5 sm:px-6 sm:py-3 rounded-2xl bg-gradient-to-r from-[#C8A34A] via-[#E5C97A] to-[#C8A34A] text-[#22122F] font-bold text-sm sm:text-base shadow-[0_0_20px_rgba(200,163,74,0.35)] hover:shadow-[0_0_30px_rgba(200,163,74,0.6)] hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                {/* Official Play Store SVG Icon */}
                <svg className="w-6 h-6 sm:w-6.5 sm:h-6.5 shrink-0 fill-current" viewBox="0 0 512 512">
                  <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l220.7-221.3 60.1 60.1L104.6 499z" />
                </svg>
                <div className="flex flex-col text-left leading-tight">
                  <span className="text-[9px] sm:text-[10px] uppercase font-semibold text-[#3D2502] tracking-wider">
                    GET IT ON
                  </span>
                  <span className="text-base sm:text-lg font-extrabold tracking-wide">
                    Google Play
                  </span>
                </div>
              </a>

              {/* Secondary Direct Link Info */}
              <a
                href={playStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4.5 py-2.5 sm:px-5 sm:py-3 rounded-2xl bg-white/10 hover:bg-white/20 border border-[#DFC47A]/30 text-[#DFC47A] font-semibold text-xs sm:text-sm transition-all"
              >
                <Heart className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-pink-400 fill-pink-400/30" />
                Listen Free Now
              </a>
            </div>

          </motion.div>

          {/* Right Column: App Mockup Graphic */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative flex items-center justify-center"
          >
            <div className="relative w-full max-w-[360px] aspect-[4/5] rounded-3xl overflow-hidden border-2 border-[#DFC47A]/40 shadow-[0_0_50px_rgba(200,163,74,0.3)] bg-[#190924]/80 p-2 group hover:scale-[1.02] transition-transform duration-500">
              
              {/* Inner Glowing Graphic */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden">
                <Image
                  src="/images/shambala-app.webp"
                  alt="Shambala Music App Preview"
                  fill
                  className="object-cover"
                  priority
                />

                {/* Overlay Badge inside Mockup */}
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-black/70 backdrop-blur-md border border-[#DFC47A]/30 flex items-center justify-between text-white">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#C8A34A] flex items-center justify-center font-bold text-[#22122F]">
                      <Music className="w-5 h-5 text-[#22122F]" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#DFC47A]">Shambala Achariya</p>
                      <p className="text-[10px] text-gray-300">IgniteLabs • Devotional</p>
                    </div>
                  </div>
                  <a
                    href={playStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-lg bg-[#C8A34A] hover:bg-[#DFC47A] text-[#22122F] text-xs font-bold transition-colors"
                  >
                    Install
                  </a>
                </div>
              </div>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
