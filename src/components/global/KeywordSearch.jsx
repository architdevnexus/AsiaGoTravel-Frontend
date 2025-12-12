"use client";
import React, { useRef, useEffect } from "react";
import { FiSearch } from "react-icons/fi";
import { MdLocationOn } from "react-icons/md";

export const KeywordSearch = ({
  search,
  setSearch,
  suggestions,
  showSuggestions,
  setShowSuggestions,
  loading,
  saveKeyword
}) => {
  const containerRef = useRef(null);

  // 🔥 Log whenever suggestions update
  useEffect(() => {
    console.log("Updated Suggestions:", suggestions);
  }, [suggestions]);

  return (
    <div className="relative" ref={containerRef}>
      {/* Search Input */}
      <div className="flex items-center border px-3 py-2 rounded-lg bg-white shadow-sm">
        <FiSearch className="text-gray-500 mr-2 text-lg" />

        <input
          type="text"
          value={search}
          onChange={(e) => {
            console.log("Typing:", e.target.value);
            setSearch(e.target.value);
          }}
          onFocus={() => {
            console.log("Input focused → show suggestions");
            setShowSuggestions(true);
          }}
          placeholder="Search destinations..."
          className="w-full focus:outline-none text-sm"
        />

        {/* Loader spinner while typing */}
        {loading && (
          <div className="animate-spin h-4 w-4 border-2 border-blue-500 border-t-transparent rounded-full mr-2"></div>
        )}
      </div>

      {/* ⭐ Suggestions Dropdown */}
      {showSuggestions && (suggestions.length > 0 || loading) && (
        <div
          className={`absolute top-full left-0 w-full bg-white border rounded-2xl shadow-lg mt-2 max-h-72 overflow-y-auto z-50 transition-all duration-200 ${
            showSuggestions
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-2"
          }`}
        >
          {/* Loader Placeholder */}
          {loading && (
            <div className="p-4 text-center text-gray-500 text-sm">
              Searching…
            </div>
          )}

          {/* Suggestion Items */}
          {!loading &&
            suggestions.map((item, idx) => {
              console.log("Rendering Suggestion:", item); // 🔥 log each item
              return (
                <div
                  key={idx}
                  onClick={() => {
                    console.log("Clicked Suggestion:", item); // 🔥 log clicked item
                    setSearch(item.name);
                    saveKeyword(item.name);
                    setShowSuggestions(false);
                  }}
                  className="flex items-center px-4 py-3 hover:bg-gray-100 cursor-pointer transition text-sm"
                >
                  <MdLocationOn className="text-red-500 text-xl mr-3" />

                  <div className="flex flex-col">
                    <span className="font-medium">{item.name}</span>
                    <span className="text-xs text-gray-500">
                      {item.city}, {item.country}
                    </span>
                  </div>
                </div>
              );
            })}
        </div>
      )}
    </div>
  );
};
