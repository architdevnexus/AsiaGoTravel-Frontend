"use client";

import React, { useEffect, useState } from "react";
import { HeroAllPackage } from "./HeroAllPackage";
import { BestDestinationComponent } from "../landingpage/BestSelling";
import { HolidayCard } from "../global/HolidayCard";
import FiltersSidebar from "../global/FilterSidebar";
import { getAllPackages } from "../services/getAllPackages";
import { useSearchParams } from "next/navigation";

export const AllPackageComponent = ({ slug }) => {
  const searchParams = useSearchParams();

  // Query Params
  const destination = searchParams.get("destination") || "";
  const filters = searchParams.get("search") || "";
  const adults = searchParams.get("adults") || "";
  const children = searchParams.get("children") || "";
  const rooms = searchParams.get("rooms") || "";

  // STATE
  const [packages, setPackages] = useState([]);
  const [filteredPackages, setFilteredPackages] = useState(null);
  const [loading, setLoading] = useState(true);   // 👈 ADDED

  // Fetch all packages once
  useEffect(() => {
    fetchPackages();
  }, []);

  const fetchPackages = async () => {
    try {
      setLoading(true);                             // 👈 START LOADING
      const res = await getAllPackages();
      const data = res?.data || [];
      setPackages(data);

      applySearchFilters(data);
    } finally {
      setLoading(false);                            // 👈 STOP LOADING
    }
  };

  // Filter logic
  const applySearchFilters = (allPackages) => {
    let result = allPackages;

    if (destination) {
      result = result.filter((pkg) =>
        pkg?.location?.toLowerCase().includes(destination.toLowerCase())
      );
    }

    if (filters) {
      result = result.filter((pkg) =>
        pkg?.title?.toLowerCase().includes(filters.toLowerCase())
      );
    }

    setFilteredPackages(result);
  };

  // Re-run filters when query changes
  useEffect(() => {
    if (packages.length > 0) {
      setLoading(true);             // 👈 Show loader when filtering
      applySearchFilters(packages);
      setLoading(false);
    }
  }, [destination, filters, adults, children, rooms]);

  return (
    <div>
      <HeroAllPackage />

      <div className="flex bg-white rounded-2xl border m-10 relative bottom-24 border-[#B4B4B4]">
        {/* FILTER SIDEBAR */}
        <div className="hidden md:block">
          <FiltersSidebar onFilterResults={(data) => setFilteredPackages(data)} />
        </div>

        {/* RIGHT SIDE */}
        <div className="w-full">

          {/* TITLE */}
          <div className="px-10 mt-5">
            {filteredPackages && filteredPackages.length > 0 ? (
              <h2 className="text-xl font-semibold">
                Showing results for:{" "}
                <span className="text-blue-600">
                  {destination || filters || ""}
                </span>
              </h2>
            ) : (
              <h2 className="text-xl font-semibold text-red-500">
                No packages found for: {destination || filters}
              </h2>
            )}
          </div>

          {/* PACKAGE CARDS */}
          <div className="p-10 max-sm:p-0">
            <HolidayCard
              grid="grid-cols-1 md:grid-cols-2 gap-9"
              packages={filteredPackages || packages}
              slug={slug}
              loading={loading}      // 👈 PASSED LOADING STATE
            />
          </div>
        </div>
      </div>

      <BestDestinationComponent />
    </div>
  );
};
