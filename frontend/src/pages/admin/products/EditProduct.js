import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getProduct, updateProduct } from "../../../actions/productActions";
import { clearProductUpdated } from "../../../slices/productSlice";
import TextEditor from "../../../components/admin/TextEditor";

export default function EditProduct() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [specification, setSpecification] = useState("");
  const [additionalinfo, setAdditionalinfo] = useState("");
  const { subCategories } = useSelector((state) => state.subCategoryState);

  const dispatch = useDispatch();
  const navigate = useNavigate();

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

  const [descriptionEditorValue, setDescriptionEditorValue] = useState("");
  const [specificationEditorValue, setSpecificationEditorValue] = useState("");
  const [additionalinfoEditorValue, setAdditionalinfoEditorValue] =
    useState("");

  const [imagesCleared, setImagesCleared] = useState(false);

  const { id } = useParams();

  const { isProductUpdated, product } = useSelector(
    (state) => state.productState
  );

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

  const handleImagesCleared = () => {
    setImagesCleared(true);
    setMainImage(null);
    setFrontImage(null);
    setRightImage(null);
    setBackImage(null);
    setLeftImage(null);

    setMainImagePreview("");
    setFrontImagePreview("");
    setRightImagePreview("");
    setBackImagePreview("");
    setLeftImagePreview("");
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);

    // Check if any image field is cleared
    if (mainImage || frontImage || rightImage || backImage || leftImage) {
      setImagesCleared(false);
      console.log("set false");
    } else {
      setImagesCleared(true);
      console.log("set true");
    }

    // Append images and other form data
    const imagesArray = [
      mainImage,
      frontImage,
      rightImage,
      backImage,
      leftImage,
    ];

    imagesArray?.forEach((image) => {
      if (image) {
        formData.append("images", image);
      }
    });

    formData.append("description", descriptionEditorValue);
    formData.append("subCategory", subCategory);
    formData.append("specification", specificationEditorValue);
    formData.append("additionalinfo", additionalinfoEditorValue);
    formData.append("imagesCleared", imagesCleared);

    dispatch(updateProduct(formData, id));
  };

  useEffect(() => {
    if (isProductUpdated) {
      dispatch(clearProductUpdated());
      setImagesCleared(false);
      navigate("/admin/categories");
    }

    dispatch(getProduct(id));
  }, [isProductUpdated, navigate, id, dispatch]);

  useEffect(() => {
    if (product) {
      setName(product?.name);
      setDescription(product?.description);
      setSubCategory(product?.subCategory);
      setSpecification(product?.specification);
      setAdditionalinfo(product?.additionalinfo);

      if (product?.images?.length > 0) {
        setMainImage(product?.images[0]?.image);
        setFrontImage(product?.images[1]?.image);
        setRightImage(product?.images[2]?.image);
        setBackImage(product?.images[3]?.image);
        setLeftImage(product?.images[4]?.image);

        setMainImagePreview(product?.images[0]?.image);
        setFrontImagePreview(product?.images[1]?.image);
        setRightImagePreview(product?.images[2]?.image);
        setBackImagePreview(product?.images[3]?.image);
        setLeftImagePreview(product?.images[4]?.image);
      }

      setAdditionalinfoEditorValue(product?.additionalinfo);
      setSpecificationEditorValue(product?.specification);
      setDescriptionEditorValue(product?.description);
    }
  }, [product]);

  return (
    <div className="w-full   flex items-center justify-center h-full">
      <div className=" overflow-y-scroll h-full w-11/12 sm:w-9/12 py-10 md:w-8/12">
        <form
          className=" h-auto bg-white rounded-sm p-5  "
          onSubmit={submitHandler}
        >
          <h2 className="text-center text-[22px] font-medium select-none my-3">
            Update Product{" "}
          </h2>
          <div className="flex flex-col ">
            <label className="text-[17px] font-medium">Sub Category</label>
            <select
              value={subCategory}
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

          {/* <div className="flex flex-col ">
              <label className="text-[17px] font-medium">Images</label>
              <input
                className="px-2 py-2.5 text-black my-2 outline-none "
                type="file"
                name="images"
                required
                multiple
                onChange={onImagesChange}
              />
            </div> */}

          {/* Images */}

          <div className="flex items-start justify-end my-3 text-myblue  ">
            <p
              className="text-[17px] font-medium my-2  cursor-pointer"
              onClick={handleImagesCleared}
            >
              Clear Images
            </p>
          </div>

          <div className="flex items-start my-2">
            <div className="w-8/12">
              <label className="text-[17px] font-medium">Main Image</label>

              {imagesCleared && (
                <input
                  className="px-2 py-2.5 text-black my-2 outline-none "
                  type="file"
                  name="main image"
                  required
                  // value={mainImage}
                  // multiple
                  onChange={onMainImageChange}
                />
              )}
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

          <div className="flex items-start my-2">
            <div className="w-8/12">
              <label className="text-[17px] font-medium">Front Image</label>

              {imagesCleared && (
                <input
                  className="px-2 py-2.5 text-black my-2 outline-none "
                  type="file"
                  name="front image"
                  required
                  // value={frontImage}
                  onChange={onFrontImageChange}
                />
              )}
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

          <div className="flex items-start my-2">
            <div className="w-8/12">
              <label className="text-[17px] font-medium">Right Image</label>
              {imagesCleared && (
                <input
                  className="px-2 py-2.5 text-black my-2 outline-none "
                  type="file"
                  name="right image"
                  required
                  // value={rightImage}
                  onChange={onRightImageChange}
                />
              )}
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

          <div className="flex items-start my-2">
            <div className="w-8/12">
              <label className="text-[17px] font-medium">Left Image</label>

              {imagesCleared && (
                <input
                  className="px-2 py-2.5 text-black my-2 outline-none "
                  type="file"
                  name="left image"
                  required
                  // value={leftImage}
                  onChange={onLeftImageChange}
                />
              )}
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

          <div className="flex items-start  my-2">
            <div className="w-8/12">
              <label className="text-[17px] font-medium">Back Image</label>
              {imagesCleared && (
                <input
                  className="px-2 py-2.5 text-black my-2 outline-none "
                  type="file"
                  name="back image"
                  required
                  // value={backImage}
                  onChange={onBackImageChange}
                />
              )}
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

          <div className="flex flex-col ">
            <label className="text-[17px] font-medium">Description</label>
            {/* <textarea
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
            ></textarea> */}

            <TextEditor onEditorChange={setDescriptionEditorValue} />

            <div
              className="my-4"
              dangerouslySetInnerHTML={{ __html: descriptionEditorValue }}
            />
          </div>

          <div className="flex flex-col ">
            <label className="text-[17px] font-medium">Specification</label>
            {/* <textarea
              className="px-2 py-2.5 text-black bg-mywhite my-2 outline-none "
              type="text"
              name="specification"
              rows="5"
              placeholder="specification"
              defaultValue={""}
              required
              onChange={(e) => setSpecification(e.target.value)}
              value={specification}
              style={{ resize: "none" }}
            ></textarea> */}

            <TextEditor onEditorChange={setSpecificationEditorValue} />

            <div
              className="my-4"
              dangerouslySetInnerHTML={{ __html: specificationEditorValue }}
            />
          </div>

          <div className="flex flex-col ">
            <label className="text-[17px] font-medium">
              Additional Information
            </label>
            {/* <textarea
              className="px-2 py-2.5 text-black bg-mywhite my-2 outline-none "
              type="text"
              name="additionalinfo"
              rows="5"
              placeholder="additionalinfo"
              defaultValue={""}
              required
              onChange={(e) => setAdditionalinfo(e.target.value)}
              value={additionalinfo}
              style={{ resize: "none" }}
            ></textarea> */}

            <TextEditor onEditorChange={setAdditionalinfoEditorValue} />

            <div
              className="my-4"
              dangerouslySetInnerHTML={{ __html: additionalinfoEditorValue }}
            />
          </div>
          <div className="flex flex-col ">
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
