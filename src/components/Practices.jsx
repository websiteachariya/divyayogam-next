import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Sparkles, HeartPulse, Infinity, Shield, Sun, ArrowRight } from 'lucide-react';

export default function Practices() {
  const practicesList = [
    {
      title: 'Organ Meditation',
      subtitle: 'Cellular Emotional Purification',
      desc: 'Direct vital prana and specific sound frequencies to Heart, Liver, Lungs, Kidneys, and Spleen to flush stored emotional toxins.',
      path: '/organ-meditation',
      icon: HeartPulse,
      badge: 'Core Technique',
    },
    {
      title: 'Quantum Habits',
      subtitle: 'Circadian Mindfulness Rituals',
      desc: 'Align morning Brahma Muhurta awakening and evening digital detox routines with Vedic energy cycles for sustainable vitality.',
      path: '/quantum-habits',
      icon: Infinity,
      badge: 'Daily Discipline',
    },
    {
      title: 'Pancha Kosha Purification',
      subtitle: '5 Subtle Sheaths Harmonization',
      desc: 'Systematically cleanse physical, energetic, mental, intuitive, and bliss sheaths through guided meditation.',
      path: '/sciences',
      icon: Shield,
      badge: 'Vedic Science',
    },
    {
      title: 'Global Candlelight Peace',
      subtitle: 'Synchronized Mass Meditation',
      desc: 'Unite with thousands of seekers worldwide in synchronized monthly candlelight peace meditations.',
      path: '/events',
      icon: Sun,
      badge: 'Monthly Event',
    },
  ];

  return (
    <section className="py-24 bg-[#F5EFE4] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full royal-gold-badge text-xs uppercase tracking-wider font-bold">
            <Sparkles className="w-3.5 h-3.5 text-[#5E2A84]" />
            Transformative Pathways
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#5E2A84]">
            Core Spiritual <span className="gold-gradient-text">Practices</span>
          </h2>
          <p className="text-[#5C5368] text-base font-light">
            Scientific, time-tested meditation techniques designed to harmonize mind, body, and spirit.
          </p>
        </div>

        {/* Practices Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {practicesList.map((practice, idx) => {
            const IconComponent = practice.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="glass-card glass-card-hover rounded-3xl p-8 border-2 border-[#E7DCC7] flex flex-col justify-between group shadow-lg"
              >
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="w-14 h-14 rounded-2xl bg-[#F5EFE4] border border-[#DDD3C3] flex items-center justify-center text-[#5E2A84] shadow-sm">
                      <IconComponent className="w-7 h-7 text-[#5E2A84]" />
                    </div>
                    <span className="px-3.5 py-1 rounded-full royal-gold-badge text-xs font-bold uppercase tracking-wider">
                      {practice.badge}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#C8A248]">
                      {practice.subtitle}
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#5E2A84] group-hover:text-[#7B3FA4] transition-colors">
                      {practice.title}
                    </h3>
                  </div>

                  <p className="text-[#5C5368] text-sm font-light leading-relaxed">
                    {practice.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#E7DCC7]">
                  <Link
                    to={practice.path}
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#5E2A84] hover:text-[#C8A248] transition-colors"
                  >
                    <span>Learn More & Practice</span>
                    <ArrowRight className="w-4 h-4 text-[#5E2A84] group-hover:text-[#C8A248]" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
