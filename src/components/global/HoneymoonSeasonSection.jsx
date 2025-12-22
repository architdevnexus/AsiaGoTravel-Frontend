"use client";

import { useState } from "react";
import Image from "next/image";

export default function HoneymoonSeasonSection({
  destinationData,
  seasonsConfig,
  title = "Best Honeymoon Destinations",
}) {
  const [activeTab, setActiveTab] = useState("domestic");
  const [activeSeason, setActiveSeason] = useState("summer");

  /* Remove monsoon for international */
  const seasons =
    activeTab === "international"
      ? seasonsConfig.filter((s) => s.key !== "monsoon")
      : seasonsConfig;

  /* Ensure active season is valid */
  if (activeTab === "international" && activeSeason === "monsoon") {
    setActiveSeason("summer");
  }

  const destinations =
    destinationData?.[activeTab]?.[activeSeason] || [];

  return (
    <section className="bg-[#F7FAFC] py-16 px-5">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <h2 className="text-3xl font-semibold text-gray-900">
            {title} <span className="font-normal">(Season Wise)</span>
          </h2>

          {/* Tabs */}
          <div className="flex bg-white rounded-full p-1 shadow-sm w-fit">
            {["domestic", "international"].map((tab) => (
              <button
                key={tab}
                onClick={() => {
                  setActiveTab(tab);
                  setActiveSeason("summer");
                }}
                className={`px-5 py-2 rounded-full text-sm font-medium transition ${
                  activeTab === tab
                    ? "bg-[#1B4965] text-white"
                    : "text-gray-700"
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Seasons */}
        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {seasons.map((season) => (
            <button
              key={season.key}
              onClick={() => setActiveSeason(season.key)}
              className={`relative rounded-xl p-6 text-left transition ${
                activeSeason === season.key
                  ? "bg-[#4DA3F7] text-white shadow-lg"
                  : "bg-[#EAF4FF] text-gray-900"
              }`}
            >
              <h3 className="font-semibold text-lg">{season.title}</h3>
              <p className="text-sm mt-1 font-medium">{season.period}</p>
              <p
                className={`text-sm mt-3 ${
                  activeSeason === season.key
                    ? "text-white/90"
                    : "text-gray-600"
                }`}
              >
                {season.desc}
              </p>

              {activeSeason === season.key && (
                <div className="absolute left-1/2 -bottom-4 -translate-x-1/2 w-0 h-0 border-l-[12px] border-r-[12px] border-t-[16px] border-l-transparent border-r-transparent border-t-[#4DA3F7]" />
              )}
            </button>
          ))}
        </div>

        {/* Destination Cards */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mt-14">
          {destinations.map((item, idx) => (
            <div
              key={idx}
              className={`relative rounded-2xl overflow-hidden h-[320px] group
                ${item.featured ? "col-span-2 md:col-span-1" : ""}
              `}
            >
              <Image
                src={item.image}
                alt={item.title || "Destination"}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition duration-300" />

              {(item.title || item.points) && (
                <div className="absolute inset-0 p-5 flex flex-col justify-end text-white
                                opacity-0 group-hover:opacity-100 transition duration-300">
                  {item.title && (
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                  )}

                  {item.points && (
                    <ul className="text-sm mt-3 space-y-1">
                      {item.points.map((p, i) => (
                        <li key={i}>• {p}</li>
                      ))}
                    </ul>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
