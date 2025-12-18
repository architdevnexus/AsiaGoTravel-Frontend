"use client";
import React, { useState } from "react";
import { FaWhatsapp, FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { SendQueryModal } from "./SendQueryModal";
import { ItineraryCard } from "./ItenaryCard";

const OverviewSection = ({ overviewData }) => {
  console.log(overviewData, "overview");

  const [activeTab, setActiveTab] = useState("Summary");
  const [isOpen, setIsOpen] = useState(false);

  // ✅ FIXED DESTRUCTURING
  const {
    title,
    overview,
    priceDetails = {},
    overviewCategory = [],
  } = overviewData || {};

  // ✅ PULL DATA FROM overviewCategory[0]
  const inclusions = overviewCategory?.[0]?.inclusions || [];
  const itinerary = overviewCategory?.[0]?.itinerary || [];
  const summary = overviewCategory?.[0]?.summary || [];

  const exclusions = overviewCategory?.[0]?.exclusions || [];
  const images = overviewCategory?.[0]?.images || [];

  const tabs = ["Itinerary", "Inclusions", "Exclusions", "Summary"];

  return (
    <section className="w-full bg-white py-10 px-5 md:px-16">
      <div className="grid md:grid-cols-3 gap-8">
        {/* LEFT CONTENT */}
        <div className="md:col-span-2">
          <h2 className="text-2xl font-bold text-[#1B4965] mb-2">
            OVERVIEW !
          </h2>

          <p className="text-gray-700 leading-relaxed mb-5">
            {overview ||
              "Experience the beauty of this destination with our curated travel package."}
          </p>

          {/* TABS */}
          <div className="flex border-b mb-4 text-sm font-medium text-gray-600">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 border-b-2 transition-all ${
                  activeTab === tab
                    ? "border-[#1B4965] text-white bg-[#1B4965] font-semibold rounded-lg mb-2"
                    : "border-transparent hover:text-[#1B4965]"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* ITINERARY TAB */}
          {activeTab === "Itinerary" && (
            <div className="bg-white">
              {itinerary.length > 0 ? (
                itinerary.map((day, index) => (
                  <ItineraryCard key={index} day={day} index={index} />
                ))
              ) : (
                <p className="text-gray-500">No itinerary available.</p>
              )}
            </div>
          )}

          {/* INCLUSIONS TAB */}
          {activeTab === "Inclusions" && (
            <div className="bg-green-50 border border-green-300 rounded-md p-5">
              {inclusions.length > 0 ? (
                <ul className="space-y-3 text-gray-700">
                  {inclusions.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <FaCheckCircle className="text-green-600 mt-1" /> {item}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-500">No inclusions available.</p>
              )}
            </div>
          )}

          {/* EXCLUSIONS TAB */}
          {activeTab === "Exclusions" && (
            <div className="bg-red-50 border border-red-200 rounded-md p-5">
              {exclusions.length > 0 ? (
                <ul className="space-y-3 text-gray-700">
                  {exclusions.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <FaTimesCircle className="text-red-500 mt-1" /> {item}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-500">No exclusions available.</p>
              )}
            </div>
          )}

          {/* SUMMARY TAB */}
          {activeTab === "Summary" && (
            <ul className="list-disc list-outside space-y-2 pl-5 text-gray-700">
              {summary.length > 0 ? (
                summary.map((item, i) => <li key={i}>{item}</li>)
              ) : (
                <p className="text-gray-500">No summary available.</p>
              )}
            </ul>
          )}
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="bg-white shadow-md rounded-lg p-5 h-fit border border-gray-100">
          <div className="mb-5">
            <h3 className="text-gray-800 font-semibold">Starting From</h3>

     <p className="text-3xl font-bold text-gray-900 mt-2">
  {Number(priceDetails?.[0]?.discountedPrice) > 0
    ? `₹ ${priceDetails[0].discountedPrice}`
    : "As per request"}
  <span className="text-base font-normal text-gray-500 block">
    Per Person on Triple Sharing Occupancy
  </span>
</p>

            <button
              onClick={() => setIsOpen(true)}
              className="mt-4 w-full bg-[#3FA9F5] text-white py-2 rounded-md transition hover:bg-[#3291d8]"
            >
              Send Query Here
            </button>
          </div>

          <div className="border-t pt-4">
            <h4 className="font-semibold text-gray-800 mb-3">Price Summary</h4>

            <div className="flex items-center gap-2 mb-3">
              {priceDetails?.options?.map((option, i) => (
                <button
                  key={i}
                  className={`px-3 py-1 rounded-md border text-sm font-medium ${
                    option.active
                      ? "border-[#3FA9F5] bg-[#3FA9F5] text-white"
                      : "border-gray-300 text-gray-600"
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>

            <p className="text-lg font-bold text-gray-900 mb-2">
              ₹ {priceDetails[0]?.discountedPrice || "As per request"}{" "}
              <span className="text-sm text-gray-500 font-normal">
                Per Person
              </span>
            </p>
            <a
              href="https://wa.me/919119119641"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full border border-[#3FA9F5] text-green-600 py-2 rounded-md hover:bg-green-50 transition"
            >
              <FaWhatsapp /> Whatsapp
            </a>
          </div>
        </div>
      </div>

      {/* MODAL */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-[#000000]/30 backdrop-blur-xs z-50">
          <div className="bg-white w-full max-w-xl max-h-145 rounded-lg px-6 pb-6 shadow-lg relative">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-3 text-gray-500 hover:text-gray-700 text-xl"
            >
              &times;
            </button>

            <SendQueryModal title={overviewData?.title} />
          </div>
        </div>
      )}
    </section>
  );
};

export default OverviewSection;
