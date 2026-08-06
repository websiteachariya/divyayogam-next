import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function OrganMeditation() {
  const organs = [
    {
      name: 'Heart Meditation',
      element: 'Fire & Divine Love',
      emotion: 'Transforms grief into radiant joy & unconditional love',
      desc: 'Connects your awareness with the cardiac field, cleansing emotional stress and promoting peaceful circulation.',
      img: '/images/organ-heart.png',
    },
    {
      name: 'Kidneys Meditation',
      element: 'Water & Vital Essence',
      emotion: 'Releases deep-seated fear & revives willpower',
      desc: 'Nourishes the adrenal glands and kidney meridian, storing vital jing energy and restoring deep resilience.',
      img: '/images/organ-kidneys.png',
    },
    {
      name: 'Liver Meditation',
      element: 'Wood & Inner Harmony',
      emotion: 'Transmutes anger and tension into kindness & vision',
      desc: 'Purifies the liver and gallbladder, smoothing the flow of prana throughout the physical body.',
      img: '/images/organ-liver.png',
    },
    {
      name: 'Lungs Meditation',
      element: 'Metal & Cosmic Breath',
      emotion: 'Dissolves sadness and evokes courage & clarity',
      desc: 'Enhances pulmonary capacity, cellular oxygenation, and energetic immunity against seasonal ailments.',
      img: '/images/organ-lungs.png',
    },
    {
      name: 'Spleen Meditation',
      element: 'Earth & Grounded Stability',
      emotion: 'Relieves chronic worry and establishes mental stillness',
      desc: 'Harmonizes digestive power, blood filtration, and grounding energy in the solar plexus.',
      img: '/images/organ-spleen.png',
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
        
        {/* Background SVG Lotus Overlay */}
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
            Cellular Rejuvenation Science
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Scientific <span className="text-[#D0AD5C]">Organ Meditation</span>
          </h1>

          <p className="text-[#FBF8F1] text-base sm:text-lg font-garamond italic max-w-2xl mx-auto font-medium">
            Directing conscious breath, sound frequency, and loving awareness into vital internal organs to eliminate toxic emotion and restore health.
          </p>
        </div>
      </section>

      {/* Organs Section */}
      <section className="py-24 bg-[#FBF8F1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#12372A]">
              The 5 Core <span className="text-[#B68A3D]">Organ Systems</span>
            </h2>
            <p className="text-[#423629] text-base font-light">
              Each organ holds specific emotional vibrations and cellular memory. Organ meditation restores their innate balance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {organs.map((organ, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="glass-card glass-card-hover rounded-3xl p-8 border-2 border-[#E2D8C3] flex flex-col justify-between group shadow-lg bg-white"
              >
                <div className="space-y-6">
                  <div className="relative w-28 h-28 mx-auto flex items-center justify-center p-2 rounded-2xl bg-[#FBF8F1] border border-[#E2D8C3] group-hover:scale-110 transition-transform shadow-sm">
                    <img
                      src={organ.img}
                      alt={organ.name}
                      className="w-full h-full object-contain filter drop-shadow-[0_0_8px_rgba(208,173,92,0.3)]"
                    />
                  </div>

                  <div className="text-center space-y-2">
                    <span className="px-3 py-1 rounded-full royal-gold-badge text-[11px] font-bold uppercase tracking-wider">
                      {organ.element}
                    </span>

                    <h3 className="font-serif text-2xl font-bold text-[#12372A]">
                      {organ.name}
                    </h3>
                  </div>

                  <p className="text-[#423629] text-sm font-light leading-relaxed text-center">
                    {organ.desc}
                  </p>

                  <div className="p-3 rounded-xl bg-[#FFFDF8] border border-[#E2D8C3] text-xs text-[#12372A] font-semibold flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#B68A3D] shrink-0" />
                    <span>{organ.emotion}</span>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-[#E2D8C3] text-center">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#B68A3D] hover:text-[#12372A] transition-colors"
                  >
                    <span>Practice Organ Meditation</span>
                    <ArrowRight className="w-4 h-4 text-[#B68A3D]" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>
    </motion.div>
  );
}
