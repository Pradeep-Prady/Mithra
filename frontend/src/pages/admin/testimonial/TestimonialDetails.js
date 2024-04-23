import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  deleteTestimonial,
  getAllTestimonial,
  getTestimonial,
} from "../../../actions/testimonialActions";

export default function TestimonialDetails() {
  const { testimonial } = useSelector((state) => state.testimonialState);

  const dispatch = useDispatch();

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getTestimonial(id));

    return;
  }, [dispatch, id]);

  const deleteHandler = () => {
    if (window.confirm("Are you sure?")) {
      dispatch(deleteTestimonial(id));
      navigate("/admin/testimonial");
      dispatch(getAllTestimonial());
    }
  };

  return (
    <div className="w-full flex items-center justify-center h-full">
      <div className="w-11/12 sm:w-9/12 md:w-5/12 bg-white rounded-sm p-5  ">
        <div className=" h-[200px] w-full flex items-center justify-center">
          <img
            className="w- h-4/6 rounded-sm"
            alt={`${testimonial?.name}`}
            src={`${testimonial?.image}`}
          />
        </div>
        <div className="w-full h-full flex flex-col   justify-end ">
          <div className="">
            <h2 className="text-[22px]  text-center font-semibold">
              {testimonial?.name}
            </h2>
            <h2 className="text-[20px]  text-center font-medium">
              {testimonial?.role}
            </h2>
            <p className="text-center">{testimonial?.review}</p>
          </div>

          <div className="flex w-full items-center justify-between  gap-7 my-3">
            <p
              onClick={deleteHandler}
              className="bg-red-500 text-white px-5 flex items-center cursor-pointer select-none rounded-sm py-1.5"
            >
              <span className="material-symbols-outlined mr-2">delete</span>
              <span>Delete</span>
            </p>
            <Link
              to={`/admin/testimonial/${id}/edit`}
              className="bg-myblue text-white px-5 flex items-center cursor-pointer select-none rounded-sm py-1.5"
            >
              <span className="material-symbols-outlined mr-2">edit</span>{" "}
              <span>Edit</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
