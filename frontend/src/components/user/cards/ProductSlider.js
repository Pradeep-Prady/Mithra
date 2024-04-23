import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function ProductSlider({ images }) {
  return (
    <div className="w-full h-[500px]  px-5 sm:px-10 md:px-32 overflow-hidden">
      <Swiper
        className="h-full w-auto"
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={true}
        loop={true}
        modules={[Autoplay, Pagination, Navigation]}
      >
        {images?.map((imageSrc, index) => (
          <SwiperSlide key={index}>
            <img
              loading="lazy"
              className="w-full h-full rounded-md"
              src={imageSrc.image}
              alt={`SwiperSlide ${index + 1}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
