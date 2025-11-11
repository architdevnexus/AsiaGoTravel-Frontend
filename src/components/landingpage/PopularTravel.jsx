"use client";
import Image from "next/image";
import { FaCheck } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { Button } from "../global/Button";
import { FaArrowRightLong } from "react-icons/fa6";
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
    setPackages(res?.data || []); // adjust based on API structure
  };

  return (
    <section className="bg-[#f6fafd] py-16 px-4 sm:px-10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-10">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Popular Travel Packages
            </h2>
            <p className="text-gray-500 mt-2">
              Discover amazing holiday packages tailored for you.
            </p>
          </div>
          {/* <button className="flex items-center gap-2 bg-[#1B4965] text-white px-4 py-2 rounded-full hover:bg-[#163d57] transition">
            Discover More <FaArrowRight className="bg-white text-black rounded-full p-4" />
          </button> */}
          <Button />
        </div>
        {/* <HolidayCard grid="grid-cols-1 md:grid-cols-3"  /> */}

        <HolidayCard
          grid="grid-cols-1 md:grid-cols-3"
          packages={packages?.slice(0, 3)} // ✅ Only 3 items
        />
      </div>
    </section>
  );
};
