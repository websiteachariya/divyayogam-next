import Hero from '@/components/home/Hero';
import VisionMission from '@/components/home/VisionMission';
import InnerJourney from '@/components/home/InnerJourney';
import CorePurpose from '@/components/home/CorePurpose';
import ExperienceDivine from '@/components/home/ExperienceDivine';
import Purpose from '@/components/home/Purpose';
import Experience from '@/components/home/Experience';
import Community from '@/components/home/Community';
import Practices from '@/components/home/Practices';
import ShambalaApp from '@/components/home/ShambalaApp';
import Gallery from '@/components/home/Gallery';

export default function HomePage() {
  return (
    <div className="bg-transparent font-body">
      <Hero />
      <VisionMission />
      <InnerJourney />
      <CorePurpose />
      <ExperienceDivine />
      <Purpose />
      <Experience />
      <Community />
      <Practices />
      <ShambalaApp />
      <Gallery />
    </div>
  );
}
