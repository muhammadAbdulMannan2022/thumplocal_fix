import React from "react";

import { Outlet } from "react-router";
import ServicesInputs from "./ServicesInputs";
import ServicesPage from "./ServicesPage";

export default function ServicesPageLayout() {
  return (
    <div className="flex items-start gap-5">
      <div className="w-full xl:max-w-[420px]">
        <ServicesInputs />
      </div>
      <div className="flex-1 h-full">
        <ServicesPage />
      </div>
    </div>
  );
}
