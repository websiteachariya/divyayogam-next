import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import VisionMission from '../components/VisionMission';
import Purpose from '../components/Purpose';

export default function Vision() {
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
        
        {/* Sacred Geometry Lotus SVG Overlay */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10 pointer-events-none">
          <svg width="450" height="450" viewBox="0 0 100 100" fill="none" stroke="#D0AD5C" strokeWidth="0.8">
            <circle cx="50" cy="50" r="42" />
            <polygon points="50,10 85,80 15,80" stroke="#D0AD5C" strokeWidth="0.6" />
            <polygon points="50,90 85,20 15,20" stroke="#D0AD5C" strokeWidth="0.6" />
            <circle cx="50" cy="50" r="15" />
          </svg>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full royal-gold-badge text-xs font-bold uppercase tracking-wider shadow-md">
            <Sparkles className="w-3.5 h-3.5 text-[#B68A3D]" />
            Sacred Blueprint
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Our Vision & <span className="text-[#D0AD5C]">Higher Purpose</span>
          </h1>

          <p className="text-[#FBF8F1] text-base sm:text-lg font-garamond italic max-w-2xl mx-auto font-medium">
            "To inspire a global awakening where physical wellness, mental peace, and spiritual bliss coalesce in every individual."
          </p>
        </div>
      </section>

      <VisionMission />
      <Purpose />
    </motion.div>
  );
}
