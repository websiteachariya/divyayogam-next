import { motion } from 'framer-motion';
import { Sparkles, Activity, ShieldCheck, SunMedium } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      title: 'Cellular Organ Awakening',
      subtitle: 'Restoring Vitality from Within',
      desc: 'Direct focused intent, breath retention, and sound frequencies into core organs—cleansing metabolic toxins and rejuvenating cellular structures.',
      icon: Activity,
    },
    {
      title: 'Pancha Kosha Purification',
      subtitle: 'Harmonizing Subtle Energy Bodies',
      desc: 'Systematically align physical, vital, mental, intuitive, and bliss sheaths to create unshakeable equilibrium in everyday life.',
      icon: ShieldCheck,
    },
    {
      title: 'Quantum Habit Alignment',
      subtitle: 'Mastering Modern Circadian Rhythms',
      desc: 'Integrate ancient morning and evening Dinacharya rituals with modern lifestyle routines to maintain peak cognitive and spiritual performance.',
      icon: SunMedium,
    },
  ];

  return (
    <section className="py-24 bg-[#F5EFE4] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full royal-gold-badge text-xs uppercase tracking-wider font-bold">
            <Sparkles className="w-3.5 h-3.5 text-[#5E2A84]" />
            The Inner Journey
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#5E2A84]">
            The Divya Yogam <span className="gold-gradient-text">Experience</span>
          </h2>
          <p className="text-[#5C5368] text-base font-light">
            Empowering practitioners to experience tangible physical rejuvenation and quiet mind states.
          </p>
        </div>

        {/* Experience Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {experiences.map((exp, idx) => {
            const IconComponent = exp.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="glass-card glass-card-hover rounded-3xl p-8 border-2 border-[#E7DCC7] space-y-6 relative overflow-hidden shadow-lg"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#F5EFE4] border border-[#DDD3C3] flex items-center justify-center text-[#5E2A84] shadow-sm">
                  <IconComponent className="w-7 h-7 text-[#5E2A84]" />
                </div>

                <div className="space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#C8A248]">
                    {exp.subtitle}
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-[#5E2A84]">
                    {exp.title}
                  </h3>
                </div>

                <p className="text-[#5C5368] text-sm font-light leading-relaxed">
                  {exp.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
