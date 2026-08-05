import { Link } from 'react-router-dom';
import { Sparkles, Mail, Phone, Send, Heart } from 'lucide-react';

export default function Footer() {
  const linksCol1 = [
    { name: 'About Us', path: '/about' },
    { name: 'Sacred Vision', path: '/vision' },
    { name: 'Practices', path: '/practices' },
    { name: 'Organ Meditation', path: '/organ-meditation' },
    { name: 'Quantum Habits', path: '/quantum-habits' },
  ];

  const linksCol2 = [
    { name: 'Vedic Sciences', path: '/sciences' },
    { name: 'Events & Retreats', path: '/events' },
    { name: 'Transformation', path: '/transformation' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <footer className="bg-[#3A124F] text-[#F7F3EA] border-t border-[rgba(223,194,125,0.18)] relative overflow-hidden pt-16 pb-8 shadow-[0_-10px_35px_rgba(0,0,0,0.25)]">
      {/* Soft Gold Backdrop */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[850px] h-[350px] bg-[#C8A248]/10 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-[rgba(223,194,125,0.18)]">
          
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="p-0.5 rounded-full bg-gradient-to-tr from-[#C8A248] via-[#DFC27D] to-[#C8A248] shadow-md">
                <img
                  src="/images/logo.png.webp"
                  alt="Divya Yogam"
                  className="w-12 h-12 rounded-full object-cover bg-white"
                />
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-[#DFC27D] tracking-wider">
                  DIVYA YOGAM
                </h3>
                <p className="text-[11px] text-[#DFC27D] font-bold tracking-widest uppercase">
                  Path of Divine Grace
                </p>
              </div>
            </Link>

            <p className="text-[#F7F3EA]/90 text-sm font-light leading-relaxed">
              Dedicated to awakening divine consciousness and bringing holistic health, emotional peace, and spiritual illumination to modern seekers worldwide.
            </p>

            <div className="pt-2 flex items-center gap-2 text-[#DFC27D] text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-4 h-4 text-[#DFC27D]" />
              <span>Guided by Arawindhan Ji</span>
            </div>
          </div>

          {/* Nav Col 1 */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-serif text-base font-bold text-[#DFC27D] uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm font-medium text-[#F7F3EA]/90">
              {linksCol1.map((item, i) => (
                <li key={i}>
                  <Link
                    to={item.path}
                    className="hover:text-[#DFC27D] transition-colors inline-block py-0.5"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Nav Col 2 */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-serif text-base font-bold text-[#DFC27D] uppercase tracking-wider">
              Explore
            </h4>
            <ul className="space-y-2 text-sm font-medium text-[#F7F3EA]/90">
              {linksCol2.map((item, i) => (
                <li key={i}>
                  <Link
                    to={item.path}
                    className="hover:text-[#DFC27D] transition-colors inline-block py-0.5"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter / Contact */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-serif text-base font-bold text-[#DFC27D] uppercase tracking-wider">
              Stay Connected
            </h4>
            <p className="text-xs text-[#F7F3EA]/90 font-light">
              Receive sacred reflections, upcoming event announcements, and spiritual wisdom.
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert('Thank you for subscribing to Divya Yogam newsletter!');
              }}
              className="flex items-center gap-2"
            >
              <input
                type="email"
                placeholder="Enter your email address"
                required
                className="w-full px-4 py-3 rounded-xl bg-[#FFFFFF] border border-[#DDD3C3] text-[#5C5368] placeholder:text-[#AAA2B2] text-sm focus:outline-none focus:border-[#C8A248] focus:ring-2 focus:ring-[rgba(200,162,72,0.20)] transition-all"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="px-4 py-3 rounded-xl bg-gradient-to-r from-[#C8A248] to-[#DFC27D] hover:from-[#B88F30] hover:to-[#D5B561] text-white font-bold text-sm transition-colors flex items-center justify-center shrink-0 shadow-md"
              >
                <Send className="w-4 h-4 text-white" />
              </button>
            </form>

            <div className="pt-2 space-y-2.5 text-xs text-[#F7F3EA]/90 font-medium">
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#DFC27D]" />
                <span>contact@divyayogam.org</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#DFC27D]" />
                <span>+91 (800) 108-YOGA</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#F7F3EA]/80 font-medium">
          <p>© {new Date().getFullYear()} Divya Yogam. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-[#DFC27D] fill-[#DFC27D]" />
            <span>for Global Peace & Awakening</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
