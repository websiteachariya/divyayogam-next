import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/common/PageHero';
import { RefreshCw, Calendar, Monitor, Repeat, Clock, AlertTriangle, CheckCircle2, Mail, Phone } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Refund & Cancellation Policy | Divya Yogam',
  description: 'Understand Divya Yogam cancellation rules, refund request timelines, retreat transfer policies, and course registration refund terms.',
};

export default function RefundPolicyPage() {
  const lastUpdated = 'August 24, 2026';

  const sections = [
    {
      id: 'overview',
      title: '1. Policy Overview',
      icon: RefreshCw,
      content: (
        <>
          <p>
            At <strong>DIVINE GRACE FOUNDATION</strong> (&quot;Divya Yogam&quot;), we strive to make our spiritual courses, organ meditation workshops, and sanctuary retreats accessible and transparent.
          </p>
          <p className="mt-2">
            This Refund &amp; Cancellation Policy explains the terms, conditions, and timelines under which refunds, registration deferrals, or course transfers are granted for programs booked on <Link href="/" className="text-[#C8A34A] underline font-medium hover:text-[#352043]">divyayogam.org</Link>.
          </p>
        </>
      ),
    },
    {
      id: 'online-courses',
      title: '2. Online Programs & Digital Courses',
      icon: Monitor,
      content: (
        <>
          <p>
            For digital programs (such as online Organ Meditation, Quantum Habits courses, and live virtual webinars):
          </p>
          <div className="space-y-3 mt-3">
            <div className="p-4 rounded-2xl bg-[#FFFDF9] border border-[#E9DED3]">
              <h4 className="font-semibold text-[#352043] text-sm flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C8A34A]" />
                Before Course Commencement
              </h4>
              <p className="text-xs text-[#5E5865] mt-1 leading-relaxed">
                If you request cancellation at least <strong>24 hours prior</strong> to the scheduled start time of a live online course, you will receive a <strong>100% full refund</strong>.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#FFFDF9] border border-[#E9DED3]">
              <h4 className="font-semibold text-[#352043] text-sm flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C8A34A]" />
                7-Day Satisfaction Guarantee for Self-Paced Courses
              </h4>
              <p className="text-xs text-[#5E5865] mt-1 leading-relaxed">
                For pre-recorded digital courses, you may request a full refund within <strong>7 days</strong> of purchase, provided less than 25% of the course video content has been viewed.
              </p>
            </div>
          </div>
        </>
      ),
    },
    {
      id: 'retreats-and-events',
      title: '3. In-Person Retreats & Sanctuary Events',
      icon: Calendar,
      content: (
        <>
          <p>
            Due to advance venue reservations, catering arrangements, and accommodation bookings at our ashrams and sanctuary locations, the following cancellation schedule applies to physical retreats:
          </p>
          <div className="overflow-x-auto mt-4">
            <table className="w-full text-xs text-left border-collapse rounded-xl overflow-hidden border border-[#E9DED3]">
              <thead>
                <tr className="bg-[#FAF4EB] text-[#352043] font-semibold border-b border-[#E9DED3]">
                  <th className="p-3">Notice Given Before Retreat</th>
                  <th className="p-3">Eligible Refund / Option</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E9DED3] text-[#5E5865] bg-white">
                <tr>
                  <td className="p-3 font-medium text-[#352043]">14 or more days notice</td>
                  <td className="p-3"><strong>100% Refund</strong> (minus 3% transaction processing fee)</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium text-[#352043]">7 to 13 days notice</td>
                  <td className="p-3"><strong>50% Refund</strong> OR 100% transfer credit to future retreat</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium text-[#352043]">Less than 7 days notice</td>
                  <td className="p-3 text-[#B91C1C]">Non-refundable (Option to transfer ticket to another seeker)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </>
      ),
    },
    {
      id: 'transfers',
      title: '4. Ticket Transfers & Deferrals',
      icon: Repeat,
      content: (
        <>
          <p>
            If you are unable to attend a registered retreat or course, you may transfer your registration to a friend, family member, or fellow seeker at no additional charge.
          </p>
          <p className="mt-2 text-xs text-[#5E5865]">
            Please notify us at <a href="mailto:info@divyayogam.org" className="text-[#C8A34A] underline font-medium">info@divyayogam.org</a> at least <strong>48 hours prior</strong> to the event start time with the replacement attendee&apos;s name and email address.
          </p>
        </>
      ),
    },
    {
      id: 'cancellation-by-us',
      title: '5. Event Cancellation by Divya Yogam',
      icon: AlertTriangle,
      content: (
        <>
          <p>
            In the rare event that Divya Yogam must cancel or reschedule a retreat, workshop, or course due to unforeseen circumstances (e.g., severe weather, health emergencies, or low enrollment):
          </p>
          <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm text-[#5E5865] mt-2">
            <li>You will receive a <strong>100% full refund</strong> automatically credited to your original payment method.</li>
            <li>Alternatively, you may elect to transfer your full payment towards any future Divya Yogam event or course of equal value.</li>
          </ul>
        </>
      ),
    },
    {
      id: 'processing-timeline',
      title: '6. Refund Request & Processing Timelines',
      icon: Clock,
      content: (
        <>
          <p>
            Once a valid refund request is received and verified by our support team:
          </p>
          <div className="p-4 rounded-2xl bg-[#FFFDF9] border border-[#E9DED3] mt-3 space-y-2 text-xs text-[#5E5865]">
            <p>• Refunds are initiated within <strong>48 hours</strong> of approval.</p>
            <p>• The refunded amount will reflect in your bank account, credit card, or UPI source within <strong>5 to 7 business days</strong>, depending on your financial institution.</p>
          </div>
        </>
      ),
    },
    {
      id: 'contact',
      title: '7. How to Request a Refund',
      icon: Mail,
      content: (
        <>
          <p>To request a cancellation or refund, please follow these steps:</p>
          <ol className="list-decimal pl-5 space-y-1.5 text-xs sm:text-sm text-[#5E5865] mt-2">
            <li>Send an email to <a href="mailto:info@divyayogam.org" className="text-[#C8A34A] underline font-medium">info@divyayogam.org</a> with the subject line <strong>&quot;Refund Request - [Your Booking ID/Name]&quot;</strong>.</li>
            <li>Include your full name, registered email address, date of purchase, and reason for cancellation.</li>
            <li>Our support team will review and process your request within 24-48 hours.</li>
          </ol>
          <div className="mt-4 p-5 rounded-2xl bg-[#FAF4EB] border border-[#E9DED3] space-y-2 text-xs sm:text-sm">
            <div className="flex items-center gap-2 text-[#352043] font-semibold">
              <Mail className="w-4 h-4 text-[#C8A34A]" />
              <span>Email Support: <a href="mailto:info@divyayogam.org" className="text-[#C8A34A] underline hover:text-[#352043]">info@divyayogam.org</a></span>
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
        badge="Cancellation & Refunds"
        title="Refund &"
        highlightTitle="Cancellation Policy"
        description="Clear, fair, and transparent cancellation guidelines for all Divya Yogam programs and retreats."
      />

      <section className="py-8 sm:py-12 lg:py-14 bg-[#FFFDF9]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">

          {/* Banner */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-6 rounded-2xl bg-[#FAF4EB] border border-[#E9DED3] gap-4">
            <div>
              <h2 className="font-heading text-lg font-bold text-[#352043]">Fair Refund Guarantee</h2>
              <p className="text-xs text-[#5E5865] mt-0.5">We handle all cancellation requests with care and prompt response.</p>
            </div>
            <span className="px-3 py-1.5 rounded-full bg-[#C8A34A]/15 text-[#352043] text-xs font-semibold shrink-0">
              Last Updated: {lastUpdated}
            </span>
          </div>

          {/* Quick Nav */}
          <div className="luxury-card p-6 rounded-[24px] border border-[#E9DED3] bg-white">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#C8A34A] mb-3">Quick Overview</h3>
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

          {/* Bottom links */}
          <div className="text-center pt-6 text-xs text-[#8A8394]">
            Also view our{' '}
            <Link href="/privacy-policy" className="text-[#C8A34A] underline font-medium hover:text-[#352043]">Privacy Policy</Link>{' '}
            and{' '}
            <Link href="/terms" className="text-[#C8A34A] underline font-medium hover:text-[#352043]">Terms &amp; Conditions</Link>.
          </div>

        </div>
      </section>
    </div>
  );
}
