'use client';

export const dynamic = 'force-dynamic';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Heart, CheckCircle2, AlertCircle, ArrowRight, ShieldCheck, Calendar } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function ShambalaContributionContent() {
  const searchParams = useSearchParams();
  const orderId = searchParams.get('order_id');

  const [user, setUser] = useState<any>(null);
  const [selectedPreset, setSelectedPreset] = useState<number>(5000);
  const [isCustom, setIsCustom] = useState(false);
  const [customAmount, setCustomAmount] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [paymentBanner, setPaymentBanner] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  useEffect(() => {
    fetchUser();
    if (orderId) {
      verifyContributionPayment(orderId);
    }
  }, [orderId]);

  const verifyContributionPayment = async (orderIdToVerify: string) => {
    try {
      const res = await fetch(`/api/pay/verify?order_id=${orderIdToVerify}`);
      const data = await res.json();
      if (res.ok && data.success && data.isPaid) {
        setPaymentBanner({
          type: 'success',
          message: 'Payment Successful! Thank you for your sacred Shambala Contribution.',
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
      }
    } catch (err) {}
  };

  const presets = [1000, 2000, 5000, 10000];

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

  const handleContribute = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!user) {
      setErrorMsg('Registration or Login is mandatory before making a Shambala Contribution. Please log in or create an account.');
      return;
    }

    let amountToPay = selectedPreset;

    if (isCustom) {
      const num = Number(customAmount);
      if (isNaN(num) || num <= 10000) {
        setErrorMsg('Custom sacred value must be greater than ₹10,000.');
        return;
      }
      amountToPay = num;
    }

    setIsProcessing(true);

    try {
      const res = await fetch('/api/pay/create-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          orderType: 'CONTRIBUTION',
          contributionAmount: amountToPay,
          isCustomContribution: isCustom,
        }),
      });

      const data = await res.json();

      if (!res.ok || !data.paymentSessionId) {
        throw new Error(data.error || 'Failed to create contribution payment order.');
      }

      const scriptLoaded = await loadCashfreeScript();
      if (scriptLoaded && (window as any).Cashfree) {
        const cashfree = (window as any).Cashfree({ mode: 'sandbox' });
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
          <div className="text-center space-y-3">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#47206A]/10 text-[#47206A] text-xs font-extrabold uppercase tracking-wider border border-[#DFC47A]">
              <Heart className="w-4 h-4 text-red-500" /> Sacred Contribution
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#47206A]">
              Divya Yogam – Spiral Meditation Contribution
            </h1>
            <p className="text-xs sm:text-base text-[#8C5D00] max-w-xl mx-auto font-medium">
              Independent contribution to support Divine Grace Foundation activities, wellness centers, and meditation events.
            </p>
          </div>

          {/* Date Range Validity Notice */}
          <div className="p-4 rounded-2xl bg-[#FAF5EF] border border-[#DFC47A] flex items-center gap-3 shadow-sm hover:shadow-md hover:border-[#47206A] transition-all duration-300 group">
            <Calendar className="w-6 h-6 text-[#C8A34A] shrink-0 group-hover:scale-110 transition-transform duration-300" />
            <div className="text-xs text-[#47206A]">
              <span className="font-extrabold block uppercase tracking-wider text-[#8C5D00]">Contribution Window:</span>
              <span className="font-medium mt-1 block">
                <strong className="px-2.5 py-1 rounded-lg bg-[#47206A] text-[#DFC47A] font-extrabold inline-block shadow-sm group-hover:bg-[#C8A34A] group-hover:text-[#47206A] transition-all duration-300">
                  August 15 – December 21
                </strong>{' '}
                <span className="text-[#8C5D00] font-semibold">(Backend Enforced)</span>. Contributions outside this window will be closed.
              </span>
            </div>
          </div>

          {errorMsg && (
            <div className="p-4 rounded-2xl bg-red-50 border border-red-200 text-red-700 text-xs font-bold flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorMsg}</span>
            </div>
          )}

          {/* Payment Status Card (Success or Cancelled/Failed) */}
          {paymentBanner && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className={`p-6 sm:p-8 rounded-3xl border-2 text-center space-y-4 shadow-xl ${
                paymentBanner.type === 'success'
                  ? 'bg-emerald-50/90 border-emerald-400 text-emerald-900'
                  : 'bg-amber-50/90 border-amber-400 text-amber-900'
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
                    {paymentBanner.type === 'success' ? 'Payment Successful!' : 'Payment Not Completed'}
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold max-w-md mx-auto mt-1">
                    {paymentBanner.message}
                  </p>
                </div>
              </div>

              {orderId && (
                <div className="p-3.5 rounded-2xl bg-white/80 border border-gray-200 text-left text-xs max-w-md mx-auto space-y-1 text-gray-700">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Order Reference:</span>
                    <span className="font-mono font-bold">{orderId}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Status:</span>
                    <span className={`font-bold ${paymentBanner.type === 'success' ? 'text-emerald-700' : 'text-amber-700'}`}>
                      {paymentBanner.type === 'success' ? 'PAID / CONFIRMED' : 'CANCELLED / UNPAID'}
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
                    <span>View in Dashboard</span>
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

          {/* User Login Status Banner */}
          {user ? (
            <div className="p-3.5 rounded-2xl bg-[#47206A]/10 border border-[#DFC47A] text-xs flex items-center justify-between">
              <span className="font-bold text-[#47206A]">
                Contributing as logged in member: <span className="text-[#8C5D00]">{user.name}</span> ({user.email})
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-[#47206A] text-[#DFC47A] text-[10px] font-bold">
                Linked to Account
              </span>
            </div>
          ) : (
            <div className="p-4 rounded-2xl bg-amber-50 border border-[#DFC47A] text-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-[#8C5D00] shrink-0" />
                <span className="text-[#47206A] font-bold">
                  Registration & Log In is mandatory to contribute. Please log in or create an account to proceed.
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

          <form onSubmit={handleContribute} className="space-y-6">
            {/* Presets */}
            <div>
              <label className="block text-xs font-bold text-[#47206A] uppercase tracking-wider mb-3">
                Select Sacred Value
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {presets.map((preset) => (
                  <button
                    key={preset}
                    type="button"
                    onClick={() => {
                      setSelectedPreset(preset);
                      setIsCustom(false);
                    }}
                    className={`py-4 px-3 rounded-2xl border-2 font-extrabold text-lg text-center transition-all cursor-pointer ${
                      !isCustom && selectedPreset === preset
                        ? 'bg-[#47206A] text-[#DFC47A] border-[#DFC47A] shadow-lg scale-105'
                        : 'bg-[#FAF7F2] text-[#47206A] border-[#E9DED3] hover:border-[#47206A]'
                    }`}
                  >
                    ₹{preset.toLocaleString()}
                  </button>
                ))}
              </div>
            </div>

            {/* Custom Amount */}
            <div className="pt-4 border-t border-[#E9DED3] space-y-3">
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="customToggle"
                  checked={isCustom}
                  onChange={(e) => setIsCustom(e.target.checked)}
                  className="w-4 h-4 accent-[#47206A] cursor-pointer"
                />
                <label htmlFor="customToggle" className="text-xs font-bold text-[#47206A] uppercase tracking-wider cursor-pointer">
                  Enter Custom Sacred Value (&gt; ₹10,000)
                </label>
              </div>

              <div>
                <input
                  type="number"
                  value={customAmount}
                  onFocus={() => setIsCustom(true)}
                  onChange={(e) => {
                    setCustomAmount(e.target.value);
                    setIsCustom(true);
                  }}
                  placeholder="Enter custom sacred value in ₹ (e.g. 15,000)"
                  className={`w-full px-4 py-3 bg-[#FAF7F2] border rounded-xl text-sm outline-none font-bold transition-all ${
                    isCustom
                      ? 'border-[#47206A] ring-2 ring-[#47206A]/20 bg-white'
                      : 'border-[#E9DED3] focus:border-[#47206A]'
                  }`}
                />
                <p className="text-[11px] text-[#8C5D00] mt-1 font-semibold">
                  Note: Backend enforces custom contributions must strictly be greater than ₹10,000.
                </p>
              </div>
            </div>

            <button
              type="submit"
              disabled={isProcessing}
              className="w-full py-3.5 sm:py-4 px-3 sm:px-6 rounded-full bg-[#47206A] hover:bg-[#C8A34A] text-white hover:text-[#47206A] font-bold text-xs sm:text-sm uppercase tracking-wider shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 text-center leading-snug"
            >
              <span>
                {isProcessing
                  ? 'Connecting Cashfree...'
                  : isCustom
                  ? customAmount && Number(customAmount) > 0
                    ? `Contribute ₹${Number(customAmount).toLocaleString()} via Cashfree`
                    : 'Contribute Custom Sacred Value via Cashfree'
                  : `Contribute ₹${selectedPreset.toLocaleString()} via Cashfree`}
              </span>
              <ArrowRight className="w-4 h-4 text-[#DFC47A] shrink-0" />
            </button>
          </form>
        </motion.div>
      </main>
    </div>
  );
}

export default function ShambalaContributionPage() {
  return (
    <Suspense fallback={<div className="text-center py-20">Loading Shambala Contribution page...</div>}>
      <ShambalaContributionContent />
    </Suspense>
  );
}
