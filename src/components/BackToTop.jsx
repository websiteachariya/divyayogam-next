import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={scrollToTop}
          aria-label="Back to top"
          className="fixed bottom-6 right-6 z-50 p-3.5 rounded-full bg-gradient-to-r from-[#B68A3D] to-[#D0AD5C] hover:from-[#9C6E28] hover:to-[#C49E4B] text-[#0C2B21] border-2 border-[#E2D8C3] shadow-xl hover:scale-110 transition-all duration-300 group"
        >
          <ArrowUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform text-[#0C2B21]" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
