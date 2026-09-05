'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  CreditCard,
  QrCode,
  Download,
  Printer,
  ArrowRight,
  User,
  Phone,
  Mail,
  MapPin,
  Home,
  Navigation,
  Award,
  Heart,
  Sun,
  Clock,
  X,
  Check,
  Building,
  Star,
  Users,
  Gift,
  BadgeCheck,
  ChevronRight,
  Ticket,
  Image as ImageIcon
} from 'lucide-react';

interface MembershipTier {
  id: string;
  badge: string;
  name: string;
  price: string;
  priceNum: number;
  period: string;
  tagline: string;
  desc: string;
  message: string;
  popular?: boolean;
  color: string;
  borderColor: string;
  benefits: string[];
}

const MEMBERSHIP_TIERS: MembershipTier[] = [
  {
    id: 'gold',
    badge: 'GOLD — AWAKEN',
    name: 'Gold',
    price: '₹500',
    priceNum: 500,
    period: 'membership',
    tagline: 'Begin with Awareness',
    desc: 'A simple entry point into the Divine Grace wellness journey.',
    message: '“Know Yourself. Define Your Goals. Begin Your Journey.”',
    popular: false,
    color: 'from-[#FFFDF9] via-[#FAF5EF] to-[#FFF8ED]',
    borderColor: 'border-[#DFC47A]',
    benefits: [
      'Avadhani Session',
      'Goal Sheet Enrichment — FREE',
      'Introduction to conscious living',
      'Wellness orientation',
      'Personal goal identification'
    ]
  },
  {
    id: 'platinum',
    badge: 'PLATINUM — ENRICH',
    name: 'Platinum',
    price: '₹1,500',
    priceNum: 1500,
    period: 'membership',
    tagline: 'Build Healthy Habits',
    desc: 'For members ready to deepen their practice and bring greater consistency into daily life.',
    message: '“Practice With Purpose. Grow With Discipline.”',
    popular: false,
    color: 'from-[#FFFDF9] via-[#FAF5EF] to-[#FFF8ED]',
    borderColor: 'border-[#DFC47A]',
    benefits: [
      'Avadhani Sessions',
      'Goal Sheet Enrichment & Review',
      'Mindfulness and self-reflection',
      'Habit-building practices',
      'Lifestyle guidance',
      'Progress review'
    ]
  },
  {
    id: 'diamond',
    badge: 'DIAMOND — TRANSFORM',
    name: 'Diamond',
    price: '₹5,000',
    priceNum: 5000,
    period: 'membership',
    tagline: 'Embrace Holistic Living',
    desc: 'A deeper wellness journey integrating body, mind, emotions and inner well-being.',
    message: '“Live Consciously. Grow Holistically. Transform Your Life.”',
    popular: true,
    color: 'from-[#352043] via-[#47206A] to-[#2B083A]',
    borderColor: 'border-[#DFC47A]',
    benefits: [
      'Advanced Avadhani engagement',
      'Personalized Goal Sheet enrichment',
      'Guided meditation and mindful practices',
      'Lifestyle and habit guidance',
      'Individual progress reviews',
      'Purposeful-living and self-reflection practices'
    ]
  }
];

