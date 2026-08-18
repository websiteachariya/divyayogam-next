'use client';

export function SacredGeometryMandala({ className = "w-72 h-72 text-[#C8A34A]" }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 400" fill="none" className={className}>
      <circle cx="200" cy="200" r="190" stroke="currentColor" strokeWidth="0.8" strokeDasharray="4 4" opacity="0.4" />
      <circle cx="200" cy="200" r="170" stroke="currentColor" strokeWidth="1" opacity="0.6" />
      <circle cx="200" cy="200" r="150" stroke="currentColor" strokeWidth="0.8" opacity="0.5" />
      <circle cx="200" cy="200" r="110" stroke="currentColor" strokeWidth="1" opacity="0.7" />
      <circle cx="200" cy="200" r="70" stroke="currentColor" strokeWidth="0.8" opacity="0.6" />
      <circle cx="200" cy="200" r="30" stroke="currentColor" strokeWidth="1" opacity="0.8" />

      {/* 12-petal sacred flower of life geometry */}
      {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle, i) => (
        <g key={i} transform={`rotate(${angle} 200 200)`}>
          <path
            d="M200 200 C220 140 220 60 200 10 C180 60 180 140 200 200 Z"
            stroke="currentColor"
            strokeWidth="0.8"
            opacity="0.35"
            fill="currentColor"
            fillOpacity="0.03"
          />
          <line x1="200" y1="200" x2="200" y2="10" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
          <circle cx="200" cy="50" r="4" fill="currentColor" opacity="0.6" />
        </g>
      ))}

      {/* Interlocking triangles (Sri Yantra core) */}
      <polygon points="200,40 340,300 60,300" stroke="currentColor" strokeWidth="1" opacity="0.5" />
      <polygon points="200,360 340,100 60,100" stroke="currentColor" strokeWidth="1" opacity="0.5" />
      <polygon points="200,80 310,280 90,280" stroke="currentColor" strokeWidth="0.8" opacity="0.4" />
      <polygon points="200,320 310,120 90,120" stroke="currentColor" strokeWidth="0.8" opacity="0.4" />
    </svg>
  );
}

export function MerkabaHypercubeSvg({ className = "w-80 h-80 text-[#DFC47A]" }: { className?: string }) {
  return (
    <svg viewBox="0 0 500 500" fill="none" className={className}>
      <defs>
        <radialGradient id="goldGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#DFC47A" stopOpacity="0.4" />
          <stop offset="50%" stopColor="#C8A34A" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#C8A34A" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Central Light Glow */}
      <circle cx="250" cy="250" r="180" fill="url(#goldGlow)" />

      {/* Outer Golden Rays */}
      {[0, 15, 30, 45, 60, 75, 90, 105, 120, 135, 150, 165].map((angle, i) => (
        <line
          key={i}
          x1="250"
          y1="50"
          x2="250"
          y2="450"
          stroke="currentColor"
          strokeWidth="0.5"
          opacity="0.25"
          transform={`rotate(${angle} 250 250)`}
        />
      ))}

      {/* Outer Concentric Golden Rings */}
      <circle cx="250" cy="250" r="220" stroke="currentColor" strokeWidth="0.8" strokeDasharray="3 6" opacity="0.4" />
      <circle cx="250" cy="250" r="190" stroke="currentColor" strokeWidth="1" opacity="0.6" />
      <circle cx="250" cy="250" r="140" stroke="currentColor" strokeWidth="0.8" opacity="0.5" />
      <circle cx="250" cy="250" r="90" stroke="currentColor" strokeWidth="1" opacity="0.7" />

      {/* 3D Merkaba Star Tetrahedron Lines */}
      {/* Outer Tetrahedron 1 */}
      <polygon points="250,50 420,350 80,350" stroke="currentColor" strokeWidth="1.5" opacity="0.85" />
      {/* Outer Tetrahedron 2 */}
      <polygon points="250,450 420,150 80,150" stroke="currentColor" strokeWidth="1.5" opacity="0.85" />

      {/* Inner Tesseract Box 1 */}
      <polygon points="250,110 370,320 130,320" stroke="currentColor" strokeWidth="1" opacity="0.7" />
      <polygon points="250,390 370,180 130,180" stroke="currentColor" strokeWidth="1" opacity="0.7" />

      {/* Connecting 3D Cube Nodes */}
      <line x1="250" y1="50" x2="250" y2="450" stroke="currentColor" strokeWidth="1" opacity="0.6" />
      <line x1="420" y1="150" x2="80" y2="350" stroke="currentColor" strokeWidth="1" opacity="0.6" />
      <line x1="80" y1="150" x2="420" y2="350" stroke="currentColor" strokeWidth="1" opacity="0.6" />

      {/* Core Glowing Points */}
      <circle cx="250" cy="250" r="8" fill="#FFF5D6" />
      <circle cx="250" cy="250" r="16" stroke="currentColor" strokeWidth="1" opacity="0.9" />
      <circle cx="250" cy="50" r="4" fill="currentColor" />
      <circle cx="250" cy="450" r="4" fill="currentColor" />
      <circle cx="420" cy="150" r="4" fill="currentColor" />
      <circle cx="80" cy="150" r="4" fill="currentColor" />
      <circle cx="420" cy="350" r="4" fill="currentColor" />
      <circle cx="80" cy="350" r="4" fill="currentColor" />
    </svg>
  );
}

import Image from 'next/image';

export function GoldenHeadingUnderline({ className = "my-2" }: { className?: string }) {
  return (
    <div className={`relative w-full max-w-md sm:max-w-xl lg:max-w-2xl xl:max-w-3xl h-10 sm:h-14 lg:h-16 mx-auto pointer-events-none ${className}`}>
      <Image
        src="/images/deco-15.webp"
        alt="Sacred Golden Underline Divider"
        fill
        className="object-contain drop-shadow-[0_0_15px_rgba(223,196,122,0.45)]"
      />
    </div>
  );
}
