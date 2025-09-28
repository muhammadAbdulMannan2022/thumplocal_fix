import React from "react";

export default function ServicesPage() {
  return (
    <div className="space-y-3 sm:space-y-4 h-full flex flex-col">
      <div className="bg-white rounded-lg shadow p-3 sm:p-5 border border-gray-100">
        <h2 className="text-lg sm:text-xl font-semibold text-gray-800">
          Service page preparation
        </h2>
        <p className="text-xs sm:text-sm text-gray-500 mt-1">
          Your SEO-Optimized Website is Now Complete!
        </p>
        <p className="text-xs sm:text-sm text-gray-600 mt-3 sm:mt-4">
          I'm excited to let you know that your complete website is ready! The
          site has been carefully developed with SEO best practices in mind to
          ensure strong visibility on search engines, improved speed, and
          user-friendly performance.
        </p>
      </div>

      <div className="bg-white rounded-lg shadow p-3 sm:p-5 border border-gray-100 flex-1 flex flex-col">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="font-medium text-gray-700 text-sm sm:text-base">Preview</div>
          </div>
        </div>
        <textarea
          rows={4}
          className="w-full resize-none rounded border border-gray-200 bg-white text-gray-800 p-2 sm:p-3 text-xs sm:text-sm flex-1"
          defaultValue={`I'm excited to let you know that your complete website is ready! The site has been carefully developed with SEO best practices in mind to ensure strong visibility on search engines, improved speed, and user-friendly performance.`}
        />
      </div>
    </div>
  );
}
