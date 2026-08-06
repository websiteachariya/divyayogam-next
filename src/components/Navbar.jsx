import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sparkles } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Vision', path: '/vision' },
    { name: 'Practices', path: '/practices' },
    { name: 'Organ Meditation', path: '/organ-meditation' },
    { name: 'Quantum Habits', path: '/quantum-habits' },
    { name: 'Sciences', path: '/sciences' },
    { name: 'Events', path: '/events' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname === path) return true;
    return false;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-[rgba(208,173,92,0.3)] ${isScrolled
          ? 'bg-[#12372A]/95 backdrop-blur-md py-3 shadow-[0_10px_30px_rgba(0,0,0,0.3)]'
          : 'bg-[#12372A] py-4 shadow-md'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">

          {/* Left Brand Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative p-0.5 rounded-full bg-gradient-to-tr from-[#B68A3D] via-[#D0AD5C] to-[#B68A3D] shadow-md">
              <img
                src="/images/logo.png.webp"
                alt="Divya Yogam"
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-full object-cover bg-white"
              />
            </div>
            <span className="font-serif text-lg sm:text-xl font-bold tracking-wider text-[#D0AD5C] group-hover:text-[#DFBE72] transition-colors">
              DIVYA YOGAM
            </span>
          </Link>

          {/* Center Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-xs xl:text-sm font-semibold transition-all duration-300 relative py-1 ${isActive(link.path)
                    ? 'text-[#D0AD5C] font-bold drop-shadow-[0_0_10px_rgba(208,173,92,0.5)]'
                    : 'text-[#FBF8F1] hover:text-[#DFBE72]'
                  }`}
              >
                {link.name}
                {isActive(link.path) && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#D0AD5C] rounded-full shadow-[0_0_8px_rgba(208,173,92,0.8)]"
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* Right CTA Button */}
          <div className="hidden lg:flex items-center">
            <Link
              to="/contact"
              className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#B68A3D] to-[#D0AD5C] hover:from-[#9C6E28] hover:to-[#C49E4B] text-[#0C2B21] font-bold text-xs uppercase tracking-wider shadow-lg hover:scale-105 transition-all duration-300 flex items-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#0C2B21]" />
              Join the Path
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="lg:hidden p-2.5 rounded-xl bg-[#D0AD5C]/20 text-[#D0AD5C] border border-[#D0AD5C]/40 hover:bg-[#D0AD5C]/30 transition-colors shadow-md"
            aria-label="Toggle menu"
          >
            {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#0C2B21] border-b-2 border-[#D0AD5C]/40 overflow-hidden shadow-2xl"
          >
            <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-base font-semibold py-2.5 px-4 rounded-xl transition-all ${isActive(link.path)
                      ? 'bg-[#12372A] text-[#D0AD5C] border border-[#D0AD5C]/40 font-bold'
                      : 'text-[#FBF8F1] hover:bg-[#12372A] hover:text-[#D0AD5C]'
                    }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="mt-4 pt-4 border-t border-[rgba(208,173,92,0.25)]">
                <Link
                  to="/contact"
                  className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#B68A3D] to-[#D0AD5C] text-[#0C2B21] font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition-all duration-300"
                >
                  <Sparkles className="w-4 h-4 text-[#0C2B21]" />
                  Join the Path
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
