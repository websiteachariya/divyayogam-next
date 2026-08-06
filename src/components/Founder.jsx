import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Quote, Sparkles, Sun, Heart, Compass } from 'lucide-react';

export default function Founder() {
  const valuePills = [
    { icon: Compass, text: 'Authentic Teachings' },
    { icon: Sun, text: 'Ancient Wisdom' },
    { icon: Sparkles, text: 'Modern Approach' },
    { icon: Heart, text: 'Heart-Centered' },
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-[#F4EFE6]">
      {/* Background Glows & Subtle Lotus Line Art */}
      <div className="absolute top-1/3 left-0 w-[550px] h-[550px] glow-orb-sandal pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[450px] h-[450px] glow-orb-gold pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Founder Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Portrait Column with Arch Frame */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative group w-full max-w-md">
              {/* Outer Golden Arch Glow */}
              <div className="absolute -inset-2 rounded-t-full bg-gradient-to-tr from-[#B68A3D] via-[#D0AD5C] to-[#B68A3D] blur-xl opacity-30 group-hover:opacity-50 transition-all duration-700" />
              
              {/* Portrait Arch Frame matching Reference UI */}
              <div className="relative rounded-t-full rounded-b-3xl overflow-hidden glass-card border-2 border-[#E2D8C3] p-3 sm:p-4 shadow-xl bg-white">
                <div className="relative rounded-t-full rounded-b-2xl overflow-hidden bg-gradient-to-b from-[#FBF8F1] to-[#F4EFE6] aspect-[4/5] flex items-center justify-center">
                  <img
                    src="/images/MD Sir_4.webp"
                    alt="Arawindhan Ji - Founder of Divya Yogam"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#12372A]/20 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content Column matching Reference UI */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full royal-gold-badge text-xs uppercase tracking-wider font-bold">
              <Sparkles className="w-3.5 h-3.5 text-[#B68A3D]" />
              About Divya Yogam
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#12372A] leading-tight">
              Guided by <span className="text-[#B68A3D]">Wisdom.</span> <br />
              Rooted in <span className="text-[#B68A3D]">Tradition.</span>
            </h2>

            <div className="w-24 h-1 bg-gradient-to-r from-[#B68A3D] via-[#D0AD5C] to-[#B68A3D] rounded-full" />

            <p className="text-[#423629] text-base sm:text-lg leading-relaxed font-light">
              Divya Yogam is a path of inner transformation founded on ancient yogic wisdom and modern understanding. Our mission is to help every seeker awaken to their true nature and live a life of purpose, health and eternal peace.
            </p>

            <p className="text-[#786B5A] text-sm sm:text-base leading-relaxed font-light">
              Under the compassionate guidance of our visionary founder, <strong className="text-[#12372A] font-semibold">Arawindhan Ji</strong>, seekers receive structured meditation techniques that bridge external ambition with deep spiritual awakening.
            </p>

            {/* 4 Value Pills matching Reference UI */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              {valuePills.map((pill, idx) => {
                const IconComponent = pill.icon;
                return (
                  <div
                    key={idx}
                    className="flex flex-col items-center justify-center text-center p-3 rounded-2xl bg-white border border-[#D8CDAF] text-[#12372A] text-xs font-semibold hover:border-[#D0AD5C] transition-all duration-300 shadow-sm"
                  >
                    <IconComponent className="w-5 h-5 text-[#B68A3D] mb-1.5" />
                    <span>{pill.text}</span>
                  </div>
                );
              })}
            </div>

            <div className="pt-4">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#12372A] hover:bg-[#0C2B21] text-white font-bold text-sm shadow-[0_15px_35px_rgba(18,55,42,0.2)] hover:scale-105 transition-all duration-300"
              >
                <span>Meet Our Founder</span>
                <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-xs">→</span>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Ji Quote Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-20 glass-card rounded-3xl p-8 sm:p-12 border-2 border-[#E2D8C3] relative overflow-hidden text-center max-w-4xl mx-auto shadow-lg bg-white"
        >
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-[#D0AD5C] border border-[#B68A3D] flex items-center justify-center text-white shadow-md">
            <Quote className="w-6 h-6 text-white fill-white" />
          </div>
          
          <blockquote className="font-serif text-2xl sm:text-3xl text-[#12372A] italic font-semibold leading-relaxed mt-2">
            "Bridging the gap between external success and inner fulfillment through timeless spiritual wisdom and modern clarity."
          </blockquote>
          
          <div className="mt-6 pt-4 border-t border-[#E2D8C3] inline-block">
            <p className="text-sm font-bold tracking-wider text-[#B68A3D] uppercase">
              — Arawindhan Ji
            </p>
            <p className="text-xs text-[#786B5A] font-light mt-0.5">
              Founder, Divya Yogam
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
