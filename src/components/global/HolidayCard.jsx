"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRightLong, FaCheck } from "react-icons/fa6";

export const HolidayCard = ({
  grid = "grid-cols-1 md:grid-cols-3",
  packages = [],
  loading = false,
}) => {
  const LoaderSpinner = () => (
    <div className="flex justify-center items-center py-20 col-span-full">
      <div className="w-12 h-12 border-4 border-[#1B4965] border-t-transparent rounded-full animate-spin"></div>
    </div>
  );

  return (
    <div>
      <div className={`grid gap-8 ${grid}`}>
        {loading && <LoaderSpinner />}

        {!loading && packages?.length > 0 ? (
          packages?.map((pkg, index) => (
            <div
              key={pkg?._id || index}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-all flex flex-col h-full"
            >
              {/* Image */}
              <div className="relative">
                {pkg?.overviewCategory?.[0]?.images?.[0] ? (
                  <Image
                    src={pkg?.overviewCategory[0]?.images[0]?.url}
                    alt={pkg?.location || "Package image"}
                    width={400}
                    height={250}
                    className="w-full h-56 object-cover p-3 rounded-2xl"
                  />
                ) : (
                  <div className="w-full h-56 bg-gray-200 rounded-2xl flex items-center justify-center">
                    <span>No Image Found</span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="px-5 flex flex-col flex-grow pb-4">
                <p className="text-gray-500 text-sm">
                  {pkg?.tripDuration?.days} Days & {pkg?.tripDuration?.nights} Nights
                </p>

                <h3 className="text-lg font-semibold text-[#2D3748] mt-1 leading-snug">
                  {pkg?.title}
                </h3>

                {/* Features */}
                <ul className="mt-4 text-sm text-gray-600 space-y-1">
                  {pkg?.features?.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <FaCheck className="text-[#6e9853]" />
                      {item}
                    </li>
                  ))}
                </ul>
                  
                {/* Icons */}
                <div className="flex gap-3 mt-6 text-gray-700 text-3xl">
                  {pkg?.icons?.map((icon, idx) => (
                    <Image
                      key={idx}
                      src={icon?.url || "No icon"}
                      width={32}
                      height={32}
                      alt={icon?.name}
                      className="w-8 h-8"
                    />
                  ))}
                </div>

                {/* Push footer down */}
                <div className="mt-auto"></div>
              </div>

              {/* Footer (Fixed at bottom) */}
              <div className="bg-[#1B4965] text-white flex justify-between items-center px-5 py-3 rounded-b-2xl">
                <div className="text-sm">
                  <p className="opacity-70">Starting From</p>
                  <p className="font-semibold">
                    ₹{pkg?.priceDetails?.[0]?.originalPrice || "N/A"}
                  </p>
                </div>

                <Link href={`/all-packages/${pkg?._id}`}>
                  <span className="flex cursor-pointer items-center gap-4 bg-[#3FA9F5] px-4 py-1.5 rounded-full hover:bg-[#357ca8] transition">
                    Explore
                    <div className="w-8 rounded-full bg-white p-2 text-black">
                      <FaArrowRightLong />
                    </div>
                  </span>
                </Link>
              </div>
            </div>
          ))
        ) : (
          !loading && (
            <p className="text-center col-span-full text-gray-500">
              No packages found.
            </p>
          )
        )}
      </div>
    </div>
  );
};
