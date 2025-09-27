import React from "react";
import { useState } from "react";
import { FaMapLocationDot } from "react-icons/fa6";
import Modal from "../../../../ui/MapModal";

export default function ReviewLocation() {
  const [locationData, setLocationData] = useState({
    addressLine1: "",
    city: "",
    stateProvince: "",
    zipPostalCode1: "",
    zipPostalCode2: "",
    country: "",
    phoneNumber: "",
    email: "",
    gpsLocation: "",
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLocationData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAutoLocate = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocationData((prev) => ({
            ...prev,
            gpsLocation: `${latitude}, ${longitude}`,
          }));
        },
        (error) => {
          console.error("Error getting location:", error);
        }
      );
    }
  };

  return (
    <div className="py-5">
      <div className="bg-white/10 backdrop-blur-xs rounded-lg py-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          Location and Contact Details
        </h2>

        {/* Address line 1 */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Address line 1
          </label>
          <div className="flex items-center justify-between">
            <input
              type="text"
              name="addressLine1"
              value={locationData.addressLine1}
              onChange={handleInputChange}
              placeholder="Street address, number, etc."
              className="flex-1 px-3 py-2 border border-gray-300 placeholder-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8BB353] focus:border-transparent text-gray-800"
            />
            <button className="ml-4 text-[#8BB353] hover:text-[#8BB353]/90 hover:cursor-pointer font-medium flex items-center">
              <span className="mr-1">+</span>
              Address
            </button>
          </div>
        </div>

        {/* City, State, ZIP row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              City
            </label>
            <input
              type="text"
              name="city"
              placeholder="Enter here..."
              value={locationData.city}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 placeholder-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8BB353] focus:border-transparent text-gray-800"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              State/Province
            </label>
            <input
              type="text"
              name="stateProvince"
              placeholder="Enter here..."
              value={locationData.stateProvince}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 placeholder-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8BB353] focus:border-transparent text-gray-800"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              ZIP/Postal code
            </label>
            <input
              type="text"
              name="zipPostalCode1"
              placeholder="Enter here..."
              value={locationData.zipPostalCode1}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 placeholder-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8BB353] focus:border-transparent text-gray-800"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              ZIP/Postal code
            </label>
            <input
              type="text"
              name="zipPostalCode2"
              placeholder="Enter here..."
              value={locationData.zipPostalCode2}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 placeholder-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8BB353] focus:border-transparent text-gray-800"
            />
          </div>
        </div>

        {/* Country, Phone, Email, GPS row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Country
            </label>
            <input
              type="text"
              name="country"
              placeholder="Enter here..."
              value={locationData.country}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 placeholder-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8BB353] focus:border-transparent text-gray-800"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              name="phoneNumber"
              placeholder="Enter here..."
              value={locationData.phoneNumber}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 placeholder-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8BB353] focus:border-transparent text-gray-800"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter here..."
              value={locationData.email}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 placeholder-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8BB353] focus:border-transparent text-gray-800"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              GPS location
            </label>
            <div className="flex">
              <input
                type="text"
                name="gpsLocation"
                placeholder="Enter here..."
                value={locationData.gpsLocation}
                onChange={handleInputChange}
                className="flex-1 px-3 py-2 border border-gray-300 placeholder-gray-400 rounded-l-md focus:outline-none focus:ring-2 focus:ring-[#8BB353] focus:border-transparent text-gray-800"
              />
              <button
                type="button"
                onClick={() => {
                  handleAutoLocate();
                  setIsModalOpen(true);
                }}
                className="px-4 py-2 bg-[#8BB353] hover:bg-[#8BB353]/90 hover:cursor-pointer text-white rounded-r-md transition-colors"
              >
                <FaMapLocationDot />
              </button>
            </div>
          </div>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
