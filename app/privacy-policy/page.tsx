import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/common/PageHero';
import { ShieldCheck, Lock, Eye, FileText, Bell, Users, Database, HelpCircle, Mail, Phone } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy | Divya Yogam',
  description: 'Learn how Divya Yogam collects, uses, and safeguards your personal information, data privacy rights, and security policies.',
};

export default function PrivacyPolicyPage() {
  const lastUpdated = 'August 24, 2026';

  const sections = [
    {
      id: 'introduction',
      title: '1. Introduction & Overview',
      icon: ShieldCheck,
      content: (
        <>
          <p>
            Welcome to <strong>DIVINE GRACE FOUNDATION</strong> (&quot;Divya Yogam&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;). We are committed to honoring and safeguarding the privacy of our spiritual community, website visitors, event participants, and app users.
          </p>
          <p>
            This Privacy Policy outlines how we collect, use, store, and protect your personal information when you visit our website at <Link href="/" className="text-[#C8A34A] underline font-medium hover:text-[#352043]">divyayogam.org</Link>, register for our meditation and yoga programs (such as Organ Meditation and Quantum Habits), participate in retreats, or use our mobile applications (including the Shambala Music App).
          </p>
          <p className="text-xs text-[#8A8394] italic">
            By accessing our website or registering for any Divya Yogam program, you acknowledge that you have read, understood, and agreed to the practices described in this policy.
          </p>
        </>
      ),
    },
    {
      id: 'information-collected',
      title: '2. Information We Collect',
      icon: Database,
      content: (
        <>
          <p>
            We collect personal data strictly necessary to deliver our spiritual teachings, process event registrations, and improve your user experience:
          </p>
          <div className="space-y-3 mt-3">
            <div className="p-4 rounded-2xl bg-[#FFFDF9] border border-[#E9DED3]">
              <h4 className="font-semibold text-[#352043] text-sm">A. Personal Identification Data</h4>
              <p className="text-xs text-[#5E5865] mt-1 leading-relaxed">
                Full name, email address, phone number, mailing address, date of birth, and language preferences provided when submitting contact forms, subscribing to newsletters, or registering for courses and retreats.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#FFFDF9] border border-[#E9DED3]">
              <h4 className="font-semibold text-[#352043] text-sm">B. Payment & Transaction Information</h4>
              <p className="text-xs text-[#5E5865] mt-1 leading-relaxed">
                When you enroll in paid programs or donate, payment details (such as credit card numbers or UPI IDs) are collected and processed directly by PCI-DSS compliant third-party payment gateways (e.g., Razorpay, Stripe). Divya Yogam does not store sensitive card PINs or full credit card numbers on its servers.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#FFFDF9] border border-[#E9DED3]">
              <h4 className="font-semibold text-[#352043] text-sm">C. Technical & Usage Data</h4>
              <p className="text-xs text-[#5E5865] mt-1 leading-relaxed">
                IP address, browser type, device information, operating system, referring URLs, pages viewed, time spent on pages, and mobile app usage metrics collected automatically via server logs and cookies.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#FFFDF9] border border-[#E9DED3]">
              <h4 className="font-semibold text-[#352043] text-sm">D. Mobile App Data (Shambala Music App)</h4>
              <p className="text-xs text-[#5E5865] mt-1 leading-relaxed">
                Audio playback preferences, playlist history, offline download cache metadata, and device identifiers strictly used to deliver guided meditation tracks and sacred music.
              </p>
            </div>
          </div>
        </>
      ),
    },
    {
      id: 'how-we-use',
      title: '3. How We Use Your Information',
      icon: Eye,
      content: (
        <>
          <p>
            Divya Yogam uses your information solely for spiritual, educational, and operational purposes:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm text-[#5E5865]">
            <li><strong>Program Delivery:</strong> Facilitating your access to online courses, live meditation sessions, Organ Meditation modules, and retreat passes.</li>
            <li><strong>Communication:</strong> Sending booking confirmations, event schedules, newsletter updates, and personal guidance notices from Arawindhan Ji.</li>
            <li><strong>Customer Support:</strong> Responding to inquiries, technical assistance requests, and user feedback.</li>
            <li><strong>Platform Optimization:</strong> Analyzing aggregate website traffic to enhance site performance, mobile responsiveness, and content relevance.</li>
            <li><strong>Security & Legal Compliance:</strong> Detecting and preventing fraud, unauthorized access, or violations of our terms.</li>
          </ul>
        </>
      ),
    },
    {
      id: 'sharing-third-parties',
      title: '4. Third-Party Sharing & Pledge',
      icon: Lock,
      content: (
        <>
          <div className="p-4 rounded-2xl bg-[#5A2D82]/5 border border-[#5A2D82]/20 text-[#352043]">
            <p className="font-semibold text-sm">Our Sacred Pledge:</p>
            <p className="text-xs text-[#5E5865] mt-1 leading-relaxed">
              Divya Yogam NEVER sells, rents, trades, or monetizes your personal information or contact details with third-party advertisers or data brokers under any circumstances.
            </p>
          </div>
          <p className="mt-4">
            We may share limited data with trusted service providers strictly to perform essential platform operations:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-[#5E5865]">
            <li><strong>Payment Gateways:</strong> Secure transaction processors (Razorpay, Stripe, PayPal).</li>
            <li><strong>Cloud Hosting & Email Providers:</strong> Secure infrastructure partners (Vercel, AWS, SendGrid) bound by strict confidentiality agreements.</li>
            <li><strong>Legal Requirements:</strong> If mandated by applicable law, court order, or governmental regulation.</li>
          </ul>
        </>
      ),
    },
    {
      id: 'cookies',
      title: '5. Cookies & Tracking Technologies',
      icon: FileText,
      content: (
        <>
          <p>
            Our website uses cookies and similar web technologies to improve navigation, preserve user sessions, and gather anonymous analytics.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
            <div className="p-3 rounded-xl bg-[#FFFDF9] border border-[#E9DED3]">
              <h5 className="font-semibold text-xs text-[#352043]">Essential Cookies</h5>
              <p className="text-[11px] text-[#5E5865] mt-0.5">Necessary for page navigation, secure logins, and basic site functionality.</p>
            </div>
            <div className="p-3 rounded-xl bg-[#FFFDF9] border border-[#E9DED3]">
              <h5 className="font-semibold text-xs text-[#352043]">Analytical Cookies</h5>
              <p className="text-[11px] text-[#5E5865] mt-0.5">Help us understand visitor counts and popular content (Google Analytics).</p>
            </div>
          </div>
          <p className="text-xs text-[#8A8394] mt-2">
            You can modify your browser settings to disable cookies, though certain features of the site may function with reduced interactivity.
          </p>
        </>
      ),
    },
    {
      id: 'data-security',
      title: '6. Data Security & Retention',
      icon: Bell,
      content: (
        <>
          <p>
            We enforce industry-standard security measures including SSL/TLS encryption for all data transmitted across our website, restricted database access, and regular security audits.
          </p>
          <p className="mt-2">
            We retain personal information only for as long as necessary to fulfill the purposes outlined in this policy or as required by applicable legal and accounting obligations.
          </p>
        </>
      ),
    },
    {
      id: 'user-rights',
      title: '7. Your Privacy Rights & Choices',
      icon: Users,
      content: (
        <>
          <p>Depending on your jurisdiction, you possess the following rights regarding your personal data:</p>
          <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-[#5E5865] mt-2">
            <li><strong>Right to Access:</strong> Request a copy of the personal data we hold about you.</li>
            <li><strong>Right to Correction:</strong> Request correction of inaccurate or incomplete information.</li>
            <li><strong>Right to Erasure (&quot;Right to be Forgotten&quot;):</strong> Request deletion of your account and personal data from our servers.</li>
            <li><strong>Opt-Out of Marketing:</strong> Unsubscribe from email updates at any time by clicking the &quot;Unsubscribe&quot; link in any newsletter or emailing us.</li>
          </ul>
        </>
      ),
    },
    {
      id: 'contact-us',
      title: '8. Contact Us & Data Requests',
      icon: HelpCircle,
      content: (
        <>
          <p>
            If you have questions, concerns, or requests regarding this Privacy Policy or your personal information, please contact our Data Privacy Officer:
          </p>
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
        badge="Legal & Transparency"
        title="Privacy"
        highlightTitle="Policy"
        description="Your trust and data security are of sacred importance to Divya Yogam."
      />

      <section className="py-8 sm:py-12 lg:py-14 bg-[#FFFDF9]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">

          {/* Last updated banner */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-6 rounded-2xl bg-[#FAF4EB] border border-[#E9DED3] gap-4">
            <div>
              <h2 className="font-heading text-lg font-bold text-[#352043]">Divya Yogam Privacy Framework</h2>
              <p className="text-xs text-[#5E5865] mt-0.5">Transparency, respect, and data protection in all our spiritual initiatives.</p>
            </div>
            <span className="px-3 py-1.5 rounded-full bg-[#C8A34A]/15 text-[#352043] text-xs font-semibold shrink-0">
              Last Updated: {lastUpdated}
            </span>
          </div>

          {/* Quick Nav Links */}
          <div className="luxury-card p-6 rounded-[24px] border border-[#E9DED3] bg-white">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#C8A34A] mb-3">Quick Navigation</h3>
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

          {/* Sections List */}
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

          {/* Bottom Callout */}
          <div className="text-center pt-6 text-xs text-[#8A8394]">
            Have additional legal questions? Visit our{' '}
            <Link href="/terms" className="text-[#C8A34A] underline font-medium hover:text-[#352043]">Terms of Service</Link>{' '}
            or{' '}
            <Link href="/refund-policy" className="text-[#C8A34A] underline font-medium hover:text-[#352043]">Refund &amp; Cancellation Policy</Link>.
          </div>

        </div>
      </section>
    </div>
  );
}
