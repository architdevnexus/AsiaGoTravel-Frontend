"use client";
import Image from "next/image";
import { Button } from "../global/Button";
import { HolidayCard } from "../global/HolidayCard";
import { getAllPackages } from "../services/getAllPackages";
import { useEffect, useState } from "react";

export const PopularPackages = () => {
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    fetchPackages();
  }, []);

  const fetchPackages = async () => {
    const res = await getAllPackages();
    setPackages(res?.data || []);
  };

  return (
    <section className="bg-[#f6fafd] py-12 sm:py-16 px-4 sm:px-10">
      <div className="max-w-7xl mx-auto">

        {/* ✅ Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-10">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Popular Travel Packages
            </h2>
            <p className="text-gray-500 mt-2">
              Discover amazing holiday packages tailored for you.
            </p>
          </div>

          {/* ✅ Button moves down on mobile only */}
          <div className="w-full sm:w-auto">
            <Button className="w-full sm:w-auto" />
          </div>
        </div>

        {/* ✅ Cards → 1 column mobile, 3 for desktop (unchanged) */}
        <HolidayCard
          grid="grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
          packages={packages?.slice(0, 3)}
        />
      </div>
    </section>
  );
};
