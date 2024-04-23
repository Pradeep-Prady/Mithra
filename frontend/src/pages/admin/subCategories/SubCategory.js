import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  deleteSubCategory,
  getSubCategory,
} from "../../../actions/subCategoryActions";
import Products from "../products/Products";
import { clearSubCategoryDeleted } from "../../../slices/subCategorySclice";

export default function SubCategory() {
  const { isSubCategoryDeleted, subCategory } = useSelector(
    (state) => state.subCategoryState
  );

  const dispatch = useDispatch();

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getSubCategory(id));
  }, [dispatch, id]);

  const deleteHandler = () => {
    if (window.confirm("Are you sure?")) {
      dispatch(deleteSubCategory(id));
      navigate(`..`);

    }
  };

  useEffect(() => {
    if (isSubCategoryDeleted) {
      dispatch(clearSubCategoryDeleted());

      return;
    }
  }, [isSubCategoryDeleted, dispatch]);

  return (
    <div className="w-full h-full">
      <div className="w-full h-[250px] flex items-center my-5 bg-white p-5 rounded-md">
        <div className="w-[30%] h-[200px] flex items-center justify-center">
          <img
            className="w-4/6 "
            alt={`${subCategory?.name}`}
            src={`${subCategory?.image}`}
          />
        </div>
        <div className="w-[70%] h-full flex flex-col   justify-end ">
          <div className="">
            <h2>{subCategory?.name}</h2>
            <p>{subCategory?.description}</p>
          </div>

          <div className="flex  gap-7 my-3">
            <Link
              to={`/admin/categories/${id}/sub/add`}
              className="bg-myblue text-white px-5 rounded-sm py-1.5 flex items-center"
            >
              <span
                className="material-symbols-outlined mr-2
              "
              >
                add
              </span>{" "}
              <span>Add</span>
            </Link>
            <Link
              to={`/admin/categories/${id}/sub/edit`}
              className="bg-myblue text-white px-5 flex items-center cursor-pointer select-none rounded-sm py-1.5"
            >
              <span className="material-symbols-outlined mr-2">edit</span>{" "}
              <span>Edit</span>
            </Link>
            <p
              onClick={deleteHandler}
              className="bg-red-500 text-white px-5 flex items-center cursor-pointer select-none rounded-sm py-1.5"
            >
              <span className="material-symbols-outlined mr-2">delete</span>
              <span>Delete</span>
            </p>
          </div>
        </div>
      </div>
      <Products id={id} />
    </div>
  );
}
