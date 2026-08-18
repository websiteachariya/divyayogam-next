'use client';

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import {
  ChevronLeft,
  ChevronRight,
  Play,
  Volume2,
  VolumeX,
  Sparkles,
  Heart,
  Sun,
  BookOpen,
  Flame,
  Target,
  Users,
  ArrowRight,
} from 'lucide-react';

export default function TransformationContent() {
  // Video Play / Sound States
  const [isPlaying1, setIsPlaying1] = useState(false);
  const [isPlaying2, setIsPlaying2] = useState(false);
  const [isMuted1, setIsMuted1] = useState(false);
  const [isMuted2, setIsMuted2] = useState(false);

  const videoRef1 = useRef<HTMLVideoElement>(null);
  const videoRef2 = useRef<HTMLVideoElement>(null);

  const handlePlayVideo1 = () => {
    setIsPlaying1(true);
    setTimeout(() => {
      if (videoRef1.current) {
        videoRef1.current.muted = isMuted1;
        videoRef1.current.play();
      }
    }, 50);
  };

  const handlePlayVideo2 = () => {
    setIsPlaying2(true);
    setTimeout(() => {
      if (videoRef2.current) {
        videoRef2.current.muted = isMuted2;
        videoRef2.current.play();
      }
    }, 50);
  };

  const toggleMute1 = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef1.current) {
      videoRef1.current.muted = !isMuted1;
      setIsMuted1(!isMuted1);
    }
  };

  const toggleMute2 = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef2.current) {
      videoRef2.current.muted = !isMuted2;
      setIsMuted2(!isMuted2);
    }
  };

  const dimensions = [
    {
      title: 'Spiritual Growth',
      desc: 'Meditation and self-awareness cultivate inner peace, mindfulness, compassion, purpose, and a deeper connection with one\'s true self.',
      icon: Sparkles,
      color: 'bg-[#FDF7E7] text-[#C8A34A] border-[#DFC47A]/40',
    },
    {
      title: 'Health & Wellbeing',
      desc: 'Our practices promote healthy living, stress management, relaxation, better sleep, improved focus, increased vitality, and overall wellbeing.',
      icon: Heart,
      color: 'bg-[#FDE8EF] text-[#E05273] border-rose-200',
    },
    {
      title: 'Emotional Healing',
      desc: 'Through meditation and reflection, individuals release emotional blocks, heal past experiences, and build resilience, empathy, inner calm, and healthier relationships.',
      icon: Sun,
      color: 'bg-[#FDF0E5] text-[#E08338] border-orange-200',
    },
    {
      title: 'Education & Learning',
      desc: 'Encourages lifelong learning by transforming the way we think, learn, and apply knowledge in daily life, practice, and experience.',
      icon: BookOpen,
      color: 'bg-[#E8F0FD] text-[#3B72E0] border-blue-200',
    },
    {
      title: 'Wisdom',
      desc: 'Participants are inspired to live with awareness, gratitude, compassion, and discernment, making choices aligned with truth.',
      icon: Flame,
      color: 'bg-[#F2E8FD] text-[#883BE0] border-purple-200',
    },
    {
      title: 'Personal Development',
      desc: 'Our programs strengthen self-confidence, inner clarity, discipline, resilience, goal alignment, and the ability to embrace change with grace.',
      icon: Target,
      color: 'bg-[#E5FDF4] text-[#10B981] border-emerald-200',
    },
    {
      title: 'Leadership & Service',
      desc: 'Develops ethical and compassionate leaders who serve with responsibility, lead by example, and contribute meaningfully to society.',
      icon: Users,
      color: 'bg-[#ECE8FD] text-[#6366F1] border-indigo-200',
    },
  ];

  return (
    <div className="space-y-24 pb-20 font-body bg-transparent">
      
      {/* 1. TRANSFORMATION IN MOTION (DUAL VIDEO / IMAGE CAROUSEL SECTION) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative pt-4">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2 mb-10">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#352043]">
            Transformation in{' '}
            <span className="font-serif italic font-normal text-[#C8A34A]">Motion</span>
          </h2>
          <p className="text-[#5E5865] text-base sm:text-lg font-light">
            Experience the profound serenity and depth of our holistic practices.
          </p>
        </div>

        {/* Carousel Slider Layout with Nav Arrows */}
        <div className="relative flex items-center">
          
          {/* Left Arrow Button */}
          <button
            className="hidden md:flex absolute -left-5 lg:-left-7 z-20 w-11 h-11 rounded-full bg-white shadow-md border border-[#E9DED3] items-center justify-center text-[#352043] hover:border-[#C8A34A] hover:scale-105 transition-all cursor-pointer"
            aria-label="Previous Slide"
          >
            <ChevronLeft className="w-5 h-5 text-[#352043]" />
          </button>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 w-full">
            
            {/* CARD 1: Video 1 (Sacred Movement & Meditation) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative rounded-3xl overflow-hidden shadow-xl border-2 border-[#DFC47A]/50 aspect-[16/10] sm:aspect-video group bg-black"
            >
              <video
                ref={videoRef1}
                autoPlay
                loop
                muted={isMuted1}
                controls
                playsInline
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              >
                <source src="https://res.cloudinary.com/y2q2jsq0/video/upload/v1782989219/080A9552_vliae1.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

              {/* Sound Toggle Button */}
              <button
                onClick={toggleMute1}
                className="absolute top-4 right-4 z-20 bg-black/60 hover:bg-[#C8A34A] text-white hover:text-[#47206A] p-2.5 rounded-full backdrop-blur-md border border-white/20 transition-all duration-300 shadow-lg cursor-pointer flex items-center gap-2 text-xs font-semibold px-3.5"
                title={isMuted1 ? "Unmute Audio" : "Mute Audio"}
              >
                {isMuted1 ? (
                  <>
                    <VolumeX className="w-4 h-4 text-amber-400" />
                    <span>Enable Sound</span>
                  </>
                ) : (
                  <>
                    <Volume2 className="w-4 h-4 text-emerald-400 animate-pulse" />
                    <span>Sound Playing</span>
                  </>
                )}
              </button>

              {/* Bottom Card Badge Overlay */}
              <div className="absolute bottom-4 left-4 right-4 z-10 bg-[#2A1338]/90 backdrop-blur-md p-4 rounded-2xl border border-[#DFC47A]/30 flex items-center gap-4 shadow-lg pointer-events-none">
                <div className="w-10 h-10 rounded-full bg-white/10 border border-[#DFC47A]/40 flex items-center justify-center shrink-0 text-[#DFC47A]">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 7V17M7 12H17" strokeWidth="1.5" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xs uppercase font-extrabold tracking-wider text-white">
                    SACRED MOVEMENT &amp; MEDITATION
                  </h3>
                  <p className="text-[11px] text-white/80 font-light mt-0.5">
                    Awaken the body, calm the mind, elevate the soul.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* CARD 2: Video 2 (Inner Stillness & Awakening) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="relative rounded-3xl overflow-hidden shadow-xl border-2 border-[#47206A]/50 aspect-[16/10] sm:aspect-video group bg-black"
            >
              <video
                ref={videoRef2}
                autoPlay
                loop
                muted={isMuted2}
                controls
                playsInline
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              >
                <source src="https://res.cloudinary.com/y2q2jsq0/video/upload/v1782989204/080A9562_tcmlhv.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

              {/* Sound Toggle Button */}
              <button
                onClick={toggleMute2}
                className="absolute top-4 right-4 z-20 bg-black/60 hover:bg-[#C8A34A] text-white hover:text-[#47206A] p-2.5 rounded-full backdrop-blur-md border border-white/20 transition-all duration-300 shadow-lg cursor-pointer flex items-center gap-2 text-xs font-semibold px-3.5"
                title={isMuted2 ? "Unmute Audio" : "Mute Audio"}
              >
                {isMuted2 ? (
                  <>
                    <VolumeX className="w-4 h-4 text-amber-400" />
                    <span>Enable Sound</span>
                  </>
                ) : (
                  <>
                    <Volume2 className="w-4 h-4 text-emerald-400 animate-pulse" />
                    <span>Sound Playing</span>
                  </>
                )}
              </button>

              {/* Bottom Card Badge Overlay */}
              <div className="absolute bottom-4 left-4 right-4 z-10 bg-[#2A1338]/90 backdrop-blur-md p-4 rounded-2xl border border-[#DFC47A]/30 flex items-center gap-4 shadow-lg pointer-events-none">
                <div className="w-10 h-10 rounded-full bg-white/10 border border-[#DFC47A]/40 flex items-center justify-center shrink-0 text-[#DFC47A]">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M12 3C10 7 6 10 2 12C6 14 10 17 12 21C14 17 18 14 22 12C18 10 14 7 12 3Z" fill="rgba(200, 163, 74, 0.25)" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xs uppercase font-extrabold tracking-wider text-white">
                    INNER STILLNESS &amp; AWAKENING
                  </h3>
                  <p className="text-[11px] text-white/80 font-light mt-0.5">
                    Discover the silence where transformation begins.
                  </p>
                </div>
              </div>
            </motion.div>

          </div>

          {/* Right Arrow Button */}
          <button
            className="hidden md:flex absolute -right-5 lg:-right-7 z-20 w-11 h-11 rounded-full bg-white shadow-md border border-[#E9DED3] items-center justify-center text-[#352043] hover:border-[#C8A34A] hover:scale-105 transition-all cursor-pointer"
            aria-label="Next Slide"
          >
            <ChevronRight className="w-5 h-5 text-[#352043]" />
          </button>

        </div>
      </section>

      {/* 2. SEVEN DIMENSIONS OF TRANSFORMATION */}
      <section
        className="py-16 relative overflow-hidden bg-cover bg-center bg-no-repeat border-y border-[#DFC47A]/30"
        style={{ backgroundImage: "url('/images/bg-6.webp')" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
          {/* Header with High-Contrast Glassmorphic Card Container */}
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-14 bg-[#FFFDF9]/90 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-[#DFC47A]/50 shadow-lg">
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2B1439]">
              Seven Dimensions of{' '}
              <span className="font-serif italic font-semibold text-[#B6872B]">Transformation</span>
            </h2>

            <p className="text-[#352043] text-base sm:text-lg font-medium leading-relaxed max-w-2xl mx-auto">
              Divine Grace nurtures holistic transformation by developing spiritual, physical, emotional, intellectual, and social wellbeing, empowering individuals to lead balanced and purposeful lives.
            </p>
          </div>

          {/* 7 Transformation Cards Grid (Top 4, Bottom 3 Centered) */}
          <div className="space-y-6">
            
            {/* Top Row: 4 Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {dimensions.slice(0, 4).map((item, idx) => {
                const IconComp = item.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.08 }}
                    className="bg-[#FFFDF9] rounded-3xl p-6 sm:p-7 border border-[#E9DED3] shadow-[0_4px_20px_rgba(53,32,67,0.03)] hover:shadow-xl hover:border-[#C8A34A] transition-all duration-300 flex flex-col justify-between text-center group relative overflow-hidden"
                  >
                    <div className="space-y-4">
                      {/* Top Centered Icon Badge */}
                      <div className={`w-12 h-12 rounded-full border flex items-center justify-center mx-auto ${item.color} group-hover:scale-110 transition-transform shadow-sm`}>
                        <IconComp className="w-6 h-6" />
                      </div>

                      <h3 className="font-heading text-xl font-bold text-[#352043]">
                        {item.title}
                      </h3>

                      <p className="text-[#5E5865] text-xs sm:text-sm leading-relaxed font-light font-body">
                        {item.desc}
                      </p>
                    </div>

                    {/* Subtle Bottom Gold Dot Emblem */}
                    <div className="pt-4 flex justify-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C8A34A]/50 group-hover:bg-[#C8A34A] transition-colors" />
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Bottom Row: 3 Cards (Centered) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {dimensions.slice(4, 7).map((item, idx) => {
                const IconComp = item.icon;
                return (
                  <motion.div
                    key={idx + 4}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: (idx + 4) * 0.08 }}
                    className="bg-[#FFFDF9] rounded-3xl p-6 sm:p-7 border border-[#E9DED3] shadow-[0_4px_20px_rgba(53,32,67,0.03)] hover:shadow-xl hover:border-[#C8A34A] transition-all duration-300 flex flex-col justify-between text-center group relative overflow-hidden"
                  >
                    <div className="space-y-4">
                      {/* Top Centered Icon Badge */}
                      <div className={`w-12 h-12 rounded-full border flex items-center justify-center mx-auto ${item.color} group-hover:scale-110 transition-transform shadow-sm`}>
                        <IconComp className="w-6 h-6" />
                      </div>

                      <h3 className="font-heading text-xl font-bold text-[#352043]">
                        {item.title}
                      </h3>

                      <p className="text-[#5E5865] text-xs sm:text-sm leading-relaxed font-light font-body">
                        {item.desc}
                      </p>
                    </div>

                    {/* Subtle Bottom Gold Dot Emblem */}
                    <div className="pt-4 flex justify-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C8A34A]/50 group-hover:bg-[#C8A34A] transition-colors" />
                    </div>
                  </motion.div>
                );
              })}
            </div>

          </div>

        </div>
      </section>

      {/* 3. CONCLUSION BANNER: A HOLISTIC JOURNEY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-[#2B1439] via-[#352043] to-[#2B1439] rounded-3xl p-8 sm:p-10 border border-[#DFC47A]/40 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8 relative overflow-hidden"
        >
          {/* Left Side: Golden Lotus Icon (Larger Size) */}
          <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 text-center sm:text-left">
            <div className="w-28 h-28 sm:w-36 sm:h-36 lg:w-40 lg:h-40 flex items-center justify-center shrink-0">
              <Image
                src="/images/trans-2.webp"
                alt="A Holistic Journey - Divya Yogam"
                width={160}
                height={160}
                className="w-full h-full object-contain drop-shadow-[0_0_20px_rgba(223,196,122,0.65)] hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Middle Text */}
            <div className="space-y-1.5 max-w-2xl">
              <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#DFC47A]">
                A Holistic Journey
              </h3>
              <p className="text-[#F8F2E8] text-sm sm:text-base font-light leading-relaxed font-body">
                All seven dimensions of transformation work together to create a life of balance, inner peace, purposeful growth, and selfless service.
              </p>
            </div>
          </div>

          {/* Right Action Button: EXPLORE PROGRAMS */}
          <Link
            href="/practices"
            className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-[#DFC47A] hover:bg-[#C8A34A] text-[#2B1439] font-bold text-xs uppercase tracking-wider shadow-lg hover:scale-105 transition-all duration-300 shrink-0 font-body"
          >
            <span>EXPLORE PROGRAMS</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </section>

    </div>
  );
}
