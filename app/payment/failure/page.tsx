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
      className="bg-white/90 backdrop-blur-xl rounded-3xl border-2 border-red-300 p-8 sm:p-12 shadow-2xl text-center space-y-6 max-w-xl mx-auto"
    >
      <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto text-red-600 border-2 border-red-200 shadow-md">
        <XCircle className="w-10 h-10" />
      </div>

      <div className="space-y-2">
        <h1 className="text-3xl font-extrabold font-heading text-[#47206A]">
          Payment Failed or Cancelled
        </h1>
        <p className="text-xs sm:text-sm text-red-700 font-semibold">
          Your payment could not be processed. No charges were made to your account.
        </p>
      </div>

      {orderId && (
        <div className="p-4 rounded-2xl bg-gray-50 border border-gray-200 text-left text-xs space-y-1">
          <span className="text-gray-500 block font-bold uppercase">Order Reference:</span>
          <span className="font-mono font-bold text-[#47206A]">{orderId}</span>
        </div>
      )}

      <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
        <Link
          href="/contributorship"
          className="px-6 py-3.5 rounded-full bg-[#47206A] hover:bg-[#C8A34A] text-white hover:text-[#47206A] font-bold text-xs uppercase tracking-wider shadow-md transition-all flex items-center justify-center gap-2"
        >
          <RotateCcw className="w-4 h-4 text-[#DFC47A]" />
          <span>Try Payment Again</span>
        </Link>
        <Link
          href="/user/dashboard"
          className="px-6 py-3.5 rounded-full bg-[#FAF7F2] hover:bg-[#47206A] text-[#47206A] hover:text-white border border-[#DFC47A] font-bold text-xs uppercase tracking-wider transition-all text-center"
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
