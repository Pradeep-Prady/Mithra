import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategory } from "../../../actions/categoryActions";
import { Link } from "react-router-dom";
import Loading from "./../../../components/user/Loading";

export default function Categories() {
  const dispatch = useDispatch();

  const { categories, loading } = useSelector((state) => state.categoryState);

  useEffect(() => {
    dispatch(getAllCategory());
  }, [dispatch]);

  return (
    <div className="w-full h-auto overflow-hidden">
      <div className="w-full flex items-center ">
        <h2 className="text-2xl text-black font-medium my-5">Categories</h2>
      </div>
      <div className="w-full flex   justify-end ">
        <div className="mt-6 mb-3 select-none cursor-pointer">
          <Link
            to="/admin/categories/create"
            className="bg-myblue text-white px-5 rounded-sm py-2"
          >
            Create New{" "}
          </Link>
        </div>
      </div>

      {loading ? (
        <>
          <Loading />
        </>
      ) : (
        <div className="w-full h-full grid grid-cols-1  sm:grid-cols-2 md:grid-cols-4 gap-5">
          {categories &&
            categories.map((item) => (
              <Link
                to={`/admin/categories/${item._id}`}
                key={item._id}
                className="my-5 flex-shrink-0 select-none bg-myblue  py-3 rounded-md text-white cursor-pointer text-center"
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
      )}

      {/* </div> */}
    </div>
  );
}
