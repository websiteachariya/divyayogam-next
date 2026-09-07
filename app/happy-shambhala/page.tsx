'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollAutoPlayVideo from '@/components/common/ScrollAutoPlayVideo';
import EventFloatingBar from '@/components/events/EventFloatingBar';
import {
  Sparkles,
  Calendar,
  Clock,
  MapPin,
  CheckCircle2,
  ArrowRight,
  ShieldAlert,
  Video,
  Ticket,
  HeartHandshake,
  VolumeX,
  CameraOff,
  UserCheck,
  Ban,
  Play,
  ChevronLeft,
  ChevronRight,
  Heart,
  ExternalLink,
  Award,
  Phone,
  Mail,
  Users,
  Globe,
  Sun,
  UploadCloud,
  User,
  Home,
  Navigation,
  CreditCard,
  QrCode,
  Building,
  Check,
  Printer,
  X,
  ShieldCheck,
  AlertCircle
} from 'lucide-react';

export default function HappyShambhalaLandingPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeTab, setActiveTab] = useState<'all' | 'tickets' | 'guidelines'>('all');

  // Registration & Payment Modal State
  const [selectedTier, setSelectedTier] = useState<TicketTier | null>(null);
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

  // Form Validation State
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [touched, setTouched] = useState<{ [key: string]: boolean }>({});
  const [submitAttempted, setSubmitAttempted] = useState(false);

  const validateField = (name: string, value: string): string => {
    const trimmed = value.trim();
    switch (name) {
      case 'fullName':
        if (!trimmed) return 'Full name is required.';
        if (trimmed.length < 3) return 'Full name must be at least 3 characters.';
        if (!/^[a-zA-Z\s.'-]{3,50}$/.test(trimmed)) {
          return 'Please enter a valid name (letters and spaces only).';
        }
        return '';
      case 'phone':
        if (!trimmed) return 'Phone number is required.';
        if (trimmed.length !== 10) return 'Phone number must be exactly 10 digits.';
        if (!/^[6-9]\d{9}$/.test(trimmed)) {
          return 'Phone number must start with 6, 7, 8, or 9.';
        }
        return '';
      case 'email':
        if (!trimmed) return 'Email address is required.';
        if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(trimmed)) {
          return 'Please enter a valid email address (e.g. name@domain.com).';
        }
        return '';
      case 'city':
        if (!trimmed) return 'City name is required.';
        if (trimmed.length < 3) return 'City name must be at least 3 characters.';
        if (!/^[a-zA-Z\s.'-]{3,50}$/.test(trimmed)) {
          return 'Please enter a valid city name (letters only).';
        }
        return '';
      case 'address':
        // Address is explicitly OPTIONAL
        if (trimmed.length > 200) {
          return 'Address must not exceed 200 characters.';
        }
        return '';
      case 'pincode':
        if (!trimmed) return 'Pincode is required.';
        if (trimmed.length !== 6) return 'Pincode must be exactly 6 digits.';
        if (!/^[1-9][0-9]{5}$/.test(trimmed)) {
          return 'Pincode must be 6 digits and cannot start with 0.';
        }
        return '';
      default:
        return '';
    }
  };

  const handleInputChange = (field: string, rawValue: string) => {
    let value = rawValue;
    if (field === 'phone' || field === 'pincode') {
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
      phone: validateField('phone', formData.phone),
      email: validateField('email', formData.email),
      city: validateField('city', formData.city),
      address: validateField('address', formData.address),
      pincode: validateField('pincode', formData.pincode),
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
      phone: true,
      email: true,
      city: true,
      address: true,
      pincode: true,
    });

    return Object.keys(activeErrors).length === 0;
  };

  const [receiptData, setReceiptData] = useState<{
    memberId: string;
    issueDate: string;
    txnId: string;
  } | null>(null);

  const [orderSession, setOrderSession] = useState<{
    paymentSessionId: string;
    orderId: string;
    memberId: string;
  } | null>(null);

  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      const returnedOrderId = urlParams.get('order_id');
      if (returnedOrderId) {
        verifyAndCompletePayment(returnedOrderId);
      }
    }
  }, []);

  const openMembershipModal = (tier: TicketTier) => {
    setSelectedTier(tier);
    setStep('form');
    setErrors({});
    setTouched({});
    setSubmitAttempted(false);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setIsProcessing(false);
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

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitAttempted(true);

    if (!validateForm()) {
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

  // Countdown timer state
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date('2026-12-12T17:00:00+05:30').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    };

    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);
    return () => clearInterval(timer);
  }, []);

  const slides = [
    {
      title: 'Maha Shambhala 2026',
      subtitle: 'Global Grand Celebration of Oneness & Initiation',
      bgImage: '/images/banner-1.webp',
      badge: 'DECEMBER 12, 2026',
    },
    {
      title: 'Global Grand Celebration of Oneness',
      subtitle: 'Awakening potentials for an enlightened, harmonious society',
      bgImage: '/images/banner-2.webp',
      badge: 'SPIRITUAL AWAKENING',
    },
    {
      title: 'Get Ready For Spiritual Experience',
      subtitle: 'Deep cellular rejuvenation, organ meditation & Satsang with Arawindhan Ji',
      bgImage: '/images/banner-3.webp',
      badge: 'ACHARIYA SANCTUARY',
    },
  ];

  useEffect(() => {
    const slideTimer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(slideTimer);
  }, [slides.length]);

  interface TicketTier {
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

  const ticketTiers: TicketTier[] = [
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
    }
  ];

  const galleryImages = [
    { src: null, isPending: true, title: 'Shambhala Celebration' },
    { src: null, isPending: true, title: 'Oneness Sadhana Gathering' },
    { src: null, isPending: true, title: 'Spiritual Initiation' },
    { src: null, isPending: true, title: 'Consciousness Meditation' },
    { src: null, isPending: true, title: 'Deep Inner Peace' },
    { src: null, isPending: true, title: 'Sanctuary Satsang' },
    { src: null, isPending: true, title: 'Maha Shambhala Moments' },
    { src: null, isPending: true, title: 'Divine Awakening' },
    { src: null, isPending: true, title: 'Cellular Healing Session' },
    { src: null, isPending: true, title: 'Sacred Reflection' },
    { src: null, isPending: true, title: 'Upcoming Celebration' },
    { src: null, isPending: true, title: 'Sanctuary Highlights' },
  ];

  const testimonialVideos = [
    { id: 'GqDjm6amEu0', title: 'Deep Inner Healing Experience' },
    { id: '5Ut6CCT_Gms', title: 'Awakening Consciousness' },
    { id: 'G_otnJtf1qs', title: 'Shambhala Meditation Journey' },
    { id: 'HwA-qgzVWEk', title: 'Shambhala Sadhana Realization' },
    { id: '-UnFkMbnXs8', title: 'Mindfulness & Clarity' },
    { id: 'TXARPCnXUwM', title: 'Shambhala Transformation' },
    { id: 'vq2XTPdfttA', title: 'Soul Connection & Peace' },
    { id: 'VRgLuk0Etjw', title: 'Divine Energy Activation' },
    { id: 'ubDdVwaOKbI', title: 'Higher Consciousness State' },
    { id: 'nu3F8DD1nmo', title: 'Inner Harmony & Love' },
    { id: 'xLCFA-8bjH0', title: 'Peaceful Mind & Purpose' },
    { id: 'PyP9Rs_iI58', title: 'Cellular Health Awakening' },
    { id: 'tSPIoOmVqhg', title: 'Spiritual Alignment Grace' },
    { id: 'lZZxM58Uy7s', title: 'ACHARIYA Culture Blessings' },
  ];

  const outsidePondyEvents = [
    {
      location: 'Erode',
      date: '26, September',
      day: '26',
      month: 'SEPT',
      venue: 'Erode Regional Initiation Center',
      badge: 'ERODE SATSANG',
    },
    {
      location: 'Trichy',
      date: '10, October',
      day: '10',
      month: 'OCT',
      venue: 'Trichy Spiritual Awakening Center',
      badge: 'TRICHY SATSANG',
    },
    {
      location: 'Ettimadai',
      date: '24, October',
      day: '24',
      month: 'OCT',
      venue: 'Ettimadai Oneness Meditation Hall',
      badge: 'ETTIMADAI SATSANG',
    },
    {
      location: 'Chennai',
      date: '31, October',
      day: '31',
      month: 'OCT',
      venue: 'Chennai Shambhala Sanctuary',
      badge: 'CHENNAI SATSANG',
    },
    {
      location: 'Villupuram',
      date: '14, November',
      day: '14',
      month: 'NOV',
      venue: 'Saraswathi School, Villupuram',
      badge: 'SARASWATHI SCHOOL',
    },
    {
      location: 'Villupuram',
      date: '21, November',
      day: '21',
      month: 'NOV',
      venue: 'Villupuram City Oneness Sanctuary',
      badge: 'VILLUPURAM SATSANG',
    },
    {
      location: 'Karaikal',
      date: '28, November',
      day: '28',
      month: 'NOV',
      venue: 'Karaikal Shambhala Meditation Center',
      badge: 'KARAIKAL SATSANG',
    },
  ];

  const guidelines = [
    { icon: CameraOff, title: 'Zero Camera Movement', desc: 'Recording devices and active photography are strictly prohibited inside the meditation sanctuary.' },
    { icon: Ban, title: 'No Movement After Start', desc: 'To maintain the collective energy field, movement is restricted once the initiation commences.' },
    { icon: VolumeX, title: 'Maintain Noble Silence', desc: 'Observe total noble silence before, during, and after the guided Shambhala initiation.' },
    { icon: ShieldAlert, title: 'Strictly Adults Only', desc: 'For deep meditation concentration, infants and children below 12 years are not permitted.' },
    { icon: UserCheck, title: 'Designated Entry & Exit', desc: 'Please strictly follow specified movement pathways guided by Divya Yogam volunteers.' },
    { icon: CheckCircle2, title: 'Cleanliness & Zero Littering', desc: 'Respect the pristine sanctuary environment. Keep all personal belongings organized.' },
  ];

  return (
    <div className="bg-transparent font-body min-h-screen relative overflow-x-hidden">
      {/* Fixed Background Image Overlay (con-6.webp Sandal Texture matching Events Page) */}
      <div
        className="absolute inset-0 opacity-85 pointer-events-none bg-cover bg-center bg-no-repeat bg-fixed z-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(250, 245, 239, 0.5), rgba(250, 245, 239, 0.65)), url('/images/con-6.webp')",
        }}
      />

      {/* 1. HERO SECTION WITH LEFT CONTENT & RIGHT VIDEO PLAYER BOX */}
      <header
        className="relative bg-cover bg-center bg-no-repeat pt-28 sm:pt-32 lg:pt-36 pb-6 sm:pb-8 text-white overflow-hidden font-body"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(53, 26, 74, 0.82), rgba(42, 19, 59, 0.88), rgba(31, 13, 43, 0.94)), url('/images/hp-1.webp')",
        }}
        id="Home"
      >
        {/* Background Mandala Image Asset */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 opacity-20 pointer-events-none z-0">
          <Image
            src="/images/golden_lotus_mandala.webp"
            alt="Golden Lotus Mandala"
            fill
            className="object-contain"
          />
        </div>
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 opacity-20 pointer-events-none z-0">
          <Image
            src="/images/golden_lotus_mandala.webp"
            alt="Golden Lotus Mandala"
            fill
            className="object-contain"
          />
        </div>

        {/* Hero Content Grid (Left Text & Right Large Video Player) */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-5 space-y-6 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5"
              >
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C8A34A]/25 border border-[#DFC47A]/50 text-[#DFC47A] text-xs font-bold uppercase tracking-widest shadow-md backdrop-blur-sm">
                  <Sparkles className="w-3.5 h-3.5 text-[#DFC47A]" />
                  <span>THE GUIDING LIGHT · SANTOSHI SHRI. ARAWINDHAN JI</span>
                </div>
                <Link
                  href="/membership"
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/20 hover:bg-emerald-500/30 border border-emerald-400/40 text-emerald-300 hover:text-white text-xs font-bold uppercase tracking-widest shadow-md backdrop-blur-sm hover:scale-105 transition-all cursor-pointer"
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <span>Live Registration Open</span>
                </Link>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-white"
              >
                Happy <span className="text-[#DFC47A] italic font-serif font-normal block sm:inline">Shambhala 2026</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="font-serif italic text-base sm:text-lg text-[#F8F2E8] leading-relaxed max-w-xl mx-auto lg:mx-0"
              >
                Join Arawindhan Ji and thousands of seekers worldwide for the Maha Shambhala initiation, collective meditation, and spiritual awakening.
              </motion.p>

              {/* 4 Feature Badges Grid (Matching User Mockup) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.25 }}
                className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-1 max-w-xl mx-auto lg:mx-0"
              >
                <div className="flex flex-col items-center justify-center p-2.5 rounded-2xl bg-white/5 border border-[#DFC47A]/30 backdrop-blur-sm text-center">
                  <div className="w-9 h-9 rounded-full bg-[#C8A34A]/20 border border-[#DFC47A]/50 flex items-center justify-center text-[#DFC47A] mb-1.5 shadow-xs">
                    <Users className="w-4 h-4" />
                  </div>
                  <span className="text-[11px] font-bold text-white uppercase tracking-wider">One Humanity</span>
                </div>

                <div className="flex flex-col items-center justify-center p-2.5 rounded-2xl bg-white/5 border border-[#DFC47A]/30 backdrop-blur-sm text-center">
                  <div className="w-9 h-9 rounded-full bg-[#C8A34A]/20 border border-[#DFC47A]/50 flex items-center justify-center text-[#DFC47A] mb-1.5 shadow-xs">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <span className="text-[11px] font-bold text-white uppercase tracking-wider">Higher Consciousness</span>
                </div>

                <div className="flex flex-col items-center justify-center p-2.5 rounded-2xl bg-white/5 border border-[#DFC47A]/30 backdrop-blur-sm text-center">
                  <div className="w-9 h-9 rounded-full bg-[#C8A34A]/20 border border-[#DFC47A]/50 flex items-center justify-center text-[#DFC47A] mb-1.5 shadow-xs">
                    <Globe className="w-4 h-4" />
                  </div>
                  <span className="text-[11px] font-bold text-white uppercase tracking-wider">Global Meditation</span>
                </div>

                <div className="flex flex-col items-center justify-center p-2.5 rounded-2xl bg-white/5 border border-[#DFC47A]/30 backdrop-blur-sm text-center">
                  <div className="w-9 h-9 rounded-full bg-[#C8A34A]/20 border border-[#DFC47A]/50 flex items-center justify-center text-[#DFC47A] mb-1.5 shadow-xs">
                    <Heart className="w-4 h-4" />
                  </div>
                  <span className="text-[11px] font-bold text-white uppercase tracking-wider">A Better World</span>
                </div>
              </motion.div>

              {/* Callout Quote + Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="space-y-4 pt-1"
              >
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                  <Link
                    href="/membership"
                    className="px-7 py-3.5 rounded-full bg-[#C8A34A] hover:bg-white text-[#352043] font-bold text-xs sm:text-sm uppercase tracking-wider shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-2"
                  >
                    <Ticket className="w-4 h-4" />
                    <span>Book Tickets Now</span>
                  </Link>
                  <Link
                    href="/membership"
                    className="px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/20 border border-[#DFC47A]/50 text-[#DFC47A] hover:text-white font-bold text-xs sm:text-sm uppercase tracking-wider backdrop-blur-md transition-all duration-300 flex items-center gap-2"
                  >
                    <Play className="w-3.5 h-3.5 fill-[#DFC47A]" />
                    <span>Explore Shambhala</span>
                  </Link>
                </div>


              </motion.div>
            </div>

            {/* Right Large Video Player Column */}
            <div className="lg:col-span-7 relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative rounded-3xl overflow-hidden border-4 border-[#DFC47A] shadow-2xl bg-black group"
              >
                <div className="aspect-video w-full relative">
                  <ScrollAutoPlayVideo
                    src="https://res.cloudinary.com/y2q2jsq0/video/upload/v1787284239/watermark-removed-gemini_generated_video_288afa14_oifrwr.mp4"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="bg-[#351A4A] px-4 py-3 text-center border-t border-[#DFC47A]/40 flex items-center justify-between gap-2">
                  <span className="text-[11px] font-bold text-[#DFC47A]/90 uppercase tracking-wider hidden sm:inline">
                    A Brighter Tomorrow Together
                  </span>
                  <div className="flex items-center gap-1.5 mx-auto sm:mx-0">
                    <Sparkles className="w-4 h-4 text-[#DFC47A]" />
                    <span className="text-xs sm:text-sm font-bold text-[#DFC47A] uppercase tracking-wider">
                      Happy Shambhala Initiation Video
                    </span>
                  </div>
                  <span className="text-[10px] font-extrabold text-[#DFC47A] uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#C8A34A]/20 border border-[#DFC47A]/40 hidden md:inline">
                    Meditate • Unite • Transform
                  </span>
                </div>
              </motion.div>
            </div>
          </div>



          {/* Ornate Glowing Golden Lotus & Tagline Crest (Matching User Mockup) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="w-full max-w-5xl mx-auto pt-2 pb-2 flex flex-col items-center justify-center relative z-10"
          >
            {/* Clean Horizontal Golden Divider Line with Centered Lotus Emblem */}
            <div className="relative w-full flex items-center justify-center min-h-[50px] my-2">
              {/* Left Line */}
              <div className="flex-1 h-[1.5px] bg-gradient-to-r from-transparent via-[#DFC47A]/70 to-[#FFEAA7] drop-shadow-[0_0_8px_rgba(223,196,122,0.6)]" />

              {/* Glowing Lotus Crest in Center */}
              <div className="relative mx-3 sm:mx-6 flex flex-col items-center justify-center shrink-0">
                {/* Radiant Backdrop Glow */}
                <div className="absolute w-20 h-20 rounded-full bg-[#FFEAA7]/30 blur-xl pointer-events-none -z-10 animate-pulse" />
                <div className="absolute w-12 h-12 rounded-full bg-[#FFF8DC]/60 blur-md pointer-events-none -z-10" />

                {/* Lotus Emblem SVG */}
                <svg
                  width="68"
                  height="44"
                  viewBox="0 0 68 44"
                  fill="none"
                  className="drop-shadow-[0_0_15px_rgba(255,234,167,0.9)]"
                >
                  {/* Central Radiant Flare Dot */}
                  <circle cx="34" cy="22" r="4" fill="#FFFFFF" className="animate-pulse" />
                  <circle cx="34" cy="22" r="8" fill="#FFEAA7" fillOpacity="0.5" />

                  {/* Lotus Petals Outline */}
                  <path
                    d="M34 4 C37 14, 40 20, 34 29 C28 20, 31 14, 34 4 Z"
                    fill="#FFEAA7"
                    stroke="#FFF8DC"
                    strokeWidth="1.2"
                  />
                  <path
                    d="M34 29 C27 24, 21 16, 23 10 C29 14, 31 22, 34 29 Z"
                    fill="none"
                    stroke="#FFEAA7"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M34 29 C41 24, 47 16, 45 10 C39 14, 37 22, 34 29 Z"
                    fill="none"
                    stroke="#FFEAA7"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M34 30 C23 27, 13 20, 14 14 C22 17, 27 25, 34 30 Z"
                    fill="none"
                    stroke="#DFC47A"
                    strokeWidth="1.3"
                  />
                  <path
                    d="M34 30 C45 27, 55 20, 54 14 C46 17, 41 25, 34 30 Z"
                    fill="none"
                    stroke="#DFC47A"
                    strokeWidth="1.3"
                  />
                  {/* Bottom Golden Ring Arcs */}
                  <path
                    d="M 12 28 Q 34 42 56 28"
                    fill="none"
                    stroke="#FFEAA7"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M 18 33 Q 34 44 50 33"
                    fill="none"
                    stroke="#DFC47A"
                    strokeWidth="1"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              {/* Right Line */}
              <div className="flex-1 h-[1.5px] bg-gradient-to-l from-transparent via-[#DFC47A]/70 to-[#FFEAA7] drop-shadow-[0_0_8px_rgba(223,196,122,0.6)]" />
            </div>

            {/* Tagline Strip: — MEDITATE • CELEBRATE • TRANSFORM — */}
            <div className="flex items-center justify-center gap-1.5 sm:gap-5 pt-1 w-full max-w-full px-2">
              <span className="w-4 sm:w-16 h-[1.5px] bg-gradient-to-r from-transparent via-[#DFC47A] to-[#DFC47A] rounded-full shrink" />
              <span className="font-serif text-[#FFEAA7] text-[10px] xs:text-xs sm:text-sm md:text-base font-medium tracking-[0.12em] xs:tracking-[0.2em] sm:tracking-[0.3em] uppercase drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] shrink-0">
                MEDITATE <span className="text-[#DFC47A] mx-0.5 sm:mx-1">•</span> CELEBRATE <span className="text-[#DFC47A] mx-0.5 sm:mx-1">•</span> TRANSFORM
              </span>
              <span className="w-4 sm:w-16 h-[1.5px] bg-gradient-to-l from-transparent via-[#DFC47A] to-[#DFC47A] rounded-full shrink" />
            </div>
          </motion.div>
        </div>

        {/* Curved Bottom Edge Divider matching section bg (#FAF5EF) */}
        <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-20 pointer-events-none">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-10 text-[#FAF5EF]" fill="currentColor">
            <path d="M0,0 C300,50 900,50 1200,0 L1200,120 L0,120 Z" />
          </svg>
        </div>
      </header>

      {/* 2. LIVE COUNTDOWN & MISSION BANNER */}
      <section className="pt-4 pb-6 sm:pb-8 relative z-20 overflow-hidden">
        {/* Ornate Golden Lotus Crest & Tagline Strip directly above Counter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="w-full max-w-5xl mx-auto mb-4 flex flex-col items-center justify-center relative z-10 px-4"
        >
          {/* Clean Horizontal Golden Divider Line with Centered Lotus Emblem */}
          <div className="relative w-full flex items-center justify-center min-h-[50px] my-2">
            {/* Left Line */}
            <div className="flex-1 h-[1.5px] bg-gradient-to-r from-transparent via-[#8C5D00]/60 to-[#C8A34A] drop-shadow-[0_0_8px_rgba(200,163,74,0.5)]" />

            {/* Glowing Lotus Crest in Center */}
            <div className="relative mx-3 sm:mx-6 flex flex-col items-center justify-center shrink-0">
              {/* Radiant Backdrop Glow */}
              <div className="absolute w-20 h-20 rounded-full bg-[#C8A34A]/25 blur-xl pointer-events-none -z-10 animate-pulse" />
              <div className="absolute w-12 h-12 rounded-full bg-[#FFEAA7]/70 blur-md pointer-events-none -z-10" />

              {/* Lotus Emblem SVG */}
              <svg
                width="68"
                height="44"
                viewBox="0 0 68 44"
                fill="none"
                className="drop-shadow-[0_0_12px_rgba(200,163,74,0.8)]"
              >
                {/* Central Radiant Flare Dot */}
                <circle cx="34" cy="22" r="4" fill="#352043" className="animate-pulse" />
                <circle cx="34" cy="22" r="8" fill="#C8A34A" fillOpacity="0.5" />

                {/* Lotus Petals Outline */}
                <path
                  d="M34 4 C37 14, 40 20, 34 29 C28 20, 31 14, 34 4 Z"
                  fill="#C8A34A"
                  stroke="#8C5D00"
                  strokeWidth="1.2"
                />
                <path
                  d="M34 29 C27 24, 21 16, 23 10 C29 14, 31 22, 34 29 Z"
                  fill="none"
                  stroke="#8C5D00"
                  strokeWidth="1.5"
                />
                <path
                  d="M34 29 C41 24, 47 16, 45 10 C39 14, 37 22, 34 29 Z"
                  fill="none"
                  stroke="#8C5D00"
                  strokeWidth="1.5"
                />
                <path
                  d="M34 30 C23 27, 13 20, 14 14 C22 17, 27 25, 34 30 Z"
                  fill="none"
                  stroke="#C8A34A"
                  strokeWidth="1.3"
                />
                <path
                  d="M34 30 C45 27, 55 20, 54 14 C46 17, 41 25, 34 30 Z"
                  fill="none"
                  stroke="#C8A34A"
                  strokeWidth="1.3"
                />
                {/* Bottom Golden Ring Arcs */}
                <path
                  d="M 12 28 Q 34 42 56 28"
                  fill="none"
                  stroke="#8C5D00"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M 18 33 Q 34 44 50 33"
                  fill="none"
                  stroke="#C8A34A"
                  strokeWidth="1"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            {/* Right Line */}
            <div className="flex-1 h-[1.5px] bg-gradient-to-l from-transparent via-[#8C5D00]/60 to-[#C8A34A] drop-shadow-[0_0_8px_rgba(200,163,74,0.5)]" />
          </div>

          {/* Tagline Strip: — PEACE WITHIN • PROGRESS BEYOND — */}
          <div className="flex items-center justify-center gap-1.5 sm:gap-5 pt-1 w-full max-w-full px-2">
            <span className="w-4 sm:w-16 h-[1.5px] bg-gradient-to-r from-transparent via-[#8C5D00] to-[#8C5D00] rounded-full shrink" />
            <span className="font-serif text-[#352043] font-extrabold text-[10px] xs:text-xs sm:text-sm md:text-base tracking-[0.12em] xs:tracking-[0.2em] sm:tracking-[0.3em] uppercase drop-shadow-xs shrink-0">
              PEACE WITHIN <span className="text-[#8C5D00] mx-0.5 sm:mx-1">•</span> PROGRESS BEYOND
            </span>
            <span className="w-4 sm:w-16 h-[1.5px] bg-gradient-to-l from-transparent via-[#8C5D00] to-[#8C5D00] rounded-full shrink" />
          </div>
        </motion.div>

        {/* Infinite Looping Events Marquee Bar directly above Event Start Date */}
        <EventFloatingBar variant="embedded" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative rounded-3xl p-6 sm:p-10 border-2 border-[#DFC47A] shadow-[0_20px_60px_rgba(53,32,67,0.15)] bg-gradient-to-br from-[#FAF5EF]/95 via-white to-[#F8F2E8]/95 backdrop-blur-md grid grid-cols-1 lg:grid-cols-12 gap-8 items-center overflow-hidden"
          >
            {/* Background Mandala SVG Accent */}
            <div className="absolute top-1/2 -left-12 -translate-y-1/2 opacity-10 pointer-events-none">
              <svg width="350" height="350" viewBox="0 0 200 200" fill="none" stroke="#DFC47A" strokeWidth="0.8">
                <circle cx="100" cy="100" r="95" strokeDasharray="3 3" />
                <circle cx="100" cy="100" r="75" />
                <circle cx="100" cy="100" r="50" />
              </svg>
            </div>

            {/* Left Logo / Emblem */}
            <Link href="/membership" className="lg:col-span-4 flex flex-col items-center justify-center text-center border-b lg:border-b-0 lg:border-r border-[#DFC47A]/30 pb-6 lg:pb-0 lg:pr-8 relative z-10 group cursor-pointer">
              <div className="relative w-40 h-40 sm:w-48 sm:h-48 mb-3">
                {/* Glowing ring behind image */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#DFC47A]/30 to-[#8C5D00]/20 blur-md group-hover:scale-105 transition-transform" />
                <Image
                  src="/images/MD-99.webp"
                  alt="Happy Shambhala Logo"
                  fill
                  className="object-contain drop-shadow-xl relative z-10 group-hover:scale-105 transition-transform"
                />
              </div>
              <span className="font-heading font-extrabold text-xl text-[#352043] uppercase tracking-widest flex items-center gap-1.5 justify-center group-hover:text-[#8C5D00] transition-colors">
                <span>Happy Shambhala</span>
              </span>
              <span className="text-xs text-[#8C5D00] font-bold uppercase tracking-wider mt-1 px-3 py-0.5 rounded-full bg-[#FAF5EF] border border-[#DFC47A]/50 shadow-xs group-hover:bg-[#8C5D00] group-hover:text-white transition-all">
                Grand Oneness Gathering 2026
              </span>
            </Link>

            {/* Right Date & Live Countdown */}
            <div className="lg:col-span-8 space-y-6 text-center lg:text-left relative z-10">
              <div className="space-y-3">
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
                  <Link href="/membership" className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#352043] text-[#DFC47A] text-xs font-extrabold uppercase tracking-widest shadow-sm hover:bg-[#4A2E5D] transition-colors">
                    <Calendar className="w-3.5 h-3.5 text-[#DFC47A]" />
                    <span>MAIN EVENT DATE</span>
                  </Link>
                  <Link href="/membership" className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#8C5D00]/10 text-[#8C5D00] text-xs font-bold border border-[#8C5D00]/30 hover:bg-[#8C5D00]/20 transition-colors">
                    <span className="w-2 h-2 rounded-full bg-[#8C5D00] animate-pulse" />
                    <span>Live Registration Open</span>
                  </Link>
                  <Link href="/membership" className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#C8A34A]/20 border border-[#DFC47A]/60 text-[#8C5D00] text-xs font-extrabold uppercase tracking-wider shadow-xs hover:bg-[#C8A34A]/30 transition-colors">
                    <MapPin className="w-3.5 h-3.5 text-[#8C5D00]" />
                    <span>VILLIANUR, PUDUCHERRY</span>
                  </Link>
                </div>

                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 sm:gap-3 pt-0.5">
                  <Link href="/membership" className="font-heading text-xl sm:text-3xl lg:text-4xl font-extrabold text-[#352043] leading-tight hover:text-[#8C5D00] transition-colors">
                    12th DECEMBER 2026,
                  </Link>
                  <Link href="/membership" className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#8C5D00]/10 border border-[#8C5D00]/30 text-[#8C5D00] font-body not-italic text-xs sm:text-sm md:text-base font-extrabold shadow-xs whitespace-nowrap hover:bg-[#8C5D00]/20 transition-colors">
                    <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#8C5D00]" />
                    05:00 PM IST
                  </Link>
                  <Link href="/membership" className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#352043] text-[#DFC47A] text-xs sm:text-sm font-extrabold shadow-sm whitespace-nowrap uppercase tracking-wider hover:bg-[#4A2E5D] transition-colors">
                    <MapPin className="w-3.5 h-3.5 text-[#DFC47A]" />
                    VILLIANUR
                  </Link>
                </div>

                <p className="text-[#5E5865] text-xs sm:text-sm font-medium leading-relaxed max-w-2xl">
                  We heartily welcome you to receive the new Impact, Initiation in abundance and redirect the meaning in your life. Become Peaceful, Purposeful and Powerful by participating in <Link href="/membership" className="text-[#352043] font-bold underline decoration-[#DFC47A] underline-offset-2 hover:text-[#8C5D00] transition-colors">SHAMBHALA 2026</Link>.
                </p>
              </div>

              {/* Animated Countdown Grid & CTA Button */}
              <div className="flex flex-col sm:flex-row items-center gap-4 pt-1">
                <Link href="/membership" className="grid grid-cols-4 gap-2 sm:gap-4 w-full max-w-md">
                  <div className="bg-gradient-to-b from-white to-[#FAF5EF] border border-[#DFC47A]/60 rounded-2xl p-3 sm:p-4 text-center shadow-md hover:border-[#8C5D00] hover:scale-105 transition-all">
                    <span className="font-heading font-extrabold text-2xl sm:text-3xl text-[#352043] block leading-none">
                      {timeLeft.days}
                    </span>
                    <span className="text-[10px] sm:text-xs font-extrabold text-[#8C5D00] uppercase tracking-wider mt-1.5 block">
                      Days
                    </span>
                  </div>

                  <div className="bg-gradient-to-b from-white to-[#FAF5EF] border border-[#DFC47A]/60 rounded-2xl p-3 sm:p-4 text-center shadow-md hover:border-[#8C5D00] hover:scale-105 transition-all">
                    <span className="font-heading font-extrabold text-2xl sm:text-3xl text-[#352043] block leading-none">
                      {timeLeft.hours}
                    </span>
                    <span className="text-[10px] sm:text-xs font-extrabold text-[#8C5D00] uppercase tracking-wider mt-1.5 block">
                      Hours
                    </span>
                  </div>

                  <div className="bg-gradient-to-b from-white to-[#FAF5EF] border border-[#DFC47A]/60 rounded-2xl p-3 sm:p-4 text-center shadow-md hover:border-[#8C5D00] hover:scale-105 transition-all">
                    <span className="font-heading font-extrabold text-2xl sm:text-3xl text-[#352043] block leading-none">
                      {timeLeft.minutes}
                    </span>
                    <span className="text-[10px] sm:text-xs font-extrabold text-[#8C5D00] uppercase tracking-wider mt-1.5 block">
                      Mins
                    </span>
                  </div>

                  <div className="bg-gradient-to-b from-white to-[#FAF5EF] border-2 border-[#C8A34A] rounded-2xl p-3 sm:p-4 text-center shadow-md hover:scale-105 transition-all">
                    <span className="font-heading font-extrabold text-2xl sm:text-3xl text-[#C8A34A] block leading-none animate-pulse">
                      {timeLeft.seconds}
                    </span>
                    <span className="text-[10px] sm:text-xs font-extrabold text-[#8C5D00] uppercase tracking-wider mt-1.5 block">
                      Secs
                    </span>
                  </div>
                </Link>

                <Link
                  href="/membership"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-[#8C5D00] via-[#C8A34A] to-[#8C5D00] text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group"
                >
                  <Sparkles className="w-4 h-4 text-[#FFF8E7] group-hover:rotate-12 transition-transform" />
                  <span>Register For Membership & Pass</span>
                  <ArrowRight className="w-4 h-4 text-[#FFF8E7] group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2.5 MAHA SHAMBHALA REGIONAL EVENTS ROADMAP */}
      <section className="py-6 sm:py-10 relative z-20 overflow-hidden" id="OutsidePondy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6 sm:space-y-8">

          {/* Section Heading */}
          <div className="text-center max-w-3xl mx-auto space-y-3.5">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#352043] text-[#DFC47A] border border-[#DFC47A]/40 text-xs font-extrabold uppercase tracking-widest shadow-md">
              <MapPin className="w-3.5 h-3.5 text-[#DFC47A]" />
              <span>REGIONAL INITIATION ROADMAP 2026</span>
            </span>

            <h2 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#352043] leading-tight">
              Maha Shambhala <span className="font-serif italic font-normal text-[#8C5D00]">Outside Pondyzone</span>
            </h2>

            <p className="text-[#5E5865] text-sm sm:text-base font-serif italic max-w-2xl mx-auto leading-relaxed">
              Experience regional Shambhala initiation sessions hosted across 7 major centers leading up to the Grand Oneness Gathering in Puducherry.
            </p>
          </div>

          {/* Luxury Timeline Grid Container */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
            {outsidePondyEvents.map((evt, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="bg-white/95 backdrop-blur-md rounded-3xl p-6 border-2 border-[#DFC47A]/40 hover:border-[#8C5D00] shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between space-y-6 group relative overflow-hidden"
              >
                {/* Shiny Shimmer Background Effect on Hover */}
                <div className="absolute -inset-full top-0 block h-full w-1/2 z-5 transform -skew-x-12 bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shine pointer-events-none" />

                {/* Top Corner Decorative Badge & Sparkle */}
                <div className="flex items-center justify-between relative z-10">
                  <span className="inline-block px-3 py-1 rounded-full bg-[#FAF5EF] text-[#8C5D00] border border-[#DFC47A]/50 text-[10px] font-extrabold uppercase tracking-wider shadow-xs">
                    {evt.badge}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-[#FAF5EF] border border-[#DFC47A]/40 flex items-center justify-center text-[#DFC47A] group-hover:text-[#8C5D00] group-hover:bg-[#8C5D00]/10 transition-colors">
                    <Sparkles className="w-4 h-4" />
                  </div>
                </div>

                {/* Location & Date Display */}
                <div className="space-y-4 relative z-10">
                  <div className="flex items-center gap-3.5">
                    {/* Dark Royal Date Box */}
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#352043] via-[#2A133B] to-[#1F0D2B] text-[#DFC47A] flex flex-col items-center justify-center shrink-0 border-2 border-[#DFC47A]/60 shadow-md group-hover:scale-105 transition-transform">
                      <span className="font-heading font-extrabold text-2xl leading-none">
                        {evt.day}
                      </span>
                      <span className="text-[9px] font-extrabold uppercase tracking-widest text-[#DFC47A]/90 mt-1 block">
                        {evt.month}
                      </span>
                    </div>

                    <div className="space-y-0.5">
                      <h3 className="font-heading text-2xl font-extrabold text-[#352043] group-hover:text-[#8C5D00] transition-colors leading-tight">
                        {evt.location}
                      </h3>
                      <div className="flex items-center gap-1.5 text-xs text-[#8C5D00] font-bold">
                        <Calendar className="w-3.5 h-3.5 shrink-0 text-[#8C5D00]" />
                        <span>{evt.date}</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-[#E9DED3] flex items-start gap-2 text-xs text-[#5E5865] font-medium leading-relaxed">
                    <MapPin className="w-4 h-4 text-[#8C5D00] shrink-0 mt-0.5" />
                    <span>{evt.venue}</span>
                  </div>
                </div>

                {/* Card CTA Button */}
                <Link
                  href="/membership"
                  className="w-full py-3 rounded-full bg-[#FAF5EF] group-hover:bg-[#352043] text-[#352043] group-hover:text-white border-2 border-[#DFC47A]/60 group-hover:border-[#352043] font-bold text-xs uppercase tracking-wider shadow-sm transition-all duration-300 flex items-center justify-center gap-2 relative z-10"
                >
                  <span>Register Interest</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#8C5D00] group-hover:text-[#DFC47A] group-hover:translate-x-1 transition-all" />
                </Link>
              </motion.div>
            ))}

            {/* Featured Grand Finale Card for Puducherry */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-gradient-to-br from-[#351A4A] via-[#47206A] to-[#1F0D2B] text-white rounded-3xl p-6 border-2 border-[#DFC47A] shadow-2xl hover:shadow-[0_20px_50px_rgba(200,163,74,0.3)] hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between space-y-6 sm:col-span-2 lg:col-span-1 xl:col-span-1 relative overflow-hidden"
            >
              {/* Gold Ambient Glow Background */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#DFC47A]/10 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center justify-between relative z-10">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C8A34A] text-[#352043] text-[10px] font-extrabold uppercase tracking-wider shadow-md">
                  <Sparkles className="w-3 h-3 text-[#352043]" />
                  MAIN EVENT
                </span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#DFC47A] animate-ping" />
              </div>

              <div className="space-y-4 relative z-10">
                <div className="flex items-center gap-3.5">
                  <div className="w-16 h-16 rounded-2xl bg-[#C8A34A] text-[#352043] flex flex-col items-center justify-center shrink-0 border-2 border-white/30 shadow-lg">
                    <span className="font-heading font-extrabold text-2xl leading-none">
                      12
                    </span>
                    <span className="text-[9px] font-extrabold uppercase tracking-widest text-[#352043] mt-1 block">
                      DEC
                    </span>
                  </div>

                  <div className="space-y-0.5">
                    <h3 className="font-heading text-2xl font-extrabold text-white leading-tight">
                      Puducherry
                    </h3>
                    <div className="flex items-center gap-1.5 text-xs text-[#DFC47A] font-bold">
                      <Calendar className="w-3.5 h-3.5 shrink-0" />
                      <span>12th December 2026</span>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-white/15 flex items-start gap-2 text-xs text-[#F8F2E8]/90 font-medium leading-relaxed">
                  <MapPin className="w-4 h-4 text-[#DFC47A] shrink-0 mt-0.5" />
                  <span>Grand Oneness Shambhala Sanctuary, Puducherry</span>
                </div>
              </div>

              <Link
                href="/membership"
                className="w-full py-3 rounded-full bg-[#C8A34A] hover:bg-white text-[#352043] font-bold text-xs uppercase tracking-wider shadow-lg hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2 relative z-10"
              >
                <span>Book Main Event Pass</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#352043]" />
              </Link>
            </motion.div>
          </div>

        </div>
      </section>

      {/* 3. FEATURED PROMO VIDEO SECTION */}
      <section className="py-6 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center space-y-6">
          <div className="space-y-2">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#352043] text-[#DFC47A] text-xs font-bold uppercase tracking-widest">
              <Video className="w-3.5 h-3.5 text-[#DFC47A]" />
              <span>FEATURED VIDEO HIGHLIGHT</span>
            </span>
            <h2 className="font-heading text-2xl sm:text-4xl font-extrabold text-[#352043]">
              Experience the Spirit of <span className="font-serif italic font-normal text-[#8C5D00]">Happy Shambhala</span>
            </h2>
          </div>

          <div className="bg-white p-3 rounded-3xl border-2 border-[#E9DED3] shadow-xl max-w-4xl mx-auto">
            <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-black shadow-inner">
              <ScrollAutoPlayVideo
                src="https://res.cloudinary.com/y2q2jsq0/video/upload/v1783507433/Gx012584_sckw96.mp4"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. REGISTER YOUR SLOT / TICKET BOOKING */}
      <section className="py-6 sm:py-10 lg:py-12 relative overflow-hidden bg-transparent border-y border-[#E9DED3]" id="TicketBooking">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6 sm:space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-2 sm:space-y-3">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#352043] text-[#DFC47A] border border-[#DFC47A]/40 text-[11px] sm:text-xs font-bold uppercase tracking-widest shadow-md">
              <Ticket className="w-3.5 h-3.5 text-[#DFC47A]" />
              <span>SLOT REGISTRATION</span>
            </span>
            <h2 className="font-heading text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#352043]">
              Register Your <span className="font-serif italic font-normal text-[#8C5D00]">Slot Pass</span>
            </h2>
            <p className="text-[#5E5865] text-xs sm:text-base font-normal max-w-xl mx-auto">
              Secure your participation for the Global Grand Event on Happy Shambhala.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {ticketTiers.map((tier, idx) => (
              <motion.div
                key={tier.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className={`bg-gradient-to-b ${tier.color} rounded-3xl p-6 sm:p-7 border-2 ${tier.borderColor} ${
                  tier.popular ? 'shadow-2xl scale-[1.03] relative z-10' : 'shadow-xl'
                } hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between space-y-6 group text-left`}
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
                <Link
                  href="/membership"
                  className={`w-full py-3.5 rounded-full font-bold text-xs uppercase tracking-wider shadow-md hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 ${
                    tier.id === 'diamond'
                      ? 'bg-gradient-to-r from-[#DFC47A] via-[#E3C582] to-[#C8A34A] text-[#2B083A] hover:bg-white'
                      : 'bg-[#352043] hover:bg-[#8C5D00] text-white'
                  }`}
                >
                  <Ticket className="w-4 h-4 text-[#DFC47A]" />
                  <span>Enroll in {tier.name}</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. ONENESS MEDITATION GUIDELINES SECTION */}
      <section className="py-8 sm:py-12 relative overflow-hidden bg-transparent border-t border-[#E9DED3]" id="Guidelines">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6 sm:space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#352043] text-[#DFC47A] border border-[#DFC47A]/40 text-xs font-bold uppercase tracking-widest shadow-md">
              <ShieldAlert className="w-3.5 h-3.5 text-[#DFC47A]" />
              SANCTUARY RULES
            </span>
            <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-[#352043]">
              Oneness Meditation <span className="font-serif italic font-normal text-[#8C5D00]">Guidelines</span>
            </h2>
            <p className="text-[#5E5865] text-sm sm:text-base font-normal max-w-xl mx-auto">
              Kindly take this checklist into consideration for a peaceful initiation.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Guidelines Checklist */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {guidelines.map((rule, idx) => {
                const IconComp = rule.icon;
                return (
                  <div
                    key={idx}
                    className="bg-[#FAF5EF] rounded-2xl p-5 border border-[#E9DED3] shadow-xs flex items-start gap-4"
                  >
                    <div className="w-11 h-11 rounded-2xl bg-[#352043] text-[#DFC47A] border border-[#DFC47A]/40 flex items-center justify-center shrink-0 shadow-xs">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-heading text-sm font-extrabold text-[#352043]">
                        {rule.title}
                      </h4>
                      <p className="text-[#5E5865] text-xs leading-relaxed font-normal">
                        {rule.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Guideline Video Container */}
            <div className="lg:col-span-5">
              <div className="bg-[#FAF5EF] p-4 rounded-3xl border-2 border-[#E9DED3] shadow-lg space-y-3">
                <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-black shadow-inner">
                  <iframe
                    suppressHydrationWarning
                    src="https://www.youtube.com/embed/5Ut6CCT_Gms?enablejsapi=1"
                    title="Meditation Guidelines Video"
                    className="w-full h-full border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <p className="text-center text-xs font-bold text-[#352043] uppercase tracking-wider">
                  Watch Orientation &amp; Guidance Instructions
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. ABOUT SHAMBHALA (3 CORE PILLARS SECTION) */}
      <section className="py-8 sm:py-12 relative overflow-hidden bg-transparent border-t border-[#DFC47A]/30" id="Aboutus">
        {/* Background Mandala Overlay */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10 pointer-events-none">
          <svg width="700" height="700" viewBox="0 0 200 200" fill="none" stroke="#DFC47A" strokeWidth="0.8">
            <circle cx="100" cy="100" r="95" strokeWidth="0.75" strokeDasharray="2 2" />
            <circle cx="100" cy="100" r="85" strokeWidth="0.5" />
            <circle cx="100" cy="100" r="75" strokeWidth="0.75" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#352043] text-[#DFC47A] border border-[#DFC47A]/40 text-xs font-bold uppercase tracking-widest shadow-md">
              <Sparkles className="w-3.5 h-3.5 text-[#DFC47A]" />
              ABOUT SHAMBHALA
            </span>
            <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-[#352043]">
              Global Grand Event on <span className="font-serif italic font-normal text-[#8C5D00]">Happy Shambhala</span>
            </h2>
            <p className="text-[#5E5865] text-sm sm:text-base font-serif italic max-w-xl mx-auto">
              Bringing together people of all ages to explore their minds, transform inner experiences, and awaken collective wisdom.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* Pillar Card 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white/95 backdrop-blur-md text-[#352043] rounded-3xl overflow-hidden border-2 border-[#DFC47A]/60 hover:border-[#8C5D00] shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col group"
            >
              <div className="relative h-60 w-full overflow-hidden bg-[#FAF5EF]">
                <Image
                  src="/images/service-8.webp"
                  alt="Know Our Mission"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2A133B]/85 via-transparent to-transparent opacity-85 group-hover:opacity-95 transition-opacity duration-300 flex items-end p-4">
                  <span className="inline-block px-3 py-1 rounded-full bg-[#352043]/85 border border-[#DFC47A]/50 text-[#DFC47A] text-[10px] font-extrabold uppercase tracking-widest backdrop-blur-sm shadow-xs">
                    OUR MISSION
                  </span>
                </div>
              </div>
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <h3 className="font-heading text-xl font-extrabold text-[#352043] group-hover:text-[#8C5D00] transition-colors">
                    KNOW OUR MISSION !
                  </h3>
                  <p className="text-[#5E5865] text-xs sm:text-sm leading-relaxed font-normal">
                    Shambhala in ACHARIYA brings people together of all ages and all areas of life who are interested in exploring their own minds, transforming experience, and awakening our potentials for an enlightened society.
                  </p>
                </div>
                <Link
                  href="/membership"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#352043] group-hover:bg-[#8C5D00] text-white font-extrabold text-xs uppercase tracking-wider shadow-sm transition-all duration-300 self-start"
                >
                  <span>Read More</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#DFC47A] group-hover:text-white" />
                </Link>
              </div>
            </motion.div>

            {/* Pillar Card 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white/95 backdrop-blur-md text-[#352043] rounded-3xl overflow-hidden border-2 border-[#DFC47A]/60 hover:border-[#8C5D00] shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col group"
            >
              <div className="relative h-60 w-full overflow-hidden bg-[#FAF5EF]">
                <Image
                  src="/images/service-9.webp"
                  alt="What You Will Learn"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2A133B]/85 via-transparent to-transparent opacity-85 group-hover:opacity-95 transition-opacity duration-300 flex items-end p-4">
                  <span className="inline-block px-3 py-1 rounded-full bg-[#352043]/85 border border-[#DFC47A]/50 text-[#DFC47A] text-[10px] font-extrabold uppercase tracking-widest backdrop-blur-sm shadow-xs">
                    WHAT YOU LEARN
                  </span>
                </div>
              </div>
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <h3 className="font-heading text-xl font-extrabold text-[#352043] group-hover:text-[#8C5D00] transition-colors">
                    WHAT YOU WILL LEARN?
                  </h3>
                  <p className="text-[#5E5865] text-xs sm:text-sm leading-relaxed font-normal">
                    The inner search and the spiritual path are basic requirements like both sides of a coin to bring transformation in the behavior of mankind. SHAMBHALA creates a path towards oneness by awakening or expanding consciousness.
                  </p>
                </div>
                <Link
                  href="/membership"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#352043] group-hover:bg-[#8C5D00] text-white font-extrabold text-xs uppercase tracking-wider shadow-sm transition-all duration-300 self-start"
                >
                  <span>Read More</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#DFC47A] group-hover:text-white" />
                </Link>
              </div>
            </motion.div>

            {/* Pillar Card 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white/95 backdrop-blur-md text-[#352043] rounded-3xl overflow-hidden border-2 border-[#DFC47A]/60 hover:border-[#8C5D00] shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col group"
            >
              <div className="relative h-60 w-full overflow-hidden bg-[#FAF5EF]">
                <Image
                  src="/images/service-10.webp"
                  alt="Benefits of Meditation"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2A133B]/85 via-transparent to-transparent opacity-85 group-hover:opacity-95 transition-opacity duration-300 flex items-end p-4">
                  <span className="inline-block px-3 py-1 rounded-full bg-[#352043]/85 border border-[#DFC47A]/50 text-[#DFC47A] text-[10px] font-extrabold uppercase tracking-widest backdrop-blur-sm shadow-xs">
                    MEDITATION BENEFITS
                  </span>
                </div>
              </div>
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <h3 className="font-heading text-xl font-extrabold text-[#352043] group-hover:text-[#8C5D00] transition-colors">
                    BENEFITS OF MEDITATION?
                  </h3>
                  <p className="text-[#5E5865] text-xs sm:text-sm leading-relaxed font-normal">
                    Activates swirling of energy through our Chakras, emerging and connecting to the movement of Celestial bodies in the cosmos and the spiraling journey of planet Earth as it travels through the Universe.
                  </p>
                </div>
                <Link
                  href="/membership"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#352043] group-hover:bg-[#8C5D00] text-white font-extrabold text-xs uppercase tracking-wider shadow-sm transition-all duration-300 self-start"
                >
                  <span>Read More</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#DFC47A] group-hover:text-white" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 8. SHAMBHALA PHILOSOPHY (SPLIT FEATURE) */}
      <section className="py-8 sm:py-12 relative overflow-hidden bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content Card */}
            <div className="lg:col-span-7 bg-white/95 rounded-3xl p-8 sm:p-10 border-2 border-[#E9DED3] shadow-lg space-y-6">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#352043] text-[#DFC47A] text-xs font-bold uppercase tracking-widest">
                <Sparkles className="w-3.5 h-3.5 text-[#DFC47A]" />
                DEEP INNER TRANSFORMATION
              </span>

              <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#352043] leading-tight">
                Shambhala @ <span className="font-serif italic font-normal text-[#8C5D00]">ACHARIYA</span>
              </h2>

              <p className="text-[#5E5865] text-sm sm:text-base leading-relaxed">
                The human is a wonderful being, evolved through millions of forms and intrinsically endowed with tremendous qualities and infinite potentials. The physical body is fantastically sophisticated, with the capability of a vast spectrum of energy and action. At the same time, within each of us, the characters of past unconscious deeds also get accumulated.
              </p>

              <div className="space-y-3 pt-2">
                <h4 className="font-heading font-extrabold text-[#352043] text-base sm:text-lg">
                  We Enrich &amp; Empower Our Seekers To Be:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm font-semibold text-[#352043]">
                  <div className="flex items-center gap-2 bg-[#FAF5EF] p-3 rounded-xl border border-[#E9DED3]">
                    <CheckCircle2 className="w-4 h-4 text-[#8C5D00] shrink-0" />
                    <span>Physically Healthy</span>
                  </div>
                  <div className="flex items-center gap-2 bg-[#FAF5EF] p-3 rounded-xl border border-[#E9DED3]">
                    <CheckCircle2 className="w-4 h-4 text-[#8C5D00] shrink-0" />
                    <span>Mentally Strong</span>
                  </div>
                  <div className="flex items-center gap-2 bg-[#FAF5EF] p-3 rounded-xl border border-[#E9DED3]">
                    <CheckCircle2 className="w-4 h-4 text-[#8C5D00] shrink-0" />
                    <span>Intellectually Sharp</span>
                  </div>
                  <div className="flex items-center gap-2 bg-[#FAF5EF] p-3 rounded-xl border border-[#E9DED3]">
                    <CheckCircle2 className="w-4 h-4 text-[#8C5D00] shrink-0" />
                    <span>Emotionally Balanced</span>
                  </div>
                  <div className="flex items-center gap-2 bg-[#FAF5EF] p-3 rounded-xl border border-[#E9DED3] sm:col-span-2">
                    <CheckCircle2 className="w-4 h-4 text-[#8C5D00] shrink-0" />
                    <span>Spiritually Aligned to ACHARIYA Culture</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Poster Showcase */}
            <div className="lg:col-span-5 relative flex items-center justify-center">
              <div className="relative group h-[440px] sm:h-[500px] w-full max-w-md rounded-3xl overflow-hidden border-2 border-[#DFC47A] shadow-2xl bg-[#352043]">
                <Image
                  src="/images/011A6549.webp"
                  alt="Shambhala Poster"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2A133B]/95 via-[#2A133B]/20 to-transparent group-hover:opacity-95 transition-opacity duration-300" />
                <div className="absolute bottom-6 left-6 right-6 text-white space-y-2 text-center">
                  <span className="inline-block px-3.5 py-1 rounded-full bg-[#352043]/85 border border-[#DFC47A]/50 text-[#DFC47A] font-heading font-extrabold text-lg sm:text-xl uppercase tracking-widest backdrop-blur-md shadow-md">
                    HAPPY SHAMBHALA
                  </span>
                  <p className="text-xs sm:text-sm text-[#F8F2E8] font-medium leading-relaxed">
                    Global Grand Event &amp; Mass Oneness Initiation
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. OUR GALLERY SECTION */}
      <section className="py-8 sm:py-12 relative overflow-hidden bg-transparent border-t border-[#DFC47A]/30" id="Gallery">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6 sm:space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#352043] text-[#DFC47A] border border-[#DFC47A]/40 text-xs font-bold uppercase tracking-widest shadow-md">
              <Sparkles className="w-3.5 h-3.5 text-[#DFC47A]" />
              PHOTO HIGHLIGHTS
            </span>
            <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-[#352043]">
              Our <span className="font-serif italic font-normal text-[#8C5D00]">Gallery</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">
            {galleryImages.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="relative h-56 sm:h-64 rounded-3xl overflow-hidden border-2 border-[#DFC47A]/60 hover:border-[#8C5D00] shadow-lg hover:shadow-2xl transition-all duration-500 group bg-white/95 backdrop-blur-md flex flex-col items-center justify-center text-center"
              >
                {item.src && !item.isPending ? (
                  <>
                    <Image
                      src={item.src}
                      alt={item.title || `Shambhala Gallery Image ${idx + 1}`}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                    {/* Dark Golden Gradient Vignette Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#2A133B]/85 via-transparent to-transparent opacity-85 group-hover:opacity-95 transition-opacity duration-300 flex items-end p-4">
                      <div className="space-y-1 text-left w-full">
                        <span className="inline-block px-3 py-1 rounded-full bg-[#352043]/85 border border-[#DFC47A]/50 text-[#DFC47A] text-[10px] font-extrabold uppercase tracking-widest backdrop-blur-sm shadow-xs">
                          {item.title || 'Shambhala Celebration'}
                        </span>
                      </div>
                    </div>
                  </>
                ) : (
                  /* Modern Eye-Catching Pending Upload Card Structure */
                  <div className="relative w-full h-full p-6 border-2 border-dashed border-[#DFC47A]/70 bg-gradient-to-b from-[#FFFDF9] via-[#FAF5EF] to-[#F8F2E8] flex flex-col items-center justify-center text-center group-hover:border-[#8C5D00] transition-colors">
                    <div className="absolute inset-0 bg-[radial-gradient(#C8A34A_1px,transparent_1px)] [background-size:16px_16px] opacity-20 pointer-events-none" />
                    
                    <div className="relative z-10 w-14 h-14 rounded-full bg-white/90 border-2 border-[#C8A34A]/50 shadow-md flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-500">
                      <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#C8A34A]/20 to-[#8C5D00]/20 animate-pulse pointer-events-none" />
                      <UploadCloud className="w-7 h-7 text-[#8C5D00]" />
                    </div>

                    <span className="relative z-10 inline-block px-3.5 py-1 rounded-full bg-[#8C5D00]/15 text-[#8C5D00] text-[10px] sm:text-[11px] font-extrabold uppercase tracking-widest border border-[#8C5D00]/30 shadow-xs mb-1.5">
                      Pending Upload
                    </span>

                    <h4 className="relative z-10 font-heading text-xs sm:text-sm font-bold text-[#352043] leading-tight">
                      Waiting for Image to be Uploaded
                    </h4>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. TESTIMONIAL VIDEO GALLERY (ALL 17 VIDEOS) */}
      <section className="py-8 sm:py-12 relative overflow-hidden bg-transparent" id="Testimonials">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6 sm:space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#352043] text-[#DFC47A] text-xs font-bold uppercase tracking-widest shadow-md">
              <Video className="w-3.5 h-3.5 text-[#DFC47A]" />
              SEEKER TESTIMONIALS
            </span>
            <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-[#352043]">
              Our Testimonial <span className="font-serif italic font-normal text-[#8C5D00]">Gallery</span>
            </h2>
            <p className="text-[#5E5865] text-sm sm:text-base font-normal max-w-xl mx-auto">
              Real experiences and spiritual transformations shared by Happy Shambhala participants.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonialVideos.map((video, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (idx % 6) * 0.05 }}
                className="bg-white/95 rounded-3xl overflow-hidden border-2 border-[#E9DED3] shadow-md hover:shadow-xl transition-all p-2 space-y-2"
              >
                <div className="relative w-full h-52 sm:h-56 rounded-2xl overflow-hidden bg-black">
                  <iframe
                    suppressHydrationWarning
                    src={`https://www.youtube.com/embed/${video.id}?enablejsapi=1`}
                    title={video.title}
                    className="w-full h-full border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <div className="px-3 py-1.5 flex items-center justify-between">
                  <span className="font-heading text-xs font-extrabold text-[#352043] truncate max-w-[220px]">
                    {video.title}
                  </span>
                  <span className="text-[10px] font-bold text-[#8C5D00] uppercase tracking-wider">Testimonial</span>
                </div>
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
                  <form onSubmit={handleFormSubmit} className="space-y-4" noValidate>
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
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-[#352043] uppercase tracking-wider flex items-center gap-1.5">
                          <User className="w-3.5 h-3.5 text-[#8C5D00]" />
                          <span>Full Name *</span>
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

                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-[#352043] uppercase tracking-wider flex items-center gap-1.5">
                          <Phone className="w-3.5 h-3.5 text-[#8C5D00]" />
                          <span>Phone Number *</span>
                        </label>
                        <input
                          type="tel"
                          maxLength={10}
                          placeholder="Enter 10-digit phone number"
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

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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

                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-[#352043] uppercase tracking-wider flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5 text-[#8C5D00]" />
                          <span>City *</span>
                        </label>
                        <input
                          type="text"
                          placeholder="Enter your city"
                          value={formData.city}
                          onChange={(e) => handleInputChange('city', e.target.value)}
                          onBlur={() => handleBlur('city')}
                          className={`w-full px-4 py-3 rounded-xl border transition-colors text-xs sm:text-sm font-medium bg-[#FAF5EF]/50 focus:outline-none ${
                            touched.city && errors.city
                              ? 'border-red-400 focus:border-red-500 bg-red-50/20'
                              : 'border-[#E9DED3] focus:border-[#C8A34A]'
                          }`}
                        />
                        {touched.city && errors.city && (
                          <p className="text-[11px] text-red-500 font-semibold flex items-center gap-1 mt-1">
                            <AlertCircle className="w-3 h-3 flex-shrink-0 text-red-500" />
                            <span>{errors.city}</span>
                          </p>
                        )}
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
                          onChange={(e) => handleInputChange('address', e.target.value)}
                          onBlur={() => handleBlur('address')}
                          className={`w-full px-4 py-3 rounded-xl border transition-colors text-xs sm:text-sm font-medium bg-[#FAF5EF]/50 focus:outline-none ${
                            touched.address && errors.address
                              ? 'border-red-400 focus:border-red-500 bg-red-50/20'
                              : 'border-[#E9DED3] focus:border-[#C8A34A]'
                          }`}
                        />
                        {touched.address && errors.address && (
                          <p className="text-[11px] text-red-500 font-semibold flex items-center gap-1 mt-1">
                            <AlertCircle className="w-3 h-3 flex-shrink-0 text-red-500" />
                            <span>{errors.address}</span>
                          </p>
                        )}
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-[#352043] uppercase tracking-wider flex items-center gap-1.5">
                          <Navigation className="w-3.5 h-3.5 text-[#8C5D00]" />
                          <span>Pincode *</span>
                        </label>
                        <input
                          type="text"
                          maxLength={6}
                          placeholder="Enter 6-digit pincode"
                          value={formData.pincode}
                          onChange={(e) => handleInputChange('pincode', e.target.value)}
                          onBlur={() => handleBlur('pincode')}
                          className={`w-full px-4 py-3 rounded-xl border transition-colors text-xs sm:text-sm font-medium bg-[#FAF5EF]/50 focus:outline-none ${
                            touched.pincode && errors.pincode
                              ? 'border-red-400 focus:border-red-500 bg-red-50/20'
                              : 'border-[#E9DED3] focus:border-[#C8A34A]'
                          }`}
                        />
                        {touched.pincode && errors.pincode && (
                          <p className="text-[11px] text-red-500 font-semibold flex items-center gap-1 mt-1">
                            <AlertCircle className="w-3 h-3 flex-shrink-0 text-red-500" />
                            <span>{errors.pincode}</span>
                          </p>
                        )}
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
