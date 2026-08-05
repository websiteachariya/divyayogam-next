import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function ExperienceDivine() {
  return (
    <section className="relative py-28 overflow-hidden bg-[#43175F] flex items-center justify-center min-h-[70vh] border-y border-[rgba(223,194,125,0.18)]">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover object-[center_25%] z-0 opacity-80 filter brightness-95 scale-105"
      >
        <source
          src="https://res.cloudinary.com/y2q2jsq0/video/upload/v1782977624/R_R_0348_yuhnyk.mp4"
          type="video/mp4"
        />
      </video>

      {/* Subtle Soft Edges Fade */}
      <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#43175F] to-transparent z-0 pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#43175F] to-transparent z-0 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white mb-4 drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)]">
            Experience <span className="text-[#DFC27D]">The Divine</span>
          </h2>

          <p className="text-white text-base sm:text-xl font-garamond italic max-w-3xl mx-auto leading-relaxed font-semibold drop-shadow-[0_2px_10px_rgba(0,0,0,0.6)]">
            Join our sanctuary of peace. Embrace the journey of self-discovery through mindful movement, breathwork, and deep meditation, guided by ancient wisdom for modern living.
          </p>

          <div className="pt-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-10 py-4 rounded-full font-bold uppercase text-xs sm:text-sm tracking-widest text-white border-2 border-[#C8A248] bg-gradient-to-r from-[#C8A248] to-[#DFC27D] hover:from-[#B88F30] hover:to-[#D5B561] hover:scale-105 transition-all duration-300 shadow-2xl"
            >
              Begin Your Journey
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
