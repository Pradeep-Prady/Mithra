import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllSubCategory } from "../../../actions/subCategoryActions";
import { Link } from "react-router-dom";
import Loading from "../../../components/user/Loading";

export default function SubCategories({ id }) {
  const dispatch = useDispatch();

  const { subCategories, loading } = useSelector(
    (state) => state.subCategoryState
  );
  useEffect(() => {
    dispatch(getAllSubCategory(id));
  }, [dispatch, id]);

  return (
    <>
      <h2 className="text-[22px] font-semibold">Sub Categories</h2>

      {loading ? (
        <>
          <Loading />
        </>
      ) : (
        <>
          <div className="w-full grid grid-cols-4 gap-5">
            {subCategories &&
              subCategories.map((item) => (
                <div
                  className="my-5 select-none bg-myblue  py-3 rounded-md text-white cursor-pointer text-center"
                  key={item._id}
                >
                  <p className=" text-[20px] ">{item.name} </p>
                  <Link
                    to={`/admin/categories/${item._id}/sub`}
                    className="mt-3 hover:underline"
                  >
                    view details
                  </Link>
                </div>
              ))}
          </div>
        </>
      )}
    </>
  );
}
