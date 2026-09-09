// Divya Yogam Header Navbar Component with Active Indicator Alignment
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, ChevronDown, Music, Headphones, ExternalLink, User, LogIn, UserPlus, LogOut } from 'lucide-react';
import { NAV_LINKS, NavItem } from '@/constants/navigation';
import TopBar from './TopBar';

// Navigation layout component

export default function Navbar() {
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [user, setUser] = useState<any>(null);
  const pathname = usePathname();

  const playStoreUrl = 'https://play.google.com/store/apps/details?id=com.ignitelabs.music_app';

  useEffect(() => {
    fetch('/api/auth/me')
      .then((res) => res.json())
      .then((data) => {
        if (data.authenticated && data.user) {
          setUser(data.user);
        } else {
          setUser(null);
        }
      })
      .catch(() => setUser(null));
  }, [pathname]);

  const handleLogout = async () => {
    await fetch('/api/auth/logout', { method: 'POST' });
    setUser(null);
    router.push('/login');
  };


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-[#E9DED3] ${isScrolled
          ? 'bg-[#F8F2E8]/95 backdrop-blur-md shadow-[0_4px_20px_rgba(71,32,106,0.06)]'
          : 'bg-[#F8F2E8] shadow-sm'
        }`}
    >
      <TopBar isScrolled={isScrolled} />
      <div className={`max-w-[1750px] mx-auto px-3 sm:px-6 lg:px-8 xl:px-10 transition-all duration-300 ${isScrolled ? 'py-2' : 'py-3'}`}>
        <div className="flex items-center justify-between gap-2 min-[1200px]:gap-3">

          {/* Left Brand Logo */}
          <Link href="/" className="flex items-center shrink-0 group relative">
            <Image
              src="/images/shambalalogo.webp"
              alt="Divya Yogam - Awaken the Divine Within"
              width={260}
              height={65}
              className="h-[38px] sm:h-[42px] md:h-[46px] min-[1200px]:h-[44px] min-[1400px]:h-[48px] xl:h-14 w-auto object-contain drop-shadow-md group-hover:scale-105 transition-transform duration-300"
              priority
            />
          </Link>

          {/* Center Desktop Navigation Links with Dropdowns (Visible on 1200px+) */}
          <nav className="hidden min-[1200px]:flex items-center justify-center flex-1 gap-1.5 min-[1280px]:gap-2.5 min-[1400px]:gap-4 min-[1550px]:gap-5 xl:gap-6 2xl:gap-7 font-body mx-1 min-[1300px]:mx-3 xl:mx-6 shrink-0">
            {menuLinks.map((link) => {
              const hasChildren = link.children && link.children.length > 0;
              const parentActive = isParentActive(link);

              if (hasChildren) {
                return (
                  <div
                    key={link.name}
                    className="relative group py-2 flex items-center shrink-0"
                    onMouseEnter={() => setActiveDropdown(link.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button
                      aria-expanded={activeDropdown === link.name}
                      aria-label={`Toggle ${link.name} menu`}
                      className={`inline-flex items-center gap-0.5 min-[1300px]:gap-1 text-[11px] min-[1350px]:text-[12px] min-[1550px]:text-[13px] font-semibold uppercase tracking-wide min-[1400px]:tracking-wider transition-all duration-300 whitespace-nowrap leading-none ${parentActive
                          ? 'text-[#C8A34A] font-bold'
                          : 'text-[#47206A] group-hover:text-[#C8A34A]'
                        }`}
                    >
                      <span className="relative py-1">
                        {link.name}
                        {parentActive && (
                          <motion.div
                            layoutId="activeNavIndicator"
                            className="absolute -bottom-1.5 left-0 right-0 h-0.5 bg-[#C8A34A] rounded-full shadow-[0_0_6px_rgba(200,163,74,0.6)]"
                          />
                        )}
                      </span>
                      <ChevronDown className="w-3 h-3 min-[1300px]:w-3.5 min-[1300px]:h-3.5 text-[#C8A34A] group-hover:rotate-180 transition-transform duration-300 shrink-0" />
                    </button>

                    {/* Dropdown Card */}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-1 pointer-events-none group-hover:pointer-events-auto opacity-0 group-hover:opacity-100 transition-all duration-300 z-50">
                      <div className="min-w-[260px] bg-white/95 backdrop-blur-xl rounded-2xl border border-[#DFC47A]/50 shadow-2xl p-2 space-y-1 text-left">
                        {link.children?.map((subItem) => {
                          const childActive = isActive(subItem.path);
                          return (
                            <Link
                              key={subItem.path}
                              href={subItem.path}
                              className={`block px-4 py-2.5 rounded-xl text-xs font-medium transition-all duration-200 ${childActive
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
                  className={`inline-flex items-center text-[11px] min-[1350px]:text-[12px] min-[1550px]:text-[13px] font-semibold uppercase tracking-wide min-[1400px]:tracking-wider transition-all duration-300 py-2 whitespace-nowrap leading-none shrink-0 ${parentActive
                      ? 'text-[#C8A34A] font-bold'
                      : 'text-[#47206A] hover:text-[#C8A34A]'
                    }`}
                >
                  <span className="relative py-1">
                    {link.name}
                    {parentActive && (
                      <motion.div
                        layoutId="activeNavIndicator"
                        className="absolute -bottom-1.5 left-0 right-0 h-0.5 bg-[#C8A34A] rounded-full shadow-[0_0_6px_rgba(200,163,74,0.6)]"
                      />
                    )}
                  </span>
                </Link>
              );
            })}
          </nav>

          {/* Right Action & Menu Button */}
          <div className="flex items-center gap-1.5 min-[1200px]:gap-2 sm:gap-3 shrink-0">
            {/* Dynamic Auth & Dashboard Action Buttons for Desktop (Visible on 1200px+) */}
            {user ? (
              <div className="hidden min-[1200px]:flex items-center gap-1.5 min-[1350px]:gap-2 shrink-0">
                <Link
                  href="/user/dashboard"
                  className="px-2.5 min-[1300px]:px-3.5 min-[1500px]:px-4 py-1.5 rounded-full bg-[#47206A] hover:bg-[#C8A34A] text-[#DFC47A] hover:text-[#47206A] border border-[#DFC47A]/60 font-bold text-[11px] min-[1300px]:text-xs uppercase tracking-wider shadow-sm transition-all duration-300 flex items-center gap-1 min-[1300px]:gap-1.5 whitespace-nowrap shrink-0"
                >
                  <User className="w-3 h-3 min-[1300px]:w-3.5 min-[1300px]:h-3.5" />
                  <span>Dashboard</span>
                </Link>

                <button
                  onClick={handleLogout}
                  title="Log out of account"
                  className="px-2.5 min-[1300px]:px-3 min-[1500px]:px-3.5 py-1.5 rounded-full bg-red-600/80 hover:bg-red-700 text-white font-bold text-[11px] min-[1300px]:text-xs uppercase tracking-wider transition-all duration-300 flex items-center gap-1 cursor-pointer whitespace-nowrap shrink-0"
                >
                  <LogOut className="w-3 h-3 min-[1300px]:w-3.5 min-[1300px]:h-3.5" />
                  <span>Logout</span>
                </button>
              </div>
            ) : (
              <div className="hidden min-[1200px]:flex items-center gap-1.5 min-[1350px]:gap-2 shrink-0">
                <Link
                  href="/login"
                  className="px-2.5 min-[1300px]:px-3.5 min-[1500px]:px-4 py-1.5 rounded-full bg-[#FAF7F2] hover:bg-[#47206A] text-[#47206A] hover:text-white border border-[#DFC47A] font-bold text-[11px] min-[1300px]:text-xs uppercase tracking-wider transition-all duration-300 flex items-center gap-1 whitespace-nowrap shrink-0"
                >
                  <LogIn className="w-3 h-3 min-[1300px]:w-3.5 min-[1300px]:h-3.5 text-[#8C5D00]" />
                  <span>Log In</span>
                </Link>

                <Link
                  href="/register"
                  className="px-2.5 min-[1300px]:px-3.5 min-[1500px]:px-4 py-1.5 rounded-full bg-[#47206A] hover:bg-[#C8A34A] text-white hover:text-[#47206A] font-semibold text-[11px] min-[1300px]:text-xs uppercase tracking-wider shadow-md hover:scale-105 transition-all duration-300 flex items-center gap-1 min-[1300px]:gap-1.5 font-body group whitespace-nowrap shrink-0"
                >
                  <UserPlus className="w-3 h-3 min-[1300px]:w-3.5 min-[1300px]:h-3.5 text-[#DFC47A] group-hover:text-[#47206A]" />
                  <span>Register</span>
                </Link>
              </div>
            )}

            {/* Mobile & Tablet Header Controls (Visible below 1200px) */}
            <div className="flex min-[1200px]:hidden items-center gap-2.5 sm:gap-3">
              {user ? (
                /* User Profile Icon for sm/md screens -> Links to Dashboard */
                <Link
                  href="/user/dashboard"
                  className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-gradient-to-r from-[#47206A] via-[#3B104E] to-[#20052C] border-2 border-[#DFC47A]/80 flex items-center justify-center text-[#DFC47A] hover:border-[#C8A34A] group transition-all duration-300 shadow-md active:scale-95 shrink-0"
                  title="Go to Dashboard"
                >
                  <User className="w-5 h-5 sm:w-5.5 sm:h-5.5 text-[#DFC47A] group-hover:text-white transition-colors" />
                </Link>
              ) : (
                /* Log In Button next to Menu Toggle on sm/md screens */
                <Link
                  href="/login"
                  className="px-3.5 py-1.5 rounded-full bg-[#FAF7F2] hover:bg-[#47206A] text-[#47206A] hover:text-white border border-[#DFC47A] font-bold text-xs uppercase tracking-wider transition-all duration-300 flex items-center gap-1.5 whitespace-nowrap shadow-sm"
                >
                  <LogIn className="w-4 h-4 text-[#8C5D00]" />
                  <span>Log In</span>
                </Link>
              )}

              {/* 3-Bar Mobile Menu Toggle Button (No MENU text, 3 horizontal bars) */}
              <button
                onClick={() => setIsMobileOpen(!isMobileOpen)}
                aria-expanded={isMobileOpen}
                aria-label={isMobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
                className="relative group flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-gradient-to-r from-[#47206A] via-[#3B104E] to-[#20052C] text-[#DFC47A] border-2 border-[#DFC47A]/80 shadow-md hover:shadow-lg hover:border-[#C8A34A] transition-all duration-300 active:scale-95 shrink-0"
              >
                {/* Outer Golden Aura Glow on Hover */}
                <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-[#C8A34A] to-[#DFC47A] opacity-0 group-hover:opacity-40 blur-xs transition-opacity duration-300 pointer-events-none" />

                {/* 3-Bar / X Icon */}
                <div className="relative z-10 flex flex-col justify-center items-center w-5 h-5">
                  {isMobileOpen ? (
                    <X className="w-5 h-5 text-[#DFC47A]" />
                  ) : (
                    <div className="flex flex-col justify-center gap-1 w-5">
                      <span className="block w-full h-[2px] bg-[#DFC47A] rounded-full group-hover:bg-white transition-colors" />
                      <span className="block w-full h-[2px] bg-[#DFC47A] rounded-full group-hover:bg-white transition-colors" />
                      <span className="block w-full h-[2px] bg-[#DFC47A] rounded-full group-hover:bg-white transition-colors" />
                    </div>
                  )}
                </div>
              </button>
            </div>
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
            className="absolute top-full left-0 right-0 h-[calc(100vh-100%)] z-40 bg-black/70 backdrop-blur-md flex items-start justify-center p-3 sm:p-6 overflow-y-auto"
            onClick={() => setIsMobileOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-sm sm:max-w-md bg-[#FAF7F2] rounded-3xl border-2 border-[#DFC47A] shadow-2xl p-4 sm:p-6 my-1 sm:my-3 text-center relative overflow-y-auto max-h-[calc(100vh-80px)] [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
            >
              {/* Rich Visible Background Image Layer (nav-1.webp) */}
              <div
                className="absolute inset-0 opacity-90 pointer-events-none bg-cover bg-center bg-no-repeat z-0"
                style={{ backgroundImage: "url('/images/nav-2.webp')" }}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-[#FAF7F2]/40 via-[#FAF5EF]/20 to-[#FAF7F2]/45 pointer-events-none z-0" />

              {/* Subtle Golden Inner Border */}
              <div className="absolute inset-2 rounded-2xl border border-[#DFC47A]/40 pointer-events-none z-0" />

              <div className="relative z-10 flex flex-col gap-2 font-heading">
                {/* Action Buttons Block (Log In, Register, Music App) at Top of Mobile Menu */}
                <div className="w-full pb-3 mb-1 border-b border-[#E9DED3] flex flex-col items-center gap-2">
                  {user ? (
                    <>
                      <Link
                        href="/user/dashboard"
                        onClick={() => setIsMobileOpen(false)}
                        className="w-full py-2.5 px-4 rounded-full bg-[#47206A] hover:bg-[#C8A34A] text-[#DFC47A] hover:text-[#47206A] font-bold text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm transition-all duration-300 font-body"
                      >
                        <User className="w-4 h-4 text-[#DFC47A]" />
                        <span>User Dashboard</span>
                      </Link>
                      <button
                        onClick={() => {
                          setIsMobileOpen(false);
                          handleLogout();
                        }}
                        className="w-full py-2 px-4 rounded-full bg-red-600/80 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer transition-all"
                      >
                        <LogOut className="w-4 h-4" />
                        <span>Logout</span>
                      </button>
                    </>
                  ) : (
                    <div className="w-full grid grid-cols-2 gap-2">
                      <Link
                        href="/login"
                        onClick={() => setIsMobileOpen(false)}
                        className="py-2.5 px-3 rounded-full bg-[#FAF7F2] text-[#47206A] border border-[#DFC47A] font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-sm"
                      >
                        <LogIn className="w-3.5 h-3.5 text-[#8C5D00]" />
                        <span>Log In</span>
                      </Link>
                      <Link
                        href="/register"
                        onClick={() => setIsMobileOpen(false)}
                        className="py-2.5 px-3 rounded-full bg-[#47206A] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-sm"
                      >
                        <UserPlus className="w-3.5 h-3.5 text-[#DFC47A]" />
                        <span>Register</span>
                      </Link>
                    </div>
                  )}

                  <a
                    href={playStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsMobileOpen(false)}
                    className="w-full py-2.5 px-4 rounded-full bg-[#47206A] text-[#DFC47A] font-bold text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 font-body border-2 border-[#DFC47A]/80 shadow-sm"
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

                {menuLinks.map((link) => {
                  const hasChildren = link.children && link.children.length > 0;
                  const parentActive = isParentActive(link);

                  if (hasChildren) {
                    return (
                      <div key={link.name} className="space-y-1 py-0.5">
                        <div className="text-xs sm:text-sm font-extrabold text-[#8C5D00] uppercase tracking-[0.2em] border-b border-[#E9DED3] pb-0.5 mb-0.5">
                          {link.name}
                        </div>
                        <div className="space-y-0.5 pl-2">
                          {link.children?.map((subItem) => {
                            const childActive = isActive(subItem.path);
                            return (
                              <Link
                                key={subItem.path}
                                href={subItem.path}
                                onClick={() => setIsMobileOpen(false)}
                                className={`block text-sm sm:text-base tracking-wider font-bold uppercase py-1 px-3 rounded-lg transition-all duration-200 ${childActive
                                    ? 'text-[#C8A34A] bg-[#47206A]/5 font-extrabold'
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
                      className={`text-sm sm:text-base tracking-[0.15em] font-bold uppercase transition-all duration-300 py-1 px-3 rounded-lg w-full text-center ${parentActive
                          ? 'text-[#C8A34A] font-extrabold'
                          : 'text-[#47206A] hover:text-[#C8A34A]'
                        }`}
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
