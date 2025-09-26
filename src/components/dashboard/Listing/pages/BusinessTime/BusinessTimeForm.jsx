import React, { useState } from "react";
import { Upload, X } from "lucide-react";

export function BusinessForm() {
  const [formData, setFormData] = useState({
    // Business Times
    businessDays: "",
    businessHourFrom: "",
    businessHourTo: "",
    paymentMethods: "",

    // Service Areas
    zipCodes: "",
    cities: "",
    areaCode: "",
    languages: "",

    // Media & Branding
    businessLogo: null,
    coverPhoto: null,
    photos: null,
    video: null,

    // Customer Interaction
    promotionalImage: null,
    ctaButtonName: "",
    menuBookingUrl: "",
  });

  const [fileNames, setFileNames] = useState({
    businessLogo: "",
    coverPhoto: "",
    photos: "",
    video: "",
    promotionalImage: "",
  });

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleFileChange = (field, file) => {
    if (file) {
      setFormData((prev) => ({ ...prev, [field]: file }));
      setFileNames((prev) => ({ ...prev, [field]: file.name }));
    }
  };

  const clearFile = (field) => {
    setFormData((prev) => ({ ...prev, [field]: null }));
    setFileNames((prev) => ({ ...prev, [field]: "" }));
  };

  const FileUploadButton = ({ field, label, accept = "*/*" }) => (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <div className="">
        <label
          className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 
                         border border-gray-300 rounded-lg cursor-pointer transition-colors mb-1"
        >
          <Upload className="w-4 h-4 text-gray-600" />
          <span className="text-sm text-gray-700">Choose file</span>
          <input
            type="file"
            accept={accept}
            onChange={(e) => handleFileChange(field, e.target.files[0])}
            className="hidden"
          />
        </label>
        {fileNames[field] && (
          <div className="flex items-center gap-2 px-3 py-1 w-fit bg-green-50 border border-green-200 rounded-lg">
            <span className="text-sm text-green-700 truncate max-w-32">
              {fileNames[field]}
            </span>
            <button
              type="button"
              onClick={() => clearFile(field)}
              className="text-green-600 hover:text-green-800"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-6xl mx-auto p-8 bg-white rounded-xl shadow-sm space-y-5"
    >
      {/* Business Times Section */}
      <div className="bg-gray-50 p-6 rounded-lg">
        <h2 className="text-xl font-semibold text-gray-800 mb-6">
          Business Times
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Business Days
            </label>
            <input
              type="text"
              placeholder="Select dates"
              value={formData.businessDays}
              onChange={(e) =>
                handleInputChange("businessDays", e.target.value)
              }
              className="w-full px-3 py-2 border border-gray-300 placeholder-gray-400 
                       rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8BB353] 
                       focus:border-transparent text-gray-800"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Business hour (From)
            </label>
            <input
              type="time"
              value={formData.businessHourFrom}
              onChange={(e) =>
                handleInputChange("businessHourFrom", e.target.value)
              }
              className="w-full px-3 py-2 border border-gray-300 placeholder-gray-400 
                       rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8BB353] 
                       focus:border-transparent text-gray-800"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Business hour (To)
            </label>
            <input
              type="time"
              value={formData.businessHourTo}
              onChange={(e) =>
                handleInputChange("businessHourTo", e.target.value)
              }
              className="w-full px-3 py-2 border border-gray-300 placeholder-gray-400 
                       rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8BB353] 
                       focus:border-transparent text-gray-800"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Payment methods name
            </label>
            <input
              type="text"
              placeholder="Enter here"
              value={formData.paymentMethods}
              onChange={(e) =>
                handleInputChange("paymentMethods", e.target.value)
              }
              className="w-full px-3 py-2 border border-gray-300 placeholder-gray-400 
                       rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8BB353] 
                       focus:border-transparent text-gray-800"
            />
          </div>
        </div>
      </div>

      {/* Service Areas Section */}
      <div className="bg-gray-50 p-6 rounded-lg">
        <h2 className="text-xl font-semibold text-gray-800 mb-6">
          Service areas
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {["zipCodes", "cities", "areaCode", "languages"].map((field, idx) => (
            <div key={idx}>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {field === "zipCodes"
                  ? "ZIP codes"
                  : field === "cities"
                  ? "Cities"
                  : field === "areaCode"
                  ? "Area code"
                  : "Languages"}
              </label>
              <input
                type="text"
                placeholder="Enter here"
                value={formData[field]}
                onChange={(e) => handleInputChange(field, e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 placeholder-gray-400 
                         rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8BB353] 
                         focus:border-transparent text-gray-800"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Media & Branding Section */}
      <div className="bg-gray-50 p-6 rounded-lg">
        <h2 className="text-xl font-semibold text-gray-800 mb-6">
          Media & Branding
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <FileUploadButton
            field="businessLogo"
            label="Business Logo"
            accept="image/*"
          />
          <FileUploadButton
            field="coverPhoto"
            label="Cover Photo (main Banner)"
            accept="image/*"
          />
          <FileUploadButton
            field="photos"
            label="Photos (Others 5-Max)"
            accept="image/*"
          />
          <FileUploadButton
            field="video"
            label="Video (Optional)"
            accept="video/*"
          />
        </div>
      </div>

      {/* Customer Interaction Section */}
      <div className="bg-gray-50 p-6 rounded-lg">
        <h2 className="text-xl font-semibold text-gray-800 mb-6">
          Customer Interaction
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <FileUploadButton
            field="promotionalImage"
            label="Promotional Image"
            accept="image/*"
          />

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Name of Call to Action (CTA) button
            </label>
            <input
              type="text"
              placeholder="Ex: Buy Now, Order Now etc"
              value={formData.ctaButtonName}
              onChange={(e) =>
                handleInputChange("ctaButtonName", e.target.value)
              }
              className="w-full px-3 py-2 border border-gray-300 placeholder-gray-400 
                       rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8BB353] 
                       focus:border-transparent text-gray-800"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Menu or Booking or order URL
            </label>
            <input
              type="url"
              placeholder="Enter here"
              value={formData.menuBookingUrl}
              onChange={(e) =>
                handleInputChange("menuBookingUrl", e.target.value)
              }
              className="w-full px-3 py-2 border border-gray-300 placeholder-gray-400 
                       rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8BB353] 
                       focus:border-transparent text-gray-800"
            />
          </div>
        </div>
      </div>

      {/* Submit Button */}
      <div className="flex justify-center pt-6">
        <button
          type="submit"
          className="bg-[#8BB353] hover:bg-[#7AA142] text-white px-8 py-3 rounded-lg 
                   transition-colors shadow-sm font-medium hover:cursor-pointer"
        >
          Submit Business Information
        </button>
      </div>
    </form>
  );
}
