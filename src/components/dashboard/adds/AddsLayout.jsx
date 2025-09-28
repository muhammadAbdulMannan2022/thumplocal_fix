import React, { useRef, useState } from "react";
import { Upload, X } from "lucide-react";

function FileUpload({ label, fileName, onFileSelect }) {
  const inputRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) onFileSelect(file.name);
  };

  const handleRemoveFile = () => {
    onFileSelect("");
    if (inputRef.current) inputRef.current.value = ""; // reset input
  };

  return (
    <div className="space-y-1 sm:space-y-2">
      <label className="block text-xs sm:text-sm font-medium text-gray-700">{label}</label>
      <div className="flex flex-col sm:flex-row gap-2">
        <input
          ref={inputRef}
          type="file"
          accept=".jpg,.jpeg,.png,.svg"
          onChange={handleFileChange}
          placeholder="*.jpg,*.png,*.svg"
          className="flex-1 file:bg-[#EBF0EB] file:text-[#536047] rounded border border-gray-200 bg-white px-3 py-2.5 sm:py-2 text-xs text-gray-500 file:px-2 file:py-1 file:border file:border-gray-300 file:rounded-md hover:cursor-pointer file:hover:cursor-pointer"
        />
        {fileName && (
          <div className="flex items-center gap-2 bg-gray-50 px-3 py-2 sm:py-1.5 rounded">
            <span className="text-sm text-gray-600 truncate">{fileName}</span>
            <button
              type="button"
              onClick={handleRemoveFile}
              className="text-gray-400 hover:text-gray-600"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

function AddsLayout() {
  const [activeCategory, setActiveCategory] = useState("search");
  const [formData, setFormData] = useState({
    search: {
      businessName: "",
      businessLogo: "",
      finalUrl: "",
      displayUrl: "",
      description: "",
    },
    display: {
      headline: "",
      longHeadline: "",
      description: "",
      businessName: "",
      images: "",
      finalUrl: "",
      video: "",
      logo: "",
    },
    video: {
      youtubeUrl: "",
      finalUrl: "",
      callToAction: "",
      displayUrl: "",
      campaignBanner: "",
    },
  });

  const updateFormData = (category, field, value) => {
    setFormData((prev) => ({
      ...prev,
      [category]: {
        ...prev[category],
        [field]: value,
      },
    }));
  };

  const handleSave = () => {
    console.log(`Saving ${activeCategory} ad data:`, formData[activeCategory]);
    alert(
      `${
        activeCategory.charAt(0).toUpperCase() + activeCategory.slice(1)
      } ad data saved!`
    );
  };

  const categories = [
    { id: "search", label: "Search" },
    { id: "display", label: "Display" },
    { id: "video", label: "Video" },
  ];

  return (
    <div className=" min-h-[85vh] w-full">
      <div className="px-2 sm:px-4">
        <div className="px-3 sm:px-6 py-3 sm:py-4 border-b border-gray-200">
          <h1 className="text-lg sm:text-xl font-semibold text-gray-900">
            Google Ads (Smart Campaign) - Fields Google Asks
          </h1>
        </div>
        <div className=" max-w-4xl mx-auto  border-gray-200">
          {/* Header */}

          {/* Category Tabs */}
          <div className="px-3 sm:px-6 pt-4 sm:pt-6 flex flex-col items-center justify-center">
            <div className="mb-4 sm:mb-6 flex flex-col items-center">
              <h2 className="text-xl sm:text-2xl font-medium text-gray-900 mb-2 sm:mb-3 text-center">
                Category of Advertisement
              </h2>
              <div className="flex flex-wrap justify-center gap-1 sm:space-x-1">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`px-3 sm:px-4 py-2 text-sm font-medium rounded transition-colors duration-200 hover:cursor-pointer ${
                      activeCategory === category.id
                        ? "text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                    style={{
                      backgroundColor:
                        activeCategory === category.id ? "#8BB353" : undefined,
                    }}
                  >
                    {category.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Form Content */}
          <div className="px-3 sm:px-6 pb-4 sm:pb-6 bg-white rounded-lg shadow-sm pt-4 sm:pt-5">
            {/* Search Ads Form */}
            {activeCategory === "search" && (
              <div className="space-y-4 sm:space-y-6">
                <h3 className="text-base sm:text-lg font-medium text-gray-900 mb-3 sm:mb-4">
                  Search Ads
                </h3>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                  <div className="space-y-1 sm:space-y-2">
                    <label className="block text-xs sm:text-sm font-medium text-gray-700">
                      Business Name
                    </label>
                    <input
                      type="text"
                      value={formData.search.businessName}
                      onChange={(e) =>
                        updateFormData("search", "businessName", e.target.value)
                      }
                      placeholder="Enter here"
                      className="w-full px-3 py-2.5 sm:py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8BB353] placeholder:text-gray-400 text-gray-900   focus:border-transparent"
                    />
                  </div>

                  <div>
                    <FileUpload
                      label="Business Logo"
                      fileName={formData.search.businessLogo}
                      onFileSelect={(fileName) =>
                        updateFormData("search", "businessLogo", fileName)
                      }
                    />
                  </div>

                  <div className="space-y-1 sm:space-y-2">
                    <label className="block text-xs sm:text-sm font-medium text-gray-700">
                      Final Url
                    </label>
                    <input
                      type="text"
                      value={formData.search.finalUrl}
                      onChange={(e) =>
                        updateFormData("search", "finalUrl", e.target.value)
                      }
                      placeholder="Enter here"
                      className="w-full px-3 py-2.5 sm:py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8BB353] focus:border-transparent placeholder:text-gray-400 text-gray-900"
                    />
                  </div>

                  <div className="space-y-1 sm:space-y-2">
                    <label className="block text-xs sm:text-sm font-medium text-gray-700">
                      Display url
                    </label>
                    <input
                      type="text"
                      value={formData.search.displayUrl}
                      onChange={(e) =>
                        updateFormData("search", "displayUrl", e.target.value)
                      }
                      placeholder="Enter here"
                      className="w-full px-3 py-2.5 sm:py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8BB353] placeholder:text-gray-400 text-gray-900   focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="space-y-1 sm:space-y-2">
                  <label className="block text-xs sm:text-sm font-medium text-gray-700">
                    Description
                  </label>
                  <textarea
                    rows={3}
                    value={formData.search.description}
                    onChange={(e) =>
                      updateFormData("search", "description", e.target.value)
                    }
                    placeholder="Enter here"
                    className="w-full px-3 py-2.5 sm:py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8BB353] placeholder:text-gray-400 text-gray-900   focus:border-transparent resize-none"
                  />
                </div>
              </div>
            )}

            {/* Display Ads Form */}
            {activeCategory === "display" && (
              <div className="space-y-4 sm:space-y-6">
                <h3 className="text-base sm:text-lg font-medium text-gray-900 mb-3 sm:mb-4">
                  Display Ads
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                  <div className="space-y-1 sm:space-y-2">
                    <label className="block text-xs sm:text-sm font-medium text-gray-700">
                      Headline
                    </label>
                    <input
                      type="text"
                      value={formData.display.headline}
                      onChange={(e) =>
                        updateFormData("display", "headline", e.target.value)
                      }
                      placeholder="Enter here"
                      className="w-full px-3 py-2.5 sm:py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8BB353] placeholder:text-gray-400 text-gray-900   focus:border-transparent"
                    />
                  </div>

                  <div className="space-y-1 sm:space-y-2">
                    <label className="block text-xs sm:text-sm font-medium text-gray-700">
                      Long Headline
                    </label>
                    <input
                      type="text"
                      value={formData.display.longHeadline}
                      onChange={(e) =>
                        updateFormData(
                          "display",
                          "longHeadline",
                          e.target.value
                        )
                      }
                      placeholder="Enter here"
                      className="w-full px-3 py-2.5 sm:py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8BB353] placeholder:text-gray-400 text-gray-900   focus:border-transparent"
                    />
                  </div>

                  <div className="space-y-1 sm:space-y-2">
                    <label className="block text-xs sm:text-sm font-medium text-gray-700">
                      Description
                    </label>
                    <input
                      type="text"
                      value={formData.display.description}
                      onChange={(e) =>
                        updateFormData("display", "description", e.target.value)
                      }
                      placeholder="Enter here"
                      className="w-full px-3 py-2.5 sm:py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8BB353] placeholder:text-gray-400 text-gray-900   focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-1 sm:space-y-2">
                    <label className="block text-xs sm:text-sm font-medium text-gray-700">
                      Business name
                    </label>
                    <input
                      type="text"
                      value={formData.display.businessName}
                      onChange={(e) =>
                        updateFormData(
                          "display",
                          "businessName",
                          e.target.value
                        )
                      }
                      placeholder="Enter here"
                      className="w-full px-3 py-2.5 sm:py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8BB353] placeholder:text-gray-400 text-gray-900   focus:border-transparent"
                    />
                  </div>

                  <div>
                    <FileUpload
                      label="Images"
                      fileName={formData.display.images}
                      onFileSelect={(fileName) =>
                        updateFormData("display", "images", fileName)
                      }
                    />
                  </div>

                  <div className="space-y-1 sm:space-y-2">
                    <label className="block text-xs sm:text-sm font-medium text-gray-700">
                      Final Url
                    </label>
                    <input
                      type="text"
                      value={formData.display.finalUrl}
                      onChange={(e) =>
                        updateFormData("display", "finalUrl", e.target.value)
                      }
                      placeholder="Enter here"
                      className="w-full px-3 py-2.5 sm:py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8BB353] placeholder:text-gray-400 text-gray-900   focus:border-transparent"
                    />
                  </div>

                  <div>
                    <FileUpload
                      label="Video"
                      fileName={formData.display.video}
                      onFileSelect={(fileName) =>
                        updateFormData("display", "video", fileName)
                      }
                    />
                  </div>
                </div>

                <div className="w-full lg:w-1/2">
                  <FileUpload
                    label="Logo"
                    fileName={formData.display.logo}
                    onFileSelect={(fileName) =>
                      updateFormData("display", "logo", fileName)
                    }
                  />
                </div>
              </div>
            )}

            {/* Video Ads Form */}
            {activeCategory === "video" && (
              <div className="space-y-4 sm:space-y-6">
                <h3 className="text-base sm:text-lg font-medium text-gray-900 mb-3 sm:mb-4">
                  Video Ads
                </h3>

                <div className="space-y-1 sm:space-y-2">
                  <label className="block text-xs sm:text-sm font-medium text-gray-700">
                    Youtube url of the video
                  </label>
                  <input
                    type="text"
                    value={formData.video.youtubeUrl}
                    onChange={(e) =>
                      updateFormData("video", "youtubeUrl", e.target.value)
                    }
                    placeholder="Enter here"
                    className="w-full px-3 py-2.5 sm:py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8BB353] placeholder:text-gray-400 text-gray-900   focus:border-transparent"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-1 sm:space-y-2">
                    <label className="block text-xs sm:text-sm font-medium text-gray-700">
                      Final Url
                    </label>
                    <input
                      type="text"
                      value={formData.video.finalUrl}
                      onChange={(e) =>
                        updateFormData("video", "finalUrl", e.target.value)
                      }
                      placeholder="Enter here"
                      className="w-full px-3 py-2.5 sm:py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8BB353] placeholder:text-gray-400 text-gray-900   focus:border-transparent"
                    />
                  </div>

                  <div className="space-y-1 sm:space-y-2">
                    <label className="block text-xs sm:text-sm font-medium text-gray-700">
                      Call to action
                    </label>
                    <input
                      type="text"
                      value={formData.video.callToAction}
                      onChange={(e) =>
                        updateFormData("video", "callToAction", e.target.value)
                      }
                      placeholder="Enter here"
                      className="w-full px-3 py-2.5 sm:py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8BB353] placeholder:text-gray-400 text-gray-900   focus:border-transparent"
                    />
                  </div>

                  <div className="space-y-1 sm:space-y-2">
                    <label className="block text-xs sm:text-sm font-medium text-gray-700">
                      Display url
                    </label>
                    <input
                      type="text"
                      value={formData.video.displayUrl}
                      onChange={(e) =>
                        updateFormData("video", "displayUrl", e.target.value)
                      }
                      placeholder="Enter here"
                      className="w-full px-3 py-2.5 sm:py-2 placeholder:text-gray-400 text-gray-900  border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8BB353]  focus:border-transparent"
                    />
                  </div>

                  <div>
                    <FileUpload
                      label="Campaign Banner"
                      fileName={formData.video.campaignBanner}
                      onFileSelect={(fileName) =>
                        updateFormData("video", "campaignBanner", fileName)
                      }
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Save Button */}
            <div className="flex justify-center mt-6 sm:mt-8">
              <button
                onClick={handleSave}
                className="px-8 sm:px-16 py-2.5 sm:py-3 text-white font-medium rounded-md hover:opacity-90 transition-opacity duration-200 text-sm sm:text-base"
                style={{ backgroundColor: "#8BB353" }}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddsLayout;
