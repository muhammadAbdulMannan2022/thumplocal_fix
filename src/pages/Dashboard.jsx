import React from "react";
import Sidebar from "../components/dashboard/Sidebar";
import Topbar from "../components/dashboard/Topbar";
import { Outlet } from "react-router";

export default function Dashboard() {
  return (
    <div className="bg-gray-50 py-2 sm:py-4">
      <div className="container mx-auto px-2 sm:px-4 min-h-screen">
        <Topbar />
        <div className="flex gap-2 sm:gap-6 justify-between">
          <Sidebar />
          <div className="content-area flex-1 flex flex-col gap-4 sm:gap-6 bg-[url('/bg.png')] bg-no-repeat bg-center bg-cover min-h-0">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
