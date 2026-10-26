import React from 'react';
import { Calendar, MessageCircle } from 'lucide-react';

interface StickyMobileBarProps {
  onOpenTourModal: () => void;
}

export const StickyMobileBar: React.FC<StickyMobileBarProps> = ({
  onOpenTourModal,
}) => {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-30 bg-white/95 backdrop-blur-md border-t border-slate-200 px-4 py-2.5">
      <div className="flex items-center gap-3 max-w-md mx-auto">
        {/* WhatsApp Quick Action Button */}
        <a
          href="https://wa.me/233500865266?text=Hello%20Onix%20Team,%20I%20would%20like%20to%20enquire%20about%20colocation"
          target="_blank"
          rel="noreferrer"
          className="h-11 px-3.5 flex items-center justify-center gap-2 bg-[#25D366]/10 active:bg-[#25D366]/20 text-[#128C7E] font-semibold text-xs rounded-lg border border-[#25D366]/30 transition-colors shrink-0"
          aria-label="Chat with Onix engineer on WhatsApp"
        >
          <MessageCircle className="w-4 h-4 fill-current text-[#25D366]" />
          <span className="hidden xs:inline">WhatsApp</span>
        </a>

        {/* Primary Action Button: Book a tour */}
        <button
          onClick={onOpenTourModal}
          className="h-11 flex-1 flex items-center justify-center gap-2 bg-[#B12D24] hover:bg-black active:bg-neutral-900 text-white font-semibold text-xs sm:text-sm rounded-lg transition-all active:scale-[0.98] cursor-pointer"
        >
          <Calendar className="w-4 h-4" />
          <span>Book a tour (Accra or Video)</span>
        </button>
      </div>
    </div>
  );
};
