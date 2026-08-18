'use client';

import AboutHero from '@/components/about/AboutHero';
import FounderProfile from '@/components/about/FounderProfile';
import HisJourney from '@/components/about/HisJourney';
import HisPhilosophy from '@/components/about/HisPhilosophy';
import TheLegacy from '@/components/about/TheLegacy';
import TimelineSection from '@/components/about/TimelineSection';
import JourneyEssence from '@/components/about/JourneyEssence';
import AboutSections from '@/components/about/AboutSections';

export default function AboutPage() {
  return (
    <div className="bg-[#FDFCF9] font-body min-h-screen relative overflow-hidden">
      {/* About Page Hero */}
      <AboutHero />

      {/* Founder Profile & Core Mission */}
      <FounderProfile />

      {/* His Journey (7 Pillars & Ecosystem Metrics) */}
      <HisJourney />

      {/* His Philosophy (Knowledge, Experience, Awareness & 5 Dimensions) */}
      <HisPhilosophy />

      {/* The Legacy (Not What He Created. Instead, What He Awakened) */}
      <TheLegacy />

      {/* 25+ Years Timeline */}
      <TimelineSection />

      {/* Essence of His Journey & Paradigm Shifts */}
      <JourneyEssence />

      {/* Community Gatherings */}
      <AboutSections />
    </div>
  );
}
