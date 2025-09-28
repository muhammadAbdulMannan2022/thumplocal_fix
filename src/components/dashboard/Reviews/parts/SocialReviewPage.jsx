import React from "react";
import { SocialMediaLinks } from "../../../../ui/Social";

export default function SocialReviewPage() {
  return (
    <div className="pt-6 sm:pt-10">
      <div className="mb-6 sm:mb-8 px-3 sm:px-5">
        <h2 className="text-base sm:text-lg font-semibold text-gray-800 mb-3 sm:mb-4">
          Service areas
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          <div>
            <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
              ZIP codes
            </label>
            <input
              type="text"
              placeholder="Enter here..."
              className="w-full px-2 sm:px-3 py-1.5 sm:py-2 border border-gray-300 placeholder-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8BB353] focus:border-transparent text-gray-800 text-sm"
            />
          </div>

          <div>
            <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
              Cities
            </label>
            <input
              type="text"
              placeholder="Enter here..."
              className="w-full px-2 sm:px-3 py-1.5 sm:py-2 border border-gray-300 placeholder-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8BB353] focus:border-transparent text-gray-800 text-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Area code
            </label>
            <input
              type="text"
              placeholder="Enter here..."
              className="w-full px-3 py-2 border border-gray-300 placeholder-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8BB353] focus:border-transparent text-gray-800"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Languages
            </label>
            <input
              type="text"
              placeholder="Enter here..."
              className="w-full px-3 py-2 border border-gray-300 placeholder-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8BB353] focus:border-transparent text-gray-800"
            />
          </div>
        </div>
      </div>
      <SocialMediaLinks />
    </div>
  );
}
