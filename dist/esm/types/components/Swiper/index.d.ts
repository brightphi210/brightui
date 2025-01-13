import React from 'react';
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
declare const Swiper: React.FC<SwiperProps>;
export default Swiper;
