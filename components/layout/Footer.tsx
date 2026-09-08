'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Instagram, Youtube, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#352043] text-[#F8F2E8] relative overflow-hidden font-body">

      {/* Top Newsletter & Social Banner matching Reference UI */}
      <div className="bg-[#2D1A39] border-b border-[#DFC47A]/20 relative overflow-hidden py-12">
        {/* Background Royal Golden Floral Corner (deco-21.png) Right */}
        <div className="absolute -right-2 sm:right-0 top-0 bottom-0 pointer-events-none hidden lg:block w-[280px] sm:w-[340px] h-full z-0 opacity-75">
          <Image
            src="/images/deco-21.webp"
            alt="Royal Golden Corner Flower Deco"
            fill
            className="object-contain object-right-top drop-shadow-[0_0_20px_rgba(223,196,122,0.4)]"
            priority
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

            {/* Newsletter Title Left */}
            <div className="lg:col-span-4 space-y-1 text-center lg:text-left">
              <h3 className="font-heading text-2xl font-bold text-white">
                Stay Connected
              </h3>
              <p className="text-xs text-[#DFC47A] font-light">
                Subscribe to our newsletter for updates on events and programs.
              </p>
            </div>

            {/* Newsletter Input Center */}
            <div className="lg:col-span-5">
              <form onSubmit={(e) => e.preventDefault()} className="flex gap-2 max-w-md mx-auto lg:mx-0">
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2.5 rounded-full bg-white text-[#5E5865] placeholder:text-[#8A8394] text-xs focus:outline-none focus:ring-2 focus:ring-[#C8A34A]"
                />
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-full bg-[#C8A34A] hover:bg-[#DFC47A] text-[#47206A] font-semibold text-xs uppercase tracking-wider transition-colors shadow-md shrink-0"
                >
                  Subscribe
                </button>
              </form>
            </div>

            {/* Social Icons Right */}
            <div className="lg:col-span-3 flex flex-col items-center lg:items-end space-y-2.5">
              <span className="text-xs sm:text-sm font-bold text-white tracking-wider uppercase">
                Follow Us
              </span>
              <div className="flex items-center gap-3">
                {[Facebook, Instagram, Youtube].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    aria-label="Follow us on social media"
                    className="w-9 sm:w-10 h-9 sm:h-10 rounded-full bg-white/10 border border-[#DFC47A]/30 flex items-center justify-center text-[#DFC47A] hover:bg-[#C8A34A] hover:text-[#47206A] transition-all hover:scale-110 shadow-sm"
                  >
                    <Icon className="w-4 sm:w-5 h-4 sm:h-5" />
                  </a>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">

          {/* Brand Logo & Description */}
          <div className="lg:col-span-4 space-y-3">
            <Link href="/" className="flex items-center group relative">
              <Image
                src="/images/shambalalogo.png"
                alt="Divya Yogam - Awaken the Divine Within"
                width={320}
                height={80}
                className="h-14 sm:h-16 md:h-20 lg:h-22 xl:h-24 w-auto object-contain drop-shadow-[0_2px_12px_rgba(200,163,74,0.45)] group-hover:scale-105 transition-all duration-300"
                style={{
                  filter: 'brightness(0) saturate(100%) invert(80%) sepia(45%) saturate(750%) hue-rotate(2deg) brightness(105%) contrast(105%)',
                }}
              />
            </Link>

            <p className="text-xs sm:text-sm text-[#F8F2E8]/75 leading-relaxed max-w-xs font-light">
              A spiritual movement dedicated to inner transformation and global peace.
            </p>
            <p className="text-xs sm:text-sm text-[#DFC47A] font-light italic">
              An initiative of <span className="font-semibold text-[#C8A34A]">Divine Grace Foundation</span>
            </p>

            {/* Shambala App Link in Footer */}
            <div className="pt-2">
              <a
                href="https://play.google.com/store/apps/details?id=com.ignitelabs.music_app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-[#C8A34A] hover:text-[#22122F] border border-[#DFC47A]/30 text-[#DFC47A] text-xs sm:text-sm font-semibold transition-all group shadow-sm"
              >
                <svg className="w-4 sm:w-5 h-4 sm:h-5 fill-current group-hover:scale-110 transition-transform shrink-0" viewBox="0 0 512 512">
                  <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l220.7-221.3 60.1 60.1L104.6 499z" />
                </svg>
                <span>Get Shambala Music App</span>
              </a>
            </div>
          </div>

          {/* Explore Links */}
          <div className="lg:col-span-2 space-y-2">
            <h4 className="font-heading text-sm font-bold text-[#DFC47A] uppercase tracking-wider">
              Explore
            </h4>
            <ul className="space-y-1.5 text-xs sm:text-sm text-[#F8F2E8]/80">
              <li><Link href="/about" className="hover:text-[#C8A34A] transition-colors">About Us</Link></li>
              <li><Link href="/vision" className="hover:text-[#C8A34A] transition-colors">Our Path</Link></li>
              <li><Link href="/practices" className="hover:text-[#C8A34A] transition-colors">Programs</Link></li>
              <li><Link href="/gallery" className="hover:text-[#C8A34A] transition-colors">Gallery</Link></li>
              <li><Link href="/organ-meditation" className="hover:text-[#C8A34A] transition-colors">Organ Meditation</Link></li>
            </ul>
          </div>

          {/* Resources Links */}
          <div className="lg:col-span-2 space-y-2">
            <h4 className="font-heading text-sm font-bold text-[#DFC47A] uppercase tracking-wider">
              Resources
            </h4>
            <ul className="space-y-1.5 text-xs sm:text-sm text-[#F8F2E8]/80">
              <li><Link href="/organ-meditation" className="hover:text-[#C8A34A] transition-colors">Meditation</Link></li>
              <li><Link href="/practices" className="hover:text-[#C8A34A] transition-colors">Yoga</Link></li>
              <li><Link href="/events" className="hover:text-[#C8A34A] transition-colors">Events</Link></li>
              <li><Link href="/beneficiaries" className="hover:text-[#C8A34A] transition-colors">Beneficiaries</Link></li>
              <li><Link href="/quantum-habits" className="hover:text-[#C8A34A] transition-colors">Quantum Habits</Link></li>
            </ul>
          </div>

          {/* Support Links */}
          <div className="lg:col-span-2 space-y-2">
            <h4 className="font-heading text-sm font-bold text-[#DFC47A] uppercase tracking-wider">
              Support
            </h4>
            <ul className="space-y-1.5 text-xs sm:text-sm text-[#F8F2E8]/80">
              <li><Link href="/testimonials" className="hover:text-[#C8A34A] transition-colors">Testimonials</Link></li>
              <li><Link href="/contact" className="hover:text-[#C8A34A] transition-colors">Contact Us</Link></li>
              <li><Link href="/volunteer" className="hover:text-[#C8A34A] transition-colors">Volunteer</Link></li>
              <li><Link href="/membership" className="hover:text-[#C8A34A] transition-colors">Membership</Link></li>
              <li><Link href="/contact" className="hover:text-[#C8A34A] transition-colors">Donate</Link></li>
            </ul>
          </div>

          {/* Contact Us Column */}
          <div className="lg:col-span-2 space-y-2">
            <h4 className="font-heading text-sm font-bold text-[#DFC47A] uppercase tracking-wider">
              Contact Us
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-[#F8F2E8]/80">
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 sm:w-4.5 h-4 sm:h-4.5 text-[#C8A34A] shrink-0 mt-0.5" />
                <div className="flex flex-col space-y-0.5">
                  <a href="tel:+919500117358" className="hover:text-[#C8A34A] transition-colors">+91 95001 17358</a>
                  <a href="tel:+919489514685" className="hover:text-[#C8A34A] transition-colors">+91 94895 14685</a>
                </div>
              </li>
              <li className="flex items-center gap-2.5 pt-1">
                <Mail className="w-4 sm:w-4.5 h-4 sm:h-4.5 text-[#C8A34A] shrink-0" />
                <span>info@divyayogam.org</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 mt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-[#F8F2E8]/60 gap-4">
          <div className="text-center sm:text-left space-y-1">
            <p>© 2026 Divya Yogam. An initiative of Divine Grace Foundation. All Rights Reserved.</p>
            <p className="text-[10px] text-[#F8F2E8]/40">R.S.Nos.222/1, 222/2, Pondy Main Road, Villianur, Puducherry - 605 110</p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 shrink-0">
            <Link href="/privacy-policy" className="hover:text-[#C8A34A] transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-[#C8A34A] transition-colors">Terms &amp; Conditions</Link>
            <Link href="/refund-policy" className="hover:text-[#C8A34A] transition-colors">Refund &amp; Cancellation Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
