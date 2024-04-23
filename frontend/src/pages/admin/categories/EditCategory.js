import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategory, updateCategory } from "../../../actions/categoryActions";
import { useNavigate, useParams } from "react-router-dom";
import { clearCategoryCreated, clearCategoryUpdated } from "../../../slices/categorySclice";

export default function EditCategory() {
  const [name, setName] = useState("");
  const [image, setImage] = useState();
  const [imagePreview, setImagePreview] = useState("");
  const [description, setDescription] = useState("");
  const { id } = useParams();

  const { categories, isCategoryUpdated, category } = useSelector(
    (state) => state.categoryState
  );
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const onImageChange = (e) => {
    const reader = new FileReader();

    reader.onload = () => {
      if (reader.readyState === 2) {
        setImagePreview(reader.result);
        setImage(e.target.files[0]);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("image", image);
    formData.append("description", description);

    dispatch(updateCategory(formData, id));
  };

  useEffect(() => {
    if (isCategoryUpdated) {
      dispatch(clearCategoryUpdated());
      navigate("/admin/categories");
      return;
    }

    return;
  }, [dispatch, navigate, isCategoryUpdated]);

  useEffect(() => {
    if (category) {
      setName(category?.name);
      setImagePreview(category?.image);
      setDescription(category?.description);
    }
  }, [category]);

  return (
    <div className="w-full flex items-center justify-center h-full">
      <form
        className="w-11/12 sm:w-9/12 md:w-5/12 bg-white rounded-sm p-5  "
        onSubmit={submitHandler}
      >
        <h2 className="text-center text-[22px] font-medium select-none my-3">
          Update Category
        </h2>
        <div className="flex flex-col ">
          <label className="text-[17px] font-medium">Name</label>
          <input
            className="px-2 py-2.5 bg-mywhite text-black my-2 outline-none "
            type="text"
            name="name"
            required
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>

        {/* <div className="flex flex-col ">
          <label className="text-[17px] font-medium">Image</label>
          <input
            className="px-2 py-2.5 text-black my-2 outline-none "
            type="file"
            name="image"
            required
            onChange={onImageChange}
          />
        </div> */}

        <div className="flex items-start ">
          <div className="flex flex-col w-8/12 ">
            <label className="text-[17px] font-medium">Image</label>
            <input
              className="px-2 py-2.5 text-black my-2 outline-none "
              type="file"
              name="image"
              onChange={onImageChange}
            />
          </div>

          {imagePreview && (
            <div className="w-4/12">
              <img className="" alt="mainImagePreview" src={imagePreview} />
            </div>
          )}
        </div>

        <div className="flex flex-col ">
          <label className="text-[17px] font-medium">Description</label>
          <textarea
            className="px-2 py-2.5 text-black bg-mywhite my-2 outline-none "
            type="text"
            name="description"
            rows="5"
            placeholder="Description"
            defaultValue={""}
            required
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            style={{ resize: "none" }}
          ></textarea>
        </div>
        <div className="flex flex-col ">
          <input
            className="px-2 py-2.5 bg-black font-semibold cursor-pointer text-white my-2 outline-none "
            type="submit"
          />
        </div>
      </form>
    </div>
  );
}
