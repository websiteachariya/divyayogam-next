'use client';

export const dynamic = 'force-dynamic';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import {
  ShieldCheck,
  Users,
  ShoppingBag,
  DollarSign,
  Crown,
  BookOpen,
  Award,
  Sparkles,
  Search,
  CheckCircle2,
  Lock,
  Unlock,
  LogOut,
  RefreshCw,
  Trash2,
  Filter,
  X,
  Calendar,
  Download
} from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function AdminDashboardPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<'overview' | 'users' | 'orders' | 'classes'>('overview');
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState<any>(null);
  const [users, setUsers] = useState<any[]>([]);
  const [orders, setOrders] = useState<any[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [updatingUserClass, setUpdatingUserClass] = useState(false);

  // User filter states
  const [userMembershipFilter, setUserMembershipFilter] = useState<string>('ALL');
  const [userClassProgressFilter, setUserClassProgressFilter] = useState<string>('ALL');

  // Order filter states
  const [orderSearch, setOrderSearch] = useState('');
  const [orderTypeFilter, setOrderTypeFilter] = useState<string>('ALL');
  const [orderStatusFilter, setOrderStatusFilter] = useState<string>('ALL');
  const [orderDateFrom, setOrderDateFrom] = useState<string>('');
  const [orderDateTo, setOrderDateTo] = useState<string>('');

  useEffect(() => {
    fetchAdminData();
  }, []);

  const fetchAdminData = async () => {
    setLoading(true);
    try {
      const statsRes = await fetch('/api/admin/stats');
      const statsData = await statsRes.json();

      if (!statsRes.ok || !statsData.success) {
        router.push('/admin/login');
        return;
      }

      setStats(statsData.stats);

      const usersRes = await fetch('/api/admin/users');
      const usersData = await usersRes.json();
      if (usersData.success) setUsers(usersData.users);

      const ordersRes = await fetch('/api/admin/orders');
      const ordersData = await ordersRes.json();
      if (ordersData.success) setOrders(ordersData.orders);
    } catch (err) {
      router.push('/admin/login');
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateClassStatus = async (userId: string, classId: string, status: string) => {
    setUpdatingUserClass(true);
    try {
      const res = await fetch('/api/admin/class-progress', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId, classId, status }),
      });

      const data = await res.json();
      if (!res.ok) {
        alert(data.error || 'Failed to update progress');
      } else {
        await fetchAdminData();
      }
    } catch (err: any) {
      alert(err.message || 'Error updating status');
    } finally {
      setUpdatingUserClass(false);
    }
  };

  const handleDeleteOrder = async (orderId: string, orderNumber: string) => {
    if (!confirm(`Are you sure you want to delete order log ${orderNumber}? This action cannot be undone.`)) {
      return;
    }

    try {
      const res = await fetch(`/api/admin/orders?id=${orderId}`, {
        method: 'DELETE',
      });
      const data = await res.json();
      if (!res.ok) {
        alert(data.error || 'Failed to delete order');
      } else {
        await fetchAdminData();
      }
    } catch (err: any) {
      alert(err.message || 'Error deleting order');
    }
  };

  const handleLogout = async () => {
    await fetch('/api/auth/logout', { method: 'POST' });
    router.push('/admin/login');
  };

  const filteredUsers = users.filter((u) => {
    // Text search
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      const matchesSearch = u.name.toLowerCase().includes(q) || u.email.toLowerCase().includes(q) || u.mobile.includes(q);
      if (!matchesSearch) return false;
    }
    // Membership level filter
    if (userMembershipFilter !== 'ALL') {
      const activeMem = u.memberships?.[0];
      if (userMembershipFilter === 'NONE') {
        if (activeMem) return false;
      } else {
        if (!activeMem || activeMem.level !== userMembershipFilter) return false;
      }
    }
    // Class progress filter
    if (userClassProgressFilter !== 'ALL') {
      const hasStatus = u.enrollments?.some((enr: any) => enr.status === userClassProgressFilter);
      if (!hasStatus) return false;
    }
    return true;
  });

  const hasActiveUserFilters = searchQuery || userMembershipFilter !== 'ALL' || userClassProgressFilter !== 'ALL';

  const clearAllUserFilters = () => {
    setSearchQuery('');
    setUserMembershipFilter('ALL');
    setUserClassProgressFilter('ALL');
  };

  // Export Users to CSV
  const exportUsersToCSV = () => {
    const headers = ['Name', 'Email', 'Mobile', 'Age', 'Gender', 'Occupation', 'Organisation', 'Membership Level', 'Discount %', 'Joined Date', 'Class Progress'];
    const rows = filteredUsers.map((u) => {
      const activeMem = u.memberships?.[0];
      const classProgress = u.enrollments?.map((enr: any) => `${enr.classItem?.name || 'Class'}:${enr.status}`).join(' | ') || 'None';
      return [
        u.name,
        u.email,
        u.mobile,
        u.age,
        u.gender,
        u.occupation || '',
        u.organisation || '',
        activeMem ? activeMem.level : 'None',
        activeMem ? activeMem.discountPercent : '0',
        new Date(u.createdAt).toLocaleDateString(),
        classProgress
      ];
    });

    const csvContent = [headers, ...rows].map(row => row.map((cell: any) => `"${String(cell).replace(/"/g, '""')}"`).join(',')).join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `divyayogam_users_${new Date().toISOString().split('T')[0]}.csv`;
    link.click();
    URL.revokeObjectURL(url);
  };

  // Export Orders to CSV
  const exportOrdersToCSV = () => {
    const headers = ['Order No', 'User', 'Mobile', 'Type', 'Subtotal', 'Discount', 'Discount %', 'Final Amount', 'Status', 'Date'];
    const rows = filteredOrders.map((ord) => [
      ord.orderNumber,
      ord.user?.name || '',
      ord.user?.mobile || '',
      ord.orderType,
      ord.subtotal,
      ord.discount || 0,
      ord.discountPercentage || 0,
      ord.finalAmount,
      ord.status,
      new Date(ord.createdAt).toLocaleDateString()
    ]);

    const csvContent = [headers, ...rows].map(row => row.map((cell: any) => `"${String(cell).replace(/"/g, '""')}"`).join(',')).join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `divyayogam_orders_${new Date().toISOString().split('T')[0]}.csv`;
    link.click();
    URL.revokeObjectURL(url);
  };

  // Filter orders based on all active filters
  const filteredOrders = orders.filter((ord) => {
    // Text search: order number, user name, mobile
    if (orderSearch) {
      const q = orderSearch.toLowerCase();
      const matchesSearch =
        ord.orderNumber?.toLowerCase().includes(q) ||
        ord.user?.name?.toLowerCase().includes(q) ||
        ord.user?.mobile?.includes(q);
      if (!matchesSearch) return false;
    }
    // Type filter
    if (orderTypeFilter !== 'ALL' && ord.orderType !== orderTypeFilter) return false;
    // Status filter
    if (orderStatusFilter !== 'ALL' && ord.status !== orderStatusFilter) return false;
    // Date range filter
    if (orderDateFrom) {
      const orderDate = new Date(ord.createdAt);
      const fromDate = new Date(orderDateFrom);
      fromDate.setHours(0, 0, 0, 0);
      if (orderDate < fromDate) return false;
    }
    if (orderDateTo) {
      const orderDate = new Date(ord.createdAt);
      const toDate = new Date(orderDateTo);
      toDate.setHours(23, 59, 59, 999);
      if (orderDate > toDate) return false;
    }
    return true;
  });

  const hasActiveOrderFilters = orderSearch || orderTypeFilter !== 'ALL' || orderStatusFilter !== 'ALL' || orderDateFrom || orderDateTo;

  const clearAllOrderFilters = () => {
    setOrderSearch('');
    setOrderTypeFilter('ALL');
    setOrderStatusFilter('ALL');
    setOrderDateFrom('');
    setOrderDateTo('');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#FAF7F2] flex items-center justify-center">
        <div className="text-center font-heading text-[#47206A]">
          <div className="w-10 h-10 border-4 border-[#DFC47A] border-t-[#47206A] rounded-full animate-spin mx-auto mb-3" />
          <p className="text-xs font-bold uppercase tracking-wider">Loading Admin Analytics...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#47206A] flex flex-col justify-between">
      <Navbar />

      <main className="pt-44 sm:pt-48 pb-20 sm:pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full flex-1 space-y-8">
        {/* Admin Header */}
        <div className="bg-gradient-to-r from-[#47206A] via-[#3B104E] to-[#20052C] rounded-3xl border-2 border-[#DFC47A] p-6 sm:p-8 text-white shadow-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#DFC47A]/20 text-[#DFC47A] text-xs font-bold border border-[#DFC47A]/40 uppercase tracking-wider mb-2">
              <ShieldCheck className="w-3.5 h-3.5" /> Executive Portal
            </div>
            <h1 className="text-2xl sm:text-4xl font-extrabold font-heading text-white tracking-wide">
              Admin Control Center
            </h1>
            <p className="text-xs sm:text-sm text-[#DFC47A]">
              Real-time Neon DB records, Cashfree order audits, user progress management.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={fetchAdminData}
              className="px-4 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider border border-white/20 transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <RefreshCw className="w-4 h-4 text-[#DFC47A]" /> Refresh
            </button>
            <button
              onClick={handleLogout}
              className="px-4 py-2.5 rounded-full bg-red-600/80 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <LogOut className="w-4 h-4" /> Logout
            </button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex gap-2 border-b border-[#E9DED3] pb-2 overflow-x-auto">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-5 py-2.5 rounded-full font-bold text-xs uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer ${
              activeTab === 'overview'
                ? 'bg-[#47206A] text-[#DFC47A] shadow-md'
                : 'bg-[#FAF7F2] text-[#47206A] hover:bg-[#E9DED3]'
            }`}
          >
            Overview & Metrics
          </button>
          <button
            onClick={() => setActiveTab('users')}
            className={`px-5 py-2.5 rounded-full font-bold text-xs uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer ${
              activeTab === 'users'
                ? 'bg-[#47206A] text-[#DFC47A] shadow-md'
                : 'bg-[#FAF7F2] text-[#47206A] hover:bg-[#E9DED3]'
            }`}
          >
            Users & Progress ({users.length})
          </button>
          <button
            onClick={() => setActiveTab('orders')}
            className={`px-5 py-2.5 rounded-full font-bold text-xs uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer ${
              activeTab === 'orders'
                ? 'bg-[#47206A] text-[#DFC47A] shadow-md'
                : 'bg-[#FAF7F2] text-[#47206A] hover:bg-[#E9DED3]'
            }`}
          >
            Orders & Revenue ({orders.length})
          </button>
        </div>

        {/* TAB 1: OVERVIEW METRICS */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              <div className="p-6 rounded-3xl bg-white border-2 border-[#DFC47A] shadow-lg space-y-2">
                <span className="text-xs font-bold text-[#8C5D00] uppercase tracking-wider">Total Revenue</span>
                <h3 className="text-3xl font-extrabold text-[#47206A]">₹{stats?.totalRevenue?.toLocaleString()}</h3>
                <p className="text-[11px] text-gray-500 font-semibold">Confirmed Cashfree payments</p>
              </div>

              <div className="p-6 rounded-3xl bg-white border-2 border-[#DFC47A] shadow-lg space-y-2">
                <span className="text-xs font-bold text-[#8C5D00] uppercase tracking-wider">Total Registered Users</span>
                <h3 className="text-3xl font-extrabold text-[#47206A]">{stats?.totalUsers}</h3>
                <p className="text-[11px] text-gray-500 font-semibold">Active accounts</p>
              </div>

              <div className="p-6 rounded-3xl bg-white border-2 border-[#DFC47A] shadow-lg space-y-2">
                <span className="text-xs font-bold text-[#8C5D00] uppercase tracking-wider">Paid Orders</span>
                <h3 className="text-3xl font-extrabold text-emerald-700">{stats?.paidOrders}</h3>
                <p className="text-[11px] text-gray-500 font-semibold">{stats?.pendingOrders} Pending • {stats?.failedOrders} Failed</p>
              </div>

              <div className="p-6 rounded-3xl bg-white border-2 border-[#DFC47A] shadow-lg space-y-2">
                <span className="text-xs font-bold text-[#8C5D00] uppercase tracking-wider">Active Memberships</span>
                <h3 className="text-3xl font-extrabold text-[#47206A]">{stats?.activeMemberships}</h3>
                <p className="text-[11px] text-gray-500 font-semibold">Gold, Platinum & Diamond</p>
              </div>
            </div>

            {/* Revenue breakdown by category */}
            <div className="bg-white rounded-3xl border-2 border-[#DFC47A] p-6 sm:p-8 shadow-xl space-y-4">
              <h2 className="text-xl font-extrabold font-heading text-[#47206A] border-b border-gray-100 pb-3">
                Revenue Breakdown by Category
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E9DED3]">
                  <span className="text-xs text-gray-500 font-bold uppercase">Membership</span>
                  <h4 className="text-2xl font-extrabold text-[#47206A] mt-1">₹{stats?.membershipRevenue?.toLocaleString()}</h4>
                </div>
                <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E9DED3]">
                  <span className="text-xs text-gray-500 font-bold uppercase">Classes</span>
                  <h4 className="text-2xl font-extrabold text-[#47206A] mt-1">₹{stats?.classRevenue?.toLocaleString()}</h4>
                </div>
                <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E9DED3]">
                  <span className="text-xs text-gray-500 font-bold uppercase">Divya Yoga Maala</span>
                  <h4 className="text-2xl font-extrabold text-[#47206A] mt-1">₹{stats?.maalaRevenue?.toLocaleString()}</h4>
                </div>
                <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E9DED3]">
                  <span className="text-xs text-gray-500 font-bold uppercase">Shambala Contribution</span>
                  <h4 className="text-2xl font-extrabold text-[#47206A] mt-1">₹{stats?.contributionRevenue?.toLocaleString()}</h4>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: USERS & CLASS PROGRESSION MANAGER */}
        {activeTab === 'users' && (
          <div className="bg-white rounded-3xl border-2 border-[#DFC47A] p-6 sm:p-8 shadow-xl space-y-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-gray-100 pb-4">
              <h2 className="text-xl font-extrabold font-heading text-[#47206A]">
                User Accounts & Class Progress Controls
              </h2>
              <div className="flex items-center gap-2">
                {hasActiveUserFilters && (
                  <button
                    onClick={clearAllUserFilters}
                    className="px-3 py-1.5 rounded-full bg-red-50 text-red-700 hover:bg-red-100 text-[11px] font-bold border border-red-200 transition-all inline-flex items-center gap-1 cursor-pointer"
                  >
                    <X className="w-3.5 h-3.5" /> Clear Filters
                  </button>
                )}
                <button
                  onClick={exportUsersToCSV}
                  className="px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-700 hover:bg-emerald-100 text-[11px] font-bold border border-emerald-200 transition-all inline-flex items-center gap-1 cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" /> Export CSV
                </button>
              </div>
            </div>

            {/* User Filter Toolbar */}
            <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E9DED3] space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-[#47206A] uppercase tracking-wider">
                <Filter className="w-3.5 h-3.5 text-[#8C5D00]" /> Filters & Search
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {/* Search */}
                <div className="relative lg:col-span-2">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search by name, email, or mobile..."
                    className="w-full pl-9 pr-3 py-2 bg-white border border-[#E9DED3] rounded-xl text-xs outline-none focus:border-[#DFC47A] transition-colors"
                  />
                </div>

                {/* Membership Level Filter */}
                <select
                  value={userMembershipFilter}
                  onChange={(e) => setUserMembershipFilter(e.target.value)}
                  className="w-full py-2 px-3 bg-white border border-[#E9DED3] rounded-xl text-xs font-semibold text-[#47206A] outline-none cursor-pointer focus:border-[#DFC47A] transition-colors"
                >
                  <option value="ALL">All Memberships</option>
                  <option value="GOLD">👑 Gold</option>
                  <option value="PLATINUM">💎 Platinum</option>
                  <option value="DIAMOND">✨ Diamond</option>
                  <option value="NONE">❌ No Membership</option>
                </select>

                {/* Class Progress Filter */}
                <select
                  value={userClassProgressFilter}
                  onChange={(e) => setUserClassProgressFilter(e.target.value)}
                  className="w-full py-2 px-3 bg-white border border-[#E9DED3] rounded-xl text-xs font-semibold text-[#47206A] outline-none cursor-pointer focus:border-[#DFC47A] transition-colors"
                >
                  <option value="ALL">All Class Progress</option>
                  <option value="LOCKED">🔒 Locked</option>
                  <option value="AVAILABLE">🔓 Available</option>
                  <option value="PURCHASED">💰 Purchased</option>
                  <option value="IN_PROGRESS">📖 In Progress</option>
                  <option value="COMPLETED">✅ Completed</option>
                </select>
              </div>
            </div>

            {/* Results Summary */}
            <div className="text-[11px] font-semibold text-gray-500">
              Showing <span className="font-extrabold text-[#47206A]">{filteredUsers.length}</span> of{' '}
              <span className="font-extrabold text-[#47206A]">{users.length}</span> users
              {hasActiveUserFilters && (
                <span className="ml-2 px-2 py-0.5 bg-[#DFC47A]/20 text-[#8C5D00] rounded-full font-bold">Filtered</span>
              )}
            </div>

            <div className="space-y-6">
              {filteredUsers.map((u) => {
                const activeMem = u.memberships?.[0];

                return (
                  <div key={u.id} className="p-5 rounded-2xl bg-[#FAF7F2] border border-[#E9DED3] space-y-4">
                    <div className="flex flex-col sm:flex-row justify-between border-b border-gray-200 pb-3 gap-2">
                      <div>
                        <h3 className="text-lg font-extrabold text-[#47206A]">{u.name}</h3>
                        <p className="text-xs text-[#8C5D00] font-semibold">
                          {u.email} • {u.mobile} • {u.age} Yrs ({u.gender})
                        </p>
                        <p className="text-[11px] text-gray-500 font-medium mt-0.5">
                          {u.occupation} | {u.organisation}
                        </p>
                      </div>

                      <div className="text-left sm:text-right">
                        {activeMem ? (
                          <span className="px-3 py-1 rounded-full bg-[#47206A] text-[#DFC47A] text-xs font-bold">
                            {activeMem.level} Member ({activeMem.discountPercent}% OFF)
                          </span>
                        ) : (
                          <span className="px-3 py-1 rounded-full bg-gray-200 text-gray-700 text-xs font-bold">
                            No Active Membership
                          </span>
                        )}
                        <p className="text-[11px] text-gray-400 mt-1">
                          Joined: {new Date(u.createdAt).toLocaleDateString()}
                        </p>
                      </div>
                    </div>

                    {/* Class Progression Controls for this User */}
                    <div>
                      <h4 className="text-xs font-bold text-[#47206A] uppercase tracking-wider mb-2">
                        6-Level Class Progression Status:
                      </h4>

                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                        {u.enrollments?.map((enr: any) => (
                          <div key={enr.id} className="p-3 rounded-xl bg-white border border-gray-200 space-y-2">
                            <div className="flex justify-between items-center">
                              <span className="text-xs font-bold text-[#47206A]">{enr.classItem?.name}</span>
                              <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#FAF7F2] text-[#8C5D00]">
                                {enr.status}
                              </span>
                            </div>

                            {/* Status Change Control */}
                            <select
                              value={enr.status}
                              disabled={updatingUserClass}
                              onChange={(e) => handleUpdateClassStatus(u.id, enr.classId, e.target.value)}
                              className="w-full py-1.5 px-2 bg-[#FAF7F2] border border-gray-200 rounded text-xs font-semibold text-[#47206A] outline-none cursor-pointer"
                            >
                              <option value="LOCKED">LOCKED</option>
                              <option value="AVAILABLE">AVAILABLE</option>
                              <option value="PURCHASED">PURCHASED</option>
                              <option value="IN_PROGRESS">IN_PROGRESS</option>
                              <option value="COMPLETED">COMPLETED (Unlocks Next)</option>
                            </select>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
              {filteredUsers.length === 0 && (
                <div className="p-8 text-center text-gray-400 font-semibold rounded-2xl bg-[#FAF7F2] border border-[#E9DED3]">
                  No users match your filters. Try adjusting your search criteria.
                </div>
              )}
            </div>
          </div>
        )}

        {/* TAB 3: ORDERS & REVENUE TABLE */}
        {activeTab === 'orders' && (
          <div className="bg-white rounded-3xl border-2 border-[#DFC47A] p-6 sm:p-8 shadow-xl space-y-5">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-gray-100 pb-4">
              <h2 className="text-xl font-extrabold font-heading text-[#47206A]">
                Orders & Cashfree Payment Logs
              </h2>
              <div className="flex items-center gap-2">
                {hasActiveOrderFilters && (
                  <button
                    onClick={clearAllOrderFilters}
                    className="px-3 py-1.5 rounded-full bg-red-50 text-red-700 hover:bg-red-100 text-[11px] font-bold border border-red-200 transition-all inline-flex items-center gap-1 cursor-pointer"
                  >
                    <X className="w-3.5 h-3.5" /> Clear Filters
                  </button>
                )}
                <button
                  onClick={exportOrdersToCSV}
                  className="px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-700 hover:bg-emerald-100 text-[11px] font-bold border border-emerald-200 transition-all inline-flex items-center gap-1 cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" /> Export CSV
                </button>
              </div>
            </div>

            {/* Filter Toolbar */}
            <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E9DED3] space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-[#47206A] uppercase tracking-wider">
                <Filter className="w-3.5 h-3.5 text-[#8C5D00]" /> Filters & Search
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
                {/* Search */}
                <div className="relative lg:col-span-2">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400" />
                  <input
                    type="text"
                    value={orderSearch}
                    onChange={(e) => setOrderSearch(e.target.value)}
                    placeholder="Search order no, user, mobile..."
                    className="w-full pl-9 pr-3 py-2 bg-white border border-[#E9DED3] rounded-xl text-xs outline-none focus:border-[#DFC47A] transition-colors"
                  />
                </div>

                {/* Type Filter */}
                <select
                  value={orderTypeFilter}
                  onChange={(e) => setOrderTypeFilter(e.target.value)}
                  className="w-full py-2 px-3 bg-white border border-[#E9DED3] rounded-xl text-xs font-semibold text-[#47206A] outline-none cursor-pointer focus:border-[#DFC47A] transition-colors"
                >
                  <option value="ALL">All Types</option>
                  <option value="MEMBERSHIP">Membership</option>
                  <option value="CLASS">Class</option>
                  <option value="MAALA">Maala</option>
                  <option value="CONTRIBUTION">Contribution</option>
                </select>

                {/* Status Filter */}
                <select
                  value={orderStatusFilter}
                  onChange={(e) => setOrderStatusFilter(e.target.value)}
                  className="w-full py-2 px-3 bg-white border border-[#E9DED3] rounded-xl text-xs font-semibold text-[#47206A] outline-none cursor-pointer focus:border-[#DFC47A] transition-colors"
                >
                  <option value="ALL">All Status</option>
                  <option value="PAID">✅ Paid</option>
                  <option value="PENDING">⏳ Pending</option>
                  <option value="FAILED">❌ Failed</option>
                </select>
              </div>

              {/* Date Range */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                <div className="flex items-center gap-2">
                  <Calendar className="w-3.5 h-3.5 text-[#8C5D00]" />
                  <span className="text-[11px] font-bold text-[#47206A] uppercase">Date Range:</span>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="date"
                    value={orderDateFrom}
                    onChange={(e) => setOrderDateFrom(e.target.value)}
                    className="py-1.5 px-3 bg-white border border-[#E9DED3] rounded-xl text-xs outline-none cursor-pointer focus:border-[#DFC47A] transition-colors"
                  />
                  <span className="text-xs text-gray-400 font-bold">to</span>
                  <input
                    type="date"
                    value={orderDateTo}
                    onChange={(e) => setOrderDateTo(e.target.value)}
                    className="py-1.5 px-3 bg-white border border-[#E9DED3] rounded-xl text-xs outline-none cursor-pointer focus:border-[#DFC47A] transition-colors"
                  />
                </div>
              </div>
            </div>

            {/* Results Summary */}
            <div className="flex items-center justify-between text-[11px] font-semibold text-gray-500">
              <span>
                Showing <span className="font-extrabold text-[#47206A]">{filteredOrders.length}</span> of{' '}
                <span className="font-extrabold text-[#47206A]">{orders.length}</span> orders
                {hasActiveOrderFilters && (
                  <span className="ml-2 px-2 py-0.5 bg-[#DFC47A]/20 text-[#8C5D00] rounded-full font-bold">Filtered</span>
                )}
              </span>
              {filteredOrders.length > 0 && (
                <span>
                  Filtered Revenue:{' '}
                  <span className="font-extrabold text-[#47206A]">
                    ₹{filteredOrders.filter(o => o.status === 'PAID').reduce((sum: number, o: any) => sum + (o.finalAmount || 0), 0).toLocaleString()}
                  </span>
                </span>
              )}
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs text-[#47206A]">
                <thead>
                  <tr className="border-b border-[#E9DED3] bg-[#FAF7F2]">
                    <th className="p-3 font-extrabold uppercase">Order No</th>
                    <th className="p-3 font-extrabold uppercase">User</th>
                    <th className="p-3 font-extrabold uppercase">Type</th>
                    <th className="p-3 font-extrabold uppercase">Subtotal</th>
                    <th className="p-3 font-extrabold uppercase">Discount</th>
                    <th className="p-3 font-extrabold uppercase">Final</th>
                    <th className="p-3 font-extrabold uppercase">Status</th>
                    <th className="p-3 font-extrabold uppercase">Date</th>
                    <th className="p-3 font-extrabold uppercase text-center">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {filteredOrders.length === 0 ? (
                    <tr>
                      <td colSpan={9} className="p-8 text-center text-gray-400 font-semibold">
                        No orders match your filters. Try adjusting your search criteria.
                      </td>
                    </tr>
                  ) : (
                    filteredOrders.map((ord: any) => (
                      <tr key={ord.id} className="hover:bg-[#FAF5EF]/50">
                        <td className="p-3 font-mono font-bold">{ord.orderNumber}</td>
                        <td className="p-3 font-semibold">{ord.user?.name} ({ord.user?.mobile})</td>
                        <td className="p-3 font-bold text-[#8C5D00]">{ord.orderType}</td>
                        <td className="p-3 font-medium">₹{ord.subtotal}</td>
                        <td className="p-3 text-emerald-600 font-semibold">
                          {ord.discount > 0 ? `-₹${ord.discount} (${ord.discountPercentage}%)` : '₹0'}
                        </td>
                        <td className="p-3 font-extrabold text-[#47206A]">₹{ord.finalAmount}</td>
                        <td className="p-3">
                          <span
                            className={`px-2.5 py-1 rounded-full text-[10px] font-bold ${
                              ord.status === 'PAID'
                                ? 'bg-emerald-100 text-emerald-800'
                                : ord.status === 'PENDING'
                                ? 'bg-amber-100 text-amber-800'
                                : 'bg-red-100 text-red-800'
                            }`}
                          >
                            {ord.status}
                          </span>
                        </td>
                        <td className="p-3 text-gray-500">{new Date(ord.createdAt).toLocaleDateString()}</td>
                        <td className="p-3 text-center">
                          <button
                            onClick={() => handleDeleteOrder(ord.id, ord.orderNumber)}
                            className="px-2.5 py-1 rounded-lg bg-red-50 text-red-700 hover:bg-red-600 hover:text-white text-[11px] font-bold border border-red-200 transition-all inline-flex items-center gap-1 cursor-pointer"
                            title="Delete Order Log"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                            <span>Delete</span>
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
