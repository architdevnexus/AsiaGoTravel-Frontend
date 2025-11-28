"use client";

import React, { useEffect, useState } from "react";
import { BestDestinationComponent } from "../landingpage/BestSelling";
import { HolidayCard } from "../global/HolidayCard";
import FiltersSidebar from "../global/FilterSidebar";
import { getAllPackages } from "../services/getAllPackages";

export const AllPackageComponent = ({ slug, subCategory }) => {
  // Query Params (client-only, safe)
  const [destination, setDestination] = useState("");
  const [filters, setFilters] = useState("");

  // Read query params safely
  useEffect(() => {
    if (typeof window !== "undefined") {
      const query = new URLSearchParams(window.location.search);
      setDestination(query.get("destination") || "");
      setFilters(query.get("search") || "");
    }
  }, []);

  // STATE
  const [packages, setPackages] = useState([]);
  const [filteredPackages, setFilteredPackages] = useState([]);
  const [loading, setLoading] = useState(true);

  // TAB STATE (Domestic / International)
  const [activeTab, setActiveTab] = useState("domestic");

  useEffect(() => {
    fetchPackages();
  }, []);

  const fetchPackages = async () => {
    try {
      setLoading(true);
      const res = await getAllPackages();
      const data = res?.data || [];
      setPackages(data);
      applySearchFilters(data, activeTab);
    } finally {
      setLoading(false);
    }
  };

  const applySearchFilters = (allPackages, tab = activeTab) => {
    let result = allPackages;

    // TAB FILTER
    result = result.filter((pkg) => {
      if (tab === "domestic") return pkg.tripCategory === "DomesticTrips";
      if (tab === "international")
        return pkg.tripCategory === "InternationalTrips";
      return true;
    });

    // NESTED PACKAGE FILTER
    result = result.map((pkg) => {
      if (pkg?.Packages?.length) {
        const filteredNested = pkg.Packages.filter((p) => {
          const matchesTitle = filters
            ? p.title.toLowerCase().includes(filters.toLowerCase())
            : true;
          return matchesTitle;
        });

        return { ...pkg, Packages: filteredNested };
      }
      return pkg;
    });

    // DESTINATION FILTER
    if (destination) {
      result = result.filter((pkg) =>
        pkg?.Packages?.some((p) =>
          p.location?.toLowerCase().includes(destination.toLowerCase())
        )
      );
    }

    // REMOVE EMPTY
    result = result.filter((pkg) => pkg.Packages?.length > 0);

    setFilteredPackages(result);
  };

  const handleFilteredResults = (apiResults) => {
  setFilteredPackages(apiResults);
};


  // Re-run filters when query changes
  useEffect(() => {
    if (packages.length > 0) {
      setLoading(true);
      applySearchFilters(packages, activeTab);
      setLoading(false);
    }
  }, [destination, filters, activeTab]);

  return (
    <div>
      <div className="flex bg-white rounded-2xl border m-10 relative bottom-24 border-[#B4B4B4]">
        {/* FILTER SIDEBAR */}
        <div className="hidden md:block">
      <FiltersSidebar onFilterResults={handleFilteredResults} />

        </div>

        {/* RIGHT SIDE */}
        <div className="w-full">
          {/* TABS */}
          <div className="px-10 mt-8 flex gap-4 border-b pb-4">
            <button
              onClick={() => setActiveTab("domestic")}
              className={`px-4 py-2 rounded-lg font-medium ${
                activeTab === "domestic"
                  ? "bg-[#1B4965] text-white"
                  : "bg-gray-200 text-black"
              }`}
            >
              Domestic
            </button>

            <button
              onClick={() => setActiveTab("international")}
              className={`px-4 py-2 rounded-lg font-medium ${
                activeTab === "international"
                  ? "bg-[#1B4965] text-white"
                  : "bg-gray-200 text-black"
              }`}
            >
              International
            </button>
          </div>

          {/* TITLE */}
          <div className="px-10 mt-4">
            {filteredPackages?.length ? (
              <h2 className="text-xl font-semibold">
                Showing {activeTab} results for:{" "}
                <span className="text-blue-600">{destination || filters}</span>
              </h2>
            ) : (
              <h2 className="text-xl font-semibold text-red-500">
                No {activeTab} packages found for: {destination || filters}
              </h2>
            )}
          </div>

          {/* PACKAGE CARDS */}
          <div className="p-10">
            <HolidayCard
              grid="grid-cols-1 md:grid-cols-2 gap-9"
              packages={filteredPackages.flatMap((pkg) => pkg.Packages || [])}
              slug={slug}
              loading={loading}
            />
          </div>
        </div>
      </div>

      <BestDestinationComponent />
    </div>
  );
};
