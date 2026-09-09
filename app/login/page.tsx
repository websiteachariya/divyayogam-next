'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Mail, Lock, AlertCircle, ArrowRight, Eye, EyeOff } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function LoginPage() {
  const router = useRouter();
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [apiError, setApiError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setApiError('');

    if (!identifier || !password) {
      setApiError('Please enter your email or mobile number and password.');
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ identifier, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Login failed');
      }

      router.push('/user/dashboard');
    } catch (err: any) {
      setApiError(err.message || 'Invalid credentials');
    } finally {
      setIsSubmitting(false);
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

      <main className="pt-44 sm:pt-48 pb-20 sm:pb-24 px-4 sm:px-6 lg:px-8 max-w-md mx-auto w-full flex-1">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/90 backdrop-blur-xl rounded-3xl border-2 border-[#DFC47A] p-6 sm:p-10 shadow-2xl relative overflow-hidden"
        >
          <div className="text-center mb-8">
            <h1 className="text-3xl font-extrabold text-[#47206A] tracking-wide font-heading">
              User Login
            </h1>
            <p className="text-xs sm:text-sm text-[#8C5D00] font-medium mt-2">
              Access your Divya Yogam member dashboard and sacred classes.
            </p>
          </div>

          {apiError && (
            <div className={`mb-6 p-4 rounded-2xl border text-xs flex flex-col gap-3 ${
              apiError.toLowerCase().includes('register')
                ? 'bg-amber-50 border-[#DFC47A] text-[#47206A]'
                : 'bg-red-50 border-red-200 text-red-700'
            }`}>
              <div className="flex items-center gap-3">
                <AlertCircle className={`w-4 h-4 shrink-0 ${
                  apiError.toLowerCase().includes('register') ? 'text-[#8C5D00]' : 'text-red-500'
                }`} />
                <span className="font-semibold">{apiError}</span>
              </div>
              {apiError.toLowerCase().includes('register') && (
                <Link
                  href="/register"
                  className="w-full py-3 rounded-full bg-[#47206A] hover:bg-[#C8A34A] text-white hover:text-[#47206A] font-bold text-xs uppercase tracking-wider shadow-lg transition-all duration-300 flex items-center justify-center gap-2 text-center"
                >
                  <span>Register New Account First</span>
                  <ArrowRight className="w-4 h-4 text-[#DFC47A]" />
                </Link>
              )}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-xs font-bold text-[#47206A] uppercase tracking-wider mb-2">
                Email Address or 10-Digit Mobile
              </label>
              <div className="relative">
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8C5D00]" />
                <input
                  type="text"
                  value={identifier}
                  onChange={(e) => setIdentifier(e.target.value)}
                  placeholder="email@domain.com or 9876543210"
                  className="w-full pl-10 pr-4 py-3 bg-[#FAF7F2] border border-[#E9DED3] focus:border-[#47206A] rounded-xl text-sm outline-none transition-all"
                  required
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="block text-xs font-bold text-[#47206A] uppercase tracking-wider">
                  Password
                </label>
                <Link
                  href="/forgot-password"
                  className="text-xs text-[#8C5D00] hover:text-[#47206A] underline font-semibold"
                >
                  Forgot Password?
                </Link>
              </div>
              <div className="relative">
                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8C5D00]" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-10 pr-10 py-3 bg-[#FAF7F2] border border-[#E9DED3] focus:border-[#47206A] rounded-xl text-sm outline-none transition-all"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#47206A] focus:outline-none transition-colors"
                  title={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 rounded-full bg-[#47206A] hover:bg-[#C8A34A] text-white hover:text-[#47206A] font-bold text-sm uppercase tracking-wider shadow-lg transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer disabled:opacity-50"
            >
              <span>{isSubmitting ? 'Verifying...' : 'Sign In'}</span>
              <ArrowRight className="w-4 h-4 text-[#DFC47A] group-hover:text-[#47206A] transition-colors" />
            </button>
          </form>

          <div className="mt-6 text-center text-xs font-semibold text-[#8C5D00]">
            Don&apos;t have an account?{' '}
            <Link href="/register" className="text-[#47206A] underline font-bold hover:text-[#C8A34A]">
              Register now
            </Link>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
