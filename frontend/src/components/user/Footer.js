import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom"; // Import useLocation
import mainImg from "../../assets/mithralogo.png";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategoryForNav } from "../../actions/categoryActions";
import DropDownSm from "./DropDownSm";

export default function Footer() {
  const location = useLocation(); // Access current location
  const navLinks = [
    { nav: "Home", link: "/" },
    { nav: "About Us", link: "/about" },
  ];
  const navLinks2 = [{ nav: "Awards", link: "/awards" }];
  const { categoriesForNav } = useSelector((state) => state.categoryState);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCategoryForNav());
  }, [dispatch]);

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when location changes
  }, [location]); // Trigger on location change

  return (
    <div className="bg-[#ffc0cb63] py-10 px-5 sm:px-10 md:px-32">
      <div className="w-full flex items-start justify-evenly md:gap-5">
        {/* First column */}
        <div className="w-full">
          <div>
            <img className="h-[60px]" src={mainImg} alt="mainImg" />
          </div>
          <div className="my-5 leading-7 text-justify">
            <p>
              Mithra Enterprises, established in February 2018, has swiftly
              risen to become the best mattress manufacturer in Coimbatore,
              driven by their dream of providing natural, organic, quality, and
              healthy sleep solutions. As the top mattress shop in the city,
              Mithra specializes in crafting comfortable, supportive, and
              healthy mattresses using eco-friendly materials like ilavam panju
              (Kapok), latex, and coir.
            </p>
          </div>
        </div>

        {/* Second column */}
        <div className="w-full md:mt-[80px] flex flex-col md:items-end justify-center md:justify-end">
          <div className="md:w-5/6 ">
            <p className="font-bold w-full flex items-start justify-start text-start">
              Info
            </p>
            {navLinks.map((nav, i) => (
              <Link to={nav.link} className="text-[16px] my-3 " key={i}>
                <p className="my-3 hover:font-semibold hover:tracking-wide">
                  {nav.nav}
                </p>
              </Link>
            ))}

            <div className="w-full items-start my-3 flex flex-col text-black">
              {categoriesForNav?.length > 0 &&
                categoriesForNav?.map((category, i) => (
                  <DropDownSm color={"black"} key={i} category={category} />
                ))}

              <div className="w-full items-start flex flex-col">
                {navLinks2.map((item, i) => (
                  <div className="my-2" key={i}>
                    <Link
                      className="cursor-pointer hover:font-medium"
                      to={item.link}
                    >
                      {item.nav}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Third column - Contact information */}
        <div className="w-full flex md:mt-[80px] items-center justify-center">
          <div className="md:w-5/6">
            <div className="mt-3">
              <span>
                <i className="fa-solid fa-house"></i>
              </span>
              <span className="ms-4 font-bold">Address</span>
              <div className="text-[15px] my-5">
                <p>2001, Trichy road,</p>
                <p>Opposite Rajalakshmi Mills,</p>
                <p>Near Srivari Trisara Apartment.</p>
                <p>Coimbatore - 641005</p>
              </div>
            </div>

            {/* Email */}
            <div>
              <div className="mt-3">
                <span>
                  <i className="fa-solid fa-envelope"></i>
                </span>
                <span className="ms-4 font-bold">Email</span>
              </div>
              <div className="text-[15px] my-5">
                <p className="my-1">cbe.mithraenterprises@gmail.com</p>
              </div>
            </div>

            {/* Mobile */}
            <div>
              <div className="mt-3">
                <span>
                  <i className="fa-solid fa-phone"></i>
                </span>
                <span className="ms-4 font-bold">Mobile</span>
              </div>
              <div className="text-[15px] my-5">
                <p className="my-1">9787114111</p>
              </div>
            </div>

            {/* Opening Hours */}
            <div>
              <div className="mt-3">
                <span>
                  <i className="fa-solid fa-clock"></i>
                </span>
                <span className="ms-4 font-bold">Opening Hours</span>
              </div>
              <div className="text-[15px] my-5">
                <p className="my-1">
                  Monday - Saturday
                </p>
                <p className="my-1"> 09.30 AM - 06.30 PM </p>
                <p className="my-1">(Except Holidays)</p>
              </div>
            </div>
          </div>
        </div>

        {/* Fourth column - Social Media Links */}
        <div className="w-full flex md:mt-[80px] md:justify-center">
          <div className="md:w-5/6">
            <p className="font-bold md:ms-5">
              <span>Follow us on</span>
            </p>
            <div className="my-5 p-1 flex items-center">
              <span>
                <i className="fa-brands fa-pinterest text-[24px] px-2"></i>
              </span>
              <span>
                <i className="fa-brands fa-x-twitter text-[24px] px-2"></i>
              </span>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.instagram.com/mithrabedsandsofas?igsh=NzloaDI0ZDYxcnJn"
              >
                <i className="fa-brands fa-instagram text-[24px] px-2"></i>
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.facebook.com/share/j43i9XXWBvxQUVUr/?mibextid=qi2Omg"
              >
                <i className="fa-brands fa-facebook text-[24px] px-2"></i>
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/malini-d-2671102b5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              >
                <i className="fa-brands fa-linkedin text-[24px] px-2"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
