import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Maximize2, X } from 'lucide-react';

export default function GalleryPage() {
  const [selectedImg, setSelectedImg] = useState(null);

  const galleryItems = [
    { src: '/images/gal-1.webp', title: 'Global Candlelight Peace Gathering' },
    { src: '/images/gal-2.webp', title: 'Meditation & Dhyana Retreat' },
    { src: '/images/011A6549.webp', title: 'Ji Address to Seekers' },
    { src: '/images/011A6598.webp', title: 'Deep Inner Silence Session' },
    { src: '/images/gallery1.webp', title: 'Group Organ Rejuvenation' },
    { src: '/images/gallery2.webp', title: 'Sacred Evening Satsang' },
    { src: '/images/0I5A4595.webp', title: 'Vedic Chanting & Prayer' },
    { src: '/images/0I5A6471.webp', title: 'Ashram Sanctuary Atmosphere' },
    { src: '/images/0I5A6612.webp', title: 'Youth Awakening Program' },
    { src: '/images/0I5A6953.webp', title: 'Spiritual Dialogue with Ji' },
    { src: '/images/0I5A9336.webp', title: 'Morning Pranayama Class' },
    { src: '/images/about-36.webp', title: 'Mass Candlelight Meditation' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-[#FBF8F1]"
    >
      {/* Page Hero Header in Deep Emerald Green #12372A with SVG Lotus Overlay */}
      <section className="pt-28 pb-12 relative overflow-hidden bg-gradient-to-b from-[#12372A] to-[#0C2B21] text-center border-b border-[rgba(208,173,92,0.25)]">
        
        {/* Background SVG Lotus Pattern Overlay */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10 pointer-events-none">
          <svg width="450" height="450" viewBox="0 0 100 100" fill="none" stroke="#D0AD5C" strokeWidth="0.8">
            <circle cx="50" cy="50" r="45" />
            <circle cx="50" cy="50" r="32" strokeDasharray="2 2" />
            <path d="M50 5 C60 25 75 40 95 50 C75 60 60 75 50 95 C40 75 25 60 5 50 C25 40 40 25 50 5 Z" />
          </svg>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full royal-gold-badge text-xs font-bold uppercase tracking-wider shadow-md">
            <Sparkles className="w-3.5 h-3.5 text-[#B68A3D]" />
            Visual Archives
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Sacred Photo <span className="text-[#D0AD5C]">Gallery</span>
          </h1>

          <p className="text-[#FBF8F1] text-base sm:text-lg font-garamond italic max-w-2xl mx-auto font-medium">
            Glimpses of spiritual evolution, candlelight meditation gatherings, and ashram life.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-24 bg-[#FBF8F1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryItems.map((img, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.08 }}
                onClick={() => setSelectedImg(img)}
                className="relative group rounded-3xl overflow-hidden glass-card border-2 border-[#E2D8C3] aspect-[4/3] cursor-pointer shadow-lg bg-white"
              >
                <img
                  src={img.src}
                  alt={img.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-b from-[rgba(18,55,42,0)] to-[rgba(18,55,42,0.85)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-end">
                  <p className="font-serif text-lg font-bold text-[#D0AD5C]">
                    {img.title}
                  </p>
                  <p className="text-xs text-[#FBF8F1] font-medium flex items-center gap-1 mt-1">
                    <Maximize2 className="w-3.5 h-3.5 text-[#D0AD5C]" />
                    Click to enlarge
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImg(null)}
            className="fixed inset-0 z-[100] bg-black/85 backdrop-blur-xl flex items-center justify-center p-4"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full bg-[#FBF8F1] rounded-3xl p-4 border-2 border-[#B68A3D] overflow-hidden shadow-2xl"
            >
              <button
                onClick={() => setSelectedImg(null)}
                aria-label="Close image"
                className="absolute top-4 right-4 p-2 rounded-full bg-[#B68A3D] hover:bg-[#9C6E28] text-[#0C2B21] transition-colors z-10 shadow-md font-bold"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="rounded-2xl overflow-hidden aspect-[16/10]">
                <img
                  src={selectedImg.src}
                  alt={selectedImg.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-4 text-center">
                <h3 className="font-serif text-xl font-bold text-[#12372A]">
                  {selectedImg.title}
                </h3>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
