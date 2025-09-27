import React from "react";
import {
  FaFacebook,
  FaGoogle,
  FaInstagram,
  FaPinterest,
  FaTwitter,
  FaYelp,
} from "react-icons/fa";

export const SocialMediaLinks = () => {
  const socialLinks = [
    { icon: <FaGoogle className="text-gray-500 mr-2" />, label: "Google" },
    { icon: <FaFacebook className="text-gray-500 mr-2" />, label: "Facebook" },
    { icon: <FaTwitter className="text-gray-500 mr-2" />, label: "Profile X" },
    {
      icon: <FaPinterest className="text-gray-500 mr-2" />,
      label: "Pinterest",
    },
    {
      icon: <FaYelp className="text-gray-500 mr-2" />,
      label: "Yelp Business Profile",
    },
    {
      icon: <FaInstagram className="text-gray-500 mr-2" />,
      label: "Instagram",
    },
  ];
  return (
    <div id="webcrumbs">
      <div className="w-full bg-gray-50 p-6">
        {/* Grid Container for Titles & Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Social Media Column */}
          <div className="space-y-4">
            <div>
              <h2 className="text-2xl font-bold text-[#8BB353] mb-1">
                Social Media Links
              </h2>
              <p className="text-gray-600">Link social media accounts</p>
            </div>

            <div className="space-y-3">
              {socialLinks.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between bg-white p-3 rounded-lg"
                >
                  <div className="flex items-center">
                    {item.icon}
                    <span className="text-gray-600">{item.label}</span>
                  </div>
                  <button className="text-[#8BB353] hover:text-green-700 transition-colors">
                    Connect
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Other Links Column */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-[#8BB353] mb-1">
                Other Links
              </h2>
              <button className="bg-white flex items-center text-gray-600 px-3 py-2 rounded-md hover:bg-gray-100 transition-colors">
                <span className="material-symbols-outlined text-sm mr-1">
                  add
                </span>
                Add link
              </button>
            </div>
            <p className="text-gray-600 mb-2">Scrapable links</p>

            <div className="grid grid-cols-2 gap-3">
              {[...Array(4)].map((_, idx) => (
                <input
                  key={idx}
                  type="text"
                  placeholder="Enter here"
                  className="p-3 bg-white rounded-lg border border-gray-100 w-full text-gray-800 focus:outline-none focus:ring-1 focus:ring-[#8BB353]"
                />
              ))}
            </div>
          </div>
        </div>

        {/* Save Changes Button */}
        <div className="flex justify-center mt-8">
          <button className="bg-[#8BB353] text-white px-6 py-2 rounded-lg shadow hover:cursor-pointer transition-colors">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};
