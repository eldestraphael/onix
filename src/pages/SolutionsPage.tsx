import React, { useEffect } from 'react';
import { PageRoute } from '../utils/routes';
import { PageEndBlock } from '../components/PageEndBlock';
import { CostEstimator } from '../components/CostEstimator';
import { Server, Network, Shuffle, Headphones, Briefcase, Check, ArrowRight, ShieldCheck } from 'lucide-react';

interface SolutionsPageProps {
  onNavigate: (page: PageRoute, hash?: string) => void;
  onOpenTourModal: () => void;
  onOpenBoardPackModal: () => void;
  targetHash?: string;
}

export const SolutionsPage: React.FC<SolutionsPageProps> = ({
  onNavigate,
  onOpenTourModal,
  onOpenBoardPackModal,
  targetHash,
}) => {
  // Scroll to hash anchor if provided
  useEffect(() => {
    if (targetHash) {
      const el = document.getElementById(targetHash);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [targetHash]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="space-y-0">
      {/* Hero */}
      <section className="bg-white pt-12 pb-12 lg:pt-16 lg:pb-16 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-['Montserrat',sans-serif] tracking-tight text-balance">
              What you can do at Onix
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Most clients start with colocation and add the rest as they grow.
            </p>
          </div>
        </div>
      </section>

      {/* Sticky In-Page Navigation Menu */}
      <div className="sticky top-20 z-30 bg-slate-900/95 backdrop-blur-md text-white border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-1 sm:gap-2 overflow-x-auto py-3 no-scrollbar text-xs font-medium">
          <button
            onClick={() => scrollToSection('colocation')}
            className="px-3 py-1.5 rounded-lg hover:bg-white/10 transition-colors whitespace-nowrap shrink-0 text-slate-300 hover:text-white"
          >
            Colocation
          </button>
          <button
            onClick={() => scrollToSection('interconnection')}
            className="px-3 py-1.5 rounded-lg hover:bg-white/10 transition-colors whitespace-nowrap shrink-0 text-slate-300 hover:text-white"
          >
            Interconnection & MMR
          </button>
          <button
            onClick={() => scrollToSection('peering')}
            className="px-3 py-1.5 rounded-lg hover:bg-white/10 transition-colors whitespace-nowrap shrink-0 text-slate-300 hover:text-white"
          >
            Internet Exchange & Peering
          </button>
          <button
            onClick={() => scrollToSection('remote-hands')}
            className="px-3 py-1.5 rounded-lg hover:bg-white/10 transition-colors whitespace-nowrap shrink-0 text-slate-300 hover:text-white"
          >
            Remote Hands
          </button>
          <button
            onClick={() => scrollToSection('recovery-office')}
            className="px-3 py-1.5 rounded-lg hover:bg-white/10 transition-colors whitespace-nowrap shrink-0 text-slate-300 hover:text-white"
          >
            Disaster-Recovery Office
          </button>
          <button
            onClick={() => scrollToSection('pricing')}
            className="px-3 py-1.5 rounded-lg bg-[#B12D24] hover:bg-black active:bg-neutral-900 text-white font-semibold transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            What will it cost?
          </button>
        </div>
      </div>

      {/* Content Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
        {/* 1. Colocation */}
        <section id="colocation" className="scroll-mt-36">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-4 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-red-100 text-[#B12D24] flex items-center justify-center">
                <Server className="w-5 h-5" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 font-['Montserrat',sans-serif]">
                Colocation
              </h2>
              <span className="text-xs font-['Source_Sans_3',sans-serif] font-medium text-slate-500 block">
                Module 1: 170 racks · Expandable to 680
              </span>
            </div>

            <div className="lg:col-span-8 bg-white rounded-3xl p-6 sm:p-8 space-y-4">
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Your equipment, in a Tier IV certified facility. Choose a single rack, a pod of 30 or 50 racks, or a private cage. Power at 3 kW or 5 kW per rack, with 99.995% uptime in every contract.
              </p>
              <div className="p-4 bg-slate-50 rounded-2xl text-xs space-y-1.5 text-slate-700">
                <span className="font-bold text-slate-900 block">Most clients start with:</span>
                <p>
                  1 to 4 racks in a shared data hall or a private cage, and grow from there as workloads expand. Module 1 has 170 racks, and the site is designed to grow to 680 racks in Phase 2.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 pt-2 text-xs">
                <button
                  onClick={onOpenTourModal}
                  className="font-semibold text-[#B12D24] hover:underline"
                >
                  Book a colocation tour →
                </button>
                <button
                  onClick={() => scrollToSection('pricing')}
                  className="font-semibold text-slate-700 hover:text-slate-900"
                >
                  Estimate colocation budget →
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Interconnection */}
        <section id="interconnection" className="scroll-mt-36 border-t border-slate-200 pt-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-4 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-blue-100 text-[#243F87] flex items-center justify-center">
                <Network className="w-5 h-5" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 font-['Montserrat',sans-serif]">
                Interconnection
              </h2>
              <span className="text-xs font-['Source_Sans_3',sans-serif] font-medium text-slate-500 block">
                Carrier-Neutral Meet-Me Room
              </span>
            </div>

            <div className="lg:col-span-8 bg-white rounded-3xl p-6 sm:p-8 space-y-4">
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                A carrier-neutral Meet-Me Room, so you choose your carriers rather than inheriting ours. Cross-connects are live in typically 3 working days. Reach internet exchanges, content networks and the global platforms you use through your chosen carriers.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs">
                <div className="p-3 bg-slate-50 rounded-2xl">
                  <div className="font-bold text-slate-900">Lead Time</div>
                  <div className="text-slate-500 mt-0.5">3 working days to light</div>
                </div>
                <div className="p-3 bg-slate-50 rounded-2xl">
                  <div className="font-bold text-slate-900">Carriers On Site</div>
                  <div className="text-slate-500 mt-0.5">12+ telcos & fiber backbones</div>
                </div>
                <div className="p-3 bg-slate-50 rounded-2xl">
                  <div className="font-bold text-slate-900">Cable Entry</div>
                  <div className="text-slate-500 mt-0.5">Dual diverse underground vaults</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Internet Exchange & Peering */}
        <section id="peering" className="scroll-mt-36 border-t border-slate-200 pt-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-4 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-slate-100 text-slate-800 flex items-center justify-center">
                <Shuffle className="w-5 h-5" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 font-['Montserrat',sans-serif]">
                Internet exchange and peering
              </h2>
              <span className="text-xs font-['Source_Sans_3',sans-serif] font-medium text-slate-500 block">
                Keep Local Traffic Local
              </span>
            </div>

            <div className="lg:col-span-8 bg-white rounded-3xl p-6 sm:p-8 space-y-4">
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Exchange traffic directly with other networks in the building. You cut transit costs and latency, and keep local Ghanaian traffic inside Ghana.
              </p>
              <div className="p-4 bg-slate-50 rounded-2xl text-xs space-y-2">
                <div className="font-bold text-slate-900">Why peering matters in Accra:</div>
                <p className="text-slate-600 leading-relaxed">
                  Instead of routing data out across international submarine cables and back, peering inside the Onix Meet-Me Room keeps domestic packets within sub-millisecond range and saves heavy IP transit transit bandwidth.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Remote Hands */}
        <section id="remote-hands" className="scroll-mt-36 border-t border-slate-200 pt-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-4 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center">
                <Headphones className="w-5 h-5" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 font-['Montserrat',sans-serif]">
                Remote hands
              </h2>
              <span className="text-xs font-['Source_Sans_3',sans-serif] font-medium text-slate-500 block">
                24/7/365 On-Site Engineers
              </span>
            </div>

            <div className="lg:col-span-8 bg-white rounded-3xl p-6 sm:p-8 space-y-4">
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Our on-site engineers act as your hands, around the clock: reboots, cabling, swaps and checks. Typical response: within 15 minutes. Most clients visit once, then manage everything remotely.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 text-xs">
                <div className="p-3 bg-slate-50 rounded-2xl">
                  <div className="font-semibold text-slate-900">Power Cycles</div>
                  <div className="text-slate-500 mt-0.5">Controlled reboots</div>
                </div>
                <div className="p-3 bg-slate-50 rounded-2xl">
                  <div className="font-semibold text-slate-900">Hardware Swaps</div>
                  <div className="text-slate-500 mt-0.5">Drives, PSUs, SFPs</div>
                </div>
                <div className="p-3 bg-slate-50 rounded-2xl">
                  <div className="font-semibold text-slate-900">Cable Audits</div>
                  <div className="text-slate-500 mt-0.5">Patching & labeling</div>
                </div>
                <div className="p-3 bg-slate-50 rounded-2xl">
                  <div className="font-semibold text-slate-900">Visual Diagnostics</div>
                  <div className="text-slate-500 mt-0.5">LED status check</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Disaster-Recovery Office */}
        <section id="recovery-office" className="scroll-mt-36 border-t border-slate-200 pt-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-4 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center">
                <Briefcase className="w-5 h-5" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 font-['Montserrat',sans-serif]">
                Disaster-recovery office
              </h2>
              <span className="text-xs font-['Source_Sans_3',sans-serif] font-medium text-slate-500 block">
                200 m² Furnished Space On Site
              </span>
            </div>

            <div className="lg:col-span-8 bg-white rounded-3xl p-6 sm:p-8 space-y-4">
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                200 m² of furnished office space on site. If your corporate office is out of action due to utility failure, civil disruption, or building maintenance, your critical operations team works directly next to your systems.
              </p>
              <div className="p-4 bg-slate-50 rounded-2xl text-xs space-y-2 text-slate-700">
                <div className="font-bold text-slate-900">Furnished & Ready:</div>
                <p>
                  Equipped with dedicated workstations, high-speed fiber internet connected to both power backup feeds, meeting rooms, secure access control, and kitchen facilities.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 6. What will it cost? (Interactive block) */}
        <div className="pt-8">
          <CostEstimator
            onOpenTourModal={onOpenTourModal}
            onOpenContact={(notes) => onNavigate('contact', notes)}
          />
        </div>
      </div>

      {/* Page-End Block */}
      <PageEndBlock
        onOpenTourModal={onOpenTourModal}
        onOpenContact={() => onNavigate('contact')}
        onOpenBoardPackModal={onOpenBoardPackModal}
      />
    </div>
  );
};
