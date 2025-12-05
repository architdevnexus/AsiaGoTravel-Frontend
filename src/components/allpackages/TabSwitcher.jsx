"use client";

export default function TabSwitcher({ activeTab, setActiveTab }) {
  const btnClasses = (tab) =>
    `whitespace-nowrap px-4 py-2 md:px-6 md:py-2.5 rounded-lg font-medium transition-all
     ${activeTab === tab ? "bg-[#1B4965] text-white" : "bg-gray-200 text-black"}`;

  return (
    <div
      className="
        px-4 md:px-10 mt-6 
        flex gap-3 md:gap-4 
        border-b pb-4 
        overflow-x-auto 
        scrollbar-none           /* 🚀 Hide scrollbar without global CSS */
      "
    >
      <button onClick={() => setActiveTab("all")} className={btnClasses("all")}>
        All
      </button>

      <button
        onClick={() => setActiveTab("domestic")}
        className={btnClasses("domestic")}
      >
        Domestic
      </button>

      <button
        onClick={() => setActiveTab("international")}
        className={btnClasses("international")}
      >
        International
      </button>
    </div>
  );
}
