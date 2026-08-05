import { motion } from 'framer-motion';
import { Sparkles, HeartPulse, Infinity, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Practices from '../components/Practices';

export default function PracticesPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-[#FAF6EE]"
    >
      {/* Hero Header */}
      <section className="pt-28 pb-10 relative overflow-hidden bg-gradient-to-b from-[#43175F] to-[#3A124F] text-center border-b border-[rgba(223,194,125,0.18)]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#C8A248]/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full royal-gold-badge text-xs font-bold uppercase tracking-wider shadow-md">
            <Sparkles className="w-3.5 h-3.5 text-[#5E2A84]" />
            Sacred Disciplines
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Scientific <span className="text-[#DFC27D]">Spiritual Practices</span>
          </h1>

          <p className="text-[#F7F3EA] text-base sm:text-lg font-garamond italic max-w-2xl mx-auto font-medium">
            Time-tested Vedic techniques structured to revitalize cellular health, align energy vortices, and quiet the thinking mind.
          </p>
        </div>
      </section>

      {/* Main Practices Component */}
      <Practices />

      {/* Feature Cards for Organ Meditation & Quantum Habits */}
      <section className="py-20 bg-[#FFFDF9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Organ Meditation Card */}
            <div className="glass-card glass-card-hover rounded-3xl p-8 border-2 border-[#E7DCC7] space-y-6 relative overflow-hidden group shadow-lg">
              <div className="w-14 h-14 rounded-2xl bg-[#F5EFE4] border border-[#DDD3C3] flex items-center justify-center text-[#5E2A84] shadow-sm">
                <HeartPulse className="w-7 h-7 text-[#5E2A84]" />
              </div>
              <h2 className="font-serif text-3xl font-bold text-[#43175F]">
                Organ Meditation
              </h2>
              <p className="text-[#5C5368] text-base font-light leading-relaxed">
                A revolutionary cellular rejuvenation technique that directs vital energy into Heart, Liver, Lungs, Kidneys, and Spleen to dissolve emotional toxins.
              </p>
              <Link
                to="/organ-meditation"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-[#C8A248] to-[#DFC27D] hover:from-[#B88F30] hover:to-[#D5B561] text-white font-bold text-sm shadow-[0_15px_40px_rgba(200,162,72,0.25)] transition-all"
              >
                <span>View Organ Meditation Details</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </Link>
            </div>

            {/* Quantum Habits Card */}
            <div className="glass-card glass-card-hover rounded-3xl p-8 border-2 border-[#E7DCC7] space-y-6 relative overflow-hidden group shadow-lg">
              <div className="w-14 h-14 rounded-2xl bg-[#F5EFE4] border border-[#DDD3C3] flex items-center justify-center text-[#5E2A84] shadow-sm">
                <Infinity className="w-7 h-7 text-[#5E2A84]" />
              </div>
              <h2 className="font-serif text-3xl font-bold text-[#43175F]">
                Quantum Habits
              </h2>
              <p className="text-[#5C5368] text-base font-light leading-relaxed">
                Elevate your everyday life through micro-habits, circadian rhythm synchronization, and high-vibrational morning & evening spiritual rituals.
              </p>
              <Link
                to="/quantum-habits"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-[#C8A248] to-[#DFC27D] hover:from-[#B88F30] hover:to-[#D5B561] text-white font-bold text-sm shadow-[0_15px_40px_rgba(200,162,72,0.25)] transition-all"
              >
                <span>View Quantum Habits Details</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </Link>
            </div>

          </div>
        </div>
      </section>

    </motion.div>
  );
}
