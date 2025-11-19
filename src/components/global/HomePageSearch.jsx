"use client";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";

export default function HomePageSearchPackages() {
  const [departureDate, setDepartureDate] = useState("2025-10-30");

  return (
    <div className="flex flex-col items-center justify-center py-6 bg-[#F8FBFF] shadow-md drop-shadow-white mx-4 md:mx-25">
      <h2 className="text-lg font-semibold mb-4 text-[#4D4D4D]">
        Search for Packages
      </h2>

      {/* Container */}
      <div className="relative bg-white shadow-md rounded-lg p-6 w-full md:w-[95%] lg:w-[90%] xl:w-[90%] border border-gray-200">

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-0">

          {/* Source */}
          <div className="flex flex-col w-full md:w-1/5">
            <label className="text-sm text-gray-500">Source</label>
            <input
              type="text"
              placeholder="Type..."
              className="text-xl font-semibold focus:outline-none border-none bg-transparent"
            />
            <span className="text-xs text-gray-400">State, Country</span>
          </div>

          <div className="hidden md:block h-10 w-px bg-gray-200 mr-10" />

          {/* Destination */}
          <div className="flex flex-col w-full md:w-1/5">
            <label className="text-sm text-gray-500">Destination</label>
            <input
              type="text"
              placeholder="Type..."
              className="text-xl font-semibold focus:outline-none border-none bg-transparent"
            />
            <span className="text-xs text-gray-400">State, Country</span>
          </div>

          <div className="hidden md:block h-10 w-px bg-gray-200 mr-10" />

          {/* Departure Date */}
          <div className="flex flex-col w-full md:w-1/5">
            <label className="text-sm text-gray-500">Departure Date</label>
            <input
              type="date"
              value={departureDate}
              onChange={(e) => setDepartureDate(e.target.value)}
              className="text-xl font-semibold focus:outline-none border-none bg-transparent appearance-none [&::-webkit-calendar-picker-indicator]:hidden"
            />
            <span className="text-xs text-gray-400">
              {new Date(departureDate).toLocaleDateString("en-GB", {
                weekday: "long",
              })}
            </span>
          </div>

          <div className="hidden md:block h-10 w-px bg-gray-200 mr-10" />

          {/* Rooms & Guests */}
          <div className="flex flex-col w-full md:w-1/5">
            <label className="text-sm text-gray-500">Rooms & Guests</label>
            <div className="text-lg font-semibold">2 Adults, 2 Children</div>
            <span className="text-xs text-gray-400">1 Room</span>
          </div>

          <div className="hidden md:block h-10 w-px bg-gray-200 mr-10" />

          {/* Filters */}
          <div className="flex flex-col w-full md:w-1/5">
            <label className="text-sm text-gray-500">Filters</label>
            <div className="text-lg font-semibold">(Optional)</div>
          </div>
        </div>
      </div>

      {/* ✅ Search Button */}
      <button
        className="
          flex items-center gap-4 bg-[#28A9E0] hover:bg-[#1C94C9] text-white 
          font-medium px-10 py-2 rounded-full shadow-md transition
          mt-6
          md:absolute md:top-[790px]
        "
      >
        <FaSearch />
        Search
      </button>
    </div>
  );
}
