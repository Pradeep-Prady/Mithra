import React from "react";
import Categories from "./Categories/Categories";
import Slides from "../../components/user/Slides";

import qualityImg from "../../assets/robbionimage.png";
import hyqiene from "../../assets/Hygiene.jpg";
import trust from "../../assets/trust.jpg";
import support from "../../assets/messagepng.png";

import Testimonial from "../../components/user/cards/Testimonial";
import Contact from "./Contact";
import Map from "../../components/user/Map";

export default function Home() {
  const assurance = [
    {
      name: "Supreme Quality",
      img: qualityImg,
    },
    {
      name: "Earned Trust",
      img: trust,
    },
    {
      name: "Hygiene",
      img: hyqiene,
    },
    {
      name: "Support on Call",
      img: support,
    },
  ];
  return (
    <div className="w-full  ">
      <Slides />
      <div className="w-full  md:px-40 grid sm:grid-cols-2 md:grid-cols-4 my-10">
        {assurance.map((item, i) => (
          <div className="flex items-center gap-5 my-3 justify-center" key={i}>
            <img alt={item.name} src={item.img} className="w-[45px]" />
            <h2 className="text-[18px] w-[200px] md:w-auto font-semibold text-myblue">
              {item.name}
            </h2>
          </div>
        ))}
      </div>

      <div className=" w-full px-5 sm:px-10 md:px-32 flex items-center justify-center mb-5 mt-5">
        <div>
          <div className="colorprimary text-center mb-4 heading-size">
            About Mithra Beds and Sofas
          </div>
          <p className="colorsecondary text-center leading-8 sm:leading-10 sm:text-[18px] ">
            Mitha association with Furniture needs no introduction. Mithra is
            the world’s largest manufacturer of moulded furniture & India’s
            favourite furniture brand with 50 stores & 3,000+ distributors. Our
            furniture has eternally been a part of Indian home’s interiors,
            knowingly or unknowingly taking space in the form of a simple
            plastic chair in your living room or an entire furniture set in your
            bedrooms or offices adding both emotion and charm to your sheen
            interiors.
          </p>
        </div>
      </div>

      <Categories />

      <Testimonial />

      <Contact />
      <Map />
    </div>
  );
}
