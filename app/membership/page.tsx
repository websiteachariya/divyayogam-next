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
  name: string;
  price: string;
  priceNum: number;
  period: string;
  desc: string;
  badge: string;
  popular?: boolean;
  color: string;
  borderColor: string;
  benefits: string[];
}

const MEMBERSHIP_TIERS: MembershipTier[] = [
  {
    id: 'entry',
    name: 'General Pass',
    price: '₹500',
    priceNum: 500,
    period: 'pass',
    desc: 'General Seating & Shambhala Initiation Entry',
    badge: 'ENTRY PASS',
    popular: false,
    color: 'from-[#FAF5EF] to-[#FFFDF9]',
    borderColor: 'border-[#DFC47A]/60',
    benefits: [
      'General Seating Access',
      'Shambhala Initiation Entry',
      'Digital Divya Yogam Member Pass',
      'General Access to All Open Satsangs'
    ]
  },
  {
    id: 'silver',
    name: 'Silver Sadhana Pass',
    price: '₹1,000',
    priceNum: 1000,
    period: 'pass',
    desc: 'Silver Reserved Seating & Prasad',
    badge: 'SILVER PASS',
    popular: false,
    color: 'from-[#FFFDF9] via-[#FAF3E8] to-[#FFF8ED]',
    borderColor: 'border-[#C0C0C0]',
    benefits: [
      'Silver Reserved Seating Zone',
      'Sacred Prasad Distribution',
      'Digital Divya Yogam Membership Pass',
      'Access to Audio Sadhana Library',
      'Monthly E-Newsletter & Discourses'
    ]
  },
  {
    id: 'gold',
    name: 'Gold Oneness Pass',
    price: '₹2,000',
    priceNum: 2000,
    period: 'pass',
    desc: 'Gold Front Row Seating & Special Sadhana Kit',
    badge: 'GOLD PASS',
    popular: true,
    color: 'from-[#FFFDF9] via-[#FAF3E8] to-[#FFF8ED]',
    borderColor: 'border-[#C8A34A]',
    benefits: [
      'Gold Front Row Reserved Seating',
      'Special Sacred Sadhana Kit (Prasad & Stole)',
      'Digital Divya Yogam Member Card',
      'Quarterly Exclusive Masterclass Invites',
      'Priority Event Registration'
    ]
  },
  {
    id: 'diamond',
    name: 'Diamond Pass',
    price: '₹5,000',
    priceNum: 5000,
    period: 'pass',
    desc: 'VIP Front Block & Exclusive Satsang Access',
    badge: 'DIAMOND PASS',
    popular: false,
    color: 'from-[#FAF3FA] via-[#FFFDF9] to-[#F8EBF6]',
    borderColor: 'border-[#8C5D00]/60',
    benefits: [
      'VIP Front Block Seating',
      'Exclusive Satsang & Guided Meditation Access',
      'VIP Welcome Gift Box & Stole',
      'Lifetime Member Certificate & Digital Pass',
      'Personal Blessings Session'
    ]
  },
  {
    id: 'patron',
    name: 'VIP Patron Pass',
    price: '₹10,000',
    priceNum: 10000,
    period: 'pass',
    desc: 'Sanctuary Sponsor Access & Personal Blessing',
    badge: 'PATRON PASS',
    popular: false,
    color: 'from-[#352043] via-[#47206A] to-[#2B083A]',
    borderColor: 'border-[#DFC47A]',
    benefits: [
      'Sanctuary Sponsor Access & Personal Blessing',
      'Front Row VIP Reserved Seating',
      'Honorary Patron Recognition & Physical Card',
      'Personal Meet with Founder & Council Masters',
      'Sponsor Free Meditation Passes for Seekers'
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
    state: 'Puducherry',
    occupation: '',
    extraContribution: '0',
  });

  // Generated Member Receipt Data
  const [receiptData, setReceiptData] = useState<{
    memberId: string;
    issueDate: string;
    txnId: string;
  } | null>(null);

  const cardRef = useRef<HTMLDivElement>(null);

  const openMembershipModal = (tier: MembershipTier) => {
    setSelectedTier(tier);
    setStep('form');
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setIsProcessing(false);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone || !formData.email) {
      alert('Please fill in your Name, Phone Number, and Email Address.');
      return;
    }
    setStep('payment');
  };

  const handlePayment = () => {
    setIsProcessing(true);
    setTimeout(() => {
      const now = new Date();
      const generatedMemberId = `DYM-${now.getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
      const generatedTxn = `TXN${Date.now()}`;
      const issueDateStr = now.toLocaleDateString('en-IN', {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
      });

      const newReceipt = {
        memberId: generatedMemberId,
        issueDate: issueDateStr,
        txnId: generatedTxn,
      };

      setReceiptData(newReceipt);

      // Save to localStorage for Admin View
      try {
        const existingRecords = JSON.parse(localStorage.getItem('divyaYogamMemberships') || '[]');
        const newRecord = {
          ...newReceipt,
          fullName: formData.fullName,
          phone: formData.phone,
          email: formData.email,
          city: formData.city,
          state: formData.state,
          occupation: formData.occupation,
          tierName: selectedTier?.name,
          amountPaid: selectedTier ? selectedTier.priceNum + Number(formData.extraContribution || 0) : 0,
          paymentMethod,
          timestamp: new Date().toISOString()
        };
        existingRecords.unshift(newRecord);
        localStorage.setItem('divyaYogamMemberships', JSON.stringify(existingRecords));
      } catch (err) {
        console.error('LocalStorage write error:', err);
      }

      setIsProcessing(false);
      setStep('success');
    }, 2000);
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
              <Award className="w-3.5 h-3.5 text-[#DFC47A]" />
              SELECT YOUR SACRED PLAN
            </span>
            <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-[#352043]">
              Choose Your <span className="font-serif italic font-normal text-[#8C5D00]">Membership Card</span>
            </h2>
            <p className="text-[#5E5865] text-sm sm:text-base font-normal max-w-xl mx-auto">
              Select a voluntary membership tier below to instantly receive your digital member card and unlock sacred benefits.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {MEMBERSHIP_TIERS.map((tier, idx) => (
              <motion.div
                key={tier.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`bg-gradient-to-b ${tier.color} rounded-3xl p-5 border-2 ${tier.borderColor} ${
                  tier.popular ? 'shadow-2xl scale-[1.02] relative z-10' : 'shadow-xl'
                } hover:shadow-2xl hover:border-[#8C5D00] hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between space-y-5 text-center group`}
              >
                {tier.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#8C5D00] text-white text-[10px] font-extrabold uppercase tracking-widest shadow-md whitespace-nowrap z-20">
                    MOST POPULAR
                  </div>
                )}

                {/* Card Top Information */}
                <div className="space-y-3 pt-1">
                  <div className="flex items-center justify-between">
                    <span className="inline-block px-3 py-1 rounded-full bg-[#FAF5EF] text-[#8C5D00] border border-[#DFC47A]/50 text-[10px] font-extrabold uppercase tracking-wider">
                      {tier.badge}
                    </span>
                    <Sparkles className="w-4 h-4 text-[#8C5D00] group-hover:scale-110 transition-transform" />
                  </div>

                  {/* Image Holder with 'Waiting for Image to be Uploaded' */}
                  <div className="relative w-full h-28 rounded-2xl bg-[#352043]/5 border-2 border-dashed border-[#DFC47A]/70 flex flex-col items-center justify-center text-center p-2 group-hover:border-[#8C5D00] transition-colors">
                    <ImageIcon className="w-5 h-5 text-[#8C5D00] mb-1 opacity-75" />
                    <span className="text-[9px] font-extrabold uppercase tracking-wider text-[#8C5D00] bg-[#FAF5EF] px-2 py-0.5 rounded-full border border-[#DFC47A]/50">
                      Pending Upload
                    </span>
                    <span className="text-[9px] font-medium text-[#5E5865] mt-1 italic leading-tight">
                      Waiting for Image to be Uploaded
                    </span>
                  </div>

                  <div className="space-y-1">
                    <h3 className={`font-heading text-lg font-extrabold ${tier.id === 'patron' ? 'text-white' : 'text-[#352043]'}`}>
                      {tier.name}
                    </h3>
                    <div className="flex items-baseline justify-center gap-1">
                      <span className={`font-heading text-2xl sm:text-3xl font-extrabold ${tier.id === 'patron' ? 'text-[#DFC47A]' : 'text-[#352043]'}`}>
                        {tier.price}
                      </span>
                    </div>
                  </div>

                  <p className={`text-[11px] leading-relaxed font-light ${tier.id === 'patron' ? 'text-[#F8F2E8]/90' : 'text-[#5E5865]'}`}>
                    {tier.desc}
                  </p>

                  <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#DFC47A]/50 to-transparent my-2" />

                  {/* Benefits Checklist */}
                  <ul className="space-y-2 text-left text-[11px] font-normal">
                    {tier.benefits.map((benefit, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-1.5">
                        <CheckCircle2 className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${tier.id === 'patron' ? 'text-[#DFC47A]' : 'text-[#8C5D00]'}`} />
                        <span className={tier.id === 'patron' ? 'text-white' : 'text-[#352043]'}>
                          {benefit}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Action Button */}
                <button
                  onClick={() => openMembershipModal(tier)}
                  className={`w-full py-3 rounded-full font-bold text-xs uppercase tracking-wider shadow-md hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 ${
                    tier.id === 'patron'
                      ? 'bg-gradient-to-r from-[#DFC47A] via-[#E3C582] to-[#C8A34A] text-[#2B083A] hover:bg-white'
                      : 'bg-[#352043] hover:bg-[#8C5D00] text-white'
                  }`}
                >
                  <Ticket className="w-4 h-4 text-[#DFC47A]" />
                  <span>Book Ticket</span>
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
                      {selectedTier.name} — Voluntary Membership
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
                    <div className="p-3.5 rounded-2xl bg-[#FAF5EF] border border-[#DFC47A]/50 flex items-center gap-3 text-xs text-[#8C5D00] font-semibold">
                      <ShieldCheck className="w-5 h-5 shrink-0 text-[#8C5D00]" />
                      <span>Voluntary Enrollment — No Password or Account Registration Required.</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-[#352043] uppercase tracking-wider flex items-center gap-1.5">
                          <User className="w-3.5 h-3.5 text-[#8C5D00]" />
                          <span>Full Name *</span>
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Anand Kumar"
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
                          placeholder="+91 98765 43210"
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
                          placeholder="anand@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-[#E9DED3] focus:border-[#C8A34A] focus:outline-none text-xs sm:text-sm font-medium bg-[#FAF5EF]/50"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-[#352043] uppercase tracking-wider flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5 text-[#8C5D00]" />
                          <span>City & State</span>
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. Puducherry"
                          value={formData.city}
                          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-[#E9DED3] focus:border-[#C8A34A] focus:outline-none text-xs sm:text-sm font-medium bg-[#FAF5EF]/50"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-[#352043] uppercase tracking-wider flex items-center gap-1.5">
                          <Building className="w-3.5 h-3.5 text-[#8C5D00]" />
                          <span>Occupation / Profession</span>
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. Educator / Professional"
                          value={formData.occupation}
                          onChange={(e) => setFormData({ ...formData, occupation: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-[#E9DED3] focus:border-[#C8A34A] focus:outline-none text-xs sm:text-sm font-medium bg-[#FAF5EF]/50"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-[#352043] uppercase tracking-wider flex items-center gap-1.5">
                          <Heart className="w-3.5 h-3.5 text-[#8C5D00]" />
                          <span>Extra Voluntary Contribution (₹)</span>
                        </label>
                        <input
                          type="number"
                          placeholder="0"
                          value={formData.extraContribution}
                          onChange={(e) => setFormData({ ...formData, extraContribution: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-[#E9DED3] focus:border-[#C8A34A] focus:outline-none text-xs sm:text-sm font-medium bg-[#FAF5EF]/50"
                        />
                      </div>
                    </div>

                    <div className="pt-3 border-t border-[#E9DED3] flex items-center justify-between gap-4">
                      <div className="text-xs">
                        <span className="text-[#5E5865] block">Total Payment Amount:</span>
                        <span className="font-heading text-xl font-extrabold text-[#352043]">
                          ₹{selectedTier.priceNum + Number(formData.extraContribution || 0)}
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
                          ₹{selectedTier.priceNum + Number(formData.extraContribution || 0)}
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
                            <span>Pay ₹{selectedTier.priceNum + Number(formData.extraContribution || 0)} Now</span>
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
