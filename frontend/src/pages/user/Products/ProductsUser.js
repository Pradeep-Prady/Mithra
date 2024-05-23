import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getAllProduct } from "../../../actions/productActions";
import ProductCard from "./../../../components/user/cards/ProductCard";
import Loading from "../../../components/user/Loading";

export default function ProductsUser() {
  const dispatch = useDispatch();
  const { id } = useParams();

  const { products, name,loading } = useSelector((state) => state.productState);

  useEffect(() => {
  window.scrollTo(0,0)

    dispatch(getAllProduct(id));
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
            <div>
              <h1  className="colorprimary text-center text-3xl mb-1">
                Products in {name}
              </h1>
              <p  className="colorsecondary text-center my-2 ">
                We have entire range of exclusive products for comfortable sound
                sleep...
              </p>
            </div>

            <div className="grid  grid-cols-1 my-10 sm:grid-cols-2 md:grid-cols-3 gap-16 sm:px-10">
              {products &&
                products?.length > 0 &&
                products?.map((category) => (
                  <ProductCard data={category} key={category._id} />
                ))}
            </div>
          </div>
        </>
      )}
    </>
  );
}
