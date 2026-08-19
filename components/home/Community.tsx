'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Sparkles, ArrowRight, CheckCircle2, Sun, Flame, Compass, Heart, ShieldCheck, Zap, Waves, Award } from 'lucide-react';

export default function Community() {
  const programCategories = [
    {
      title: 'YOGA',
      tagline: 'Awaken the Body',
      desc: 'Cultivate physical awareness, balance and disciplined movement as a foundation for inner wellbeing.',
      link: '/practices',
      btnText: 'Explore Yoga',
      icon: Sun,
    },
    {
      title: 'GOLDEN SMILE MEDITATION',
      tagline: 'Quiet the Mind',
      desc: 'Create an inward space for stillness, awareness and deeper experience. Santoshi Shri. Arawindhan Ji’s documented work includes AOM — Achariya Only Meditation and Oneness Meditation.',
      link: '/organ-meditation',
      btnText: 'Explore Meditation',
      icon: Flame,
    },
    {
      title: 'RETREATS',
      tagline: 'Step Away. Go Within.',
      desc: 'Immersive experiences designed to create space for reflection, practice, renewal and deeper connection with oneself.',
      link: '/events',
      btnText: 'Explore Retreats',
      icon: Compass,
    },
    {
      title: 'COURSES',
      tagline: 'Learn. Practise. Transform.',
      desc: 'Structured experiences that help translate spiritual understanding into personal practice and conscious living.',
      link: '/quantum-habits',
      btnText: 'Explore Courses',
      icon: Heart,
    },
  ];

  const featuredExperiences = [
    {
      title: 'ONENESS MEDITATION',
      desc: 'From individual awareness to connectedness.',
      icon: Waves,
    },
    {
      title: 'INNER PEACE',
      desc: 'From mental noise to inner stillness.',
      icon: Flame,
    },
    {
      title: 'SPIRITUAL WELLNESS',
      desc: 'Wholeness across the dimensions of life.',
      icon: Heart,
    },
    {
      title: 'SEVEN CHAKRA ENERGY',
      desc: 'Explore the subtle dimensions of energy and awareness.',
      icon: Zap,
    },
    {
      title: 'SACRED 108 INITIATION',
      desc: 'A transformative spiritual gateway into deeper self-awareness, inner purification, and divine consciousness.',
      icon: ShieldCheck,
      isSpecial: true,
    },
  ];

  const soulEvolutionSteps = [
    'Avadhani',
    'Ayngara',
    'Anantha',
    'Amirtha',
    'Amogha',
    'Adwaita',
  ];

  const movementShifts = [
    { id: '01', from: 'Restlessness', to: 'Stillness', desc: 'Moving from mental chatter to profound inner quietude' },
    { id: '02', from: 'Reaction', to: 'Awareness', desc: 'Moving from automatic impulse to conscious presence' },
    { id: '03', from: 'Fragmentation', to: 'Harmony', desc: 'Moving from inner division to unified alignment' },
    { id: '04', from: 'Achievement', to: 'Fulfilment', desc: 'Moving from constant striving to present contentment' },
    { id: '05', from: 'Knowing', to: 'Experiencing', desc: 'Moving from intellectual concepts to direct realization' },
    { id: '06', from: 'Self', to: 'Oneness', desc: 'Moving from individual isolation to universal connectedness' },
  ];

  const promiseAspirations = [
    'A peaceful individual',
    'A conscious family',
    'A harmonious community',
    'A more awakened world.',
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#F8F2E8] relative overflow-hidden font-body text-[#352043]">
      
      {/* Rich Visible Sandal Background Image Overlay (con-6.webp) */}
      <div
        className="absolute inset-0 opacity-85 pointer-events-none bg-cover bg-center bg-no-repeat bg-fixed"
        style={{
          backgroundImage:
            "linear-gradient(rgba(248, 242, 232, 0.5), rgba(248, 242, 232, 0.65)), url('/images/con-6.webp')",
        }}
      />

      {/* Background Sacred Geometric Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10 pointer-events-none">
        <svg width="900" height="900" viewBox="0 0 100 100" fill="none" stroke="#DFC47A" strokeWidth="0.5">
          <circle cx="50" cy="50" r="48" strokeDasharray="2 2" />
          <circle cx="50" cy="50" r="38" />
          <circle cx="50" cy="50" r="28" strokeDasharray="1 1" />
          <path d="M50 2 C62 25 75 38 98 50 C75 62 62 75 50 98 C38 75 25 62 2 50 C25 38 38 25 50 2 Z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-20 sm:space-y-24">

        {/* SECTION 1: PROGRAMS HEADER & 4 CATEGORY CARDS */}
        <div className="space-y-12">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full royal-gold-badge text-xs uppercase tracking-widest font-semibold shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#C8A34A]" />
              7. PROGRAMS
            </div>
            
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#352043]">
              Choose Your <span className="text-[#8C5D00] italic font-serif">Path Within</span>
            </h2>

            <p className="text-[#5E5865] text-base sm:text-lg leading-relaxed font-light">
              Different practices • Different starting points. <br className="hidden sm:inline" />
              <strong className="font-semibold text-[#8C5D00]">One deeper purpose: To experience life more consciously.</strong>
            </p>
          </div>

          {/* 4 Program Category Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {programCategories.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="luxury-card rounded-[32px] p-7 sm:p-9 border-2 border-[#E9DED3] bg-white/95 backdrop-blur-sm shadow-lg hover:shadow-xl hover:border-[#C8A34A] transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="inline-block px-3.5 py-1 rounded-full bg-[#8C5D00]/10 text-[#8C5D00] text-xs font-bold uppercase tracking-wider">
                        {item.tagline}
                      </span>
                      <div className="w-12 h-12 rounded-2xl bg-[#F8F2E8] border border-[#DFC47A]/60 flex items-center justify-center text-[#8C5D00] group-hover:bg-[#8C5D00] group-hover:text-white transition-all duration-300">
                        <IconComp className="w-6 h-6" />
                      </div>
                    </div>

                    <h3 className="font-heading text-2xl font-extrabold text-[#352043]">
                      {item.title}
                    </h3>

                    <p className="text-[#5E5865] text-sm sm:text-base leading-relaxed font-light">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-6">
                    <Link
                      href={item.link}
                      className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#47206A] group-hover:text-[#8C5D00] transition-colors"
                    >
                      <span>{item.btnText}</span>
                      <ArrowRight className="w-4 h-4 text-[#C8A34A] group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* SECTION 2: FEATURED SPIRITUAL EXPERIENCES */}
        <div className="space-y-10 pt-4 border-t border-[#E9DED3]">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#8C5D00]">
              CURATED JOURNEYS
            </span>
            <h3 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#352043]">
              Featured Spiritual <span className="text-[#8C5D00] italic font-serif">Experiences</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredExperiences.map((exp, idx) => {
              const ExpIcon = exp.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className={`luxury-card rounded-[28px] p-6 border-2 transition-all duration-300 space-y-3 backdrop-blur-sm ${
                    exp.isSpecial
                      ? 'md:col-span-2 lg:col-span-2 bg-gradient-to-r from-[#FFFDF9]/95 via-[#FAF5EF]/95 to-[#FFFDF9]/95 border-[#C8A34A] shadow-md'
                      : 'bg-white/95 border-[#E9DED3] shadow-sm hover:shadow-md'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#8C5D00]/10 border border-[#8C5D00]/20 flex items-center justify-center text-[#8C5D00] shrink-0">
                      <ExpIcon className="w-5 h-5" />
                    </div>
                    <h4 className="font-heading text-lg font-bold text-[#352043]">
                      {exp.title}
                    </h4>
                  </div>
                  <p className="text-[#5E5865] text-sm leading-relaxed font-light pl-1">
                    {exp.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* SECTION 3: SOUL EVOLUTION PATH */}
        <div className="space-y-8 pt-4 border-t border-[#E9DED3]">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#8C5D00]">
              THE ASCENSION PATHWAY
            </span>
            <h3 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#352043]">
              Soul Evolution <span className="text-[#8C5D00] italic font-serif">Path</span>
            </h3>
          </div>

          <div className="bg-white/95 backdrop-blur-sm rounded-[32px] p-6 sm:p-10 border-2 border-[#E9DED3] shadow-lg">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 relative">
              {soulEvolutionSteps.map((step, idx) => (
                <div
                  key={idx}
                  className="relative flex flex-col items-center text-center p-4 rounded-2xl bg-[#FAF5EF] border border-[#DFC47A]/50 hover:border-[#8C5D00] transition-all group"
                >
                  <div className="w-8 h-8 rounded-full bg-[#8C5D00] text-white font-bold text-xs flex items-center justify-center mb-2 shadow-sm group-hover:scale-110 transition-transform">
                    {idx + 1}
                  </div>
                  <span className="font-heading text-base font-extrabold text-[#352043]">
                    {step}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* SECTION 4: THE DIVYA YOGAM MOVEMENT (Transformation Grid) */}
        <div className="space-y-10 pt-4 border-t border-[#E9DED3]">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#8C5D00]/10 text-[#8C5D00] text-xs font-bold uppercase tracking-widest border border-[#8C5D00]/20 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#8C5D00]" />
              INNER SHIFT
            </div>
            <h3 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#352043]">
              The Divya Yogam <span className="text-[#8C5D00] italic font-serif">Movement</span>
            </h3>
            <p className="text-[#5E5865] text-sm sm:text-base leading-relaxed font-light">
              A sacred evolution of consciousness — transitioning step by step into your true authentic essence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {movementShifts.map((row, idx) => (
              <motion.div
                key={row.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="luxury-card rounded-[28px] p-6 bg-white/95 backdrop-blur-sm border-2 border-[#E9DED3] hover:border-[#C8A34A] shadow-md hover:shadow-xl transition-all duration-300 relative group overflow-hidden flex flex-col justify-between"
              >
                {/* Top Badge Row */}
                <div className="flex items-center justify-between border-b border-[#E9DED3]/60 pb-3">
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-extrabold uppercase tracking-widest text-[#8C5D00] bg-[#8C5D00]/10 px-3 py-1 rounded-full border border-[#8C5D00]/15">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8C5D00]" />
                    Shift {row.id}
                  </span>
                  <Sparkles className="w-4 h-4 text-[#C8A34A] opacity-60 group-hover:opacity-100 group-hover:rotate-12 transition-all" />
                </div>

                {/* From -> To Visual Flow */}
                <div className="py-5 space-y-4">
                  <div className="flex items-center justify-between gap-2.5">
                    {/* From state */}
                    <div className="flex-1 rounded-2xl p-3 bg-[#FAF5EF] border border-[#E9DED3] text-center">
                      <span className="text-[10px] uppercase tracking-wider text-[#918597] block font-semibold mb-0.5">From</span>
                      <span className="text-xs sm:text-sm font-bold text-[#5E5865] line-through decoration-[#8C5D00]/50 block">
                        {row.from}
                      </span>
                    </div>

                    {/* Arrow Bridge */}
                    <div className="w-9 h-9 rounded-full bg-gradient-to-r from-[#C8A34A] to-[#8C5D00] text-white flex items-center justify-center shadow-md shrink-0 group-hover:scale-110 transition-transform">
                      <ArrowRight className="w-4 h-4" />
                    </div>

                    {/* To state */}
                    <div className="flex-1 rounded-2xl p-3 bg-gradient-to-br from-[#47206A] to-[#352043] border border-[#C8A34A]/50 text-center text-white shadow-sm relative overflow-hidden group-hover:border-[#C8A34A] transition-all">
                      <div className="absolute inset-0 bg-[radial-gradient(#DFC47A_1px,transparent_1px)] [background-size:12px_12px] opacity-15 pointer-events-none" />
                      <span className="text-[10px] uppercase tracking-widest text-[#DFC47A] block font-bold mb-0.5">To</span>
                      <span className="text-xs sm:text-sm font-extrabold text-[#FFFDF9] block">
                        {row.to}
                      </span>
                    </div>
                  </div>

                  {/* Subtitle description */}
                  {row.desc && (
                    <p className="text-center text-xs text-[#6E6675] font-serif italic pt-1">
                      “{row.desc}”
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

        </div>

        {/* SECTION 5: THE PROMISE & ASPIRATION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center pt-4 border-t border-[#E9DED3]">
          
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#8C5D00]/10 text-[#8C5D00] text-xs font-bold uppercase tracking-widest">
              THE PROMISE
            </div>

            <blockquote className="font-serif italic text-xl sm:text-2xl font-bold text-[#351A4A] leading-relaxed border-l-4 border-[#8C5D00] pl-5">
              “A Space to Pause. A Path to Awaken. A Way to Live Consciously”
            </blockquote>

            <p className="text-[#5E5865] text-base leading-relaxed font-light">
              Divya Yogam seeks to make inner awareness not an occasional experience, and then it is a way of living. Its aspiration is simple:
            </p>
          </div>

          <div className="lg:col-span-6 bg-white/95 backdrop-blur-sm rounded-[32px] p-7 sm:p-9 border-2 border-[#E9DED3] shadow-lg space-y-4">
            <h4 className="font-heading text-lg font-bold text-[#352043] border-b border-[#E9DED3] pb-3">
              Our Simple Aspiration
            </h4>

            <div className="space-y-3">
              {promiseAspirations.map((asp, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#8C5D00] shrink-0" />
                  <span className="text-base font-semibold text-[#352043]">
                    {asp}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* SECTION 6: FOOTER CALLOUT / TAGLINE */}
        <div className="rounded-[36px] bg-gradient-to-r from-[#47206A] via-[#352043] to-[#47206A] p-8 sm:p-12 text-center text-white space-y-6 relative overflow-hidden shadow-2xl border-2 border-[#C8A34A]/50">
          
          <div
            className="absolute inset-0 opacity-15 sm:opacity-20 md:opacity-25 lg:opacity-35 pointer-events-none bg-cover bg-right sm:bg-center transition-opacity duration-300"
            style={{ backgroundImage: "url('/images/deco-21.webp')" }}
          />
          <div className="absolute inset-0 bg-[radial-gradient(#DFC47A_1px,transparent_1px)] [background-size:20px_20px] opacity-10 pointer-events-none" />

          <span className="inline-block px-4 py-1.5 rounded-full bg-[#C8A34A]/20 text-[#DFC47A] text-xs font-bold uppercase tracking-widest border border-[#DFC47A]/30">
            YOUR JOURNEY — YOUR PACE — YOUR WITHIN
          </span>

          <p className="font-serif italic text-xl sm:text-2xl lg:text-3xl font-bold text-[#FFFDF9] max-w-3xl mx-auto leading-relaxed">
            “There is no single way to begin. <br />
            Begin where you are…… Go as deep as you are ready”
          </p>

          <div className="pt-2">
            <span className="font-heading text-sm font-extrabold tracking-[0.25em] uppercase text-[#DFC47A] block">
              DIVYA YOGAM — The Journey Within
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}
