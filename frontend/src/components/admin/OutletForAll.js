import React from "react";
import { Outlet } from "react-router-dom";

export default function OutletForAll() {
  return (
    <div className="w-full h-full">
      <Outlet />
    </div>
  );
}
