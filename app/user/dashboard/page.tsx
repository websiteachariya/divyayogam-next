'use client';

export const dynamic = 'force-dynamic';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import {
  User as UserIcon,
  Crown,
  BookOpen,
  ShoppingBag,
  Award,
  Lock,
  Unlock,
  CheckCircle2,
  Clock,
  Sparkles,
  LogOut,
  ChevronRight,
  ShieldCheck,
  Heart,
  Gift
} from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function UserDashboardPage() {
  const router = useRouter();
  const [userData, setUserData] = useState<any>(null);
  const [localMembership, setLocalMembership] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchUserData();
    if (typeof window !== 'undefined') {
      try {
        const stored = localStorage.getItem('divyaYogamMemberships');
        if (stored) {
          const parsed = JSON.parse(stored);
          if (Array.isArray(parsed) && parsed.length > 0) {
            const userMem = parsed.find((m: any) => m.status === 'SUCCESS');
            if (userMem) setLocalMembership(userMem);
          }
        }
      } catch (e) {}
    }
  }, []);

  const fetchUserData = async () => {
    try {
      const res = await fetch(`/api/auth/me?t=${Date.now()}`, { cache: 'no-store' });
      const data = await res.json();

      if (!res.ok || !data.authenticated) {
        router.push('/login');
        return;
      }

      setUserData(data.user);
    } catch (err: any) {
      setError(err.message || 'Failed to load user profile');
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    await fetch('/api/auth/logout', { method: 'POST' });
    router.push('/login');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-transparent flex items-center justify-center relative overflow-x-hidden p-4">
        {/* Background Image Overlay (con-6.webp matching Wellness & Contact Page) */}
        <div
          className="absolute inset-0 opacity-85 pointer-events-none bg-cover bg-center bg-no-repeat bg-fixed z-0"
          style={{
            backgroundImage: "linear-gradient(rgba(250, 245, 239, 0.5), rgba(250, 245, 239, 0.65)), url('/images/con-6.webp')",
          }}
        />
        <div className="relative z-10 bg-white/95 backdrop-blur-2xl rounded-3xl border-2 border-[#DFC47A] p-8 sm:p-10 shadow-2xl text-center space-y-4 max-w-sm w-full">
          <div className="w-14 h-14 border-4 border-[#DFC47A] border-t-[#352043] rounded-full animate-spin mx-auto shadow-md" />
          <div>
            <p className="text-base sm:text-lg font-extrabold font-heading text-[#352043] uppercase tracking-wider">
              Loading your sacred dashboard...
            </p>
            <p className="text-xs font-extrabold text-[#8C5D00] mt-1">
              Connecting to Divya Yogam Portal
            </p>
          </div>
        </div>
      </div>
    );
  }

  const activeMembership = userData?.memberships?.[0] || localMembership;
  const enrollments = userData?.enrollments || [];
  const orders = userData?.orders || [];
  const maalaPurchases = (userData?.maalaPurchases || []).filter((p: any) => p.status === 'SUCCESS');
  const contributions = (userData?.contributions || []).filter((c: any) => c.status === 'SUCCESS');

  // Compute discount percentage from membership
  const memberDiscountPercent = activeMembership
    ? (activeMembership.level === 'DIAMOND' ? 20 : activeMembership.level === 'PLATINUM' ? 10 : activeMembership.level === 'GOLD' ? 5 : 0)
    : 0;

  // Default class progression list if not in DB yet
  const defaultClasses = [
    { slug: 'ayangara', name: 'Ayangara', orderSequence: 1, price: 2500 },
    { slug: 'pandava', name: 'Pandava', orderSequence: 2, price: 5000 },
    { slug: 'amirtha', name: 'Amirtha', orderSequence: 3, price: 7500 },
    { slug: 'anandha', name: 'Anandha', orderSequence: 4, price: 10000 },
    { slug: 'amoha', name: 'Amoha', orderSequence: 5, price: 12500 },
    { slug: 'advaitha', name: 'Advaitha', orderSequence: 6, price: 15000 },
  ];

  // Helper to resolve class enrollment status
  const getClassStatus = (slug: string, seq: number) => {
    const found = enrollments.find((e: any) => e.classItem?.slug === slug);
    if (found) return found.status;

    if (seq === 1) return 'AVAILABLE';

    // If previous class is completed
    const prevClassSlug = defaultClasses[seq - 2]?.slug;
    const prevEnrollment = enrollments.find((e: any) => e.classItem?.slug === prevClassSlug);
    if (prevEnrollment && prevEnrollment.status === 'COMPLETED') {
      return 'AVAILABLE';
    }

    return 'LOCKED';
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'COMPLETED':
        return (
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold border border-emerald-300">
            <CheckCircle2 className="w-3.5 h-3.5" /> COMPLETED
          </span>
        );
      case 'IN_PROGRESS':
        return (
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold border border-blue-300">
            <Clock className="w-3.5 h-3.5" /> IN PROGRESS
          </span>
        );
      case 'PURCHASED':
        return (
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-bold border border-amber-300">
            <Award className="w-3.5 h-3.5" /> PURCHASED
          </span>
        );
      case 'AVAILABLE':
        return (
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-purple-100 text-purple-800 text-xs font-bold border border-purple-300">
            <Unlock className="w-3.5 h-3.5 text-purple-600" /> UNLOCKED / AVAILABLE
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-gray-100 text-gray-600 text-xs font-bold border border-gray-300">
            <Lock className="w-3.5 h-3.5" /> LOCKED
          </span>
        );
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

      <main className="pt-32 sm:pt-36 lg:pt-40 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full flex-1 space-y-6 sm:space-y-8">
        {/* Welcome Top Banner */}
        <div className="bg-gradient-to-r from-[#47206A] via-[#3B104E] to-[#20052C] rounded-3xl border-2 border-[#DFC47A] p-6 sm:p-8 text-white shadow-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 relative overflow-hidden">
          <div className="relative z-10 space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#DFC47A]/20 text-[#DFC47A] text-xs font-bold border border-[#DFC47A]/40 uppercase tracking-wider mb-1">
              <Sparkles className="w-3.5 h-3.5" /> Divya Yogam Sacred Portal
            </div>
            
            <div className="flex flex-wrap items-center gap-3">
              <h1 className="text-2xl sm:text-4xl font-extrabold font-heading text-white tracking-wide">
                Welcome back, {userData?.name}!
              </h1>

              {/* Membership Tier Badge (Platinum, Gold, Diamond, or Non-Contributor) */}
              {activeMembership ? (
                <span
                  className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider shadow-lg border ${
                    activeMembership.level === 'DIAMOND'
                      ? 'bg-gradient-to-r from-[#47206A] via-[#6B2D8C] to-[#47206A] text-[#DFC47A] border-[#DFC47A]'
                      : activeMembership.level === 'PLATINUM'
                      ? 'bg-gradient-to-r from-[#3A3D40] via-[#565B60] to-[#2E3134] text-white border-slate-300'
                      : 'bg-gradient-to-r from-[#8C5D00] via-[#C8A34A] to-[#8C5D00] text-white border-[#DFC47A]'
                  }`}
                >
                  <Crown className="w-4 h-4 text-amber-300 animate-pulse" />
                  {activeMembership.level} Contributor
                </span>
              ) : (
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-wider bg-[#DFC47A]/15 text-[#DFC47A] border border-[#DFC47A]/40 backdrop-blur-sm shadow-sm">
                  <UserIcon className="w-3.5 h-3.5" />
                  Non-Contributor
                </span>
              )}
            </div>

            <p className="text-xs sm:text-sm text-[#DFC47A] font-medium">
              {userData?.email} • {userData?.mobile}
            </p>
          </div>

          <div className="flex items-center gap-3 relative z-10">
            <Link
              href="/user/profile"
              className="px-4 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider border border-white/20 transition-all flex items-center gap-1.5"
            >
              <UserIcon className="w-4 h-4 text-[#DFC47A]" /> Profile Details
            </Link>
            <button
              onClick={handleLogout}
              className="px-4 py-2.5 rounded-full bg-red-600/80 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider shadow-md transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <LogOut className="w-4 h-4" /> Logout
            </button>
          </div>
        </div>

        {/* Top Grid: User Profile Summary & Active Membership */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* User Profile Info Card */}
          <div className="bg-white/90 backdrop-blur-xl rounded-3xl border-2 border-[#DFC47A] p-6 shadow-xl space-y-4">
            <div className="flex items-center justify-between border-b border-[#E9DED3] pb-3">
              <h2 className="text-lg font-extrabold font-heading text-[#47206A] flex items-center gap-2">
                <UserIcon className="w-5 h-5 text-[#8C5D00]" /> User Profile
              </h2>
              <span className="text-xs font-bold text-[#8C5D00] uppercase tracking-wider">
                ID: {userData?.id.substring(0, 8)}
              </span>
            </div>

            <div className="space-y-2.5 text-xs sm:text-sm">
              <div className="flex justify-between py-1 border-b border-gray-100">
                <span className="text-gray-500 font-medium">Name:</span>
                <span className="font-bold text-[#47206A]">{userData?.name}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-gray-100">
                <span className="text-gray-500 font-medium">Contribution Tier:</span>
                {activeMembership ? (
                  <span className="font-extrabold text-[#8C5D00] flex items-center gap-1">
                    <Crown className="w-3.5 h-3.5 text-[#C8A34A]" /> {activeMembership.level} Contributor
                  </span>
                ) : (
                  <span className="font-bold text-amber-800 bg-amber-50 px-2 py-0.5 rounded-full text-xs border border-amber-200">
                    Non-Contributor
                  </span>
                )}
              </div>
              <div className="flex justify-between py-1 border-b border-gray-100">
                <span className="text-gray-500 font-medium">Age & Gender:</span>
                <span className="font-bold text-[#47206A]">{userData?.age} Yrs • {userData?.gender}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-gray-100">
                <span className="text-gray-500 font-medium">Occupation:</span>
                <span className="font-bold text-[#47206A]">{userData?.occupation}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-gray-100">
                <span className="text-gray-500 font-medium">Branch / Campus:</span>
                <span className="font-bold text-[#47206A]">{userData?.branchCampus || 'N/A'}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-gray-100">
                <span className="text-gray-500 font-medium">Organisation:</span>
                <span className="font-bold text-[#47206A]">{userData?.organisation}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-gray-100">
                <span className="text-gray-500 font-medium">Mobile:</span>
                <span className="font-bold text-[#47206A]">{userData?.mobile}</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-gray-500 font-medium">Email:</span>
                <span className="font-bold text-[#47206A] truncate max-w-[180px]">{userData?.email}</span>
              </div>
            </div>
          </div>

          {/* Active Membership Status Card */}
          <div className="bg-white/90 backdrop-blur-xl rounded-3xl border-2 border-[#DFC47A] p-6 shadow-xl space-y-4 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-[#E9DED3] pb-3">
                <h2 className="text-lg font-extrabold font-heading text-[#47206A] flex items-center gap-2">
                  <Crown className="w-5 h-5 text-[#C8A34A]" /> Contribution Level
                </h2>
                {activeMembership ? (
                  <span className="px-3 py-1 rounded-full bg-[#47206A] text-[#DFC47A] text-xs font-bold">
                    ACTIVE TIER
                  </span>
                ) : (
                  <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-extrabold border border-amber-300">
                    NON-CONTRIBUTOR
                  </span>
                )}
              </div>

              {activeMembership ? (
                <div className="mt-4 space-y-3">
                  <div className="p-4 rounded-2xl text-white flex items-center justify-between" style={{
                    background: activeMembership.level === 'DIAMOND'
                      ? 'linear-gradient(135deg, #47206A 0%, #2B083A 100%)'
                      : activeMembership.level === 'PLATINUM'
                      ? 'linear-gradient(135deg, #4A4A5A 0%, #6B6B7B 100%)'
                      : 'linear-gradient(135deg, #8C5D00 0%, #C8A34A 100%)'
                  }}>
                    <div>
                      <span className="text-xs uppercase font-bold tracking-wider" style={{ color: activeMembership.level === 'DIAMOND' ? '#DFC47A' : activeMembership.level === 'PLATINUM' ? '#E8E8E8' : '#FFF8ED' }}>Active Tier</span>
                      <h3 className="text-2xl font-extrabold font-heading text-white flex items-center gap-2">
                        <Crown className="w-6 h-6" style={{ color: activeMembership.level === 'DIAMOND' ? '#DFC47A' : activeMembership.level === 'PLATINUM' ? '#E8E8E8' : '#FFD700' }} />
                        {activeMembership.level}
                      </h3>
                    </div>
                  </div>

                  <div className="space-y-1.5 text-xs text-[#47206A]">
                    <div className="flex justify-between py-1 border-b border-gray-100">
                      <span className="text-gray-500 font-medium">Sacred Contribution:</span>
                      <span className="font-bold text-[#47206A]">₹{activeMembership.price}</span>
                    </div>
                    <div className="flex justify-between py-1">
                      <span className="text-gray-500 font-medium">Date:</span>
                      <span className="font-bold text-[#47206A]">{new Date(activeMembership.purchaseDate).toLocaleDateString()}</span>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="mt-4 text-center py-4 space-y-3">
                  <div className="w-12 h-12 bg-amber-50 rounded-full flex items-center justify-center mx-auto border border-[#DFC47A]/60 shadow-sm">
                    <Crown className="w-6 h-6 text-[#C8A34A]" />
                  </div>
                  <div className="p-3.5 rounded-2xl bg-[#FAF7F2] border border-[#E9DED3]">
                    <p className="text-xs sm:text-sm text-[#47206A] font-extrabold leading-relaxed">
                      Status: <span className="text-amber-800 font-black">Non-Contributor</span>. Support Gold, Platinum, or Diamond to unlock sacred privileges up to 50%!
                    </p>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/contributorship"
              className="w-full py-3 rounded-full bg-[#47206A] hover:bg-[#C8A34A] text-white hover:text-[#47206A] font-bold text-xs uppercase tracking-wider text-center transition-all duration-300 block shadow-md"
            >
              {activeMembership ? 'View Contribution Tiers' : 'Explore Contribution Tiers'}
            </Link>
          </div>

          {/* Quick Summary of Offerings */}
          <div className="bg-white/90 backdrop-blur-xl rounded-3xl border-2 border-[#DFC47A] p-6 shadow-xl space-y-4 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-[#E9DED3] pb-3">
                <h2 className="text-lg font-extrabold font-heading text-[#47206A] flex items-center gap-2">
                  <ShoppingBag className="w-5 h-5 text-[#8C5D00]" /> Sacred Offerings & Support
                </h2>
              </div>

              <div className="mt-4 space-y-3">
                {/* Spiral Meditation Maala Card */}
                <div className="p-3.5 rounded-2xl bg-[#FAF7F2] border border-[#E9DED3] space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Sparkles className="w-5 h-5 text-[#8C5D00]" />
                      <div>
                        <h4 className="text-xs font-bold text-[#47206A]">Spiral Meditation Maala</h4>
                        <p className="text-[11px] text-[#8C5D00]">Validity: Aug 15 – Dec 1</p>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-[#47206A]">
                      {maalaPurchases.length > 0 ? `${maalaPurchases.length} Contributed` : 'Not Contributed'}
                    </span>
                  </div>

                  {maalaPurchases.length > 0 && (
                    <div className="pt-2 border-t border-[#E9DED3]/60 text-[11px] space-y-1 text-[#47206A]">
                      <div className="flex justify-between font-medium">
                        <span className="text-gray-500">Last Offering:</span>
                        <span className="font-bold text-emerald-700">
                          ₹{maalaPurchases[0].amount} • {new Date(maalaPurchases[0].createdAt || maalaPurchases[0].purchaseDate).toLocaleDateString()}
                        </span>
                      </div>
                      {maalaPurchases[0].participantName && (
                        <div className="flex justify-between font-medium">
                          <span className="text-gray-500">Participant:</span>
                          <span className="font-bold text-[#8C5D00]">{maalaPurchases[0].participantName}</span>
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* Spiral Meditation Contribution Card */}
                <div className="p-3.5 rounded-2xl bg-[#FAF7F2] border border-[#E9DED3] space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Heart className="w-5 h-5 text-red-500" />
                      <div>
                        <h4 className="text-xs font-bold text-[#47206A]">Spiral Meditation Contribution</h4>
                        <p className="text-[11px] text-[#8C5D00]">Sacred Foundation Support (Aug 15 – Dec 21)</p>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-[#47206A]">
                      {contributions.length > 0 ? `${contributions.length} Made` : 'None'}
                    </span>
                  </div>

                  {contributions.length > 0 && (
                    <div className="pt-2 border-t border-[#E9DED3]/60 text-[11px] space-y-1 text-[#47206A]">
                      <div className="flex justify-between font-medium">
                        <span className="text-gray-500">Last Payment:</span>
                        <span className="font-bold text-emerald-700">
                          ₹{contributions[0].amount.toLocaleString()} • {new Date(contributions[0].createdAt).toLocaleDateString()}
                        </span>
                      </div>
                      <div className="flex justify-between font-medium">
                        <span className="text-gray-500">Type:</span>
                        <span className="font-bold text-[#8C5D00]">
                          {contributions[0].isCustom ? 'Custom Contribution' : 'Standard Preset'}
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-2">
              <Link
                href="/maala"
                className="py-2.5 px-3 rounded-full bg-[#FAF7F2] hover:bg-[#47206A] text-[#47206A] hover:text-white border border-[#DFC47A] font-bold text-xs uppercase tracking-wider text-center transition-all"
              >
                Maala
              </Link>
              <Link
                href="/shambala-contribution"
                className="py-2.5 px-3 rounded-full bg-[#FAF7F2] hover:bg-[#47206A] text-[#47206A] hover:text-white border border-[#DFC47A] font-bold text-xs uppercase tracking-wider text-center transition-all"
              >
                Contribution
              </Link>
            </div>
          </div>
        </div>

        {/* 6-Level Class Progression Interactive Tracker */}
        <div className="bg-white/90 backdrop-blur-xl rounded-3xl border-2 border-[#DFC47A] p-6 sm:p-8 shadow-xl space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-[#E9DED3] pb-4">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#8C5D00] uppercase tracking-wider mb-1">
                <BookOpen className="w-4 h-4" /> Sequential Learning Path
              </div>
              <h2 className="text-2xl font-extrabold font-heading text-[#47206A]">
                Divya Yogam Classes Progression
              </h2>
            </div>
            <Link
              href="/classes"
              className="px-5 py-2.5 rounded-full bg-[#47206A] hover:bg-[#C8A34A] text-white hover:text-[#47206A] font-bold text-xs uppercase tracking-wider shadow-md transition-all flex items-center gap-1.5"
            >
              <span>Explore & Unlock Classes</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <p className="text-xs sm:text-sm text-[#8C5D00]">
            Classes must be taken in strict sequential order: Ayangara → Pandava → Amirtha → Anandha → Amoha → Advaitha. Complete each class to unlock the next level.
          </p>

          {/* All-in-One Master Pass Card */}
          <div className="w-full rounded-2xl bg-gradient-to-r from-[#2B083A] via-[#47206A] to-[#20052C] border-2 border-[#DFC47A] p-5 text-white shadow-lg flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="space-y-1 text-center sm:text-left">
              <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#DFC47A] text-[#2B083A] text-[10px] font-extrabold uppercase tracking-wider">
                Full 6-Class Pass
              </span>
              <h3 className="text-lg font-extrabold text-[#DFC47A] font-heading">
                All-in-One Master Bundle (Original ₹52,500)
              </h3>
              <p className="text-xs text-gray-300">
                {memberDiscountPercent > 0
                  ? `Active ${activeMembership?.level} Contributor Privilege (${memberDiscountPercent}% Sacred Benefit Applied)`
                  : 'Enroll in all 6 sequential classes at once without waiting.'}
              </p>
            </div>

            <div className="flex items-center gap-4 shrink-0">
              <div className="text-right">
                {memberDiscountPercent > 0 && (
                  <span className="text-xs line-through text-gray-400 font-bold block">
                    ₹52,500
                  </span>
                )}
                <span className="text-xl font-extrabold text-[#DFC47A] font-heading">
                  ₹{(52500 - Math.round((52500 * memberDiscountPercent) / 100)).toLocaleString()}
                </span>
              </div>
              <Link
                href="/classes"
                className="px-4 py-2 rounded-full bg-[#DFC47A] hover:bg-white text-[#2B083A] font-extrabold text-xs uppercase tracking-wider transition-all shadow-md"
              >
                Enroll All-in-One
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {defaultClasses.map((cls) => {
              const status = getClassStatus(cls.slug, cls.orderSequence);
              return (
                <div
                  key={cls.slug}
                  className={`p-5 rounded-2xl border-2 transition-all relative overflow-hidden flex flex-col justify-between ${
                    status === 'COMPLETED'
                      ? 'bg-emerald-50/70 border-emerald-300'
                      : status === 'PURCHASED' || status === 'IN_PROGRESS'
                      ? 'bg-amber-50/70 border-amber-300'
                      : status === 'AVAILABLE'
                      ? 'bg-[#FFFDF9] border-[#DFC47A] shadow-md hover:border-[#47206A]'
                      : 'bg-gray-50 border-gray-200 opacity-75'
                  }`}
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="w-7 h-7 rounded-full bg-[#47206A] text-[#DFC47A] font-extrabold text-xs flex items-center justify-center">
                        {cls.orderSequence}
                      </span>
                      {getStatusBadge(status)}
                    </div>

                    <div>
                      <h3 className="text-xl font-bold font-heading text-[#47206A]">{cls.name}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        {memberDiscountPercent > 0 ? (
                          <>
                            <span className="text-xs font-semibold text-gray-400 line-through">₹{cls.price.toLocaleString()}</span>
                            <span className="text-sm font-bold text-emerald-700">₹{Math.round(cls.price * (1 - memberDiscountPercent / 100)).toLocaleString()}</span>
                            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 border border-emerald-300">{memberDiscountPercent}% Sacred Benefit</span>
                          </>
                        ) : (
                          <span className="text-xs font-semibold text-[#8C5D00]">Price: ₹{cls.price.toLocaleString()}</span>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 mt-4 border-t border-gray-200/60">
                    {status === 'AVAILABLE' ? (
                      <Link
                        href={`/classes?slug=${cls.slug}`}
                        className="w-full py-2 px-4 rounded-full bg-[#47206A] text-white hover:bg-[#C8A34A] hover:text-[#47206A] font-bold text-xs uppercase tracking-wider text-center block transition-all shadow-sm"
                      >
                        Enroll Now
                      </Link>
                    ) : status === 'LOCKED' ? (
                      <div className="text-center text-xs text-gray-500 font-semibold flex items-center justify-center gap-1">
                        <Lock className="w-3.5 h-3.5" /> Unlock Previous Class First
                      </div>
                    ) : (
                      <div className="text-center text-xs text-emerald-800 font-bold flex items-center justify-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Access Active
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
}
