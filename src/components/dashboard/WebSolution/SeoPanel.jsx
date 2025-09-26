import React from "react";
import { Download, ChevronDown, Copy } from "lucide-react";
import { Outlet } from "react-router";

const Badge = ({ children }) => (
  <span className="inline-flex items-center gap-2 text-xs px-3 py-1 rounded-md border border-gray-200 bg-white shadow-sm">
    {children}
  </span>
);

const SeoPanel = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default SeoPanel;
