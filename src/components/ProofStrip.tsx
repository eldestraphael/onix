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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-6 sm:p-8 grid grid-cols-2 md:grid-cols-5 gap-6 lg:gap-8">
          {PROOF_ITEMS.map((item) => {
            const displayNumber = hasAnimated ? formatMetricNumber(item.id, progress) : item.number;

            return (
              <div
                key={item.id}
                className="flex flex-col justify-center"
              >
                {/* Fallback hidden text ensures accessibility and SEO match real values */}
                <div className="text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900 font-['Montserrat',sans-serif] tabular-nums min-h-[44px] flex items-center">
                  <span>{displayNumber}</span>
                  <span className="sr-only">({item.number})</span>
                </div>
                <div className="text-sm font-semibold text-slate-800 mt-1">
                  {item.label}
                </div>
                <div className="text-xs text-slate-500 mt-0.5">
                  {item.id === 'tier4' && onNavigateToCertification ? (
                    <button
                      onClick={onNavigateToCertification}
                      className="hover:text-[#B12D24] text-left underline underline-offset-2 decoration-slate-300 hover:decoration-[#B12D24] transition-colors"
                    >
                      {item.sourceLine} →
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
