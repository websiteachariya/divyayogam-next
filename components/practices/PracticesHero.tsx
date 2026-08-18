'use client';

import { motion } from 'framer-motion';

export default function PracticesHero() {
  return (
    <section
      className="relative bg-cover bg-center text-white overflow-hidden pt-28 pb-24"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(71, 32, 106, 0.9) 0%, rgba(53, 32, 67, 0.92) 60%, rgba(43, 20, 62, 0.95) 100%), url('/images/bg-6.webp')",
      }}
    >
      
      {/* Background Sacred Geometry Line Art (Left & Right Mandalas) */}
      <div className="absolute top-8 -left-12 opacity-35 pointer-events-none hidden md:block">
        <svg width="380" height="380" viewBox="0 0 200 200" fill="none" stroke="#DFC47A">
          <circle cx="100" cy="100" r="95" strokeWidth="0.75" strokeDasharray="2 2" />
          <circle cx="100" cy="100" r="85" strokeWidth="0.5" />
          <circle cx="100" cy="100" r="75" strokeWidth="0.75" />

          {/* Intricate 12-Petal Sacred Lotus */}
          <g strokeWidth="0.75" opacity="0.9">
            <path d="M100,25 C115,55 115,75 100,100 C85,75 85,55 100,25 Z" fill="rgba(223,196,122,0.03)" />
            <path d="M100,175 C115,145 115,125 100,100 C85,125 85,145 100,175 Z" fill="rgba(223,196,122,0.03)" />
            <path d="M25,100 C55,115 75,115 100,100 C75,85 55,85 25,100 Z" fill="rgba(223,196,122,0.03)" />
            <path d="M175,100 C145,115 125,115 100,100 C125,85 145,85 175,100 Z" fill="rgba(223,196,122,0.03)" />

            <path d="M47,47 C70,65 80,75 100,100 C75,80 65,70 47,47 Z" fill="rgba(223,196,122,0.03)" />
            <path d="M153,47 C130,65 120,75 100,100 C125,80 135,70 153,47 Z" fill="rgba(223,196,122,0.03)" />
            <path d="M47,153 C70,135 80,125 100,100 C75,120 65,130 47,153 Z" fill="rgba(223,196,122,0.03)" />
            <path d="M153,153 C130,135 120,125 100,100 C125,120 135,130 153,153 Z" fill="rgba(223,196,122,0.03)" />
          </g>

          <polygon points="100,35 156,133 44,133" strokeWidth="0.75" />
          <polygon points="100,165 156,67 44,67" strokeWidth="0.75" />
          <circle cx="100" cy="100" r="30" strokeWidth="0.75" strokeDasharray="1.5 1.5" />
          <circle cx="100" cy="100" r="14" fill="rgba(223,196,122,0.15)" strokeWidth="0.75" />
        </svg>
      </div>

      <div className="absolute top-8 -right-12 opacity-35 pointer-events-none hidden md:block">
        <svg width="380" height="380" viewBox="0 0 200 200" fill="none" stroke="#DFC47A">
          <circle cx="100" cy="100" r="95" strokeWidth="0.75" strokeDasharray="2 2" />
          <circle cx="100" cy="100" r="85" strokeWidth="0.5" />
          <circle cx="100" cy="100" r="75" strokeWidth="0.75" />

          {/* Intricate 12-Petal Sacred Lotus */}
          <g strokeWidth="0.75" opacity="0.9">
            <path d="M100,25 C115,55 115,75 100,100 C85,75 85,55 100,25 Z" fill="rgba(223,196,122,0.03)" />
            <path d="M100,175 C115,145 115,125 100,100 C85,125 85,145 100,175 Z" fill="rgba(223,196,122,0.03)" />
            <path d="M25,100 C55,115 75,115 100,100 C75,85 55,85 25,100 Z" fill="rgba(223,196,122,0.03)" />
            <path d="M175,100 C145,115 125,115 100,100 C125,85 145,85 175,100 Z" fill="rgba(223,196,122,0.03)" />

            <path d="M47,47 C70,65 80,75 100,100 C75,80 65,70 47,47 Z" fill="rgba(223,196,122,0.03)" />
            <path d="M153,47 C130,65 120,75 100,100 C125,80 135,70 153,47 Z" fill="rgba(223,196,122,0.03)" />
            <path d="M47,153 C70,135 80,125 100,100 C75,120 65,130 47,153 Z" fill="rgba(223,196,122,0.03)" />
            <path d="M153,153 C130,135 120,125 100,100 C125,120 135,130 153,153 Z" fill="rgba(223,196,122,0.03)" />
          </g>

          <polygon points="100,35 156,133 44,133" strokeWidth="0.75" />
          <polygon points="100,165 156,67 44,67" strokeWidth="0.75" />
          <circle cx="100" cy="100" r="30" strokeWidth="0.75" strokeDasharray="1.5 1.5" />
          <circle cx="100" cy="100" r="14" fill="rgba(223,196,122,0.15)" strokeWidth="0.75" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Vision Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-block px-4 py-1.5 rounded-full bg-[#DFC47A]/20 border border-[#DFC47A]/40 text-[#DFC47A] text-xs font-semibold uppercase tracking-widest mb-4 shadow-sm"
        >
          VISION
        </motion.div>

        {/* Hero Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white"
        >
          Scientific <span className="text-[#DFC47A] italic font-serif">Spiritual Practices</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[#E9DED3] text-base sm:text-lg max-w-2xl mx-auto mt-4 font-light leading-relaxed font-body"
        >
          To elevate human consciousness through scientific spiritual practices for the wellbeing of all life in the world.
        </motion.p>

        {/* Eye-Catching Video Player Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-10 max-w-4xl mx-auto relative"
        >
          {/* Glowing Aura behind player */}
          <div
            className="absolute inset-0 rounded-3xl pointer-events-none"
            style={{ boxShadow: '0 0 90px rgba(200,163,74,0.35)', zIndex: 0 }}
          />

          <div className="relative z-10 aspect-video rounded-3xl overflow-hidden bg-black border-2 border-[#C8A34A] shadow-[0_25px_60px_rgba(0,0,0,0.6)] video-container-hover">
            <video
              controls
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source
                src="https://res.cloudinary.com/y2q2jsq0/video/upload/v1783502864/Dji_0013_drswx1.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </motion.div>

        {/* Witness The Awakening Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 text-center space-y-3 pb-8"
        >
          <div className="inline-block px-4 py-1 rounded-full bg-[#DFC47A]/15 border border-[#DFC47A]/30 text-[#DFC47A] text-[11px] font-semibold uppercase tracking-widest">
            OUR ASPIRATION
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Witness The <span className="text-[#DFC47A] italic font-serif">Awakening</span>
          </h2>
          <p className="text-[#E9DED3] text-base sm:text-lg max-w-xl mx-auto font-light leading-relaxed font-body">
            A world where every individual realizes their true potential and lives in harmony, peace, and higher consciousness.
          </p>
        </motion.div>

      </div>

      {/* Smooth Downward Curved Arch Transition */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-10 pointer-events-none">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-12 text-[#FDFBF7]"
          fill="currentColor"
        >
          <path d="M0,0 C300,70 900,70 1200,0 L1200,120 L0,120 Z" />
        </svg>
      </div>
    </section>
  );
}
