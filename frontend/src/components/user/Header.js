import React from "react";
import mainImg from '../../assets/mithralogo.png'
export default function Header() {
  return (
    <>
      <div  className="text-white  flex items-center justify-between px-40 py-2 text-center bgprimarycolor">
        <div  className="col-md-8  p-3">
          <span>cbe.mithraenterprises@gmail.com</span>
          <span  className="ms-3">Helpline: 97871 14111</span>
        </div>
        <div  className="col-md-4  p-3">
          <span>
            <i  className="fa-brands fa-pinterest text-[18px] px-2"></i>
          </span>
          <span>
            <i  className="fa-brands fa-x-twitter text-[18px] px-2"></i>
          </span>
          <span>
            <i  className="fa-brands fa-instagram text-[18px] px-2"></i>
          </span>
          <span>
            <i  className="fa-brands fa-facebook text-[18px] px-2"></i>
          </span>
        </div>
      </div>

      <div className="flex w-full h-full items-center justify-center">
        <img alt="logo" src={mainImg} className="p-0 my-3 h-[110px] w-auto " width="50%" />
      </div>
    </>
  );
}
