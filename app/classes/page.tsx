'use client';

export const dynamic = 'force-dynamic';

import React, { useState, useEffect, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { BookOpen, Crown, Lock, Unlock, CheckCircle2, Award, Sparkles, ShieldCheck, ArrowRight, AlertCircle } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

function ClassesContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const highlightSlug = searchParams.get('slug');

  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [selectedClass, setSelectedClass] = useState<any>(null);
  const [calculation, setCalculation] = useState<any>(null);
  const [isCalculating, setIsCalculating] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const individualClasses = [
    {
      slug: 'ayangara',
      name: 'Ayangara',
      price: 2500,
      orderSequence: 1,
      tagline: 'Physical Alignment & Breath Mastery',
      description: 'First level of divine yoga awakening focusing on body alignment, posture precision, and elemental breath control.',
    },
    {
      slug: 'pandava',
      name: 'Pandava',
      price: 5000,
      orderSequence: 2,
      tagline: 'Inner Strength & Heroic Discipline',
      description: 'Second level deepening inner strength, focus, vitality, and warrior energy balance.',
    },
    {
      slug: 'amirtha',
      name: 'Amirtha',
      price: 7500,
      orderSequence: 3,
      tagline: 'Vital Nectar & Emotional Harmony',
      description: 'Third level unlocking vital energy nectar, emotional harmony, and glandular rejuvenation.',
    },
    {
      slug: 'anandha',
      name: 'Anandha',
      price: 10000,
      orderSequence: 4,
      tagline: 'Bliss Consciousness & Deep Dhyana',
      description: 'Fourth level introducing bliss consciousness, deep meditation, and subtle energy elevation.',
    },
    {
      slug: 'amoha',
      name: 'Amoha',
      price: 12500,
      orderSequence: 5,
      tagline: 'Clarity & Transcendence of Illusion',
      description: 'Fifth level transcending mental illusion, gaining unwavering focus, and spiritual clarity.',
    },
    {
      slug: 'advaitha',
      name: 'Advaitha',
      price: 15000,
      orderSequence: 6,
      tagline: 'Non-Dual Union & Supreme Mastery',
      description: 'Sixth and ultimate level of non-dual spiritual union, self-realization, and master consciousness.',
    },
  ];

  const allInOneClass = {
    slug: 'all-in-one',
    name: 'All-in-One Master Bundle',
    price: 52500,
    orderSequence: 7,
    isBundle: true,
    tagline: 'Complete 6-Class Pass — Immediate Full Access',
    description: 'Enroll in all 6 sequential classes at once (Ayangara, Pandava, Amirtha, Anandha, Amoha, Advaitha). Immediate full access without sequential waiting!',
  };

  const orderId = searchParams.get('order_id');
  const [paymentBanner, setPaymentBanner] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  useEffect(() => {
    fetchUser();
    if (orderId) {
      verifyClassPayment(orderId);
    }
  }, [orderId]);

  const verifyClassPayment = async (orderIdToVerify: string) => {
    try {
      const res = await fetch(`/api/pay/verify?order_id=${orderIdToVerify}`);
      const data = await res.json();
      if (res.ok && data.success && data.isPaid) {
        setPaymentBanner({
          type: 'success',
          message: 'Payment Successful! Your class has been unlocked and active access is granted.',
        });
        const updatedUser = await fetchUser(); // Refresh user enrollments & dashboard state
        
        // Find next available unlocked class or current class to open checkout card automatically
        const fulfilledSlug = data.order?.metadata?.classSlug;
        if (fulfilledSlug && fulfilledSlug !== 'all-in-one') {
          const matchedClass = individualClasses.find((c) => c.slug === fulfilledSlug);
          if (matchedClass) {
            const nextSeq = matchedClass.orderSequence + 1;
            const nextClass = individualClasses.find((c) => c.orderSequence === nextSeq);
            if (nextClass) {
              handleSelectClass(nextClass);
            }
          }
        }
      } else {
        setPaymentBanner({
          type: 'error',
          message: 'Payment not completed or cancelled. If you backed out of the Cashfree gateway, no funds were charged.',
        });
      }
    } catch (err: any) {
      setPaymentBanner({
        type: 'error',
        message: 'Unable to verify payment status.',
      });
    }
  };

  const fetchUser = async () => {
    try {
      const res = await fetch('/api/auth/me');
      const data = await res.json();
      if (data.authenticated) {
        setUser(data.user);
        return data.user;
      }
      return null;
    } catch (err) {
      return null;
    } finally {
      setLoading(false);
    }
  };

  const handleSelectClass = async (cls: any) => {
    setSelectedClass(cls);
    setErrorMsg('');
    setCalculation(null);

    if (!user) {
      setErrorMsg('Registration & Login is mandatory to enroll in Divya Yogam classes. Please log in or create an account.');
      return;
    }

    setIsCalculating(true);
    try {
      const res = await fetch(`/api/pay/create-order`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          orderType: 'CLASS',
          classSlug: cls.slug,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrorMsg(data.error || 'Failed to check class eligibility');
      } else {
        setCalculation(data);
        setTimeout(() => {
          document.getElementById('class-checkout-modal')?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } catch (err: any) {
      setErrorMsg(err.message || 'Error checking class discount');
    } finally {
      setIsCalculating(false);
    }
  };

  const loadCashfreeScript = (): Promise<boolean> => {
    return new Promise((resolve) => {
      if ((window as any).Cashfree) {
        resolve(true);
        return;
      }
      const script = document.createElement('script');
      script.src = 'https://sdk.cashfree.com/js/v3/cashfree.js';
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handleBuyClass = async () => {
    if (!calculation || !calculation.paymentSessionId) return;

    setIsProcessing(true);
    try {
      const scriptLoaded = await loadCashfreeScript();
      if (scriptLoaded && (window as any).Cashfree) {
        const cashfreeMode = (process.env.NEXT_PUBLIC_CASHFREE_ENV || 'production') as 'sandbox' | 'production';
        const cashfree = (window as any).Cashfree({ mode: cashfreeMode });
        cashfree.checkout({
          paymentSessionId: calculation.paymentSessionId,
          redirectTarget: '_self',
        });
      } else {
        alert('Failed to load Cashfree Payment SDK');
      }
    } catch (err: any) {
      alert(err.message || 'Payment error');
    } finally {
      setIsProcessing(false);
    }
  };

  const activeMembership = user?.memberships?.[0];
  const enrollments = user?.enrollments || [];

  const membershipPercent = activeMembership
    ? activeMembership.level === 'DIAMOND'
      ? 50
      : activeMembership.level === 'PLATINUM'
      ? 30
      : activeMembership.level === 'GOLD'
      ? 10
      : 0
    : 0;

  const getClassStatus = (slug: string, seq: number) => {
    if (slug === 'all-in-one') return 'AVAILABLE';
    const found = enrollments.find((e: any) => e.classItem?.slug === slug);
    if (found && (found.status === 'PURCHASED' || found.status === 'COMPLETED' || found.status === 'IN_PROGRESS')) {
      return found.status;
    }
    if (seq === 1) return 'AVAILABLE';
    const prevSlug = individualClasses[seq - 2]?.slug;
    const prev = enrollments.find((e: any) => e.classItem?.slug === prevSlug);
    if (prev && (prev.status === 'PURCHASED' || prev.status === 'COMPLETED' || prev.status === 'IN_PROGRESS')) {
      return 'AVAILABLE';
    }
    return 'LOCKED';
  };

  return (
    <div className="space-y-10">
      {/* Hero Header Card with Guaranteed Royal Violet Gradient */}
      <div
        className="text-center space-y-4 max-w-4xl mx-auto p-6 sm:p-10 rounded-3xl border-2 border-[#DFC47A] shadow-2xl text-white relative z-10"
        style={{ background: 'linear-gradient(to right, #2B083A, #47206A, #20052C)' }}
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#DFC47A] text-[#2B083A] text-xs font-extrabold uppercase tracking-wider shadow-sm">
          <BookOpen className="w-4 h-4 text-[#2B083A]" /> 6-Stage Sequential Class Progression
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold font-heading text-[#DFC47A] drop-shadow-md">
          Divya Yogam Classes
        </h1>
        <p className="text-sm sm:text-base text-amber-100 max-w-2xl mx-auto font-medium leading-relaxed">
          Unlock each sacred class in succession (1 to 6) or buy the All-in-One Master Bundle. Active Gold contributors receive <strong className="text-[#DFC47A]">10% Sacred Privilege</strong>, Platinum <strong className="text-[#DFC47A]">30% Sacred Privilege</strong>, Diamond <strong className="text-[#DFC47A]">50% Sacred Privilege</strong> automatically! <strong className="text-white">Active Contributionship is required to enroll in classes.</strong>
        </p>

        {activeMembership ? (
          <div className="inline-flex items-center gap-2 mt-2 px-5 py-2.5 rounded-2xl bg-[#47206A] border border-[#DFC47A] text-[#DFC47A] text-xs sm:text-sm font-extrabold shadow-lg">
            <Crown className="w-4 h-4 text-[#DFC47A]" /> Active {activeMembership.level} Contributor ({membershipPercent}% Sacred Privilege Applied)
          </div>
        ) : (
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 mt-2 px-4 sm:px-6 py-3 rounded-2xl bg-[#20052C] border border-[#DFC47A] text-[#DFC47A] text-xs sm:text-sm font-bold shadow-md text-center max-w-2xl mx-auto">
            <div className="flex items-center gap-2">
              <Crown className="w-4 h-4 text-[#DFC47A] shrink-0" />
              <span>Contributionship Required: Non-contributors cannot enroll in classes directly.</span>
            </div>
            <Link
              href="/contributorship"
              className="inline-flex items-center gap-1 text-[11px] sm:text-xs font-black text-[#DFC47A] hover:text-white underline underline-offset-2 shrink-0 bg-[#DFC47A]/15 px-3 py-1.5 rounded-full border border-[#DFC47A]/40 hover:bg-[#DFC47A] hover:text-[#2B083A] transition-all"
            >
              <span>Join Contributorship First</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        )}
      </div>

      {/* Payment Status Card (Success or Cancelled/Failed) */}
      {paymentBanner && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className={`p-6 sm:p-8 rounded-3xl border-2 text-center space-y-4 shadow-xl max-w-2xl mx-auto ${
            paymentBanner.type === 'success'
              ? 'bg-emerald-50 border-emerald-400 text-emerald-900'
              : 'bg-amber-50 border-amber-400 text-amber-900'
          }`}
        >
          <div className="flex flex-col items-center gap-3">
            {paymentBanner.type === 'success' ? (
              <div className="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 border-2 border-emerald-300 shadow-md">
                <CheckCircle2 className="w-8 h-8" />
              </div>
            ) : (
              <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center text-amber-600 border-2 border-amber-300 shadow-md">
                <AlertCircle className="w-8 h-8" />
              </div>
            )}
            <div>
              <h3 className="text-xl sm:text-2xl font-extrabold font-heading">
                {paymentBanner.type === 'success' ? 'Class Payment Successful!' : 'Payment Not Completed'}
              </h3>
              <p className="text-xs sm:text-sm font-semibold max-w-md mx-auto mt-1">
                {paymentBanner.message}
              </p>
            </div>
          </div>

          {orderId && (
            <div className="p-3.5 rounded-2xl bg-white border border-gray-200 text-left text-xs max-w-md mx-auto space-y-1 text-gray-700">
              <div className="flex justify-between">
                <span className="text-gray-500">Order Reference:</span>
                <span className="font-mono font-bold">{orderId}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Status:</span>
                <span className={`font-bold ${paymentBanner.type === 'success' ? 'text-emerald-700' : 'text-amber-700'}`}>
                  {paymentBanner.type === 'success' ? 'PAID / CLASS UNLOCKED' : 'CANCELLED / UNPAID'}
                </span>
              </div>
            </div>
          )}

          <div className="pt-2 flex justify-center gap-3">
            {paymentBanner.type === 'success' && (
              <Link
                href="/user/dashboard"
                className="px-5 py-2.5 rounded-full bg-[#47206A] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#C8A34A] hover:text-[#47206A] transition-all flex items-center gap-1.5"
              >
                <span>View Dashboard Progress</span>
                <ArrowRight className="w-4 h-4 text-[#DFC47A]" />
              </Link>
            )}
            <button
              onClick={() => setPaymentBanner(null)}
              className="px-4 py-2.5 rounded-full bg-white text-gray-700 border border-gray-300 font-bold text-xs uppercase tracking-wider hover:bg-gray-100 transition-all cursor-pointer"
            >
              Dismiss Card
            </button>
          </div>
        </motion.div>
      )}

      {/* Auth Requirement Notice for Guests with Guaranteed Royal Violet Gradient Background */}
      {!user && (
        <div
          className="p-4 sm:p-5 rounded-2xl border-2 border-[#DFC47A] text-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3 max-w-4xl mx-auto shadow-2xl text-white relative z-10"
          style={{ background: 'linear-gradient(to right, #2B083A, #47206A, #20052C)' }}
        >
          <div className="flex items-center gap-2.5">
            <AlertCircle className="w-5 h-5 text-[#DFC47A] shrink-0" />
            <span className="text-[#DFC47A] font-extrabold text-xs sm:text-sm">
              Registration & Log In is mandatory to enroll in sacred classes. Please log in or create an account.
            </span>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <Link
              href="/login"
              className="px-5 py-2 rounded-full bg-[#DFC47A] hover:bg-white text-[#2B083A] text-xs font-black uppercase tracking-wider transition-all shadow-md"
            >
              Log In
            </Link>
            <Link
              href="/register"
              className="px-5 py-2 rounded-full bg-[#47206A] hover:bg-white hover:text-[#2B083A] text-[#DFC47A] border border-[#DFC47A] text-xs font-black uppercase tracking-wider transition-all"
            >
              Register
            </Link>
          </div>
        </div>
      )}

      {/* ALL-IN-ONE MASTER BUNDLE FULL-WIDTH RECTANGULAR BOX */}
      <motion.div
        whileHover={{ scale: 1.005 }}
        className="w-full rounded-3xl bg-gradient-to-r from-[#2B083A] via-[#47206A] to-[#20052C] border-2 border-[#DFC47A] p-6 sm:p-8 text-white shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6"
      >
        <div className="space-y-3 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#DFC47A] text-[#2B083A] text-xs font-extrabold uppercase tracking-wider border border-white/40 shadow-sm">
            <Sparkles className="w-4 h-4 text-[#2B083A]" /> All-in-One Master Bundle Box
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-[#DFC47A]">
            Complete 6-Class Pass (Ayangara to Advaitha)
          </h2>
          <p className="text-xs sm:text-sm text-gray-200 leading-relaxed font-normal">
            Unlock all 6 sequential classes at once without waiting! Full tier discount privileges apply dynamically based on your contributionship (Gold 10%, Platinum 30%, Diamond 50%).
          </p>
        </div>

        <div className="flex flex-col items-center md:items-end gap-3 shrink-0">
          <div className="text-center md:text-right">
            <span className="text-[11px] uppercase tracking-wider text-[#DFC47A] font-extrabold block">
              {membershipPercent > 0
                ? `${activeMembership?.level} Contributor Privilege (${membershipPercent}% Sacred Benefit)`
                : 'Standard Master Pass Contribution'}
            </span>
            <div className="flex items-baseline gap-2 justify-center md:justify-end mt-1">
              {membershipPercent > 0 && (
                <span className="text-base font-bold line-through text-gray-400">
                  ₹52,500
                </span>
              )}
              <span className="text-3xl sm:text-4xl font-extrabold font-heading text-[#DFC47A]">
                ₹{(52500 - Math.round((52500 * membershipPercent) / 100)).toLocaleString()}
              </span>
            </div>
          </div>

          <button
            onClick={() => handleSelectClass(allInOneClass)}
            className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#DFC47A] via-[#E3C582] to-[#C8A34A] hover:bg-white text-[#2B083A] font-extrabold text-xs uppercase tracking-wider shadow-xl hover:scale-105 transition-all flex items-center gap-2 cursor-pointer"
          >
            <span>Enroll All-in-One Master Pass</span>
            <ArrowRight className="w-4 h-4 text-[#2B083A]" />
          </button>
        </div>
      </motion.div>

      {/* Checkout Modal / Summary (Positioned First before Ayangara 6-Class Grid) */}
      {selectedClass && (
        <motion.div
          id="class-checkout-modal"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/95 backdrop-blur-xl rounded-3xl border-2 border-[#47206A] p-6 sm:p-8 shadow-2xl space-y-6 max-w-xl mx-auto my-4 scroll-mt-40"
        >
          <div className="flex items-center justify-between border-b border-[#E9DED3] pb-4">
            <div>
              <h3 className="text-xl font-extrabold font-heading text-[#47206A]">
                Checkout Summary — {selectedClass.name}
              </h3>
              <p className="text-xs text-[#8C5D00] font-medium">Backend Centralized Discount Engine</p>
            </div>
            <button
              onClick={() => setSelectedClass(null)}
              className="text-xs text-gray-400 hover:text-red-500 font-bold uppercase cursor-pointer"
            >
              Close
            </button>
          </div>

          {!user ? (
            <div className="text-center py-6 space-y-4">
              <p className="text-xs text-red-600 font-bold">Please log in to complete your class enrollment.</p>
              <Link
                href="/login"
                className="inline-block px-6 py-3 rounded-full bg-[#47206A] text-white font-bold text-xs uppercase tracking-wider shadow-md hover:bg-[#C8A34A] hover:text-[#47206A]"
              >
                Login Now
              </Link>
            </div>
          ) : isCalculating ? (
            <div className="text-center py-8 font-bold text-xs text-[#47206A]">
              Calculating backend discount...
            </div>
          ) : errorMsg ? (
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-amber-50 border-2 border-amber-300 text-amber-900 text-xs space-y-3 shadow-md">
                <div className="flex items-start gap-2.5">
                  <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-extrabold text-sm text-[#47206A]">Contributionship Required to Enroll in Classes</h4>
                    <p className="text-gray-700 mt-0.5 leading-relaxed">{errorMsg}</p>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-white/90 border border-amber-200 space-y-2">
                  <span className="text-[11px] font-extrabold text-[#8C5D00] uppercase tracking-wider block">
                    Unlock Exclusive Contributionship Tier Savings & Privileges:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-[11px] font-bold">
                    <div className="p-2 rounded-lg bg-amber-50 border border-amber-200 text-amber-900 text-center">
                      <span className="text-xs text-[#47206A] block font-extrabold">GOLD</span>
                      <span className="block text-[10px]">10% OFF All-in-One</span>
                      <span className="block text-[10px] text-amber-800 font-semibold">5% OFF Individual Class</span>
                      <span className="block text-xs text-[#8C5D00] font-extrabold mt-1">₹1,000</span>
                    </div>
                    <div className="p-2 rounded-lg bg-purple-50 border border-purple-200 text-purple-900 text-center">
                      <span className="text-xs text-[#47206A] block font-extrabold">PLATINUM</span>
                      <span className="block text-[10px]">30% OFF All-in-One</span>
                      <span className="block text-[10px] text-purple-700 font-semibold">10% OFF Individual Class</span>
                      <span className="block text-xs text-[#47206A] font-extrabold mt-1">₹2,000</span>
                    </div>
                    <div className="p-2 rounded-lg bg-[#352043] text-[#DFC47A] border border-[#DFC47A] text-center shadow-sm">
                      <span className="text-xs text-[#DFC47A] block font-extrabold">DIAMOND</span>
                      <span className="block text-[10px]">50% OFF All-in-One</span>
                      <span className="block text-[10px] text-amber-200 font-semibold">20% OFF Individual Class</span>
                      <span className="block text-xs text-[#DFC47A] font-extrabold mt-1">₹5,000</span>
                    </div>
                  </div>
                </div>

                <Link
                  href="/contributorship"
                  className="w-full py-3 rounded-full bg-[#47206A] hover:bg-[#C8A34A] text-white hover:text-[#47206A] font-bold text-xs uppercase tracking-wider shadow-lg transition-all flex items-center justify-center gap-2"
                >
                  <Crown className="w-4 h-4 text-[#DFC47A]" />
                  <span>Choose Your Contributionship Tier Now</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ) : calculation ? (
            <div className="space-y-4">
              <div className="space-y-2 text-xs">
                <div className="flex justify-between py-1.5 border-b border-gray-100">
                  <span className="text-gray-500">Sacred Class Value:</span>
                <span className="font-bold text-[#47206A]">₹{selectedClass.price.toLocaleString()}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-gray-100">
                  <span className="text-gray-500">Active Contributionship Tier:</span>
                  <span className="font-bold text-[#8C5D00]">{activeMembership?.level || 'None (Standard Value)'}</span>
                </div>
                {calculation.discountPercentage > 0 && (
                  <div className="flex justify-between py-1.5 border-b border-gray-100 text-emerald-700">
                    <span className="font-semibold">Sacred Contributor Privilege ({calculation.discountPercentage}%):</span>
                    <span className="font-bold">-₹{calculation.discountAmount.toLocaleString()}</span>
                  </div>
                )}
                <div className="flex justify-between py-2 text-base font-extrabold text-[#47206A] border-t-2 border-[#DFC47A]">
                  <span>Final Payable Amount:</span>
                  <span>₹{calculation.amount.toLocaleString()}</span>
                </div>

                {/* Contributionship Upgrade Callout Notification */}
                {(!activeMembership || activeMembership.level !== 'DIAMOND') && (
                  <div className="p-3.5 rounded-2xl bg-amber-50 border border-[#DFC47A] text-xs space-y-1.5">
                    <div className="flex items-center gap-1.5 font-bold text-[#8C5D00]">
                      <Crown className="w-4 h-4 text-[#C8A34A] shrink-0" />
                      <span>
                        {!activeMembership
                          ? 'Unlock Sacred Privileges with Divya Yogam Contributionship!'
                          : `Upgrade to Diamond Contributionship for Maximum 50% Sacred Privilege!`}
                      </span>
                    </div>
                    <p className="text-gray-600 text-[11px]">
                      {!activeMembership
                        ? 'Non-contributors pay standard contribution. Join Gold, Platinum, or Diamond contributionship to unlock up to 50% sacred privilege on all future classes!'
                        : `As a ${activeMembership.level} contributor, you currently receive ${calculation?.discountPercentage ?? calculation?.discountPercent ?? membershipPercent}% sacred privilege. Support Diamond contributionship to unlock 50% Sacred Privilege on All-in-One or 20% on individual classes!`}
                    </p>
                    <Link
                      href="/contributorship"
                      className="inline-flex items-center gap-1 text-[11px] font-extrabold text-[#47206A] underline hover:text-[#C8A34A] mt-1"
                    >
                      <span>Explore Contributionship Tiers & Upgrade Now</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                )}
              </div>

              <button
                onClick={handleBuyClass}
                disabled={isProcessing}
                className="w-full py-3.5 sm:py-4 px-3 sm:px-6 rounded-full bg-[#47206A] hover:bg-[#C8A34A] text-white hover:text-[#47206A] font-bold text-xs sm:text-sm uppercase tracking-wider shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 text-center leading-snug"
              >
                <span>{isProcessing ? 'Connecting Cashfree...' : `Enroll for Sacred Value ₹${calculation.amount.toLocaleString()} via Cashfree`}</span>
                <ArrowRight className="w-4 h-4 text-[#DFC47A] shrink-0" />
              </button>
            </div>
          ) : null}
        </motion.div>
      )}

      {/* 6 Sequential Classes Grid Header */}
      <div className="space-y-6 pt-2">
        <div
          className="p-4 sm:p-5 rounded-2xl border-2 border-[#DFC47A] shadow-2xl text-white relative z-10 flex items-center justify-between gap-4"
          style={{ background: 'linear-gradient(to right, #2B083A, #47206A, #20052C)' }}
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#DFC47A] flex items-center justify-center text-[#2B083A] shrink-0 shadow-md">
              <BookOpen className="w-5 h-5 text-[#2B083A]" />
            </div>
            <div>
              <h3 className="text-lg sm:text-2xl font-extrabold font-heading text-[#DFC47A] drop-shadow-sm">
                Sequential Individual Class Progression
              </h3>
              <p className="text-xs sm:text-sm text-amber-100 font-medium">
                Enroll in sacred classes sequentially from Level 01 to Level 06
              </p>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#47206A] border border-[#DFC47A] text-[#DFC47A] text-xs font-extrabold shrink-0 shadow-sm">
            <Sparkles className="w-4 h-4 text-[#DFC47A]" /> 6 Sacred Levels
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {individualClasses.map((cls) => {
            const status = getClassStatus(cls.slug, cls.orderSequence);
            const isSelected = selectedClass?.slug === cls.slug;

            // Separate discount structure for individual classes: Diamond 20%, Platinum 10%, Gold 5%
            const individualClassDiscountPercent = activeMembership
              ? activeMembership.level === 'DIAMOND'
                ? 20
                : activeMembership.level === 'PLATINUM'
                ? 10
                : activeMembership.level === 'GOLD'
                ? 5
                : 0
              : 0;

            const finalPrice = Math.round(cls.price * (1 - individualClassDiscountPercent / 100));
            const discountAmt = cls.price - finalPrice;

            return (
              <motion.div
                key={cls.slug}
                whileHover={{ y: -4 }}
                className={`rounded-3xl border-2 p-6 transition-all flex flex-col justify-between relative overflow-hidden bg-white/90 shadow-xl ${
                  isSelected
                    ? 'border-[#47206A] ring-4 ring-[#DFC47A]/40'
                    : 'border-[#DFC47A] hover:border-[#47206A]'
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="w-8 h-8 rounded-full bg-[#47206A] text-[#DFC47A] font-extrabold text-sm flex items-center justify-center">
                      0{cls.orderSequence}
                    </span>

                    {status === 'COMPLETED' ? (
                      <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold border border-emerald-300">
                        COMPLETED
                      </span>
                    ) : status === 'PURCHASED' ? (
                      <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-bold border border-amber-300">
                        ENROLLED
                      </span>
                    ) : status === 'AVAILABLE' ? (
                      <span className="px-3 py-1 rounded-full bg-purple-100 text-purple-800 text-xs font-bold border border-purple-300">
                        AVAILABLE
                      </span>
                    ) : (
                      <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-500 text-xs font-bold border border-gray-300">
                        LOCKED
                      </span>
                    )}
                  </div>

                  <div>
                    <h3 className="text-2xl font-extrabold font-heading text-[#47206A]">{cls.name}</h3>
                    <p className="text-xs font-bold text-[#8C5D00] mt-0.5">{cls.tagline}</p>
                  </div>

                  <p className="text-xs text-gray-600 leading-relaxed">{cls.description}</p>

                  {/* Price Box with Strikethrough for active members */}
                  {individualClassDiscountPercent > 0 ? (
                    <div className="p-3.5 rounded-2xl bg-[#FAF7F2] border border-[#DFC47A] flex items-center justify-between">
                      <div>
                        <span className="text-[10px] font-extrabold text-emerald-800 uppercase tracking-wider block">
                          {activeMembership?.level} Contributor ({individualClassDiscountPercent}% Sacred Privilege)
                        </span>
                        <span className="text-xs font-bold text-gray-400 line-through">
                          ₹{cls.price.toLocaleString()}
                        </span>
                      </div>
                      <div className="text-right">
                        <span className="text-xl font-extrabold text-[#47206A]">
                          ₹{finalPrice.toLocaleString()}
                        </span>
                        <span className="text-[10px] text-emerald-700 font-bold block">
                          Privilege Grant ₹{discountAmt.toLocaleString()}
                        </span>
                      </div>
                    </div>
                  ) : (
                    <div className="p-3.5 rounded-2xl bg-[#FAF7F2] border border-[#E9DED3] flex items-center justify-between">
                      <div>
                        <span className="text-[10px] font-bold text-[#8C5D00] uppercase tracking-wider block">
                          Standard Contribution (Standard Value)
                        </span>
                        <span className="text-xs text-gray-500 font-semibold">
                          Sacred Value
                        </span>
                      </div>
                      <span className="text-lg font-extrabold text-[#47206A]">₹{cls.price.toLocaleString()}</span>
                    </div>
                  )}
                </div>

                <div className="pt-6 mt-6 border-t border-gray-100">
                  {status === 'AVAILABLE' ? (
                    <button
                      onClick={() => handleSelectClass(cls)}
                      className="w-full py-3 rounded-full bg-[#47206A] hover:bg-[#C8A34A] text-white hover:text-[#47206A] font-bold text-xs uppercase tracking-wider shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span>{isSelected ? 'Selected' : 'Enroll in Sacred Class'}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  ) : status === 'LOCKED' ? (
                    <div className="text-center py-2 text-xs font-bold text-gray-400 flex items-center justify-center gap-1.5">
                      <Lock className="w-4 h-4" /> Unlock Previous Class First
                    </div>
                  ) : (
                    <div className="text-center py-2 text-xs font-bold text-emerald-700 flex items-center justify-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4" /> Access Active
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default function ClassesPage() {
  return (
    <div className="min-h-screen bg-transparent text-[#47206A] flex flex-col justify-between relative overflow-x-hidden">
      {/* Background Image Overlay (con-6.webp matching Wellness & Contact Page) */}
      <div
        className="absolute inset-0 opacity-85 pointer-events-none bg-cover bg-center bg-no-repeat bg-fixed z-0"
        style={{
          backgroundImage: "linear-gradient(rgba(250, 245, 239, 0.5), rgba(250, 245, 239, 0.65)), url('/images/con-6.webp')",
        }}
      />
      <Navbar />
      <main className="pt-32 sm:pt-36 lg:pt-40 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full flex-1">
        <Suspense fallback={<div className="text-center py-10">Loading classes...</div>}>
          <ClassesContent />
        </Suspense>
      </main>
    </div>
  );
}
