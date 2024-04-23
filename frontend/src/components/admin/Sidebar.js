import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { logout } from "../../actions/authActions";

export default function Sidebar() {
  const location = useLocation();
  const [active, setActive] = useState("dashboard");
  const [openSidebar, setOpenSidebar] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    const path = location.pathname.split("/")[2];

    setActive(path);
  }, [location.pathname]);

  const logoutHandler = () => {
    dispatch(logout);
    navigate("/");
  };
  return (
    <>
      <div className="bg-myblue w-full h-full hidden relative sm:block">
        <div className="h-screen w-full relative">
          <Link
            to="/admin"
            onClick={() => setActive("dashboard")}
            className="flex items-center p-5 cursor-pointer select-none gap-2 text-mywhite"
          >
            <span className="material-symbols-outlined">dashboard</span>
            <p className="font-semibold text-[20px]">Mithra</p>
          </Link>

          <div className="w-full flex items-center justify-end mt-10">
            <Link
              to="/admin/categories"
              onClick={() => setActive("categories")}
              className={`flex items-center w-9/12 gap-3 ${
                active === "categories" ? "bg-mywhite" : " text-white"
              }  p-3 cursor-pointer rounded-l-md select-none`}
            >
              <span className="material-symbols-outlined">category</span>
              <p>Categories </p>
            </Link>
          </div>

          <div className="w-full flex items-center justify-end mt-10">
            <Link
              to="/admin/testimonial"
              onClick={() => setActive("testimonial")}
              className={`flex items-center w-9/12 gap-3 ${
                active === "testimonial" ? "bg-mywhite" : " text-white"
              }  p-3 cursor-pointer rounded-l-md select-none`}
            >
              <span className="material-symbols-outlined">reviews</span>
              {/* <span  className="material-symbols-outlined">category</span> */}
              <p>Testimonial </p>
            </Link>
          </div>

          <div className="w-full flex items-center justify-end mt-10">
            <Link
              to="/admin/award"
              onClick={() => setActive("award")}
              className={`flex items-center w-9/12 gap-3 ${
                active === "award" ? "bg-mywhite" : " text-white"
              }  p-3 cursor-pointer rounded-l-md select-none`}
            >
              <i className="fa-solid fa-trophy"></i>
              <p>Awards </p>
            </Link>
          </div>

          <div className="w-full absolute bottom-0 flex items-center justify-end mt-10">
            <p
              onClick={logoutHandler}
              className={`flex items-center w-9/12 gap-3 text-mywhite hover:bg-mywhite hover:text-myblue   p-3 cursor-pointer rounded-l-md select-none`}
            >
              <span className="material-symbols-outlined">logout</span>
              <p>Logout</p>
            </p>
          </div>
        </div>
      </div>

      <div
        className="bg-myblue  h-[5%] bottom-0 fixed w-full sm:hidden flex items-center justify-center"
        onClick={() => setOpenSidebar(!openSidebar)}
      >
        <span className="material-symbols-outlined text-mywhite p-3 select-none">
          keyboard_double_arrow_up
        </span>
      </div>

      {openSidebar && (
        <div className="bg-myblue w-full left-0 bottom-0 fixed top-0 z-50">
          <Link
            to="/admin"
            onClick={() => {
              setActive("dashboard");
              setOpenSidebar(false);
            }}
            className="flex items-center p-5 cursor-pointer select-none gap-2 text-mywhite"
          >
            <span className="material-symbols-outlined">dashboard</span>
            <p className="font-semibold text-[20px]">Mithra</p>
          </Link>

          <div className="w-full flex items-center justify-end mt-10">
            <Link
              to="/admin/categories"
              onClick={() => {
                setActive("tours");
                setOpenSidebar(false);
              }}
              className={`flex items-center w-9/12 gap-3 ${
                active === "tours" ? "bg-mywhite" : " text-white"
              }  p-3 cursor-pointer rounded-l-md select-none`}
            >
              <span className="material-symbols-outlined">tour</span>
              <p>Categories </p>
            </Link>
          </div>

          {/* <div className="w-full flex items-center justify-end mt-10">
            <Link
              to="/admin/tour/create"
              onClick={() => {
                setActive("tour");
                setOpenSidebar(false);
              }}
              className={`flex items-center w-9/12 gap-3 ${
                active === "tour" ? "bg-mywhite" : " text-white"
              }  p-3 cursor-pointer rounded-l-md select-none`}
            >
              <span className="material-symbols-outlined">add_circle</span>
              <p>Create Tour</p>
            </Link>
          </div> */}

          {/* <div className="w-full flex items-center justify-end mt-10">
            <Link
              to="/admin/activities"
              onClick={() => {
                setActive("activities");
                setOpenSidebar(false);
              }}
              className={`flex items-center w-9/12 gap-3 ${
                active === "activities" ? "bg-mywhite" : " text-white"
              }   p-3 cursor-pointer rounded-l-md select-none`}
            >
              <span  className="material-symbols-outlined">hiking</span>
              <p> Activities</p>
            </Link>
          </div> */}

          {/* <div className="w-full flex items-center justify-end mt-10">
            <Link
              to="/admin/activity/create"
              onClick={() => {
                setActive("activity");
                setOpenSidebar(false);
              }}
              className={`flex items-center w-9/12 gap-3 ${
                active === "activity" ? "bg-mywhite" : " text-white"
              }   p-3 cursor-pointer rounded-l-md select-none`}
            >
              <span className="material-symbols-outlined">add_circle</span>
              <p>Create Activity</p>
            </Link>
          </div> */}
        </div>
      )}
    </>
  );
}
