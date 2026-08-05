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
      className="bg-[#FAF6EE]"
    >
      {/* Page Hero Header in Dark Purple #43175F */}
      <section className="pt-28 pb-10 relative overflow-hidden bg-gradient-to-b from-[#43175F] to-[#3A124F] text-center border-b border-[rgba(223,194,125,0.18)]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#C8A248]/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full royal-gold-badge text-xs font-bold uppercase tracking-wider shadow-md">
            <Sparkles className="w-3.5 h-3.5 text-[#5E2A84]" />
            Connect With Us
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Reach Out to <span className="text-[#DFC27D]">Divya Yogam</span>
          </h1>

          <p className="text-[#F7F3EA] text-base sm:text-lg font-garamond italic max-w-2xl mx-auto font-medium">
            Whether you have questions about meditation practices, retreat registration, or personal guidance with Ji, we are here to support your journey.
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-24 bg-[#FAF6EE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Contact Info Cards */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-4">
                <h2 className="font-serif text-3xl font-bold text-[#43175F]">
                  Get in Touch
                </h2>
                <p className="text-[#5C5368] text-base font-light leading-relaxed">
                  Connect with our meditation coordinators and ashram support team.
                </p>
              </div>

              <div className="space-y-6">
                <div className="glass-card rounded-2xl p-6 border border-[#E7DCC7] flex items-start gap-4 shadow-sm">
                  <div className="w-12 h-12 rounded-xl bg-[#F5EFE4] border border-[#DDD3C3] flex items-center justify-center text-[#5E2A84] shrink-0">
                    <Mail className="w-6 h-6 text-[#5E2A84]" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-bold text-[#43175F]">
                      Email Us
                    </h3>
                    <p className="text-[#5E2A84] text-sm font-semibold mt-1">
                      contact@divyayogam.org
                    </p>
                    <p className="text-xs text-[#8F8896] font-light">
                      Response within 24 hours
                    </p>
                  </div>
                </div>

                <div className="glass-card rounded-2xl p-6 border border-[#E7DCC7] flex items-start gap-4 shadow-sm">
                  <div className="w-12 h-12 rounded-xl bg-[#F5EFE4] border border-[#DDD3C3] flex items-center justify-center text-[#5E2A84] shrink-0">
                    <Phone className="w-6 h-6 text-[#5E2A84]" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-bold text-[#43175F]">
                      Call Support
                    </h3>
                    <p className="text-[#5E2A84] text-sm font-semibold mt-1">
                      +91 (800) 108-YOGA
                    </p>
                    <p className="text-xs text-[#8F8896] font-light">
                      Mon - Sat, 9:00 AM - 6:00 PM IST
                    </p>
                  </div>
                </div>

                <div className="glass-card rounded-2xl p-6 border border-[#E7DCC7] flex items-start gap-4 shadow-sm">
                  <div className="w-12 h-12 rounded-xl bg-[#F5EFE4] border border-[#DDD3C3] flex items-center justify-center text-[#5E2A84] shrink-0">
                    <MapPin className="w-6 h-6 text-[#5E2A84]" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-bold text-[#43175F]">
                      Ashram Location
                    </h3>
                    <p className="text-[#5E2A84] text-sm font-semibold mt-1">
                      Divya Yogam Sanctuary, Divine Grace Marg, Sacred Hills
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-7">
              <div className="glass-card rounded-3xl p-8 sm:p-12 border-2 border-[#E7DCC7] relative shadow-lg">
                
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#43175F] mb-6">
                  Send a Direct Inquiry
                </h2>

                {isSubmitted && (
                  <div className="mb-6 p-4 rounded-xl bg-[#F5EFE4] border border-[#5E2A84] text-[#43175F] text-sm font-semibold flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#5E2A84] shrink-0" />
                    <span>Your inquiry has been received! Our team will contact you shortly.</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase text-[#5E2A84] tracking-wider">
                        Your Full Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Anand Kumar"
                        className="w-full px-4 py-3 rounded-xl bg-[#FFFFFF] border border-[#DDD3C3] text-[#5C5368] placeholder:text-[#AAA2B2] text-sm focus:outline-none focus:border-[#C8A248] focus:ring-2 focus:ring-[rgba(200,162,72,0.20)] transition-all"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase text-[#5E2A84] tracking-wider">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="anand@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-[#FFFFFF] border border-[#DDD3C3] text-[#5C5368] placeholder:text-[#AAA2B2] text-sm focus:outline-none focus:border-[#C8A248] focus:ring-2 focus:ring-[rgba(200,162,72,0.20)] transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase text-[#5E2A84] tracking-wider">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3 rounded-xl bg-[#FFFFFF] border border-[#DDD3C3] text-[#5C5368] placeholder:text-[#AAA2B2] text-sm focus:outline-none focus:border-[#C8A248] focus:ring-2 focus:ring-[rgba(200,162,72,0.20)] transition-all"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase text-[#5E2A84] tracking-wider">
                        Subject
                      </label>
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#FFFFFF] border border-[#DDD3C3] text-[#5C5368] text-sm focus:outline-none focus:border-[#C8A248] focus:ring-2 focus:ring-[rgba(200,162,72,0.20)] transition-all"
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
                    <label className="text-xs font-bold uppercase text-[#5E2A84] tracking-wider">
                      Your Message
                    </label>
                    <textarea
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Write your message or question here..."
                      className="w-full px-4 py-3 rounded-xl bg-[#FFFFFF] border border-[#DDD3C3] text-[#5C5368] placeholder:text-[#AAA2B2] text-sm focus:outline-none focus:border-[#C8A248] focus:ring-2 focus:ring-[rgba(200,162,72,0.20)] transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-[#C8A248] to-[#DFC27D] hover:from-[#B88F30] hover:to-[#D5B561] text-white font-bold text-base shadow-[0_15px_40px_rgba(200,162,72,0.25)] hover:scale-[1.01] transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5 text-white" />
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
