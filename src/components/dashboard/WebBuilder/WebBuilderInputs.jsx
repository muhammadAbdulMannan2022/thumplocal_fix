import { useState } from "react";
import Wbsidebar from "../../../ui/Wbsidebar";
import React from "react";

const Attachment = ({ children = "Attachment" }) => (
  <span className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded border border-gray-200 bg-[#EBF0EB] text-[#536047] hover:cursor-pointer shadow-sm">
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
      <div className="bg-white rounded-lg shadow-sm p-6">
        <form className="space-y-4">
          <div>
            <label className="block text-xs text-gray-600 mb-1">
              Name of the Website
            </label>
            <input
              className="w-full rounded border border-gray-200 bg-white text-gray-800 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#8BB353]"
              placeholder="Enter here"
              value={formData.websiteName}
              onChange={(e) => handleInputChange("websiteName", e.target.value)}
            />
          </div>

          <div>
            <label className="block text-xs text-gray-600 mb-1">
              Describe about you website
            </label>
            <textarea
              rows={4}
              className="w-full rounded border border-gray-200 bg-white text-gray-800 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#8BB353] resize-none"
              placeholder="Enter here"
              value={formData.description}
              onChange={(e) => handleInputChange("description", e.target.value)}
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
              value={formData.competitors}
              onChange={(e) => handleInputChange("competitors", e.target.value)}
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
            className="w-full py-3 rounded-xl text-white font-semibold bg-[#8BB353] hover:bg-[#73b04a] shadow-lg shadow-[#8BB353]/30 transition-colors"
            onClick={handleStartProcessing}
          >
            Start Processing
          </button>
        </form>
      </div>
    </Wbsidebar>
  );
}
