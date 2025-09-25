import React, { useState } from "react";
import { Search, FileText, Globe, Plus, Link as LinkIcon } from "lucide-react";

const Tab = ({ label, Icon, active, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className={`flex flex-1 min-w-0 items-center gap-2  py-2 rounded-b-2xl text-sm font-medium transition-all border hover:cursor-pointer ${
      active
        ? "bg-[#E8F4DB] text-[#374D2B] border-[#A2C872] shadow-[0_6px_16px_rgba(142,179,83,0.2)]"
        : "text-gray-400 border-transparent hover:bg-gray-50"
    }`}
  >
    {!active && (
      <span
        className={`w-6 h-6 grid place-items-center rounded-full flex-shrink-0 ${
          active
            ? "bg-[#8BB353] text-white shadow"
            : "bg-gray-100 text-gray-400"
        }`}
      >
        <Icon className="w-4 h-4" />
      </span>
    )}
    <span className="whitespace-nowrap text-[13px] leading-none text-center w-full">
      {label}
    </span>
  </button>
);

const ActionChip = ({ label, Icon = Plus, active, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium border ${
      active
        ? "border-[#8BB353] bg-[#f6fbef] text-[#476430] shadow-lg"
        : "border-[#cadbb9] bg-white hover:bg-[#f6fbef] text-[#476430] shadow"
    }`}
  >
    <Icon className="w-3 h-3" />
    {label}
  </button>
);

const Attachment = ({ children = "Attachment" }) => (
  <span className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded border border-gray-200 bg-white shadow-sm">
    {children}
  </span>
);

const WebSolutionForm = () => {
  const [activeTab, setActiveTab] = useState("SEO Service"); // Default active tab
  const [activeChip, setActiveChip] = useState("Create New website"); // Default active chip

  const tabs = [
    { label: "SEO Service", Icon: Search },
    { label: "Service pages", Icon: FileText },
    { label: "Web Builder", Icon: Globe },
  ];

  const actionChips = [
    { label: "Create New website", Icon: Plus },
    { label: "Use existing website", Icon: LinkIcon },
  ];

  // Handle tab click
  const handleTabClick = (label) => {
    setActiveTab(label);
    handleAction(label, activeChip); // Trigger action based on tab and chip
  };

  // Handle action chip click
  const handleChipClick = (label) => {
    setActiveChip(label);
    handleAction(activeTab, label); // Trigger action based on tab and chip
  };

  // Handle actions based on selected tab and chip
  const handleAction = (tab, chip) => {
    console.log(`Selected Tab: ${tab}, Selected Chip: ${chip}`);
    // Add your action logic here based on tab and chip combination
    switch (tab) {
      case "SEO Service":
        if (chip === "Create New website") {
          console.log("Action: Start SEO optimization for a new website");
          // Add logic for creating a new website with SEO service
        } else if (chip === "Use existing website") {
          console.log("Action: Optimize SEO for an existing website");
          // Add logic for using an existing website with SEO service
        }
        break;
      case "Service pages":
        if (chip === "Create New website") {
          console.log("Action: Create service pages for a new website");
          // Add logic for creating service pages for a new website
        } else if (chip === "Use existing website") {
          console.log("Action: Update service pages for an existing website");
          // Add logic for updating service pages on an existing website
        }
        break;
      case "Web Builder":
        if (chip === "Create New website") {
          console.log("Action: Build a new website using Web Builder");
          // Add logic for building a new website
        } else if (chip === "Use existing website") {
          console.log("Action: Modify an existing website using Web Builder");
          // Add logic for modifying an existing website
        }
        break;
      default:
        console.log("No action defined for this combination");
    }
  };

  return (
    <div className="relative bg-white border border-gray-200 rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.06)] px-6 pt-9 pb-6">
      <div className="absolute left-1/2 -top-7 -translate-x-1/2">
        <div className="flex items-center justify-center px-12 w-[450px] py-3 rounded-lg max-w-[430px] mt-5 h-[60px] border border-gray-200 bg-white shadow-none text-base font-semibold text-gray-800 leading-none">
          Web Solution
        </div>
      </div>

      <div className="mb-6 w-full">
        <div className="flex flex-nowrap items-center rounded-[20px] border px-2 border-gray-200 bg-white py-2 shadow-sm gap-1">
          {tabs.map(({ label, Icon }) => (
            <Tab
              key={label}
              label={label}
              Icon={Icon}
              active={activeTab === label}
              onClick={() => handleTabClick(label)}
            />
          ))}
        </div>
      </div>

      <div className="flex flex-wrap lg:flex-nowrap gap-3 mb-6">
        {actionChips.map(({ label, Icon }) => (
          <ActionChip
            key={label}
            label={label}
            Icon={Icon}
            active={activeChip === label}
            onClick={() => handleChipClick(label)}
          />
        ))}
      </div>

      <form className="space-y-4">
        <div>
          <label className="block text-xs text-gray-600 mb-1">
            Name of the domain
          </label>
          <input
            className="w-full rounded border border-gray-200 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#8BB353]"
            placeholder="Enter here"
          />
        </div>
        <div>
          <label className="block text-xs text-gray-600 mb-1">
            Describe about your website
          </label>
          <textarea
            rows={4}
            className="w-full rounded border border-gray-200 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#8BB353]"
            placeholder="Enter here"
          />
        </div>
        <div>
          <label className="block text-xs text-gray-600 mb-1">
            Upload Logo
          </label>
          <div className="flex gap-2">
            <button
              type="button"
              className="px-3 py-2 text-sm rounded-md border border-gray-200 bg-gray-50 hover:bg-gray-100"
            >
              Choose file
            </button>
            <input
              className="flex-1 rounded border border-gray-200 bg-white px-3 py-2 text-xs text-gray-500"
              placeholder="as4klj4g4skd1as4d.jpg"
            />
          </div>
        </div>
        <div>
          <label className="block text-xs text-gray-600 mb-1">
            Name the competitors
          </label>
          <input
            className="w-full rounded border border-gray-200 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#8BB353]"
            placeholder="Enter here"
          />
        </div>
        <div>
          <label className="block text-xs text-gray-600 mb-1">
            Upload contents (photos, Audio, Video etc.)
          </label>
          <div className="flex gap-2 mb-2">
            <button
              type="button"
              className="px-3 py-2 text-sm rounded-md border border-gray-200 bg-gray-50 hover:bg-gray-100"
            >
              Choose file
            </button>
            <input
              className="flex-1 rounded border border-gray-200 bg-white px-3 py-2 text-xs text-gray-500"
              placeholder=""
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
          onClick={() => handleAction(activeTab, activeChip)}
        >
          Start Processing
        </button>
      </form>
    </div>
  );
};

export default WebSolutionForm;
