import type { Metadata } from 'next';
import PageHero from '@/components/common/PageHero';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for Divya Yogam meditation and spiritual community.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-[#F8F2E8] font-body">
      <PageHero
        badge="Legal & Privacy"
        title="Privacy"
        highlightTitle="Policy"
        description="Your privacy and data security are of fundamental importance to Divya Yogam."
      />

      <section className="py-20 bg-[#FFFDF9]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 luxury-card p-8 sm:p-12 rounded-[28px] border border-[#E9DED3] bg-white">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#352043]">
            Commitment to Your Privacy
          </h2>
          <p className="text-[#5E5865] text-sm sm:text-base leading-relaxed font-light">
            At Divya Yogam, we respect your personal data and privacy. Any information collected through newsletter subscriptions, contact forms, or program registrations is used exclusively to deliver guidance, event updates, and spiritual teachings.
          </p>

          <h3 className="font-heading text-xl font-bold text-[#352043]">Information Collection & Use</h3>
          <p className="text-[#5E5865] text-sm leading-relaxed font-light">
            We collect personal details such as your name, email address, and phone number only when voluntarily provided. We never sell, rent, or trade your personal information with third parties.
          </p>

          <h3 className="font-heading text-xl font-bold text-[#352043]">Data Protection & Rights</h3>
          <p className="text-[#5E5865] text-sm leading-relaxed font-light">
            You may unsubscribe from our communications or request deletion of your personal data at any time by reaching out to contact@divyayogam.org.
          </p>
        </div>
      </section>
    </div>
  );
}
