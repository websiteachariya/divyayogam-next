'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Sparkles, Sun, Compass, Home, Star, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

export default function Science() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const sciences = [
    { name: 'Ayurveda', desc: 'The science of life and holistic healing.', icon: Sun },
    { name: 'Jyotish', desc: 'The science of cosmic influences.', icon: Compass },
    { name: 'Vastu', desc: 'The science of harmonious living.', icon: Home },
  ];

  const testimonials = [
    {
      quote: 'Divya Yogam has completely transformed my life. I found peace, purpose, and a new way of living.',
      author: 'Anjali, Mumbai',
    },
    {
      quote: 'The organ meditation practices brought deep emotional relief and cellular clarity into my daily routine.',
      author: 'Rajesh, Bengaluru',
    },
    {
      quote: 'Attending Ji’s retreats opened my heart to deep stillness and unshakeable inner joy.',
      author: 'Priya, London',
    },
  ];

  const handleNext = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 bg-[#FDF7F1] relative overflow-hidden font-body">
      
      {/* Background Golden Half-Mandala Watermarks Left & Right (deco-1.png) */}
      <div className="absolute top-1/2 -left-28 sm:-left-36 -translate-y-1/2 opacity-35 pointer-events-none hidden lg:block w-[400px] sm:w-[480px] h-[600px] z-0">
        <Image
          src="/images/deco-1.webp"
          alt="Golden Half Mandala Watermark Left"
          fill
          className="object-contain scale-x-[-1]"
        />
      </div>
      <div className="absolute top-1/2 -right-28 sm:-right-36 -translate-y-1/2 opacity-35 pointer-events-none hidden lg:block w-[400px] sm:w-[480px] h-[600px] z-0">
        <Image
          src="/images/deco-1.webp"
          alt="Golden Half Mandala Watermark Right"
          fill
          className="object-contain"
        />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Column: The Sacred Sciences */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full royal-gold-badge text-[11px] uppercase tracking-widest font-semibold">
                SACRED SCIENCES
              </div>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#352043]">
                The Sacred <span className="text-[#C8A34A]">Sciences</span>
              </h2>
              <p className="text-[#8A8394] text-xs font-light">
                Timeless wisdom for modern living.
              </p>
            </div>

            <div className="space-y-3 pt-2">
              {sciences.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-white border border-[#E9DED3] flex items-center gap-3.5 shadow-sm hover:border-[#DFC47A] transition-all"
                  >
                    <div className="w-9 h-9 rounded-xl bg-[#F8F2E8] border border-[#E9DED3] flex items-center justify-center text-[#C8A34A] shrink-0">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="font-heading text-base font-bold text-[#352043]">
                        {item.name}
                      </h3>
                      <p className="text-[#8A8394] text-[11px] font-light">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div>
              <Link
                href="/sciences"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#47206A] hover:bg-[#C8A34A] text-white hover:text-[#47206A] font-semibold text-xs uppercase tracking-wider shadow-md hover:scale-105 transition-all duration-300 group"
              >
                <span>Explore Sciences</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#DFC47A] group-hover:text-[#47206A]" />
              </Link>
            </div>
          </motion.div>

          {/* Center Golden Vertical Ornament (deo-1.png) */}
          <div className="hidden lg:flex lg:col-span-2 items-center justify-center pointer-events-none py-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative w-52 sm:w-64 lg:w-72 h-[560px] sm:h-[700px] lg:h-[820px]"
            >
              <Image
                src="/images/deo-1.webp"
                alt="Sacred Golden Center Ornament"
                fill
                className="object-contain scale-125 sm:scale-145 lg:scale-160 drop-shadow-[0_0_35px_rgba(223,196,122,0.65)] hover:scale-165 transition-transform duration-500"
                priority
              />
            </motion.div>
          </div>

          {/* Right Column: Seekers Stories */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full royal-gold-badge text-[11px] uppercase tracking-widest font-semibold">
                SEEKERS STORIES
              </div>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#352043]">
                Stories from <span className="text-[#C8A34A]">Our Seekers</span>
              </h2>
              <p className="text-[#8A8394] text-xs font-light">
                Real stories of transformation and awakening.
              </p>
            </div>

            {/* Testimonial Card with 5 Stars & Carousel Arrows */}
            <div className="luxury-card rounded-[28px] p-6 sm:p-8 border border-[#E9DED3] bg-white space-y-4 shadow-sm relative">
              <div className="flex items-center gap-1 text-[#C8A34A]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#C8A34A] text-[#C8A34A]" />
                ))}
              </div>

              <blockquote className="text-[#5E5865] text-sm leading-relaxed font-light italic">
                &quot;{testimonials[activeTestimonial].quote}&quot;
              </blockquote>

              <div className="pt-2 border-t border-[#E9DED3] flex items-center justify-between">
                <span className="text-xs font-bold text-[#352043]">
                  — {testimonials[activeTestimonial].author}
                </span>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handlePrev}
                    className="p-1.5 rounded-full border border-[#E9DED3] text-[#352043] hover:bg-[#F8F2E8] hover:text-[#C8A34A] transition-all"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={handleNext}
                    className="p-1.5 rounded-full border border-[#E9DED3] text-[#352043] hover:bg-[#F8F2E8] hover:text-[#C8A34A] transition-all"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            <div>
              <Link
                href="/transformation"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#47206A] hover:bg-[#C8A34A] text-white hover:text-[#47206A] font-semibold text-xs uppercase tracking-wider shadow-md hover:scale-105 transition-all duration-300 group"
              >
                <span>Read More Stories</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#DFC47A] group-hover:text-[#47206A]" />
              </Link>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
