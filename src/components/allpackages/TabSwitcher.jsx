"use client";

export default function TabSwitcher({ activeTab, setActiveTab }) {
  const btnClasses = (tab) =>
    `px-4 py-2 rounded-lg font-medium ${
      activeTab === tab ? "bg-[#1B4965] text-white" : "bg-gray-200 text-black"
    }`;

  return (
    <div className="px-10 mt-8 flex gap-4 border-b pb-4">
      
      {/* ALL */}
      {/* <button
        onClick={() => setActiveTab("all")}
        className={btnClasses("all")}
      >
        All
      </button> */}

      {/* DOMESTIC */}
      <button
        onClick={() => setActiveTab("domestic")}
        className={btnClasses("domestic")}
      >
        Domestic
      </button>

      {/* INTERNATIONAL */}
      <button
        onClick={() => setActiveTab("international")}
        className={btnClasses("international")}
      >
        International
      </button>
    </div>
  );
}
