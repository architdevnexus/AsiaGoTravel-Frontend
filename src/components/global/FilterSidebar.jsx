"use client"; 
import React, { useState, useEffect } from "react";
import { FiSearch } from "react-icons/fi";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { KeywordSearch } from "./KeywordSearch";


const FiltersSidebar = ({ onFilterResults }) => {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);


  // ⭐ Suggestions
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  // ⭐ Dual Range Budget
  const [budgetRange, setBudgetRange] = useState([0, 900000]);
  const minBudget = budgetRange[0];
  const maxBudget = budgetRange[1];

  const [duration, setDuration] = useState(0);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [rating, setRating] = useState(null);
  const [selectedDestinations, setSelectedDestinations] = useState([]);

  const typeMapping = {
    "Honeymoon Trips": "honeymoonTrip",
    "Family Trips": "familyGroupTrip",
    "Family Holiday": "familyHoliday",
    "Bachelor Tours": "bachelorTours",
    "Luxury Tours": "luxuryTours",
    "Premium Holiday Package": "premiumHolidayPackage",
    "Personalized Tours": "personalizedTours",
  };

  // Toggle helper
  const toggleItem = (value, list, setter) => {
    if (list.includes(value)) setter(list.filter((x) => x !== value));
    else setter([...list, value]);
  };

const fetchSuggestions = async (keyword) => {
  if (!keyword) {
    setSuggestions([]);
    return;
  }

  try {
    setLoading(true);

    const res = await fetch(
      `https://backend.asiagotravels.com/api/location/search?q=${keyword}`
    );

    const data = await res.json();
    setSuggestions(data?.data || []);
    setShowSuggestions(true);
  } catch (error) {
    console.log("Suggestion API Error:", error);
  } finally {
    setLoading(false);
  }
};


  // Debounce suggestions
  useEffect(() => {
    const timer = setTimeout(() => {
      fetchSuggestions(search);
    }, 200);

    return () => clearTimeout(timer);
  }, [search]);

  // ⭐ Save Keyword (your existing API)
  const saveKeyword = async (keyword) => {
    try {
      await fetch("https://backend.asiagotravels.com/api/saveKeyword", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ keyword }),
      });
    } catch (error) {
      console.log("Save Keyword Error:", error);
    }
  };

  // ⭐ MAIN FILTER API
  const fetchFilteredResults = async () => {
    try {
      const params = new URLSearchParams();
      params.append("tripCategory", "");

      if (search) params.append("search", search);

      params.append("minBudget", minBudget);
      params.append("maxBudget", maxBudget);

      const minNights = duration > 0 ? duration : 1;
      const maxNights = duration > 0 ? duration + 1 : 10;
      params.append("minNights", minNights);
      params.append("maxNights", maxNights);

      if (rating) params.append("rating", rating);

      if (selectedTypes.length > 0) {
        const mappedTypes = selectedTypes
          .filter((x) => x !== "All")
          .map((x) => typeMapping[x]);
        params.append("type", mappedTypes.join(","));
      }

      if (selectedDestinations.length > 0)
        params.append(
          "famousDestinations",
          selectedDestinations.join(",")
        );

      const apiURL = `https://backend.asiagotravels.com/api/travel/filter?${params.toString()}`;

      const res = await fetch(apiURL, {
        method: "GET",
        credentials: "include",
      });

      const data = await res.json();
      onFilterResults(data?.data || []);
    } catch (error) {
      console.log("Filter API Error:", error);
    }
  };

  // Auto-run filter on change
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

        {/* ⭐ Search with Suggestions */}
   <KeywordSearch
  search={search}
  setSearch={setSearch}
  suggestions={suggestions}
  showSuggestions={showSuggestions}
  setShowSuggestions={setShowSuggestions}
  saveKeyword={saveKeyword}
  loading={loading}
/>


        <div className="border border-[#B4B4B4] w-full"></div>

        {/* ⭐ Budget */}
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
            <span>₹{minBudget.toLocaleString("en-IN")}</span>
            <span>₹{maxBudget.toLocaleString("en-IN")}</span>
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
            "All",
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

        {/* Destinations */}
        <div>
          <h3 className="font-semibold text-base mb-4">Famous Destinations:</h3>
          {["All", "Char Dham", "Manali", "Kerala", "Bangalore", "Ladakh"].map(
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
