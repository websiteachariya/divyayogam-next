'use client';

import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export default function Transformation() {
  const testimonials = [
    {
      quote: "Divya Yogam changed my life. I found inner peace and purpose.",
      name: "Ananya S.",
      location: "Bangalore, India",
    },
    {
      quote: "The teachings are profound, yet simple to apply in daily life.",
      name: "Rajesh K.",
      location: "Mumbai, India",
    },
    {
      quote: "The retreats are life-changing experiences of love and wisdom.",
      name: "Priya M.",
      location: "London, UK",
    },
  ];

  return (
    <section className="py-24 bg-[#FDF7F1] relative overflow-hidden font-body">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full royal-gold-badge text-xs uppercase tracking-wider font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-[#C8A34A]" />
            Voices of Transformation
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#352043]">
            Stories from <span className="text-[#C8A34A]">Our Seekers</span>
          </h2>
        </div>

        {/* 3 Testimonials Grid matching Reference UI */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="bg-white rounded-[28px] p-8 border border-[#E9DED3] flex flex-col justify-between relative group luxury-card shadow-sm"
            >
              <div>
                <span className="font-heading text-5xl text-[#C8A34A] opacity-90 block leading-none mb-3">
                  “
                </span>

                <p className="text-[#5E5865] text-base font-light leading-relaxed mb-6 font-body">
                  {item.quote}
                </p>
              </div>

              <div className="pt-4 border-t border-[#E9DED3]">
                <h4 className="font-heading text-lg font-bold text-[#352043]">
                  — {item.name}
                </h4>
                <p className="text-xs text-[#8A8394] font-medium font-body">
                  {item.location}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pagination Dots matching Reference UI */}
        <div className="flex items-center justify-center gap-2 pt-4">
          <span className="w-3 h-3 rounded-full bg-[#C8A34A]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#E9DED3]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#E9DED3]" />
        </div>

      </div>
    </section>
  );
}
