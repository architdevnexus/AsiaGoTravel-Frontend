"use client";
import React from "react";

export const JoinOurTeamForm = () => {
  return (
    <div className="w-[340px] h-fit bg-white shadow-xl rounded-3xl overflow-hidden border border-gray-200 my-20">
      
      {/* Header */}
      <div className="bg-[#0B3C59] text-white text-center py-4 text-lg font-semibold">
        Join Our Team
      </div>

      {/* Form */}
      <form className="p-6 space-y-2">
        
        {/* Name */}
        <div>
          <label className="text-sm text-gray-600">Name</label>
          <input
            type="text"
            className="mt-1 w-full px-4 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-300 outline-none"
            placeholder="Enter your name"
          />
        </div>

        {/* Email */}
        <div>
          <label className="text-sm text-gray-600">Email</label>
          <input
            type="email"
            className="mt-1 w-full px-4 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-300 outline-none"
            placeholder="Enter your email"
          />
        </div>

        {/* Position */}
        <div>
          <label className="text-sm text-gray-600">Position</label>
          <input
            type="text"
            className="mt-1 w-full px-4 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-300 outline-none"
            placeholder="Position you are applying for"
          />
        </div>

        {/* Upload CV */}
        <div>
          <label className="text-sm text-gray-600">Upload CV</label>
          <input
            type="file"
            className="mt-1 w-full px-3 py-[10px] bg-white rounded-xl border border-gray-300 cursor-pointer"
          />
        </div>

        {/* Message */}
        <div>
          <label className="text-sm text-gray-600">Message</label>
          <textarea
            rows="3"
            className="mt-1 w-full px-4 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-300 outline-none"
            placeholder="Write your message..."
          ></textarea>
        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full bg-[#0B3C59] text-white py-3 rounded-xl font-medium hover:bg-[#093348] transition"
        >
          Send Application
        </button>
      </form>
    </div>
  );
};
