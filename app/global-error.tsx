'use client';

import React from 'react';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col items-center justify-center bg-[#F8F2E8] text-[#47206A] p-4 text-center">
        <div className="max-w-md p-8 bg-white rounded-3xl border-2 border-[#DFC47A] shadow-2xl space-y-4">
          <h2 className="text-2xl font-extrabold font-heading text-[#47206A]">Something went wrong</h2>
          <p className="text-xs text-gray-600">A global application error occurred. Please try reloading the page.</p>
          <button
            onClick={() => reset()}
            className="px-6 py-2.5 rounded-full bg-[#47206A] text-white font-bold text-xs uppercase tracking-wider shadow-md hover:bg-[#C8A34A] hover:text-[#47206A] transition-all"
          >
            Try Again
          </button>
        </div>
      </body>
    </html>
  );
}
