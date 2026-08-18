'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function OrganMeditationBanner() {
  return (
    <section
      className="py-12 relative z-10"
      style={{
        backgroundImage:
          "linear-gradient(rgba(250, 248, 245, 0.88), rgba(250, 248, 245, 0.88)), url('/images/bg-6.webp')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderTop: '1px solid rgba(212,175,54,0.25)',
        borderBottom: '1px solid rgba(212,175,54,0.25)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-block bg-white px-6 sm:px-8 py-4 rounded-2xl mb-6 border-2 border-[#C8A34A]/60 shadow-[0_0_20px_rgba(212,175,54,0.4)]"
        >
          <h4 className="text-xl sm:text-2xl font-heading font-semibold text-[#352043]">
            Looking for the 12 Noon <span className="gold-text font-bold">Golden Smile Meditation?</span>
          </h4>
        </motion.div>

        <div>
          <Link href="/organ-meditation" className="btn-modern-violet">
            View Organ Meditation Practice
          </Link>
        </div>
      </div>
    </section>
  );
}
