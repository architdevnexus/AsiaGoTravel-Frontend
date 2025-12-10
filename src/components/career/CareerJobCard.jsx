import React from "react";
import { FaArrowRight, FaLongArrowAltRight } from "react-icons/fa";

export const CareerJobCard = ({ job }) => {
  return (
    <div className="w-[300px] bg-white rounded-2xl px-6 py-10 border  shadow-md border-blue-400 transition space-y-3">
      
      {/* Badge */}
      <div className="inline-block px-3 py-1 text-xs bg-gray-100 text-gray-600 rounded-full mb-3">
        {job.type}
      </div>

      {/* Title */}
      <h2 className="text-xl font-semibold text-gray-800 mb-2">
        {job.title}
      </h2>

      {/* Description */}
      <p className="text-sm text-gray-500 mb-5">
        {job.description}
      </p>

      {/* Button */}
      <button className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-full text-sm transition">
        Apply Now
       

        <FaLongArrowAltRight size={14} />
      </button>
    </div>
  );
};
