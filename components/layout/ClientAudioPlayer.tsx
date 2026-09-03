'use client';

import React, { useState, useEffect } from 'react';
import GlobalMusicPlayer from '@/components/layout/GlobalMusicPlayer';

export default function ClientAudioPlayer() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return <GlobalMusicPlayer />;
}

