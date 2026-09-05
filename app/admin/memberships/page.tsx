'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  Users,
  Search,
  RefreshCw,
  Download,
  CreditCard,
  CheckCircle2,
  Clock,
  XCircle,
  Filter,
  Sparkles,
  ArrowLeft,
  DollarSign,
  ShieldCheck,
  Phone,
  Mail,
  MapPin,
  Calendar,
  ChevronRight,
  TrendingUp,
  Award,
  Trash2
} from 'lucide-react';

interface MemberRecord {
  id?: string;
  memberId: string;
  fullName: string;
  email: string;
  phone: string;
  city?: string;
  address?: string;
  pincode?: string;
  tierId?: string;
  tierName: string;
  amount: number;
  cfOrderId: string;
  cfPaymentId?: string;
  paymentStatus: 'SUCCESS' | 'PENDING' | 'FAILED' | string;
  paymentMethod?: string;
  createdAt: string;
}

export default function AdminMembershipsPage() {
  const [members, setMembers] = useState<MemberRecord[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStatus, setSelectedStatus] = useState<string>('ALL');
  const [selectedTier, setSelectedTier] = useState<string>('ALL');

  const [metrics, setMetrics] = useState({
    totalMembers: 0,
    paidCount: 0,
    totalRevenue: 0,
    goldCount: 0,
    platinumCount: 0,
    diamondCount: 0,
  });

  const fetchMemberships = async () => {
    setLoading(true);
    try {
      // 1. Fetch from Backend API (Neon DB via Prisma)
      const res = await fetch('/api/admin/memberships');
      const data = await res.json();

      let dbMembers: MemberRecord[] = [];
      if (data.success && Array.isArray(data.members)) {
        dbMembers = data.members;
      }

      // 2. Fetch from LocalStorage fallback (if local testing)
      let localMembers: MemberRecord[] = [];
      try {
        const localData = localStorage.getItem('divyaYogamMemberships');
        if (localData) {
          const parsed = JSON.parse(localData);
          localMembers = parsed.map((item: any) => ({
            id: item.txnId || item.memberId,
            memberId: item.memberId,
            fullName: item.fullName,
            email: item.email,
            phone: item.phone,
            city: item.city,
            address: item.address,
            pincode: item.pincode,
            tierId: (item.tierName || 'gold').toLowerCase(),
            tierName: item.tierName || 'Gold',
            amount: Number(item.amountPaid || item.amount || 0),
            cfOrderId: item.cfOrderId || item.txnId || `TXN_${Date.now()}`,
            cfPaymentId: item.txnId,
            paymentStatus: item.paymentStatus || 'SUCCESS',
            paymentMethod: item.paymentMethod || 'UPI',
            createdAt: item.timestamp || new Date().toISOString(),
          }));
        }
      } catch (err) {
        console.warn('LocalStorage parse warning:', err);
      }

      // Combine DB and LocalStorage (deduplicate by cfOrderId or memberId)
      const combinedMap = new Map<string, MemberRecord>();
      [...dbMembers, ...localMembers].forEach((m) => {
        const key = m.cfOrderId || m.memberId;
        if (!combinedMap.has(key)) {
          combinedMap.set(key, m);
        }
      });

      const allMembers = Array.from(combinedMap.values());
      setMembers(allMembers);

      // Recalculate Metrics
      const paid = allMembers.filter((m) => m.paymentStatus === 'SUCCESS');
      const rev = paid.reduce((sum, m) => sum + (Number(m.amount) || 0), 0);

      setMetrics({
        totalMembers: allMembers.length,
        paidCount: paid.length,
        totalRevenue: rev,
        goldCount: allMembers.filter((m) => m.tierName?.toLowerCase().includes('gold') || m.tierId === 'gold').length,
        platinumCount: allMembers.filter((m) => m.tierName?.toLowerCase().includes('platinum') || m.tierId === 'platinum').length,
        diamondCount: allMembers.filter((m) => m.tierName?.toLowerCase().includes('diamond') || m.tierId === 'diamond').length,
      });
    } catch (err) {
      console.error('Error fetching admin memberships:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMemberships();
  }, []);

  // Filtering
  const filteredMembers = members.filter((m) => {
    const matchesSearch =
      searchQuery === '' ||
      m.fullName?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.email?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.phone?.includes(searchQuery) ||
      m.memberId?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.cfOrderId?.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesStatus =
      selectedStatus === 'ALL' || m.paymentStatus?.toUpperCase() === selectedStatus.toUpperCase();

    const matchesTier =
      selectedTier === 'ALL' ||
      m.tierName?.toLowerCase().includes(selectedTier.toLowerCase()) ||
      m.tierId === selectedTier.toLowerCase();

    return matchesSearch && matchesStatus && matchesTier;
  });

  // Export to CSV
  const exportToCSV = () => {
    if (filteredMembers.length === 0) {
      alert('No records to export');
      return;
    }

    const headers = [
      'Member ID',
      'Full Name',
      'Phone',
      'Email',
      'City',
      'Tier Name',
      'Amount (INR)',
      'Payment Status',
      'Payment Method',
      'Cashfree Order ID',
      'Date'
    ];

    const rows = filteredMembers.map((m) => [
      `"${m.memberId || ''}"`,
      `"${m.fullName || ''}"`,
      `"${m.phone || ''}"`,
      `"${m.email || ''}"`,
      `"${m.city || ''}"`,
      `"${m.tierName || ''}"`,
      m.amount || 0,
      `"${m.paymentStatus || ''}"`,
      `"${m.paymentMethod || ''}"`,
      `"${m.cfOrderId || ''}"`,
      `"${new Date(m.createdAt).toLocaleDateString('en-IN')}"`
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map((e) => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `Divya_Yogam_Memberships_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Delete Member Handler
  const handleDeleteMember = async (member: MemberRecord) => {
    if (!window.confirm(`Are you sure you want to delete member record for "${member.fullName}" (${member.memberId})?`)) {
      return;
    }

    try {
      // 1. Delete from Backend DB API
      await fetch(`/api/admin/memberships?cfOrderId=${encodeURIComponent(member.cfOrderId)}&memberId=${encodeURIComponent(member.memberId)}`, {
        method: 'DELETE',
      });

      // 2. Delete from LocalStorage
      try {
        const localData = localStorage.getItem('divyaYogamMemberships');
        if (localData) {
          const parsed = JSON.parse(localData);
          const filtered = parsed.filter((item: any) =>
            item.memberId !== member.memberId && item.cfOrderId !== member.cfOrderId && item.txnId !== member.cfOrderId
          );
          localStorage.setItem('divyaYogamMemberships', JSON.stringify(filtered));
        }
      } catch (err) {
        console.error('LocalStorage delete error:', err);
      }

      // 3. Update State & Metrics
      setMembers((prev) => {
        const updated = prev.filter((m) => m.cfOrderId !== member.cfOrderId && m.memberId !== member.memberId);
        
        const paid = updated.filter((m) => m.paymentStatus === 'SUCCESS');
        const rev = paid.reduce((sum, m) => sum + (Number(m.amount) || 0), 0);

        setMetrics({
          totalMembers: updated.length,
          paidCount: paid.length,
          totalRevenue: rev,
          goldCount: updated.filter((m) => m.tierName?.toLowerCase().includes('gold') || m.tierId === 'gold').length,
          platinumCount: updated.filter((m) => m.tierName?.toLowerCase().includes('platinum') || m.tierId === 'platinum').length,
          diamondCount: updated.filter((m) => m.tierName?.toLowerCase().includes('diamond') || m.tierId === 'diamond').length,
        });

        return updated;
      });
    } catch (err) {
      alert('Failed to delete member record.');
    }
  };

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
                href="/membership"
                className="inline-flex items-center gap-1 text-xs font-bold text-[#8C5D00] hover:text-[#352043] transition-colors"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Back to Membership Page</span>
              </Link>
              <span className="text-[#DFC47A]">•</span>
              <span className="px-2.5 py-0.5 rounded-full bg-[#352043] text-[#DFC47A] text-[10px] font-bold uppercase tracking-wider">
                Admin Panel
              </span>
            </div>
            <h1 className="font-heading text-2xl sm:text-4xl font-extrabold text-[#352043] flex items-center gap-3">
              <ShieldCheck className="w-8 h-8 text-[#C8A34A]" />
              <span>Membership Subscriptions Dashboard</span>
            </h1>
            <p className="text-xs sm:text-sm text-[#5E5865]">
              Live overview of member enrollments, Cashfree payment statuses, and revenue analytics.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={fetchMemberships}
              disabled={loading}
              className="px-4 py-2.5 rounded-full bg-white border border-[#DFC47A] hover:bg-[#FAF5EF] text-[#352043] font-bold text-xs flex items-center gap-2 shadow-sm transition-all"
            >
              <RefreshCw className={`w-3.5 h-3.5 text-[#C8A34A] ${loading ? 'animate-spin' : ''}`} />
              <span>Refresh</span>
            </button>

            <button
              onClick={exportToCSV}
              className="px-5 py-2.5 rounded-full bg-[#352043] hover:bg-[#8C5D00] text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-md hover:scale-105 transition-all"
            >
              <Download className="w-3.5 h-3.5 text-[#DFC47A]" />
              <span>Export CSV</span>
            </button>
          </div>
        </div>

        {/* Analytics Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="p-5 rounded-3xl bg-gradient-to-br from-[#352043] via-[#47206A] to-[#2B083A] text-white border-2 border-[#DFC47A] shadow-xl space-y-2 relative overflow-hidden">
            <div className="flex items-center justify-between text-[#DFC47A]">
              <span className="text-xs font-bold uppercase tracking-wider">Total Revenue</span>
              <DollarSign className="w-5 h-5 text-[#DFC47A]" />
            </div>
            <div className="font-heading text-3xl font-extrabold text-white">
              ₹{metrics.totalRevenue.toLocaleString('en-IN')}
            </div>
            <span className="text-[11px] text-emerald-300 font-medium block">
              Verified Cashfree Payments
            </span>
          </div>

          <div className="p-5 rounded-3xl bg-white border border-[#DFC47A]/60 shadow-md space-y-2">
            <div className="flex items-center justify-between text-[#8C5D00]">
              <span className="text-xs font-bold uppercase tracking-wider">Total Subscribers</span>
              <Users className="w-5 h-5 text-[#8C5D00]" />
            </div>
            <div className="font-heading text-3xl font-extrabold text-[#352043]">
              {metrics.totalMembers}
            </div>
            <span className="text-[11px] text-[#5E5865] font-medium block">
              {metrics.paidCount} Paid ({metrics.totalMembers ? Math.round((metrics.paidCount / metrics.totalMembers) * 100) : 0}% success rate)
            </span>
          </div>

          <div className="p-5 rounded-3xl bg-white border border-[#DFC47A]/60 shadow-md space-y-2">
            <div className="flex items-center justify-between text-[#8C5D00]">
              <span className="text-xs font-bold uppercase tracking-wider">Plan Tiers</span>
              <Award className="w-5 h-5 text-[#8C5D00]" />
            </div>
            <div className="flex items-baseline gap-3">
              <div>
                <span className="text-[10px] text-[#8C5D00] font-bold block">GOLD</span>
                <span className="font-heading text-xl font-bold text-[#352043]">{metrics.goldCount}</span>
              </div>
              <div className="h-6 w-[1px] bg-[#E9DED3]" />
              <div>
                <span className="text-[10px] text-[#8C5D00] font-bold block">PLATINUM</span>
                <span className="font-heading text-xl font-bold text-[#352043]">{metrics.platinumCount}</span>
              </div>
              <div className="h-6 w-[1px] bg-[#E9DED3]" />
              <div>
                <span className="text-[10px] text-[#DFC47A] font-extrabold block">DIAMOND</span>
                <span className="font-heading text-xl font-bold text-[#47206A]">{metrics.diamondCount}</span>
              </div>
            </div>
            <span className="text-[11px] text-[#5E5865] block">Active Subscriptions</span>
          </div>

          <div className="p-5 rounded-3xl bg-white border border-[#DFC47A]/60 shadow-md space-y-2">
            <div className="flex items-center justify-between text-[#8C5D00]">
              <span className="text-xs font-bold uppercase tracking-wider">Gateway Status</span>
              <CreditCard className="w-5 h-5 text-[#8C5D00]" />
            </div>
            <div className="flex items-center gap-2 pt-1">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-bold text-sm text-[#352043]">Cashfree SANDBOX Live</span>
            </div>
            <span className="text-[11px] text-[#5E5865] block">
              Auto Webhook & Real-time Verification
            </span>
          </div>
        </div>

        {/* Filter Controls Bar */}
        <div className="p-4 sm:p-5 rounded-3xl bg-white border border-[#DFC47A]/50 shadow-md space-y-4">
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
            
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-[#8C5D00] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search by Member Name, Email, Phone, Member ID, or Order ID..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#E9DED3] focus:border-[#C8A34A] focus:outline-none text-xs sm:text-sm font-medium bg-[#FAF5EF]/40"
              />
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-1.5 bg-[#FAF5EF] p-1 rounded-xl border border-[#E9DED3]">
                <span className="text-[10px] font-extrabold uppercase text-[#8C5D00] px-2 flex items-center gap-1">
                  <Filter className="w-3 h-3" /> Status:
                </span>
                {['ALL', 'SUCCESS', 'PENDING', 'FAILED'].map((st) => (
                  <button
                    key={st}
                    onClick={() => setSelectedStatus(st)}
                    className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                      selectedStatus === st
                        ? 'bg-[#352043] text-white shadow-xs'
                        : 'text-[#352043] hover:bg-white'
                    }`}
                  >
                    {st}
                  </button>
                ))}
              </div>

              {/* Tier Selector */}
              <select
                value={selectedTier}
                onChange={(e) => setSelectedTier(e.target.value)}
                className="px-4 py-2 rounded-xl border border-[#E9DED3] text-xs font-bold bg-[#FAF5EF] focus:outline-none text-[#352043]"
              >
                <option value="ALL">All Tiers</option>
                <option value="gold">Gold (₹500)</option>
                <option value="platinum">Platinum (₹1,500)</option>
                <option value="diamond">Diamond (₹5,000)</option>
              </select>
            </div>

          </div>
        </div>

        {/* Member Table */}
        <div className="bg-white rounded-3xl border border-[#DFC47A]/60 shadow-xl overflow-hidden">
          <div className="p-5 border-b border-[#E9DED3] flex items-center justify-between bg-[#FAF5EF]/50">
            <h3 className="font-heading font-bold text-lg text-[#352043] flex items-center gap-2">
              <Users className="w-5 h-5 text-[#C8A34A]" />
              <span>Subscriber Records ({filteredMembers.length})</span>
            </h3>
            <span className="text-xs text-[#5E5865] font-medium">
              Showing {filteredMembers.length} of {members.length} members
            </span>
          </div>

          <div className="overflow-x-auto [scrollbar-width:thin]">
            <table className="w-full text-left text-xs font-body">
              <thead className="bg-[#352043] text-[#DFC47A] font-bold uppercase text-[10px] tracking-wider border-b border-[#DFC47A]/30">
                <tr>
                  <th className="py-4 px-4 sm:px-6">Member & Plan</th>
                  <th className="py-4 px-4">Contact Info</th>
                  <th className="py-4 px-4">Amount</th>
                  <th className="py-4 px-4">Payment Status</th>
                  <th className="py-4 px-4">Gateway Reference</th>
                  <th className="py-4 px-4">Date</th>
                  <th className="py-4 px-4 sm:px-6 text-center">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E9DED3]">
                {loading ? (
                  <tr>
                    <td colSpan={7} className="py-12 text-center text-[#5E5865]">
                      <div className="flex flex-col items-center gap-2">
                        <span className="w-6 h-6 border-2 border-[#352043] border-t-transparent rounded-full animate-spin" />
                        <span className="text-xs font-bold">Loading member database...</span>
                      </div>
                    </td>
                  </tr>
                ) : filteredMembers.length === 0 ? (
                  <tr>
                    <td colSpan={7} className="py-12 text-center text-[#5E5865]">
                      <div className="space-y-1">
                        <p className="font-bold text-sm text-[#352043]">No member records found</p>
                        <p className="text-xs text-[#5E5865]">Try adjusting your search query or status filter.</p>
                      </div>
                    </td>
                  </tr>
                ) : (
                  filteredMembers.map((member, idx) => {
                    const isSuccess = member.paymentStatus?.toUpperCase() === 'SUCCESS';
                    const isPending = member.paymentStatus?.toUpperCase() === 'PENDING';

                    return (
                      <tr key={member.id || idx} className="hover:bg-[#FAF5EF]/60 transition-colors">
                        
                        {/* Member & Plan */}
                        <td className="py-4 px-4 sm:px-6 space-y-1">
                          <div className="font-heading font-extrabold text-sm text-[#352043] flex items-center gap-2">
                            <span>{member.fullName}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="px-2 py-0.5 rounded-full bg-[#FAF5EF] text-[#8C5D00] font-mono text-[10px] font-bold border border-[#DFC47A]/50">
                              {member.memberId}
                            </span>
                            <span className={`px-2 py-0.5 rounded-full text-[10px] font-extrabold uppercase ${
                              member.tierName?.toLowerCase().includes('diamond')
                                ? 'bg-[#352043] text-[#DFC47A]'
                                : 'bg-[#DFC47A]/30 text-[#8C5D00]'
                            }`}>
                              {member.tierName} Plan
                            </span>
                          </div>
                        </td>

                        {/* Contact Info */}
                        <td className="py-4 px-4 space-y-1">
                          <div className="flex items-center gap-1.5 text-xs text-[#352043] font-medium">
                            <Mail className="w-3.5 h-3.5 text-[#8C5D00] shrink-0" />
                            <span>{member.email}</span>
                          </div>
                          <div className="flex items-center gap-1.5 text-xs text-[#5E5865]">
                            <Phone className="w-3.5 h-3.5 text-[#8C5D00] shrink-0" />
                            <span>{member.phone}</span>
                            {member.city && <span className="text-[10px] text-[#8C5D00]">({member.city})</span>}
                          </div>
                        </td>

                        {/* Amount */}
                        <td className="py-4 px-4">
                          <span className="font-heading text-sm font-extrabold text-[#352043]">
                            ₹{member.amount?.toLocaleString('en-IN')}
                          </span>
                        </td>

                        {/* Payment Status */}
                        <td className="py-4 px-4">
                          {isSuccess ? (
                            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-[10px] font-extrabold uppercase border border-emerald-300">
                              <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                              <span>PAID / SUCCESS</span>
                            </span>
                          ) : isPending ? (
                            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-amber-100 text-amber-700 text-[10px] font-extrabold uppercase border border-amber-300">
                              <Clock className="w-3 h-3 text-amber-600" />
                              <span>PENDING</span>
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-rose-100 text-rose-700 text-[10px] font-extrabold uppercase border border-rose-300">
                              <XCircle className="w-3 h-3 text-rose-600" />
                              <span>FAILED</span>
                            </span>
                          )}
                        </td>

                        {/* Gateway Ref */}
                        <td className="py-4 px-4 space-y-0.5 font-mono text-[11px]">
                          <span className="text-[#352043] font-bold block">{member.cfOrderId}</span>
                          <span className="text-[10px] text-[#8C5D00] block">
                            Method: {member.paymentMethod || 'Cashfree'}
                          </span>
                        </td>

                        {/* Date */}
                        <td className="py-4 px-4 text-xs text-[#5E5865] whitespace-nowrap">
                          {new Date(member.createdAt).toLocaleDateString('en-IN', {
                            day: 'numeric',
                            month: 'short',
                            year: 'numeric'
                          })}
                        </td>

                        {/* Delete Action Button */}
                        <td className="py-4 px-4 sm:px-6 text-center">
                          <button
                            onClick={() => handleDeleteMember(member)}
                            title={`Delete record for ${member.fullName}`}
                            className="p-2 rounded-xl bg-rose-50 hover:bg-rose-100 text-rose-600 hover:text-rose-700 border border-rose-200 transition-all duration-200 shadow-xs active:scale-95 group inline-flex items-center justify-center"
                          >
                            <Trash2 className="w-4 h-4 group-hover:scale-110 transition-transform" />
                          </button>
                        </td>

                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
        </div>

      </div>

    </div>
  );
}
