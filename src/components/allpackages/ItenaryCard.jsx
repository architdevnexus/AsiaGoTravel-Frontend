import { useState, useRef, useEffect } from "react";

export const ItineraryCard = ({ day, index }) => {
  const [open, setOpen] = useState(false);
  const contentRef = useRef(null);
  const [height, setHeight] = useState("0px");

  useEffect(() => {
    if (open) {
      setHeight(`${contentRef.current.scrollHeight}px`);
    } else {
      setHeight("0px");
    }
  }, [open]);

  return (
    <div className="border-[#D4D4D4] rounded-xl shadow-sm mb-4 overflow-hidden bg-white transition hover:shadow-md">
      {/* HEADER */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4"
      >
        {/* Left Section */}
        <div className="flex items-center gap-4">
          {/* Day Badge */}
          <div className="bg-[#1B4965] text-white px-4 py-1.5 rounded-xl text-sm font-semibold shadow">
            Day {index + 1}
          </div>

          {/* Title */}
          <p className="text-gray-800 font-medium text-base">{day.title}</p>
        </div>

        {/* Chevron Icon */}
        <svg
          className={`w-6 h-6 text-gray-600 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {/* Divider */}
      {open && (
        <div className="h-[0.5px] bg-[#A0A0A0] mx-5 rounded-full transition-all duration-300"></div>
      )}

      {/* CONTENT WITH SMOOTH HEIGHT ANIMATION */}
      <div
        ref={contentRef}
        style={{ maxHeight: height }}
        className={`transition-all duration-500 ease-in-out overflow-hidden 
        ${open ? "opacity-100" : "opacity-0"} 
        ${open ? "scale-y-100" : "scale-y-95"}`}
      >
        <div className="px-7 py-4">
          {day.description && (
            <ul className="space-y-2 text-gray-700 list-disc pl-5 leading-relaxed">
              {day.description.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};
