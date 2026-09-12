'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Milestone, Sparkles, Globe, HeartPulse, Compass, Sun, Leaf, UploadCloud } from 'lucide-react';

export default function Gallery() {
  const images = [
    { src: '/images/gal-1.webp', title: 'Sacred Evening Satsang' },
    { src: '/images/gal-2.webp', title: 'Meditation & Peace Gathering' },
    { src: '/images/011A6549.webp', title: 'Ji Address to Seekers' },
  ];

  const milestones = [
    { year: '2012', desc: 'International programs & global movement launched.', icon: Compass, href: '/about' },
    { year: '2016', desc: 'Meditation centers & retreats established.', icon: Sun, href: '/vision' },
    { year: '2020', desc: '50,000+ seekers & lives transformed globally.', icon: Globe, href: '/transformation' },
    { year: '2026', desc: 'Holistic awakening & digital spiritual outreach.', icon: HeartPulse, href: '/events' },
  ];

  return (
    <section className="py-8 sm:py-12 lg:py-14 relative overflow-hidden font-body bg-[#FAF4EB]">
      
      {/* Full Section Background Image (con-1.webp) */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <Image
          src="/images/con-1.webp"
          alt="Gallery Section Background Frame"
          fill
          className="object-cover object-center"
        />
      </div>

      {/* Background Golden Floral Vine Left (deco-19.webp) */}
      <div className="absolute bottom-0 -left-24 sm:-left-36 lg:-left-44 xl:-left-52 pointer-events-none hidden lg:block w-[300px] sm:w-[380px] lg:w-[440px] h-[480px] sm:h-[580px] lg:h-[660px] opacity-35 z-0">
        <Image
          src="/images/deco-19.webp"
          alt="Golden Floral Vine Left Watermark"
          fill
          className="object-contain object-bottom drop-shadow-[0_0_15px_rgba(223,196,122,0.3)]"
        />
      </div>

      {/* Background Golden Floral Vine Right (deco-20.webp) */}
      <div className="absolute bottom-0 -right-24 sm:-right-36 lg:-right-44 xl:-right-52 pointer-events-none hidden lg:block w-[300px] sm:w-[380px] lg:w-[440px] h-[480px] sm:h-[580px] lg:h-[660px] opacity-35 z-0">
        <Image
          src="/images/deco-20.webp"
          alt="Golden Floral Vine Right Watermark"
          fill
          className="object-contain object-bottom drop-shadow-[0_0_15px_rgba(223,196,122,0.3)]"
          priority
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Column: Sacred Gallery */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full royal-gold-badge text-[11px] uppercase tracking-widest font-semibold">
                SACRED GALLERY
              </div>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#352043]">
                Sacred <span className="text-[#C8A34A]">Gallery</span>
              </h2>
              <p className="text-[#8A8394] text-xs font-light">
                Moments of love, devotion and togetherness.
              </p>
            </div>

            {/* Gallery Image Preview Cards */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { src: '/images/0I5A6612.webp', title: 'Inner Silence' },
                { src: '/images/191A4490.webp', title: 'Harmony' },
                { src: '/images/2D7A0617.webp', title: "Nature's Grace" },
              ].map((img, idx) => (
                <Link
                  key={idx}
                  href="/gallery"
                  className="relative group rounded-2xl overflow-hidden luxury-card border-2 border-[#DFC47A]/60 aspect-[4/3] shadow-md bg-[#2B1439] block"
                >
                  <Image
                    src={img.src}
                    alt={img.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />
                  <div className="absolute bottom-2 left-2 right-2 z-10 text-center">
                    <span className="text-[10px] sm:text-xs font-bold text-[#DFC47A] group-hover:text-white transition-colors truncate block">
                      {img.title}
                    </span>
                  </div>
                </Link>
              ))}
            </div>

            <div>
              <Link
                href="/gallery"
                className="inline-flex items-center gap-2 px-5 py-2 sm:px-5.5 sm:py-2.5 rounded-full bg-[#47206A] hover:bg-[#C8A34A] text-white hover:text-[#47206A] font-semibold text-[11px] sm:text-xs uppercase tracking-wider shadow-md hover:scale-105 transition-all duration-300 group"
              >
                <span>View Full Gallery</span>
                <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#DFC47A] group-hover:text-[#47206A]" />
              </Link>
            </div>
          </motion.div>

          {/* Right Column: Key Milestones */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full royal-gold-badge text-[11px] uppercase tracking-widest font-semibold">
                KEY MILESTONES
              </div>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#352043]">
                Key <span className="text-[#C8A34A]">Milestones</span>
              </h2>
              <p className="text-[#8A8394] text-xs font-light">
                Milestones in our journey of service and transformation.
              </p>
            </div>

            {/* Timeline List with Interactive Links */}
            <div className="space-y-4 relative border-l-2 border-[#C8A34A] ml-6 pl-7 py-2" suppressHydrationWarning>
              {milestones.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div key={idx} className="relative group flex items-center">
                    {/* Circular Icon Badge on Vertical Line */}
                    <div className="absolute -left-[50px] top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-[#352043] border-2 border-[#C8A34A] flex items-center justify-center text-[#DFC47A] shadow-md group-hover:scale-110 group-hover:bg-[#C8A34A] group-hover:text-[#352043] transition-all duration-300 z-10 shrink-0">
                      <IconComponent className="w-5 h-5" />
                    </div>

                    {/* Luxury White Pill Card wrapped in Link */}
                    <Link
                      href={item.href}
                      className="w-full bg-white px-5 sm:px-6 py-3.5 rounded-2xl sm:rounded-full border border-[#E9DED3] flex items-center justify-between shadow-sm group-hover:border-[#DFC47A] group-hover:shadow-md transition-all duration-300"
                    >
                      <span className="font-heading text-sm sm:text-base font-bold text-[#C8A34A] w-16 shrink-0">
                        {item.year}
                      </span>
                      <span className="text-[#5E5865] text-xs sm:text-sm font-light flex-1 pl-2 group-hover:text-[#47206A] transition-colors">
                        {item.desc}
                      </span>
                      <ArrowRight className="w-4 h-4 text-[#DFC47A] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    </Link>
                  </div>
                );
              })}
            </div>

            <div>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-5 py-2 sm:px-5.5 sm:py-2.5 rounded-full bg-[#47206A] hover:bg-[#C8A34A] text-white hover:text-[#47206A] font-semibold text-[11px] sm:text-xs uppercase tracking-wider shadow-md hover:scale-105 transition-all duration-300 group"
              >
                <Leaf className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#DFC47A] group-hover:text-[#47206A] transition-colors" />
                <span>Our Journey</span>
                <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#DFC47A] group-hover:text-[#47206A] transition-colors" />
              </Link>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
