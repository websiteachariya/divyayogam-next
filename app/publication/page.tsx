'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import PageHero from '@/components/common/PageHero';
import {
  BookOpen,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Eye,
  X,
  Share2,
  Bookmark,
  Heart,
  Mail,
  Phone,
  Layers,
  Award
} from 'lucide-react';

interface BookItem {
  id: string;
  title: string;
  subTitle: string;
  tagline: string;
  category: string;
  frontCover: string;
  backCover?: string;
  description: string;
  highlights: string[];
  language: string;
  isBestseller?: boolean;
}

const PUBLICATIONS: BookItem[] = [
  {
    id: 'wow-parenting',
    title: 'WOW PARENTING',
    subTitle: 'Beyond The 5 Senses',
    tagline: 'Awaken Conscious Parenting & Child Mastery',
    category: 'Conscious Parenting & Family Wellness',
    frontCover: '/images/6.1_Wow Front.webp',
    backCover: '/images/6.2_Wow back.webp',
    description:
      'A ground-breaking, revolutionary guide for modern parents integrating organ awareness, quantum mindfulness, and 15 sacred steps for nurturing enlightened, emotionally resilient children.',
    highlights: [
      '15 Sacred Steps to Conscious Parenting',
      'Beyond the 5 Senses Mindset',
      'Emotional & Inner Organ Alignment',
      'Nurturing Genius & Character in Children'
    ],
    language: 'English',
    isBestseller: true
  },
  {
    id: 'andava',
    title: 'Andava',
    subTitle: 'Beyond the 5 Senses',
    tagline: 'Unlocking the Inner Cosmic Vibration',
    category: 'Sacred Sciences & Meditation',
    frontCover: '/images/1_Andava_new.webp',
    description:
      'Explore deep cosmic truths, sacred organ resonance, and ancient vibrational wisdom passed down through generations to awaken inner consciousness beyond physical limitations.',
    highlights: [
      'Cosmic Sound & Energy Vibrations',
      'Organ Meditation Principles',
      'Awakening Intuitive Perception',
      'Transformational Inner Journey'
    ],
    language: 'English',
    isBestseller: true
  },
  {
    id: 'knowing-to-doing',
    title: 'From Knowing to Doing',
    subTitle: 'Bridging Spiritual Wisdom into Daily Action',
    tagline: 'Transform Knowledge into Purposeful Habits',
    category: 'Quantum Habits & Self-Mastery',
    frontCover: '/images/2_From Knowing to Doing_new.webp',
    description:
      'Bridging the gap between reading philosophy and embodying truth. Discover actionable daily practices that convert spiritual knowledge into unbreakable life habits.',
    highlights: [
      'Practical Execution Strategies',
      'Breaking Subconscious Barriers',
      'Daily Discipline Framework',
      'Sustained Life Transformation'
    ],
    language: 'English'
  },
  {
    id: 'iqqi',
    title: 'IQQI',
    subTitle: 'The Revolutionary Matrix of Inner Intelligence',
    tagline: 'Intelligence Quotient & Quantum Intuition',
    category: 'Mind & Quantum Consciousness',
    frontCover: '/images/3.IQQI_new.webp',
    description:
      'A visionary exposition on combining Analytical Intelligence (IQ), Emotional Quotient (EQ), and Quantum Intuition (QI) into a unified matrix of human mastery.',
    highlights: [
      'The IQ-EQ-QI Synergy Matrix',
      'Unlocking Hidden Cognitive Potential',
      'Quantum Intuition Techniques',
      'Harmonizing Brain & Heart Resonance'
    ],
    language: 'English'
  },
  {
    id: 'lions-bank-account',
    title: 'The Lion\'s Bank Account',
    subTitle: 'Unlocking Abundance & Spiritual Wealth',
    tagline: 'Building Your Inner Karma Reserve',
    category: 'Sacred Abundance & Karma',
    frontCover: '/images/4. The Lions Bank Account_new.webp',
    description:
      'Learn how the immutable laws of karma, selfless contribution, and spiritual stewardship generate limitless prosperity and lasting inner peace.',
    highlights: [
      'Laws of Universal Abundance',
      'Cultivating Spiritual Equity',
      'Stewardship vs Possession',
      'Courageous Inner Strength'
    ],
    language: 'English'
  },
  {
    id: 'yoga-of-personality',
    title: 'Yoga of Personality',
    subTitle: 'Harmonizing Mind, Body & Inner Archetypes',
    tagline: 'Total Emotional Alignment & Inner Radiance',
    category: 'Yoga & Mindful Psychology',
    frontCover: '/images/5. Yoga of personality.webp',
    description:
      'An insightful synthesis of yogic science and modern personality dynamics, helping seekers balance emotional triggers, refine character, and shine with authentic aura.',
    highlights: [
      'Yogic Archetype Analysis',
      'Emotional Rebalancing Techniques',
      'Refining Authentic Presence',
      'Integrating Mind-Body Wellness'
    ],
    language: 'English'
  },
  {
    id: 'thiruvalluvar',
    title: 'Thiruvalluvar Araviyal',
    subTitle: 'திருவள்ளுவர் அறவியல்',
    tagline: 'Timeless Tamil Ethics & Spiritual Heritage',
    category: 'Classical Heritage & Philosophy',
    frontCover: '/images/thiruvalluvar.webp',
    description:
      'A profound commentary and practical exploration of Thirukkural ethics, purposeful living, righteous action (Aram), and the ancient Tamil spiritual tradition.',
    highlights: [
      'Deep Thirukkural Interpretations',
      'Righteous Living (Aram, Porul, Inbam)',
      'Universal Moral Wisdom',
      'Tamil Spiritual Legacy'
    ],
    language: 'Tamil / English',
    isBestseller: true
  }
];

