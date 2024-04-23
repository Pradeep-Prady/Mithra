import React from "react";
import { Link } from "react-router-dom";

export default function ProductCard({ data }) {
  return (
    <div className=" relative">
      
      <div className="w-full relative flex items-center justify-center h-[350px] rounded-lg overflow-hidden">
        <img
          className="h-full rounded-2xl w-auto"
          alt={data?.name}
          src={data?.images[0]?.image}
        />
      </div>

      <div className="w-full absolute bottom-0  my-1  flex items-center justify-center">
        <Link
          to={`/products/${data._id}/details`}
          className="bg-[#ffc0cb] hover:bg-myrose hover:scale-110 ease-in-out duration-500 hover:text-white cursor-pointer font-medium px-5 w-6/12 text-center py-2.5"
        >
          {data.name} <i className="fa-solid fa-arrow-right ms-3"></i>
        </Link>
      </div>
    </div>
  );
}
