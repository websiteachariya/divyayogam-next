import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Sparkles, Users, Globe, Flame, Heart } from 'lucide-react';

export default function Community() {
  const highlights = [
    { icon: Users, title: '100,000+ Practitioners', desc: 'Active meditators across continents practicing organ rejuvenation daily.' },
    { icon: Globe, title: '15+ Countries', desc: 'Global satsangs and virtual candlelight peace gatherings every month.' },
    { icon: Flame, title: '500+ Silent Retreats', desc: 'Immersive residential sanctuaries hosted by Arawindhan Ji.' },
    { icon: Heart, title: '100% Non-Profit Service', desc: 'Selfless dissemination of authentic Vedic wisdom for global peace.' },
  ];

  return (
    <section className="py-24 bg-[#FAF6EE] relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] glow-orb-purple pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-card rounded-3xl p-8 sm:p-14 border-2 border-[#E7DCC7] relative overflow-hidden shadow-xl"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full royal-gold-badge text-xs uppercase tracking-wider font-bold">
                <Sparkles className="w-3.5 h-3.5 text-[#5E2A84]" />
                Global Family
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#5E2A84] leading-tight">
                A Universal Community of <br />
                <span className="gold-gradient-text">Awakened Seekers</span>
              </h2>

              <p className="text-[#5C5368] text-base sm:text-lg font-light leading-relaxed">
                Divya Yogam brings together individuals from every walk of life—corporate leaders, healthcare professionals, educators, and spiritual aspirants—united in a shared commitment to inner growth and world peace.
              </p>

              <div className="pt-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#C8A248] to-[#DFC27D] hover:from-[#B88F30] hover:to-[#D5B561] text-white font-bold text-sm shadow-[0_15px_40px_rgba(200,162,72,0.25)] hover:scale-105 transition-all duration-300"
                >
                  Join Our Global Sangha
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-[#FFFDF9] border border-[#E7DCC7] space-y-3 hover:border-[#C8A248] transition-colors shadow-sm"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#F5EFE4] border border-[#DDD3C3] flex items-center justify-center text-[#5E2A84]">
                      <IconComponent className="w-5 h-5 text-[#5E2A84]" />
                    </div>
                    <h3 className="font-serif text-sm font-bold text-[#5E2A84]">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#8F8896] font-light leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
