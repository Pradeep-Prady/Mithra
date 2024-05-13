import React from "react";
import Sidebar from "../../components/admin/Sidebar";
import { Outlet } from "react-router-dom";

export default function Admin() {
  return (
    <>
      <div className="lg:hidden flex items-center justify-center w-full h-screen">
        <p className="text-xl font-semibold" >Only accessible in Desktop</p>
      </div>

      <div className="w-full hidden lg:flex min-h-screen max-h-auto ">
        <div className="w-[20%] hidden sm:block">
          <Sidebar />
        </div>
        <div className="w-full sm:w-[80%] px-3 sm:px-10 bg-mywhite">
          <Outlet />
        </div>
      </div>
    </>
  );
}