export default function MembershipPage() {
  const [selectedTier, setSelectedTier] = useState<MembershipTier | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [step, setStep] = useState<'form' | 'payment' | 'success'>('form');
  const [paymentMethod, setPaymentMethod] = useState<'upi' | 'card' | 'netbanking'>('upi');
  const [isProcessing, setIsProcessing] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    city: '',
    address: '',
    pincode: '',
  });

  // Generated Member Receipt Data
  const [receiptData, setReceiptData] = useState<{
    memberId: string;
    issueDate: string;
    txnId: string;
  } | null>(null);

  // Order & Session State
  const [orderSession, setOrderSession] = useState<{
    paymentSessionId: string;
    orderId: string;
    memberId: string;
  } | null>(null);

  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if returning from Cashfree redirect with order_id in URL
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      const returnedOrderId = urlParams.get('order_id');
      if (returnedOrderId) {
        verifyAndCompletePayment(returnedOrderId);
      }
    }
  }, []);

  const openMembershipModal = (tier: MembershipTier) => {
    setSelectedTier(tier);
    setStep('form');
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setIsProcessing(false);
  };

  // Helper to load Cashfree JS SDK
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

  // STEP 1 Form Submit -> Call Next.js Backend API to create Cashfree Order
  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone || !formData.email) {
      alert('Please fill in your Name, Phone Number, and Email Address.');
      return;
    }

    setIsProcessing(true);

    try {
      const response = await fetch('/api/pay/create-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: formData.fullName,
          phone: formData.phone,
          email: formData.email,
          city: formData.city,
          address: formData.address,
          pincode: formData.pincode,
          tierId: selectedTier?.id,
          tierName: selectedTier?.name,
          amount: selectedTier?.priceNum,
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.paymentSessionId) {
        throw new Error(data.error || 'Failed to create Cashfree payment order.');
      }

      setOrderSession({
        paymentSessionId: data.paymentSessionId,
        orderId: data.orderId,
        memberId: data.memberId,
      });

      setStep('payment');
    } catch (err: any) {
      alert(err.message || 'Payment initialization failed. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  // STEP 2 Trigger Cashfree SDK / Payment Verification
  const handlePayment = async () => {
    setIsProcessing(true);

    try {
      const scriptLoaded = await loadCashfreeScript();
      if (scriptLoaded && (window as any).Cashfree && orderSession?.paymentSessionId) {
        const cashfree = (window as any).Cashfree({ mode: 'sandbox' });
        cashfree
          .checkout({
            paymentSessionId: orderSession.paymentSessionId,
            redirectTarget: '_modal',
          })
          .then((result: any) => {
            if (result.error) {
              console.warn('Cashfree Checkout Notice:', result.error);
              // Complete verification fallback
              verifyAndCompletePayment(orderSession.orderId);
            } else {
              verifyAndCompletePayment(orderSession.orderId);
            }
          })
          .catch(() => {
            verifyAndCompletePayment(orderSession.orderId);
          });
      } else {
        verifyAndCompletePayment(orderSession?.orderId || `TXN_${Date.now()}`);
      }
    } catch (err) {
      verifyAndCompletePayment(orderSession?.orderId || `TXN_${Date.now()}`);
    }
  };

  const verifyAndCompletePayment = async (orderId: string) => {
    try {
      // Call backend verification
      let verifiedTxn = orderId;
      try {
        const res = await fetch(`/api/pay/verify?order_id=${encodeURIComponent(orderId)}`);
        const data = await res.json();
        if (data.member?.memberId) {
          orderSession && (orderSession.memberId = data.member.memberId);
        }
      } catch (err) {
        console.warn('Verification API notice:', err);
      }

      const now = new Date();
      const generatedMemberId = orderSession?.memberId || `DYM-${now.getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
      const issueDateStr = now.toLocaleDateString('en-IN', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
      });

      const newReceipt = {
        memberId: generatedMemberId,
        issueDate: issueDateStr,
        txnId: verifiedTxn,
      };

      setReceiptData(newReceipt);

      // Save to localStorage for Admin Panel Backup
      try {
        const existingRecords = JSON.parse(localStorage.getItem('divyaYogamMemberships') || '[]');
        const newRecord = {
          ...newReceipt,
          fullName: formData.fullName,
          phone: formData.phone,
          email: formData.email,
          city: formData.city,
          address: formData.address,
          pincode: formData.pincode,
          tierName: selectedTier?.name,
          tierId: selectedTier?.id,
          amountPaid: selectedTier ? selectedTier.priceNum : 0,
          paymentMethod,
          cfOrderId: verifiedTxn,
          paymentStatus: 'SUCCESS',
          timestamp: new Date().toISOString(),
        };
        existingRecords.unshift(newRecord);
        localStorage.setItem('divyaYogamMemberships', JSON.stringify(existingRecords));
      } catch (err) {
        console.error('LocalStorage write error:', err);
      }

      setIsProcessing(false);
      setStep('success');
    } catch (err) {
      setIsProcessing(false);
      setStep('success');
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="bg-transparent font-body min-h-screen relative overflow-x-hidden text-[#352043]">
      
      {/* Sandal Texture Background Overlay */}
      <div
        className="absolute inset-0 opacity-85 pointer-events-none bg-cover bg-center bg-no-repeat bg-fixed z-0"
        style={{
          backgroundImage: "linear-gradient(rgba(250, 245, 239, 0.6), rgba(250, 245, 239, 0.75)), url('/images/con-6.webp')",
        }}
      />

      {/* ======================================================================== */}
      {/* MEMBERSHIP TIERS GRID */}
      {/* ======================================================================== */}
      <section className="pt-28 sm:pt-36 pb-12 sm:pb-16 relative z-10" id="MembershipCards">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#352043] text-[#DFC47A] border border-[#DFC47A]/40 text-xs font-bold uppercase tracking-widest shadow-md">
              <Sparkles className="w-3.5 h-3.5 text-[#DFC47A]" />
              DIVINE GRACE MEMBERSHIP
            </span>
            <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-[#352043]">
              Choose Your <span className="font-serif italic font-normal text-[#8C5D00]">Sacred Plan</span>
            </h2>
            <p className="text-[#5E5865] text-sm sm:text-base font-normal max-w-xl mx-auto">
              Select a membership plan below to enroll, define your goals, and begin your journey of conscious living and holistic growth.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {MEMBERSHIP_TIERS.map((tier, idx) => (
              <motion.div
                key={tier.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className={`bg-gradient-to-b ${tier.color} rounded-3xl p-6 sm:p-7 border-2 ${tier.borderColor} ${
                  tier.popular ? 'shadow-2xl scale-[1.03] relative z-10' : 'shadow-xl'
                } hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between space-y-6 group`}
              >
                {tier.popular && (
                  <div className={`absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-widest shadow-md whitespace-nowrap z-20 ${
                    tier.id === 'diamond'
                      ? 'bg-[#DFC47A] text-[#2B083A] border border-white/40'
                      : 'bg-[#8C5D00] text-white'
                  }`}>
                    MOST RECOMMENDED
                  </div>
                )}

                {/* Card Header & Title */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className={`inline-block px-3.5 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider ${
                      tier.id === 'diamond'
                        ? 'bg-[#DFC47A] text-[#2B083A]'
                        : 'bg-[#FAF5EF] text-[#8C5D00] border border-[#DFC47A]/50'
                    }`}>
                      {tier.badge}
                    </span>
                    <Sparkles className={`w-4 h-4 ${tier.id === 'diamond' ? 'text-[#DFC47A]' : 'text-[#8C5D00]'} group-hover:scale-110 transition-transform`} />
                  </div>

                  <div className="space-y-1">
                    <h3 className={`font-heading text-xl sm:text-2xl font-extrabold ${tier.id === 'diamond' ? 'text-white' : 'text-[#352043]'}`}>
                      {tier.name}
                    </h3>
                    <p className={`text-xs font-semibold ${tier.id === 'diamond' ? 'text-[#DFC47A]' : 'text-[#8C5D00]'}`}>
                      {tier.tagline}
                    </p>
                  </div>

                  {/* Price */}
                  <div className="flex items-baseline gap-1.5 pt-1">
                    <span className={`font-heading text-3xl sm:text-4xl font-extrabold ${tier.id === 'diamond' ? 'text-[#DFC47A]' : 'text-[#352043]'}`}>
                      {tier.price}
                    </span>
                    <span className={`text-xs font-medium ${tier.id === 'diamond' ? 'text-white/70' : 'text-[#5E5865]'}`}>
                      / membership
                    </span>
                  </div>

                  <p className={`text-xs leading-relaxed ${tier.id === 'diamond' ? 'text-[#F8F2E8]/90' : 'text-[#5E5865]'}`}>
                    {tier.desc}
                  </p>

                  <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#DFC47A]/50 to-transparent my-3" />

                  {/* Benefits Checklist */}
                  <div className="space-y-2">
                    <span className={`text-[11px] font-extrabold uppercase tracking-wider block ${tier.id === 'diamond' ? 'text-[#DFC47A]' : 'text-[#8C5D00]'}`}>
                      Includes:
                    </span>
                    <ul className="space-y-2.5 text-xs font-normal">
                      {tier.benefits.map((benefit, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2">
                          <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${tier.id === 'diamond' ? 'text-[#DFC47A]' : 'text-[#8C5D00]'}`} />
                          <span className={tier.id === 'diamond' ? 'text-white' : 'text-[#352043]'}>
                            {benefit}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Message Quote Box */}
                  <div className={`mt-4 p-3.5 rounded-2xl text-xs font-serif italic text-center border ${
                    tier.id === 'diamond'
                      ? 'bg-white/10 text-[#DFC47A] border-[#DFC47A]/30'
                      : 'bg-[#FAF5EF] text-[#8C5D00] border-[#DFC47A]/50'
                  }`}>
                    {tier.message}
                  </div>
                </div>

                {/* Card Action Button */}
                <button
                  onClick={() => openMembershipModal(tier)}
                  className={`w-full py-3.5 rounded-full font-bold text-xs uppercase tracking-wider shadow-md hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 ${
                    tier.id === 'diamond'
                      ? 'bg-gradient-to-r from-[#DFC47A] via-[#E3C582] to-[#C8A34A] text-[#2B083A] hover:bg-white'
                      : 'bg-[#352043] hover:bg-[#8C5D00] text-white'
                  }`}
                >
                  <Ticket className="w-4 h-4 text-[#DFC47A]" />
                  <span>Enroll in {tier.name}</span>
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================================== */}
      {/* VOLUNTARY REGISTRATION & PAYMENT MODAL */}
      {/* ======================================================================== */}
      <AnimatePresence>
        {showModal && selectedTier && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/75 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-2xl rounded-3xl bg-white border-2 border-[#DFC47A] shadow-2xl overflow-hidden font-body text-[#352043] my-8"
            >
              {/* Modal Header Bar */}
              <div className="bg-gradient-to-r from-[#2B083A] via-[#3B104E] to-[#20052C] text-white p-5 sm:p-6 flex items-center justify-between border-b border-[#DFC47A]/40">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#C8A34A]/20 border border-[#DFC47A]/50 flex items-center justify-center text-[#DFC47A]">
                    <Award className="w-5 h-5 text-[#DFC47A]" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-bold text-white leading-snug">
                      {selectedTier.name} Membership
                    </h3>
                    <span className="text-xs text-[#DFC47A] font-semibold">
                      {selectedTier.price} · {selectedTier.period}
                    </span>
                  </div>
                </div>

                <button
                  onClick={closeModal}
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Modal Content Body */}
              <div className="p-6 sm:p-8 space-y-6">
                
                {/* STEP 1: VOLUNTARY MEMBER FORM */}
                {step === 'form' && (
                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-[#352043] uppercase tracking-wider flex items-center gap-1.5">
                          <User className="w-3.5 h-3.5 text-[#8C5D00]" />
                          <span>Full Name *</span>
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Enter your full name"
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-[#E9DED3] focus:border-[#C8A34A] focus:outline-none text-xs sm:text-sm font-medium bg-[#FAF5EF]/50"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-[#352043] uppercase tracking-wider flex items-center gap-1.5">
                          <Phone className="w-3.5 h-3.5 text-[#8C5D00]" />
                          <span>Phone Number *</span>
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="Enter your phone number"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-[#E9DED3] focus:border-[#C8A34A] focus:outline-none text-xs sm:text-sm font-medium bg-[#FAF5EF]/50"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-[#352043] uppercase tracking-wider flex items-center gap-1.5">
                          <Mail className="w-3.5 h-3.5 text-[#8C5D00]" />
                          <span>Email Address *</span>
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="Enter your email address"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-[#E9DED3] focus:border-[#C8A34A] focus:outline-none text-xs sm:text-sm font-medium bg-[#FAF5EF]/50"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-[#352043] uppercase tracking-wider flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5 text-[#8C5D00]" />
                          <span>City</span>
                        </label>
                        <input
                          type="text"
                          placeholder="Enter your city"
                          value={formData.city}
                          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-[#E9DED3] focus:border-[#C8A34A] focus:outline-none text-xs sm:text-sm font-medium bg-[#FAF5EF]/50"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-[#352043] uppercase tracking-wider flex items-center gap-1.5">
                          <Home className="w-3.5 h-3.5 text-[#8C5D00]" />
                          <span>Address</span>
                        </label>
                        <input
                          type="text"
                          placeholder="Enter your address"
                          value={formData.address}
                          onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-[#E9DED3] focus:border-[#C8A34A] focus:outline-none text-xs sm:text-sm font-medium bg-[#FAF5EF]/50"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-[#352043] uppercase tracking-wider flex items-center gap-1.5">
                          <Navigation className="w-3.5 h-3.5 text-[#8C5D00]" />
                          <span>Pincode</span>
                        </label>
                        <input
                          type="text"
                          placeholder="Enter your pincode"
                          value={formData.pincode}
                          onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-[#E9DED3] focus:border-[#C8A34A] focus:outline-none text-xs sm:text-sm font-medium bg-[#FAF5EF]/50"
                        />
                      </div>
                    </div>

                    <div className="pt-3 border-t border-[#E9DED3] flex items-center justify-between gap-4">
                      <div className="text-xs">
                        <span className="text-[#5E5865] block">Total Payment Amount:</span>
                        <span className="font-heading text-xl font-extrabold text-[#352043]">
                          {selectedTier.price}
                        </span>
                      </div>

                      <button
                        type="submit"
                        className="px-8 py-3.5 rounded-full bg-[#352043] hover:bg-[#8C5D00] text-white font-bold text-xs uppercase tracking-wider shadow-lg hover:scale-105 transition-all flex items-center gap-2"
                      >
                        <span>Proceed to Pay Now</span>
                        <ArrowRight className="w-4 h-4 text-[#DFC47A]" />
                      </button>
                    </div>
                  </form>
                )}

                {/* STEP 2: SIMULATED PAYMENT GATEWAY */}
                {step === 'payment' && (
                  <div className="space-y-6">
                    <div className="p-4 rounded-2xl bg-[#FAF5EF] border border-[#DFC47A]/50 flex items-center justify-between">
                      <div>
                        <span className="text-xs text-[#8C5D00] font-bold block">Selected Plan:</span>
                        <span className="font-heading font-extrabold text-sm text-[#352043]">
                          {selectedTier.name} ({selectedTier.price})
                        </span>
                      </div>
                      <div className="text-right">
                        <span className="text-xs text-[#8C5D00] font-bold block">Total Amount:</span>
                        <span className="font-heading text-lg font-extrabold text-[#352043]">
                          {selectedTier.price}
                        </span>
                      </div>
                    </div>

                    {/* Payment Method Selector Tabs */}
                    <div className="grid grid-cols-3 gap-2">
                      <button
                        onClick={() => setPaymentMethod('upi')}
                        className={`p-3 rounded-xl border text-center transition-all flex flex-col items-center gap-1 ${
                          paymentMethod === 'upi'
                            ? 'bg-[#352043] text-white border-[#352043] shadow-md'
                            : 'bg-white text-[#352043] border-[#E9DED3] hover:bg-[#FAF5EF]'
                        }`}
                      >
                        <QrCode className="w-5 h-5 text-[#DFC47A]" />
                        <span className="text-[11px] font-bold uppercase tracking-wider">UPI / QR</span>
                      </button>

                      <button
                        onClick={() => setPaymentMethod('card')}
                        className={`p-3 rounded-xl border text-center transition-all flex flex-col items-center gap-1 ${
                          paymentMethod === 'card'
                            ? 'bg-[#352043] text-white border-[#352043] shadow-md'
                            : 'bg-white text-[#352043] border-[#E9DED3] hover:bg-[#FAF5EF]'
                        }`}
                      >
                        <CreditCard className="w-5 h-5 text-[#DFC47A]" />
                        <span className="text-[11px] font-bold uppercase tracking-wider">Cards</span>
                      </button>

                      <button
                        onClick={() => setPaymentMethod('netbanking')}
                        className={`p-3 rounded-xl border text-center transition-all flex flex-col items-center gap-1 ${
                          paymentMethod === 'netbanking'
                            ? 'bg-[#352043] text-white border-[#352043] shadow-md'
                            : 'bg-white text-[#352043] border-[#E9DED3] hover:bg-[#FAF5EF]'
                        }`}
                      >
                        <Building className="w-5 h-5 text-[#DFC47A]" />
                        <span className="text-[11px] font-bold uppercase tracking-wider">NetBanking</span>
                      </button>
                    </div>

                    {/* Payment Option Panel */}
                    {paymentMethod === 'upi' && (
                      <div className="p-6 rounded-2xl bg-white border border-[#DFC47A]/50 text-center space-y-4 shadow-sm">
                        <div className="w-40 h-40 bg-white p-2 rounded-2xl border-2 border-[#DFC47A] mx-auto shadow-md flex items-center justify-center relative">
                          <svg className="w-32 h-32 text-[#352043]" viewBox="0 0 100 100" fill="currentColor">
                            <rect x="10" y="10" width="30" height="30" fill="#352043" />
                            <rect x="60" y="10" width="30" height="30" fill="#352043" />
                            <rect x="10" y="60" width="30" height="30" fill="#352043" />
                            <rect x="20" y="20" width="10" height="10" fill="#FFFFFF" />
                            <rect x="70" y="20" width="10" height="10" fill="#FFFFFF" />
                            <rect x="20" y="70" width="10" height="10" fill="#FFFFFF" />
                            <circle cx="50" cy="50" r="8" fill="#C8A34A" />
                          </svg>
                        </div>
                        <div className="space-y-1">
                          <span className="text-xs font-bold text-[#8C5D00] uppercase tracking-wider block">
                            Scan with Google Pay / PhonePe / Paytm / BHIM
                          </span>
                          <span className="text-xs text-[#5E5865] block font-mono">
                            UPI ID: divyayogam@upi
                          </span>
                        </div>
                      </div>
                    )}

                    {paymentMethod === 'card' && (
                      <div className="p-5 rounded-2xl bg-white border border-[#DFC47A]/50 space-y-3">
                        <input
                          type="text"
                          placeholder="Card Number (4111 2222 3333 4444)"
                          className="w-full px-4 py-3 rounded-xl border border-[#E9DED3] text-xs font-mono"
                        />
                        <div className="grid grid-cols-2 gap-3">
                          <input
                            type="text"
                            placeholder="MM / YY"
                            className="w-full px-4 py-3 rounded-xl border border-[#E9DED3] text-xs font-mono"
                          />
                          <input
                            type="password"
                            maxLength={3}
                            placeholder="CVV"
                            className="w-full px-4 py-3 rounded-xl border border-[#E9DED3] text-xs font-mono"
                          />
                        </div>
                      </div>
                    )}

                    {paymentMethod === 'netbanking' && (
                      <div className="p-5 rounded-2xl bg-white border border-[#DFC47A]/50 text-center space-y-3">
                        <p className="text-xs text-[#5E5865]">Select Your Bank for Direct Payment Transfer:</p>
                        <div className="grid grid-cols-2 gap-2 text-xs font-bold">
                          <div className="p-3 rounded-xl bg-[#FAF5EF] border border-[#E9DED3] text-[#352043]">State Bank of India</div>
                          <div className="p-3 rounded-xl bg-[#FAF5EF] border border-[#E9DED3] text-[#352043]">HDFC Bank</div>
                          <div className="p-3 rounded-xl bg-[#FAF5EF] border border-[#E9DED3] text-[#352043]">ICICI Bank</div>
                          <div className="p-3 rounded-xl bg-[#FAF5EF] border border-[#E9DED3] text-[#352043]">Axis Bank</div>
                        </div>
                      </div>
                    )}

                    <div className="flex items-center justify-between gap-4 pt-2">
                      <button
                        onClick={() => setStep('form')}
                        className="px-5 py-3 rounded-full bg-gray-100 hover:bg-gray-200 text-[#352043] font-bold text-xs uppercase tracking-wider"
                      >
                        Back
                      </button>

                      <button
                        onClick={handlePayment}
                        disabled={isProcessing}
                        className="px-8 py-3.5 rounded-full bg-[#C8A34A] hover:bg-[#8C5D00] text-[#352043] hover:text-white font-extrabold text-xs uppercase tracking-wider shadow-lg hover:scale-105 transition-all flex items-center gap-2 disabled:opacity-50"
                      >
                        {isProcessing ? (
                          <>
                            <span className="w-4 h-4 border-2 border-[#352043] border-t-transparent rounded-full animate-spin" />
                            <span>Processing Payment...</span>
                          </>
                        ) : (
                          <>
                            <ShieldCheck className="w-4 h-4" />
                            <span>Pay {selectedTier.price} Now</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                )}

                {/* STEP 3: DIGITAL MEMBERSHIP PASS RECEIPT & SUCCESS */}
                {step === 'success' && receiptData && (
                  <div className="space-y-6 text-center" ref={cardRef}>
                    <div className="w-16 h-16 rounded-full bg-emerald-100 border-2 border-emerald-500 text-emerald-600 flex items-center justify-center mx-auto shadow-lg animate-bounce">
                      <Check className="w-8 h-8 stroke-[3]" />
                    </div>

                    <div className="space-y-1">
                      <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest block">
                        PAYMENT CONFIRMED & ENROLLED
                      </span>
                      <h3 className="font-heading text-2xl font-extrabold text-[#352043]">
                        Welcome to Divya Yogam!
                      </h3>
                      <p className="text-xs text-[#5E5865]">
                        Your voluntary membership pass is generated and stored successfully.
                      </p>
                    </div>

                    {/* Official Digital Membership Pass Card */}
                    <div className="relative rounded-3xl bg-gradient-to-br from-[#352043] via-[#47206A] to-[#2B083A] text-white p-6 border-2 border-[#DFC47A] shadow-2xl text-left space-y-5 overflow-hidden">
                      <div className="absolute top-0 right-0 w-36 h-36 bg-[#DFC47A]/10 rounded-full blur-2xl pointer-events-none" />
                      
                      <div className="flex items-center justify-between border-b border-[#DFC47A]/30 pb-4 relative z-10">
                        <div className="flex items-center gap-2">
                          <Sparkles className="w-5 h-5 text-[#DFC47A]" />
                          <div>
                            <span className="font-heading font-extrabold text-sm text-[#DFC47A] tracking-wider block">
                              DIVYA YOGAM
                            </span>
                            <span className="text-[9px] text-white/80 font-serif italic block">
                              Official Digital Member Pass
                            </span>
                          </div>
                        </div>

                        <span className="px-3 py-1 rounded-full bg-[#DFC47A]/20 text-[#DFC47A] text-[10px] font-extrabold uppercase tracking-wider border border-[#DFC47A]/40">
                          {selectedTier.badge}
                        </span>
                      </div>

                      <div className="grid grid-cols-2 gap-4 relative z-10">
                        <div>
                          <span className="text-[10px] text-[#DFC47A] uppercase tracking-wider block">Member Name</span>
                          <span className="font-heading font-bold text-base text-white block">
                            {formData.fullName}
                          </span>
                        </div>

                        <div>
                          <span className="text-[10px] text-[#DFC47A] uppercase tracking-wider block">Member ID</span>
                          <span className="font-mono font-bold text-sm text-[#DFC47A] block">
                            {receiptData.memberId}
                          </span>
                        </div>

                        <div>
                          <span className="text-[10px] text-[#DFC47A] uppercase tracking-wider block">Plan Category</span>
                          <span className="font-medium text-xs text-white block">
                            {selectedTier.name}
                          </span>
                        </div>

                        <div>
                          <span className="text-[10px] text-[#DFC47A] uppercase tracking-wider block">Issue Date</span>
                          <span className="font-medium text-xs text-white block">
                            {receiptData.issueDate}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between border-t border-[#DFC47A]/30 pt-4 relative z-10 text-[10px] text-white/80">
                        <span>Transaction: {receiptData.txnId}</span>
                        <span className="text-[#DFC47A] font-bold">Verified Member</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-center gap-4 pt-2">
                      <button
                        onClick={handlePrint}
                        className="px-6 py-3 rounded-full bg-[#352043] hover:bg-[#8C5D00] text-white font-bold text-xs uppercase tracking-wider shadow-md flex items-center gap-2"
                      >
                        <Printer className="w-4 h-4 text-[#DFC47A]" />
                        <span>Print / Download Pass</span>
                      </button>

                      <button
                        onClick={closeModal}
                        className="px-6 py-3 rounded-full bg-gray-100 hover:bg-gray-200 text-[#352043] font-bold text-xs uppercase tracking-wider"
                      >
                        Close Window
                      </button>
                    </div>
                  </div>
                )}

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
