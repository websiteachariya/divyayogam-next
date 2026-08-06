import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Sparkles, Maximize2, ArrowRight } from 'lucide-react';

export default function Gallery() {
  const images = [
    { src: '/images/gal-1.webp', title: 'Sacred Evening Satsang' },
    { src: '/images/gal-2.webp', title: 'Meditation & Peace Gathering' },
    { src: '/images/011A6549.webp', title: 'Ji Address to Seekers' },
    { src: '/images/011A6598.webp', title: 'Deep Dhyana Practice' },
    { src: '/images/gallery1.webp', title: 'Group Organ Revitalization' },
    { src: '/images/gallery2.webp', title: 'Candle Light Harmony' },
  ];

  return (
    <section className="py-24 bg-[#FBF8F1] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full royal-gold-badge text-xs uppercase tracking-wider font-bold">
            <Sparkles className="w-3.5 h-3.5 text-[#B68A3D]" />
            Visual Memories
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#12372A]">
            Sacred <span className="text-[#B68A3D]">Gallery</span>
          </h2>
          <p className="text-[#423629] text-base font-light">
            Glimpses of spiritual retreats, community celebrations, and divine moments.
          </p>
        </div>

        {/* Masonry-Style Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="relative group rounded-3xl overflow-hidden glass-card border-2 border-[#E2D8C3] aspect-[4/3] shadow-lg bg-white"
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
                  Divya Yogam Gathering
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View Full Gallery Button */}
        <div className="mt-16 text-center">
          <Link
            to="/gallery"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#B68A3D] to-[#D0AD5C] hover:from-[#9C6E28] hover:to-[#C49E4B] text-[#0C2B21] font-bold text-sm shadow-md hover:scale-105 transition-all duration-300"
          >
            <span>Explore Full Photo Gallery</span>
            <ArrowRight className="w-4 h-4 text-[#0C2B21]" />
          </Link>
        </div>

      </div>
    </section>
  );
}
