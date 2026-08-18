'use client';

import { motion } from 'framer-motion';

export default function Pathways() {
  const steps = [
    {
      stepClass: 'pw-step-1',
      badge: 'Step 1 · Start Here',
      name: 'Avadhani',
      desc: (
        <>
          A guided <strong>inner cleansing practice</strong> that develops{' '}
          <strong>awareness of the body&apos;s internal organs</strong> and supports the body&apos;s{' '}
          <strong>natural cleansing process</strong>. Through <strong>conscious breathing</strong> and{' '}
          <strong>focused awareness</strong>, it helps release <strong>physical and emotional impurities</strong>.
        </>
      ),
      svgIcon: (
        <svg viewBox="0 0 64 64" className="w-10 h-10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="32" cy="32" r="28" fill="rgba(212, 175, 54, 0.12)" />
          <path d="M32 8C32 8 18 25 18 36A14 14 0 0 0 46 36C46 25 32 8 32 8Z" stroke="#b48811" strokeWidth="2.5" strokeLinejoin="round" fill="rgba(212, 175, 54, 0.2)" />
          <path d="M32 22C32 22 26 32 26 38A6 6 0 0 0 38 38C38 32 32 22 32 22Z" fill="#8a6500" />
          <path d="M32 30C27 31 20 35 20 40A6 6 0 0 0 26 44C29 44 31 41 32 38" stroke="#8a6500" strokeWidth="2" strokeLinecap="round" />
          <path d="M32 30C37 31 44 35 44 40A6 6 0 0 1 38 44C35 44 33 41 32 38" stroke="#8a6500" strokeWidth="2" strokeLinecap="round" />
          <circle cx="23" cy="20" r="1.5" fill="#d4af36" />
          <circle cx="41" cy="20" r="1.5" fill="#d4af36" />
          <circle cx="32" cy="48" r="2" fill="#8a6500" />
        </svg>
      ),
    },
    {
      stepClass: 'pw-step-2',
      badge: 'Step 2 · After Step 1',
      name: 'Ayngara',
      desc: (
        <>
          A transformational <strong>two-day program</strong> that guides individuals to{' '}
          <strong>strengthen the connection</strong> between the mind, body, and{' '}
          <strong>inner consciousness</strong>. It inspires <strong>positive thinking</strong> and{' '}
          <strong>conscious decision-making</strong>.
        </>
      ),
      svgIcon: (
        <svg viewBox="0 0 64 64" className="w-10 h-10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="32" cy="32" r="28" fill="rgba(139, 63, 160, 0.12)" />
          <path d="M12 32C12 32 22 18 32 18C42 18 52 32 52 32C52 32 42 46 32 46C22 46 12 32 12 32Z" stroke="#7b2cbf" strokeWidth="2.5" strokeLinejoin="round" fill="rgba(139, 63, 160, 0.15)" />
          <circle cx="32" cy="32" r="8" fill="#521868" />
          <circle cx="32" cy="32" r="3.5" fill="#ffffff" />
          <path d="M32 10V14M32 50V54M10 32H14M50 32H54M16.5 16.5L19.3 19.3M44.7 44.7L47.5 47.5M47.5 16.5L44.7 19.3M19.3 44.7L16.5 47.5" stroke="#9d4edd" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      stepClass: 'pw-step-3',
      badge: 'Step 3 · After Step 2',
      name: 'Pandava',
      desc: (
        <>
          A guided <strong>meditation technique</strong> designed to facilitate{' '}
          <strong>progressive inner transformation</strong> by expanding <strong>awareness layer by layer</strong>. It supports <strong>emotional healing</strong>, energetic balance, and <strong>spiritual evolution</strong>.
        </>
      ),
      svgIcon: (
        <svg viewBox="0 0 64 64" className="w-10 h-10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="32" cy="32" r="28" fill="rgba(5, 150, 105, 0.12)" />
          <circle cx="32" cy="32" r="22" stroke="#059669" strokeWidth="2" strokeDasharray="4 3" />
          <circle cx="32" cy="32" r="16" stroke="#047857" strokeWidth="2" fill="rgba(52, 211, 153, 0.2)" />
          <path d="M32 16C32 21 32 27 32 32M32 32C32 37 32 43 32 48M32 32C27 32 21 32 16 32M32 32C37 32 43 32 48 32M32 32L21 21M32 32L43 43M32 32L43 21M32 32L21 43" stroke="#047857" strokeWidth="2" strokeLinecap="round" />
          <circle cx="32" cy="32" r="7" fill="#059669" />
          <circle cx="32" cy="32" r="3" fill="#ffffff" />
        </svg>
      ),
    },
    {
      stepClass: 'pw-step-4',
      badge: 'Step 4 · After Step 3',
      name: 'Amirtha',
      desc: (
        <>
          A guided <strong>meditation technique</strong> designed to facilitate{' '}
          <strong>progressive inner transformation</strong> by expanding <strong>awareness layer by layer</strong>. It supports <strong>emotional healing</strong>, energetic balance, and <strong>spiritual evolution</strong>.
        </>
      ),
      svgIcon: (
        <svg viewBox="0 0 64 64" className="w-10 h-10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="32" cy="32" r="28" fill="rgba(37, 99, 235, 0.12)" />
          <path d="M22 46C22 46 20 32 24 26H40C44 32 42 46 42 46H22Z" fill="rgba(37, 99, 235, 0.25)" stroke="#1d4ed8" strokeWidth="2.5" strokeLinejoin="round" />
          <path d="M26 46H38V50H26V46Z" fill="#1d4ed8" />
          <path d="M22 26C22 26 26 23 32 23C38 23 42 26 42 26" stroke="#1d4ed8" strokeWidth="2.5" />
          <path d="M32 10C32 10 26 17 26 20C26 23.3 28.7 26 32 26C35.3 26 38 23.3 38 20C38 17 32 10 32 10Z" fill="#2563eb" />
          <circle cx="30" cy="18" r="1.5" fill="#ffffff" opacity="0.8" />
          <path d="M15 28L17 28M47 28L49 28M17 38L19 38M45 38L47 38" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      stepClass: 'pw-step-5',
      badge: 'Step 5 · After Step 4',
      name: 'Anandha',
      desc: (
        <>
          A transformative journey of <strong>inner awakening</strong> that nurtures{' '}
          <strong>purpose, peace, and wisdom</strong>. By fostering <strong>mindfulness and inner clarity</strong>, it integrates <strong>mind, body, and spirit</strong> to experience <strong>lasting happiness</strong> and realize one&apos;s <strong>highest purpose</strong>.
        </>
      ),
      svgIcon: (
        <svg viewBox="0 0 64 64" className="w-10 h-10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="32" cy="32" r="28" fill="rgba(190, 24, 93, 0.12)" />
          <path d="M32 8L35.5 20.5L48 17L39.5 27L50 34.5L37.5 37.5L40 50L32 41.5L24 50L26.5 37.5L14 34.5L24.5 27L16 17L28.5 20.5L32 8Z" fill="rgba(244, 114, 182, 0.25)" stroke="#be185d" strokeWidth="2.5" strokeLinejoin="round" />
          <path d="M32 18L36 28L46 32L36 36L32 46L28 36L18 32L28 28L32 18Z" fill="#be185d" />
          <circle cx="32" cy="32" r="4" fill="#ffffff" />
        </svg>
      ),
    },
    {
      stepClass: 'pw-step-6',
      badge: 'Step 6 · After Step 5',
      name: 'Amogha',
      desc: (
        <>
          A conscious practice of living in <strong>harmony with the Divine</strong> and all creation. By recognizing the sacred presence in every moment, it cultivates <strong>compassion and selfless service</strong>, transforming life into a celebration of <strong>love, joy, and purpose</strong>.
        </>
      ),
      svgIcon: (
        <svg viewBox="0 0 64 64" className="w-10 h-10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="32" cy="32" r="28" fill="rgba(245, 158, 11, 0.12)" />
          <circle cx="32" cy="32" r="12" fill="rgba(251, 191, 36, 0.25)" stroke="#b45309" strokeWidth="2.5" />
          <path d="M32 8L32 14M32 50L32 56M8 32L14 32M50 32L56 32M15 15L19 19M45 45L49 49M15 49L19 45M45 19L49 15" stroke="#b45309" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      stepClass: 'pw-step-7',
      badge: 'Step 7 · Final Step',
      name: 'Advaitha',
      desc: (
        <>
          The sacred realization of <strong>oneness</strong>, awakening to the truth that the individual self and the Divine are not separate. It is living in <strong>unconditional love and God-consciousness</strong>, where every action becomes an expression of <strong>divine grace and infinite bliss</strong>.
        </>
      ),
      svgIcon: (
        <svg viewBox="0 0 64 64" className="w-10 h-10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="32" cy="32" r="28" fill="rgba(55, 48, 163, 0.12)" />
          <path d="M23,26 C16,26 16,38 23,38 C30,38 34,26 41,26 C48,26 48,38 41,38 C34,38 30,26 23,26 Z" fill="rgba(129, 140, 248, 0.25)" stroke="#3730a3" strokeWidth="2.5" />
          <circle cx="32" cy="32" r="4" fill="#ffffff" />
        </svg>
      ),
    },
  ];

  return (
    <section id="pathways" className="pathways-section py-20 font-body relative z-10">

      {/* Sacred Geometry Mandalas in Background */}
      <div className="absolute top-1/2 -right-28 -translate-y-1/2 opacity-20 pointer-events-none hidden lg:block">
        <svg width="550" height="550" viewBox="0 0 100 100" fill="none" stroke="#C8A34A" strokeWidth="0.5">
          <circle cx="50" cy="50" r="48" strokeWidth="0.8" />
          <circle cx="50" cy="50" r="40" strokeDasharray="1.5 1.5" />
          <circle cx="50" cy="50" r="30" />
          <polygon points="50,2 98,82 2,82" strokeWidth="0.5" />
          <polygon points="50,98 98,18 2,18" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <span className="pathways-eyebrow">Sacred Journey</span>
          <h2 className="pathways-title mt-2">
            Pathways to <em>Awakening</em>
          </h2>
          <p className="pathways-subtitle">
            A progressive seven-step journey of inner purification, energetic alignment, and conscious evolution.
          </p>
          <div className="pathways-divider">
            <span />
            <svg viewBox="0 0 24 24" fill="none" className="shrink-0 w-6 h-6">
              <circle cx="12" cy="12" r="5" fill="#d4af36" />
              <path d="M12 2v4M12 18v4M2 12h4M18 12h4" stroke="#d4af36" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <span />
          </div>
        </motion.div>

        {/* Center Medallion (Yogi Silhouette in Golden Sun Circle) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative w-28 h-28 mx-auto mb-14 flex items-center justify-center"
        >
          <div className="absolute inset-0 rounded-full bg-[#C8A34A]/25 blur-xl pointer-events-none" />
          <div className="relative w-24 h-24 rounded-full bg-gradient-to-b from-[#DFC47A] via-[#C8A34A] to-[#8A6500] p-1 shadow-xl flex items-center justify-center">
            <div className="absolute -top-2 w-7 h-1.5 bg-[#C8A34A] rounded-full shadow-sm" />
            <div className="absolute -bottom-2 w-7 h-1.5 bg-[#C8A34A] rounded-full shadow-sm" />
            <div className="absolute -left-2 h-7 w-1.5 bg-[#C8A34A] rounded-full shadow-sm" />
            <div className="absolute -right-2 h-7 w-1.5 bg-[#C8A34A] rounded-full shadow-sm" />

            <div className="w-full h-full rounded-full bg-[#FFFDF9] flex items-center justify-center border border-[#DFC47A]/60 shadow-inner">
              <svg viewBox="0 0 64 64" className="w-14 h-14" fill="#352043">
                <circle cx="32" cy="22" r="6" />
                <path d="M32 29C27 29 22 34 20 40C19 43 21 46 25 46C28 46 30 44 32 44C34 44 36 46 39 46C43 46 45 43 44 40C42 34 37 29 32 29Z" />
                <path d="M22 36C20 38 18 41 22 43M42 36C44 38 46 41 42 43" stroke="#352043" strokeWidth="2.5" strokeLinecap="round" fill="none" />
              </svg>
            </div>
          </div>
        </motion.div>

        {/* 7 Steps Cards Grid */}
        <div className="pw-grid">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (idx % 3) * 0.1 }}
              className={`pw-card ${step.stepClass}`}
            >
              <div className="pw-img-top">
                <div className="pw-spin-ring" />
                <div className="pw-spin-ring-2" />
                <div className="pw-circle-img">{step.svgIcon}</div>
              </div>
              <div className="pw-badge">{step.badge}</div>
              <h3 className="pw-name">{step.name}</h3>
              <p className="pw-desc">{step.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
