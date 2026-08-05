import { motion } from 'framer-motion';
import { Sparkles, Sun, Moon, Zap, ShieldCheck, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function QuantumHabits() {
  const habitRoutines = [
    {
      time: '04:30 AM - 06:00 AM',
      title: 'Brahma Muhurta Awakening',
      icon: Sun,
      desc: 'Wake up during the ambrosial hours when cosmic energy is pristine. Practice 15 minutes of silent Dhyana and Gratitude.',
    },
    {
      time: '07:00 AM - 08:00 AM',
      title: 'Prana & Solar Activation',
      icon: Zap,
      desc: 'Activate core circulation through gentle Surya Namaskar postures, breath retention, and hydrating pure water.',
    },
    {
      time: '01:00 PM - 02:00 PM',
      title: 'Midday Conscious Pause',
      icon: ShieldCheck,
      desc: 'Pause for 5 minutes of deep organ breathwork before meals to harmonize digestion and release work-related tension.',
    },
    {
      time: '09:00 PM - 10:00 PM',
      title: 'Evening Gratitude & Digital Detox',
      icon: Moon,
      desc: 'Disconnect screens 1 hour prior to sleep. Perform evening organ meditation to seal the day with peace.',
    },
  ];

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
            Conscious Daily Living
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Sacred <span className="text-[#DFC27D]">Quantum Habits</span>
          </h1>

          <p className="text-[#F7F3EA] text-base sm:text-lg font-garamond italic max-w-2xl mx-auto font-medium">
            "Micro-actions performed with heightened conscious intent yield macro spiritual transformations."
          </p>
        </div>
      </section>

      {/* Daily Routine Schedule */}
      <section className="py-24 bg-[#FAF6EE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#43175F]">
              The Ideal <span className="gold-gradient-text">Daily Ritual Loop</span>
            </h2>
            <p className="text-[#5C5368] text-base font-light">
              Aligning your modern lifestyle with ancient Vedic Dinacharya rhythms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {habitRoutines.map((routine, idx) => {
              const IconComponent = routine.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="glass-card glass-card-hover rounded-3xl p-8 border-2 border-[#E7DCC7] flex flex-col justify-between group shadow-lg"
                >
                  <div className="space-y-4">
                    <span className="px-3 py-1 rounded-full royal-gold-badge text-[11px] font-bold uppercase tracking-wider block w-fit">
                      {routine.time}
                    </span>

                    <div className="w-12 h-12 rounded-2xl bg-[#F5EFE4] border border-[#DDD3C3] flex items-center justify-center text-[#5E2A84] group-hover:scale-110 transition-transform shadow-sm">
                      <IconComponent className="w-6 h-6 text-[#5E2A84]" />
                    </div>

                    <h3 className="font-serif text-xl font-bold text-[#5E2A84] group-hover:text-[#7B3FA4] transition-colors">
                      {routine.title}
                    </h3>

                    <p className="text-[#5C5368] text-xs sm:text-sm font-light leading-relaxed">
                      {routine.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="pt-12 text-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#C8A248] to-[#DFC27D] hover:from-[#B88F30] hover:to-[#D5B561] text-white font-bold text-sm shadow-[0_15px_40px_rgba(200,162,72,0.25)] hover:scale-105 transition-all duration-300"
            >
              <span>Join Quantum Habits Mentorship</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </Link>
          </div>

        </div>
      </section>
    </motion.div>
  );
}
