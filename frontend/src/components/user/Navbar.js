import React, { useEffect, useState } from "react";
import Header from "./Header";
import mainImg from "../../assets/mithralogo.png";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategoryForNav } from "../../actions/categoryActions";
import DropDownSm from "./DropDownSm";

export default function Navbar() {
  const navLinks = [
    {
      nav: "Home",
      link: "/",
    },
    {
      nav: "About Us",
      link: "/about",
    },
  ];

  const navLinks2 = [
    {
      nav: "Awards",
      link: "/awards",
    },
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
    <>
      <div className="md:block hidden">
        <Header />
        <div className="px-20 flex items-center justify-center w-full border-b-2 shadow-md py-10  ">
          <div className="flex flex-wrap justify-center items-center font-light gap-7">
            {navLinks.map((item,i) => (
              <div key={i}>
                <Link
                  className="cursor-pointer hover:font-medium"
                  to={item.link}
                >
                  {item.nav}
                </Link>
              </div>
            ))}
            {categoriesForNav?.length > 0 &&
              categoriesForNav?.map((category,i) => (
                <Dropdown
                  key={i}
                  category={category}
                  handleClose={handleClose}
                />
              ))}

            {/* <a href="#contact" className="ursor-pointer hover:font-medium">
              Contact
            </a> */}

            <Link to="/contact" className="ursor-pointer hover:font-medium">
              Contact
            </Link>
            {navLinks2.map((item,i) => (
              <div key={i}>
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

      <div className="md:hidden relative ">
        <div className="px-5 flex items-center text-white bg-myrose justify-start w-full   ">
          <span
            className="material-symbols-outlined cursor-pointer py-2 text-[30px]"
            onClick={() => setOpen(!open)}
          >
            {open ? "close" : "menu"}
          </span>
        </div>

        {open && (
          <div className="absolute z-40 px-2 ease-in-out duration-1000 bg-myrose w-full top-[40px]">
            {navLinks.map((item,i) => (
              <div className="my-4 text-white" key={i}>
                <a
                  className="cursor-pointer hover:font-medium"
                  href={item.link}
                >
                  {item.nav}
                </a>
              </div>
            ))}

            <div className="w-full items-start my-4 text-white flex flex-col">
              {categoriesForNav?.length > 0 &&
                categoriesForNav?.map((category,i) => (
                  <DropDownSm
                    key={i}
                    category={category}
                    handleClose={handleClose}
                  />
                ))}

              <div className="w-full items-start  text-white flex flex-col">
                {navLinks2.map((item,i) => (
                  <div className="my-2" key={i}>
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
        )}

        <div className="flex w-full h-full items-center justify-center">
          <img
            alt="logo"
            src={mainImg}
            className="p-0 my-3 h-[60px] w-auto "
            width="50%"
          />
        </div>
      </div>
    </>
  );
}
