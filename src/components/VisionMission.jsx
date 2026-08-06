import { motion } from 'framer-motion';
import { Eye, Target, Sparkles } from 'lucide-react';

export default function VisionMission() {
  return (
    <section className="py-24 bg-[#FBF8F1] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full royal-gold-badge text-xs uppercase tracking-wider font-bold">
            <Sparkles className="w-3.5 h-3.5 text-[#B68A3D]" />
            Sacred Guiding Light
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#12372A]">
            Our Vision & <span className="text-[#B68A3D]">Mission</span>
          </h2>
          <p className="text-[#423629] text-base font-light">
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
            className="glass-card glass-card-hover rounded-3xl p-8 sm:p-10 border-2 border-[#E2D8C3] space-y-6 relative overflow-hidden shadow-lg bg-white"
          >
            <div className="w-16 h-16 rounded-2xl bg-[#FBF8F1] border border-[#E2D8C3] flex items-center justify-center text-[#B68A3D] shadow-sm">
              <Eye className="w-8 h-8 text-[#B68A3D]" />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-[#B68A3D]">
                The Higher Horizon
              </span>
              <h3 className="font-serif text-3xl font-bold text-[#12372A]">
                Our Vision
              </h3>
            </div>

            <p className="text-[#423629] text-base sm:text-lg leading-relaxed font-light">
              To inspire a world where every human being experiences profound physical vitality, emotional clarity, and spiritual enlightenment—awakening the innate divine grace present within us all.
            </p>

            <ul className="space-y-3 pt-2 text-sm text-[#423629] font-medium">
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#B68A3D]" />
                <span>Cultivating global peace through individual inner stillness</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#B68A3D]" />
                <span>Preserving authentic ancient Vedic meditative sciences</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#B68A3D]" />
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
            className="glass-card glass-card-hover rounded-3xl p-8 sm:p-10 border-2 border-[#E2D8C3] space-y-6 relative overflow-hidden shadow-lg bg-white"
          >
            <div className="w-16 h-16 rounded-2xl bg-[#FBF8F1] border border-[#E2D8C3] flex items-center justify-center text-[#B68A3D] shadow-sm">
              <Target className="w-8 h-8 text-[#B68A3D]" />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-[#B68A3D]">
                Our Purpose in Action
              </span>
              <h3 className="font-serif text-3xl font-bold text-[#12372A]">
                Our Mission
              </h3>
            </div>

            <p className="text-[#423629] text-base sm:text-lg leading-relaxed font-light">
              To provide accessible, scientific, and transformative spiritual education through Organ Meditation, Pancha Kosha purification, and Quantum Habits—empowering individuals to thrive in the modern world.
            </p>

            <ul className="space-y-3 pt-2 text-sm text-[#423629] font-medium">
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#B68A3D]" />
                <span>Offering structured cellular rejuvenation techniques</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#B68A3D]" />
                <span>Empowering professionals with daily mindfulness mastery</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#B68A3D]" />
                <span>Guiding seekers into deep states of unshakeable joy</span>
              </li>
            </ul>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
