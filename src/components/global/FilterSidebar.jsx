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

  const [famousDestinations, setFamousDestinations] = useState([]);


  // ⭐ Dual Range Budget

  const DEFAULT_MIN = 0;
const DEFAULT_MAX = 900000;


const [budgetRange, setBudgetRange] = useState([DEFAULT_MIN, DEFAULT_MAX]);
  const minBudget = budgetRange[0];
  const maxBudget = budgetRange[1];

  const [duration, setDuration] = useState(0);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [rating, setRating] = useState(null);
  const [selectedDestinations, setSelectedDestinations] = useState([]);

  // ⭐ NEW: Cities (added only)
  const [citySearch, setCitySearch] = useState("");
  const [selectedCities, setSelectedCities] = useState([]);

    const [countrySearch, setCountrySearch] = useState("");
  const [selectedCountries, setSelectedCountries] = useState([]);

  const citiesList = [
    { name: "Goa" },
    { name: "Kashmir" },
    { name: "Europe" },
    { name: "Japan" },
    { name: "Sri Lanka" },
    { name: "Nepal" },
    { name: "Himachal" },
  ];

const countriesList = [
  { name: "India" },
  { name: "Australia" },
  { name: "Thailand" },
  { name: "Singapore" },
  { name: "Switzerland" },
  // { name: "United Arab Emirates" },
  // { name: "France" },
  // { name: "Italy" },
  // { name: "Mauritius" },
  // { name: "Spain" },
];



  const filteredCities = citiesList.filter((city) =>
    city.name.toLowerCase().includes(citySearch.toLowerCase())
  );

  const typeMapping = {
    "Honeymoon Trips": "honeymoonTrip",
    "Family Trips": "familyGroupTrip",
    "Family Holiday": "familyHoliday",
    "Bachelor Tours": "bachelorTours",
    "Luxury Tours": "luxuryTours",
    "Premium Holiday Package": "premiumHolidayPackage",
    "Personalized Tours": "personalizedTours",
  };

  // Toggle helper (existing)
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
      setSuggestions(data);
      setShowSuggestions(true);
    } catch (error) {
      console.log("Suggestion API Error:", error);
    } finally {
      setLoading(false);
    }
  };

  // Debounce suggestions (existing)
  useEffect(() => {
    const timer = setTimeout(() => {
      fetchSuggestions(search);
    }, 200);
    return () => clearTimeout(timer);
  }, [search]);

  // ⭐ Save Keyword (existing)
  const saveKeyword = async (keyword) => {
    try {
      await fetch("https://backend.asiagotravels.com/api/saveKeyword", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ keyword }),
      });
    } catch (error) {
      console.log("Save Keyword Error:", error);
    }
  };

