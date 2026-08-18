import type { Metadata } from 'next';
import TransformationHero from '@/components/transformation/TransformationHero';
import TransformationContent from '@/components/transformation/TransformationContent';

export const metadata: Metadata = {
  title: 'Holistic Transformation & Divine Living | Divya Yogam',
  description: 'Discover the 7 dimensions of transformation, videos of practices in motion, and inspiring stories of personal evolution and spiritual peace.',
};

export default function TransformationPage() {
  return (
    <div className="bg-[#F8F2E8] font-body min-h-screen">
      {/* Transformation Page Hero */}
      <TransformationHero />

      {/* Transformation in Motion (Videos with trans-1.png & trans-2.png), 7 Dimensions & Conclusion Banner */}
      <TransformationContent />
    </div>
  );
}