export default function PublicationPage() {
  const [selectedBook, setSelectedBook] = useState<BookItem | null>(null);
  const [activeCover, setActiveCover] = useState<'front' | 'back'>('front');

  const openBookModal = (book: BookItem) => {
    setSelectedBook(book);
    setActiveCover('front');
  };

  const closeModal = () => {
    setSelectedBook(null);
  };

  return (
    <div className="bg-transparent font-body min-h-screen relative overflow-x-hidden text-[#352043]">
      {/* Background Image Overlay (con-6.webp matching Wellness, Contact & Membership Pages) */}
      <div
        className="absolute inset-0 opacity-85 pointer-events-none bg-cover bg-center bg-no-repeat bg-fixed z-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(250, 245, 239, 0.5), rgba(250, 245, 239, 0.65)), url('/images/con-6.webp')"
        }}
      />

      {/* Dedicated Luxury Hero Section with Left & Right Golden Flourishes matching About Master Page */}
      <header className="relative bg-gradient-to-b from-[#2B083A] via-[#3B104E] to-[#20052C] pt-36 sm:pt-40 md:pt-44 lg:pt-48 pb-16 sm:pb-20 text-center text-white overflow-hidden font-body border-b border-[#DFC47A]/30">

        {/* Left Side Golden Accent Ornament (test-1.webp) */}
        <div className="absolute top-[55%] sm:top-[53%] lg:top-1/2 left-0 -translate-y-1/2 opacity-60 sm:opacity-70 md:opacity-75 lg:opacity-80 xl:opacity-85 pointer-events-none w-20 h-20 min-[420px]:w-28 min-[420px]:h-28 sm:w-36 sm:h-36 md:w-52 md:h-52 lg:w-[320px] lg:h-[320px] xl:w-[440px] xl:h-[440px] 2xl:w-[520px] 2xl:h-[520px] -translate-x-1/4 sm:translate-x-0 transition-all duration-300">
          <Image
            src="/images/test-1.webp"
            alt="Left Sacred Ornament"
            fill
            className="object-contain object-left"
            priority
          />
        </div>

        {/* Right Side Golden Accent Ornament (test-1.webp mirrored) */}
        <div className="absolute top-[55%] sm:top-[53%] lg:top-1/2 right-0 -translate-y-1/2 opacity-60 sm:opacity-70 md:opacity-75 lg:opacity-80 xl:opacity-85 pointer-events-none w-20 h-20 min-[420px]:w-28 min-[420px]:h-28 sm:w-36 sm:h-36 md:w-52 md:h-52 lg:w-[320px] lg:h-[320px] xl:w-[440px] xl:h-[440px] 2xl:w-[520px] 2xl:h-[520px] translate-x-1/4 sm:translate-x-0 scale-x-[-1] transition-all duration-300">
          <Image
            src="/images/test-1.webp"
            alt="Right Sacred Ornament"
            fill
            className="object-contain object-right"
            priority
          />
        </div>

        {/* Background Sacred Geometric Circular Mandala Watermark SVG */}
        <div className="absolute top-[55%] sm:top-[53%] lg:top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-25 pointer-events-none z-0">
          <svg width="700" height="700" viewBox="0 0 200 200" fill="none" stroke="#DFC47A" strokeWidth="0.5">
            <circle cx="100" cy="100" r="96" strokeWidth="0.6" strokeDasharray="2 2" />
            <circle cx="100" cy="100" r="86" strokeWidth="0.4" />
            <circle cx="100" cy="100" r="76" strokeWidth="0.6" />
            <circle cx="100" cy="100" r="60" strokeWidth="0.4" strokeDasharray="3 3" />
            <circle cx="100" cy="100" r="44" strokeWidth="0.5" />
            <g strokeWidth="0.4" opacity="0.7">
              <path d="M100,10 C115,50 115,70 100,100 C85,70 85,50 100,10 Z" fill="rgba(223,196,122,0.03)" />
              <path d="M100,190 C115,150 115,130 100,100 C85,130 85,150 100,190 Z" fill="rgba(223,196,122,0.03)" />
              <path d="M10,100 C50,115 70,115 100,100 C70,85 50,85 10,100 Z" fill="rgba(223,196,122,0.03)" />
              <path d="M190,100 C150,115 130,115 100,100 C130,85 150,85 190,100 Z" fill="rgba(223,196,122,0.03)" />
            </g>
          </svg>
        </div>

        {/* Ambient Center Glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#C8A34A]/20 blur-3xl rounded-full pointer-events-none z-0" />

        {/* Hero Content Container */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-20 space-y-5">
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full bg-white/10 border border-[#DFC47A]/40 text-[#DFC47A] text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] shadow-lg backdrop-blur-md"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#DFC47A]" />
            DIVYA YOGAM · SACRED LITERATURE &amp; BOOKS
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="space-y-3"
          >
            <h1 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
              <span className="text-[#DFC47A] italic font-serif font-normal drop-shadow-[0_2px_12px_rgba(223,196,122,0.35)]">Publications</span>
            </h1>

            {/* Author & Publisher Highlight Bar */}
            <div className="flex items-center justify-center gap-2 sm:gap-3 text-[#DFC47A] text-[11px] sm:text-xs lg:text-sm font-bold uppercase tracking-[0.14em] font-body flex-wrap max-w-3xl mx-auto pt-2">
              <span className="text-white/80 font-semibold">AUTHORED, DEVELOPED &amp; PUBLISHED BY</span>
              <span className="text-[#C8A34A] text-[9px]">◆</span>
              <span className="text-[#DFC47A] font-extrabold border-b-2 border-[#DFC47A] pb-0.5 text-xs sm:text-sm lg:text-base">
                SANTOSHI SHRI. ARAWINDHAN JI
              </span>
              <span className="text-white/70 font-medium"> </span>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-serif italic text-lg sm:text-xl lg:text-2xl text-white/95 max-w-2xl mx-auto font-normal leading-relaxed pt-1"
          >
            “Transformational Books &amp; Literature for Awakening Human Potential”
          </motion.p>

          {/* Golden Lotus Flourish Divider */}
          <div className="relative w-full max-w-xs mx-auto h-8 pt-1 pointer-events-none">
            <Image
              src="/images/deco-15.webp"
              alt="Sacred Lotus Divider"
              fill
              className="object-contain drop-shadow-[0_0_12px_rgba(223,196,122,0.6)]"
            />
          </div>
        </div>
      </header>

      {/* Main Publications Grid */}
      <section className="py-12 sm:py-16 lg:py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#352043] text-[#DFC47A] border border-[#DFC47A]/40 text-xs font-bold uppercase tracking-widest shadow-md">
              <BookOpen className="w-3.5 h-3.5 text-[#DFC47A]" />
              DEVELOPED &amp; PUBLISHED BY SANTOSHI SHRI. ARAWINDHAN JI
            </span>
            <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-[#352043]">
              Books for <span className="font-serif italic font-normal text-[#8C5D00]">Inner Awakening</span>
            </h2>
            <p className="text-[#5E5865] text-sm sm:text-base font-normal max-w-xl mx-auto">
              Authored, developed, and published by Santoshi Shri. Arawindhan Ji  to guide seekers from theoretical wisdom to experiential mastery.
            </p>
          </div>

          {/* Grid of Books */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            {PUBLICATIONS.map((book, idx) => (
              <motion.div
                key={book.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white/95 backdrop-blur-xl rounded-3xl border-2 border-[#DFC47A]/60 p-6 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between space-y-6 group"
              >
                {/* Book Image Cover Frame */}
                <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-b from-[#FAF7F2] to-[#FAF5EF] border border-[#DFC47A]/40 flex items-center justify-center p-3 shadow-inner group-hover:border-[#DFC47A] transition-colors">
                

                  <div className="relative w-full h-full transform group-hover:scale-105 transition-transform duration-500 flex items-center justify-center">
                    <Image
                      src={book.frontCover}
                      alt={book.title}
                      fill
                      className="object-contain drop-shadow-xl"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>

                  {/* Hover Overlay View Cover */}
                  <div className="absolute inset-0 bg-[#352043]/70 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                    <button
                      onClick={() => openBookModal(book)}
                      className="px-4 py-2 rounded-full bg-[#DFC47A] text-[#2B083A] text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-lg hover:scale-105 transition-transform"
                    >
                      <Eye className="w-4 h-4" />
                      <span>Preview Cover</span>
                    </button>
                  </div>
                </div>

                {/* Book Meta Details */}
                <div className="space-y-3 flex-1 flex flex-col justify-between">
                  <div className="space-y-1">
                    <div className="flex items-center justify-between text-[11px] font-bold text-[#8C5D00] uppercase tracking-wider">
                      <span>{book.category}</span>
                      <span className="px-2 py-0.5 rounded-full bg-[#FAF5EF] border border-[#DFC47A]/40 text-[#47206A]">
                        {book.language}
                      </span>
                    </div>

                    <h3 className="font-heading text-xl sm:text-2xl font-extrabold text-[#352043] leading-snug">
                      {book.title}
                    </h3>
                    <p className="text-xs font-semibold text-[#8C5D00] italic">
                      {book.subTitle || book.tagline}
                    </p>
                  </div>

                  <p className="text-xs text-[#5E5865] leading-relaxed line-clamp-3 font-normal pt-1">
                    {book.description}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="pt-2 border-t border-[#E9DED3] space-y-1.5">
                    {book.highlights.slice(0, 2).map((item, hIdx) => (
                      <div key={hIdx} className="flex items-center gap-2 text-xs text-[#352043]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#8C5D00] shrink-0" />
                        <span className="font-medium truncate">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action Button */}
                <div className="pt-2">
                  <button
                    onClick={() => openBookModal(book)}
                    className="w-full py-3 rounded-full bg-[#352043] hover:bg-[#8C5D00] text-white font-bold text-xs uppercase tracking-wider shadow-md hover:scale-102 transition-all flex items-center justify-center gap-2"
                  >
                    <BookOpen className="w-4 h-4 text-[#DFC47A]" />
                    <span>View Details &amp; Inquiry</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Book Preview Modal */}
      <AnimatePresence>
        {selectedBook && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-3xl rounded-3xl bg-white border-2 border-[#DFC47A] shadow-2xl overflow-hidden font-body text-[#352043] my-8"
            >
              {/* Modal Header */}
              <div className="bg-gradient-to-r from-[#2B083A] via-[#3B104E] to-[#20052C] text-white p-5 sm:p-6 flex items-center justify-between border-b border-[#DFC47A]/40">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#DFC47A]/20 border border-[#DFC47A]/50 flex items-center justify-center text-[#DFC47A]">
                    <Award className="w-5 h-5 text-[#DFC47A]" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-bold text-white leading-snug">
                      {selectedBook.title}
                    </h3>
                    <span className="text-xs text-[#DFC47A] font-semibold">
                      {selectedBook.category} · {selectedBook.language}
                    </span>
                  </div>
                </div>

                <button
                  onClick={closeModal}
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6 sm:p-8 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                  {/* Left Column: Image Viewer */}
                  <div className="md:col-span-5 space-y-3">
                    <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden bg-[#FAF7F2] border border-[#DFC47A]/50 p-2 shadow-lg flex items-center justify-center">
                      <Image
                        src={
                          selectedBook.backCover && activeCover === 'back'
                            ? selectedBook.backCover
                            : selectedBook.frontCover
                        }
                        alt={selectedBook.title}
                        fill
                        className="object-contain"
                        sizes="(max-width: 768px) 100vw, 300px"
                      />
                    </div>

                    {/* Front / Back Switcher for WOW Parenting */}
                    {selectedBook.backCover && (
                      <div className="flex items-center justify-center gap-2 pt-1">
                        <button
                          onClick={() => setActiveCover('front')}
                          className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${
                            activeCover === 'front'
                              ? 'bg-[#47206A] text-[#DFC47A] shadow-md'
                              : 'bg-[#FAF5EF] text-[#5E5865] border border-[#DFC47A]/40'
                          }`}
                        >
                          Front Cover
                        </button>
                        <button
                          onClick={() => setActiveCover('back')}
                          className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${
                            activeCover === 'back'
                              ? 'bg-[#47206A] text-[#DFC47A] shadow-md'
                              : 'bg-[#FAF5EF] text-[#5E5865] border border-[#DFC47A]/40'
                          }`}
                        >
                          Back Cover
                        </button>
                      </div>
                    )}
                  </div>

                  {/* Right Column: Book Details */}
                  <div className="md:col-span-7 space-y-4">
                    <div>
                      <h4 className="text-xl sm:text-2xl font-extrabold font-heading text-[#352043]">
                        {selectedBook.title}
                      </h4>
                      <p className="text-xs font-bold text-[#8C5D00] mt-0.5">
                        {selectedBook.subTitle}
                      </p>
                    </div>

                    <p className="text-xs text-[#5E5865] leading-relaxed font-normal">
                      {selectedBook.description}
                    </p>

                    {/* Key Highlights */}
                    <div className="space-y-2 pt-2">
                      <h5 className="text-xs font-extrabold uppercase tracking-wider text-[#352043]">
                        Key Highlights:
                      </h5>
                      <ul className="space-y-1.5 text-xs text-[#5E5865]">
                        {selectedBook.highlights.map((hl, hIdx) => (
                          <li key={hIdx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-[#8C5D00] shrink-0 mt-0.5" />
                            <span>{hl}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Modal Inquiry Actions */}
                    <div className="pt-4 flex flex-col sm:flex-row gap-3">
                      <Link
                        href="/contact"
                        onClick={closeModal}
                        className="flex-1 py-3 px-4 rounded-full bg-[#352043] hover:bg-[#8C5D00] text-white font-bold text-xs uppercase tracking-wider text-center transition-all shadow-md"
                      >
                        Inquire for Book Copy
                      </Link>
                      <button
                        onClick={closeModal}
                        className="px-5 py-3 rounded-full bg-[#FAF5EF] text-[#352043] border border-[#DFC47A] font-bold text-xs uppercase tracking-wider transition-all hover:bg-gray-100"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
