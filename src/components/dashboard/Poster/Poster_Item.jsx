import { useState } from "react";

import { Edit, Download } from "lucide-react";

export function PosterItem({ title, image, date, aspectRatio = "1:1" }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleEdit = () => {
    console.log("[v0] Edit clicked for:", title);
    // Add edit functionality here
  };

  const handleDownload = () => {
    console.log("[v0] Download clicked for:", title);
    // Add download functionality here
  };

  const getAspectRatioClass = (ratio) => {
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
  };

  return (
    <div
      className="relative group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden rounded-lg bg-white shadow-sm">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className={`w-full object-cover transition-transform duration-300 group-hover:scale-105 ${getAspectRatioClass(
            aspectRatio
          )}`}
        />

        {/* Hover Overlay */}
        <div
          className={`absolute inset-0 bg-black/50 flex items-center justify-center gap-3 transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <button
            size="sm"
            variant="secondary"
            onClick={handleEdit}
            className="bg-white/90 hover:bg-white text-gray-800 shadow-lg"
          >
            <Edit className="w-4 h-4 mr-2" />
            Edit
          </button>
          <button
            size="sm"
            variant="secondary"
            onClick={handleDownload}
            className="bg-white/90 hover:bg-white text-gray-800 shadow-lg"
          >
            <Download className="w-4 h-4 mr-2" />
            Download
          </button>
        </div>

        {/* Date Badge */}
        <div className="absolute top-2 right-2 bg-white/90 text-xs px-2 py-1 rounded">
          {date}
        </div>
      </div>
    </div>
  );
}
