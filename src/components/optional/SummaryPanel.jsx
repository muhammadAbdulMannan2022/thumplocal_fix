import React from "react";

const SummaryPanel = ({ totalAmount }) => {
  const formattedAmount = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(totalAmount);

  return (
    <div className="w-full lg:w-72 lg:ml-12 mt-8 lg:mt-0">
      <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 sticky top-10">
        <h2 className="text-lg font-bold text-gray-800 mb-2">Package</h2>
        <p className="text-gray-500 text-sm mb-4">Amount</p>
        <div className="bg-gray-100 p-3 rounded-md text-center mb-6">
          <span className="text-3xl font-bold text-gray-900">
            {formattedAmount}
          </span>
          <span className="text-gray-600">/Monthly</span>
        </div>
        <button className="w-full bg-green-700 text-white font-bold py-3 px-4 rounded-lg hover:bg-green-800 transition duration-300">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default SummaryPanel;
