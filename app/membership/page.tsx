'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
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
  Image as ImageIcon,
  AlertCircle,
  Lock,
  LogIn,
  UserPlus,
  Percent,
  Tag,
  Eye,
  EyeOff,
  Crown
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
  discountBadge: string;
  discountPercentage: number;
}

const MEMBERSHIP_TIERS: MembershipTier[] = [
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
    discountBadge: '50% Sacred Privilege Grant on All Classes',
    discountPercentage: 50,
    benefits: [
      '50% Sacred Privilege Grant for All Sequential Classes',
      'Advanced Avadhani engagement',
      'Personalized Goal Sheet enrichment',
      'Guided meditation and mindful practices',
      'Lifestyle and habit guidance',
      'Individual progress reviews',
      'Purposeful-living and self-reflection practices'
    ]
  },
  {
    id: 'platinum',
    badge: 'PLATINUM — ENRICH',
    name: 'Platinum',
    price: '₹2,000',
    priceNum: 2000,
    period: 'membership',
    tagline: 'Build Healthy Habits',
    desc: 'For members ready to deepen their practice and bring greater consistency into daily life.',
    message: '“Practice With Purpose. Grow With Discipline.”',
    popular: false,
    color: 'from-[#FFFDF9] via-[#FAF5EF] to-[#FFF8ED]',
    borderColor: 'border-[#DFC47A]',
    discountBadge: '30% Sacred Privilege Grant on All Classes',
    discountPercentage: 30,
    benefits: [
      '30% Sacred Privilege Grant for All Sequential Classes',
      'Avadhani Sessions',
      'Goal Sheet Enrichment & Review',
      'Mindfulness and self-reflection',
      'Habit-building practices',
      'Lifestyle guidance',
      'Progress review'
    ]
  },
  {
    id: 'gold',
    badge: 'GOLD — AWAKEN',
    name: 'Gold',
    price: '₹1,000',
    priceNum: 1000,
    period: 'membership',
    tagline: 'Begin with Awareness',
    desc: 'A simple entry point into the Divine Grace wellness journey.',
    message: '“Know Yourself. Define Your Goals. Begin Your Journey.”',
    popular: false,
    color: 'from-[#FFFDF9] via-[#FAF5EF] to-[#FFF8ED]',
    borderColor: 'border-[#DFC47A]',
    discountBadge: '10% Sacred Privilege Grant on All Classes',
    discountPercentage: 10,
    benefits: [
      '10% Sacred Privilege Grant for All Sequential Classes',
      'Avadhani Session',
      'Goal Sheet Enrichment — FREE',
      'Introduction to conscious living',
      'Wellness orientation',
      'Personal goal identification'
    ]
  }
];

