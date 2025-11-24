"use client";
import React, { useState, useEffect } from "react";
import { FiSearch } from "react-icons/fi";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

const FiltersSidebar = ({ onFilterResults }) => {
  const [search, setSearch] = useState("");

  // Dual Range Budget
  const [budgetRange, setBudgetRange] = useState([1000, 200000]);
  const minBudget = budgetRange[0];
  const maxBudget = budgetRange[1];

  const [duration, setDuration] = useState(0);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [rating, setRating] = useState(null);
  const [selectedDestinations, setSelectedDestinations] = useState([]);

  // Helper
  const toggleItem = (value, list, setter) => {
    if (list.includes(value)) setter(list.filter((x) => x !== value));
    else setter([...list, value]);
  };

  // API Call
  const fetchFilteredResults = async () => {
    try {
      const params = new URLSearchParams();

      if (search) params.append("search", search);

      params.append("minBudget", minBudget);
      params.append("maxBudget", maxBudget);

      if (duration) params.append("duration", duration);
      if (selectedTypes.length > 0)
        params.append("type", selectedTypes.join(","));
      if (rating) params.append("rating", rating);
      if (selectedDestinations.length > 0)
        params.append(
          "famousDestinations",
          selectedDestinations.join(",")
        );

      const res = await fetch(
        `https://www.backend.ghardekhoapna.com/api/travel/filter?${params.toString()}`,
        { method: "GET", credentials: "include" }
      );

      const data = await res.json();
      onFilterResults(data?.data || []);
    } catch (error) {
      console.log("Filter API Error:", error);
    }
  };

  // Auto-run filters
  useEffect(() => {
    const delay = setTimeout(fetchFilteredResults, 120);
    return () => clearTimeout(delay);
  }, [
    search,
    budgetRange,
    duration,
    selectedTypes,
    rating,
    selectedDestinations,
  ]);

  return (
    <div>
      <div className="border-[#B4B4B4] border-b w-full p-6 pb-2 border-r">
        <h2 className="text-lg font-semibold">FILTERS</h2>
      </div>

      <div className="max-w-100 sm:w-92 border-r p-6 shadow-sm space-y-8">
        
        {/* Search */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search by State, City etc."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full border rounded-md pl-3 pr-10 py-2 text-sm"
          />
          <FiSearch className="absolute right-3 top-2.5 text-gray-500" />
        </div>

        <div className="border border-[#B4B4B4] w-full"></div>

        {/* ⭐ DUAL RANGE SLIDER (rc-slider) */}
        <div>
          <h3 className="font-semibold text-base mb-4">Budget (per person):</h3>

          <Slider
            range
            min={1000}
            max={200000}
            step={1000}
            value={budgetRange}
            onChange={setBudgetRange}
            trackStyle={[{ backgroundColor: "#2563EB", height: 8 }]}
            handleStyle={[
              {
                height: 20,
                width: 20,
                backgroundColor: "#fff",
                border: "3px solid #2563EB",
                marginTop: -6,
              },
              {
                height: 20,
                width: 20,
                backgroundColor: "#fff",
                border: "3px solid #2563EB",
                marginTop: -6,
              },
            ]}
            railStyle={{ backgroundColor: "#e5e7eb", height: 8 }}
          />

          <div className="flex justify-between text-sm font-medium mt-4">
            <span>₹{minBudget.toLocaleString()}</span>
            <span>₹{maxBudget.toLocaleString()}</span>
          </div>
        </div>

        <div className="border border-[#B4B4B4] w-full"></div>

        {/* Duration */}
        <div>
          <h3 className="font-semibold text-base mb-4">Duration (in Nights):</h3>
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

        <div className="border border-[#B4B4B4] w-full"></div>

        {/* Types */}
        <div>
          <h3 className="font-semibold text-base mb-4">Type:</h3>
          {[
            "Honeymoon Trips",
            "Family Trips",
            "Bachelor Tours",
            "Luxury Tours",
            "Premium Holiday Package",
            "Personalized Tours",

          ].map((type) => (
            <label key={type} className="flex items-center space-x-2 text-sm">
              <input
                type="checkbox"
                checked={selectedTypes.includes(type)}
                onChange={() =>
                  toggleItem(type, selectedTypes, setSelectedTypes)
                }
                className="accent-blue-500"
              />
              <span>{type}</span>
            </label>
          ))}
        </div>

        <div className="border border-[#B4B4B4] w-full"></div>

        {/* Rating */}
        <div>
          <h3 className="font-semibold text-base mb-4">Rating:</h3>
          {[1, 2, 3, 4, 5].map((r) => (
            <label key={r} className="flex items-center space-x-2 text-sm">
              <input
                type="radio"
                name="rating"
                checked={rating === r}
                onChange={() => setRating(r)}
                className="accent-blue-500"
              />
              <span>{r} star</span>
            </label>
          ))}
        </div>

        <div className="border border-[#B4B4B4] w-full"></div>

        {/* Destinations */}
        <div>
          <h3 className="font-semibold text-base mb-4">Famous Destinations:</h3>
          {["Char Dham", "Manali", "Kerala", "Bangalore", "Ladakh"].map(
            (dest) => (
              <label
                key={dest}
                className="flex items-center space-x-2 text-sm"
              >
                <input
                  type="checkbox"
                  checked={selectedDestinations.includes(dest)}
                  onChange={() =>
                    toggleItem(dest, selectedDestinations, setSelectedDestinations)
                  }
                  className="accent-blue-500"
                />
                <span>{dest}</span>
              </label>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default FiltersSidebar;
