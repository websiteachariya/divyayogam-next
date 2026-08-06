import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import Founder from '../components/Founder';
import Community from '../components/Community';
import Achievements from '../components/Achievements';

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-[#FBF8F1]"
    >
      {/* Page Hero Header in Deep Emerald Green #12372A with Lotus SVG Watermark */}
      <section className="pt-28 pb-12 relative overflow-hidden bg-gradient-to-b from-[#12372A] to-[#0C2B21] text-center border-b border-[rgba(208,173,92,0.25)]">
        
        {/* Background Lotus Mandala SVG Overlay */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10 pointer-events-none">
          <svg width="450" height="450" viewBox="0 0 100 100" fill="none" stroke="#D0AD5C" strokeWidth="0.8">
            <circle cx="50" cy="50" r="45" />
            <circle cx="50" cy="50" r="32" strokeDasharray="2 2" />
            <circle cx="50" cy="50" r="20" />
            <path d="M50 5 C60 25 75 40 95 50 C75 60 60 75 50 95 C40 75 25 60 5 50 C25 40 40 25 50 5 Z" />
            <path d="M50 15 C57 30 70 43 85 50 C70 57 57 70 50 85 C43 70 30 57 15 50 C30 43 43 30 50 15 Z" />
          </svg>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full royal-gold-badge text-xs font-bold uppercase tracking-wider shadow-md">
            <Sparkles className="w-3.5 h-3.5 text-[#B68A3D]" />
            Divya Yogam · Est. 2010
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Where Ancient Wisdom <br />
            <span className="text-[#D0AD5C]">Meets Modern Awakening</span>
          </h1>

          <p className="text-[#FBF8F1] text-base sm:text-lg font-garamond italic max-w-2xl mx-auto font-medium">
            A sacred space for inner transformation, guided by the visionary leadership of Arawindhan Ji.
          </p>
        </div>
      </section>

      {/* Founder Section */}
      <Founder />

      {/* Community Section */}
      <Community />

      {/* Milestones & Achievements */}
      <Achievements />
    </motion.div>
  );
}
