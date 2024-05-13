import React from "react";
import mainImg from "../../assets/mithralogo.png";
export default function Header() {
  return (
    <>
      <div className="text-white  flex items-center justify-between px-40 py-2 text-center bgprimarycolor">
        <div className="col-md-8  p-3">
          <span>cbe.mithraenterprises@gmail.com</span>
          <span className="ms-20">Helpline: 97871 14111</span>
        </div>
        <div className="col-md-4  p-3">
          <span>
            <i className="fa-brands fa-pinterest text-[18px] px-2"></i>
          </span>
          <span>
            <i className="fa-brands fa-x-twitter text-[18px] px-2"></i>
          </span>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/mithrabedsandsofas?igsh=NzloaDI0ZDYxcnJn"
          >
            <i className="fa-brands fa-instagram text-[18px] px-2"></i>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.facebook.com/share/j43i9XXWBvxQUVUr/?mibextid=qi2Omg"
          >
            <i className="fa-brands fa-facebook text-[18px] px-2"></i>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/malini-d-2671102b5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          >
            <i className="fa-brands fa-linkedin text-[18px] px-2"></i>
          </a>
        </div>
      </div>

      <div className="flex w-full h-full items-center justify-center">
        <img
          alt="logo"
          src={mainImg}
          className="p-0 my-3 h-[110px] w-auto "
          width="50%"
        />
      </div>
    </>
  );
}
