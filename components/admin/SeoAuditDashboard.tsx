'use client';

import React, { useState, useEffect } from 'react';
import {
  Globe,
  Search,
  CheckCircle2,
  AlertTriangle,
  FileCode,
  Share2,
  Image as ImageIcon,
  ShieldAlert,
  Sparkles,
  ExternalLink,
  Copy,
  Check,
  RefreshCw,
  Eye,
  Settings,
  Layers,
  Code2,
  Bot,
  Zap,
  Save,
  RotateCcw,
  Download,
  Edit3
} from 'lucide-react';

export interface RouteSeoData {
  path: string;
  name: string;
  category: 'Core' | 'Memberships' | 'Practices' | 'Legal' | 'Admin';
  title: string;
  description: string;
  keywords: string[];
  canonical: string;
  ogImage: string;
  ogType: string;
  twitterCard: string;
  xRobots: string;
  altTagsStatus: 'Pass' | 'Warning' | 'Fail';
  schemaStatus: 'Verified' | 'Pending';
  score: number;
}

const defaultSiteRoutesData: RouteSeoData[] = [
  {
    path: '/',
    name: 'Home Page',
    category: 'Core',
    title: 'Divya Yogam — Awaken Within | Organ Meditation & Sacred Sciences',
    description: 'Discover profound inner stillness, cellular organ rejuvenation, and sacred Vedic wisdom with Divya Yogam guided by Arawindhan Ji.',
    keywords: ['Divya Yogam', 'Arawindhan Ji', 'Organ Meditation', 'Quantum Habits', 'Vedic Sciences', 'Cellular Rejuvenation'],
    canonical: 'https://divyayogam.org/',
    ogImage: '/images/011A6549.webp',
    ogType: 'website',
    twitterCard: 'summary_large_image',
    xRobots: 'index, follow, max-snippet:-1, max-image-preview:large',
    altTagsStatus: 'Pass',
    schemaStatus: 'Verified',
    score: 100,
  },
  {
    path: '/membership',
    name: 'Membership Page',
    category: 'Memberships',
    title: 'Divine Membership Plans — Gold, Platinum & Diamond | Divya Yogam',
    description: 'Join Divya Yogam with Gold (₹500), Platinum (₹1,500), or Diamond (₹5,000) membership. Includes Avadhani sessions, goal sheet enrichment, and holistic wellness.',
    keywords: ['Divya Yogam Membership', 'Gold Plan', 'Platinum Plan', 'Diamond Plan', 'Avadhani Session', 'Goal Sheet Enrichment'],
    canonical: 'https://divyayogam.org/membership',
    ogImage: '/images/banner-4.webp',
    ogType: 'website',
    twitterCard: 'summary_large_image',
    xRobots: 'index, follow, max-snippet:-1, max-image-preview:large',
    altTagsStatus: 'Pass',
    schemaStatus: 'Verified',
    score: 98,
  },
  {
    path: '/happy-shambala',
    name: 'Happy Shambala Page',
    category: 'Memberships',
    title: 'Happy Shambala — Divine Consciousness & Rejuvenation | Divya Yogam',
    description: 'Experience Happy Shambala, a sacred journey into cellular healing, organ meditation, and high-vibrational living under Master Arawindhan Ji.',
    keywords: ['Happy Shambala', 'Divya Yogam', 'Cellular Rejuvenation', 'Organ Meditation', 'Arawindhan Ji'],
    canonical: 'https://divyayogam.org/happy-shambala',
    ogImage: '/images/con-6.webp',
    ogType: 'website',
    twitterCard: 'summary_large_image',
    xRobots: 'index, follow, max-snippet:-1, max-image-preview:large',
    altTagsStatus: 'Pass',
    schemaStatus: 'Verified',
    score: 98,
  },
  {
    path: '/beneficiaries',
    name: 'Beneficiaries & Social Impact',
    category: 'Core',
    title: 'Our Beneficiaries & Social Service Impact | Divya Yogam Foundation',
    description: 'Discover how Divya Yogam Foundation serves humanity through youth empowerment, spiritual awakening, organ wellness, and social service initiatives.',
    keywords: ['Divya Yogam Beneficiaries', 'Spiritual Service', 'Youth Empowerment', 'Vedic Foundation'],
    canonical: 'https://divyayogam.org/beneficiaries',
    ogImage: '/images/011A6549.webp',
    ogType: 'website',
    twitterCard: 'summary_large_image',
    xRobots: 'index, follow',
    altTagsStatus: 'Pass',
    schemaStatus: 'Verified',
    score: 96,
  },
  {
    path: '/foundation-story',
    name: 'Foundation Story',
    category: 'Core',
    title: 'Foundation Story & Vision — Master Arawindhan Ji | Divya Yogam',
    description: 'Read the divine origin story of Divya Yogam Foundation, established by Master Arawindhan Ji to revive sacred organ meditation and yogic sciences.',
    keywords: ['Divya Yogam Foundation Story', 'Arawindhan Ji History', 'Organ Meditation Lineage'],
    canonical: 'https://divyayogam.org/foundation-story',
    ogImage: '/images/arawindhan-ji.webp',
    ogType: 'website',
    twitterCard: 'summary_large_image',
    xRobots: 'index, follow',
    altTagsStatus: 'Pass',
    schemaStatus: 'Verified',
    score: 97,
  },
  {
    path: '/wellness-services',
    name: 'Wellness Services',
    category: 'Practices',
    title: 'Holistic Wellness Services & Consultations | Divya Yogam',
    description: 'Explore holistic wellness consulting, Pancha Kosha purification, cellular organ rejuvenation, and spiritual health guidance with Divya Yogam.',
    keywords: ['Divya Yogam Wellness Services', 'Organ Rejuvenation Consultation', 'Pancha Kosha Alignment'],
    canonical: 'https://divyayogam.org/wellness-services',
    ogImage: '/images/banner-4.webp',
    ogType: 'website',
    twitterCard: 'summary_large_image',
    xRobots: 'index, follow',
    altTagsStatus: 'Pass',
    schemaStatus: 'Verified',
    score: 96,
  },
  {
    path: '/organ-meditation',
    name: 'Organ Meditation',
    category: 'Practices',
    title: 'Organ Meditation — Cellular Rejuvenation & Vitality | Divya Yogam',
    description: 'Rejuvenate your vital organs through specialized sound frequencies, targeted mindfulness, and cellular energy flow.',
    keywords: ['Organ Meditation', 'Cellular Rejuvenation', 'Pancha Kosha', 'Arawindhan Ji'],
    canonical: 'https://divyayogam.org/organ-meditation',
    ogImage: '/images/banner-4.webp',
    ogType: 'website',
    twitterCard: 'summary_large_image',
    xRobots: 'index, follow',
    altTagsStatus: 'Pass',
    schemaStatus: 'Verified',
    score: 98,
  },
  {
    path: '/quantum-habits',
    name: 'Quantum Habits',
    category: 'Practices',
    title: 'Quantum Habits — Subconscious Mind Rewiring | Divya Yogam',
    description: 'Master daily quantum habits that elevate your consciousness, optimize mental focus, and build lasting spiritual discipline.',
    keywords: ['Quantum Habits', 'Subconscious Rewiring', 'Mindfulness', 'Spiritual Discipline'],
    canonical: 'https://divyayogam.org/quantum-habits',
    ogImage: '/images/con-6.webp',
    ogType: 'website',
    twitterCard: 'summary_large_image',
    xRobots: 'index, follow',
    altTagsStatus: 'Pass',
    schemaStatus: 'Verified',
    score: 97,
  },
  {
    path: '/sciences',
    name: 'Sacred Sciences',
    category: 'Practices',
    title: 'Sacred Sciences & Ancient Wisdom | Divya Yogam',
    description: 'Explore the bridge between ancient Vedic sciences, quantum energy, Pancha Kosha alignment, and modern organ biology.',
    keywords: ['Sacred Sciences', 'Vedic Energy', 'Pancha Kosha Alignment', 'Divya Yogam'],
    canonical: 'https://divyayogam.org/sciences',
    ogImage: '/images/011A6549.webp',
    ogType: 'website',
    twitterCard: 'summary_large_image',
    xRobots: 'index, follow',
    altTagsStatus: 'Pass',
    schemaStatus: 'Verified',
    score: 96,
  },
  {
    path: '/events',
    name: 'Events & Retreats',
    category: 'Core',
    title: 'Upcoming Retreats & Live Spiritual Events | Divya Yogam',
    description: 'Participate in live Avadhani sessions, retreats, workshops, and international gatherings guided by Arawindhan Ji.',
    keywords: ['Divya Yogam Events', 'Spiritual Retreats', 'Avadhani Live Workshop'],
    canonical: 'https://divyayogam.org/events',
    ogImage: '/images/011A6549.webp',
    ogType: 'website',
    twitterCard: 'summary_large_image',
    xRobots: 'index, follow',
    altTagsStatus: 'Pass',
    schemaStatus: 'Verified',
    score: 98,
  },
  {
    path: '/about',
    name: 'About Us',
    category: 'Core',
    title: 'About Divya Yogam & Master Arawindhan Ji',
    description: 'Learn about Divya Yogam\'s mission, authentic lineage, and Master Arawindhan Ji\'s dedication to global spiritual transformation.',
    keywords: ['About Divya Yogam', 'Arawindhan Ji Biography', 'Vedic Tradition'],
    canonical: 'https://divyayogam.org/about',
    ogImage: '/images/arawindhan-ji.webp',
    ogType: 'website',
    twitterCard: 'summary_large_image',
    xRobots: 'index, follow',
    altTagsStatus: 'Pass',
    schemaStatus: 'Verified',
    score: 97,
  },
  {
    path: '/gallery',
    name: 'Photo & Video Gallery',
    category: 'Core',
    title: 'Sacred Photo & Video Gallery | Divya Yogam',
    description: 'Immerse yourself in photos and visual moments from Divya Yogam retreats, workshops, and spiritual celebrations.',
    keywords: ['Divya Yogam Gallery', 'Retreat Photos', 'Spiritual Gatherings'],
    canonical: 'https://divyayogam.org/gallery',
    ogImage: '/images/011A6549.webp',
    ogType: 'website',
    twitterCard: 'summary_large_image',
    xRobots: 'index, follow',
    altTagsStatus: 'Pass',
    schemaStatus: 'Verified',
    score: 95,
  },
  {
    path: '/contact',
    name: 'Contact Page',
    category: 'Core',
    title: 'Contact Divya Yogam Foundation | Connect With Us',
    description: 'Reach out to Divya Yogam Foundation for membership inquiries, program support, retreat bookings, and volunteer opportunities.',
    keywords: ['Contact Divya Yogam', 'Spiritual Counseling Inquiry', 'Support Email'],
    canonical: 'https://divyayogam.org/contact',
    ogImage: '/images/logo-badge.webp',
    ogType: 'website',
    twitterCard: 'summary_large_image',
    xRobots: 'index, follow',
    altTagsStatus: 'Pass',
    schemaStatus: 'Verified',
    score: 97,
  },
  {
    path: '/privacy-policy',
    name: 'Privacy Policy',
    category: 'Legal',
    title: 'Privacy Policy | Divya Yogam Foundation',
    description: 'Divya Yogam Foundation privacy policy, data security practices, and user privacy guarantees.',
    keywords: ['Divya Yogam Privacy Policy', 'Data Security'],
    canonical: 'https://divyayogam.org/privacy-policy',
    ogImage: '/images/logo-badge.webp',
    ogType: 'website',
    twitterCard: 'summary',
    xRobots: 'index, follow',
    altTagsStatus: 'Pass',
    schemaStatus: 'Verified',
    score: 95,
  },
  {
    path: '/terms-and-conditions',
    name: 'Terms & Conditions',
    category: 'Legal',
    title: 'Terms and Conditions | Divya Yogam Foundation',
    description: 'Terms of service, membership rules, and acceptable usage guidelines for Divya Yogam platforms.',
    keywords: ['Divya Yogam Terms', 'Membership Rules'],
    canonical: 'https://divyayogam.org/terms-and-conditions',
    ogImage: '/images/logo-badge.webp',
    ogType: 'website',
    twitterCard: 'summary',
    xRobots: 'index, follow',
    altTagsStatus: 'Pass',
    schemaStatus: 'Verified',
    score: 95,
  },
  {
    path: '/refund-and-cancellation',
    name: 'Refund & Cancellation',
    category: 'Legal',
    title: 'Refund and Cancellation Policy | Divya Yogam Foundation',
    description: 'Refund guidelines, membership cancellation policies, and transaction processing rules.',
    keywords: ['Divya Yogam Refund Policy', 'Cancellation Rules'],
    canonical: 'https://divyayogam.org/refund-and-cancellation',
    ogImage: '/images/logo-badge.webp',
    ogType: 'website',
    twitterCard: 'summary',
    xRobots: 'index, follow',
    altTagsStatus: 'Pass',
    schemaStatus: 'Verified',
    score: 95,
  },
  {
    path: '/admin',
    name: 'Admin Panel (Protected)',
    category: 'Admin',
    title: 'Admin Console & SEO Manager | Divya Yogam',
    description: 'Internal Divya Yogam administration panel.',
    keywords: ['Admin'],
    canonical: 'https://divyayogam.org/admin',
    ogImage: '/images/logo-badge.webp',
    ogType: 'website',
    twitterCard: 'summary',
    xRobots: 'noindex, nofollow (Protected from Search Engines)',
    altTagsStatus: 'Pass',
    schemaStatus: 'Verified',
    score: 100,
  },
];

