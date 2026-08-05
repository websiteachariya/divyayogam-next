import { motion } from 'framer-motion';
import { Sparkles, HeartPulse, Cpu, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Science() {
  const scienceCards = [
    {
      title: 'Organ Cellular Vitality',
      subtitle: 'Cellular Frequency Resonance',
      desc: 'Each internal organ operates at specific bio-energetic frequencies. Organ meditation directs intentional breath and sound waves into organ tissues to restore optimum cellular vitality.',
      icon: HeartPulse,
      path: '/organ-meditation',
    },
    {
      title: 'Pancha Kosha Architecture',
      subtitle: 'Multidimensional Sheaths',
      desc: 'Human existence is layered into 5 distinct sheaths (Physical, Vital, Mental, Intuitive, and Bliss). Cleansing these sheaths dissolves root causes of physical and mental disharmony.',
      icon: Layers,
      path: '/sciences',
    },
    {
      title: 'Vedic Energy Vortices',
      subtitle: 'Chakra & Nadi Alignment',
      desc: 'Activate the 7 primary energy centers (Chakras) and 72,000 subtle energy channels (Nadis) to facilitate the effortless flow of Kundalini prana throughout the body.',
      icon: Cpu,
      path: '/sciences',
    },
  ];

  return (
    <section className="py-24 bg-[#FAF6EE] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full royal-gold-badge text-xs uppercase tracking-wider font-bold">
            <Sparkles className="w-3.5 h-3.5 text-[#5E2A84]" />
            Ancient Wisdom & Modern Neuroscience
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#5E2A84]">
            The Sacred <span className="gold-gradient-text">Sciences</span>
          </h2>
          <p className="text-[#5C5368] text-base font-light">
            Unveiling the bio-energetic principles that govern health, emotional wellness, and higher consciousness.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {scienceCards.map((card, idx) => {
            const IconComponent = card.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="glass-card glass-card-hover rounded-3xl p-8 border-2 border-[#E7DCC7] flex flex-col justify-between group shadow-lg"
              >
                <div className="space-y-6">
                  <div className="w-14 h-14 rounded-2xl bg-[#F5EFE4] border border-[#DDD3C3] flex items-center justify-center text-[#5E2A84] shadow-sm">
                    <IconComponent className="w-7 h-7 text-[#5E2A84]" />
                  </div>

                  <div className="space-y-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#C8A248]">
                      {card.subtitle}
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-[#5E2A84] group-hover:text-[#7B3FA4] transition-colors">
                      {card.title}
                    </h3>
                  </div>

                  <p className="text-[#5C5368] text-sm font-light leading-relaxed">
                    {card.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#E7DCC7]">
                  <Link
                    to={card.path}
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#5E2A84] hover:text-[#C8A248] transition-colors"
                  >
                    <span>Read Science Breakdown</span>
                    <span>→</span>
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
