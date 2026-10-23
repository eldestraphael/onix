import React from 'react';
import { Calendar, MessageSquare, FileText } from 'lucide-react';

interface PageEndBlockProps {
  onOpenTourModal: () => void;
  onOpenContact: () => void;
  onOpenBoardPackModal: () => void;
  className?: string;
}

export const PageEndBlock: React.FC<PageEndBlockProps> = ({
  onOpenTourModal,
  onOpenContact,
  onOpenBoardPackModal,
  className = '',
}) => {
  return (
    <section className={`bg-[#151515] text-white py-16 lg:py-20 relative overflow-hidden ${className}`}>
      {/* Subtle background architectural grid accent */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-['Montserrat',sans-serif] text-balance">
          See it for yourself.
        </h2>
        <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          The best way to judge a data centre is to stand in it. Book a tour, in person or by live video, and meet the engineers who run Onix.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-xl mx-auto">
          {/* Primary Action: Book a tour */}
          <button
            onClick={onOpenTourModal}
            className="w-full sm:w-auto px-7 py-3.5 bg-[#B12D24] hover:bg-[#96221A] active:bg-[#7e1c15] text-white font-semibold rounded-full transition-all flex items-center justify-center gap-2 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#151515]"
          >
            <Calendar className="w-4 h-4" />
            <span>Book a tour</span>
          </button>

          {/* Secondary Action 1: Talk to an engineer */}
          <button
            onClick={onOpenContact}
            className="w-full sm:w-auto px-7 py-3.5 bg-white/10 hover:bg-white/15 active:bg-white/20 text-white font-semibold rounded-full transition-all flex items-center justify-center gap-2 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#151515]"
          >
            <MessageSquare className="w-4 h-4 text-slate-300" />
            <span>Talk to an engineer</span>
          </button>

          {/* Secondary Action 2: Get the board pack */}
          <button
            onClick={onOpenBoardPackModal}
            className="w-full sm:w-auto px-7 py-3.5 bg-white/10 hover:bg-white/15 active:bg-white/20 text-white font-semibold rounded-full transition-all flex items-center justify-center gap-2 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#151515]"
          >
            <FileText className="w-4 h-4 text-slate-300" />
            <span>Get the board pack</span>
          </button>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-slate-400">
          <span>60-minute in-depth walk</span>
          <span aria-hidden="true">·</span>
          <span>Accra facility or live video call</span>
          <span aria-hidden="true">·</span>
          <span>Direct access to power & MMR engineers</span>
        </div>
      </div>
    </section>
  );
};
