'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Instagram, Youtube, Linkedin, Phone, Mail, Globe } from 'lucide-react';

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
            <div className="lg:col-span-3 flex flex-col items-center lg:items-end space-y-2">
              <span className="text-xs font-semibold text-white tracking-wider uppercase">
                Follow Us
              </span>
              <div className="flex items-center gap-2.5">
                {[Facebook, Instagram, Youtube, Linkedin].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-8 h-8 rounded-full bg-white/10 border border-[#DFC47A]/30 flex items-center justify-center text-[#DFC47A] hover:bg-[#C8A34A] hover:text-[#47206A] transition-all"
                  >
                    <Icon className="w-3.5 h-3.5" />
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
            <Link href="/" className="flex items-center gap-3 group">
              <div className="p-0.5 rounded-full bg-gradient-to-tr from-[#C8A34A] to-[#DFC47A]">
                <Image
                  src="/images/logo.png.webp"
                  alt="Divya Yogam"
                  width={40}
                  height={40}
                  className="w-10 h-10 rounded-full object-cover bg-white"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-heading text-xl font-bold tracking-wider text-[#C8A34A]">
                  DIVYA YOGAM
                </span>
                <span className="text-[8px] text-[#DFC47A] tracking-wider uppercase">
                  Awaken the Divine Within
                </span>
              </div>
            </Link>

            <p className="text-xs text-[#F8F2E8]/75 leading-relaxed max-w-xs font-light">
              A spiritual movement dedicated to inner transformation and global peace.
            </p>

            {/* Shambala App Link in Footer */}
            <div className="pt-2">
              <a
                href="https://play.google.com/store/apps/details?id=com.ignitelabs.music_app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-white/10 hover:bg-[#C8A34A] hover:text-[#22122F] border border-[#DFC47A]/30 text-[#DFC47A] text-xs font-semibold transition-all group"
              >
                <svg className="w-4 h-4 fill-current group-hover:scale-110 transition-transform" viewBox="0 0 512 512">
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
            <ul className="space-y-1.5 text-xs text-[#F8F2E8]/80">
              <li><Link href="/about" className="hover:text-[#C8A34A] transition-colors">About Us</Link></li>
              <li><Link href="/vision" className="hover:text-[#C8A34A] transition-colors">Our Path</Link></li>
              <li><Link href="/practices" className="hover:text-[#C8A34A] transition-colors">Programs</Link></li>
              <li><Link href="/gallery" className="hover:text-[#C8A34A] transition-colors">Gallery</Link></li>
              <li><Link href="/blog" className="hover:text-[#C8A34A] transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* Resources Links */}
          <div className="lg:col-span-2 space-y-2">
            <h4 className="font-heading text-sm font-bold text-[#DFC47A] uppercase tracking-wider">
              Resources
            </h4>
            <ul className="space-y-1.5 text-xs text-[#F8F2E8]/80">
              <li><Link href="/organ-meditation" className="hover:text-[#C8A34A] transition-colors">Meditation</Link></li>
              <li><Link href="/practices" className="hover:text-[#C8A34A] transition-colors">Yoga</Link></li>
              <li><Link href="/events" className="hover:text-[#C8A34A] transition-colors">Events/Retreats</Link></li>
              <li><Link href="/events" className="hover:text-[#C8A34A] transition-colors">Retreats</Link></li>
              <li><Link href="/quantum-habits" className="hover:text-[#C8A34A] transition-colors">Healing</Link></li>
            </ul>
          </div>

          {/* Support Links */}
          <div className="lg:col-span-2 space-y-2">
            <h4 className="font-heading text-sm font-bold text-[#DFC47A] uppercase tracking-wider">
              Support
            </h4>
            <ul className="space-y-1.5 text-xs text-[#F8F2E8]/80">
              <li><Link href="/contact" className="hover:text-[#C8A34A] transition-colors">FAQ</Link></li>
              <li><Link href="/contact" className="hover:text-[#C8A34A] transition-colors">Contact Us</Link></li>
              <li><Link href="/contact" className="hover:text-[#C8A34A] transition-colors">Volunteer</Link></li>
              <li><Link href="/contact" className="hover:text-[#C8A34A] transition-colors">Donate</Link></li>
            </ul>
          </div>

          {/* Contact Us Column */}
          <div className="lg:col-span-2 space-y-2">
            <h4 className="font-heading text-sm font-bold text-[#DFC47A] uppercase tracking-wider">
              Contact Us
            </h4>
            <ul className="space-y-2 text-xs text-[#F8F2E8]/80">
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#C8A34A]" />
                <span>+91 915 416 7920</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#C8A34A]" />
                <span>info@divyayogam.org</span>
              </li>
              <li className="flex items-center gap-2">
                <Globe className="w-3.5 h-3.5 text-[#C8A34A]" />
                <span>www.divyayogam.org</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 mt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-[#F8F2E8]/60 gap-4">
          <p>© 2026 Divya Yogam. All Rights Reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-[#C8A34A]">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-[#C8A34A]">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
