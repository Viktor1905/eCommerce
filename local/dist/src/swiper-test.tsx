// src/components/SimpleSwiper.tsx
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.css';

export default function SimpleSwiper() {
  SwiperCore.use([Navigation, Pagination]);
  return (
    <div className="w-full max-w-md mx-auto">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        pagination={{ clickable: true }}
        navigation
        breakpoints={{
          360: {
            slidesPerView: 1,
          },
          600: {
            slidesPerView: 2,
          },
          800: {
            slidesPerView: 3,
          },
        }}
        slidesPerView={1}
      >
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => (
          <SwiperSlide key={n}>
            <div className="bg-green-400 text-white p-6 rounded-lg text-center">Slide {n}</div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
