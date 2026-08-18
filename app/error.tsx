'use client';

import { useEffect } from 'react';
import { Sparkles, RefreshCw } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4 pt-32 pb-20 bg-[#F8F2E8] font-body">
      <div className="max-w-md space-y-6 luxury-card p-10 rounded-[28px] border border-[#E9DED3] bg-white shadow-lg">
        <div className="w-16 h-16 mx-auto rounded-full bg-[#5A2D82]/10 border border-[#DFC47A] flex items-center justify-center text-[#C8A34A]">
          <Sparkles className="w-8 h-8" />
        </div>

        <h2 className="font-heading text-2xl font-bold text-[#352043]">
          Something Went Wrong
        </h2>

        <p className="text-[#5E5865] text-sm font-light leading-relaxed">
          An unexpected error occurred while loading this page. Please try refreshing to continue.
        </p>

        <button
          onClick={() => reset()}
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#5A2D82] hover:bg-[#C8A34A] text-white hover:text-[#47206A] font-semibold text-xs uppercase tracking-wider shadow-md hover:scale-105 transition-all"
        >
          <RefreshCw className="w-4 h-4" />
          <span>Try Again</span>
        </button>
      </div>
    </div>
  );
}
