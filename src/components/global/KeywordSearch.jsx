import React from "react";
import { FiSearch } from "react-icons/fi";

export const KeywordSearch = ({
  search,
  setSearch,
  suggestions,
  showSuggestions,
  setShowSuggestions,
  saveKeyword,
}) => {
  return (
    <div className="relative">
      {/* Search Input */}
      <input
        type="text"
        placeholder="Search by State, City etc."
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          setShowSuggestions(true);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            saveKeyword(search);
            setShowSuggestions(false);
          }
        }}
        className="w-full border rounded-md pl-3 pr-10 py-2 text-sm"
      />

      <FiSearch className="absolute right-3 top-2.5 text-gray-500" />

      {/* Suggestion Dropdown */}
      {showSuggestions && suggestions.length > 0 && (
        <div className="absolute left-0 right-0 bg-white border rounded-md mt-1 shadow-lg z-20 max-h-60 overflow-auto text-sm">
          {suggestions.map((item, index) => (
            <div
              key={index}
              onClick={() => {
                setSearch(item.name);
                saveKeyword(item.name);
                setShowSuggestions(false);
              }}
              className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
            >
              {item.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
