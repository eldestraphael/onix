import React, { useState } from 'react';
import { PageRoute } from '../utils/routes';
import { ProofStrip } from '../components/ProofStrip';
import { PageEndBlock } from '../components/PageEndBlock';
import { 
  ShieldCheck, 
  ChevronDown, 
  Check, 
  ArrowRight, 
  Calendar, 
  FileText, 
  MessageSquare, 
  Clock, 
  AlertCircle,
  HelpCircle,
  Building,
  Server
} from 'lucide-react';

export type BuyerCategory = 'banks-fintech' | 'networks-content' | 'enterprise' | 'moving-to-onix';

interface BuyerContent {
  title: string;
  headline: string;
  subhead: string;
  badge: string;
  ctaPrimaryText: string;
  ctaSecondaryText: string;
  worries: {
    worry: string;
    answer: string;
    tag?: string;
  }[];
  whatWeProvide: string[];
  mostClientsStartWith: string;
  movingTimeline?: {
    step: number;
    title: string;
    desc: string;
    duration: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
  clientStory?: {
    quote: string;
    author: string;
    role: string;
    impact: string;
  };
}

const BUYER_DATA: Record<BuyerCategory, BuyerContent> = {
  'banks-fintech': {
    title: 'Banks & Fintech',
    badge: 'Banking & Financial Services Compliance',
    headline: 'Built for the audit, not just the uptime.',
    subhead: 'Ghanaian banks and fintechs use Onix for primary hosting, disaster recovery and a ready-made recovery office on site. Tier IV certified, PCI-DSS and ISO 27001, with current certificates you can download.',
    ctaPrimaryText: 'Book an audit visit',
    ctaSecondaryText: 'Get the bank board pack',
    worries: [
      {
        worry: '"If it goes down, it\'s on me."',
        answer: 'Tier IV means every critical system has an independent backup, certified by Uptime Institute, not by us. We\'ve operated since 2019 with zero unscheduled customer downtime.',
        tag: 'Uptime Institute Tier IV',
      },
      {
        worry: '"Will this pass the Bank of Ghana CISD review?"',
        answer: 'We\'ll walk your risk and compliance team through how the facility maps to the Cyber and Information Security Directive. Your auditors are welcome on site anytime with full access to evidence logs.',
        tag: 'BoG CISD Direct Alignment',
      },
      {
        worry: '"Where do we go if our office is out of action?"',
        answer: '200 m² of furnished business continuity office space on site, ready as an immediate recovery room for your operational staff next to your systems.',
        tag: 'Furnished DR Office',
      },
    ],
    whatWeProvide: [
      'Private dedicated racks, pods and high-security cages',
      'Disaster-recovery hosting with synchronous low-latency fiber links',
      '200 m² furnished business continuity disaster-recovery office on site',
      'Direct cross-connects to your telecom carriers & SWIFT access points',
      '24/7/365 certified remote-hands engineering support',
      'Bank of Ghana CISD physical audit support pack',
    ],
    mostClientsStartWith: '4 to 8 racks in a private biometric cage, paired with 10 dedicated seats in our on-site DR recovery office, then expanding as core banking services migrate.',
    clientStory: {
      quote: 'When our internal audit required off-site primary failover within 30km of Accra that meets BoG CISD standards, Onix was the only Tier IV facility able to provide verifiable dated audit logs.',
      author: 'Head of IT Infrastructure',
      role: 'Tier 1 Ghanaian Commercial Bank',
      impact: '100% compliance score on Bank of Ghana annual audit review',
    },
    faqs: [
      {
        question: 'Can our internal and regulatory auditors visit?',
        answer: 'Yes. Book an audit visit and our compliance team will prepare the full evidence dossier (ISO 27001, ISO 9001, PCI-DSS, physical logs, and electrical maintenance test reports) prior to your arrival.',
      },
      {
        question: 'Who can access our physical equipment?',
        answer: 'Only personnel explicitly authorized on your company access list, passing through multi-factor biometric authentication, man-trap airlocks, and 24/7 on-site security guards. Every single visit is timestamped.',
      },
      {
        question: 'Where is our data physically located?',
        answer: 'At our Amrahia-Katamanso data centre in Greater Accra, Ghana. Data never leaves Ghanaian jurisdiction unless you configure external routing over your telecommunication circuits.',
      },
    ],
  },

  'networks-content': {
    title: 'Networks & Content',
    badge: 'Carrier-Neutral Interconnection & MMR',
    headline: 'One neutral room. Your choice of carriers.',
    subhead: 'A carrier-neutral Meet-Me Room in Accra, with internet-exchange and content-network access, and a second neutral site at the 2Africa landing station in Dakar.',
    ctaPrimaryText: 'Book a technical tour',
    ctaSecondaryText: 'Request the engineering pack',
    worries: [
      {
        worry: '"Is the ecosystem thick enough?"',
        answer: 'Over 12 major carriers and ISPs are on site today. Each new carrier makes our Meet-Me Room more resilient and economically useful to the next.',
        tag: '12+ Carriers On Site',
      },
      {
        worry: '"How fast are cross-connects?"',
        answer: 'Typically 3 working days from signed order to light-on-fiber testing. Our structured cabling is monitored 24/7 with strict labeling.',
        tag: '3-Day Turnaround',
      },
      {
        worry: '"Can we reach the global platforms our customers use?"',
        answer: 'Yes, through your chosen carriers and our interconnection partners. Content network caches and regional internet exchanges peer directly within the facility.',
        tag: 'Global Content Routing',
      },
    ],
    whatWeProvide: [
      'Carrier-neutral Meet-Me Room colocation',
      'Single-mode & multi-mode fiber cross-connects',
      'Direct Internet Exchange (IX) access and local traffic peering',
      'Low-latency connectivity to submarine cable landing stations (2Africa, WACS, MainOne)',
      'Dual-path diverse cable entry vaults into the building',
      '24/7 remote hands for optical testing and SFP transceiver swaps',
    ],
    mostClientsStartWith: 'A single 42U rack in the Meet-Me Room corridor with two diverse cross-connects to primary backbones, scaling with traffic growth.',
    clientStory: {
      quote: 'Having a truly neutral facility in Accra means we negotiate bandwidth directly with multiple carriers without vendor lock-in. Cross-connects were patched in 72 hours.',
      author: 'Regional Network Architect',
      role: 'Pan-African Telecommunications Carrier',
      impact: '18% drop in transit latency across Greater Accra & regional nodes',
    },
    faqs: [
      {
        question: 'How do carrier cross-connects work at Onix?',
        answer: 'Because we are 100% carrier-neutral, you contract your transit directly with your carrier of choice. You request a cross-connect, and our on-site team runs and tests the fiber jumper from your rack to their Meet-Me Room patch panel.',
      },
      {
        question: 'What is the lead time for new cross-connects?',
        answer: 'Standard fiber cross-connects are completed within 3 working days. Emergency same-day patching is available under our priority remote-hands SLA.',
      },
      {
        question: 'Can we connect to Dakar from Accra?',
        answer: 'Yes. With Onix facilities in Accra (Tier IV) and Dakar (2Africa Cable Landing Station), you can build low-latency dual-hub regional routing across West Africa with a single partner.',
      },
    ],
  },

  'enterprise': {
    title: 'Enterprise & Public Sector',
    badge: 'Enterprise Colocation & Sovereignty',
    headline: 'Get your servers out of the office, and out of the way of power cuts.',
    subhead: 'Onix gives your systems four layers of power protection, certified security and a team on site around the clock. Your data stays in Ghana.',
    ctaPrimaryText: 'Book a facility tour',
    ctaSecondaryText: 'See what it costs to do it yourself',
    worries: [
      {
        worry: '"Our server room works fine."',
        answer: 'Until the next extended utility blackout. Add up diesel fuel, monthly generator servicing, UPS battery replacements, air conditioning maintenance, IT overtime and hours lost. Most firms are shocked by the true TCO.',
        tag: 'True TCO Comparison',
      },
      {
        worry: '"Moving sounds risky."',
        answer: 'We plan it with your IT team, step by step. You see the detailed physical and network timeline before you commit a single cable.',
        tag: 'Structured Migration Plan',
      },
      {
        worry: '"Is our data still ours, and still in Ghana?"',
        answer: 'Yes. You own your servers and storage. They reside inside an audited Ghanaian facility complying with Ghana\'s Data Protection Act, 2012 (Act 843).',
        tag: 'Sovereign Ghana Hosting',
      },
    ],
    whatWeProvide: [
      'Secure locking enterprise racks (3 kW or 5 kW power density)',
      'Uninterrupted 4-layer power with 99.995% SLA',
      'Dual precision cooling with cold-aisle containment',
      'On-site remote hands: reboots, visual checks, hardware swaps',
      'Data sovereignty compliance under Ghana Data Protection Act 843',
      '24/7 physical security, VESDA fire protection, and CCTV monitoring',
    ],
    mostClientsStartWith: 'One or two 42U racks, consolidating server stacks from corporate headquarters into a protected Tier IV environment with remote management.',
    clientStory: {
      quote: 'We calculated that diesel and maintenance on our head office generator cost us over $25,000 annually — not counting the hours our staff spent troubleshooting. Moving to Onix immediately eliminated our downtime risk.',
      author: 'Chief Information Officer',
      role: 'Enterprise Healthcare & Distribution Group',
      impact: 'Zero unplanned downtime during 2026 grid instability in Accra',
    },
    faqs: [
      {
        question: 'Can we keep our existing IT team and software?',
        answer: 'Absolutely. You retain complete root access and management over your servers, operating systems, and applications. Our team acts as your on-site physical hands.',
      },
      {
        question: 'How do our office employees connect to the servers?',
        answer: 'Through dedicated point-to-point fiber or secure VPN from your office to Onix. Latency from central Accra to Amrahia-Katamanso is sub-2 milliseconds.',
      },
      {
        question: 'What happens if a hard drive fails at 2:00 AM?',
        answer: 'Our 24/7 on-site operations engineers receive your ticket or phone call, access your rack under your authorization, and replace the drive with your spare within 15 minutes.',
      },
    ],
  },

  'moving-to-onix': {
    title: 'Moving to Onix',
    badge: 'Zero-Disruption Migration Roadmap',
    headline: 'Moving is the worry. We make it a plan.',
    subhead: 'A clear migration plan, a timeline you can share with your board, and engineers who have done it before.',
    ctaPrimaryText: 'Talk to an engineer',
    ctaSecondaryText: 'Get the migration outline',
    worries: [
      {
        worry: '"We can\'t afford business disruption during transfer."',
        answer: 'Migrations are staged during your lowest-traffic weekend or overnight quiet hours, with pre-racked cabling, pre-tested cross-connects and dual roll-back plans in place.',
        tag: 'Quiet Hours Scheduling',
      },
      {
        worry: '"What if physical hardware is damaged in transit?"',
        answer: 'We utilize shock-absorbing padded transit flight cases and climate-controlled secure transport vehicles with full transit insurance and GPS tracking.',
        tag: 'Padded Transit Vehicles',
      },
      {
        worry: '"Will internal teams know how to operate remotely?"',
        answer: 'We conduct a full remote-hands test protocol before handover. Every client IT lead receives direct contact lines to named shift engineers on duty.',
        tag: 'Named Shift Engineers',
      },
    ],
    whatWeProvide: [
      'Comprehensive 30-minute discovery assessment',
      'Pre-cabled racks, PDU assignment, and labeled cross-connects',
      'Dry-run network routing verification before hardware moves',
      'Padded transit packaging and secure transport coordination',
      'On-site senior Onix engineers paired with your IT staff during cutover',
      '14-day post-migration operational review & settling-in guarantee',
    ],
    mostClientsStartWith: 'A scheduled 30-minute technical discovery call with our migration lead to map out port counts, rack densities, and target cutover windows.',
    movingTimeline: [
      {
        step: 1,
        title: 'Discovery call (30 minutes)',
        desc: 'Review what you have, what must stay online, current bandwidth, and target deadlines.',
        duration: 'Day 1',
      },
      {
        step: 2,
        title: 'Site tour (In-person or Live video)',
        desc: 'Inspect your designated rack or cage, power distribution, and Meet-Me Room connections.',
        duration: 'Day 2–3',
      },
      {
        step: 3,
        title: 'Written plan & fixed-price proposal',
        desc: 'Every step, cable requirement, and recurring charge itemized with zero hidden fees.',
        duration: 'Within 2 working days',
      },
      {
        step: 4,
        title: 'Preparation & pre-cabling',
        desc: 'Racks, power circuits, PDUs and carrier cross-connects fully wired and tested before hardware leaves your office.',
        duration: 'Week 1',
      },
      {
        step: 5,
        title: 'The move (Quiet hours)',
        desc: 'Planned around your lowest traffic hours with Onix engineers on site alongside your team until green lights appear.',
        duration: 'Scheduled weekend window',
      },
      {
        step: 6,
        title: 'Settling in & direct operations handover',
        desc: 'Formal check-in after 14 days, remote-hands test run, and direct contact lines to 24/7 operations team.',
        duration: 'Day 14 onward',
      },
    ],
    faqs: [
      {
        question: 'What is the typical timeframe from signed contract to go-live?',
        answer: 'For 1 to 4 racks with standard power, typical go-live is 2 to 3 weeks. Custom cages and high-density pods typically deploy in 3 to 4 weeks.',
      },
      {
        question: 'Can we move servers in phases rather than all at once?',
        answer: 'Yes. Most enterprise clients migrate non-critical standby servers first to test connectivity, followed by primary production databases during a subsequent quiet-hours maintenance window.',
      },
      {
        question: 'Do we have to accompany the equipment during physical transport?',
        answer: 'Your IT staff are welcome to accompany the transit vehicle, or our team can handle the receipt, unboxing, and rack mounting per your rack elevation diagram.',
      },
    ],
  },
};

interface BuyerPageProps {
  category: BuyerCategory;
  onNavigate: (page: PageRoute, hash?: string) => void;
  onOpenTourModal: () => void;
  onOpenBoardPackModal: () => void;
}

export const BuyerPage: React.FC<BuyerPageProps> = ({
  category,
  onNavigate,
  onOpenTourModal,
  onOpenBoardPackModal,
}) => {
  const content = BUYER_DATA[category];
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="space-y-0">
      {/* 1. Hero Section */}
      <section className="bg-white pt-12 pb-16 lg:pt-16 lg:pb-20 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-5">
            <div className="inline-flex items-center text-xs font-semibold text-[#B12D24] uppercase tracking-wider">
              <span>{content.badge}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15] font-['Montserrat',sans-serif] text-balance">
              {content.headline}
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              {content.subhead}
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <button
                onClick={onOpenTourModal}
                className="px-6 py-3.5 bg-[#B12D24] hover:bg-[#96221A] active:bg-[#7e1c15] text-white font-semibold rounded-lg transition-all text-sm flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>{content.ctaPrimaryText}</span>
              </button>

