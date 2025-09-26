import React, { useContext, useEffect, useState } from "react";
import Wbsidebar from "../../../ui/Wbsidebar";
import WebsiteFormOldOption from "./OldwebOption";
import { useLocation, useNavigate } from "react-router";
import { LinkIcon, Plus } from "lucide-react";
const Attachment = ({ children = "Attachment" }) => (
  <span className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded border border-gray-200 bg-[#EBF0EB] text-[#536047] hover:cursor-pointer shadow-sm">
    {children}
  </span>
);
const ActionChip = ({ label, Icon = Plus, active, onClick: click, to }) => {
  const navigate = useNavigate();
  return (
    <button
      type="button"
      onClick={() => {
        console.log(to);
        click();
        navigate(to);
      }}
      className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium border hover:cursor-pointer ${
        active
          ? "border-[#8BB353] bg-[#f6fbef] text-[#476430] shadow-lg"
          : "border-[#cadbb9] bg-white hover:bg-[#f6fbef] text-[#476430] shadow"
      }`}
    >
      <Icon className="w-3 h-3" />
      {label}
    </button>
  );
};

export default function WebSolutionForm() {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeChip, setActiveChip] = useState("Create New website"); // Default active chip

  // Sync activeChip with the current route so the correct chip is highlighted
  useEffect(() => {
    if (location.pathname === "/dashboard/web-solution/seo/exWeb") {
      setActiveChip("Use existing website");
    } else {
      // default to new website for the base seo route and any other
      setActiveChip("Create New website");
    }
  }, [location.pathname]);
  const actionChips = [
    {
      label: "Create New website",
      Icon: Plus,
      to: "/dashboard/web-solution/seo",
    },
    {
      label: "Use existing website",
      Icon: LinkIcon,
      to: "/dashboard/web-solution/seo/exWeb",
    },
  ];
  // Handle action chip click
  const handleChipClick = (label) => {
    setActiveChip(label);
    // navigation is handled by ActionChip which receives the `to` prop
  };
  return (
    <Wbsidebar>
      <div className="flex flex-wrap lg:flex-nowrap gap-3 mb-6">
        {actionChips.map(({ label, Icon, to }) => (
          <ActionChip
            key={label}
            label={label}
            Icon={Icon}
            active={activeChip === label}
            to={to}
            onClick={() => handleChipClick(label)}
          />
        ))}
      </div>
      {location.pathname === "/dashboard/web-solution/seo" ? (
        <form className="space-y-4">
          <div>
            <label className="block text-xs text-gray-600 mb-1">
              Name of the domain
            </label>
            <input
              className="w-full rounded border border-gray-200 bg-white text-gray-800 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#8BB353]"
              placeholder="Enter here"
            />
          </div>
          <div>
            <label className="block text-xs text-gray-600 mb-1">
              Describe about your website
            </label>
            <textarea
              rows={4}
              className="w-full rounded border border-gray-200 bg-white text-gray-800 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#8BB353] resize-none"
              placeholder="Enter here"
            />
          </div>
          <div>
            <label className="block text-xs text-gray-600 mb-1">
              Upload Logo
            </label>
            <div className="flex gap-2">
              <input
                type="file"
                accept=".jpg,.jpeg,.png,.svg"
                className="flex-1 file:bg-[#EBF0EB] file:text-[#536047] rounded border hover:cursor-pointer file:hover:cursor-pointer border-gray-200 bg-white px-3 py-2 text-xs text-gray-500 file:px-2 file:py-1 file:border file:border-gray-300 file:rounded-md"
                placeholder="*.jpg,*.png,*.svg"
              />
            </div>
          </div>
          <div>
            <label className="block text-xs text-gray-600 mb-1">
              Name the competitors
            </label>
            <input
              className="w-full rounded border border-gray-200 bg-white text-gray-800 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#8BB353]"
              placeholder="Enter here"
            />
          </div>
          <div>
            <label className="block text-xs text-gray-600 mb-1">
              Upload contents (photos, Audio, Video etc.)
            </label>
            <div className="flex gap-2 mb-2">
              <input
                type="file"
                accept="image/*,video/*,audio/*"
                className="flex-1 file:bg-[#EBF0EB] file:text-[#536047] rounded border hover:cursor-pointer file:hover:cursor-pointer border-gray-200 bg-white px-3 py-2 text-xs text-gray-500 file:px-2 file:py-1 file:border file:border-gray-300 file:rounded-md"
                placeholder="file"
              />
            </div>
            <div className="flex flex-wrap gap-2 mb-2">
              {Array.from({ length: 8 }).map((_, i) => (
                <Attachment key={i}>Attachment 1</Attachment>
              ))}
            </div>
          </div>

          <p className="text-xs text-gray-500">
            Please prepare your company profile first to improve performance.
          </p>

          <button
            type="button"
            className="w-full py-3 rounded-xl text-white font-semibold bg-[#8BB353] hover:bg-[#73b04a] shadow-lg shadow-[#8BB353]/30"
            onClick={() => console.log("Start Processing", activeChip)}
          >
            Start Processing
          </button>
        </form>
      ) : (
        <WebsiteFormOldOption />
      )}
    </Wbsidebar>
  );
}
