import React from "react";

import { Outlet } from "react-router";
import ServicesInputs from "./ServicesInputs";
import ServicesPage from "./ServicesPage";

export default function ServicesPageLayout() {
  return (
    <div className="flex flex-col xl:flex-row items-start gap-3 sm:gap-5">
      <div className="w-full xl:max-w-[420px]">
        <ServicesInputs />
      </div>
      <div className="flex-1 w-full h-full">
        <ServicesPage />
      </div>
    </div>
  );
}
