import React from 'react';
import { X, ShieldCheck, Activity, AlertTriangle, Clock, Zap, CheckCircle2 } from 'lucide-react';
import { OUTAGE_DIARY } from '../data/siteContent';

interface OutageDiaryModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenTourModal: () => void;
}

export const OutageDiaryModal: React.FC<OutageDiaryModalProps> = ({
  isOpen,
  onClose,
  onOpenTourModal,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-150">
      <div className="relative bg-white rounded-2xl max-w-3xl w-full border border-slate-200 overflow-hidden my-8 max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="bg-[#151515] text-white px-6 py-5 flex items-center justify-between shrink-0">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#B12D24]">
              Operational Transparency
            </span>
            <h2 className="text-xl font-bold font-['Montserrat',sans-serif]">
              The Accra Outage Diary: Real Incident Telemetry
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close outage diary"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Diary Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-xs text-slate-700 leading-relaxed">
            <span className="font-bold text-slate-900 block mb-1">
              Why we publish our outage records openly:
            </span>
            Anyone can promise 99.995% uptime in a sales deck. In Accra, national utility power fluctuations happen frequently. The true test of a Tier IV data centre is whether client servers ever experience a micro-drop when the grid fails. Below is the operational log of recent grid failures and the automated Onix handover response.
          </div>

          {/* Timeline of events */}
          <div className="space-y-6 relative before:absolute before:inset-0 before:left-4 before:w-0.5 before:bg-slate-200">
            {OUTAGE_DIARY.map((event, index) => (
              <div key={index} className="relative pl-10">
                {/* Marker */}
                <div className="absolute left-2.5 -translate-x-1/2 top-1 w-4 h-4 rounded-full bg-[#B12D24] ring-4 ring-white flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-white" />
                </div>

                <div className="bg-white border border-slate-200 rounded-xl p-5 space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-sm text-slate-900 font-['Montserrat',sans-serif]">
                        {event.date}
                      </span>
                      <span className="text-xs font-['Source_Sans_3',sans-serif] text-slate-500">
                        {event.time}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-semibold text-slate-600 bg-slate-100 px-2.5 py-0.5 rounded">
                        Duration: {event.durationHours}
                      </span>
                      <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                        0 ms Client Downtime
                      </span>
                    </div>
                  </div>

                  <div>
                    <div className="text-xs font-semibold text-slate-700 flex items-center gap-1.5">
                      <AlertTriangle className="w-3.5 h-3.5 text-amber-500" />
                      <span>Grid Condition:</span>
                    </div>
                    <p className="text-xs text-slate-600 mt-0.5">
                      {event.cause} — {event.nationalGridStatus}
                    </p>
                  </div>

                  <div className="bg-slate-50 p-3 rounded-lg border border-slate-100 text-xs space-y-1.5">
                    <div className="font-semibold text-slate-800 flex items-center gap-1.5">
                      <Zap className="w-3.5 h-3.5 text-[#B12D24]" />
                      <span>Onix Automated Facility Reaction:</span>
                    </div>
                    <p className="text-slate-600 leading-relaxed">
                      {event.onixFacilityReaction}
                    </p>
                  </div>

                  <div className="text-xs text-emerald-700 font-medium">
                    Result: {event.clientImpact}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-slate-500">
              Want to see the physical electrical distribution boards and control panels in person?
            </p>
            <button
              onClick={() => {
                onClose();
                onOpenTourModal();
              }}
              className="px-5 py-2.5 bg-[#B12D24] hover:bg-[#96221A] text-white rounded-lg text-xs font-semibold whitespace-nowrap transition-colors"
            >
              Book an On-Site Tour →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
