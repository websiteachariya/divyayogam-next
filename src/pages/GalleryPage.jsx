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
      className="bg-[#FAF6EE]"
    >
      {/* Page Hero Header in Dark Purple #43175F */}
      <section className="pt-28 pb-10 relative overflow-hidden bg-gradient-to-b from-[#43175F] to-[#3A124F] text-center border-b border-[rgba(223,194,125,0.18)]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#C8A248]/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full royal-gold-badge text-xs font-bold uppercase tracking-wider shadow-md">
            <Sparkles className="w-3.5 h-3.5 text-[#5E2A84]" />
            Visual Archives
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Sacred Photo <span className="text-[#DFC27D]">Gallery</span>
          </h1>

          <p className="text-[#F7F3EA] text-base sm:text-lg font-garamond italic max-w-2xl mx-auto font-medium">
            Glimpses of spiritual evolution, candlelight meditation gatherings, and ashram life.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-24 bg-[#FAF6EE]">
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
                className="relative group rounded-3xl overflow-hidden glass-card border-2 border-[#E7DCC7] aspect-[4/3] cursor-pointer shadow-lg"
              >
                <img
                  src={img.src}
                  alt={img.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                <div className="absolute inset-0 bg-gradient-to-b from-[rgba(67,23,95,0)] to-[rgba(67,23,95,0.75)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-end">
                  <p className="font-serif text-lg font-bold text-[#DFC27D]">
                    {img.title}
                  </p>
                  <p className="text-xs text-[#FFFDF9] font-medium flex items-center gap-1 mt-1">
                    <Maximize2 className="w-3.5 h-3.5 text-[#DFC27D]" />
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
              className="relative max-w-4xl w-full bg-[#FFFFFF] rounded-3xl p-4 border-2 border-[#C8A248] overflow-hidden shadow-2xl"
            >
              <button
                onClick={() => setSelectedImg(null)}
                aria-label="Close image"
                className="absolute top-4 right-4 p-2 rounded-full bg-[#C8A248] hover:bg-[#B88F30] text-white transition-colors z-10 shadow-md font-bold"
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
                <h3 className="font-serif text-xl font-bold text-[#43175F]">
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
