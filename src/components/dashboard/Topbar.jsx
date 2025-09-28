import React from "react";

const Topbar = () => {
  return (
    <div className="flex items-center justify-between py-2 px-2 sm:px-4 bg-white/90 border border-gray-100 rounded-lg shadow-sm mb-4">
      <div className="flex items-center">
        <img className="h-8 sm:h-10" src="/logo.png" alt="Logo" />
      </div>
      <div className="flex items-center gap-2 sm:gap-3">
        <span className="text-xs sm:text-sm text-gray-500 hidden sm:block">Md. Sajib</span>
        <img
          src={`https://api.dicebear.com/7.x/initials/svg?seed=MS&backgroundType=gradientLinear&radius=50`}
          alt="avatar"
          className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-gray-200 shadow-sm"
        />
      </div>
    </div>
  );
};

export default Topbar;
