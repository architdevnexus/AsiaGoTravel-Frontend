"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRightLong, FaCheck } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";

export const HolidayCard = ({
  grid = "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
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
      <div className={`grid gap-6 lg:gap-8 ${grid}`}>
        {loading && <LoaderSpinner />}

        {!loading && packages?.length > 0 ? (
          packages.map((pkg, index) => (
            <div
              key={pkg?._id || index}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-all flex flex-col h-full"
            >
              {/* IMAGE */}
              <div className="relative">
                {/* Location Badge */}
                <div className="absolute top-4 lg:top-6 left-4 lg:left-5 group">
                  <div
                    className="text-white text-sm lg:text-md px-3 py-1 rounded-full flex items-center gap-1 
                 bg-black/40 backdrop-blur-sm cursor-pointer"
                  >
                    <IoLocationOutline className="text-[18px] lg:text-[20px] shrink-0" />
                    <span>
                      {pkg?.location?.split(" ").slice(0, 5).join(" ")}
                      {pkg?.location?.split(" ").length > 7 && " ..."}
                    </span>
                  </div>

                  {/* Tooltip (desktop only – show on hover) */}
                  {pkg?.location && (
                    <div
                      className="hidden lg:block absolute left-0 top-full mt-2 z-50
                   bg-black text-white text-sm px-3 py-2 rounded-md
                   max-w-xs shadow-lg whitespace-normal
                   opacity-0 invisible
                   group-hover:opacity-100 group-hover:visible
                   transition-all duration-200"
                    >
                      {pkg.location}
                    </div>
                  )}
                </div>



                {/* Image */}
                {pkg?.overviewCategory?.[0]?.images?.[0] ? (
                  <Image
                    src={pkg.overviewCategory[0].images[0].url}
                    alt={pkg?.location || "Package image"}
                    width={400}
                    height={250}
                    className="w-full h-48 sm:h-52 lg:h-56 object-cover p-3 rounded-2xl"
                  />
                ) : (
                  <div className="w-full h-48 sm:h-52 lg:h-56 bg-gray-200 rounded-2xl flex items-center justify-center">
                    <span>No Image Found</span>
                  </div>
                )}
              </div>

              {/* CONTENT */}
              <div className="px-4 lg:px-5 flex flex-col flex-grow pb-4">
                <p className="text-gray-500 text-xs sm:text-sm">
                  {pkg?.tripDuration?.days} Days & {pkg?.tripDuration?.nights} Nights
                </p>

                <h3 className="text-base sm:text-lg font-semibold text-[#2D3748] mt-1 leading-snug line-clamp-2">
                  {pkg?.title}
                </h3>

                {/* FEATURES */}
                <ul className="mt-3 lg:mt-4 text-sm text-gray-600 space-y-1">
                  {pkg?.features?.slice(0, 4).map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <FaCheck className="text-[#6e9853] mt-0.5" />
                      <span className="line-clamp-1">{item}</span>
                    </li>
                  ))}
                </ul>

             {/* ICONS (stick to bottom) */}
<div className="flex gap-4 lg:gap-5 mt-auto pt-5 lg:pt-6 text-gray-700">
  {(pkg?.icons && pkg.icons.length > 0
    ? pkg.icons
    : [
        { url: "/img/Group1.svg", name: "Hotel" },
        { url: "/img/Group2.svg", name: "Flight" },
        { url: "/img/Group3.svg", name: "Meal" },
        { url: "/img/Group4.svg", name: "Transfer" },
      ]
  ).map((icon, idx) => (
    <Image
      key={idx}
      src={icon.url}
      width={32}
      height={32}
      alt={icon.name}
      className="w-7 h-7 lg:w-8 lg:h-8"
    />
  ))}
</div>


                <div className="mt-auto" />
              </div>

              {/* FOOTER */}
              <div className="bg-[#1B4965] text-white flex justify-between items-center px-4 lg:px-5 py-3 rounded-b-2xl">
                <div className="text-xs sm:text-sm">
                  <p className="opacity-70">Starting From</p>
                  <p className="font-semibold">
                    {pkg?.priceDetails?.[0]?.originalPrice > 0
                      ? `₹${pkg.priceDetails[0].originalPrice}`
                      : "As per Request"}
                  </p>
                </div>

                <Link href={`/all-packages/${pkg?._id}`}>
                  <span className="flex items-center gap-3 bg-[#3FA9F5] px-3 sm:px-4 py-1.5 rounded-full hover:bg-[#357ca8] transition text-sm">
                    Explore
                    <div className="w-7 h-7 lg:w-8 lg:h-8 rounded-full bg-white p-2 text-black flex items-center justify-center">
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
