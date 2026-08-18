'use client';

import { motion } from 'framer-motion';
import { Users, Globe, Award, HeartHandshake } from 'lucide-react';
import AnimatedCounter from '@/components/common/AnimatedCounter';

export default function Statistics() {
  const stats = [
    {
      target: 100000,
      suffix: '+',
      label: 'Global Practitioners',
      sub: 'Walking the path of daily meditation',
      icon: Users,
    },
    {
      target: 15,
      suffix: '+',
      label: 'Countries Reached',
      sub: 'Spreading peace across continents',
      icon: Globe,
    },
    {
      target: 16,
      suffix: '+ Years',
      label: 'Selfless Service',
      sub: 'Guided by Arawindhan Ji',
      icon: Award,
    },
    {
      target: 100,
      suffix: '%',
      label: 'Inner Awakening',
      sub: 'Holistic physical & mental balance',
      icon: HeartHandshake,
    },
  ];

  return (
    <section className="py-20 bg-[#FFFDF9] relative overflow-hidden font-body">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="luxury-card rounded-[28px] p-8 border border-[#E9DED3] text-center space-y-4 shadow-sm bg-white"
              >
                <div className="w-14 h-14 mx-auto rounded-2xl bg-[#F8F2E8] border border-[#E9DED3] flex items-center justify-center text-[#C8A34A] shadow-sm">
                  <IconComponent className="w-7 h-7 text-[#C8A34A]" />
                </div>

                <div className="space-y-1">
                  <span className="font-heading text-4xl sm:text-5xl font-extrabold text-[#352043] block">
                    <AnimatedCounter target={stat.target} suffix={stat.suffix} />
                  </span>
                  <h3 className="font-heading text-lg font-bold text-[#C8A34A]">
                    {stat.label}
                  </h3>
                </div>

                <p className="text-xs text-[#8A8394] font-light">
                  {stat.sub}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