              <button
                onClick={onOpenBoardPackModal}
                className="px-6 py-3.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold rounded-lg transition-colors text-sm flex items-center justify-center gap-2"
              >
                <FileText className="w-4 h-4 text-slate-600" />
                <span>{content.ctaSecondaryText}</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. What you're probably worried about (The heart of the page) */}
      <section className="py-16 lg:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1 font-['Montserrat',sans-serif]">
              What you&apos;re probably worried about
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Choosing a data centre is a high-stakes decision. Here is how we directly answer your biggest concerns:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {content.worries.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-6 hover:border-slate-300 transition-all flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="text-xs font-bold font-['Source_Sans_3',sans-serif] text-[#B12D24] uppercase tracking-wider">
                    {item.tag || `Concern 0${idx + 1}`}
                  </div>

                  <h3 className="text-base font-bold text-slate-900 italic font-['Montserrat',sans-serif] leading-snug">
                    {item.worry}
                  </h3>

                  <div className="pt-2 border-t border-slate-100">
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs text-emerald-700 font-medium">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Verified by SLA & certification</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Migration Timeline if on Moving Page */}
      {content.movingTimeline && (
        <section className="py-16 lg:py-20 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mt-1 font-['Montserrat',sans-serif]">
                How a move works
              </h2>
              <p className="text-sm text-slate-600 mt-2">
                Typical go-live: 2 to 3 weeks from signed proposal. Planned around your schedule with zero surprises.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {content.movingTimeline.map((step) => (
                <div
                  key={step.step}
                  className="bg-slate-50 rounded-3xl p-6 space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <span className="w-8 h-8 rounded-lg bg-[#B12D24] text-white font-bold text-sm flex items-center justify-center font-['Source_Sans_3',sans-serif]">
                      {step.step}
                    </span>
                    <span className="text-xs font-semibold text-slate-500 font-['Source_Sans_3',sans-serif]">
                      {step.duration}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 font-['Montserrat',sans-serif]">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 3 & 4. What we provide & Most clients start with */}
      <section className="py-16 lg:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* What we provide */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1 font-['Montserrat',sans-serif]">
                  What we provide
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {content.whatWeProvide.map((feature, i) => (
                  <div
                    key={i}
                    className="p-3.5 bg-slate-50 rounded-2xl flex items-start gap-2.5 text-xs text-slate-800"
                  >
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="font-medium leading-relaxed">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Most clients start with */}
            <div className="lg:col-span-5 bg-[#151515] text-white rounded-2xl p-6 sm:p-8 space-y-5">
              <h3 className="text-xl font-bold text-white font-['Montserrat',sans-serif]">
                Most clients start with:
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                {content.mostClientsStartWith}
              </p>

              <div className="pt-4 border-t border-slate-800 flex flex-col gap-2.5">
                <button
                  onClick={onOpenTourModal}
                  className="w-full py-3 bg-[#B12D24] hover:bg-[#96221A] text-white rounded-lg text-xs font-semibold transition-colors text-center"
                >
                  Book an inspection tour
                </button>
                <button
                  onClick={() => onNavigate('solutions', 'pricing')}
                  className="w-full py-3 bg-white/10 hover:bg-white/15 text-white rounded-lg text-xs font-semibold transition-colors text-center"
                >
                  Calculate indicative pricing →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Proof Strip & Client Story */}
      <ProofStrip onNavigateToCertification={() => onNavigate('certification')} />

      {content.clientStory && (
        <section className="py-12 bg-slate-50 border-b border-slate-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
            <blockquote className="text-base sm:text-lg text-slate-800 font-medium italic leading-relaxed">
              &quot;{content.clientStory.quote}&quot;
            </blockquote>
            <div className="text-xs text-slate-600">
              <span className="font-bold text-slate-900">{content.clientStory.author}</span>
              <span aria-hidden="true" className="mx-2">·</span>
              <span>{content.clientStory.role}</span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 border border-emerald-200 rounded-md text-xs font-semibold text-emerald-800">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>{content.clientStory.impact}</span>
            </div>
          </div>
        </section>
      )}

      {/* 6. Short FAQ Accordion */}
      <section className="py-16 lg:py-20 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1 font-['Montserrat',sans-serif]">
              Clear answers before you commit
            </h2>
          </div>

          <div className="divide-y divide-slate-200 border-y border-slate-200">
            {content.faqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div key={index} className="py-4">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-center justify-between text-left py-2 focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="text-sm sm:text-base font-bold text-slate-900 font-['Montserrat',sans-serif]">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-400 transition-transform duration-200 shrink-0 ml-4 ${
                        isOpen ? 'rotate-180 text-[#B12D24]' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="pt-2 pb-3 text-xs sm:text-sm text-slate-600 leading-relaxed animate-in fade-in duration-150">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. Page-End Block */}
      <PageEndBlock
        onOpenTourModal={onOpenTourModal}
        onOpenContact={() => onNavigate('contact')}
        onOpenBoardPackModal={onOpenBoardPackModal}
      />
    </div>
  );
};
