"use client";
import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";

const FiltersSidebar = () => {
  const [budget, setBudget] = useState(0);
  const [duration, setDuration] = useState(0);

  return (
    <div>
          <div className="border-[#B4B4B4] border-b w-full p-6 pb-2 border-r">
      <h2 className="text-lg font-semibold">FILTERS</h2>
      </div>
    <div className=" max-w-100 sm:w-92 border-r  p-6 shadow-sm space-y-8">
      {/* Title */}
    

      {/* Search */}
      <div className="relative">
        <input
          type="text"
          placeholder="Search by State, City etc."
          className="w-full border rounded-md pl-3 pr-10 py-2 text-sm focus:outline-none focus:ring focus:ring-blue-200"
        />
        <FiSearch className="absolute right-3 top-2.5 text-gray-500" />
      </div>

      <div className="border-[#B4B4B4] border w-full "></div>

      {/* Budget */}
      <div>
        <div className="flex justify-between items-center cursor-pointer">
          <h3 className="font-semibold text-base mb-4">Budget (per person):</h3>
        </div>
        <input
          type="range"
          min="0"
          max="200000"
          step="1000"
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
          className="w-full mt-2"
        />
        <div className="flex justify-between text-xs text-gray-600">
          <span>₹0</span>
          <span>₹2L+</span>
        </div>
      </div>

      <div className="border-[#B4B4B4] border w-full "></div>

      {/* Duration */}
      <div>
        <h3 className="font-semibold text-base  mb-4">Duration (in Nights):</h3>
        <div className="flex items-center space-x-3">
          <button
            onClick={() => setDuration(duration > 0 ? duration - 1 : 0)}
            className="border rounded-md w-6 h-8 flex items-center justify-center"
          >
            –
          </button>
          <input
            type="text"
            value={duration}
            readOnly
            className="w-10 h-8 text-center border rounded-md text-sm"
          />
          <button
            onClick={() => setDuration(duration + 1)}
            className="border rounded-md w-6 h-8 flex items-center justify-center"
          >
            +
          </button>
        </div>
      </div>
      <div className="border-[#B4B4B4] border w-full "></div>
      {/* Type */}
      <div>
        <h3 className="font-semibold text-base mb-4">Type:</h3>
        <div className="flex flex-col space-y-1 text-sm text-gray-700">
          {[
            "Upcoming Group Trips",
            "Domestic Trips",
            "Weekend Trips",
            "Backpacking Trips",
            "Corporate Trips",
          ].map((type) => (
            <label key={type} className="flex items-center space-x-2">
              <input type="checkbox" className="accent-blue-500" />
              <span>{type}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="border-[#B4B4B4] border w-full "></div>

      {/* Rating */}
      <div>
        <h3 className="font-semibold text-base mb-4">Rating:</h3>
        <div className="flex flex-col space-y-1 text-sm text-gray-700">
          {[
            { label: "1 star", count: 19 },
            { label: "2 stars", count: 9 },
            { label: "3 stars", count: 21 },
            { label: "4 stars", count: 1 },
            { label: "5 stars", count: 11 },
          ].map((item) => (
            <label
              key={item.label}
              className="flex items-center justify-between space-x-2"
            >
              <div className="flex items-center space-x-2">
                <input type="checkbox" className="accent-blue-500" />
                <span>{item.label}</span>
              </div>
              <span className="text-gray-500 text-xs">({item.count})</span>
            </label>
          ))}
        </div>
      </div>

      <div className="border-[#B4B4B4] border w-full "></div>

      {/* Famous Destinations */}
      <div>
        <h3 className="font-semibold text-base mb-4">Famous Destinations:</h3>
        <div className="flex flex-col space-y-1 text-sm text-gray-700">
          {["GOA", "Kashmir", "Kerala", "Bangalore", "Ladakh"].map((dest) => (
            <label key={dest} className="flex items-center space-x-2">
              <input type="checkbox" className="accent-blue-500" />
              <span>{dest}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
    </div>

  );
};

export default FiltersSidebar;