const fetchFilteredResults = async () => {
  try {
    const params = new URLSearchParams();

    // 🔍 SAFE Search (FIXES $regexMatch error)
    if (typeof search === "string" && search.trim().length > 0) {
      params.append("search", search.trim());
    }

if (
  minBudget !== DEFAULT_MIN ||
  maxBudget !== DEFAULT_MAX
) {
  params.append("minPrice", String(minBudget));
  params.append("maxPrice", String(maxBudget));
}

    // 🏙 Departure Cities
    if (selectedCities.length > 0) {
      params.append("departureCities", selectedCities.join(","));
    }
if (famousDestinations.length > 0) {
  params.append(
    "famousDestinations",
    famousDestinations.join(",")
  );
}


    // 🌍 Countries
    if (selectedCountries.length > 0) {
      params.append("countries", selectedCountries.join(","));
    }

    // 📆 Duration
    if (duration > 0) {
      params.append("minDays", String(duration));
      params.append("maxDays", String(duration + 2));
    }

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
  selectedCities,
  selectedCountries,
  famousDestinations,
]);


  return (
    <div>
      <div className="border-[#B4B4B4] border-b w-full p-6 pb-2 border-r flex justify-between text-center
      ">
        <h2 className="text-lg font-semibold">FILTERS</h2>
        <span className="text-sm text-gray-500">Reset</span>
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
            min={0}
            max={200000}
            step={100}
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

        {/* ⭐ Duration (unchanged) */}
        <div>
          <h3 className="font-semibold text-base mb-4">Tour Duration</h3>
          <div className="grid grid-cols-2 gap-3">
            <button className="border rounded-md p-2 ">3 - 6 Days</button>
            <button className="border rounded-md p-2 ">6 - 9 Days</button>
            <button className="border rounded-md p-2 ">9 - 12 Days</button>
            <button className="border rounded-md p-2 ">12 - 14 Days</button>
          </div>
        </div>

        <div className="border border-[#B4B4B4] w-full"></div>

        {/* ⭐ Types (unchanged) */}
        {/* <div>
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
        </div> */}

        {/* <div className="border border-[#B4B4B4] w-full"></div> */}

        {/* ⭐ Destinations (unchanged) */}
        <div className="space-y-2">
          <h3 className="font-semibold text-base mb-4">Famous Destinations:</h3>
        {[
  "Char Dham",
  "Himachal",
  "South Africa",
  "Europe",
  "Serengeti National Park",
  "Mount Kenya National Park",
  "Nairobi",
  "Amboseli",
  "Samburu",
].map((dest) => (
  <label key={dest} className="flex items-center space-x-2 text-sm">
    <input
      type="checkbox"
      checked={famousDestinations.includes(dest)}
      onChange={() =>
        toggleItem(dest, famousDestinations, setFamousDestinations)
      }
      className="accent-blue-500"
    />
    <span>{dest}</span>
  </label>
))}

        </div>

        <div className="border border-[#B4B4B4] w-full"></div>

        {/* ⭐ Cities (ONLY ADDITION) */}
        <div>
          <h3 className="font-semibold text-base mb-3">Cities</h3>

          <div className="relative mb-3">
            <input
              type="text"
              placeholder="Search"
              value={citySearch}
              onChange={(e) => setCitySearch(e.target.value)}
              className="w-full border rounded-md pl-3 pr-10 py-2 text-sm"
            />
            <FiSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
          </div>
{/* <div className="pb-4">

            <KeywordSearch
          search={search}
          setSearch={setSearch}
          suggestions={suggestions}
          showSuggestions={showSuggestions}
          setShowSuggestions={setShowSuggestions}
          saveKeyword={saveKeyword}
          loading={loading}
        />

</div> */}
          <div className="space-y-2 max-h-48 overflow-y-auto">
            {filteredCities.map((city) => (
              <label
                key={city.name}
                className="flex items-center justify-between text-sm"
              >
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={selectedCities.includes(city.name)}
                    onChange={() =>
                      toggleItem(city.name, selectedCities, setSelectedCities)
                    }
                    className="accent-blue-500"
                  />
                  <span>{city.name}</span>
                </div>
                <span className="text-gray-500">({city.count})</span>
              </label>
            ))}
          </div>
        </div>


<div className="border border-[#B4B4B4] w-full"></div>

<div className="space-y-2 max-h-56 overflow-y-auto">
     <h3 className="font-semibold text-base mb-3">Countries</h3>

          <div className="relative mb-4">

              {/* <KeywordSearch
          search={search}
          setSearch={setSearch}
          suggestions={suggestions}
          showSuggestions={showSuggestions}
          setShowSuggestions={setShowSuggestions}
          saveKeyword={saveKeyword}
          loading={loading}
        /> */}

            <input
              type="text"
              placeholder="Search"
              value={countrySearch}
              onChange={(e) => setCountrySearch(e.target.value)}
              className="w-full border rounded-md pl-3 pr-10 py-2 text-sm"
            />
            <FiSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
          </div>
  {countriesList.map((country) => (
    <label
      key={country.name}
      className="flex items-center justify-between text-sm"
    >
      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          checked={selectedCountries.includes(country.name)}
          onChange={() =>
            toggleItem(
              country.name,
              selectedCountries,
              setSelectedCountries
            )
          }
          className="accent-blue-500"
        />
        <span>{country.name}</span>
      </div>
    </label>
  ))}
</div>


      </div>
    </div>
  );
};

export default FiltersSidebar;
