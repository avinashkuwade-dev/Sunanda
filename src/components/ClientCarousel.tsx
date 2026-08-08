import { useEffect, useRef, useState } from 'react';

interface Client {
  name: string;
  logo: string;
}

interface ClientCarouselProps {
  clients: Client[];
}

export default function ClientCarousel({ clients }: ClientCarouselProps) {
  const [isPaused, setIsPaused] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer || isPaused) return;

    let animationFrameId: number;
    let scrollPosition = 0;
    const scrollSpeed = isMobile ? 0.3 : 0.5;

    const scroll = () => {
      if (scrollContainer) {
        scrollPosition += scrollSpeed;

        const maxScroll = scrollContainer.scrollWidth / 2;
        if (scrollPosition >= maxScroll) {
          scrollPosition = 0;
        }

        scrollContainer.scrollLeft = scrollPosition;
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [isPaused, isMobile]);

  const duplicatedClients = [...clients, ...clients];

  return (
    <div className="relative overflow-hidden py-8">
      <div
        ref={scrollRef}
        className="flex gap-8 md:gap-12 overflow-x-auto scrollbar-hide"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
        style={{
          scrollBehavior: 'auto',
          WebkitOverflowScrolling: 'touch',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none'
        }}
      >
        {duplicatedClients.map((client, index) => {
          const needsBackground = client.name === 'Oberoi Realty' || client.name === 'Bhumi World';

          return (
            <div
              key={`${client.name}-${index}`}
              className="flex-shrink-0 flex flex-col items-center justify-center w-40 md:w-48 h-36 md:h-40 gap-3 md:gap-4"
            >
              <div className="flex items-center justify-center w-full h-20 md:h-24 px-3 md:px-4">
                {client.logo ? (
                  <div className={needsBackground ? "bg-white rounded-lg p-4 md:p-5 flex items-center justify-center w-full h-full shadow-sm border border-neutral-100" : "flex items-center justify-center w-full h-full"}>
                    <img
                      src={client.logo}
                      alt={`${client.name} logo`}
                      title={client.name}
                      className="max-w-full max-h-full object-contain"
                      loading="lazy"
                    />
                  </div>
                ) : (
                  <div className="flex items-center justify-center w-full h-full bg-white border-2 border-neutral-200 rounded-lg shadow-sm">
                    <span className="text-neutral-400 text-xs md:text-sm text-center px-2">
                      Logo
                    </span>
                  </div>
                )}
              </div>
              <p className="text-center font-medium text-neutral-800 text-sm md:text-base px-2">
                {client.name}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