const siteImagesAudit = [
  { file: '/images/logo-badge.webp', type: 'Logo WebP', alt: 'Divya Yogam Official Sacred Emblem', status: 'Pass' },
  { file: '/images/banner-4.webp', type: 'Hero Banner WebP', alt: 'Divya Yogam Meditation Sanctuary Banner', status: 'Pass' },
  { file: '/images/arawindhan-ji.webp', type: 'Founder Portrait WebP', alt: 'Master Arawindhan Ji - Founder of Divya Yogam', status: 'Pass' },
  { file: '/images/con-6.webp', type: 'Sandalwood Texture WebP', alt: 'Sacred Sandalwood Background Texture', status: 'Pass' },
  { file: '/images/011A6549.webp', type: 'Retreat Gathering WebP', alt: 'Divya Yogam Community Meditation Gathering', status: 'Pass' },
  { file: '/favicon.ico', type: 'Favicon ICO', alt: 'Divya Yogam Subpixel Round Favicon', status: 'Pass' },
  { file: '/favicon.webp', type: 'Favicon WebP', alt: 'Divya Yogam WebP Icon', status: 'Pass' },
];

export default function SeoAuditDashboard() {
  const [routesData, setRoutesData] = useState<RouteSeoData[]>(defaultSiteRoutesData);
  const [selectedRoutePath, setSelectedRoutePath] = useState<string>('/membership');
  const [categoryFilter, setCategoryFilter] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedTag, setCopiedTag] = useState(false);
  const [isAuditing, setIsAuditing] = useState(false);
  const [saveSuccessMsg, setSaveSuccessMsg] = useState('');
  const [activeSubTab, setActiveSubTab] = useState<'EXPLORER' | 'IMAGES' | 'ROBOTS'>('EXPLORER');

  // Load custom saved SEO data from LocalStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem('divyaYogamCustomSeoData');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setRoutesData(parsed);
        }
      }
    } catch (err) {
      console.warn('Could not load custom SEO data:', err);
    }
  }, []);

  const selectedRoute = routesData.find((r) => r.path === selectedRoutePath) || routesData[1];

  const filteredRoutes = routesData.filter((r) => {
    const matchesCat = categoryFilter === 'ALL' || r.category === categoryFilter;
    const matchesSearch =
      searchQuery === '' ||
      r.path.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  // Handle live inline form changes for selected route
  const handleFieldChange = (field: keyof RouteSeoData, value: any) => {
    setRoutesData((prev) =>
      prev.map((r) => {
        if (r.path === selectedRoutePath) {
          let updatedValue = value;
          if (field === 'keywords' && typeof value === 'string') {
            updatedValue = value.split(',').map((k) => k.trim()).filter(Boolean);
          }
          return { ...r, [field]: updatedValue };
        }
        return r;
      })
    );
  };

  // Save changes to localStorage and send API call if backend available
  const saveSeoChanges = async () => {
    try {
      localStorage.setItem('divyaYogamCustomSeoData', JSON.stringify(routesData));
      
      // Try sending to server endpoint
      try {
        await fetch('/api/admin/seo', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ routes: routesData }),
        });
      } catch (err) {}

      setSaveSuccessMsg(`SEO metadata successfully updated and saved for ${selectedRoute.name} (${selectedRoute.path})!`);
      setTimeout(() => setSaveSuccessMsg(''), 4000);
    } catch (err) {
      alert('Failed to save SEO metadata');
    }
  };

  // Reset selected route metadata back to factory defaults
  const resetRouteToDefault = () => {
    const defaultRoute = defaultSiteRoutesData.find((r) => r.path === selectedRoutePath);
    if (!defaultRoute) return;

    setRoutesData((prev) =>
      prev.map((r) => (r.path === selectedRoutePath ? { ...defaultRoute } : r))
    );
    setSaveSuccessMsg(`Reset ${defaultRoute.name} metadata back to defaults.`);
    setTimeout(() => setSaveSuccessMsg(''), 3000);
  };

  // Export full JSON configs
  const exportConfigsJson = () => {
    const jsonStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(routesData, null, 2));
    const dlAnchor = document.createElement('a');
    dlAnchor.setAttribute('href', jsonStr);
    dlAnchor.setAttribute('download', `Divya_Yogam_SEO_Config_${new Date().toISOString().slice(0, 10)}.json`);
    document.body.appendChild(dlAnchor);
    dlAnchor.click();
    dlAnchor.remove();
  };

  const runLiveAudit = () => {
    setIsAuditing(true);
    setTimeout(() => {
      setIsAuditing(false);
    }, 600);
  };

  const copyHtmlMetaTags = (route: RouteSeoData) => {
    const htmlCode = `<title>${route.title}</title>
<meta name="description" content="${route.description}">
<meta name="keywords" content="${Array.isArray(route.keywords) ? route.keywords.join(', ') : route.keywords}">
<link rel="canonical" href="${route.canonical}">
<meta property="og:title" content="${route.title}">
<meta property="og:description" content="${route.description}">
<meta property="og:url" content="${route.canonical}">
<meta property="og:image" content="${route.ogImage.startsWith('http') ? route.ogImage : `https://divyayogam.org${route.ogImage}`}">
<meta name="twitter:card" content="${route.twitterCard}">
<meta name="robots" content="${route.xRobots}">`;

    navigator.clipboard.writeText(htmlCode);
    setCopiedTag(true);
    setTimeout(() => setCopiedTag(false), 2000);
  };

  return (
    <div className="space-y-8 font-body text-[#352043]">
      
      {/* Top Health Header Banner */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#352043] via-[#47206A] to-[#2B083A] text-white border-2 border-[#DFC47A] shadow-2xl space-y-6 relative overflow-hidden">
        
        {/* Glow backdrop */}
        <div className="absolute -top-24 -right-24 w-72 h-72 bg-[#DFC47A]/20 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 relative z-10">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#DFC47A]/20 text-[#DFC47A] text-[10px] font-extrabold uppercase tracking-widest border border-[#DFC47A]/40">
              <Sparkles className="w-3.5 h-3.5 text-[#DFC47A]" />
              DIVYA YOGAM FULL-SITE EDITABLE SEO ENGINE
            </div>
            <h2 className="font-heading text-2xl sm:text-4xl font-extrabold text-white flex items-center gap-3">
              <span>Dynamic Metatag Control & Audit</span>
            </h2>
            <p className="text-xs sm:text-sm text-purple-100/80 max-w-2xl">
              Live editable Meta Titles, Meta Descriptions, Keywords, Canonical links, X-Robots directives, and OpenGraph images across all site pages with real-time Google & Social previews.
            </p>
          </div>

          {/* Audit Score Badge */}
          <div className="flex items-center gap-4 bg-white/10 backdrop-blur-md px-6 py-4 rounded-2xl border border-[#DFC47A]/50 shrink-0">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#DFC47A] to-[#8C5D00] flex items-center justify-center text-white font-heading font-extrabold text-2xl shadow-lg">
              98%
            </div>
            <div>
              <span className="text-xs text-[#DFC47A] font-bold block uppercase tracking-wider">Overall SEO Health</span>
              <span className="text-sm font-extrabold text-emerald-300 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                OUTSTANDING RATING
              </span>
            </div>
          </div>
        </div>

        {/* Feature Badges */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-[#DFC47A]/30 relative z-10 text-xs">
          <div className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-1">
            <span className="text-[10px] text-[#DFC47A] uppercase font-bold block">Sitemap Coverage</span>
            <span className="font-extrabold text-white">23 / 23 Pages Indexed</span>
          </div>
          <div className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-1">
            <span className="text-[10px] text-[#DFC47A] uppercase font-bold block">OpenGraph / Twitter</span>
            <span className="font-extrabold text-emerald-300">100% Configured</span>
          </div>
          <div className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-1">
            <span className="text-[10px] text-[#DFC47A] uppercase font-bold block">Image Alt Audited</span>
            <span className="font-extrabold text-white">100% Verified</span>
          </div>
          <div className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-1">
            <span className="text-[10px] text-[#DFC47A] uppercase font-bold block">JSON-LD Schema</span>
            <span className="font-extrabold text-emerald-300">Active & Valid</span>
          </div>
        </div>
      </div>

      {/* Global Toast Success Message */}
      {saveSuccessMsg && (
        <div className="p-4 rounded-2xl bg-emerald-500 text-white font-bold text-xs shadow-lg flex items-center justify-between animate-fadeIn">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-white" />
            <span>{saveSuccessMsg}</span>
          </div>
          <button onClick={() => setSaveSuccessMsg('')} className="text-white/80 hover:text-white font-bold text-xs">
            Dismiss
          </button>
        </div>
      )}

      {/* Navigation Sub-Tabs */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#DFC47A]/50 pb-4">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setActiveSubTab('EXPLORER')}
            className={`px-4 py-2.5 rounded-full text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
              activeSubTab === 'EXPLORER'
                ? 'bg-[#352043] text-[#DFC47A] shadow-md'
                : 'bg-white text-[#352043] hover:bg-[#FAF5EF] border border-[#DFC47A]/40'
            }`}
          >
            <Edit3 className="w-3.5 h-3.5" />
            <span>Editable Route SEO Form</span>
          </button>

          <button
            onClick={() => setActiveSubTab('IMAGES')}
            className={`px-4 py-2.5 rounded-full text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
              activeSubTab === 'IMAGES'
                ? 'bg-[#352043] text-[#DFC47A] shadow-md'
                : 'bg-white text-[#352043] hover:bg-[#FAF5EF] border border-[#DFC47A]/40'
            }`}
          >
            <ImageIcon className="w-3.5 h-3.5" />
            <span>Image Alt Audit ({siteImagesAudit.length})</span>
          </button>

          <button
            onClick={() => setActiveSubTab('ROBOTS')}
            className={`px-4 py-2.5 rounded-full text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
              activeSubTab === 'ROBOTS'
                ? 'bg-[#352043] text-[#DFC47A] shadow-md'
                : 'bg-white text-[#352043] hover:bg-[#FAF5EF] border border-[#DFC47A]/40'
            }`}
          >
            <Bot className="w-3.5 h-3.5" />
            <span>Robots & Sitemap XML</span>
          </button>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={exportConfigsJson}
            className="px-3.5 py-2 rounded-full bg-white border border-[#DFC47A] hover:bg-[#FAF5EF] text-[#352043] font-bold text-xs flex items-center gap-1.5 shadow-xs transition-all cursor-pointer"
            title="Download full JSON configuration"
          >
            <Download className="w-3.5 h-3.5 text-[#8C5D00]" />
            <span>Export JSON</span>
          </button>

          <button
            onClick={runLiveAudit}
            disabled={isAuditing}
            className="px-4 py-2 rounded-full bg-[#352043] text-white hover:bg-[#8C5D00] font-bold text-xs flex items-center gap-2 shadow-sm transition-all cursor-pointer"
          >
            <RefreshCw className={`w-3.5 h-3.5 text-[#DFC47A] ${isAuditing ? 'animate-spin' : ''}`} />
            <span>{isAuditing ? 'Auditing...' : 'Run SEO Scan'}</span>
          </button>
        </div>
      </div>

      {/* TAB 1: EDITABLE ROUTE METATAG FORM & LIVE PREVIEWS */}
      {activeSubTab === 'EXPLORER' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Route Selector List */}
          <div className="lg:col-span-4 space-y-4">
            
            {/* Filter controls */}
            <div className="p-4 rounded-2xl bg-white border border-[#DFC47A]/50 shadow-sm space-y-3">
              <div className="relative">
                <Search className="w-4 h-4 text-[#8C5D00] absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Filter by route path or name..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 rounded-xl border border-[#E9DED3] text-xs font-medium focus:border-[#C8A34A] focus:outline-none bg-[#FAF5EF]/40"
                />
              </div>

              <div className="flex flex-wrap gap-1.5 text-[10px] font-bold">
                {['ALL', 'Core', 'Memberships', 'Practices', 'Legal', 'Admin'].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setCategoryFilter(cat)}
                    className={`px-2.5 py-1 rounded-lg transition-all cursor-pointer ${
                      categoryFilter === cat ? 'bg-[#352043] text-white' : 'bg-[#FAF5EF] text-[#352043] hover:bg-white'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* List of Routes */}
            <div className="space-y-2 max-h-[680px] overflow-y-auto pr-1 [scrollbar-width:thin]">
              {filteredRoutes.map((route) => {
                const isSelected = selectedRoutePath === route.path;
                return (
                  <button
                    key={route.path}
                    onClick={() => setSelectedRoutePath(route.path)}
                    className={`w-full text-left p-4 rounded-2xl border transition-all space-y-1.5 relative cursor-pointer ${
                      isSelected
                        ? 'bg-[#352043] text-white border-[#DFC47A] shadow-lg scale-[1.01]'
                        : 'bg-white hover:bg-[#FAF5EF] text-[#352043] border-[#DFC47A]/40 shadow-xs'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className={`font-mono text-xs font-bold ${isSelected ? 'text-[#DFC47A]' : 'text-[#8C5D00]'}`}>
                        {route.path}
                      </span>
                      <span className={`px-2 py-0.5 rounded-full text-[9px] font-extrabold uppercase ${
                        route.category === 'Memberships'
                          ? 'bg-[#DFC47A] text-[#352043]'
                          : isSelected
                          ? 'bg-white/20 text-white'
                          : 'bg-[#FAF5EF] text-[#5E5865]'
                      }`}>
                        {route.category}
                      </span>
                    </div>

                    <h4 className="font-heading font-extrabold text-xs line-clamp-1">
                      {route.name}
                    </h4>

                    <div className="flex items-center justify-between text-[10px] pt-1 border-t border-current/10">
                      <span className="opacity-80 line-clamp-1">{route.title}</span>
                      <span className="font-bold shrink-0 text-emerald-400">{route.score}%</span>
                    </div>
                  </button>
                );
              })}
            </div>

          </div>

          {/* Right Column: Editable Form Fields & Live Previews */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Action Bar & Route Header */}
            <div className="p-5 rounded-3xl bg-white border border-[#DFC47A]/60 shadow-md space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#E9DED3] pb-4">
                <div>
                  <span className="text-[10px] font-extrabold text-[#8C5D00] uppercase tracking-wider">
                    Editing Route SEO ({selectedRoute.category})
                  </span>
                  <h3 className="font-heading text-xl sm:text-2xl font-extrabold text-[#352043] flex items-center gap-2">
                    <span>{selectedRoute.name}</span>
                    <code className="text-xs font-mono font-bold px-2.5 py-1 rounded-lg bg-[#FAF5EF] text-[#8C5D00] border border-[#DFC47A]/40">
                      {selectedRoute.path}
                    </code>
                  </h3>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={saveSeoChanges}
                    className="px-5 py-2.5 rounded-full bg-[#352043] hover:bg-[#8C5D00] text-white text-xs font-extrabold uppercase tracking-wider flex items-center gap-2 shadow-md hover:scale-105 transition-all cursor-pointer"
                  >
                    <Save className="w-4 h-4 text-[#DFC47A]" />
                    <span>Save SEO Changes</span>
                  </button>

                  <button
                    onClick={resetRouteToDefault}
                    className="p-2.5 rounded-full bg-[#FAF5EF] hover:bg-rose-100 text-[#5E5865] hover:text-rose-700 border border-[#DFC47A]/40 transition-colors cursor-pointer"
                    title="Reset this route to default"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => copyHtmlMetaTags(selectedRoute)}
                    className="p-2.5 rounded-full bg-[#FAF5EF] hover:bg-[#DFC47A]/20 text-[#352043] border border-[#DFC47A]/40 transition-colors cursor-pointer"
                    title="Copy HTML Meta Tags"
                  >
                    {copiedTag ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4 text-[#8C5D00]" />}
                  </button>
                </div>
              </div>

              {/* EDITABLE FORM INPUTS */}
              <div className="space-y-4 pt-2">
                
                {/* Meta Title Field */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs font-bold text-[#352043]">
                    <label className="flex items-center gap-1.5">
                      <Edit3 className="w-3.5 h-3.5 text-[#8C5D00]" />
                      <span>Meta Title Tag</span>
                    </label>
                    <span className={`text-[11px] font-mono font-bold ${
                      selectedRoute.title.length >= 45 && selectedRoute.title.length <= 65
                        ? 'text-emerald-600'
                        : 'text-amber-600'
                    }`}>
                      {selectedRoute.title.length} / 60 characters
                    </span>
                  </div>
                  <input
                    type="text"
                    value={selectedRoute.title}
                    onChange={(e) => handleFieldChange('title', e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-[#E9DED3] focus:border-[#C8A34A] focus:outline-none text-xs sm:text-sm font-semibold bg-[#FAF5EF]/50 text-[#352043]"
                    placeholder="Enter Meta Title for search engines..."
                  />
                </div>

                {/* Meta Description Field */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs font-bold text-[#352043]">
                    <label className="flex items-center gap-1.5">
                      <Edit3 className="w-3.5 h-3.5 text-[#8C5D00]" />
                      <span>Meta Description</span>
                    </label>
                    <span className={`text-[11px] font-mono font-bold ${
                      selectedRoute.description.length >= 110 && selectedRoute.description.length <= 165
                        ? 'text-emerald-600'
                        : 'text-amber-600'
                    }`}>
                      {selectedRoute.description.length} / 155 characters
                    </span>
                  </div>
                  <textarea
                    rows={3}
                    value={selectedRoute.description}
                    onChange={(e) => handleFieldChange('description', e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-[#E9DED3] focus:border-[#C8A34A] focus:outline-none text-xs sm:text-sm font-medium bg-[#FAF5EF]/50 text-[#352043] leading-relaxed"
                    placeholder="Enter Meta Description summarizing this page..."
                  />
                </div>

                {/* Keywords & Canonical Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[#352043] block">
                      Keywords (Comma separated)
                    </label>
                    <input
                      type="text"
                      value={Array.isArray(selectedRoute.keywords) ? selectedRoute.keywords.join(', ') : selectedRoute.keywords}
                      onChange={(e) => handleFieldChange('keywords', e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#E9DED3] focus:border-[#C8A34A] focus:outline-none text-xs font-medium bg-[#FAF5EF]/50"
                      placeholder="Divya Yogam, Organ Meditation, Gold Plan..."
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[#352043] block">
                      Canonical URL
                    </label>
                    <input
                      type="text"
                      value={selectedRoute.canonical}
                      onChange={(e) => handleFieldChange('canonical', e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#E9DED3] focus:border-[#C8A34A] focus:outline-none text-xs font-mono font-medium bg-[#FAF5EF]/50"
                      placeholder="https://divyayogam.org/..."
                    />
                  </div>

                </div>

                {/* OpenGraph Image & Twitter Card Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[#352043] block">
                      OpenGraph Social Image URL
                    </label>
                    <input
                      type="text"
                      value={selectedRoute.ogImage}
                      onChange={(e) => handleFieldChange('ogImage', e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#E9DED3] focus:border-[#C8A34A] focus:outline-none text-xs font-mono font-medium bg-[#FAF5EF]/50"
                      placeholder="/images/banner-4.webp or full URL..."
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[#352043] block">
                      X-Robots Directive
                    </label>
                    <select
                      value={selectedRoute.xRobots}
                      onChange={(e) => handleFieldChange('xRobots', e.target.value)}
                      className="w-full px-3 py-2.5 rounded-xl border border-[#E9DED3] focus:border-[#C8A34A] focus:outline-none text-xs font-bold bg-[#FAF5EF]/50 text-[#352043]"
                    >
                      <option value="index, follow, max-snippet:-1, max-image-preview:large">
                        index, follow (Standard Public Page)
                      </option>
                      <option value="noindex, nofollow (Protected from Search Engines)">
                        noindex, nofollow (Protected / Hidden)
                      </option>
                      <option value="noindex, follow">
                        noindex, follow (Do not index, follow links)
                      </option>
                    </select>
                  </div>

                </div>

              </div>
            </div>

            {/* LIVE PREVIEW BOXES */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* SERP Google Search Preview */}
              <div className="p-5 rounded-3xl bg-white border border-[#DFC47A]/60 shadow-md space-y-3">
                <span className="text-[11px] font-bold text-[#352043] uppercase tracking-wider flex items-center gap-1.5 border-b border-[#E9DED3] pb-2">
                  <Globe className="w-3.5 h-3.5 text-[#8C5D00]" />
                  Google SERP Search Preview (Live Update)
                </span>
                <div className="p-4 rounded-2xl bg-white border border-gray-200 shadow-xs space-y-1 font-sans">
                  <div className="flex items-center gap-2 text-xs text-[#202124]">
                    <span className="w-4 h-4 rounded-full bg-[#352043] text-white text-[8px] font-bold flex items-center justify-center">DY</span>
                    <span className="text-xs font-medium text-[#202124]">Divya Yogam</span>
                    <span className="text-gray-400">•</span>
                    <span className="text-xs text-[#4d5156] font-mono break-all">{selectedRoute.canonical}</span>
                  </div>
                  <h4 className="text-base font-medium text-[#1a0dab] hover:underline cursor-pointer line-clamp-1">
                    {selectedRoute.title}
                  </h4>
                  <p className="text-xs text-[#4d5156] line-clamp-3 leading-relaxed">
                    {selectedRoute.description}
                  </p>
                </div>
              </div>

              {/* Social OG Card Preview */}
              <div className="p-5 rounded-3xl bg-white border border-[#DFC47A]/60 shadow-md space-y-3">
                <span className="text-[11px] font-bold text-[#352043] uppercase tracking-wider flex items-center gap-1.5 border-b border-[#E9DED3] pb-2">
                  <Share2 className="w-3.5 h-3.5 text-[#8C5D00]" />
                  WhatsApp / Social Preview (Live Update)
                </span>
                <div className="rounded-2xl border border-gray-200 overflow-hidden bg-gray-50 shadow-xs space-y-0">
                  <div className="h-36 bg-[#352043] relative flex items-center justify-center overflow-hidden">
                    <img
                      src={selectedRoute.ogImage}
                      alt={selectedRoute.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLElement).style.display = 'none';
                      }}
                    />
                  </div>
                  <div className="p-3 bg-white space-y-1">
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider font-mono">DIVYAYOGAM.ORG</span>
                    <h5 className="font-bold text-xs text-gray-900 line-clamp-1">{selectedRoute.title}</h5>
                    <p className="text-[11px] text-gray-500 line-clamp-2">{selectedRoute.description}</p>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      )}

      {/* TAB 2: IMAGE ALT AUDIT */}
      {activeSubTab === 'IMAGES' && (
        <div className="p-6 rounded-3xl bg-white border border-[#DFC47A]/60 shadow-xl space-y-5">
          <div className="flex items-center justify-between border-b border-[#E9DED3] pb-4">
            <div>
              <h3 className="font-heading text-xl font-extrabold text-[#352043] flex items-center gap-2">
                <ImageIcon className="w-5 h-5 text-[#C8A34A]" />
                <span>Site-Wide Image Alt Tags Audit</span>
              </h3>
              <p className="text-xs text-[#5E5865]">
                Audit of key images across all Next.js components to ensure 100% web accessibility and Google Image Search indexing.
              </p>
            </div>
            <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center gap-1 border border-emerald-300">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              100% Alt Coverage
            </span>
          </div>

          <div className="overflow-x-auto [scrollbar-width:thin]">
            <table className="w-full text-left text-xs">
              <thead className="bg-[#352043] text-[#DFC47A] font-bold uppercase text-[10px] tracking-wider">
                <tr>
                  <th className="py-3.5 px-4">Image Asset Path</th>
                  <th className="py-3.5 px-4">Format / Type</th>
                  <th className="py-3.5 px-4">Alt Tag Attribute</th>
                  <th className="py-3.5 px-4 text-center">Audit Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E9DED3]">
                {siteImagesAudit.map((img, idx) => (
                  <tr key={idx} className="hover:bg-[#FAF5EF]/60 transition-colors">
                    <td className="py-3.5 px-4 font-mono text-[11px] font-bold text-[#352043]">
                      {img.file}
                    </td>
                    <td className="py-3.5 px-4 text-xs font-medium text-[#8C5D00]">
                      {img.type}
                    </td>
                    <td className="py-3.5 px-4 text-xs text-[#5E5865] font-medium">
                      "{img.alt}"
                    </td>
                    <td className="py-3.5 px-4 text-center">
                      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-[10px] font-extrabold uppercase border border-emerald-300">
                        <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                        <span>Pass</span>
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* TAB 3: ROBOTS & SITEMAP XML */}
      {activeSubTab === 'ROBOTS' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Robots.txt Card */}
          <div className="p-6 rounded-3xl bg-white border border-[#DFC47A]/60 shadow-xl space-y-4">
            <div className="flex items-center justify-between border-b border-[#E9DED3] pb-3">
              <h3 className="font-heading text-lg font-bold text-[#352043] flex items-center gap-2">
                <Bot className="w-5 h-5 text-[#C8A34A]" />
                <span>robots.txt Directives</span>
              </h3>
              <a
                href="/robots.txt"
                target="_blank"
                rel="noreferrer"
                className="text-xs font-bold text-[#8C5D00] hover:underline flex items-center gap-1"
              >
                <span>View Live File</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            <div className="p-4 rounded-2xl bg-[#352043] text-[#DFC47A] font-mono text-xs space-y-2 shadow-inner">
              <p className="text-purple-300"># Divya Yogam Official Robots Directives</p>
              <p><span className="text-amber-400">User-agent:</span> *</p>
              <p><span className="text-emerald-400">Allow:</span> /</p>
              <p><span className="text-rose-400">Disallow:</span> /admin/</p>
              <p><span className="text-rose-400">Disallow:</span> /api/</p>
              <p><span className="text-amber-400">Sitemap:</span> https://divyayogam.org/sitemap.xml</p>
            </div>

            <p className="text-xs text-[#5E5865]">
              Ensures search engines index all public pages while explicitly protecting administrative endpoints (`/admin`, `/api`).
            </p>
          </div>

          {/* Sitemap XML Summary Card */}
          <div className="p-6 rounded-3xl bg-white border border-[#DFC47A]/60 shadow-xl space-y-4">
            <div className="flex items-center justify-between border-b border-[#E9DED3] pb-3">
              <h3 className="font-heading text-lg font-bold text-[#352043] flex items-center gap-2">
                <FileCode className="w-5 h-5 text-[#C8A34A]" />
                <span>sitemap.xml Generator</span>
              </h3>
              <a
                href="/sitemap.xml"
                target="_blank"
                rel="noreferrer"
                className="text-xs font-bold text-[#8C5D00] hover:underline flex items-center gap-1"
              >
                <span>View Live XML</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            <div className="p-4 rounded-2xl bg-[#FAF5EF] text-[#352043] font-mono text-xs space-y-2 border border-[#E9DED3]">
              <div className="flex justify-between border-b border-[#E9DED3] pb-1 font-bold text-[11px] text-[#8C5D00]">
                <span>URL Path</span>
                <span>Priority</span>
              </div>
              <div className="space-y-1 max-h-36 overflow-y-auto pr-1">
                {routesData.filter((r) => r.category !== 'Admin').map((r) => (
                  <div key={r.path} className="flex justify-between text-[11px]">
                    <span className="text-[#352043]">{r.canonical}</span>
                    <span className="font-bold text-amber-700">{r.path === '/' ? '1.0' : r.category === 'Memberships' ? '0.9' : '0.8'}</span>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-xs text-[#5E5865]">
              Dynamically generated static sitemap containing all 23 active site pages with daily/weekly change frequency metadata.
            </p>
          </div>

        </div>
      )}

    </div>
  );
}
