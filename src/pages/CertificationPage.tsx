import React from 'react';
import { PageRoute } from '../utils/routes';
import { CERTIFICATES } from '../data/siteContent';
import { PageEndBlock } from '../components/PageEndBlock';
import { Award, ShieldCheck, Download, ExternalLink, Calendar, CheckCircle2 } from 'lucide-react';

interface CertificationPageProps {
  onNavigate: (page: PageRoute) => void;
  onOpenTourModal: () => void;
  onOpenBoardPackModal: () => void;
}

export const CertificationPage: React.FC<CertificationPageProps> = ({
  onNavigate,
  onOpenTourModal,
  onOpenBoardPackModal,
}) => {
  const downloadCert = (certName: string) => {
    const text = `ONIX DATA CENTRE CERTIFICATE VERIFICATION
==========================================
Standard: ${certName}
Facility: Amrahia-Katamanso, Accra, Ghana
Status: Verified Active
Audited by Independent Accredited Registrar.
Full audit reports available during scheduled audit visits.
`;
    const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${certName.toLowerCase().replace(/[^a-z0-9]/g, '_')}_verification.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-0">
      {/* Hero */}
      <section className="bg-white pt-12 pb-16 lg:pt-16 lg:pb-20 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-5">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#B12D24] uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-[#B12D24]" />
              <span>Independent Accreditation</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-['Montserrat',sans-serif] tracking-tight text-balance">
              Certified by others, not just by us
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Every certificate below was awarded by an independent accredited body. Download any of them, or ask to see the originals on your tour.
            </p>

            <div className="pt-2">
              <a
                href="https://uptimeinstitute.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#B12D24] hover:text-[#96221A] transition-colors"
              >
                <span>West Africa&apos;s first Uptime Institute–certified Tier IV data centre. Check our listing on the Uptime Institute website</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Certificates Grid */}
      <section className="py-16 lg:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {CERTIFICATES.map((cert) => (
              <div
                key={cert.id}
                className="bg-white rounded-3xl p-6 sm:p-8 flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-red-50 text-[#B12D24] flex items-center justify-center font-bold">
                        <Award className="w-5 h-5" />
                      </div>
                      <div>
                        <h2 className="text-lg font-bold text-slate-900 font-['Montserrat',sans-serif]">
                          {cert.name}
                        </h2>
                        <span className="text-xs text-slate-500 font-medium">
                          {cert.type}
                        </span>
                      </div>
                    </div>
                    <span className="px-2.5 py-1 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-full text-xs font-semibold">
                      {cert.status}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    {cert.whatItMeans}
                  </p>

                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 space-y-2 text-xs font-['Source_Sans_3',sans-serif]">
                    <div className="flex justify-between">
                      <span className="text-slate-500">Issuing Body:</span>
                      <span className="text-slate-900 font-medium">{cert.issuer}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Certificate No:</span>
                      <span className="text-slate-900 font-medium">{cert.certificateNo}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Validity:</span>
                      <span className="text-slate-900 font-medium">{cert.validUntil}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => downloadCert(cert.name)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#B12D24] hover:text-[#96221A] transition-colors"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download verification PDF</span>
                  </button>

                  <button
                    onClick={onOpenTourModal}
                    className="text-xs text-slate-500 hover:text-slate-800 transition-colors"
                  >
                    Inspect original on site →
                  </button>
                </div>
              </div>
            ))}
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
