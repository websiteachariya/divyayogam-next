'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ShieldCheck, ArrowLeft, RefreshCw, LogOut, Users, Globe, Sparkles } from 'lucide-react';
import SeoAuditDashboard from '@/components/admin/SeoAuditDashboard';

export default function AdminSeoPage() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [checkingAuth, setCheckingAuth] = useState(true);

  useEffect(() => {
    const checkAuthSession = async () => {
      try {
        const res = await fetch('/api/admin/login');
        const data = await res.json();
        if (data.authenticated) {
          setIsAuthenticated(true);
          if (typeof window !== 'undefined') localStorage.setItem('divya_admin_auth', 'true');
        } else {
          if (typeof window !== 'undefined') localStorage.removeItem('divya_admin_auth');
          setIsAuthenticated(false);
          router.replace('/admin/login');
        }
      } catch (err) {
        if (typeof window !== 'undefined') localStorage.removeItem('divya_admin_auth');
        setIsAuthenticated(false);
        router.replace('/admin/login');
      } finally {
        setCheckingAuth(false);
      }
    };
    checkAuthSession();
  }, [router]);

  const handleLogout = async () => {
    try {
      await fetch('/api/admin/logout', { method: 'POST' });
    } catch (err) {}
    if (typeof window !== 'undefined') localStorage.removeItem('divya_admin_auth');
    setIsAuthenticated(false);
    router.push('/admin/login');
  };

  if (checkingAuth) {
    return (
      <div className="min-h-screen bg-[#FAF5EF] flex items-center justify-center pt-36 pb-16">
        <div className="flex items-center gap-3 text-[#352043] font-bold text-sm bg-white/90 px-6 py-4 rounded-2xl border border-[#DFC47A] shadow-lg">
          <RefreshCw className="w-5 h-5 text-[#C8A34A] animate-spin" />
          <span>Verifying Admin Session...</span>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#FAF5EF] flex items-center justify-center pt-36 pb-16">
        <div className="flex items-center gap-3 text-[#352043] font-bold text-sm bg-white/90 px-6 py-4 rounded-2xl border border-[#DFC47A] shadow-lg">
          <RefreshCw className="w-5 h-5 text-[#C8A34A] animate-spin" />
          <span>Redirecting to Admin Login...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FAF5EF] font-body text-[#352043] relative overflow-x-hidden pt-36 sm:pt-44 md:pt-48 pb-16">
      
      {/* Texture background */}
      <div
        className="absolute inset-0 opacity-80 pointer-events-none bg-cover bg-center bg-no-repeat bg-fixed z-0"
        style={{
          backgroundImage: "linear-gradient(rgba(250, 245, 239, 0.75), rgba(250, 245, 239, 0.85)), url('/images/con-6.webp')",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">
        
        {/* Header Navigation & Title */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-[#DFC47A]/40 pb-6">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <Link
                href="/admin/dashboard"
                className="inline-flex items-center gap-1 text-xs font-bold text-[#8C5D00] hover:text-[#352043] transition-colors"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Back to Admin Dashboard</span>
              </Link>
              <span className="text-[#DFC47A]">•</span>
              <span className="px-2.5 py-0.5 rounded-full bg-[#352043] text-[#DFC47A] text-[10px] font-bold uppercase tracking-wider">
                Admin SEO Console
              </span>
            </div>
            <h1 className="font-heading text-2xl sm:text-4xl font-extrabold text-[#352043] flex items-center gap-3">
              <Globe className="w-8 h-8 text-[#C8A34A]" />
              <span>Full-Site Editable SEO Manager</span>
            </h1>
            <p className="text-xs sm:text-sm text-[#5E5865]">
              Real-time editable metadata, OpenGraph social card previews, X-Robots directives, and sitemap coverage across all site pages.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleLogout}
              className="px-4 py-2.5 rounded-full bg-red-50 hover:bg-red-100 border border-red-200 text-red-700 font-bold text-xs flex items-center gap-2 shadow-sm transition-all cursor-pointer"
            >
              <LogOut className="w-3.5 h-3.5 text-red-600" />
              <span>Logout</span>
            </button>
          </div>
        </div>

        {/* Navigation Tab Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 bg-white/90 backdrop-blur-md p-2 rounded-2xl border-2 border-[#DFC47A] shadow-lg">
          <div className="flex items-center gap-2">
            <Link
              href="/admin/dashboard"
              className="px-5 py-3 rounded-xl font-bold text-xs sm:text-sm uppercase tracking-wider flex items-center gap-2.5 transition-all text-[#352043] hover:bg-[#FAF5EF]"
            >
              <Users className="w-4 h-4 text-[#8C5D00]" />
              <span>Dashboard & Analytics</span>
            </Link>

            <Link
              href="/admin/seo"
              className="px-5 py-3 rounded-xl font-bold text-xs sm:text-sm uppercase tracking-wider flex items-center gap-2.5 transition-all bg-[#352043] text-[#DFC47A] shadow-md scale-[1.02]"
            >
              <Globe className="w-4 h-4 text-[#DFC47A]" />
              <span>Editable SEO Manager</span>
              <span className="px-2 py-0.5 rounded-full bg-emerald-500 text-white text-[10px] font-extrabold animate-pulse">
                Live Edit
              </span>
            </Link>
          </div>

          <div className="hidden sm:flex items-center gap-2 text-xs font-semibold text-[#8C5D00] pr-3">
            <Sparkles className="w-4 h-4 text-[#C8A34A]" />
            <span>Divya Yogam Master Console</span>
          </div>
        </div>

        {/* Editable SEO Dashboard Component */}
        <SeoAuditDashboard />

      </div>
    </div>
  );
}
