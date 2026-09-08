'use client';

import React, { useState, useEffect, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { CheckCircle2, ShieldCheck, ArrowRight, Home, BookOpen, Clock } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

function PaymentSuccessContent() {
  const searchParams = useSearchParams();
  const orderId = searchParams.get('order_id');

  const [loading, setLoading] = useState(true);
  const [orderInfo, setOrderInfo] = useState<any>(null);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    if (orderId) {
      verifyPayment();
    } else {
      setLoading(false);
    }
  }, [orderId]);

  const verifyPayment = async () => {
    try {
      const res = await fetch(`/api/pay/verify?order_id=${orderId}`);
      const data = await res.json();

      if (res.ok && data.success) {
        setOrderInfo(data.order);
        if (!data.isPaid && data.orderStatus !== 'PAID') {
          setErrorMsg(`Payment not completed (Status: ${data.orderStatus || 'USER_DROPPED'}). If you cancelled or backed out of the Cashfree gateway, no funds were charged.`);
        }
      } else {
        setErrorMsg(data.error || 'Payment status verification pending.');
      }
    } catch (err: any) {
      setErrorMsg(err.message || 'Verification request failed');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="text-center py-16">
        <div className="w-10 h-10 border-4 border-[#DFC47A] border-t-[#47206A] rounded-full animate-spin mx-auto mb-4" />
        <p className="text-xs font-bold uppercase tracking-wider text-[#47206A]">
          Verifying payment with Cashfree...
        </p>
      </div>
    );
  }

  const isPaid = orderInfo?.status === 'PAID';

  if (!isPaid || errorMsg) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white/90 backdrop-blur-xl rounded-3xl border-2 border-amber-400 p-8 sm:p-12 shadow-2xl text-center space-y-6 max-w-xl mx-auto"
      >
        <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto text-amber-600 border-2 border-amber-300 shadow-md">
          <Clock className="w-10 h-10" />
        </div>

        <div className="space-y-2">
          <h1 className="text-2xl sm:text-3xl font-extrabold font-heading text-[#47206A]">
            Payment Not Completed
          </h1>
          <p className="text-xs sm:text-sm text-amber-900 font-semibold max-w-md mx-auto">
            {errorMsg || 'The payment was not completed or was cancelled at checkout.'}
          </p>
        </div>

        {orderId && (
          <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E9DED3] text-left text-xs space-y-2">
            <div className="flex justify-between py-1 border-b border-gray-100">
              <span className="text-gray-500">Cashfree Order ID:</span>
              <span className="font-mono font-bold text-[#47206A]">{orderId}</span>
            </div>
            {orderInfo && (
              <>
                <div className="flex justify-between py-1 border-b border-gray-100">
                  <span className="text-gray-500">Order Status:</span>
                  <span className="font-bold text-amber-700">{orderInfo.status || 'USER_CANCELLED'}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-gray-500">Amount:</span>
                  <span className="font-bold text-[#47206A]">₹{orderInfo.finalAmount?.toLocaleString()}</span>
                </div>
              </>
            )}
          </div>
        )}

        <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/classes"
            className="px-6 py-3.5 rounded-full bg-[#47206A] hover:bg-[#C8A34A] text-white hover:text-[#47206A] font-bold text-xs uppercase tracking-wider shadow-md transition-all flex items-center justify-center gap-2"
          >
            <span>Return to Classes</span>
            <ArrowRight className="w-4 h-4 text-[#DFC47A]" />
          </Link>
          <Link
            href="/user/dashboard"
            className="px-6 py-3.5 rounded-full bg-[#FAF7F2] text-[#47206A] border border-[#DFC47A] font-bold text-xs uppercase tracking-wider hover:bg-[#47206A] hover:text-white transition-all flex items-center justify-center gap-2"
          >
            <span>User Dashboard</span>
          </Link>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="bg-white/90 backdrop-blur-xl rounded-3xl border-2 border-emerald-400 p-8 sm:p-12 shadow-2xl text-center space-y-6 max-w-xl mx-auto"
    >
      <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto text-emerald-600 border-2 border-emerald-300 shadow-md">
        <CheckCircle2 className="w-10 h-10" />
      </div>

      <div className="space-y-2">
        <h1 className="text-3xl font-extrabold font-heading text-[#47206A]">
          Payment Successful!
        </h1>
        <p className="text-xs sm:text-sm text-emerald-800 font-semibold">
          Your Cashfree payment has been verified and your purchase is activated.
        </p>
      </div>

      {orderId && (
        <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E9DED3] text-left text-xs space-y-2">
          <div className="flex justify-between py-1 border-b border-gray-100">
            <span className="text-gray-500">Cashfree Order ID:</span>
            <span className="font-mono font-bold text-[#47206A]">{orderId}</span>
          </div>
          {orderInfo && (
            <>
              <div className="flex justify-between py-1 border-b border-gray-100">
                <span className="text-gray-500">Order Type:</span>
                <span className="font-bold text-[#8C5D00]">{orderInfo.orderType}</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-gray-500">Total Amount:</span>
                <span className="font-bold text-[#47206A]">₹{orderInfo.finalAmount?.toLocaleString()}</span>
              </div>
            </>
          )}
        </div>
      )}

      <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
        <Link
          href="/user/dashboard"
          className="px-6 py-3.5 rounded-full bg-[#47206A] hover:bg-[#C8A34A] text-white hover:text-[#47206A] font-bold text-xs uppercase tracking-wider shadow-md transition-all flex items-center justify-center gap-2"
        >
          <span>Go to User Dashboard</span>
          <ArrowRight className="w-4 h-4 text-[#DFC47A]" />
        </Link>
      </div>
    </motion.div>
  );
}

export default function PaymentSuccessPage() {
  return (
    <div className="min-h-screen bg-[#F8F2E8] text-[#47206A] flex flex-col justify-between">
      <Navbar />
      <main className="pt-44 sm:pt-48 pb-20 sm:pb-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full flex-1 flex items-center justify-center">
        <Suspense fallback={<div className="text-center py-10">Verifying...</div>}>
          <PaymentSuccessContent />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
