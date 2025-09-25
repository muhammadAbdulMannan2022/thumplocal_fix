import React from "react";
import Sidebar from "../components/dashboard/Sidebar";
import Topbar from "../components/dashboard/Topbar";
import WebSolutionForm from "../components/dashboard/WebSolution/WebSolutionForm";
import SeoPanel from "../components/dashboard/SeoPanel";
import { Outlet } from "react-router";

export default function Dashboard() {
  return (
    <div className="bg-gray-50 py-4">
      <div className="container mx-auto px-4">
        <Topbar />
        <div className="flex gap-6">
          <Sidebar />
          <div className="flex-1 flex flex-col xl:flex-row gap-6">
            {/* <div className="w-full xl:max-w-[420px]">
              <WebSolutionForm />
            </div>
            <div className="flex-1">
              <SeoPanel />
            </div> */}
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
