import React from 'react';
import { PageRoute } from '../utils/routes';
import { LEADERSHIP_TEAM } from '../data/siteContent';
import { PageEndBlock } from '../components/PageEndBlock';
import { Award, ShieldCheck, Users, PhoneCall, Compass, CheckCircle2, ArrowRight } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: PageRoute) => void;
  onOpenTourModal: () => void;
  onOpenBoardPackModal: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
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
            <div className="inline-flex items-center text-xs font-semibold text-[#B12D24] uppercase tracking-wider">
              <span>Independent Ownership & Governance</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-['Montserrat',sans-serif] tracking-tight text-balance">
              Ghanaian and African owned and operated. Built to last.
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              We run two carrier-neutral data centres in West Africa: a Tier IV certified facility in Accra, the first in the region, and colocation inside the 2Africa cable landing station in Dakar. We&apos;re built for the next decade, not the next quarter.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-4 space-y-3">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-['Montserrat',sans-serif]">
                Our story
              </h2>
            </div>

            <div className="lg:col-span-8 bg-white rounded-3xl p-6 sm:p-8 space-y-5 text-sm sm:text-base text-slate-700 leading-relaxed">
              <p>
                Onix Accra opened in 2019 and became West Africa&apos;s first Uptime Institute–certified Tier IV data centre. We built it outside the city, on raised ground, with its own solar farm, because in Accra resilience isn&apos;t a feature, it&apos;s the job.
              </p>
              <p>
                In 2023, we added carrier-neutral colocation inside the critical 2Africa submarine cable landing station in Dakar, Senegal. Today, we bridge African digital sovereignty with global interconnectivity, serving commercial banks, telecommunication operators, cloud providers, and government agencies.
              </p>

              <div className="pt-4 border-t border-slate-100 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs font-['Source_Sans_3',sans-serif] text-slate-600">
                <div>
                  <span className="text-slate-400 block text-[10px]">2019</span>
                  <span className="font-bold text-slate-900 text-sm">Tier IV Accra Launch</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[10px]">2023</span>
                  <span className="font-bold text-slate-900 text-sm">Dakar 2Africa Expansion</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[10px]">CURRENT</span>
                  <span className="font-bold text-[#B12D24] text-sm">99.995% Uptime Maintained</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership & The People on the Floor */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mt-1 font-['Montserrat',sans-serif]">
              The people who keep Onix running
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2">
              The engineers who keep Onix running are the people you&apos;ll meet on your tour, and the people who answer when you call.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {LEADERSHIP_TEAM.map((person, idx) => (
              <div
                key={idx}
                className="bg-slate-50 rounded-3xl p-6 flex flex-col justify-between space-y-4"
              >
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className="w-12 h-12 rounded-xl text-white font-bold flex items-center justify-center text-sm"
                      style={{ backgroundColor: person.bgColor }}
                    >
                      {person.avatarInitials}
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-base font-['Montserrat',sans-serif]">
                        {person.name}
                      </h3>
                      <p className="text-xs text-slate-500 font-medium">
                        {person.role}
                      </p>
                    </div>
                  </div>

                  <p className="text-xs text-slate-700 italic border-l-2 border-slate-300 pl-3 py-1 my-3 leading-relaxed">
                    &quot;{person.quote}&quot;
                  </p>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {person.bio}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-200 flex items-center justify-between text-xs">
                  <span className="text-slate-400">On-site Accra team</span>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#243F87] hover:underline font-semibold"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work: 3 Commitments */}
      <section className="py-16 bg-slate-900 text-white border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl font-bold font-['Montserrat',sans-serif] text-white mt-1">
              How we work: Three commitments
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-3">
              <div className="text-[#B12D24] font-bold text-lg font-['Source_Sans_3',sans-serif]">01</div>
              <h3 className="text-lg font-bold font-['Montserrat',sans-serif] text-white">
                We prove, not claim.
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Every certificate is published with its expiry date. Our uptime record is tracked openly. We invite your risk teams and auditors to inspect the physical plant in person.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-3">
              <div className="text-[#B12D24] font-bold text-lg font-['Source_Sans_3',sans-serif]">02</div>
              <h3 className="text-lg font-bold font-['Montserrat',sans-serif] text-white">
                You can always reach a person.
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Phone, email or WhatsApp, answered directly by our on-site operations team. No anonymous ticket black holes or third-party call centres.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-3">
              <div className="text-[#B12D24] font-bold text-lg font-['Source_Sans_3',sans-serif]">03</div>
              <h3 className="text-lg font-bold font-['Montserrat',sans-serif] text-white">
                We&apos;ll tell you if you don&apos;t need us.
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                If Tier IV fault-tolerance is more redundancy than your applications require, we will tell you openly. We want long-term infrastructure partnerships built on trust.
              </p>
            </div>
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
