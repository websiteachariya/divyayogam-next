import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Quote, Sparkles, Sun, Heart, Compass } from 'lucide-react';

export default function Founder() {
  const valuePills = [
    { icon: Sun, text: 'Vedic Wisdom' },
    { icon: Heart, text: 'Conscious Living' },
    { icon: Compass, text: 'Holistic Health' },
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-[#F5EFE4]">
      {/* Background Orbs */}
      <div className="absolute top-1/3 left-0 w-[550px] h-[550px] glow-orb-purple pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[450px] h-[450px] glow-orb-gold pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Founder Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Portrait Column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative group w-full max-w-md">
              {/* Outer Glow */}
              <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-r from-[#C8A248] via-[#5E2A84] to-[#C8A248] blur-xl opacity-30 group-hover:opacity-50 transition-all duration-700" />
              
              {/* Portrait Frame */}
              <div className="relative rounded-3xl overflow-hidden glass-card border-2 border-[#E7DCC7] p-2.5 sm:p-3 shadow-xl">
                <div className="relative rounded-2xl overflow-hidden bg-gradient-to-b from-[#FAF6EE] to-[#F5EFE4] aspect-[4/5] flex items-center justify-center">
                  <img
                    src="/images/MD Sir_4.webp"
                    alt="Arawindhan Ji - Founder of Divya Yogam"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#43175F]/20 via-transparent to-transparent" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full royal-gold-badge text-xs uppercase tracking-wider font-bold">
              <Sparkles className="w-3.5 h-3.5 text-[#5E2A84]" />
              The Visionary Guide
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#5E2A84] leading-tight">
              Meet Our Founder, <br />
              <span className="text-[#C8A248]">Arawindhan Ji</span>
            </h2>

            <div className="w-24 h-1 bg-gradient-to-r from-[#C8A248] via-[#DFC27D] to-[#C8A248] rounded-full" />

            <p className="text-[#5C5368] text-base sm:text-lg leading-relaxed font-light">
              Under the guidance of our visionary founder, <strong className="text-[#5E2A84] font-semibold">Arawindhan Ji</strong>, Divya Yogam was established with a profound mission to bring inner peace, spiritual depth, and holistic wellbeing to the modern world. His unique approach seamlessly integrates timeless Vedic wisdom with contemporary understanding—creating a practical pathway for lasting inner transformation.
            </p>

            <p className="text-[#8F8896] text-sm sm:text-base leading-relaxed font-light">
              Through dedicated practice, scientific meditation techniques, and a heart centered on global service, Ji invites every seeker to embark on an evolutionary journey of self-discovery—bridging the gap between material success and spiritual fulfillment.
            </p>

            {/* Value Tags */}
            <div className="flex flex-wrap gap-3 pt-2">
              {valuePills.map((pill, idx) => {
                const IconComponent = pill.icon;
                return (
                  <div
                    key={idx}
                    className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white border border-[#DDD3C3] text-[#5E2A84] text-xs sm:text-sm font-semibold hover:border-[#C8A248] transition-all duration-300 shadow-sm"
                  >
                    <IconComponent className="w-4 h-4 text-[#C8A248]" />
                    <span>{pill.text}</span>
                  </div>
                );
              })}
            </div>

            <div className="pt-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#C8A248] to-[#DFC27D] hover:from-[#B88F30] hover:to-[#D5B561] text-white font-bold text-sm shadow-[0_15px_40px_rgba(200,162,72,0.25)] hover:scale-105 transition-all duration-300"
              >
                Connect with Ji
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
          className="mt-20 glass-card rounded-3xl p-8 sm:p-12 border-2 border-[#E7DCC7] relative overflow-hidden text-center max-w-4xl mx-auto shadow-lg"
        >
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-[#C8A248] border border-[#B88F30] flex items-center justify-center text-white shadow-md">
            <Quote className="w-6 h-6 text-white fill-white" />
          </div>
          
          <blockquote className="font-garamond text-2xl sm:text-3xl text-[#43175F] italic font-semibold leading-relaxed mt-2">
            "Bridging the gap between external success and inner fulfillment through timeless spiritual wisdom and modern clarity."
          </blockquote>
          
          <div className="mt-6 pt-4 border-t border-[#E7DCC7] inline-block">
            <p className="text-sm font-bold tracking-wider text-[#C8A248] uppercase">
              — Arawindhan Ji
            </p>
            <p className="text-xs text-[#8F8896] font-light mt-0.5">
              Founder, Divya Yogam
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
