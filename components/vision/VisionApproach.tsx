'use client';

import { motion } from 'framer-motion';
import { Sparkles, Sun, Zap, Eye, Compass, Heart, Globe } from 'lucide-react';
import { GoldenHeadingUnderline } from './SacredGeometrySvg';

export default function VisionApproach() {
  const missionSteps = [
    {
      num: '01',
      title: 'Awaken',
      desc: 'Become conscious of the self',
      icon: Sun,
    },
    {
      num: '02',
      title: 'Align',
      desc: 'Bring body, mind, emotion and intellect into harmony',
      icon: Zap,
    },
    {
      num: '03',
      title: 'Experience',
      desc: 'Discover the transformative power of stillness and awareness',
      icon: Eye,
    },
    {
      num: '04',
      title: 'Evolve',
      desc: 'Grow beyond limitation into higher possibilities',
      icon: Compass,
    },
    {
      num: '05',
      title: 'Express',
      desc: 'Carry inner clarity into relationships, work and life',
      icon: Heart,
    },
    {
      num: '06',
      title: 'Contribute',
      desc: 'Transform personal awakening into collective wellbeing',
      icon: Globe,
    },
  ];

  return (
    <section id="the-mission" className="py-24 sm:py-32 bg-transparent relative overflow-hidden font-body">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full royal-gold-badge text-[11px] font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-[#8C5D00]" />
            THE MISSION
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#352043]">
            To Create Pathways for <span className="text-[#8C5D00]">Inner Transformation</span>
          </h2>
          <GoldenHeadingUnderline />

          <p className="text-[#352043] text-base sm:text-lg font-normal leading-relaxed max-w-2xl mx-auto italic font-serif">
            “Divya Yogam seeks to enable individuals to:”
          </p>
        </div>

        {/* 6 Mission Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {missionSteps.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="luxury-card rounded-[28px] p-7 border border-[#E9DED3] bg-white flex flex-col justify-between space-y-4 shadow-sm hover:border-[#8C5D00] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-[#F8F2E8] border border-[#DFC47A]/40 flex items-center justify-center text-[#8C5D00] group-hover:bg-[#8C5D00] group-hover:text-white transition-all shadow-sm">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="font-heading text-2xl font-bold text-[#8C5D00]">
                      {item.num}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-heading text-xl font-bold text-[#352043] group-hover:text-[#8C5D00] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-[#3B2D4A] text-sm font-normal leading-relaxed mt-2">
                      {item.desc}
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#E9DED3] flex items-center justify-between text-xs font-semibold text-[#8C5D00]">
                  <span className="uppercase tracking-widest">MISSION PATHWAY</span>
                  <span>❖</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Video Showcase Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="pt-10 flex justify-center"
        >
          <div className="w-full max-w-5xl relative">
            {/* Glowing Golden Aura Behind */}
            <div
              className="absolute -inset-4 rounded-[3rem] opacity-40 blur-2xl pointer-events-none"
              style={{ boxShadow: '0 0 100px rgba(212,175,54,0.3)' }}
            />

            {/* Video Player */}
            <div
              className="relative z-10 rounded-[2rem] overflow-hidden bg-black shadow-[0_15px_35px_rgba(0,0,0,0.3)] transition-all duration-300"
              style={{ border: '2px solid rgba(212,175,54,0.6)' }}
            >
              <div className="relative aspect-[16/9] w-full">
                <video
                  controls
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source
                    src="https://res.cloudinary.com/y2q2jsq0/video/upload/v1783507433/Gx012584_sckw96.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
