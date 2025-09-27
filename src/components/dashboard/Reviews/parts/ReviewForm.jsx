import React from "react";
import { useState } from "react";
import ReviewLocation from "./Location";
import { useNavigate } from "react-router";

export default function ReviewForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    businessName: "",
    websiteUrl: "",
    businessDescription: "",
    businessType: "",
    businessCategory: "",
    file: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0] || null;
    setFormData((prev) => ({
      ...prev,
      file,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    navigate("/dashboard/reviews/social");
  };

  return (
    <div className="py-6">
      <div className="bg-white/10 rounded-lg p-6 shadow-sm">
        {/* Basic informations */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Basic informations
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Business Name
              </label>
              <input
                type="text"
                name="businessName"
                placeholder="Enter here..."
                value={formData.businessName}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 placeholder-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8BB353] focus:border-transparent text-gray-800"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Website Url
              </label>
              <input
                type="url"
                name="websiteUrl"
                placeholder="Example: professions, Apps, location etc..."
                value={formData.websiteUrl}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 placeholder-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8BB353] focus:border-transparent text-gray-800"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Business Description
              </label>
              <input
                type="text"
                name="businessDescription"
                placeholder="Enter here..."
                value={formData.businessDescription}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 placeholder-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8BB353] focus:border-transparent text-gray-800"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Business Type (Location based)
              </label>
              <input
                type="text"
                name="businessType"
                placeholder="Ex: Region based or international"
                value={formData.businessType}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 placeholder-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8BB353] focus:border-transparent text-gray-800"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Business category
              </label>
              <input
                type="text"
                name="businessCategory"
                placeholder="Enter here..."
                value={formData.businessCategory}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 placeholder-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8BB353] focus:border-transparent text-gray-800"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Upload customer contact list (CSV or Excel)
              </label>
              <div className="flex">
                <input
                  type="file"
                  accept=".csv,.xlsx,.xls"
                  onChange={handleFileChange}
                  className="hidden"
                  id="file-upload"
                />
                <label
                  htmlFor="file-upload"
                  className="flex-1 px-3 py-2 border border-gray-300 placeholder-gray-400 rounded-l-md bg-gray-50 cursor-pointer flex items-center text-gray-800"
                >
                  <span className="text-gray-500">
                    {formData.file ? formData.file.name : "Choose file"}
                  </span>
                </label>
                <button
                  type="button"
                  className="px-4 py-2 bg-gray-200 border border-l-0 border-gray-300 rounded-r-md text-gray-700 hover:bg-gray-300"
                  onClick={() =>
                    document.getElementById("file-upload")?.click()
                  }
                >
                  Choose file
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* location */}
        <ReviewLocation />

        {/* Business Times */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Business Times
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Business Days
              </label>
              <select className="w-full px-3 py-2 border border-gray-300 placeholder-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8BB353] focus:border-transparent text-gray-800">
                <option value="">Select dates</option>
                <option value="monday-friday">Monday - Friday</option>
                <option value="monday-saturday">Monday - Saturday</option>
                <option value="everyday">Every day</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Business hour (From)
              </label>
              <select className="w-full px-3 py-2 border border-gray-300 placeholder-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8BB353] focus:border-transparent text-gray-800">
                <option value="">Select dates</option>
                <option value="08:00">08:00 AM</option>
                <option value="09:00">09:00 AM</option>
                <option value="10:00">10:00 AM</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Business hour (To)
              </label>
              <select className="w-full px-3 py-2 border border-gray-300 placeholder-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8BB353] focus:border-transparent text-gray-800">
                <option value="">Select dates</option>
                <option value="17:00">05:00 PM</option>
                <option value="18:00">06:00 PM</option>
                <option value="19:00">07:00 PM</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Payment methods name
              </label>
              <input
                type="text"
                placeholder="Enter here..."
                className="w-full px-3 py-2 border border-gray-300 placeholder-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8BB353] focus:border-transparent text-gray-800"
              />
            </div>
          </div>
        </div>

        {/* Save Button and Pagination */}
        <div className="flex flex-col items-center space-y-4">
          <button
            type="submit"
            onClick={handleSubmit}
            className="bg-[#8BB353] hover:bg-[#8BB353]/90 hover:cursor-pointer text-white font-medium py-2 px-8 rounded-md transition-colors"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
