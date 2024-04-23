import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getAllSubCategory } from "../../../actions/subCategoryActions";
import SubCategoryCard from "../../../components/user/cards/SubCategoryCard";
import Loading from "../../../components/user/Loading";

export default function SubCategoryUser() {
  const dispatch = useDispatch();
  const { id } = useParams();

  const { name, subCategories, loading } = useSelector(
    (state) => state.subCategoryState
  );

  useEffect(() => {
  window.scrollTo(0,0)

    dispatch(getAllSubCategory(id));
  }, [dispatch, id]);

  return (
    <>
      {loading ? (
        <>
          <Loading />
        </>
      ) : (
        <>
          <div>
            <h1  className="colorprimary text-center text-3xl mb-1">
              Sub categories in {name}
            </h1>
            <p  className="colorsecondary text-center my-2 ">
              We have entire range of exclusive products for comfortable sound
              sleep...
            </p>
          </div>

          <div className="grid grid-cols-1 my-10 sm:grid-cols-2 md:grid-cols-3 gap-16 sm:px-10">
            {subCategories &&
              subCategories?.length > 0 &&
              subCategories?.map((category) => (
                <SubCategoryCard category={category} key={category._id} />
              ))}
          </div>
        </>
      )}
    </>
  );
}
