import React, { useEffect, useState } from "react";
import mainImg from "../../assets/mithralogo.png";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategoryForNav } from "../../actions/categoryActions";
import Dropdown from "./Dropdown";
import DropDownSm from "./DropDownSm";

export default function Footer() {
  // const navLinks = [
  //   {
  //     nav: "Home",
  //     link: "/",
  //   },
  //   {
  //     nav: "About Us",
  //     link: "/about",
  //   },
  //   {
  //     nav: "Mattresses",
  //     link: "/subcategory/661e1b1b5192dc474ddad172",
  //   },
  //   {
  //     nav: "Pillows",
  //     link: "/subcategory/661e1b1b5192dc474ddad172",
  //   },

  //   {
  //     nav: "Sofa Makeover",
  //     link: "/subcategory/661e1b1b5192dc474ddad172",
  //   },
  //   {
  //     nav: "Furniture",
  //     link: "/subcategory/661e1b1b5192dc474ddad172",
  //   },
  //   {
  //     nav: "Bedroom Accessories",
  //     link: "/subcategory/661e1b1b5192dc474ddad172",
  //   },
  //   {
  //     nav: "Awards",
  //     link: "/awards",
  //   },
  //   {
  //     nav: "Others",
  //     link: "/others",
  //   },
  // ];

  const navLinks = [
    {
      nav: "Home",
      link: "/",
    },
    {
      nav: "About Us",
      link: "/about",
    },
    // {
    //   nav: "Mattresses",
    //   link: "/subcategory/661e1b1b5192dc474ddad172",
    // },
    // {
    //   nav: "Pillows",
    //   link: "/subcategory/661e1b1b5192dc474ddad172",
    // },

    // {
    //   nav: "Sofa Makeover",
    //   link: "/subcategory/661e1b1b5192dc474ddad172",
    // },
    // {
    //   nav: "Furniture",
    //   link: "/subcategory/661e1b1b5192dc474ddad172",
    // },
    // {
    //   nav: "Bedroom Accessories",
    //   link: "/subcategory/661e1b1b5192dc474ddad172",
    // },
    // {
    //   nav: "Awards",
    //   link: "/awards",
    // },
    // {
    //   nav: "Others",
    //   link: "/",
    // },
  ];

  const navLinks2 = [
    {
      nav: "Awards",
      link: "/awards",
    },
    // {
    //   nav: "Others",
    //   link: "/",
    // },
  ];
  const [open, setOpen] = useState(false);
  const { categoriesForNav } = useSelector((state) => state.categoryState);

  const handleClose = () => {
    setOpen(false);
  };
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCategoryForNav());
  }, [dispatch]);

  return (
    <div className="bg-[#ffc0cb63] py-10  px-5 sm:px-10 md:px-32 ">
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        <div className="w-full">
          <div className="">
            <img className="h-[60px]" src={mainImg} alt="mainImg" />
          </div>

          <div className="w-full flex items-center justify-center">
            <div className="w-5/6">
              {navLinks.map((nav) => (
                <Link to={nav.link} className="text-[16px] my-3 ">
                  <p className="my-3 hover:font-semibold hover:tracking-wide">
                    {nav.nav}
                  </p>
                </Link>
              ))}

              {/* <div className="flex flex-col justify-start items-start my-2 ">
                {categoriesForNav?.length > 0 &&
                  categoriesForNav?.map((category) => (
                    <Dropdown
                      key={category._id}
                      category={category}
                      handleClose={handleClose}
                    />
                  ))}
              </div> */}

              <div className="w-full items-start my-3 flex flex-col text-black">
                {categoriesForNav?.length > 0 &&
                  categoriesForNav?.map((category) => (
                    <DropDownSm
                      color={"black"}
                      key={category._id}
                      category={category}
                      handleClose={handleClose}
                    />
                  ))}

                <div className="w-full items-start  flex flex-col">
                  {navLinks2.map((item) => (
                    <div className="my-2">
                      <Link
                        className="cursor-pointer  hover:font-medium"
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
        </div>

        <div className="w-full flex items-center justify-center">
          <div className="w-5/6">
            <div>
              <div className="mt-3">
                <span>
                  <i className="fa-solid fa-house"></i>
                </span>
                <span className="ms-4 font-bold">Address</span>
              </div>
              <div className="text-[15px] my-5">
                <p className="my-1  ">2001, Trichy road, </p>
                <p className="my-1  ">Opposite Rajalakshmi Mills,</p>
                <p className="my-1 ">Near Srivari Trisara Apartment.</p>
                <p className="my-1 ">Coimbatore 641005</p>
              </div>
            </div>

            <div>
              <div className="mt-3">
                <span>
                  <i className="fa-solid fa-envelope"></i>
                </span>
                <span className="ms-4 font-bold">Email</span>
              </div>
              <div className="text-[15px] my-5">
                <p className="my-1  ">cbe.mithraenterprises@gmail.com</p>
              </div>
            </div>

            <div>
              <div className="mt-3">
                <span>
                  <i className="fa-solid fa-phone"></i>
                </span>
                <span className="ms-4 font-bold">Mobile</span>
              </div>
              <div className="text-[15px] my-5">
                <p className="my-1  ">9787114111</p>
              </div>
            </div>

            <div>
              <div className="mt-3">
                <span>
                  <i className="fa-solid fa-clock"></i>
                </span>
                <span className="ms-4 font-bold">Opening Hours</span>
              </div>
              <div className="text-[15px] my-5">
                <p className="my-1  ">
                  {" "}
                  Monday - Saturday / 09.30 AM - 06.30 PM (Except Holidays)
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full flex i justify-center">
          <div className="w-5/6">
            <p className="font-bold md:ms-5">
              <span>Follow us on </span>
            </p>

            <div className="my-5 p-1 flex items-center ">
              <i className="fa-brands text-[24px] cursor-pointer fa-pinterest fw-bold md:ms-4"></i>
              <i className="fa-brands text-[24px] cursor-pointer fa-x-twitter fw-bold ms-4"></i>
              <i className="fa-brands text-[24px] cursor-pointer fa-instagram fw-bold ms-4"></i>
              <i className="fa-brands text-[24px] cursor-pointer fa-facebook fw-bold ms-4"></i>
              <i className="fa-brands text-[24px] cursor-pointer fa-linkedin fw-bold ms-4"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
