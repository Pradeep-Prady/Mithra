import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getDashboard } from "./../../actions/authActions";

export default function Dashboard() {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { productsCount, subCategoryCount, categoryCount } = useSelector(
    (state) => state.authState
  );

  useEffect(() => {
    dispatch(getDashboard());
  }, [dispatch]);
  return (
    <div>
      <h2 className="font-semibold text-[22px]  my-5">Dashboard</h2>

      <div className="w-full grid gap-10 sm:grid-cols-2 md:grid-cols-3">
        <div className="bg-myblue p-5 rounded-md  text-white ">
          <h2 className="text-[22px] font-semibold">Category </h2>
          <div className="flex flex-col items-center justify-center my-3">
            <p>Total Available</p>
            <p>{categoryCount}</p>
          </div>
          <div
            className="w-full flex items-center
           justify-center text-[14px] "
          >
            <Link
              className="text-center hover:underline"
              to="/admin/categories"
            >
              View Details
            </Link>
          </div>
        </div>

        <div className="bg-myblue p-5 rounded-md  text-white ">
          <h2 className="text-[22px] font-semibold">Sub Category </h2>
          <div className="flex flex-col items-center justify-center my-3">
            <p>Total Available</p>
            <p>{subCategoryCount}</p>
          </div>
          <div
            className="w-full flex items-center
           justify-center text-[14px] "
          ></div>
        </div>

        <div className="bg-myblue p-5 rounded-md  text-white ">
          <h2 className="text-[22px] font-semibold">Products </h2>
          <div className="flex flex-col items-center justify-center my-3">
            <p>Total Available</p>
            <p>{productsCount}</p>
          </div>
          <div
            className="w-full flex items-center
           justify-center text-[14px] "
          ></div>
        </div>
      </div>
    </div>
  );
}
