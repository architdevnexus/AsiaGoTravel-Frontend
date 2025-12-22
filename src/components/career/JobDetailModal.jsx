import React from "react";
import { IoClose } from "react-icons/io5";

export const JobDetailModal = ({ job, onClose }) => {
  if (!job) return null;

  return (
    <div className="fixed inset-0 backdrop-blur-sm bg-white/10 flex items-center justify-center p-4 z-50">
      <div className="bg-white w-full max-w-lg rounded-2xl p-6 shadow-xl relative">

        {/* Close Button */}
        <button
          className="absolute top-3 right-3 text-gray-600 hover:text-black"
          onClick={onClose}
        >
          <IoClose size={28} />
        </button>
        {/* <p><span className="font-semibold">Job ID:</span> {job._id}</p>  */}

        {/* Employment Type Badge */}
        <div className="inline-block px-3 py-1.5 mt-3 text-sm bg-gray-100 text-gray-600 rounded-full mb-3">
          {Array.isArray(job?.employmentTypes)
            ? job.employmentTypes
              .map(type => type.charAt(0).toUpperCase() + type.slice(1))
              .join(", ")
            : job?.employmentTypes
              ? job.employmentTypes.charAt(0).toUpperCase() + job.employmentTypes.slice(1)
              : ""
          }
        </div>


        {/* Title */}

        <h2 className="text-2xl font-semibold mb-3">
          {job.title.charAt(0).toUpperCase() + job.title.slice(1)}
        </h2>


        {/* Description */}
        <p className="text-gray-500 font-semibold mb-2">
          Job Description
        </p>
        <p className="text-gray-600 whitespace-pre-line mb-5">

          {job.description}
        </p>

        {/* EXTRA DETAILS */}
        <div className="space-y-2 text-sm text-gray-700 mb-6">



          <p>
            <span className={`font-semibold ${job.isActive ? "text-green-500" : "text-red-500"}`}>
              {job.isActive ? "Active" : "Inactive"}
            </span>
          </p>


          <p>
            <span className="font-semibold">Posted On:</span>{" "}
            {new Date(job.createdAt).toLocaleDateString()}
          </p>

          {/* <p>
  <span className="font-semibold">Updated At:</span>{" "}
  {new Date(job.updatedAt).toLocaleDateString()}
</p> */}

        </div>

          {/* <button
            onClick={() => {
              onClose();

              setTimeout(() => {
                document
                  .getElementById("apply-form")
                  ?.scrollIntoView({ behavior: "smooth" });
              }, 100);
            }}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg w-full"
          >
            Apply Now
          </button> */}


      </div>
    </div>
  );
};
