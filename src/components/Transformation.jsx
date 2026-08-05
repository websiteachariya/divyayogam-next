import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Sparkles, Star, Quote, ArrowRight } from 'lucide-react';

export default function Transformation() {
  const testimonials = [
    {
      quote: "Divya Yogam organ meditation transformed my chronic fatigue into vibrant vitality. Within 3 weeks of daily practice, I felt a deep sense of renewal and peace.",
      name: "Radhika S.",
      role: "Corporate Executive & Practitioner",
      rating: 5,
      avatar: "/images/service-10.webp",
    },
    {
      quote: "Learning under Arawindhan Ji gave me clarity on balancing my professional ambitions with deep inner spiritual alignment. It is truly life-changing.",
      name: "Vikram R.",
      role: "Software Architect",
      rating: 5,
      avatar: "/images/service-8.webp",
    },
    {
      quote: "The Pancha Kosha purification retreat allowed me to release emotional baggage I had carried for years. I returned home reborn in spirit.",
      name: "Ananya M.",
      role: "Wellness Coach",
      rating: 5,
      avatar: "/images/service-9.webp",
    },
  ];

  return (
    <section className="py-24 bg-[#F5EFE4] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full royal-gold-badge text-xs uppercase tracking-wider font-bold">
            <Sparkles className="w-3.5 h-3.5 text-[#5E2A84]" />
            Seeker Experiences
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#5E2A84]">
            Stories of <span className="gold-gradient-text">Transformation</span>
          </h2>
          <p className="text-[#5C5368] text-base font-light">
            Real experiences from practitioners who have walked the path of inner awakening.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="glass-card glass-card-hover rounded-3xl p-8 border-2 border-[#E7DCC7] flex flex-col justify-between relative group shadow-lg"
            >
              <div>
                <div className="flex items-center gap-1 text-[#C8A248] mb-6">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#C8A248] text-[#C8A248]" />
                  ))}
                </div>

                <Quote className="w-8 h-8 text-[#C8A248]/50 mb-4" />

                <p className="text-[#5C5368] text-sm font-light leading-relaxed italic mb-6">
                  "{item.quote}"
                </p>
              </div>

              <div className="flex items-center gap-4 pt-4 border-t border-[#E7DCC7]">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-[#C8A248] shadow-sm"
                />
                <div>
                  <h4 className="font-serif text-base font-bold text-[#43175F]">
                    {item.name}
                  </h4>
                  <p className="text-xs text-[#5E2A84] font-bold">
                    {item.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Testimonials CTA */}
        <div className="mt-16 text-center">
          <Link
            to="/testimonials"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#C8A248] to-[#DFC27D] hover:from-[#B88F30] hover:to-[#D5B561] text-white font-bold text-sm shadow-[0_15px_40px_rgba(200,162,72,0.25)] hover:scale-105 transition-all duration-300"
          >
            <span>Read All Testimonials & Stories</span>
            <ArrowRight className="w-4 h-4 text-white" />
          </Link>
        </div>

      </div>
    </section>
  );
}
