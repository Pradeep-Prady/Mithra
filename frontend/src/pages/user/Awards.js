import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getAllAward } from "../../actions/awardActions.js";
import Loading from "./../../components/user/Loading";
export default function Awards() {
  const dispatch = useDispatch();

  const { awards, loading } = useSelector((state) => state.awardState);

  useEffect(() => {
    dispatch(getAllAward());
  }, [dispatch]);

  console.log(awards);

  return (
    <div>
      <h2 className="colorprimary text-center mb-5 mt-3 heading-size">
        Awards
      </h2>
      {loading ? (
        <>
          <Loading />
        </>
      ) : (
        <>
          <div className=" w-full   grid my-10  h-full    px-5 sm:px-10 md:px-32   grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 ">
            {awards?.map((award) => (
              <div className="relative w-full overflow-hidden  roundedl p-3 text-center px-4 ">
                <img
                  className="w-full object- scale-125 hover:scale-110 duration-500 ease-in-out "
                  src={award?.image}
                  alt={award?.name}
                />
                <div className="absolute  bottom-0  left-0 flex flex-col items-center  justify-center w-full">
                  <div className="glass w-10/12">
                    <h2 className="font-semibold text-2xl my-2 text-myblue">
                      {award?.name}
                    </h2>
                    <p className="text-sm text-myblue">{award?.description} </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
