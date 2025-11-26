"use client";
import { FaSearch } from "react-icons/fa";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation"; // Next.js App Router

export default function HomePageSearchPackages() {
  const router = useRouter();

  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [filters, setFilters] = useState("");

  // Rooms & Guests
  const [openRG, setOpenRG] = useState(false);
  const [adults, setAdults] = useState("");
  const [children, setChildren] = useState("");
  const [rooms, setRooms] = useState("");
  const rgRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handler = (e) => {
      if (rgRef.current && !rgRef.current.contains(e.target)) {
        setOpenRG(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // Navigate to /all-package with query params
  const handleSearch = () => {
    const params = new URLSearchParams();

    if (source) params.append("source", source);
    if (destination) params.append("destination", destination);
    if (departureDate) params.append("date", departureDate);
    if (filters) params.append("search", filters);
    params.append("adults", adults);
    params.append("children", children);
    params.append("rooms", rooms);

    router.push(`/all-packages?${params.toString()}`);
  };

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
              value={source}
              onChange={(e) => setSource(e.target.value)}
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
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
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
              className="text-xl font-semibold focus:outline-none border-none bg-transparent"
            />
            <span className="text-xs text-gray-400">
              {departureDate
                ? new Date(departureDate).toLocaleDateString("en-GB", {
                    weekday: "long",
                  })
                : ""}
            </span>
          </div>

          <div className="hidden md:block h-10 w-px bg-gray-200 mr-10" />

          {/* Rooms & Guests */}
          <div className="flex flex-col w-full md:w-1/5 relative" ref={rgRef}>
            <label className="text-sm text-gray-500">Rooms & Guests</label>
            <div
              className="text-lg font-semibold cursor-pointer"
              onClick={() => setOpenRG(!openRG)}
            >
              {adults} Adults, {children} Children
            </div>
            <span
              className="text-xs text-gray-400 cursor-pointer"
              onClick={() => setOpenRG(!openRG)}
            >
              {rooms} Room
            </span>

            {openRG && (
              <div className="absolute mt-2 p-4 bg-white shadow-lg rounded-lg w-60 z-50">
                <div className="flex justify-between items-center mb-3">
                  <span>Adults</span>
                  <input
                    type="number"
                    min="1"
                    value={adults}
                    onChange={(e) => setAdults(Number(e.target.value))}
                    className="border p-1 w-16 text-center"
                  />
                </div>
                <div className="flex justify-between items-center mb-3">
                  <span>Children</span>
                  <input
                    type="number"
                    min="0"
                    value={children}
                    onChange={(e) => setChildren(Number(e.target.value))}
                    className="border p-1 w-16 text-center"
                  />
                </div>
                <div className="flex justify-between items-center">
                  <span>Rooms</span>
                  <input
                    type="number"
                    min="1"
                    value={rooms}
                    onChange={(e) => setRooms(Number(e.target.value))}
                    className="border p-1 w-16 text-center"
                  />
                </div>
              </div>
            )}
          </div>

          <div className="hidden md:block h-10 w-px bg-gray-200 mr-10" />

          {/* Filters */}
          <div className="flex flex-col w-full md:w-1/5">
            <label className="text-sm text-gray-500">Filters</label>
            <input
              type="text"
              value={filters}
              onChange={(e) => setFilters(e.target.value)}
              placeholder="Beach, Adventure, Family..."
              className="text-lg font-semibold focus:outline-none border-none bg-transparent placeholder:text-gray-400"
            />
          </div>
        </div>
      </div>

      {/* Search Button */}
      <button
        onClick={handleSearch}
        className="
          flex items-center justify-center gap-3
          bg-[#28A9E0] hover:bg-[#1C94C9] text-white
          font-medium px-8 py-3 rounded-full shadow-md transition
          w-full sm:w-auto
          mt-6
        "
      >
        <FaSearch />
        Search
      </button>
    </div>
  );
}
