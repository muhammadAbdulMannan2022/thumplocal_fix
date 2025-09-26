"use client";

import React, { useState } from "react";
import { LocationManager } from "./LocationManager";
import { useNavigate } from "react-router";

export function BusinessInfoForm() {
  const [formData, setFormData] = useState({
    businessName: "",
    websiteUrl: "",
    businessDescription: "",
    businessType: "",
    businessCategory: "",
  });
  const navigate = useNavigate();

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    navigate("/dashboard/listing/time");
    // Add form submission logic here
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-6xl mx-auto p-8 bg-white rounded-xl shadow-sm"
    >
      {/* Basic Information Section */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Basic Information
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left 2 Columns (inputs) */}
          <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Business Name *
              </label>
              <input
                type="text"
                placeholder="Enter business name"
                value={formData.businessName}
                onChange={(e) =>
                  handleInputChange("businessName", e.target.value)
                }
                className="w-full px-3 py-2 border border-gray-300 placeholder-gray-400 
                   rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8BB353] focus:border-transparent text-gray-800"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Website URL
              </label>
              <input
                type="url"
                placeholder="https://example.com"
                value={formData.websiteUrl}
                onChange={(e) =>
                  handleInputChange("websiteUrl", e.target.value)
                }
                className="w-full px-3 py-2 border border-gray-300 placeholder-gray-400 
                   rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8BB353] focus:border-transparent text-gray-800"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Business Type (Location based)
              </label>
              <input
                type="text"
                placeholder="Ex: Region based or international"
                value={formData.businessType}
                onChange={(e) =>
                  handleInputChange("businessType", e.target.value)
                }
                className="w-full px-3 py-2 border border-gray-300 placeholder-gray-400 
                   rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8BB353] focus:border-transparent text-gray-800"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Business Category *
              </label>
              <input
                type="text"
                placeholder="Enter category (e.g., Retail, Services)"
                value={formData.businessCategory}
                onChange={(e) =>
                  handleInputChange("businessCategory", e.target.value)
                }
                className="w-full px-3 py-2 border border-gray-300 placeholder-gray-400 
                   rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8BB353] focus:border-transparent text-gray-800"
                required
              />
            </div>
          </div>

          {/* Right Column (Textarea spanning height) */}
          <div className="flex flex-col">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Business Description *
            </label>
            <textarea
              placeholder="Describe your business"
              value={formData.businessDescription}
              onChange={(e) =>
                handleInputChange("businessDescription", e.target.value)
              }
              className="flex-1 min-h-[140px] px-3 py-2 border border-gray-300 placeholder-gray-400 
                 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8BB353] 
                 focus:border-transparent resize-none text-gray-800"
              required
            />
          </div>
        </div>
      </div>

      {/* Location Manager Section */}
      <LocationManager />

      {/* Submit */}
      <div className="mt-8 flex justify-center">
        <button
          type="submit"
          className="bg-[#8BB353] hover:bg-[#7AA142] text-white px-8 py-3 rounded-lg transition-colors shadow-sm"
        >
          Submit
        </button>
      </div>
    </form>
  );
}
