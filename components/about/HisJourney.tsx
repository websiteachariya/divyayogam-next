'use client';

import { motion } from 'framer-motion';
import { BookOpen, Brain, Users, HeartPulse, Flame, Eye, Sparkles, Building2, Briefcase, Rocket } from 'lucide-react';

export default function HisJourney() {
  const pillars = [
    {
      num: '01',
      title: 'Education',
      desc: 'Reimagining learning beyond academics.',
      icon: BookOpen,
    },
    {
      num: '02',
      title: 'Human Potential',
      desc: 'Unlocking intelligence, creativity, memory, emotional and life skills.',
      icon: Brain,
    },
    {
      num: '03',
      title: 'Leadership',
      desc: 'Creating conscious, capable and value-driven individuals.',
      icon: Users,
    },
    {
      num: '04',
      title: 'Wellbeing',
      desc: 'Bringing balance to body, mind, emotion and life.',
      icon: HeartPulse,
    },
    {
      num: '05',
      title: 'Meditation',
      desc: 'Turning the journey inward through stillness and awareness.',
      icon: Flame,
    },
    {
      num: '06',
      title: 'Consciousness',
      desc: 'Exploring the deeper dimensions of human existence.',
      icon: Eye,
    },
    {
      num: '07',
      title: 'Divya Yogam',
      desc: 'Bringing the outer journey and inner journey into harmony.',
      icon: Sparkles,
      featured: true,
    },
  ];

  const metrics = [
    { num: '101', label: 'Educational Institutions', sub: 'Reimagining learning & human potential', icon: Building2 },
    { num: '61', label: 'Companies', sub: 'Transforming corporate leadership & ethics', icon: Briefcase },
    { num: '240', label: 'Major Initiatives', sub: 'Empowering communities & awakening lives', icon: Rocket },
  ];

  return (
    <section className="pt-3 pb-3 sm:pt-5 sm:pb-5 bg-[#FAF5EF] text-[#352043] relative overflow-hidden font-body">
      {/* Rich Visible Sandal Background Image Overlay (con-6.webp) */}
      <div
        className="absolute inset-0 opacity-85 pointer-events-none bg-cover bg-center bg-no-repeat bg-fixed"
        style={{
          backgroundImage:
            "linear-gradient(rgba(250, 245, 239, 0.5), rgba(250, 245, 239, 0.65)), url('/images/con-6.webp')",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6 sm:space-y-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full royal-gold-badge text-xs uppercase tracking-widest font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-[#8C5D00]" />
            HIS JOURNEY
          </div>

          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-[#352043] leading-tight">
            The 7 Pillars of <span className="text-[#8C5D00] italic font-serif">Human Evolution</span>
          </h2>

          <p className="text-[#5E5865] text-base sm:text-lg font-serif italic max-w-2xl mx-auto">
            From educational reimagination to the exploration of higher consciousness.
          </p>

          <div className="w-20 h-1 bg-[#8C5D00] rounded-full mx-auto" />
        </div>

        {/* 7 Pillars White Luxury Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            const isFeatured = item.featured;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className={`group relative rounded-[28px] p-7 border-2 transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between backdrop-blur-sm ${
                  isFeatured
                    ? 'sm:col-span-2 lg:col-span-3 xl:col-span-2 bg-gradient-to-r from-[#FFFDF9]/95 via-[#FAF5EF]/95 to-[#FFFDF9]/95 text-[#352043] border-[#8C5D00]'
                    : 'bg-white/95 border-[#E9DED3] hover:border-[#8C5D00] text-[#352043]'
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-extrabold font-heading text-[#8C5D00]">
                      {item.num}
                    </span>
                    <div className="w-11 h-11 rounded-2xl bg-[#EFE6F7] text-[#8C5D00] flex items-center justify-center transition-all group-hover:bg-[#8C5D00] group-hover:text-white">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <div>
                    <h3 className="font-heading text-xl font-bold text-[#352043] group-hover:text-[#8C5D00] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm leading-relaxed mt-2 text-[#5E5865]">
                      {item.desc}
                    </p>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-[#E9DED3] flex items-center justify-between text-xs font-semibold text-[#8C5D00]">
                  <span className="uppercase tracking-widest">PILLAR {item.num}</span>
                  <span>❖</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ECOSYSTEM METRICS HIGHLIGHT BANNER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="rounded-[32px] bg-white/95 border-2 border-[#E9DED3] p-8 sm:p-12 shadow-xl space-y-8 relative overflow-hidden backdrop-blur-sm"
        >
          <div className="relative z-10 max-w-4xl mx-auto text-center space-y-3">
            <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full royal-gold-badge text-xs uppercase tracking-widest font-semibold">
              DOCUMENTED IMPACT & ECOSYSTEM
            </span>
            <h3 className="font-heading text-3xl sm:text-4xl font-bold text-[#352043]">
              A Remarkable Ecosystem Built Around <span className="text-[#8C5D00] italic font-serif">Human Development</span>
            </h3>
          </div>

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            {metrics.map((m, idx) => {
              const IconComp = m.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-[#FAF5EF] border border-[#E9DED3] text-center space-y-2 hover:border-[#8C5D00] hover:bg-white hover:scale-105 transition-all duration-300 shadow-sm"
                >
                  <div className="w-12 h-12 rounded-full bg-[#EFE6F7] mx-auto flex items-center justify-center text-[#8C5D00]">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <div className="font-heading text-4xl sm:text-5xl font-extrabold text-[#8C5D00]">
                    {m.num}
                  </div>
                  <div className="font-heading font-bold text-base text-[#352043]">
                    {m.label}
                  </div>
                  <p className="text-xs text-[#5E5865] font-normal leading-relaxed">
                    {m.sub}
                  </p>
                </div>
              );
            })}
          </div>

          <p className="relative z-10 text-center text-sm sm:text-base font-serif italic text-[#5E5865] max-w-2xl mx-auto pt-2">
            “His documented work encompasses 101 educational institutions, 61 companies and 240 major initiatives—a remarkable ecosystem built around human development.”
          </p>
        </motion.div>

      </div>
    </section>
  );
}
