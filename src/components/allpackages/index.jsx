"use client";

import React, { useState } from "react";
import FiltersSidebar from "../global/FilterSidebar";
import { BestDestinationComponent } from "../landingpage/BestSelling";
import useQueryParams from "../services/useQueryParams";
import TabSwitcher from "./TabSwitcher";
import PackageList from "./PackageList";
import usePackageFilters from "../services/usePackageFilters";


export const AllPackageComponent = ({ slug }) => {
  const [activeTab, setActiveTab] = useState("all");

  // Read Params
  const { destination, filters } = useQueryParams();

  // Handle Filters
  const {
    filteredPackages,
    loading,
    setFilteredPackages,
  } = usePackageFilters(destination, filters, activeTab);

  const handleFilteredResults = (data) => {
    setFilteredPackages(data);
  };

  return (
    <div>
      <div className="flex bg-white rounded-2xl border m-4 md:m-10 lg:m-10 relative bottom-24 border-[#B4B4B4]">

        {/* Sidebar */}
        {/* Sidebar */}
        <aside className="hidden md:block">
          <div className="sticky top-0 ">
            <div className="max-h-[calc(120vh-6rem)] overflow-y-auto pr-2">
              <FiltersSidebar onFilterResults={handleFilteredResults} />
            </div>
          </div>
        </aside>


        {/* Right Side Content */}
        <div className="w-full">
          <TabSwitcher activeTab={activeTab} setActiveTab={setActiveTab} />

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

          <PackageList
            filteredPackages={filteredPackages}
            slug={slug}
            loading={loading}
          />
        </div>
      </div>

      <BestDestinationComponent />
    </div>
  );
};
