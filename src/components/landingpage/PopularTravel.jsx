"use client";

import Image from "next/image";
import { Button } from "../global/Button";
import { HolidayCard } from "../global/HolidayCard";
import { getAllPackages } from "../services/getAllPackages";
import { useEffect, useState } from "react";

export const PopularPackages = () => {
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPackages();
  }, []);

  const fetchPackages = async () => {
    setLoading(true);

    const res = await getAllPackages();
    const data = res?.data || [];

    // ⭐ FLATTEN Nested Packages Array (same as AllPackageComponent)
    const flattenedPackages = data?.flatMap((pkg) => pkg?.Packages || []);
    console.log(flattenedPackages , 'nfcjd');
    

    // Limit to top 3 for Popular Section
    setPackages(flattenedPackages?.slice(0, 3));

    setLoading(false);
  };

  return (
    <section className="bg-[#f6fafd] py-12 sm:py-16 px-4 sm:px-10">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-10">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Popular Travel Packages
            </h2>
            <p className="text-gray-500 mt-2">
              Discover amazing holiday packages tailored for you.
            </p>
          </div>

          {/* Button (responsive) */}
          <div className="w-full sm:w-auto">
            <Button className="w-full sm:w-auto" />
          </div>
        </div>

        {/* Holiday Cards */}
        <HolidayCard
          grid="grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
          packages={packages}
          loading={loading}
        />
      </div>
    </section>
  );
};
