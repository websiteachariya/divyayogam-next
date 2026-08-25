'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Quote } from 'lucide-react';

export default function CorePractices() {
  const topPractices = [
    {
      title: 'Meditation',
      desc: 'Silence the mind, connect within.',
      link: '/organ-meditation',
      icon: (
        <svg viewBox="0 0 64 64" className="w-8 h-8" fill="none" stroke="#C8A34A" strokeWidth="2">
          <path d="M32 14C32 14 38 24 38 34C38 40 35 44 32 46C29 44 26 40 26 34C26 24 32 14 32 14Z" fill="rgba(200, 163, 74, 0.2)" />
          <path d="M32 24C32 24 44 28 44 38C44 44 38 46 32 46C26 46 20 44 20 38C20 28 32 24 32 24Z" />
        </svg>
      ),
    },
    {
      title: 'Pranic Energy',
      desc: 'Harness life force, elevate energy.',
      link: '/quantum-habits',
      icon: (
        <svg viewBox="0 0 64 64" className="w-8 h-8" fill="none" stroke="#C8A34A" strokeWidth="2">
          <path d="M12 32C22 18 42 46 52 32" strokeLinecap="round" />
          <path d="M12 24C22 10 42 38 52 24" opacity="0.6" strokeLinecap="round" />
          <circle cx="32" cy="32" r="4" fill="#C8A34A" />
        </svg>
      ),
    },
    {
      title: 'Yoga',
      desc: 'Unite body, mind and soul.',
      link: '/practices',
      icon: (
        <svg viewBox="0 0 64 64" className="w-8 h-8" fill="none" stroke="#C8A34A" strokeWidth="2">
          <circle cx="32" cy="18" r="6" fill="rgba(200, 163, 74, 0.2)" />
          <path d="M32 24V42M20 34H44M26 50L32 42L38 50" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-8 sm:py-12 lg:py-14 bg-transparent font-body relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto space-y-3 mb-14"
        >
          <div className="inline-block px-4 py-1 rounded-full royal-gold-badge text-[11px] font-semibold uppercase tracking-widest">
            OUR ESSENCE
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#352043]">
            Core Spiritual <span className="text-[#8C5D00]">Practices</span>
          </h2>
        </motion.div>

        {/* Top 3 Cards Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {topPractices.map((practice, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="luxury-card rounded-[28px] p-6 border border-[#E9DED3] flex flex-col justify-between group shadow-sm bg-white text-center hover:border-[#8C5D00] transition-all space-y-4"
            >
              <div className="space-y-3">
                <div className="w-14 h-14 mx-auto rounded-2xl bg-[#F8F2E8] border border-[#E9DED3] flex items-center justify-center text-[#8C5D00] shadow-sm group-hover:scale-110 transition-transform">
                  {practice.icon}
                </div>

                <h3 className="font-heading text-2xl font-bold text-[#352043] group-hover:text-[#8C5D00] transition-colors">
                  {practice.title}
                </h3>

                <p className="text-[#352043] text-xs sm:text-sm font-normal leading-relaxed">
                  {practice.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-[#E9DED3] flex justify-center">
                <Link
                  href={practice.link}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#8C5D00] hover:text-[#47206A] uppercase tracking-wider transition-colors"
                >
                  <span>LEARN MORE</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom 2 Wide Cards Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* Left Wide Card: Living The Awakening Testimonial */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="luxury-card rounded-[28px] p-6 sm:p-8 border border-[#E9DED3] bg-white flex flex-col sm:flex-row items-center gap-6 shadow-sm hover:border-[#8C5D00] transition-all"
          >
            {/* Image Thumbnail */}
            <div className="relative w-full sm:w-44 h-48 sm:h-full rounded-2xl overflow-hidden shrink-0 border border-[#E9DED3]">
              <Image
                src="/images/011A6549.webp"
                alt="Living The Awakening Yogi"
                fill
                className="object-cover"
              />
            </div>

            {/* Testimonial Content */}
            <div className="space-y-4 text-center sm:text-left">
              <Quote className="w-8 h-8 text-[#8C5D00] mx-auto sm:mx-0" />

              <h3 className="font-heading text-2xl font-bold text-[#352043]">
                Living The Awakening
              </h3>

              <p className="text-[#352043] text-xs sm:text-sm italic leading-relaxed font-serif">
                &ldquo;Divya Yogam transformed my life. I found clarity, peace and a deep connection with the Divine.&rdquo;
                <span className="block not-italic font-bold text-[#352043] font-body mt-1">- Arjun R.</span>
              </p>

              <div>
                <Link
                  href="/testimonials"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#47206A] hover:bg-[#8C5D00] text-white hover:text-white text-xs font-bold uppercase tracking-wider shadow-md transition-all transform hover:scale-105"
                >
                  <span>READ MORE STORIES</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Right Wide Card: Join Our Global Family */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="luxury-card rounded-[28px] p-6 sm:p-8 border border-[#E9DED3] bg-white flex flex-col justify-between text-center space-y-6 shadow-sm hover:border-[#8C5D00] transition-all"
          >
            <div className="space-y-4 max-w-md mx-auto">
              <div className="w-14 h-14 mx-auto rounded-2xl bg-[#F8F2E8] border border-[#E9DED3] flex items-center justify-center text-[#8C5D00] shadow-sm">
                <svg viewBox="0 0 64 64" className="w-8 h-8" fill="none" stroke="#8C5D00" strokeWidth="2">
                  <circle cx="32" cy="32" r="26" />
                  <path d="M32 6C32 6 22 20 22 32C22 44 32 58 32 58" />
                  <path d="M32 6C32 6 42 20 42 32C42 44 32 58 32 58" />
                  <line x1="6" y1="32" x2="58" y2="32" />
                </svg>
              </div>

              <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#352043]">
                Join Our Global Family
              </h3>

              <p className="text-[#352043] text-xs sm:text-sm font-normal leading-relaxed">
                Thousands of seekers worldwide are walking this path of transformation together. Will you join us?
              </p>
            </div>

            <div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-2 sm:px-5.5 sm:py-2.5 rounded-full bg-[#47206A] hover:bg-[#C8A34A] text-white hover:text-[#47206A] text-[11px] sm:text-xs font-bold uppercase tracking-wider shadow-md transition-all transform hover:scale-105"
              >
                <span>BECOME A MEMBER</span>
                <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              </Link>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
