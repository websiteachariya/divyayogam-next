import type { Metadata } from 'next';
import PageHero from '@/components/common/PageHero';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of Service for Divya Yogam website and spiritual programs.',
};

export default function TermsPage() {
  return (
    <div className="bg-[#F8F2E8] font-body">
      <PageHero
        badge="Terms & Agreements"
        title="Terms of"
        highlightTitle="Service"
        description="Guidelines governing the use of Divya Yogam content, courses, and sanctuary events."
      />

      <section className="py-20 bg-[#FFFDF9]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 luxury-card p-8 sm:p-12 rounded-[28px] border border-[#E9DED3] bg-white">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#352043]">
            Acceptance of Terms
          </h2>
          <p className="text-[#5E5865] text-sm sm:text-base leading-relaxed font-light">
            By accessing and participating in Divya Yogam online sessions, retreats, or reading published wisdom, you agree to adhere to these terms and conditions.
          </p>

          <h3 className="font-heading text-xl font-bold text-[#352043]">Intellectual Property</h3>
          <p className="text-[#5E5865] text-sm leading-relaxed font-light">
            All meditation techniques, articles, visual graphics, and recorded discourses provided by Arawindhan Ji and Divya Yogam remain the copyrighted property of Divya Yogam Foundation.
          </p>

          <h3 className="font-heading text-xl font-bold text-[#352043]">Wellness Disclaimer</h3>
          <p className="text-[#5E5865] text-sm leading-relaxed font-light">
            Divya Yogam practices are holistic spiritual self-care disciplines designed for general wellness and mental harmony. They are not intended as substitutes for professional medical advice, diagnosis, or treatment.
          </p>
        </div>
      </section>
    </div>
  );
}
