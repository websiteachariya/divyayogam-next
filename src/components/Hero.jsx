import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Sparkles, Compass } from 'lucide-react';

export default function Hero() {
  const floatingNav = [
    { label: 'Meditate', icon: Sparkles },
    { label: 'Wisdom', icon: Compass },
    { label: 'Heal', icon: Sparkles },
    { label: 'Transform', icon: Compass },
  ];

  return (
    <section className="relative min-h-[85vh] sm:min-h-[92vh] flex flex-col justify-center pt-28 pb-12 overflow-hidden bg-[#FBF8F1]">
      
      {/* Full-Bleed Background Image Layer with him.png */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none overflow-hidden">
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-[75%_center] bg-no-repeat transition-all duration-700"
          style={{ backgroundImage: "url('/images/him.png')" }}
        />
        {/* Soft Sandal Gradient Backdrop on the Left for Pristine Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FBF8F1] via-[#FBF8F1]/80 sm:via-[#FBF8F1]/60 to-transparent z-10" />
      </div>

      {/* Right Vertical Floating Widget */}
      <div className="hidden md:flex fixed right-6 top-1/2 -translate-y-1/2 z-30 flex-col gap-5 p-3 rounded-full bg-white/90 backdrop-blur-md border border-[#E2D8C3] shadow-xl">
        {floatingNav.map((item, idx) => {
          const IconComponent = item.icon;
          return (
            <button
              key={idx}
              className="flex flex-col items-center gap-1 group transition-all"
              title={item.label}
            >
              <div className="w-10 h-10 rounded-full bg-[#FBF8F1] border border-[#E2D8C3] flex items-center justify-center text-[#B68A3D] group-hover:bg-[#12372A] group-hover:text-white transition-all shadow-sm">
                <IconComponent className="w-4 h-4" />
              </div>
              <span className="text-[10px] font-bold text-[#786B5A] group-hover:text-[#12372A]">
                {item.label}
              </span>
            </button>
          );
        })}
      </div>

      {/* Hero Content Left */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full flex-1 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center my-auto">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 space-y-6 text-center lg:text-left pt-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full royal-gold-badge text-xs uppercase tracking-wider font-bold shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#B68A3D]" />
              DIVINE WITHIN
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#12372A] leading-[1.15]">
              Awaken Your <br />
              <span className="text-[#B68A3D]">Higher Spirit</span>
            </h1>

            <p className="text-[#423629] text-base sm:text-lg font-light leading-relaxed max-w-lg mx-auto lg:mx-0">
              Discover the profound stillness, sacred energy, and eternal peace that resides within you.
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <Link
                to="/practices"
                className="px-8 py-4 rounded-full bg-[#12372A] hover:bg-[#0C2B21] text-white font-bold text-sm shadow-[0_15px_35px_rgba(18,55,42,0.2)] hover:scale-105 transition-all duration-300 flex items-center gap-2"
              >
                <span>Begin Your Journey</span>
                <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-xs">→</span>
              </Link>

              <Link
                to="/sciences"
                className="px-8 py-4 rounded-full bg-white border-2 border-[#E2D8C3] hover:border-[#B68A3D] text-[#12372A] font-bold text-sm shadow-md hover:scale-105 transition-all duration-300 flex items-center gap-2"
              >
                <Compass className="w-4 h-4 text-[#B68A3D]" />
                <span>Explore Teachings</span>
              </Link>
            </div>
          </motion.div>

        </div>
      </div>

    </section>
  );
}
