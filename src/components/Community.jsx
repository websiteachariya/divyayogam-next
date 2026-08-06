import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Sparkles, Users, Globe, Heart, Home, Play } from 'lucide-react';

export default function Community() {
  const stats = [
    { number: '100,000+', label: 'Members', icon: Users },
    { number: '500+', label: 'Meditation Centers', icon: Home },
    { number: '25+', label: 'Countries', icon: Globe },
    { number: 'Millions', label: 'Lives Impacted', icon: Heart },
  ];

  return (
    <section className="py-24 bg-[#FBF8F1] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full royal-gold-badge text-xs uppercase tracking-wider font-bold">
            <Sparkles className="w-3.5 h-3.5 text-[#B68A3D]" />
            Our Global Community
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#12372A]">
            A Family of <span className="text-[#B68A3D]">Awakened Souls</span>
          </h2>
        </div>

        {/* Community Grid Layout matching Reference UI */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

          {/* Left Stats Grid */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-6">
            {stats.map((stat, idx) => {
              const IconComponent = stat.icon;
              return (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-3xl border border-[#E2D8C3] text-center space-y-3 shadow-md hover:shadow-lg transition-all"
                >
                  <div className="w-12 h-12 mx-auto rounded-2xl bg-[#FBF8F1] border border-[#E2D8C3] flex items-center justify-center text-[#B68A3D]">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#12372A]">
                    {stat.number}
                  </h3>
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#786B5A]">
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Right Video Thumbnail Card matching Reference UI */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden glass-card border-2 border-[#E2D8C3] shadow-xl group aspect-[16/10]">
              <img
                src="/images/011A6549.webp"
                alt="Divya Yogam Community Gathering"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex flex-col items-center justify-center p-6">
                <Link
                  to="/gallery"
                  className="w-16 h-16 rounded-full bg-white/90 text-[#12372A] flex items-center justify-center shadow-2xl hover:scale-110 transition-transform mb-3 border-2 border-[#D0AD5C]"
                >
                  <Play className="w-7 h-7 fill-[#12372A] ml-1" />
                </Link>
                <span className="text-white font-bold text-sm tracking-wider uppercase drop-shadow-md">
                  Watch Our Story
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
