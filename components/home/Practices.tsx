'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Heart, Shield, Users, Sparkles, Leaf } from 'lucide-react';

// Sacred Lotus Header Icon
function SmallLotusIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
      <path d="M12 4C14 8 18 10 21 11C18 14 15 19 12 21C9 19 6 14 3 11C6 10 10 8 12 4Z" fill="currentColor" fillOpacity="0.2" />
      <path d="M12 8C14 11 17 13 19 13.5C17 16 15 19.5 12 21C9 19.5 7 16 5 13.5C7 13 10 11 12 8Z" />
      <path d="M12 12C13.5 14 15.5 15.5 17 16C15.5 18 13.8 19.8 12 21C10.2 19.8 8.5 18 7 16C8.5 15.5 10.5 14 12 12Z" />
    </svg>
  );
}

// Circular Floating Badge 1: Meditation Yogi Icon
function MeditationBadgeIcon() {
  return (
    <svg viewBox="0 0 64 64" fill="none" className="w-10 h-10 text-[#352043]">
      <circle cx="32" cy="32" r="28" stroke="#DFC47A" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />
      {/* Meditating Yogi Silhouette */}
      <circle cx="32" cy="20" r="5" fill="currentColor" />
      <path d="M32 27C27 27 22 30 20 34C19 36 21 38 23 37C26 35.5 29 35 32 35C35 35 38 35.5 41 37C43 38 45 36 44 34C42 30 37 27 32 27Z" fill="currentColor" />
      <path d="M16 42C20 40 26 39 32 39C38 39 44 40 48 42C51 43.5 50 47 46 47C38 47 26 47 18 47C14 47 13 43.5 16 42Z" fill="currentColor" />
    </svg>
  );
}

// Circular Floating Badge 2: Pranayama Breath Icon
function PranayamaBadgeIcon() {
  return (
    <svg viewBox="0 0 64 64" fill="none" className="w-10 h-10 text-[#352043]">
      <circle cx="32" cy="32" r="28" stroke="#DFC47A" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />
      {/* Pranic Breath Wave Lines */}
      <path d="M16 26C24 20 32 32 48 24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M16 34C24 28 32 40 48 32" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M20 42C26 37 32 45 44 40" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.7" />
    </svg>
  );
}

