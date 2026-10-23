import React, { useState, useEffect } from 'react';
import { PageRoute } from '../utils/routes';
import { ProofStrip } from '../components/ProofStrip';
import { PowerStoryDiagram } from '../components/PowerStoryDiagram';
import { FacilityBrowserVideo } from '../components/FacilityBrowserVideo';
import { EntranceSection } from '../components/EntranceSection';
import { ScrollReveal } from '../components/ScrollReveal';
import { PageEndBlock } from '../components/PageEndBlock';
import { ParticleBackground } from '../components/ParticleBackground';
import { LEADERSHIP_TEAM, INSIGHTS } from '../data/siteContent';
import { 
  ShieldCheck, 
  ArrowRight, 
  Calendar, 
  MessageSquare,
  Network,
  Building2,
  Truck
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageRoute, hash?: string) => void;
  onOpenTourModal: () => void;
  onOpenBoardPackModal: () => void;
  onOpenOutageDiary: () => void;
}

const CAROUSEL_HEADLINES = [
  "When the grid goes down in Accra, your systems don't notice",
  "Tier IV Certified Carrier-Neutral Colocation Data Centre",
  "West Africa's most interconnected digital gateway",
  "Zero downtime SLA backed by 4 independent power layers"
];

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenTourModal,
  onOpenBoardPackModal,
  onOpenOutageDiary,
}) => {
  const [headlineIndex, setHeadlineIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState<number | null>(null);

  // Unidirectional flow: transitions strictly from right to left every 3.8s
  useEffect(() => {
    const timer = setInterval(() => {
      setHeadlineIndex((current) => {
        setPrevIndex(current);
        return (current + 1) % CAROUSEL_HEADLINES.length;
      });
    }, 3800);
    return () => clearInterval(timer);
  }, []);

  const handleDotClick = (idx: number) => {
    if (idx !== headlineIndex) {
      setPrevIndex(headlineIndex);
      setHeadlineIndex(idx);
    }
  };

  return (
    <div className="space-y-0 overflow-x-hidden">
      {/* 1. Hero Section (Centered layout with Carousel & Video matching Image 2) */}
      <section className="relative bg-white pt-10 pb-16 lg:pt-14 lg:pb-24 overflow-hidden">
        {/* Subtle geometric dot grid background */}
        <div 
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(#151515 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />

        {/* Faint interactive floating particles in background */}
        <ParticleBackground />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          {/* Carousel Heading: springy animated unidirectional flow across 4 headlines */}
          <div className="relative overflow-hidden w-full max-w-3xl mx-auto min-h-[68px] sm:min-h-[80px] md:min-h-[92px] flex items-center justify-center">
            {CAROUSEL_HEADLINES.map((headline, idx) => {
              const isCurrent = headlineIndex === idx;
              const isPrevious = prevIndex === idx;

              let animClass = 'translate-x-full opacity-0 pointer-events-none absolute';
              if (isCurrent) {
                animClass = 'translate-x-0 opacity-100 relative';
              } else if (isPrevious) {
                animClass = '-translate-x-full opacity-0 pointer-events-none absolute';
              }

              return (
                <div
                  key={idx}
                  className={`w-full flex items-center justify-center px-2 transition-all duration-700 ease-[cubic-bezier(0.34,1.42,0.64,1)] ${animClass}`}
                >
                  <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight leading-snug font-['Montserrat',sans-serif] text-center text-balance">
                    {headline}
                  </h2>
                </div>
              );
            })}
          </div>

          {/* Carousel Indicator Dots */}
          <div className="flex items-center justify-center gap-2 mt-3 mb-3">
            {CAROUSEL_HEADLINES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => handleDotClick(idx)}
                aria-label={`Switch to headline ${idx + 1}`}
                className={`h-1.5 rounded-full transition-all duration-400 ${
                  headlineIndex === idx ? 'w-8 bg-[#B12D24]' : 'w-2 bg-slate-300 hover:bg-slate-400'
                }`}
              />
            ))}
          </div>

          {/* Sub Heading (Required copy from brief) */}
          <p className="mt-4 text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            West Africa&apos;s first Uptime Institute–certified Tier IV data centre, and still Ghana&apos;s only one. Four independent power layers, built 1.5 m above flood level, running since 2019.
          </p>

          {/* Buttons Row */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5 max-w-md mx-auto">
            {/* Button 1: Book a tour (red background with white text) */}
            <button
              onClick={onOpenTourModal}
              className="w-full sm:w-auto px-7 py-3.5 bg-[#B12D24] hover:bg-[#96221A] active:bg-[#7e1c15] text-white font-semibold rounded-full transition-all text-sm flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-[#B12D24] focus:ring-offset-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Book a tour</span>
            </button>

            {/* Button 2: Talk to an engineer */}
            <button
              onClick={() => onNavigate('contact')}
              className="w-full sm:w-auto px-7 py-3.5 bg-slate-100 hover:bg-slate-200 active:bg-slate-300 text-slate-800 font-semibold rounded-full transition-colors text-sm flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2"
            >
              <MessageSquare className="w-4 h-4 text-slate-600" />
              <span>Talk to an engineer</span>
            </button>
          </div>

          <div className="mt-3">
            <button
              onClick={onOpenBoardPackModal}
              className="text-xs text-slate-500 hover:text-slate-800 font-medium transition-colors underline-offset-4 hover:underline"
            >
              Download executive board pack →
            </button>
          </div>

          {/* Video: Autoplays in viewport, rounded-[32px], NO text on screen, only 3 controls (Image 2 style) */}
          <div className="mt-10">
            <FacilityBrowserVideo />
          </div>
        </div>
      </section>

      {/* 2. Global Proof Strip with 1-Second Viewport Count-Up (No border, rounded-3xl) */}
      <ProofStrip onNavigateToCertification={() => onNavigate('certification')} />

      {/* 3. The Four Layers Section (Interactive 4-layer handover simulator) */}
      <EntranceSection className="py-16 lg:py-20 bg-[#F4F5F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PowerStoryDiagram onOpenOutageDiary={onOpenOutageDiary} />
        </div>
      </EntranceSection>

      {/* 4. Who We Serve (4 Buyer Cards with Image 3 styling: rounded-3xl, borderless, clean shadow, Learn more ↗) */}
      <EntranceSection className="py-16 lg:py-24 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 font-['Montserrat',sans-serif]">
                Built for the organisations that cannot afford to fail
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mt-2.5 leading-relaxed">
                We design around who is buying, not generic product catalogs. Choose your profile to see how Onix satisfies your specific audit, network, and operational requirements.
              </p>
            </div>
            
            {/* View All Solutions Button: aligned to heading, matching standard button height, no right icon */}
            <button
              onClick={() => onNavigate('solutions')}
              className="px-7 py-3.5 bg-[#B12D24] hover:bg-[#96221A] active:bg-[#7e1c15] text-white font-semibold rounded-full transition-all text-sm sm:text-base shrink-0 focus:outline-none focus:ring-2 focus:ring-[#B12D24] focus:ring-offset-2 flex items-center justify-center"
            >
              View All Solutions
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1: Banks & Fintech */}
            <ScrollReveal staggerIndex={0}>
              <div 
                onClick={() => onNavigate('banks-fintech')}
                className="bg-white rounded-3xl p-7 sm:p-8 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group cursor-pointer h-full"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-red-50 text-[#B12D24] flex items-center justify-center group-hover:scale-105 transition-transform">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 font-['Montserrat',sans-serif]">
                    Banks & fintech
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    Primary hosting, disaster recovery and a ready-made recovery office, in a facility built for your auditors.
                  </p>
                </div>
                <div className="pt-6 mt-6 flex items-center justify-between text-sm">
                  <span className="font-semibold text-[#B12D24] group-hover:text-[#96221A] flex items-center gap-1.5 transition-colors">
                    <span>Learn more</span>
                    <span className="group-hover:translate-x-0.5 transition-transform">↗</span>
                  </span>
                  <span className="text-xs font-['Source_Sans_3',sans-serif] font-medium text-slate-400">BoG CISD</span>
                </div>
              </div>
            </ScrollReveal>

            {/* Card 2: Networks & Content */}
            <ScrollReveal staggerIndex={1}>
              <div 
                onClick={() => onNavigate('networks-content')}
                className="bg-white rounded-3xl p-7 sm:p-8 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group cursor-pointer h-full"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#243F87] flex items-center justify-center group-hover:scale-105 transition-transform">
                    <Network className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 font-['Montserrat',sans-serif]">
                    Networks & content
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    A carrier-neutral Meet-Me Room. Choose your carriers, cross-connect in 3 working days, and reach exchanges and content networks.
                  </p>
                </div>
                <div className="pt-6 mt-6 flex items-center justify-between text-sm">
                  <span className="font-semibold text-[#243F87] group-hover:text-blue-900 flex items-center gap-1.5 transition-colors">
                    <span>Learn more</span>
                    <span className="group-hover:translate-x-0.5 transition-transform">↗</span>
                  </span>
                  <span className="text-xs font-['Source_Sans_3',sans-serif] font-medium text-slate-400">MMR Vault</span>
                </div>
              </div>
            </ScrollReveal>

            {/* Card 3: Enterprise & Public Sector */}
            <ScrollReveal staggerIndex={2}>
              <div 
                onClick={() => onNavigate('enterprise')}
                className="bg-white rounded-3xl p-7 sm:p-8 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group cursor-pointer h-full"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-slate-100 text-slate-800 flex items-center justify-center group-hover:scale-105 transition-transform">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 font-['Montserrat',sans-serif]">
                    Enterprise & public sector
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    Move your servers out of the office and away from power cuts. Your data stays in Ghana under local sovereignty.
                  </p>
                </div>
                <div className="pt-6 mt-6 flex items-center justify-between text-sm">
                  <span className="font-semibold text-slate-900 group-hover:text-black flex items-center gap-1.5 transition-colors">
                    <span>Learn more</span>
                    <span className="group-hover:translate-x-0.5 transition-transform">↗</span>
                  </span>
                  <span className="text-xs font-['Source_Sans_3',sans-serif] font-medium text-slate-400">Act 843</span>
                </div>
              </div>
            </ScrollReveal>

            {/* Card 4: Moving to Onix */}
            <ScrollReveal staggerIndex={3}>
              <div 
                onClick={() => onNavigate('moving-to-onix')}
                className="bg-white rounded-3xl p-7 sm:p-8 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group cursor-pointer h-full"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-800 flex items-center justify-center group-hover:scale-105 transition-transform">
                    <Truck className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 font-['Montserrat',sans-serif]">
                    Moving to Onix
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    A clear migration plan, a timeline you can share internally with your board, and engineers who have done it before.
                  </p>
                </div>
                <div className="pt-6 mt-6 flex items-center justify-between text-sm">
                  <span className="font-semibold text-emerald-700 group-hover:text-emerald-900 flex items-center gap-1.5 transition-colors">
                    <span>Learn more</span>
                    <span className="group-hover:translate-x-0.5 transition-transform">↗</span>
                  </span>
                  <span className="text-xs font-['Source_Sans_3',sans-serif] font-medium text-slate-400">6 Steps</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </EntranceSection>

      {/* 5. The Honest Limitation (Location Section: Onix blue background, aligned heights, white feature pills) */}
      <EntranceSection className="py-16 lg:py-24 bg-[#243F87] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
            
            {/* Left Column (expanded to 8 columns, stretches full height to align with right box) */}
            <div className="lg:col-span-8 flex flex-col justify-between py-1 space-y-6">
              <ScrollReveal direction="up">
                <div className="space-y-5">
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-['Montserrat',sans-serif] leading-tight text-white text-balance">
                    Yes, we&apos;re 25 km from central Accra. That&apos;s deliberate.
                  </h2>
                  <p className="text-base sm:text-lg text-blue-100/90 leading-relaxed max-w-3xl">
                    It keeps us away from city-centre flooding and congestion, on land where we could raise the building 1.5 m above ground and build a 2,200-panel solar farm.
                  </p>
                  <p className="text-base sm:text-lg text-blue-100/90 leading-relaxed max-w-3xl">
                    Most clients visit once, then manage everything remotely. Our on-site team handles remote-hands requests within 15 minutes, around the clock.
                  </p>
                </div>
              </ScrollReveal>

              {/* White Pills: High contrast, clearly visible with body font size, no shadow */}
              <div className="pt-4 flex flex-wrap items-center gap-3.5">
                <ScrollReveal staggerIndex={0}>
                  <div className="inline-flex items-center gap-2.5 bg-white text-slate-900 px-5 py-2.5 rounded-full text-sm sm:text-base font-semibold">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shrink-0" />
                    <span>No flood basin exposure</span>
                  </div>
                </ScrollReveal>
                <ScrollReveal staggerIndex={1}>
                  <div className="inline-flex items-center gap-2.5 bg-white text-slate-900 px-5 py-2.5 rounded-full text-sm sm:text-base font-semibold">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shrink-0" />
                    <span>Dual unshared fiber paths</span>
                  </div>
                </ScrollReveal>
                <ScrollReveal staggerIndex={2}>
                  <div className="inline-flex items-center gap-2.5 bg-white text-slate-900 px-5 py-2.5 rounded-full text-sm sm:text-base font-semibold">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shrink-0" />
                    <span>24/7 on-site engineers</span>
                  </div>
                </ScrollReveal>
              </div>
            </div>

            {/* Right Column: Remote-hands metric box (reduced width by 30%, height stretched to match header to pills, no shadow) */}
            <div className="lg:col-span-4 w-full max-w-sm lg:ml-auto flex">
              <ScrollReveal direction="left" className="w-full h-full">
                <div className="w-full h-full bg-white/10 backdrop-blur-md rounded-3xl p-7 sm:p-8 flex flex-col justify-between border border-white/15">
                  <div className="space-y-4">
                    <div className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-blue-200">
                      Facility Remote-Hands Metric
                    </div>
                    <div className="text-4xl sm:text-5xl font-extrabold text-white font-['Montserrat',sans-serif] tabular-nums">
                      &lt; 15 mins
                    </div>
                    <p className="text-sm text-blue-100/90 leading-relaxed">
                      Average verified response time for rack reboot, cable patching, physical drive swap or circuit diagnostic.
                    </p>
                  </div>
                  <div className="pt-5 mt-6 border-t border-white/15 flex items-center justify-between text-xs sm:text-sm">
                    <span className="text-blue-200 font-medium">Amrahia-Katamanso</span>
                    <button
                      onClick={() => onNavigate('contact')}
                      className="text-white hover:text-blue-200 font-semibold underline underline-offset-4 transition-colors"
                    >
                      View site map →
                    </button>
                  </div>
                </div>
              </ScrollReveal>
            </div>

          </div>
        </div>
      </EntranceSection>

      {/* 6. The People (Rounded-3xl cards, no border outlines, no shadows) */}
      <EntranceSection className="py-16 lg:py-24 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 font-['Montserrat',sans-serif]">
                You&apos;ll know the people who run your infrastructure.
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed">
                At Onix, you won&apos;t be one account ticket among thousands. Every client&apos;s IT lead has a direct line to our operations team. Come and meet them.
              </p>
            </div>
            <button
              onClick={() => onNavigate('about')}
              className="px-7 py-3.5 bg-[#B12D24] hover:bg-[#96221A] active:bg-[#7e1c15] text-white font-semibold rounded-full transition-all text-sm sm:text-base shrink-0 focus:outline-none focus:ring-2 focus:ring-[#B12D24] focus:ring-offset-2 flex items-center justify-center"
            >
              Meet the full operations team
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {LEADERSHIP_TEAM.map((person, idx) => (
              <ScrollReveal key={idx} staggerIndex={idx} className="h-full">
                <div className="bg-white rounded-3xl p-6 transition-all flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className="w-12 h-12 rounded-2xl text-white font-bold flex items-center justify-center text-sm"
                        style={{ backgroundColor: person.bgColor }}
                      >
                        {person.avatarInitials}
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-900 text-sm font-['Montserrat',sans-serif]">
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
                    <p className="text-xs text-slate-500 mt-2">
                      {person.bio}
                    </p>
                  </div>
                  <div className="pt-4 mt-4 text-xs font-medium text-slate-500">
                    On-site at Accra facility
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </EntranceSection>

      {/* 7. Dakar Senegal Band */}
      <EntranceSection className="py-6 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#243F87] text-white p-6 sm:p-8 rounded-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4 text-center sm:text-left">
              <span className="text-3xl">🇸🇳</span>
              <div>
                <span className="font-bold text-base block font-['Montserrat',sans-serif]">
                  Also in Dakar, Senegal.
                </span>
                <span className="text-xs text-blue-100">
                  Carrier-neutral colocation inside the 2Africa cable landing station.
                </span>
              </div>
            </div>
            <button
              onClick={() => onNavigate('fr-senegal')}
              className="px-7 py-3.5 bg-white text-[#243F87] hover:bg-blue-50 active:bg-blue-100 font-semibold text-sm sm:text-base rounded-full transition-all shrink-0 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 flex items-center justify-center"
            >
              Visitez la page Sénégal (FR)
            </button>
          </div>
        </div>
      </EntranceSection>

      {/* 8. Insights Section (Rounded-3xl cards, no border outlines, no shadows) */}
      <EntranceSection className="py-16 lg:py-24 bg-[#F4F5F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-12">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 font-['Montserrat',sans-serif]">
                Latest Insights & Incident Telemetry
              </h2>
            </div>
            <button
              onClick={() => onNavigate('insights')}
              className="px-7 py-3.5 bg-[#B12D24] hover:bg-[#96221A] active:bg-[#7e1c15] text-white font-semibold rounded-full transition-all text-sm sm:text-base shrink-0 focus:outline-none focus:ring-2 focus:ring-[#B12D24] focus:ring-offset-2 flex items-center justify-center"
            >
              View all articles & outage diary
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {INSIGHTS.map((article, idx) => (
              <ScrollReveal key={article.id} staggerIndex={idx} className="h-full">
                <div
                  onClick={() => onNavigate('insights')}
                  className="bg-white rounded-3xl p-7 transition-all flex flex-col justify-between cursor-pointer group h-full"
                >
                  <div>
                    <div className="flex items-center gap-2 text-xs text-slate-500 mb-3">
                      <span className="font-semibold text-[#B12D24]">{article.category}</span>
                      <span aria-hidden="true">·</span>
                      <span>{article.date}</span>
                      <span aria-hidden="true">·</span>
                      <span>{article.readTime}</span>
                    </div>
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-[#B12D24] transition-colors font-['Montserrat',sans-serif] leading-snug">
                      {article.title}
                    </h3>
                    <p className="text-xs text-slate-600 mt-2.5 leading-relaxed">
                      {article.excerpt}
                    </p>
                  </div>
                  <div className="pt-6 mt-6 flex items-center justify-between text-xs font-bold text-slate-800 group-hover:text-[#B12D24]">
                    <span>Read report</span>
                    <span className="group-hover:translate-x-0.5 transition-transform">↗</span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </EntranceSection>

      {/* 9. Page-End Block */}
      <PageEndBlock
        onOpenTourModal={onOpenTourModal}
        onOpenContact={() => onNavigate('contact')}
        onOpenBoardPackModal={onOpenBoardPackModal}
      />
    </div>
  );
};
