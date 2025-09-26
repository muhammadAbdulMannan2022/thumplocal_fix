import { Badge, ChevronDown, Copy, Download, Eye } from "lucide-react";
import React from "react";

export default function NewW() {
  return (
    <div className="space-y-4">
      <div className="bg-white rounded-lg shadow p-5 border border-gray-100">
        <h2 className="text-xl font-semibold text-gray-800">
          Building The Website With SEO
        </h2>
        <p className="text-sm text-gray-500 mt-1">
          Your SEO-Optimized Website Is Now Complete!
        </p>
        <p className="text-sm text-gray-600 mt-4">
          I'm excited to let you know that your complete website is ready! The
          site has been carefully developed with SEO best practices in mind to
          ensure strong visibility on search engines, improved speed, and
          user-friendly performance.
        </p>
        <div className="flex gap-3 mt-4">
          <button className="inline-flex hover:cursor-pointer items-center gap-2 px-4 py-2 rounded-md bg-[#8BB353] text-white shadow hover:bg-[#73b04a]">
            <Download className="w-4 h-4" />
            Download Now
          </button>
          <button className="inline-flex hover:cursor-pointer items-center gap-2 px-4 py-2 rounded-md border border-[#8BB353] text-[#8BB353] shadow hover:bg-gray-50">
            Show preview
            <Eye className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-5 border border-gray-100">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-3">
            <div className="font-medium text-gray-700">Backlinks</div>
            <button
              type="button"
              className="inline-flex items-center gap-1 text-xs text-gray-500 hover:text-gray-700 hover:cursor-pointer"
            >
              <Copy className="w-3 h-3 " /> Copy
            </button>
          </div>
          <Badge>3/8</Badge>
        </div>
        <textarea
          rows={6}
          className="w-full resize-none rounded border border-gray-200 bg-white text-gray-800 p-3 text-sm"
          defaultValue={`I'm excited to let you know that your complete website is ready! The site has been carefully developed with SEO best practices in mind to ensure strong visibility on search engines, improved speed, and user-friendly performance.`}
        />
      </div>

      <div className="bg-white rounded-lg shadow p-5 border border-gray-100">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-3">
            <div className="font-medium text-gray-700">Tags</div>
            <button
              type="button"
              className="inline-flex items-center gap-1 text-xs text-gray-500 hover:text-gray-700 hover:cursor-pointer"
            >
              <Copy className="w-3 h-3" /> Copy
            </button>
          </div>
          <Badge>Space</Badge>
        </div>
        <textarea
          rows={6}
          className="w-full resize-none rounded border border-gray-200 bg-white text-gray-800 p-3 text-sm"
          placeholder="I'm excited to let you know that your complete website is ready! The site has been carefully developed with SEO best practices in mind to ensure strong visibility on search engines, improved speed, and user-friendly performance."
        />
      </div>
    </div>
  );
}
