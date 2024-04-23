import React from "react";
import Sidebar from "../../components/admin/Sidebar";
import { Outlet } from "react-router-dom";

export default function Admin() {
  return (
    <div className="w-full min-h-screen max-h-auto flex ">
      <div className="w-[20%] hidden sm:block">
        <Sidebar />
      </div>
      <div className="w-full sm:w-[80%] px-3 sm:px-10 bg-mywhite">
        <Outlet />
      </div>
    </div>
  );
}
