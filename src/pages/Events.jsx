import { motion } from 'framer-motion';
import { Sparkles, Calendar, MapPin, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Events() {
  const upcomingEvents = [
    {
      title: 'Global Candlelight Peace Meditation',
      date: 'First Sunday of Every Month',
      time: '06:00 PM - 07:30 PM IST',
      location: 'Live Virtual Global Zoom',
      type: 'Free Public Gathering',
      desc: 'Join thousands of seekers around the world as we synchronize intent, light candles, and meditate for collective peace and cellular healing.',
      image: '/images/gal-1.webp',
    },
    {
      title: '7-Day Organ Rejuvenation & Silent Retreat',
      date: 'October 15 - 22, 2026',
      time: 'Full Residential Program',
      location: 'Divya Yogam Ashram Sanctuary',
      type: 'Intensive Retreat',
      desc: 'An immersive 7-day residential sanctuary retreat guided by Arawindhan Ji focusing on organ cleansing, Pancha Kosha purification, and silence.',
      image: '/images/011A6549.webp',
    },
    {
      title: 'Quantum Habits & Daily Mastery Masterclass',
      date: 'Saturday, November 14, 2026',
      time: '10:00 AM - 02:00 PM IST',
      location: 'Hybrid (Online & On-Site)',
      type: 'Interactive Workshop',
      desc: 'Learn practical tools to align your circadian clock, subconscious mind, and morning routines with Vedic spiritual disciplines.',
      image: '/images/011A6598.webp',
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
            Sacred Gatherings
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Upcoming <span className="text-[#DFC27D]">Events & Retreats</span>
          </h1>

          <p className="text-[#F7F3EA] text-base sm:text-lg font-garamond italic max-w-2xl mx-auto font-medium">
            Gather with like-minded seekers to deepen your meditation practice and immerse yourself in sacred energy.
          </p>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-24 bg-[#FAF6EE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {upcomingEvents.map((event, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="glass-card glass-card-hover rounded-3xl overflow-hidden border-2 border-[#E7DCC7] grid grid-cols-1 lg:grid-cols-12 group shadow-xl"
            >
              <div className="lg:col-span-5 relative h-64 lg:h-auto overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 px-3.5 py-1 rounded-full royal-gold-badge text-xs font-bold shadow-md">
                  {event.type}
                </div>
              </div>

              <div className="lg:col-span-7 p-8 sm:p-10 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#43175F] group-hover:text-[#5E2A84] transition-colors">
                    {event.title}
                  </h2>

                  <p className="text-[#5C5368] text-sm sm:text-base font-light leading-relaxed">
                    {event.desc}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs sm:text-sm text-[#5E2A84] font-semibold pt-2">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-[#C8A248] shrink-0" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-[#C8A248] shrink-0" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-[#C8A248] shrink-0" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#E7DCC7]">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-[#C8A248] to-[#DFC27D] hover:from-[#B88F30] hover:to-[#D5B561] text-white font-bold text-sm shadow-[0_15px_40px_rgba(200,162,72,0.25)] hover:scale-105 transition-all"
                  >
                    <span>Register for Event</span>
                    <ArrowRight className="w-4 h-4 text-white" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

    </motion.div>
  );
}
