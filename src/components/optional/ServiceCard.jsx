import React, { forwardRef } from "react";
import RangeBar from "./RangeBar";

const ServiceCard = forwardRef(
  (
    {
      id,
      title,
      details,
      options,
      isLeft, // Prop for mobile layout
      adjustable,
      minPrice,
      maxPrice,
      value,
      onPriceChange,
      onRemove,
      isActive = false,
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className="relative flex flex-col items-center text-center w-48 lg:w-52"
      >
        {/* Mobile-only CSS connectors - RESTORED */}
        <div
          className={`block lg:hidden absolute h-1 z-0 transition-colors duration-300 ${
            isActive ? "bg-green-500" : "bg-gray-300"
          } ${isLeft ? "left-full w-12" : "right-full w-12"}`}
          style={{
            top: "50%",
            transform: "translateY(-50%)",
          }}
        />

        {/* Card Content */}
        <div
          className={`relative p-6 w-full h-full flex flex-col rounded-lg border-2 transition-all duration-300 shadow-sm z-10 ${
            isActive
              ? "bg-green-50 border-green-200 shadow-md"
              : "bg-white border-gray-200 hover:border-gray-300"
          }`}
        >
          <div className="flex-grow">
            <h3
              className={`font-bold text-sm mb-2 transition-colors duration-300 ${
                isActive ? "text-green-800" : "text-gray-800"
              }`}
            >
              {title}
            </h3>
            {details && (
              <p className="text-xs text-gray-600 mb-2 leading-relaxed">
                {details}
              </p>
            )}
            {options && (
              <div className="text-gray-600 text-xs mb-3 whitespace-pre-line leading-relaxed">
                {options}
              </div>
            )}
            <p
              className={`font-semibold text-lg mb-3 transition-colors duration-300 ${
                isActive ? "text-green-700" : "text-green-600"
              }`}
            >
              ${value.toLocaleString()}
            </p>
          </div>
          <div className="flex-shrink-0">
            <div className="flex justify-center space-x-2 text-xs mb-3">
              <button className="text-blue-600 hover:text-blue-700 hover:underline transition-colors duration-200">
                Learn More
              </button>
              <button className="text-blue-600 hover:text-blue-700 hover:underline transition-colors duration-200">
                Customize
              </button>
              <button
                className="text-red-600 hover:text-red-700 hover:underline transition-colors duration-200"
                onClick={() => onRemove(id)}
                aria-label={`Remove ${title}`}
              >
                Remove
              </button>
            </div>
            {adjustable && (
              <div className="mt-2">
                <RangeBar
                  value={value}
                  onChange={(e) => onPriceChange(id, parseInt(e.target.value))}
                  min={minPrice}
                  max={maxPrice}
                  showTicks={true}
                  step="any"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
);

export default ServiceCard;
