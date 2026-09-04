import type { Metadata } from 'next';
import VisionHero from '@/components/vision/VisionHero';
import FounderMessage from '@/components/vision/FounderMessage';
import ConsciousnessShift from '@/components/vision/ConsciousnessShift';
import SubtleArchitecture from '@/components/vision/SubtleArchitecture';
import FourDivinePillars from '@/components/vision/FourDivinePillars';
import StatesOfMind from '@/components/vision/StatesOfMind';
import FourteenYogas from '@/components/vision/FourteenYogas';
import AdvancedProgrammes from '@/components/vision/AdvancedProgrammes';
import QuantumHabitsWorkshop from '@/components/vision/QuantumHabitsWorkshop';
import UltimateAwakening from '@/components/vision/UltimateAwakening';
import VisionApproach from '@/components/vision/VisionApproach';

export const metadata: Metadata = {
  title: 'Our Vision & Higher Purpose — Divya Yogam',
  description: 'Discover the core vision, 4 Divine Pillars, 14 Yogas, 3D to 6D consciousness shift, and subtle architecture at Divya Yogam.',
};

export default function VisionPage() {
  return (
    <div className="bg-transparent font-body min-h-screen relative overflow-x-hidden">
      {/* Fixed Background Image Overlay (con-6.webp Sandal Texture matching Contact & Quantum Habits) */}
      <div
        className="absolute inset-0 opacity-85 pointer-events-none bg-cover bg-center bg-no-repeat bg-fixed z-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(250, 245, 239, 0.5), rgba(250, 245, 239, 0.65)), url('/images/con-6.webp')",
        }}
      />

      <div className="relative z-10">
        <VisionHero />
        <FounderMessage />
        <ConsciousnessShift />
        <SubtleArchitecture />
        <FourDivinePillars />
        <StatesOfMind />
        <FourteenYogas />
        <AdvancedProgrammes />
        <QuantumHabitsWorkshop />
        <UltimateAwakening />
        <VisionApproach />
      </div>
    </div>
  );
}
