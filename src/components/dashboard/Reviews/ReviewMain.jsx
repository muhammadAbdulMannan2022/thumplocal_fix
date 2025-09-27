import React from "react";
import { Outlet } from "react-router";

export default function ReviewLayout() {
  return (
    <div className="w-full">
      <div className="w-full items-center flex justify-center bg-white shadow rounded-lg py-3">
        <h1 className="text-gray-800 text-lg font-bold">
          information's For listing service
        </h1>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}
