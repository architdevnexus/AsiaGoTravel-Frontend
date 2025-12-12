import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

export const CareerJobCard = ({ job, onOpen }) => {
  return (
    <div
      onClick={onOpen}  // ⭐ only added this
      className="
        w-[300px] 
        bg-white rounded-2xl px-6 py-10 
        border shadow-md border-blue-400 
        transition space-y-3 
        overflow-hidden cursor-pointer
        sm:max-w-full 
      "
    >
      <div className="inline-block px-3 py-1 text-xs bg-gray-100 text-gray-600 rounded-full mb-3">
        {Array.isArray(job?.employmentTypes)
          ? job.employmentTypes.join(", ")
          : job?.employmentTypes}
      </div>

      <h2 className="text-xl font-semibold text-gray-800 mb-2 break-words">
        {job?.title}
      </h2>

      <p className="text-sm text-gray-500 mb-5 break-words line-clamp-5">
        {job?.description}
      </p>

      <button
        onClick={onOpen} // ⭐ added
        className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-full text-sm transition"
      >
        Apply Now
        <FaLongArrowAltRight size={14} />
      </button>
    </div>
  );
};
