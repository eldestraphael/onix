import React, { useState, useEffect, useRef } from 'react';
import { Sun, Zap, Fuel, BatteryCharging, ArrowRight, ShieldCheck, Activity } from 'lucide-react';
import { animate, spring, stagger } from 'animejs';

interface PowerStoryDiagramProps {
  onOpenOutageDiary: () => void;
}

type SimulationState = 'daytime' | 'grid-cut' | 'generator-running';

export const PowerStoryDiagram: React.FC<PowerStoryDiagramProps> = ({
  onOpenOutageDiary,
}) => {
  const [activeScenario, setActiveScenario] = useState<SimulationState>('daytime');
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const boxes = containerRef.current.querySelectorAll('.square');
      if (boxes.length > 0) {
        animate(boxes, {
          y: [24, 0],
          opacity: [0.85, 1],
          ease: spring({
            bounce: 0.65,
            duration: 400,
          }),
          delay: stagger(40),
        });
      }
    }
  }, [activeScenario]);

  return (
    <div ref={containerRef} className="bg-white rounded-[32px] p-6 sm:p-8 lg:p-10">
      {/* Header with tabs on the right aligned to the heading */}
      <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 pb-2">
        <div className="max-w-2xl">
          <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 font-['Montserrat',sans-serif] leading-tight">
            Four layers between a power cut and your servers
          </h3>
          <p className="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed">
            Solar by day. The grid by night. Three 456 kW generators ready to take over. UPS bridging every second in between. When the grid fails, and in Accra it does, the handover happens automatically.
          </p>
        </div>

        {/* Interactive Scenario Selector (No emojis, no outlines, no shadows) */}
        <div className="flex flex-wrap items-center gap-1.5 bg-slate-100 p-1.5 rounded-full shrink-0 lg:mt-1">
          <button
            onClick={() => setActiveScenario('daytime')}
            className={`px-4 py-2 text-xs font-semibold rounded-full transition-colors flex items-center gap-2 ${
              activeScenario === 'daytime'
                ? 'bg-slate-900 text-white'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Sun className="w-3.5 h-3.5 text-amber-400" />
            <span>Solar Daytime Mode</span>
          </button>

          <button
            onClick={() => setActiveScenario('grid-cut')}
            className={`px-4 py-2 text-xs font-semibold rounded-full transition-colors flex items-center gap-2 ${
              activeScenario === 'grid-cut'
                ? 'bg-[#B12D24] text-white'
                : 'text-slate-600 hover:text-[#B12D24]'
            }`}
          >
            <Zap className="w-3.5 h-3.5 text-rose-300" />
            <span>Grid Cut (0ms UPS Handover)</span>
          </button>

          <button
            onClick={() => setActiveScenario('generator-running')}
            className={`px-4 py-2 text-xs font-semibold rounded-full transition-colors flex items-center gap-2 ${
              activeScenario === 'generator-running'
                ? 'bg-[#1E293B] text-white'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Fuel className="w-3.5 h-3.5 text-emerald-400" />
            <span>3× Generator Island</span>
          </button>
        </div>
      </div>

      {/* Telemetry Status Strip (Flat tonal surface, no outlines, no shadows) */}
      <div className="my-6 bg-slate-50 rounded-2xl p-4 sm:p-5 flex flex-col md:flex-row md:items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2.5">
          <span
            className={`w-2.5 h-2.5 rounded-full shrink-0 ${
              activeScenario === 'daytime'
                ? 'bg-amber-500 animate-pulse'
                : activeScenario === 'grid-cut'
                ? 'bg-red-500 animate-ping'
                : 'bg-emerald-500'
            }`}
          />
          <span className="font-['Source_Sans_3',sans-serif] font-bold uppercase tracking-wide text-slate-800">
            {activeScenario === 'daytime' && 'Active State: Solar Peak Generation & Dual Utility Baseload'}
            {activeScenario === 'grid-cut' && 'Active State: Utility Grid Loss Detected — Static UPS Engaged'}
            {activeScenario === 'generator-running' && 'Active State: 100% Autonomous Synchronized Diesel Island'}
          </span>
        </div>

        <div className="text-slate-500 text-xs font-medium">
          {activeScenario === 'daytime' && '410 kW direct solar load · 0% generator fuel used'}
          {activeScenario === 'grid-cut' && '0.00 ms transfer delay · zero sub-cycle interruption'}
          {activeScenario === 'generator-running' && '1,368 kW synchronized capacity · 72h on-site fuel'}
        </div>
      </div>

      {/* 4-Layer Architecture (Pure tonal contrast, no outlines/borders, no shadows) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        
        {/* Layer 1: Solar Farm */}
        <div
          className={`square layer-box p-6 rounded-3xl transition-all flex flex-col justify-between ${
            activeScenario === 'daytime'
              ? 'bg-amber-100/80 text-slate-900'
              : 'bg-slate-100/70 text-slate-700'
          }`}
        >
          <div>
            <div className="flex items-center justify-between">
              <span className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${
                activeScenario === 'daytime' ? 'bg-amber-200/80 text-amber-900' : 'bg-slate-200/60 text-slate-600'
              }`}>
                Layer 1
              </span>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                activeScenario === 'daytime' ? 'bg-amber-200/80 text-amber-900' : 'bg-slate-200/60 text-slate-500'
              }`}>
                <Sun className="w-4 h-4" />
              </div>
            </div>

            <h4 className="text-base font-bold text-slate-900 font-['Montserrat',sans-serif] mt-4">
              On-site Solar Farm
            </h4>
            <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
              2,200 panels, 640 kW peak capacity. Carries cooling chillers and operational load in daytime sun.
            </p>

            {/* Flat Load Indicator Bar */}
            <div className="mt-4">
              <div className="w-full bg-black/5 rounded-full h-1.5 overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all duration-500 ${
                    activeScenario === 'daytime' ? 'w-[65%] bg-amber-600' : 'w-[5%] bg-slate-300'
                  }`}
                />
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-black/[0.06] flex items-center justify-between text-xs font-['Source_Sans_3',sans-serif]">
            <span className="text-slate-500">Output</span>
            <span className={`font-bold ${activeScenario === 'daytime' ? 'text-amber-900' : 'text-slate-600'}`}>
              {activeScenario === 'daytime' ? '410 kW Active' : 'Standby / Low lux'}
            </span>
          </div>
        </div>

        {/* Layer 2: Dual Grid Feeders */}
        <div
          className={`square layer-box p-6 rounded-3xl transition-all flex flex-col justify-between ${
            activeScenario === 'grid-cut'
              ? 'bg-red-100/80 text-slate-900'
              : 'bg-slate-100/70 text-slate-700'
          }`}
        >
          <div>
            <div className="flex items-center justify-between">
              <span className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${
                activeScenario === 'grid-cut' ? 'bg-red-200/80 text-red-900' : 'bg-slate-200/60 text-slate-600'
              }`}>
                Layer 2
              </span>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                activeScenario === 'grid-cut' ? 'bg-red-200/80 text-red-900' : 'bg-slate-200/60 text-slate-500'
              }`}>
                <Zap className="w-4 h-4" />
              </div>
            </div>

            <h4 className="text-base font-bold text-slate-900 font-['Montserrat',sans-serif] mt-4">
              National Grid Feeders
            </h4>
            <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
              Dual dedicated 33 kV utility lines from separate ECG sub-stations with auto-isolation switches.
            </p>

            {/* Flat Load Indicator Bar */}
            <div className="mt-4">
              <div className="w-full bg-black/5 rounded-full h-1.5 overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all duration-500 ${
                    activeScenario === 'grid-cut' ? 'w-0 bg-red-600' : 'w-[85%] bg-blue-600'
                  }`}
                />
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-black/[0.06] flex items-center justify-between text-xs font-['Source_Sans_3',sans-serif]">
            <span className="text-slate-500">Feeder</span>
            <span className={`font-bold ${activeScenario === 'grid-cut' ? 'text-red-700' : 'text-emerald-700'}`}>
              {activeScenario === 'grid-cut' ? 'GRID CUT (Isolated)' : 'Active / Dual Sync'}
            </span>
          </div>
        </div>

        {/* Layer 3: Synchronized Generators */}
        <div
          className={`square layer-box p-6 rounded-3xl transition-all flex flex-col justify-between ${
            activeScenario === 'generator-running'
              ? 'bg-emerald-100/80 text-slate-900'
              : 'bg-slate-100/70 text-slate-700'
          }`}
        >
          <div>
            <div className="flex items-center justify-between">
              <span className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${
                activeScenario === 'generator-running' ? 'bg-emerald-200/80 text-emerald-900' : 'bg-slate-200/60 text-slate-600'
              }`}>
                Layer 3
              </span>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                activeScenario === 'generator-running' ? 'bg-emerald-200/80 text-emerald-900' : 'bg-slate-200/60 text-slate-500'
              }`}>
                <Fuel className="w-4 h-4" />
              </div>
            </div>

            <h4 className="text-base font-bold text-slate-900 font-['Montserrat',sans-serif] mt-4">
              3 × 456 kW Generators
            </h4>
            <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
              Heavy-duty synchronized diesel plant with 72-hour on-site fuel reserve and bulk replenishment.
            </p>

            {/* Flat Load Indicator Bar */}
            <div className="mt-4">
              <div className="w-full bg-black/5 rounded-full h-1.5 overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all duration-500 ${
                    activeScenario === 'generator-running' ? 'w-full bg-emerald-600' : 'w-[10%] bg-slate-300'
                  }`}
                />
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-black/[0.06] flex items-center justify-between text-xs font-['Source_Sans_3',sans-serif]">
            <span className="text-slate-500">Generator</span>
            <span className={`font-bold ${activeScenario === 'generator-running' ? 'text-emerald-900' : 'text-slate-600'}`}>
              {activeScenario === 'generator-running' ? 'Supplying 1,368 kW' : 'Warm Standby'}
            </span>
          </div>
        </div>

        {/* Layer 4: Static UPS Arrays */}
        <div
          className={`square layer-box p-6 rounded-3xl transition-all flex flex-col justify-between ${
            activeScenario === 'grid-cut'
              ? 'bg-rose-100/90 text-slate-900'
              : 'bg-slate-100/70 text-slate-700'
          }`}
        >
          <div>
            <div className="flex items-center justify-between">
              <span className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${
                activeScenario === 'grid-cut' ? 'bg-rose-200/80 text-rose-900' : 'bg-slate-200/60 text-slate-600'
              }`}>
                Layer 4
              </span>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                activeScenario === 'grid-cut' ? 'bg-rose-200/80 text-rose-900' : 'bg-slate-200/60 text-slate-500'
              }`}>
                <BatteryCharging className="w-4 h-4" />
              </div>
            </div>

            <h4 className="text-base font-bold text-slate-900 font-['Montserrat',sans-serif] mt-4">
              Static 2N+1 UPS Array
            </h4>
            <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
              Zero millisecond transfer delay. Bridges every millisecond while generators start and synchronize.
            </p>

            {/* Flat Load Indicator Bar */}
            <div className="mt-4">
              <div className="w-full bg-black/5 rounded-full h-1.5 overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all duration-500 ${
                    activeScenario === 'grid-cut' ? 'w-full bg-[#B12D24]' : 'w-[100%] bg-slate-300'
                  }`}
                />
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-black/[0.06] flex items-center justify-between text-xs font-['Source_Sans_3',sans-serif]">
            <span className="text-slate-500">Transfer Time</span>
            <span className="font-bold text-[#B12D24]">
              0.00 ms (Instant)
            </span>
          </div>
        </div>

      </div>

      {/* Outage Diary CTA (Flat, no border, no shadow) */}
      <div className="pt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-sm">
        <p className="text-slate-600 text-xs sm:text-sm">
          Want to see real operational evidence rather than sales talk?
        </p>
        <button
          onClick={onOpenOutageDiary}
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#B12D24] hover:text-[#96221A] transition-colors group"
        >
          <span>Read: what happened inside Onix during the last grid failure</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
        </button>
      </div>
    </div>
  );
};
