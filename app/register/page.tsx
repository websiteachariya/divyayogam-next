'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { User, Phone, Mail, Lock, Building, Briefcase, Calendar, Users, AlertCircle, ArrowRight, CheckCircle2, Eye, EyeOff, ChevronDown, Search, X } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const BRANCH_CAMPUS_OPTIONS = [
  'ASM - Villianur',
  'ASSV - Villianur',
  'AASC - Villianur',
  'ACET - Villianur',
  'ABSM - Thengaithitu',
  'Akalavya - Thengaithitu',
  'ASM - Moolakulam',
  'ASM - Thavalakuppam',
  'ABSM - Muthrapalayam',
  'ABSM - MUTHIALPET',
  'ASM - Erode',
  'ASM - PERUNDURAI',
  'ABSM - Karaikal',
  'ASM - Trichy',
  'ABSM - Trichy',
  'ASM - Etimadai',
  'ABSM - Alapakkam',
  'ABSM - Valasaravakkam',
  'ABSM - Nolambur',
  'ABSM - Adyar',
  'ABSM - PADMANABHA NAGAR',
  'ASM - Villupuram',
  'ABSM - Tindivanam',
  'ABSM - Karaikal Feeder',
  'ASM - Perundurai',
  'ASM - Thillai Nagar',
  'ABSM - Thiru Nagar',
  'ASM - Lawspet',
  'ABSM - SV Patel Salai',
  'ABSM - Kalapet',
  'Akalavya - Reddiarpalayam',
  'ABSM - Saaligramam',
  'ABSM - KK Nagar',
  'ABSM - RK Nagar',
  'ABSM - Virugambakkam',
  'ABSM - Dasarathapuram',
  'ABSM - Gorimedu',
  'ABSM - Maduravoyal',
  'ASM - Villupuram Feeder',
  'ABSM - Venkata Nagar',
  'Akalavya - Periyakattupalayan',
   'Akalavya - Thengaithitu',
];

