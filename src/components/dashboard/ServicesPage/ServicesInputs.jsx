import React, { useState } from "react"; // Add React to the import
import Wbsidebar from "../../../ui/Wbsidebar";

export default function ServicesInputs() {
  const [formData, setFormData] = useState({
    nameOfPage: "",
    description: "",
    targetAudience: "",
    competitors: "",
    serviceType: "",
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
              Website link (Link)
            </label>
            <input
              className="w-full rounded border border-gray-200 bg-white text-gray-800 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#8BB353]"
              placeholder="Enter here"
              value={formData.nameOfPage}
              onChange={(e) => handleInputChange("nameOfPage", e.target.value)}
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
              Describe your target audience
            </label>
            <textarea
              rows={3}
              className="w-full rounded border border-gray-200 bg-white text-gray-800 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#8BB353] resize-none"
              placeholder="Enter here"
              value={formData.targetAudience}
              onChange={(e) =>
                handleInputChange("targetAudience", e.target.value)
              }
            />
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
              Type of your service
            </label>
            <input
              className="w-full rounded border border-gray-200 bg-white text-gray-800 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#8BB353]"
              placeholder="Enter here"
              value={formData.serviceType}
              onChange={(e) => handleInputChange("serviceType", e.target.value)}
            />
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
