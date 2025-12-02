import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

const CategoryTabs = () => {
  const [activeTab, setActiveTab] = useState("all");

  return (
    <div className="w-full border-y bg-white py-4 px-6 md:px-10">

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-4">

        {/* LEFT TABS */}
        <div className="flex items-center gap-6 text-[13px]">

          {/* ACTIVE TAB */}
          <button
            onClick={() => setActiveTab("all")}
            className={`
              px-5 py-1.5 rounded-full font-medium 
              ${activeTab === "all"
                ? "bg-radial from-[#00AB63] to-[#1B3536] text-white shadow"
                : "text-gray-600 hover:text-black"}
            `}
          >
            All Rings
          </button>

          <button
            onClick={() => setActiveTab("new")}
            className={`hover:text-black ${activeTab === "new" ? "font-semibold" : "text-gray-600"}`}
          >
            New In
          </button>

          <button
            onClick={() => setActiveTab("today")}
            className={`hover:text-black ${activeTab === "today" ? "font-semibold" : "text-gray-600"}`}
          >
            Today’s Specials
          </button>

          <button
            onClick={() => setActiveTab("best")}
            className={`hover:text-black ${activeTab === "best" ? "font-semibold" : "text-gray-600"}`}
          >
            Best Sellers
          </button>
        </div>

        {/* RIGHT FILTERS */}
        <div className="flex items-center gap-6 text-sm text-gray-600">

          {/* Designs in store */}
          <button className="hover:text-black">
            Designs in store
          </button>

          {/* Ready to Ship */}
          <button className="
            px-4 py-1 border border-teal-400 rounded-full
            text-teal-600 font-medium hover:bg-teal-50 transition
          ">
            Ready to Ship
          </button>

          {/* Sort Dropdown */}
          <div className="flex items-center gap-1 cursor-pointer hover:text-black">
            <span>Sort By: Relevance</span>
            <FiChevronDown />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryTabs;
