import { motion } from 'framer-motion';
import { Users, Globe, Award, HeartHandshake } from 'lucide-react';

export default function Statistics() {
  const stats = [
    {
      value: '100,000+',
      label: 'Global Practitioners',
      sub: 'Walking the path of daily meditation',
      icon: Users,
    },
    {
      value: '15+',
      label: 'Countries Reached',
      sub: 'Spreading peace across continents',
      icon: Globe,
    },
    {
      value: '16+ Years',
      label: 'Selfless Service',
      sub: 'Guided by Arawindhan Ji',
      icon: Award,
    },
    {
      value: '100%',
      label: 'Inner Awakening',
      sub: 'Holistic physical & mental balance',
      icon: HeartHandshake,
    },
  ];

  return (
    <section className="py-20 bg-[#F5EFE4] relative overflow-hidden">
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
                className="glass-card glass-card-hover rounded-3xl p-8 border-2 border-[#E7DCC7] text-center space-y-4 shadow-lg"
              >
                <div className="w-14 h-14 mx-auto rounded-2xl bg-[#F5EFE4] border border-[#DDD3C3] flex items-center justify-center text-[#5E2A84] shadow-sm">
                  <IconComponent className="w-7 h-7 text-[#C8A248]" />
                </div>

                <div className="space-y-1">
                  <span className="font-serif text-4xl sm:text-5xl font-extrabold text-[#5E2A84] block">
                    {stat.value}
                  </span>
                  <h3 className="font-serif text-lg font-bold text-[#5E2A84]">
                    {stat.label}
                  </h3>
                </div>

                <p className="text-xs text-[#8F8896] font-light">
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
