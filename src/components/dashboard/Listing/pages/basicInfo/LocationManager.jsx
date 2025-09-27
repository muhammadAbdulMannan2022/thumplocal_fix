"use client";

import React, { useState } from "react";
import { Plus, Trash2 } from "lucide-react";
import { AddressForm } from "./AddressForm";

export function LocationManager() {
  const [locations, setLocations] = useState([
    {
      id: "1",
      addressLine1: "",
      addressLine2: "",
      city: "",
      stateProvince: "",
      zipCode: "",
      country: "",
      phoneNumber: "",
      email: "",
      gpsLocation: "",
    },
  ]);

  const addLocation = () => {
    const newLocation = {
      id: Date.now().toString(),
      addressLine1: "",
      addressLine2: "",
      city: "",
      stateProvince: "",
      zipCode: "",
      country: "",
      phoneNumber: "",
      email: "",
      gpsLocation: "",
    };
    setLocations((prev) => [...prev, newLocation]);
  };

  const removeLocation = (id) => {
    if (locations.length > 1) {
      setLocations((prev) => prev.filter((location) => location.id !== id));
    }
  };

  const updateLocation = (id, updatedData) => {
    setLocations((prev) =>
      prev.map((location) =>
        location.id === id ? { ...location, ...updatedData } : location
      )
    );
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-gray-800">
          Location and Contact Details
        </h2>
        <button
          type="button"
          onClick={addLocation}
          className="flex items-center gap-2 px-4 py-2 text-sm text-[#8BB353] hover:text-white hover:cursor-pointer bg-transparent border border-[#8BB353] rounded-md hover:bg-[#8BB353] transition-colors"
        >
          <Plus className="w-4 h-4" />
          Add Address
        </button>
      </div>

      {locations.map((location, index) => (
        <div
          key={location.id}
          className="relative border border-gray-200 backdrop-blur-xs rounded-lg p-4"
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium text-gray-800">
              Location {index + 1}
            </h3>
            {locations.length > 1 && (
              <button
                type="button"
                onClick={() => removeLocation(location.id)}
                className="flex items-center gap-2 px-3 py-1 text-sm text-red-600 hover:text-red-800 hover:bg-red-50 border border-red-300 rounded-md transition-colors"
              >
                <Trash2 className="w-4 h-4" />
                Remove
              </button>
            )}
          </div>

          <AddressForm
            data={location}
            onChange={(updatedData) => updateLocation(location.id, updatedData)}
          />
        </div>
      ))}
    </div>
  );
}
