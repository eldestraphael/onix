import React, { useState, useEffect } from 'react';
import { PageRoute, resolveRoute, getPathForPage } from './utils/routes';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { StickyMobileBar } from './components/StickyMobileBar';
import { TourBookingModal } from './components/TourBookingModal';
import { BoardPackModal } from './components/BoardPackModal';
import { OutageDiaryModal } from './components/OutageDiaryModal';
import { CookieConsent } from './components/CookieConsent';
import { ScrollProgressBar } from './components/ScrollProgressBar';

import { HomePage } from './pages/HomePage';
import { BuyerPage } from './pages/BuyerPage';
import { SolutionsPage } from './pages/SolutionsPage';
import { TheFacilityPage } from './pages/TheFacilityPage';
import { CertificationPage } from './pages/CertificationPage';
import { SustainabilityPage } from './pages/SustainabilityPage';
import { AboutPage } from './pages/AboutPage';
import { InsightsPage } from './pages/InsightsPage';
import { ContactPage } from './pages/ContactPage';
import { BookATourPage } from './pages/BookATourPage';
import { SenegalPage } from './pages/SenegalPage';

export default function App() {
  const [currentRoute, setCurrentRoute] = useState<{
    page: PageRoute;
    hash?: string;
  }>(() => {
    const match = resolveRoute(window.location.pathname, window.location.hash);
    return { page: match.page, hash: match.hash };
  });

  const [isTourModalOpen, setIsTourModalOpen] = useState(false);
  const [isBoardPackModalOpen, setIsBoardPackModalOpen] = useState(false);
  const [isOutageDiaryOpen, setIsOutageDiaryOpen] = useState(false);
  const [isCookieSettingsOpen, setIsCookieSettingsOpen] = useState(false);
  const [contactInitialNotes, setContactInitialNotes] = useState<string>('');

  // Handle browser back/forward buttons
  useEffect(() => {
    const handleNavigationChange = () => {
      const match = resolveRoute(window.location.pathname, window.location.hash);
      setCurrentRoute({ page: match.page, hash: match.hash });
    };

    window.addEventListener('popstate', handleNavigationChange);
    window.addEventListener('hashchange', handleNavigationChange);
    return () => {
      window.removeEventListener('popstate', handleNavigationChange);
      window.removeEventListener('hashchange', handleNavigationChange);
    };
  }, []);

  // Update URL and browser title on navigation
  const navigateTo = (page: PageRoute, hash?: string, notes?: string) => {
    if (page === 'contact' && notes) {
      setContactInitialNotes(notes);
    }

    if (page === 'board-pack') {
      setIsBoardPackModalOpen(true);
      return;
    }

    const path = getPathForPage(page);
    const fullPath = hash ? `${path}#${hash}` : path;
    
    // Push state without page reload
    if (window.location.pathname !== path || window.location.hash !== (hash ? `#${hash}` : '')) {
      window.history.pushState(null, '', fullPath);
    }

    setCurrentRoute({ page, hash });
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Update document title for SEO & UX
    const titleMap: Record<PageRoute, string> = {
      'home': 'Onix Data Centres | Tier IV Colocation & Interconnection in Accra & Dakar',
      'banks-fintech': 'Banks & Fintech Colocation | Onix Data Centres Accra',
      'networks-content': 'Networks & Content Interconnection | Onix Meet-Me Room Accra',
      'enterprise': 'Enterprise & Public Sector Colocation | Onix Data Centres',
      'moving-to-onix': 'How Moving to Onix Works | Migration Plan & Engineering',
      'solutions': 'Colocation, Interconnection & Remote Hands | Onix Solutions',
      'the-facility': 'Inside the Tier IV Facility in Accra | Onix Data Centres',
      'certification': 'Uptime Institute Tier IV & ISO Certifications | Onix Proof',
      'sustainability': '640 kW Solar Farm & Zero Municipal Water | Onix Sustainability',
      'about': 'Ghanaian & African Owned and Operated | About Onix Data Centres',
      'insights': 'Insights & Incident Telemetry | Onix Engineering Reports',
      'contact': 'Talk to an Engineer | Onix Data Centres Accra & Dakar',
      'book-a-tour': 'Book a Guided Facility Tour | Onix Accra or Live Video',
      'board-pack': 'Executive Board Pack Download | Onix Data Centres',
      'fr-senegal': 'Colocation Station d\'atterrissement 2Africa Dakar | Onix Sénégal',
    };

    document.title = titleMap[page] || 'Onix Data Centres';
  };

  const renderCurrentPage = () => {
    switch (currentRoute.page) {
      case 'home':
        return (
          <HomePage
            onNavigate={navigateTo}
            onOpenTourModal={() => setIsTourModalOpen(true)}
            onOpenBoardPackModal={() => setIsBoardPackModalOpen(true)}
            onOpenOutageDiary={() => setIsOutageDiaryOpen(true)}
          />
        );

      case 'banks-fintech':
        return (
          <BuyerPage
            category="banks-fintech"
            onNavigate={navigateTo}
            onOpenTourModal={() => setIsTourModalOpen(true)}
            onOpenBoardPackModal={() => setIsBoardPackModalOpen(true)}
          />
        );

      case 'networks-content':
        return (
          <BuyerPage
            category="networks-content"
            onNavigate={navigateTo}
            onOpenTourModal={() => setIsTourModalOpen(true)}
            onOpenBoardPackModal={() => setIsBoardPackModalOpen(true)}
          />
        );

      case 'enterprise':
        return (
          <BuyerPage
            category="enterprise"
            onNavigate={navigateTo}
            onOpenTourModal={() => setIsTourModalOpen(true)}
            onOpenBoardPackModal={() => setIsBoardPackModalOpen(true)}
          />
        );

      case 'moving-to-onix':
        return (
          <BuyerPage
            category="moving-to-onix"
            onNavigate={navigateTo}
            onOpenTourModal={() => setIsTourModalOpen(true)}
            onOpenBoardPackModal={() => setIsBoardPackModalOpen(true)}
          />
        );

      case 'solutions':
        return (
          <SolutionsPage
            onNavigate={navigateTo}
            onOpenTourModal={() => setIsTourModalOpen(true)}
            onOpenBoardPackModal={() => setIsBoardPackModalOpen(true)}
            targetHash={currentRoute.hash}
          />
        );

      case 'the-facility':
        return (
          <TheFacilityPage
            onNavigate={navigateTo}
            onOpenTourModal={() => setIsTourModalOpen(true)}
            onOpenBoardPackModal={() => setIsBoardPackModalOpen(true)}
            onOpenOutageDiary={() => setIsOutageDiaryOpen(true)}
          />
        );

      case 'certification':
        return (
          <CertificationPage
            onNavigate={navigateTo}
            onOpenTourModal={() => setIsTourModalOpen(true)}
            onOpenBoardPackModal={() => setIsBoardPackModalOpen(true)}
          />
        );

      case 'sustainability':
        return (
          <SustainabilityPage
            onNavigate={navigateTo}
            onOpenTourModal={() => setIsTourModalOpen(true)}
            onOpenBoardPackModal={() => setIsBoardPackModalOpen(true)}
          />
        );

      case 'about':
        return (
          <AboutPage
            onNavigate={navigateTo}
            onOpenTourModal={() => setIsTourModalOpen(true)}
            onOpenBoardPackModal={() => setIsBoardPackModalOpen(true)}
          />
        );

      case 'insights':
        return (
          <InsightsPage
            onNavigate={navigateTo}
            onOpenTourModal={() => setIsTourModalOpen(true)}
            onOpenBoardPackModal={() => setIsBoardPackModalOpen(true)}
            onOpenOutageDiary={() => setIsOutageDiaryOpen(true)}
          />
        );

      case 'contact':
        return (
          <ContactPage
            initialNotes={contactInitialNotes}
            onNavigate={navigateTo}
            onOpenTourModal={() => setIsTourModalOpen(true)}
          />
        );

      case 'book-a-tour':
        return <BookATourPage onNavigate={navigateTo} />;

      case 'fr-senegal':
        return (
          <SenegalPage
            onNavigate={navigateTo}
            onOpenTourModal={() => setIsTourModalOpen(true)}
          />
        );

      default:
        return (
          <HomePage
            onNavigate={navigateTo}
            onOpenTourModal={() => setIsTourModalOpen(true)}
            onOpenBoardPackModal={() => setIsBoardPackModalOpen(true)}
            onOpenOutageDiary={() => setIsOutageDiaryOpen(true)}
          />
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAFA] text-[#151515] font-['Source_Sans_3',sans-serif] selection:bg-[#B12D24] selection:text-white">
      {/* Scroll Progress Indicator Bar at the very top of viewport */}
      <ScrollProgressBar />

      {/* Top Header */}
      <Header
        currentPage={currentRoute.page}
        onNavigate={navigateTo}
        onOpenTourModal={() => setIsTourModalOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1 pt-20 sm:pt-24 pb-16 lg:pb-0">
        {renderCurrentPage()}
      </main>

      {/* Footer */}
      <Footer
        onNavigate={navigateTo}
        onOpenCookieSettings={() => setIsCookieSettingsOpen(true)}
      />

      {/* Sticky Mobile Bar with Tour and WhatsApp */}
      <StickyMobileBar
        onOpenTourModal={() => setIsTourModalOpen(true)}
      />

      {/* Global Interactive Modals */}
      <TourBookingModal
        isOpen={isTourModalOpen}
        onClose={() => setIsTourModalOpen(false)}
      />

      <BoardPackModal
        isOpen={isBoardPackModalOpen}
        onClose={() => setIsBoardPackModalOpen(false)}
      />

      <OutageDiaryModal
        isOpen={isOutageDiaryOpen}
        onClose={() => setIsOutageDiaryOpen(false)}
        onOpenTourModal={() => {
          setIsOutageDiaryOpen(false);
          setIsTourModalOpen(true);
        }}
      />

      {/* Cookie Consent Banner compliant with Ghana Act 843 & Senegal Law */}
      <CookieConsent
        forceOpen={isCookieSettingsOpen}
        onCloseSettings={() => setIsCookieSettingsOpen(false)}
      />
    </div>
  );
}
