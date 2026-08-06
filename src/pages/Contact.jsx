import { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', phone: '', subject: 'General Inquiry', message: '' });
    }, 4000);
  };

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
            Connect With Us
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Reach Out to <span className="text-[#D0AD5C]">Divya Yogam</span>
          </h1>

          <p className="text-[#FBF8F1] text-base sm:text-lg font-garamond italic max-w-2xl mx-auto font-medium">
            Whether you have questions about meditation practices, retreat registration, or personal guidance with Ji, we are here to support your journey.
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-24 bg-[#FBF8F1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

            {/* Contact Info Cards */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-4">
                <h2 className="font-serif text-3xl font-bold text-[#12372A]">
                  Get in Touch
                </h2>
                <p className="text-[#423629] text-base font-light leading-relaxed">
                  Connect with our meditation coordinators and ashram support team.
                </p>
              </div>

              <div className="space-y-6">
                <div className="glass-card rounded-2xl p-6 border border-[#E2D8C3] flex items-start gap-4 shadow-sm bg-white">
                  <div className="w-12 h-12 rounded-xl bg-[#FBF8F1] border border-[#E2D8C3] flex items-center justify-center text-[#B68A3D] shrink-0">
                    <Mail className="w-6 h-6 text-[#B68A3D]" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-bold text-[#12372A]">
                      Email Us
                    </h3>
                    <p className="text-[#B68A3D] text-sm font-semibold mt-1">
                      contact@divyayogam.org
                    </p>
                    <p className="text-xs text-[#786B5A] font-light">
                      Response within 24 hours
                    </p>
                  </div>
                </div>

                <div className="glass-card rounded-2xl p-6 border border-[#E2D8C3] flex items-start gap-4 shadow-sm bg-white">
                  <div className="w-12 h-12 rounded-xl bg-[#FBF8F1] border border-[#E2D8C3] flex items-center justify-center text-[#B68A3D] shrink-0">
                    <Phone className="w-6 h-6 text-[#B68A3D]" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-bold text-[#12372A]">
                      Call Support
                    </h3>
                    <p className="text-[#B68A3D] text-sm font-semibold mt-1">
                      +91 (800) 108-YOGA
                    </p>
                    <p className="text-xs text-[#786B5A] font-light">
                      Mon - Sat, 9:00 AM - 6:00 PM IST
                    </p>
                  </div>
                </div>

                <div className="glass-card rounded-2xl p-6 border border-[#E2D8C3] flex items-start gap-4 shadow-sm bg-white">
                  <div className="w-12 h-12 rounded-xl bg-[#FBF8F1] border border-[#E2D8C3] flex items-center justify-center text-[#B68A3D] shrink-0">
                    <MapPin className="w-6 h-6 text-[#B68A3D]" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-bold text-[#12372A]">
                      Ashram Location
                    </h3>
                    <p className="text-[#B68A3D] text-sm font-semibold mt-1">
                      Divya Yogam Sanctuary, Divine Grace Marg, Sacred Hills
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-7">
              <div className="glass-card rounded-3xl p-8 sm:p-12 border-2 border-[#E2D8C3] relative shadow-lg bg-white">

                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#12372A] mb-6">
                  Send a Direct Inquiry
                </h2>

                {isSubmitted && (
                  <div className="mb-6 p-4 rounded-xl bg-[#FBF8F1] border border-[#B68A3D] text-[#12372A] text-sm font-semibold flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#B68A3D] shrink-0" />
                    <span>Your inquiry has been received! Our team will contact you shortly.</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase text-[#B68A3D] tracking-wider">
                        Your Full Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Anand Kumar"
                        className="w-full px-4 py-3 rounded-xl bg-[#FBF8F1] border border-[#E2D8C3] text-[#12372A] placeholder:text-[#9A8C7A] text-sm focus:outline-none focus:border-[#B68A3D] focus:ring-2 focus:ring-[rgba(182,138,61,0.20)] transition-all"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase text-[#B68A3D] tracking-wider">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="anand@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-[#FBF8F1] border border-[#E2D8C3] text-[#12372A] placeholder:text-[#9A8C7A] text-sm focus:outline-none focus:border-[#B68A3D] focus:ring-2 focus:ring-[rgba(182,138,61,0.20)] transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase text-[#B68A3D] tracking-wider">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3 rounded-xl bg-[#FBF8F1] border border-[#E2D8C3] text-[#12372A] placeholder:text-[#9A8C7A] text-sm focus:outline-none focus:border-[#B68A3D] focus:ring-2 focus:ring-[rgba(182,138,61,0.20)] transition-all"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase text-[#B68A3D] tracking-wider">
                        Subject
                      </label>
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#FBF8F1] border border-[#E2D8C3] text-[#12372A] text-sm focus:outline-none focus:border-[#B68A3D] focus:ring-2 focus:ring-[rgba(182,138,61,0.20)] transition-all"
                      >
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Organ Meditation">Organ Meditation Course</option>
                        <option value="Quantum Habits">Quantum Habits Program</option>
                        <option value="Retreat Registration">Retreat & Event Registration</option>
                        <option value="Ji Consultation">Personal Guidance with Ji</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase text-[#B68A3D] tracking-wider">
                      Your Message
                    </label>
                    <textarea
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Write your message or question here..."
                      className="w-full px-4 py-3 rounded-xl bg-[#FBF8F1] border border-[#E2D8C3] text-[#12372A] placeholder:text-[#9A8C7A] text-sm focus:outline-none focus:border-[#B68A3D] focus:ring-2 focus:ring-[rgba(182,138,61,0.20)] transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-[#B68A3D] to-[#D0AD5C] hover:from-[#9C6E28] hover:to-[#C49E4B] text-[#0C2B21] font-bold text-base shadow-md hover:scale-[1.01] transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5 text-[#0C2B21]" />
                    <span>Send Message</span>
                  </button>
                </form>

              </div>
            </div>

          </div>

        </div>
      </section>
    </motion.div>
  );
}
