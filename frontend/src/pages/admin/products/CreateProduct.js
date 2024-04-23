import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createProduct } from "../../../actions/productActions";
import { clearProductCreated } from "../../../slices/productSlice";
import { useNavigate, useParams } from "react-router-dom";
import TextEditor from "./../../../components/admin/TextEditor";

export default function CreateProduct() {
  const [name, setName] = useState("");
  const [imagesPreview, setImagesPreview] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const { subCategories } = useSelector((state) => state.subCategoryState);

  const [descriptionEditorValue, setDescriptionEditorValue] = useState("");
  const [specificationEditorValue, setSpecificationEditorValue] = useState("");
  const [additionalinfoEditorValue, setAdditionalinfoEditorValue] =
    useState("");

  const [mainImage, setMainImage] = useState();
  const [mainImagePreview, setMainImagePreview] = useState("");
  const [frontImage, setFrontImage] = useState();
  const [frontImagePreview, setFrontImagePreview] = useState("");
  const [rightImage, setRightImage] = useState();
  const [rightImagePreview, setRightImagePreview] = useState("");
  const [backImage, setBackImage] = useState();
  const [backImagePreview, setBackImagePreview] = useState("");
  const [leftImage, setLeftImage] = useState();
  const [leftImagePreview, setLeftImagePreview] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { id } = useParams();

  const onMainImageChange = (e) => {
    const reader = new FileReader();

    reader.onload = () => {
      if (reader.readyState === 2) {
        setMainImagePreview(reader.result);
        setMainImage(e.target.files[0]);
      }
    };

    reader.readAsDataURL(e.target.files[0]);
  };

  const onFrontImageChange = (e) => {
    const reader = new FileReader();

    reader.onload = () => {
      if (reader.readyState === 2) {
        setFrontImagePreview(reader.result);
        setFrontImage(e.target.files[0]);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  const onRightImageChange = (e) => {
    const reader = new FileReader();

    reader.onload = () => {
      if (reader.readyState === 2) {
        setRightImagePreview(reader.result);
        setRightImage(e.target.files[0]);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  const onBackImageChange = (e) => {
    const reader = new FileReader();

    reader.onload = () => {
      if (reader.readyState === 2) {
        setBackImagePreview(reader.result);
        setBackImage(e.target.files[0]);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  const onLeftImageChange = (e) => {
    const reader = new FileReader();

    reader.onload = () => {
      if (reader.readyState === 2) {
        setLeftImagePreview(reader.result);
        setLeftImage(e.target.files[0]);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  const { isProductCreated } = useSelector((state) => state.productState);

  const submitHandler = (e) => {
    e.preventDefault();

    const imagesArray = [
      mainImage,
      frontImage,
      rightImage,
      backImage,
      leftImage,
    ];
    const previews = [];

    imagesArray.forEach((file, index) => {
      previews.push(file);
    });

    const formData = new FormData();
    formData.append("name", name);

    imagesArray?.forEach((image) => {
      formData.append("images", image);
    });
    formData.append("description", descriptionEditorValue);
    formData.append("subCategory", subCategory);
    formData.append("specification", specificationEditorValue);
    formData.append("additionalinfo", additionalinfoEditorValue);

    dispatch(createProduct(formData));
  };

  useEffect(() => {
    if (isProductCreated) {
      dispatch(clearProductCreated());
      navigate("..");
    }
  }, [isProductCreated, navigate, dispatch]);

  return (
    <div className="w-full   flex items-center justify-center h-full">
      <div className=" overflow-y-scroll h-full w-11/12 sm:w-9/12 py-10 md:w-7/12">
        <form
          className=" h-auto bg-white rounded-sm p-5  "
          onSubmit={submitHandler}
        >
          <h2 className="text-center text-[22px] font-medium select-none my-3">
            Create Product{" "}
          </h2>
          <div className="flex flex-col ">
            <label className="text-[17px] font-medium">Sub Category</label>
            <select
              className="px-2 py-2.5 bg-mywhite text-black my-2 outline-none "
              onChange={(e) => setSubCategory(e.target.value)}
            >
              <option>Select Sub Category</option>
              {subCategories?.map((category) => (
                <option key={category._id} value={category?._id}>
                  {category?.name}
                </option>
              ))}
            </select>
          </div>

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

          <div className="flex items-start ">
            <div className="w-8/12">
              <label className="text-[17px] font-medium">Main Image</label>
              <input
                className="px-2 py-2.5 text-black my-2 outline-none "
                type="file"
                name="main image"
                required
                // multiple
                onChange={onMainImageChange}
                // onChange={onImagesChange}
              />
            </div>

            {mainImagePreview && (
              <div className="w-4/12">
                <img
                  className=""
                  alt="mainImagePreview"
                  src={mainImagePreview}
                />
              </div>
            )}
          </div>

          <div className="flex items-start ">
            <div className="w-8/12">
              <label className="text-[17px] font-medium">Front Image</label>
              <input
                className="px-2 py-2.5 text-black my-2 outline-none "
                type="file"
                name="front image"
                required
                onChange={onFrontImageChange}
                // onChange={onImagesChange}
              />
            </div>
            {frontImagePreview && (
              <div className="w-4/12">
                <img
                  className=""
                  alt="frontImagePreview"
                  src={frontImagePreview}
                />
              </div>
            )}
          </div>

          <div className="flex items-start ">
            <div className="w-8/12">
              <label className="text-[17px] font-medium">Right Image</label>
              <input
                className="px-2 py-2.5 text-black my-2 outline-none "
                type="file"
                name="right image"
                required
                onChange={onRightImageChange}
                // onChange={onImagesChange}
              />
            </div>
            {rightImagePreview && (
              <div className="w-4/12">
                <img
                  className=""
                  alt="rightImagePreview"
                  src={rightImagePreview}
                />
              </div>
            )}
          </div>

          <div className="flex items-start ">
            <div className="w-8/12">
              <label className="text-[17px] font-medium">Left Image</label>
              <input
                className="px-2 py-2.5 text-black my-2 outline-none "
                type="file"
                name="left image"
                required
                onChange={onLeftImageChange}
                // onChange={onImagesChange}
              />
            </div>

            {leftImagePreview && (
              <div className="w-4/12">
                <img
                  className=""
                  alt="leftImagePreview"
                  src={leftImagePreview}
                />
              </div>
            )}
          </div>

          <div className="flex items-start ">
            <div className="w-8/12">
              <label className="text-[17px] font-medium">Back Image</label>
              <input
                className="px-2 py-2.5 text-black my-2 outline-none "
                type="file"
                name="back image"
                required
                onChange={onBackImageChange}
                // onChange={onImagesChange}
              />
            </div>

            {backImagePreview && (
              <div className="w-4/12">
                <img
                  className=""
                  alt="backImagePreview"
                  src={backImagePreview}
                />
              </div>
            )}
          </div>

          <div className="flex items-center my-2 w-full overflow-x-scroll">
            {imagesPreview?.length > 0 &&
              imagesPreview?.map((image, i) => (
                <div key={i} className="w-[100px] flex-shrink-0  h-auto">
                  <img src={image} alt="PreviewImage" />
                </div>
              ))}
          </div>

          <div className="flex flex-col ">
            <label className="text-[17px] my-3 font-medium">Description</label>

            <TextEditor onEditorChange={setDescriptionEditorValue} />
          </div>

          <div className="flex flex-col ">
            <label className="text-[17px] my-3 font-medium">
              Specification
            </label>

            <TextEditor onEditorChange={setSpecificationEditorValue} />
          </div>

          <div className="flex flex-col ">
            <label className="text-[17px] my-3 font-medium">
              Additional Information
            </label>

            <TextEditor onEditorChange={setAdditionalinfoEditorValue} />
          </div>
          <div className="flex flex-col my-5 ">
            <input
              className="px-2 py-2.5 bg-black font-semibold cursor-pointer text-white my-2 outline-none "
              type="submit"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
