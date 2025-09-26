import React, { useState, useEffect } from "react";
import {
  FileText,
  Plus,
  Minus,
  Copy,
  ChevronRight,
  Download,
  Share2,
} from "lucide-react";

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
      const newFiles = Array.from(e.target.files).map((f) => ({
        name: f.name,
        file: f,
        src: URL.createObjectURL(f),
      }));
      setContentFiles((prev) => {
        const combined = [...prev, ...newFiles];
        if (prev.length === 0 && newFiles.length > 0) {
          setSelectedIndex(0);
        }
        return combined;
      });
      const input = document.getElementById("content-upload");
      if (input) input.value = "";
    }
  };

  useEffect(() => {
    return () => {
      contentFiles.forEach((f) => f.src && URL.revokeObjectURL(f.src));
    };
  }, [contentFiles]);

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

  useEffect(() => {
    if (window.lucide) {
      window.lucide.createIcons();
    }
  }, []);

  return (
    <div className="flex h-[90vh] w-full">
      {/* Left Panel - Form */}
      <div className="w-1/3 bg-white p-4 border-r border-gray-200 overflow-y-auto">
        <h2 className="text-lg font-semibold mb-3 text-gray-800">
          Poster Designer
        </h2>
        <div className="space-y-3">
          <div>
            <label className="block text-xs text-gray-600 mb-1">
              Title of the Poster
            </label>
            <input
              type="text"
              value={websiteName}
              onChange={(e) => setWebsiteName(e.target.value)}
              placeholder="Enter here"
              className="w-full px-2 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 text-gray-800"
            />
          </div>
          <div>
            <label className="block text-xs text-gray-600 mb-1">
              Poster Type
            </label>
            <input
              type="text"
              value={posterType}
              onChange={(e) => setPosterType(e.target.value)}
              placeholder="Enter here"
              className="w-full px-2 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 text-gray-800"
            />
          </div>
          <div>
            <label className="block text-xs text-gray-600 mb-1">
              Describe your target audience
            </label>
            <textarea
              value={targetAudience}
              onChange={(e) => setTargetAudience(e.target.value)}
              placeholder="Enter here"
              className="w-full h-16 px-2 py-1 border border-gray-300 rounded text-sm resize-none focus:outline-none focus:ring-1 focus:ring-blue-500 text-gray-800"
            />
          </div>
          <div>
            <label className="block text-xs text-gray-600 mb-1">
              Upload Logo
            </label>
            <div className="flex items-center gap-2">
              <button
                onClick={() => document.getElementById("logo-upload")?.click()}
                className="px-3 py-1 border border-gray-300 rounded text-xs text-gray-700 hover:bg-gray-100"
              >
                Choose file
              </button>
              <span className="text-xs text-gray-500 truncate">
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
            <label className="block text-xs text-gray-600 mb-1">
              Add Website link
            </label>
            <input
              type="text"
              value={websiteLink}
              onChange={(e) => setWebsiteLink(e.target.value)}
              placeholder="Enter here"
              className="w-full px-2 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 text-gray-800"
            />
          </div>
          <div>
            <label className="block text-xs text-gray-600 mb-1">
              Upload contents
            </label>
            <div className="mb-2">
              <button
                onClick={() =>
                  document.getElementById("content-upload")?.click()
                }
                className="px-3 py-1 border border-gray-300 rounded text-xs text-gray-700 hover:bg-gray-100"
              >
                Choose file
              </button>
              <span className="ml-2 text-xs text-gray-600">
                {contentFiles.length} attachments
              </span>
            </div>
            <input
              id="content-upload"
              type="file"
              multiple
              accept="image/*,video/*,audio/*"
              onChange={handleContentUpload}
              className="hidden"
            />
            <div className="grid grid-cols-4 gap-1">
              {contentFiles.length === 0 ? (
                <div className="col-span-4 text-xs text-gray-500">
                  No attachments yet
                </div>
              ) : (
                contentFiles.slice(0, 8).map((f, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-1 p-1 border border-gray-200 rounded"
                  >
                    <img
                      src={f.src}
                      alt={f.name}
                      className="w-8 h-8 object-cover rounded"
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
            <label className="block text-xs text-gray-600 mb-1">
              Social media accounts
            </label>
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="social-accounts"
                checked={Object.values(socialAccounts).some(Boolean)}
                onChange={() => {}}
                className="h-3 w-3 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <label
                htmlFor="social-accounts"
                className="text-xs text-gray-600"
              >
                Social media accounts
              </label>
            </div>
          </div>
          <div className="flex items-center justify-between pt-2">
            <div className="flex items-center gap-1">
              <button className="p-1 border border-gray-300 rounded text-gray-700 hover:bg-gray-100">
                <FileText className="w-3 h-3" />
              </button>
              <button
                onClick={() => handlePageCountChange("increase")}
                className="p-1 border border-gray-300 rounded text-gray-700 hover:bg-gray-100"
              >
                <Plus className="w-3 h-3" />
              </button>
              <span className="text-xs font-medium px-1 text-gray-800">
                {pageCount.toString().padStart(2, "0")}
              </span>
              <button
                onClick={() => handlePageCountChange("decrease")}
                className="p-1 border border-gray-300 rounded text-gray-700 hover:bg-gray-100"
              >
                <Minus className="w-3 h-3" />
              </button>
              <button className="p-1 border border-gray-300 rounded text-gray-700 hover:bg-gray-100">
                <Copy className="w-3 h-3" />
              </button>
              <button
                onClick={() => handleRatioChange("prev")}
                className="p-1 border border-gray-300 rounded text-gray-700 hover:bg-gray-100"
              >
                <ChevronRight className="w-3 h-3 rotate-180" />
              </button>
              <span className="text-xs font-medium px-1 text-gray-800">
                {currentRatio}
              </span>
              <button
                onClick={() => handleRatioChange("next")}
                className="p-1 border border-gray-300 rounded text-gray-700 hover:bg-gray-100"
              >
                <ChevronRight className="w-3 h-3" />
              </button>
            </div>
          </div>
          <div className="pt-2">
            <p className="text-xs text-gray-500 mb-2">
              Prepare your company profile to improve performance.
            </p>
            <button className="w-full px-3 py-1 bg-[#8BB353] text-white rounded text-sm hover:bg-[#7BA045] transition-colors">
              Start Processing
            </button>
          </div>
        </div>
      </div>

      {/* Right Panel - Poster Gallery */}
      <div className="flex-1 bg-gray-50 p-4">
        <div className="bg-white rounded p-3 mb-3">
          <h2 className="text-lg font-semibold text-gray-800">
            Building The Website With SEO
          </h2>
          <p className="text-xs text-gray-600 mt-2">
            Your complete website is ready! Developed with SEO best practices
            for strong visibility, speed, and user-friendly performance.
          </p>
        </div>
        {contentFiles.length === 0 ? (
          <div className="h-full flex items-center justify-center text-gray-500 text-sm">
            Upload images to preview here
          </div>
        ) : contentFiles.length === 1 ? (
          <div className="flex items-center justify-center h-[80vh]">
            <div
              className={`w-full max-h-[80vh] ${ratioToClass(
                currentRatio
              )} overflow-hidden relative group`}
            >
              <img
                src={contentFiles[0].src}
                alt={contentFiles[0].name}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="px-3 py-1 bg-[#8BB353] text-white rounded text-xs hover:bg-[#7BA045] flex items-center gap-1">
                  <Download className="w-4 h-4" /> Download
                </button>
                <button className="px-3 py-1 bg-[#8BB353] text-white rounded text-xs hover:bg-[#7BA045] flex items-center gap-1">
                  <Share2 className="w-4 h-4" /> Post
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 max-h-[80vh] overflow-y-auto">
            {contentFiles.map((f, i) => (
              <div
                key={i}
                className={`rounded overflow-hidden border bg-gray-50 p-1 relative group`}
                onClick={() => setSelectedIndex(i)}
              >
                <div
                  className={`${ratioToClass(currentRatio)} overflow-hidden`}
                >
                  <img
                    src={f.src}
                    alt={f.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute bottom-2 h-full w-full bg-gradient-to-b from-transparent via-transparent to-black opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="relative flex items-end justify-center h-full w-full">
                    <button className="p-2 hover:cursor-pointer absolute top-4 right-2  bg-[#8BB353] text-white rounded text-xs hover:bg-[#7BA045] flex items-center gap-1">
                      <Download className="w-4 h-4" />
                    </button>
                    <button className="px-3 hover:cursor-pointer py-1 mb-2 bg-[#8BB353] text-white rounded text-xs hover:bg-[#7BA045] flex items-center gap-1">
                      Post on social media
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
