import React from "react";

const Topbar = () => {
  return (
    <div className="flex items-center justify-between py-2 px-4 bg-white/90 border border-gray-100 rounded-lg shadow-sm mb-4">
      <div>
        <img className="h-10" src="/logo.png" alt="" />
      </div>
      <div className="flex items-center gap-3">
        <span className="text-sm text-gray-500">Md. Sajib</span>
        <img
          src={`https://api.dicebear.com/7.x/initials/svg?seed=MS&backgroundType=gradientLinear&radius=50`}
          alt="avatar"
          className="w-9 h-9 rounded-full border border-gray-200 shadow-sm"
        />
      </div>
    </div>
  );
};

export default Topbar;
