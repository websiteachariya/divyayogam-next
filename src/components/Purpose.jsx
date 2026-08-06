import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Sparkles, HeartPulse, ShieldCheck, Flame, Compass } from 'lucide-react';

export default function Purpose() {
  const programs = [
    {
      title: 'Meditation',
      desc: 'Discover inner stillness and mental clarity.',
      image: '/images/gal-1.webp',
      icon: HeartPulse,
      path: '/organ-meditation',
    },
    {
      title: 'Yoga & Pranayama',
      desc: 'Balance your body, mind and energy.',
      image: '/images/gal-2.webp',
      icon: ShieldCheck,
      path: '/practices',
    },
    {
      title: 'Wisdom & Satsang',
      desc: 'Deepen your understanding of life and self.',
      image: '/images/011A6549.webp',
      icon: Compass,
      path: '/sciences',
    },
    {
      title: 'Healing & Wellness',
      desc: 'Heal your body, mind and emotions.',
      image: '/images/011A6598.webp',
      icon: Flame,
      path: '/quantum-habits',
    },
    {
      title: 'Retreats & Events',
      desc: 'Join immersive retreats and spiritual events.',
      image: '/images/gallery1.webp',
      icon: Sparkles,
      path: '/events',
    },
  ];

  return (
    <section className="py-24 bg-[#FBF8F1] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full royal-gold-badge text-xs uppercase tracking-wider font-bold">
            <Sparkles className="w-3.5 h-3.5 text-[#B68A3D]" />
            Our Programs
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#12372A]">
            Paths to <span className="text-[#B68A3D]">Transformation</span>
          </h2>
        </div>

        {/* 5-Card Program Grid matching Reference UI */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {programs.map((prog, idx) => {
            const IconComponent = prog.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-white rounded-3xl overflow-hidden border border-[#E2D8C3] flex flex-col justify-between group shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div>
                  {/* Card Image Header */}
                  <div className="relative h-44 overflow-hidden">
                    <img
                      src={prog.image}
                      alt={prog.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute -bottom-4 left-6 w-10 h-10 rounded-2xl bg-white border border-[#E2D8C3] flex items-center justify-center text-[#B68A3D] shadow-md z-10">
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Card Text Content */}
                  <div className="p-6 pt-7 space-y-2">
                    <h3 className="font-serif text-xl font-bold text-[#12372A] group-hover:text-[#B68A3D] transition-colors">
                      {prog.title}
                    </h3>
                    <p className="text-[#786B5A] text-xs font-light leading-relaxed">
                      {prog.desc}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-2">
                  <Link
                    to={prog.path}
                    className="inline-flex items-center gap-1.5 text-xs text-[#B68A3D] font-bold group-hover:text-[#12372A] transition-colors"
                  >
                    <span>Explore</span>
                    <span>→</span>
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA Button */}
        <div className="text-center">
          <Link
            to="/practices"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#B68A3D] to-[#D0AD5C] hover:from-[#9C6E28] hover:to-[#C49E4B] text-[#0C2B21] font-bold text-xs uppercase tracking-wider shadow-lg hover:scale-105 transition-all duration-300"
          >
            <span>View All Programs</span>
            <span className="w-5 h-5 rounded-full bg-[#0C2B21] text-white flex items-center justify-center text-[10px]">→</span>
          </Link>
        </div>

      </div>
    </section>
  );
}
