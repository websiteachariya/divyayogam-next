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
      className="bg-[#FAF6EE]"
    >
      {/* Page Hero Header in Dark Purple #43175F */}
      <section className="pt-28 pb-10 relative overflow-hidden bg-gradient-to-b from-[#43175F] to-[#3A124F] text-center border-b border-[rgba(223,194,125,0.18)]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#C8A248]/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full royal-gold-badge text-xs font-bold uppercase tracking-wider shadow-md">
            <Sparkles className="w-3.5 h-3.5 text-[#5E2A84]" />
            Divya Yogam · Est. 2010
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Where Ancient Wisdom <br />
            <span className="text-[#DFC27D]">Meets Modern Awakening</span>
          </h1>

          <p className="text-[#F7F3EA] text-base sm:text-lg font-garamond italic max-w-2xl mx-auto font-medium">
            A sacred space for inner transformation, guided by the visionary vision of Arawindhan Ji.
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
