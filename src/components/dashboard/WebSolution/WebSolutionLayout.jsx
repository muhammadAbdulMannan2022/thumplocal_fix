import React from "react";
import WebSolutionForm from "./WebSolutionForm";
import SeoPanel from "./SeoPanel";
import { Outlet } from "react-router";

export default function WebSolutionLayout() {
  return (
    <div className="flex flex-col xl:flex-row items-start gap-3 sm:gap-5">
      <div className="w-full xl:max-w-[420px]">
        <WebSolutionForm />
      </div>
      <div className="flex-1 w-full">
        {/* <SeoPanel /> */}
        <Outlet />
      </div>
    </div>
  );
}
