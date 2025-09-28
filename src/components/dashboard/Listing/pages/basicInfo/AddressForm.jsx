import React from "react";
import { MapPin } from "lucide-react";

export function AddressForm({ data = {}, onChange = () => {} }) {
  const handleInputChange = (field, value) => {
    onChange({ [field]: value });
  };

  const handleAutoLocate = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          onChange({
            gpsLocation: `${latitude.toFixed(6)}, ${longitude.toFixed(6)}`,
          });
        },
        (error) => {
          console.error("Error getting location:", error);
          alert("Unable to get your location. Please enter manually.");
        }
      );
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  return (
    <div className="p-3 sm:p-6 rounded-lg">
      {/* Address Line 1 */}
      <div className="mb-3 sm:mb-4">
        <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
          Address Line
        </label>
        <input
          type="text"
          placeholder="Street address, number, etc."
          value={data.addressLine1 || ""}
          onChange={(e) => handleInputChange("addressLine1", e.target.value)}
          className="w-full px-3 py-2.5 sm:py-2 bg-white border border-gray-300 rounded-lg 
                     text-gray-800 placeholder-gray-400
                     focus:outline-none focus:ring-2 focus:ring-[#8BB353] focus:border-transparent"
          required
        />
      </div>

      {/* First Row: City, State/Province, ZIP/Postal Code */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mb-3 sm:mb-4">
        <div>
          <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
            City *
          </label>
          <input
            type="text"
            placeholder="Enter city"
            value={data.city || ""}
            onChange={(e) => handleInputChange("city", e.target.value)}
            className="w-full px-3 py-2.5 sm:py-2 bg-white border border-gray-300 rounded-lg 
                       text-gray-800 placeholder-gray-400
                       focus:outline-none focus:ring-2 focus:ring-[#8BB353] focus:border-transparent"
            required
          />
        </div>

        <div>
          <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
            State/Province
          </label>
          <input
            type="text"
            placeholder="Enter state or province"
            value={data.stateProvince || ""}
            onChange={(e) => handleInputChange("stateProvince", e.target.value)}
            className="w-full px-3 py-2.5 sm:py-2 bg-white border border-gray-300 rounded-lg 
                       text-gray-800 placeholder-gray-400
                       focus:outline-none focus:ring-2 focus:ring-[#8BB353] focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
            ZIP/Postal Code *
          </label>
          <input
            type="text"
            placeholder="Enter ZIP or postal code"
            value={data.zipCode || ""}
            onChange={(e) => handleInputChange("zipCode", e.target.value)}
            className="w-full px-3 py-2.5 sm:py-2 bg-white border border-gray-300 rounded-lg 
                       text-gray-800 placeholder-gray-400
                       focus:outline-none focus:ring-2 focus:ring-[#8BB353] focus:border-transparent"
            required
          />
        </div>
      </div>

      {/* Second Row: Country, Phone, Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mb-3 sm:mb-4">
        <div>
          <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
            Country *
          </label>
          <select
            value={data.country || ""}
            onChange={(e) => handleInputChange("country", e.target.value)}
            className="w-full px-3 py-2.5 sm:py-2 bg-white border border-gray-300 rounded-lg 
                       text-gray-800 placeholder-gray-400
                       focus:outline-none focus:ring-2 focus:ring-[#8BB353] focus:border-transparent"
            required
          >
            <option value="">Select country</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="GB">United Kingdom</option>
            {/* Add more countries as needed */}
          </select>
        </div>

        <div>
          <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            placeholder="+1 (555) 123-4567"
            value={data.phoneNumber || ""}
            onChange={(e) => handleInputChange("phoneNumber", e.target.value)}
            className="w-full px-3 py-2.5 sm:py-2 bg-white border border-gray-300 rounded-lg 
                       text-gray-800 placeholder-gray-400
                       focus:outline-none focus:ring-2 focus:ring-[#8BB353] focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
            Email *
          </label>
          <input
            type="email"
            placeholder="business@example.com"
            value={data.email || ""}
            onChange={(e) => handleInputChange("email", e.target.value)}
            className="w-full px-3 py-2.5 sm:py-2 bg-white border border-gray-300 rounded-lg 
                       text-gray-800 placeholder-gray-400
                       focus:outline-none focus:ring-2 focus:ring-[#8BB353] focus:border-transparent"
            required
          />
        </div>
      </div>

      {/* GPS Location */}
      <div className="mb-3 sm:mb-4">
        <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
          GPS Location (Optional)
        </label>
        <div className="flex flex-col sm:flex-row gap-2">
          <input
            type="text"
            placeholder="Latitude, Longitude (e.g., 40.7128, -74.0060)"
            value={data.gpsLocation || ""}
            onChange={(e) => handleInputChange("gpsLocation", e.target.value)}
            className="flex-1 px-3 py-2.5 sm:py-2 bg-white border border-gray-300 rounded-lg 
                       text-gray-800 placeholder-gray-400
                       focus:outline-none focus:ring-2 focus:ring-[#8BB353] focus:border-transparent"
          />
          <button
            type="button"
            onClick={handleAutoLocate}
            className="bg-[#8BB353] hover:bg-[#7AA142] text-white px-3 sm:px-4 py-2.5 sm:py-2 text-sm rounded-lg 
                       flex items-center justify-center gap-1 transition-colors shadow-sm flex-shrink-0"
          >
            <MapPin className="w-4 h-4" />
            <span className="hidden sm:inline">Auto</span>
          </button>
        </div>
      </div>
    </div>
  );
}
