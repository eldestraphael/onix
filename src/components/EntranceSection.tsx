import React, { useRef, useState, useEffect } from 'react';

interface EntranceSectionProps {
  children: React.ReactNode;
  className?: string;
  delayMs?: number;
  id?: string;
}

export const EntranceSection: React.FC<EntranceSectionProps> = ({
  children,
  className = '',
  delayMs = 0,
  id,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile, { passive: true });

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);
    const handleMotionChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleMotionChange);

    if (mediaQuery.matches) {
      setIsVisible(true);
      return () => {
        window.removeEventListener('resize', checkMobile);
        mediaQuery.removeEventListener('change', handleMotionChange);
      };
    }

    // 20% viewport threshold requirement with -50px rootMargin
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (delayMs > 0) {
            const timer = setTimeout(() => setIsVisible(true), delayMs);
            return () => clearTimeout(timer);
          } else {
            setIsVisible(true);
          }
          if (ref.current) observer.unobserve(ref.current);
        }
      },
      { threshold: 0.2, rootMargin: '0px 0px -50px 0px' }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      window.removeEventListener('resize', checkMobile);
      mediaQuery.removeEventListener('change', handleMotionChange);
      observer.disconnect();
    };
  }, [delayMs]);

  if (reducedMotion) {
    return (
      <div id={id} className={className}>
        {children}
      </div>
    );
  }

  // Mobile: 350ms duration, 16px offset; Desktop: 650ms duration, 30px offset
  const durationClass = isMobile ? 'duration-350 ease-out' : 'duration-650 ease-out';
  const transformClass = isVisible
    ? 'opacity-100 translate-y-0 scale-100'
    : isMobile
    ? 'opacity-0 translate-y-4 scale-[0.99]'
    : 'opacity-0 translate-y-[30px] scale-[0.99]';

  return (
    <div
      id={id}
      ref={ref}
      className={`transition-all transform will-change-[transform,opacity] ${durationClass} ${transformClass} ${className}`}
    >
      {children}
    </div>
  );
};
