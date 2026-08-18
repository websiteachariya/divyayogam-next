'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, ChevronDown, Music, Headphones, ExternalLink } from 'lucide-react';
import { NAV_LINKS, NavItem } from '@/constants/navigation';
import TopBar from './TopBar';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  const playStoreUrl = 'https://play.google.com/store/apps/details?id=com.ignitelabs.music_app';


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  const isActive = (path?: string) => {
    if (!path) return false;
    if (path === '/' && pathname === '/') return true;
    if (path !== '/' && pathname === path) return true;
    return false;
  };

  const isParentActive = (item: NavItem) => {
    if (item.path && isActive(item.path)) return true;
    if (item.children) {
      return item.children.some((child) => isActive(child.path));
    }
    return false;
  };

  // Nav links excluding Home for header listing
  const menuLinks = NAV_LINKS.filter((link) => link.path !== '/');

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-[#E9DED3] ${
        isScrolled
          ? 'bg-[#F8F2E8]/95 backdrop-blur-md shadow-[0_4px_20px_rgba(71,32,106,0.06)]'
          : 'bg-[#F8F2E8] shadow-sm'
      }`}
    >
      <TopBar isScrolled={isScrolled} />
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-300 ${isScrolled ? 'py-2.5' : 'py-3.5'}`}>
        <div className="flex items-center justify-between gap-3">

          {/* Left Brand Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0 group relative">
            <div className="relative">
              {/* Outer 360-Degree Continuous Rotating Golden Light Aura */}
              <div className="absolute -inset-1.5 rounded-full bg-[conic-gradient(from_0deg,#C8A34A,#DFC47A,#FFF5D6,#DFC47A,#C8A34A)] opacity-90 blur-md animate-[spin_4s_linear_infinite] group-hover:opacity-100 group-hover:blur-lg transition-all duration-500" />

              {/* Pure Golden Logo Container Ring */}
              <div className="relative p-0.5 rounded-full bg-gradient-to-tr from-[#C8A34A] via-[#DFC47A] to-[#C8A34A] shadow-md">
                <Image
                  src="/images/logo.png.webp"
                  alt="Divya Yogam"
                  width={40}
                  height={40}
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full object-cover bg-white group-hover:scale-105 transition-transform duration-300"
                  priority
                />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-heading text-lg sm:text-xl font-bold tracking-wider text-[#47206A] group-hover:text-[#C8A34A] transition-colors leading-tight">
                DIVYA YOGAM
              </span>
              <span className="text-[8px] sm:text-[9px] text-[#C8A34A] font-semibold tracking-wider uppercase">
                Awaken the Divine Within
              </span>
            </div>
          </Link>

          {/* Center Desktop Navigation Links with Dropdowns */}
          <nav className="hidden lg:flex items-center justify-center flex-1 gap-4 xl:gap-7 font-body mx-2 xl:mx-6">
            {menuLinks.map((link) => {
              const hasChildren = link.children && link.children.length > 0;
              const parentActive = isParentActive(link);

              if (hasChildren) {
                return (
                  <div
                    key={link.name}
                    className="relative group py-2 flex items-center"
                    onMouseEnter={() => setActiveDropdown(link.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button
                      className={`inline-flex items-center gap-1 text-[12px] xl:text-[13px] font-semibold uppercase tracking-wider transition-all duration-300 py-1 whitespace-nowrap leading-none ${
                        parentActive
                          ? 'text-[#C8A34A] font-bold'
                          : 'text-[#47206A] group-hover:text-[#C8A34A]'
                      }`}
                    >
                      <span>{link.name}</span>
                      <ChevronDown className="w-3.5 h-3.5 text-[#C8A34A] group-hover:rotate-180 transition-transform duration-300 shrink-0" />
                      {parentActive && (
                        <motion.div
                          layoutId="activeNavIndicator"
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C8A34A] rounded-full shadow-[0_0_6px_rgba(200,163,74,0.6)]"
                        />
                      )}
                    </button>

                    {/* Dropdown Card */}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-1 pointer-events-none group-hover:pointer-events-auto opacity-0 group-hover:opacity-100 transition-all duration-300 z-50">
                      <div className="w-52 bg-white/95 backdrop-blur-xl rounded-2xl border border-[#DFC47A]/50 shadow-2xl p-2 space-y-1 text-left">
                        {link.children?.map((subItem) => {
                          const childActive = isActive(subItem.path);
                          return (
                            <Link
                              key={subItem.path}
                              href={subItem.path}
                              className={`block px-4 py-2.5 rounded-xl text-xs font-medium transition-all duration-200 ${
                                childActive
                                  ? 'bg-[#47206A] text-[#DFC47A] font-semibold shadow-sm'
                                  : 'text-[#47206A] hover:bg-[#F8F2E8] hover:text-[#8C5D00]'
                              }`}
                            >
                              {subItem.name}
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={link.path}
                  href={link.path || '#'}
                  className={`inline-flex items-center text-[12px] xl:text-[13px] font-semibold uppercase tracking-wider transition-all duration-300 relative py-2 whitespace-nowrap leading-none ${
                    parentActive
                      ? 'text-[#C8A34A] font-bold'
                      : 'text-[#47206A] hover:text-[#C8A34A]'
                  }`}
                >
                  {link.name}
                  {parentActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C8A34A] rounded-full shadow-[0_0_6px_rgba(200,163,74,0.6)]"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action & Menu Button */}
          <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
            {/* Join Us Action Button */}
            <Link
              href="/contact"
              className="hidden sm:flex px-4 lg:px-5 py-2 rounded-full bg-[#47206A] hover:bg-[#C8A34A] text-white hover:text-[#47206A] font-semibold text-xs uppercase tracking-wider shadow-md hover:scale-105 transition-all duration-300 items-center gap-1.5 font-body group whitespace-nowrap"
            >
              <span>Join Us</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#DFC47A] group-hover:text-[#47206A] transition-colors" />
            </Link>

            {/* Premium Royal Gold & Purple Mobile Menu Toggle Button */}
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="lg:hidden relative group flex items-center gap-2 px-3.5 py-2 rounded-full bg-gradient-to-r from-[#47206A] via-[#3B104E] to-[#20052C] text-[#DFC47A] border-2 border-[#DFC47A]/80 shadow-md hover:shadow-lg hover:border-[#C8A34A] transition-all duration-300 active:scale-95"
              aria-label="Toggle menu"
            >
              {/* Outer Golden Aura Glow on Hover */}
              <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-[#C8A34A] to-[#DFC47A] opacity-0 group-hover:opacity-40 blur-xs transition-opacity duration-300 pointer-events-none" />

              {/* Animated Custom Sacred 3-Bar / X Icon */}
              <div className="relative z-10 flex flex-col justify-center items-center w-4 h-4">
                {isMobileOpen ? (
                  <X className="w-4 h-4 text-[#DFC47A]" />
                ) : (
                  <div className="flex flex-col justify-between w-4 h-3.5">
                    <span className="block w-full h-[2px] bg-[#DFC47A] rounded-full group-hover:bg-white transition-colors" />
                    <span className="block w-2.5/4 h-[2px] bg-[#DFC47A] rounded-full group-hover:w-full group-hover:bg-white transition-all duration-300 ml-auto" />
                    <span className="block w-full h-[2px] bg-[#DFC47A] rounded-full group-hover:bg-white transition-colors" />
                  </div>
                )}
              </div>

              <span className="relative z-10 text-[11px] font-bold tracking-wider uppercase font-body text-[#DFC47A] group-hover:text-white transition-colors pr-0.5">
                {isMobileOpen ? 'Close' : 'Menu'}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Overlay Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-md flex items-start justify-center p-4 overflow-y-auto transition-all duration-300 ${
              isScrolled ? 'top-[65px]' : 'navbar-overlay-offset'
            }`}
            onClick={() => setIsMobileOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-md bg-[#FAF7F2] rounded-3xl border-2 border-[#DFC47A] shadow-2xl p-6 sm:p-8 my-4 text-center relative overflow-hidden"
            >
              {/* Rich Visible Background Image Layer (nav-1.png) */}
              <div
                className="absolute inset-0 opacity-90 pointer-events-none bg-cover bg-center bg-no-repeat z-0"
                style={{ backgroundImage: "url('/images/nav-2.png')" }}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-[#FAF7F2]/40 via-[#FAF5EF]/20 to-[#FAF7F2]/45 pointer-events-none z-0" />

              {/* Subtle Golden Inner Border */}
              <div className="absolute inset-2 rounded-2xl border border-[#DFC47A]/40 pointer-events-none z-0" />

              <div className="relative z-10 flex flex-col gap-3 font-heading">
                {menuLinks.map((link) => {
                  const hasChildren = link.children && link.children.length > 0;
                  const parentActive = isParentActive(link);

                  if (hasChildren) {
                    return (
                      <div key={link.name} className="space-y-1.5 py-1">
                        <div className="text-xs font-bold text-[#8C5D00] uppercase tracking-[0.2em] border-b border-[#E9DED3] pb-1 mb-1">
                          {link.name}
                        </div>
                        <div className="space-y-1 pl-2">
                          {link.children?.map((subItem) => {
                            const childActive = isActive(subItem.path);
                            return (
                              <Link
                                key={subItem.path}
                                href={subItem.path}
                                onClick={() => setIsMobileOpen(false)}
                                className={`block text-sm tracking-wider font-semibold uppercase py-1.5 px-3 rounded-lg transition-all duration-200 ${
                                  childActive
                                    ? 'text-[#C8A34A] bg-[#47206A]/5 font-bold'
                                    : 'text-[#47206A] hover:text-[#C8A34A]'
                                }`}
                              >
                                {subItem.name}
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    );
                  }

                  return (
                    <Link
                      key={link.path}
                      href={link.path || '#'}
                      onClick={() => setIsMobileOpen(false)}
                      className={`text-sm tracking-[0.15em] font-semibold uppercase transition-all duration-300 py-1.5 px-4 rounded-lg w-full text-center ${
                        parentActive
                          ? 'text-[#C8A34A] font-bold'
                          : 'text-[#47206A] hover:text-[#C8A34A]'
                      }`}
                    >
                      {link.name}
                    </Link>
                  );
                })}

                <div className="w-full pt-4 mt-2 border-t border-[#E9DED3] flex flex-col items-center gap-3">
                  <Link
                    href="/contact"
                    onClick={() => setIsMobileOpen(false)}
                    className="w-full py-3 px-6 rounded-full bg-[#47206A] hover:bg-[#C8A34A] text-white hover:text-[#47206A] font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition-all duration-300 font-body group"
                  >
                    <span>Join Us</span>
                    <ArrowRight className="w-4 h-4 text-[#DFC47A] group-hover:text-[#47206A]" />
                  </Link>

                  <a
                    href={playStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsMobileOpen(false)}
                    className="w-full py-3 px-6 rounded-full bg-[#47206A] text-[#DFC47A] font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2.5 font-body border-2 border-[#DFC47A]/80 shadow-md"
                  >
                    <div className="flex items-center gap-[2.5px] h-3.5 w-3.5 shrink-0">
                      <span className="w-[2px] h-3.5 bg-[#DFC47A] rounded-full animate-[pulse_1s_ease-in-out_infinite]" />
                      <span className="w-[2px] h-2 bg-[#DFC47A] rounded-full animate-[pulse_1.4s_ease-in-out_infinite_200ms]" />
                      <span className="w-[2px] h-3 bg-[#DFC47A] rounded-full animate-[pulse_1.1s_ease-in-out_infinite_400ms]" />
                    </div>
                    <span>Shambala Music App</span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#DFC47A]" />
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
