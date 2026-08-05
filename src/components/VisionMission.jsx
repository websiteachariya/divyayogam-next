import { motion } from 'framer-motion';
import { Eye, Target, Sparkles } from 'lucide-react';

export default function VisionMission() {
  return (
    <section className="py-24 bg-[#F5EFE4] relative overflow-hidden">
      {/* Glow Orbs */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] glow-orb-purple pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] glow-orb-gold pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full royal-gold-badge text-xs uppercase tracking-wider font-bold">
            <Sparkles className="w-3.5 h-3.5 text-[#5E2A84]" />
            Sacred Guiding Light
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#5E2A84]">
            Our Vision & <span className="gold-gradient-text">Mission</span>
          </h2>
          <p className="text-[#5C5368] text-base font-light">
            The core principles that illuminate every practice, teaching, and sanctuary event at Divya Yogam.
          </p>
        </div>

        {/* Dual Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card glass-card-hover rounded-3xl p-8 sm:p-10 border-2 border-[#E7DCC7] space-y-6 relative overflow-hidden shadow-lg"
          >
            <div className="w-16 h-16 rounded-2xl bg-[#F5EFE4] border border-[#DDD3C3] flex items-center justify-center text-[#5E2A84] shadow-sm">
              <Eye className="w-8 h-8 text-[#5E2A84]" />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-[#C8A248]">
                The Higher Horizon
              </span>
              <h3 className="font-serif text-3xl font-bold text-[#5E2A84]">
                Our Vision
              </h3>
            </div>

            <p className="text-[#5C5368] text-base sm:text-lg leading-relaxed font-light">
              To inspire a world where every human being experiences profound physical vitality, emotional clarity, and spiritual enlightenment—awakening the innate divine grace present within us all.
            </p>

            <ul className="space-y-3 pt-2 text-sm text-[#5C5368] font-medium">
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#C8A248]" />
                <span>Cultivating global peace through individual inner stillness</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#C8A248]" />
                <span>Preserving authentic ancient Vedic meditative sciences</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#C8A248]" />
                <span>Creating harmonious communities grounded in compassion</span>
              </li>
            </ul>
          </motion.div>

          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card glass-card-hover rounded-3xl p-8 sm:p-10 border-2 border-[#E7DCC7] space-y-6 relative overflow-hidden shadow-lg"
          >
            <div className="w-16 h-16 rounded-2xl bg-[#F5EFE4] border border-[#DDD3C3] flex items-center justify-center text-[#5E2A84] shadow-sm">
              <Target className="w-8 h-8 text-[#5E2A84]" />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-[#C8A248]">
                Our Purpose in Action
              </span>
              <h3 className="font-serif text-3xl font-bold text-[#5E2A84]">
                Our Mission
              </h3>
            </div>

            <p className="text-[#5C5368] text-base sm:text-lg leading-relaxed font-light">
              To provide accessible, scientific, and transformative spiritual education through Organ Meditation, Pancha Kosha purification, and Quantum Habits—empowering individuals to thrive in the modern world.
            </p>

            <ul className="space-y-3 pt-2 text-sm text-[#5C5368] font-medium">
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#C8A248]" />
                <span>Offering structured cellular rejuvenation techniques</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#C8A248]" />
                <span>Empowering professionals with daily mindfulness mastery</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#C8A248]" />
                <span>Guiding seekers into deep states of unshakeable joy</span>
              </li>
            </ul>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
