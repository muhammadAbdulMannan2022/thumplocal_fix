import { useState } from "react";
import Wbsidebar from "../../../ui/Wbsidebar";
import React from "react";

const Attachment = ({ children = "Attachment" }) => (
  <span className="inline-flex items-center justify-center gap-1 text-xs px-2 py-1.5 rounded border border-gray-200 bg-[#EBF0EB] text-[#536047] hover:cursor-pointer shadow-sm min-w-0 truncate text-center">
    {children}
  </span>
);

export default function WbuilderInputs() {
  const [formData, setFormData] = useState({
    websiteName: "",
    description: "",
    competitors: "",
  });

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleStartProcessing = () => {
    console.log("Processing form data:", formData);
    // Add your processing logic here
  };

  return (
    <Wbsidebar>
      <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6">
        <form className="space-y-3 sm:space-y-4">
          <div>
            <label className="block text-xs sm:text-sm text-gray-600 mb-1 font-medium">
              Name of the Website
            </label>
            <input
              className="w-full rounded border border-gray-200 bg-white text-gray-800 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#8BB353] focus:border-[#8BB353]"
              placeholder="Enter here"
              value={formData.websiteName}
              onChange={(e) => handleInputChange("websiteName", e.target.value)}
            />
          </div>

          <div>
            <label className="block text-xs sm:text-sm text-gray-600 mb-1 font-medium">
              Describe about you website
            </label>
            <textarea
              rows={3}
              className="w-full rounded border border-gray-200 bg-white text-gray-800 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#8BB353] focus:border-[#8BB353] resize-none"
              placeholder="Enter here"
              value={formData.description}
              onChange={(e) => handleInputChange("description", e.target.value)}
            />
          </div>

          <div>
            <label className="block text-xs sm:text-sm text-gray-600 mb-1 font-medium">
              Upload Logo
            </label>
            <div className="w-full">
              <input
                type="file"
                accept=".jpg,.jpeg,.png,.svg"
                className="w-full file:bg-[#EBF0EB] file:text-[#536047] rounded border hover:cursor-pointer file:hover:cursor-pointer border-gray-200 bg-white px-3 py-2.5 text-xs text-gray-500 file:px-3 file:py-2 file:border file:border-gray-300 file:rounded-md file:mr-3"
                placeholder="*.jpg,*.png,*.svg"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs sm:text-sm text-gray-600 mb-1 font-medium">
              Name the competitors
            </label>
            <input
              className="w-full rounded border border-gray-200 bg-white text-gray-800 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#8BB353] focus:border-[#8BB353]"
              placeholder="Enter here"
              value={formData.competitors}
              onChange={(e) => handleInputChange("competitors", e.target.value)}
            />
          </div>

          <div>
            <label className="block text-xs sm:text-sm text-gray-600 mb-1 font-medium">
              Upload contents (photos, Audio, Video etc.)
            </label>
            <div className="w-full mb-3">
              <input
                type="file"
                accept="image/*,video/*,audio/*"
                className="w-full file:bg-[#EBF0EB] file:text-[#536047] rounded border hover:cursor-pointer file:hover:cursor-pointer border-gray-200 bg-white px-3 py-2.5 text-xs text-gray-500 file:px-3 file:py-2 file:border file:border-gray-300 file:rounded-md file:mr-3"
                placeholder="file"
              />
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 mb-2">
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
            className="w-full py-3 sm:py-4 rounded-xl text-white font-semibold bg-[#8BB353] hover:bg-[#73b04a] shadow-lg shadow-[#8BB353]/30 transition-colors text-sm sm:text-base"
            onClick={handleStartProcessing}
          >
            Start Processing
          </button>
        </form>
      </div>
    </Wbsidebar>
  );
}
