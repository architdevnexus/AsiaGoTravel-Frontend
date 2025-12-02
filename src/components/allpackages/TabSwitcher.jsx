"use client";
export default function TabSwitcher({ activeTab, setActiveTab }) {
  return (
    <div className="px-10 mt-8 flex gap-4 border-b pb-4">
      <button
        onClick={() => setActiveTab("domestic")}
        className={`px-4 py-2 rounded-lg font-medium ${
          activeTab === "domestic"
            ? "bg-[#1B4965] text-white"
            : "bg-gray-200 text-black"
        }`}
      >
        Domestic
      </button>

      <button
        onClick={() => setActiveTab("international")}
        className={`px-4 py-2 rounded-lg font-medium ${
          activeTab === "international"
            ? "bg-[#1B4965] text-white"
            : "bg-gray-200 text-black"
        }`}
      >
        International
      </button>
    </div>
  );
}
