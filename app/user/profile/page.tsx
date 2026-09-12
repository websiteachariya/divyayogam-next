'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { User, Phone, Mail, Building, Briefcase, Calendar, ArrowLeft, Crown } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function UserProfilePage() {
  const router = useRouter();
  const [userData, setUserData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      const res = await fetch('/api/auth/me');
      const data = await res.json();

      if (!res.ok || !data.authenticated) {
        router.push('/login');
        return;
      }

      setUserData(data.user);
    } catch (err) {
      router.push('/login');
    } finally {
      setLoading(false);
    }
  };

  const activeMembership = userData?.memberships?.[0];

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
              Loading profile details...
            </p>
            <p className="text-xs font-extrabold text-[#8C5D00] mt-1">
              Fetching User Profile
            </p>
          </div>
        </div>
      </div>
    );
  }

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

      <main className="pt-32 sm:pt-36 lg:pt-40 pb-16 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto w-full flex-1">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/90 backdrop-blur-xl rounded-3xl border-2 border-[#DFC47A] p-6 sm:p-10 shadow-2xl relative overflow-hidden space-y-6"
        >
          <div className="flex items-center justify-between border-b border-[#E9DED3] pb-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold font-heading text-[#47206A]">
                User Profile Details
              </h1>
              <p className="text-xs text-[#8C5D00] mt-1 font-medium">
                Verified registration details for your Divya Yogam account.
              </p>
            </div>
            <Link
              href="/user/dashboard"
              className="px-4 py-2 rounded-full bg-[#FAF7F2] hover:bg-[#47206A] text-[#47206A] hover:text-white border border-[#DFC47A] text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 transition-all"
            >
              <ArrowLeft className="w-4 h-4" /> Dashboard
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E9DED3] space-y-1">
              <span className="text-xs text-gray-500 font-bold uppercase tracking-wider block">Full Name</span>
              <p className="text-base font-extrabold text-[#47206A]">{userData?.name}</p>
            </div>

            <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E9DED3] space-y-1">
              <span className="text-xs text-gray-500 font-bold uppercase tracking-wider block">Contribution Status</span>
              {activeMembership ? (
                <p className="text-base font-extrabold text-[#8C5D00] flex items-center gap-1.5">
                  <Crown className="w-4 h-4 text-[#C8A34A]" /> {activeMembership.level} Contributor
                </p>
              ) : (
                <p className="text-base font-extrabold text-amber-800">Non-Contributor</p>
              )}
            </div>

            <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E9DED3] space-y-1">
              <span className="text-xs text-gray-500 font-bold uppercase tracking-wider block">Age & Gender</span>
              <p className="text-base font-extrabold text-[#47206A]">{userData?.age} Years • {userData?.gender}</p>
            </div>

            <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E9DED3] space-y-1">
              <span className="text-xs text-gray-500 font-bold uppercase tracking-wider block">Occupation</span>
              <p className="text-base font-extrabold text-[#47206A]">{userData?.occupation}</p>
            </div>

            <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E9DED3] space-y-1">
              <span className="text-xs text-gray-500 font-bold uppercase tracking-wider block">Branch / Campus</span>
              <p className="text-base font-extrabold text-[#47206A]">{userData?.branchCampus || 'N/A'}</p>
            </div>

            <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E9DED3] space-y-1">
              <span className="text-xs text-gray-500 font-bold uppercase tracking-wider block">Organisation / Location</span>
              <p className="text-base font-extrabold text-[#47206A]">{userData?.organisation}</p>
            </div>

            <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E9DED3] space-y-1">
              <span className="text-xs text-gray-500 font-bold uppercase tracking-wider block">Mobile Number</span>
              <p className="text-base font-extrabold text-[#47206A]">{userData?.mobile}</p>
            </div>

            <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E9DED3] space-y-1">
              <span className="text-xs text-gray-500 font-bold uppercase tracking-wider block">Email Address</span>
              <p className="text-base font-extrabold text-[#47206A] truncate">{userData?.email}</p>
            </div>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
