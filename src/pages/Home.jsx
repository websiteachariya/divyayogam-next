import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import Founder from '../components/Founder';
import VisionMission from '../components/VisionMission';
import Purpose from '../components/Purpose';
import Experience from '../components/Experience';
import ExperienceDivine from '../components/ExperienceDivine';
import Community from '../components/Community';
import Practices from '../components/Practices';
import Statistics from '../components/Statistics';
import Science from '../components/Science';
import Transformation from '../components/Transformation';
import Gallery from '../components/Gallery';
import Achievements from '../components/Achievements';

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-[#FBF8F1]"
    >
      <Hero />
      <Founder />
      <VisionMission />
      <Purpose />
      <Experience />
      <ExperienceDivine />
      <Community />
      <Practices />
      <Statistics />
      <Science />
      <Transformation />
      <Gallery />
      <Achievements />
    </motion.div>
  );
}
