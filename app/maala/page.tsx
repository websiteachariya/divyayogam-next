'use client';

export const dynamic = 'force-dynamic';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Sparkles, Calendar, CheckCircle2, AlertCircle, ArrowRight, User, Phone, Download } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function MaalaContent() {
  const searchParams = useSearchParams();
  const orderId = searchParams.get('order_id');

  const [user, setUser] = useState<any>(null);
  const [participantName, setParticipantName] = useState('');
  const [participantPhone, setParticipantPhone] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [paymentBanner, setPaymentBanner] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  useEffect(() => {
    fetchUser();
    if (orderId) {
      verifyMaalaPayment(orderId);
    }
  }, [orderId]);

  const verifyMaalaPayment = async (orderIdToVerify: string) => {
    try {
      const res = await fetch(`/api/pay/verify?order_id=${orderIdToVerify}`);
      const data = await res.json();
      if (res.ok && data.success && data.isPaid) {
        setPaymentBanner({
          type: 'success',
          message: 'Payment Successful! Your Spiral Meditation Maala offering has been confirmed and activated.',
        });
        await fetchUser();
      } else {
        setPaymentBanner({
          type: 'error',
          message: 'Payment not completed or cancelled. If you backed out of the Cashfree gateway, no funds were charged.',
        });
      }
    } catch (err) {
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
      if (data.authenticated && data.user) {
        setUser(data.user);
        setParticipantName(data.user.name || '');
        setParticipantPhone(data.user.mobile || '');
      }
    } catch (err) {
      // Guest user
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

  const handlePurchaseMaala = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!user) {
      setErrorMsg('Registration or Login is mandatory before offering for Divya Yoga Maala. Please log in or create an account.');
      return;
    }

    if (!participantName || participantName.trim().length < 3) {
      setErrorMsg('Participant name is required.');
      return;
    }

    const cleanPhone = participantPhone.replace(/\D/g, '').slice(-10);
    if (!/^[6-9]\d{9}$/.test(cleanPhone)) {
      setErrorMsg('Please enter a valid 10-digit Indian phone number.');
      return;
    }

    setIsProcessing(true);

    try {
      const res = await fetch('/api/pay/create-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          orderType: 'MAALA',
          participantName: participantName.trim(),
          participantPhone: cleanPhone,
          fullName: participantName.trim(),
          phone: cleanPhone,
        }),
      });

      const data = await res.json();

      if (!res.ok || !data.paymentSessionId) {
        throw new Error(data.error || 'Failed to create Maala payment order.');
      }

      const scriptLoaded = await loadCashfreeScript();
      if (scriptLoaded && (window as any).Cashfree) {
        const cashfreeMode = (process.env.NEXT_PUBLIC_CASHFREE_ENV || 'production') as 'sandbox' | 'production';
        const cashfree = (window as any).Cashfree({ mode: cashfreeMode });
        cashfree.checkout({
          paymentSessionId: data.paymentSessionId,
          redirectTarget: '_self',
        });
      } else {
        alert('Failed to load Cashfree Payment SDK');
      }
    } catch (err: any) {
      setErrorMsg(err.message || 'Payment initialization failed.');
    } finally {
      setIsProcessing(false);
    }
  };

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

      <main className="pt-32 sm:pt-36 lg:pt-40 pb-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full flex-1">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/90 backdrop-blur-xl rounded-3xl border-2 border-[#DFC47A] p-6 sm:p-10 shadow-2xl space-y-8"
        >
          {/* Top Banner */}
          <div className="text-center space-y-3">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#47206A]/10 text-[#47206A] text-xs font-extrabold uppercase tracking-wider border border-[#DFC47A]">
              <Sparkles className="w-4 h-4 text-[#8C5D00]" /> Sacred Offering
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#47206A]">
              Divya Yogam – Spiral Meditation Maala
            </h1>
            <p className="text-xs sm:text-base text-[#8C5D00] max-w-xl mx-auto font-medium">
              An independent sacred offering. Sacred Value: ₹1,000. Contributionship or class enrollment is NOT required.
            </p>
          </div>

          {/* Sacred Maala Image Card */}
          <div className="relative rounded-2xl overflow-hidden border-2 border-[#DFC47A] shadow-xl group bg-[#FAF7F2] max-w-md mx-auto aspect-[16/9] w-full">
            <img
              src="/images/maala_placeholder.webp"
              alt="Divya Yogam – Spiral Meditation Maala"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#20052C]/80 via-transparent to-transparent flex items-end p-4">
              <div className="text-white">
                <h3 className="text-base sm:text-lg font-bold font-heading text-white">
                  Spiral Meditation Maala
                </h3>
              </div>
            </div>
          </div>

          {/* Date Range Validity Notice */}
          <div className="p-4 rounded-2xl bg-[#FAF5EF] border border-[#DFC47A] flex items-center gap-3 shadow-sm hover:shadow-md hover:border-[#47206A] transition-all duration-300 group">
            <Calendar className="w-6 h-6 text-[#C8A34A] shrink-0 group-hover:scale-110 transition-transform duration-300" />
            <div className="text-xs text-[#47206A]">
              <span className="font-extrabold block uppercase tracking-wider text-[#8C5D00]">Contribution Window:</span>
              <span className="font-medium mt-1 block">
                <strong className="px-2.5 py-1 rounded-lg bg-[#47206A] text-[#DFC47A] font-extrabold inline-block shadow-sm group-hover:bg-[#C8A34A] group-hover:text-[#47206A] transition-all duration-300">
                  August 15 – December 1
                </strong>{' '}
                <span className="text-[#8C5D00] font-semibold">(Backend Enforced)</span>. Contributions outside this window will be closed.
              </span>
            </div>
          </div>

          {/* Payment Status Card (Success or Cancelled/Failed) */}
          {paymentBanner && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-6 sm:p-8 rounded-3xl border-4 text-center space-y-4 shadow-2xl max-w-2xl mx-auto relative z-20"
              style={{
                background: paymentBanner.type === 'success'
                  ? 'linear-gradient(135deg, #1C0526 0%, #3B1554 100%)'
                  : 'linear-gradient(135deg, #2A0818 0%, #4A1028 100%)',
                borderColor: paymentBanner.type === 'success' ? '#DFC47A' : '#F87171',
                color: '#FFFFFF',
              }}
            >
              <div className="flex flex-col items-center gap-3">
                {paymentBanner.type === 'success' ? (
                  <div className="w-16 h-16 bg-[#DFC47A] rounded-full flex items-center justify-center text-[#1C0526] border-2 border-white shadow-lg">
                    <CheckCircle2 className="w-10 h-10 stroke-[2.5]" />
                  </div>
                ) : (
                  <div className="w-16 h-16 bg-[#F87171] rounded-full flex items-center justify-center text-white border-2 border-white shadow-lg">
                    <AlertCircle className="w-10 h-10 stroke-[2.5]" />
                  </div>
                )}
                <div>
                  <h3 className="text-2xl sm:text-3xl font-black font-heading tracking-wide" style={{ color: paymentBanner.type === 'success' ? '#DFC47A' : '#FCA5A5' }}>
                    {paymentBanner.type === 'success' ? 'Payment Successful!' : 'Payment Not Completed'}
                  </h3>
                  <p className="text-sm sm:text-base font-bold max-w-md mx-auto mt-2.5 leading-relaxed text-white">
                    {paymentBanner.message}
                  </p>
                </div>
              </div>

              {orderId && (
                <div
                  className="p-4 sm:p-5 rounded-2xl text-left text-xs sm:text-sm max-w-md mx-auto space-y-2.5 shadow-inner border"
                  style={{
                    background: '#12031A',
                    borderColor: paymentBanner.type === 'success' ? 'rgba(223, 196, 122, 0.4)' : 'rgba(248, 113, 113, 0.4)',
                  }}
                >
                  <div className="flex justify-between items-center py-1 border-b border-white/10">
                    <span className="font-extrabold" style={{ color: paymentBanner.type === 'success' ? '#DFC47A' : '#FCA5A5' }}>
                      Offering Reference:
                    </span>
                    <span className="font-mono font-black text-white text-sm tracking-wider">{orderId}</span>
                  </div>
                  <div className="flex justify-between items-center py-1">
                    <span className="font-extrabold" style={{ color: paymentBanner.type === 'success' ? '#DFC47A' : '#FCA5A5' }}>
                      Status:
                    </span>
                    <span
                      className="font-black tracking-wider text-sm"
                      style={{ color: paymentBanner.type === 'success' ? '#34D399' : '#F87171' }}
                    >
                      {paymentBanner.type === 'success' ? 'PAID / CONFIRMED' : 'CANCELLED / UNPAID'}
                    </span>
                  </div>
                </div>
              )}

              <div className="pt-3 flex flex-wrap justify-center gap-4">
                {paymentBanner.type === 'success' && (
                  <Link
                    href="/user/dashboard"
                    className="px-7 py-3.5 rounded-full font-black text-xs sm:text-sm uppercase tracking-wider transition-all flex items-center gap-2 shadow-xl hover:scale-105"
                    style={{ background: '#DFC47A', color: '#1C0526' }}
                  >
                    <span>View in Dashboard</span>
                    <ArrowRight className="w-4 h-4 stroke-[3]" />
                  </Link>
                )}
                <button
                  onClick={() => setPaymentBanner(null)}
                  className="px-6 py-3.5 rounded-full font-bold text-xs sm:text-sm uppercase tracking-wider transition-all cursor-pointer shadow-md hover:bg-white hover:text-black"
                  style={{ background: 'rgba(255, 255, 255, 0.15)', color: '#FFFFFF', border: '1px solid rgba(255, 255, 255, 0.3)' }}
                >
                  Dismiss Card
                </button>
              </div>
            </motion.div>
          )}

          {errorMsg && (
            <div className="p-4 rounded-2xl bg-red-50 border border-red-200 text-red-700 text-xs font-bold flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorMsg}</span>
            </div>
          )}

          {/* User Login Status Banner */}
          {user ? (
            <div className="p-3.5 rounded-2xl bg-[#47206A]/10 border border-[#DFC47A] text-xs flex items-center justify-between">
              <span className="font-bold text-[#47206A]">
                Purchasing as logged in member: <span className="text-[#8C5D00]">{user.name}</span> ({user.email})
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-[#47206A] text-[#DFC47A] text-[10px] font-bold">
                Autofilled
              </span>
            </div>
          ) : (
            <div className="p-4 rounded-2xl bg-amber-50 border border-[#DFC47A] text-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-[#8C5D00] shrink-0" />
                <span className="text-[#47206A] font-bold">
                  Registration & Log In is mandatory to offer for Maala. Please log in or create an account to proceed.
                </span>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <Link
                  href="/login"
                  className="px-4 py-1.5 rounded-full bg-[#47206A] text-[#DFC47A] text-[11px] font-bold hover:bg-[#C8A34A] hover:text-[#47206A] transition-all"
                >
                  Log In
                </Link>
                <Link
                  href="/register"
                  className="px-4 py-1.5 rounded-full bg-[#FAF7F2] text-[#47206A] border border-[#DFC47A] text-[11px] font-bold hover:bg-[#47206A] hover:text-white transition-all"
                >
                  Register
                </Link>
              </div>
            </div>
          )}

          {/* Checkout Form */}
          <form onSubmit={handlePurchaseMaala} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-bold text-[#47206A] uppercase tracking-wider mb-2">
                  Participant Full Name <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8C5D00]" />
                  <input
                    type="text"
                    value={participantName}
                    onChange={(e) => setParticipantName(e.target.value)}
                    placeholder="Enter participant name"
                    className="w-full pl-10 pr-4 py-3 bg-[#FAF7F2] border border-[#E9DED3] focus:border-[#47206A] rounded-xl text-sm outline-none transition-all"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#47206A] uppercase tracking-wider mb-2">
                  Mobile Number (10 Digits) <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8C5D00]" />
                  <input
                    type="tel"
                    maxLength={10}
                    value={participantPhone}
                    onChange={(e) => setParticipantPhone(e.target.value.replace(/\D/g, ''))}
                    placeholder="9876543210"
                    className="w-full pl-10 pr-4 py-3 bg-[#FAF7F2] border border-[#E9DED3] focus:border-[#47206A] rounded-xl text-sm outline-none transition-all"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E9DED3] flex items-center justify-between">
              <div>
                <span className="text-xs text-gray-500 font-bold uppercase tracking-wider">Sacred Value:</span>
                <h3 className="text-2xl font-extrabold font-heading text-[#47206A]">₹1,000</h3>
              </div>
              <span className="text-xs font-bold text-[#8C5D00] uppercase tracking-wider">
                Independent Offering
              </span>
            </div>

            <button
              type="submit"
              disabled={isProcessing}
              className="w-full py-3.5 sm:py-4 px-3 sm:px-6 rounded-full bg-[#47206A] hover:bg-[#C8A34A] text-white hover:text-[#47206A] font-bold text-xs sm:text-sm uppercase tracking-wider shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 text-center leading-snug"
            >
              <span>{isProcessing ? 'Initializing Sacred Value...' : 'Proceed to Sacred Value ₹1,000 via Cashfree'}</span>
              <ArrowRight className="w-4 h-4 text-[#DFC47A] shrink-0" />
            </button>
          </form>
        </motion.div>
      </main>
    </div>
  );
}

export default function MaalaPage() {
  return (
    <Suspense fallback={<div className="text-center py-20">Loading Maala page...</div>}>
      <MaalaContent />
    </Suspense>
  );
}