export default function RegisterPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    occupation: '',
    customOccupation: '',
    branchCampus: '',
    organisation: '',
    mobile: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [apiError, setApiError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  // Branch / Campus Dropdown State
  const [isCampusOpen, setIsCampusOpen] = useState(false);
  const [campusSearch, setCampusSearch] = useState('');
  const campusDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (campusDropdownRef.current && !campusDropdownRef.current.contains(event.target as Node)) {
        setIsCampusOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const filteredCampuses = BRANCH_CAMPUS_OPTIONS.filter((campus) =>
    campus.toLowerCase().includes(campusSearch.toLowerCase().trim())
  );

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

    if (!formData.occupation) {
      newErrors.occupation = 'Please select an occupation.';
    } else if (formData.occupation === 'Others' && !formData.customOccupation.trim()) {
      newErrors.customOccupation = 'Please specify your occupation.';
    }

    if (!formData.branchCampus || formData.branchCampus.trim().length < 2) {
      newErrors.branchCampus = 'Branch / Campus is required.';
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
      const finalPayload = {
        ...formData,
        occupation: formData.occupation === 'Others' && formData.customOccupation.trim()
          ? `Others (${formData.customOccupation.trim()})`
          : formData.occupation,
      };

      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(finalPayload),
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
                    placeholder="Enter your age"
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
                    className={`w-full pl-10 pr-10 py-3 bg-[#FAF7F2] border border-[#E9DED3] focus:border-[#47206A] rounded-xl text-sm outline-none transition-all appearance-none cursor-pointer ${
                      !formData.gender ? 'text-gray-400' : 'text-[#47206A]'
                    }`}
                  >
                    <option value="" disabled hidden>
                      Select Gender
                    </option>
                    <option value="Male" className="text-[#47206A]">Male</option>
                    <option value="Female" className="text-[#47206A]">Female</option>
                    <option value="Other" className="text-[#47206A]">Other</option>
                    <option value="Prefer not to say" className="text-[#47206A]">Prefer not to say</option>
                  </select>
                  <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8C5D00] pointer-events-none" />
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
                    className="w-full pl-10 pr-4 py-3 bg-[#FAF7F2] border border-[#E9DED3] focus:border-[#47206A] rounded-xl text-sm outline-none transition-all text-[#47206A]"
                  />
                </div>
                {errors.mobile && <p className="text-xs text-red-500 mt-1 font-medium">{errors.mobile}</p>}
              </div>

              {/* Occupation Dropdown */}
              <div>
                <label className="block text-xs font-bold text-[#47206A] uppercase tracking-wider mb-2">
                  Occupation <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Briefcase className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8C5D00]" />
                  <select
                    value={formData.occupation}
                    onChange={(e) => setFormData({ ...formData, occupation: e.target.value, customOccupation: e.target.value !== 'Others' ? '' : formData.customOccupation })}
                    className={`w-full pl-10 pr-10 py-3 bg-[#FAF7F2] border border-[#E9DED3] focus:border-[#47206A] rounded-xl text-sm outline-none transition-all appearance-none cursor-pointer ${
                      !formData.occupation ? 'text-gray-400' : 'text-[#47206A]'
                    }`}
                  >
                    <option value="" disabled hidden>
                      Select Occupation
                    </option>
                    <option value="Staff" className="text-[#47206A]">Staff</option>
                    <option value="Head" className="text-[#47206A]">Head</option>
                    <option value="Student" className="text-[#47206A]">Student</option>
                    <option value="Parent" className="text-[#47206A]">Parent</option>
                    <option value="Corporate" className="text-[#47206A]">Corporate</option>
                    <option value="Others" className="text-[#47206A]">Others</option>
                  </select>
                  <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8C5D00] pointer-events-none" />
                </div>
                {errors.occupation && <p className="text-xs text-red-500 mt-1 font-medium">{errors.occupation}</p>}

                {formData.occupation === 'Others' && (
                  <div className="mt-2.5 relative">
                    <input
                      type="text"
                      value={formData.customOccupation}
                      onChange={(e) => setFormData({ ...formData, customOccupation: e.target.value })}
                      placeholder="Please specify your occupation"
                      className="w-full px-4 py-2.5 bg-[#FAF7F2] border border-[#E9DED3] focus:border-[#47206A] rounded-xl text-sm outline-none transition-all text-[#47206A]"
                    />
                    {errors.customOccupation && (
                      <p className="text-xs text-red-500 mt-1 font-medium">{errors.customOccupation}</p>
                    )}
                  </div>
                )}
              </div>

              {/* Branch / Campus */}
              <div className="relative" ref={campusDropdownRef}>
                <label className="block text-xs font-bold text-[#47206A] uppercase tracking-wider mb-2">
                  Branch / Campus <span className="text-red-500">*</span>
                </label>
                
                {/* Dropdown Toggle Button */}
                <div
                  onClick={() => setIsCampusOpen(!isCampusOpen)}
                  className="relative cursor-pointer"
                >
                  <Building className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8C5D00] pointer-events-none" />
                  <div
                    className={`w-full pl-10 pr-10 py-3 bg-[#FAF7F2] border border-[#E9DED3] focus:border-[#47206A] rounded-xl text-sm transition-all select-none truncate ${
                      !formData.branchCampus ? 'text-gray-400' : 'text-[#47206A] font-semibold'
                    }`}
                  >
                    {formData.branchCampus || 'Select Branch / Campus'}
                  </div>
                  <ChevronDown className={`absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8C5D00] pointer-events-none transition-transform duration-200 ${isCampusOpen ? 'rotate-180' : ''}`} />
                </div>

                {/* Dropdown Menu */}
                {isCampusOpen && (
                  <div className="absolute z-50 left-0 right-0 mt-1.5 bg-white border border-[#E9DED3] rounded-xl shadow-xl overflow-hidden animate-in fade-in slide-in-from-top-2 duration-150">
                    {/* Search Input Box */}
                    <div className="p-2 border-b border-[#E9DED3] bg-[#FAF7F2] relative">
                      <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-[#8C5D00]" />
                      <input
                        type="text"
                        value={campusSearch}
                        onChange={(e) => setCampusSearch(e.target.value)}
                        placeholder="Search campus..."
                        autoFocus
                        className="w-full pl-8 pr-7 py-2 bg-white border border-[#E9DED3] rounded-lg text-xs outline-none focus:border-[#47206A] text-[#47206A]"
                      />
                      {campusSearch && (
                        <button
                          type="button"
                          onClick={() => setCampusSearch('')}
                          className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                        >
                          <X className="w-3.5 h-3.5" />
                        </button>
                      )}
                    </div>

                    {/* Options List with fixed height for 4 items & scroll */}
                    <div className="max-h-[148px] overflow-y-auto divide-y divide-gray-50 py-1">
                      {filteredCampuses.length > 0 ? (
                        filteredCampuses.map((campus) => (
                          <button
                            key={campus}
                            type="button"
                            onClick={() => {
                              setFormData({ ...formData, branchCampus: campus });
                              setIsCampusOpen(false);
                              setCampusSearch('');
                              if (errors.branchCampus) {
                                setErrors((prev) => ({ ...prev, branchCampus: '' }));
                              }
                            }}
                            className={`w-full text-left px-4 py-2.5 text-xs transition-colors hover:bg-[#FAF7F2] flex items-center justify-between ${
                              formData.branchCampus === campus ? 'bg-[#FAF7F2] text-[#47206A] font-bold' : 'text-gray-700'
                            }`}
                          >
                            <span>{campus}</span>
                            {formData.branchCampus === campus && (
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#8C5D00]" />
                            )}
                          </button>
                        ))
                      ) : (
                        <div className="p-3 text-center text-xs text-gray-500 font-medium">
                          No matching campus found
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {errors.branchCampus && <p className="text-xs text-red-500 mt-1 font-medium">{errors.branchCampus}</p>}
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
              <div>
                <label className="block text-xs font-bold text-[#47206A] uppercase tracking-wider mb-2">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8C5D00]" />
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="Enter your email address"
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
