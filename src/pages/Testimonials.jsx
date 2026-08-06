import { motion } from 'framer-motion';
import { Sparkles, Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      quote: "Before discovering Divya Yogam, I struggled with chronic stress and anxiety due to demanding work schedules. Ji’s organ meditation techniques gave me instantaneous relief and clarity.",
      name: "Siddharth N.",
      title: "Entrepreneur & Founder",
      location: "Bengaluru, India",
    },
    {
      quote: "The Pancha Kosha wisdom taught by Ji is the most lucid and practical spiritual framework I have ever encountered. It harmonized my mind and spirit.",
      name: "Dr. Meera Vasudevan",
      title: "Physician & Health Researcher",
      location: "London, UK",
    },
    {
      quote: "Attending the 7-day silent retreat was a turning point in my life. The collective energy of thousands of seekers meditating together is indescribable.",
      name: "Kavita Menon",
      title: "Yoga Instructor",
      location: "Singapore",
    },
    {
      quote: "Quantum Habits helped me restructure my morning routine. I feel more energetic, focused, and deeply centered throughout the day.",
      name: "Arjun Mehta",
      title: "Financial Analyst",
      location: "Dubai, UAE",
    },
    {
      quote: "Ji’s compassionate guidance and deep Vedic mastery make every session a sacred experience. Divya Yogam is a true gift to humanity.",
      name: "Priya Sundaram",
      title: "Educator",
      location: "Chennai, India",
    },
    {
      quote: "The organ meditation practices resolved my digestive issues and insomnia when nothing else worked. Cellular wellness is real!",
      name: "David Miller",
      title: "Wellness Enthusiast",
      location: "California, USA",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-[#FBF8F1]"
    >
      {/* Page Hero Header in Deep Emerald Green #12372A with SVG Lotus Overlay */}
      <section className="pt-28 pb-12 relative overflow-hidden bg-gradient-to-b from-[#12372A] to-[#0C2B21] text-center border-b border-[rgba(208,173,92,0.25)]">
        
        {/* Background SVG Lotus Pattern Overlay */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10 pointer-events-none">
          <svg width="450" height="450" viewBox="0 0 100 100" fill="none" stroke="#D0AD5C" strokeWidth="0.8">
            <circle cx="50" cy="50" r="45" />
            <circle cx="50" cy="50" r="32" strokeDasharray="2 2" />
            <path d="M50 5 C60 25 75 40 95 50 C75 60 60 75 50 95 C40 75 25 60 5 50 C25 40 40 25 50 5 Z" />
          </svg>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full royal-gold-badge text-xs font-bold uppercase tracking-wider shadow-md">
            <Sparkles className="w-3.5 h-3.5 text-[#B68A3D]" />
            Voices of Awakening
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Seeker <span className="text-[#D0AD5C]">Testimonials</span>
          </h1>

          <p className="text-[#FBF8F1] text-base sm:text-lg font-garamond italic max-w-2xl mx-auto font-medium">
            Read inspiring stories of healing, inner peace, and transformation shared by practitioners across the globe.
          </p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-24 bg-[#FBF8F1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="glass-card glass-card-hover rounded-3xl p-8 border-2 border-[#E2D8C3] flex flex-col justify-between shadow-lg bg-white"
              >
                <div>
                  <div className="flex items-center gap-1 text-[#D0AD5C] mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#D0AD5C] text-[#D0AD5C]" />
                    ))}
                  </div>

                  <Quote className="w-8 h-8 text-[#D0AD5C]/50 mb-4" />

                  <p className="text-[#423629] text-sm font-light leading-relaxed italic mb-6">
                    "{item.quote}"
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E2D8C3]">
                  <h3 className="font-serif text-base font-bold text-[#12372A]">
                    {item.name}
                  </h3>
                  <p className="text-xs text-[#B68A3D] font-bold">
                    {item.title} — <span className="text-[#786B5A]">{item.location}</span>
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

    </motion.div>
  );
}
