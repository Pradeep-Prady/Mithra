import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../cards/styles/swiper-custom.css"; // Assuming you have custom styles here

export default function ProductSlider({ images }) {
  return (
    <div className="w-full relative h-auto sm:h-[500px] flex items-center justify-center px-5 sm:px-10 md:px-32 overflow-hidden">
      <div className="h-full w-full relative sm:w-[60%]">
        <Swiper
          className="h-full w-full"
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          loop={true}
          modules={[Autoplay, Pagination, Navigation]}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
        >
          {images?.map((imageSrc, index) => (
            <SwiperSlide key={index}>
              <img
                loading="lazy"
                className="w-full h-full bg-cover rounded-md"
                src={imageSrc.image}
                alt={`SwiperSlide ${index + 1}`}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper-button-prev p-3 sm:p-4 md:p-5 absolute z-10"></div>
        <div className="swiper-button-next p-3 sm:p-4 md:p-5 absolute right-0 z-10"></div>
      </div>
    </div>
  );
}
