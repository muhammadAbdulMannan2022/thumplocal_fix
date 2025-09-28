import React, { forwardRef } from "react";
import RangeBar from "./RangeBar";

const ServiceCard = forwardRef(
  (
    {
      id,
      title,
      details,
  options,
  isTop, // desktop row indicator
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
        {/* Mobile horizontal connector removed */}

        {/* Desktop short vertical guide lines (top row downward, bottom row upward) */}
        {isTop && (
          <span
            className="hidden lg:block absolute w-[3px] bg-gray-300"
            style={{
              bottom: "-72px", // moved further so extended line still leaves gap
              height: "60px", // increased height
              left: "50%",
              transform: "translateX(-50%)",
            }}
            aria-hidden="true"
          />
        )}
        {!isTop && (
          <span
            className="hidden lg:block absolute w-[3px] bg-gray-300"
            style={{
              top: "-72px", // adjust upward offset matching new height
              height: "60px",
              left: "50%",
              transform: "translateX(-50%)",
            }}
            aria-hidden="true"
          />
        )}

        {/* Card Content */}
        <div
          className={`relative p-6 w-full h-full flex flex-col rounded-xl transition-colors duration-300 z-10 shadow-none ${
            isActive ? "bg-green-50" : "bg-white hover:bg-gray-50"
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
            <div className="mt-2 h-14 flex items-center w-full">
              {adjustable && (
                <RangeBar
                  value={value}
                  onChange={(e) =>
                    onPriceChange(id, parseInt(e.target.value))
                  }
                  min={minPrice}
                  max={maxPrice}
                  showTicks={true}
                  step="any"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
);

export default ServiceCard;
