import React from "react";
import {
  FaGoogle,
  FaInstagram,
  FaFacebookF,
  FaTiktok,
  FaTimes,
  FaLinkedinIn,
  FaPinterestP,
  FaYoutube,
} from "react-icons/fa";
import { BsFillCaretRightFill } from "react-icons/bs";

export default function CompanyProfile() {
  const socialMedia = [
    { name: "Google", icon: <FaGoogle className="text-gray-700 font-bold" /> },
    {
      name: "Instagram",
      icon: <FaInstagram className="text-gray-700 font-bold" />,
    },
    {
      name: "Facebook",
      icon: <FaFacebookF className="text-gray-700 font-bold" />,
    },
    { name: "TikTok", icon: <FaTiktok className="text-gray-700 font-bold" /> },
    {
      name: "Profile X",
      icon: <FaTimes className="text-gray-700 font-bold" />,
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedinIn className="text-gray-700 font-bold" />,
    },
    {
      name: "Pinterest",
      icon: <FaPinterestP className="text-gray-700 font-bold" />,
    },
    {
      name: "Youtube channel",
      icon: <FaYoutube className="text-gray-700 font-bold" />,
    },
  ];

  const services = [
    "Donec adipiscing tristique risus nec feugiat in",
    "Donec adipiscing tristique risus nec feugiat in",
    "Donec adipiscing tristique risus nec feugiat in",
    "Donec adipiscing tristique risus nec feugiat in",
    "Donec adipiscing tristique risus nec feugiat in",
  ];

  return (
    <div className="bg-gray-100">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-2">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-2">
          {/* Company Info */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                <img
                  src="/img.jpg"
                  alt="Company Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h1 className="text-xl font-semibold text-blue-600 mb-1">
                  Company name
                </h1>
                <p className="text-gray-600 text-sm">Ontario, Canada</p>
              </div>
            </div>

            {/* About */}
            <div className="mt-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">
                About
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                Ype and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
            </div>

            {/* Address */}
            <div className="mt-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">
                Address
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <tbody className="space-y-2">
                    <tr className="border-b border-gray-100">
                      <td className="py-2 text-gray-600 font-medium">
                        House No.
                      </td>
                      <td className="py-2 text-gray-600 font-medium">
                        Road No.
                      </td>
                      <td className="py-2 text-gray-600 font-medium">
                        City/State
                      </td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-2 text-gray-800">63/4</td>
                      <td className="py-2 text-gray-800">24/1</td>
                      <td className="py-2 text-gray-800">Tammy</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-2 text-gray-600 font-medium">
                        Postal Code
                      </td>
                      <td className="py-2 text-gray-600 font-medium">
                        Country
                      </td>
                      <td className="py-2 text-gray-600 font-medium">
                        Phone number
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 text-gray-800">8250</td>
                      <td className="py-2 text-gray-800">Bangladesh</td>
                      <td className="py-2 text-gray-800">
                        1634941303586513200
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Social Media links
            </h2>
            <p className="text-gray-600 text-sm mb-4">
              Link Social media accounts
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {socialMedia.map((social, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 border border-gray-200 rounded-lg"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-sm">
                      {social.icon}
                    </div>
                    <span className="text-gray-700 text-sm">{social.name}</span>
                  </div>
                  <button className="px-4 py-1 text-sm text-[#5E9512] border border-[#5E9512] hover:cursor-pointer rounded hover:bg-green-50 transition-colors">
                    Connect
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-2 flex flex-col">
          {/* Services */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-semibold text-blue-600 mb-4">
              Services
            </h2>
            <p className="text-gray-600 text-sm mb-4 leading-relaxed">
              Ype and scrambled it to make a type specimen book. Major services
              are:
            </p>
            <div className="space-y-2">
              {services.map((service, index) => (
                <div key={index} className="flex items-center gap-2 py-2">
                  <BsFillCaretRightFill color="#538BB3" size={12} />
                  <span className="text-gray-700 text-sm">{service}</span>
                </div>
              ))}
            </div>
          </div>

          {/* About Us */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-semibold text-blue-600 mb-4">
              About Us
            </h2>
            <p className="text-gray-600 text-sm mb-4 leading-relaxed">
              Ype and scrambled it to make a type specimen book. It has survived
              not only five centuries, but also the leap into electronic
              typesetting.
            </p>
            <div className="space-y-2">
              <p className="text-gray-600 text-sm font-medium">Email</p>
              <p className="text-gray-800 text-sm">demoname@demowebsite.com</p>
            </div>
          </div>

          {/* Other Links */}
          <div className="bg-white rounded-lg shadow-sm p-6 grow">
            <h2 className="text-lg font-semibold text-blue-600 mb-4">
              Other links
            </h2>
            <p className="text-gray-600 text-sm mb-4">Scrapable links</p>
            <div className="flex gap-4 text-sm">
              <span className="text-gray-400">Link 1</span>
              <span className="text-gray-400">Link 2</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
