"use client";
import { FaSearch } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { DatePickerDemo } from "../ui/DatePickerDemo";

export default function HomePageSearchPackages() {
  const router = useRouter();

  const [search, setSearch] = useState("");
  const [keyword, setKeyword] = useState(""); // ⭐ THE SEARCH KEYWORD
  const [departureDate, setDepartureDate] = useState("");
  const [famousDestinations, setFamousDestinations] = useState("");


  // Rooms & Guests
  const [openRG, setOpenRG] = useState(false);
  const [adults, setAdults] = useState("");
  const [children, setChildren] = useState("");
  const [rooms, setRooms] = useState("");
  const rgRef = useRef(null);

  // ⭐ Destination Suggestions
  const [destResults, setDestResults] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [loading, setLoading] = useState(false);
  const dropRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handler = (e) => {
      if (rgRef.current && !rgRef.current.contains(e.target)) {
        setOpenRG(false);
      }
      if (dropRef.current && !dropRef.current.contains(e.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // ⭐ Fetch Destination Suggestions (using keyword)
  useEffect(() => {
    if (!keyword) {
      setDestResults([]);
      return;
    }

    const fetchData = async () => {
      try {
        setLoading(true);

        // IMPORTANT: fetch through proxy to avoid CORS
        const res = await fetch(`https://backend.asiagotravels.com/api/location/search?q=${keyword}`);
        const data = await res.json();

        setDestResults(data || []);
        setShowDropdown(true);
      } catch (error) {
        console.log("Suggestion API Error:", error);
      } finally {
        setLoading(false);
      }
    };

    const debounce = setTimeout(fetchData, 300);
    return () => clearTimeout(debounce);
  }, [keyword]);

  // ⭐ Navigate to all-packages
  const handleSearch = () => {
    const params = new URLSearchParams();

    if (search) params.append("search", search);
    if (keyword) params.append("destination", keyword); // ⭐ send keyword
    if (departureDate) params.append("date", departureDate);
    if (famousDestinations) params.append("famousDestinations", famousDestinations);

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

      <div className="relative bg-white shadow-md rounded-lg p-6 w-full md:w-[95%] lg:w-[90%] xl:w-[90%] border border-gray-200">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-0">

          {/* SOURCE */}
          {/* <div className="flex flex-col w-full md:w-1/5">
            <label className="text-sm text-gray-500">Source</label>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Type..."
              className="text-xl font-semibold focus:outline-none border-none bg-transparent"
            />
            <span className="text-xs text-gray-400">State, Country</span>
          </div> */}

          <div className="hidden md:block h-10 w-px bg-gray-200 mr-5" />

          {/* ⭐ DESTINATION with keyword search */}
          <div className="flex flex-col w-full md:w-1/5 relative" ref={dropRef}>
            <label className="text-sm text-gray-500 mb-1">Destination</label>

            <div className="flex items-center border px-3 py-2 rounded-lg bg-white shadow-sm">
              <MdLocationOn className="text-gray-500 mr-2 text-lg" />

              <input
                type="text"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)} // ⭐ update keyword
                onFocus={() => setShowDropdown(true)}
                placeholder="Search ..."
                className="text-sm font-semibold focus:outline-none bg-transparent w-full"
              />

              {/* Loader */}
              {loading && (
                <div className="animate-spin h-4 w-4 border-2 border-blue-500 border-t-transparent rounded-full mr-2"></div>
              )}
            </div>

            {/* ⭐ Suggestions Dropdown */}
            {showDropdown && (destResults.length > 0 || loading) && (
              <div
                className={`absolute top-full left-0 w-full bg-white border rounded-2xl shadow-lg mt-2 max-h-72 overflow-y-auto z-50 transition-all duration-200`}
              >
                {loading && (
                  <div className="p-4 text-center text-gray-500 text-sm">
                    Searching…
                  </div>
                )}

                {!loading &&
                  destResults.map((item, index) => (
                    <div
                      key={index}
                      onClick={() => {
                        setKeyword(item.name); // ⭐ store selected keyword
                        setShowDropdown(false);
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
                  ))}
              </div>
            )}

            <span className="text-xs text-gray-400">State, Country</span>
          </div>

          <div className="hidden md:block h-10 w-px bg-gray-200 mr-5" />

          {/* DATE PICKER */}
          <div className="flex flex-col w-full md:w-1/5">
            <label className="text-sm text-gray-500">Departure Date</label>
            <DatePickerDemo onChange={(d) => setDepartureDate(d)} />
          </div>

          <div className="hidden md:block h-10 w-px bg-gray-200 mr-10" />

          {/* ROOMS & GUESTS */}
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

          <div className="hidden md:block h-10 w-px bg-gray-200 mr-5" />

          {/* FILTERS */}
          {/* FILTERS DROPDOWN */}
          <div className="flex flex-col w-full md:w-1/5 relative">
            <label className="text-sm text-gray-500">Filters</label>

            <select
              value={famousDestinations}
              onChange={(e) => setFamousDestinations(e.target.value)}
              className="text-lg font-semibold bg-transparent border border-gray-300 rounded-lg px-3 py-2 focus:outline-none cursor-pointer"
            >
              <option value="" disabled>
                Select a category
              </option>

              <option value="Char Dham">Char Dham</option>
              <option value="South Africa">South Africa</option>
              <option value="Do Dham">Do Dham</option>
              <option value="Kashmir">Kashmir</option>
              <option value="Africa">Africa</option>
              <option value="Uttrakhand">Uttrakhand</option>
              <option value="KathMandu">KathMandu</option>
            </select>
          </div>

        </div>
      </div>

      {/* SEARCH BUTTON */}
      <button
        onClick={handleSearch}
        className="flex items-center justify-center gap-3 bg-[#28A9E0] hover:bg-[#1C94C9] text-white font-medium px-8 py-3 rounded-full shadow-md transition w-full sm:w-auto mt-6"
      >
        <FaSearch />
        Search
      </button>
    </div>
  );
}
