'use client';

import React, { Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { XCircle, ArrowRight, RotateCcw } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

function PaymentFailureContent() {
  const searchParams = useSearchParams();
  const orderId = searchParams.get('order_id');

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="p-8 sm:p-12 rounded-3xl border-4 text-center space-y-6 max-w-xl mx-auto shadow-2xl relative z-20"
      style={{
        background: 'linear-gradient(135deg, #2A0818 0%, #4A1028 100%)',
        borderColor: '#F87171',
        color: '#FFFFFF',
      }}
    >
      <div className="w-16 h-16 bg-[#F87171] rounded-full flex items-center justify-center mx-auto text-white border-2 border-white shadow-lg">
        <XCircle className="w-10 h-10 stroke-[2.5]" />
      </div>

      <div className="space-y-2">
        <h1 className="text-3xl font-black font-heading tracking-wide text-[#FCA5A5]">
          Payment Failed or Cancelled
        </h1>
        <p className="text-sm sm:text-base font-bold text-white max-w-md mx-auto leading-relaxed">
          Your payment could not be processed. No charges were made to your account.
        </p>
      </div>

      {orderId && (
        <div
          className="p-4 sm:p-5 rounded-2xl text-left text-xs sm:text-sm max-w-md mx-auto space-y-2 shadow-inner border"
          style={{
            background: '#1D0410',
            borderColor: 'rgba(248, 113, 113, 0.4)',
          }}
        >
          <span className="text-[#FCA5A5] block font-extrabold uppercase">Order Reference:</span>
          <span className="font-mono font-black text-white text-sm tracking-wider">{orderId}</span>
        </div>
      )}

      <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
        <Link
          href="/contributorship"
          className="px-7 py-3.5 rounded-full font-black text-xs sm:text-sm uppercase tracking-wider shadow-xl transition-all flex items-center justify-center gap-2 hover:scale-105"
          style={{ background: '#F87171', color: '#FFFFFF' }}
        >
          <RotateCcw className="w-4 h-4 stroke-[3]" />
          <span>Try Payment Again</span>
        </Link>
        <Link
          href="/user/dashboard"
          className="px-6 py-3.5 rounded-full font-bold text-xs sm:text-sm uppercase tracking-wider transition-all text-center shadow-md hover:bg-white hover:text-black"
          style={{ background: 'rgba(255, 255, 255, 0.15)', color: '#FFFFFF', border: '1px solid rgba(255, 255, 255, 0.3)' }}
        >
          Go to Dashboard
        </Link>
      </div>
    </motion.div>
  );
}

export default function PaymentFailurePage() {
  return (
    <div className="min-h-screen bg-[#F8F2E8] text-[#47206A] flex flex-col justify-between">
      <Navbar />
      <main className="pt-44 sm:pt-48 pb-20 sm:pb-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full flex-1 flex items-center justify-center">
        <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
          <PaymentFailureContent />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
