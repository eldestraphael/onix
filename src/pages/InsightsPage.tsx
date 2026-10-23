import React, { useState } from 'react';
import { PageRoute } from '../utils/routes';
import { INSIGHTS, OUTAGE_DIARY } from '../data/siteContent';
import { PageEndBlock } from '../components/PageEndBlock';
import { BookOpen, Activity, AlertCircle, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface InsightsPageProps {
  onNavigate: (page: PageRoute) => void;
  onOpenTourModal: () => void;
  onOpenBoardPackModal: () => void;
  onOpenOutageDiary: () => void;
}

export const InsightsPage: React.FC<InsightsPageProps> = ({
  onNavigate,
  onOpenTourModal,
  onOpenBoardPackModal,
  onOpenOutageDiary,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredArticles = selectedCategory === 'all'
    ? INSIGHTS
    : INSIGHTS.filter((a) => a.category.toLowerCase().includes(selectedCategory.toLowerCase()));

  return (
    <div className="space-y-0">
      {/* Hero */}
      <section className="bg-white pt-12 pb-16 lg:pt-16 lg:pb-20 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-5">
            <div className="inline-flex items-center text-xs font-semibold text-[#B12D24] uppercase tracking-wider">
              <span>Engineering & Regulatory Analysis</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-['Montserrat',sans-serif] tracking-tight text-balance">
              Board-ready explainers & operational telemetry
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              No generic thought leadership. We write detailed operational reports on Ghanaian power grid behavior, data sovereignty laws, and bank compliance architectures.
            </p>

            <div className="pt-2">
              <button
                onClick={onOpenOutageDiary}
                className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-xs font-semibold transition-colors"
              >
                <Activity className="w-4 h-4 text-[#B12D24]" />
                <span>Open the Outage Diary: Real Accra Grid Handover Records →</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Outage Diary Banner */}
      <section className="bg-slate-900 text-white py-10 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-red-500/20 text-[#dd625a] rounded text-xs font-['Source_Sans_3',sans-serif] font-semibold">
                FEATURED TELEMETRY LOG
              </div>
              <h2 className="text-xl sm:text-2xl font-bold font-['Montserrat',sans-serif]">
                The Accra Outage Diary: What happens inside Onix during a blackout
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                When utility lines drop in Greater Accra, our dual-feed transfer and static UPS engage with 0.00 ms interruption while 3 × 456 kW generators start and synchronize. Inspect the timestamps.
              </p>
            </div>

            <button
              onClick={onOpenOutageDiary}
              className="px-6 py-3 bg-[#B12D24] hover:bg-[#96221A] text-white text-xs sm:text-sm font-semibold rounded-lg shrink-0 transition-colors"
            >
              Inspect Outage Telemetry Log →
            </button>
          </div>
        </div>
      </section>

      {/* Articles Feed */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {filteredArticles.map((article) => (
              <article
                key={article.id}
                className="bg-white rounded-3xl p-6 sm:p-7 hover:border-slate-300 transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <span className="font-semibold text-[#B12D24]">{article.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{article.date}</span>
                    <span aria-hidden="true">·</span>
                    <span>{article.readTime}</span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 font-['Montserrat',sans-serif] leading-snug">
                    {article.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-1">
                    {article.excerpt}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-400 font-['Source_Sans_3',sans-serif]">By Onix Engineering</span>
                  <button
                    onClick={onOpenBoardPackModal}
                    className="font-bold text-[#B12D24] hover:underline flex items-center gap-1"
                  >
                    <span>Read briefing memo</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </article>
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
