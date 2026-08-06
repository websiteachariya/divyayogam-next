import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import Transformation from '../components/Transformation';

export default function TransformationPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-[#FBF8F1]"
    >
      {/* Page Hero Header in Deep Emerald Green #12372A with SVG Lotus Overlay */}
      <section className="pt-28 pb-12 relative overflow-hidden bg-gradient-to-b from-[#12372A] to-[#0C2B21] text-center border-b border-[rgba(208,173,92,0.25)]">
        
        {/* Background SVG Lotus Pattern Overlay */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10 pointer-events-none">
          <svg width="450" height="450" viewBox="0 0 100 100" fill="none" stroke="#D0AD5C" strokeWidth="0.8">
            <circle cx="50" cy="50" r="45" />
            <circle cx="50" cy="50" r="32" strokeDasharray="2 2" />
            <path d="M50 5 C60 25 75 40 95 50 C75 60 60 75 50 95 C40 75 25 60 5 50 C25 40 40 25 50 5 Z" />
          </svg>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full royal-gold-badge text-xs font-bold uppercase tracking-wider shadow-md">
            <Sparkles className="w-3.5 h-3.5 text-[#B68A3D]" />
            Living Evidence
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Journey of <span className="text-[#D0AD5C]">Inner Transformation</span>
          </h1>

          <p className="text-[#FBF8F1] text-base sm:text-lg font-garamond italic max-w-2xl mx-auto font-medium">
            "When the inner light is rekindled, every aspect of life—health, relationships, and purpose—naturally blossoms."
          </p>
        </div>
      </section>

      {/* Main Transformation Stories Component */}
      <Transformation />
    </motion.div>
  );
}
