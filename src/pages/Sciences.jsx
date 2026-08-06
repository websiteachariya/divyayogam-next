import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import Science from '../components/Science';

export default function Sciences() {
  const koshas = [
    {
      name: 'Annamaya Kosha',
      title: 'Physical Food Sheath',
      desc: 'The physical vessel nourished by food, posture (Asana), clean water, and conscious rest.',
    },
    {
      name: 'Pranamaya Kosha',
      title: 'Vital Energy Sheath',
      desc: 'The subtle life force flow regulated through Pranayama breathwork and energetic alignment.',
    },
    {
      name: 'Manomaya Kosha',
      title: 'Mental & Emotional Sheath',
      desc: 'The psychological realm of thoughts, desires, and emotional patterns calmed by Dhyana.',
    },
    {
      name: 'Vijnanamaya Kosha',
      title: 'Wisdom & Intuition Sheath',
      desc: 'The higher intellect and intuitive discernment awakened through self-inquiry and mantra resonance.',
    },
    {
      name: 'Anandamaya Kosha',
      title: 'Bliss Sheath',
      desc: 'The innermost core of pure unconditioned joy, peace, and oneness with divine grace.',
    },
  ];

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
        
        {/* Background Sacred Geometry SVG Overlay */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10 pointer-events-none">
          <svg width="450" height="450" viewBox="0 0 100 100" fill="none" stroke="#D0AD5C" strokeWidth="0.8">
            <circle cx="50" cy="50" r="45" />
            <polygon points="50,5 90,75 10,75" />
            <polygon points="50,95 90,25 10,25" />
            <circle cx="50" cy="50" r="25" />
          </svg>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full royal-gold-badge text-xs font-bold uppercase tracking-wider shadow-md">
            <Sparkles className="w-3.5 h-3.5 text-[#B68A3D]" />
            Vedic Neuroscience & Energy
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            The Sacred <span className="text-[#D0AD5C]">Sciences</span>
          </h1>

          <p className="text-[#FBF8F1] text-base sm:text-lg font-garamond italic max-w-2xl mx-auto font-medium">
            Unveiling the multidimensional nature of human existence through Pancha Kosha, Chakras, and Organ Vitality.
          </p>
        </div>
      </section>

      <Science />

      {/* Pancha Kosha Deep Dive */}
      <section className="py-24 bg-[#FBF8F1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#12372A]">
              The 5 Sheaths of Existence <span className="text-[#B68A3D]">(Pancha Kosha)</span>
            </h2>
            <p className="text-[#423629] text-base font-light">
              According to ancient Vedic scriptures, human consciousness operates through 5 distinct subtle layers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {koshas.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="glass-card glass-card-hover rounded-3xl p-6 border-2 border-[#E2D8C3] flex flex-col justify-between shadow-lg bg-white"
              >
                <div>
                  <span className="text-[#B68A3D] font-serif font-bold text-xl block mb-1">
                    0{idx + 1}
                  </span>
                  <h3 className="font-serif text-lg font-bold text-[#12372A] mb-1">
                    {item.name}
                  </h3>
                  <p className="text-xs font-bold uppercase text-[#B68A3D] tracking-wider mb-3">
                    {item.title}
                  </p>
                  <p className="text-[#423629] text-xs font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

    </motion.div>
  );
}
