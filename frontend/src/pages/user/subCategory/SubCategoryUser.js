import React, { useRef, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getAllSubCategory } from "../../../actions/subCategoryActions";
import SubCategoryCard from "../../../components/user/cards/SubCategoryCard";
import Loading from "../../../components/user/Loading";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../../../components/user/cards/styles/swiper-custom.css";

import BedCover from "../../../assets/home/BedCover.jpg";
import ComfortandQuilt from "../../../assets/home/ComfortandQuilt.jpg";

import latexpillow from "../../../assets/home/latexpillow.jpg";
import illavampanjupillow from "../../../assets/home/illavampanjupillow.jpg";
import MemoryFoamPillow from "../../../assets/home/MemoryFoamPillow.jpg";
import Pillowcover from "../../../assets/home/Pillowcover.jpg";
import sofa from "../../../assets/home/sofa.png";

import vetiverPillow from "../../../assets/home/vetiverPillow.jpg";
import VetiverProducts from "../../../assets/home/VetiverProducts.png";

import cot from "../../../assets/home/cot.png";

import img1 from "../../../assets/home/1.jpg";
import img2 from "../../../assets/home/2.jpg";
import img4 from "../../../assets/home/4.jpg";

export default function SubCategoryUser() {
  const dispatch = useDispatch();
  const { id } = useParams();

  const { name, subCategories, loading } = useSelector(
    (state) => state.subCategoryState
  );

  useEffect(() => {
    window.scrollTo(0, 0);

    dispatch(getAllSubCategory(id));
  }, [dispatch, id]);

  console.log(name);

  const [banners, setBanners] = useState([]);

  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [slideIndex, setSlideIndex] = useState(0);

  const handleSlideChange = (swiper) => {
    setSlideIndex(swiper.realIndex);
  };

  useEffect(() => {
    if (name?.trim() === "Bedroom Accessories") {
      setBanners([
        BedCover,
        ComfortandQuilt,
        latexpillow,
        illavampanjupillow,
        MemoryFoamPillow,
        Pillowcover,
        vetiverPillow,
      ]);
    } else if (name?.trim() === "Furniture") {
      setBanners([cot]);
    } else if (name?.trim() === "Sofa") {
      console.log(name, "name");
      setBanners([sofa]);
    } else if (name?.trim() === "Mattress") {
      setBanners([img1, img2, img4]);
    } else {
     
      setBanners([]);
    }
  }, [name]);

  return (
    <>
      {loading ? (
        <>
          <Loading />
        </>
      ) : (
        <div className="px-5">
          {banners && banners?.length > 0 && (
            <div className="relative h-full w-auto select-none my-5 overflow-hidden">
              <Swiper
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
                navigation={{
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
                }}
                onSlideChange={handleSlideChange}
              >
                {banners?.map((imageSrc, index) => (
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
          )}

          <div>
            <h1 className="colorprimary text-center text-3xl my-5">
              Sub categories in {name}
            </h1>
            <p className="colorsecondary text-center my-2 ">
              We have entire range of exclusive products for comfortable sound
              sleep...
            </p>
          </div>

          <div className="grid grid-cols-1 my-10 sm:grid-cols-2 md:grid-cols-3 gap-16 px-5 sm:px-10 md:px-20">
            {subCategories &&
              subCategories?.length > 0 &&
              subCategories?.map((category) => (
                <SubCategoryCard category={category} key={category._id} />
              ))}
          </div>
        </div>
      )}
    </>
  );
}
