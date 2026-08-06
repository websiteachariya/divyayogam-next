import { Link } from 'react-router-dom';
import { Sparkles, Calendar, ShieldCheck, Mail, Phone, Facebook, Instagram, Youtube, Linkedin } from 'lucide-react';

export default function Footer() {
  const perks = [
    { title: 'Weekly Wisdom', desc: 'Inspirational insights', icon: Sparkles },
    { title: 'Upcoming Events', desc: 'Never miss an event', icon: Calendar },
    { title: 'Exclusive Content', desc: 'Special for subscribers', icon: ShieldCheck },
  ];

  return (
    <footer className="bg-[#0C2B21] text-[#FBF8F1] relative overflow-hidden">
      
      {/* Stay Connected Newsletter Banner matching Reference UI */}
      <div className="bg-[#12372A] border-b border-[rgba(208,173,92,0.25)] relative overflow-hidden py-16">
        {/* Subtle Mandala Vector Outline Right */}
        <div className="absolute right-6 top-1/2 -translate-y-1/2 opacity-15 pointer-events-none hidden lg:block">
          <svg width="240" height="240" viewBox="0 0 100 100" fill="none" stroke="#D0AD5C" strokeWidth="1">
            <circle cx="50" cy="50" r="45" />
            <path d="M50 5 C60 25 75 40 95 50 C75 60 60 75 50 95 C40 75 25 60 5 50 C25 40 40 25 50 5 Z" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Newsletter Title Left */}
            <div className="lg:col-span-5 space-y-2 text-center lg:text-left">
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#FBF8F1]">
                Stay Connected
              </h3>
              <p className="text-xs sm:text-sm text-[#D0AD5C] font-light">
                Receive wisdom, updates and inspiration straight to your inbox.
              </p>
            </div>

            {/* Newsletter Input Right */}
            <div className="lg:col-span-7">
              <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto lg:mx-0">
                <input
                  type="email"
                  required
                  placeholder="Enter your email..."
                  className="flex-1 px-5 py-3.5 rounded-full bg-white text-[#423629] placeholder:text-[#786B5A] text-sm focus:outline-none focus:ring-2 focus:ring-[#D0AD5C]"
                />
                <button
                  type="submit"
                  className="px-8 py-3.5 rounded-full bg-[#B68A3D] hover:bg-[#D0AD5C] text-[#0C2B21] font-bold text-xs uppercase tracking-wider transition-colors shadow-md shrink-0"
                >
                  Subscribe
                </button>
              </form>
            </div>

          </div>

          {/* 3 Newsletter Perks below matching Reference UI */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-white/10">
            {perks.map((perk, idx) => {
              const IconComponent = perk.icon;
              return (
                <div key={idx} className="flex items-center gap-3 justify-center lg:justify-start">
                  <div className="w-10 h-10 rounded-full bg-white/10 border border-[#D0AD5C]/30 flex items-center justify-center text-[#D0AD5C] shrink-0">
                    <IconComponent className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#FBF8F1]">{perk.title}</h4>
                    <p className="text-[11px] text-[#D0AD5C] font-light">{perk.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">

          {/* Brand Logo & Description */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="p-0.5 rounded-full bg-gradient-to-tr from-[#B68A3D] to-[#D0AD5C]">
                <img
                  src="/images/logo.png.webp"
                  alt="Divya Yogam"
                  className="w-11 h-11 rounded-full object-cover bg-white"
                />
              </div>
              <span className="font-serif text-xl font-bold tracking-wider text-[#D0AD5C]">
                DIVYA YOGAM
              </span>
            </Link>

            <p className="text-xs text-[#FBF8F1]/80 leading-relaxed max-w-sm font-light">
              Awaken the divine within and live a life of purpose, peace and bliss through authentic yogic practices and meditation.
            </p>

            {/* Social Icons matching Reference UI */}
            <div className="flex items-center gap-3 pt-2">
              {[Facebook, Instagram, Youtube, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-8 h-8 rounded-full bg-white/10 border border-[#D0AD5C]/30 flex items-center justify-center text-[#D0AD5C] hover:bg-[#D0AD5C] hover:text-[#0C2B21] transition-all"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-serif text-sm font-bold text-[#D0AD5C] uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs text-[#FBF8F1]/80">
              <li><Link to="/about" className="hover:text-[#D0AD5C] transition-colors">About Us</Link></li>
              <li><Link to="/practices" className="hover:text-[#D0AD5C] transition-colors">Programs</Link></li>
              <li><Link to="/events" className="hover:text-[#D0AD5C] transition-colors">Events</Link></li>
              <li><Link to="/gallery" className="hover:text-[#D0AD5C] transition-colors">Gallery</Link></li>
              <li><Link to="/contact" className="hover:text-[#D0AD5C] transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Teachings */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-serif text-sm font-bold text-[#D0AD5C] uppercase tracking-wider">
              Teachings
            </h4>
            <ul className="space-y-2 text-xs text-[#FBF8F1]/80">
              <li><Link to="/organ-meditation" className="hover:text-[#D0AD5C] transition-colors">Meditation</Link></li>
              <li><Link to="/practices" className="hover:text-[#D0AD5C] transition-colors">Yoga & Breath</Link></li>
              <li><Link to="/sciences" className="hover:text-[#D0AD5C] transition-colors">Wisdom</Link></li>
              <li><Link to="/quantum-habits" className="hover:text-[#D0AD5C] transition-colors">Healing</Link></li>
              <li><Link to="/events" className="hover:text-[#D0AD5C] transition-colors">Satsang</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-serif text-sm font-bold text-[#D0AD5C] uppercase tracking-wider">
              Resources
            </h4>
            <ul className="space-y-2 text-xs text-[#FBF8F1]/80">
              <li><Link to="/sciences" className="hover:text-[#D0AD5C] transition-colors">Articles</Link></li>
              <li><Link to="/organ-meditation" className="hover:text-[#D0AD5C] transition-colors">Guided Meditations</Link></li>
              <li><Link to="/vision" className="hover:text-[#D0AD5C] transition-colors">Books & Wisdom</Link></li>
              <li><Link to="/contact" className="hover:text-[#D0AD5C] transition-colors">FAQ & Support</Link></li>
            </ul>
          </div>

          {/* Join Our Community */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-serif text-sm font-bold text-[#D0AD5C] uppercase tracking-wider">
              Join Our Community
            </h4>
            <p className="text-xs text-[#FBF8F1]/80 font-light leading-relaxed">
              Be part of our global family of seekers and transform together.
            </p>
            <Link
              to="/contact"
              className="inline-block px-5 py-2 rounded-full bg-[#B68A3D] hover:bg-[#D0AD5C] text-[#0C2B21] font-bold text-xs uppercase tracking-wider transition-colors shadow-md"
            >
              Join Now
            </Link>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-12 mt-12 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-[#FBF8F1]/60 gap-4">
          <p>© 2026 Divya Yogam. All Rights Reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[#D0AD5C]">Privacy Policy</a>
            <a href="#" className="hover:text-[#D0AD5C]">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
