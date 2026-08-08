import { useRef, useState, useEffect } from 'react';
import { Building2, Home, Construction, Droplets, Wrench, Layers, ChevronLeft, ChevronRight } from 'lucide-react';

const services = [
  {
    icon: Building2,
    title: 'Basement Waterproofing',
    description: 'EPDM, PVC, HDPE membranes, Polyurea/Polyurethane coatings, and Box type waterproofing systems',
    link: '/services/basement-waterproofing'
  },
  {
    icon: Home,
    title: 'Terrace Waterproofing',
    description: 'Podium, roof, and thermal insulation systems for complete terrace protection',
    link: '/services/terrace-waterproofing'
  },
  {
    icon: Construction,
    title: 'Infrastructure Waterproofing',
    description: 'Bridges, tunnels, metro, and swimming pool waterproofing solutions',
    link: '/services/infrastructure-waterproofing'
  },
  {
    icon: Droplets,
    title: 'Grouting Services',
    description: 'Polyurethane, Acrylic, Polyacrylate, Epoxy, and Cementitious grouting',
    link: '/services/grouting'
  },
  {
    icon: Wrench,
    title: 'Structural Repair',
    description: 'RCC jacketing, FRP wrapping, Steel bonding, and Retrofitting solutions',
    link: '/services/structural-repair'
  },
  {
    icon: Layers,
    title: 'Industrial Flooring',
    description: 'Epoxy and PU flooring for pharmaceutical and industrial applications',
    link: '/services/industrial-flooring'
  }
];

export default function ServicesSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const checkScroll = () => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const { scrollLeft, scrollWidth, clientWidth } = container;
    setShowLeftArrow(scrollLeft > 10);
    setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    checkScroll();
    container.addEventListener('scroll', checkScroll);
    window.addEventListener('resize', checkScroll);

    return () => {
      container.removeEventListener('scroll', checkScroll);
      window.removeEventListener('resize', checkScroll);
    };
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const scrollAmount = 350;
    const newScrollLeft = direction === 'left'
      ? container.scrollLeft - scrollAmount
      : container.scrollLeft + scrollAmount;

    container.scrollTo({
      left: newScrollLeft,
      behavior: 'smooth'
    });
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive waterproofing and structural repair solutions for all types of construction projects
          </p>
        </div>

        <div className="relative -mx-4 px-4">
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          {showLeftArrow && (
            <button
              onClick={() => scroll('left')}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 transition border border-gray-200"
              aria-label="Scroll left"
            >
              <ChevronLeft size={24} className="text-gray-700" />
            </button>
          )}

          {showRightArrow && (
            <button
              onClick={() => scroll('right')}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 transition border border-gray-200"
              aria-label="Scroll right"
            >
              <ChevronRight size={24} className="text-gray-700" />
            </button>
          )}

          <div
            ref={scrollContainerRef}
            className="overflow-x-auto scrollbar-hide"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch'
            }}
          >
            <div
              className="flex gap-6 pb-4"
              style={{
                scrollSnapType: 'x mandatory',
                width: 'max-content'
              }}
            >
              {services.map((service, index) => (
                <a
                  key={index}
                  href={service.link}
                  className="group flex-shrink-0 p-8 bg-gray-50 rounded-lg hover:bg-blue-50 transition duration-300 hover:shadow-lg border border-gray-200"
                  style={{
                    width: '320px',
                    scrollSnapAlign: 'start',
                    minHeight: '280px'
                  }}
                >
                  <div className="flex items-start gap-3 mb-4">
                    <service.icon size={20} className="text-gray-500 flex-shrink-0 mt-1" strokeWidth={1.5} />
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-900 transition">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <div className="text-blue-900 font-semibold group-hover:translate-x-2 transition inline-block">
                    Learn More →
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
