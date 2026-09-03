'use client';

import { motion } from 'framer-motion';

export default function AwakeningVideo() {
  return (
    <section className="py-8 sm:py-10 lg:py-12 bg-white relative overflow-hidden font-body">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Eye-catching Player Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative max-w-5xl mx-auto"
        >
          {/* Glowing aura behind */}
          <div
            className="absolute inset-0 rounded-3xl pointer-events-none"
            style={{ boxShadow: '0 0 100px rgba(212,175,54,0.25)', zIndex: 0 }}
          />

          <div
            className="relative z-10 aspect-video rounded-3xl overflow-hidden bg-black video-container-hover"
            style={{
              border: '2px solid rgba(212,175,54,0.6)',
              boxShadow: '0 15px 35px rgba(0,0,0,0.3)',
            }}
          >
            <video
              controls
              autoPlay
              loop
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

        {/* Video Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center max-w-3xl mx-auto mt-12 space-y-3"
        >
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#352043] tracking-wide leading-tight">
            Witness The <span className="italic text-[#C8A34A] filter drop-shadow-[0_1px_2px_rgba(0,0,0,0.1)]">Awakening</span>
          </h2>
          <p className="text-[#4a4a4a] text-lg sm:text-xl font-serif italic max-w-2xl mx-auto leading-relaxed">
            A cinematic glimpse into the profound stillness, infinite grace, and transformative power of our sacred practices.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
