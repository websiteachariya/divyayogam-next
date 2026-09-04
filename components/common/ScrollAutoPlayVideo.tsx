'use client';

import React, { useRef, useEffect } from 'react';

interface ScrollAutoPlayVideoProps {
  src: string;
  className?: string;
  poster?: string;
  controls?: boolean;
  loop?: boolean;
  muted?: boolean;
}

export default function ScrollAutoPlayVideo({
  src,
  className = 'w-full h-full object-cover',
  poster,
  controls = true,
  loop = true,
  muted = true,
}: ScrollAutoPlayVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement) return;

    // Standard browser autoplay policy requirement: set DOM element property
    videoElement.muted = muted;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const playPromise = videoElement.play();
            if (playPromise !== undefined) {
              playPromise.catch(() => {
                // Ignore silent autoplay restriction fallback
              });
            }
          } else {
            videoElement.pause();
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(videoElement);

    return () => {
      if (videoElement) {
        observer.unobserve(videoElement);
      }
    };
  }, [muted]);

  return (
    <video
      ref={videoRef}
      autoPlay
      loop={loop}
      muted={muted}
      controls={controls}
      playsInline
      preload="auto"
      className={className}
      poster={poster}
    >
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}
