import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    title: 'Professional Waterproofing Contractors in Mumbai',
    subtitle: 'When Quality & Consistency Matters - We are your Waterproofers!',
    description: '13+ Years | 150+ Projects | 50 Lakh Sq Ft | 150+ Workforce',
    cta: 'Get Free Quote',
    ctaLink: '/contact',
    image: '/1716092828-lodha-amara-thane-1.webp',
    isGradient: false,
    overlayType: 'brand-blue-gradient',
    backgroundPosition: 'right center',
    caption: 'Lodha Amara – Premium Residential Development'
  },
  {
    title: 'Expert Basement Waterproofing Solutions',
    subtitle: 'Designed for hydrostatic pressure and long-term structural durability',
    description: 'EPDM • PVC • HDPE membrane systems',
    cta: 'View Services',
    ctaLink: '/services',
    image: '/basement_wp.jpg',
    isGradient: false,
    overlayColor: '#0F2A44',
    overlayOpacity: 0.70,
    backgroundPosition: 'center 40%'
  },
  {
    title: 'Infrastructure Waterproofing Specialists',
    subtitle: 'Metro corridors, flyovers, tunnels, bridges, and coastal infrastructure',
    description: 'Execution experience on L&T Metro Line 3 and major infrastructure projects',
    cta: 'View Infrastructure Projects',
    ctaLink: '/projects',
    image: '/the-invisible-city-indias-urban-infrastructure-projects-of-2025-that-deserve-attention_9.jpg',
    isGradient: false,
    overlayColor: '#0B2A4A',
    overlayOpacity: 0.72,
    backgroundPosition: 'center 55%'
  },
  {
    title: 'Industrial & Pharma Flooring Experts',
    subtitle: 'Clean Room Epoxy & PU Flooring',
    description: 'Serving USV, Abbott, Cipla and leading pharmaceutical companies',
    cta: 'Learn More',
    ctaLink: '/segments/industrial-waterproofing',
    image: '/670d3f4a803f1161e161b331_industrial_floor_coatings_in_houston.png',
    isGradient: false,
    overlayType: 'dark-gradient',
    backgroundPosition: 'center center'
  }
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
          style={
            slide.isGradient
              ? { background: slide.image }
              : {
                  backgroundImage: `url(${slide.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: slide.backgroundPosition || 'center 40%',
                  backgroundRepeat: 'no-repeat'
                }
          }
        >
          {slide.overlayType === 'brand-blue-gradient' ? (
            <div
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(90deg, rgba(14, 42, 92, 0.85) 0%, rgba(14, 42, 92, 0.55) 100%)'
              }}
            />
          ) : slide.overlayType === 'dark-gradient' ? (
            <div
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(90deg, rgba(0, 0, 0, 0.55) 0%, rgba(0, 0, 0, 0.15) 100%)'
              }}
            />
          ) : slide.overlayColor ? (
            <div
              className="absolute inset-0"
              style={{
                background: `linear-gradient(105deg, ${slide.overlayColor}${Math.round((slide.overlayOpacity || 0.7) * 255).toString(16).padStart(2, '0')} 0%, ${slide.overlayColor}${Math.round(((slide.overlayOpacity || 0.7) - 0.08) * 255).toString(16).padStart(2, '0')} 100%)`
              }}
            />
          ) : (
            <div className="absolute inset-0 bg-black/40" />
          )}
          <div className="relative h-full container mx-auto px-4 lg:px-20 flex items-center">
            <div className="max-w-3xl text-white">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight" style={{ color: '#FFFFFF' }}>
                {slide.title}
              </h1>
              <h2 className="text-lg md:text-xl lg:text-2xl mb-3 md:mb-4 font-medium" style={{ color: 'rgba(255, 255, 255, 0.85)' }}>
                {slide.subtitle}
              </h2>
              {slide.description && (
                <p className="text-base md:text-lg lg:text-xl mb-6 md:mb-8" style={{ color: 'rgba(255, 255, 255, 0.78)' }}>
                  {slide.description}
                </p>
              )}
              <a
                href={slide.ctaLink}
                className="inline-block btn-primary px-8 py-4 text-lg rounded-md"
              >
                {slide.cta}
              </a>
            </div>
          </div>
          {slide.caption && (
            <div className="hidden lg:block absolute bottom-8 right-8 text-white text-sm" style={{ color: 'rgba(255, 255, 255, 0.70)' }}>
              {slide.caption}
            </div>
          )}
        </div>
      ))}

      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full backdrop-blur-sm transition"
      >
        <ChevronLeft size={32} />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full backdrop-blur-sm transition"
      >
        <ChevronRight size={32} />
      </button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition ${
              index === currentSlide ? 'bg-white w-8' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
