import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Sparkles, Star, Quote, ArrowRight } from 'lucide-react';

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
    <section className="py-24 bg-[#F4EFE6] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full royal-gold-badge text-xs uppercase tracking-wider font-bold">
            <Sparkles className="w-3.5 h-3.5 text-[#B68A3D]" />
            Voices of Transformation
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#12372A]">
            Stories from <span className="text-[#B68A3D]">Our Seekers</span>
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
              className="bg-white rounded-3xl p-8 border border-[#E2D8C3] flex flex-col justify-between relative group shadow-md hover:shadow-xl transition-all"
            >
              <div>
                <span className="font-serif text-5xl text-[#B68A3D] opacity-80 block leading-none mb-3">
                  “
                </span>

                <p className="text-[#423629] text-base font-light leading-relaxed mb-6">
                  {item.quote}
                </p>
              </div>

              <div className="pt-4 border-t border-[#E2D8C3]">
                <h4 className="font-serif text-base font-bold text-[#12372A]">
                  — {item.name}
                </h4>
                <p className="text-xs text-[#786B5A] font-medium">
                  {item.location}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pagination Dots matching Reference UI */}
        <div className="flex items-center justify-center gap-2 pt-4">
          <span className="w-3 h-3 rounded-full bg-[#B68A3D]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#E2D8C3]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#E2D8C3]" />
        </div>

      </div>
    </section>
  );
}
