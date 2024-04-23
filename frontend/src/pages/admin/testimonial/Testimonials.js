import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllTestimonial } from "../../../actions/testimonialActions";

export default function Testimonials() {
  const dispatch = useDispatch();

  const { testimonials } = useSelector((state) => state.testimonialState);

  useEffect(() => {
    dispatch(getAllTestimonial());
  }, [dispatch]);

  return (
    <>
      <div className="w-full flex items-center ">
        <h2 className="text-2xl text-black font-medium my-5">Testimonials</h2>
      </div>
      <div className="w-full flex   justify-end ">
        <div className="mt-6 mb-3 select-none cursor-pointer">
          <Link
            to="/admin/testimonial/create"
            className="bg-myblue text-white px-5 rounded-sm py-2"
          >
            Create New{" "}
          </Link>
        </div>
      </div>

      <div className="w-full grid grid-cols-4 gap-5">
        {testimonials &&
          testimonials.map((item) => (
            <Link
              to={`/admin/testimonial/${item._id}`}
              key={item._id}
              className="my-5 select-none bg-myblue  py-3 rounded-md text-white cursor-pointer text-center"
            >
              <div className="w-full h-[200px] flex items-center justify-center">
                <img
                  className="h-4/6 rounded-md"
                  alt="category"
                  src={item?.image}
                />
              </div>
              <p className=" text-[20px] ">{item.name} </p>
              {/* <p className="">20 Items</p> */}
              <p className="mt-3 hover:underline">view details</p>
            </Link>
          ))}
      </div>
    </>
  );
}
