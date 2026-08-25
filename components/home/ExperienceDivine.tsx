'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function ExperienceDivine() {
  return (
    <section className="relative min-h-[45vh] sm:min-h-[55vh] flex items-center justify-center py-10 sm:py-14 lg:py-16 overflow-hidden bg-black text-white font-body">
      
      {/* Background Video Layer */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-40 pointer-events-none"
        style={{ objectPosition: 'center 25%' }}
      >
        <source
          src="https://res.cloudinary.com/y2q2jsq0/video/upload/v1782977624/R_R_0348_yuhnyk.mp4"
          type="video/mp4"
        />
      </video>



      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center py-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-[#DFC47A] leading-tight tracking-wide drop-shadow-lg">
            Experience The Divine
          </h2>

          <p className="text-white text-base sm:text-xl font-light italic leading-relaxed max-w-2xl mx-auto px-4">
            Join our sanctuary of peace. Embrace the journey of self-discovery through mindful movement, breathwork, and deep meditation, guided by ancient wisdom for modern living.
          </p>

          <div className="pt-4">
            <Link
              href="/contact"
              className="inline-block rounded-full px-5 py-2 sm:px-6 sm:py-2.5 font-bold uppercase tracking-widest text-[11px] sm:text-xs border-2 border-[#C8A34A] text-[#DFC47A] bg-black/40 hover:bg-[#C8A34A] hover:text-[#352043] transition-all duration-300 shadow-xl hover:scale-105"
            >
              Begin Your Journey
            </Link>
          </div>
        </motion.div>
      </div>

    </section>
  );
}
