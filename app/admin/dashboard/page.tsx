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
  Trash2
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
    if (!searchQuery) return true;
    const q = searchQuery.toLowerCase();
    return u.name.toLowerCase().includes(q) || u.email.toLowerCase().includes(q) || u.mobile.includes(q);
  });

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

              <div className="relative w-full sm:w-72">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search user by name, email, or mobile..."
                  className="w-full pl-10 pr-4 py-2 bg-[#FAF7F2] border border-[#E9DED3] rounded-full text-xs outline-none"
                />
              </div>
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
            </div>
          </div>
        )}

        {/* TAB 3: ORDERS & REVENUE TABLE */}
        {activeTab === 'orders' && (
          <div className="bg-white rounded-3xl border-2 border-[#DFC47A] p-6 sm:p-8 shadow-xl space-y-4">
            <h2 className="text-xl font-extrabold font-heading text-[#47206A] border-b border-gray-100 pb-3">
              Orders & Cashfree Payment Logs
            </h2>

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
                  {orders.map((ord: any) => (
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
                  ))}
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
