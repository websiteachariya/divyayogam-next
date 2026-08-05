import { motion } from 'framer-motion';
import { Sparkles, HeartPulse, ShieldCheck, Flame, Compass } from 'lucide-react';

export default function Purpose() {
  const pillars = [
    {
      icon: HeartPulse,
      title: 'Physical Vitality',
      desc: 'Revitalize internal organs, boost cellular immunity, and dissolve physical fatigue through targeted organ meditation.',
    },
    {
      icon: ShieldCheck,
      title: 'Mental Stillness',
      desc: 'Settle restless thoughts, reduce anxiety, and cultivate calm focus with scientific breath retention practices.',
    },
    {
      icon: Flame,
      title: 'Emotional Cleansing',
      desc: 'Release accumulated stress and trapped emotional blockages from the body’s energy centers.',
    },
    {
      icon: Compass,
      title: 'Spiritual Illumination',
      desc: 'Align your subtle sheaths (Pancha Kosha) with cosmic intelligence to live a purpose-driven life.',
    },
  ];

  return (
    <section className="py-24 bg-[#FAF6EE] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full royal-gold-badge text-xs uppercase tracking-wider font-bold">
            <Sparkles className="w-3.5 h-3.5 text-[#5E2A84]" />
            Core Foundations
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#5E2A84]">
            The Four Pillars of <span className="gold-gradient-text">Divya Yogam</span>
          </h2>
          <p className="text-[#5C5368] text-base font-light">
            A comprehensive blueprint for holistic well-being and spiritual awakening.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, idx) => {
            const IconComponent = pillar.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="glass-card glass-card-hover rounded-3xl p-8 border-2 border-[#E7DCC7] space-y-5 flex flex-col justify-between group shadow-lg"
              >
                <div className="space-y-4">
                  <div className="w-14 h-14 rounded-2xl bg-[#F5EFE4] border border-[#DDD3C3] flex items-center justify-center text-[#5E2A84] group-hover:scale-110 transition-transform shadow-sm">
                    <IconComponent className="w-7 h-7 text-[#5E2A84]" />
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-[#5E2A84] group-hover:text-[#7B3FA4] transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="text-[#5C5368] text-sm font-light leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E7DCC7] text-xs text-[#5E2A84] group-hover:text-[#C8A248] font-bold uppercase tracking-wider flex items-center gap-1 transition-colors">
                  <span>Explore Pillar</span>
                  <span>→</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
