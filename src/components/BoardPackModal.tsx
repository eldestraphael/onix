import React, { useState } from 'react';
import { X, FileText, Download, Check, ShieldCheck, Mail, Send, Award } from 'lucide-react';

interface BoardPackModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BoardPackModal: React.FC<BoardPackModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [downloadSuccess, setDownloadSuccess] = useState(false);
  const [isRequestingPrinted, setIsRequestingPrinted] = useState(false);
  const [printedAddress, setPrintedAddress] = useState('');
  const [printedSubmitted, setPrintedSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleDownload = () => {
    // Generate simulated PDF download
    setDownloadSuccess(true);
    const content = `ONIX DATA CENTRE - EXECUTIVE BOARD PACK
==================================================
Facility: Accra, Ghana (Tier IV Certified) & Dakar, Senegal (2Africa Landing)
Document: Board Decision & Risk Committee Briefing

SECTION 1: ONE-PAGE EXECUTIVE SUMMARY
- Tier IV Certification by Uptime Institute (Ghana's Only, 2019 to Present)
- 99.995% Uptime SLA Guaranteed in Contract
- 4 Independent Power Layers: 640kW Solar, Dual ECG 33kV Feeds, 3x456kW Generators, Static 2N+1 UPS
- Certified Carrier-Neutral Meet-Me Room with 12+ on-site carriers

SECTION 2: RISK & RESILIENCE ARCHITECTURE
- Raised 1.5m above ground level: complete immunity from Accra seasonal urban flooding
- Reverse Osmosis groundwater extraction: 0L reliance on municipal water cuts
- Dual A/B active power paths to every rack

SECTION 3: AUDITOR COMPLIANCE & REGULATORY CHECKLIST
- Bank of Ghana Cyber and Information Security Directive (CISD) physical compliance
- ISO/IEC 27001:2022 ISMS (Certificate IS 712894)
- ISO 9001:2015 Quality Management (Certificate FS 712893)
- PCI-DSS v4.0 Level 1 Physical Hosting Attestation

SECTION 4: SERVICE LEVEL AGREEMENT & PENALTY REBATES
- Availability: 99.995% annual uptime SLA
- Planned maintenance windows conducted under full 2N isolation with zero server disruption
- Remote hands standard response time: < 15 minutes 24/7/365

SECTION 5: SIX-STEP SEAMLESS MIGRATION PLAN
- Step 1: 30-min Technical Discovery
- Step 2: Site & Cage Walkthrough (or Live Video)
- Step 3: Fixed-price Transparent Proposal in 3 working days
- Step 4: Racks, Power & Cross-connects pre-wired before transit
- Step 5: Migration scheduled during your quiet hours with Onix engineers on site
- Step 6: 14-day post-migration review & dedicated ops contact

Direct Operations Contact: +233 50 086 5266 | info@onixdatacentres.com
Amrahia-Katamanso, towards Dodowa, Accra, Ghana
`;

    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Onix_Data_Centres_Executive_Board_Pack.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handlePrintRequest = (e: React.FormEvent) => {
    e.preventDefault();
    if (printedAddress.trim()) {
      setPrintedSubmitted(true);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-150">
      <div className="relative bg-white rounded-2xl max-w-2xl w-full border border-slate-200 overflow-hidden my-8">
        {/* Header */}
        <div className="bg-[#151515] text-white px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#B12D24] flex items-center justify-center text-white">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#B12D24]">
                Decision-Maker Toolkit
              </span>
              <h2 className="text-xl font-bold font-['Montserrat',sans-serif]">
                The Onix Executive Board Pack
              </h2>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-6">
          <div>
            <h3 className="text-lg font-bold text-slate-900 font-['Montserrat',sans-serif]">
              Making the case internally? We&apos;ve written the memo for you.
            </h3>
            <p className="text-sm text-slate-600 mt-2 leading-relaxed">
              The Onix board pack gives your risk committee, board and auditors everything they need in one structured document:
            </p>
          </div>

          {/* 5 Components Preview */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg flex items-start gap-2.5">
              <span className="w-5 h-5 rounded-full bg-slate-200 text-slate-800 font-bold flex items-center justify-center shrink-0">1</span>
              <div>
                <span className="font-semibold text-slate-900 block">One-Page Executive Summary</span>
                <span className="text-slate-500">Key facts, SLA guarantees, and certification summary for swift executive review.</span>
              </div>
            </div>

            <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg flex items-start gap-2.5">
              <span className="w-5 h-5 rounded-full bg-slate-200 text-slate-800 font-bold flex items-center justify-center shrink-0">2</span>
              <div>
                <span className="font-semibold text-slate-900 block">Risk & Resilience Architecture</span>
                <span className="text-slate-500">Detailed 4-layer power topology, 1.5m flood plinth and dual substation isolation.</span>
              </div>
            </div>

            <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg flex items-start gap-2.5">
              <span className="w-5 h-5 rounded-full bg-slate-200 text-slate-800 font-bold flex items-center justify-center shrink-0">3</span>
              <div>
                <span className="font-semibold text-slate-900 block">Current Verified Certificates</span>
                <span className="text-slate-500">Uptime Institute Tier IV, ISO 27001, ISO 9001 and PCI-DSS with active dates.</span>
              </div>
            </div>

            <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg flex items-start gap-2.5">
              <span className="w-5 h-5 rounded-full bg-slate-200 text-slate-800 font-bold flex items-center justify-center shrink-0">4</span>
              <div>
                <span className="font-semibold text-slate-900 block">SLA Summary & Credit Penalties</span>
                <span className="text-slate-500">Contractual 99.995% uptime guarantees, response times, and penalty terms.</span>
              </div>
            </div>

            <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg flex items-start gap-2.5 sm:col-span-2">
              <span className="w-5 h-5 rounded-full bg-slate-200 text-slate-800 font-bold flex items-center justify-center shrink-0">5</span>
              <div>
                <span className="font-semibold text-slate-900 block">Six-Step Migration Outline</span>
                <span className="text-slate-500">A board-ready timeline showing zero-downtime equipment transfer procedures.</span>
              </div>
            </div>
          </div>

          {/* Download Action */}
          <div className="pt-2 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <button
              onClick={handleDownload}
              className="w-full sm:w-auto px-6 py-3.5 bg-[#B12D24] hover:bg-[#96221A] active:bg-[#7e1c15] text-white font-semibold rounded-lg text-sm transition-all flex items-center justify-center gap-2"
            >
              {downloadSuccess ? (
                <>
                  <Check className="w-4 h-4 text-emerald-300" />
                  <span>Downloaded! Click to download again</span>
                </>
              ) : (
                <>
                  <Download className="w-4 h-4" />
                  <span>Download the board pack (PDF)</span>
                </>
              )}
            </button>

            {!isRequestingPrinted ? (
              <button
                onClick={() => setIsRequestingPrinted(true)}
                className="text-xs text-slate-600 hover:text-slate-900 underline underline-offset-2 transition-colors"
              >
                Prefer a printed copy? We&apos;ll courier one to your office →
              </button>
            ) : null}
          </div>

          {/* Printed Copy Request Drawer */}
          {isRequestingPrinted && (
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-3 animate-in fade-in duration-200">
              {printedSubmitted ? (
                <div className="text-xs text-emerald-800 flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span>Your request has been received. Our dispatch team will courier the printed pack within 48 hours.</span>
                </div>
              ) : (
                <form onSubmit={handlePrintRequest} className="space-y-3">
                  <div className="text-xs font-semibold text-slate-800">
                    Request a Printed Hardcover Board Dossier
                  </div>
                  <input
                    type="text"
                    required
                    placeholder="Company name, physical office address & contact person in Ghana / West Africa"
                    value={printedAddress}
                    onChange={(e) => setPrintedAddress(e.target.value)}
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B12D24]"
                  />
                  <div className="flex items-center gap-2">
                    <button
                      type="submit"
                      className="px-4 py-2 bg-slate-900 text-white rounded-lg text-xs font-semibold hover:bg-slate-800 transition-colors"
                    >
                      Request Printed Copy
                    </button>
                    <button
                      type="button"
                      onClick={() => setIsRequestingPrinted(false)}
                      className="px-3 py-2 text-slate-500 hover:text-slate-700 text-xs"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
