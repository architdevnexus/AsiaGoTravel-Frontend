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
  const [filteredPackages, setFilteredPackages] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch all packages once
  useEffect(() => {
    fetchPackages();
  }, []);

  const fetchPackages = async () => {
    try {
      setLoading(true);
      const res = await getAllPackages();
      const data = res?.data || [];
      setPackages(data);

      console.log(data[0]?.Packages, "packagedata");

      applySearchFilters(data);
    } finally {
      setLoading(false);
    }
  };

  // Filter logic including nested Packages
  const applySearchFilters = (allPackages) => {
    let result = allPackages.map((pkg) => {
      if (pkg?.Packages?.length) {
        // Filter nested Packages
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

    // Filter top-level packages by destination
    if (destination) {
      result = result.filter((pkg) =>
        pkg?.location?.toLowerCase().includes(destination.toLowerCase())
      );
    }

    // Remove any packages with no nested Packages
    result = result.filter((pkg) => pkg.Packages?.length > 0);

    setFilteredPackages(result);
  };

  // Re-run filters when query changes
  useEffect(() => {
    if (packages.length > 0) {
      setLoading(true);
      applySearchFilters(packages);
      setLoading(false);
    }
  }, [destination, filters, adults, children, rooms]);

  return (
    <div>
      <div className="flex bg-white rounded-2xl border m-10 relative bottom-24 border-[#B4B4B4]">
        {/* FILTER SIDEBAR */}
        <div className="hidden md:block">
          <FiltersSidebar
            onFilterResults={(data) => setFilteredPackages(data)}
          />
        </div>

        {/* RIGHT SIDE */}
        <div className="w-full">
          {/* TITLE */}
          <div className="px-10 mt-5">
            {filteredPackages && filteredPackages.length > 0 ? (
              <h2 className="text-xl font-semibold">
                Showing results for:{" "}
                <span className="text-blue-600">{destination || filters}</span>
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
              packages={
                filteredPackages.length
                  ? filteredPackages.flatMap((pkg) => pkg.Packages || [])
                  : packages.flatMap((pkg) => pkg.Packages || [])
              }
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
