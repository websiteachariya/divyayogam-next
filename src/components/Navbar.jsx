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

  const leftLinks = [
    { name: 'About', path: '/about' },
    { name: 'Vision', path: '/vision' },
    { name: 'Practices', path: '/practices' },
    { name: 'Organ Meditation', path: '/organ-meditation' },
    { name: 'Quantum Habits', path: '/quantum-habits' },
  ];

  const rightLinks = [
    { name: 'Sciences', path: '/sciences' },
    { name: 'Events', path: '/events' },
    { name: 'Transformation', path: '/transformation' },
    { name: 'Testimonials', path: '/testimonials' },
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-[rgba(223,194,125,0.18)] ${
        isScrolled
          ? 'bg-[rgba(67,23,95,0.96)] backdrop-blur-md py-2.5 shadow-[0_10px_30px_rgba(0,0,0,0.25)]'
          : 'bg-[#43175F] py-3.5 shadow-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between xl:justify-center relative">
          
          {/* Mobile Brand Logo */}
          <Link to="/" className="xl:hidden flex items-center gap-3 group">
            <div className="relative p-0.5 rounded-full bg-gradient-to-tr from-[#C8A248] via-[#DFC27D] to-[#C8A248] shadow-md">
              <img
                src="/images/logo.png.webp"
                alt="Divya Yogam"
                className="w-10 h-10 rounded-full object-cover bg-white"
              />
            </div>
            <span className="font-serif text-lg font-bold tracking-wider text-[#DFC27D]">
              DIVYA YOGAM
            </span>
          </Link>

          {/* Desktop Left Nav */}
          <nav className="hidden xl:flex items-center gap-6 justify-end flex-1">
            {leftLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-semibold transition-all duration-300 relative py-1 ${
                  isActive(link.path)
                    ? 'text-[#DFC27D] font-bold drop-shadow-[0_0_10px_rgba(223,194,125,0.5)]'
                    : 'text-[#F8F3EA] hover:text-[#C8A248]'
                }`}
              >
                {link.name}
                {isActive(link.path) && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#DFC27D] rounded-full shadow-[0_0_8px_rgba(223,194,125,0.8)]"
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* Centered Desktop Logo */}
          <Link
            to="/"
            className="hidden xl:flex flex-col items-center justify-center mx-8 group"
          >
            <div className="relative p-0.5 rounded-full bg-gradient-to-tr from-[#C8A248] via-[#DFC27D] to-[#C8A248] shadow-[0_0_20px_rgba(200,162,72,0.4)]">
              <img
                src="/images/logo.png.webp"
                alt="Divya Yogam Logo"
                className="w-13 h-13 sm:w-14 sm:h-14 rounded-full object-cover border-2 border-[#C8A248] bg-white relative z-10 group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </Link>

          {/* Desktop Right Nav */}
          <nav className="hidden xl:flex items-center gap-6 justify-start flex-1">
            {rightLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-semibold transition-all duration-300 relative py-1 ${
                  isActive(link.path)
                    ? 'text-[#DFC27D] font-bold drop-shadow-[0_0_10px_rgba(223,194,125,0.5)]'
                    : 'text-[#F8F3EA] hover:text-[#C8A248]'
                }`}
              >
                {link.name}
                {isActive(link.path) && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#DFC27D] rounded-full shadow-[0_0_8px_rgba(223,194,125,0.8)]"
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="xl:hidden p-2.5 rounded-xl bg-[#C8A248]/20 text-[#DFC27D] border border-[#DFC27D]/40 hover:bg-[#C8A248]/30 transition-colors shadow-md"
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
            className="xl:hidden bg-[#43175F] border-b-2 border-[#DFC27D]/40 overflow-hidden shadow-2xl"
          >
            <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-2.5">
              {[...leftLinks, ...rightLinks].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-base font-semibold py-2.5 px-4 rounded-xl transition-all ${
                    isActive(link.path)
                      ? 'bg-[#5E2A84] text-[#DFC27D] border border-[#DFC27D]/40 font-bold'
                      : 'text-[#F8F3EA] hover:bg-[#5E2A84] hover:text-[#C8A248]'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="mt-4 pt-4 border-t border-[rgba(223,194,125,0.18)]">
                <Link
                  to="/contact"
                  className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#C8A248] to-[#DFC27D] hover:from-[#B88F30] hover:to-[#D5B561] text-white font-bold flex items-center justify-center gap-2 shadow-lg shadow-[#C8A248]/25 transition-all duration-300"
                >
                  <Sparkles className="w-4 h-4 text-white" />
                  Connect With Ji
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
