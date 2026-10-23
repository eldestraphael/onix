import React, { useRef, useState, useEffect } from 'react';

type ValidElement = 'div' | 'section' | 'article' | 'li' | 'header' | 'footer' | 'span' | 'aside' | 'ul';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delayMs?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  staggerIndex?: number;
  as?: ValidElement;
  id?: string;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  className = '',
  delayMs = 0,
  direction = 'up',
  staggerIndex = 0,
  as: Component = 'div',
  id,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    // Detect mobile viewport (< 768px)
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile, { passive: true });

    // Check reduced motion preference
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

    const totalDelay = delayMs + staggerIndex * (window.innerWidth < 768 ? 60 : 100);

    // 20% viewport threshold with -50px margin
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (totalDelay > 0) {
            const timer = setTimeout(() => {
              setIsVisible(true);
            }, totalDelay);
            return () => clearTimeout(timer);
          } else {
            setIsVisible(true);
          }
          if (ref.current) {
            observer.unobserve(ref.current);
          }
        }
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      window.removeEventListener('resize', checkMobile);
      mediaQuery.removeEventListener('change', handleMotionChange);
      observer.disconnect();
    };
  }, [delayMs, staggerIndex]);

  // If reduced motion is requested, render without transforms
  if (reducedMotion) {
    return React.createElement(
      Component,
      { id, className },
      children
    );
  }

  // Mobile uses 350ms duration & 16px offset; Desktop uses 650ms duration & 30px offset
  const durationClass = isMobile ? 'duration-350 ease-out' : 'duration-650 ease-out';
  
  const getTransformClasses = () => {
    if (isVisible) {
      return 'opacity-100 translate-y-0 translate-x-0 scale-100';
    }
    switch (direction) {
      case 'up':
        return isMobile ? 'opacity-0 translate-y-4 scale-[0.99]' : 'opacity-0 translate-y-[30px] scale-[0.99]';
      case 'down':
        return isMobile ? 'opacity-0 -translate-y-4' : 'opacity-0 -translate-y-[30px]';
      case 'left':
        return isMobile ? 'opacity-0 translate-x-4' : 'opacity-0 translate-x-[30px]';
      case 'right':
        return isMobile ? 'opacity-0 -translate-x-4' : 'opacity-0 -translate-x-[30px]';
      case 'none':
      default:
        return 'opacity-0 scale-95';
    }
  };

  return React.createElement(
    Component,
    {
      id,
      ref,
      className: `transition-all transform will-change-[transform,opacity] ${durationClass} ${getTransformClasses()} ${className}`,
    },
    children
  );
};
