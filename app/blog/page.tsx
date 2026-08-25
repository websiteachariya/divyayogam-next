import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/common/PageHero';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Wisdom Articles & Blog',
  description: 'Explore articles on meditation, Pancha Kosha purification, organ health, and Vedic philosophy.',
};

export default function BlogPage() {
  const posts = [
    {
      title: 'Understanding Cellular Memory in Organ Meditation',
      category: 'Meditation Science',
      date: 'August 1, 2026',
      readTime: '5 min read',
      excerpt: 'Discover how sound frequencies and breath retention help flush stored emotional trauma from organ tissues.',
    },
    {
      title: 'Brahma Muhurta: The Ambrosial Hours of Awakening',
      category: 'Quantum Habits',
      date: 'July 24, 2026',
      readTime: '7 min read',
      excerpt: 'Why waking up between 4:30 AM and 6:00 AM aligns your neurobiology with subtle cosmic energy.',
    },
    {
      title: 'The Pancha Kosha Map: Navigating the 5 Sheaths',
      category: 'Vedic Philosophy',
      date: 'July 10, 2026',
      readTime: '6 min read',
      excerpt: 'A comprehensive guide to cleansing your physical, vital, mental, intuitive, and bliss bodies.',
    },
  ];

  return (
    <div className="bg-transparent font-body">
      <PageHero
        badge="Wisdom Articles"
        title="Insights &"
        highlightTitle="Vedic Wisdom"
        description="Explore articles on organ meditation, bio-cellular alignment, and quantum habits written by ashram masters."
      />

      <section className="py-8 sm:py-12 lg:py-14 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {posts.map((post, idx) => (
              <div
                key={idx}
                className="luxury-card rounded-[28px] p-8 border border-[#E9DED3] flex flex-col justify-between group shadow-sm bg-white"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full royal-gold-badge text-[11px] font-semibold uppercase tracking-wider">
                      {post.category}
                    </span>
                    <span className="text-xs text-[#8A8394] font-medium">{post.readTime}</span>
                  </div>

                  <h3 className="font-heading text-2xl font-bold text-[#352043] group-hover:text-[#C8A34A] transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-[#5E5865] text-sm font-light leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#E9DED3] flex items-center justify-between">
                  <span className="text-xs text-[#8A8394]">{post.date}</span>
                  <Link
                    href="/sciences"
                    className="inline-flex items-center gap-1.5 text-xs text-[#C8A34A] font-semibold group-hover:text-[#47206A] transition-colors"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
