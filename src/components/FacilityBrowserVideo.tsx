import React, { useState, useRef, useEffect } from 'react';
import { getAssetUrl } from '../utils/assets';
import { 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Maximize2
} from 'lucide-react';

interface FacilityBrowserVideoProps {
  onOpenTourModal?: () => void;
}

export const FacilityBrowserVideo: React.FC<FacilityBrowserVideoProps> = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Viewport Autoplay: automatically plays when entering the viewport
  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;
    if (!video || !container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play().then(() => {
              setIsPlaying(true);
            }).catch(() => {});
          } else {
            video.pause();
            setIsPlaying(false);
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(container);

    return () => {
      observer.disconnect();
    };
  }, []);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play().then(() => {
          setIsPlaying(true);
        }).catch(() => {});
      }
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleFullscreen = () => {
    if (containerRef.current) {
      if (!document.fullscreenElement) {
        containerRef.current.requestFullscreen().catch(() => {});
      } else {
        document.exitFullscreen().catch(() => {});
      }
    }
  };

  return (
    <div 
      ref={containerRef}
      className="relative w-full max-w-5xl mx-auto rounded-[32px] overflow-hidden bg-black group transition-all select-none"
    >
      {/* Pure video viewport without text overlays - click anywhere to toggle play/pause like YouTube */}
      <div 
        onClick={togglePlay}
        className="relative aspect-[16/9] w-full bg-black overflow-hidden cursor-pointer"
        role="button"
        tabIndex={0}
        aria-label={isPlaying ? 'Pause video' : 'Play video'}
        onKeyDown={(e) => {
          if (e.key === ' ' || e.key === 'Enter') {
            e.preventDefault();
            togglePlay();
          }
        }}
      >
        <video
          ref={videoRef}
          src={getAssetUrl('assets/aistudio/drone_footage_onix__conv2__155cf905.mp4')}
          autoPlay
          muted={isMuted}
          loop
          playsInline
          className="w-full h-full object-cover"
        />

        {/* YouTube-like subtle center play icon when paused */}
        {!isPlaying && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/25 pointer-events-none transition-opacity duration-200">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center text-white pl-1 border border-white/20 transition-transform transform scale-100">
              <Play className="w-8 h-8 sm:w-10 sm:h-10 text-white fill-white" />
            </div>
          </div>
        )}

        {/* Minimal Control Pill: Play/Pause, Mute, and Fullscreen button */}
        <div 
          onClick={(e) => e.stopPropagation()} 
          className="absolute bottom-5 right-5 sm:bottom-6 sm:right-6 z-20 flex items-center gap-1.5 bg-black/50 hover:bg-black/70 backdrop-blur-md px-2.5 py-1.5 rounded-full transition-colors border border-white/10"
        >
          {/* 1. Play / Pause Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              togglePlay();
            }}
            className="p-2 text-white/90 hover:text-white rounded-full hover:bg-white/10 transition-colors focus:outline-none"
            aria-label={isPlaying ? 'Pause video' : 'Play video'}
            title={isPlaying ? 'Pause' : 'Play'}
          >
            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
          </button>

          {/* 2. Mute / Unmute Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              toggleMute();
            }}
            className="p-2 text-white/90 hover:text-white rounded-full hover:bg-white/10 transition-colors focus:outline-none"
            aria-label={isMuted ? 'Unmute video' : 'Mute video'}
            title={isMuted ? 'Unmute' : 'Mute'}
          >
            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          </button>

          {/* 3. Full-screen Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleFullscreen();
            }}
            className="p-2 text-white/90 hover:text-white rounded-full hover:bg-white/10 transition-colors focus:outline-none"
            aria-label="Toggle fullscreen"
            title="Fullscreen"
          >
            <Maximize2 className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
