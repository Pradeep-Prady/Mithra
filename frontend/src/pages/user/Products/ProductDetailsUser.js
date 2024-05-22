import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProduct } from "../../../actions/productActions";
import ProductSlider from "../../../components/user/cards/ProductSlider";
import Loading from "../../../components/user/Loading";

export default function ProductDetailsUser() {
  const dispatch = useDispatch();
  const { id } = useParams();

  const { product, loading } = useSelector((state) => state.productState);

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getProduct(id));
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
            <div className="w-full flex items-center justify-center">
              <ProductSlider images={product?.images} />
            </div>

            <div className=" px-5  py-5 sm:px-10 md:px-32 ">
              <h2 className="text-center border-b-2 pb-5 text-[20px] font-semibold">
                {product?.name}
              </h2>
            </div>

            <div className="w-full  px-5 sm:px-10 md:px-72 ">
              <div className="border-b-2 py-1 sm:py-10">
                <h3 className="colorprimary font-semibold text-[20px] my-2">
                  Description
                </h3>
                {/* <p>{product?.description}</p> */}

                <div>
                  <div
                    dangerouslySetInnerHTML={{ __html: product?.description }}
                  />
                </div>
              </div>

              <div className="border-b-2 py-3 sm:py-10">
                <h3 className="colorprimary font-semibold text-[20px] my-2">
                  Specification
                </h3>
                {/* <p>{product?.specification}</p> */}
                <div
                  dangerouslySetInnerHTML={{ __html: product?.specification }}
                />
              </div>

              <div className="border-b-2 py-3 sm:py-10">
                <h3 className="colorprimary font-semibold text-[20px] my-2">
                  Additional info
                </h3>
                {/* <p>{product?.additionalinfo}</p> */}
                <div
                  dangerouslySetInnerHTML={{ __html: product?.additionalinfo }}
                />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
