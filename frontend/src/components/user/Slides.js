// import React, { useRef } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination, Navigation } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
// import "./cards/styles/swiper-custom.css";

// import Banner1 from "../../assets/Banner01.jpg";
// import Banner2 from "../../assets/Banner02.jpg";
// import Banner3 from "../../assets/Banner03.jpg";
// import Banner4 from "../../assets/Banner04.jpg";

// export default function Slides() {
//   const images = [Banner1, Banner2, Banner3, Banner4];

//   return (
//     <div className="w-full h-auto px-2 md:px-5  overflow-hidden">
//       <MySwiperComponent images={images} />
//     </div>
//   );
// }

// const MySwiperComponent = ({ images }) => {
//   const prevRef = useRef(null);
//   const nextRef = useRef(null);

//   return (
//     <div className="relative h-full w-auto select-none overflow-hidden">
//       <Swiper
//         className="h-auto w-full md:rounded-[40px] my-5"
//         spaceBetween={30}
//         centeredSlides={true}
//         autoplay={{
//           delay: 5000,
//           disableOnInteraction: false,
//         }}
//         pagination={{ clickable: true }}
//         loop={true}
//         modules={[Autoplay, Pagination, Navigation]}
//         navigation={{
//           nextEl: ".  ",
//           prevEl: ".swiper-button-prev",
//         }}
//       >
//         {images.map((imageSrc, index) => (
//           <SwiperSlide key={index}>
//             <img
//               loading="lazy"
//               className="w-full h-full overflow-hidden"
//               src={imageSrc}
//               alt={`SwiperSlide ${index + 1}`}
//             />
//           </SwiperSlide>
//         ))}
//       </Swiper>
//       <div
//         ref={prevRef}
//         className="swiper-button-prev bg-gray-100 p-3 sm:p-4 md:p-7 text-[12px] rounded-full !text-myrose w-[10px] h-[1px] absolute left-0 z-10"
//       ></div>
//       <div
//         ref={nextRef}
//         className="swiper-button-next p-3 sm:p-4 md:p-7 !text-myrose absolute right-0 z-10"
//       ></div>
//     </div>
//   );
// };


// import React, { useRef } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination, Navigation } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
// import "./cards/styles/swiper-custom.css";
// import Banner1 from "../../assets/Banner01.jpg";
// import Banner2 from "../../assets/Banner02.jpg";
// import Banner3 from "../../assets/Banner03.jpg";
// import Banner4 from "../../assets/Banner04.jpg";

// export default function Slides() {
//   const images = [Banner1, Banner2, Banner3, Banner4];

//   return (
//     <div className="w-full h-auto px-2 md:px-5  overflow-hidden">
//       <MySwiperComponent images={images} />
//     </div>
//   );
// }

// const MySwiperComponent = ({ images }) => {
//   const prevRef = useRef(null);
//   const nextRef = useRef(null);

//   return (
//     <div className="relative h-full w-auto select-none my-5 overflow-hidden">
//       <Swiper
//         className="h-full w-auto md:rounded-[60px]"
//         spaceBetween={30}
//         centeredSlides={true}
//         autoplay={{
//           delay: 5000,
//           disableOnInteraction: false,
//         }}
//         pagination={{ clickable: true }}
//         loop={true}
//         modules={[Autoplay, Pagination, Navigation]}
//         navigation={{
//           nextEl: ".swiper-button-next",
//           prevEl: ".swiper-button-prev",
//         }}
//       >
//         {images.map((imageSrc, index) => (
//           <SwiperSlide key={index}>
//             <img
//               loading="lazy"
//               className="w-full h-full overflow-hidden"
//               src={imageSrc}
//               alt={`SwiperSlide ${index + 1}`}
//             />
//           </SwiperSlide>
//         ))}
//       </Swiper>
//       <div
//         ref={prevRef}
//         className="swiper-button-prev bg-gray-100 p-3 sm:p-4 md:p-7 text-[12px] rounded-full !text-myrose w-[10px] h-[1px] absolute left-0 z-10"
//       ></div>
//       <div
//         ref={nextRef}
//         className="swiper-button-next p-3 sm:p-4 md:p-7 !text-myrose absolute right-0 z-10"
//       ></div>
//     </div>
//   );
// };
import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./cards/styles/swiper-custom.css";

import VetiverProducts from "../../assets/home/VetiverProducts.png";
import MithraTamil from "../../assets/home/Mithra Tamil.jpg";
import img3 from "../../assets/home/3.jpg";
import Banner3 from "../../assets/Banner03.jpg";

export default function Slides() {
  const images = [MithraTamil, img3, Banner3, VetiverProducts];

  return (
    <div className="w-full h-auto px-2 md:px-5 overflow-hidden">
      <MySwiperComponent images={images} />
    </div>
  );
}

const MySwiperComponent = ({ images }) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiper, setSwiper] = useState(null);
  const [slideIndex, setSlideIndex] = useState(0); // Define slideIndex state here

  const handleSlideChange = (swiper) => {
    setSlideIndex(swiper.realIndex); // Update the slideIndex when slide changes
  };

  useEffect(() => {
    if (swiper && prevRef.current && nextRef.current) {
      swiper.params.navigation.prevEl = prevRef.current;
      swiper.params.navigation.nextEl = nextRef.current;
      swiper.navigation.init();
      swiper.navigation.update();
    }
  }, [swiper]);

  return (
    <div className="relative h-full w-auto select-none my-5 overflow-hidden">
      <Swiper
        onSwiper={setSwiper}
        className="h-full w-auto md:rounded-[60px]"
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        loop={true}
        modules={[Autoplay, Pagination, Navigation]}
        onSlideChange={handleSlideChange}
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
