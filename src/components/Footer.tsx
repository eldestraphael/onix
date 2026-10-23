import React from 'react';
import { OnixLogo } from './OnixLogo';
import { PageRoute } from '../utils/routes';
import { Shield, Phone, Mail, MessageCircle, MapPin, ExternalLink, Award } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageRoute, hash?: string) => void;
  onOpenCookieSettings?: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenCookieSettings,
}) => {
  return (
    <footer className="bg-[#151515] text-slate-300 border-t border-slate-800">
      {/* Certification Badges Row */}
      <div className="border-b border-slate-800 bg-[#1A1A1A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Independently Audited & Certified Standards
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
              <button
                onClick={() => onNavigate('certification')}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-black/40 hover:bg-black/60 border border-slate-700/60 text-xs text-white transition-colors group"
                title="View Uptime Institute Tier IV Certificate"
              >
                <Award className="w-3.5 h-3.5 text-[#B12D24] group-hover:scale-110 transition-transform" />
                <span className="font-semibold">Tier IV</span>
                <span className="text-slate-400 font-normal">Uptime Institute</span>
              </button>

              <button
                onClick={() => onNavigate('certification')}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-black/40 hover:bg-black/60 border border-slate-700/60 text-xs text-white transition-colors group"
                title="View ISO 27001 Certificate"
              >
                <Shield className="w-3.5 h-3.5 text-blue-400 group-hover:scale-110 transition-transform" />
                <span className="font-semibold">ISO/IEC 27001</span>
                <span className="text-slate-400 font-normal">BSI Group</span>
              </button>

              <button
                onClick={() => onNavigate('certification')}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-black/40 hover:bg-black/60 border border-slate-700/60 text-xs text-white transition-colors group"
                title="View ISO 9001 Certificate"
              >
                <Award className="w-3.5 h-3.5 text-emerald-400 group-hover:scale-110 transition-transform" />
                <span className="font-semibold">ISO 9001</span>
                <span className="text-slate-400 font-normal">Quality Ops</span>
              </button>

              <button
                onClick={() => onNavigate('certification')}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-black/40 hover:bg-black/60 border border-slate-700/60 text-xs text-white transition-colors group"
                title="View PCI-DSS Attestation"
              >
                <Shield className="w-3.5 h-3.5 text-amber-400 group-hover:scale-110 transition-transform" />
                <span className="font-semibold">PCI-DSS v4.0</span>
                <span className="text-slate-400 font-normal">Level 1 QSA</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Col 1: Brand & Ownership */}
          <div className="lg:col-span-1 space-y-4">
            <OnixLogo variant="white" className="h-auto w-auto" imgClassName="h-10 sm:h-11 w-auto" withTagline={true} />
            <p className="text-xs text-slate-400 leading-relaxed pt-2">
              West Africa&apos;s first Uptime Institute–certified Tier IV data centre in Accra, Ghana, and colocation at the 2Africa cable landing in Dakar, Senegal.
            </p>
            <div className="pt-2 text-xs font-semibold text-white/90">
              Ghanaian and African owned and operated.
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-3">
              <a
                href="https://www.linkedin.com/company/onix-data-centre/"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center text-slate-300 hover:text-white transition-colors"
                aria-label="Onix Data Centre on LinkedIn"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.53 1.53 0 1 0-.01-3.05 1.53 1.53 0 0 0 .01 3.05m1.37 9.74v-8.37H5.09v8.37h2.74z" />
                </svg>
              </a>
              <a
                href="https://twitter.com/onixdatacentres"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center text-slate-300 hover:text-white transition-colors"
                aria-label="Onix Data Centre on X"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2: Who We Serve */}
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Who We Serve
            </div>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('banks-fintech')}
                  className="hover:text-white transition-colors text-left"
                >
                  Banks & fintech
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('networks-content')}
                  className="hover:text-white transition-colors text-left"
                >
                  Networks & content
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('enterprise')}
                  className="hover:text-white transition-colors text-left"
                >
                  Enterprise & public sector
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('moving-to-onix')}
                  className="text-[#dd625a] hover:text-white font-medium transition-colors text-left"
                >
                  How moving works →
                </button>
              </li>
              <li className="pt-2">
                <button
                  onClick={() => onNavigate('fr-senegal')}
                  className="hover:text-white transition-colors text-left flex items-center gap-1.5"
                >
                  <span>🇸🇳</span>
                  <span>Dakar 2Africa (FR)</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Solutions & Facility */}
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Solutions & Facility
            </div>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('solutions', 'colocation')}
                  className="hover:text-white transition-colors text-left"
                >
                  Colocation (Racks, Pods, Cages)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('solutions', 'interconnection')}
                  className="hover:text-white transition-colors text-left"
                >
                  Interconnection & MMR
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('solutions', 'pricing')}
                  className="text-amber-400 hover:text-white transition-colors text-left font-medium"
                >
                  Indicative budget estimator
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('the-facility', 'power')}
                  className="hover:text-white transition-colors text-left"
                >
                  Four-layer power topology
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('the-facility', 'specs')}
                  className="hover:text-white transition-colors text-left"
                >
                  Facility technical specs table
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Company & Knowledge */}
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Company & Proof
            </div>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-white transition-colors text-left"
                >
                  About Onix & Leadership
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('certification')}
                  className="hover:text-white transition-colors text-left"
                >
                  Certification & Audits
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('sustainability')}
                  className="hover:text-white transition-colors text-left"
                >
                  Sustainability (Solar & Water)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('insights')}
                  className="hover:text-white transition-colors text-left"
                >
                  Outage Diary & Telemetry
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('board-pack')}
                  className="hover:text-white transition-colors text-left"
                >
                  Downloadable board pack
                </button>
              </li>
            </ul>
          </div>

          {/* Col 5: Direct Contact & Facilities */}
          <div className="space-y-3 text-xs">
            <div className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Direct Contact
            </div>
            <div>
              <div className="text-slate-400 font-medium">Accra, Ghana</div>
              <a
                href="tel:+233500865266"
                className="text-white hover:text-[#e4817a] font-['Source_Sans_3',sans-serif] text-sm tabular-nums transition-colors block mt-0.5"
              >
                +233 50 086 5266
              </a>
            </div>

            <div>
              <div className="text-slate-400 font-medium">Dakar, Senegal</div>
              <a
                href="tel:+221776684110"
                className="text-white hover:text-[#e4817a] font-['Source_Sans_3',sans-serif] text-sm tabular-nums transition-colors block mt-0.5"
              >
                +221 77 668 41 10
              </a>
            </div>

            <div>
              <a
                href="mailto:info@onixdatacentres.com"
                className="text-slate-300 hover:text-white transition-colors"
              >
                info@onixdatacentres.com
              </a>
            </div>

            <div className="pt-2">
              <a
                href="https://wa.me/233500865266"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#25D366]/20 hover:bg-[#25D366]/30 text-[#25D366] rounded-md border border-[#25D366]/30 transition-colors font-medium"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp Accra Team</span>
              </a>
            </div>

            <div className="pt-2 border-t border-slate-800 text-[11px] text-slate-400 leading-relaxed">
              <div className="font-semibold text-slate-300">Facility Location:</div>
              Amrahia-Katamanso, towards Dodowa, Accra.
              <div className="font-semibold text-slate-300 mt-1">Head Office:</div>
              Shalom Villas, 3d, Onyasia Crescent, Accra.
            </div>
          </div>
        </div>

        {/* Bottom Bar: Legal & Privacy */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} Onix Data Centre Ltd. All rights reserved.
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs">
            <span className="text-slate-500">Ghana Data Protection Act (Act 843)</span>
            <span aria-hidden="true" className="text-slate-700">·</span>
            <span className="text-slate-500">Senegal Law No. 2008-12</span>
            <span aria-hidden="true" className="text-slate-700">·</span>
            <button
              onClick={onOpenCookieSettings}
              className="text-slate-400 hover:text-white transition-colors underline underline-offset-2"
            >
              Cookie preferences
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