export default function MembershipPage() {
  const router = useRouter();
  const [selectedTier, setSelectedTier] = useState<MembershipTier | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [modalTab, setModalTab] = useState<'form' | 'login' | 'register'>('form');
  const [step, setStep] = useState<'form' | 'payment' | 'success'>('form');
  const [paymentMethod, setPaymentMethod] = useState<'upi' | 'card' | 'netbanking'>('upi');
  const [isProcessing, setIsProcessing] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    fullName: '',
    age: '',
    gender: 'Male',
    occupation: '',
    organisation: '',
    phone: '',
    email: '',
  });

  // Inline Login / Register States
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [loginError, setLoginError] = useState('');
  
  const [registerData, setRegisterData] = useState({
    name: '',
    mobile: '',
    email: '',
    password: '',
    age: '25',
    gender: 'Male',
    occupation: 'Member',
    organisation: '',
  });
  const [registerError, setRegisterError] = useState('');
  const [showLoginPassword, setShowLoginPassword] = useState(false);
  const [showRegisterPassword, setShowRegisterPassword] = useState(false);

  // Coupon State
  const [couponCode, setCouponCode] = useState('');
  const [appliedCoupon, setAppliedCoupon] = useState<{
    code: string;
    discountAmount: number;
    label: string;
  } | null>(null);
  const [couponError, setCouponError] = useState('');

  // Form Validation State
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [touched, setTouched] = useState<{ [key: string]: boolean }>({});
  const [submitAttempted, setSubmitAttempted] = useState(false);

  const validateField = (name: string, value: string): string => {
    const trimmed = value.trim();
    switch (name) {
      case 'fullName':
        if (!trimmed) return 'Name is required.';
        if (trimmed.length < 3) return 'Name must be at least 3 characters.';
        if (!/^[a-zA-Z\s.'-]{3,50}$/.test(trimmed)) {
          return 'Please enter a valid name (letters and spaces only).';
        }
        return '';
      case 'age':
        if (!trimmed) return 'Age is required.';
        const numAge = Number(trimmed);
        if (isNaN(numAge) || numAge < 1 || numAge > 120) {
          return 'Please enter a valid age (1-120).';
        }
        return '';
      case 'gender':
        if (!trimmed) return 'Gender selection is required.';
        return '';
      case 'occupation':
        if (!trimmed) return 'Occupation is required.';
        if (trimmed.length < 2) return 'Occupation must be at least 2 characters.';
        return '';
      case 'organisation':
        if (!trimmed) return 'Organisation / Location is required.';
        if (trimmed.length < 2) return 'Organisation / Location must be at least 2 characters.';
        return '';
      case 'phone':
        if (!trimmed) return 'Mobile number is required.';
        if (trimmed.length !== 10) return 'Mobile number must be exactly 10 digits.';
        if (!/^[6-9]\d{9}$/.test(trimmed)) {
          return 'Mobile number must be a valid 10-digit Indian phone starting with 6-9.';
        }
        return '';
      case 'email':
        if (!trimmed) return 'Email address is required.';
        if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(trimmed)) {
          return 'Please enter a valid email address (e.g. name@domain.com).';
        }
        return '';
      default:
        return '';
    }
  };

  const handleInputChange = (field: string, rawValue: string) => {
    let value = rawValue;
    if (field === 'phone' || field === 'age') {
      value = rawValue.replace(/\D/g, '');
    }

    setFormData((prev) => ({ ...prev, [field]: value }));

    if (touched[field] || submitAttempted) {
      const errorMsg = validateField(field, value);
      setErrors((prev) => ({ ...prev, [field]: errorMsg }));
    }
  };

  const handleBlur = (field: string) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const errorMsg = validateField(field, formData[field as keyof typeof formData]);
    setErrors((prev) => ({ ...prev, [field]: errorMsg }));
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {
      fullName: validateField('fullName', formData.fullName),
      age: validateField('age', formData.age),
      gender: validateField('gender', formData.gender),
      occupation: validateField('occupation', formData.occupation),
      organisation: validateField('organisation', formData.organisation),
      phone: validateField('phone', formData.phone),
      email: validateField('email', formData.email),
    };

    const activeErrors: { [key: string]: string } = {};
    Object.keys(newErrors).forEach((key) => {
      if (newErrors[key]) {
        activeErrors[key] = newErrors[key];
      }
    });

    setErrors(activeErrors);
    setTouched({
      fullName: true,
      age: true,
      gender: true,
      occupation: true,
      organisation: true,
      phone: true,
      email: true,
    });

    return Object.keys(activeErrors).length === 0;
  };

  // Coupon Handler
  const handleApplyCoupon = () => {
    setCouponError('');
    if (!couponCode.trim() || !selectedTier) return;

    const code = couponCode.trim().toUpperCase();
    const subtotal = selectedTier.priceNum;

    if (code === 'DIVYA10') {
      const amount = Math.round((subtotal * 10) / 100);
      setAppliedCoupon({ code, discountAmount: amount, label: '10% Special Discount' });
    } else if (code === 'DIVYA20') {
      const amount = Math.round((subtotal * 20) / 100);
      setAppliedCoupon({ code, discountAmount: amount, label: '20% Special Discount' });
    } else if (code === 'SHAMBALA') {
      const amount = Math.round((subtotal * 15) / 100);
      setAppliedCoupon({ code, discountAmount: amount, label: '15% Shambala Special' });
    } else if (code === 'GOLD500') {
      const amount = Math.min(500, subtotal - 100);
      setAppliedCoupon({ code, discountAmount: amount, label: '₹500 Direct Discount' });
    } else if (code === 'SACRED') {
      const amount = Math.min(250, subtotal - 100);
      setAppliedCoupon({ code, discountAmount: amount, label: '₹250 Sacred Bonus' });
    } else {
      setCouponError('Invalid coupon code. Try DIVYA10, DIVYA20, or SHAMBALA');
      setAppliedCoupon(null);
    }
  };

  const removeCoupon = () => {
    setAppliedCoupon(null);
    setCouponCode('');
    setCouponError('');
  };

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
  const [currentUser, setCurrentUser] = useState<any>(null);
  const [existingMembership, setExistingMembership] = useState<any>(null);

  useEffect(() => {
    // Check user login state
    fetch('/api/auth/me')
      .then((res) => res.json())
      .then((data) => {
        if (data.authenticated && data.user) {
          setCurrentUser(data.user);
          // Check if user already has an active membership
          if (data.user.memberships && data.user.memberships.length > 0) {
            setExistingMembership(data.user.memberships[0]);
          }
          setFormData((prev) => ({
            ...prev,
            fullName: data.user.name || prev.fullName,
            phone: data.user.mobile || prev.phone,
            email: data.user.email || prev.email,
            age: data.user.age ? String(data.user.age) : prev.age,
            gender: data.user.gender || prev.gender,
            occupation: data.user.occupation || prev.occupation,
            organisation: data.user.organisation || prev.organisation,
          }));
        }
      })
      .catch(() => {});

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
    setModalTab(currentUser ? 'form' : 'login');
    setErrors({});
    setTouched({});
    setSubmitAttempted(false);
    setAppliedCoupon(null);
    setCouponCode('');
    setCouponError('');
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setIsProcessing(false);
  };

  const handleInlineLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError('');
    setIsProcessing(true);
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(loginData),
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Login failed.');
      }
      setCurrentUser(data.user);
      setFormData((prev) => ({
        ...prev,
        fullName: data.user.name || prev.fullName,
        phone: data.user.mobile || prev.phone,
        email: data.user.email || prev.email,
        age: data.user.age ? String(data.user.age) : prev.age,
        gender: data.user.gender || prev.gender,
        occupation: data.user.occupation || prev.occupation,
        organisation: data.user.organisation || prev.organisation,
      }));
      setModalTab('form');
    } catch (err: any) {
      setLoginError(err.message || 'Invalid credentials');
    } finally {
      setIsProcessing(false);
    }
  };

  const handleInlineRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setRegisterError('');
    setIsProcessing(true);
    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(registerData),
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Registration failed.');
      }
      setCurrentUser(data.user);
      setFormData((prev) => ({
        ...prev,
        fullName: data.user.name || prev.fullName,
        phone: data.user.mobile || prev.phone,
        email: data.user.email || prev.email,
        age: data.user.age ? String(data.user.age) : prev.age,
        gender: data.user.gender || prev.gender,
        occupation: data.user.occupation || prev.occupation,
        organisation: data.user.organisation || prev.organisation,
      }));
      setModalTab('form');
    } catch (err: any) {
      setRegisterError(err.message || 'Registration failed');
    } finally {
      setIsProcessing(false);
    }
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

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitAttempted(true);

    if (!currentUser) {
      setModalTab('login');
      alert('Registration or Login is mandatory before purchasing a Membership. Please log in or create an account.');
      return;
    }

    if (existingMembership) {
      alert(`You already have an active ${existingMembership.level} membership. Only one membership per user is allowed.`);
      return;
    }

    if (!validateForm()) {
      return;
    }

    setIsProcessing(true);

    const finalPayableAmount = selectedTier
      ? selectedTier.priceNum - (appliedCoupon ? appliedCoupon.discountAmount : 0)
      : 0;

    try {
      const response = await fetch('/api/pay/create-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          orderType: 'MEMBERSHIP',
          fullName: formData.fullName,
          age: Number(formData.age),
          gender: formData.gender,
          occupation: formData.occupation,
          organisation: formData.organisation,
          phone: formData.phone,
          email: formData.email,
          tierId: selectedTier?.id,
          tierName: selectedTier?.name,
          amount: finalPayableAmount,
          couponCode: appliedCoupon?.code,
          appliedDiscountAmount: appliedCoupon?.discountAmount,
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

      const scriptLoaded = await loadCashfreeScript();
      if (scriptLoaded && (window as any).Cashfree) {
        const cashfreeMode = (process.env.NEXT_PUBLIC_CASHFREE_ENV || 'production') as 'sandbox' | 'production';
        const cashfree = (window as any).Cashfree({ mode: cashfreeMode });
        cashfree.checkout({
          paymentSessionId: data.paymentSessionId,
          redirectTarget: '_self',
        });
      } else {
        verifyAndCompletePayment(data.orderId);
      }
    } catch (err: any) {
      alert(err.message || 'Payment initialization failed. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  const handlePayment = async () => {
    setIsProcessing(true);

    try {
      const scriptLoaded = await loadCashfreeScript();
      if (scriptLoaded && (window as any).Cashfree && orderSession?.paymentSessionId) {
        const cashfreeMode = (process.env.NEXT_PUBLIC_CASHFREE_ENV || 'production') as 'sandbox' | 'production';
        const cashfree = (window as any).Cashfree({ mode: cashfreeMode });
        cashfree
          .checkout({
            paymentSessionId: orderSession.paymentSessionId,
            redirectTarget: '_modal',
          })
          .then((result: any) => {
            if (result.error) {
              console.warn('Cashfree Checkout Notice:', result.error);
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
      let verifiedTxn = orderId;
      let isPaymentConfirmed = false;
      let errorMessage = 'Payment not completed or cancelled.';

      try {
        const res = await fetch(`/api/pay/verify?order_id=${encodeURIComponent(orderId)}`);
        const data = await res.json();
        if (res.ok && data.success && data.isPaid) {
          isPaymentConfirmed = true;
          if (data.member?.memberId) {
            orderSession && (orderSession.memberId = data.member.memberId);
          }
        } else {
          errorMessage = data.error || 'Payment not completed or cancelled at Cashfree checkout.';
        }
      } catch (err: any) {
        console.warn('Verification API notice:', err);
      }

      if (!isPaymentConfirmed) {
        alert(errorMessage);
        setIsProcessing(false);
        return;
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

      const finalPayable = selectedTier
        ? selectedTier.priceNum - (appliedCoupon ? appliedCoupon.discountAmount : 0)
        : 0;

      try {
        const existingRecords = JSON.parse(localStorage.getItem('divyaYogamMemberships') || '[]');
        const newRecord = {
          ...newReceipt,
          fullName: formData.fullName,
          age: formData.age,
          gender: formData.gender,
          occupation: formData.occupation,
          organisation: formData.organisation,
          phone: formData.phone,
          email: formData.email,
          tierName: selectedTier?.name,
          tierId: selectedTier?.id,
          amountPaid: finalPayable,
          couponApplied: appliedCoupon?.code || 'NONE',
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
      // Redirect to User Dashboard upon successful membership purchase
      router.push('/user/dashboard');
    } catch (err) {
      setIsProcessing(false);
      router.push('/user/dashboard');
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const finalPayable = selectedTier
    ? selectedTier.priceNum - (appliedCoupon ? appliedCoupon.discountAmount : 0)
    : 0;

  return (
    <div className="bg-transparent font-body min-h-screen relative overflow-x-hidden text-[#352043]">
      
      {/* Background Image Overlay (con-6.webp matching Wellness & Contact Page) */}
      <div
        className="absolute inset-0 opacity-85 pointer-events-none bg-cover bg-center bg-no-repeat bg-fixed z-0"
        style={{
          backgroundImage: "linear-gradient(rgba(250, 245, 239, 0.5), rgba(250, 245, 239, 0.65)), url('/images/con-6.webp')",
        }}
      />

      {/* Existing Membership Banner */}
      {existingMembership && (
        <section className="pt-32 sm:pt-36 lg:pt-40 pb-4 relative z-10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-[#47206A] via-[#3B104E] to-[#20052C] rounded-3xl border-2 border-[#DFC47A] p-5 sm:p-7 text-white shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#DFC47A]/20 border border-[#DFC47A]/50 flex items-center justify-center shrink-0">
                  <Crown className="w-6 h-6 sm:w-7 sm:h-7 text-[#DFC47A]" />
                </div>
                <div>
                  <span className="text-xs text-[#DFC47A] uppercase font-bold tracking-wider">Your Active Contribution Tier</span>
                  <h3 className="text-xl sm:text-2xl font-extrabold font-heading text-white">{existingMembership.level} Contributor</h3>
                  <p className="text-xs text-white/80 mt-1 flex items-center gap-1.5 flex-wrap">
                    <span>Sacred Privilege Grant:</span>
                    <span className="px-2 py-0.5 rounded-md bg-[#DFC47A] text-[#2B083A] font-black text-xs shadow-sm">
                      {existingMembership.discountPercent}%
                    </span>
                    <span>on All Sequential Classes · Sacred Contribution: ₹{existingMembership.price}</span>
                  </p>
                </div>
              </div>
              <Link href="/user/dashboard" className="px-6 py-2.5 rounded-full bg-[#DFC47A] text-[#2B083A] font-bold text-xs uppercase tracking-wider hover:scale-105 transition-all shadow-lg shrink-0">Go to Dashboard</Link>
            </div>
          </div>
        </section>
      )}

      {/* MEMBERSHIP TIERS GRID */}
      <section className={`${existingMembership ? 'pt-6 sm:pt-8' : 'pt-32 sm:pt-36 lg:pt-40'} pb-12 sm:pb-16 relative z-10`} id="MembershipCards">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#352043] text-[#DFC47A] border border-[#DFC47A]/40 text-xs font-bold uppercase tracking-widest shadow-md">
              <Sparkles className="w-3.5 h-3.5 text-[#DFC47A]" />
              DIVINE GRACE SACRED CONTRIBUTORSHIP
            </span>
            <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-[#352043]">
              Choose Your <span className="font-serif italic font-normal text-[#8C5D00]">Sacred Contributorship</span>
            </h2>
            <p className="text-[#5E5865] text-sm sm:text-base font-normal max-w-xl mx-auto">
              Select a sacred contributorship tier below to support Divya Yogam mission, enroll, define your goals, and begin your journey of conscious living.
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

                  {/* Top Eye-Catching Percentage Badge Pill - Separated % Highlight */}
                  <div className="flex items-center justify-start pt-1">
                    <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border-2 shadow-lg transition-all duration-300 group-hover:scale-[1.03] ${
                      tier.id === 'diamond'
                        ? 'bg-[#2B083A]/90 border-[#DFC47A] text-white'
                        : 'bg-[#FAF5EF] border-[#DFC47A] text-[#352043]'
                    }`}>
                      <div className={`px-2.5 py-0.5 rounded-full font-black text-xs sm:text-sm shadow-md border ${
                        tier.id === 'diamond'
                          ? 'bg-gradient-to-r from-[#DFC47A] via-[#F3E5AB] to-[#C8A34A] text-[#2B083A] border-white'
                          : 'bg-[#47206A] text-[#DFC47A] border-[#DFC47A]'
                      }`}>
                        {tier.discountPercentage}%
                      </div>
                      <span className="text-[11px] font-extrabold uppercase tracking-wider">
                        Sacred Privilege Grant on All Classes
                      </span>
                    </div>
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
                      / sacred contribution
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
                          <span className={tier.id === 'diamond' ? 'text-white font-medium' : 'text-[#352043] font-medium'}>
                            {benefit.includes('%') ? (
                              <>
                                <strong className={`px-2 py-0.5 rounded-md text-xs font-black mr-1.5 shadow-md inline-block transform group-hover:scale-105 transition-transform ${
                                  tier.id === 'diamond'
                                    ? 'bg-gradient-to-r from-[#DFC47A] via-[#F3E5AB] to-[#C8A34A] text-[#2B083A] border border-white'
                                    : 'bg-[#47206A] text-[#DFC47A] border border-[#DFC47A]/60'
                                }`}>
                                  {tier.discountPercentage}%
                                </strong>
                                {benefit.replace(/^\d+%\s*/, '')}
                              </>
                            ) : (
                              benefit
                            )}
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
                {existingMembership ? (
                  <div className={`w-full py-3.5 rounded-full font-bold text-xs uppercase tracking-wider text-center ${
                    existingMembership.level.toLowerCase() === tier.id
                      ? 'bg-emerald-100 text-emerald-800 border-2 border-emerald-400'
                      : 'bg-gray-100 text-gray-500 border border-gray-300 cursor-not-allowed'
                  }`}>
                    {existingMembership.level.toLowerCase() === tier.id
                      ? '✓ Active Sacred Contribution Tier'
                      : 'Active Contribution'}
                  </div>
                ) : (
                  <button
                    onClick={() => openMembershipModal(tier)}
                    className={`w-full py-3.5 rounded-full font-bold text-xs uppercase tracking-wider shadow-md hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 ${
                      tier.id === 'diamond'
                        ? 'bg-gradient-to-r from-[#DFC47A] via-[#E3C582] to-[#C8A34A] text-[#2B083A] hover:bg-white'
                        : 'bg-[#352043] hover:bg-[#8C5D00] text-white'
                    }`}
                  >
                    <Ticket className="w-4 h-4 text-[#DFC47A]" />
                    <span>Contribute via {tier.name}</span>
                  </button>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* REGISTRATION & PAYMENT MODAL */}
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

              {/* Modal Inline Auth / Checkout Navigation Tabs */}
              {step === 'form' && (
                <div className="bg-[#FAF5EF] px-6 py-2 border-b border-[#E9DED3] flex items-center gap-2 text-xs font-bold">
                  <button
                    onClick={() => setModalTab('form')}
                    className={`px-3 py-1.5 rounded-full transition-colors flex items-center gap-1 ${
                      modalTab === 'form'
                        ? 'bg-[#47206A] text-[#DFC47A]'
                        : 'text-[#5E5865] hover:text-[#47206A]'
                    }`}
                  >
                    <User className="w-3.5 h-3.5" />
                    <span>Checkout Form</span>
                  </button>

                  {!currentUser && (
                    <>
                      <button
                        onClick={() => setModalTab('login')}
                        className={`px-3 py-1.5 rounded-full transition-colors flex items-center gap-1 ${
                          modalTab === 'login'
                            ? 'bg-[#47206A] text-[#DFC47A]'
                            : 'text-[#5E5865] hover:text-[#47206A]'
                        }`}
                      >
                        <LogIn className="w-3.5 h-3.5" />
                        <span>Log In</span>
                      </button>
                      <button
                        onClick={() => setModalTab('register')}
                        className={`px-3 py-1.5 rounded-full transition-colors flex items-center gap-1 ${
                          modalTab === 'register'
                            ? 'bg-[#47206A] text-[#DFC47A]'
                            : 'text-[#5E5865] hover:text-[#47206A]'
                        }`}
                      >
                        <UserPlus className="w-3.5 h-3.5" />
                        <span>Register</span>
                      </button>
                    </>
                  )}
                </div>
              )}

              {/* Modal Content Body */}
              <div className="p-6 sm:p-8 space-y-6">
                
                {/* STEP 1: MEMBER FORM */}
                {step === 'form' && modalTab === 'form' && (
                  <form onSubmit={handleFormSubmit} className="space-y-4" noValidate>
                    {/* User Auth Status Banner */}
                    {currentUser ? (
                      <div className="p-3.5 rounded-2xl bg-[#47206A]/10 border border-[#DFC47A] text-xs flex items-center justify-between">
                        <span className="font-bold text-[#47206A]">
                          LoggedIn as: <span className="text-[#8C5D00]">{currentUser.name}</span> ({currentUser.email})
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
                            Registration & Log In is mandatory to pay for Membership. Please log in or register to proceed.
                          </span>
                        </div>
                        <div className="flex items-center gap-2 shrink-0">
                          <button
                            type="button"
                            onClick={() => setModalTab('login')}
                            className="px-4 py-1.5 rounded-full bg-[#47206A] text-[#DFC47A] text-[11px] font-bold hover:bg-[#C8A34A] hover:text-[#47206A] transition-all"
                          >
                            Log In
                          </button>
                          <button
                            type="button"
                            onClick={() => setModalTab('register')}
                            className="px-4 py-1.5 rounded-full bg-[#FAF7F2] text-[#47206A] border border-[#DFC47A] text-[11px] font-bold hover:bg-[#47206A] hover:text-white transition-all"
                          >
                            Register
                          </button>
                        </div>
                      </div>
                    )}

                    {submitAttempted && Object.keys(errors).length > 0 && (
                      <div className="p-3.5 rounded-2xl bg-red-50 border-2 border-red-200 text-red-700 text-xs font-semibold flex items-start gap-2.5">
                        <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                        <div>
                          <p className="font-bold text-red-800 text-xs sm:text-sm">Validation Failed — Cannot Proceed to Payment</p>
                          <p className="text-[11px] font-medium text-red-600 mt-0.5">
                            Please fix the {Object.keys(errors).length} highlighted field{Object.keys(errors).length > 1 ? 's' : ''} in red below before continuing.
                          </p>
                        </div>
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Name */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-[#352043] uppercase tracking-wider flex items-center gap-1.5">
                          <User className="w-3.5 h-3.5 text-[#8C5D00]" />
                          <span>Name *</span>
                        </label>
                        <input
                          type="text"
                          placeholder="Enter your full name"
                          value={formData.fullName}
                          onChange={(e) => handleInputChange('fullName', e.target.value)}
                          onBlur={() => handleBlur('fullName')}
                          className={`w-full px-4 py-3 rounded-xl border transition-colors text-xs sm:text-sm font-medium bg-[#FAF5EF]/50 focus:outline-none ${
                            touched.fullName && errors.fullName
                              ? 'border-red-400 focus:border-red-500 bg-red-50/20'
                              : 'border-[#E9DED3] focus:border-[#C8A34A]'
                          }`}
                        />
                        {touched.fullName && errors.fullName && (
                          <p className="text-[11px] text-red-500 font-semibold flex items-center gap-1 mt-1">
                            <AlertCircle className="w-3 h-3 flex-shrink-0 text-red-500" />
                            <span>{errors.fullName}</span>
                          </p>
                        )}
                      </div>

                      {/* Age */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-[#352043] uppercase tracking-wider flex items-center gap-1.5">
                          <User className="w-3.5 h-3.5 text-[#8C5D00]" />
                          <span>Age *</span>
                        </label>
                        <input
                          type="number"
                          min={1}
                          max={120}
                          placeholder="e.g. 28"
                          value={formData.age}
                          onChange={(e) => handleInputChange('age', e.target.value)}
                          onBlur={() => handleBlur('age')}
                          className={`w-full px-4 py-3 rounded-xl border transition-colors text-xs sm:text-sm font-medium bg-[#FAF5EF]/50 focus:outline-none ${
                            touched.age && errors.age
                              ? 'border-red-400 focus:border-red-500 bg-red-50/20'
                              : 'border-[#E9DED3] focus:border-[#C8A34A]'
                          }`}
                        />
                        {touched.age && errors.age && (
                          <p className="text-[11px] text-red-500 font-semibold flex items-center gap-1 mt-1">
                            <AlertCircle className="w-3 h-3 flex-shrink-0 text-red-500" />
                            <span>{errors.age}</span>
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Gender */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-[#352043] uppercase tracking-wider flex items-center gap-1.5">
                          <Users className="w-3.5 h-3.5 text-[#8C5D00]" />
                          <span>Gender *</span>
                        </label>
                        <select
                          value={formData.gender}
                          onChange={(e) => handleInputChange('gender', e.target.value)}
                          onBlur={() => handleBlur('gender')}
                          className={`w-full px-4 py-3 rounded-xl border transition-colors text-xs sm:text-sm font-medium bg-[#FAF5EF]/50 focus:outline-none ${
                            touched.gender && errors.gender
                              ? 'border-red-400 focus:border-red-500 bg-red-50/20'
                              : 'border-[#E9DED3] focus:border-[#C8A34A]'
                          }`}
                        >
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                          <option value="Other">Other</option>
                        </select>
                        {touched.gender && errors.gender && (
                          <p className="text-[11px] text-red-500 font-semibold flex items-center gap-1 mt-1">
                            <AlertCircle className="w-3 h-3 flex-shrink-0 text-red-500" />
                            <span>{errors.gender}</span>
                          </p>
                        )}
                      </div>

                      {/* Occupation */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-[#352043] uppercase tracking-wider flex items-center gap-1.5">
                          <Building className="w-3.5 h-3.5 text-[#8C5D00]" />
                          <span>Occupation *</span>
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. Software Engineer, Doctor, Student"
                          value={formData.occupation}
                          onChange={(e) => handleInputChange('occupation', e.target.value)}
                          onBlur={() => handleBlur('occupation')}
                          className={`w-full px-4 py-3 rounded-xl border transition-colors text-xs sm:text-sm font-medium bg-[#FAF5EF]/50 focus:outline-none ${
                            touched.occupation && errors.occupation
                              ? 'border-red-400 focus:border-red-500 bg-red-50/20'
                              : 'border-[#E9DED3] focus:border-[#C8A34A]'
                          }`}
                        />
                        {touched.occupation && errors.occupation && (
                          <p className="text-[11px] text-red-500 font-semibold flex items-center gap-1 mt-1">
                            <AlertCircle className="w-3 h-3 flex-shrink-0 text-red-500" />
                            <span>{errors.occupation}</span>
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Organisation / Location */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-[#352043] uppercase tracking-wider flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5 text-[#8C5D00]" />
                          <span>Organisation / Location *</span>
                        </label>
                        <input
                          type="text"
                          placeholder="Enter organisation or city/location"
                          value={formData.organisation}
                          onChange={(e) => handleInputChange('organisation', e.target.value)}
                          onBlur={() => handleBlur('organisation')}
                          className={`w-full px-4 py-3 rounded-xl border transition-colors text-xs sm:text-sm font-medium bg-[#FAF5EF]/50 focus:outline-none ${
                            touched.organisation && errors.organisation
                              ? 'border-red-400 focus:border-red-500 bg-red-50/20'
                              : 'border-[#E9DED3] focus:border-[#C8A34A]'
                          }`}
                        />
                        {touched.organisation && errors.organisation && (
                          <p className="text-[11px] text-red-500 font-semibold flex items-center gap-1 mt-1">
                            <AlertCircle className="w-3 h-3 flex-shrink-0 text-red-500" />
                            <span>{errors.organisation}</span>
                          </p>
                        )}
                      </div>

                      {/* Mobile Number (10-Digit Validated) */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-[#352043] uppercase tracking-wider flex items-center gap-1.5">
                          <Phone className="w-3.5 h-3.5 text-[#8C5D00]" />
                          <span>Mobile Number * (10 Digits)</span>
                        </label>
                        <input
                          type="tel"
                          maxLength={10}
                          placeholder="Enter 10-digit mobile number"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          onBlur={() => handleBlur('phone')}
                          className={`w-full px-4 py-3 rounded-xl border transition-colors text-xs sm:text-sm font-medium bg-[#FAF5EF]/50 focus:outline-none ${
                            touched.phone && errors.phone
                              ? 'border-red-400 focus:border-red-500 bg-red-50/20'
                              : 'border-[#E9DED3] focus:border-[#C8A34A]'
                          }`}
                        />
                        {touched.phone && errors.phone && (
                          <p className="text-[11px] text-red-500 font-semibold flex items-center gap-1 mt-1">
                            <AlertCircle className="w-3 h-3 flex-shrink-0 text-red-500" />
                            <span>{errors.phone}</span>
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Email Address */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-[#352043] uppercase tracking-wider flex items-center gap-1.5">
                        <Mail className="w-3.5 h-3.5 text-[#8C5D00]" />
                        <span>Email Address *</span>
                      </label>
                      <input
                        type="email"
                        placeholder="Enter your email address"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        onBlur={() => handleBlur('email')}
                        className={`w-full px-4 py-3 rounded-xl border transition-colors text-xs sm:text-sm font-medium bg-[#FAF5EF]/50 focus:outline-none ${
                          touched.email && errors.email
                            ? 'border-red-400 focus:border-red-500 bg-red-50/20'
                            : 'border-[#E9DED3] focus:border-[#C8A34A]'
                        }`}
                      />
                      {touched.email && errors.email && (
                        <p className="text-[11px] text-red-500 font-semibold flex items-center gap-1 mt-1">
                          <AlertCircle className="w-3 h-3 flex-shrink-0 text-red-500" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>

                    <div className="pt-3 border-t border-[#E9DED3] flex items-center justify-between gap-4">
                      <div className="text-xs">
                        <span className="text-[#5E5865] block">Total Payment Amount:</span>
                        <div className="flex items-baseline gap-2">
                          <span className="font-heading text-xl font-extrabold text-[#352043]">
                            ₹{finalPayable.toLocaleString('en-IN')}
                          </span>
                          {appliedCoupon && (
                            <span className="text-xs line-through text-gray-400">
                              {selectedTier.price}
                            </span>
                          )}
                        </div>
                      </div>

                      <button
                        type="submit"
                        disabled={isProcessing}
                        className={`px-4 sm:px-8 py-3.5 rounded-full bg-[#352043] hover:bg-[#8C5D00] text-white font-bold text-xs uppercase tracking-wider shadow-lg transition-all flex items-center gap-2 text-center justify-center ${
                          isProcessing ? 'opacity-70 cursor-wait' : 'hover:scale-105'
                        }`}
                      >
                        {isProcessing ? (
                          <>
                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin shrink-0" />
                            <span>Connecting Cashfree...</span>
                          </>
                        ) : (
                          <>
                            <span>Proceed to Sacred Value</span>
                            <ArrowRight className="w-4 h-4 text-[#DFC47A] shrink-0" />
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                )}

                {/* INLINE LOGIN FORM TAB */}
                {step === 'form' && modalTab === 'login' && (
                  <form onSubmit={handleInlineLogin} className="space-y-4">
                    <div className="text-center space-y-1">
                      <h4 className="font-heading text-lg font-bold text-[#352043]">Log In to Your Account</h4>
                      <p className="text-xs text-[#5E5865]">Enter your registered email and password to auto-fill your details.</p>
                    </div>

                    {loginError && (
                      <div className="p-3 rounded-xl bg-red-50 text-red-600 text-xs font-semibold flex items-center gap-2">
                        <AlertCircle className="w-4 h-4 text-red-600 shrink-0" />
                        <span>{loginError}</span>
                      </div>
                    )}

                    <div className="space-y-3">
                      <div className="space-y-1">
                        <label className="text-xs font-bold uppercase text-[#352043]">Email Address *</label>
                        <input
                          type="email"
                          required
                          placeholder="Enter your email"
                          value={loginData.email}
                          onChange={(e) => setLoginData((prev) => ({ ...prev, email: e.target.value }))}
                          className="w-full px-4 py-3 rounded-xl border border-[#E9DED3] text-xs font-medium focus:outline-none focus:border-[#C8A34A]"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-xs font-bold uppercase text-[#352043]">Password *</label>
                        <div className="relative">
                          <input
                            type={showLoginPassword ? 'text' : 'password'}
                            required
                            placeholder="Enter password"
                            value={loginData.password}
                            onChange={(e) => setLoginData((prev) => ({ ...prev, password: e.target.value }))}
                            className="w-full px-4 py-3 pr-10 rounded-xl border border-[#E9DED3] text-xs font-medium focus:outline-none focus:border-[#C8A34A]"
                          />
                          <button
                            type="button"
                            onClick={() => setShowLoginPassword(!showLoginPassword)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#47206A] focus:outline-none transition-colors"
                            title={showLoginPassword ? 'Hide password' : 'Show password'}
                          >
                            {showLoginPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                          </button>
                        </div>
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={isProcessing}
                      className="w-full py-3 rounded-full bg-[#47206A] text-[#DFC47A] font-bold text-xs uppercase tracking-wider hover:bg-[#8C5D00] transition-all"
                    >
                      {isProcessing ? 'Logging in...' : 'Log In & Continue'}
                    </button>
                  </form>
                )}

                {/* INLINE REGISTER FORM TAB */}
                {step === 'form' && modalTab === 'register' && (
                  <form onSubmit={handleInlineRegister} className="space-y-4">
                    <div className="text-center space-y-1">
                      <h4 className="font-heading text-lg font-bold text-[#352043]">Create a New Account</h4>
                      <p className="text-xs text-[#5E5865]">Register now to save your membership pass to your personal dashboard.</p>
                    </div>

                    {registerError && (
                      <div className="p-3 rounded-xl bg-red-50 text-red-600 text-xs font-semibold flex items-center gap-2">
                        <AlertCircle className="w-4 h-4 text-red-600 shrink-0" />
                        <span>{registerError}</span>
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <input
                        type="text"
                        required
                        placeholder="Full Name *"
                        value={registerData.name}
                        onChange={(e) => setRegisterData((prev) => ({ ...prev, name: e.target.value }))}
                        className="px-4 py-2.5 rounded-xl border border-[#E9DED3] text-xs"
                      />
                      <input
                        type="tel"
                        required
                        maxLength={10}
                        placeholder="10-Digit Mobile *"
                        value={registerData.mobile}
                        onChange={(e) => setRegisterData((prev) => ({ ...prev, mobile: e.target.value }))}
                        className="px-4 py-2.5 rounded-xl border border-[#E9DED3] text-xs"
                      />
                      <input
                        type="email"
                        required
                        placeholder="Email Address *"
                        value={registerData.email}
                        onChange={(e) => setRegisterData((prev) => ({ ...prev, email: e.target.value }))}
                        className="px-4 py-2.5 rounded-xl border border-[#E9DED3] text-xs"
                      />
                      <div className="relative">
                        <input
                          type={showRegisterPassword ? 'text' : 'password'}
                          required
                          placeholder="Password *"
                          value={registerData.password}
                          onChange={(e) => setRegisterData((prev) => ({ ...prev, password: e.target.value }))}
                          className="px-4 py-2.5 pr-10 rounded-xl border border-[#E9DED3] text-xs"
                        />
                        <button
                          type="button"
                          onClick={() => setShowRegisterPassword(!showRegisterPassword)}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#47206A] focus:outline-none transition-colors"
                          title={showRegisterPassword ? 'Hide password' : 'Show password'}
                        >
                          {showRegisterPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        </button>
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={isProcessing}
                      className="w-full py-3 rounded-full bg-[#47206A] text-[#DFC47A] font-bold text-xs uppercase tracking-wider hover:bg-[#8C5D00] transition-all"
                    >
                      {isProcessing ? 'Registering...' : 'Register & Continue'}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
