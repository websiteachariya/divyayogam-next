'use client';

import { motion } from 'framer-motion';
import { Sparkles, Milestone, Award, Globe, HeartPulse } from 'lucide-react';

export default function Achievements() {
  const milestones = [
    {
      year: '2010',
      title: 'Foundation of Divya Yogam',
      desc: 'Arawindhan Ji established Divya Yogam with a mission to bring timeless Vedic wisdom to modern humanity.',
      icon: Milestone,
    },
    {
      year: '2015',
      title: 'Organ Meditation Breakthrough',
      desc: 'Formulated cellular rejuvenation techniques combining sound resonance, visualization, and organ-specific breathwork.',
      icon: HeartPulse,
    },
    {
      year: '2018',
      title: 'Global Outreach & Retreats',
      desc: 'Expanded meditation workshops across 15+ countries, establishing international satsangs and study circles.',
      icon: Globe,
    },
    {
      year: '2022',
      title: 'Quantum Habits Launch',
      desc: 'Integrated modern circadian biology with ancient dinacharya routines to help professionals build sustainable spiritual habits.',
      icon: Award,
    },
    {
      year: '2026',
      title: '100,000+ Lives Touched',
      desc: 'Celebrating over a decade and a half of selfless service and global transformation.',
      icon: Sparkles,
    },
  ];

  return (
    <section className="py-24 bg-transparent relative overflow-hidden font-body">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full royal-gold-badge text-xs uppercase tracking-wider font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-[#8C5D00]" />
            Our Journey
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#352043]">
            Key <span className="text-[#8C5D00]">Milestones</span>
          </h2>
          <p className="text-[#352043] text-base font-normal">
            A timeline of spiritual evolution, service, and global impact.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative border-l-2 border-[#8C5D00] ml-4 sm:ml-32 space-y-12">
          {milestones.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="relative pl-8 sm:pl-12 group"
              >
                {/* Node Badge */}
                <div className="absolute -left-[21px] top-0 w-10 h-10 rounded-full bg-[#5A2D82] border-2 border-[#8C5D00] flex items-center justify-center text-[#DFC47A] shadow-md group-hover:scale-110 group-hover:bg-[#8C5D00] group-hover:text-white transition-all">
                  <IconComponent className="w-5 h-5" />
                </div>

                {/* Year Label */}
                <div className="hidden sm:block absolute -left-36 top-1 text-right w-24">
                  <span className="font-heading text-2xl font-bold text-[#352043]">
                    {item.year}
                  </span>
                </div>

                {/* Content Box */}
                <div className="luxury-card rounded-[28px] p-6 border border-[#E9DED3] space-y-2 shadow-sm bg-white">
                  <span className="sm:hidden text-xs font-bold uppercase tracking-wider text-[#8C5D00]">
                    {item.year}
                  </span>
                  <h3 className="font-heading text-xl font-bold text-[#352043] group-hover:text-[#8C5D00] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-[#3B2D4A] text-sm font-normal leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
