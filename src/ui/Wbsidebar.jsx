import React, { createContext, useState } from "react";
import { Search, FileText, Globe, Plus, Link as LinkIcon } from "lucide-react";
import { useLocation, useNavigate } from "react-router";

const Tab = ({ label, Icon, active: activeArray, onClick: click, to }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const active = activeArray.includes(location.pathname);
  return (
    <button
      type="button"
      onClick={() => {
        click();
        navigate(to);
      }}
      className={`flex flex-1 min-w-0 items-center justify-center flex-col sm:flex-row gap-0.5 sm:gap-2 py-1.5 sm:py-3 px-0.5 sm:px-2 rounded-b-2xl text-xs sm:text-sm font-medium transition-all border hover:cursor-pointer ${
        active
          ? "bg-[#E8F4DB] text-[#374D2B] border-[#A2C872] shadow-[0_6px_16px_rgba(142,179,83,0.2)]"
          : "text-gray-400 border-transparent hover:bg-gray-50"
      }`}
    >
      {!active && (
        <span
          className={`w-4 h-4 sm:w-6 sm:h-6 grid place-items-center rounded-full flex-shrink-0 ${
            active
              ? "bg-[#8BB353] text-white shadow"
              : "bg-gray-100 text-gray-400"
          }`}
        >
          <Icon className="w-2.5 h-2.5 sm:w-4 sm:h-4" />
        </span>
      )}
      <span className="text-[10px] sm:text-[13px] leading-tight text-center truncate max-w-full">
        {label}
      </span>
    </button>
  );
};
const Wbsidebar = ({ children }) => {
  const [activeTab, setActiveTab] = useState("SEO Service"); // Default active tab

  const [formDataExWeb, setFormDataExWeb] = useState({
    websiteLink: "",
    description: "",
    targetAudience: "",
    competitors: "",
  });
  const handleInputChangeExWeb = (field, value) => {
    setFormDataExWeb((prev) => ({ ...prev, [field]: value }));
  };
  const handleStartProcessingExWeb = () => {
    console.log("Processing form data:", formData);
    // Add your processing logic here
  };
  const tabs = [
    {
      label: "SEO Service",
      Icon: Search,
      to: "/dashboard/web-solution/seo",
      active: [
        "/dashboard/web-solution/seo",
        "/dashboard/web-solution/seo/exWeb",
      ],
    },
    {
      label: "Service pages",
      Icon: FileText,
      to: "/dashboard/web-solution-sp",
      active: ["/dashboard/web-solution-sp"],
    },
    {
      label: "Web Builder",
      Icon: Globe,
      to: "/dashboard/web-builder",
      active: ["/dashboard/web-builder"],
    },
  ];

  // Handle tab click
  const handleTabClick = (label) => {
    setActiveTab(label);
  };

  // Handle actions based on selected tab and chip
  const handleAction = (tab, chip) => {
    console.log(`Selected Tab: ${tab}, Selected Chip: ${chip}`);
    // Add your action logic here based on tab and chip combination
    switch (tab) {
      case "SEO Service":
        console.log("seo");
        break;
      case "Service pages":
        console.log("sp");
        break;
      case "Web Builder":
        console.log("wb");
        break;
      default:
        console.log("No action defined for this combination");
    }
  };

  return (
    <div className="relative bg-white border border-gray-200 rounded-2xl sm:rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.06)] px-3 sm:px-6 pt-8 sm:pt-9 pb-4 sm:pb-6">
      <div className="absolute left-1/2 -top-6 sm:-top-7 -translate-x-1/2">
        <div className="flex items-center justify-center px-4 sm:px-12 w-[280px] sm:w-[450px] py-2 sm:py-3 rounded-lg max-w-[95vw] sm:max-w-[430px] mt-4 sm:mt-5 h-[50px] sm:h-[60px] border border-gray-200 bg-white shadow-none text-sm sm:text-base font-semibold text-gray-800 leading-none">
          Web Solution
        </div>
      </div>

      <div className="mb-4 sm:mb-6 w-full">
        <div className="flex flex-nowrap items-center rounded-[16px] sm:rounded-[20px] border px-1 sm:px-2 border-gray-200 bg-white shadow-sm gap-0.5 sm:gap-1">
          {tabs.map(({ label, Icon, to, active }) => (
            <Tab
              key={label}
              label={label}
              Icon={Icon}
              to={to}
              active={active}
              onClick={() => handleTabClick(label)}
            />
          ))}
        </div>
      </div>

      {/* children */}
      {children}
    </div>
  );
};

export default Wbsidebar;
