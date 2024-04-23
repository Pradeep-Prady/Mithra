import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { deleteProduct, getProduct } from "../../../actions/productActions";
import { clearProductDeleted } from "../../../slices/productSlice";
import ProductSlider from "./../../../components/admin/ProductSlider";

export default function Product() {
  const { product, isProductDeleted } = useSelector(
    (state) => state.productState
  );

  const dispatch = useDispatch();

  const navigate = useNavigate();
  const { id } = useParams();

  const deleteHandler = () => {
    if (window.confirm("Are you sure?")) {
      dispatch(deleteProduct(id));
      navigate(`/admin/categories/${product?.subCategory}/sub`);
    }
  };

  useEffect(() => {
    if (isProductDeleted) {
      dispatch(clearProductDeleted());

      return;
    }

    dispatch(getProduct(id));
  }, [isProductDeleted, id, dispatch]);

  return (
    <div className="w-full h-full">
      <div className="w-full h-[250px] flex items-center my-5 bg-white p-5 rounded-md">
        <div className="w-[30%] h-auto flex items-center justify-center">
          <ProductSlider images={product?.images} />
        </div>
        <div className="w-[70%] h-full flex flex-col   justify-end ">
          <div className="">
            <h2>{product?.name}</h2>
            {/* <p>{product?.description}</p> */}
          </div>

          <div className="flex  gap-7 my-3">
            <Link
              to={`/admin/product/${id}/edit`}
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

      <div className="w-full h-auto flex  my-5 bg-white p-5 rounded-md">
        {/* <div>{product?.description}</div> */}
        <div dangerouslySetInnerHTML={{ __html: product?.description }} />
      </div>

      <div className="w-full h-auto flex items-center my-5 bg-white p-5 rounded-md">
        {/* <div>{product?.specification}</div> */}
        <div dangerouslySetInnerHTML={{ __html: product?.specification }} />
      </div>

      <div className="w-full h-auto flex items-center my-5 bg-white p-5 rounded-md">
        {/* <div>{product?.additionalinfo}</div> */}
        <div dangerouslySetInnerHTML={{ __html: product?.additionalinfo }} />
      </div>
    </div>
  );
}
