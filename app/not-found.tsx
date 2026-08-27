import Link from 'next/link';
import { Sparkles, Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4 pt-36 sm:pt-40 pb-16 bg-[#F8F2E8] font-body">
      <div className="max-w-md space-y-6 luxury-card p-10 rounded-[28px] border border-[#E9DED3] bg-white shadow-lg">
        <div className="w-16 h-16 mx-auto rounded-full bg-[#5A2D82]/10 border border-[#DFC47A] flex items-center justify-center text-[#C8A34A]">
          <Sparkles className="w-8 h-8" />
        </div>

        <h1 className="font-heading text-6xl font-bold text-[#352043]">404</h1>

        <h2 className="font-heading text-2xl font-bold text-[#352043]">
          Page Not Found
        </h2>

        <p className="text-[#5E5865] text-sm font-light leading-relaxed">
          The sacred path you are looking for does not exist or has moved. Return to stillness and find your way back home.
        </p>

        <Link
          href="/"
          className="inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-2.5 rounded-full bg-[#5A2D82] hover:bg-[#C8A34A] text-white hover:text-[#47206A] font-semibold text-[11px] sm:text-xs uppercase tracking-wider shadow-md hover:scale-105 transition-all"
        >
          <Home className="w-4 h-4" />
          <span>Return Home</span>
        </Link>
      </div>
    </div>
  );
}
