import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRightLong, FaCheck } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";

export const HolidayCard = ({
  grid = "grid-cols-1 md:grid-cols-3",
  packages = [],
  slug
}) => {
  return (
    <div>
      <div className={`grid gap-8 ${grid}`}>
        {packages?.length > 0 ? (
          packages?.map((pkg, index) => (
            <div
              key={pkg?._id || index}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-all"
            >
              {/* Image */}
              <div className="relative">
                <Image
                  src={pkg?.images?.[0]}
                  alt={pkg?.location}
                  width={400}
                  height={250}
                  className="w-full h-56 object-cover p-3 rounded-4xl"
                />
                <div className="absolute top-5 left-4 text-white text-lg px-3 py-1 rounded-full flex items-center gap-1">
                  <IoLocationOutline className="text-[20px] font-bold" />{" "}
                  {pkg?.location}
                </div>
              </div>

              {/* Content */}
              <div className="px-5">
                <p className="text-gray-500 text-sm">6 Days and 7 Nights</p>

                <h3 className="text-lg font-semibold text-[#2D3748] mt-1 leading-snug">
                  {pkg?.title}
                </h3>

                <ul className="mt-4 text-sm text-gray-600 space-y-1">
                  <li className="flex items-center gap-2">
                    <FaCheck className="text-[#6e9853] font-light" />
                    Guided tour as per Itinerary
                  </li>
                  <li className="flex items-center gap-2">
                    <FaCheck className="text-[#6e9853]" />
                    4-star accommodations and daily breakfast
                  </li>
                  <li className="flex items-center gap-2">
                    <FaCheck className="text-[#6e9853]" />
                    Indian and local cuisine options
                  </li>
                </ul>

                <div className="flex gap-2 mt-6 text-gray-700 text-3xl pb-10">
                  <span>🏨</span>
                  <span>🚗</span>
                  <span>🏍️</span>
                  <span>🎭</span>
                </div>
              </div>

              {/* Footer */}
              <div className="bg-[#1B4965] text-white flex justify-between items-center px-5 py-3 rounded-b-2xl">
                <div className="text-sm">
                  <p className="opacity-70">Starting From</p>
                  <p className="font-semibold">
                    ₹{pkg?.discountPrice || pkg?.price || "N/A"}
                  </p>
                </div>
                <Link href={`/all-packages/${ pkg?._id}`}>
                  <span className="flex cursor-pointer items-center gap-8 bg-[#3FA9F5] px-4 py-1.5 rounded-full hover:bg-[#357ca8] transition">
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
          <p className="text-center col-span-full text-gray-500">
            No packages found.
          </p>
        )}
      </div>
    </div>
  );
};
