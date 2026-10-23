import React, { useState, useEffect } from 'react';
import { Shield } from 'lucide-react';

interface CookieConsentProps {
  forceOpen?: boolean;
  onCloseSettings?: () => void;
}

export const CookieConsent: React.FC<CookieConsentProps> = ({
  forceOpen = false,
  onCloseSettings,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('onix_cookie_consent');
    if (!saved || forceOpen) {
      setIsVisible(true);
    }
  }, [forceOpen]);

  const handleChoice = (accepted: boolean) => {
    localStorage.setItem('onix_cookie_consent', accepted ? 'accepted' : 'rejected');
    setIsVisible(false);
    if (onCloseSettings) onCloseSettings();
  };

  if (!isVisible && !forceOpen) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6 bg-[#151515]/95 backdrop-blur-md text-white border-t border-slate-800 animate-in slide-in-from-bottom duration-200">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex items-start gap-3">
          <Shield className="w-5 h-5 text-[#B12D24] shrink-0 mt-0.5" />
          <div className="text-xs text-slate-300 leading-relaxed max-w-3xl">
            <span className="font-semibold text-white">Privacy & Cookie Preferences:</span>{' '}
            We use strictly necessary technical cookies to operate this website, and optional analytics to measure site traffic in accordance with Ghana&apos;s Data Protection Act, 2012 (Act 843) and Senegal Law No. 2008-12. We never sell your data or deploy third-party advertising cookies.
          </div>
        </div>

        {/* Equal Weight Buttons */}
        <div className="flex items-center gap-3 shrink-0 w-full sm:w-auto">
          <button
            onClick={() => handleChoice(false)}
            className="flex-1 sm:flex-none px-4 py-2 border border-slate-600 hover:border-slate-400 bg-white/5 hover:bg-white/10 rounded-lg text-xs font-semibold text-white transition-colors"
          >
            Reject Optional Cookies
          </button>
          <button
            onClick={() => handleChoice(true)}
            className="flex-1 sm:flex-none px-4 py-2 bg-[#B12D24] hover:bg-[#96221A] text-white rounded-lg text-xs font-semibold transition-colors"
          >
            Accept All Cookies
          </button>
        </div>
      </div>
    </div>
  );
};
