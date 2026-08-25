import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/common/PageHero';
import { Scale, BookOpen, AlertCircle, ShieldAlert, Award, UserCheck, CreditCard, Compass, Mail, Phone } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Terms & Conditions | Divya Yogam',
  description: 'Terms and conditions governing the use of Divya Yogam website, digital programs, meditation courses, retreats, and Shambala Music App.',
};

export default function TermsPage() {
  const lastUpdated = 'August 24, 2026';

  const sections = [
    {
      id: 'acceptance',
      title: '1. Acceptance of Terms',
      icon: Scale,
      content: (
        <>
          <p>
            By accessing, browsing, or utilizing the <strong>DIVINE GRACE FOUNDATION</strong> (&quot;Divya Yogam&quot;, &quot;we&quot;, &quot;our&quot;) website (<Link href="/" className="text-[#C8A34A] underline font-medium hover:text-[#352043]">divyayogam.org</Link>), enrolling in our courses, attending our retreats, or using our digital apps (such as Shambala Music App), you accept and agree to be bound by these Terms and Conditions (&quot;Terms&quot;).
          </p>
          <p className="mt-2">
            If you do not agree to all terms set forth herein, you must refrain from accessing or participating in any Divya Yogam programs or platforms.
          </p>
        </>
      ),
    },
    {
      id: 'services',
      title: '2. Overview of Programs & Services',
      icon: BookOpen,
      content: (
        <>
          <p>
            Divya Yogam provides spiritual education, guided meditation sessions, holistic wellness practices, organ health meditation, quantum habits programs, live workshops, and sanctuary retreats under the guidance of Arawindhan Ji.
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-[#5E5865] mt-2">
            <li><strong>Online & Virtual Courses:</strong> Digital access to recorded sessions, live webinars, and meditation guides.</li>
            <li><strong>Sanctuary & In-Person Events:</strong> Immersive retreats, group meditations, and spiritual discourses.</li>
            <li><strong>Shambala Music App:</strong> Streaming access to sound healing tracks, chants, and guided audio.</li>
          </ul>
        </>
      ),
    },
    {
      id: 'wellness-disclaimer',
      title: '3. Health & Wellness Disclaimer',
      icon: AlertCircle,
      content: (
        <>
          <div className="p-4 rounded-2xl bg-[#FFFDF9] border border-[#DFC47A]/40 text-[#352043]">
            <h4 className="font-semibold text-sm text-[#352043]">Important Medical & Health Notice:</h4>
            <p className="text-xs text-[#5E5865] mt-1 leading-relaxed">
              Divya Yogam techniques, including Organ Meditation, Pranayama, and Quantum Habits, are complementary self-care disciplines designed for general wellness, mindfulness, and inner peace.
            </p>
            <p className="text-xs text-[#5E5865] mt-2 leading-relaxed">
              <strong>They are NOT intended to diagnose, treat, cure, or prevent any medical condition, mental health disorder, or physical ailment.</strong> They do not replace professional medical advice, psychiatric care, or clinical diagnosis. Always consult a qualified physician before starting any new wellness regimen.
            </p>
          </div>
        </>
      ),
    },
    {
      id: 'intellectual-property',
      title: '4. Intellectual Property Rights',
      icon: Award,
      content: (
        <>
          <p>
            All content published or distributed by Divya Yogam—including meditation techniques, course materials, video lectures, audio recordings, text, logos, branding, and graphics—remains the exclusive intellectual property of <strong>DIVINE GRACE FOUNDATION</strong> and Arawindhan Ji.
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-[#5E5865] mt-2">
            <li>You are granted a personal, non-exclusive, non-transferable license to access purchased materials for personal spiritual growth.</li>
            <li>You may <strong>NOT</strong> record, re-broadcast, sell, publish, modify, or commercially distribute any Divya Yogam audio, video, or written content without explicit prior written authorization.</li>
          </ul>
        </>
      ),
    },
    {
      id: 'code-of-conduct',
      title: '5. Event Code of Conduct',
      icon: UserCheck,
      content: (
        <>
          <p>
            Participants in Divya Yogam online webinars, sanctuary retreats, and community forums are expected to maintain an environment of mutual respect, harmony, and spiritual sanctity.
          </p>
          <div className="p-4 rounded-2xl bg-[#FFFDF9] border border-[#E9DED3] mt-2 space-y-1 text-xs text-[#5E5865]">
            <p>• Respect fellow seekers, instructors, and volunteers.</p>
            <p>• Avoid disruptive, abusive, offensive, or commercial soliciting behavior.</p>
            <p>• Divya Yogam reserves the right to remove any participant from an event or online session without refund if they violate our community code of conduct.</p>
          </div>
        </>
      ),
    },
    {
      id: 'payments-and-refunds',
      title: '6. Fees, Registration & Refund Terms',
      icon: CreditCard,
      content: (
        <>
          <p>
            Enrollment fees for courses, workshops, and retreats must be paid in full prior to access unless installment plans are explicitly provided.
          </p>
          <p className="mt-2">
            All cancellations, transfers, and refund requests are governed by our dedicated{' '}
            <Link href="/refund-policy" className="text-[#C8A34A] underline font-medium hover:text-[#352043]">Refund &amp; Cancellation Policy</Link>.
          </p>
        </>
      ),
    },
    {
      id: 'liability',
      title: '7. Limitation of Liability',
      icon: ShieldAlert,
      content: (
        <>
          <p>
            To the maximum extent permitted by law, Divya Yogam Foundation, its trustees, spiritual guides, and volunteers shall not be liable for any direct, indirect, incidental, or consequential damages resulting from your participation in our programs or your reliance on website materials.
          </p>
        </>
      ),
    },
    {
      id: 'governing-law',
      title: '8. Governing Law & Dispute Resolution',
      icon: Compass,
      content: (
        <>
          <p>
            These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising out of or related to your use of Divya Yogam services shall be subject to the exclusive jurisdiction of the courts located in Hyderabad, Telangana, India.
          </p>
        </>
      ),
    },
    {
      id: 'contact',
      title: '9. Contact & Support',
      icon: Mail,
      content: (
        <>
          <p>If you have any questions regarding these Terms &amp; Conditions, please reach out to us:</p>
          <div className="mt-4 p-5 rounded-2xl bg-[#FAF4EB] border border-[#E9DED3] space-y-2 text-xs sm:text-sm">
            <div className="flex items-center gap-2 text-[#352043] font-semibold">
              <Mail className="w-4 h-4 text-[#C8A34A]" />
              <span>Email: <a href="mailto:info@divyayogam.org" className="text-[#C8A34A] underline hover:text-[#352043]">info@divyayogam.org</a></span>
            </div>
            <div className="flex items-start gap-2 text-[#352043] font-semibold">
              <Phone className="w-4 h-4 text-[#C8A34A] shrink-0 mt-0.5" />
              <div className="flex flex-wrap gap-x-4 gap-y-1">
                <span>+91 94425 48809</span>
                <span>+91 94895 14685</span>
                <span>+91 93444 97460</span>
              </div>
            </div>
            <div className="border-t border-[#E9DED3] pt-2 mt-2 space-y-1 text-xs text-[#5E5865]">
              <p><strong>Legal Entity:</strong> DIVINE GRACE FOUNDATION</p>
              <p><strong>Address:</strong> R.S.Nos.222/1, 222/2, Pondy Main Road, Villianur, Puducherry - 605 110.</p>
            </div>
          </div>
        </>
      ),
    },
  ];

  return (
    <div className="bg-[#F8F2E8] font-body">
      <PageHero
        badge="Terms & Agreements"
        title="Terms &"
        highlightTitle="Conditions"
        description="Guidelines governing the use of Divya Yogam content, courses, retreats, and spiritual platforms."
      />

      <section className="py-8 sm:py-12 lg:py-14 bg-[#FFFDF9]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">

          {/* Banner */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-6 rounded-2xl bg-[#FAF4EB] border border-[#E9DED3] gap-4">
            <div>
              <h2 className="font-heading text-lg font-bold text-[#352043]">Divya Yogam User Agreement</h2>
              <p className="text-xs text-[#5E5865] mt-0.5">Please review these terms prior to registering for courses or retreats.</p>
            </div>
            <span className="px-3 py-1.5 rounded-full bg-[#C8A34A]/15 text-[#352043] text-xs font-semibold shrink-0">
              Last Updated: {lastUpdated}
            </span>
          </div>

          {/* Quick Nav */}
          <div className="luxury-card p-6 rounded-[24px] border border-[#E9DED3] bg-white">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#C8A34A] mb-3">Table of Contents</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#352043]">
              {sections.map((sec) => (
                <a
                  key={sec.id}
                  href={`#${sec.id}`}
                  className="hover:text-[#C8A34A] flex items-center gap-1.5 py-1 px-2 rounded-lg hover:bg-[#FAF4EB] transition-colors"
                >
                  <span className="text-[#C8A34A]">❖</span>
                  <span>{sec.title}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Sections */}
          <div className="space-y-8">
            {sections.map((sec) => {
              const IconComp = sec.icon;
              return (
                <div
                  key={sec.id}
                  id={sec.id}
                  className="luxury-card p-8 sm:p-10 rounded-[28px] border border-[#E9DED3] bg-white space-y-4 shadow-sm scroll-mt-28"
                >
                  <div className="flex items-center gap-3 border-b border-[#E9DED3] pb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#FAF4EB] border border-[#E9DED3] flex items-center justify-center text-[#C8A34A]">
                      <IconComp className="w-5 h-5 text-[#C8A34A]" />
                    </div>
                    <h3 className="font-heading text-xl font-bold text-[#352043]">
                      {sec.title}
                    </h3>
                  </div>

                  <div className="text-[#5E5865] text-sm leading-relaxed font-light space-y-3">
                    {sec.content}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom callout */}
          <div className="text-center pt-6 text-xs text-[#8A8394]">
            Also view our{' '}
            <Link href="/privacy-policy" className="text-[#C8A34A] underline font-medium hover:text-[#352043]">Privacy Policy</Link>{' '}
            and{' '}
            <Link href="/refund-policy" className="text-[#C8A34A] underline font-medium hover:text-[#352043]">Refund &amp; Cancellation Policy</Link>.
          </div>

        </div>
      </section>
    </div>
  );
}
