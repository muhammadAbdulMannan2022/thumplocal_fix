import React from "react";
import { SocialMediaLinks } from "../../../../ui/Social";

export default function SocialReviewPage() {
  return (
    <div className="pt-10">
      <div className="mb-8 px-5">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          Service areas
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              ZIP codes
            </label>
            <input
              type="text"
              placeholder="Enter here..."
              className="w-full px-3 py-2 border border-gray-300 placeholder-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8BB353] focus:border-transparent text-gray-800"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Cities
            </label>
            <input
              type="text"
              placeholder="Enter here..."
              className="w-full px-3 py-2 border border-gray-300 placeholder-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8BB353] focus:border-transparent text-gray-800"
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
