import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

export const Button = () => {
  return (
    <div className="py-3 px-4 rounded-full shadow-md shadow-current bg-[#1B4965] w-50 ">
      <div className="flex justify-between items-center ">
        <a href="/all-packages" className="text-white text-[18px] font-normal">
          Explore More
        </a>
       <a href="/all-packages" className="rounded-full bg-white p-2 w-10 ">
          <FaArrowRightLong className="w-6" />
        </a>
      </div>
    </div>
  );
};
