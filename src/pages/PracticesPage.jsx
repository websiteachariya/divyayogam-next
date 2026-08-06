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
      className="bg-[#FBF8F1]"
    >
      {/* Hero Header with Sacred Lotus SVG Pattern Overlay */}
      <section className="pt-28 pb-12 relative overflow-hidden bg-gradient-to-b from-[#12372A] to-[#0C2B21] text-center border-b border-[rgba(208,173,92,0.25)]">
        
        {/* Background Lotus Mandala SVG Overlay */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10 pointer-events-none">
          <svg width="450" height="450" viewBox="0 0 100 100" fill="none" stroke="#D0AD5C" strokeWidth="0.8">
            <circle cx="50" cy="50" r="45" />
            <circle cx="50" cy="50" r="35" strokeDasharray="2 2" />
            <path d="M50 5 C60 25 75 40 95 50 C75 60 60 75 50 95 C40 75 25 60 5 50 C25 40 40 25 50 5 Z" />
          </svg>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full royal-gold-badge text-xs font-bold uppercase tracking-wider shadow-md">
            <Sparkles className="w-3.5 h-3.5 text-[#B68A3D]" />
            Sacred Disciplines
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Scientific <span className="text-[#D0AD5C]">Spiritual Practices</span>
          </h1>

          <p className="text-[#FBF8F1] text-base sm:text-lg font-garamond italic max-w-2xl mx-auto font-medium">
            Time-tested Vedic techniques structured to revitalize cellular health, align energy vortices, and quiet the thinking mind.
          </p>
        </div>
      </section>

      {/* Main Practices Component */}
      <Practices />

      {/* Feature Cards for Organ Meditation & Quantum Habits */}
      <section className="py-20 bg-[#FBF8F1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* Organ Meditation Card */}
            <div className="glass-card glass-card-hover rounded-3xl p-8 border-2 border-[#E2D8C3] space-y-6 relative overflow-hidden group shadow-lg bg-white">
              <div className="w-14 h-14 rounded-2xl bg-[#FBF8F1] border border-[#E2D8C3] flex items-center justify-center text-[#B68A3D] shadow-sm">
                <HeartPulse className="w-7 h-7 text-[#B68A3D]" />
              </div>
              <h2 className="font-serif text-3xl font-bold text-[#12372A]">
                Organ Meditation
              </h2>
              <p className="text-[#423629] text-base font-light leading-relaxed">
                A revolutionary cellular rejuvenation technique that directs vital energy into Heart, Liver, Lungs, Kidneys, and Spleen to dissolve emotional toxins.
              </p>
              <Link
                to="/organ-meditation"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-[#B68A3D] to-[#D0AD5C] hover:from-[#9C6E28] hover:to-[#C49E4B] text-[#0C2B21] font-bold text-sm shadow-md transition-all"
              >
                <span>View Organ Meditation Details</span>
                <ArrowRight className="w-4 h-4 text-[#0C2B21]" />
              </Link>
            </div>

            {/* Quantum Habits Card */}
            <div className="glass-card glass-card-hover rounded-3xl p-8 border-2 border-[#E2D8C3] space-y-6 relative overflow-hidden group shadow-lg bg-white">
              <div className="w-14 h-14 rounded-2xl bg-[#FBF8F1] border border-[#E2D8C3] flex items-center justify-center text-[#B68A3D] shadow-sm">
                <Infinity className="w-7 h-7 text-[#B68A3D]" />
              </div>
              <h2 className="font-serif text-3xl font-bold text-[#12372A]">
                Quantum Habits
              </h2>
              <p className="text-[#423629] text-base font-light leading-relaxed">
                Elevate your everyday life through micro-habits, circadian rhythm synchronization, and high-vibrational morning & evening spiritual rituals.
              </p>
              <Link
                to="/quantum-habits"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-[#B68A3D] to-[#D0AD5C] hover:from-[#9C6E28] hover:to-[#C49E4B] text-[#0C2B21] font-bold text-sm shadow-md transition-all"
              >
                <span>View Quantum Habits Details</span>
                <ArrowRight className="w-4 h-4 text-[#0C2B21]" />
              </Link>
            </div>

          </div>
        </div>
      </section>

    </motion.div>
  );
}
