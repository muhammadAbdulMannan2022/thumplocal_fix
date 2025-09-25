import React from "react";

const RangeBar = ({
  value,
  onChange,
  min = 0,
  max = 100,
  showTicks = false,
  orientation = "horizontal",
  step = "any",
  stepPositions = [],
}) => {
  const percentage = max > min ? ((value - min) / (max - min)) * 100 : 0;

  if (orientation === "vertical") {
    return (
      <div className="relative w-16 h-full flex justify-center py-8">
        <div className="relative h-full w-4 flex flex-col items-center">
          <div className="absolute w-2 h-full bg-gray-200 rounded-full left-1/2 -translate-x-1/2"></div>
          {step === 1 && stepPositions.length > 0 && (
            <div className="absolute left-1/2 -translate-x-1/2 h-full">
              {stepPositions.map((position, i) => (
                <div
                  key={i}
                  className="absolute w-3 h-3 bg-gray-400 rounded-full border-2 border-white shadow-sm"
                  style={{
                    top: `${position}%`,
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                />
              ))}
            </div>
          )}
          <div
            className="absolute w-2 bg-gradient-to-b from-green-400 to-teal-500 rounded-full left-1/2 -translate-x-1/2 top-0 transition-all duration-300 ease-out"
            style={{ height: `${percentage}%` }}
          ></div>
          <div
            className="absolute w-6 h-6 bg-white border-3 border-green-500 rounded-full shadow-lg pointer-events-none z-10 transition-all duration-300 ease-out"
            style={{
              top: `calc(${percentage}% - 12px)`,
              left: "50%",
              transform: "translateX(-50%)",
            }}
          ></div>
        </div>
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={onChange}
          className="range-input-vertical absolute inset-0 w-full h-full opacity-0 cursor-pointer z-20"
          style={{ writingMode: "bt-lr", WebkitAppearance: "slider-vertical" }}
        />
      </div>
    );
  }

  return (
    <div className="relative w-full flex flex-col items-center my-6">
      <div className="relative w-full h-4">
        <div className="absolute w-full h-2 bg-gray-200 rounded-full top-1"></div>
        {step === 1 && stepPositions.length > 0 && (
          <div className="absolute w-full h-full top-0">
            {stepPositions.map((position, i) => (
              <div
                key={i}
                className="absolute w-3 h-3 bg-gray-400 rounded-full border-2 border-white shadow-sm"
                style={{
                  left: `${position}%`,
                  top: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              />
            ))}
          </div>
        )}
        <div
          className="absolute h-2 bg-gradient-to-r from-green-400 to-teal-500 rounded-full top-1 transition-all duration-300 ease-out"
          style={{ width: `${percentage}%` }}
        ></div>
        <div
          className="absolute top-1/2 -translate-y-1/2 w-6 h-6 bg-white border-3 border-green-500 rounded-full shadow-md pointer-events-none transition-all duration-300 ease-out z-10"
          style={{ left: `calc(${percentage}% - 12px)` }}
        ></div>
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={onChange}
          className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer z-20"
        />
      </div>
      {showTicks && (
        <div className="w-full flex justify-between mt-3 text-xs text-gray-500 px-1">
          <span>{`$${min.toLocaleString()}`}</span>
          <span>{`$${max.toLocaleString()}`}</span>
        </div>
      )}
    </div>
  );
};

export default RangeBar;
