"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import React from 'react';

export default function CoverflowCarousel({
  items
}: {
  items: React.ReactNode[]
}) {
  return (
    <div className="w-full relative overflow-visible py-12">
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 30,
          stretch: 0,
          depth: 150,
          modifier: 1,
          slideShadows: true,
        }}
        navigation={true}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Navigation, Pagination, Autoplay]}
        className="w-full !pb-16"
      >
        {items.map((child, i) => (
          <SwiperSlide key={i} className="!w-[800px] !max-w-[85vw] flex justify-center">
            {child}
          </SwiperSlide>
        ))}
      </Swiper>
      <style dangerouslySetInnerHTML={{__html: `
        .swiper-button-next,
        .swiper-button-prev {
          color: #ff0000 !important;
          --swiper-navigation-size: 1.5rem;
          opacity: 0.7;
          transition: all 0.3s ease;
          text-shadow: 0 4px 20px rgba(0,0,0,0.5);
        }
        .swiper-button-next:hover,
        .swiper-button-prev:hover {
          opacity: 1;
          transform: scale(1.1);
        }
        @media (min-width: 768px) {
          .swiper-button-next,
          .swiper-button-prev {
            --swiper-navigation-size: 3rem;
          }
        }
        @media (min-width: 1024px) {
          .swiper-button-next { right: 12% !important; }
          .swiper-button-prev { left: 12% !important; }
        }
        .swiper-pagination-bullet {
          background-color: #ffffff !important;
          opacity: 0.5 !important;
          width: 10px !important;
          height: 10px !important;
          margin: 0 6px !important;
        }
        .swiper-pagination-bullet-active {
          background-color: #ff0000 !important;
          opacity: 1 !important;
        }
      `}} />
    </div>
  );
}
