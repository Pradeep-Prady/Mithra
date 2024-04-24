import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTestimonial } from "../../../actions/testimonialActions";

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
      <div className=" w-full scroll overflow-x-scroll h-full flex  px-5 sm:px-10 md:px-32   grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 ">
        {testimonials?.map((testimonial) => (
          <div className="card w-[350px] flex-shrink-0 p-3 text-center px-4 rounded-xl">
            <div className="w-full flex items-center justify-center">
              <div className="h-[100px] w-[100px] rounded-full overflow-hidden flex justify-center my-5 items-center">
                <img
                  className="object-cover  w-full"
                  src={testimonial?.image}
                  alt="testimonialImg"
                />
              </div>
            </div>

            <div className="user-content">
              <p>{testimonial?.review}</p>
            </div>

            <div className="ratings my-3">
              <h5 className="mb-0">{testimonial?.name}</h5>
              <span className="fw-light">-{testimonial?.role}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
