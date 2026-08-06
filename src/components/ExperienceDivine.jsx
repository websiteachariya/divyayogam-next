import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function ExperienceDivine() {
  return (
    <section className="relative py-20 overflow-hidden bg-[#12372A] text-white flex items-center justify-center border-y border-[rgba(208,173,92,0.3)]">
      {/* Background Subtle Lotus Mandala Vector Outline on Left */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 opacity-15 pointer-events-none hidden lg:block">
        <svg width="320" height="320" viewBox="0 0 100 100" fill="none" stroke="#D0AD5C" strokeWidth="1">
          <circle cx="50" cy="50" r="45" />
          <circle cx="50" cy="50" r="35" strokeDasharray="2 2" />
          <path d="M50 5 C60 25 75 40 95 50 C75 60 60 75 50 95 C40 75 25 60 5 50 C25 40 40 25 50 5 Z" />
          <path d="M50 15 C57 30 70 43 85 50 C70 57 57 70 50 85 C43 70 30 57 15 50 C30 43 43 30 50 15 Z" />
        </svg>
      </div>

      {/* Right Side Glowing Candle Decorative Feature matching Reference UI */}
      <div className="absolute right-0 top-0 bottom-0 w-1/3 overflow-hidden opacity-40 pointer-events-none hidden md:block">
        <img
          src="/images/gal-2.webp"
          alt="Candlelight meditation"
          className="w-full h-full object-cover filter brightness-110"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#12372A] via-[#12372A]/70 to-transparent" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center py-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <span className="font-serif text-5xl sm:text-6xl text-[#D0AD5C] opacity-80 block leading-none">
            “
          </span>

          <blockquote className="font-serif text-2xl sm:text-4xl text-[#FBF8F1] italic font-semibold leading-relaxed drop-shadow-md">
            Yoga is the journey of the self, <br className="hidden sm:inline" />
            through the self, to the self.
          </blockquote>

          <div className="pt-2">
            <p className="text-sm font-bold tracking-widest text-[#D0AD5C] uppercase">
              — The Bhagavad Gita
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
