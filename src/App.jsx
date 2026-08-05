import { Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import ScrollProgress from './components/ScrollProgress';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

import Home from './pages/Home';
import About from './pages/About';
import Vision from './pages/Vision';
import PracticesPage from './pages/PracticesPage';
import OrganMeditation from './pages/OrganMeditation';
import QuantumHabits from './pages/QuantumHabits';
import Sciences from './pages/Sciences';
import Events from './pages/Events';
import TransformationPage from './pages/TransformationPage';
import Testimonials from './pages/Testimonials';
import GalleryPage from './pages/GalleryPage';
import Contact from './pages/Contact';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF6EE] text-[#5C5368] selection:bg-[#C8A248]/30 selection:text-[#5E2A84] relative">
      {/* Fixed Divine Texture Background Layer in Warm Ivory #FAF6EE */}
      <div 
        className="fixed top-0 left-0 w-full h-screen -z-50 bg-[linear-gradient(rgba(250,246,238,0.94),rgba(250,246,238,0.98)),url('/images/bg-1.webp')] bg-cover bg-center bg-no-repeat pointer-events-none"
      />

      <ScrollProgress />
      <ScrollToTop />
      <Navbar />
      
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/vision" element={<Vision />} />
          <Route path="/practices" element={<PracticesPage />} />
          <Route path="/organ-meditation" element={<OrganMeditation />} />
          <Route path="/quantum-habits" element={<QuantumHabits />} />
          <Route path="/sciences" element={<Sciences />} />
          <Route path="/events" element={<Events />} />
          <Route path="/transformation" element={<TransformationPage />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
}
