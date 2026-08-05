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
      className="bg-[#FAF6EE]"
    >
      {/* Hero Header in Dark Purple #43175F */}
      <section className="pt-28 pb-10 relative overflow-hidden bg-gradient-to-b from-[#43175F] to-[#3A124F] text-center border-b border-[rgba(223,194,125,0.18)]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#C8A248]/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full royal-gold-badge text-xs font-bold uppercase tracking-wider shadow-md">
            <Sparkles className="w-3.5 h-3.5 text-[#5E2A84]" />
            Voices of Awakening
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Seeker <span className="text-[#DFC27D]">Testimonials</span>
          </h1>

          <p className="text-[#F7F3EA] text-base sm:text-lg font-garamond italic max-w-2xl mx-auto font-medium">
            Read inspiring stories of healing, inner peace, and transformation shared by practitioners across the globe.
          </p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-24 bg-[#FAF6EE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="glass-card glass-card-hover rounded-3xl p-8 border-2 border-[#E7DCC7] flex flex-col justify-between shadow-lg"
              >
                <div>
                  <div className="flex items-center gap-1 text-[#C8A248] mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#C8A248] text-[#C8A248]" />
                    ))}
                  </div>

                  <Quote className="w-8 h-8 text-[#C8A248]/50 mb-4" />

                  <p className="text-[#5C5368] text-sm font-light leading-relaxed italic mb-6">
                    "{item.quote}"
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E7DCC7]">
                  <h3 className="font-serif text-base font-bold text-[#43175F]">
                    {item.name}
                  </h3>
                  <p className="text-xs text-[#5E2A84] font-bold">
                    {item.title} — <span className="text-[#8F8896]">{item.location}</span>
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
