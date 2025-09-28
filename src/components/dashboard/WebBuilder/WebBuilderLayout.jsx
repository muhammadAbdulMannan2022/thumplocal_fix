import React from "react";

import { Outlet } from "react-router";
import WbuilderInputs from "./WebBuilderInputs";
import WebBuilderPage from "./WebBuilderPage";

export default function WebBuilderLayout() {
  return (
    <div className="flex flex-col xl:flex-row items-start gap-3 sm:gap-5">
      <div className="w-full xl:max-w-[420px]">
        <WbuilderInputs />
      </div>
      <div className="flex-1 w-full">
        <WebBuilderPage />
      </div>
    </div>
  );
}
