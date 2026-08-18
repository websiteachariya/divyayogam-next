import { Sparkles } from 'lucide-react';

export default function Loading() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center bg-[#F8F2E8] font-body text-[#47206A]">
      <div className="flex flex-col items-center gap-4">
        <div className="w-14 h-14 rounded-full bg-[#5A2D82] border-2 border-[#DFC47A] flex items-center justify-center text-[#DFC47A] animate-pulse shadow-lg">
          <Sparkles className="w-7 h-7" />
        </div>
        <span className="font-heading text-lg font-bold tracking-widest text-[#47206A] uppercase">
          Divya Yogam
        </span>
      </div>
    </div>
  );
}
