'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Calendar, Sparkles, Gift } from 'lucide-react';
import { GoldenHeadingUnderline } from './SacredGeometrySvg';

export default function QuantumHabitsWorkshop() {
  return (
    <section className="py-24 sm:py-32 bg-transparent relative overflow-hidden font-body">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full royal-gold-badge text-[11px] font-bold uppercase tracking-widest">
            ANCIENT WISDOM – MODERN LIVING
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#352043]">
            Panchakala to <span className="text-[#8C5D00]">Quantum Habits™</span>
          </h2>
          <GoldenHeadingUnderline />

          <p className="text-[#352043] text-base sm:text-lg font-normal leading-relaxed max-w-3xl mx-auto">
            Transforms timeless spiritual disciplines into practical daily habits that elevate consciousness, refine character and awaken inner excellence. When sacred discipline becomes daily living, transformation becomes effortless.
          </p>
        </div>

        {/* Special Invitation Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="rounded-[36px] p-8 sm:p-12 border-2 border-[#DFC47A] bg-gradient-to-br from-[#352043] via-[#2A1439] to-[#352043] text-white shadow-2xl space-y-8 max-w-4xl mx-auto relative overflow-hidden text-center sm:text-left"
        >
          {/* Subtle Glow */}
          <div className="absolute right-0 top-0 w-80 h-80 bg-[#DFC47A]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#DFC47A]/20 border border-[#DFC47A]/40 text-[#DFC47A] text-xs font-bold uppercase tracking-wider">
                <Gift className="w-4 h-4" />
                <span>SPECIAL INVITATION</span>
              </div>

              <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white">
                Complimentary One-Day Awakening Workshop
              </h3>

              <p className="text-[#F8F2E8] text-sm sm:text-base font-normal leading-relaxed">
                Experience the foundational principles of Panchakala to Quantum Habits™ in a FREE introductory workshop. This sacred introduction prepares the seeker for the deeper transformational journey offered in the complete programme.
              </p>
            </div>

            <div className="shrink-0 pt-2 sm:pt-0">
              <Link
                href="/contact"
                className="px-8 py-4 rounded-full bg-[#C8A34A] hover:bg-[#DFC47A] text-[#2A1439] font-bold text-xs sm:text-sm uppercase tracking-wider shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-2.5 font-body group"
              >
                <span>REGISTER FOR FREE WORKSHOP</span>
                <ArrowRight className="w-4 h-4 text-[#2A1439] group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
