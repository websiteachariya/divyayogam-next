'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  ShieldCheck,
  User,
  Lock,
  Eye,
  EyeOff,
  KeyRound,
  ArrowLeft,
  XCircle,
  RefreshCw,
  Sparkles,
  Heart,
  Globe,
  Award
} from 'lucide-react';

export default function AdminLoginPage() {
  const router = useRouter();
  const [loginUsername, setLoginUsername] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState('');
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError('');
    setIsLoggingIn(true);

    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: loginUsername, password: loginPassword }),
      });
      const data = await res.json();

      if (res.ok && data.success) {
        if (typeof window !== 'undefined') localStorage.setItem('divya_admin_auth', 'true');
        router.push('/admin/memberships');
      } else {
        setLoginError(data.error || 'Invalid Username or Password. Please try again.');
      }
    } catch (err) {
      setLoginError('Authentication failed. Please try again.');
    } finally {
      setIsLoggingIn(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF5EF] font-body text-[#352043] relative overflow-x-hidden pt-28 sm:pt-36 pb-20 flex items-center justify-center px-4">
      {/* Texture background */}
      <div
        className="absolute inset-0 opacity-80 pointer-events-none bg-cover bg-center bg-no-repeat bg-fixed z-0"
        style={{
          backgroundImage: "linear-gradient(rgba(250, 245, 239, 0.82), rgba(250, 245, 239, 0.9)), url('/images/con-6.webp')",
        }}
      />

      <div className="w-full max-w-lg relative z-10 space-y-6">
        
        {/* Mission Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#352043] text-[#DFC47A] border border-[#DFC47A]/40 text-[10px] sm:text-xs font-bold uppercase tracking-widest shadow-md">
            <ShieldCheck className="w-3.5 h-3.5 text-[#DFC47A]" />
            DIVYA YOGAM SECURE ADMIN CONSOLE
          </div>

          <h1 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#352043]">
            Admin Sign In
          </h1>
        </div>

        {/* Login Form Card */}
        <div className="bg-white/95 backdrop-blur-md rounded-3xl p-6 sm:p-8 border-2 border-[#DFC47A] shadow-2xl space-y-6">
          {loginError && (
            <div className="p-3.5 rounded-2xl bg-red-50 border border-red-200 text-red-700 text-xs font-medium flex items-center gap-2">
              <XCircle className="w-4 h-4 shrink-0 text-red-500" />
              <span>{loginError}</span>
            </div>
          )}

          <form onSubmit={handleLoginSubmit} className="space-y-4">
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-[#352043] uppercase tracking-wider flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-[#8C5D00]" />
                <span>Admin Username</span>
              </label>
              <div className="relative">
                <input
                  type="text"
                  required
                  placeholder="Enter admin username"
                  value={loginUsername}
                  onChange={(e) => setLoginUsername(e.target.value)}
                  className="w-full px-4 py-3.5 rounded-xl border border-[#E9DED3] focus:border-[#C8A34A] focus:outline-none text-xs sm:text-sm font-medium bg-[#FAF5EF]/50 text-[#352043]"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-[#352043] uppercase tracking-wider flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5 text-[#8C5D00]" />
                <span>Admin Password</span>
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  placeholder="Enter admin password"
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                  className="w-full pl-4 pr-11 py-3.5 rounded-xl border border-[#E9DED3] focus:border-[#C8A34A] focus:outline-none text-xs sm:text-sm font-medium bg-[#FAF5EF]/50 text-[#352043]"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#8C5D00] hover:text-[#352043] transition-colors"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoggingIn}
              className="w-full py-3.5 rounded-full bg-[#352043] hover:bg-[#8C5D00] text-white font-bold text-xs uppercase tracking-wider shadow-lg hover:scale-105 transition-all flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer"
            >
              {isLoggingIn ? (
                <>
                  <RefreshCw className="w-4 h-4 text-[#DFC47A] animate-spin" />
                  <span>Authenticating...</span>
                </>
              ) : (
                <>
                  <KeyRound className="w-4 h-4 text-[#DFC47A]" />
                  <span>Sign In to Admin Dashboard</span>
                </>
              )}
            </button>
          </form>
        </div>

        <div className="text-center">
          <Link
            href="/membership"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#8C5D00] hover:text-[#352043] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Website</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
