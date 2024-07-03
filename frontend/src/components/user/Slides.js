import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./cards/styles/swiper-custom.css";
import Banner1 from "../../assets/Banner01.png";
import Banner2 from "../../assets/Banner02.png";
import Banner3 from "../../assets/Banner03.png";
import Banner4 from "../../assets/Banner04.png";

export default function Slides() {
  const images = [Banner1, Banner2, Banner3, Banner4];

  return (
    <div className="w-full h-auto px-2 md:px-5 md:rounded-[60px] overflow-hidden">
      <MySwiperComponent images={images} />
    </div>
  );
}

const MySwiperComponent = ({ images }) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="relative h-full w-auto select-none overflow-hidden">
      <Swiper
        className="h-full w-auto"
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
        {images.map((imageSrc, index) => (
          <SwiperSlide key={index}>
            <img
              loading="lazy"
              className="w-full h-full overflow-hidden"
              src={imageSrc}
              alt={`SwiperSlide ${index + 1}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div
        ref={prevRef}
        className="swiper-button-prev bg-gray-100 p-3 sm:p-4 md:p-7 text-[12px] rounded-full !text-myrose w-[10px] h-[1px] absolute left-0 z-10"
      ></div>
      <div
        ref={nextRef}
        className="swiper-button-next p-3 sm:p-4 md:p-7 !text-myrose absolute right-0 z-10"
      ></div>
    </div>
  );
};
