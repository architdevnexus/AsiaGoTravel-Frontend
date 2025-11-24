import Image from "next/image";
import React from "react";
import { FaChevronRight } from "react-icons/fa6";

export const PackageProductPage = ({ images , title }) => {
  return (
    <div className="bg-gray-50 p-5 rounded-lg">
      <h2 className="text-xl font-semibold mb-3">
         {title}
      </h2>

      <div className="flex gap-3 overflow-x-auto">
        
        {/* Left Large Image (index 0) */}
        {images[0] && (
          <div className="relative w-[400px] h-[325px] rounded-lg overflow-hidden shrink-0">
            <Image src={images[0]} alt="" fill className="object-cover" />
          </div>
        )}

        {/* Middle two stacked images (index 1 & 2) */}
        <div className="flex flex-col gap-2 shrink-0">
          {[1, 2].map(
            (i) =>
              images[i] && (
                <div
                  key={i}
                  className="relative w-[300px] h-40 rounded-lg overflow-hidden"
                >
                  <Image
                    src={images[i]}
                    alt=""
                    fill
                    className="object-cover"
                  />
                </div>
              )
          )}
        </div>

        {/* Right Large Image (index 3) */}
        {images[3] && (
          <div className="relative w-[400px] h-[325px] rounded-lg overflow-hidden shrink-0">
            <Image src={images[3]} alt="" fill className="object-cover" />
          </div>
        )}

        {/* Next Arrow */}
        <div className="flex items-center justify-center w-10 h-[250px] bg-white rounded-lg shadow cursor-pointer hover:bg-gray-100 transition shrink-0">
          <FaChevronRight className="text-gray-600 text-lg" />
        </div>
      </div>
    </div>
  );
};
