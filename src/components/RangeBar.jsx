import React from "react";

const RangeBar = ({
  value,
  onChange,
  min = 0,
  max = 100,
  showTicks = false,
  orientation = "horizontal",
  step = "any",
}) => {
  // Ensure we don't divide by zero if min and max are the same
  const percentage = ((value - min) / (max - min)) * 97;

  // --- Vertical Layout ---
  // The visual elements are reversed to fill from top-to-bottom
  if (orientation === "vertical") {
    return (
      <div className="relative w-16 h-full flex justify-center py-4">
        {/* Container for VISUAL elements only */}
        <div className="relative h-full w-4 flex flex-col items-center">
          {/* Track */}
          <div className="absolute w-2 h-full bg-gray-200 rounded-full left-1/2 -translate-x-1/2"></div>

          {/* Step indicators hidden but functionality preserved */}

          {/* Progress (fills from the top) */}
          <div
            className="absolute w-2 bg-gradient-to-b from-green-400 to-teal-500 rounded-full left-1/2 -translate-x-1/2 top-0"
            style={{ height: `${percentage}%` }}
          ></div>

          {/* Thumb (visual only, positioned from top) */}
          <div
            className="absolute w-6 h-6 bg-white border-2 border-green-500 rounded-full shadow-lg pointer-events-none z-10"
            style={{
              top: `calc(${percentage}% - 12px)`, // 12px is half the thumb's height
              left: "50%",
              transform: "translateX(-50%)",
            }}
          ></div>
        </div>

        {/* Functional input overlay (invisible) */}
        {/* The native vertical slider goes bottom-to-top, but our CSS handles the visual reversal */}
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={onChange}
          className="range-input-vertical absolute inset-0 w-full h-full opacity-0 cursor-pointer z-20"
        />
      </div>
    );
  }

  // --- Horizontal Layout ---
  return (
    <div className="relative w-full flex flex-col items-center my-4 px-4">
      <div className="relative w-full h-6">
        {/* Track */}
        <div className="absolute w-full h-3 bg-gray-200 rounded-full top-1.5"></div>

        {/* Progress */}
        <div
          className="absolute h-3 bg-gradient-to-r from-green-400 to-teal-500 rounded-full top-1.5"
          style={{ width: `${percentage}%` }}
        ></div>

        {/* Thumb */}
        <div
          className="absolute top-1/2 -translate-y-1/2 w-6 h-6 bg-white border-2 border-green-500 rounded-full shadow-md pointer-events-none"
          style={{ left: `calc(${percentage}% - 12px)` }} // 12px is half the thumb's width
        ></div>

        {/* Functional input overlay (invisible) */}
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={onChange}
          className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
        />
      </div>
      {showTicks && (
        <div className="w-full flex justify-between mt-2 text-xs text-gray-500">
          <span>{`$${min.toLocaleString()}`}</span>
          <span>{`$${max.toLocaleString()}`}</span>
        </div>
      )}
    </div>
  );
};

export default RangeBar;
