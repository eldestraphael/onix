import React from 'react';
import { PageRoute } from '../utils/routes';
import { PageEndBlock } from '../components/PageEndBlock';
import { Sun, Wind, Droplets, Recycle, BatteryCharging, ArrowRight } from 'lucide-react';

interface SustainabilityPageProps {
  onNavigate: (page: PageRoute) => void;
  onOpenTourModal: () => void;
  onOpenBoardPackModal: () => void;
}

export const SustainabilityPage: React.FC<SustainabilityPageProps> = ({
  onNavigate,
  onOpenTourModal,
  onOpenBoardPackModal,
}) => {
  return (
    <div className="space-y-0">
      {/* Hero */}
      <section className="bg-white pt-12 pb-16 lg:pt-16 lg:pb-20 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-5">
            <div className="inline-flex items-center text-xs font-semibold text-emerald-700 uppercase tracking-wider">
              <span>Verifiable Environmental Performance</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-['Montserrat',sans-serif] tracking-tight text-balance">
              Our footprint, in numbers we measure
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              A promise nobody can check isn&apos;t worth much. So here&apos;s what we&apos;ve built, what we measure and what we&apos;re working on.
            </p>
          </div>
        </div>
      </section>

      {/* What we've built */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1 font-['Montserrat',sans-serif]">
              What we&apos;ve built
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-3xl p-6 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center">
                <Sun className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-base font-['Montserrat',sans-serif]">
                640 kW On-Site Solar Farm
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                2,200 photovoltaic panels situated on our facility grounds, feeding directly into the building electrical switchgear to offset daytime grid and generator consumption.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-6 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-blue-100 text-[#243F87] flex items-center justify-center">
                <Wind className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-base font-['Montserrat',sans-serif]">
                Cold-Aisle Containment
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Cooling that normally runs on 2 of our 6 CRAC units. Sealed containment prevents warm and cold air mixing, drastically lowering the energy needed to sustain 21.5°C data halls.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-6 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-cyan-100 text-cyan-800 flex items-center justify-center">
                <Droplets className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-base font-['Montserrat',sans-serif]">
                Reverse Osmosis Water
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Groundwater extracted from our own borehole and purified on site. We consume zero litres of municipal water, leaving city supplies untouched.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-6 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center">
                <Recycle className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-base font-['Montserrat',sans-serif]">
                Solid Waste Recycling
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                All transit cardboard, server unboxing plastics, and unserviceable metallic components are sorted and collected by certified local recycling partners in Greater Accra.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What we measure */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1 font-['Montserrat',sans-serif]">
              What we measure
            </h2>
            <p className="text-xs text-slate-500 mt-1">Updated annually across verified facility sensors.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-slate-50 rounded-3xl">
              <div className="text-xs uppercase font-['Source_Sans_3',sans-serif] font-semibold text-slate-500">Power Usage Effectiveness</div>
              <div className="text-4xl font-extrabold text-slate-900 font-['Source_Sans_3',sans-serif] mt-2 tabular-nums">
                1.38 PUE
              </div>
              <div className="text-xs text-slate-600 mt-1">
                Measured across 2025–2026. Substantially below typical sub-Saharan data centre averages (1.8+).
              </div>
            </div>

            <div className="p-6 bg-slate-50 rounded-3xl">
              <div className="text-xs uppercase font-['Source_Sans_3',sans-serif] font-semibold text-slate-500">Solar Share of Daytime Load</div>
              <div className="text-4xl font-extrabold text-amber-600 font-['Source_Sans_3',sans-serif] mt-2 tabular-nums">
                42% Peak
              </div>
              <div className="text-xs text-slate-600 mt-1">
                Average daytime solar generation share of total building and cooling power demand under clear Accra daylight.
              </div>
            </div>

            <div className="p-6 bg-slate-50 rounded-3xl">
              <div className="text-xs uppercase font-['Source_Sans_3',sans-serif] font-semibold text-slate-500">Municipal Water Dependency</div>
              <div className="text-4xl font-extrabold text-cyan-700 font-['Source_Sans_3',sans-serif] mt-2 tabular-nums">
                0 Litres
              </div>
              <div className="text-xs text-slate-600 mt-1">
                100% self-sufficient closed-loop chillers powered by on-site deep-well reverse osmosis filtration.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's next */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-400 uppercase tracking-wider">
            <BatteryCharging className="w-4 h-4" />
            <span>Next Phase Evaluation</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold font-['Montserrat',sans-serif]">
            What&apos;s next: Utility-Scale Battery Storage
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            We are actively assessing battery energy storage systems (BESS) so our solar farm can carry more of the night-time load and smooth grid fluctuation transitions further. We will publish a firm target once it is fully engineered and committed, not before.
          </p>
          <div className="pt-4">
            <button
              onClick={onOpenTourModal}
              className="px-6 py-3 bg-[#B12D24] hover:bg-black active:bg-neutral-900 text-white font-semibold rounded-lg text-xs sm:text-sm transition-colors cursor-pointer"
            >
              See the solar installation on your tour →
            </button>
          </div>
        </div>
      </section>

      {/* Page-End Block */}
      <PageEndBlock
        onOpenTourModal={onOpenTourModal}
        onOpenContact={() => onNavigate('contact')}
        onOpenBoardPackModal={onOpenBoardPackModal}
      />
    </div>
  );
};
