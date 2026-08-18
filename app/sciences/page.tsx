'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Sparkles, Compass, ShieldCheck, CheckCircle2, Heart, FileText, Target, Star } from 'lucide-react';

export default function SciencesPage() {
  const koshas = [
    {
      name: 'Annamaya Kosha',
      title: 'Physical Food Sheath',
      desc: 'The physical vessel nourished by food, posture (Asana), clean water, and conscious rest.',
    },
    {
      name: 'Pranamaya Kosha',
      title: 'Vital Energy Sheath',
      desc: 'The subtle life force flow regulated through Pranayama breathwork and energetic alignment.',
    },
    {
      name: 'Manomaya Kosha',
      title: 'Mental & Emotional Sheath',
      desc: 'The psychological realm of thoughts, desires, and emotional patterns calmed by Dhyana.',
    },
    {
      name: 'Vijnanamaya Kosha',
      title: 'Wisdom & Intuition Sheath',
      desc: 'The higher intellect and intuitive discernment awakened through self-inquiry and mantra resonance.',
    },
    {
      name: 'Anandamaya Kosha',
      title: 'Bliss Sheath',
      desc: 'The innermost core of pure unconditioned joy, peace, and oneness with divine grace.',
    },
  ];

  return (
    <div className="bg-transparent font-body min-h-screen relative">
      {/* Fixed Background Image Overlay (con-6.webp on solid cream base) */}
      <div
        className="fixed inset-0 -z-40 bg-[#FDFCF9] bg-cover bg-center bg-fixed bg-no-repeat pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(253, 252, 249, 0.85), rgba(253, 252, 249, 0.9)), url('/images/con-6.webp')",
        }}
      />

      {/* ═══ HERO SECTION ═══ */}
      <header className="relative bg-gradient-to-b from-[#351A4A] via-[#2A133B] to-[#200D2E] pt-32 pb-24 text-center text-white overflow-hidden">
        {/* Left Side Accent Image (test-1.webp) */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 opacity-35 sm:opacity-60 md:opacity-85 pointer-events-none w-32 h-32 sm:w-52 sm:h-52 md:w-72 md:h-72 lg:w-96 lg:h-96 xl:w-[420px] xl:h-[420px] transition-all duration-300">
          <Image
            src="/images/test-1.webp"
            alt="Left Sacred Ornament"
            fill
            className="object-contain object-left"
            priority
          />
        </div>

        {/* Right Side Accent Image (test-1.webp mirrored) */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 opacity-35 sm:opacity-60 md:opacity-85 pointer-events-none w-32 h-32 sm:w-52 sm:h-52 md:w-72 md:h-72 lg:w-96 lg:h-96 xl:w-[420px] xl:h-[420px] scale-x-[-1] transition-all duration-300">
          <Image
            src="/images/test-1.webp"
            alt="Right Sacred Ornament"
            fill
            className="object-contain object-right"
            priority
          />
        </div>

        {/* Background Mandala SVG */}
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
            VEDIC NEUROSCIENCE &amp; VITAL ENERGY
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight"
          >
            The Science of <span className="text-[#DFC47A] italic font-serif">Meditation</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#F8F2E8] text-base sm:text-lg font-serif italic max-w-2xl mx-auto leading-relaxed"
          >
            Integrating spiritual wisdom with practical techniques.
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

      {/* ═══ SECTION 1: SCIENTIFIC VS SPIRITUAL ═══ */}
      <section className="py-16 sm:py-24 bg-transparent relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-[32px] p-6 sm:p-10 lg:p-12 border-2 border-[#DFC47A]/60 shadow-xl relative overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              {/* Left Intricate Vector Art */}
              <div className="lg:col-span-5 flex justify-center items-center">
                <div className="relative w-64 h-64 sm:w-72 sm:h-72 flex items-center justify-center">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <circle cx="50" cy="50" r="45" fill="none" stroke="#521868" strokeWidth="2" />
                    <circle cx="50" cy="50" r="35" fill="none" stroke="#8C5D00" strokeWidth="1.5" strokeDasharray="3 2" />
                    <path d="M50 5 L50 95 M5 50 L95 50 M18 18 L82 82 M18 82 L82 18" stroke="#521868" strokeWidth="1" opacity="0.35" />
                    <circle cx="50" cy="50" r="16" fill="#8C5D00" />
                    <circle cx="50" cy="50" r="8" fill="#FFFDF9" />
                  </svg>
                </div>
              </div>

              {/* Right Content */}
              <div className="lg:col-span-7 space-y-8">
                <div>
                  <span className="text-[#8C5D00] font-bold text-xs uppercase tracking-widest">
                    DUAL HARMONY
                  </span>
                  <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#352043] mt-1">
                    Scientific vs. <span className="text-[#8C5D00] italic font-serif">Spiritual</span>
                  </h2>
                </div>

                {/* Scientific Perspective */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#8C5D00]/10 border border-[#8C5D00]/30 flex items-center justify-center text-[#8C5D00] shrink-0 mt-1">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-heading text-xl font-bold text-[#8C5D00]">
                      Scientific Perspective
                    </h3>
                    <p className="text-[#352043] text-sm sm:text-base leading-relaxed font-normal">
                      Regular meditation supports stress management, focus, emotional balance, resilience, and overall wellbeing. Promotes relaxation, improves focus, supports healthy sleep, and encourages overall vitality.
                    </p>
                  </div>
                </div>

                {/* Spiritual Perspective */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#47206A]/10 border border-[#47206A]/30 flex items-center justify-center text-[#47206A] shrink-0 mt-1">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-heading text-xl font-bold text-[#47206A]">
                      Spiritual Perspective
                    </h3>
                    <p className="text-[#352043] text-sm sm:text-base leading-relaxed font-normal">
                      Meditation nurtures inner peace, self-awareness, wisdom, and a deeper connection with one&apos;s true self. It helps develop emotional stability, resilience, confidence, gratitude, and healthier relationships.
                    </p>
                  </div>
                </div>

              </div>

            </div>
          </motion.div>

          {/* ═══ SECTION 2: DEEP DIVE METHODOLOGIES (WHY SPIRAL & WHY ORGAN) ═══ */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
            
            {/* Card 1: Why Spiral Meditation? */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-[32px] p-8 sm:p-10 border-t-4 border-[#47206A] border-x border-b border-[#E9DED3] shadow-lg relative overflow-hidden flex flex-col justify-between hover:border-[#8C5D00] transition-all"
            >
              <div className="space-y-6">
                <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#47206A]">
                  Why Spiral Meditation?
                </h3>

                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#47206A]/10 flex items-center justify-center text-[#47206A] shrink-0">
                      <Compass className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-heading text-base font-bold text-[#47206A]">The Symbol</h4>
                      <p className="text-[#352043] text-xs sm:text-sm leading-relaxed font-normal">
                        Represents growth, transformation, balance, and the journey toward one&apos;s authentic self.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#47206A]/10 flex items-center justify-center text-[#47206A] shrink-0">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-heading text-base font-bold text-[#47206A]">The Practice</h4>
                      <p className="text-[#352043] text-xs sm:text-sm leading-relaxed font-normal">
                        Symbolizes continuous inner growth, helping individuals cultivate clarity, emotional balance, and conscious living.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#47206A]/10 flex items-center justify-center text-[#47206A] shrink-0">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-heading text-base font-bold text-[#47206A]">Purpose</h4>
                      <p className="text-[#352043] text-xs sm:text-sm leading-relaxed font-normal">
                        Strengthens inner awareness, improves focus, supports emotional wellbeing, and encourages spiritual growth.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Card 2: Why Organ Meditation? */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="bg-white rounded-[32px] p-8 sm:p-10 border-t-4 border-[#8C5D00] border-x border-b border-[#E9DED3] shadow-lg relative overflow-hidden flex flex-col justify-between hover:border-[#8C5D00] transition-all"
            >
              <div className="space-y-6">
                <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#8C5D00]">
                  Why Organ Meditation?
                </h3>

                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#8C5D00]/10 flex items-center justify-center text-[#8C5D00] shrink-0">
                      <FileText className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-heading text-base font-bold text-[#8C5D00]">The Practice</h4>
                      <p className="text-[#352043] text-xs sm:text-sm leading-relaxed font-normal">
                        Develops mindful awareness of the body&apos;s major organs, fostering relaxation, gratitude, and a deeper mind–body connection.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#8C5D00]/10 flex items-center justify-center text-[#8C5D00] shrink-0">
                      <Target className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-heading text-base font-bold text-[#8C5D00]">The Focus</h4>
                      <p className="text-[#352043] text-xs sm:text-sm leading-relaxed font-normal">
                        Each organ is approached with mindful attention to deepen body awareness, encourage relaxation, and strengthen the connection between body, mind, and inner consciousness.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#8C5D00]/10 flex items-center justify-center text-[#8C5D00] shrink-0">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-heading text-base font-bold text-[#8C5D00]">Purpose</h4>
                      <p className="text-[#352043] text-xs sm:text-sm leading-relaxed font-normal">
                        Enhances body awareness, promotes inner balance, supports emotional wellbeing, and encourages present-moment awareness.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </motion.div>

          </div>

          {/* ═══ SECTION 3: FEATURED CENTRE IMAGE (SCIENCE-1.WEBP) ═══ */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative w-full rounded-3xl overflow-hidden border-2 border-[#DFC47A] shadow-2xl group hover:border-[#8C5D00] transition-all bg-white"
          >
            <div className="relative w-full overflow-hidden">
              <img
                src="/images/SCIENCE-1.webp"
                alt="Embodying Divine Grace - Meditation Sciences"
                className="w-full h-auto block object-contain group-hover:scale-[1.02] transition-transform duration-700"
              />
            </div>
          </motion.div>

          {/* ═══ SECTION 4: THE DIVINE GRACE APPROACH ═══ */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-[32px] p-8 sm:p-12 lg:p-16 bg-gradient-to-b from-[#351A4A] via-[#2A133B] to-[#200D2E] border-2 border-[#DFC47A] text-white text-center relative overflow-hidden shadow-2xl space-y-6"
          >
            <div className="w-16 h-16 rounded-full bg-[#DFC47A]/20 border border-[#DFC47A] flex items-center justify-center text-[#DFC47A] mx-auto">
              <Star className="w-8 h-8 fill-[#DFC47A]" />
            </div>

            <div className="space-y-3 max-w-3xl mx-auto">
              <h3 className="font-heading text-3xl sm:text-4xl font-bold text-[#DFC47A]">
                The Divine Grace Approach
              </h3>
              <div className="w-16 h-0.5 bg-[#DFC47A]/60 mx-auto" />
              <p className="font-serif italic text-lg sm:text-xl text-[#F8F2E8] leading-relaxed font-normal pt-2">
                Every meditation practice inspires holistic transformation through awareness, balance, and conscious living. With consistent practice, individuals discover their highest potential and become a positive influence on society.
              </p>
            </div>
          </motion.div>

          {/* ═══ SECTION 5: PANCHA KOSHA (5 SHEATHS OF EXISTENCE) - HIGHLIGHTED SECTION ═══ */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/80 backdrop-blur-md rounded-[36px] p-8 sm:p-12 border-2 border-[#DFC47A] shadow-2xl relative overflow-hidden space-y-12"
          >
            {/* Corner Ornamental Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#DFC47A]/15 rounded-full blur-3xl pointer-events-none" />

            <div className="text-center max-w-3xl mx-auto space-y-3 relative z-10">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full royal-gold-badge text-[11px] font-bold uppercase tracking-widest">
                <Sparkles className="w-3.5 h-3.5 text-[#8C5D00]" />
                VEDIC PSYCHOLOGY
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#352043]">
                The 5 Sheaths of Existence <span className="text-[#8C5D00] italic font-serif">(Pancha Kosha)</span>
              </h2>
              <p className="text-[#352043] text-base sm:text-lg font-normal leading-relaxed">
                According to ancient Vedic scriptures, human consciousness operates through 5 distinct subtle layers.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
              {koshas.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="luxury-card rounded-[28px] p-6 border-2 border-[#DFC47A]/60 bg-gradient-to-b from-white via-[#FFFDF9] to-[#F8F2E8] flex flex-col justify-between shadow-lg hover:border-[#8C5D00] hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group"
                >
                  <div>
                    {/* Golden Circular Badge */}
                    <div className="w-12 h-12 rounded-2xl bg-[#8C5D00]/10 border border-[#8C5D00]/30 text-[#8C5D00] font-heading font-extrabold text-xl flex items-center justify-center mb-4 group-hover:bg-[#8C5D00] group-hover:text-white transition-colors duration-300">
                      0{idx + 1}
                    </div>

                    <h3 className="font-heading text-lg font-bold text-[#352043] mb-1 leading-snug group-hover:text-[#8C5D00] transition-colors">
                      {item.name}
                    </h3>

                    <p className="text-xs font-bold uppercase text-[#8C5D00] tracking-wider mb-3">
                      {item.title}
                    </p>

                    <p className="text-[#352043] text-xs font-normal leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </section>
    </div>
  );
}
