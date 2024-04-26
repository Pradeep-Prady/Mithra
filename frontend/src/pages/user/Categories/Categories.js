import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategory } from "../../../actions/categoryActions";
import CategoryCard from "../../../components/user/cards/CategoryCard";

import waterResImg from "../../../assets/waterresistant.png";
import RegulatesHeatImg from "../../../assets/regulateheats.png";
import HypoAllergenicImg from "../../../assets/allergen.png";
import BioDegradablecImg from "../../../assets/biological.png";
import CottonImg from "../../../assets/cotton.png";
import RecycleImg from "../../../assets/recycle.png";

export default function Categories() {
  const { categories } = useSelector((state) => state.categoryState);

  const dispatch = useDispatch();
 
  useEffect(() => {
    dispatch(getAllCategory());
  }, [dispatch]);

 

  const specs = [
    {
      name: "Water Resistant",
      img: waterResImg,
      des: "Won’t Absorb Sweat, devoid of ",
      des2: " Chemical odour",
    },

    {
      name: "Regulates Heat",
      img: RegulatesHeatImg,
      des: "Keep body cool in summer and",
      des2: "warm in winter",
    },
    {
      name: "Hypo Allergenic",
      img: HypoAllergenicImg,
      des: "Prevents allergic skin reaction, ",
      des2: "dust mites or fungus formation.",
    },

    {
      name: "Bio Degradable",
      img: BioDegradablecImg,
      des: "Naturally extract from tree ",
      des2: "Naturally extract from tree",
    },

    {
      name: "Recyclable",
      img: RecycleImg,
      des: "Won’t Absorb Sweat, devoid of",
      des2: "Chemical odour",
    },
    {
      name: "Pure Cotton",
      img: CottonImg,
      des: "Outer cover is pure cotton no ",
      des2: "polyester",
    },
  ];

  return (
    <div className="w-full  ">
      <div className="px-5 sm:px-10 md:px-20">
        <div className="my-10 ">
          <h2 className="text-myrose text-center my-10 heading-size">
            Complete your Sleep Suite
          </h2>
          <p className="colorsecondary text-center  text-[17px] ">
            We have entire range of exclusive products for comfortable sound
            sleep...
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16  sm:px-10">
          {categories &&
            categories?.length > 0 &&
            categories?.map((category) => (
              <CategoryCard category={category} key={category._id} />
            ))}
        </div>
      </div>

      <div className="container-fluid p-5 bg-[#f5f5f5] px-20 my-10">
        <h2 className="colorprimary text-center mb-5 mt-3 heading-size">
          Why Ilavam panju ?
        </h2>

        <div className="grid gird-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {specs?.map((spec) => (
            <div className="col-md-4 text-center my-7 flex flex-col items-center justify-center">
              <img src={spec?.img} width="100px" alt="" />
              <h5 className="colorprimary font-bold text-[20px] mt-3">
                {spec?.name}
              </h5>
              <p className="colorsecondary text-center lh-lg my-1 ">
                {spec?.des}
              </p>
              <p className="colorsecondary text-center lh-lg my-1">
                {spec?.des2}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
