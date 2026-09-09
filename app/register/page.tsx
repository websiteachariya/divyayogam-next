'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { User, Phone, Mail, Lock, Building, Briefcase, Calendar, Users, AlertCircle, ArrowRight, CheckCircle2, Eye, EyeOff } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function RegisterPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: 'Male',
    occupation: '',
    organisation: '',
    mobile: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [apiError, setApiError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const validate = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name || formData.name.trim().length < 3) {
      newErrors.name = 'Full name must be at least 3 characters.';
    }

    const numericAge = Number(formData.age);
    if (!formData.age || isNaN(numericAge) || numericAge < 1 || numericAge > 120) {
      newErrors.age = 'Please enter a valid age (1-120).';
    }

    if (!formData.gender) {
      newErrors.gender = 'Please select a gender.';
    }

    if (!formData.occupation || formData.occupation.trim().length < 2) {
      newErrors.occupation = 'Occupation is required.';
    }

    if (!formData.organisation || formData.organisation.trim().length < 2) {
      newErrors.organisation = 'Organisation / Location is required.';
    }

    const cleanMobile = formData.mobile.replace(/\D/g, '').slice(-10);
    if (!/^[6-9]\d{9}$/.test(cleanMobile)) {
      newErrors.mobile = 'Enter valid 10-digit Indian mobile starting with 6, 7, 8, or 9.';
    }

    if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.password || formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setApiError('');

    if (!validate()) return;

    setIsSubmitting(true);

    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Registration failed');
      }

      router.push('/user/dashboard');
    } catch (err: any) {
      setApiError(err.message || 'Something went wrong during registration.');
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

      <main className="pt-44 sm:pt-48 pb-20 sm:pb-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full flex-1">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/90 backdrop-blur-xl rounded-3xl border-2 border-[#DFC47A] p-6 sm:p-10 shadow-2xl relative overflow-hidden"
        >
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#47206A] tracking-wide font-heading">
              Join Divya Yogam
            </h1>
            <p className="text-sm sm:text-base text-[#8C5D00] font-medium mt-2">
              Begin your sacred journey into spiritual awakening and holistic wellness.
            </p>
          </div>

          {apiError && (
            <div className="mb-6 p-4 rounded-2xl bg-red-50 border border-red-200 text-red-700 text-sm flex items-center gap-3">
              <AlertCircle className="w-5 h-5 shrink-0" />
              <span>{apiError}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Full Name */}
              <div>
                <label className="block text-xs font-bold text-[#47206A] uppercase tracking-wider mb-2">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8C5D00]" />
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your full name"
                    className="w-full pl-10 pr-4 py-3 bg-[#FAF7F2] border border-[#E9DED3] focus:border-[#47206A] rounded-xl text-sm outline-none transition-all"
                  />
                </div>
                {errors.name && <p className="text-xs text-red-500 mt-1 font-medium">{errors.name}</p>}
              </div>

              {/* Age */}
              <div>
                <label className="block text-xs font-bold text-[#47206A] uppercase tracking-wider mb-2">
                  Age <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8C5D00]" />
                  <input
                    type="number"
                    value={formData.age}
                    onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                    placeholder="e.g. 28"
                    className="w-full pl-10 pr-4 py-3 bg-[#FAF7F2] border border-[#E9DED3] focus:border-[#47206A] rounded-xl text-sm outline-none transition-all"
                  />
                </div>
                {errors.age && <p className="text-xs text-red-500 mt-1 font-medium">{errors.age}</p>}
              </div>

              {/* Gender */}
              <div>
                <label className="block text-xs font-bold text-[#47206A] uppercase tracking-wider mb-2">
                  Gender <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Users className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8C5D00]" />
                  <select
                    value={formData.gender}
                    onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                    className="w-full pl-10 pr-4 py-3 bg-[#FAF7F2] border border-[#E9DED3] focus:border-[#47206A] rounded-xl text-sm outline-none transition-all appearance-none cursor-pointer"
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                    <option value="Prefer not to say">Prefer not to say</option>
                  </select>
                </div>
                {errors.gender && <p className="text-xs text-red-500 mt-1 font-medium">{errors.gender}</p>}
              </div>

              {/* Mobile Number */}
              <div>
                <label className="block text-xs font-bold text-[#47206A] uppercase tracking-wider mb-2">
                  Mobile Number (10 Digits) <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8C5D00]" />
                  <input
                    type="tel"
                    maxLength={10}
                    value={formData.mobile}
                    onChange={(e) => setFormData({ ...formData, mobile: e.target.value.replace(/\D/g, '') })}
                    placeholder="9876543210"
                    className="w-full pl-10 pr-4 py-3 bg-[#FAF7F2] border border-[#E9DED3] focus:border-[#47206A] rounded-xl text-sm outline-none transition-all"
                  />
                </div>
                {errors.mobile && <p className="text-xs text-red-500 mt-1 font-medium">{errors.mobile}</p>}
              </div>

              {/* Occupation */}
              <div>
                <label className="block text-xs font-bold text-[#47206A] uppercase tracking-wider mb-2">
                  Occupation <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Briefcase className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8C5D00]" />
                  <input
                    type="text"
                    value={formData.occupation}
                    onChange={(e) => setFormData({ ...formData, occupation: e.target.value })}
                    placeholder="e.g. Software Engineer, Doctor, Student"
                    className="w-full pl-10 pr-4 py-3 bg-[#FAF7F2] border border-[#E9DED3] focus:border-[#47206A] rounded-xl text-sm outline-none transition-all"
                  />
                </div>
                {errors.occupation && <p className="text-xs text-red-500 mt-1 font-medium">{errors.occupation}</p>}
              </div>

              {/* Organisation / Location */}
              <div>
                <label className="block text-xs font-bold text-[#47206A] uppercase tracking-wider mb-2">
                  Organisation / Location <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Building className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8C5D00]" />
                  <input
                    type="text"
                    value={formData.organisation}
                    onChange={(e) => setFormData({ ...formData, organisation: e.target.value })}
                    placeholder="e.g. Tech Corp / Puducherry"
                    className="w-full pl-10 pr-4 py-3 bg-[#FAF7F2] border border-[#E9DED3] focus:border-[#47206A] rounded-xl text-sm outline-none transition-all"
                  />
                </div>
                {errors.organisation && <p className="text-xs text-red-500 mt-1 font-medium">{errors.organisation}</p>}
              </div>

              {/* Email Address */}
              <div className="sm:col-span-2">
                <label className="block text-xs font-bold text-[#47206A] uppercase tracking-wider mb-2">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8C5D00]" />
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@domain.com"
                    className="w-full pl-10 pr-4 py-3 bg-[#FAF7F2] border border-[#E9DED3] focus:border-[#47206A] rounded-xl text-sm outline-none transition-all"
                  />
                </div>
                {errors.email && <p className="text-xs text-red-500 mt-1 font-medium">{errors.email}</p>}
              </div>

              {/* Password */}
              <div className="sm:col-span-2">
                <label className="block text-xs font-bold text-[#47206A] uppercase tracking-wider mb-2">
                  Password <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8C5D00]" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    placeholder="••••••••"
                    className="w-full pl-10 pr-10 py-3 bg-[#FAF7F2] border border-[#E9DED3] focus:border-[#47206A] rounded-xl text-sm outline-none transition-all"
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
                {errors.password && <p className="text-xs text-red-500 mt-1 font-medium">{errors.password}</p>}
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 rounded-full bg-[#47206A] hover:bg-[#C8A34A] text-white hover:text-[#47206A] font-bold text-sm uppercase tracking-wider shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer disabled:opacity-50"
            >
              <span>{isSubmitting ? 'Registering Account...' : 'Create Account'}</span>
              <ArrowRight className="w-4 h-4 text-[#DFC47A] group-hover:text-[#47206A] transition-colors" />
            </button>
          </form>

          <div className="mt-6 text-center text-xs font-semibold text-[#8C5D00]">
            Already have an account?{' '}
            <Link href="/login" className="text-[#47206A] underline font-bold hover:text-[#C8A34A]">
              Log in here
            </Link>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
