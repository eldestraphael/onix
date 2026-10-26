import React, { useState } from 'react';
import { calculateIndicativeBudget } from '../utils/calculator';
import { ArrowRight, Zap, Server, Network, Headphones, ShieldAlert } from 'lucide-react';

interface CostEstimatorProps {
  onOpenTourModal: () => void;
  onOpenContact: (notes?: string) => void;
}

export const CostEstimator: React.FC<CostEstimatorProps> = ({
  onOpenTourModal,
  onOpenContact,
}) => {
  const [racks, setRacks] = useState<number>(1);
  const [powerPerRack, setPowerPerRack] = useState<3 | 5>(3);
  const [crossConnects, setCrossConnects] = useState<number>(2);
  const [remoteHands, setRemoteHands] = useState<'standard' | 'premium'>('standard');
  const [contractMonths, setContractMonths] = useState<12 | 24 | 36>(12);

  const budget = calculateIndicativeBudget({
    racks,
    powerPerRackKw: powerPerRack,
    crossConnects,
    remoteHandsTier: remoteHands,
    contractMonths,
  });

  const handleRequestProposal = () => {
    const summary = `Indicative configuration: ${racks} rack(s) at ${powerPerRack} kW each, ${crossConnects} cross-connects, ${remoteHands} remote-hands, ${contractMonths}-month contract term.`;
    onOpenContact(summary);
  };

  return (
    <div id="pricing" className="bg-[#151515] text-white rounded-3xl p-6 sm:p-8 lg:p-10">
      <div className="max-w-3xl mb-8">
        <h3 className="text-2xl sm:text-3xl font-bold font-['Montserrat',sans-serif] text-white">
          What will it cost?
        </h3>
        <p className="text-slate-300 text-sm sm:text-base mt-2 leading-relaxed">
          Every client&apos;s power and space needs are different, so we price each one. Tell us roughly what you need and you&apos;ll get an indicative budget on the first call, then a full written proposal within 2 working days, with every recurring charge on it. And if Tier IV is more than you need, we&apos;ll say so.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Controls Column */}
        <div className="lg:col-span-7 space-y-6">
          {/* Space / Racks */}
          <div className="bg-white/5 p-6 rounded-2xl">
            <div className="flex items-center justify-between mb-3">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
                <Server className="w-4 h-4 text-[#B12D24]" />
                <span>Space Allocation:</span>
              </label>
              <span className="font-['Source_Sans_3',sans-serif] text-sm font-semibold text-white">
                {racks} {racks === 1 ? 'Rack' : 'Racks'} ({budget.rackTierDescription})
              </span>
            </div>

            <input
              type="range"
              min="1"
              max="60"
              step="1"
              value={racks}
              onChange={(e) => setRacks(Number(e.target.value))}
              className="w-full accent-[#B12D24] h-2 bg-slate-700 rounded-lg cursor-pointer"
            />
            <div className="flex justify-between text-[11px] text-slate-400 mt-2">
              <span>1 Rack (Start)</span>
              <span>10 Racks</span>
              <span>30 Racks (Pod)</span>
              <span>50+ Racks (Cage)</span>
            </div>
          </div>

          {/* Power Density */}
          <div className="bg-white/5 p-6 rounded-2xl">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center gap-1.5 mb-3">
              <Zap className="w-4 h-4 text-amber-400" />
              <span>Power Per Rack Density:</span>
            </label>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setPowerPerRack(3)}
                className={`p-4 rounded-2xl text-left transition-all ${
                  powerPerRack === 3
                    ? 'bg-[#B12D24] text-white'
                    : 'bg-white/5 text-slate-300 hover:bg-white/10'
                }`}
              >
                <div className="text-sm font-bold text-white">3 kW Standard</div>
                <div className="text-xs text-slate-300 mt-0.5">Most enterprise and web servers</div>
              </button>
              <button
                type="button"
                onClick={() => setPowerPerRack(5)}
                className={`p-4 rounded-2xl text-left transition-all ${
                  powerPerRack === 5
                    ? 'bg-[#B12D24] text-white'
                    : 'bg-white/5 text-slate-300 hover:bg-white/10'
                }`}
              >
                <div className="text-sm font-bold text-white">5 kW High Density</div>
                <div className="text-xs text-slate-300 mt-0.5">Compute-heavy clusters & databases</div>
              </button>
            </div>
          </div>

          {/* Cross Connects & Remote Hands */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white/5 p-5 rounded-2xl">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center gap-1.5 mb-2">
                <Network className="w-4 h-4 text-blue-400" />
                <span>Cross-Connects:</span>
              </label>
              <div className="flex items-center gap-2">
                {[1, 2, 4, 8].map((num) => (
                  <button
                    key={num}
                    type="button"
                    onClick={() => setCrossConnects(num)}
                    className={`flex-1 py-2 text-xs font-semibold rounded-xl transition-all ${
                      crossConnects === num
                        ? 'bg-[#B12D24] text-white'
                        : 'bg-white/5 text-slate-300 hover:bg-white/10'
                    }`}
                  >
                    {num}
                  </button>
                ))}
              </div>
              <div className="text-[11px] text-slate-400 mt-2">
                Carriers on site in Accra Meet-Me Room
              </div>
            </div>

            <div className="bg-white/5 p-5 rounded-2xl">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center gap-1.5 mb-2">
                <Headphones className="w-4 h-4 text-emerald-400" />
                <span>Remote Hands Tier:</span>
              </label>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setRemoteHands('standard')}
                  className={`flex-1 py-2 text-xs font-semibold rounded-xl transition-all ${
                    remoteHands === 'standard'
                      ? 'bg-[#B12D24] text-white'
                      : 'bg-white/5 text-slate-300 hover:bg-white/10'
                  }`}
                >
                  Standard 24/7
                </button>
                <button
                  type="button"
                  onClick={() => setRemoteHands('premium')}
                  className={`flex-1 py-2 text-xs font-semibold rounded-xl transition-all ${
                    remoteHands === 'premium'
                      ? 'bg-[#B12D24] text-white'
                      : 'bg-white/5 text-slate-300 hover:bg-white/10'
                  }`}
                >
                  Priority SLA
                </button>
              </div>
              <div className="text-[11px] text-slate-400 mt-2">
                Typical response: &lt; 15 minutes on site
              </div>
            </div>
          </div>

          {/* Contract Duration */}
          <div className="flex items-center justify-between text-xs text-slate-300 px-1">
            <span>Contract Duration:</span>
            <div className="flex items-center gap-2">
              {[12, 24, 36].map((months) => (
                <button
                  key={months}
                  type="button"
                  onClick={() => setContractMonths(months as any)}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
                    contractMonths === months
                      ? 'bg-white text-slate-900'
                      : 'bg-white/5 text-slate-400 hover:text-white'
                  }`}
                >
                  {months} mo {months === 36 ? '(-15%)' : months === 24 ? '(-8%)' : ''}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Indicative Breakdown Output Column */}
        <div className="lg:col-span-5 bg-black/40 p-6 sm:p-8 rounded-3xl space-y-6">
          <div>
            <div className="text-xs uppercase font-semibold text-slate-400 tracking-wider">
              Indicative Budget Range
            </div>
            <div className="text-3xl sm:text-4xl font-extrabold text-white font-['Source_Sans_3',sans-serif] mt-1 tabular-nums">
              ${budget.estimatedMonthlyLowUsd.toLocaleString()} – ${budget.estimatedMonthlyHighUsd.toLocaleString()}
              <span className="text-sm font-['Source_Sans_3',sans-serif] font-normal text-slate-400 block sm:inline sm:ml-1">
                / month USD
              </span>
            </div>
            <div className="text-xs text-slate-400 mt-1">
              Final written quotation guaranteed within 2 working days.
            </div>
          </div>

          <div className="space-y-3 pt-4 border-t border-white/10 text-xs text-slate-300 font-['Source_Sans_3',sans-serif]">
            <div className="flex justify-between">
              <span className="text-slate-400">Total Power Capacity:</span>
              <span className="font-semibold text-white">{budget.totalPowerKw} kW active</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Monthly Consumption:</span>
              <span className="font-semibold text-white">{budget.monthlyBasePowerKwh.toLocaleString()} kWh</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Solar Offset (Daytime):</span>
              <span className="font-semibold text-emerald-400">~{budget.solarContributionKwhPerMonth.toLocaleString()} kWh/mo</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Guaranteed SLA:</span>
              <span className="font-semibold text-[#dd625a]">99.995% Uptime</span>
            </div>
          </div>

          <div className="space-y-2.5 pt-2">
            <button
              onClick={handleRequestProposal}
              className="w-full py-3.5 bg-[#B12D24] hover:bg-black active:bg-neutral-900 text-white font-semibold rounded-full text-sm flex items-center justify-center gap-2 transition-all cursor-pointer"
            >
              <span>Get written quotation with this config</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={onOpenTourModal}
              className="w-full py-3 bg-white/5 hover:bg-white/10 text-slate-200 font-semibold rounded-full text-xs transition-colors"
            >
              Book facility tour before quoting
            </button>
          </div>

          <div className="flex items-center gap-2 text-[11px] text-slate-400 pt-1">
            <ShieldAlert className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <span>Honest scoping: If Tier IV exceeds your workload requirements, our engineering team will tell you so directly.</span>
          </div>
        </div>
      </div>
    </div>
  );
};
