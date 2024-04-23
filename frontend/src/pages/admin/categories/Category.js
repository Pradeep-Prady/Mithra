import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteCategory,
  getAllCategory,
  getCategory,
} from "../../../actions/categoryActions";
import { Link, useNavigate, useParams } from "react-router-dom";
import SubCategories from "../subCategories/SubCategories";

export default function Category() {
  const { category } = useSelector((state) => state.categoryState);

  const dispatch = useDispatch();

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getCategory(id));

    return;
  }, [dispatch, id]);

  const deleteHandler = () => {
    if (window.confirm("Are you sure?")) {
      dispatch(deleteCategory(id));
      navigate("/admin/categories");
      dispatch(getAllCategory());
    }
  };

  return (
    <div className="w-full h-full">
      <div className="w-full h-[250px] flex items-center my-5 bg-white p-5 rounded-md">
        <div className="w-[30%] h-[200px] flex items-center justify-center">
          <img
            className="w- h-4/6 rounded-sm"
            alt={`${category?.name}`}
            src={`${category?.image}`}
          />
        </div>
        <div className="w-[70%] h-full flex flex-col   justify-end ">
          <div className="">
            <h2 className="text-[22px] font-semibold">{category?.name}</h2>
            <p>{category?.description}</p>
          </div>

          <div className="flex  gap-7 my-3">
            <Link
              to={`/admin/categories/${id}/add`}
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
              to={`/admin/categories/${id}/edit`}
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
      <SubCategories id={id} />
    </div>
  );
}
