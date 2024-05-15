import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTestimonial } from "../../../actions/testimonialActions";
import TestimonialCard from "./TestimonialCard";

export default function Testimonial() {
  const dispatch = useDispatch();

  const { testimonials } = useSelector((state) => state.testimonialState);

  useEffect(() => {
    dispatch(getAllTestimonial());
  }, [dispatch]);

  return (
    <div>
      <h2 className="colorprimary text-center my-10 heading-size">
        Testimonials
      </h2>

      <div className=" px-5 sm:px-10 md:px-32">
        <div className=" w-full scroll  overflow-x-scroll h-full flex      grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 ">
          {testimonials?.map((testimonial) => (
            <TestimonialCard key={testimonial._id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </div>
  );
}
