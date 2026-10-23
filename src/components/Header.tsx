import React, { useState, useRef, useEffect } from 'react';
import { PageRoute } from '../utils/routes';
import { OnixLogo } from './OnixLogo';
import { 
  ChevronDown, 
  Menu, 
  X, 
  ShieldCheck, 
  Server, 
  Cpu, 
  Sun,
  Activity,
  ArrowRight
} from 'lucide-react';

interface HeaderProps {
  currentPage: PageRoute;
  onNavigate: (page: PageRoute, hash?: string) => void;
  onOpenTourModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPage,
  onNavigate,
  onOpenTourModal,
}) => {
  const [isWhoWeServeOpen, setIsWhoWeServeOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const whoWeServeRef = useRef<HTMLDivElement>(null);
  const solutionsRef = useRef<HTMLDivElement>(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (whoWeServeRef.current && !whoWeServeRef.current.contains(event.target as Node)) {
        setIsWhoWeServeOpen(false);
      }
      if (solutionsRef.current && !solutionsRef.current.contains(event.target as Node)) {
        setIsSolutionsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="fixed top-4 inset-x-0 z-50 flex justify-center px-3 sm:px-6 pointer-events-none">
      {/* Floating Pill Container matching user reference */}
      <div className="w-full max-w-6xl bg-white/95 backdrop-blur-md rounded-full shadow-[0_10px_35px_rgba(0,0,0,0.08)] px-4 sm:px-6 py-2.5 flex items-center justify-between pointer-events-auto transition-all border border-black/[0.04]">
        
        {/* Left: Brand Logo */}
        <div className="flex items-center shrink-0">
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center gap-2.5 focus:outline-none group"
            aria-label="Onix Data Centre Home"
          >
            <OnixLogo variant="red" className="h-8 sm:h-9 w-auto transition-transform group-hover:scale-[1.03]" imgClassName="h-8 sm:h-9 w-auto" />
          </button>
        </div>

        {/* Center: Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-5 text-[13px] font-medium text-slate-700">
          
          {/* Who we serve dropdown */}
          <div className="relative" ref={whoWeServeRef}>
            <button
              onClick={() => setIsWhoWeServeOpen(!isWhoWeServeOpen)}
              onMouseEnter={() => setIsWhoWeServeOpen(true)}
              className={`flex items-center gap-1 py-1.5 transition-colors ${
                ['banks-fintech', 'networks-content', 'enterprise', 'moving-to-onix'].includes(currentPage)
                  ? 'text-[#B12D24] font-semibold'
                  : 'hover:text-[#B12D24]'
              }`}
            >
              <span>Who we serve</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isWhoWeServeOpen ? 'rotate-180' : ''}`} />
            </button>

            {isWhoWeServeOpen && (
              <div 
                onMouseLeave={() => setIsWhoWeServeOpen(false)}
                className="absolute top-full left-0 mt-3 w-72 bg-white rounded-3xl shadow-xl p-3 z-50 animate-in fade-in slide-in-from-top-2 duration-150 border border-slate-100"
              >
                <button
                  onClick={() => {
                    onNavigate('banks-fintech');
                    setIsWhoWeServeOpen(false);
                  }}
                  className="w-full text-left p-3 hover:bg-slate-50 rounded-2xl transition-colors group flex items-start gap-3"
                >
                  <div className="w-8 h-8 rounded-xl bg-red-50 text-[#B12D24] flex items-center justify-center shrink-0 group-hover:bg-[#B12D24] group-hover:text-white transition-colors">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900 text-xs">Banks & Fintech</div>
                    <div className="text-[11px] text-slate-500 mt-0.5">PCI-DSS, ISO 27001, dual grid, Tier IV compliance</div>
                  </div>
                </button>

                <button
                  onClick={() => {
                    onNavigate('networks-content');
                    setIsWhoWeServeOpen(false);
                  }}
                  className="w-full text-left p-3 hover:bg-slate-50 rounded-2xl transition-colors group flex items-start gap-3"
                >
                  <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <Activity className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900 text-xs">Networks & Content</div>
                    <div className="text-[11px] text-slate-500 mt-0.5">12+ carriers, Meet-Me Room, low-latency cross-connects</div>
                  </div>
                </button>

                <button
                  onClick={() => {
                    onNavigate('enterprise');
                    setIsWhoWeServeOpen(false);
                  }}
                  className="w-full text-left p-3 hover:bg-slate-50 rounded-2xl transition-colors group flex items-start gap-3"
                >
                  <div className="w-8 h-8 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center shrink-0 group-hover:bg-slate-900 group-hover:text-white transition-colors">
                    <Server className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900 text-xs">Enterprise & Public Sector</div>
                    <div className="text-[11px] text-slate-500 mt-0.5">Ghanaian data residency, flood-free, 24/7 remote hands</div>
                  </div>
                </button>

                <div className="mt-1 pt-2 border-t border-slate-100">
                  <button
                    onClick={() => {
                      onNavigate('moving-to-onix');
                      setIsWhoWeServeOpen(false);
                    }}
                    className="w-full text-left px-3 py-2 text-xs font-semibold text-[#B12D24] hover:bg-red-50 rounded-xl transition-colors flex items-center justify-between"
                  >
                    <span>How moving to Onix works</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Solutions dropdown */}
          <div className="relative" ref={solutionsRef}>
            <button
              onClick={() => setIsSolutionsOpen(!isSolutionsOpen)}
              onMouseEnter={() => setIsSolutionsOpen(true)}
              className={`flex items-center gap-1 py-1.5 transition-colors ${
                currentPage === 'solutions' ? 'text-[#B12D24] font-semibold' : 'hover:text-[#B12D24]'
              }`}
            >
              <span>Solutions</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isSolutionsOpen ? 'rotate-180' : ''}`} />
            </button>

            {isSolutionsOpen && (
              <div 
                onMouseLeave={() => setIsSolutionsOpen(false)}
                className="absolute top-full left-0 mt-3 w-64 bg-white rounded-3xl shadow-xl p-3 z-50 animate-in fade-in slide-in-from-top-2 duration-150 border border-slate-100"
              >
                <button
                  onClick={() => {
                    onNavigate('solutions', 'colocation');
                    setIsSolutionsOpen(false);
                  }}
                  className="w-full text-left px-3 py-2 text-xs font-medium text-slate-800 hover:bg-slate-50 rounded-xl"
                >
                  Colocation (Racks & Cages)
                </button>
                <button
                  onClick={() => {
                    onNavigate('solutions', 'connectivity');
                    setIsSolutionsOpen(false);
                  }}
                  className="w-full text-left px-3 py-2 text-xs font-medium text-slate-800 hover:bg-slate-50 rounded-xl"
                >
                  Interconnection (MMR)
                </button>
                <button
                  onClick={() => {
                    onNavigate('solutions', 'sustainability');
                    setIsSolutionsOpen(false);
                  }}
                  className="w-full text-left px-3 py-2 text-xs font-medium text-slate-800 hover:bg-slate-50 rounded-xl"
                >
                  640 kW Solar Power
                </button>
                <button
                  onClick={() => {
                    onNavigate('solutions', 'remote-hands');
                    setIsSolutionsOpen(false);
                  }}
                  className="w-full text-left px-3 py-2 text-xs font-medium text-slate-800 hover:bg-slate-50 rounded-xl"
                >
                  24/7 Remote Hands
                </button>
              </div>
            )}
          </div>

          <button
            onClick={() => onNavigate('the-facility')}
            className={`py-1.5 transition-colors whitespace-nowrap ${
              currentPage === 'the-facility' ? 'text-[#B12D24] font-semibold' : 'hover:text-[#B12D24]'
            }`}
          >
            The facility
          </button>

          <button
            onClick={() => onNavigate('certification')}
            className={`py-1.5 transition-colors whitespace-nowrap ${
              currentPage === 'certification' ? 'text-[#B12D24] font-semibold' : 'hover:text-[#B12D24]'
            }`}
          >
            Certification
          </button>

          <button
            onClick={() => onNavigate('sustainability')}
            className={`py-1.5 transition-colors whitespace-nowrap ${
              currentPage === 'sustainability' ? 'text-[#B12D24] font-semibold' : 'hover:text-[#B12D24]'
            }`}
          >
            Sustainability
          </button>

          <button
            onClick={() => onNavigate('about')}
            className={`py-1.5 transition-colors whitespace-nowrap ${
              currentPage === 'about' ? 'text-[#B12D24] font-semibold' : 'hover:text-[#B12D24]'
            }`}
          >
            About
          </button>

          <button
            onClick={() => onNavigate('insights')}
            className={`py-1.5 transition-colors whitespace-nowrap ${
              currentPage === 'insights' ? 'text-[#B12D24] font-semibold' : 'hover:text-[#B12D24]'
            }`}
          >
            Insights
          </button>

          <button
            onClick={() => onNavigate('contact')}
            className={`py-1.5 transition-colors whitespace-nowrap ${
              currentPage === 'contact' ? 'text-[#B12D24] font-semibold' : 'hover:text-[#B12D24]'
            }`}
          >
            Contact
          </button>

          <div className="h-3.5 w-px bg-slate-200 mx-0.5" aria-hidden="true" />

          {/* Senegal Flag Link */}
          <button
            onClick={() => onNavigate('fr-senegal')}
            className={`flex items-center gap-1 py-1 px-2.5 rounded-full text-xs font-medium transition-colors ${
              currentPage === 'fr-senegal'
                ? 'bg-slate-900 text-white font-semibold'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
            title="Dakar, Sénégal - Page en français"
          >
            <span className="text-sm">🇸🇳</span>
            <span>Senegal (FR)</span>
          </button>
        </nav>

        {/* Right: Actions matching Image 1 */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => onNavigate('contact')}
            className="hidden xl:inline-flex text-xs font-semibold text-slate-700 hover:text-slate-900 transition-colors whitespace-nowrap px-2"
          >
            Client support
          </button>

          {/* Book a tour button: matching hero button height, increased font size, no right icon */}
          <button
            onClick={onOpenTourModal}
            className="px-6 sm:px-7 py-3 sm:py-3.5 bg-[#151515] hover:bg-black active:bg-neutral-900 text-white text-sm sm:text-base font-semibold rounded-full transition-all shrink-0 focus:outline-none focus:ring-2 focus:ring-[#151515] focus:ring-offset-2 flex items-center justify-center"
          >
            Book a tour
          </button>

          {/* Mobile Hamburger Button */}
          <div className="flex lg:hidden items-center ml-1">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-1.5 text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-full focus:outline-none"
              aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu (Floating card under the pill) */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed top-20 inset-x-4 max-w-md mx-auto bg-white/98 backdrop-blur-md rounded-3xl shadow-2xl p-5 z-50 pointer-events-auto border border-slate-100 max-h-[calc(100vh-6rem)] overflow-y-auto space-y-4 animate-in fade-in slide-in-from-top-3 duration-200">
          <div className="space-y-1">
            <div className="text-[11px] font-bold text-slate-400 px-3 py-1">
              Who we serve
            </div>
            <button
              onClick={() => {
                onNavigate('banks-fintech');
                setIsMobileMenuOpen(false);
              }}
              className="w-full text-left px-3 py-2 text-sm font-medium text-slate-800 hover:bg-slate-50 rounded-xl"
            >
              Banks & fintech
            </button>
            <button
              onClick={() => {
                onNavigate('networks-content');
                setIsMobileMenuOpen(false);
              }}
              className="w-full text-left px-3 py-2 text-sm font-medium text-slate-800 hover:bg-slate-50 rounded-xl"
            >
              Networks & content
            </button>
            <button
              onClick={() => {
                onNavigate('enterprise');
                setIsMobileMenuOpen(false);
              }}
              className="w-full text-left px-3 py-2 text-sm font-medium text-slate-800 hover:bg-slate-50 rounded-xl"
            >
              Enterprise & public sector
            </button>
          </div>

          <div className="border-t border-slate-100 pt-3 space-y-1">
            <button
              onClick={() => {
                onNavigate('solutions');
                setIsMobileMenuOpen(false);
              }}
              className="w-full text-left px-3 py-2 text-sm font-medium text-slate-800 hover:bg-slate-50 rounded-xl"
            >
              Solutions
            </button>
            <button
              onClick={() => {
                onNavigate('the-facility');
                setIsMobileMenuOpen(false);
              }}
              className="w-full text-left px-3 py-2 text-sm font-medium text-slate-800 hover:bg-slate-50 rounded-xl"
            >
              The facility
            </button>
            <button
              onClick={() => {
                onNavigate('certification');
                setIsMobileMenuOpen(false);
              }}
              className="w-full text-left px-3 py-2 text-sm font-medium text-slate-800 hover:bg-slate-50 rounded-xl"
            >
              Certification
            </button>
            <button
              onClick={() => {
                onNavigate('sustainability');
                setIsMobileMenuOpen(false);
              }}
              className="w-full text-left px-3 py-2 text-sm font-medium text-slate-800 hover:bg-slate-50 rounded-xl"
            >
              Sustainability
            </button>
            <button
              onClick={() => {
                onNavigate('about');
                setIsMobileMenuOpen(false);
              }}
              className="w-full text-left px-3 py-2 text-sm font-medium text-slate-800 hover:bg-slate-50 rounded-xl"
            >
              About
            </button>
            <button
              onClick={() => {
                onNavigate('insights');
                setIsMobileMenuOpen(false);
              }}
              className="w-full text-left px-3 py-2 text-sm font-medium text-slate-800 hover:bg-slate-50 rounded-xl"
            >
              Insights & Outage Diary
            </button>
            <button
              onClick={() => {
                onNavigate('contact');
                setIsMobileMenuOpen(false);
              }}
              className="w-full text-left px-3 py-2 text-sm font-medium text-slate-800 hover:bg-slate-50 rounded-xl"
            >
              Contact
            </button>
          </div>

          <div className="border-t border-slate-100 pt-3 flex flex-col gap-2">
            <button
              onClick={() => {
                onNavigate('fr-senegal');
                setIsMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-between px-3 py-2.5 bg-slate-50 hover:bg-slate-100 rounded-2xl text-sm font-medium text-slate-800"
            >
              <span className="flex items-center gap-2">
                <span>🇸🇳</span>
                <span>Dakar, Sénégal (Français)</span>
              </span>
              <span className="text-xs text-slate-500 font-semibold">2Africa</span>
            </button>

            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenTourModal();
              }}
              className="w-full px-7 py-3.5 text-center font-semibold text-white bg-[#151515] hover:bg-black rounded-full text-sm sm:text-base flex items-center justify-center"
            >
              Book a tour
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
