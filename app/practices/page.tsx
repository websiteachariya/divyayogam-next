import type { Metadata } from 'next';
import PracticesHero from '@/components/practices/PracticesHero';
import SeekersBanner from '@/components/practices/SeekersBanner';
import Pathways from '@/components/practices/Pathways';
import CorePractices from '@/components/practices/CorePractices';

export const metadata: Metadata = {
  title: 'Scientific Spiritual Practices & Pathways | Divya Yogam',
  description: 'Explore 7 transformative pathways to awaken your consciousness, organ meditation, and time-tested Vedic practices for body, mind, and soul.',
};

export default function PracticesPage() {
  return (
    <div className="bg-transparent font-body min-h-screen">
      {/* Vision Hero & Awakening Video Section */}
      <PracticesHero />

      {/* 10-Year Seekers Movement Banner */}
      <SeekersBanner />

      {/* Pathways to Awakening 7-Step Grid & Center Medallion */}
      <Pathways />

      {/* Core Spiritual Practices & Testimonial / Membership Cards */}
      <CorePractices />
    </div>
  );
}
