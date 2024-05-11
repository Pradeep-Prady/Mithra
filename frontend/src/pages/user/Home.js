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
            Mithra Enterprises, established in February 2018, has swiftly risen
            to become the best mattress manufacturer in Coimbatore, driven by
            their dream of providing natural, organic, quality, and healthy sleep
            solutions. As the top mattress shop in the city, Mithra specializes
            in crafting comfortable, supportive, and healthy mattresses using
            eco-friendly materials like ilavam panju (Kapok), latex, and coir.
            Their commitment to sustainability and environmentally-conscious
            practices resonates with consumers seeking bedding products that
            align with their values. Mithra's mattresses are a perfect blend of
            comfort, support, and environmental responsibility, catering to the
            growing demand for natural and organic sleep solutions in
            Coimbatore.
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
