import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProduct } from "./../../../actions/productActions";
import { Link } from "react-router-dom";
import Loading from "../../../components/user/Loading";
export default function Products({ id }) {
  const dispatch = useDispatch();

  const { products, loading } = useSelector((state) => state.productState);

  useEffect(() => {
    dispatch(getAllProduct(id));
  }, [dispatch, id]);

  return (
    <>
      <h2 className="text-[22px] font-semibold">Products</h2>
      {loading ? (
        <>
          <Loading />
        </>
      ) : (
        <div className="w-full h-full">
          <div className="w-full grid grid-cols-4 gap-5">
            {products &&
              products.map((item) => (
                <div
                  className="my-5 select-none bg-myblue  py-3 rounded-md text-white cursor-pointer text-center"
                  key={item._id}
                >
                  <p className=" text-[20px] ">{item.name} </p>
                  <Link
                    to={`/admin/product/${item._id}`}
                    className="mt-3 hover:underline"
                  >
                    view details
                  </Link>
                </div>
              ))}
          </div>
        </div>
      )}
    </>
  );
}
