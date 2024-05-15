import React, { useState } from "react";

export default function TestimonialCard({ testimonial }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      <div className="card w-[350px] flex-shrink-0 py-2 text-center px-4 rounded-md">
        <div className="w-full flex items-center justify-center">
          {/* <div className="h-[90px] w-[90px] rounded-full overflow-hidden flex justify-center my-3 items-center">
                <img
                  className="object-cover  w-full"
                  src={testimonial?.image}
                  alt="testimonialImg"
                />
              </div> */}
          <h5 className="my-3 font-medium">{testimonial?.name}</h5>
        </div>

        <div className="text-[14px] text-gray-500">
          <p className={isExpanded ? "" : "line-clamp-5"}>{testimonial?.review}</p>
        </div>
        <p className="cursor-pointer text-blue-500" onClick={toggleExpand}>
          {isExpanded ? "Show less" : "Read more..."}
        </p>

        <div className="ratings my-3">
          <span className="fw-light">-{testimonial?.role}</span>
        </div>
      </div>
    </div>
  );
}
  