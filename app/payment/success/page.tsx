'use client';

import React, { useState, useEffect, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { CheckCircle2, ShieldCheck, ArrowRight, Home, BookOpen, Clock, Download } from 'lucide-react';
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
        className="p-8 sm:p-12 rounded-3xl border-4 text-center space-y-6 max-w-xl mx-auto shadow-2xl relative z-20"
        style={{
          background: 'linear-gradient(135deg, #2A0818 0%, #4A1028 100%)',
          borderColor: '#F87171',
          color: '#FFFFFF',
        }}
      >
        <div className="w-16 h-16 bg-[#F87171] rounded-full flex items-center justify-center mx-auto text-white border-2 border-white shadow-lg">
          <Clock className="w-10 h-10 stroke-[2.5]" />
        </div>

        <div className="space-y-2">
          <h1 className="text-2xl sm:text-3xl font-black font-heading tracking-wide text-[#FCA5A5]">
            Payment Not Completed
          </h1>
          <p className="text-sm sm:text-base font-bold text-white max-w-md mx-auto leading-relaxed">
            {errorMsg || 'The payment was not completed or was cancelled at checkout.'}
          </p>
        </div>

        {orderId && (
          <div
            className="p-4 sm:p-5 rounded-2xl text-left text-xs sm:text-sm max-w-md mx-auto space-y-2.5 shadow-inner border"
            style={{
              background: '#1D0410',
              borderColor: 'rgba(248, 113, 113, 0.4)',
            }}
          >
            <div className="flex justify-between items-center py-1 border-b border-white/10">
              <span className="font-extrabold text-[#FCA5A5]">Cashfree Order ID:</span>
              <span className="font-mono font-black text-white text-sm tracking-wider">{orderId}</span>
            </div>
            {orderInfo && (
              <>
                <div className="flex justify-between items-center py-1 border-b border-white/10">
                  <span className="font-extrabold text-[#FCA5A5]">Order Status:</span>
                  <span className="font-black text-[#F87171]">{orderInfo.status || 'USER_CANCELLED'}</span>
                </div>
                <div className="flex justify-between items-center py-1">
                  <span className="font-extrabold text-[#FCA5A5]">Amount:</span>
                  <span className="font-black text-white">₹{orderInfo.finalAmount?.toLocaleString()}</span>
                </div>
              </>
            )}
          </div>
        )}

        <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/classes"
            className="px-7 py-3.5 rounded-full font-black text-xs sm:text-sm uppercase tracking-wider shadow-xl transition-all flex items-center justify-center gap-2"
            style={{ background: '#DFC47A', color: '#1C0526' }}
          >
            <span>Return to Classes</span>
            <ArrowRight className="w-4 h-4 stroke-[3]" />
          </Link>
          <Link
            href="/user/dashboard"
            className="px-6 py-3.5 rounded-full font-bold text-xs sm:text-sm uppercase tracking-wider transition-all text-center shadow-md hover:bg-white hover:text-black"
            style={{ background: 'rgba(255, 255, 255, 0.15)', color: '#FFFFFF', border: '1px solid rgba(255, 255, 255, 0.3)' }}
          >
            User Dashboard
          </Link>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="p-8 sm:p-12 rounded-3xl border-4 text-center space-y-6 max-w-xl mx-auto shadow-2xl relative z-20"
      style={{
        background: 'linear-gradient(135deg, #1C0526 0%, #3B1554 100%)',
        borderColor: '#DFC47A',
        color: '#FFFFFF',
      }}
    >
      <div className="w-16 h-16 bg-[#DFC47A] rounded-full flex items-center justify-center mx-auto text-[#1C0526] border-2 border-white shadow-lg">
        <CheckCircle2 className="w-10 h-10 stroke-[2.5]" />
      </div>

      <div className="space-y-2">
        <h1 className="text-3xl font-black font-heading tracking-wide text-[#DFC47A]">
          Payment Successful!
        </h1>
        <p className="text-sm sm:text-base font-bold text-white max-w-md mx-auto leading-relaxed">
          Your Cashfree payment has been verified and your purchase is activated.
        </p>
      </div>

      {orderId && (
        <div
          className="p-4 sm:p-5 rounded-2xl text-left text-xs sm:text-sm max-w-md mx-auto space-y-2.5 shadow-inner border"
          style={{
            background: '#12031A',
            borderColor: 'rgba(223, 196, 122, 0.4)',
          }}
        >
          <div className="flex justify-between items-center py-1 border-b border-white/10">
            <span className="font-extrabold text-[#DFC47A]">Cashfree Order ID:</span>
            <span className="font-mono font-black text-white text-sm tracking-wider">{orderId}</span>
          </div>
          {orderInfo && (
            <>
              <div className="flex justify-between items-center py-1 border-b border-white/10">
                <span className="font-extrabold text-[#DFC47A]">Order Type:</span>
                <span className="font-black text-[#DFC47A]">{orderInfo.orderType}</span>
              </div>
              <div className="flex justify-between items-center py-1">
                <span className="font-extrabold text-[#DFC47A]">Total Amount:</span>
                <span className="font-black text-white">₹{orderInfo.finalAmount?.toLocaleString()}</span>
              </div>
            </>
          )}
        </div>
      )}

      <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
        <Link
          href="/user/dashboard"
          className="px-7 py-3.5 rounded-full font-black text-xs sm:text-sm uppercase tracking-wider shadow-xl transition-all flex items-center justify-center gap-2 hover:scale-105"
          style={{ background: '#DFC47A', color: '#1C0526' }}
        >
          <span>Go to User Dashboard</span>
          <ArrowRight className="w-4 h-4 stroke-[3]" />
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
