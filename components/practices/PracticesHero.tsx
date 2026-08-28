'use client';

import { motion } from 'framer-motion';

export default function PracticesHero() {
  return (
    <header className="relative bg-[#1A072A] text-white overflow-hidden pt-28 sm:pt-32 lg:pt-36 pb-12 sm:pb-16 lg:pb-20 flex flex-col items-center justify-center text-center font-body">
      
      {/* Top-Left Sacred Geometry Lotus Star SVG */}
      <div className="absolute top-6 left-4 sm:left-8 opacity-30 pointer-events-none hidden md:block z-0">
        <svg width="240" height="240" viewBox="0 0 200 200" fill="none" stroke="#DFC47A">
          <circle cx="100" cy="100" r="90" strokeWidth="0.5" strokeDasharray="3 3" />
          <circle cx="100" cy="100" r="60" strokeWidth="0.5" />
          <g strokeWidth="0.6">
            <path d="M100,30 L100,170 M30,100 L170,100 M50,50 L150,150 M50,150 L150,50" />
            <polygon points="100,40 150,130 50,130" strokeWidth="0.5" />
            <polygon points="100,160 150,70 50,70" strokeWidth="0.5" />
          </g>
          <circle cx="100" cy="100" r="12" fill="rgba(223,196,122,0.12)" strokeWidth="0.6" />
        </svg>
      </div>

      {/* Top-Right Sacred Geometry Lotus Star SVG */}
      <div className="absolute top-6 right-4 sm:right-8 opacity-30 pointer-events-none hidden md:block z-0">
        <svg width="240" height="240" viewBox="0 0 200 200" fill="none" stroke="#DFC47A">
          <circle cx="100" cy="100" r="90" strokeWidth="0.5" strokeDasharray="3 3" />
          <circle cx="100" cy="100" r="60" strokeWidth="0.5" />
          <g strokeWidth="0.6">
            <path d="M100,30 L100,170 M30,100 L170,100 M50,50 L150,150 M50,150 L150,50" />
            <polygon points="100,40 150,130 50,130" strokeWidth="0.5" />
            <polygon points="100,160 150,70 50,70" strokeWidth="0.5" />
          </g>
          <circle cx="100" cy="100" r="12" fill="rgba(223,196,122,0.12)" strokeWidth="0.6" />
        </svg>
      </div>

      {/* Left Center Sacred Geometry Mandala SVG */}
      <div className="absolute top-1/2 -left-20 lg:-left-24 -translate-y-1/2 opacity-45 pointer-events-none hidden md:block z-0">
        <svg width="460" height="460" viewBox="0 0 200 200" fill="none" stroke="#DFC47A">
          <circle cx="100" cy="100" r="95" strokeWidth="0.75" strokeDasharray="2 2" />
          <circle cx="100" cy="100" r="85" strokeWidth="0.5" />
          <circle cx="100" cy="100" r="75" strokeWidth="0.75" />
          <g strokeWidth="0.75" opacity="0.9">
            <path d="M100,25 C115,55 115,75 100,100 C85,75 85,55 100,25 Z" fill="rgba(223,196,122,0.04)" />
            <path d="M100,175 C115,145 115,125 100,100 C85,125 85,145 100,175 Z" fill="rgba(223,196,122,0.04)" />
            <path d="M25,100 C55,115 75,115 100,100 C75,85 55,85 25,100 Z" fill="rgba(223,196,122,0.04)" />
            <path d="M175,100 C145,115 125,115 100,100 C125,85 145,85 175,100 Z" fill="rgba(223,196,122,0.04)" />
            <path d="M47,47 C70,65 80,75 100,100 C75,80 65,70 47,47 Z" fill="rgba(223,196,122,0.04)" />
            <path d="M153,47 C130,65 120,75 100,100 C125,80 135,70 153,47 Z" fill="rgba(223,196,122,0.04)" />
            <path d="M47,153 C70,135 80,125 100,100 C75,120 65,130 47,153 Z" fill="rgba(223,196,122,0.04)" />
            <path d="M153,153 C130,135 120,125 100,100 C125,120 135,130 153,153 Z" fill="rgba(223,196,122,0.04)" />
          </g>
          <polygon points="100,35 156,133 44,133" strokeWidth="0.75" />
          <polygon points="100,165 156,67 44,67" strokeWidth="0.75" />
          <circle cx="100" cy="100" r="30" strokeWidth="0.75" strokeDasharray="1.5 1.5" />
          <circle cx="100" cy="100" r="14" fill="rgba(223,196,122,0.18)" strokeWidth="0.75" />
        </svg>
      </div>

      {/* Right Center Sacred Geometry Mandala SVG */}
      <div className="absolute top-1/2 -right-20 lg:-right-24 -translate-y-1/2 opacity-45 pointer-events-none hidden md:block z-0">
        <svg width="460" height="460" viewBox="0 0 200 200" fill="none" stroke="#DFC47A">
          <circle cx="100" cy="100" r="95" strokeWidth="0.75" strokeDasharray="2 2" />
          <circle cx="100" cy="100" r="85" strokeWidth="0.5" />
          <circle cx="100" cy="100" r="75" strokeWidth="0.75" />
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

      {/* Bottom-Left Sacred Geometry Chakra SVG */}
      <div className="absolute bottom-6 left-4 sm:left-8 opacity-30 pointer-events-none hidden md:block z-0">
        <svg width="240" height="240" viewBox="0 0 200 200" fill="none" stroke="#DFC47A">
          <circle cx="100" cy="100" r="90" strokeWidth="0.5" strokeDasharray="3 3" />
          <circle cx="100" cy="100" r="65" strokeWidth="0.5" />
          <g strokeWidth="0.6">
            <path d="M100,20 L100,180 M20,100 L180,100" strokeDasharray="2 2" />
            <polygon points="100,30 160,140 40,140" strokeWidth="0.5" />
            <polygon points="100,170 160,60 40,60" strokeWidth="0.5" />
          </g>
          <circle cx="100" cy="100" r="16" fill="rgba(223,196,122,0.12)" strokeWidth="0.6" />
        </svg>
      </div>

      {/* Bottom-Right Sacred Geometry Chakra SVG */}
      <div className="absolute bottom-6 right-4 sm:right-8 opacity-30 pointer-events-none hidden md:block z-0">
        <svg width="240" height="240" viewBox="0 0 200 200" fill="none" stroke="#DFC47A">
          <circle cx="100" cy="100" r="90" strokeWidth="0.5" strokeDasharray="3 3" />
          <circle cx="100" cy="100" r="65" strokeWidth="0.5" />
          <g strokeWidth="0.6">
            <path d="M100,20 L100,180 M20,100 L180,100" strokeDasharray="2 2" />
            <polygon points="100,30 160,140 40,140" strokeWidth="0.5" />
            <polygon points="100,170 160,60 40,60" strokeWidth="0.5" />
          </g>
          <circle cx="100" cy="100" r="16" fill="rgba(223,196,122,0.12)" strokeWidth="0.6" />
        </svg>
      </div>

      {/* Center Sacred Geometry Mandala Background Overlay */}
      <div className="absolute inset-0 opacity-15 pointer-events-none flex items-center justify-center z-0">
        <svg width="650" height="650" viewBox="0 0 200 200" fill="none" stroke="#DFC47A" strokeWidth="0.5">
          <circle cx="100" cy="100" r="95" strokeDasharray="3 3" />
          <circle cx="100" cy="100" r="80" />
          <circle cx="100" cy="100" r="60" />
          <path d="M100 5 L100 195 M5 100 L195 100" strokeDasharray="2 2" />
          <polygon points="100,20 170,140 30,140" strokeWidth="0.4" />
          <polygon points="100,180 170,60 30,60" strokeWidth="0.4" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center">

        {/* Vision Eyebrow Badge */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-[#DFC47A]/50 text-[#DFC47A] text-xs font-semibold uppercase tracking-widest backdrop-blur-md shadow-md mb-4"
        >
          <span className="text-[#DFC47A]">❖</span>
          <span>SACRED PRACTICES &amp; PATHWAYS</span>
        </motion.div>

        {/* Hero Title */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-white tracking-tight"
        >
          Scientific <span className="text-[#DFC47A] italic font-serif font-normal">Spiritual Practices</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-serif italic text-base sm:text-lg text-[#F8F2E8]/90 max-w-2xl mx-auto mt-4 leading-relaxed"
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
          className="mt-14 text-center space-y-3 pb-6"
        >
          <div className="inline-block px-4 py-1 rounded-full bg-[#DFC47A]/15 border border-[#DFC47A]/30 text-[#DFC47A] text-[11px] font-semibold uppercase tracking-widest">
            OUR ASPIRATION
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Witness The <span className="text-[#DFC47A] italic font-serif">Awakening</span>
          </h2>
          <p className="font-serif italic text-base sm:text-lg text-[#F8F2E8]/90 max-w-xl mx-auto leading-relaxed">
            A world where every individual realizes their true potential and lives in harmony, peace, and higher consciousness.
          </p>
        </motion.div>

      </div>
    </header>
  );
}
