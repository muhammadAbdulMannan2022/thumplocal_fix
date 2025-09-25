import React from "react";
import WebSolutionForm from "./WebSolutionForm";
import SeoPanel from "../SeoPanel";

export default function WebSolutionLayout() {
  return (
    <div>
      <div className="w-full xl:max-w-[420px]">
        <WebSolutionForm />
      </div>
      <div className="flex-1">
        <SeoPanel />
      </div>
    </div>
  );
}
