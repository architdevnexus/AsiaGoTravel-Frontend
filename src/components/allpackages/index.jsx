"use client";
import React, { useEffect, useState } from "react";
import { HeroAllPackage } from "./HeroAllPackage";
import { BestDestinationComponent } from "../landingpage/BestSelling";
import { HolidayCard } from "../global/HolidayCard";
import FiltersSidebar from "../global/FilterSidebar";
import { getAllPackages } from "../services/getAllPackages";


export const AllPackageComponent = ({slug}) => {
  const [packages, setPackages] = useState([]);

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
   <div className="hidden md:block">
  <FiltersSidebar />
</div>

    <div className="p-10 max-sm:p-0">

          {/* Pass API data */}
          <HolidayCard
            grid="grid-cols-1 md:grid-cols-2 gap-9"
            packages={packages}
            slug={slug}
          
          />
        </div>
      </div>

      <BestDestinationComponent />
    </div>
  );
};
