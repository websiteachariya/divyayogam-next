import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Sparkles, Compass, ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden bg-[#FAF6EE]">
      {/* Background Image Layer */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center z-0 opacity-20 filter brightness-95 scale-105 transition-all duration-700"
        style={{ backgroundImage: "url('/images/bg-1.webp')" }}
      />

      {/* Background Video Fallback/Overlay */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-15 filter brightness-95 scale-105"
      >
        <source src="/images/DJI_0978.MP4" type="video/mp4" />
      </video>

      {/* Soft Ivory Ambient Lighting Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#FAF6EE] via-[#FAF6EE]/80 to-[#FAF6EE]/85 z-0 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-[900px] h-[90vw] max-h-[900px] glow-orb-purple pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[65vw] max-w-[650px] h-[65vw] max-h-[650px] glow-orb-gold pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          
          {/* Left Text Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-3 text-center lg:text-left space-y-5"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full royal-gold-badge text-xs uppercase tracking-wider font-bold">
              <Sparkles className="w-3.5 h-3.5 text-[#5E2A84] animate-pulse" />
              Path of Divine Grace
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#43175F] leading-tight">
              Awaken Your <br />
              <span className="text-[#C8A248]">Higher Spirit</span>
            </h1>

            <p className="text-[#5C5368] text-sm sm:text-base leading-relaxed font-light">
              Discover the profound stillness, sacred energy, and eternal peace that resides within you.
            </p>
          </motion.div>

          {/* Center Logo Orbit Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="lg:col-span-6 flex flex-col items-center justify-center my-4 lg:my-0"
          >
            {/* Outer Orbit Container */}
            <div className="relative w-[82vmin] h-[82vmin] min-w-[310px] min-h-[310px] max-w-[620px] max-h-[620px] sm:w-[480px] sm:h-[480px] md:w-[540px] md:h-[540px] lg:w-[620px] lg:h-[620px] flex items-center justify-center">
              
              {/* Rotating Marquee Text Ring */}
              <div className="absolute inset-0 animate-spin-slow pointer-events-none">
                <svg viewBox="0 0 200 200" className="w-full h-full">
                  <defs>
                    <path
                      id="textCircle"
                      d="M 100,100 m -75,0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
                    />
                  </defs>
                  <text
                    fontSize="4.2"
                    fill="#5E2A84"
                    letterSpacing="1.2"
                    fontWeight="800"
                    className="font-serif tracking-widest drop-shadow-sm"
                  >
                    <textPath href="#textCircle" textLength="471" lengthAdjust="spacingAndGlyphs">
                      DIVYA YOGAM &#10022; DIVINE GRACE &#10022; TRANSFORM &#10022; MEDITATION &#10022; PEACE &#10022; WISDOM &#10022; HARMONY &#10022;&nbsp;
                    </textPath>
                  </text>
                </svg>
              </div>

              {/* Orbit Rings */}
              <div className="absolute inset-2 sm:inset-3 rounded-full border-2 border-[#C8A248]/50 animate-spin-reverse-slow shadow-sm" />
              <div className="absolute inset-6 sm:inset-8 rounded-full border border-dashed border-[#5E2A84]/40 animate-spin-slow" />
              <div className="absolute inset-10 sm:inset-12 rounded-full bg-gradient-to-tr from-[#F5EFE4] via-[#C8A248]/20 to-[#F5EFE4] blur-md animate-pulse" />

              {/* Core Central Logo Image */}
              <div className="relative z-10 w-[62%] h-[62%] min-w-[190px] min-h-[190px] rounded-full p-2.5 sm:p-3 bg-gradient-to-tr from-[#C8A248] via-[#DFC27D] to-[#C8A248] shadow-[0_15px_40px_rgba(94,42,132,0.15)] hover:scale-105 transition-transform duration-500">
                <img
                  src="/images/logo.png.webp"
                  alt="Divya Yogam Emblem"
                  className="w-full h-full object-cover rounded-full border-2 border-[#C8A248] bg-white"
                />
              </div>
            </div>

            {/* Subtitle Quote below Orbit */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-6 text-center font-garamond text-xl sm:text-2xl text-[#5E2A84] italic max-w-lg font-semibold px-4"
            >
              "External success blossoms when inner fulfillment is realized."
            </motion.p>
          </motion.div>

          {/* Right Text Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-3 text-center lg:text-right space-y-5"
          >
            <div className="space-y-1.5">
              <h3 className="font-serif text-2xl lg:text-3xl font-bold text-[#43175F]">
                Arawindhan Ji
              </h3>
              <p className="text-[#C8A248] text-sm font-bold tracking-wider uppercase">
                Founder & Spiritual Guide
              </p>
            </div>
            <p className="text-[#5C5368] text-sm leading-relaxed font-light">
              Bridging timeless Vedic sciences with practical contemporary life for holistic wellness.
            </p>
            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 justify-center lg:justify-end pt-2">
              <Link
                to="/practices"
                className="px-7 py-3.5 rounded-full bg-gradient-to-r from-[#C8A248] to-[#DFC27D] hover:from-[#B88F30] hover:to-[#D5B561] text-white font-bold text-sm flex items-center justify-center gap-2 shadow-[0_15px_40px_rgba(200,162,72,0.25)] hover:scale-105 transition-all duration-300"
              >
                <Compass className="w-4 h-4 text-white" />
                Explore Practices
              </Link>
              <Link
                to="/contact"
                className="px-7 py-3.5 rounded-full bg-[#5E2A84] hover:bg-[#43175F] text-white font-bold text-sm flex items-center justify-center gap-2 transition-all duration-300 shadow-md"
              >
                Connect With Us
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Down Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-5 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-[#5E2A84] text-xs font-semibold z-10"
      >
        <span className="uppercase tracking-widest text-[10px] text-[#5E2A84] font-bold">Scroll to Explore</span>
        <ChevronDown className="w-4 h-4 animate-bounce text-[#C8A248]" />
      </motion.div>
    </section>
  );
}