// Circular Floating Badge 3: Yoga Asana Icon
function YogaBadgeIcon() {
  return (
    <svg viewBox="0 0 64 64" fill="none" className="w-10 h-10 text-[#352043]">
      <circle cx="32" cy="32" r="28" stroke="#DFC47A" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />
      {/* Yoga Pose Silhouette */}
      <circle cx="32" cy="18" r="4.5" fill="currentColor" />
      <path d="M32 24V40M32 40L24 50M32 40L38 45M38 45L40 50M32 28L23 20M32 28L41 20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Practices() {
  const practicesList = [
    {
      title: 'Meditation',
      desc: 'Harmonize your internal organs, calm the nervous system, and awaken cellular vitality through targeted organ meditation.',
      badge: 'CELLULAR RENEWAL',
      path: '/organ-meditation',
      image: '/images/practice-pranayama.webp',
      badgeIcon: MeditationBadgeIcon,
    },
    {
      title: 'Pranayama',
      desc: 'Master ancient breath control techniques to balance your energy channels, dissolve stress, and expand conscious vitality.',
      badge: 'PRANIC ENERGY',
      path: '/quantum-habits',
      image: '/images/practice-pranayama.webp',
      badgeIcon: PranayamaBadgeIcon,
    },
    {
      title: 'Yoga',
      desc: 'Unite body, mind, and spirit through authentic postures, subtle chakra alignment, and deep spiritual awareness.',
      badge: 'TRIADIC ALIGNMENT',
      path: '/practices',
      image: '/images/practice-pranayama.webp',
      badgeIcon: YogaBadgeIcon,
    },
  ];

  const bottomFeatures = [
    {
      title: 'Ancient Wisdom',
      subtitle: 'Rooted in Vedic Tradition',
      icon: SmallLotusIcon,
    },
    {
      title: 'Holistic Healing',
      subtitle: 'Mind, Body & Spirit',
      icon: Shield,
    },
    {
      title: 'Expert Guidance',
      subtitle: 'From Experienced Teachers',
      icon: Users,
    },
    {
      title: 'Transformative Results',
      subtitle: 'Real Change, Lasting Impact',
      icon: Leaf,
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#FAF7F2] relative overflow-hidden font-body border-t border-[#EBE4D8]">
      
      {/* Background Golden Half-Mandala Watermark (deco-12.png) - Left */}
      <div className="absolute top-1/2 -left-28 sm:-left-36 -translate-y-1/2 opacity-35 pointer-events-none hidden lg:block w-[400px] sm:w-[500px] lg:w-[580px] h-[400px] sm:h-[500px] lg:h-[580px] z-0">
        <Image
          src="/images/deco-12.webp"
          alt="Golden Half Mandala Watermark Left"
          fill
          className="object-contain drop-shadow-[0_0_20px_rgba(223,196,122,0.3)]"
          priority
        />
      </div>

      {/* Background Golden Blossoming Lotus Watermark (deco-16.png) - Top Right */}
      <div className="absolute top-4 sm:top-8 -right-24 sm:-right-32 opacity-35 pointer-events-none hidden lg:block w-[380px] sm:w-[480px] lg:w-[540px] h-[380px] sm:h-[480px] lg:h-[540px] z-0">
        <Image
          src="/images/deco-16.webp"
          alt="Golden Blossoming Lotus Watermark Top Right"
          fill
          className="object-contain drop-shadow-[0_0_20px_rgba(223,196,122,0.3)]"
          priority
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FAF0DD] border border-[#DFC47A]/50 text-[#C8A34A] text-xs uppercase tracking-widest font-semibold shadow-xs"
          >
            <SmallLotusIcon className="w-4 h-4 text-[#C8A34A]" />
            <span>CORE PRACTICES</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#352043] leading-tight"
          >
            Core Spiritual <span className="text-[#C8A34A] font-serif italic">Practices</span>
          </motion.h2>

          {/* Sacred Golden Lotus Divider (deco-15.webp) */}
          <div className="relative w-full max-w-xs sm:max-w-sm h-8 sm:h-10 mx-auto pointer-events-none my-1">
            <Image
              src="/images/deco-15.webp"
              alt="Sacred Golden Lotus Underline Divider"
              fill
              className="object-contain drop-shadow-[0_0_15px_rgba(223,196,122,0.45)]"
            />
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[#5E5865] text-base sm:text-lg leading-relaxed font-light max-w-2xl mx-auto pt-1"
          >
            Sacred Vedic modalities designed to restore cellular organ vitality, mental tranquility, and profound spiritual awakening.
          </motion.p>
        </div>

        {/* 3 White Floating Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-14 sm:gap-16 md:gap-8 lg:gap-10 pt-10 sm:pt-12">
          {practicesList.map((practice, idx) => {
            const BadgeIcon = practice.badgeIcon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="bg-white rounded-[28px] border border-[#EBE4D8] shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-400 relative pt-14 pb-7 px-6 sm:px-7 flex flex-col justify-between group overflow-visible text-center"
              >
                {/* Floating Top Circular Badge (Overlapping Top Edge) */}
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 rounded-full bg-[#FAF0DD] border-2 border-[#DFC47A] flex items-center justify-center shadow-md group-hover:scale-110 group-hover:border-[#C8A34A] transition-transform duration-300 z-20">
                  <BadgeIcon />
                </div>

                <div className="space-y-3.5 pt-3">
                  {/* Category Pill Tag */}
                  <div>
                    <span className="text-[10px] font-bold text-[#C8A34A] uppercase tracking-widest bg-[#FAF0DD] px-3.5 py-1 rounded-full border border-[#DFC47A]/40 inline-block shadow-2xs">
                      {practice.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#352043] group-hover:text-[#C8A34A] transition-colors">
                    {practice.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[#5E5865] text-sm sm:text-base font-light leading-relaxed px-1">
                    {practice.desc}
                  </p>

                  {/* Image Preview Box */}
                  <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden mt-4 shadow-sm border border-[#EBE4D8]">
                    <Image
                      src={practice.image}
                      alt={practice.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>

                {/* Bottom CTA Link */}
                <div className="pt-6 border-t border-[#F3ECE0] mt-6">
                  <Link
                    href={practice.path}
                    className="inline-flex items-center justify-center gap-2 text-xs font-bold text-[#352043] group-hover:text-[#C8A34A] uppercase tracking-widest transition-colors font-body"
                  >
                    <span>Explore Practice</span>
                    <ArrowRight className="w-4 h-4 text-[#C8A34A] group-hover:translate-x-1.5 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Feature Bar (Dark Violet Rounded Container) */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-[#352043] rounded-2xl p-6 sm:p-8 text-white shadow-2xl border border-[#DFC47A]/30 max-w-6xl mx-auto"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 divide-y sm:divide-y-0 lg:divide-x divide-white/10">
            {bottomFeatures.map((feat, i) => {
              const IconComp = feat.icon;
              return (
                <div key={i} className={`flex items-center gap-4 ${i > 0 ? 'lg:pl-6 pt-4 sm:pt-0' : ''}`}>
                  <div className="w-12 h-12 rounded-xl bg-[#DFC47A]/15 border border-[#DFC47A]/40 flex items-center justify-center text-[#DFC47A] flex-shrink-0">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-heading text-base font-bold text-white leading-snug">
                      {feat.title}
                    </h4>
                    <p className="text-xs text-[#DFC47A]/90 font-light pt-0.5">
                      {feat.subtitle}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
