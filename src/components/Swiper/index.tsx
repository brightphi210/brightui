import React, { useState, useEffect, useCallback } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

export interface SwiperProps {
  slides: React.ReactNode[];
  autoplay?: boolean;
  autoplayInterval?: number;
  showNavigation?: boolean;
  showPagination?: boolean;
  className?: string;
  slidesPerView?: {
    mobile?: number;
    tablet?: number;
    laptop?: number;
    desktop?: number;
  };
}

const useResponsiveSlidesPerView = (
  slidesPerView: SwiperProps['slidesPerView']
): number => {
  const [currentSlidesPerView, setCurrentSlidesPerView] = useState(1);

  useEffect(() => {
    const updateSlidesPerView = () => {
      const width = window.innerWidth;
      if (width >= 1280 && slidesPerView?.desktop) {
        setCurrentSlidesPerView(slidesPerView.desktop);
      } else if (width >= 1024 && slidesPerView?.laptop) {
        setCurrentSlidesPerView(slidesPerView.laptop);
      } else if (width >= 768 && slidesPerView?.tablet) {
        setCurrentSlidesPerView(slidesPerView.tablet);
      } else if (slidesPerView?.mobile) {
        setCurrentSlidesPerView(slidesPerView.mobile);
      } else {
        setCurrentSlidesPerView(1);
      }
    };

    updateSlidesPerView();
    window.addEventListener('resize', updateSlidesPerView);
    return () => window.removeEventListener('resize', updateSlidesPerView);
  }, [slidesPerView]);

  return currentSlidesPerView;
};

const Swiper: React.FC<SwiperProps> = ({
  slides,
  autoplay = false,
  autoplayInterval = 5000,
  showNavigation = true,
  showPagination = true,
  className = '',
  slidesPerView = { mobile: 1, tablet: 2, laptop: 3, desktop: 4 },
}) => {
  const [currentGroup, setCurrentGroup] = useState(0);
  const currentSlidesPerView = useResponsiveSlidesPerView(slidesPerView);

  const totalGroups = Math.ceil(slides.length / currentSlidesPerView);

  const nextGroup = useCallback(() => {
    setCurrentGroup((prev) => (prev + 1) % totalGroups);
  }, [totalGroups]);

  const prevGroup = useCallback(() => {
    setCurrentGroup((prev) => (prev - 1 + totalGroups) % totalGroups);
  }, [totalGroups]);

  useEffect(()=> {
    if (autoplay) {
      const interval = setInterval(nextGroup, autoplayInterval);
      return () => clearInterval(interval);
    }
  }, [autoplay, autoplayInterval, nextGroup]);

  const groupedSlides = [];
  for (let i = 0; i < slides.length; i += currentSlidesPerView) {
    groupedSlides.push(slides.slice(i, i + currentSlidesPerView));
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div
        className="flex transition-transform duration-300 ease-in-out"
        style={{
          transform: `translateX(-${currentGroup * 100}%)`,
        }}
      >
        {groupedSlides.map((group, groupIndex) => (
          <div key={groupIndex} className="w-full flex-shrink-0 flex">
            {group.map((slide, slideIndex) => (
              <div
                key={slideIndex}
                className="flex-grow"
                style={{ flexBasis: `${100 / currentSlidesPerView}%` }}
              >
                {slide}
              </div>
            ))}
          </div>
        ))}
      </div>

      {showNavigation && (
        <>
          <button
            onClick={prevGroup}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/80 text-gray-800 p-2 rounded-full shadow-md hover:bg-white transition-colors duration-200"
            aria-label="Previous slide group"
          >
            <FiChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextGroup}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/80 text-gray-800 p-2 rounded-full shadow-md hover:bg-white transition-colors duration-200"
            aria-label="Next slide group"
          >
            <FiChevronRight className="w-6 h-6" />
          </button>
        </>
      )}

      {showPagination && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {groupedSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentGroup(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                index === currentGroup ? 'bg-white' : 'bg-white/50'
              }`}
              aria-label={`Go to slide group ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Swiper;