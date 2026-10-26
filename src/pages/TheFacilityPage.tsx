import React from 'react';
import { PageRoute } from '../utils/routes';
import { ProofStrip } from '../components/ProofStrip';
import { PageEndBlock } from '../components/PageEndBlock';
import { FACILITY_SPECS } from '../data/siteContent';
import { PowerStoryDiagram } from '../components/PowerStoryDiagram';
import { 
  ShieldCheck, 
  Sun, 
  Zap, 
  Wind, 
  Lock, 
  Network, 
  Droplet, 
  Maximize2, 
  Calendar, 
  FileText, 
  CheckCircle2 
} from 'lucide-react';

interface TheFacilityPageProps {
  onNavigate: (page: PageRoute, hash?: string) => void;
  onOpenTourModal: () => void;
  onOpenBoardPackModal: () => void;
  onOpenOutageDiary: () => void;
}

export const TheFacilityPage: React.FC<TheFacilityPageProps> = ({
  onNavigate,
  onOpenTourModal,
  onOpenBoardPackModal,
  onOpenOutageDiary,
}) => {
  return (
    <div className="space-y-0">
      {/* 1. Hero */}
      <section className="bg-white pt-12 pb-16 lg:pt-16 lg:pb-20 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-5">
            <div className="inline-flex items-center text-xs font-semibold text-[#B12D24] uppercase tracking-wider">
              <span>Engineering Specifications · Tier IV Constructed Facility</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15] font-['Montserrat',sans-serif] text-balance">
              Inside West Africa&apos;s first certified Tier IV data centre
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Every critical system has an independent backup, so maintenance or a failure in one path never takes you down. Uptime Institute certified it, so you don&apos;t have to take our word for it.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <button
                onClick={onOpenTourModal}
                className="px-6 py-3.5 bg-[#B12D24] hover:bg-black active:bg-neutral-900 text-white font-semibold rounded-lg transition-all text-sm flex items-center justify-center gap-2 cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Book a tour</span>
              </button>

              <button
                onClick={onOpenBoardPackModal}
                className="px-6 py-3.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold rounded-lg transition-colors text-sm flex items-center justify-center gap-2"
              >
                <FileText className="w-4 h-4 text-slate-600" />
                <span>Download the engineering pack</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Proof Strip */}
      <ProofStrip onNavigateToCertification={() => onNavigate('certification')} />

      {/* Facility Deep Dive Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {/* Power: Four Layers */}
        <div id="power">
          <PowerStoryDiagram onOpenOutageDiary={onOpenOutageDiary} />
        </div>

        {/* 6 Engineering Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* 1. Built for Accra's risks */}
          <div className="bg-white rounded-3xl p-6 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-red-50 text-[#B12D24] flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 font-['Montserrat',sans-serif]">
              Built for Accra&apos;s risks
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              The building sits 1.5 m above ground on a reinforced plinth designed specifically for severe seasonal flooding and earthquake resilience. Located 25 km from the central business district, away from city-centre grid collapse and road blockages.
            </p>
          </div>

          {/* 2. Cooling */}
          <div className="bg-white rounded-3xl p-6 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-blue-50 text-[#243F87] flex items-center justify-center">
              <Wind className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 font-['Montserrat',sans-serif]">
              Precision Cooling
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Cold-aisle containment and precision climate control maintaining server intake air at 21.5°C ± 1°C. On a normal day, two of our six 104 kW CRAC units carry the full thermal load; the other four stand by in active redundancy.
            </p>
          </div>

          {/* 3. Security */}
          <div className="bg-white rounded-3xl p-6 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-slate-100 text-slate-800 flex items-center justify-center">
              <Lock className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 font-['Montserrat',sans-serif]">
              Multi-Layer Security
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Biometric iris/fingerprint access, air-locked mantrap entrances, 24/7 on-site certified armed security personnel, 360° CCTV monitoring, and VESDA very-early-warning laser air sampling smoke detection. Every single physical visit is logged.
            </p>
          </div>

          {/* 4. Connectivity */}
          <div className="bg-white rounded-3xl p-6 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-800 flex items-center justify-center">
              <Network className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 font-['Montserrat',sans-serif]">
              Carrier-Neutral Connectivity
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              A 100% carrier-neutral Meet-Me Room connected via dual diverse underground fiber duct entries. Host 12+ on-site carriers with direct internet-exchange peering and subsea cable landing route access.
            </p>
          </div>

          {/* 5. Water */}
          <div className="bg-white rounded-3xl p-6 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-cyan-50 text-cyan-800 flex items-center justify-center">
              <Droplet className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 font-['Montserrat',sans-serif]">
              Self-Sustaining Water Plant
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              On-site deep borehole groundwater treated through industrial reverse osmosis. Closed-loop cooling operates with 0L reliance on municipal water pipe disruptions.
            </p>
          </div>

          {/* 6. Room to grow */}
          <div className="bg-white rounded-3xl p-6 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-amber-50 text-amber-800 flex items-center justify-center">
              <Maximize2 className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 font-['Montserrat',sans-serif]">
              Room to Grow
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Phase 1 encompasses 1,950 m² across Modules 1 and 2. Phase 2 reserves an additional 1,450 m² for Modules 3 and 4. Module 1 currently holds 170 racks, with master site capacity engineered for 680 racks.
            </p>
          </div>
        </div>

        {/* Specs Table (For Engineers on the Buying Committee) */}
        <div id="specs" className="pt-8">
          <div className="mb-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1 font-['Montserrat',sans-serif]">
              Facility Specifications Table
            </h2>
          </div>

          <div className="bg-white rounded-3xl overflow-hidden">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="bg-slate-900 text-white font-['Source_Sans_3',sans-serif] text-xs uppercase tracking-wider">
                  <th className="py-3.5 px-6 font-semibold w-1/3">Item</th>
                  <th className="py-3.5 px-6 font-semibold w-2/3">Engineering Detail</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-['Source_Sans_3',sans-serif]">
                {FACILITY_SPECS.map((spec, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50/70'}>
                    <td className="py-3.5 px-6 font-semibold text-slate-900 font-sans">
                      {spec.item}
                    </td>
                    <td className="py-3.5 px-6 text-slate-700">
                      {spec.detail}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
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
