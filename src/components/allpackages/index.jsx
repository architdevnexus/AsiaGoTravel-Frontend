"use client";
import React, { useEffect, useState } from "react";
import { HeroAllPackage } from "./HeroAllPackage";
import { BestDestinationComponent } from "../landingpage/BestSelling";
import { HolidayCard } from "../global/HolidayCard";
import FiltersSidebar from "../global/FilterSidebar";
import { getAllPackages } from "../services/getAllPackages";

export const AllPackageComponent = ({ slug }) => {
  const [packages, setPackages] = useState([]);       // DEFAULT LIST
  const [filteredPackages, setFilteredPackages] = useState(null); // FILTERED LIST

  useEffect(() => {
    fetchPackages();
  }, []);

  const fetchPackages = async () => {
    const res = await getAllPackages();
    setPackages(res?.data || []);
  };

  return (
    <div>
      <HeroAllPackage />

      <div className="flex bg-white rounded-2xl border m-10 relative bottom-24 border-[#B4B4B4]">
        
        {/* FILTER SIDEBAR */}
        <div className="hidden md:block">
          <FiltersSidebar
            onFilterResults={(data) => setFilteredPackages(data)}
          />
        </div>

        {/* PACKAGE CARDS */}
        <div className="p-10 max-sm:p-0">
          <HolidayCard
            grid="grid-cols-1 md:grid-cols-2 gap-9"
            packages={filteredPackages || packages}
            slug={slug}
          />
        </div>

      </div>

      <BestDestinationComponent />
    </div>
  );
};
