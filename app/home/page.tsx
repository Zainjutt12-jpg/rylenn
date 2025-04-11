'use client';
import NewArrivals from "../newarrival/page";
import Collections from "../collections/page";
import Categories from "../categories/page";
import { useEffect, useRef, useState } from 'react';


export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [isIOS, setIsIOS] = useState(false); // ← track in state

  // Detect iOS on client
  useEffect(() => {
    const userAgent = typeof navigator !== 'undefined' ? navigator.userAgent : '';
    const iOS = /iPad|iPhone|iPod/.test(userAgent);
    setIsIOS(iOS);
  }, []);

  const attemptPlay = () => {
    if (videoRef.current) {
      videoRef.current.play()
        .then(() => {
          setHasInteracted(true);
        })
        .catch(error => {
          console.log('Playback failed:', error);
        });
    }
  };

  useEffect(() => {
    if (!isIOS) {
      attemptPlay();
    }
  }, [isIOS]);

  useEffect(() => {
    if (!isIOS || hasInteracted) return;

    const handleInteraction = () => {
      attemptPlay();
      setHasInteracted(true);
      document.removeEventListener('click', handleInteraction);
      document.removeEventListener('touchstart', handleInteraction);
    };

    document.addEventListener('click', handleInteraction, { once: true });
    document.addEventListener('touchstart', handleInteraction, { once: true });

    return () => {
      document.removeEventListener('click', handleInteraction);
      document.removeEventListener('touchstart', handleInteraction);
    };
  }, [isIOS, hasInteracted]);

  return (
    <div className="overflow-x-hidden">
      <div className="md:h-[80vh] h-[40vh] w-full flex justify-center items-start md:items-center">
        <video
          ref={videoRef}
          src="/ryllen.mp4"
          autoPlay={!isIOS}
          loop
          muted
          playsInline
          controls={false}
          webkit-playsinline="true"
          x-webkit-airplay="allow"
          className="w-full min-w-full h-full object-contain md:object-cover object-center [&::-webkit-media-controls]:hidden"
          preload="metadata"
        />

        {isIOS && !hasInteracted && (
          <div 
            className="absolute inset-0 flex items-center justify-center bg-black/20"
            onClick={attemptPlay}
          >
            <button className="p-4 rounded-full bg-white/80">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M8 5V19L19 12L8 5Z" fill="currentColor"/>
              </svg>
            </button>
          </div>
        )}
      </div>

      {/* New Arrivals */}
      <NewArrivals />
      {/* Collections */}
      <Collections />
      {/* Categories */}
      <Categories />
    </div>
  );
}
