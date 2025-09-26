import React, { useState, useEffect } from "react";
import { FileText, Plus, Minus, Copy, ChevronRight } from "lucide-react";

function ratioToClass(ratio) {
  switch (ratio) {
    case "1:1":
      return "aspect-square";
    case "4:3":
      return "aspect-[4/3]";
    case "16:9":
      return "aspect-video";
    case "9:16":
      return "aspect-[9/16]";
    case "3:4":
      return "aspect-[3/4]";
    default:
      return "aspect-square";
  }
}

export function PosterDesigner() {
  const [websiteName, setWebsiteName] = useState("");
  const [posterType, setPosterType] = useState("");
  const [targetAudience, setTargetAudience] = useState("");
  const [logoFile, setLogoFile] = useState(null);
  const [websiteLink, setWebsiteLink] = useState("");
  // contentFiles will store objects: { name, src, file? }
  const [contentFiles, setContentFiles] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [socialAccounts, setSocialAccounts] = useState({
    facebook: false,
    instagram: false,
    twitter: false,
    linkedin: false,
  });
  const [currentRatio, setCurrentRatio] = useState("1:1");
  const [pageCount, setPageCount] = useState(4);

  const handleLogoUpload = (e) => {
    if (e.target.files && e.target.files[0]) {
      setLogoFile(e.target.files[0]);
    }
  };

  const handleContentUpload = (e) => {
    if (e.target.files) {
      // create preview URLs for newly selected files
      const newFiles = Array.from(e.target.files).map((f) => ({
        name: f.name,
        file: f,
        src: URL.createObjectURL(f),
      }));

      setContentFiles((prev) => {
        // append new files to existing list
        const combined = [...prev, ...newFiles];
        // if there were no previous files, set selection to first new file
        if (prev.length === 0 && newFiles.length > 0) {
          setSelectedIndex(0);
        }
        return combined;
      });

      // clear the file input so user can re-select the same files later if needed
      const input = document.getElementById("content-upload");
      if (input) input.value = "";
    }
  };

  useEffect(() => {
    // cleanup on unmount
    return () => {
      contentFiles.forEach((f) => f.src && URL.revokeObjectURL(f.src));
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const ratios = ["1:1", "4:3", "16:9", "9:16", "3:4"];
  const currentRatioIndex = ratios.indexOf(currentRatio);

  const handleRatioChange = (direction) => {
    if (direction === "next" && currentRatioIndex < ratios.length - 1) {
      setCurrentRatio(ratios[currentRatioIndex + 1]);
    } else if (direction === "prev" && currentRatioIndex > 0) {
      setCurrentRatio(ratios[currentRatioIndex - 1]);
    }
  };

  const handlePageCountChange = (direction) => {
    if (direction === "increase") {
      setPageCount((prev) => prev + 1);
    } else if (direction === "decrease" && pageCount > 1) {
      setPageCount((prev) => prev - 1);
    }
  };

  // Initialize Lucide icons if used elsewhere
  useEffect(() => {
    if (window.lucide) {
      window.lucide.createIcons();
    }
  }, []);

  const selectedSrc =
    contentFiles[selectedIndex]?.src || logoFile?.name || null;

  return (
    <div className="flex w-full">
      {/* Left Panel - Form */}
      <div className="w-1/3 bg-white p-6 border-r border-gray-200">
        <h2 className="text-xl font-semibold mb-6 text-gray-800">
          Poster Designer
        </h2>

        <div className="space-y-6">
          <div>
            <label className="block text-sm text-gray-600 mb-2">
              Title of the Poster
            </label>
            <input
              type="text"
              value={websiteName}
              onChange={(e) => setWebsiteName(e.target.value)}
              placeholder="Enter here"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-2">
              Poster Type
            </label>
            <input
              type="text"
              value={posterType}
              onChange={(e) => setPosterType(e.target.value)}
              placeholder="Enter here"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-2">
              Describe about your target audience
            </label>
            <textarea
              value={targetAudience}
              onChange={(e) => setTargetAudience(e.target.value)}
              placeholder="Enter here"
              className="w-full h-20 px-3 py-2 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-2">
              Upload Logo
            </label>
            <div className="flex items-center gap-3">
              <button
                onClick={() => document.getElementById("logo-upload")?.click()}
                className="px-4 py-2 border border-gray-300 rounded-md text-sm text-gray-700 hover:bg-gray-100"
              >
                Choose file
              </button>
              <span className="text-sm text-gray-500">
                {logoFile ? logoFile.name : "No logo chosen"}
              </span>
            </div>
            <input
              id="logo-upload"
              type="file"
              accept="image/*"
              onChange={handleLogoUpload}
              className="hidden"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-2">
              Add Website link
            </label>
            <input
              type="text"
              value={websiteLink}
              onChange={(e) => setWebsiteLink(e.target.value)}
              placeholder="Enter here"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-2">
              Upload contents (photos, Audio, Video etc.)
            </label>
            <div className="mb-3">
              <button
                onClick={() =>
                  document.getElementById("content-upload")?.click()
                }
                className="px-4 py-2 border border-gray-300 rounded-md text-sm text-gray-700 hover:bg-gray-100"
              >
                Choose file
              </button>
              <span className="ml-3 text-sm text-gray-600">
                {contentFiles.length} attachments
              </span>
            </div>
            <input
              id="content-upload"
              type="file"
              multiple
              accept="image/*,video/*,audio/*"
              onChange={handleContentUpload}
              className="hidden text-gray-800"
            />

            {/* show small preview chips in the form for quick glance */}
            <div className="mt-2 grid grid-cols-4 gap-2">
              {contentFiles.length === 0 ? (
                <div className="col-span-4 text-xs text-gray-500">
                  No attachments yet
                </div>
              ) : (
                contentFiles.slice(0, 8).map((f, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 p-2 border border-gray-200 rounded"
                  >
                    <img
                      src={f.src}
                      alt={f.name}
                      className="w-10 h-10 object-cover rounded"
                    />
                    <div className="text-xs text-gray-700 truncate">
                      {f.name}
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-3">
              Social media accounts
            </label>
            <div className="flex items-center space-x-2 mb-2">
              <input
                type="checkbox"
                id="social-accounts"
                checked={Object.values(socialAccounts).some(Boolean)}
                onChange={() => {}}
                className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <label
                htmlFor="social-accounts"
                className="text-sm text-gray-600"
              >
                Social media accounts
              </label>
            </div>
          </div>

          <div className="flex items-center justify-between pt-4">
            <div className="flex items-center gap-2">
              <button className="p-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100">
                <FileText className="w-4 h-4" />
              </button>
              <button
                onClick={() => handlePageCountChange("increase")}
                className="p-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100"
              >
                <Plus className="w-4 h-4" />
              </button>
              <span className="text-sm font-medium px-2">
                {pageCount.toString().padStart(2, "0")}
              </span>
              <button
                onClick={() => handlePageCountChange("decrease")}
                className="p-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100"
              >
                <Minus className="w-4 h-4" />
              </button>
              <button className="p-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100">
                <Copy className="w-4 h-4" />
              </button>
              <button
                onClick={() => handleRatioChange("prev")}
                className="p-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100"
              >
                <ChevronRight className="w-4 h-4 rotate-180" />
              </button>
              <span className="text-sm font-medium px-2">{currentRatio}</span>
              <button
                onClick={() => handleRatioChange("next")}
                className="p-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="pt-4">
            <p className="text-xs text-gray-500 mb-4">
              Please prepare your company profile first to improve performance.
            </p>
            <button className="w-full px-4 py-2 bg-[#8BB353] text-white rounded-md hover:bg-[#7BA045] transition-colors">
              Start Processing
            </button>
          </div>
        </div>
      </div>

      {/* Right Panel - Poster Gallery with side thumbnails */}
      <div className="flex-1 bg-gray-50">
        <div className="h-full flex gap-4">
          {/* Main preview / Grid */}
          <div className="flex-1 bg-white rounded-lg overflow-hidden shadow-sm p-4">
            <div className="bg-white rounded-lg mb-5">
              <h2 className="text-xl font-semibold text-gray-800">
                Building The Website With SEO
              </h2>
              <p className="text-sm text-gray-600 mt-4">
                I'm excited to let you know that your complete website is ready!
                The site has been carefully developed with SEO best practices in
                mind to ensure strong visibility on search engines, improved
                speed, and user-friendly performance.
              </p>
            </div>
            {contentFiles.length === 0 ? (
              <div className="h-full flex items-center justify-center text-gray-500">
                Upload images to preview here
              </div>
            ) : contentFiles.length === 1 ? (
              <div className="h-full flex items-center justify-center">
                <div
                  className={`w-full ${ratioToClass(
                    currentRatio
                  )} overflow-hidden`}
                >
                  <img
                    src={contentFiles[0].src}
                    alt={contentFiles[0].name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ) : (
              // show all images in a responsive grid
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {contentFiles.map((f, i) => (
                  <div
                    key={i}
                    className={`rounded overflow-hidden border bg-gray-50 p-2 ${
                      i === selectedIndex ? "ring-2 ring-blue-400" : ""
                    }`}
                    onClick={() => setSelectedIndex(i)}
                  >
                    <div
                      className={`${ratioToClass(
                        currentRatio
                      )} overflow-hidden`}
                    >
                      <img
                        src={f.src}
                        alt={f.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
