import React, { useState, useEffect, useRef } from 'react';
import { PROOF_ITEMS } from '../data/siteContent';
import { formatMetricNumber } from '../utils/counter';

interface ProofStripProps {
  className?: string;
  onNavigateToCertification?: () => void;
}

export const ProofStrip: React.FC<ProofStripProps> = ({
  className = '',
  onNavigateToCertification,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const startTime = performance.now();
          const duration = 1000; // Exactly 1 second per user requirement
          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const currentProgress = Math.min(1, elapsed / duration);
            setProgress(currentProgress);
            if (currentProgress < 1) {
              requestAnimationFrame(animate);
            }
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.2, rootMargin: '0px 0px -50px 0px' }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section ref={containerRef} className={`bg-white pb-16 pt-2 ${className}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-4 sm:p-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8 justify-items-center items-center text-center">
          {PROOF_ITEMS.map((item, index) => {
            const displayNumber = hasAnimated ? formatMetricNumber(item.id, progress) : item.number;
            const isLastOnMobileOdd = index === PROOF_ITEMS.length - 1;

            return (
              <div
                key={item.id}
                className={`flex flex-col items-center justify-center text-center max-w-[200px] w-full ${
                  isLastOnMobileOdd ? 'col-span-2 sm:col-span-1' : ''
                }`}
              >
                <div className="text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900 font-['Montserrat',sans-serif] tabular-nums min-h-[44px] flex items-center justify-center text-center">
                  <span>{displayNumber}</span>
                </div>
                <div className="text-sm font-semibold text-slate-800 mt-1 text-center">
                  {item.label}
                </div>
                <div className="text-xs text-slate-500 mt-0.5 text-center flex items-center justify-center">
                  {item.id === 'tier4' && onNavigateToCertification ? (
                    <button
                      onClick={onNavigateToCertification}
                      className="hover:text-[#B12D24] text-center inline-flex items-center justify-center gap-1 underline underline-offset-2 decoration-slate-300 hover:decoration-[#B12D24] transition-colors cursor-pointer"
                    >
                      <span>{item.sourceLine}</span>
                      <span>→</span>
                    </button>
                  ) : (
                    <span>{item.sourceLine}</span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
