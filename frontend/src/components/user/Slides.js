import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import Banner1 from "../../assets/Banner01.png";
import Banner2 from "../../assets/Banner02.png";
import Banner3 from "../../assets/Banner03.png";

export default function Slides() {
  const images = [Banner1, Banner2, Banner3];

  return (
    <div className="w-full h-auto px-2 md:px-5 md:rounded-[60px] overflow-hidden">
      <Swiper
        className="h-full w-auto select-none overflow-hidden"
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          // disableOnInteraction: false,
        }}
        navigation={true}
        pagination={{ clickable: true }}
        loop={true}
        modules={[Autoplay, Pagination, Navigation]}
      >
        {images.map((imageSrc, index) => (
          <SwiperSlide key={index}>
            <img
              loading="lazy"
              className="w-full h-full overflow-hidden "
              src={imageSrc}
              alt={`SwiperSlide ${index + 1}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
