'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Clock, Calendar, User, Search, BookOpen } from 'lucide-react';

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    'All',
    'Meditation Science',
    'Quantum Habits',
    'Vedic Philosophy',
    'Organ Health',
    'Mindfulness',
  ];

  const featuredPost = {
    title: 'Understanding Cellular Memory & Emotional Release in Organ Meditation',
    category: 'Meditation Science',
    date: 'August 24, 2026',
    readTime: '8 min read',
    author: 'Swami Divyananda',
    authorRole: 'Master Practitioner',
    excerpt: 'Discover how specific sound frequencies, bio-cellular vibrations, and conscious breath retention help flush stored emotional trauma from human organ tissues.',
    image: '/images/beni-1.webp',
  };

  const posts = [
    {
      id: 1,
      title: 'Brahma Muhurta: The Ambrosial Hours of Cosmic Awakening',
      category: 'Quantum Habits',
      date: 'August 18, 2026',
      readTime: '7 min read',
      author: 'Achyuta Dasa',
      excerpt: 'Why waking up between 4:30 AM and 6:00 AM aligns your neurobiology with subtle cosmic energy fields.',
      image: '/images/beni-4.webp',
    },
    {
      id: 2,
      title: 'The Pancha Kosha Map: Cleansing the 5 Sheaths of Consciousness',
      category: 'Vedic Philosophy',
      date: 'August 12, 2026',
      readTime: '6 min read',
      author: 'Dr. Anand Kumar',
      excerpt: 'A comprehensive guide to systematically purifying your physical, vital, mental, intuitive, and bliss bodies.',
      image: '/images/beni-1.webp',
    },
    {
      id: 3,
      title: 'Bio-Vibrational Sound Therapy for Cellular Rejuvenation',
      category: 'Organ Health',
      date: 'August 5, 2026',
      readTime: '5 min read',
      author: 'Swami Divyananda',
      excerpt: 'How ancient Vedic mantras resonate at harmonic frequencies to revitalize vital organs and restore immunity.',
      image: '/images/beni-4.webp',
    },
    {
      id: 4,
      title: 'Mastering Mindful Breathing in Fast-Paced Corporate Workspaces',
      category: 'Mindfulness',
      date: 'July 28, 2026',
      readTime: '5 min read',
      author: 'Radhika Sharma',
      excerpt: 'Practical micro-meditation techniques designed for high-stress professionals seeking instant mental clarity.',
      image: '/images/beni-1.webp',
    },
    {
      id: 5,
      title: 'Subtle Energy Channels: Balancing Nadis and Chakra Vortices',
      category: 'Meditation Science',
      date: 'July 20, 2026',
      readTime: '9 min read',
      author: 'Achyuta Dasa',
      excerpt: 'Unlocking the flow of Prana through Ida, Pingala, and Sushumna nadis for deep inner transformation.',
      image: '/images/beni-4.webp',
    },
    {
      id: 6,
      title: 'Quantum Intentions: Transforming Daily Routines into Sacred Sadhana',
      category: 'Quantum Habits',
      date: 'July 14, 2026',
      readTime: '6 min read',
      author: 'Swami Divyananda',
      excerpt: 'Infusing conscious awareness into eating, walking, sleeping, and speaking for holistic well-being.',
      image: '/images/beni-1.webp',
    },
  ];

  const filteredPosts = posts.filter((post) => {
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-transparent font-body min-h-screen relative overflow-x-hidden">
      
      {/* Fixed Background Image Overlay (con-6.webp Sandal Texture matching About Page) */}
      <div
        suppressHydrationWarning
        className="fixed inset-0 -z-40 bg-[#FAF5EF] bg-cover bg-center bg-fixed bg-no-repeat pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(250, 245, 239, 0.5), rgba(250, 245, 239, 0.65)), url('/images/con-6.webp')",
        }}
      />

      {/* ═══ CENTERED HERO BANNER WITH LEFT & RIGHT FLORAL ORNAMENTS (MATCHING SCREENSHOT) ═══ */}
      <header className="relative bg-[#1A072A] text-white overflow-hidden pt-28 sm:pt-32 lg:pt-36 pb-10 sm:pb-12 lg:pb-14 flex flex-col items-center justify-center text-center">
        
        {/* Left Side Accent Image (test-1.webp) - Vertically Centered */}
        <div className="absolute top-[55%] sm:top-[53%] lg:top-1/2 left-0 -translate-y-1/2 opacity-70 sm:opacity-80 lg:opacity-90 pointer-events-none z-10 w-24 h-24 min-[420px]:w-32 min-[420px]:h-32 sm:w-44 sm:h-44 md:w-60 md:h-60 lg:w-[340px] lg:h-[340px] xl:w-[460px] xl:h-[460px] 2xl:w-[540px] 2xl:h-[540px] -translate-x-1/4 sm:translate-x-0 mix-blend-screen transition-all duration-300">
          <Image
            src="/images/test-1.webp"
            alt="Left Golden Sacred Ornament"
            fill
            quality={100}
            priority
            unoptimized
            className="object-contain object-left drop-shadow-[0_0_25px_rgba(223,196,122,0.5)]"
          />
        </div>

        {/* Right Side Accent Image (test-1.webp mirrored) - Vertically Centered */}
        <div className="absolute top-[55%] sm:top-[53%] lg:top-1/2 right-0 -translate-y-1/2 opacity-70 sm:opacity-80 lg:opacity-90 pointer-events-none z-10 w-24 h-24 min-[420px]:w-32 min-[420px]:h-32 sm:w-44 sm:h-44 md:w-60 md:h-60 lg:w-[340px] lg:h-[340px] xl:w-[460px] xl:h-[460px] 2xl:w-[540px] 2xl:h-[540px] translate-x-1/4 sm:translate-x-0 scale-x-[-1] mix-blend-screen transition-all duration-300">
          <Image
            src="/images/test-1.webp"
            alt="Right Golden Sacred Ornament"
            fill
            quality={100}
            priority
            unoptimized
            className="object-contain object-right drop-shadow-[0_0_25px_rgba(223,196,122,0.5)]"
          />
        </div>

        {/* Center Sacred Geometry Mandala Background Overlay */}
        <div className="absolute inset-0 opacity-15 pointer-events-none flex items-center justify-center z-0">
          <svg width="650" height="650" viewBox="0 0 200 200" fill="none" stroke="#DFC47A" strokeWidth="0.5">
            <circle cx="100" cy="100" r="95" strokeDasharray="3 3" />
            <circle cx="100" cy="100" r="80" />
            <circle cx="100" cy="100" r="60" />
            <path d="M100 5 L100 195 M5 100 L195 100" strokeDasharray="2 2" />
            <polygon points="100,20 170,140 30,140" strokeWidth="0.4" />
            <polygon points="100,180 170,60 30,60" strokeWidth="0.4" />
          </svg>
        </div>

        {/* Hero Content Container */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-20 space-y-4 pt-2 sm:pt-4">
          
          {/* Centered Eyebrow Badge */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-[#DFC47A]/50 text-[#DFC47A] text-xs font-semibold uppercase tracking-widest backdrop-blur-md shadow-md"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#DFC47A]" />
            <span>WISDOM ARTICLES &amp; BLOG</span>
          </motion.div>

          {/* Centered Large Headline */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight"
          >
            Insights &amp; <span className="text-[#DFC47A] italic font-serif font-normal">Vedic Wisdom</span>
          </motion.h1>

          {/* Centered Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-serif italic text-base sm:text-lg text-[#F8F2E8]/90 max-w-2xl mx-auto leading-relaxed"
          >
            Whether you seek understanding of organ meditation practices, bio-cellular alignment, Pancha Kosha purification, or quantum habits, we share authentic guidance for your inner journey.
          </motion.p>

          {/* Centered Gold Diamond Divider */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center justify-center gap-3 pt-2"
          >
            <div className="h-[1px] w-16 bg-gradient-to-r from-transparent to-[#DFC47A]" />
            <span className="text-[#DFC47A] text-xs">❖</span>
            <div className="h-[1px] w-16 bg-gradient-to-l from-transparent to-[#DFC47A]" />
          </motion.div>

        </div>
      </header>

      {/* ═══ FEATURED ARTICLE SPOTLIGHT ═══ */}
      <section id="featured-article" className="py-16 sm:py-20 relative overflow-hidden">
        {/* Rich Sandal Background Image Overlay (con-6.webp) matching About Page */}
        <div
          className="absolute inset-0 opacity-85 pointer-events-none bg-cover bg-center bg-no-repeat bg-fixed z-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(250, 245, 239, 0.5), rgba(250, 245, 239, 0.65)), url('/images/con-6.webp')",
          }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="mb-8 flex items-center justify-between">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full royal-gold-badge text-xs uppercase tracking-widest font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-[#8C5D00]" />
              FEATURED STORY
            </div>
          </div>

          <div className="bg-white border-2 border-[#DFC47A] rounded-[32px] p-6 sm:p-8 lg:p-10 shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Featured Image */}
            <div className="lg:col-span-6 relative aspect-[16/10] lg:aspect-[4/3] rounded-2xl overflow-hidden shadow-md group">
              <Image
                src={featuredPost.image}
                alt={featuredPost.title}
                fill
                quality={100}
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-4 left-4 bg-[#351A4A] text-[#DFC47A] text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-[#DFC47A]/40">
                {featuredPost.category}
              </div>
            </div>

            {/* Featured Content */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex flex-wrap items-center gap-4 text-xs text-[#5A4866]">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-[#8C5D00]" />
                  {featuredPost.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-[#8C5D00]" />
                  {featuredPost.readTime}
                </span>
                <span className="flex items-center gap-1">
                  <User className="w-3.5 h-3.5 text-[#8C5D00]" />
                  {featuredPost.author} ({featuredPost.authorRole})
                </span>
              </div>

              <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#2A1338] leading-tight hover:text-[#8C5D00] transition-colors">
                {featuredPost.title}
              </h2>

              <p className="font-body text-sm sm:text-base text-[#5A4866] leading-relaxed">
                {featuredPost.excerpt}
              </p>

              <div className="pt-2">
                <Link
                  href="/sciences"
                  className="px-7 py-3 rounded-full bg-[#351A4A] hover:bg-[#8C5D00] text-[#DFC47A] hover:text-white font-bold text-xs uppercase tracking-wider shadow-md inline-flex items-center gap-2 transition-all duration-300 group"
                >
                  <span>Read Full Article</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ═══ FILTER TABS & SEARCH BAR ═══ */}
      <section id="article-grid" className="py-8 sm:py-12 relative overflow-hidden">
        {/* Rich Sandal Background Image Overlay (con-6.webp) matching About Page */}
        <div
          className="absolute inset-0 opacity-85 pointer-events-none bg-cover bg-center bg-no-repeat bg-fixed z-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(250, 245, 239, 0.5), rgba(250, 245, 239, 0.65)), url('/images/con-6.webp')",
          }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-white border border-[#EADCC9] rounded-2xl p-4 sm:p-6 shadow-sm">
            {/* Category Filter Tabs */}
            <div className="flex flex-wrap items-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                    activeCategory === cat
                      ? 'bg-[#351A4A] text-[#DFC47A] shadow-md border border-[#DFC47A]'
                      : 'bg-[#FAF6F0] text-[#5A4866] hover:bg-[#DFC47A]/20 hover:text-[#2A1338]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Input Box */}
            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 text-[#8C5D00] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-full bg-[#FAF6F0] border border-[#DFC47A]/50 text-xs font-body text-[#2A1338] placeholder-[#8A8394] focus:outline-none focus:border-[#8C5D00] focus:ring-1 focus:ring-[#8C5D00]"
              />
            </div>
          </div>

          {/* ═══ ARTICLES GRID ═══ */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white border-2 border-[#DFC47A]/60 hover:border-[#8C5D00] rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Article Thumbnail */}
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      quality={100}
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-3 left-3 bg-[#351A4A]/90 text-[#DFC47A] text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full border border-[#DFC47A]/40 backdrop-blur-md">
                      {post.category}
                    </div>
                  </div>

                  {/* Article Body */}
                  <div className="p-6 space-y-3">
                    <div className="flex items-center gap-3 text-[11px] text-[#8C5D00] font-semibold">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {post.date}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </span>
                    </div>

                    <h3 className="font-heading font-extrabold text-xl text-[#2A1338] group-hover:text-[#8C5D00] transition-colors leading-snug line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="font-body text-xs text-[#5A4866] leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="px-6 pb-6 pt-2 border-t border-[#DFC47A]/30 flex items-center justify-between">
                  <span className="text-[11px] text-[#5A4866] font-medium italic">
                    By {post.author}
                  </span>
                  <Link
                    href="/sciences"
                    className="text-xs font-bold text-[#8C5D00] group-hover:text-[#351A4A] flex items-center gap-1 transition-colors"
                  >
                    <span>Read More</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-16 bg-white rounded-3xl border border-[#DFC47A]/40">
              <p className="text-[#5A4866] text-base font-serif italic">
                No articles found matching &ldquo;{searchQuery}&rdquo;. Try another search term.
              </p>
            </div>
          )}

        </div>
      </section>

    </div>
  );
}
