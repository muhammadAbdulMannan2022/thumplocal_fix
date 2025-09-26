import React from "react";
import WebSolutionForm from "./WebSolutionForm";
import SeoPanel from "./SeoPanel";
import { Outlet } from "react-router";

export default function WebSolutionLayout() {
  return (
    <div className="flex items-start gap-5">
      <div className="w-full xl:max-w-[420px]">
        <WebSolutionForm />
      </div>
      <div className="flex-1">
        {/* <SeoPanel /> */}
        <Outlet />
      </div>
    </div>
  );
}
